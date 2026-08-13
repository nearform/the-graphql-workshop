import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s,x as c}from"./modules/shiki-Dnbpix4N.js";import{n as l,t as u}from"./slidev/context-Byg62aKc.js";import{t as d}from"./slidev/default-LtxgH3g_.js";import{t as f}from"./slidev/CodeBlockWrapper-ByoxIcO4.js";var p={class:`middle-flex`},m={__name:`slides.md__slidev_46`,setup(m){let{$slidev:h,$nav:g,$clicksContext:_,$clicks:v,$page:y,$renderContext:b,$frontmatter:x}=l();return _.setup(),(l,m)=>{let h=f;return e(),r(d,o(t(s(u)(s(x),45))),{default:n(()=>[m[1]||=a(`h1`,null,`Step 11: Solution / 2`,-1),a(`div`,p,[c(h,{title:``,ranges:[`1,4-9,15`]},{default:n(()=>[...m[0]||=[a(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[a(`code`,{class:`language-js`},[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#758575DD`,"--shiki-light":`#A0ADA0`}},`// services/service2.js`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#CB7676`,"--shiki-light":`#AB5959`}},`const`),a(`span`,{style:{"--shiki-dark":`#BD976A`,"--shiki-light":`#B07D48`}},` service2`),a(`span`,{style:{"--shiki-dark":`#666666`,"--shiki-light":`#999999`}},` =`),a(`span`,{style:{"--shiki-dark":`#666666`,"--shiki-light":`#999999`}},` {`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#B8A965`,"--shiki-light":`#998418`}},`  schema`),a(`span`,{style:{"--shiki-dark":`#666666`,"--shiki-light":`#999999`}},`:`),a(`span`,{style:{"--shiki-dark":`#C98A7D77`,"--shiki-light":`#B5695977`}}," `")]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`  enum Role {`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    ADMIN`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    VERIFIED`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`  }`)]),i(`
`),a(`span`,{class:`line`}),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`  directive @auth(role: Role) on OBJECT | FIELD_DEFINITION`)]),i(`
`),a(`span`,{class:`line`}),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`  type Post @key(fields: "id") {`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    id: ID!`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    title: String`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    content: String`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    author: User @auth(role: ADMIN)`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`  }`)]),i(`
`),a(`span`,{class:`line`}),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`  type User @key(fields: "id") @extends {`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    id: ID! @external`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    name: String @external`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`    posts: [Post]`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#C98A7D`,"--shiki-light":`#B56959`}},`  }`),a(`span`,{style:{"--shiki-dark":`#C98A7D77`,"--shiki-light":`#B5695977`}},"`"),a(`span`,{style:{"--shiki-dark":`#666666`,"--shiki-light":`#999999`}},`,`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#666666`,"--shiki-light":`#999999`}},`  ...`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-dark":`#666666`,"--shiki-light":`#999999`}},`}`)])])],-1)]]),_:1})])]),_:1},16)}}};export{m as default};