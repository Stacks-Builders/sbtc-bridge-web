import { S as SvelteComponentDev, i as init$1, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a5 as createEventDispatcher, p as element, y as text, c as space, C as create_component, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, D as claim_component, x as add_location, u as attr_dev, g as insert_hydration_dev, J as append_hydration_dev, V as set_input_value, E as mount_component, a6 as action_destroyer, L as listen_dev, A as set_data_dev, W as to_number, k as transition_in, h as transition_out, F as destroy_component, N as run_all, M as prevent_default, I as noop, G as validate_store, H as component_subscribe, o as onMount, P as globals, e as empty, B as group_outros, j as check_outros } from "../chunks/index.0c92228d.js";
import { s as sbtcConfig } from "../chunks/hmac.1e7e1fcb.js";
import { F as FeeDisplay, P as PegTransaction, a as assert, M as MAGIC_BYTES_TESTNET, b as MAGIC_BYTES_MAINNET, g as PEGIN_OPCODE, d as Principal, U as UTXOSelection, S as SbtcWalletDisplay, e as SignTransaction, f as SignTransactionWeb } from "../chunks/SbtcWalletDisplay.895dc25e.js";
import { T as TEST_NETWORK, N as NETWORK, p as p2wpkh, h as hex, b as Transaction, s as secp256k1, R as RawTx, S as Script } from "../chunks/utils.d534dad3.js";
import { e as utils, f as getPublicKey, h as schnorr, j as decodeStacksAddress, a as addresses } from "../chunks/stacks_connect.44e9d878.js";
import { b as fetchUtxoSet, c as fetchCurrentFeeRates } from "../chunks/bridge_api.4d7e899c.js";
const file$2 = "src/lib/components/wrapper/PegInAmount.svelte";
function create_if_block_1$2(ctx) {
  let span;
  let a;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = element("span");
      a = element("a");
      t = text("set max");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      a = claim_element(span_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "set max");
      a_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "");
      add_location(a, file$2, 44, 36, 1936);
      add_location(span, file$2, 44, 30, 1930);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, a);
      append_hydration_dev(a, t);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*click_handler*/
          ctx[7]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$2.name,
    type: "if",
    source: "(45:6) {#if amtData.change > 0}",
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
  let div;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(
        /*errorReason*/
        ctx[1]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*errorReason*/
        ctx[1]
      );
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-danger");
      add_location(div, file$2, 46, 21, 2063);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      2)
        set_data_dev(
          t,
          /*errorReason*/
          ctx2[1]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(47:4) {#if errorReason}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let div3;
  let div2;
  let label;
  let span0;
  let t0_value = (
    /*amtData*/
    ctx[0].label + ""
  );
  let t0;
  let t1;
  let span1;
  let t2;
  let input;
  let t3;
  let div0;
  let t4_value = (
    /*amtData*/
    ctx[0].info + ""
  );
  let t4;
  let t5;
  let div1;
  let t6;
  let t7;
  let feedisplay;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*amtData*/
    ctx[0].change > 0 && create_if_block_1$2(ctx)
  );
  let if_block1 = (
    /*errorReason*/
    ctx[1] && create_if_block$2(ctx)
  );
  feedisplay = new FeeDisplay({
    props: {
      amtData: (
        /*amtData*/
        ctx[0]
      ),
      currentPeg: (
        /*pegAmount*/
        ctx[2]
      )
    },
    $$inline: true
  });
  feedisplay.$on(
    "fee_rate_updated",
    /*changeRate*/
    ctx[4]
  );
  const block = {
    c: function create() {
      div3 = element("div");
      div2 = element("div");
      label = element("label");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      t2 = space();
      input = element("input");
      t3 = space();
      div0 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      t7 = space();
      create_component(feedisplay.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      span0 = claim_element(label_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(label_nodes);
      span1 = claim_element(label_nodes, "SPAN", {
        class: true,
        "data-bs-toggle": true,
        "data-bs-placement": true,
        "data-bs-custom-class": true,
        title: true
      });
      children(span1).forEach(detach_dev);
      label_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", {
        type: true,
        id: true,
        class: true,
        autocomplete: true
      });
      t3 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, t4_value);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      t7 = claim_space(div2_nodes);
      claim_component(feedisplay.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$2, 38, 6, 1295);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out.");
      add_location(span1, file$2, 39, 6, 1330);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file$2, 37, 4, 1222);
      attr_dev(input, "type", "number");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file$2, 41, 4, 1634);
      attr_dev(div0, "class", "text-small");
      add_location(div0, file$2, 42, 4, 1788);
      attr_dev(div1, "class", "text-small d-flex justify-content-end text-info");
      add_location(div1, file$2, 43, 4, 1837);
      attr_dev(div2, "class", "col-12");
      add_location(div2, file$2, 36, 2, 1197);
      attr_dev(div3, "class", "row");
      add_location(div3, file$2, 35, 0, 1177);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, label);
      append_hydration_dev(label, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(label, t1);
      append_hydration_dev(label, span1);
      append_hydration_dev(div2, t2);
      append_hydration_dev(div2, input);
      set_input_value(
        input,
        /*pegAmount*/
        ctx[2]
      );
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, div0);
      append_hydration_dev(div0, t4);
      append_hydration_dev(div2, t5);
      append_hydration_dev(div2, div1);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration_dev(div2, t6);
      if (if_block1)
        if_block1.m(div2, null);
      append_hydration_dev(div2, t7);
      mount_component(feedisplay, div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(init.call(null, input)),
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[5]
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[6],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if ((!current || dirty & /*amtData*/
      1) && t0_value !== (t0_value = /*amtData*/
      ctx2[0].label + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*pegAmount*/
      4 && to_number(input.value) !== /*pegAmount*/
      ctx2[2]) {
        set_input_value(
          input,
          /*pegAmount*/
          ctx2[2]
        );
      }
      if ((!current || dirty & /*amtData*/
      1) && t4_value !== (t4_value = /*amtData*/
      ctx2[0].info + ""))
        set_data_dev(t4, t4_value);
      if (
        /*amtData*/
        ctx2[0].change > 0
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$2(ctx2);
          if_block0.c();
          if_block0.m(div1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*errorReason*/
        ctx2[1]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$2(ctx2);
          if_block1.c();
          if_block1.m(div2, t7);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      const feedisplay_changes = {};
      if (dirty & /*amtData*/
      1)
        feedisplay_changes.amtData = /*amtData*/
        ctx2[0];
      if (dirty & /*pegAmount*/
      4)
        feedisplay_changes.currentPeg = /*pegAmount*/
        ctx2[2];
      feedisplay.$set(feedisplay_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(feedisplay.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(feedisplay.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      destroy_component(feedisplay);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function init(el) {
  el.focus();
}
function instance$2($$self, $$props, $$invalidate) {
  let low;
  let medium;
  let high;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PegInAmount", slots, []);
  let { amtData } = $$props;
  const dispatch = createEventDispatcher();
  let errorReason;
  let pegAmount = amtData.pegAmount;
  const changePegIn = (maxValue) => {
    $$invalidate(1, errorReason = void 0);
    try {
      if (pegAmount > amtData.maxCommit) {
        $$invalidate(1, errorReason = "Can't wrap more btc than available.");
        return;
      }
      if (maxValue) {
        $$invalidate(2, pegAmount = amtData.maxCommit - amtData.fee);
      }
      const rate = amtData.fees.find((o) => o === amtData.fee);
      dispatch("amount_updated", {
        opCode: "user",
        error: false,
        newAmount: pegAmount,
        newFeeRate: rate
      });
    } catch (err) {
      $$invalidate(1, errorReason = err || "Amount is not valid");
    }
  };
  const changeRate = (event) => {
    const rate = event.detail.newFeeRate;
    dispatch("amount_updated", {
      opCode: "prio",
      error: false,
      newAmount: pegAmount,
      newFeeRate: rate
    });
  };
  $$self.$$.on_mount.push(function() {
    if (amtData === void 0 && !("amtData" in $$props || $$self.$$.bound[$$self.$$.props["amtData"]])) {
      console.warn("<PegInAmount> was created without expected prop 'amtData'");
    }
  });
  const writable_props = ["amtData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PegInAmount> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    pegAmount = to_number(this.value);
    $$invalidate(2, pegAmount);
  }
  const input_handler = () => changePegIn(false);
  const click_handler = () => changePegIn(true);
  $$self.$$set = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    FeeDisplay,
    amtData,
    dispatch,
    errorReason,
    pegAmount,
    changePegIn,
    changeRate,
    init,
    high,
    medium,
    low
  });
  $$self.$inject_state = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("errorReason" in $$props2)
      $$invalidate(1, errorReason = $$props2.errorReason);
    if ("pegAmount" in $$props2)
      $$invalidate(2, pegAmount = $$props2.pegAmount);
    if ("high" in $$props2)
      high = $$props2.high;
    if ("medium" in $$props2)
      medium = $$props2.medium;
    if ("low" in $$props2)
      low = $$props2.low;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*amtData*/
    1) {
      low = amtData.fee === amtData.fees[0];
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      medium = amtData.fee === amtData.fees[1];
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      high = amtData.fee === amtData.fees[2];
    }
  };
  return [
    amtData,
    errorReason,
    pegAmount,
    changePegIn,
    changeRate,
    input_input_handler,
    input_handler,
    click_handler
  ];
}
class PegInAmount extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$2, create_fragment$2, safe_not_equal, { amtData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PegInAmount",
      options,
      id: create_fragment$2.name
    });
  }
  get amtData() {
    throw new Error("<PegInAmount>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set amtData(value) {
    throw new Error("<PegInAmount>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const priv = utils.randomPrivateKey();
const keySetForFeeCalculation = [];
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: getPublicKey(priv, true),
  schnorrPub: schnorr.getPublicKey(priv)
});
const _PegInTransaction = class extends PegTransaction {
  constructor() {
    super();
    this.getChange = () => {
      return this.maxCommit() - this.pegInData.amount - this.fee;
    };
    this.setAmount = (amount) => {
      if (amount > this.maxCommit() - this.fee) {
        throw new Error("Amount is more than available " + this.maxCommit() + " less the gas " + this.fee);
      }
      this.pegInData.amount = amount;
    };
    this.calculateFees = () => {
      if (!this.ready)
        throw new Error("Not ready!");
      const stacksAddress = "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN";
      const sbtcWalletAddress = "tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss";
      const p2Ret = p2wpkh(keySetForFeeCalculation[0].ecdsaPub);
      assert("wpkh" === p2Ret.type);
      const privKey = hex.decode("0101010101010101010101010101010101010101010101010101010101010101");
      const tx = new Transaction({ allowUnknowOutput: true });
      for (const utxo of this.addressInfo.utxos) {
        if (this.isUTXOConfirmed(utxo)) {
          tx.addInput({
            txid: hex.decode(utxo.txid),
            //txid: utxo.txid,
            index: utxo.vout,
            witnessUtxo: {
              amount: 600n,
              script: p2wpkh(secp256k1.getPublicKey(privKey, true)).script
            }
          });
        } else {
          this.unconfirmedUtxos = true;
        }
      }
      if (tx.inputsLength === 0)
        throw new Error("No confirmed UTXOs");
      const asmScript = this.getOpDropP2shScript(stacksAddress, sbtcWalletAddress);
      tx.addOutput({ script: asmScript, amount: BigInt(0) });
      const changeAmount = Math.floor(0);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      tx.sign(privKey);
      tx.finalize();
      this.scureFee = Number(tx.fee);
      this.fees = [
        this.scureFee * 0.8,
        //Math.floor((this.feeInfo.low_fee_per_kb / 1000) * vsize),
        this.scureFee * 1,
        //Math.floor((this.feeInfo.medium_fee_per_kb / 1000) * vsize),
        this.scureFee * 1.2
        //Math.floor((this.feeInfo.high_fee_per_kb / 1000) * vsize),
      ];
      this.fee = this.fees[1];
      if (this.pegInData.amount === 0) {
        this.pegInData.amount = this.maxCommit() - this.fee;
      }
    };
    this.getOutputsForDisplay = () => {
      const changeAmount = this.getChange();
      const outs = [
        { script: "RETURN " + this.pegInData.stacksAddress, amount: 0 },
        { address: this.pegInData.sbtcWalletAddress, amount: this.pegInData.amount }
      ];
      if (changeAmount > 0)
        outs.push({ address: this.fromBtcAddress, amount: changeAmount });
      outs.push({ address: "pays " + this.fee + " satoshis to miner." });
      return outs;
    };
    this.buildTransaction = (signature) => {
      if (!this.ready)
        throw new Error("Not ready!");
      if (signature)
        throw new Error("signature only for peg out!");
      return { opReturn: this.buildOpReturn(), opDrop: this.buildOpDrop() };
    };
    this.addInputs = (tx) => {
      for (const utxo of this.addressInfo.utxos) {
        const script = RawTx.decode(hex.decode(utxo.tx.hex));
        if (this.isUTXOConfirmed(utxo)) {
          tx.addInput({
            txid: hex.decode(utxo.txid),
            index: utxo.vout,
            witnessUtxo: {
              script: script.outputs[utxo.vout].script,
              amount: BigInt(utxo.value)
            }
          });
        }
      }
    };
    this.buildOpReturn = () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const tx = new Transaction({ allowUnknowOutput: true });
      this.addInputs(tx);
      const data = this.buildData(this.pegInData.stacksAddress);
      tx.addOutput({ script: Script.encode(["RETURN", data]), amount: 0n });
      tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.pegInData.amount), this.net);
      const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      return tx;
    };
    this.buildData = (pricipal) => {
      const magicBuf = this.net === TEST_NETWORK ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
      const opCodeBuf = hex.decode(PEGIN_OPCODE);
      const addr = decodeStacksAddress(pricipal.split(".")[0]);
      const addr0Buf = hex.decode(addr[0].toString(16));
      const addr1Buf = hex.decode(addr[1]);
      let data;
      if (pricipal.indexOf(".") > -1) {
        const cnameBuf = new TextEncoder().encode(pricipal.split(".")[1]);
        data = new Uint8Array(magicBuf, ...opCodeBuf, ...addr0Buf, ...addr1Buf, ...cnameBuf);
        console.log(pricipal.split(".")[1]);
      } else {
        data = new Uint8Array(magicBuf, ...opCodeBuf, ...addr0Buf, ...addr1Buf);
      }
      return data;
    };
    this.buildOpDrop = () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const tx = new Transaction({ allowUnknowOutput: true });
      this.addInputs(tx);
      const asmScript = this.getOpDropP2shScript(this.pegInData.stacksAddress, this.pegInData.sbtcWalletAddress);
      tx.addOutput({ script: asmScript, amount: BigInt(this.pegInData.amount) });
      const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      return tx;
    };
  }
  getOpDropP2shScript(stacksAddress, sbtcWalletAddress) {
    const data = this.buildData(stacksAddress);
    const uint8array = new TextEncoder().encode(sbtcWalletAddress);
    const asmScript = Script.encode([data, "DROP", "DUP", "HASH160", uint8array, "EQUALVERIFY", "CHECKSIG"]);
    return asmScript;
  }
};
let PegInTransaction = _PegInTransaction;
PegInTransaction.create = async (network, fromBtcAddress, sbtcWalletAddress) => {
  const me = new _PegInTransaction();
  me.net = network === "testnet" ? TEST_NETWORK : NETWORK;
  me.fromBtcAddress = fromBtcAddress;
  me.pegInData = {
    amount: 0,
    stacksAddress: void 0,
    sbtcWalletAddress
  };
  me.addressInfo = await fetchUtxoSet(fromBtcAddress);
  const btcFeeRates = await fetchCurrentFeeRates();
  me.feeInfo = btcFeeRates.feeInfo;
  me.ready = true;
  return me;
};
PegInTransaction.hydrate = (o) => {
  const me = new _PegInTransaction();
  me.net = o.net;
  if (!o.fromBtcAddress)
    throw new Error("No address - use create instead!");
  me.fromBtcAddress = o.fromBtcAddress;
  me.pegInData = o.pegInData;
  me.addressInfo = o.addressInfo;
  me.feeInfo = o.feeInfo;
  me.fees = o.fees;
  me.fee = o.fee;
  me.scureFee = o.scureFee;
  me.ready = o.ready;
  return me;
};
const BuildTransaction_svelte_svelte_type_style_lang = "";
const { console: console_1 } = globals;
const file$1 = "src/lib/components/wrapper/BuildTransaction.svelte";
function create_if_block$1(ctx) {
  let div;
  let utxoselection;
  let t0;
  let t1;
  let t2;
  let t3;
  let if_block3_anchor;
  let current;
  utxoselection = new UTXOSelection({
    props: { utxoData: (
      /*utxoData*/
      ctx[6]
    ) },
    $$inline: true
  });
  utxoselection.$on(
    "utxo_updated",
    /*utxoUpdated*/
    ctx[12]
  );
  let if_block0 = (
    /*showStxAddress*/
    ctx[5] && create_if_block_4(ctx)
  );
  let if_block1 = (
    /*showAmount*/
    ctx[4] && create_if_block_3(ctx)
  );
  let if_block2 = (
    /*errorReason*/
    ctx[0] && create_if_block_2$1(ctx)
  );
  let if_block3 = (
    /*showButton*/
    ctx[3] && create_if_block_1$1(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(utxoselection.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      t3 = space();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(utxoselection.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t3 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 119, 2, 4027);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(utxoselection, div, null);
      insert_hydration_dev(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration_dev(target, t3, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration_dev(target, if_block3_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const utxoselection_changes = {};
      if (dirty & /*utxoData*/
      64)
        utxoselection_changes.utxoData = /*utxoData*/
        ctx2[6];
      utxoselection.$set(utxoselection_changes);
      if (
        /*showStxAddress*/
        ctx2[5]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*showStxAddress*/
          32) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*showAmount*/
        ctx2[4]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*showAmount*/
          16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t2.parentNode, t2);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*errorReason*/
        ctx2[0]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_2$1(ctx2);
          if_block2.c();
          if_block2.m(t3.parentNode, t3);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*showButton*/
        ctx2[3]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_1$1(ctx2);
          if_block3.c();
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(utxoselection.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(utxoselection.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(utxoselection);
      if (detaching)
        detach_dev(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach_dev(t3);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach_dev(if_block3_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(119:0) {#if inited}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let div;
  let principal;
  let current;
  principal = new Principal({
    props: { principalData: (
      /*principalData*/
      ctx[7]
    ) },
    $$inline: true
  });
  principal.$on(
    "principal_updated",
    /*principalUpdated*/
    ctx[11]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(principal.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(principal.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 121, 2, 4135);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(principal, div, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(principal.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(principal.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(principal);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(121:2) {#if showStxAddress}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let previous_key = (
    /*componentKey3*/
    ctx[1]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    l: function claim(nodes) {
      key_block.l(nodes);
      key_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      key_block.m(target, anchor);
      insert_hydration_dev(target, key_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*componentKey3*/
      2 && safe_not_equal(previous_key, previous_key = /*componentKey3*/
      ctx2[1])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(key_block_anchor);
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(124:2) {#if showAmount}",
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let div;
  let peginamount;
  let current;
  peginamount = new PegInAmount({
    props: { amtData: (
      /*amtData*/
      ctx[8]()
    ) },
    $$inline: true
  });
  peginamount.$on(
    "amount_updated",
    /*amountUpdated*/
    ctx[10]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(peginamount.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(peginamount.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 125, 2, 4281);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(peginamount, div, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(peginamount.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(peginamount.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(peginamount);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(125:2) {#key componentKey3}",
    ctx
  });
  return block;
}
function create_if_block_2$1(ctx) {
  let div;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(
        /*errorReason*/
        ctx[0]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*errorReason*/
        ctx[0]
      );
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-danger");
      add_location(div, file$1, 128, 19, 4411);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      1)
        set_data_dev(
          t,
          /*errorReason*/
          ctx2[0]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$1.name,
    type: "if",
    source: "(129:2) {#if errorReason}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let div1;
  let div0;
  let button;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      button = element("button");
      t = text("CONTINUE");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true, type: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "CONTINUE");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "btn btn-outline-info w-100");
      attr_dev(button, "type", "button");
      add_location(button, file$1, 132, 6, 4528);
      attr_dev(div0, "class", "col");
      add_location(div0, file$1, 131, 4, 4504);
      attr_dev(div1, "class", "row s-3u3nVvJxVO6Z");
      add_location(div1, file$1, 130, 2, 4482);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, button);
      append_hydration_dev(button, t);
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[16],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(130:2) {#if showButton}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*inited*/
    ctx[2] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*inited*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*inited*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let utxoData;
  let showStxAddress;
  let showAmount;
  let showButton;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(17, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BuildTransaction", slots, []);
  let { piTx } = $$props;
  if (!piTx.fromBtcAddress)
    piTx.fromBtcAddress = addresses().cardinal;
  let componentKey3 = 0;
  if (!piTx.pegInData.stacksAddress && addresses().stxAddress)
    piTx.pegInData.stacksAddress = addresses().stxAddress;
  const principalData = {
    label: "Stacks Address (Account or Contract)",
    info: "sBTC will be minted to this account or contract",
    currentAddress: piTx.pegInData.stacksAddress
  };
  const amtData = () => {
    return {
      pegIn: true,
      label: "Amount (Satoshis)",
      info: "The amount to wrap cannot exceed your balance less some satoshi to pay gas fees",
      pegAmount: piTx.pegInData.amount ? piTx.pegInData.amount : piTx.maxCommit() - piTx.fee,
      maxCommit: piTx.maxCommit(),
      change: piTx.getChange(),
      fee: piTx.fee,
      fees: piTx.fees,
      dust: piTx.dust
    };
  };
  const network = "mainnet";
  console.log("piTx:", piTx);
  const dispatch = createEventDispatcher();
  let ready = true;
  let errorReason;
  let stxAddressOk = true;
  let amountOk = false;
  const updateConfig = () => {
    var _a;
    const conf = $sbtcConfig;
    conf.pegInTransaction = piTx;
    sbtcConfig.update(() => conf);
    $$invalidate(15, amountOk = ((_a = piTx.pegInData) == null ? void 0 : _a.amount) > 0);
  };
  const requestSignature = () => {
    dispatch("request_signature");
  };
  const amountUpdated = (event) => {
    $$invalidate(0, errorReason = void 0);
    $$invalidate(15, amountOk = !event.detail.error);
    if (event.detail.opCode === "user") {
      try {
        piTx.setAmount(event.detail.newAmount);
      } catch (err) {
        $$invalidate(0, errorReason = err);
        piTx.setAmount(piTx.maxCommit() - piTx.fee);
      }
    } else if (event.detail.opCode === "prio") {
      piTx.setFeeRate(event.detail.newFeeRate);
      if (piTx.pegInData.amount > piTx.maxCommit() - piTx.fee)
        piTx.setAmount(piTx.maxCommit() - piTx.fee);
    }
    updateConfig();
    $$invalidate(1, componentKey3++, componentKey3);
  };
  const principalUpdated = (event) => {
    $$invalidate(0, errorReason = void 0);
    $$invalidate(14, stxAddressOk = !event.detail.error);
    if (stxAddressOk) {
      piTx.setStacksAddress(event.detail.currentAddress);
      updateConfig();
    }
  };
  const utxoUpdated = async (event) => {
    $$invalidate(0, errorReason = void 0);
    const data = event.detail;
    if (data.opCode === "address-change") {
      try {
        const p0 = piTx.pegInData;
        $$invalidate(13, piTx = await PegInTransaction.create(network, data.bitcoinAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress));
        piTx.calculateFees();
        if (p0.amount > 0 && p0.amount < piTx.maxCommit())
          piTx.setAmount(p0.amount);
        updateConfig();
      } catch (err) {
        if (err.message !== "No inputs signed")
          $$invalidate(0, errorReason = err.message);
        else
          $$invalidate(0, errorReason = "Please fix above errors and try again.");
      }
    }
  };
  let inited = false;
  onMount(async () => {
    if (!piTx.pegInData.stacksAddress)
      $$invalidate(14, stxAddressOk = false);
    if (piTx.pegInData.amount > 0)
      $$invalidate(15, amountOk = true);
    updateConfig();
    $$invalidate(2, inited = true);
  });
  $$self.$$.on_mount.push(function() {
    if (piTx === void 0 && !("piTx" in $$props || $$self.$$.bound[$$self.$$.props["piTx"]])) {
      console_1.warn("<BuildTransaction> was created without expected prop 'piTx'");
    }
  });
  const writable_props = ["piTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<BuildTransaction> was created with unknown prop '${key}'`);
  });
  const click_handler = () => requestSignature();
  $$self.$$set = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(13, piTx = $$props2.piTx);
  };
  $$self.$capture_state = () => ({
    onMount,
    sbtcConfig,
    Principal,
    PegInAmount,
    UTXOSelection,
    createEventDispatcher,
    PegInTransaction,
    addresses,
    piTx,
    componentKey3,
    principalData,
    amtData,
    network,
    dispatch,
    ready,
    errorReason,
    stxAddressOk,
    amountOk,
    updateConfig,
    requestSignature,
    amountUpdated,
    principalUpdated,
    utxoUpdated,
    inited,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(13, piTx = $$props2.piTx);
    if ("componentKey3" in $$props2)
      $$invalidate(1, componentKey3 = $$props2.componentKey3);
    if ("ready" in $$props2)
      ready = $$props2.ready;
    if ("errorReason" in $$props2)
      $$invalidate(0, errorReason = $$props2.errorReason);
    if ("stxAddressOk" in $$props2)
      $$invalidate(14, stxAddressOk = $$props2.stxAddressOk);
    if ("amountOk" in $$props2)
      $$invalidate(15, amountOk = $$props2.amountOk);
    if ("inited" in $$props2)
      $$invalidate(2, inited = $$props2.inited);
    if ("showButton" in $$props2)
      $$invalidate(3, showButton = $$props2.showButton);
    if ("showAmount" in $$props2)
      $$invalidate(4, showAmount = $$props2.showAmount);
    if ("showStxAddress" in $$props2)
      $$invalidate(5, showStxAddress = $$props2.showStxAddress);
    if ("utxoData" in $$props2)
      $$invalidate(6, utxoData = $$props2.utxoData);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*piTx*/
    8192) {
      $$invalidate(6, utxoData = {
        label: "Your Bitcoin Address",
        info: "You'll send bitcoin from here to the sBTC wallet",
        utxos: piTx.addressInfo.utxos,
        maxCommit: piTx.ready ? piTx.maxCommit() : 0,
        fromBtcAddress: piTx.fromBtcAddress,
        numbInputs: piTx.ready ? piTx.addressInfo.utxos.length : 0,
        network
      });
    }
    if ($$self.$$.dirty & /*piTx, errorReason*/
    8193) {
      $$invalidate(5, showStxAddress = piTx.ready && !errorReason);
    }
    if ($$self.$$.dirty & /*piTx, stxAddressOk, errorReason*/
    24577) {
      $$invalidate(4, showAmount = piTx.ready && stxAddressOk && !errorReason);
    }
    if ($$self.$$.dirty & /*piTx, amountOk, errorReason*/
    40961) {
      $$invalidate(3, showButton = piTx.ready && amountOk && !errorReason);
    }
  };
  return [
    errorReason,
    componentKey3,
    inited,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    principalData,
    amtData,
    requestSignature,
    amountUpdated,
    principalUpdated,
    utxoUpdated,
    piTx,
    stxAddressOk,
    amountOk,
    click_handler
  ];
}
class BuildTransaction extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$1, create_fragment$1, safe_not_equal, { piTx: 13 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BuildTransaction",
      options,
      id: create_fragment$1.name
    });
  }
  get piTx() {
    throw new Error("<BuildTransaction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set piTx(value) {
    throw new Error("<BuildTransaction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/wrap/+page.svelte";
function create_else_block(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = (
    /*sigData*/
    ctx[1] && !/*sigData*/
    ctx[1].webWallet && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*sigData*/
    ctx[1] && /*sigData*/
    ctx[1].webWallet && create_if_block_1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*sigData*/
        ctx2[1] && !/*sigData*/
        ctx2[1].webWallet
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*sigData*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*sigData*/
        ctx2[1] && /*sigData*/
        ctx2[1].webWallet
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*sigData*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(42:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let buildtransaction;
  let current;
  buildtransaction = new BuildTransaction({
    props: { piTx: (
      /*piTx*/
      ctx[0]
    ) },
    $$inline: true
  });
  buildtransaction.$on(
    "request_signature",
    /*openSigView*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(buildtransaction.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(buildtransaction.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(buildtransaction, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const buildtransaction_changes = {};
      if (dirty & /*piTx*/
      1)
        buildtransaction_changes.piTx = /*piTx*/
        ctx2[0];
      buildtransaction.$set(buildtransaction_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(buildtransaction.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(buildtransaction.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(buildtransaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(40:6) {#if view === 'build_tx_view'}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let signtransaction;
  let current;
  signtransaction = new SignTransaction({
    props: {
      sigData: (
        /*sigData*/
        ctx[1]
      ),
      pegInfo: JSON.parse(JSON.stringify(
        /*piTx*/
        ctx[0]
      ))
    },
    $$inline: true
  });
  signtransaction.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[4]
  );
  const block = {
    c: function create() {
      create_component(signtransaction.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(signtransaction.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(signtransaction, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const signtransaction_changes = {};
      if (dirty & /*sigData*/
      2)
        signtransaction_changes.sigData = /*sigData*/
        ctx2[1];
      if (dirty & /*piTx*/
      1)
        signtransaction_changes.pegInfo = JSON.parse(JSON.stringify(
          /*piTx*/
          ctx2[0]
        ));
      signtransaction.$set(signtransaction_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(signtransaction.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(signtransaction.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(signtransaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(43:7) {#if sigData && !sigData.webWallet}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let signtransactionweb;
  let current;
  signtransactionweb = new SignTransactionWeb({
    props: {
      sigData: (
        /*sigData*/
        ctx[1]
      ),
      pegInfo: JSON.parse(JSON.stringify(
        /*piTx*/
        ctx[0]
      ))
    },
    $$inline: true
  });
  signtransactionweb.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[4]
  );
  const block = {
    c: function create() {
      create_component(signtransactionweb.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(signtransactionweb.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(signtransactionweb, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const signtransactionweb_changes = {};
      if (dirty & /*sigData*/
      2)
        signtransactionweb_changes.sigData = /*sigData*/
        ctx2[1];
      if (dirty & /*piTx*/
      1)
        signtransactionweb_changes.pegInfo = JSON.parse(JSON.stringify(
          /*piTx*/
          ctx2[0]
        ));
      signtransactionweb.$set(signtransactionweb_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(signtransactionweb.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(signtransactionweb.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(signtransactionweb, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(46:7) {#if sigData && sigData.webWallet}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div5;
  let div4;
  let h1;
  let t0;
  let span;
  let t1;
  let t2;
  let h2;
  let t3;
  let t4;
  let div0;
  let sbtcwalletdisplay;
  let t5;
  let div3;
  let div2;
  let div1;
  let current_block_type_index;
  let if_block;
  let current;
  sbtcwalletdisplay = new SbtcWalletDisplay({ $$inline: true });
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*view*/
      ctx2[2] === "build_tx_view"
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      section = element("section");
      div5 = element("div");
      div4 = element("div");
      h1 = element("h1");
      t0 = text("Wrap ");
      span = element("span");
      t1 = text("sBTC");
      t2 = space();
      h2 = element("h2");
      t3 = text("BTC to sBTC");
      t4 = space();
      div0 = element("div");
      create_component(sbtcwalletdisplay.$$.fragment);
      t5 = space();
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div5 = claim_element(section_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h1 = claim_element(div4_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Wrap ");
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "sBTC");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      h2 = claim_element(div4_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "BTC to sBTC");
      h2_nodes.forEach(detach_dev);
      t4 = claim_space(div4_nodes);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(sbtcwalletdisplay.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "strokeme-info");
      add_location(span, file, 31, 30, 1363);
      attr_dev(h1, "class", "text-info s-RlVVnrAOzilK");
      add_location(h1, file, 31, 3, 1336);
      attr_dev(h2, "class", "text-info mb-3");
      add_location(h2, file, 32, 3, 1411);
      attr_dev(div0, "class", "my-3 d-flex justify-content-between text-white");
      add_location(div0, file, 33, 3, 1458);
      add_location(div1, file, 38, 5, 1641);
      attr_dev(div2, "class", "card border p-4");
      add_location(div2, file, 37, 4, 1606);
      attr_dev(div3, "class", "d-flex justify-content-center");
      add_location(div3, file, 36, 3, 1558);
      attr_dev(div4, "class", "card-width");
      add_location(div4, file, 30, 2, 1308);
      attr_dev(div5, "class", "my-4 p-4");
      add_location(div5, file, 29, 1, 1283);
      attr_dev(section, "class", "bg-dark s-RlVVnrAOzilK");
      add_location(section, file, 28, 0, 1256);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div5);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, h1);
      append_hydration_dev(h1, t0);
      append_hydration_dev(h1, span);
      append_hydration_dev(span, t1);
      append_hydration_dev(div4, t2);
      append_hydration_dev(div4, h2);
      append_hydration_dev(h2, t3);
      append_hydration_dev(div4, t4);
      append_hydration_dev(div4, div0);
      mount_component(sbtcwalletdisplay, div0, null);
      append_hydration_dev(div4, t5);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, div1);
      if_blocks[current_block_type_index].m(div1, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div1, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(sbtcwalletdisplay.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(sbtcwalletdisplay.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(sbtcwalletdisplay);
      if_blocks[current_block_type_index].d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let view;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(5, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  let piTx = $sbtcConfig.pegInTransaction && $sbtcConfig.pegInTransaction.ready ? PegInTransaction.hydrate($sbtcConfig.pegInTransaction) : new PegInTransaction();
  let sigData;
  const openSigView = () => {
    $$invalidate(0, piTx = PegInTransaction.hydrate($sbtcConfig.pegInTransaction));
    if (!piTx.pegInData.stacksAddress)
      piTx.setStacksAddress(addresses().stxAddress);
    $$invalidate(1, sigData = {
      pegin: true,
      webWallet: piTx.fromBtcAddress === addresses().cardinal,
      txs: piTx == null ? void 0 : piTx.buildTransaction(void 0),
      outputsForDisplay: piTx == null ? void 0 : piTx.getOutputsForDisplay(),
      inputsForDisplay: piTx == null ? void 0 : piTx.addressInfo.utxos
    });
    $$invalidate(2, view = "sign_tx_view");
  };
  const updateTransaction = () => {
    $$invalidate(2, view = "build_tx_view");
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    BuildTransaction,
    SignTransaction,
    SignTransactionWeb,
    sbtcConfig,
    PegInTransaction,
    SbtcWalletDisplay,
    addresses,
    piTx,
    sigData,
    openSigView,
    updateTransaction,
    view,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
    if ("sigData" in $$props2)
      $$invalidate(1, sigData = $$props2.sigData);
    if ("view" in $$props2)
      $$invalidate(2, view = $$props2.view);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$invalidate(2, view = "build_tx_view");
  return [piTx, sigData, view, openSigView, updateTransaction];
}
class Page extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Page",
      options,
      id: create_fragment.name
    });
  }
}
export {
  Page as default
};
