import{_ as m}from"./CodeBlockWrapper-DuM0Fw-_.js";import{I as y}from"./default-BiAZGAXa.js";import{_ as f,aX as k}from"../index-DdraXkq5.js";import{p,u as o,f as u}from"./context-B1Lq7m_7.js";import{o as D,c as B,k as d,e as s,l as C,m as A,q as v,s as I,a6 as i}from"../modules/vue-Z6Fy-qlH.js";import"../modules/unplugin-icons-Cblb7WQL.js";import"../modules/shiki-Dfij_pE2.js";const x={__name:"45",setup(c,{expose:t}){t(),p(k);const{$slidev:n,$nav:e,$clicksContext:l,$clicks:r,$page:a,$renderContext:g,$frontmatter:_}=o(),h={$slidev:n,$nav:e,$clicksContext:l,$clicks:r,$page:a,$renderContext:g,$frontmatter:_,InjectedLayout:y,get frontmatter(){return k},get useSlideContext(){return o},get _provideFrontmatter(){return p},get _frontmatterToProps(){return u}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}},$=s("h1",null,"Step 11: Solution / 1",-1),E={class:"middle-flex"},P=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// services/service1.js")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," service1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  schema"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," `")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  enum Role {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    ADMIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    VERIFIED")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  directive @auth(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    role: Role")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  ) on OBJECT | FIELD_DEFINITION")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  extend type Query {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    me: User @auth(role: VERIFIED)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  type User @key(fields: "id") {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    id: ID!")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    name: String!")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"  `"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1);function S(c,t,n,e,l,r){const a=m;return D(),B(e.InjectedLayout,v(I(e._frontmatterToProps(e.frontmatter,44))),{default:d(()=>[$,s("div",E,[C(a,A({},{ranges:["1,4-11,14"]}),{default:d(()=>[P]),_:1},16)])]),_:1},16)}const L=f(x,[["render",S],["__file","/@slidev/slides/45.md"]]);export{L as default};
