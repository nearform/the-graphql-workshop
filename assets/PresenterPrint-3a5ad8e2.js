import{h,j as p,k as _,ak as d,c as m,al as u,m as n,am as t,an as o,B as s,F as f,ao as g,ap as v,aq as x,q as r,ar as k,as as y,n as b,at as w,au as N,_ as P}from"./nav-b4a24e48.js";import{N as S}from"./NoteDisplay-5b7fc7f1.js";import{u as V}from"./index-d40c9bdb.js";const j={class:"m-4"},q={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=h({__name:"PresenterPrint",setup(M){p(_),d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:v(s(N))},[t("div",j,[t("div",q,[t("h1",B,o(s(m).title),1),t("div",L,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",C,[t("div",D,o(e==null?void 0:e.no)+"/"+o(s(k)),1),y(" "+o(e==null?void 0:e.title)+" ",1),H])]),b(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",z)):w("v-if",!0)]))),128))])],4))}}),W=P(F,[["__file","/home/runner/work/the-graphql-workshop/the-graphql-workshop/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
