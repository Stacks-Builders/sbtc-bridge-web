import { w as writable } from './index.cad881cf.js';
import './paths.3ee4b2ef.js';

const SNAPSHOT_KEY = 'sveltekit:snapshot';
const SCROLL_KEY = 'sveltekit:scroll';
const INDEX_KEY = 'sveltekit:index';

const PRELOAD_PRIORITIES = /** @type {const} */ ({
	tap: 1,
	hover: 2,
	viewport: 3,
	eager: 4,
	off: -1
});

/* global "_app/version.json", 0 */

/** @param {HTMLDocument} doc */
function get_base_uri(doc) {
	let baseURI = doc.baseURI;

	if (!baseURI) {
		const baseTags = doc.getElementsByTagName('base');
		baseURI = baseTags.length ? baseTags[0].href : doc.URL;
	}

	return baseURI;
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

const warned = new WeakSet();

/** @typedef {keyof typeof valid_link_options} LinkOptionName */

const valid_link_options = /** @type {const} */ ({
	'preload-code': ['', 'off', 'tap', 'hover', 'viewport', 'eager'],
	'preload-data': ['', 'off', 'tap', 'hover'],
	keepfocus: ['', 'off'],
	noscroll: ['', 'off'],
	reload: ['', 'off'],
	replacestate: ['', 'off']
});

/**
 * @template {LinkOptionName} T
 * @typedef {typeof valid_link_options[T][number]} ValidLinkOptions
 */

/**
 * @template {LinkOptionName} T
 * @param {Element} element
 * @param {T} name
 */
function link_option(element, name) {
	const value = /** @type {ValidLinkOptions<T> | null} */ (
		element.getAttribute(`data-sveltekit-${name}`)
	);

	{
		validate_link_option(element, name, value);
	}

	return value;
}

/**
 * @template {LinkOptionName} T
 * @template {ValidLinkOptions<T> | null} U
 * @param {Element} element
 * @param {T} name
 * @param {U} value
 */
function validate_link_option(element, name, value) {
	if (value === null) return;

	// @ts-expect-error - includes is dumb
	if (!warned.has(element) && !valid_link_options[name].includes(value)) {
		console.error(
			`Unexpected value for ${name} — should be one of ${valid_link_options[name]
				.map((option) => JSON.stringify(option))
				.join(', ')}`,
			element
		);

		warned.add(element);
	}
}

const levels = {
	...PRELOAD_PRIORITIES,
	'': PRELOAD_PRIORITIES.hover
};

/**
 * @param {Element} element
 * @returns {Element | null}
 */
function parent_element(element) {
	let parent = element.assignedSlot ?? element.parentNode;

	// @ts-expect-error handle shadow roots
	if (parent?.nodeType === 11) parent = parent.host;

	return /** @type {Element} */ (parent);
}

/**
 * @param {Element} element
 * @param {Element} target
 */
function find_anchor(element, target) {
	while (element && element !== target) {
		if (element.nodeName.toUpperCase() === 'A' && element.hasAttribute('href')) {
			return /** @type {HTMLAnchorElement | SVGAElement} */ (element);
		}

		element = /** @type {Element} */ (parent_element(element));
	}
}

/**
 * @param {HTMLAnchorElement | SVGAElement} a
 * @param {string} base
 */
function get_link_info(a, base) {
	/** @type {URL | undefined} */
	let url;

	try {
		url = new URL(a instanceof SVGAElement ? a.href.baseVal : a.href, document.baseURI);
	} catch {}

	const target = a instanceof SVGAElement ? a.target.baseVal : a.target;

	const external =
		!url ||
		!!target ||
		is_external_url(url, base) ||
		(a.getAttribute('rel') || '').split(/\s+/).includes('external') ||
		a.hasAttribute('download');

	return { url, external, target };
}

/**
 * @param {HTMLFormElement | HTMLAnchorElement | SVGAElement} element
 */
function get_router_options(element) {
	/** @type {ValidLinkOptions<'keepfocus'> | null} */
	let keep_focus = null;

	/** @type {ValidLinkOptions<'noscroll'> | null} */
	let noscroll = null;

	/** @type {ValidLinkOptions<'preload-code'> | null} */
	let preload_code = null;

	/** @type {ValidLinkOptions<'preload-data'> | null} */
	let preload_data = null;

	/** @type {ValidLinkOptions<'reload'> | null} */
	let reload = null;

	/** @type {ValidLinkOptions<'replacestate'> | null} */
	let replace_state = null;

	/** @type {Element} */
	let el = element;

	while (el && el !== document.documentElement) {
		if (preload_code === null) preload_code = link_option(el, 'preload-code');
		if (preload_data === null) preload_data = link_option(el, 'preload-data');
		if (keep_focus === null) keep_focus = link_option(el, 'keepfocus');
		if (noscroll === null) noscroll = link_option(el, 'noscroll');
		if (reload === null) reload = link_option(el, 'reload');
		if (replace_state === null) replace_state = link_option(el, 'replacestate');

		el = /** @type {Element} */ (parent_element(el));
	}

	return {
		preload_code: levels[preload_code ?? 'off'],
		preload_data: levels[preload_data ?? 'off'],
		keep_focus: keep_focus === 'off' ? false : keep_focus === '' ? true : null,
		noscroll: noscroll === 'off' ? false : noscroll === '' ? true : null,
		reload: reload === 'off' ? false : reload === '' ? true : null,
		replace_state: replace_state === 'off' ? false : replace_state === '' ? true : null
	};
}

/** @param {any} value */
function notifiable_store(value) {
	const store = writable(value);
	let ready = true;

	function notify() {
		ready = true;
		store.update((val) => val);
	}

	/** @param {any} new_value */
	function set(new_value) {
		ready = false;
		store.set(new_value);
	}

	/** @param {(value: any) => void} run */
	function subscribe(run) {
		/** @type {any} */
		let old_value;
		return store.subscribe((new_value) => {
			if (old_value === undefined || (ready && new_value !== old_value)) {
				run((old_value = new_value));
			}
		});
	}

	return { notify, set, subscribe };
}

function create_updated_store() {
	const { set, subscribe } = writable(false);

	/** @type {() => Promise<boolean>} */
	async function check() {
		return false;
	}

	return {
		subscribe,
		check
	};
}

/**
 * @param {URL} url
 * @param {string} base
 */
function is_external_url(url, base) {
	return url.origin !== location.origin || !url.pathname.startsWith(base);
}

/** @type {import('./types').Client} */
let client;

/**
 * @param {{
 *   client: import('./types').Client;
 * }} opts
 */
function init(opts) {
	client = opts.client;
}

const stores = {
	url: notifiable_store({}),
	page: notifiable_store({}),
	navigating: writable(/** @type {import('types').Navigation | null} */ (null)),
	updated: create_updated_store()
};

export { INDEX_KEY as I, PRELOAD_PRIORITIES as P, SCROLL_KEY as S, SNAPSHOT_KEY as a, get_link_info as b, get_router_options as c, scroll_state as d, init as e, find_anchor as f, get_base_uri as g, client as h, is_external_url as i, stores as s };
