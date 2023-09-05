
import { CONFIG } from '$lib/config';
import { c32address, c32addressDecode } from 'c32check';
import { sbtcConfig } from '$stores/stores'
import { fetchSbtcData, fetchUserBalances } from '$lib/bridge_api'
import type { SbtcConfig } from '$types/sbtc_config';
import { StacksTestnet, StacksMainnet, StacksMocknet } from '@stacks/network';
import { openSignatureRequestPopup, type StacksProvider } from '@stacks/connect';import { AppConfig, UserSession, showConnect, getStacksProvider } from '@stacks/connect';
import type { AddressObject, SbtcContractDataI } from 'sbtc-bridge-lib' 
import { verifyMessageSignature } from '@stacks/encryption';
import { defaultSbtcConfig } from '$lib/sbtc';
import { fetchExchangeRates } from "$lib/bridge_api"
import { hex } from '@scure/base';
import type { ExchangeRate } from 'sbtc-bridge-lib';
import { schnorr } from '@noble/curves/secp256k1';
import * as btc from '@scure/btc-signer';
import { AddressPurposes, getAddress } from 'sats-connect'
import type { GetAddressOptions } from 'sats-connect'

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig }); // we will use this export from other files

export const webWalletNeeded = false;
export const minimumDeposit = 10000
export const revealPayment = 10001

const allowed = [
	{ btc: '2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb', stx: 'SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRCBGD7R'}, // devnet testing
	{ btc: '2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb', stx: 'SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F'}, // mike 1
	{ btc: 'bc1qfdxax8gr9lufdf4j5wzkhelczr804n89ze2rfa', stx: 'SP3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSQP2HGT6'}, // mike 2
	{ btc: '1EJboSZVgPNrKCVmhmkV2rjLW4KN2Urti', stx: 'SP1ACWJC0TMD9F3Q3FJQFDWV9GSSTXN8RY31HR10B'}, // igor
	{ btc: '1FFaqXGJPNvU28QhsCz9gsRatc1C55V33e', stx: 'SP2E57N3DDG0CSF6XYWABZ1E7QBF8CTKJ4J1PHP0V'}, // jude
	{ btc: 'bc1q8j0gh8754jd9jerlxvpvxx4kc82e4u7f8ynnvp', stx: 'SP1R3S5RB1FSKCGQGW16ZHHPK6FAN57EAQ3RD7HP9'}, // marten
]
	
export function isAllowed(address:string) {
	return allowed.find((o) => o.stx === address);
}

export function getStacksNetwork() {
	const network = CONFIG.VITE_NETWORK;
	let stxNetwork:StacksMainnet|StacksTestnet;
	if (CONFIG.VITE_ENVIRONMENT === 'simnet') stxNetwork = new StacksMocknet();
	if (network === 'testnet') stxNetwork = new StacksTestnet();
	else if (network === 'mainnet') stxNetwork = new StacksMainnet();
	else stxNetwork = new StacksMocknet();
	return stxNetwork;
}

export function decodeStacksAddress(stxAddress:string) {
	if (!stxAddress) throw new Error('Needs a stacks address');
	const decoded = c32addressDecode(stxAddress)
	return decoded
}
  
export function encodeStacksAddress (network:string, b160Address:string) {
	let version = 26
	if (network === 'mainnet') version = 22
	const address = c32address(version, b160Address) // 22 for mainnet
	return address
}

export async function fetchSbtcBalance (conf:SbtcConfig, fromLogin:boolean|undefined) {
	const localKs = conf.keySets[CONFIG.VITE_NETWORK];
	//const sessionStacks = getStacksAddress(); // check not switching accounts
	if (!fromLogin && localKs	&& localKs.stxAddress && localKs.cardinal) { // && sessionStacks === localKs.stxAddress) {
		conf.keySets[CONFIG.VITE_NETWORK] = await getBalances(localKs)
		sbtcConfig.update(() => conf);
		return conf;
	} else {
		addresses(async function(addr:AddressObject) {
			if (addr) {
				conf.keySets[CONFIG.VITE_NETWORK] = await getBalances(addr)
				sbtcConfig.update(() => conf);
				return conf;
			}
		});
	}
}
async function getBalances(addressObject:AddressObject):Promise<AddressObject> {
	let result:AddressObject;
	const tempSegwit0 = addressObject.btcPubkeySegwit0
	const tempSegwit1 = addressObject.btcPubkeySegwit1
	try {
		result = await fetchUserBalances(addressObject);
		try {
			result.sBTCBalance = Number(result.stacksTokenInfo?.fungible_tokens[CONFIG.VITE_SBTC_CONTRACT_ID + '::sbtc'].balance)
		} catch (err) {
			// for testing..
			try { result.sBTCBalance = Number(result.stacksTokenInfo?.fungible_tokens['ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant::sbtc'].balance) }
			catch (err) { result.sBTCBalance = 0 }
		}
	} catch(err) {
		result = addressObject;
		console.log('Network down...');
	}
	result.btcPubkeySegwit0 = tempSegwit0
	result.btcPubkeySegwit1 = tempSegwit1
	return result;
}
function getStacksAddress() {
	if (loggedIn()) {
		const userData = userSession.loadUserData();
		const stxAddress = (CONFIG.VITE_NETWORK === 'testnet') ? userData.profile.stxAddress.testnet : userData.profile.stxAddress.mainnet;
		return stxAddress
	}
	return
}
export function isHiro() {
	const provider:StacksProvider = getStacksProvider()
	const prod = provider.getProductInfo();
	return prod.name.toLowerCase().indexOf('hiro') > -1
}

export function isLeather() {
	const provider:StacksProvider = getStacksProvider()
	const prod = provider.getProductInfo();
	return prod.name.toLowerCase().indexOf('leather') > -1
}

async function addresses(callback:any):Promise<AddressObject|undefined> {
	if (!loggedIn()) return {} as AddressObject;
	const userData = userSession.loadUserData();
	const network = CONFIG.VITE_NETWORK;
	//let something = hashP2WPKH(payload.public_keys[0])
	const stxAddress = getStacksAddress();

	if (isHiro() || isLeather()) {
		console.log('addInputs: addresses: ' + userData.profile.btcPublicKey.p2wpkh)
		callback({
			network,
			stxAddress,
			cardinal: (network === 'testnet') ? userData.profile.btcAddress.p2wpkh.testnet : userData.profile.btcAddress.p2wpkh.mainnet,
			ordinal: (network === 'testnet') ? userData.profile.btcAddress.p2tr.testnet : userData.profile.btcAddress.p2tr.mainnet,
			btcPubkeySegwit0: (userData.profile.btcPublicKey) ? userData.profile.btcPublicKey.p2wpkh : undefined,
			btcPubkeySegwit1: (userData.profile.btcPublicKey) ? userData.profile.btcPublicKey.p2tr : undefined,
			sBTCBalance: 0,
			stxBalance: 0
		});
	} else {
		const getAddressOptions:GetAddressOptions = {
			payload: {
				purposes: [AddressPurposes.ORDINALS, AddressPurposes.PAYMENT],
				message: 'Address for receiving Ordinals and payments',
				  network: {
					type: (getStacksNetwork().isMainnet()) ? 'Mainnet' : 'Testnet'
				},
			},
			onFinish: (response:any) => {
				console.log(response)
				const obj = response.addresses;
				callback({
					network,
					stxAddress,
					cardinal: obj.find((o:any) => o.purpose === 'payment').address,
					ordinal: obj.find((o:any) => o.purpose === 'ordinals').address,
					btcPubkeySegwit0: obj.find((o:any) => o.purpose === 'payment').publicKey,
					btcPubkeySegwit1: obj.find((o:any) => o.purpose === 'ordinals').publicKey,
					sBTCBalance: 0,
					stxBalance: 0
				});
			},
			onCancel: () => {
				throw new Error('cancelled');
			}
		}
		await getAddress(getAddressOptions);
	}
}

export function appDetails() {
	return {
		name: 'sBTC Bridge',
		icon: (window) ? window.location.origin + '/img/icon_sbtc.png' : '/img/icon_sbtc.png',
	}
}

export function makeFlash(el1:HTMLElement|null) {
	let count = 0;
	if (!el1) return;
	el1.classList.add("flasherize-button");
    const ticker = setInterval(function () {
		count++;
		if ((count % 2) === 0) {
			el1.classList.add("flasherize-button");
		}
		else {
			el1.classList.remove("flasherize-button");
		}
		if (count === 2) {
			el1.classList.remove("flasherize-button");
			clearInterval(ticker)
		}
	  }, 2000)
}

export function isLegal(routeId:string):boolean {
	if (userSession.isUserSignedIn()) return true;
	if (routeId.startsWith('http')) {
		if (routeId.indexOf('/deposit') > -1 || routeId.indexOf('/withdraw') > -1 || routeId.indexOf('/admin') > -1 || routeId.indexOf('/transactions') > -1) {
			return false;
		}
	} else if (['/deposit', '/withdraw', '/admin', '/transactions'].includes(routeId)) {
		return false;
	}
	return true;
}

export function loggedIn():boolean {
	return userSession.isUserSignedIn()
}

export async function loginStacksJs(callback:any, conf:SbtcConfig) {
	try {
		const provider = getStacksProvider()
		console.log('provider: ', provider)
		if (!userSession.isUserSignedIn()) {
			showConnect({
				userSession,
				appDetails: appDetails(),
				onFinish: async () => {
					callback(conf, true);
				},
				onCancel: () => {
					callback(conf);
				},
			});
		} else {
			callback(conf);
		}
	} catch (e) {
		if (window) window.location.href = "https://wallet.hiro.so/wallet/install-web";
		callback(conf);
	}
}

export function signMessage(callback:any, message:string) {
	openSignatureRequestPopup({
		message,
		network: getStacksNetwork(), // for mainnet, `new StacksMainnet()`
		appDetails: appDetails(),
		onFinish({ publicKey, signature }) {
			let newSig = signature.substring(0, signature.length - 2);
			const recByte = signature.substring(signature.length - 2);
			newSig = recByte + newSig
			const verified1 = verifyMessageSignature({ signature: newSig, message, publicKey });
			if (!verified1) throw new Error('verifyMessageSignature - signature is not valid')
			callback({ publicKey, signature: newSig }, message);
		}
	});
}
/**

*/
export function logUserOut() {
	return userSession.signUserOut();
}

const FORMAT = /[ `!@#$%^&*()_+=[\]{};':"\\|,<>/?~]/;

export function verifyStacksPricipal(stacksAddress?:string) {
	if (!stacksAddress) {
	  throw new Error('Address not found');
	} else if (FORMAT.test(stacksAddress)) {
	  throw new Error('please remove white space / special characters');
	}
	try {
	  const decoded = decodeStacksAddress(stacksAddress.split('.')[0]);
	  if ((CONFIG.VITE_NETWORK === 'testnet' || CONFIG.VITE_NETWORK === 'devnet') && decoded[0] !== 26) {
		throw new Error('Please enter a valid stacks blockchain testnet address');
	  }
	  if (CONFIG.VITE_NETWORK === 'mainnet' && decoded[0] !== 22) {
		throw new Error('Please enter a valid stacks blockchain mainnet address');
	  }
	  return stacksAddress;
	  } catch (err:any) {
		  throw new Error('Invalid stacks principal - please enter a valid ' + CONFIG.VITE_NETWORK + ' account or contract principal.');
	  }
}

export function verifyAmount(amount:number) {
	if (!amount || amount === 0) {
		throw new Error('No amount entered');
	  }
  	//if (amount < minimumDeposit) {
	//	throw new Error('Amount must be at least 0.0001 or 10,000 satoshis');
	//  }
}
export function verifySBTCAmount(amount:number, balance:number, fee:number) {
	if (!amount || amount === 0) {
		throw new Error('No amount entered');
	}
	if (amount > (balance - fee)) {
		throw new Error('No more then balance (less fee of ' + fee + ')');
	}
}
  
export async function initApplication(conf:SbtcConfig, fromLogin:boolean|undefined) {
	if (!conf) conf = defaultSbtcConfig as SbtcConfig
	let data = {} as any;
	try {
		data = await fetchSbtcData();
		if (!data) data = {} as any;
		conf.loggedIn = false;
		if (userSession.isUserSignedIn()) {
			conf.loggedIn = true;
			await fetchSbtcBalance(conf, fromLogin);
			conf.loggedIn = true;
		}
	} catch (err) {
		data = {} as any;
	}
	const exchangeRates = await fetchExchangeRates();
	conf.exchangeRates = exchangeRates;
	//conf.sbtcContractData = data.sbtcContractData;
	if (!conf.keySets) {
		if (CONFIG.VITE_NETWORK === 'testnet') {
			conf.keySets = { 'testnet': {} as AddressObject };
		} else {
			conf.keySets = { 'mainnet': {} as AddressObject };
		}
	}
	let keys;
	if (import.meta.env.MODE !== 'development') {
		keys = data.keys;
	} else {
		keys = {
			deposits: {
			  revealPubKey: hex.encode(schnorr.getPublicKey(hex.decode(CONFIG.VITE_BTC_SCHNORR_KEY_REVEAL))),
			  reclaimPubKey: hex.encode(schnorr.getPublicKey(hex.decode(CONFIG.VITE_BTC_SCHNORR_KEY_RECLAIM))),
			  oraclePubKey: hex.encode(schnorr.getPublicKey(hex.decode(CONFIG.VITE_BTC_SCHNORR_KEY_ORACLE)))
			}
		}
	}
	keys.deposits.revealPubKey = data.sbtcContractData.sbtcWalletPublicKey
	const revealAddress = checkWalletAddress(data.sbtcContractData);
	data.sbtcContractData.sbtcWalletAddress = revealAddress;
	//conf.walletAddress = revealAddress;
	conf.revealFeeWithGas = revealPayment;
	conf.sbtcContractData = data.sbtcContractData;
	conf.keys = keys;
	conf.sbtcWalletAddressInfo = data.sbtcWalletAddressInfo;
	conf.btcFeeRates = data.btcFeeRates;
	const currency = conf.userSettings.currency?.myFiatCurrency?.currency;
	const rateNow = exchangeRates.find((o:any) => o.currency === currency)
	if (rateNow) conf.userSettings.currency.myFiatCurrency = rateNow
	else conf.userSettings.currency.myFiatCurrency = (exchangeRates.find((o:any) => o.currency === 'USD') || {} as ExchangeRate)
	
	//if (conf.mintData.peginRequest && conf.mintData.peginRequest.commitTxScript && typeof (conf.mintData.peginRequest.commitTxScript.tweakedPubkey) === 'string') {
	//	conf.mintData.peginRequest.commitTxScript = convertToUint8(conf.mintData.peginRequest.commitTxScript)
	//}
	console.log('addresses: cardinal:         ' + conf.keySets[CONFIG.VITE_NETWORK].cardinal)
	console.log('addresses: ordinal:          ' + conf.keySets[CONFIG.VITE_NETWORK].ordinal)
	console.log('addresses: btcPubkeySegwit0: ' + conf.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0)
	console.log('addresses: btcPubkeySegwit1: ' + conf.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit1)
	console.log('addresses: stxAddress:       ' + conf.keySets[CONFIG.VITE_NETWORK].stxAddress)
	sbtcConfig.update(() => conf);
}

export function checkWalletAddress (sbtcContractData:SbtcContractDataI) {
	const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;
	const fullPK = sbtcContractData.sbtcWalletPublicKey;        //sbtcContractData.coordinator?.key?.value?.split('x')[1];
	const xOnlyKey = fullPK; //hex.encode(hex.decode(fullPK).subarray(1, 33)) //(fullPK?.substring(2));
	if (!xOnlyKey) throw new Error('No key found')
	//const trObj = btc.p2tr(xOnlyKey, undefined, net);
	//if (trObj.type === 'tr') 
	//const addr = trObj.address

	const assumeTweakedPubKey = hex.decode(xOnlyKey);
	const addr = btc.Address(net).encode({type: 'tr', pubkey: assumeTweakedPubKey})
	if (addr) sbtcContractData.sbtcWalletAddress = addr;
	return addr;
}
