import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, G as validate_store, H as component_subscribe, v as validate_slots, p as element, c as space, y as text, q as claim_element, r as children, f as claim_space, z as claim_text, l as detach_dev, u as attr_dev, x as add_location, g as insert_hydration_dev, J as append_hydration_dev, V as set_input_value, L as listen_dev, W as to_number, I as noop, N as run_all, A as set_data_dev, C as create_component, D as claim_component, E as mount_component, k as transition_in, h as transition_out, F as destroy_component } from "../chunks/index.0c92228d.js";
import { m as mintTo, b as burnFrom, s as setCoordinator, a as setBtcWallet, c as coordinators } from "../chunks/sbtc_admin.8c2c8b4b.js";
import { s as sbtcConfig } from "../chunks/hmac.1e7e1fcb.js";
const MintTokens_svelte_svelte_type_style_lang = "";
const file$3 = "src/lib/components/admin/MintTokens.svelte";
function create_if_block$1(ctx) {
  let p;
  let t;
  const block = {
    c: function create() {
      p = element("p");
      t = text(
        /*error*/
        ctx[3]
      );
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*error*/
        ctx[3]
      );
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-danger");
      add_location(p, file$3, 18, 17, 602);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*error*/
      8)
        set_data_dev(
          t,
          /*error*/
          ctx2[3]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(19:6) {#if error}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let div2;
  let div1;
  let t0;
  let label0;
  let t1;
  let t2;
  let input0;
  let t3;
  let label1;
  let t4;
  let t5;
  let input1;
  let t6;
  let label2;
  let t7;
  let t8;
  let input2;
  let t9;
  let div0;
  let button;
  let t10;
  let mounted;
  let dispose;
  let if_block = (
    /*error*/
    ctx[3] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      label0 = element("label");
      t1 = text("Mint Address");
      t2 = space();
      input0 = element("input");
      t3 = space();
      label1 = element("label");
      t4 = text("Mint Amount");
      t5 = space();
      input1 = element("input");
      t6 = space();
      label2 = element("label");
      t7 = text("Bitcoin Tx Id");
      t8 = space();
      input2 = element("input");
      t9 = space();
      div0 = element("div");
      button = element("button");
      t10 = text("Mint");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block)
        if_block.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      label0 = claim_element(div1_nodes, "LABEL", { for: true });
      var label0_nodes = children(label0);
      t1 = claim_text(label0_nodes, "Mint Address");
      label0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      input0 = claim_element(div1_nodes, "INPUT", { type: true, id: true, class: true });
      t3 = claim_space(div1_nodes);
      label1 = claim_element(div1_nodes, "LABEL", { for: true });
      var label1_nodes = children(label1);
      t4 = claim_text(label1_nodes, "Mint Amount");
      label1_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      input1 = claim_element(div1_nodes, "INPUT", { type: true, id: true, class: true });
      t6 = claim_space(div1_nodes);
      label2 = claim_element(div1_nodes, "LABEL", { for: true });
      var label2_nodes = children(label2);
      t7 = claim_text(label2_nodes, "Bitcoin Tx Id");
      label2_nodes.forEach(detach_dev);
      t8 = claim_space(div1_nodes);
      input2 = claim_element(div1_nodes, "INPUT", { type: true, id: true, class: true });
      t9 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t10 = claim_text(button_nodes, "Mint");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(label0, "for", "transact-path");
      add_location(label0, file$3, 19, 6, 648);
      attr_dev(input0, "type", "text");
      attr_dev(input0, "id", "stxAddress");
      attr_dev(input0, "class", "form-control");
      add_location(input0, file$3, 20, 6, 702);
      attr_dev(label1, "for", "transact-path");
      add_location(label1, file$3, 21, 6, 790);
      attr_dev(input1, "type", "number");
      attr_dev(input1, "id", "pegInAmount");
      attr_dev(input1, "class", "form-control");
      add_location(input1, file$3, 22, 6, 843);
      attr_dev(label2, "for", "transact-path");
      add_location(label2, file$3, 23, 6, 935);
      attr_dev(input2, "type", "text");
      attr_dev(input2, "id", "btcTxId");
      attr_dev(input2, "class", "form-control");
      add_location(input2, file$3, 24, 6, 990);
      attr_dev(button, "class", "btn btn-outline-light");
      add_location(button, file$3, 25, 23, 1089);
      attr_dev(div0, "class", "col");
      add_location(div0, file$3, 25, 6, 1072);
      attr_dev(div1, "class", "col");
      add_location(div1, file$3, 17, 4, 567);
      attr_dev(div2, "class", "row s-5PoOFRA3vSUJ");
      add_location(div2, file$3, 16, 0, 545);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, div1);
      if (if_block)
        if_block.m(div1, null);
      append_hydration_dev(div1, t0);
      append_hydration_dev(div1, label0);
      append_hydration_dev(label0, t1);
      append_hydration_dev(div1, t2);
      append_hydration_dev(div1, input0);
      set_input_value(
        input0,
        /*stxAddress*/
        ctx[1]
      );
      append_hydration_dev(div1, t3);
      append_hydration_dev(div1, label1);
      append_hydration_dev(label1, t4);
      append_hydration_dev(div1, t5);
      append_hydration_dev(div1, input1);
      set_input_value(
        input1,
        /*pegInAmount*/
        ctx[0]
      );
      append_hydration_dev(div1, t6);
      append_hydration_dev(div1, label2);
      append_hydration_dev(label2, t7);
      append_hydration_dev(div1, t8);
      append_hydration_dev(div1, input2);
      set_input_value(
        input2,
        /*btcTxId*/
        ctx[2]
      );
      append_hydration_dev(div1, t9);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, button);
      append_hydration_dev(button, t10);
      if (!mounted) {
        dispose = [
          listen_dev(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[5]
          ),
          listen_dev(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[6]
          ),
          listen_dev(
            input2,
            "input",
            /*input2_input_handler*/
            ctx[7]
          ),
          listen_dev(
            button,
            "click",
            /*click_handler*/
            ctx[8],
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
      if (
        /*error*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(div1, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*stxAddress*/
      2 && input0.value !== /*stxAddress*/
      ctx2[1]) {
        set_input_value(
          input0,
          /*stxAddress*/
          ctx2[1]
        );
      }
      if (dirty & /*pegInAmount*/
      1 && to_number(input1.value) !== /*pegInAmount*/
      ctx2[0]) {
        set_input_value(
          input1,
          /*pegInAmount*/
          ctx2[0]
        );
      }
      if (dirty & /*btcTxId*/
      4 && input2.value !== /*btcTxId*/
      ctx2[2]) {
        set_input_value(
          input2,
          /*btcTxId*/
          ctx2[2]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(9, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("MintTokens", slots, []);
  let pegInAmount = (_a = $sbtcConfig == null ? void 0 : $sbtcConfig.pegInTransaction) == null ? void 0 : _a.pegInData.amount;
  let stxAddress = (_b = $sbtcConfig == null ? void 0 : $sbtcConfig.pegInTransaction) == null ? void 0 : _b.pegInData.stacksAddress;
  let btcTxId;
  let error;
  const mint = async () => {
    if (!stxAddress || !btcTxId) {
      $$invalidate(3, error = "Please enter the amount, stacks address and bitcoin transaction");
      return;
    }
    $$invalidate(3, error = void 0);
    await mintTo(pegInAmount || 0, stxAddress, btcTxId);
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<MintTokens> was created with unknown prop '${key}'`);
  });
  function input0_input_handler() {
    stxAddress = this.value;
    $$invalidate(1, stxAddress);
  }
  function input1_input_handler() {
    pegInAmount = to_number(this.value);
    $$invalidate(0, pegInAmount);
  }
  function input2_input_handler() {
    btcTxId = this.value;
    $$invalidate(2, btcTxId);
  }
  const click_handler = () => mint();
  $$self.$capture_state = () => ({
    mintTo,
    sbtcConfig,
    pegInAmount,
    stxAddress,
    btcTxId,
    error,
    mint,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("pegInAmount" in $$props2)
      $$invalidate(0, pegInAmount = $$props2.pegInAmount);
    if ("stxAddress" in $$props2)
      $$invalidate(1, stxAddress = $$props2.stxAddress);
    if ("btcTxId" in $$props2)
      $$invalidate(2, btcTxId = $$props2.btcTxId);
    if ("error" in $$props2)
      $$invalidate(3, error = $$props2.error);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    pegInAmount,
    stxAddress,
    btcTxId,
    error,
    mint,
    input0_input_handler,
    input1_input_handler,
    input2_input_handler,
    click_handler
  ];
}
class MintTokens extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "MintTokens",
      options,
      id: create_fragment$3.name
    });
  }
}
const BurnTokens_svelte_svelte_type_style_lang = "";
const file$2 = "src/lib/components/admin/BurnTokens.svelte";
function create_if_block(ctx) {
  let p;
  let t;
  const block = {
    c: function create() {
      p = element("p");
      t = text(
        /*error*/
        ctx[3]
      );
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*error*/
        ctx[3]
      );
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-danger");
      add_location(p, file$2, 18, 17, 609);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*error*/
      8)
        set_data_dev(
          t,
          /*error*/
          ctx2[3]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(19:6) {#if error}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let div2;
  let div1;
  let t0;
  let label0;
  let t1;
  let t2;
  let input0;
  let t3;
  let label1;
  let t4;
  let t5;
  let input1;
  let t6;
  let label2;
  let t7;
  let t8;
  let input2;
  let t9;
  let div0;
  let button;
  let t10;
  let mounted;
  let dispose;
  let if_block = (
    /*error*/
    ctx[3] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      label0 = element("label");
      t1 = text("Burn Address");
      t2 = space();
      input0 = element("input");
      t3 = space();
      label1 = element("label");
      t4 = text("Burn Amount");
      t5 = space();
      input1 = element("input");
      t6 = space();
      label2 = element("label");
      t7 = text("Bitcoin Tx Id");
      t8 = space();
      input2 = element("input");
      t9 = space();
      div0 = element("div");
      button = element("button");
      t10 = text("Burn");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block)
        if_block.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      label0 = claim_element(div1_nodes, "LABEL", { for: true });
      var label0_nodes = children(label0);
      t1 = claim_text(label0_nodes, "Burn Address");
      label0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      input0 = claim_element(div1_nodes, "INPUT", { type: true, id: true, class: true });
      t3 = claim_space(div1_nodes);
      label1 = claim_element(div1_nodes, "LABEL", { for: true });
      var label1_nodes = children(label1);
      t4 = claim_text(label1_nodes, "Burn Amount");
      label1_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      input1 = claim_element(div1_nodes, "INPUT", { type: true, id: true, class: true });
      t6 = claim_space(div1_nodes);
      label2 = claim_element(div1_nodes, "LABEL", { for: true });
      var label2_nodes = children(label2);
      t7 = claim_text(label2_nodes, "Bitcoin Tx Id");
      label2_nodes.forEach(detach_dev);
      t8 = claim_space(div1_nodes);
      input2 = claim_element(div1_nodes, "INPUT", { type: true, id: true, class: true });
      t9 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t10 = claim_text(button_nodes, "Burn");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(label0, "for", "transact-path");
      add_location(label0, file$2, 19, 6, 655);
      attr_dev(input0, "type", "text");
      attr_dev(input0, "id", "stxAddress");
      attr_dev(input0, "class", "form-control");
      add_location(input0, file$2, 20, 6, 709);
      attr_dev(label1, "for", "transact-path");
      add_location(label1, file$2, 21, 6, 797);
      attr_dev(input1, "type", "number");
      attr_dev(input1, "id", "pegInAmount");
      attr_dev(input1, "class", "form-control");
      add_location(input1, file$2, 22, 6, 850);
      attr_dev(label2, "for", "transact-path");
      add_location(label2, file$2, 23, 6, 943);
      attr_dev(input2, "type", "text");
      attr_dev(input2, "id", "btcTxId");
      attr_dev(input2, "class", "form-control");
      add_location(input2, file$2, 24, 6, 998);
      attr_dev(button, "class", "btn btn-outline-light");
      add_location(button, file$2, 25, 23, 1097);
      attr_dev(div0, "class", "col");
      add_location(div0, file$2, 25, 6, 1080);
      attr_dev(div1, "class", "col");
      add_location(div1, file$2, 17, 4, 574);
      attr_dev(div2, "class", "row s-ntrJ03xL2Xal");
      add_location(div2, file$2, 16, 0, 552);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, div1);
      if (if_block)
        if_block.m(div1, null);
      append_hydration_dev(div1, t0);
      append_hydration_dev(div1, label0);
      append_hydration_dev(label0, t1);
      append_hydration_dev(div1, t2);
      append_hydration_dev(div1, input0);
      set_input_value(
        input0,
        /*stxAddress*/
        ctx[1]
      );
      append_hydration_dev(div1, t3);
      append_hydration_dev(div1, label1);
      append_hydration_dev(label1, t4);
      append_hydration_dev(div1, t5);
      append_hydration_dev(div1, input1);
      set_input_value(
        input1,
        /*pegOutAmount*/
        ctx[0]
      );
      append_hydration_dev(div1, t6);
      append_hydration_dev(div1, label2);
      append_hydration_dev(label2, t7);
      append_hydration_dev(div1, t8);
      append_hydration_dev(div1, input2);
      set_input_value(
        input2,
        /*btcTxId*/
        ctx[2]
      );
      append_hydration_dev(div1, t9);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, button);
      append_hydration_dev(button, t10);
      if (!mounted) {
        dispose = [
          listen_dev(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[5]
          ),
          listen_dev(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[6]
          ),
          listen_dev(
            input2,
            "input",
            /*input2_input_handler*/
            ctx[7]
          ),
          listen_dev(
            button,
            "click",
            /*click_handler*/
            ctx[8],
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
      if (
        /*error*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div1, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*stxAddress*/
      2 && input0.value !== /*stxAddress*/
      ctx2[1]) {
        set_input_value(
          input0,
          /*stxAddress*/
          ctx2[1]
        );
      }
      if (dirty & /*pegOutAmount*/
      1 && to_number(input1.value) !== /*pegOutAmount*/
      ctx2[0]) {
        set_input_value(
          input1,
          /*pegOutAmount*/
          ctx2[0]
        );
      }
      if (dirty & /*btcTxId*/
      4 && input2.value !== /*btcTxId*/
      ctx2[2]) {
        set_input_value(
          input2,
          /*btcTxId*/
          ctx2[2]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      if (if_block)
        if_block.d();
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
function instance$2($$self, $$props, $$invalidate) {
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(9, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BurnTokens", slots, []);
  let pegOutAmount = (_a = $sbtcConfig == null ? void 0 : $sbtcConfig.pegOutTransaction) == null ? void 0 : _a.pegInData.amount;
  let stxAddress = (_b = $sbtcConfig == null ? void 0 : $sbtcConfig.pegInTransaction) == null ? void 0 : _b.pegInData.stacksAddress;
  let btcTxId;
  let error;
  const burn = async () => {
    if (!stxAddress || !btcTxId) {
      $$invalidate(3, error = "Please enter the amount, stacks address and bitcoin transaction");
      return;
    }
    $$invalidate(3, error = void 0);
    await burnFrom(pegOutAmount || 0, stxAddress, btcTxId);
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BurnTokens> was created with unknown prop '${key}'`);
  });
  function input0_input_handler() {
    stxAddress = this.value;
    $$invalidate(1, stxAddress);
  }
  function input1_input_handler() {
    pegOutAmount = to_number(this.value);
    $$invalidate(0, pegOutAmount);
  }
  function input2_input_handler() {
    btcTxId = this.value;
    $$invalidate(2, btcTxId);
  }
  const click_handler = () => burn();
  $$self.$capture_state = () => ({
    burnFrom,
    sbtcConfig,
    pegOutAmount,
    stxAddress,
    btcTxId,
    error,
    burn,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("pegOutAmount" in $$props2)
      $$invalidate(0, pegOutAmount = $$props2.pegOutAmount);
    if ("stxAddress" in $$props2)
      $$invalidate(1, stxAddress = $$props2.stxAddress);
    if ("btcTxId" in $$props2)
      $$invalidate(2, btcTxId = $$props2.btcTxId);
    if ("error" in $$props2)
      $$invalidate(3, error = $$props2.error);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    pegOutAmount,
    stxAddress,
    btcTxId,
    error,
    burn,
    input0_input_handler,
    input1_input_handler,
    input2_input_handler,
    click_handler
  ];
}
class BurnTokens extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BurnTokens",
      options,
      id: create_fragment$2.name
    });
  }
}
const Coordinator_svelte_svelte_type_style_lang = "";
const file$1 = "src/lib/components/admin/Coordinator.svelte";
function create_fragment$1(ctx) {
  let div8;
  let div3;
  let div2;
  let div0;
  let t0;
  let t1;
  let t2;
  let input0;
  let t3;
  let div1;
  let button0;
  let t4;
  let t5;
  let div7;
  let div6;
  let div4;
  let t6;
  let t7_value = (
    /*$sbtcConfig*/
    ctx[2].sbtcContractData.sbtcWalletAddress + ""
  );
  let t7;
  let t8;
  let input1;
  let t9;
  let div5;
  let button1;
  let t10;
  let t11;
  let minttokens;
  let t12;
  let burntokens;
  let current;
  let mounted;
  let dispose;
  minttokens = new MintTokens({ $$inline: true });
  burntokens = new BurnTokens({ $$inline: true });
  const block = {
    c: function create() {
      div8 = element("div");
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = text("Coordinator: ");
      t1 = text(
        /*coordinator*/
        ctx[0]
      );
      t2 = space();
      input0 = element("input");
      t3 = space();
      div1 = element("div");
      button0 = element("button");
      t4 = text("Set Coordinator");
      t5 = space();
      div7 = element("div");
      div6 = element("div");
      div4 = element("div");
      t6 = text("SBTC Wallet: ");
      t7 = text(t7_value);
      t8 = space();
      input1 = element("input");
      t9 = space();
      div5 = element("div");
      button1 = element("button");
      t10 = text("Set BTC Wallet");
      t11 = space();
      create_component(minttokens.$$.fragment);
      t12 = space();
      create_component(burntokens.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div8 = claim_element(nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div3 = claim_element(div8_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Coordinator: ");
      t1 = claim_text(
        div0_nodes,
        /*coordinator*/
        ctx[0]
      );
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      input0 = claim_element(div2_nodes, "INPUT", { type: true, id: true, class: true });
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t4 = claim_text(button0_nodes, "Set Coordinator");
      button0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t5 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", {});
      var div4_nodes = children(div4);
      t6 = claim_text(div4_nodes, "SBTC Wallet: ");
      t7 = claim_text(div4_nodes, t7_value);
      div4_nodes.forEach(detach_dev);
      t8 = claim_space(div6_nodes);
      input1 = claim_element(div6_nodes, "INPUT", { type: true, id: true, class: true });
      t9 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      button1 = claim_element(div5_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t10 = claim_text(button1_nodes, "Set BTC Wallet");
      button1_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t11 = claim_space(div8_nodes);
      claim_component(minttokens.$$.fragment, div8_nodes);
      t12 = claim_space(div8_nodes);
      claim_component(burntokens.$$.fragment, div8_nodes);
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file$1, 24, 6, 918);
      attr_dev(input0, "type", "text");
      attr_dev(input0, "id", "stxAddress");
      attr_dev(input0, "class", "form-control");
      add_location(input0, file$1, 25, 6, 962);
      attr_dev(button0, "class", "btn btn-outline-light");
      add_location(button0, file$1, 26, 11, 1056);
      add_location(div1, file$1, 26, 6, 1051);
      attr_dev(div2, "class", "col");
      add_location(div2, file$1, 23, 4, 894);
      attr_dev(div3, "class", "row s-7H2pJ0gch52l");
      add_location(div3, file$1, 22, 2, 872);
      add_location(div4, file$1, 31, 6, 1223);
      attr_dev(input1, "type", "text");
      attr_dev(input1, "id", "sbtcWallet");
      attr_dev(input1, "class", "form-control");
      add_location(input1, file$1, 32, 6, 1302);
      attr_dev(button1, "class", "btn btn-outline-light");
      add_location(button1, file$1, 33, 23, 1407);
      attr_dev(div5, "class", "col");
      add_location(div5, file$1, 33, 6, 1390);
      attr_dev(div6, "class", "col");
      add_location(div6, file$1, 30, 4, 1199);
      attr_dev(div7, "class", "row s-7H2pJ0gch52l");
      add_location(div7, file$1, 29, 2, 1177);
      attr_dev(div8, "class", "card border p-4");
      add_location(div8, file$1, 21, 0, 840);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div8, anchor);
      append_hydration_dev(div8, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div2, t2);
      append_hydration_dev(div2, input0);
      set_input_value(
        input0,
        /*coordinator*/
        ctx[0]
      );
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, button0);
      append_hydration_dev(button0, t4);
      append_hydration_dev(div8, t5);
      append_hydration_dev(div8, div7);
      append_hydration_dev(div7, div6);
      append_hydration_dev(div6, div4);
      append_hydration_dev(div4, t6);
      append_hydration_dev(div4, t7);
      append_hydration_dev(div6, t8);
      append_hydration_dev(div6, input1);
      set_input_value(
        input1,
        /*sbtcWallet*/
        ctx[1]
      );
      append_hydration_dev(div6, t9);
      append_hydration_dev(div6, div5);
      append_hydration_dev(div5, button1);
      append_hydration_dev(button1, t10);
      append_hydration_dev(div8, t11);
      mount_component(minttokens, div8, null);
      append_hydration_dev(div8, t12);
      mount_component(burntokens, div8, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[5]
          ),
          listen_dev(
            button0,
            "click",
            /*click_handler*/
            ctx[6],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[7]
          ),
          listen_dev(
            button1,
            "click",
            /*click_handler_1*/
            ctx[8],
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
      if (!current || dirty & /*coordinator*/
      1)
        set_data_dev(
          t1,
          /*coordinator*/
          ctx2[0]
        );
      if (dirty & /*coordinator*/
      1 && input0.value !== /*coordinator*/
      ctx2[0]) {
        set_input_value(
          input0,
          /*coordinator*/
          ctx2[0]
        );
      }
      if ((!current || dirty & /*$sbtcConfig*/
      4) && t7_value !== (t7_value = /*$sbtcConfig*/
      ctx2[2].sbtcContractData.sbtcWalletAddress + ""))
        set_data_dev(t7, t7_value);
      if (dirty & /*sbtcWallet*/
      2 && input1.value !== /*sbtcWallet*/
      ctx2[1]) {
        set_input_value(
          input1,
          /*sbtcWallet*/
          ctx2[1]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(minttokens.$$.fragment, local);
      transition_in(burntokens.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(minttokens.$$.fragment, local);
      transition_out(burntokens.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div8);
      destroy_component(minttokens);
      destroy_component(burntokens);
      mounted = false;
      run_all(dispose);
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
  var _a;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Coordinator", slots, []);
  let coordinator = "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant".split(".")[0];
  if ($sbtcConfig.sbtcContractData.sbtcWalletAddress) {
    coordinator = $sbtcConfig.sbtcContractData.coordinator.addr.value;
  }
  let sbtcWallet = "tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e";
  if ((_a = $sbtcConfig == null ? void 0 : $sbtcConfig.sbtcContractData) == null ? void 0 : _a.sbtcWalletAddress) {
    sbtcWallet = $sbtcConfig.sbtcContractData.sbtcWalletAddress;
  }
  const coordinate = async () => {
    await setCoordinator(coordinator);
  };
  const wallet = async () => {
    await setBtcWallet(sbtcWallet);
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Coordinator> was created with unknown prop '${key}'`);
  });
  function input0_input_handler() {
    coordinator = this.value;
    $$invalidate(0, coordinator);
  }
  const click_handler = () => coordinate();
  function input1_input_handler() {
    sbtcWallet = this.value;
    $$invalidate(1, sbtcWallet);
  }
  const click_handler_1 = () => wallet();
  $$self.$capture_state = () => ({
    setCoordinator,
    setBtcWallet,
    coordinators,
    mintTo,
    MintTokens,
    BurnTokens,
    sbtcConfig,
    coordinator,
    sbtcWallet,
    coordinate,
    wallet,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("coordinator" in $$props2)
      $$invalidate(0, coordinator = $$props2.coordinator);
    if ("sbtcWallet" in $$props2)
      $$invalidate(1, sbtcWallet = $$props2.sbtcWallet);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    coordinator,
    sbtcWallet,
    $sbtcConfig,
    coordinate,
    wallet,
    input0_input_handler,
    click_handler,
    input1_input_handler,
    click_handler_1
  ];
}
class Coordinator extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Coordinator",
      options,
      id: create_fragment$1.name
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/admin/+page.svelte";
function create_fragment(ctx) {
  let section;
  let div1;
  let div0;
  let h1;
  let span;
  let t0;
  let t1;
  let t2;
  let h6;
  let t3_value = "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant";
  let t3;
  let t4;
  let div3;
  let div2;
  let coordinator;
  let current;
  coordinator = new Coordinator({ $$inline: true });
  const block = {
    c: function create() {
      section = element("section");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      span = element("span");
      t0 = text("sBTC");
      t1 = text(" Coordinator");
      t2 = space();
      h6 = element("h6");
      t3 = text(t3_value);
      t4 = space();
      div3 = element("div");
      div2 = element("div");
      create_component(coordinator.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div1 = claim_element(section_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "sBTC");
      span_nodes.forEach(detach_dev);
      t1 = claim_text(h1_nodes, " Coordinator");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      h6 = claim_element(div0_nodes, "H6", {});
      var h6_nodes = children(h6);
      t3 = claim_text(h6_nodes, t3_value);
      h6_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(coordinator.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "strokeme-info");
      add_location(span, file, 7, 25, 245);
      attr_dev(h1, "class", "text-info s-7rWotIBe7yq4");
      add_location(h1, file, 7, 3, 223);
      add_location(h6, file, 8, 3, 305);
      attr_dev(div0, "class", "card-width");
      add_location(div0, file, 6, 2, 195);
      attr_dev(div1, "class", "my-4 p-4");
      add_location(div1, file, 5, 1, 170);
      attr_dev(div2, "class", "col");
      add_location(div2, file, 12, 2, 392);
      attr_dev(div3, "class", "row");
      add_location(div3, file, 11, 1, 372);
      attr_dev(section, "class", "bg-dark s-7rWotIBe7yq4");
      add_location(section, file, 4, 0, 143);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, h1);
      append_hydration_dev(h1, span);
      append_hydration_dev(span, t0);
      append_hydration_dev(h1, t1);
      append_hydration_dev(div0, t2);
      append_hydration_dev(div0, h6);
      append_hydration_dev(h6, t3);
      append_hydration_dev(section, t4);
      append_hydration_dev(section, div3);
      append_hydration_dev(div3, div2);
      mount_component(coordinator, div2, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(coordinator.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(coordinator.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(coordinator);
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({ Coordinator, sbtcConfig });
  return [];
}
class Page extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
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
