import{_ as y}from"./CodeBlockWrapper-DuM0Fw-_.js";import{I as m}from"./default-BiAZGAXa.js";import{_ as f,aY as k}from"../index-DdraXkq5.js";import{p,u as o,f as D}from"./context-B1Lq7m_7.js";import{o as u,c as B,k as d,e as s,l as A,m as C,q as v,s as x,a6 as i}from"../modules/vue-Z6Fy-qlH.js";import"../modules/unplugin-icons-Cblb7WQL.js";import"../modules/shiki-Dfij_pE2.js";const I={__name:"46",setup(c,{expose:a}){a(),p(k);const{$slidev:n,$nav:e,$clicksContext:l,$clicks:r,$page:t,$renderContext:g,$frontmatter:_}=o(),h={$slidev:n,$nav:e,$clicksContext:l,$clicks:r,$page:t,$renderContext:g,$frontmatter:_,InjectedLayout:m,get frontmatter(){return k},get useSlideContext(){return o},get _provideFrontmatter(){return p},get _frontmatterToProps(){return D}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}},P=s("h1",null,"Step 11: Solution / 2",-1),S={class:"middle-flex"},$=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// services/service2.js")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," service2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  schema"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," `")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  }"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"`"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1);function N(c,a,n,e,l,r){const t=y;return u(),B(e.InjectedLayout,v(x(e._frontmatterToProps(e.frontmatter,45))),{default:d(()=>[P,s("div",S,[A(t,C({},{ranges:["1,4-9,15"]}),{default:d(()=>[$]),_:1},16)])]),_:1},16)}const L=f(I,[["render",N],["__file","/@slidev/slides/46.md"]]);export{L as default};
