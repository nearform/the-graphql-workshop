import{_ as h}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bnsm6cE-.js";import{o as k,c as r,k as a,e as s,l as p,m as d,q as c,s as o,B as e,aa as i}from"./modules/vue-9M24w38T.js";import{I as g}from"./slidev/default-Bu7-0MCT.js";import{u as y,f as D}from"./slidev/context-iTOmc1-3.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-DFRdemaB.js";import"./modules/shiki-D165QSPi.js";const B=s("h1",null,"Step 11: Solution / 2",-1),m={class:"middle-flex"},A=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// services/service2.js")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," service2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  schema"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," `")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  enum Role {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    ADMIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    VERIFIED")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  directive @auth(role: Role) on OBJECT | FIELD_DEFINITION")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  type Post @key(fields: "id") {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    id: ID!")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    title: String")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    content: String")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    author: User @auth(role: ADMIN)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  type User @key(fields: "id") @extends {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    id: ID! @external")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    name: String @external")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    posts: [Post]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  }"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"`"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),b={__name:"slides.md__slidev_46",setup(C){const{$slidev:_,$nav:f,$clicksContext:l,$clicks:u,$page:v,$renderContext:I,$frontmatter:n}=y();return l.setup(),(x,$)=>{const t=h;return k(),r(g,c(o(e(D)(e(n),45))),{default:a(()=>[B,s("div",m,[p(t,d({},{ranges:["1,4-9,15"]}),{default:a(()=>[A]),_:1},16)])]),_:1},16)}}};export{b as default};
