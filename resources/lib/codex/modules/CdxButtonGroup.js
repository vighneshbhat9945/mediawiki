"use strict";const e=require("vue"),c=require("./buttonHelpers.js"),l=require("./CdxButton.js"),i=require("./Icon.js"),s=require("./_plugin-vue_export-helper.js");require("./constants.js");require("./useIconOnlyButton.js");require("./useSlotContents2.js");require("./useWarnOnce.js");require("./useComputedDirection.js");require("./useComputedLanguage.js");const a=e.defineComponent({name:"CdxButtonGroup",components:{CdxButton:l,CdxIcon:i.CdxIcon},props:{buttons:{type:Array,required:!0,validator:o=>Array.isArray(o)&&o.length>=1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(){return{getButtonLabel:c.getButtonLabel}}});const u={class:"cdx-button-group"};function d(o,_,B,m,k,q){const r=e.resolveComponent("cdx-icon"),n=e.resolveComponent("cdx-button");return e.openBlock(),e.createElementBlock("div",u,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.buttons,t=>(e.openBlock(),e.createBlock(n,{key:t.value,disabled:t.disabled||o.disabled,"aria-label":t.ariaLabel,onClick:x=>o.$emit("click",t.value)},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default",{button:t},()=>[t.icon?(e.openBlock(),e.createBlock(r,{key:0,icon:t.icon},null,8,["icon"])):e.createCommentVNode("v-if",!0),e.createTextVNode(" "+e.toDisplayString(o.getButtonLabel(t)),1)])]),_:2},1032,["disabled","aria-label","onClick"]))),128))])}const p=s._export_sfc(a,[["render",d]]);module.exports=p;
