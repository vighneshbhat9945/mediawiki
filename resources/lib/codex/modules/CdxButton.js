"use strict";const e=require("vue"),o=require("./constants.js"),c=require("./useIconOnlyButton.js"),d=require("./_plugin-vue_export-helper.js");require("./useSlotContents2.js");require("./useWarnOnce.js");const p=o.makeStringTypeValidator(o.ButtonActions),v=o.makeStringTypeValidator(o.ButtonWeights),y=o.makeStringTypeValidator(o.ButtonSizes),f=e.defineComponent({name:"CdxButton",props:{action:{type:String,default:"default",validator:p},weight:{type:String,default:"normal",validator:v},size:{type:String,default:"medium",validator:y}},emits:["click"],setup(t,{emit:n,slots:r,attrs:a}){const l=c.useIconOnlyButton(r.default,a,"CdxButton"),s=e.ref(!1);return{rootClasses:e.computed(()=>({["cdx-button--action-".concat(t.action)]:!0,["cdx-button--weight-".concat(t.weight)]:!0,["cdx-button--size-".concat(t.size)]:!0,"cdx-button--framed":t.weight!=="quiet","cdx-button--icon-only":l.value,"cdx-button--is-active":s.value})),onClick:u=>{n("click",u)},setActive:u=>{s.value=u}}}});function g(t,n,r,a,l,s){return e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["cdx-button",t.rootClasses]),onClick:n[0]||(n[0]=(...i)=>t.onClick&&t.onClick(...i)),onKeydown:n[1]||(n[1]=e.withKeys(i=>t.setActive(!0),["space","enter"])),onKeyup:n[2]||(n[2]=e.withKeys(i=>t.setActive(!1),["space","enter"]))},[e.renderSlot(t.$slots,"default")],34)}const m=d._export_sfc(f,[["render",g]]);module.exports=m;
