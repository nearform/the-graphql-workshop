import{_ as h}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bnsm6cE-.js";import{o as k,c as r,k as a,e as s,l as p,m as c,q as d,s as o,B as e,aa as i}from"./modules/vue-9M24w38T.js";import{I as g}from"./slidev/default-Bu7-0MCT.js";import{u as y,f as B}from"./slidev/context-iTOmc1-3.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-DFRdemaB.js";import"./modules/shiki-D165QSPi.js";const D=s("h1",null,"Step 11: Solution / 1",-1),m={class:"middle-flex"},_=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// services/service1.js")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," service1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  schema"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," `")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"  `"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),T={__name:"slides.md__slidev_45",setup(A){const{$slidev:C,$nav:f,$clicksContext:l,$clicks:u,$page:v,$renderContext:I,$frontmatter:n}=y();return l.setup(),(x,$)=>{const t=h;return k(),r(g,d(o(e(B)(e(n),44))),{default:a(()=>[D,s("div",m,[p(t,c({},{ranges:["1,4-11,14"]}),{default:a(()=>[_]),_:1},16)])]),_:1},16)}}};export{T as default};
