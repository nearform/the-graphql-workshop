import{I as f}from"./default-BiAZGAXa.js";import{_,aW as i}from"../index-DdraXkq5.js";import{p as c,u,f as g}from"./context-B1Lq7m_7.js";import{o as v,c as x,k as y,q as w,s as k,e,a6 as t}from"../modules/vue-Z6Fy-qlH.js";import"../modules/shiki-Dfij_pE2.js";const $={__name:"44",setup(d,{expose:o}){o(),c(i);const{$slidev:a,$nav:r,$clicksContext:s,$clicks:l,$page:p,$renderContext:h,$frontmatter:m}=u(),n={$slidev:a,$nav:r,$clicksContext:s,$clicks:l,$page:p,$renderContext:h,$frontmatter:m,InjectedLayout:f,get frontmatter(){return i},get useSlideContext(){return u},get _provideFrontmatter(){return c},get _frontmatterToProps(){return g}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},P=e("div",{class:"dense"},[e("h1",null,"Step 11: Authorization"),e("ul",null,[e("li",null,[t("Install the "),e("code",null,"mercurius-auth"),t(" package and register it with the gateway")]),e("li",null,[t("Specify the following properties in the options object for the plugin: "),e("ul",null,[e("li",null,[e("code",null,"authDirective"),t(" - the name of the directive you just defined")]),e("li",null,[e("code",null,"authContext"),t(" - logic to extract the user’s role. For simplicity’s sake, we will extract the user’s role from the "),e("code",null,"X-Role"),t(" request header. In a real-world application, you may pass a JSON Web Token (JWT) via the headers, verify and decode it to extract the user’s ID, role(s), and permission(s).")]),e("li",null,[e("code",null,"applyPolicy"),t(" - logic that determines, given the user’s role, whether the server should allow the client to access this field or object?")])])])])],-1);function S(d,o,a,r,s,l){return v(),x(r.InjectedLayout,w(k(r._frontmatterToProps(r.frontmatter,43))),{default:y(()=>[P]),_:1},16)}const B=_($,[["render",S],["__file","/@slidev/slides/44.md"]]);export{B as default};
