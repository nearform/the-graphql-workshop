var hy=Object.defineProperty,my=Object.defineProperties;var gy=Object.getOwnPropertyDescriptors;var so=Object.getOwnPropertySymbols;var Ea=Object.prototype.hasOwnProperty,wa=Object.prototype.propertyIsEnumerable;var Da=(s,t,n)=>t in s?hy(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,De=(s,t)=>{for(var n in t||(t={}))Ea.call(t,n)&&Da(s,n,t[n]);if(so)for(var n of so(t))wa.call(t,n)&&Da(s,n,t[n]);return s},Ye=(s,t)=>my(s,gy(t));var pl=(s,t)=>{var n={};for(var o in s)Ea.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&so)for(var o of so(s))t.indexOf(o)<0&&wa.call(s,o)&&(n[o]=s[o]);return n};const Ay=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};Ay();function Cr(s,t){const n=Object.create(null),o=s.split(",");for(let l=0;l<o.length;l++)n[o[l]]=!0;return t?l=>!!n[l.toLowerCase()]:l=>!!n[l]}const vy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",by=Cr(vy);function Bc(s){return!!s||s===""}function ls(s){if(se(s)){const t={};for(let n=0;n<s.length;n++){const o=s[n],l=Ie(o)?wy(o):ls(o);if(l)for(const a in l)t[a]=l[a]}return t}else{if(Ie(s))return s;if(Ue(s))return s}}const Dy=/;(?![^(]*\))/g,Ey=/:(.+)/;function wy(s){const t={};return s.split(Dy).forEach(n=>{if(n){const o=n.split(Ey);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Me(s){let t="";if(Ie(s))t=s;else if(se(s))for(let n=0;n<s.length;n++){const o=Me(s[n]);o&&(t+=o+" ")}else if(Ue(s))for(const n in s)s[n]&&(t+=n+" ");return t.trim()}function le(s){if(!s)return null;let{class:t,style:n}=s;return t&&!Ie(t)&&(s.class=Me(t)),n&&(s.style=ls(n)),s}const wt=s=>Ie(s)?s:s==null?"":se(s)||Ue(s)&&(s.toString===Sc||!ce(s.toString))?JSON.stringify(s,xc,2):String(s),xc=(s,t)=>t&&t.__v_isRef?xc(s,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,l])=>(n[`${o} =>`]=l,n),{})}:Cc(t)?{[`Set(${t.size})`]:[...t.values()]}:Ue(t)&&!se(t)&&!Fc(t)?String(t):t,Se={},Nt=[],xs=()=>{},_y=()=>!1,ky=/^on[^a-z]/,Ro=s=>ky.test(s),zr=s=>s.startsWith("onUpdate:"),ss=Object.assign,Sr=(s,t)=>{const n=s.indexOf(t);n>-1&&s.splice(n,1)},By=Object.prototype.hasOwnProperty,ge=(s,t)=>By.call(s,t),se=Array.isArray,Ut=s=>No(s)==="[object Map]",Cc=s=>No(s)==="[object Set]",ce=s=>typeof s=="function",Ie=s=>typeof s=="string",Fr=s=>typeof s=="symbol",Ue=s=>s!==null&&typeof s=="object",zc=s=>Ue(s)&&ce(s.then)&&ce(s.catch),Sc=Object.prototype.toString,No=s=>Sc.call(s),xy=s=>No(s).slice(8,-1),Fc=s=>No(s)==="[object Object]",Tr=s=>Ie(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,fo=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=s=>{const t=Object.create(null);return n=>t[n]||(t[n]=s(n))},Cy=/-(\w)/g,Is=Uo(s=>s.replace(Cy,(t,n)=>n?n.toUpperCase():"")),zy=/\B([A-Z])/g,Bt=Uo(s=>s.replace(zy,"-$1").toLowerCase()),Ho=Uo(s=>s.charAt(0).toUpperCase()+s.slice(1)),ul=Uo(s=>s?`on${Ho(s)}`:""),On=(s,t)=>!Object.is(s,t),Ht=(s,t)=>{for(let n=0;n<s.length;n++)s[n](t)},_o=(s,t,n)=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,value:n})},Il=s=>{const t=parseFloat(s);return isNaN(t)?s:t};let _a;const Sy=()=>_a||(_a=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let cs;class Tc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&cs&&(this.parent=cs,this.index=(cs.scopes||(cs.scopes=[])).push(this)-1)}run(t){if(this.active){const n=cs;try{return cs=this,t()}finally{cs=n}}}on(){cs=this}off(){cs=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function Fy(s){return new Tc(s)}function Ty(s,t=cs){t&&t.active&&t.effects.push(s)}function Py(){return cs}function Oy(s){cs&&cs.cleanups.push(s)}const Pr=s=>{const t=new Set(s);return t.w=0,t.n=0,t},Pc=s=>(s.w&rt)>0,Oc=s=>(s.n&rt)>0,$y=({deps:s})=>{if(s.length)for(let t=0;t<s.length;t++)s[t].w|=rt},qy=s=>{const{deps:t}=s;if(t.length){let n=0;for(let o=0;o<t.length;o++){const l=t[o];Pc(l)&&!Oc(l)?l.delete(s):t[n++]=l,l.w&=~rt,l.n&=~rt}t.length=n}},Ll=new WeakMap;let gn=0,rt=1;const jl=30;let ks;const vt=Symbol(""),Rl=Symbol("");class Or{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ty(this,o)}run(){if(!this.active)return this.fn();let t=ks,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ks,ks=this,et=!0,rt=1<<++gn,gn<=jl?$y(this):ka(this),this.fn()}finally{gn<=jl&&qy(this),rt=1<<--gn,ks=this.parent,et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ks===this?this.deferStop=!0:this.active&&(ka(this),this.onStop&&this.onStop(),this.active=!1)}}function ka(s){const{deps:t}=s;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(s);t.length=0}}let et=!0;const $c=[];function sn(){$c.push(et),et=!1}function tn(){const s=$c.pop();et=s===void 0?!0:s}function hs(s,t,n){if(et&&ks){let o=Ll.get(s);o||Ll.set(s,o=new Map);let l=o.get(n);l||o.set(n,l=Pr()),qc(l)}}function qc(s,t){let n=!1;gn<=jl?Oc(s)||(s.n|=rt,n=!Pc(s)):n=!s.has(ks),n&&(s.add(ks),ks.deps.push(s))}function Hs(s,t,n,o,l,a){const i=Ll.get(s);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&se(s))i.forEach((p,u)=>{(u==="length"||u>=o)&&c.push(p)});else switch(n!==void 0&&c.push(i.get(n)),t){case"add":se(s)?Tr(n)&&c.push(i.get("length")):(c.push(i.get(vt)),Ut(s)&&c.push(i.get(Rl)));break;case"delete":se(s)||(c.push(i.get(vt)),Ut(s)&&c.push(i.get(Rl)));break;case"set":Ut(s)&&c.push(i.get(vt));break}if(c.length===1)c[0]&&Nl(c[0]);else{const p=[];for(const u of c)u&&p.push(...u);Nl(Pr(p))}}function Nl(s,t){const n=se(s)?s:[...s];for(const o of n)o.computed&&Ba(o);for(const o of n)o.computed||Ba(o)}function Ba(s,t){(s!==ks||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const My=Cr("__proto__,__v_isRef,__isVue"),Mc=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Fr)),Iy=$r(),Ly=$r(!1,!0),jy=$r(!0),xa=Ry();function Ry(){const s={};return["includes","indexOf","lastIndexOf"].forEach(t=>{s[t]=function(...n){const o=Ee(this);for(let a=0,i=this.length;a<i;a++)hs(o,"get",a+"");const l=o[t](...n);return l===-1||l===!1?o[t](...n.map(Ee)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{s[t]=function(...n){sn();const o=Ee(this)[t].apply(this,n);return tn(),o}}),s}function $r(s=!1,t=!1){return function(o,l,a){if(l==="__v_isReactive")return!s;if(l==="__v_isReadonly")return s;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&a===(s?t?nd:Nc:t?Rc:jc).get(o))return o;const i=se(o);if(!s&&i&&ge(xa,l))return Reflect.get(xa,l,a);const c=Reflect.get(o,l,a);return(Fr(l)?Mc.has(l):My(l))||(s||hs(o,"get",l),t)?c:_e(c)?i&&Tr(l)?c:c.value:Ue(c)?s?jt(c):qe(c):c}}const Ny=Ic(),Uy=Ic(!0);function Ic(s=!1){return function(n,o,l,a){let i=n[o];if($n(i)&&_e(i)&&!_e(l))return!1;if(!s&&!$n(l)&&(Ul(l)||(l=Ee(l),i=Ee(i)),!se(n)&&_e(i)&&!_e(l)))return i.value=l,!0;const c=se(n)&&Tr(o)?Number(o)<n.length:ge(n,o),p=Reflect.set(n,o,l,a);return n===Ee(a)&&(c?On(l,i)&&Hs(n,"set",o,l):Hs(n,"add",o,l)),p}}function Hy(s,t){const n=ge(s,t);s[t];const o=Reflect.deleteProperty(s,t);return o&&n&&Hs(s,"delete",t,void 0),o}function Vy(s,t){const n=Reflect.has(s,t);return(!Fr(t)||!Mc.has(t))&&hs(s,"has",t),n}function Ky(s){return hs(s,"iterate",se(s)?"length":vt),Reflect.ownKeys(s)}const Lc={get:Iy,set:Ny,deleteProperty:Hy,has:Vy,ownKeys:Ky},Qy={get:jy,set(s,t){return!0},deleteProperty(s,t){return!0}},Wy=ss({},Lc,{get:Ly,set:Uy}),qr=s=>s,Vo=s=>Reflect.getPrototypeOf(s);function to(s,t,n=!1,o=!1){s=s.__v_raw;const l=Ee(s),a=Ee(t);n||(t!==a&&hs(l,"get",t),hs(l,"get",a));const{has:i}=Vo(l),c=o?qr:n?Lr:qn;if(i.call(l,t))return c(s.get(t));if(i.call(l,a))return c(s.get(a));s!==l&&s.get(t)}function no(s,t=!1){const n=this.__v_raw,o=Ee(n),l=Ee(s);return t||(s!==l&&hs(o,"has",s),hs(o,"has",l)),s===l?n.has(s):n.has(s)||n.has(l)}function oo(s,t=!1){return s=s.__v_raw,!t&&hs(Ee(s),"iterate",vt),Reflect.get(s,"size",s)}function Ca(s){s=Ee(s);const t=Ee(this);return Vo(t).has.call(t,s)||(t.add(s),Hs(t,"add",s,s)),this}function za(s,t){t=Ee(t);const n=Ee(this),{has:o,get:l}=Vo(n);let a=o.call(n,s);a||(s=Ee(s),a=o.call(n,s));const i=l.call(n,s);return n.set(s,t),a?On(t,i)&&Hs(n,"set",s,t):Hs(n,"add",s,t),this}function Sa(s){const t=Ee(this),{has:n,get:o}=Vo(t);let l=n.call(t,s);l||(s=Ee(s),l=n.call(t,s)),o&&o.call(t,s);const a=t.delete(s);return l&&Hs(t,"delete",s,void 0),a}function Fa(){const s=Ee(this),t=s.size!==0,n=s.clear();return t&&Hs(s,"clear",void 0,void 0),n}function lo(s,t){return function(o,l){const a=this,i=a.__v_raw,c=Ee(i),p=t?qr:s?Lr:qn;return!s&&hs(c,"iterate",vt),i.forEach((u,y)=>o.call(l,p(u),p(y),a))}}function ro(s,t,n){return function(...o){const l=this.__v_raw,a=Ee(l),i=Ut(a),c=s==="entries"||s===Symbol.iterator&&i,p=s==="keys"&&i,u=l[s](...o),y=n?qr:t?Lr:qn;return!t&&hs(a,"iterate",p?Rl:vt),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:c?[y(f[0]),y(f[1])]:y(f),done:d}},[Symbol.iterator](){return this}}}}function Qs(s){return function(...t){return s==="delete"?!1:this}}function Xy(){const s={get(a){return to(this,a)},get size(){return oo(this)},has:no,add:Ca,set:za,delete:Sa,clear:Fa,forEach:lo(!1,!1)},t={get(a){return to(this,a,!1,!0)},get size(){return oo(this)},has:no,add:Ca,set:za,delete:Sa,clear:Fa,forEach:lo(!1,!0)},n={get(a){return to(this,a,!0)},get size(){return oo(this,!0)},has(a){return no.call(this,a,!0)},add:Qs("add"),set:Qs("set"),delete:Qs("delete"),clear:Qs("clear"),forEach:lo(!0,!1)},o={get(a){return to(this,a,!0,!0)},get size(){return oo(this,!0)},has(a){return no.call(this,a,!0)},add:Qs("add"),set:Qs("set"),delete:Qs("delete"),clear:Qs("clear"),forEach:lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=ro(a,!1,!1),n[a]=ro(a,!0,!1),t[a]=ro(a,!1,!0),o[a]=ro(a,!0,!0)}),[s,n,t,o]}const[Gy,Yy,Zy,Jy]=Xy();function Mr(s,t){const n=t?s?Jy:Zy:s?Yy:Gy;return(o,l,a)=>l==="__v_isReactive"?!s:l==="__v_isReadonly"?s:l==="__v_raw"?o:Reflect.get(ge(n,l)&&l in o?n:o,l,a)}const ed={get:Mr(!1,!1)},sd={get:Mr(!1,!0)},td={get:Mr(!0,!1)},jc=new WeakMap,Rc=new WeakMap,Nc=new WeakMap,nd=new WeakMap;function od(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ld(s){return s.__v_skip||!Object.isExtensible(s)?0:od(xy(s))}function qe(s){return $n(s)?s:Ir(s,!1,Lc,ed,jc)}function rd(s){return Ir(s,!1,Wy,sd,Rc)}function jt(s){return Ir(s,!0,Qy,td,Nc)}function Ir(s,t,n,o,l){if(!Ue(s)||s.__v_raw&&!(t&&s.__v_isReactive))return s;const a=l.get(s);if(a)return a;const i=ld(s);if(i===0)return s;const c=new Proxy(s,i===2?o:n);return l.set(s,c),c}function Vt(s){return $n(s)?Vt(s.__v_raw):!!(s&&s.__v_isReactive)}function $n(s){return!!(s&&s.__v_isReadonly)}function Ul(s){return!!(s&&s.__v_isShallow)}function Uc(s){return Vt(s)||$n(s)}function Ee(s){const t=s&&s.__v_raw;return t?Ee(t):s}function Ko(s){return _o(s,"__v_skip",!0),s}const qn=s=>Ue(s)?qe(s):s,Lr=s=>Ue(s)?jt(s):s;function jr(s){et&&ks&&(s=Ee(s),qc(s.dep||(s.dep=Pr())))}function Rr(s,t){s=Ee(s),s.dep&&Nl(s.dep)}function _e(s){return!!(s&&s.__v_isRef===!0)}function N(s){return Hc(s,!1)}function Ls(s){return Hc(s,!0)}function Hc(s,t){return _e(s)?s:new ad(s,t)}class ad{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Ee(t),this._value=n?t:qn(t)}get value(){return jr(this),this._value}set value(t){t=this.__v_isShallow?t:Ee(t),On(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:qn(t),Rr(this))}}function v(s){return _e(s)?s.value:s}const id={get:(s,t,n)=>v(Reflect.get(s,t,n)),set:(s,t,n,o)=>{const l=s[t];return _e(l)&&!_e(n)?(l.value=n,!0):Reflect.set(s,t,n,o)}};function Vc(s){return Vt(s)?s:new Proxy(s,id)}class cd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>jr(this),()=>Rr(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function pd(s){return new cd(s)}function ud(s){const t=se(s)?new Array(s.length):{};for(const n in s)t[n]=dd(s,n);return t}class yd{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function dd(s,t,n){const o=s[t];return _e(o)?o:new yd(s,t,n)}class fd{constructor(t,n,o,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Or(t,()=>{this._dirty||(this._dirty=!0,Rr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=Ee(this);return jr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function hd(s,t,n=!1){let o,l;const a=ce(s);return a?(o=s,l=xs):(o=s.get,l=s.set),new fd(o,l,a||!l,n)}function st(s,t,n,o){let l;try{l=o?s(...o):s()}catch(a){Qo(a,t,n)}return l}function Cs(s,t,n,o){if(ce(s)){const a=st(s,t,n,o);return a&&zc(a)&&a.catch(i=>{Qo(i,t,n)}),a}const l=[];for(let a=0;a<s.length;a++)l.push(Cs(s[a],t,n,o));return l}function Qo(s,t,n,o=!0){const l=t?t.vnode:null;if(t){let a=t.parent;const i=t.proxy,c=n;for(;a;){const u=a.ec;if(u){for(let y=0;y<u.length;y++)if(u[y](s,i,c)===!1)return}a=a.parent}const p=t.appContext.config.errorHandler;if(p){st(p,null,10,[s,i,c]);return}}md(s,n,l,o)}function md(s,t,n,o=!0){console.error(s)}let ko=!1,Hl=!1;const ys=[];let Ns=0;const Dn=[];let An=null,$t=0;const En=[];let Gs=null,qt=0;const Kc=Promise.resolve();let Nr=null,Vl=null;function Ke(s){const t=Nr||Kc;return s?t.then(this?s.bind(this):s):t}function gd(s){let t=Ns+1,n=ys.length;for(;t<n;){const o=t+n>>>1;Mn(ys[o])<s?t=o+1:n=o}return t}function Qc(s){(!ys.length||!ys.includes(s,ko&&s.allowRecurse?Ns+1:Ns))&&s!==Vl&&(s.id==null?ys.push(s):ys.splice(gd(s.id),0,s),Wc())}function Wc(){!ko&&!Hl&&(Hl=!0,Nr=Kc.then(Yc))}function Ad(s){const t=ys.indexOf(s);t>Ns&&ys.splice(t,1)}function Xc(s,t,n,o){se(s)?n.push(...s):(!t||!t.includes(s,s.allowRecurse?o+1:o))&&n.push(s),Wc()}function vd(s){Xc(s,An,Dn,$t)}function bd(s){Xc(s,Gs,En,qt)}function Wo(s,t=null){if(Dn.length){for(Vl=t,An=[...new Set(Dn)],Dn.length=0,$t=0;$t<An.length;$t++)An[$t]();An=null,$t=0,Vl=null,Wo(s,t)}}function Gc(s){if(Wo(),En.length){const t=[...new Set(En)];if(En.length=0,Gs){Gs.push(...t);return}for(Gs=t,Gs.sort((n,o)=>Mn(n)-Mn(o)),qt=0;qt<Gs.length;qt++)Gs[qt]();Gs=null,qt=0}}const Mn=s=>s.id==null?1/0:s.id;function Yc(s){Hl=!1,ko=!0,Wo(s),ys.sort((n,o)=>Mn(n)-Mn(o));const t=xs;try{for(Ns=0;Ns<ys.length;Ns++){const n=ys[Ns];n&&n.active!==!1&&st(n,null,14)}}finally{Ns=0,ys.length=0,Gc(),ko=!1,Nr=null,(ys.length||Dn.length||En.length)&&Yc(s)}}function Dd(s,t,...n){if(s.isUnmounted)return;const o=s.vnode.props||Se;let l=n;const a=t.startsWith("update:"),i=a&&t.slice(7);if(i&&i in o){const y=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:d}=o[y]||Se;d&&(l=n.map(h=>h.trim())),f&&(l=n.map(Il))}let c,p=o[c=ul(t)]||o[c=ul(Is(t))];!p&&a&&(p=o[c=ul(Bt(t))]),p&&Cs(p,s,6,l);const u=o[c+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[c])return;s.emitted[c]=!0,Cs(u,s,6,l)}}function Zc(s,t,n=!1){const o=t.emitsCache,l=o.get(s);if(l!==void 0)return l;const a=s.emits;let i={},c=!1;if(!ce(s)){const p=u=>{const y=Zc(u,t,!0);y&&(c=!0,ss(i,y))};!n&&t.mixins.length&&t.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}return!a&&!c?(o.set(s,null),null):(se(a)?a.forEach(p=>i[p]=null):ss(i,a),o.set(s,i),i)}function Xo(s,t){return!s||!Ro(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(s,t[0].toLowerCase()+t.slice(1))||ge(s,Bt(t))||ge(s,t))}let We=null,Go=null;function Bo(s){const t=We;return We=s,Go=s&&s.type.__scopeId||null,t}function gD(s){Go=s}function AD(){Go=null}function Y(s,t=We,n){if(!t||s._n)return s;const o=(...l)=>{o._d&&Na(-1);const a=Bo(t),i=s(...l);return Bo(a),o._d&&Na(1),i};return o._n=!0,o._c=!0,o._d=!0,o}function yl(s){const{type:t,vnode:n,proxy:o,withProxy:l,props:a,propsOptions:[i],slots:c,attrs:p,emit:u,render:y,renderCache:f,data:d,setupState:h,ctx:g,inheritAttrs:D}=s;let b,x;const _=Bo(s);try{if(n.shapeFlag&4){const B=l||o;b=Os(y.call(B,B,f,a,h,d,g)),x=p}else{const B=t;b=Os(B.length>1?B(a,{attrs:p,slots:c,emit:u}):B(a,null)),x=t.props?p:Ed(p)}}catch(B){_n.length=0,Qo(B,s,1),b=J(at)}let k=b;if(x&&D!==!1){const B=Object.keys(x),{shapeFlag:M}=k;B.length&&M&7&&(i&&B.some(zr)&&(x=wd(x,i)),k=kt(k,x))}return n.dirs&&(k=kt(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,Bo(_),b}const Ed=s=>{let t;for(const n in s)(n==="class"||n==="style"||Ro(n))&&((t||(t={}))[n]=s[n]);return t},wd=(s,t)=>{const n={};for(const o in s)(!zr(o)||!(o.slice(9)in t))&&(n[o]=s[o]);return n};function _d(s,t,n){const{props:o,children:l,component:a}=s,{props:i,children:c,patchFlag:p}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&p>=0){if(p&1024)return!0;if(p&16)return o?Ta(o,i,u):!!i;if(p&8){const y=t.dynamicProps;for(let f=0;f<y.length;f++){const d=y[f];if(i[d]!==o[d]&&!Xo(u,d))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?Ta(o,i,u):!0:!!i;return!1}function Ta(s,t,n){const o=Object.keys(t);if(o.length!==Object.keys(s).length)return!0;for(let l=0;l<o.length;l++){const a=o[l];if(t[a]!==s[a]&&!Xo(n,a))return!0}return!1}function kd({vnode:s,parent:t},n){for(;t&&t.subTree===s;)(s=t.vnode).el=n,t=t.parent}const Jc=s=>s.__isSuspense;function Bd(s,t){t&&t.pendingBranch?se(s)?t.effects.push(...s):t.effects.push(s):bd(s)}function us(s,t){if(He){let n=He.provides;const o=He.parent&&He.parent.provides;o===n&&(n=He.provides=Object.create(o)),n[s]=t}}function L(s,t,n=!1){const o=He||We;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&s in l)return l[s];if(arguments.length>1)return n&&ce(t)?t.call(o.proxy):t}}function Yo(s,t){return Ur(s,null,t)}const Pa={};function ue(s,t,n){return Ur(s,t,n)}function Ur(s,t,{immediate:n,deep:o,flush:l,onTrack:a,onTrigger:i}=Se){const c=He;let p,u=!1,y=!1;if(_e(s)?(p=()=>s.value,u=Ul(s)):Vt(s)?(p=()=>s,o=!0):se(s)?(y=!0,u=s.some(x=>Vt(x)||Ul(x)),p=()=>s.map(x=>{if(_e(x))return x.value;if(Vt(x))return ht(x);if(ce(x))return st(x,c,2)})):ce(s)?t?p=()=>st(s,c,2):p=()=>{if(!(c&&c.isUnmounted))return f&&f(),Cs(s,c,3,[d])}:p=xs,t&&o){const x=p;p=()=>ht(x())}let f,d=x=>{f=b.onStop=()=>{st(x,c,4)}};if(Ln)return d=xs,t?n&&Cs(t,c,3,[p(),y?[]:void 0,d]):p(),xs;let h=y?[]:Pa;const g=()=>{if(!!b.active)if(t){const x=b.run();(o||u||(y?x.some((_,k)=>On(_,h[k])):On(x,h)))&&(f&&f(),Cs(t,c,3,[x,h===Pa?void 0:h,d]),h=x)}else b.run()};g.allowRecurse=!!t;let D;l==="sync"?D=g:l==="post"?D=()=>Ve(g,c&&c.suspense):D=()=>vd(g);const b=new Or(p,D);return t?n?g():h=b.run():l==="post"?Ve(b.run.bind(b),c&&c.suspense):b.run(),()=>{b.stop(),c&&c.scope&&Sr(c.scope.effects,b)}}function xd(s,t,n){const o=this.proxy,l=Ie(s)?s.includes(".")?ep(o,s):()=>o[s]:s.bind(o,o);let a;ce(t)?a=t:(a=t.handler,n=t);const i=He;Yt(this);const c=Ur(l,a.bind(o),n);return i?Yt(i):bt(),c}function ep(s,t){const n=t.split(".");return()=>{let o=s;for(let l=0;l<n.length&&o;l++)o=o[n[l]];return o}}function ht(s,t){if(!Ue(s)||s.__v_skip||(t=t||new Set,t.has(s)))return s;if(t.add(s),_e(s))ht(s.value,t);else if(se(s))for(let n=0;n<s.length;n++)ht(s[n],t);else if(Cc(s)||Ut(s))s.forEach(n=>{ht(n,t)});else if(Fc(s))for(const n in s)ht(s[n],t);return s}function sp(s,t){s.shapeFlag&6&&s.component?sp(s.component.subTree,t):s.shapeFlag&128?(s.ssContent.transition=t.clone(s.ssContent),s.ssFallback.transition=t.clone(s.ssFallback)):s.transition=t}function Te(s){return ce(s)?{setup:s,name:s.name}:s}const Kt=s=>!!s.type.__asyncLoader,tp=s=>s.type.__isKeepAlive,Cd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:t}){const n=xt(),o=n.ctx;if(!o.renderer)return()=>{const _=t.default&&t.default();return _&&_.length===1?_[0]:_};const l=new Map,a=new Set;let i=null;const c=n.suspense,{renderer:{p,m:u,um:y,o:{createElement:f}}}=o,d=f("div");o.activate=(_,k,B,M,P)=>{const H=_.component;u(_,k,B,0,c),p(H.vnode,_,k,B,H,c,M,_.slotScopeIds,P),Ve(()=>{H.isDeactivated=!1,H.a&&Ht(H.a);const ae=_.props&&_.props.onVnodeMounted;ae&&gs(ae,H.parent,_)},c)},o.deactivate=_=>{const k=_.component;u(_,d,null,1,c),Ve(()=>{k.da&&Ht(k.da);const B=_.props&&_.props.onVnodeUnmounted;B&&gs(B,k.parent,_),k.isDeactivated=!0},c)};function h(_){dl(_),y(_,n,c,!0)}function g(_){l.forEach((k,B)=>{const M=Jl(k.type);M&&(!_||!_(M))&&D(B)})}function D(_){const k=l.get(_);!i||k.type!==i.type?h(k):i&&dl(i),l.delete(_),a.delete(_)}ue(()=>[s.include,s.exclude],([_,k])=>{_&&g(B=>vn(_,B)),k&&g(B=>!vn(k,B))},{flush:"post",deep:!0});let b=null;const x=()=>{b!=null&&l.set(b,fl(n.subTree))};return Wn(x),rp(x),Jo(()=>{l.forEach(_=>{const{subTree:k,suspense:B}=n,M=fl(k);if(_.type===M.type){dl(M);const P=M.component.da;P&&Ve(P,B);return}h(_)})}),()=>{if(b=null,!t.default)return null;const _=t.default(),k=_[0];if(_.length>1)return i=null,_;if(!Gt(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return i=null,k;let B=fl(k);const M=B.type,P=Jl(Kt(B)?B.type.__asyncResolved||{}:M),{include:H,exclude:ae,max:ye}=s;if(H&&(!P||!vn(H,P))||ae&&P&&vn(ae,P))return i=B,k;const he=B.key==null?M:B.key,Ae=l.get(he);return B.el&&(B=kt(B),k.shapeFlag&128&&(k.ssContent=B)),b=he,Ae?(B.el=Ae.el,B.component=Ae.component,B.transition&&sp(B,B.transition),B.shapeFlag|=512,a.delete(he),a.add(he)):(a.add(he),ye&&a.size>parseInt(ye,10)&&D(a.values().next().value)),B.shapeFlag|=256,i=B,Jc(k.type)?k:B}}},np=Cd;function vn(s,t){return se(s)?s.some(n=>vn(n,t)):Ie(s)?s.split(",").includes(t):s.test?s.test(t):!1}function zd(s,t){op(s,"a",t)}function Sd(s,t){op(s,"da",t)}function op(s,t,n=He){const o=s.__wdc||(s.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return s()});if(Zo(t,o,n),n){let l=n.parent;for(;l&&l.parent;)tp(l.parent.vnode)&&Fd(o,t,n,l),l=l.parent}}function Fd(s,t,n,o){const l=Zo(t,s,o,!0);el(()=>{Sr(o[t],l)},n)}function dl(s){let t=s.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),s.shapeFlag=t}function fl(s){return s.shapeFlag&128?s.ssContent:s}function Zo(s,t,n=He,o=!1){if(n){const l=n[s]||(n[s]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;sn(),Yt(n);const c=Cs(t,n,s,i);return bt(),tn(),c});return o?l.unshift(a):l.push(a),a}}const Vs=s=>(t,n=He)=>(!Ln||s==="sp")&&Zo(s,t,n),lp=Vs("bm"),Wn=Vs("m"),Td=Vs("bu"),rp=Vs("u"),Jo=Vs("bum"),el=Vs("um"),Pd=Vs("sp"),Od=Vs("rtg"),$d=Vs("rtc");function qd(s,t=He){Zo("ec",s,t)}function Hr(s,t){const n=We;if(n===null)return s;const o=tl(n)||n.proxy,l=s.dirs||(s.dirs=[]);for(let a=0;a<t.length;a++){let[i,c,p,u=Se]=t[a];ce(i)&&(i={mounted:i,updated:i}),i.deep&&ht(c),l.push({dir:i,instance:o,value:c,oldValue:void 0,arg:p,modifiers:u})}return s}function ct(s,t,n,o){const l=s.dirs,a=t&&t.dirs;for(let i=0;i<l.length;i++){const c=l[i];a&&(c.oldValue=a[i].value);let p=c.dir[o];p&&(sn(),Cs(p,n,8,[s.el,c,s,t]),tn())}}const ap="components";function Kl(s,t){return Id(ap,s,!0,t)||s}const Md=Symbol();function Id(s,t,n=!0,o=!1){const l=We||He;if(l){const a=l.type;if(s===ap){const c=Jl(a,!1);if(c&&(c===t||c===Is(t)||c===Ho(Is(t))))return a}const i=Oa(l[s]||a[s],t)||Oa(l.appContext[s],t);return!i&&o?a:i}}function Oa(s,t){return s&&(s[t]||s[Is(t)]||s[Ho(Is(t))])}function Xn(s,t,n,o){let l;const a=n&&n[o];if(se(s)||Ie(s)){l=new Array(s.length);for(let i=0,c=s.length;i<c;i++)l[i]=t(s[i],i,void 0,a&&a[i])}else if(typeof s=="number"){l=new Array(s);for(let i=0;i<s;i++)l[i]=t(i+1,i,void 0,a&&a[i])}else if(Ue(s))if(s[Symbol.iterator])l=Array.from(s,(i,c)=>t(i,c,void 0,a&&a[c]));else{const i=Object.keys(s);l=new Array(i.length);for(let c=0,p=i.length;c<p;c++){const u=i[c];l[c]=t(s[u],u,c,a&&a[c])}}else l=[];return n&&(n[o]=l),l}function _t(s,t,n={},o,l){if(We.isCE||We.parent&&Kt(We.parent)&&We.parent.isCE)return J("slot",t==="default"?null:{name:t},o&&o());let a=s[t];a&&a._c&&(a._d=!1),w();const i=a&&ip(a(n)),c=R(ke,{key:n.key||`_${t}`},i||(o?o():[]),i&&s._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),a&&a._c&&(a._d=!0),c}function ip(s){return s.some(t=>Gt(t)?!(t.type===at||t.type===ke&&!ip(t.children)):!0)?s:null}const Ql=s=>s?vp(s)?tl(s)||s.proxy:Ql(s.parent):null,xo=ss(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Ql(s.parent),$root:s=>Ql(s.root),$emit:s=>s.emit,$options:s=>pp(s),$forceUpdate:s=>s.f||(s.f=()=>Qc(s.update)),$nextTick:s=>s.n||(s.n=Ke.bind(s.proxy)),$watch:s=>xd.bind(s)}),Ld={get({_:s},t){const{ctx:n,setupState:o,data:l,props:a,accessCache:i,type:c,appContext:p}=s;let u;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return l[t];case 4:return n[t];case 3:return a[t]}else{if(o!==Se&&ge(o,t))return i[t]=1,o[t];if(l!==Se&&ge(l,t))return i[t]=2,l[t];if((u=s.propsOptions[0])&&ge(u,t))return i[t]=3,a[t];if(n!==Se&&ge(n,t))return i[t]=4,n[t];Wl&&(i[t]=0)}}const y=xo[t];let f,d;if(y)return t==="$attrs"&&hs(s,"get",t),y(s);if((f=c.__cssModules)&&(f=f[t]))return f;if(n!==Se&&ge(n,t))return i[t]=4,n[t];if(d=p.config.globalProperties,ge(d,t))return d[t]},set({_:s},t,n){const{data:o,setupState:l,ctx:a}=s;return l!==Se&&ge(l,t)?(l[t]=n,!0):o!==Se&&ge(o,t)?(o[t]=n,!0):ge(s.props,t)||t[0]==="$"&&t.slice(1)in s?!1:(a[t]=n,!0)},has({_:{data:s,setupState:t,accessCache:n,ctx:o,appContext:l,propsOptions:a}},i){let c;return!!n[i]||s!==Se&&ge(s,i)||t!==Se&&ge(t,i)||(c=a[0])&&ge(c,i)||ge(o,i)||ge(xo,i)||ge(l.config.globalProperties,i)},defineProperty(s,t,n){return n.get!=null?s._.accessCache[t]=0:ge(n,"value")&&this.set(s,t,n.value,null),Reflect.defineProperty(s,t,n)}};let Wl=!0;function jd(s){const t=pp(s),n=s.proxy,o=s.ctx;Wl=!1,t.beforeCreate&&$a(t.beforeCreate,s,"bc");const{data:l,computed:a,methods:i,watch:c,provide:p,inject:u,created:y,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:D,deactivated:b,beforeDestroy:x,beforeUnmount:_,destroyed:k,unmounted:B,render:M,renderTracked:P,renderTriggered:H,errorCaptured:ae,serverPrefetch:ye,expose:he,inheritAttrs:Ae,components:$e,directives:Le,filters:Qe}=t;if(u&&Rd(u,o,null,s.appContext.config.unwrapInjectedRef),i)for(const te in i){const Z=i[te];ce(Z)&&(o[te]=Z.bind(n))}if(l){const te=l.call(n,n);Ue(te)&&(s.data=qe(te))}if(Wl=!0,a)for(const te in a){const Z=a[te],me=ce(Z)?Z.bind(n,n):ce(Z.get)?Z.get.bind(n,n):xs,Ts=!ce(Z)&&ce(Z.set)?Z.set.bind(n):xs,Ge=z({get:me,set:Ts});Object.defineProperty(o,te,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:ms=>Ge.value=ms})}if(c)for(const te in c)cp(c[te],o,n,te);if(p){const te=ce(p)?p.call(n):p;Reflect.ownKeys(te).forEach(Z=>{us(Z,te[Z])})}y&&$a(y,s,"c");function ee(te,Z){se(Z)?Z.forEach(me=>te(me.bind(n))):Z&&te(Z.bind(n))}if(ee(lp,f),ee(Wn,d),ee(Td,h),ee(rp,g),ee(zd,D),ee(Sd,b),ee(qd,ae),ee($d,P),ee(Od,H),ee(Jo,_),ee(el,B),ee(Pd,ye),se(he))if(he.length){const te=s.exposed||(s.exposed={});he.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>n[Z],set:me=>n[Z]=me})})}else s.exposed||(s.exposed={});M&&s.render===xs&&(s.render=M),Ae!=null&&(s.inheritAttrs=Ae),$e&&(s.components=$e),Le&&(s.directives=Le)}function Rd(s,t,n=xs,o=!1){se(s)&&(s=Xl(s));for(const l in s){const a=s[l];let i;Ue(a)?"default"in a?i=L(a.from||l,a.default,!0):i=L(a.from||l):i=L(a),_e(i)&&o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):t[l]=i}}function $a(s,t,n){Cs(se(s)?s.map(o=>o.bind(t.proxy)):s.bind(t.proxy),t,n)}function cp(s,t,n,o){const l=o.includes(".")?ep(n,o):()=>n[o];if(Ie(s)){const a=t[s];ce(a)&&ue(l,a)}else if(ce(s))ue(l,s.bind(n));else if(Ue(s))if(se(s))s.forEach(a=>cp(a,t,n,o));else{const a=ce(s.handler)?s.handler.bind(n):t[s.handler];ce(a)&&ue(l,a,s)}}function pp(s){const t=s.type,{mixins:n,extends:o}=t,{mixins:l,optionsCache:a,config:{optionMergeStrategies:i}}=s.appContext,c=a.get(t);let p;return c?p=c:!l.length&&!n&&!o?p=t:(p={},l.length&&l.forEach(u=>Co(p,u,i,!0)),Co(p,t,i)),a.set(t,p),p}function Co(s,t,n,o=!1){const{mixins:l,extends:a}=t;a&&Co(s,a,n,!0),l&&l.forEach(i=>Co(s,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const c=Nd[i]||n&&n[i];s[i]=c?c(s[i],t[i]):t[i]}return s}const Nd={data:qa,props:dt,emits:dt,methods:dt,computed:dt,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:dt,directives:dt,watch:Hd,provide:qa,inject:Ud};function qa(s,t){return t?s?function(){return ss(ce(s)?s.call(this,this):s,ce(t)?t.call(this,this):t)}:t:s}function Ud(s,t){return dt(Xl(s),Xl(t))}function Xl(s){if(se(s)){const t={};for(let n=0;n<s.length;n++)t[s[n]]=s[n];return t}return s}function Ze(s,t){return s?[...new Set([].concat(s,t))]:t}function dt(s,t){return s?ss(ss(Object.create(null),s),t):t}function Hd(s,t){if(!s)return t;if(!t)return s;const n=ss(Object.create(null),s);for(const o in t)n[o]=Ze(s[o],t[o]);return n}function Vd(s,t,n,o=!1){const l={},a={};_o(a,sl,1),s.propsDefaults=Object.create(null),up(s,t,l,a);for(const i in s.propsOptions[0])i in l||(l[i]=void 0);n?s.props=o?l:rd(l):s.type.props?s.props=l:s.props=a,s.attrs=a}function Kd(s,t,n,o){const{props:l,attrs:a,vnode:{patchFlag:i}}=s,c=Ee(l),[p]=s.propsOptions;let u=!1;if((o||i>0)&&!(i&16)){if(i&8){const y=s.vnode.dynamicProps;for(let f=0;f<y.length;f++){let d=y[f];if(Xo(s.emitsOptions,d))continue;const h=t[d];if(p)if(ge(a,d))h!==a[d]&&(a[d]=h,u=!0);else{const g=Is(d);l[g]=Gl(p,c,g,h,s,!1)}else h!==a[d]&&(a[d]=h,u=!0)}}}else{up(s,t,l,a)&&(u=!0);let y;for(const f in c)(!t||!ge(t,f)&&((y=Bt(f))===f||!ge(t,y)))&&(p?n&&(n[f]!==void 0||n[y]!==void 0)&&(l[f]=Gl(p,c,f,void 0,s,!0)):delete l[f]);if(a!==c)for(const f in a)(!t||!ge(t,f)&&!0)&&(delete a[f],u=!0)}u&&Hs(s,"set","$attrs")}function up(s,t,n,o){const[l,a]=s.propsOptions;let i=!1,c;if(t)for(let p in t){if(fo(p))continue;const u=t[p];let y;l&&ge(l,y=Is(p))?!a||!a.includes(y)?n[y]=u:(c||(c={}))[y]=u:Xo(s.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,i=!0)}if(a){const p=Ee(n),u=c||Se;for(let y=0;y<a.length;y++){const f=a[y];n[f]=Gl(l,p,f,u[f],s,!ge(u,f))}}return i}function Gl(s,t,n,o,l,a){const i=s[n];if(i!=null){const c=ge(i,"default");if(c&&o===void 0){const p=i.default;if(i.type!==Function&&ce(p)){const{propsDefaults:u}=l;n in u?o=u[n]:(Yt(l),o=u[n]=p.call(null,t),bt())}else o=p}i[0]&&(a&&!c?o=!1:i[1]&&(o===""||o===Bt(n))&&(o=!0))}return o}function yp(s,t,n=!1){const o=t.propsCache,l=o.get(s);if(l)return l;const a=s.props,i={},c=[];let p=!1;if(!ce(s)){const y=f=>{p=!0;const[d,h]=yp(f,t,!0);ss(i,d),h&&c.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(y),s.extends&&y(s.extends),s.mixins&&s.mixins.forEach(y)}if(!a&&!p)return o.set(s,Nt),Nt;if(se(a))for(let y=0;y<a.length;y++){const f=Is(a[y]);Ma(f)&&(i[f]=Se)}else if(a)for(const y in a){const f=Is(y);if(Ma(f)){const d=a[y],h=i[f]=se(d)||ce(d)?{type:d}:d;if(h){const g=ja(Boolean,h.type),D=ja(String,h.type);h[0]=g>-1,h[1]=D<0||g<D,(g>-1||ge(h,"default"))&&c.push(f)}}}const u=[i,c];return o.set(s,u),u}function Ma(s){return s[0]!=="$"}function Ia(s){const t=s&&s.toString().match(/^\s*function (\w+)/);return t?t[1]:s===null?"null":""}function La(s,t){return Ia(s)===Ia(t)}function ja(s,t){return se(t)?t.findIndex(n=>La(n,s)):ce(t)&&La(t,s)?0:-1}const dp=s=>s[0]==="_"||s==="$stable",Vr=s=>se(s)?s.map(Os):[Os(s)],Qd=(s,t,n)=>{if(t._n)return t;const o=Y((...l)=>Vr(t(...l)),n);return o._c=!1,o},fp=(s,t,n)=>{const o=s._ctx;for(const l in s){if(dp(l))continue;const a=s[l];if(ce(a))t[l]=Qd(l,a,o);else if(a!=null){const i=Vr(a);t[l]=()=>i}}},hp=(s,t)=>{const n=Vr(t);s.slots.default=()=>n},Wd=(s,t)=>{if(s.vnode.shapeFlag&32){const n=t._;n?(s.slots=Ee(t),_o(t,"_",n)):fp(t,s.slots={})}else s.slots={},t&&hp(s,t);_o(s.slots,sl,1)},Xd=(s,t,n)=>{const{vnode:o,slots:l}=s;let a=!0,i=Se;if(o.shapeFlag&32){const c=t._;c?n&&c===1?a=!1:(ss(l,t),!n&&c===1&&delete l._):(a=!t.$stable,fp(t,l)),i=t}else t&&(hp(s,t),i={default:1});if(a)for(const c in l)!dp(c)&&!(c in i)&&delete l[c]};function mp(){return{app:null,config:{isNativeTag:_y,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gd=0;function Yd(s,t){return function(o,l=null){ce(o)||(o=Object.assign({},o)),l!=null&&!Ue(l)&&(l=null);const a=mp(),i=new Set;let c=!1;const p=a.app={_uid:Gd++,_component:o,_props:l,_container:null,_context:a,_instance:null,version:mf,get config(){return a.config},set config(u){},use(u,...y){return i.has(u)||(u&&ce(u.install)?(i.add(u),u.install(p,...y)):ce(u)&&(i.add(u),u(p,...y))),p},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),p},component(u,y){return y?(a.components[u]=y,p):a.components[u]},directive(u,y){return y?(a.directives[u]=y,p):a.directives[u]},mount(u,y,f){if(!c){const d=J(o,l);return d.appContext=a,y&&t?t(d,u):s(d,u,f),c=!0,p._container=u,u.__vue_app__=p,tl(d.component)||d.component.proxy}},unmount(){c&&(s(null,p._container),delete p._container.__vue_app__)},provide(u,y){return a.provides[u]=y,p}};return p}}function Yl(s,t,n,o,l=!1){if(se(s)){s.forEach((d,h)=>Yl(d,t&&(se(t)?t[h]:t),n,o,l));return}if(Kt(o)&&!l)return;const a=o.shapeFlag&4?tl(o.component)||o.component.proxy:o.el,i=l?null:a,{i:c,r:p}=s,u=t&&t.r,y=c.refs===Se?c.refs={}:c.refs,f=c.setupState;if(u!=null&&u!==p&&(Ie(u)?(y[u]=null,ge(f,u)&&(f[u]=null)):_e(u)&&(u.value=null)),ce(p))st(p,c,12,[i,y]);else{const d=Ie(p),h=_e(p);if(d||h){const g=()=>{if(s.f){const D=d?y[p]:p.value;l?se(D)&&Sr(D,a):se(D)?D.includes(a)||D.push(a):d?(y[p]=[a],ge(f,p)&&(f[p]=y[p])):(p.value=[a],s.k&&(y[s.k]=p.value))}else d?(y[p]=i,ge(f,p)&&(f[p]=i)):h&&(p.value=i,s.k&&(y[s.k]=i))};i?(g.id=-1,Ve(g,n)):g()}}}const Ve=Bd;function Zd(s){return Jd(s)}function Jd(s,t){const n=Sy();n.__VUE__=!0;const{insert:o,remove:l,patchProp:a,createElement:i,createText:c,createComment:p,setText:u,setElementText:y,parentNode:f,nextSibling:d,setScopeId:h=xs,cloneNode:g,insertStaticContent:D}=s,b=(m,A,E,F=null,S=null,q=null,j=!1,$=null,I=!!A.dynamicChildren)=>{if(m===A)return;m&&!cn(m,A)&&(F=W(m),ts(m,S,q,!0),m=null),A.patchFlag===-2&&(I=!1,A.dynamicChildren=null);const{type:T,ref:X,shapeFlag:Q}=A;switch(T){case Qr:x(m,A,E,F);break;case at:_(m,A,E,F);break;case hl:m==null&&k(A,E,F,j);break;case ke:Le(m,A,E,F,S,q,j,$,I);break;default:Q&1?P(m,A,E,F,S,q,j,$,I):Q&6?Qe(m,A,E,F,S,q,j,$,I):(Q&64||Q&128)&&T.process(m,A,E,F,S,q,j,$,I,Fe)}X!=null&&S&&Yl(X,m&&m.ref,q,A||m,!A)},x=(m,A,E,F)=>{if(m==null)o(A.el=c(A.children),E,F);else{const S=A.el=m.el;A.children!==m.children&&u(S,A.children)}},_=(m,A,E,F)=>{m==null?o(A.el=p(A.children||""),E,F):A.el=m.el},k=(m,A,E,F)=>{[m.el,m.anchor]=D(m.children,A,E,F,m.el,m.anchor)},B=({el:m,anchor:A},E,F)=>{let S;for(;m&&m!==A;)S=d(m),o(m,E,F),m=S;o(A,E,F)},M=({el:m,anchor:A})=>{let E;for(;m&&m!==A;)E=d(m),l(m),m=E;l(A)},P=(m,A,E,F,S,q,j,$,I)=>{j=j||A.type==="svg",m==null?H(A,E,F,S,q,j,$,I):he(m,A,S,q,j,$,I)},H=(m,A,E,F,S,q,j,$)=>{let I,T;const{type:X,props:Q,shapeFlag:G,transition:ne,patchFlag:ve,dirs:xe}=m;if(m.el&&g!==void 0&&ve===-1)I=m.el=g(m.el);else{if(I=m.el=i(m.type,q,Q&&Q.is,Q),G&8?y(I,m.children):G&16&&ye(m.children,I,null,F,S,q&&X!=="foreignObject",j,$),xe&&ct(m,null,F,"created"),Q){for(const Pe in Q)Pe!=="value"&&!fo(Pe)&&a(I,Pe,null,Q[Pe],q,m.children,F,S,O);"value"in Q&&a(I,"value",null,Q.value),(T=Q.onVnodeBeforeMount)&&gs(T,F,m)}ae(I,m,m.scopeId,j,F)}xe&&ct(m,null,F,"beforeMount");const Ce=(!S||S&&!S.pendingBranch)&&ne&&!ne.persisted;Ce&&ne.beforeEnter(I),o(I,A,E),((T=Q&&Q.onVnodeMounted)||Ce||xe)&&Ve(()=>{T&&gs(T,F,m),Ce&&ne.enter(I),xe&&ct(m,null,F,"mounted")},S)},ae=(m,A,E,F,S)=>{if(E&&h(m,E),F)for(let q=0;q<F.length;q++)h(m,F[q]);if(S){let q=S.subTree;if(A===q){const j=S.vnode;ae(m,j,j.scopeId,j.slotScopeIds,S.parent)}}},ye=(m,A,E,F,S,q,j,$,I=0)=>{for(let T=I;T<m.length;T++){const X=m[T]=$?Ys(m[T]):Os(m[T]);b(null,X,A,E,F,S,q,j,$)}},he=(m,A,E,F,S,q,j)=>{const $=A.el=m.el;let{patchFlag:I,dynamicChildren:T,dirs:X}=A;I|=m.patchFlag&16;const Q=m.props||Se,G=A.props||Se;let ne;E&&pt(E,!1),(ne=G.onVnodeBeforeUpdate)&&gs(ne,E,A,m),X&&ct(A,m,E,"beforeUpdate"),E&&pt(E,!0);const ve=S&&A.type!=="foreignObject";if(T?Ae(m.dynamicChildren,T,$,E,F,ve,q):j||me(m,A,$,null,E,F,ve,q,!1),I>0){if(I&16)$e($,A,Q,G,E,F,S);else if(I&2&&Q.class!==G.class&&a($,"class",null,G.class,S),I&4&&a($,"style",Q.style,G.style,S),I&8){const xe=A.dynamicProps;for(let Ce=0;Ce<xe.length;Ce++){const Pe=xe[Ce],Es=Q[Pe],Ft=G[Pe];(Ft!==Es||Pe==="value")&&a($,Pe,Es,Ft,S,m.children,E,F,O)}}I&1&&m.children!==A.children&&y($,A.children)}else!j&&T==null&&$e($,A,Q,G,E,F,S);((ne=G.onVnodeUpdated)||X)&&Ve(()=>{ne&&gs(ne,E,A,m),X&&ct(A,m,E,"updated")},F)},Ae=(m,A,E,F,S,q,j)=>{for(let $=0;$<A.length;$++){const I=m[$],T=A[$],X=I.el&&(I.type===ke||!cn(I,T)||I.shapeFlag&70)?f(I.el):E;b(I,T,X,null,F,S,q,j,!0)}},$e=(m,A,E,F,S,q,j)=>{if(E!==F){for(const $ in F){if(fo($))continue;const I=F[$],T=E[$];I!==T&&$!=="value"&&a(m,$,T,I,j,A.children,S,q,O)}if(E!==Se)for(const $ in E)!fo($)&&!($ in F)&&a(m,$,E[$],null,j,A.children,S,q,O);"value"in F&&a(m,"value",E.value,F.value)}},Le=(m,A,E,F,S,q,j,$,I)=>{const T=A.el=m?m.el:c(""),X=A.anchor=m?m.anchor:c("");let{patchFlag:Q,dynamicChildren:G,slotScopeIds:ne}=A;ne&&($=$?$.concat(ne):ne),m==null?(o(T,E,F),o(X,E,F),ye(A.children,E,X,S,q,j,$,I)):Q>0&&Q&64&&G&&m.dynamicChildren?(Ae(m.dynamicChildren,G,E,S,q,j,$),(A.key!=null||S&&A===S.subTree)&&Kr(m,A,!0)):me(m,A,E,X,S,q,j,$,I)},Qe=(m,A,E,F,S,q,j,$,I)=>{A.slotScopeIds=$,m==null?A.shapeFlag&512?S.ctx.activate(A,E,F,j,I):Be(A,E,F,S,q,j,I):ee(m,A,I)},Be=(m,A,E,F,S,q,j)=>{const $=m.component=pf(m,F,S);if(tp(m)&&($.ctx.renderer=Fe),uf($),$.asyncDep){if(S&&S.registerDep($,te),!m.el){const I=$.subTree=J(at);_(null,I,A,E)}return}te($,m,A,E,S,q,j)},ee=(m,A,E)=>{const F=A.component=m.component;if(_d(m,A,E))if(F.asyncDep&&!F.asyncResolved){Z(F,A,E);return}else F.next=A,Ad(F.update),F.update();else A.el=m.el,F.vnode=A},te=(m,A,E,F,S,q,j)=>{const $=()=>{if(m.isMounted){let{next:X,bu:Q,u:G,parent:ne,vnode:ve}=m,xe=X,Ce;pt(m,!1),X?(X.el=ve.el,Z(m,X,j)):X=ve,Q&&Ht(Q),(Ce=X.props&&X.props.onVnodeBeforeUpdate)&&gs(Ce,ne,X,ve),pt(m,!0);const Pe=yl(m),Es=m.subTree;m.subTree=Pe,b(Es,Pe,f(Es.el),W(Es),m,S,q),X.el=Pe.el,xe===null&&kd(m,Pe.el),G&&Ve(G,S),(Ce=X.props&&X.props.onVnodeUpdated)&&Ve(()=>gs(Ce,ne,X,ve),S)}else{let X;const{el:Q,props:G}=A,{bm:ne,m:ve,parent:xe}=m,Ce=Kt(A);if(pt(m,!1),ne&&Ht(ne),!Ce&&(X=G&&G.onVnodeBeforeMount)&&gs(X,xe,A),pt(m,!0),Q&&pe){const Pe=()=>{m.subTree=yl(m),pe(Q,m.subTree,m,S,null)};Ce?A.type.__asyncLoader().then(()=>!m.isUnmounted&&Pe()):Pe()}else{const Pe=m.subTree=yl(m);b(null,Pe,E,F,m,S,q),A.el=Pe.el}if(ve&&Ve(ve,S),!Ce&&(X=G&&G.onVnodeMounted)){const Pe=A;Ve(()=>gs(X,xe,Pe),S)}(A.shapeFlag&256||xe&&Kt(xe.vnode)&&xe.vnode.shapeFlag&256)&&m.a&&Ve(m.a,S),m.isMounted=!0,A=E=F=null}},I=m.effect=new Or($,()=>Qc(T),m.scope),T=m.update=()=>I.run();T.id=m.uid,pt(m,!0),T()},Z=(m,A,E)=>{A.component=m;const F=m.vnode.props;m.vnode=A,m.next=null,Kd(m,A.props,F,E),Xd(m,A.children,E),sn(),Wo(void 0,m.update),tn()},me=(m,A,E,F,S,q,j,$,I=!1)=>{const T=m&&m.children,X=m?m.shapeFlag:0,Q=A.children,{patchFlag:G,shapeFlag:ne}=A;if(G>0){if(G&128){Ge(T,Q,E,F,S,q,j,$,I);return}else if(G&256){Ts(T,Q,E,F,S,q,j,$,I);return}}ne&8?(X&16&&O(T,S,q),Q!==T&&y(E,Q)):X&16?ne&16?Ge(T,Q,E,F,S,q,j,$,I):O(T,S,q,!0):(X&8&&y(E,""),ne&16&&ye(Q,E,F,S,q,j,$,I))},Ts=(m,A,E,F,S,q,j,$,I)=>{m=m||Nt,A=A||Nt;const T=m.length,X=A.length,Q=Math.min(T,X);let G;for(G=0;G<Q;G++){const ne=A[G]=I?Ys(A[G]):Os(A[G]);b(m[G],ne,E,null,S,q,j,$,I)}T>X?O(m,S,q,!0,!1,Q):ye(A,E,F,S,q,j,$,I,Q)},Ge=(m,A,E,F,S,q,j,$,I)=>{let T=0;const X=A.length;let Q=m.length-1,G=X-1;for(;T<=Q&&T<=G;){const ne=m[T],ve=A[T]=I?Ys(A[T]):Os(A[T]);if(cn(ne,ve))b(ne,ve,E,null,S,q,j,$,I);else break;T++}for(;T<=Q&&T<=G;){const ne=m[Q],ve=A[G]=I?Ys(A[G]):Os(A[G]);if(cn(ne,ve))b(ne,ve,E,null,S,q,j,$,I);else break;Q--,G--}if(T>Q){if(T<=G){const ne=G+1,ve=ne<X?A[ne].el:F;for(;T<=G;)b(null,A[T]=I?Ys(A[T]):Os(A[T]),E,ve,S,q,j,$,I),T++}}else if(T>G)for(;T<=Q;)ts(m[T],S,q,!0),T++;else{const ne=T,ve=T,xe=new Map;for(T=ve;T<=G;T++){const rs=A[T]=I?Ys(A[T]):Os(A[T]);rs.key!=null&&xe.set(rs.key,T)}let Ce,Pe=0;const Es=G-ve+1;let Ft=!1,Aa=0;const an=new Array(Es);for(T=0;T<Es;T++)an[T]=0;for(T=ne;T<=Q;T++){const rs=m[T];if(Pe>=Es){ts(rs,S,q,!0);continue}let Ps;if(rs.key!=null)Ps=xe.get(rs.key);else for(Ce=ve;Ce<=G;Ce++)if(an[Ce-ve]===0&&cn(rs,A[Ce])){Ps=Ce;break}Ps===void 0?ts(rs,S,q,!0):(an[Ps-ve]=T+1,Ps>=Aa?Aa=Ps:Ft=!0,b(rs,A[Ps],E,null,S,q,j,$,I),Pe++)}const va=Ft?ef(an):Nt;for(Ce=va.length-1,T=Es-1;T>=0;T--){const rs=ve+T,Ps=A[rs],ba=rs+1<X?A[rs+1].el:F;an[T]===0?b(null,Ps,E,ba,S,q,j,$,I):Ft&&(Ce<0||T!==va[Ce]?ms(Ps,E,ba,2):Ce--)}}},ms=(m,A,E,F,S=null)=>{const{el:q,type:j,transition:$,children:I,shapeFlag:T}=m;if(T&6){ms(m.component.subTree,A,E,F);return}if(T&128){m.suspense.move(A,E,F);return}if(T&64){j.move(m,A,E,Fe);return}if(j===ke){o(q,A,E);for(let Q=0;Q<I.length;Q++)ms(I[Q],A,E,F);o(m.anchor,A,E);return}if(j===hl){B(m,A,E);return}if(F!==2&&T&1&&$)if(F===0)$.beforeEnter(q),o(q,A,E),Ve(()=>$.enter(q),S);else{const{leave:Q,delayLeave:G,afterLeave:ne}=$,ve=()=>o(q,A,E),xe=()=>{Q(q,()=>{ve(),ne&&ne()})};G?G(q,ve,xe):xe()}else o(q,A,E)},ts=(m,A,E,F=!1,S=!1)=>{const{type:q,props:j,ref:$,children:I,dynamicChildren:T,shapeFlag:X,patchFlag:Q,dirs:G}=m;if($!=null&&Yl($,null,E,m,!0),X&256){A.ctx.deactivate(m);return}const ne=X&1&&G,ve=!Kt(m);let xe;if(ve&&(xe=j&&j.onVnodeBeforeUnmount)&&gs(xe,A,m),X&6)V(m.component,E,F);else{if(X&128){m.suspense.unmount(E,F);return}ne&&ct(m,null,A,"beforeUnmount"),X&64?m.type.remove(m,A,E,S,Fe,F):T&&(q!==ke||Q>0&&Q&64)?O(T,A,E,!1,!0):(q===ke&&Q&384||!S&&X&16)&&O(I,A,E),F&&St(m)}(ve&&(xe=j&&j.onVnodeUnmounted)||ne)&&Ve(()=>{xe&&gs(xe,A,m),ne&&ct(m,null,A,"unmounted")},E)},St=m=>{const{type:A,el:E,anchor:F,transition:S}=m;if(A===ke){C(E,F);return}if(A===hl){M(m);return}const q=()=>{l(E),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(m.shapeFlag&1&&S&&!S.persisted){const{leave:j,delayLeave:$}=S,I=()=>j(E,q);$?$(m.el,q,I):I()}else q()},C=(m,A)=>{let E;for(;m!==A;)E=d(m),l(m),m=E;l(A)},V=(m,A,E)=>{const{bum:F,scope:S,update:q,subTree:j,um:$}=m;F&&Ht(F),S.stop(),q&&(q.active=!1,ts(j,m,A,E)),$&&Ve($,A),Ve(()=>{m.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},O=(m,A,E,F=!1,S=!1,q=0)=>{for(let j=q;j<m.length;j++)ts(m[j],A,E,F,S)},W=m=>m.shapeFlag&6?W(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),be=(m,A,E)=>{m==null?A._vnode&&ts(A._vnode,null,null,!0):b(A._vnode||null,m,A,null,null,null,E),Gc(),A._vnode=m},Fe={p:b,um:ts,m:ms,r:St,mt:Be,mc:ye,pc:me,pbc:Ae,n:W,o:s};let de,pe;return t&&([de,pe]=t(Fe)),{render:be,hydrate:de,createApp:Yd(be,de)}}function pt({effect:s,update:t},n){s.allowRecurse=t.allowRecurse=n}function Kr(s,t,n=!1){const o=s.children,l=t.children;if(se(o)&&se(l))for(let a=0;a<o.length;a++){const i=o[a];let c=l[a];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[a]=Ys(l[a]),c.el=i.el),n||Kr(i,c))}}function ef(s){const t=s.slice(),n=[0];let o,l,a,i,c;const p=s.length;for(o=0;o<p;o++){const u=s[o];if(u!==0){if(l=n[n.length-1],s[l]<u){t[o]=l,n.push(o);continue}for(a=0,i=n.length-1;a<i;)c=a+i>>1,s[n[c]]<u?a=c+1:i=c;u<s[n[a]]&&(a>0&&(t[o]=n[a-1]),n[a]=o)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=t[i];return n}const sf=s=>s.__isTeleport,wn=s=>s&&(s.disabled||s.disabled===""),Ra=s=>typeof SVGElement!="undefined"&&s instanceof SVGElement,Zl=(s,t)=>{const n=s&&s.to;return Ie(n)?t?t(n):null:n},tf={__isTeleport:!0,process(s,t,n,o,l,a,i,c,p,u){const{mc:y,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:D,createComment:b}}=u,x=wn(t.props);let{shapeFlag:_,children:k,dynamicChildren:B}=t;if(s==null){const M=t.el=D(""),P=t.anchor=D("");h(M,n,o),h(P,n,o);const H=t.target=Zl(t.props,g),ae=t.targetAnchor=D("");H&&(h(ae,H),i=i||Ra(H));const ye=(he,Ae)=>{_&16&&y(k,he,Ae,l,a,i,c,p)};x?ye(n,P):H&&ye(H,ae)}else{t.el=s.el;const M=t.anchor=s.anchor,P=t.target=s.target,H=t.targetAnchor=s.targetAnchor,ae=wn(s.props),ye=ae?n:P,he=ae?M:H;if(i=i||Ra(P),B?(d(s.dynamicChildren,B,ye,l,a,i,c),Kr(s,t,!0)):p||f(s,t,ye,he,l,a,i,c,!1),x)ae||ao(t,n,M,u,1);else if((t.props&&t.props.to)!==(s.props&&s.props.to)){const Ae=t.target=Zl(t.props,g);Ae&&ao(t,Ae,null,u,0)}else ae&&ao(t,P,H,u,1)}},remove(s,t,n,o,{um:l,o:{remove:a}},i){const{shapeFlag:c,children:p,anchor:u,targetAnchor:y,target:f,props:d}=s;if(f&&a(y),(i||!wn(d))&&(a(u),c&16))for(let h=0;h<p.length;h++){const g=p[h];l(g,t,n,!0,!!g.dynamicChildren)}},move:ao,hydrate:nf};function ao(s,t,n,{o:{insert:o},m:l},a=2){a===0&&o(s.targetAnchor,t,n);const{el:i,anchor:c,shapeFlag:p,children:u,props:y}=s,f=a===2;if(f&&o(i,t,n),(!f||wn(y))&&p&16)for(let d=0;d<u.length;d++)l(u[d],t,n,2);f&&o(c,t,n)}function nf(s,t,n,o,l,a,{o:{nextSibling:i,parentNode:c,querySelector:p}},u){const y=t.target=Zl(t.props,p);if(y){const f=y._lpa||y.firstChild;if(t.shapeFlag&16)if(wn(t.props))t.anchor=u(i(s),t,c(s),n,o,l,a),t.targetAnchor=f;else{t.anchor=i(s);let d=f;for(;d;)if(d=i(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,y._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(f,t,y,n,o,l,a)}}return t.anchor&&i(t.anchor)}const of=tf,ke=Symbol(void 0),Qr=Symbol(void 0),at=Symbol(void 0),hl=Symbol(void 0),_n=[];let Bs=null;function w(s=!1){_n.push(Bs=s?null:[])}function lf(){_n.pop(),Bs=_n[_n.length-1]||null}let In=1;function Na(s){In+=s}function gp(s){return s.dynamicChildren=In>0?Bs||Nt:null,lf(),In>0&&Bs&&Bs.push(s),s}function K(s,t,n,o,l,a){return gp(e(s,t,n,o,l,a,!0))}function R(s,t,n,o,l){return gp(J(s,t,n,o,l,!0))}function Gt(s){return s?s.__v_isVNode===!0:!1}function cn(s,t){return s.type===t.type&&s.key===t.key}const sl="__vInternal",Ap=({key:s})=>s!=null?s:null,ho=({ref:s,ref_key:t,ref_for:n})=>s!=null?Ie(s)||_e(s)||ce(s)?{i:We,r:s,k:t,f:!!n}:s:null;function e(s,t=null,n=null,o=0,l=null,a=s===ke?0:1,i=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:s,props:t,key:t&&Ap(t),ref:t&&ho(t),scopeId:Go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null};return c?(Wr(p,n),a&128&&s.normalize(p)):n&&(p.shapeFlag|=Ie(n)?8:16),In>0&&!i&&Bs&&(p.patchFlag>0||a&6)&&p.patchFlag!==32&&Bs.push(p),p}const J=rf;function rf(s,t=null,n=null,o=0,l=null,a=!1){if((!s||s===Md)&&(s=at),Gt(s)){const c=kt(s,t,!0);return n&&Wr(c,n),In>0&&!a&&Bs&&(c.shapeFlag&6?Bs[Bs.indexOf(s)]=c:Bs.push(c)),c.patchFlag|=-2,c}if(hf(s)&&(s=s.__vccOpts),t){t=oe(t);let{class:c,style:p}=t;c&&!Ie(c)&&(t.class=Me(c)),Ue(p)&&(Uc(p)&&!se(p)&&(p=ss({},p)),t.style=ls(p))}const i=Ie(s)?1:Jc(s)?128:sf(s)?64:Ue(s)?4:ce(s)?2:0;return e(s,t,n,o,l,i,a,!0)}function oe(s){return s?Uc(s)||sl in s?ss({},s):s:null}function kt(s,t,n=!1){const{props:o,ref:l,patchFlag:a,children:i}=s,c=t?zo(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:c,key:c&&Ap(c),ref:t&&t.ref?n&&l?se(l)?l.concat(ho(t)):[l,ho(t)]:ho(t):l,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:i,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:t&&s.type!==ke?a===-1?16:a|16:a,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&kt(s.ssContent),ssFallback:s.ssFallback&&kt(s.ssFallback),el:s.el,anchor:s.anchor}}function r(s=" ",t=0){return J(Qr,null,s,t)}function fe(s="",t=!1){return t?(w(),R(at,null,s)):J(at,null,s)}function Os(s){return s==null||typeof s=="boolean"?J(at):se(s)?J(ke,null,s.slice()):typeof s=="object"?Ys(s):J(Qr,null,String(s))}function Ys(s){return s.el===null||s.memo?s:kt(s)}function Wr(s,t){let n=0;const{shapeFlag:o}=s;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),Wr(s,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!(sl in t)?t._ctx=We:l===3&&We&&(We.slots._===1?t._=1:(t._=2,s.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:We},n=32):(t=String(t),o&64?(n=16,t=[r(t)]):n=8);s.children=t,s.shapeFlag|=n}function zo(...s){const t={};for(let n=0;n<s.length;n++){const o=s[n];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Me([t.class,o.class]));else if(l==="style")t.style=ls([t.style,o.style]);else if(Ro(l)){const a=t[l],i=o[l];i&&a!==i&&!(se(a)&&a.includes(i))&&(t[l]=a?[].concat(a,i):i)}else l!==""&&(t[l]=o[l])}return t}function gs(s,t,n,o=null){Cs(s,t,7,[n,o])}const af=mp();let cf=0;function pf(s,t,n){const o=s.type,l=(t?t.appContext:s.appContext)||af,a={uid:cf++,vnode:s,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(o,l),emitsOptions:Zc(o,l),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:o.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Dd.bind(null,a),s.ce&&s.ce(a),a}let He=null;const xt=()=>He||We,Yt=s=>{He=s,s.scope.on()},bt=()=>{He&&He.scope.off(),He=null};function vp(s){return s.vnode.shapeFlag&4}let Ln=!1;function uf(s,t=!1){Ln=t;const{props:n,children:o}=s.vnode,l=vp(s);Vd(s,n,l,t),Wd(s,o);const a=l?yf(s,t):void 0;return Ln=!1,a}function yf(s,t){const n=s.type;s.accessCache=Object.create(null),s.proxy=Ko(new Proxy(s.ctx,Ld));const{setup:o}=n;if(o){const l=s.setupContext=o.length>1?ff(s):null;Yt(s),sn();const a=st(o,s,0,[s.props,l]);if(tn(),bt(),zc(a)){if(a.then(bt,bt),t)return a.then(i=>{Ua(s,i,t)}).catch(i=>{Qo(i,s,0)});s.asyncDep=a}else Ua(s,a,t)}else bp(s,t)}function Ua(s,t,n){ce(t)?s.type.__ssrInlineRender?s.ssrRender=t:s.render=t:Ue(t)&&(s.setupState=Vc(t)),bp(s,n)}let Ha;function bp(s,t,n){const o=s.type;if(!s.render){if(!t&&Ha&&!o.render){const l=o.template;if(l){const{isCustomElement:a,compilerOptions:i}=s.appContext.config,{delimiters:c,compilerOptions:p}=o,u=ss(ss({isCustomElement:a,delimiters:c},i),p);o.render=Ha(l,u)}}s.render=o.render||xs}Yt(s),sn(),jd(s),tn(),bt()}function df(s){return new Proxy(s.attrs,{get(t,n){return hs(s,"get","$attrs"),t[n]}})}function ff(s){const t=o=>{s.exposed=o||{}};let n;return{get attrs(){return n||(n=df(s))},slots:s.slots,emit:s.emit,expose:t}}function tl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Vc(Ko(s.exposed)),{get(t,n){if(n in t)return t[n];if(n in xo)return xo[n](s)}}))}function Jl(s,t=!0){return ce(s)?s.displayName||s.name:s.name||t&&s.__name}function hf(s){return ce(s)&&"__vccOpts"in s}const z=(s,t)=>hd(s,t,Ln);function zs(s,t,n){const o=arguments.length;return o===2?Ue(t)&&!se(t)?Gt(t)?J(s,null,[t]):J(s,t):J(s,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Gt(n)&&(n=[n]),J(s,t,n))}const mf="3.2.37",gf="http://www.w3.org/2000/svg",ft=typeof document!="undefined"?document:null,Va=ft&&ft.createElement("template"),Af={insert:(s,t,n)=>{t.insertBefore(s,n||null)},remove:s=>{const t=s.parentNode;t&&t.removeChild(s)},createElement:(s,t,n,o)=>{const l=t?ft.createElementNS(gf,s):ft.createElement(s,n?{is:n}:void 0);return s==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:s=>ft.createTextNode(s),createComment:s=>ft.createComment(s),setText:(s,t)=>{s.nodeValue=t},setElementText:(s,t)=>{s.textContent=t},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>ft.querySelector(s),setScopeId(s,t){s.setAttribute(t,"")},cloneNode(s){const t=s.cloneNode(!0);return"_value"in s&&(t._value=s._value),t},insertStaticContent(s,t,n,o,l,a){const i=n?n.previousSibling:t.lastChild;if(l&&(l===a||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===a||!(l=l.nextSibling)););else{Va.innerHTML=o?`<svg>${s}</svg>`:s;const c=Va.content;if(o){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vf(s,t,n){const o=s._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?s.removeAttribute("class"):n?s.setAttribute("class",t):s.className=t}function bf(s,t,n){const o=s.style,l=Ie(n);if(n&&!l){for(const a in n)er(o,a,n[a]);if(t&&!Ie(t))for(const a in t)n[a]==null&&er(o,a,"")}else{const a=o.display;l?t!==n&&(o.cssText=n):t&&s.removeAttribute("style"),"_vod"in s&&(o.display=a)}}const Ka=/\s*!important$/;function er(s,t,n){if(se(n))n.forEach(o=>er(s,t,o));else if(n==null&&(n=""),t.startsWith("--"))s.setProperty(t,n);else{const o=Df(s,t);Ka.test(n)?s.setProperty(Bt(o),n.replace(Ka,""),"important"):s[o]=n}}const Qa=["Webkit","Moz","ms"],ml={};function Df(s,t){const n=ml[t];if(n)return n;let o=Is(t);if(o!=="filter"&&o in s)return ml[t]=o;o=Ho(o);for(let l=0;l<Qa.length;l++){const a=Qa[l]+o;if(a in s)return ml[t]=a}return t}const Wa="http://www.w3.org/1999/xlink";function Ef(s,t,n,o,l){if(o&&t.startsWith("xlink:"))n==null?s.removeAttributeNS(Wa,t.slice(6,t.length)):s.setAttributeNS(Wa,t,n);else{const a=by(t);n==null||a&&!Bc(n)?s.removeAttribute(t):s.setAttribute(t,a?"":n)}}function wf(s,t,n,o,l,a,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,l,a),s[t]=n==null?"":n;return}if(t==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=n;const p=n==null?"":n;(s.value!==p||s.tagName==="OPTION")&&(s.value=p),n==null&&s.removeAttribute(t);return}let c=!1;if(n===""||n==null){const p=typeof s[t];p==="boolean"?n=Bc(n):n==null&&p==="string"?(n="",c=!0):p==="number"&&(n=0,c=!0)}try{s[t]=n}catch{}c&&s.removeAttribute(t)}const[Dp,_f]=(()=>{let s=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(s=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[s,t]})();let sr=0;const kf=Promise.resolve(),Bf=()=>{sr=0},xf=()=>sr||(kf.then(Bf),sr=Dp());function Mt(s,t,n,o){s.addEventListener(t,n,o)}function Cf(s,t,n,o){s.removeEventListener(t,n,o)}function zf(s,t,n,o,l=null){const a=s._vei||(s._vei={}),i=a[t];if(o&&i)i.value=o;else{const[c,p]=Sf(t);if(o){const u=a[t]=Ff(o,l);Mt(s,c,u,p)}else i&&(Cf(s,c,i,p),a[t]=void 0)}}const Xa=/(?:Once|Passive|Capture)$/;function Sf(s){let t;if(Xa.test(s)){t={};let n;for(;n=s.match(Xa);)s=s.slice(0,s.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Bt(s.slice(2)),t]}function Ff(s,t){const n=o=>{const l=o.timeStamp||Dp();(_f||l>=n.attached-1)&&Cs(Tf(o,n.value),t,5,[o])};return n.value=s,n.attached=xf(),n}function Tf(s,t){if(se(t)){const n=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{n.call(s),s._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Ga=/^on[a-z]/,Pf=(s,t,n,o,l=!1,a,i,c,p)=>{t==="class"?vf(s,o,l):t==="style"?bf(s,n,o):Ro(t)?zr(t)||zf(s,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Of(s,t,o,l))?wf(s,t,o,a,i,c,p):(t==="true-value"?s._trueValue=o:t==="false-value"&&(s._falseValue=o),Ef(s,t,o,l))};function Of(s,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in s&&Ga.test(t)&&ce(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&s.tagName==="INPUT"||t==="type"&&s.tagName==="TEXTAREA"||Ga.test(t)&&Ie(n)?!1:t in s}const Ya=s=>{const t=s.props["onUpdate:modelValue"]||!1;return se(t)?n=>Ht(t,n):t};function $f(s){s.target.composing=!0}function Za(s){const t=s.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qf={created(s,{modifiers:{lazy:t,trim:n,number:o}},l){s._assign=Ya(l);const a=o||l.props&&l.props.type==="number";Mt(s,t?"change":"input",i=>{if(i.target.composing)return;let c=s.value;n&&(c=c.trim()),a&&(c=Il(c)),s._assign(c)}),n&&Mt(s,"change",()=>{s.value=s.value.trim()}),t||(Mt(s,"compositionstart",$f),Mt(s,"compositionend",Za),Mt(s,"change",Za))},mounted(s,{value:t}){s.value=t==null?"":t},beforeUpdate(s,{value:t,modifiers:{lazy:n,trim:o,number:l}},a){if(s._assign=Ya(a),s.composing||document.activeElement===s&&s.type!=="range"&&(n||o&&s.value.trim()===t||(l||s.type==="number")&&Il(s.value)===t))return;const i=t==null?"":t;s.value!==i&&(s.value=i)}},Mf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ja=(s,t)=>n=>{if(!("key"in n))return;const o=Bt(n.key);if(t.some(l=>l===o||Mf[l]===o))return s(n)},Ep={beforeMount(s,{value:t},{transition:n}){s._vod=s.style.display==="none"?"":s.style.display,n&&t?n.beforeEnter(s):pn(s,t)},mounted(s,{value:t},{transition:n}){n&&t&&n.enter(s)},updated(s,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(s),pn(s,!0),o.enter(s)):o.leave(s,()=>{pn(s,!1)}):pn(s,t))},beforeUnmount(s,{value:t}){pn(s,t)}};function pn(s,t){s.style.display=t?s._vod:"none"}const If=ss({patchProp:Pf},Af);let ei;function Lf(){return ei||(ei=Zd(If))}const jf=(...s)=>{const t=Lf().createApp(...s),{mount:n}=t;return t.mount=o=>{const l=Rf(o);if(!l)return;const a=t._component;!ce(a)&&!a.render&&!a.template&&(a.template=l.innerHTML),l.innerHTML="";const i=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function Rf(s){return Ie(s)?document.querySelector(s):s}var Nf=Object.defineProperty,si=Object.getOwnPropertySymbols,Uf=Object.prototype.hasOwnProperty,Hf=Object.prototype.propertyIsEnumerable,ti=(s,t,n)=>t in s?Nf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,Vf=(s,t)=>{for(var n in t||(t={}))Uf.call(t,n)&&ti(s,n,t[n]);if(si)for(var n of si(t))Hf.call(t,n)&&ti(s,n,t[n]);return s},wp="usehead",ni="head:count",gl="data-head-attrs",Kf=(s,t,n)=>{const o=n.createElement(s);for(const l of Object.keys(t)){let a=t[l];l==="key"||a===!1||(l==="children"?o.textContent=a:o.setAttribute(l,a))}return o};function Qf(s,t){if(s instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!s.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=n,n===s.nonce&&s.isEqualNode(o)}}return s.isEqualNode(t)}var Wf=s=>{const t=["key","id","name","property"];for(const n of t){const o=typeof s.getAttribute=="function"?s.hasAttribute(n)?s.getAttribute(n):void 0:s[n];if(o!==void 0)return{name:n,value:o}}},Xf=()=>{const s=L(wp);if(!s)throw new Error("You may forget to apply app.use(head)");return s},Gf=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],Yf=s=>{const t=[];for(const n of Object.keys(s))if(s[n]!=null){if(n==="title")t.push({tag:n,props:{children:s[n]}});else if(n==="base")t.push({tag:n,props:Vf({key:"default"},s[n])});else if(Gf.includes(n)){const o=s[n];Array.isArray(o)?o.forEach(l=>{t.push({tag:n,props:l})}):o&&t.push({tag:n,props:o})}}return t},oi=(s,t)=>{const n=s.getAttribute(gl);if(n)for(const l of n.split(","))l in t||s.removeAttribute(l);const o=[];for(const l in t){const a=t[l];a!=null&&(a===!1?s.removeAttribute(l):s.setAttribute(l,a),o.push(l))}o.length?s.setAttribute(gl,o.join(",")):s.removeAttribute(gl)},Zf=(s=window.document,t,n)=>{var o;const l=s.head;let a=l.querySelector(`meta[name="${ni}"]`);const i=a?Number(a.getAttribute("content")):0,c=[];if(a)for(let u=0,y=a.previousElementSibling;u<i;u++,y=(y==null?void 0:y.previousElementSibling)||null)((o=y==null?void 0:y.tagName)==null?void 0:o.toLowerCase())===t&&c.push(y);else a=s.createElement("meta"),a.setAttribute("name",ni),a.setAttribute("content","0"),l.append(a);let p=n.map(u=>Kf(u.tag,u.props,s));p=p.filter(u=>{for(let y=0;y<c.length;y++){const f=c[y];if(Qf(f,u))return c.splice(y,1),!1}return!0}),c.forEach(u=>{var y;return(y=u.parentNode)==null?void 0:y.removeChild(u)}),p.forEach(u=>{l.insertBefore(u,a)}),a.setAttribute("content",""+(i-c.length+p.length))},Jf=()=>{let s=[],t=new Set;const n={install(o){o.config.globalProperties.$head=n,o.provide(wp,n)},get headTags(){const o=[];return s.forEach(l=>{Yf(l.value).forEach(i=>{if(i.tag==="meta"||i.tag==="base"||i.tag==="script"){const c=Wf(i.props);if(c){let p=-1;for(let u=0;u<o.length;u++){const y=o[u],f=y.props[c.name],d=i.props[c.name];if(y.tag===i.tag&&f===d){p=u;break}}p!==-1&&o.splice(p,1)}}o.push(i)})}),o},addHeadObjs(o){s.push(o)},removeHeadObjs(o){s=s.filter(l=>l!==o)},updateDOM(o=window.document){let l,a={},i={};const c={};for(const u of n.headTags){if(u.tag==="title"){l=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(a,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(i,u.props);continue}c[u.tag]=c[u.tag]||[],c[u.tag].push(u)}l!==void 0&&(o.title=l),oi(o.documentElement,a),oi(o.body,i);const p=new Set([...Object.keys(c),...t]);for(const u of p)Zf(o,u,c[u]||[]);t.clear(),Object.keys(c).forEach(u=>t.add(u))}};return n},e9=typeof window!="undefined",s9=s=>{const t=N(s),n=Xf();n.addHeadObjs(t),e9&&(Yo(()=>{n.updateDOM()}),Jo(()=>{n.removeHeadObjs(t),n.updateDOM()}))};const mo=Symbol("v-click-clicks"),It=Symbol("v-click-clicks-elements"),tr=Symbol("v-click-clicks-order-map"),go=Symbol("v-click-clicks-disabled"),_p=Symbol("slidev-slide-scale"),U=Symbol("slidev-slidev-context"),t9=Symbol("slidev-route"),n9=Symbol("slidev-slide-context"),Tt="slidev-vclick-target",Al="slidev-vclick-hidden",o9="slidev-vclick-fade",vl="slidev-vclick-hidden-explicitly",un="slidev-vclick-current",io="slidev-vclick-prior";function li(s,t){if(!s)return!1;const n=s.indexOf(t);return n>=0?(s.splice(n,1),!0):!1}function l9(s){return s!=null}function r9(s,t){return Object.fromEntries(Object.entries(s).map(([n,o])=>t(n,o)).filter(l9))}var mt={theme:"slidev-theme-nearform",title:"The GraphQL Workshop",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Poppins"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Poppins"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Poppins","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",layout:"default"};const we=mt;var _c;const tt=(_c=we.aspectRatio)!=null?_c:16/9;var kc;const Dt=(kc=we.canvasWidth)!=null?kc:980,kp=Math.round(Dt/tt),Bp=z(()=>r9(we.themeConfig||{},(s,t)=>[`--slidev-theme-${s}`,t]));function Ds(s,t,n){Object.defineProperty(s,t,{value:n,writable:!0,enumerable:!1})}const Ct=qe({page:0,clicks:0});let a9=[],i9=[];Ds(Ct,"$syncUp",!0);Ds(Ct,"$syncDown",!0);Ds(Ct,"$paused",!1);Ds(Ct,"$onSet",s=>a9.push(s));Ds(Ct,"$onPatch",s=>i9.push(s));Ds(Ct,"$patch",async()=>!1);function xp(s,t,n=!1){const o=[];let l=!1,a=!1,i,c;const p=qe(t);function u(h){o.push(h)}function y(h,g){clearTimeout(i),l=!0,p[h]=g,i=setTimeout(()=>l=!1,0)}function f(h){l||(clearTimeout(c),a=!0,Object.entries(h).forEach(([g,D])=>{p[g]=D}),c=setTimeout(()=>a=!1,0))}function d(h){let g;n?n&&window.addEventListener("storage",b=>{b&&b.key===h&&b.newValue&&f(JSON.parse(b.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",b=>f(b.data)));function D(){!n&&g&&!a?g.postMessage(Ee(p)):n&&!a&&window.localStorage.setItem(h,JSON.stringify(p)),l||o.forEach(b=>b(p))}if(ue(p,D,{deep:!0}),n){const b=window.localStorage.getItem(h);b&&f(JSON.parse(b))}}return{init:d,onPatch:u,patch:y,state:p}}const{init:c9,onPatch:p9,patch:ri,state:bl}=xp(Ct,{page:1,clicks:0}),zt=qe({});let u9=[],y9=[];Ds(zt,"$syncUp",!0);Ds(zt,"$syncDown",!0);Ds(zt,"$paused",!1);Ds(zt,"$onSet",s=>u9.push(s));Ds(zt,"$onPatch",s=>y9.push(s));Ds(zt,"$patch",async()=>!1);const{init:d9,onPatch:f9,patch:Cp,state:So}=xp(zt,{},!1),h9="modulepreload",ai={},m9="/the-graphql-workshop/",nn=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${m9}${o}`,o in ai)return;ai[o]=!0;const l=o.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":h9,l||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),l)return new Promise((c,p)=>{i.addEventListener("load",c),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function ns(s,t,n){return Array.isArray(s)?(s.length=Math.max(s.length,t),s.splice(t,1,n),n):(s[t]=n,n)}function g9(s,t){if(Array.isArray(s)){s.splice(t,1);return}delete s[t]}function it(s){return Py()?(Oy(s),!0):!1}function je(...s){return z(()=>s.every(t=>v(t)))}function is(s){return z(()=>!v(s))}function A9(s){if(!_e(s))return qe(s);const t=new Proxy({},{get(n,o,l){return v(Reflect.get(s.value,o,l))},set(n,o,l){return _e(s.value[o])&&!_e(l)?s.value[o].value=l:s.value[o]=l,!0},deleteProperty(n,o){return Reflect.deleteProperty(s.value,o)},has(n,o){return Reflect.has(s.value,o)},ownKeys(){return Object.keys(s.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(t)}var ii;const bs=typeof window!="undefined",v9=s=>typeof s!="undefined",b9=Object.prototype.toString,D9=s=>typeof s=="number",zp=s=>typeof s=="string",Fo=s=>b9.call(s)==="[object Object]",nr=()=>+Date.now(),nt=()=>{};bs&&((ii=window==null?void 0:window.navigator)==null?void 0:ii.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E9(s,t){function n(...o){s(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const Sp=s=>s();function w9(s=Sp){const t=N(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...a)=>{t.value&&s(...a)}}}function _9(s,t){var n;if(typeof s=="number")return s+t;const o=((n=s.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",l=s.slice(o.length),a=parseFloat(o)+t;return Number.isNaN(a)?s:a+l}var k9=Object.defineProperty,B9=Object.defineProperties,x9=Object.getOwnPropertyDescriptors,ci=Object.getOwnPropertySymbols,C9=Object.prototype.hasOwnProperty,z9=Object.prototype.propertyIsEnumerable,pi=(s,t,n)=>t in s?k9(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,S9=(s,t)=>{for(var n in t||(t={}))C9.call(t,n)&&pi(s,n,t[n]);if(ci)for(var n of ci(t))z9.call(t,n)&&pi(s,n,t[n]);return s},F9=(s,t)=>B9(s,x9(t));function T9(s){if(!_e(s))return ud(s);const t=Array.isArray(s.value)?new Array(s.value.length):{};for(const n in s.value)t[n]=pd(()=>({get(){return s.value[n]},set(o){if(Array.isArray(s.value)){const l=[...s.value];l[n]=o,s.value=l}else{const l=F9(S9({},s.value),{[n]:o});Object.setPrototypeOf(l,s.value),s.value=l}}}));return t}function P9(s,t=!0){xt()?lp(s):t?s():Ke(s)}function O9(s,t=!0){xt()?Wn(s):t?s():Ke(s)}function Fp(s){xt()&&el(s)}function $9(s,t=1e3,n={}){const{immediate:o=!0,immediateCallback:l=!1}=n;let a=null;const i=N(!1);function c(){a&&(clearInterval(a),a=null)}function p(){i.value=!1,c()}function u(){v(t)<=0||(i.value=!0,l&&s(),c(),a=setInterval(s,v(t)))}if(o&&bs&&u(),_e(t)){const y=ue(t,()=>{i.value&&bs&&u()});it(y)}return it(p),{isActive:i,pause:p,resume:u}}function Tp(s=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,l=_e(s),a=N(s);function i(c){return arguments.length?(a.value=c,a.value):(a.value=a.value===v(n)?v(o):v(n),a.value)}return l?i:[a,i]}var ui=Object.getOwnPropertySymbols,q9=Object.prototype.hasOwnProperty,M9=Object.prototype.propertyIsEnumerable,I9=(s,t)=>{var n={};for(var o in s)q9.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&ui)for(var o of ui(s))t.indexOf(o)<0&&M9.call(s,o)&&(n[o]=s[o]);return n};function L9(s,t,n={}){const o=n,{eventFilter:l=Sp}=o,a=I9(o,["eventFilter"]);return ue(s,E9(l,t),a)}function j9(s,t,n){const o=ue(s,(...l)=>(Ke(()=>o()),t(...l)),n)}var R9=Object.defineProperty,N9=Object.defineProperties,U9=Object.getOwnPropertyDescriptors,To=Object.getOwnPropertySymbols,Pp=Object.prototype.hasOwnProperty,Op=Object.prototype.propertyIsEnumerable,yi=(s,t,n)=>t in s?R9(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,H9=(s,t)=>{for(var n in t||(t={}))Pp.call(t,n)&&yi(s,n,t[n]);if(To)for(var n of To(t))Op.call(t,n)&&yi(s,n,t[n]);return s},V9=(s,t)=>N9(s,U9(t)),K9=(s,t)=>{var n={};for(var o in s)Pp.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&To)for(var o of To(s))t.indexOf(o)<0&&Op.call(s,o)&&(n[o]=s[o]);return n};function Q9(s,t,n={}){const o=n,{eventFilter:l}=o,a=K9(o,["eventFilter"]),{eventFilter:i,pause:c,resume:p,isActive:u}=w9(l);return{stop:L9(s,t,V9(H9({},a),{eventFilter:i})),pause:c,resume:p,isActive:u}}function os(s){var t;const n=v(s);return(t=n==null?void 0:n.$el)!=null?t:n}const Xe=bs?window:void 0,W9=bs?window.document:void 0;function Oe(...s){let t,n,o,l;if(zp(s[0])?([n,o,l]=s,t=Xe):[t,n,o,l]=s,!t)return nt;let a=nt;const i=ue(()=>os(t),p=>{a(),p&&(p.addEventListener(n,o,l),a=()=>{p.removeEventListener(n,o,l),a=nt})},{immediate:!0,flush:"post"}),c=()=>{i(),a()};return it(c),c}function X9(s,t,n={}){const{window:o=Xe,ignore:l,capture:a=!0}=n;if(!o)return;const i=N(!0);let c;const p=f=>{o.clearTimeout(c);const d=os(s),h=f.composedPath();!d||d===f.target||h.includes(d)||!i.value||l&&l.length>0&&l.some(g=>{const D=os(g);return D&&(f.target===D||h.includes(D))})||t(f)},u=[Oe(o,"click",p,{passive:!0,capture:a}),Oe(o,"pointerdown",f=>{const d=os(s);i.value=!!d&&!f.composedPath().includes(d)},{passive:!0}),Oe(o,"pointerup",f=>{if(f.button===0){const d=f.composedPath();f.composedPath=()=>d,c=o.setTimeout(()=>p(f),50)}},{passive:!0})];return()=>u.forEach(f=>f())}const G9=s=>typeof s=="function"?s:typeof s=="string"?t=>t.key===s:Array.isArray(s)?t=>s.includes(t.key):s?()=>!0:()=>!1;function Y9(s,t,n={}){const{target:o=Xe,eventName:l="keydown",passive:a=!1}=n,i=G9(s);return Oe(o,l,p=>{i(p)&&t(p)},a)}function Z9(s={}){const{window:t=Xe}=s,n=N(0);return t&&(Oe(t,"blur",()=>n.value+=1,!0),Oe(t,"focus",()=>n.value+=1,!0)),z(()=>(n.value,t==null?void 0:t.document.activeElement))}function Ao(s,t={}){const{window:n=Xe}=t,o=Boolean(n&&"matchMedia"in n);let l;const a=N(!1),i=()=>{!o||(l||(l=n.matchMedia(s)),a.value=l.matches)};return P9(()=>{i(),l&&("addEventListener"in l?l.addEventListener("change",i):l.addListener(i),it(()=>{"removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i)}))}),a}const J9={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var eh=Object.defineProperty,di=Object.getOwnPropertySymbols,sh=Object.prototype.hasOwnProperty,th=Object.prototype.propertyIsEnumerable,fi=(s,t,n)=>t in s?eh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,nh=(s,t)=>{for(var n in t||(t={}))sh.call(t,n)&&fi(s,n,t[n]);if(di)for(var n of di(t))th.call(t,n)&&fi(s,n,t[n]);return s};function oh(s,t={}){function n(c,p){let u=s[c];return p!=null&&(u=_9(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Xe}=t;function l(c){return o?o.matchMedia(c).matches:!1}const a=c=>Ao(`(min-width: ${n(c)})`,t),i=Object.keys(s).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>a(p),enumerable:!0,configurable:!0}),c),{});return nh({greater:a,smaller(c){return Ao(`(max-width: ${n(c,-.1)})`,t)},between(c,p){return Ao(`(min-width: ${n(c)}) and (max-width: ${n(p,-.1)})`,t)},isGreater(c){return l(`(min-width: ${n(c)})`)},isSmaller(c){return l(`(max-width: ${n(c,-.1)})`)},isInBetween(c,p){return l(`(min-width: ${n(c)}) and (max-width: ${n(p,-.1)})`)}},i)}const or=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},lr="__vueuse_ssr_handlers__";or[lr]=or[lr]||{};const lh=or[lr];function rh(s,t){return lh[s]||t}function ah(s){return s==null?"any":s instanceof Set?"set":s instanceof Map?"map":s instanceof Date?"date":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"||Array.isArray(s)?"object":Number.isNaN(s)?"any":"number"}const ih={boolean:{read:s=>s==="true",write:s=>String(s)},object:{read:s=>JSON.parse(s),write:s=>JSON.stringify(s)},number:{read:s=>Number.parseFloat(s),write:s=>String(s)},any:{read:s=>s,write:s=>String(s)},string:{read:s=>s,write:s=>String(s)},map:{read:s=>new Map(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s.entries()))},set:{read:s=>new Set(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s))},date:{read:s=>new Date(s),write:s=>s.toISOString()}};function Fs(s,t,n,o={}){var l;const{flush:a="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,shallow:u,window:y=Xe,eventFilter:f,onError:d=P=>{console.error(P)}}=o,h=(u?Ls:N)(t);if(!n)try{n=rh("getDefaultStorage",()=>{var P;return(P=Xe)==null?void 0:P.localStorage})()}catch(P){d(P)}if(!n)return h;const g=v(t),D=ah(g),b=(l=o.serializer)!=null?l:ih[D],{pause:x,resume:_}=Q9(h,()=>k(h.value),{flush:a,deep:i,eventFilter:f});return y&&c&&Oe(y,"storage",M),M(),h;function k(P){try{P==null?n.removeItem(s):n.setItem(s,b.write(P))}catch(H){d(H)}}function B(P){if(!(P&&P.key!==s)){x();try{const H=P?P.newValue:n.getItem(s);return H==null?(p&&g!==null&&n.setItem(s,b.write(g)),g):typeof H!="string"?H:b.read(H)}catch(H){d(H)}finally{_()}}}function M(P){P&&P.key!==s||(h.value=B(P))}}function ch(s){return Ao("(prefers-color-scheme: dark)",s)}var ph=Object.defineProperty,uh=Object.defineProperties,yh=Object.getOwnPropertyDescriptors,hi=Object.getOwnPropertySymbols,dh=Object.prototype.hasOwnProperty,fh=Object.prototype.propertyIsEnumerable,mi=(s,t,n)=>t in s?ph(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,hh=(s,t)=>{for(var n in t||(t={}))dh.call(t,n)&&mi(s,n,t[n]);if(hi)for(var n of hi(t))fh.call(t,n)&&mi(s,n,t[n]);return s},mh=(s,t)=>uh(s,yh(t));function vD(s,t={}){var n,o;const l=(n=t.draggingElement)!=null?n:Xe,a=N((o=t.initialValue)!=null?o:{x:0,y:0}),i=N(),c=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,p=d=>{v(t.preventDefault)&&d.preventDefault(),v(t.stopPropagation)&&d.stopPropagation()},u=d=>{var h;if(!c(d)||v(t.exact)&&d.target!==v(s))return;const g=v(s).getBoundingClientRect(),D={x:d.pageX-g.left,y:d.pageY-g.top};((h=t.onStart)==null?void 0:h.call(t,D,d))!==!1&&(i.value=D,p(d))},y=d=>{var h;!c(d)||!i.value||(a.value={x:d.pageX-i.value.x,y:d.pageY-i.value.y},(h=t.onMove)==null||h.call(t,a.value,d),p(d))},f=d=>{var h;!c(d)||!i.value||(i.value=void 0,(h=t.onEnd)==null||h.call(t,a.value,d),p(d))};return bs&&(Oe(s,"pointerdown",u,!0),Oe(l,"pointermove",y,!0),Oe(l,"pointerup",f,!0)),mh(hh({},T9(a)),{position:a,isDragging:z(()=>!!i.value),style:z(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var gi=Object.getOwnPropertySymbols,gh=Object.prototype.hasOwnProperty,Ah=Object.prototype.propertyIsEnumerable,vh=(s,t)=>{var n={};for(var o in s)gh.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&gi)for(var o of gi(s))t.indexOf(o)<0&&Ah.call(s,o)&&(n[o]=s[o]);return n};function bh(s,t,n={}){const o=n,{window:l=Xe}=o,a=vh(o,["window"]);let i;const c=l&&"ResizeObserver"in l,p=()=>{i&&(i.disconnect(),i=void 0)},u=ue(()=>os(s),f=>{p(),c&&l&&f&&(i=new ResizeObserver(t),i.observe(f,a))},{immediate:!0,flush:"post"}),y=()=>{p(),u()};return it(y),{isSupported:c,stop:y}}function $p(s,t={}){const{immediate:n=!0,window:o=Xe}=t,l=N(!1);let a=null;function i(){!l.value||!o||(s(),a=o.requestAnimationFrame(i))}function c(){!l.value&&o&&(l.value=!0,i())}function p(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return n&&c(),it(p),{isActive:l,pause:p,resume:c}}function Dh(s,t={width:0,height:0},n={}){const o=N(t.width),l=N(t.height);return bh(s,([a])=>{o.value=a.contentRect.width,l.value=a.contentRect.height},n),ue(()=>os(s),a=>{o.value=a?t.width:0,l.value=a?t.height:0}),{width:o,height:l}}const Ai=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Eh(s,t={}){const{document:n=W9,autoExit:o=!1}=t,l=s||(n==null?void 0:n.querySelector("html")),a=N(!1);let i=!1,c=Ai[0];if(!n)i=!1;else for(const D of Ai)if(D[1]in n){c=D,i=!0;break}const[p,u,y,,f]=c;async function d(){!i||(n!=null&&n[y]&&await n[u](),a.value=!1)}async function h(){if(!i)return;await d();const D=os(l);D&&(await D[p](),a.value=!0)}async function g(){a.value?await d():await h()}return n&&Oe(n,f,()=>{a.value=!!(n!=null&&n[y])},!1),o&&it(d),{isSupported:i,isFullscreen:a,enter:h,exit:d,toggle:g}}function wh(s,t,n={}){const{root:o,rootMargin:l="0px",threshold:a=.1,window:i=Xe}=n,c=i&&"IntersectionObserver"in i;let p=nt;const u=c?ue(()=>({el:os(s),root:os(o)}),({el:f,root:d})=>{if(p(),!f)return;const h=new IntersectionObserver(t,{root:d,rootMargin:l,threshold:a});h.observe(f),p=()=>{h.disconnect(),p=nt}},{immediate:!0,flush:"post"}):nt,y=()=>{p(),u()};return it(y),{isSupported:c,stop:y}}const _h={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function kh(s={}){const{reactive:t=!1,target:n=Xe,aliasMap:o=_h,passive:l=!0,onEventFired:a=nt}=s,i=qe(new Set),c={toJSON(){return{}},current:i},p=t?qe(c):c,u=new Set;function y(h,g){h in p&&(t?p[h]=g:p[h].value=g)}function f(h,g){var D,b;const x=(D=h.key)==null?void 0:D.toLowerCase(),_=(b=h.code)==null?void 0:b.toLowerCase(),k=[_,x].filter(Boolean);_&&(g?i.add(h.code):i.delete(h.code));for(const B of k)y(B,g);x==="meta"&&!g?(u.forEach(B=>{i.delete(B),y(B,!1)}),u.clear()):typeof h.getModifierState=="function"&&h.getModifierState("Meta")&&g&&[...i,...k].forEach(B=>u.add(B))}n&&(Oe(n,"keydown",h=>(f(h,!0),a(h)),{passive:l}),Oe(n,"keyup",h=>(f(h,!1),a(h)),{passive:l}));const d=new Proxy(p,{get(h,g,D){if(typeof g!="string")return Reflect.get(h,g,D);if(g=g.toLowerCase(),g in o&&(g=o[g]),!(g in p))if(/[+_-]/.test(g)){const x=g.split(/[+_-]/g).map(_=>_.trim());p[g]=z(()=>x.every(_=>v(d[_])))}else p[g]=N(!1);const b=Reflect.get(h,g,D);return t?v(b):b}});return d}function bD(s={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:a=Xe,eventFilter:i}=s,c=N(l.x),p=N(l.y),u=N(null),y=D=>{t==="page"?(c.value=D.pageX,p.value=D.pageY):t==="client"&&(c.value=D.clientX,p.value=D.clientY),u.value="mouse"},f=()=>{c.value=l.x,p.value=l.y},d=D=>{if(D.touches.length>0){const b=D.touches[0];t==="page"?(c.value=b.pageX,p.value=b.pageY):t==="client"&&(c.value=b.clientX,p.value=b.clientY),u.value="touch"}},h=D=>i===void 0?y(D):i(()=>y(D),{}),g=D=>i===void 0?d(D):i(()=>d(D),{});return a&&(Oe(a,"mousemove",h,{passive:!0}),Oe(a,"dragover",h,{passive:!0}),n&&(Oe(a,"touchstart",g,{passive:!0}),Oe(a,"touchmove",g,{passive:!0}),o&&Oe(a,"touchend",f,{passive:!0}))),{x:c,y:p,sourceType:u}}var Us;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(Us||(Us={}));function Bh(s,t={}){const n=N(s),{threshold:o=50,onSwipe:l,onSwipeEnd:a,onSwipeStart:i}=t,c=qe({x:0,y:0}),p=(P,H)=>{c.x=P,c.y=H},u=qe({x:0,y:0}),y=(P,H)=>{u.x=P,u.y=H},f=z(()=>c.x-u.x),d=z(()=>c.y-u.y),{max:h,abs:g}=Math,D=z(()=>h(g(f.value),g(d.value))>=o),b=N(!1),x=N(!1),_=z(()=>D.value?g(f.value)>g(d.value)?f.value>0?Us.LEFT:Us.RIGHT:d.value>0?Us.UP:Us.DOWN:Us.NONE),k=P=>t.pointerTypes?t.pointerTypes.includes(P.pointerType):!0,B=[Oe(s,"pointerdown",P=>{var H,ae;if(!k(P))return;x.value=!0,(ae=(H=n.value)==null?void 0:H.style)==null||ae.setProperty("touch-action","none");const ye=P.target;ye==null||ye.setPointerCapture(P.pointerId);const{clientX:he,clientY:Ae}=P;p(he,Ae),y(he,Ae),i==null||i(P)}),Oe(s,"pointermove",P=>{if(!k(P)||!x.value)return;const{clientX:H,clientY:ae}=P;y(H,ae),!b.value&&D.value&&(b.value=!0),b.value&&(l==null||l(P))}),Oe(s,"pointerup",P=>{var H,ae;!k(P)||(b.value&&(a==null||a(P,_.value)),x.value=!1,b.value=!1,(ae=(H=n.value)==null?void 0:H.style)==null||ae.setProperty("touch-action","initial"))})],M=()=>B.forEach(P=>P());return{isSwiping:jt(b),direction:jt(_),posStart:jt(c),posEnd:jt(u),distanceX:f,distanceY:d,stop:M}}var xh=Object.defineProperty,vi=Object.getOwnPropertySymbols,Ch=Object.prototype.hasOwnProperty,zh=Object.prototype.propertyIsEnumerable,bi=(s,t,n)=>t in s?xh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,Sh=(s,t)=>{for(var n in t||(t={}))Ch.call(t,n)&&bi(s,n,t[n]);if(vi)for(var n of vi(t))zh.call(t,n)&&bi(s,n,t[n]);return s};function DD(s={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:l="requestAnimationFrame"}=s,a=N(nr()+n),i=()=>a.value=nr()+n,c=l==="requestAnimationFrame"?$p(i,{immediate:o}):$9(i,l,{immediate:o});return t?Sh({timestamp:a},c):a}function qs(s,t,n,o={}){var l;const{passive:a=!1,eventName:i,deep:c=!1,defaultValue:p}=o,u=xt(),y=n||(u==null?void 0:u.emit)||((l=u==null?void 0:u.$emit)==null?void 0:l.bind(u));let f=i;t||(t="modelValue"),f=i||f||`update:${t.toString()}`;const d=()=>v9(s[t])?s[t]:p;if(a){const h=N(d());return ue(()=>s[t],g=>h.value=g),ue(h,g=>{(g!==s[t]||c)&&y(f,g)},{deep:c}),h}else return z({get(){return d()},set(h){y(f,h)}})}function ED({window:s=Xe}={}){if(!s)return N(!1);const t=N(s.document.hasFocus());return Oe(s,"blur",()=>{t.value=!1}),Oe(s,"focus",()=>{t.value=!0}),t}function Fh({window:s=Xe,initialWidth:t=1/0,initialHeight:n=1/0}={}){const o=N(t),l=N(n),a=()=>{s&&(o.value=s.innerWidth,l.value=s.innerHeight)};return a(),O9(a),Oe("resize",a,{passive:!0}),{width:o,height:l}}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",on=s=>qp?Symbol(s):"_vr_"+s,Th=on("rvlm"),Di=on("rvd"),Xr=on("r"),Mp=on("rl"),rr=on("rvl"),Lt=typeof window!="undefined";function Ph(s){return s.__esModule||qp&&s[Symbol.toStringTag]==="Module"}const ze=Object.assign;function Dl(s,t){const n={};for(const o in t){const l=t[o];n[o]=Array.isArray(l)?l.map(s):s(l)}return n}const kn=()=>{},Oh=/\/$/,$h=s=>s.replace(Oh,"");function El(s,t,n="/"){let o,l={},a="",i="";const c=t.indexOf("?"),p=t.indexOf("#",c>-1?c:0);return c>-1&&(o=t.slice(0,c),a=t.slice(c+1,p>-1?p:t.length),l=s(a)),p>-1&&(o=o||t.slice(0,p),i=t.slice(p,t.length)),o=Lh(o!=null?o:t,n),{fullPath:o+(a&&"?")+a+i,path:o,query:l,hash:i}}function qh(s,t){const n=t.query?s(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ei(s,t){return!t||!s.toLowerCase().startsWith(t.toLowerCase())?s:s.slice(t.length)||"/"}function Mh(s,t,n){const o=t.matched.length-1,l=n.matched.length-1;return o>-1&&o===l&&Zt(t.matched[o],n.matched[l])&&Ip(t.params,n.params)&&s(t.query)===s(n.query)&&t.hash===n.hash}function Zt(s,t){return(s.aliasOf||s)===(t.aliasOf||t)}function Ip(s,t){if(Object.keys(s).length!==Object.keys(t).length)return!1;for(const n in s)if(!Ih(s[n],t[n]))return!1;return!0}function Ih(s,t){return Array.isArray(s)?wi(s,t):Array.isArray(t)?wi(t,s):s===t}function wi(s,t){return Array.isArray(t)?s.length===t.length&&s.every((n,o)=>n===t[o]):s.length===1&&s[0]===t}function Lh(s,t){if(s.startsWith("/"))return s;if(!s)return t;const n=t.split("/"),o=s.split("/");let l=n.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],!(l===1||i==="."))if(i==="..")l--;else break;return n.slice(0,l).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var jn;(function(s){s.pop="pop",s.push="push"})(jn||(jn={}));var Bn;(function(s){s.back="back",s.forward="forward",s.unknown=""})(Bn||(Bn={}));function jh(s){if(!s)if(Lt){const t=document.querySelector("base");s=t&&t.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),$h(s)}const Rh=/^[^#]+#/;function Nh(s,t){return s.replace(Rh,"#")+t}function Uh(s,t){const n=document.documentElement.getBoundingClientRect(),o=s.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const nl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hh(s){let t;if("el"in s){const n=s.el,o=typeof n=="string"&&n.startsWith("#"),l=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=Uh(l,s)}else t=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function _i(s,t){return(history.state?history.state.position-t:-1)+s}const ar=new Map;function Vh(s,t){ar.set(s,t)}function Kh(s){const t=ar.get(s);return ar.delete(s),t}let Qh=()=>location.protocol+"//"+location.host;function Lp(s,t){const{pathname:n,search:o,hash:l}=t,a=s.indexOf("#");if(a>-1){let c=l.includes(s.slice(a))?s.slice(a).length:1,p=l.slice(c);return p[0]!=="/"&&(p="/"+p),Ei(p,"")}return Ei(n,s)+o+l}function Wh(s,t,n,o){let l=[],a=[],i=null;const c=({state:d})=>{const h=Lp(s,location),g=n.value,D=t.value;let b=0;if(d){if(n.value=h,t.value=d,i&&i===g){i=null;return}b=D?d.position-D.position:0}else o(h);l.forEach(x=>{x(n.value,g,{delta:b,type:jn.pop,direction:b?b>0?Bn.forward:Bn.back:Bn.unknown})})};function p(){i=n.value}function u(d){l.push(d);const h=()=>{const g=l.indexOf(d);g>-1&&l.splice(g,1)};return a.push(h),h}function y(){const{history:d}=window;!d.state||d.replaceState(ze({},d.state,{scroll:nl()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",y),{pauseListeners:p,listen:u,destroy:f}}function ki(s,t,n,o=!1,l=!1){return{back:s,current:t,forward:n,replaced:o,position:window.history.length,scroll:l?nl():null}}function Xh(s){const{history:t,location:n}=window,o={value:Lp(s,n)},l={value:t.state};l.value||a(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(p,u,y){const f=s.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?s:s.slice(f))+p:Qh()+s+p;try{t[y?"replaceState":"pushState"](u,"",d),l.value=u}catch(h){console.error(h),n[y?"replace":"assign"](d)}}function i(p,u){const y=ze({},t.state,ki(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});a(p,y,!0),o.value=p}function c(p,u){const y=ze({},l.value,t.state,{forward:p,scroll:nl()});a(y.current,y,!0);const f=ze({},ki(o.value,p,null),{position:y.position+1},u);a(p,f,!1),o.value=p}return{location:o,state:l,push:c,replace:i}}function Gh(s){s=jh(s);const t=Xh(s),n=Wh(s,t.state,t.location,t.replace);function o(a,i=!0){i||n.pauseListeners(),history.go(a)}const l=ze({location:"",base:s,go:o,createHref:Nh.bind(null,s)},t,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function Yh(s){return typeof s=="string"||s&&typeof s=="object"}function jp(s){return typeof s=="string"||typeof s=="symbol"}const Ws={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rp=on("nf");var Bi;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Bi||(Bi={}));function Jt(s,t){return ze(new Error,{type:s,[Rp]:!0},t)}function Xs(s,t){return s instanceof Error&&Rp in s&&(t==null||!!(s.type&t))}const xi="[^/]+?",Zh={sensitive:!1,strict:!1,start:!0,end:!0},Jh=/[.+*?^${}()[\]/\\]/g;function e6(s,t){const n=ze({},Zh,t),o=[];let l=n.start?"^":"";const a=[];for(const u of s){const y=u.length?[]:[90];n.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const d=u[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(l+="/"),l+=d.value.replace(Jh,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:D,optional:b,regexp:x}=d;a.push({name:g,repeatable:D,optional:b});const _=x||xi;if(_!==xi){h+=10;try{new RegExp(`(${_})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+B.message)}}let k=D?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(k=b&&u.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),l+=k,h+=20,b&&(h+=-8),D&&(h+=-20),_===".*"&&(h+=-50)}y.push(h)}o.push(y)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const i=new RegExp(l,n.sensitive?"":"i");function c(u){const y=u.match(i),f={};if(!y)return null;for(let d=1;d<y.length;d++){const h=y[d]||"",g=a[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function p(u){let y="",f=!1;for(const d of s){(!f||!y.endsWith("/"))&&(y+="/"),f=!1;for(const h of d)if(h.type===0)y+=h.value;else if(h.type===1){const{value:g,repeatable:D,optional:b}=h,x=g in u?u[g]:"";if(Array.isArray(x)&&!D)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(x)?x.join("/"):x;if(!_)if(b)d.length<2&&s.length>1&&(y.endsWith("/")?y=y.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);y+=_}}return y}return{re:i,score:o,keys:a,parse:c,stringify:p}}function s6(s,t){let n=0;for(;n<s.length&&n<t.length;){const o=t[n]-s[n];if(o)return o;n++}return s.length<t.length?s.length===1&&s[0]===40+40?-1:1:s.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function t6(s,t){let n=0;const o=s.score,l=t.score;for(;n<o.length&&n<l.length;){const a=s6(o[n],l[n]);if(a)return a;n++}if(Math.abs(l.length-o.length)===1){if(Ci(o))return 1;if(Ci(l))return-1}return l.length-o.length}function Ci(s){const t=s[s.length-1];return s.length>0&&t[t.length-1]<0}const n6={type:0,value:""},o6=/[a-zA-Z0-9_]/;function l6(s){if(!s)return[[]];if(s==="/")return[[n6]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,o=n;const l=[];let a;function i(){a&&l.push(a),a=[]}let c=0,p,u="",y="";function f(){!u||(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:y,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=p}for(;c<s.length;){if(p=s[c++],p==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:p==="/"?(u&&f(),i()):p===":"?(f(),n=1):d();break;case 4:d(),n=o;break;case 1:p==="("?n=2:o6.test(p)?d():(f(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+p:n=3:y+=p;break;case 3:f(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,y="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),l}function r6(s,t,n){const o=e6(l6(s.path),n),l=ze(o,{record:s,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function a6(s,t){const n=[],o=new Map;t=Si({strict:!1,end:!0,sensitive:!1},t);function l(y){return o.get(y)}function a(y,f,d){const h=!d,g=c6(y);g.aliasOf=d&&d.record;const D=Si(t,y),b=[g];if("alias"in y){const k=typeof y.alias=="string"?[y.alias]:y.alias;for(const B of k)b.push(ze({},g,{components:d?d.record.components:g.components,path:B,aliasOf:d?d.record:g}))}let x,_;for(const k of b){const{path:B}=k;if(f&&B[0]!=="/"){const M=f.record.path,P=M[M.length-1]==="/"?"":"/";k.path=f.record.path+(B&&P+B)}if(x=r6(k,f,D),d?d.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),h&&y.name&&!zi(x)&&i(y.name)),"children"in g){const M=g.children;for(let P=0;P<M.length;P++)a(M[P],x,d&&d.children[P])}d=d||x,p(x)}return _?()=>{i(_)}:kn}function i(y){if(jp(y)){const f=o.get(y);f&&(o.delete(y),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(y);f>-1&&(n.splice(f,1),y.record.name&&o.delete(y.record.name),y.children.forEach(i),y.alias.forEach(i))}}function c(){return n}function p(y){let f=0;for(;f<n.length&&t6(y,n[f])>=0&&(y.record.path!==n[f].record.path||!Np(y,n[f]));)f++;n.splice(f,0,y),y.record.name&&!zi(y)&&o.set(y.record.name,y)}function u(y,f){let d,h={},g,D;if("name"in y&&y.name){if(d=o.get(y.name),!d)throw Jt(1,{location:y});D=d.record.name,h=ze(i6(f.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),y.params),g=d.stringify(h)}else if("path"in y)g=y.path,d=n.find(_=>_.re.test(g)),d&&(h=d.parse(g),D=d.record.name);else{if(d=f.name?o.get(f.name):n.find(_=>_.re.test(f.path)),!d)throw Jt(1,{location:y,currentLocation:f});D=d.record.name,h=ze({},f.params,y.params),g=d.stringify(h)}const b=[];let x=d;for(;x;)b.unshift(x.record),x=x.parent;return{name:D,path:g,params:h,matched:b,meta:u6(b)}}return s.forEach(y=>a(y)),{addRoute:a,resolve:u,removeRoute:i,getRoutes:c,getRecordMatcher:l}}function i6(s,t){const n={};for(const o of t)o in s&&(n[o]=s[o]);return n}function c6(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:p6(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||{}:{default:s.component}}}function p6(s){const t={},n=s.props||!1;if("component"in s)t.default=n;else for(const o in s.components)t[o]=typeof n=="boolean"?n:n[o];return t}function zi(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function u6(s){return s.reduce((t,n)=>ze(t,n.meta),{})}function Si(s,t){const n={};for(const o in s)n[o]=o in t?t[o]:s[o];return n}function Np(s,t){return t.children.some(n=>n===s||Np(s,n))}const Up=/#/g,y6=/&/g,d6=/\//g,f6=/=/g,h6=/\?/g,Hp=/\+/g,m6=/%5B/g,g6=/%5D/g,Vp=/%5E/g,A6=/%60/g,Kp=/%7B/g,v6=/%7C/g,Qp=/%7D/g,b6=/%20/g;function Gr(s){return encodeURI(""+s).replace(v6,"|").replace(m6,"[").replace(g6,"]")}function D6(s){return Gr(s).replace(Kp,"{").replace(Qp,"}").replace(Vp,"^")}function ir(s){return Gr(s).replace(Hp,"%2B").replace(b6,"+").replace(Up,"%23").replace(y6,"%26").replace(A6,"`").replace(Kp,"{").replace(Qp,"}").replace(Vp,"^")}function E6(s){return ir(s).replace(f6,"%3D")}function w6(s){return Gr(s).replace(Up,"%23").replace(h6,"%3F")}function _6(s){return s==null?"":w6(s).replace(d6,"%2F")}function Po(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function k6(s){const t={};if(s===""||s==="?")return t;const o=(s[0]==="?"?s.slice(1):s).split("&");for(let l=0;l<o.length;++l){const a=o[l].replace(Hp," "),i=a.indexOf("="),c=Po(i<0?a:a.slice(0,i)),p=i<0?null:Po(a.slice(i+1));if(c in t){let u=t[c];Array.isArray(u)||(u=t[c]=[u]),u.push(p)}else t[c]=p}return t}function Fi(s){let t="";for(let n in s){const o=s[n];if(n=E6(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(o)?o.map(a=>a&&ir(a)):[o&&ir(o)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function B6(s){const t={};for(const n in s){const o=s[n];o!==void 0&&(t[n]=Array.isArray(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}function yn(){let s=[];function t(o){return s.push(o),()=>{const l=s.indexOf(o);l>-1&&s.splice(l,1)}}function n(){s=[]}return{add:t,list:()=>s,reset:n}}function Zs(s,t,n,o,l){const a=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((i,c)=>{const p=f=>{f===!1?c(Jt(4,{from:n,to:t})):f instanceof Error?c(f):Yh(f)?c(Jt(2,{from:t,to:f})):(a&&o.enterCallbacks[l]===a&&typeof f=="function"&&a.push(f),i())},u=s.call(o&&o.instances[l],t,n,p);let y=Promise.resolve(u);s.length<3&&(y=y.then(p)),y.catch(f=>c(f))})}function wl(s,t,n,o){const l=[];for(const a of s)for(const i in a.components){let c=a.components[i];if(!(t!=="beforeRouteEnter"&&!a.instances[i]))if(x6(c)){const u=(c.__vccOpts||c)[t];u&&l.push(Zs(u,n,o,a,i))}else{let p=c();l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));const y=Ph(u)?u.default:u;a.components[i]=y;const d=(y.__vccOpts||y)[t];return d&&Zs(d,n,o,a,i)()}))}}return l}function x6(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function Ti(s){const t=L(Xr),n=L(Mp),o=z(()=>t.resolve(v(s.to))),l=z(()=>{const{matched:p}=o.value,{length:u}=p,y=p[u-1],f=n.matched;if(!y||!f.length)return-1;const d=f.findIndex(Zt.bind(null,y));if(d>-1)return d;const h=Pi(p[u-2]);return u>1&&Pi(y)===h&&f[f.length-1].path!==h?f.findIndex(Zt.bind(null,p[u-2])):d}),a=z(()=>l.value>-1&&F6(n.params,o.value.params)),i=z(()=>l.value>-1&&l.value===n.matched.length-1&&Ip(n.params,o.value.params));function c(p={}){return S6(p)?t[v(s.replace)?"replace":"push"](v(s.to)).catch(kn):Promise.resolve()}return{route:o,href:z(()=>o.value.href),isActive:a,isExactActive:i,navigate:c}}const C6=Te({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ti,setup(s,{slots:t}){const n=qe(Ti(s)),{options:o}=L(Xr),l=z(()=>({[Oi(s.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Oi(s.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return s.custom?a:zs("a",{"aria-current":n.isExactActive?s.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},a)}}}),z6=C6;function S6(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const t=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return s.preventDefault&&s.preventDefault(),!0}}function F6(s,t){for(const n in t){const o=t[n],l=s[n];if(typeof o=="string"){if(o!==l)return!1}else if(!Array.isArray(l)||l.length!==o.length||o.some((a,i)=>a!==l[i]))return!1}return!0}function Pi(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Oi=(s,t,n)=>s!=null?s:t!=null?t:n,T6=Te({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:t,slots:n}){const o=L(rr),l=z(()=>s.route||o.value),a=L(Di,0),i=z(()=>l.value.matched[a]);us(Di,a+1),us(Th,i),us(rr,l);const c=N();return ue(()=>[c.value,i.value,s.name],([p,u,y],[f,d,h])=>{u&&(u.instances[y]=p,d&&d!==u&&p&&p===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),p&&u&&(!d||!Zt(u,d)||!f)&&(u.enterCallbacks[y]||[]).forEach(g=>g(p))},{flush:"post"}),()=>{const p=l.value,u=i.value,y=u&&u.components[s.name],f=s.name;if(!y)return $i(n.default,{Component:y,route:p});const d=u.props[s.name],h=d?d===!0?p.params:typeof d=="function"?d(p):d:null,D=zs(y,ze({},h,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return $i(n.default,{Component:D,route:p})||D}}});function $i(s,t){if(!s)return null;const n=s(t);return n.length===1?n[0]:n}const P6=T6;function O6(s){const t=a6(s.routes,s),n=s.parseQuery||k6,o=s.stringifyQuery||Fi,l=s.history,a=yn(),i=yn(),c=yn(),p=Ls(Ws);let u=Ws;Lt&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=Dl.bind(null,C=>""+C),f=Dl.bind(null,_6),d=Dl.bind(null,Po);function h(C,V){let O,W;return jp(C)?(O=t.getRecordMatcher(C),W=V):W=C,t.addRoute(W,O)}function g(C){const V=t.getRecordMatcher(C);V&&t.removeRoute(V)}function D(){return t.getRoutes().map(C=>C.record)}function b(C){return!!t.getRecordMatcher(C)}function x(C,V){if(V=ze({},V||p.value),typeof C=="string"){const pe=El(n,C,V.path),m=t.resolve({path:pe.path},V),A=l.createHref(pe.fullPath);return ze(pe,m,{params:d(m.params),hash:Po(pe.hash),redirectedFrom:void 0,href:A})}let O;if("path"in C)O=ze({},C,{path:El(n,C.path,V.path).path});else{const pe=ze({},C.params);for(const m in pe)pe[m]==null&&delete pe[m];O=ze({},C,{params:f(C.params)}),V.params=f(V.params)}const W=t.resolve(O,V),be=C.hash||"";W.params=y(d(W.params));const Fe=qh(o,ze({},C,{hash:D6(be),path:W.path})),de=l.createHref(Fe);return ze({fullPath:Fe,hash:be,query:o===Fi?B6(C.query):C.query||{}},W,{redirectedFrom:void 0,href:de})}function _(C){return typeof C=="string"?El(n,C,p.value.path):ze({},C)}function k(C,V){if(u!==C)return Jt(8,{from:V,to:C})}function B(C){return H(C)}function M(C){return B(ze(_(C),{replace:!0}))}function P(C){const V=C.matched[C.matched.length-1];if(V&&V.redirect){const{redirect:O}=V;let W=typeof O=="function"?O(C):O;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=_(W):{path:W},W.params={}),ze({query:C.query,hash:C.hash,params:C.params},W)}}function H(C,V){const O=u=x(C),W=p.value,be=C.state,Fe=C.force,de=C.replace===!0,pe=P(O);if(pe)return H(ze(_(pe),{state:be,force:Fe,replace:de}),V||O);const m=O;m.redirectedFrom=V;let A;return!Fe&&Mh(o,W,O)&&(A=Jt(16,{to:m,from:W}),Ts(W,W,!0,!1)),(A?Promise.resolve(A):ye(m,W)).catch(E=>Xs(E)?Xs(E,2)?E:me(E):te(E,m,W)).then(E=>{if(E){if(Xs(E,2))return H(ze(_(E.to),{state:be,force:Fe,replace:de}),V||m)}else E=Ae(m,W,!0,de,be);return he(m,W,E),E})}function ae(C,V){const O=k(C,V);return O?Promise.reject(O):Promise.resolve()}function ye(C,V){let O;const[W,be,Fe]=$6(C,V);O=wl(W.reverse(),"beforeRouteLeave",C,V);for(const pe of W)pe.leaveGuards.forEach(m=>{O.push(Zs(m,C,V))});const de=ae.bind(null,C,V);return O.push(de),Pt(O).then(()=>{O=[];for(const pe of a.list())O.push(Zs(pe,C,V));return O.push(de),Pt(O)}).then(()=>{O=wl(be,"beforeRouteUpdate",C,V);for(const pe of be)pe.updateGuards.forEach(m=>{O.push(Zs(m,C,V))});return O.push(de),Pt(O)}).then(()=>{O=[];for(const pe of C.matched)if(pe.beforeEnter&&!V.matched.includes(pe))if(Array.isArray(pe.beforeEnter))for(const m of pe.beforeEnter)O.push(Zs(m,C,V));else O.push(Zs(pe.beforeEnter,C,V));return O.push(de),Pt(O)}).then(()=>(C.matched.forEach(pe=>pe.enterCallbacks={}),O=wl(Fe,"beforeRouteEnter",C,V),O.push(de),Pt(O))).then(()=>{O=[];for(const pe of i.list())O.push(Zs(pe,C,V));return O.push(de),Pt(O)}).catch(pe=>Xs(pe,8)?pe:Promise.reject(pe))}function he(C,V,O){for(const W of c.list())W(C,V,O)}function Ae(C,V,O,W,be){const Fe=k(C,V);if(Fe)return Fe;const de=V===Ws,pe=Lt?history.state:{};O&&(W||de?l.replace(C.fullPath,ze({scroll:de&&pe&&pe.scroll},be)):l.push(C.fullPath,be)),p.value=C,Ts(C,V,O,de),me()}let $e;function Le(){$e||($e=l.listen((C,V,O)=>{const W=x(C),be=P(W);if(be){H(ze(be,{replace:!0}),W).catch(kn);return}u=W;const Fe=p.value;Lt&&Vh(_i(Fe.fullPath,O.delta),nl()),ye(W,Fe).catch(de=>Xs(de,12)?de:Xs(de,2)?(H(de.to,W).then(pe=>{Xs(pe,20)&&!O.delta&&O.type===jn.pop&&l.go(-1,!1)}).catch(kn),Promise.reject()):(O.delta&&l.go(-O.delta,!1),te(de,W,Fe))).then(de=>{de=de||Ae(W,Fe,!1),de&&(O.delta?l.go(-O.delta,!1):O.type===jn.pop&&Xs(de,20)&&l.go(-1,!1)),he(W,Fe,de)}).catch(kn)}))}let Qe=yn(),Be=yn(),ee;function te(C,V,O){me(C);const W=Be.list();return W.length?W.forEach(be=>be(C,V,O)):console.error(C),Promise.reject(C)}function Z(){return ee&&p.value!==Ws?Promise.resolve():new Promise((C,V)=>{Qe.add([C,V])})}function me(C){return ee||(ee=!C,Le(),Qe.list().forEach(([V,O])=>C?O(C):V()),Qe.reset()),C}function Ts(C,V,O,W){const{scrollBehavior:be}=s;if(!Lt||!be)return Promise.resolve();const Fe=!O&&Kh(_i(C.fullPath,0))||(W||!O)&&history.state&&history.state.scroll||null;return Ke().then(()=>be(C,V,Fe)).then(de=>de&&Hh(de)).catch(de=>te(de,C,V))}const Ge=C=>l.go(C);let ms;const ts=new Set;return{currentRoute:p,addRoute:h,removeRoute:g,hasRoute:b,getRoutes:D,resolve:x,options:s,push:B,replace:M,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:a.add,beforeResolve:i.add,afterEach:c.add,onError:Be.add,isReady:Z,install(C){const V=this;C.component("RouterLink",z6),C.component("RouterView",P6),C.config.globalProperties.$router=V,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>v(p)}),Lt&&!ms&&p.value===Ws&&(ms=!0,B(l.location).catch(be=>{}));const O={};for(const be in Ws)O[be]=z(()=>p.value[be]);C.provide(Xr,V),C.provide(Mp,qe(O)),C.provide(rr,p);const W=C.unmount;ts.add(C),C.unmount=function(){ts.delete(C),ts.size<1&&(u=Ws,$e&&$e(),$e=null,p.value=Ws,ms=!1,ee=!1),W()}}}}function Pt(s){return s.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function $6(s,t){const n=[],o=[],l=[],a=Math.max(t.matched.length,s.matched.length);for(let i=0;i<a;i++){const c=t.matched[i];c&&(s.matched.find(u=>Zt(u,c))?o.push(c):n.push(c));const p=s.matched[i];p&&(t.matched.find(u=>Zt(u,p))||l.push(p))}return[n,o,l]}const _l=N(!1),xn=N(!1),Rt=N(!1),q6=N(!0),cr=oh(De({xs:460},J9)),Et=Fh(),Wp=kh(),M6=z(()=>Et.height.value-Et.width.value/tt>180),Xp=Eh(bs?document.body:null),Qt=Z9(),I6=z(()=>{var s,t;return["INPUT","TEXTAREA"].includes(((s=Qt.value)==null?void 0:s.tagName)||"")||((t=Qt.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),L6=z(()=>{var s;return["BUTTON","A"].includes(((s=Qt.value)==null?void 0:s.tagName)||"")});Fs("slidev-camera","default");Fs("slidev-mic","default");const vo=Fs("slidev-scale",0),Je=Fs("slidev-show-overview",!1),kl=Fs("slidev-presenter-cursor",!0),qi=Fs("slidev-show-editor",!1);Fs("slidev-editor-width",bs?window.innerWidth*.4:100);const Gp=Tp(Je);function Mi(s,t,n,o=l=>l){return s*o(.5-t*(.5-n))}function j6(s){return[-s[0],-s[1]]}function _s(s,t){return[s[0]+t[0],s[1]+t[1]]}function vs(s,t){return[s[0]-t[0],s[1]-t[1]]}function ws(s,t){return[s[0]*t,s[1]*t]}function R6(s,t){return[s[0]/t,s[1]/t]}function dn(s){return[s[1],-s[0]]}function N6(s,t){return s[0]*t[0]+s[1]*t[1]}function U6(s,t){return s[0]===t[0]&&s[1]===t[1]}function H6(s){return Math.hypot(s[0],s[1])}function V6(s){return s[0]*s[0]+s[1]*s[1]}function Ii(s,t){return V6(vs(s,t))}function Yp(s){return R6(s,H6(s))}function K6(s,t){return Math.hypot(s[1]-t[1],s[0]-t[0])}function fn(s,t,n){let o=Math.sin(n),l=Math.cos(n),a=s[0]-t[0],i=s[1]-t[1],c=a*l-i*o,p=a*o+i*l;return[c+t[0],p+t[1]]}function pr(s,t,n){return _s(s,ws(vs(t,s),n))}function Li(s,t,n){return _s(s,ws(t,n))}var{min:Ot,PI:Q6}=Math,ji=.275,hn=Q6+1e-4;function W6(s,t={}){let{size:n=16,smoothing:o=.5,thinning:l=.5,simulatePressure:a=!0,easing:i=ee=>ee,start:c={},end:p={},last:u=!1}=t,{cap:y=!0,easing:f=ee=>ee*(2-ee)}=c,{cap:d=!0,easing:h=ee=>--ee*ee*ee+1}=p;if(s.length===0||n<=0)return[];let g=s[s.length-1].runningLength,D=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,b=p.taper===!1?0:p.taper===!0?Math.max(n,g):p.taper,x=Math.pow(n*o,2),_=[],k=[],B=s.slice(0,10).reduce((ee,te)=>{let Z=te.pressure;if(a){let me=Ot(1,te.distance/n),Ts=Ot(1,1-me);Z=Ot(1,ee+(Ts-ee)*(me*ji))}return(ee+Z)/2},s[0].pressure),M=Mi(n,l,s[s.length-1].pressure,i),P,H=s[0].vector,ae=s[0].point,ye=ae,he=ae,Ae=ye;for(let ee=0;ee<s.length;ee++){let{pressure:te}=s[ee],{point:Z,vector:me,distance:Ts,runningLength:Ge}=s[ee];if(ee<s.length-1&&g-Ge<3)continue;if(l){if(a){let O=Ot(1,Ts/n),W=Ot(1,1-O);te=Ot(1,B+(W-B)*(O*ji))}M=Mi(n,l,te,i)}else M=n/2;P===void 0&&(P=M);let ms=Ge<D?f(Ge/D):1,ts=g-Ge<b?h((g-Ge)/b):1;if(M=Math.max(.01,M*Math.min(ms,ts)),ee===s.length-1){let O=ws(dn(me),M);_.push(vs(Z,O)),k.push(_s(Z,O));continue}let St=s[ee+1].vector,C=N6(me,St);if(C<0){let O=ws(dn(H),M);for(let W=1/13,be=0;be<=1;be+=W)he=fn(vs(Z,O),Z,hn*be),_.push(he),Ae=fn(_s(Z,O),Z,hn*-be),k.push(Ae);ae=he,ye=Ae;continue}let V=ws(dn(pr(St,me,C)),M);he=vs(Z,V),(ee<=1||Ii(ae,he)>x)&&(_.push(he),ae=he),Ae=_s(Z,V),(ee<=1||Ii(ye,Ae)>x)&&(k.push(Ae),ye=Ae),B=te,H=me}let $e=s[0].point.slice(0,2),Le=s.length>1?s[s.length-1].point.slice(0,2):_s(s[0].point,[1,1]),Qe=[],Be=[];if(s.length===1){if(!(D||b)||u){let ee=Li($e,Yp(dn(vs($e,Le))),-(P||M)),te=[];for(let Z=1/13,me=Z;me<=1;me+=Z)te.push(fn(ee,$e,hn*2*me));return te}}else{if(!(D||b&&s.length===1))if(y)for(let te=1/13,Z=te;Z<=1;Z+=te){let me=fn(k[0],$e,hn*Z);Qe.push(me)}else{let te=vs(_[0],k[0]),Z=ws(te,.5),me=ws(te,.51);Qe.push(vs($e,Z),vs($e,me),_s($e,me),_s($e,Z))}let ee=dn(j6(s[s.length-1].vector));if(b||D&&s.length===1)Be.push(Le);else if(d){let te=Li(Le,ee,M);for(let Z=1/29,me=Z;me<1;me+=Z)Be.push(fn(te,Le,hn*3*me))}else Be.push(_s(Le,ws(ee,M)),_s(Le,ws(ee,M*.99)),vs(Le,ws(ee,M*.99)),vs(Le,ws(ee,M)))}return _.concat(Be,k.reverse(),Qe)}function X6(s,t={}){var n;let{streamline:o=.5,size:l=16,last:a=!1}=t;if(s.length===0)return[];let i=.15+(1-o)*.85,c=Array.isArray(s[0])?s:s.map(({x:h,y:g,pressure:D=.5})=>[h,g,D]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(pr(c[0],h,g/4))}c.length===1&&(c=[...c,[..._s(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,y=0,f=p[0],d=c.length-1;for(let h=1;h<c.length;h++){let g=a&&h===d?c[h].slice(0,2):pr(f.point,c[h],i);if(U6(f.point,g))continue;let D=K6(g,f.point);if(y+=D,h<d&&!u){if(y<l)continue;u=!0}f={point:g,pressure:c[h][2]>=0?c[h][2]:.5,vector:Yp(vs(f.point,g)),distance:D,runningLength:y},p.push(f)}return p[0].vector=((n=p[1])==null?void 0:n.vector)||[0,0],p}function G6(s,t={}){return W6(X6(s,t),t)}var Y6=G6,Z6=Object.defineProperty,Ri=Object.getOwnPropertySymbols,J6=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,Ni=(s,t,n)=>t in s?Z6(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,ur=(s,t)=>{for(var n in t||(t={}))J6.call(t,n)&&Ni(s,n,t[n]);if(Ri)for(var n of Ri(t))em.call(t,n)&&Ni(s,n,t[n]);return s},sm=()=>({events:{},emit(s,...t){(this.events[s]||[]).forEach(n=>n(...t))},on(s,t){return(this.events[s]=this.events[s]||[]).push(t),()=>this.events[s]=(this.events[s]||[]).filter(n=>n!==t)}});function Oo(s,t){return s-t}function tm(s){return s<0?-1:1}function $o(s){return[Math.abs(s),tm(s)]}function Zp(){const s=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${s()+s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`}var nm=2,Rs=nm,ln=class{constructor(s){this.drauu=s,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(s){}onUnselected(){}onStart(s){}onMove(s){return!1}onEnd(s){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(s){var t,n;const o=this.drauu.el,l=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(s.pageX-a.left)*l,y:(s.pageY-a.top)*l,pressure:s.pressure}}else{const a=this.drauu.svgPoint;a.x=s.clientX,a.y=s.clientY;const i=a.matrixTransform((n=o.getScreenCTM())==null?void 0:n.inverse());return{x:i.x*l,y:i.y*l,pressure:s.pressure}}}createElement(s,t){var n;const o=document.createElementNS("http://www.w3.org/2000/svg",s),l=t?ur(ur({},this.brush),t):this.brush;return o.setAttribute("fill",(n=l.fill)!=null?n:"transparent"),o.setAttribute("stroke",l.color),o.setAttribute("stroke-width",l.size.toString()),o.setAttribute("stroke-linecap","round"),l.dasharray&&o.setAttribute("stroke-dasharray",l.dasharray),o}attr(s,t){this.el.setAttribute(s,typeof t=="string"?t:t.toFixed(Rs))}_setEvent(s){this.event=s,this.point=this.getMousePosition(s)}_eventDown(s){return this._setEvent(s),this.start=this.point,this.onStart(this.point)}_eventMove(s){return this._setEvent(s),this.onMove(this.point)}_eventUp(s){return this._setEvent(s),this.onEnd(this.point)}},om=class extends ln{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){const t=Y6(s,ur({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((o,[l,a],i,c)=>{const[p,u]=c[(i+1)%c.length];return o.push(l,a,(l+p)/2,(a+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},lm=class extends ln{onStart(s){return this.el=this.createElement("ellipse"),this.attr("cx",s.x),this.attr("cy",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,n]=$o(s.x-this.start.x),[o,l]=$o(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,o);t=a,o=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[a,i]=[this.start.x,this.start.x+t*n].sort(Oo),[c,p]=[this.start.y,this.start.y+o*l].sort(Oo);this.attr("cx",(a+i)/2),this.attr("cy",(c+p)/2),this.attr("rx",(i-a)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function Jp(s,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",s),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),n.appendChild(o),n}var rm=class extends ln{onStart(s){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",s.x),this.attr("y1",s.y),this.attr("x2",s.x),this.attr("y2",s.y),this.brush.arrowEnd){const t=Zp(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Jp(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(s){if(!this.el)return!1;let{x:t,y:n}=s;if(this.shiftPressed){const o=s.x-this.start.x,l=s.y-this.start.y;if(l!==0){let a=o/l;a=Math.round(a),Math.abs(a)<=1?(t=this.start.x+l*a,n=this.start.y+l):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||s.getTotalLength()<5)}},am=class extends ln{onStart(s){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",s.x),this.attr("y",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,n]=$o(s.x-this.start.x),[o,l]=$o(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,o);t=a,o=a}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[a,i]=[this.start.x,this.start.x+t*n].sort(Oo),[c,p]=[this.start.y,this.start.y+o*l].sort(Oo);this.attr("x",a),this.attr("y",c),this.attr("width",i-a),this.attr("height",p-c)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function im(s,t){const n=s.x-t.x,o=s.y-t.y;return n*n+o*o}function cm(s,t,n){let o=t.x,l=t.y,a=n.x-o,i=n.y-l;if(a!==0||i!==0){const c=((s.x-o)*a+(s.y-l)*i)/(a*a+i*i);c>1?(o=n.x,l=n.y):c>0&&(o+=a*c,l+=i*c)}return a=s.x-o,i=s.y-l,a*a+i*i}function pm(s,t){let n=s[0];const o=[n];let l;for(let a=1,i=s.length;a<i;a++)l=s[a],im(l,n)>t&&(o.push(l),n=l);return n!==l&&l&&o.push(l),o}function yr(s,t,n,o,l){let a=o,i=0;for(let c=t+1;c<n;c++){const p=cm(s[c],s[t],s[n]);p>a&&(i=c,a=p)}a>o&&(i-t>1&&yr(s,t,i,o,l),l.push(s[i]),n-i>1&&yr(s,i,n,o,l))}function um(s,t){const n=s.length-1,o=[s[0]];return yr(s,0,n,t,o),o.push(s[n]),o}function Ui(s,t,n=!1){if(s.length<=2)return s;const o=t!==void 0?t*t:1;return s=n?s:pm(s,o),s=um(s,o),s}var ym=class extends ln{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=Zp();const t=Jp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=Ui(this.points,1,!0),this.count=0),this.attr("d",Vi(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",Vi(Ui(this.points,1,!0))),!s.getTotalLength()))}};function dm(s,t){const n=t.x-s.x,o=t.y-s.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),angle:Math.atan2(o,n)}}function Hi(s,t,n,o){const l=t||s,a=n||s,i=.2,c=dm(l,a),p=c.angle+(o?Math.PI:0),u=c.length*i,y=s.x+Math.cos(p)*u,f=s.y+Math.sin(p)*u;return{x:y,y:f}}function fm(s,t,n){const o=Hi(n[t-1],n[t-2],s),l=Hi(s,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(Rs)},${o.y.toFixed(Rs)} ${l.x.toFixed(Rs)},${l.y.toFixed(Rs)} ${s.x.toFixed(Rs)},${s.y.toFixed(Rs)}`}function Vi(s){return s.reduce((t,n,o,l)=>o===0?`M ${n.x.toFixed(Rs)},${n.y.toFixed(Rs)}`:`${t} ${fm(n,o,l)}`,"")}var hm=class extends ln{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(s){const t=(n,o)=>{if(n&&n.length)for(let l=0;l<n.length;l++){const a=n[l];if(a.getTotalLength){const i=a.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=a.getPointAtLength(i*c/this.pathSubFactor),u=a.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:o||a})}}else a.children&&t(a.children,a)}};s&&t(s.children)}onUnselected(){this.pathFragments=[]}onStart(s){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=s.x,this.svgPointPrevious.y=s.y}onMove(s){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=s.x,this.svgPointCurrent.y=s.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const s=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),s.push(t))}return s.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!s.includes(n))),s.length>0}lineLineIntersect(s,t){const n=s.x1,o=s.x2,l=t.x1,a=t.x2,i=s.y1,c=s.y2,p=t.y1,u=t.y2,y=(n-o)*(p-u)-(i-c)*(l-a),f=(n*c-i*o)*(l-a)-(n-o)*(l*u-p*a),d=(n*c-i*o)*(p-u)-(i-c)*(l*u-p*a),h=(g,D,b)=>g>=D&&g<=b?!0:g>=b&&g<=D;if(y===0)return!1;{const g={x:f/y,y:d/y};return h(g.x,n,o)&&h(g.y,i,c)&&h(g.x,l,a)&&h(g.y,p,u)}}};function mm(s){return{draw:new ym(s),stylus:new om(s),line:new rm(s),rectangle:new am(s),ellipse:new lm(s),eraseLine:new hm(s)}}var gm=class{constructor(s={}){this.options=s,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=sm(),this._models=mm(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),s.el&&this.mount(s.el,s.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(s){this._models[this.mode].onUnselected(),this.options.brush.mode=s,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(s){this.options.brush=s}resolveSelector(s){return typeof s=="string"?document.querySelector(s):s||null}mount(s,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(s),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),a=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(s=>s()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(s,t){return this._emitter.on(s,t)}undo(){const s=this.el;return s.lastElementChild?(this._undoStack.push(s.lastElementChild.cloneNode(!0)),s.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var s;return!!((s=this.el)!=null&&s.lastElementChild)}eventMove(s){!this.acceptsInput(s)||!this.drawing||this.model._eventMove(s)&&(s.stopPropagation(),s.preventDefault(),this._emitter.emit("changed"))}eventStart(s){!this.acceptsInput(s)||(s.stopPropagation(),s.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(s),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(s){if(!this.acceptsInput(s)||!this.drawing)return;const t=this.model._eventUp(s);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(s){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(s.pointerType)}eventKeyboard(s){this.shiftPressed===s.shiftKey&&this.altPressed===s.altKey||(this.shiftPressed=s.shiftKey,this.altPressed=s.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const s=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",s)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(s){this.clear(),this.el.innerHTML=s}};function Am(s){return new gm(s)}const dr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ms=Fs("slidev-drawing-enabled",!1),wD=Fs("slidev-drawing-pinned",!1),vm=N(!1),bm=N(!1),Dm=N(!1),Rn=N(!1),gt=A9(Fs("slidev-drawing-brush",{color:dr[0],size:4,mode:"stylus"})),Ki=N("stylus"),eu=z(()=>we.drawings.syncAll||$s.value);let Nn=!1;const mn=z({get(){return Ki.value},set(s){Ki.value=s,s==="arrow"?(gt.mode="line",gt.arrowEnd=!0):(gt.mode=s,gt.arrowEnd=!1)}}),Em=qe({brush:gt,acceptsInputTypes:z(()=>Ms.value?void 0:["pen"]),coordinateTransform:!1}),es=Ko(Am(Em));function wm(){es.clear(),eu.value&&Cp(Ne.value,"")}function su(){var s;bm.value=es.canRedo(),vm.value=es.canUndo(),Dm.value=!!((s=es.el)!=null&&s.children.length)}function _m(s){Nn=!0;const t=So[s||Ne.value];t!=null?es.load(t):es.clear(),Nn=!1}es.on("changed",()=>{if(su(),!Nn){const s=es.dump(),t=Ne.value;(So[t]||"")!==s&&eu.value&&Cp(t,es.dump())}});f9(s=>{Nn=!0,s[Ne.value]!=null&&es.load(s[Ne.value]||""),Nn=!1,su()});Ke(()=>{ue(Ne,()=>{!es.mounted||_m()},{immediate:!0})});es.on("start",()=>Rn.value=!0);es.on("end",()=>Rn.value=!1);window.addEventListener("keydown",s=>{if(!Ms.value)return;const t=!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey;let n=!0;s.code==="KeyZ"&&(s.ctrlKey||s.metaKey)?s.shiftKey?es.redo():es.undo():s.code==="Escape"?Ms.value=!1:s.code==="KeyL"&&t?mn.value="line":s.code==="KeyA"&&t?mn.value="arrow":s.code==="KeyS"&&t?mn.value="stylus":s.code==="KeyR"&&t?mn.value="rectangle":s.code==="KeyE"&&t?mn.value="ellipse":s.code==="KeyC"&&t?wm():s.code.startsWith("Digit")&&t&&+s.code[5]<=dr.length?gt.color=dr[+s.code[5]-1]:n=!1,n&&(s.preventDefault(),s.stopPropagation())},!1);const Qi=ch(),Bl=Fs("slidev-color-schema","auto"),fr=z(()=>we.colorSchema!=="auto"),Yr=z({get(){return fr.value?we.colorSchema==="dark":Bl.value==="auto"?Qi.value:Bl.value==="dark"},set(s){fr.value||(Bl.value=s===Qi.value?"auto":s?"dark":"light")}}),tu=Tp(Yr);bs&&ue(Yr,s=>{const t=document.querySelector("html");t.classList.toggle("dark",s),t.classList.toggle("light",!s)},{immediate:!0});function km(){return[]}const bo=N(1),Do=z(()=>Re.length-1),ds=N(0),Zr=N(0);function Bm(){ds.value>bo.value&&(ds.value-=1)}function xm(){ds.value<Do.value&&(ds.value+=1)}function Cm(){if(ds.value>bo.value){let s=ds.value-Zr.value;s<bo.value&&(s=bo.value),ds.value=s}}function zm(){if(ds.value<Do.value){let s=ds.value+Zr.value;s>Do.value&&(s=Do.value),ds.value=s}}const nu=je(is(I6),is(L6),q6);function Sm(s,t,n=!1){typeof s=="string"&&(s=Wp[s]);const o=je(s,nu);let l=0,a;const i=()=>{if(clearTimeout(a),!o.value){l=0;return}n&&(a=setTimeout(i,Math.max(1e3-l*250,150)),l++),t()};return ue(o,i,{flush:"sync"})}function Fm(s,t){return Y9(s,n=>{!nu.value||n.repeat||t()})}function Tm(){const s=km(),{escape:t,space:n,shift:o,left:l,right:a,up:i,down:c,enter:p,d:u,g:y,o:f}=Wp;new Map([{key:je(n,is(o)),fn:ot,autoRepeat:!0},{key:je(n,o),fn:lt,autoRepeat:!0},{key:je(a,is(o),is(Je)),fn:ot,autoRepeat:!0},{key:je(l,is(o),is(Je)),fn:lt,autoRepeat:!0},{key:"pageDown",fn:ot,autoRepeat:!0},{key:"pageUp",fn:lt,autoRepeat:!0},{key:je(i,is(Je)),fn:()=>Hn(!1),autoRepeat:!0},{key:je(c,is(Je)),fn:Un,autoRepeat:!0},{key:je(l,o),fn:()=>Hn(!1),autoRepeat:!0},{key:je(a,o),fn:Un,autoRepeat:!0},{key:je(u,is(Ms)),fn:tu},{key:je(f,is(Ms)),fn:Gp},{key:je(t,is(Ms)),fn:()=>Je.value=!1},{key:je(y,is(Ms)),fn:()=>Rt.value=!Rt.value},{key:je(l,Je),fn:Bm},{key:je(a,Je),fn:xm},{key:je(i,Je),fn:Cm},{key:je(c,Je),fn:zm},{key:je(p,Je),fn:()=>{en(ds.value),Je.value=!1}},...s].map(h=>[h.key,h])).forEach(h=>{h.fn&&Sm(h.key,h.fn,h.autoRepeat)}),Fm("f",()=>Xp.toggle())}const Pm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Om=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),$m=[Om];function qm(s,t){return w(),K("svg",Pm,$m)}var Mm={name:"carbon-close",render:qm};function Jr(s){var n,o;const t=(o=(n=s==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const ou=Te({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(s){const t=s;L(U);const n=N(),o=Dh(n),l=z(()=>t.width?t.width:o.width.value),a=z(()=>t.width?t.width/tt:o.height.value);t.width&&Yo(()=>{n.value&&(n.value.style.width=`${l.value}px`,n.value.style.height=`${a.value}px`)});const i=z(()=>l.value/a.value),c=z(()=>t.scale?t.scale:i.value<tt?l.value/Dt:a.value*tt/Dt),p=z(()=>({height:`${kp}px`,width:`${Dt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=z(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return us(_p,c),(y,f)=>(w(),K("div",{id:"slide-container",ref_key:"root",ref:n,class:Me(v(u))},[e("div",{id:"slide-content",style:ls(v(p))},[_t(y.$slots,"default")],4),_t(y.$slots,"controls")],2))}});var ea=Te({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(s,{emit:t}){const n=qs(s,"clicks",t),o=qs(s,"clicksElements",t),l=qs(s,"clicksDisabled",t),a=qs(s,"clicksOrderMap",t);o.value.length=0,us(t9,s.route),us(n9,s.context),us(mo,n),us(go,l),us(It,o),us(tr,a)},render(){var s,t;return this.$props.is?zs(this.$props.is):(t=(s=this.$slots)==null?void 0:s.default)==null?void 0:t.call(s)}});const Im=["innerHTML"],lu=Te({__name:"DrawingPreview",props:{page:null},setup(s){return L(U),(t,n)=>v(So)[s.page]?(w(),K("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(So)[s.page]},null,8,Im)):fe("v-if",!0)}});var Lm=Object.freeze(Object.defineProperty({__proto__:null,default:lu},Symbol.toStringTag,{value:"Module"}));const jm={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Rm=["onClick"],Nm=Te({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(s,{emit:t}){const n=s;L(U);const o=qs(n,"modelValue",t);function l(){o.value=!1}function a(h){en(h),l()}function i(h){return h===ds.value}const c=cr.smaller("xs"),p=cr.smaller("sm"),u=4*16*2,y=2*16,f=z(()=>c.value?Et.width.value-u:p.value?(Et.width.value-u-y)/2:300),d=z(()=>Math.floor((Et.width.value-u)/(f.value+y)));return Yo(()=>{ds.value=Ne.value,Zr.value=d.value}),(h,g)=>{const D=Mm;return w(),K(ke,null,[Hr(e("div",jm,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ls(`grid-template-columns: repeat(auto-fit,minmax(${v(f)}px,1fr))`)},[(w(!0),K(ke,null,Xn(v(Re).slice(0,-1),(b,x)=>(w(),K("div",{key:b.path,class:"relative"},[e("div",{class:Me(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(x+1)}]),onClick:_=>a(+b.path)},[(w(),R(ou,{key:b.path,width:v(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:Y(()=>[J(v(ea),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Me(v(Jr)(b)),route:b,context:"overview"},null,8,["is","class","route"]),J(lu,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,Rm),e("div",{class:"absolute top-0 opacity-50",style:ls(`left: ${v(f)+5}px`)},wt(x+1),5)]))),128))],4)],512),[[Ep,v(o)]]),v(o)?(w(),K("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[J(D)])):fe("v-if",!0)],64)}}});var Um="/the-graphql-workshop/assets/logo.b72bde5d.png";const Hm={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Vm=Te({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(s,{emit:t}){const n=s;L(U);const o=qs(n,"modelValue",t);function l(){o.value=!1}return(a,i)=>(w(),R(np,null,[v(o)?(w(),K("div",Hm,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>l())}),e("div",{class:Me(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[_t(a.$slots,"default")],2)])):fe("v-if",!0)],1024))}});const Km={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Qm=["innerHTML"],Wm=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Um,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),r("dev ")])])],-1),Xm=Te({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(s,{emit:t}){const n=s;L(U);const o=qs(n,"modelValue",t),l=z(()=>typeof we.info=="string");return(a,i)=>(w(),R(Vm,{modelValue:v(o),"onUpdate:modelValue":i[0]||(i[0]=c=>_e(o)?o.value=c:null),class:"px-6 py-4"},{default:Y(()=>[e("div",Km,[v(l)?(w(),K("div",{key:0,class:"mb-4",innerHTML:v(we).info},null,8,Qm)):fe("v-if",!0),Wm])]),_:1},8,["modelValue"]))}}),Gm=["disabled","onKeydown"],Ym=Te({__name:"Goto",setup(s){L(U);const t=N(),n=N(""),o=z(()=>{if(n.value.startsWith("/"))return!!Re.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=fu.value}});function l(){o.value&&(n.value.startsWith("/")?en(n.value.substring(1)):en(+n.value)),a()}function a(){Rt.value=!1}return ue(Rt,async i=>{var c,p;i?(await Ke(),n.value="",(c=t.value)==null||c.focus()):(p=t.value)==null||p.blur()}),ue(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,c)=>(w(),K("div",{id:"slidev-goto-dialog",class:Me(["fixed right-5 bg-main transform transition-all",v(Rt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Hr(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=p=>n.value=p),type:"text",disabled:!v(Rt),class:Me(["outline-none bg-transparent",{"text-red-400":!v(o)&&n.value}]),placeholder:"Goto...",onKeydown:[Ja(l,["enter"]),Ja(a,["escape"])],onBlur:a},null,42,Gm),[[qf,n.value]])],2))}}),Zm=Te({__name:"Controls",setup(s){L(U);const t=Ls(),n=Ls();return(o,l)=>(w(),K(ke,null,[J(Nm,{modelValue:v(Je),"onUpdate:modelValue":l[0]||(l[0]=a=>_e(Je)?Je.value=a:null)},null,8,["modelValue"]),J(Ym),v(t)?(w(),R(v(t),{key:0})):fe("v-if",!0),v(n)?(w(),R(v(n),{key:1,modelValue:v(_l),"onUpdate:modelValue":l[1]||(l[1]=a=>_e(_l)?_l.value=a:null)},null,8,["modelValue"])):fe("v-if",!0),v(we).info?(w(),R(Xm,{key:2,modelValue:v(xn),"onUpdate:modelValue":l[2]||(l[2]=a=>_e(xn)?xn.value=a:null)},null,8,["modelValue"])):fe("v-if",!0)],64))}}),Jm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eg=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),sg=[eg];function tg(s,t){return w(),K("svg",Jm,sg)}var ng={name:"carbon-settings-adjust",render:tg};const og={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lg=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),rg=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ag=[lg,rg];function ig(s,t){return w(),K("svg",og,ag)}var cg={name:"carbon-information",render:ig};const pg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ug=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),yg=[ug];function dg(s,t){return w(),K("svg",pg,yg)}var fg={name:"carbon-download",render:dg};const hg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mg=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),gg=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Ag=[mg,gg];function vg(s,t){return w(),K("svg",hg,Ag)}var bg={name:"carbon-user-speaker",render:vg};const Dg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),wg=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),_g=[Eg,wg];function kg(s,t){return w(),K("svg",Dg,_g)}var Bg={name:"carbon-presentation-file",render:kg};const xg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cg=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),zg=[Cg];function Sg(s,t){return w(),K("svg",xg,zg)}var Fg={name:"carbon-pen",render:Sg};const Tg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Pg=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Og=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),$g=[Pg,Og];function qg(s,t){return w(),K("svg",Tg,$g)}var Mg={name:"ph-cursor-duotone",render:qg};const Ig={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Lg=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),jg=[Lg];function Rg(s,t){return w(),K("svg",Ig,jg)}var ru={name:"ph-cursor-fill",render:Rg};const Ng={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ug=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Hg=[Ug];function Vg(s,t){return w(),K("svg",Ng,Hg)}var Kg={name:"carbon-sun",render:Vg};const Qg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wg=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Xg=[Wg];function Gg(s,t){return w(),K("svg",Qg,Xg)}var Yg={name:"carbon-moon",render:Gg};const Zg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jg=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),eA=[Jg];function sA(s,t){return w(),K("svg",Zg,eA)}var tA={name:"carbon-apps",render:sA};const nA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oA=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),lA=[oA];function rA(s,t){return w(),K("svg",nA,lA)}var aA={name:"carbon-arrow-right",render:rA};const iA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cA=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),pA=[cA];function uA(s,t){return w(),K("svg",iA,pA)}var yA={name:"carbon-arrow-left",render:uA};const dA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fA=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),hA=[fA];function mA(s,t){return w(),K("svg",dA,hA)}var gA={name:"carbon-maximize",render:mA};const AA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vA=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),bA=[vA];function DA(s,t){return w(),K("svg",AA,bA)}var EA={name:"carbon-minimize",render:DA};const wA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_A=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),kA=[_A];function BA(s,t){return w(),K("svg",wA,kA)}var xA={name:"carbon-checkmark",render:BA};var au=(s,t)=>{const n=s.__vccOpts||s;for(const[o,l]of t)n[o]=l;return n};const CA={class:"select-list"},zA={class:"title"},SA={class:"items"},FA=["onClick"],TA=Te({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:t}){const n=s;L(U);const o=qs(n,"modelValue",t,{passive:!0});return(l,a)=>{const i=xA;return w(),K("div",CA,[e("div",zA,wt(s.title),1),e("div",SA,[(w(!0),K(ke,null,Xn(s.items,c=>(w(),K("div",{key:c.value,class:Me(["item",{active:v(o)===c.value}]),onClick:()=>{var p;o.value=c.value,(p=c.onClick)==null||p.call(c)}},[J(i,{class:Me(["text-green-500",{"opacity-0":v(o)!==c.value}])},null,8,["class"]),r(" "+wt(c.display||c.value),1)],10,FA))),128))])])}}});var PA=au(TA,[["__scopeId","data-v-427604ef"]]);const OA={class:"text-sm"},$A=Te({__name:"Settings",setup(s){L(U);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(w(),K("div",OA,[J(PA,{modelValue:v(vo),"onUpdate:modelValue":o[0]||(o[0]=l=>_e(vo)?vo.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),qA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},MA=Te({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:t}){const n=s;L(U);const o=qs(n,"modelValue",t,{passive:!0}),l=N();return X9(l,()=>{o.value=!1}),(a,i)=>(w(),K("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Me({disabled:s.disabled}),onClick:i[0]||(i[0]=c=>o.value=!v(o))},[_t(a.$slots,"button",{class:Me({disabled:s.disabled})})],2),(w(),R(np,null,[v(o)?(w(),K("div",qA,[_t(a.$slots,"menu")])):fe("v-if",!0)],1024))],512))}}),IA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},co={__name:"VerticalDivider",setup(s){return L(U),(t,n)=>(w(),K("div",IA))}};var LA={render(){return[]}};const jA={class:"icon-btn"},RA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},NA={class:"my-auto"},UA={class:"opacity-50"},HA=Te({__name:"NavControls",props:{persist:{default:!1}},setup(s){const t=s;L(U);const n=cr.smaller("md"),{isFullscreen:o,toggle:l}=Xp,a=z(()=>hr.value?`?password=${hr.value}`:""),i=z(()=>`/presenter/${Ne.value}${a.value}`),c=z(()=>`/${Ne.value}${a.value}`),p=N(),u=()=>{p.value&&Qt.value&&p.value.contains(Qt.value)&&Qt.value.blur()},y=z(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Ls(),d=Ls();return nn(()=>import("./DrawingControls.38abb6e4.js"),[]).then(h=>d.value=h.default),(h,g)=>{const D=EA,b=gA,x=yA,_=aA,k=tA,B=Yg,M=Kg,P=ru,H=Mg,ae=Fg,ye=Bg,he=Kl("RouterLink"),Ae=bg,$e=fg,Le=cg,Qe=ng;return w(),K("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Me(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(y)]),onMouseleave:u},[v(js)?fe("v-if",!0):(w(),K("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Be)=>v(l)&&v(l)(...Be))},[v(o)?(w(),R(D,{key:0})):(w(),R(b,{key:1}))])),e("button",{class:Me(["icon-btn",{disabled:!v(Tv)}]),onClick:g[1]||(g[1]=(...Be)=>v(lt)&&v(lt)(...Be))},[J(x)],2),e("button",{class:Me(["icon-btn",{disabled:!v(Fv)}]),title:"Next",onClick:g[2]||(g[2]=(...Be)=>v(ot)&&v(ot)(...Be))},[J(_)],2),v(js)?fe("v-if",!0):(w(),K("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Be=>v(Gp)())},[J(k)])),v(fr)?fe("v-if",!0):(w(),K("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Be=>v(tu)())},[v(Yr)?(w(),R(B,{key:0})):(w(),R(M,{key:1}))])),J(co),v(js)?fe("v-if",!0):(w(),K(ke,{key:3},[!v($s)&&!v(n)&&v(f)?(w(),K(ke,{key:0},[J(v(f)),J(co)],64)):fe("v-if",!0),v($s)?(w(),K("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Be=>kl.value=!v(kl))},[v(kl)?(w(),R(P,{key:0})):(w(),R(H,{key:1,class:"opacity-50"}))])):fe("v-if",!0)],64)),!v(we).drawings.presenterOnly&&!v(js)?(w(),K(ke,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Be=>Ms.value=!v(Ms))},[J(ae),v(Ms)?(w(),K("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ls({background:v(gt).color})},null,4)):fe("v-if",!0)]),J(co)],64)):fe("v-if",!0),v(js)?fe("v-if",!0):(w(),K(ke,{key:5},[v($s)?(w(),R(he,{key:0,to:v(c),class:"icon-btn",title:"Play Mode"},{default:Y(()=>[J(ye)]),_:1},8,["to"])):fe("v-if",!0),v(Cv)?(w(),R(he,{key:1,to:v(i),class:"icon-btn",title:"Presenter Mode"},{default:Y(()=>[J(Ae)]),_:1},8,["to"])):fe("v-if",!0),fe("v-if",!0)],64)),(w(),K(ke,{key:6},[v(we).download?(w(),K("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Be)=>v(mr)&&v(mr)(...Be))},[J($e)])):fe("v-if",!0)],64)),!v($s)&&v(we).info&&!v(js)?(w(),K("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Be=>xn.value=!v(xn))},[J(Le)])):fe("v-if",!0),!v($s)&&!v(js)?(w(),R(MA,{key:8},{button:Y(()=>[e("button",jA,[J(Qe)])]),menu:Y(()=>[J($A)]),_:1})):fe("v-if",!0),v(js)?fe("v-if",!0):(w(),R(co,{key:9})),e("div",RA,[e("div",NA,[r(wt(v(Ne))+" ",1),e("span",UA,"/ "+wt(v(fu)),1)])]),J(v(LA))],34)],512)}}});var iu={render(){return[]}},cu={render(){return[]}};const VA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},KA=Te({__name:"PresenterMouse",setup(s){return L(U),(t,n)=>{const o=ru;return v(bl).cursor?(w(),K("div",VA,[J(o,{class:"absolute",style:ls({left:`${v(bl).cursor.x}%`,top:`${v(bl).cursor.y}%`})},null,8,["style"])])):fe("v-if",!0)}}}),QA=Te({__name:"SlidesShow",props:{context:null},setup(s){L(U),ue(ps,()=>{var n,o;((n=ps.value)==null?void 0:n.meta)&&ps.value.meta.preload!==!1&&(ps.value.meta.__preloaded=!0),((o=xl.value)==null?void 0:o.meta)&&xl.value.meta.preload!==!1&&(xl.value.meta.__preloaded=!0)},{immediate:!0});const t=Ls();return nn(()=>import("./DrawingLayer.8d3449b9.js"),[]).then(n=>t.value=n.default),(n,o)=>(w(),K(ke,null,[fe(" Global Bottom "),J(v(cu)),fe(" Slides "),(w(!0),K(ke,null,Xn(v(Re),l=>{var a,i;return w(),K(ke,{key:l.path},[((a=l.meta)==null?void 0:a.__preloaded)||l===v(ps)?Hr((w(),R(v(ea),{key:0,is:l==null?void 0:l.component,clicks:l===v(ps)?v(Ss):0,"clicks-elements":((i=l.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Me(v(Jr)(l)),route:l,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ep,l===v(ps)]]):fe("v-if",!0)],64)}),128)),fe(" Global Top "),J(v(iu)),v(t)?(w(),R(v(t),{key:0})):fe("v-if",!0),v($s)?fe("v-if",!0):(w(),R(KA,{key:1}))],64))}}),WA=Te({__name:"Play",setup(s){L(U),Tm();const t=N();function n(a){var i;qi.value||((i=a.target)==null?void 0:i.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?ot():lt())}$v(t);const o=z(()=>M6.value||qi.value);Ls();const l=Ls();return nn(()=>import("./DrawingControls.38abb6e4.js"),[]).then(a=>l.value=a.default),(a,i)=>(w(),K(ke,null,[e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:ls(v(Bp))},[J(ou,{class:"w-full h-full",style:ls({background:"var(--slidev-slide-container-background, black)"}),width:v(sa)?v(Et).width.value:void 0,scale:v(vo),onPointerdown:n},{default:Y(()=>[J(QA,{context:"slide"})]),controls:Y(()=>[e("div",{class:Me(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(o)?"opacity-100 right-0":"opacity-0 p-2",v(Rn)?"pointer-events-none":""]])},[J(HA,{class:"m-auto",persist:v(o)},null,8,["persist"])],2),!v(we).drawings.presenterOnly&&!v(js)&&v(l)?(w(),R(v(l),{key:0,class:"ml-0"})):fe("v-if",!0)]),_:1},8,["style","width","scale"]),fe("v-if",!0)],4),J(Zm)],64))}});function pu(s){const t=z(()=>s.value.path),n=z(()=>Re.length-1),o=z(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=z(()=>ol(o.value)),a=z(()=>Re.find(d=>d.path===`${o.value}`)),i=z(()=>{var d,h,g;return(g=(h=(d=a.value)==null?void 0:d.meta)==null?void 0:h.slide)==null?void 0:g.id}),c=z(()=>{var d,h;return(h=(d=a.value)==null?void 0:d.meta)==null?void 0:h.layout}),p=z(()=>Re.find(d=>d.path===`${Math.min(Re.length,o.value+1)}`)),u=z(()=>Re.filter(d=>{var h,g;return(g=(h=d.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((d,h)=>(ta(d,h),d),[])),y=z(()=>na(u.value,a.value)),f=z(()=>oa(y.value));return{route:s,path:t,total:n,currentPage:o,currentPath:l,currentRoute:a,currentSlideId:i,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:y,tree:f}}function uu(s,t,n){const o=N(0);Ke(()=>{fs.afterEach(async()=>{await Ke(),o.value+=1})});const l=z(()=>{var p,u;return o.value,((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),a=z(()=>{var p,u,y;return+((y=(u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.clicks)!=null?y:l.value.length)}),i=z(()=>n.value<Re.length-1||s.value<a.value),c=z(()=>n.value>1||s.value>0);return{clicks:s,clicksElements:l,clicksTotal:a,hasNext:i,hasPrev:c}}const XA=["id"],Wi=Te({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(s,{emit:t}){const n=s,o=qs(n,"clicksElements",t),l=z(()=>({height:`${kp}px`,width:`${Dt}px`})),a=Ls();nn(()=>Promise.resolve().then(function(){return Lm}),void 0).then(u=>a.value=u.default);const i=z(()=>n.clicks),c=uu(i,n.nav.currentRoute,n.nav.currentPage),p=z(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return us(U,qe({nav:De(De({},n.nav),c),configs:we,themeConfigs:z(()=>we.themeConfig)})),(u,y)=>{var f;return w(),K("div",{id:v(p),class:"slide-container",style:ls(v(l))},[J(v(cu)),J(v(ea),{is:(f=s.route)==null?void 0:f.component,"clicks-elements":v(o),"onUpdate:clicks-elements":y[0]||(y[0]=d=>_e(o)?o.value=d:null),clicks:v(i),"clicks-disabled":!1,class:Me(v(Jr)(s.route)),route:s.route},null,8,["is","clicks-elements","clicks","class","route"]),v(a)?(w(),R(v(a),{key:0,page:+s.route.path},null,8,["page"])):fe("v-if",!0),J(v(iu))],12,XA)}}}),GA=Te({__name:"PrintSlide",props:{route:null},setup(s){var a;const t=s;L(U);const n=qe(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),o=z(()=>t.route),l=pu(o);return(i,c)=>(w(),K(ke,null,[J(Wi,{"clicks-elements":n,"onUpdate:clicks-elements":c[0]||(c[0]=p=>_e(n)?n.value=p:null),clicks:0,nav:v(l),route:v(o)},null,8,["clicks-elements","nav","route"]),v(Cn)?fe("v-if",!0):(w(!0),K(ke,{key:0},Xn(n.length,p=>(w(),R(Wi,{key:p,clicks:p,nav:v(l),route:v(o)},null,8,["clicks","nav","route"]))),128))],64))}});const YA={id:"print-content"},ZA=Te({__name:"PrintContainer",props:{width:null},setup(s){const t=s;L(U);const n=z(()=>t.width),o=z(()=>t.width/tt),l=z(()=>n.value/o.value),a=z(()=>l.value<tt?n.value/Dt:o.value*tt/Dt),i=Re.slice(0,-1),c=z(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return us(_p,a),(p,u)=>(w(),K("div",{id:"print-container",class:Me(v(c))},[e("div",YA,[(w(!0),K(ke,null,Xn(v(i),y=>(w(),R(GA,{key:y.path,route:y},null,8,["route"]))),128))]),_t(p.$slots,"controls")],2))}});const JA=Te({__name:"Print",setup(s){L(U);const t=mt.canvasWidth,n=Math.round(t/mt.aspectRatio)+1;function o(l,{slots:a}){if(a.default)return zs("style",a.default())}return Yo(()=>{sa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,a)=>(w(),K(ke,null,[J(o,null,{default:Y(()=>[r(" @page { size: "+wt(v(t))+"px "+wt(n)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:ls(v(Bp))},[J(ZA,{class:"w-full h-full",style:ls({background:"var(--slidev-slide-container-background, black)"}),width:v(Et).width.value},null,8,["style","width"])],4)],64))}});const e3={class:"slidev-layout end"},s3={__name:"end",setup(s){return L(U),(t,n)=>(w(),K("div",e3," END "))}};var t3=au(s3,[["__scopeId","data-v-024c70b4"]]),yu="/the-graphql-workshop/images/nearform.svg";const n3={class:"slidev-layout default"},re={__name:"default",setup(s){return L(U),(t,n)=>(w(),K("div",n3,[_t(t.$slots,"default")]))}},o3=e("img",{class:"logo",src:yu},null,-1),l3=e("h1",null,"The GraphQL Workshop",-1),r3=e("h3",null,[e("strong",null,"A guide to GraphQL with Fastify and Mercurius")],-1),a3=e("div",{class:"copyright"},[e("p",null,"\xA9 Copyright 2022 NearForm Ltd")],-1),i3={__name:"1",setup(s){const t={theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[o3,l3,r3,a3]),_:1},16))}},c3=e("h1",null,"Why Mercurius",-1),p3=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("a",{href:"https://mercurius.dev/",target:"_blank",rel:"noopener"},"Mercurius"),r(" is a "),e("strong",null,"high-performance"),r(" GraphQL adapter for the "),e("a",{href:"https://www.fastify.io/",target:"_blank",rel:"noopener"},"Fastify"),r(" web framework")]),e("li",null,"It has many core features and plugins for building world class production-ready applications"),e("li",null,[r("It supports advanced features out of the box such as "),e("a",{href:"https://www.apollographql.com/docs/federation/federation-spec/",target:"_blank",rel:"noopener"},"Apollo Federation specification"),r(" and Subscriptions")]),e("li",null,[r("It\u2019s entirely "),e("strong",null,"Open Source"),r(" and made available under the MIT license")]),e("li",null,"It has a rich and vibrant community contributing to its development")])],-1),u3={__name:"2",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[c3,p3]),_:1},16))}},y3=e("h1",null,"Prerequisites",-1),d3=e("p",null,[r("This workshop requires an understanding of the "),e("strong",null,"Fastify"),r(" framework.")],-1),f3=e("p",null,"We recommend a basic knowledge of the Fastify plugin system which can be acquired by following a workshop similar to this one, focused on Fastify.",-1),h3=e("p",null,[e("a",{href:"https://github.com/nearform/the-fastify-workshop",target:"_blank",rel:"noopener"},"https://github.com/nearform/the-fastify-workshop")],-1),m3={__name:"3",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[y3,d3,f3,h3]),_:1},16))}},g3=e("div",{class:"dense"},[e("h1",null,"Mercurius core features"),e("ul",null,[e("li",null,[e("strong",null,"Caching"),r(" of query parsing and validation")]),e("li",null,[r("Automatic "),e("strong",null,"loader"),r(" integration to avoid the N+1 problem")]),e("li",null,"Just-In-Time compiler via graphql-jit"),e("li",null,[e("strong",null,"Subscriptions")]),e("li",null,[e("strong",null,"Federation"),r(" support")]),e("li",null,"Federated subscriptions support"),e("li",null,"Gateway implementation, including Subscriptions"),e("li",null,[e("strong",null,"Batched"),r(" query support")]),e("li",null,"Customizable persisted queries")])],-1),A3={__name:"4",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[g3]),_:1},16))}},v3=e("h1",null,"Getting setup",-1),b3=e("div",{class:"dense"},[e("p",null,"Clone the repository:"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"git clone https://github.com/nearform/the-graphql-workshop")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"git clone https://github.com/nearform/the-graphql-workshop")])])])]),e("p",null,[r("Follow the instructions in the "),e("a",{href:"https://github.com/nearform/the-graphql-workshop",target:"_blank",rel:"noopener"},"README"),r(" file")]),e("p",null,"\u{1F4A1} Ask if anything doesn\u2019t work!")],-1),D3={__name:"5",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[v3,b3]),_:1},16))}},E3=e("div",{class:"dense"},[e("h1",null,"Workshop structure"),e("ul",null,[e("li",null,"This workshop is made of multiple, incremental modules"),e("li",null,"Each module builds on top of the previous one"),e("li",null,"At each step you are asked to add features and solve problems"),e("li",null,[r("You will find the solution to each step in the "),e("code",null,"src/step-{n}-{name}"),r(" folder")]),e("li",null,"The \u{1F3C6} icon indicates bonus features"),e("li",null,"The \u{1F4A1} icon indicates hints")])],-1),w3={__name:"6",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[E3]),_:1},16))}},_3=e("div",{class:"dense"},[e("h1",null,"Running the modules"),e("ul",null,[e("li",null,[e("code",null,"cd src/step-{n}-{name}")]),e("li",null,"Check out the README file in each step")]),e("h4",null,"Example"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"cd"),e("span",{style:{color:"#DBD7CAEE"}}," src/step-01-basic")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm start")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#998418"}},"cd"),e("span",{style:{color:"#393A34"}}," src/step-01-basic")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm start")])])])])],-1),k3={__name:"7",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[_3]),_:1},16))}},B3=e("div",{class:"dense"},[e("h1",null,"Step 1: Basic \u{1F4BB}"),e("p",null,[r("Create a GraphQL server which exposes an "),e("code",null,"add"),r(" function to compute the sum of two numbers.")]),e("ul",null,[e("li",null,[r("Expose a GraphQL "),e("code",null,"POST /graphql"),r(" route")]),e("li",null,"Listen on port 3000"),e("li",null,[r("Create a schema including an "),e("code",null,"add"),r(" Query accepting parameters "),e("code",null,"x"),r(" and "),e("code",null,"y")]),e("li",null,[r("Implement a resolver for the "),e("code",null,"add"),r(" query")]),e("li",null,[r("Respond with the JSON object when invoked with "),e("code",null,"(x:5, y:3)")])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"add"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"add"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),x3={__name:"8",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[B3]),_:1},16))}},C3=e("h1",null,"Step 1: Solution / 1",-1),z3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"mercurius"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./graphql.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"({")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"logger"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965"}},"transport"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965"}},"target"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"pino-pretty"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"graphiql"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"true")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"server")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"mercurius"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./graphql.js"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"({")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"logger"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418"}},"transport"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418"}},"target"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"pino-pretty"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"graphiql"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"true")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"server")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),S3={__name:"9",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[C3,z3]),_:1},16))}},F3=e("h1",null,"Step 1: Solution / 2",-1),T3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// graphql.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    add(x: Int, y: Int): Int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Query"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"add"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"_"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"x"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"y"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"x"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"y")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// graphql.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    add(x: Int, y: Int): Int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Query"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"add"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"_"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"x"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"y")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")])])])],-1),P3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// server.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./index.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"listen"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"port"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"3000"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// server.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./index.js"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"listen"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"port"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"3000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")])])])],-1),O3={__name:"10",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[F3,T3,P3]),_:1},16))}},$3=e("h1",null,"Step 1: Trying it out",-1),q3=e("h3",null,"In the terminal:",-1),M3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --header "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --data "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{"query":"{ add(x: 5, y:3) }"}'),e("span",{style:{color:"#C98A7DAA"}},"'")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --header "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --data "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{"query":"{ add(x: 5, y:3) }"}'),e("span",{style:{color:"#B56959AA"}},"'")])])])],-1),I3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"add"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"add"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),L3={__name:"11",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[$3,q3,M3,I3]),_:1},16))}},j3=e("div",{class:"dense"},[e("h1",null,"Step 2: Loaders \u{1F4BB}"),e("p",null,"A loader is an utility to avoid the N+1 query problem of GraphQL. Each defined loader will register a resolver that coalesces each of the request and combines them into a single, bulk query."),e("p",null,"Moreover, it can also cache the results, so that other parts of the GraphQL do not have to fetch the same data."),e("ul",null,[e("li",null,[r("Create a "),e("code",null,"Person"),r(" type with "),e("code",null,"name"),r(" property")]),e("li",null,[r("Create a "),e("code",null,"Pet"),r(" type with "),e("code",null,"name"),r(" and "),e("code",null,"owner"),r(" property (of type "),e("code",null,"Person"),r(")")]),e("li",null,[r("Expose a "),e("code",null,"pets"),r(" query which returns all pets and, for each pet, its owner, using "),e("strong",null,"GraphQL loaders")])])],-1),R3={__name:"12",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[j3]),_:1},16))}},N3=e("div",{class:"dense"},[e("ul",null,[e("li",null,"The query should return a JSON object:")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"pets"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"owner"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Jennifer"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"owner"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Simon"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"pets"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"owner"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Jennifer"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"owner"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Simon"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),U3={__name:"13",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[N3]),_:1},16))}},H3=e("h1",null,"Step 2: Solution / 1",-1),V3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"mercurius"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"loaders"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./graphql.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"loaders"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"graphiql"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"true")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"server")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"mercurius"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"loaders"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./graphql.js"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"loaders"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"graphiql"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"true")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"server")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),K3={__name:"14",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[H3,V3]),_:1},16))}},Q3=e("h1",null,"Step 2: Solution / 2",-1),W3=e("div",{class:"two-columns gap-5"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// graphql.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"pets"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Max"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Charlie"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"owners"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Max"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Jennifer"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Charlie"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Simon"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// graphql.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"pets"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Max"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Charlie"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"owners"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Max"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Jennifer"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Charlie"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Simon"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type Person {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    name: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type Pet {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    name: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    owner: Person")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    pets: [Pet]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Query"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"pets"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"pets")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type Person {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    name: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type Pet {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    name: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    owner: Person")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    pets: [Pet]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Query"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"pets"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"pets")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),X3={__name:"15",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[Q3,W3]),_:1},16))}},G3=e("h1",null,"Step 2: Solution / 3",-1),Y3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// graphql.js (cont.)")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"loaders"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Pet"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"owner"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"queries"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"queries"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"map"),e("span",{style:{color:"#666666"}},"(({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"obj"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"pet"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"owners"),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#BF9763"}},"pet"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"name"),e("span",{style:{color:"#666666"}},"])")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"loaders"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// graphql.js (cont.)")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"loaders"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Pet"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"owner"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"queries"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"queries"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"map"),e("span",{style:{color:"#999999"}},"(({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"obj"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"pet"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"owners"),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#B07D48"}},"pet"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"name"),e("span",{style:{color:"#999999"}},"])")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"loaders"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")])])])],-1),Z3={__name:"16",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[G3,Y3]),_:1},16))}};var J3="/the-graphql-workshop/images/step-02.jpg";const e1=e("h1",null,"Step 2: Trying it out",-1),s1=e("h3",null,"In Graphiql",-1),t1=e("p",null,[r("You can navigate to graphql query editor on "),e("a",{href:"http://localhost:3000/graphiql",target:"_blank",rel:"noopener"},"http://localhost:3000/graphiql")],-1),n1=e("img",{style:{width:"50%","text-align":"center"},src:J3},null,-1),o1={__name:"17",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[e1,s1,t1,n1]),_:1},16))}},l1=e("div",{class:"dense"},[e("h1",null,"Step 3: Executable schema \u{1F4BB}"),e("p",null,[r("The "),e("code",null,"@graphql-tools/schema"),r(" package allows you to create a GraphQL.js "),e("a",{href:"https://graphql.org/graphql-js/type/",target:"_blank",rel:"noopener"},"GraphQLSchema"),r(" instance from GraphQL schema language using the function "),e("code",null,"makeExecutableSchema"),r(".")]),e("p",null,[r("Besides common options such as "),e("code",null,"typeDefs"),r(" and "),e("code",null,"resolvers"),r(", it supports more advanced options to customize the creation of the schema.")]),e("ul",null,[e("li",null,[r("Create an executable schema using "),e("code",null,"typeDefs"),r(" and "),e("code",null,"resolvers")]),e("li",null,[r("Use the "),e("code",null,"@graphql-tools/schema"),r(" package to create the executable schema")]),e("li",null,'Implement the same "add" functionality as in the earlier step')])],-1),r1={__name:"18",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[l1]),_:1},16))}},a1=e("h1",null,"Step 3: Solution",-1),i1=e("div",{class:"one-big-one-small-column gap-5"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"mercurius"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"makeExecutableSchema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"@graphql-tools/schema"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"typeDefs"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./graphql.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"makeExecutableSchema"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"typeDefs"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"server")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"mercurius"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"makeExecutableSchema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"@graphql-tools/schema"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"typeDefs"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./graphql.js"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"schema"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"makeExecutableSchema"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"typeDefs"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"server")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// graphql.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"typeDefs"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    add(x: Int, y: Int): Int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Query"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"add"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"_"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"x"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"y"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"x"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"y")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"typeDefs"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// graphql.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"typeDefs"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    add(x: Int, y: Int): Int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Query"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"add"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"_"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"x"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"y")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"typeDefs"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")])])])])],-1),c1={__name:"19",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[a1,i1]),_:1},16))}},p1=e("div",{class:"dense"},[e("h1",null,"Step 4: SELECT N+1 \u{1F4BB}"),e("ul",null,[e("li",null,"Implement the same Pet and Owners functionality as before"),e("li",null,"Allows to query all pets and its owners by using GraphQL loaders"),e("li",null,"Stores the pets and owners in postgres database"),e("li",null,[r("Uses a "),e("strong",null,"single database query"),r(" to get owners for all pets")])])],-1),u1={__name:"20",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[p1]),_:1},16))}},y1=e("h1",null,"Step 4: Solution",-1),d1=e("div",{class:"two-columns gap-5"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"ownersByPetNames"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"db"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"petNames"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"rows"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"db"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"query"),e("span",{style:{color:"#666666"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"SQL"),e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"      SELECT owners.*")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"      FROM owners")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"      INNER JOIN pets")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"        ON pets.owner = owners.id")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"        AND pets.name = ANY("),e("span",{style:{color:"#666666"}},"${"),e("span",{style:{color:"#C98A7D"}},"petNames"),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#C98A7D"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    "),e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"rows")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"ownersByPetNames"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"db"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"petNames"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"rows"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"db"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"query"),e("span",{style:{color:"#999999"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"SQL"),e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"      SELECT owners.*")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"      FROM owners")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"      INNER JOIN pets")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"        ON pets.owner = owners.id")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"        AND pets.name = ANY("),e("span",{style:{color:"#999999"}},"${"),e("span",{style:{color:"#B56959"}},"petNames"),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#B56959"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    "),e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"rows")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"loaders"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Pet"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"owner"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"queries"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"context"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"petNames"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"queries"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"map"),e("span",{style:{color:"#666666"}},"(({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"obj"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"obj"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"name"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"ownersByPetNames"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"context"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"pg"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"petNames"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"loaders"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Pet"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"owner"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"queries"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"context"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"petNames"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"queries"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"map"),e("span",{style:{color:"#999999"}},"(({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"obj"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"obj"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"name"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"ownersByPetNames"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"context"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"pg"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"petNames"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),f1=e("p",null,"\u{1F4A1} For the full code examples and db setup instructions, see the repository",-1),h1={__name:"21",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[y1,d1,f1]),_:1},16))}},m1=e("div",{class:"dense"},[e("h1",null,"Step 5: Context \u{1F4BB}"),e("p",null,"Context is an object populated at the server level which is made accessible to resolvers."),e("ul",null,[e("li",null,[r("Create a "),e("code",null,"User"),r(" type with "),e("code",null,"name"),r(" and "),e("code",null,"locale"),r(" properties")]),e("li",null,[r("Create an in-memory array of "),e("code",null,"User"),r(" with different locales")]),e("li",null,[r("Create a query called "),e("code",null,"getUserByLocale"),r(" returning the first user with "),e("code",null,"en"),r(" locale")]),e("li",null,[r("Set the property "),e("code",null,"locale: 'en'"),r(" in the mercurius context")]),e("li",null,"Respond with JSON object:")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"getUserByLocale"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Alice"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"getUserByLocale"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Alice"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),g1={__name:"22",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[m1]),_:1},16))}},A1=e("h1",null,"Step 5: Solution",-1),v1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BF9763"}},"server"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#80A665"}},"context"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"({")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"locale"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"en"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B07D48"}},"server"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#59873A"}},"context"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"({")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"locale"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"en"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"})")])])])],-1),b1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Query"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"getUserByLocale"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"_"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"__"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"context"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"users"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"find"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"u"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"u"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"locale"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"context"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"locale"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Query"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"getUserByLocale"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"_"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"__"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"context"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"users"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"find"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"u"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"u"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"locale"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"==="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"context"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"locale"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),D1={__name:"23",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[A1,v1,b1]),_:1},16))}},E1=e("div",{class:"dense"},[e("h1",null,"Step 6: Hooks \u{1F4BB}"),e("p",null,[r("Hooks are registered with the "),e("code",null,"fastify.graphql.addHook"),r(" method and allow you to listen to specific events in the GraphQL request/response lifecycle.")]),e("p",null,"By using hooks you can interact directly with the GraphQL lifecycle of Mercurius."),e("ul",null,[e("li",null,[r("Create a query called "),e("code",null,"sum"),r(" which returns the sum of two numbers")]),e("li",null,[r("Create and print logs for the following hooks: "),e("ul",null,[e("li",null,[e("code",null,"preParsing")]),e("li",null,[e("code",null,"preValidation")]),e("li",null,[e("code",null,"preExecution")]),e("li",null,[e("code",null,"onResolution")])])]),e("li",null,[r('Enrich the response with an error with the message "foo" in the '),e("code",null,"preExecution"),r(" hook")])])],-1),w1={__name:"24",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[E1]),_:1},16))}},_1=e("div",{class:"dense"},[e("ul",null,[e("li",null,"The query should return something similar to:")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"add"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"10")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"errors"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"foo"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"add"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"10")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"errors"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"foo"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),k1={__name:"25",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[_1]),_:1},16))}},B1=e("h1",null,"Step 6: Solution",-1),x1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// server.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"graphql"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"addHook"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"preParsing"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"preParsing called"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"graphql"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"addHook"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"preValidation"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"preValidation called"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"graphql"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"addHook"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"preExecution"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"document"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"preExecution called"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"document"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"errors"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"Error"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"foo"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"graphql"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"addHook"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"onResolution"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"app"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"onResolution called"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// server.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"graphql"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"addHook"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"preParsing"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"preParsing called"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"graphql"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"addHook"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"preValidation"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"preValidation called"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"graphql"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"addHook"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"preExecution"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"document"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"preExecution called"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"document"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"errors"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"Error"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"foo"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"graphql"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"addHook"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"onResolution"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"app"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"onResolution called"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"})")])])])],-1),C1={__name:"26",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[B1,x1]),_:1},16))}},z1=e("h1",null,"Step 6: Trying it out",-1),S1=e("div",{class:"flex-row"},[e("p",null,"In terminal"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --header "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --data "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{"query":"{ add(x: 5, y:3) }"}'),e("span",{style:{color:"#C98A7DAA"}},"'")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --header "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --data "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{"query":"{ add(x: 5, y:3) }"}'),e("span",{style:{color:"#B56959AA"}},"'")])])])])],-1),F1=e("p",null,"Output",-1),T1=e("div",{class:"two-columns gap-5"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"preParsing called")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"preValidation called")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"preExecution called")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"onResolution called")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"preParsing called")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"preValidation called")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"preExecution called")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"onResolution called")])])])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"add"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"10")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"errors"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"foo"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"add"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"10")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"errors"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"foo"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),P1={__name:"27",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[z1,S1,F1,T1]),_:1},16))}},O1=e("div",{class:"dense"},[e("h1",null,"Step 7: Error handling \u{1F4BB}"),e("ul",null,[e("li",null,[r("Create "),e("code",null,"User"),r(" type with "),e("code",null,"name"),r(" and "),e("code",null,"id"),r(" property")]),e("li",null,[r("Create an in-memory array of users of type "),e("code",null,"User")]),e("li",null,[r("Create a query "),e("code",null,"findUser"),r(" which accepts an "),e("code",null,"id"),r(" and "),e("ul",null,[e("li",null,[r("If the "),e("code",null,"id"),r(" matches then the corresponding user is returned")]),e("li",null,[r("If the "),e("code",null,"id"),r(" does not match with any user then an error is thrown with the message "),e("code",null,'"Invalid User ID"')])])]),e("li",null,[r("Add a property "),e("code",null,"extensions"),r(" to the error object with properties: "),e("ul",null,[e("li",null,[e("code",null,"code: USER_ID_INVALID")]),e("li",null,[e("code",null,"id: <query input>")])])]),e("li",null,[r("\u{1F4A1} Use Mercurius "),e("code",null,"ErrorWithProps"),r(" to create the error")])])],-1),$1={__name:"28",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[O1]),_:1},16))}},q1=e("div",{class:"dense"},[e("ul",null,[e("li",null,"The query should return something similar to:")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"findUser"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"null")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"errors"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Invalid User ID"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"locations"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"line"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"2"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"column"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"3")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"path"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"findUser"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"extensions"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"code"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"USER_ID_INVALID"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"5"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"findUser"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"null")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"errors"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Invalid User ID"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"locations"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"line"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"2"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"column"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"3")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"path"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"findUser"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"extensions"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"code"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"USER_ID_INVALID"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"id"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"5"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),M1={__name:"29",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[q1]),_:1},16))}},I1=e("h1",null,"Step 7: Solution",-1),L1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Query"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"findUser"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"_"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"id"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"users"),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#BF9763"}},"id"),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"users"),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#BF9763"}},"id"),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"throw"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"ErrorWithProps"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Invalid User ID"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#BF9763"}},"id"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965"}},"code"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"USER_ID_INVALID"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Query"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"findUser"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"_"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"users"),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#B07D48"}},"id"),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"users"),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#B07D48"}},"id"),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"throw"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"ErrorWithProps"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Invalid User ID"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B07D48"}},"id"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418"}},"code"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"USER_ID_INVALID"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),j1={__name:"30",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[I1,L1]),_:1},16))}},R1=e("div",{class:"dense"},[e("h1",null,"Step 8: Federation \u{1F4BB}"),e("p",null,"A GraphQL server can act as a Gateway that composes the schemas of the underlying services into one federated schema and executes queries across the services. Every underlying service must be a GraphQL server that supports the federation."),e("ul",null,[e("li",null,"Create a Federated GraphQL gateway which listens on port 4000"),e("li",null,"Run and expose to the gateway two GraphQL services on ports 4001 and 4002"),e("li",null,[r("Service 1 has a "),e("code",null,"User"),r(" type and a "),e("code",null,"me"),r(" query which returns the user")]),e("li",null,[r("Service 2 has a "),e("code",null,"Post"),r(" type and extends "),e("code",null,"User"),r(" with a "),e("code",null,"posts"),r(" array which are the posts of that user")]),e("li",null,[r("Keep an in-memory array of users of the type "),e("code",null,"User"),r(" and posts of type "),e("code",null,"Post")])])],-1),N1={__name:"31",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[R1]),_:1},16))}},U1=e("div",{class:"dense"},[e("ul",null,[e("li",null,"The query should return something similar to:")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"me"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"John"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"posts"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"p1"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Post 1"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Content 1"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"p3"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Post 3"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Content 3"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"me"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"John"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"posts"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"id"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"p1"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"title"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Post 1"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"content"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Content 1"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"id"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"p3"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"title"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Post 3"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"content"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Content 3"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),H1={__name:"32",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[U1]),_:1},16))}},V1=e("h1",null,"Step 8: Solution / 1",-1),K1=e("div",{class:"two-columns gap-5"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// server.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"...")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"createService"),e("span",{style:{color:"#666666"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4C9A91"}},"4001"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"service1"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"service1"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"resolvers")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"createService"),e("span",{style:{color:"#666666"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4C9A91"}},"4002"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"service2"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"service2"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"resolvers")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"gateway"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildGateway"),e("span",{style:{color:"#666666"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"gateway"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"listen"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"port"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"4000"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"...")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// server.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"...")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"createService"),e("span",{style:{color:"#999999"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#2F798A"}},"4001"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"service1"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"service1"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"resolvers")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"createService"),e("span",{style:{color:"#999999"}},"(")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#2F798A"}},"4002"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"service2"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"service2"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"resolvers")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"gateway"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildGateway"),e("span",{style:{color:"#999999"}},"()")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"gateway"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"listen"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"port"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"4000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"...")])])])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildGateway"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"gateway"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"(...)")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"gateway"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"graphiql"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"jit"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"1"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"gateway"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965"}},"services"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"user"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965"}},"url"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"http://localhost:4001/graphql"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"post"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"          "),e("span",{style:{color:"#B8A965"}},"url"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"http://localhost:4002/graphql"),e("span",{style:{color:"#C98A7DAA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"gateway")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildGateway"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"gateway"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"(...)")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"gateway"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"graphiql"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"true"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"jit"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"1"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"gateway"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418"}},"services"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"user"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418"}},"url"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"http://localhost:4001/graphql"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"post"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#998418"}},"url"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"http://localhost:4002/graphql"),e("span",{style:{color:"#B56959AA"}},"'")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"gateway")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),Q1={__name:"33",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[V1,K1]),_:1},16))}},W1=e("h1",null,"Step 8: Solution / 2",-1),X1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// services/service.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"createService"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"port"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"service"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"service"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"mercurius"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"federationMetadata"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"graphiql"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"jit"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"1")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"service"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"listen"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"port"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"service")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// services/service.js")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"createService"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"port"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"service"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"(...)")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"service"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"mercurius"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"federationMetadata"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"true"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"graphiql"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"true"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"jit"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"1")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"service"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"listen"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"port"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  ")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"service")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),G1=e("blockquote",null,[e("p",null,"\u{1F4A1} see service1 and service2 implementations in the repo")],-1),Y1={__name:"34",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[W1,X1,G1]),_:1},16))}},Z1=e("h1",null,"Step 9: Variables \u{1F4BB}",-1),J1=e("div",{class:"dense"},[e("ul",null,[e("li",null,[r("Review the "),e("code",null,"add"),r(" functionality implemented before")]),e("li",null,[r("The "),e("code",null,"add"),r(" function is supplied ith dynamic parameters"),e("br"),e("code",null,"($x: Int!, $y: Int!)")]),e("li",null,[r("The inputs to the "),e("code",null,"add"),r(" function should be passed as query variables, e.g "),e("br"),e("code",null,'{ "x": 3, "y": 5 }')]),e("li",null,"The query should return something similar to:")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"add"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"add"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),ev={__name:"35",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[Z1,J1]),_:1},16))}},sv=e("h1",null,"Step 9: Solution",-1),tv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    add(x: Int, y: Int): Int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#80A665"}},"add"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"x"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"y"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"x"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"y")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    add(x: Int, y: Int): Int")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#59873A"}},"add"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"x"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"y")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),nv=e("blockquote",null,[e("p",null,"\u{1F4A1} The implementation is the same as before")],-1),ov={__name:"36",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[sv,tv,nv]),_:1},16))}},lv=e("h1",null,"Step 9: Trying it out",-1),rv=e("p",null,"In terminal",-1),av=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --header "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --data "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{"query":"query AddQuery ($x: Int!, $y: Int!) { add(x: $x, y: $y) }","variables":{"x":3,"y":5},"operationName":"AddQuery"}'),e("span",{style:{color:"#C98A7DAA"}},"'")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --header "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --data "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{"query":"query AddQuery ($x: Int!, $y: Int!) { add(x: $x, y: $y) }","variables":{"x":3,"y":5},"operationName":"AddQuery"}'),e("span",{style:{color:"#B56959AA"}},"'")])])])],-1),iv=e("p",null,"Output",-1),cv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"add"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"add"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"8")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),pv={__name:"37",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[lv,rv,av,iv,cv]),_:1},16))}},uv=e("div",{class:"dense"},[e("h1",null,"Step 10: Fragments \u{1F4BB}"),e("p",null,"Create a GraphQL server using mercurius which:"),e("ul",null,[e("li",null,[r("Has "),e("code",null,"User"),r(" type with "),e("code",null,"id"),r(", "),e("code",null,"name"),r(", "),e("code",null,"age"),r(" and "),e("code",null,"level"),r(" properties")]),e("li",null,[r("Has two Query methods named "),e("code",null,"getNoviceUsers"),r(" and "),e("code",null,"getAdvancedUsers"),r(" which return type "),e("code",null,"User"),e("ul",null,[e("li",null,[e("code",null,"getNoviceUsers"),r(" query returns users with "),e("code",null,"level: novice")]),e("li",null,[e("code",null,"getAdvancedUsers"),r(" query returns users with "),e("code",null,"level: advanced")])])]),e("li",null,[r("Query both methods using a fragment on the type "),e("code",null,"User")])])],-1),yv={__name:"38",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[uv]),_:1},16))}},dv=e("div",{class:"dense"},[e("ul",null,[e("li",null,"The query should return something similar to:")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"getNoviceUsers"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"1"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"John Doe"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"32"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"level"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"novice"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"getAdvancedUsers"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"2"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Jane Doe"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"28"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"level"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"advanced"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"getNoviceUsers"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"id"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"1"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"John Doe"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"age"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"32"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"level"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"novice"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"getAdvancedUsers"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"id"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"2"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Jane Doe"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"age"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"28"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"level"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"advanced"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),fv={__name:"39",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[dv]),_:1},16))}},hv=e("h1",null,"Step 10: Solution",-1),mv=e("div",{class:"middle-flex"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type User {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    id: Int!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    name: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    age: Int!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    level: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    getNoviceUsers: [User]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"    getAdvancedUsers: [User]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"resolvers"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"Query"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"getNoviceUsers"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"users"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"filter"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"level"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"novice"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"getAdvancedUsers"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"users"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"filter"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"level"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"advanced"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type User {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    id: Int!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    name: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    age: Int!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    level: String!")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"}),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  type Query {")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    getNoviceUsers: [User]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"    getAdvancedUsers: [User]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"  }")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"`")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"resolvers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"Query"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"getNoviceUsers"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"users"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"filter"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"level"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"==="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"novice"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"},")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"getAdvancedUsers"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"users"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"filter"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"level"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"==="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"advanced"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),gv={__name:"40",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[hv,mv]),_:1},16))}},Av=e("div",{class:"middle-flex"},[e("h1",null,"Step 10: Trying it out"),e("h3",null,"In terminal"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --header "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  --data "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{"query":"{ getNoviceUsers { ...userFields } getAdvancedUsers { ...userFields } } fragment userFields on User { id  name age level }"}'),e("span",{style:{color:"#C98A7DAA"}},"'")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl --request POST \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --url http://localhost:3000/graphql \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --header "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," \\")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  --data "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{"query":"{ getNoviceUsers { ...userFields } getAdvancedUsers { ...userFields } } fragment userFields on User { id  name age level }"}'),e("span",{style:{color:"#B56959AA"}},"'")])])])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"getNoviceUsers"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"1"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"John Doe"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"32"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"level"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"novice"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"getAdvancedUsers"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"2"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Jane Doe"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"age"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"28"),e("span",{style:{color:"#666666"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"level"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"advanced"),e("span",{style:{color:"#C98A7DAA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"data"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"getNoviceUsers"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"id"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"1"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"John Doe"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"age"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"32"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"level"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"novice"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"],")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"getAdvancedUsers"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"id"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"2"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"name"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Jane Doe"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"age"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"28"),e("span",{style:{color:"#999999"}},",")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"level"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"advanced"),e("span",{style:{color:"#B56959AA"}},'"')]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"]")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),r(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])])],-1),vv={__name:"41",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[Av]),_:1},16))}},bv=e("div",{class:"middle-flex"},[e("h1",null,"\u{1F3C6} Write Tests \u{1F3C6}"),e("blockquote",null,[e("p",null,"\u{1F4A1} inspire from the code in the completed steps")])],-1),Dv={__name:"42",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[bv]),_:1},16))}},Ev=e("div",{class:"middle-flex big"},[e("h1",null,"Thanks For Having Us!"),e("h2",null,"\u{1F44F}\u{1F44F}\u{1F44F}"),e("img",{class:"logo-bottom",src:yu})],-1),wv={__name:"43",setup(s){const t={};return L(U),(n,o)=>(w(),R(re,le(oe(t)),{default:Y(()=>[Ev]),_:1},16))}};var _v=[{path:"1",name:"page-1",component:i3,meta:{theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1,title:"The GraphQL Workshop",slide:{raw:`---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# The GraphQL Workshop

### **A guide to GraphQL with Fastify and Mercurius**

<div class="copyright">

\xA9 Copyright 2022 NearForm Ltd

</div>
`,title:"The GraphQL Workshop",level:1,content:`<img class=logo src="/images/nearform.svg">

# The GraphQL Workshop

### **A guide to GraphQL with Fastify and Mercurius**

<div class="copyright">

\xA9 Copyright 2022 NearForm Ltd

</div>`,frontmatter:{theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1,title:"The GraphQL Workshop"},index:0,start:0,end:19,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:u3,meta:{slide:{raw:`
# Why Mercurius

<div class="dense">

- [Mercurius](https://mercurius.dev/) is a **high-performance** GraphQL adapter for the [Fastify](https://www.fastify.io/) web framework
- It has many core features and plugins for building world class production-ready applications
- It supports advanced features out of the box such as [Apollo Federation specification](https://www.apollographql.com/docs/federation/federation-spec/) and Subscriptions
- It's entirely **Open Source** and made available under the MIT license
- It has a rich and vibrant community contributing to its development

</div>
`,title:"Why Mercurius",level:1,content:`# Why Mercurius

<div class="dense">

- [Mercurius](https://mercurius.dev/) is a **high-performance** GraphQL adapter for the [Fastify](https://www.fastify.io/) web framework
- It has many core features and plugins for building world class production-ready applications
- It supports advanced features out of the box such as [Apollo Federation specification](https://www.apollographql.com/docs/federation/federation-spec/) and Subscriptions
- It's entirely **Open Source** and made available under the MIT license
- It has a rich and vibrant community contributing to its development

</div>`,frontmatter:{},index:1,start:20,end:33,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:m3,meta:{slide:{raw:`
# Prerequisites

This workshop requires an understanding of the **Fastify** framework.

We recommend a basic knowledge of the Fastify plugin system which can be acquired by following a workshop similar to this one, focused on Fastify.

https://github.com/nearform/the-fastify-workshop
`,title:"Prerequisites",level:1,content:`# Prerequisites

This workshop requires an understanding of the **Fastify** framework.

We recommend a basic knowledge of the Fastify plugin system which can be acquired by following a workshop similar to this one, focused on Fastify.

https://github.com/nearform/the-fastify-workshop`,frontmatter:{},index:2,start:34,end:43,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:A3,meta:{slide:{raw:`
<div class="dense">

# Mercurius core features

- **Caching** of query parsing and validation
- Automatic **loader** integration to avoid the N+1 problem
- Just-In-Time compiler via graphql-jit
- **Subscriptions**
- **Federation** support
- Federated subscriptions support
- Gateway implementation, including Subscriptions
- **Batched** query support
- Customizable persisted queries

</div>
`,title:"Mercurius core features",level:1,content:`<div class="dense">

# Mercurius core features

- **Caching** of query parsing and validation
- Automatic **loader** integration to avoid the N+1 problem
- Just-In-Time compiler via graphql-jit
- **Subscriptions**
- **Federation** support
- Federated subscriptions support
- Gateway implementation, including Subscriptions
- **Batched** query support
- Customizable persisted queries

</div>`,frontmatter:{},index:3,start:44,end:61,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:D3,meta:{slide:{raw:`
# Getting setup

<div class="dense">

Clone the repository:

\`\`\`bash
git clone https://github.com/nearform/the-graphql-workshop
\`\`\`

Follow the instructions in the [README](https://github.com/nearform/the-graphql-workshop) file

\u{1F4A1} Ask if anything doesn't work!

</div>
`,title:"Getting setup",level:1,content:`# Getting setup

<div class="dense">

Clone the repository:

\`\`\`bash
git clone https://github.com/nearform/the-graphql-workshop
\`\`\`

Follow the instructions in the [README](https://github.com/nearform/the-graphql-workshop) file

\u{1F4A1} Ask if anything doesn't work!

</div>`,frontmatter:{},index:4,start:62,end:79,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:w3,meta:{slide:{raw:`
<div class="dense">

# Workshop structure

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the \`src/step-{n}-{name}\` folder
- The \u{1F3C6} icon indicates bonus features
- The \u{1F4A1} icon indicates hints

</div>
`,title:"Workshop structure",level:1,content:`<div class="dense">

# Workshop structure

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the \`src/step-{n}-{name}\` folder
- The \u{1F3C6} icon indicates bonus features
- The \u{1F4A1} icon indicates hints

</div>`,frontmatter:{},index:5,start:80,end:94,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:k3,meta:{slide:{raw:`
<div class="dense">

# Running the modules

- \`cd src/step-{n}-{name}\`
- Check out the README file in each step

#### Example

\`\`\`bash
cd src/step-01-basic

npm start
\`\`\`

</div>
`,title:"Running the modules",level:1,content:`<div class="dense">

# Running the modules

- \`cd src/step-{n}-{name}\`
- Check out the README file in each step

#### Example

\`\`\`bash
cd src/step-01-basic

npm start
\`\`\`

</div>`,frontmatter:{},index:6,start:95,end:113,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:x3,meta:{slide:{raw:`
<div class="dense">

# Step 1: Basic \u{1F4BB}

Create a GraphQL server which exposes an \`add\` function to compute the sum of two numbers.

- Expose a GraphQL \`POST /graphql\` route
- Listen on port 3000
- Create a schema including an \`add\` Query accepting parameters \`x\` and \`y\`
- Implement a resolver for the \`add\` query
- Respond with the JSON object when invoked with \`(x:5, y:3)\`

\`\`\`json
{
  "data": {
    "add": 8
  }
}
\`\`\`

</div>
`,title:"Step 1: Basic \u{1F4BB}",level:1,content:'<div class="dense">\n\n# Step 1: Basic \u{1F4BB}\n\nCreate a GraphQL server which exposes an `add` function to compute the sum of two numbers.\n\n- Expose a GraphQL `POST /graphql` route\n- Listen on port 3000\n- Create a schema including an `add` Query accepting parameters `x` and `y`\n- Implement a resolver for the `add` query\n- Respond with the JSON object when invoked with `(x:5, y:3)`\n\n```json\n{\n  "data": {\n    "add": 8\n  }\n}\n```\n\n</div>',frontmatter:{},index:7,start:114,end:137,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:S3,meta:{slide:{raw:`
# Step 1: Solution / 1

\`\`\`js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  server.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  return server
}
\`\`\`
`,title:"Step 1: Solution / 1",level:1,content:`# Step 1: Solution / 1

\`\`\`js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  server.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  return server
}
\`\`\``,frontmatter:{},index:8,start:138,end:166,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:O3,meta:{slide:{raw:`
# Step 1: Solution / 2

\`\`\`js
// graphql.js
const schema = \`
  type Query {
    add(x: Int, y: Int): Int
  }
\`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

export { schema, resolvers }
\`\`\`

\`\`\`js
// server.js
import buildServer from './index.js'

const app = buildServer()

app.listen({ port: 3000 })
\`\`\`
`,title:"Step 1: Solution / 2",level:1,content:`# Step 1: Solution / 2

\`\`\`js
// graphql.js
const schema = \`
  type Query {
    add(x: Int, y: Int): Int
  }
\`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

export { schema, resolvers }
\`\`\`

\`\`\`js
// server.js
import buildServer from './index.js'

const app = buildServer()

app.listen({ port: 3000 })
\`\`\``,frontmatter:{},index:9,start:167,end:196,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:L3,meta:{slide:{raw:`
# Step 1: Trying it out

### In the terminal:

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"{ add(x: 5, y:3) }"}'
\`\`\`

\`\`\`json
{
  "data": {
    "add": 8
  }
}
\`\`\`
`,title:"Step 1: Trying it out",level:1,content:`# Step 1: Trying it out

### In the terminal:

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"{ add(x: 5, y:3) }"}'
\`\`\`

\`\`\`json
{
  "data": {
    "add": 8
  }
}
\`\`\``,frontmatter:{},index:10,start:197,end:217,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:R3,meta:{slide:{raw:'\n<div class="dense">\n\n# Step 2: Loaders \u{1F4BB}\n\nA loader is an utility to avoid the N+1 query problem of GraphQL. Each defined loader will register a resolver that coalesces each of the request and combines them into a single, bulk query.\n\nMoreover, it can also cache the results, so that other parts of the GraphQL do not have to fetch the same data.\n\n- Create a `Person` type with `name` property\n- Create a `Pet` type with `name` and `owner` property (of type `Person`)\n- Expose a `pets` query which returns all pets and, for each pet, its owner, using **GraphQL loaders**\n\n</div>\n',title:"Step 2: Loaders \u{1F4BB}",level:1,content:'<div class="dense">\n\n# Step 2: Loaders \u{1F4BB}\n\nA loader is an utility to avoid the N+1 query problem of GraphQL. Each defined loader will register a resolver that coalesces each of the request and combines them into a single, bulk query.\n\nMoreover, it can also cache the results, so that other parts of the GraphQL do not have to fetch the same data.\n\n- Create a `Person` type with `name` property\n- Create a `Pet` type with `name` and `owner` property (of type `Person`)\n- Expose a `pets` query which returns all pets and, for each pet, its owner, using **GraphQL loaders**\n\n</div>',frontmatter:{},index:11,start:218,end:233,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:U3,meta:{slide:{raw:`
<div class="dense">

- The query should return a JSON object:

\`\`\`json
{
  "data": {
    "pets": [
      {
        "owner": {
          "name": "Jennifer"
        }
      },
      {
        "owner": {
          "name": "Simon"
        }
      }
    ]
  }
}
\`\`\`

</div>
`,content:`<div class="dense">

- The query should return a JSON object:

\`\`\`json
{
  "data": {
    "pets": [
      {
        "owner": {
          "name": "Jennifer"
        }
      },
      {
        "owner": {
          "name": "Simon"
        }
      }
    ]
  }
}
\`\`\`

</div>`,frontmatter:{},index:12,start:234,end:260,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:K3,meta:{slide:{raw:`
# Step 2: Solution / 1

\`\`\`js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers, loaders } from './graphql.js'

export default function buildServer() {
  const server = Fastify(...)

  server.register(mercurius, {
    schema,
    resolvers,
    loaders,
    graphiql: true
  })

  return server
}
\`\`\`
`,title:"Step 2: Solution / 1",level:1,content:`# Step 2: Solution / 1

\`\`\`js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers, loaders } from './graphql.js'

export default function buildServer() {
  const server = Fastify(...)

  server.register(mercurius, {
    schema,
    resolvers,
    loaders,
    graphiql: true
  })

  return server
}
\`\`\``,frontmatter:{},index:13,start:261,end:284,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:X3,meta:{slide:{raw:`
# Step 2: Solution / 2

<div class="two-columns gap-5">

\`\`\`js
// graphql.js
const pets = [
  {
    name: 'Max'
  },
  {
    name: 'Charlie'
  }
]

const owners = {
  Max: {
    name: 'Jennifer'
  },
  Charlie: {
    name: 'Simon'
  }
}
\`\`\`

\`\`\`js
const schema = \`
  type Person {
    name: String!
  }

  type Pet {
    name: String!
    owner: Person
  }

  type Query {
    pets: [Pet]
  }
\`

const resolvers = {
  Query: {
    pets() {
      return pets
    }
  }
}
\`\`\`

</div>
`,title:"Step 2: Solution / 2",level:1,content:`# Step 2: Solution / 2

<div class="two-columns gap-5">

\`\`\`js
// graphql.js
const pets = [
  {
    name: 'Max'
  },
  {
    name: 'Charlie'
  }
]

const owners = {
  Max: {
    name: 'Jennifer'
  },
  Charlie: {
    name: 'Simon'
  }
}
\`\`\`

\`\`\`js
const schema = \`
  type Person {
    name: String!
  }

  type Pet {
    name: String!
    owner: Person
  }

  type Query {
    pets: [Pet]
  }
\`

const resolvers = {
  Query: {
    pets() {
      return pets
    }
  }
}
\`\`\`

</div>`,frontmatter:{},index:14,start:285,end:338,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Z3,meta:{slide:{raw:`
# Step 2: Solution / 3

\`\`\`js
// graphql.js (cont.)
const loaders = {
  Pet: {
    async owner(queries) {
      return queries.map(({ obj: pet }) => owners[pet.name])
    }
  }
}

export { schema, resolvers, loaders }
\`\`\``,title:"Step 2: Solution / 3",level:1,content:`# Step 2: Solution / 3

\`\`\`js
// graphql.js (cont.)
const loaders = {
  Pet: {
    async owner(queries) {
      return queries.map(({ obj: pet }) => owners[pet.name])
    }
  }
}

export { schema, resolvers, loaders }
\`\`\``,frontmatter:{},index:15,start:339,end:354,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:o1,meta:{slide:{raw:`
# Step 2: Trying it out

### In Graphiql

You can navigate to graphql query editor on http://localhost:3000/graphiql

<img style="width: 50%; text-align: center" src="/images/step-02.jpg">
`,title:"Step 2: Trying it out",level:1,content:`# Step 2: Trying it out

### In Graphiql

You can navigate to graphql query editor on http://localhost:3000/graphiql

<img style="width: 50%; text-align: center" src="/images/step-02.jpg">`,frontmatter:{},index:16,start:355,end:364,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:r1,meta:{slide:{raw:'\n<div class="dense">\n\n# Step 3: Executable schema \u{1F4BB}\n\nThe `@graphql-tools/schema` package allows you to create a GraphQL.js [GraphQLSchema](https://graphql.org/graphql-js/type/) instance from GraphQL schema language using the function `makeExecutableSchema`.\n\nBesides common options such as `typeDefs` and `resolvers`, it supports more advanced options to customize the creation of the schema.\n\n- Create an executable schema using `typeDefs` and `resolvers`\n- Use the `@graphql-tools/schema` package to create the executable schema\n- Implement the same "add" functionality as in the earlier step\n\n</div>\n',title:"Step 3: Executable schema \u{1F4BB}",level:1,content:'<div class="dense">\n\n# Step 3: Executable schema \u{1F4BB}\n\nThe `@graphql-tools/schema` package allows you to create a GraphQL.js [GraphQLSchema](https://graphql.org/graphql-js/type/) instance from GraphQL schema language using the function `makeExecutableSchema`.\n\nBesides common options such as `typeDefs` and `resolvers`, it supports more advanced options to customize the creation of the schema.\n\n- Create an executable schema using `typeDefs` and `resolvers`\n- Use the `@graphql-tools/schema` package to create the executable schema\n- Implement the same "add" functionality as in the earlier step\n\n</div>',frontmatter:{},index:17,start:365,end:380,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:c1,meta:{slide:{raw:`
# Step 3: Solution

<div class="one-big-one-small-column gap-5">

\`\`\`js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify(...)

  server.register(mercurius, {
    schema: makeExecutableSchema({ typeDefs, resolvers })
  })

  return server
}
\`\`\`

\`\`\`js
// graphql.js
const typeDefs = \`
  type Query {
    add(x: Int, y: Int): Int
  }
\`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

export { typeDefs, resolvers }
\`\`\`

</div>
`,title:"Step 3: Solution",level:1,content:`# Step 3: Solution

<div class="one-big-one-small-column gap-5">

\`\`\`js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify(...)

  server.register(mercurius, {
    schema: makeExecutableSchema({ typeDefs, resolvers })
  })

  return server
}
\`\`\`

\`\`\`js
// graphql.js
const typeDefs = \`
  type Query {
    add(x: Int, y: Int): Int
  }
\`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

export { typeDefs, resolvers }
\`\`\`

</div>`,frontmatter:{},index:18,start:381,end:424,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:u1,meta:{slide:{raw:`
<div class="dense">

# Step 4: SELECT N+1 \u{1F4BB}

- Implement the same Pet and Owners functionality as before
- Allows to query all pets and its owners by using GraphQL loaders
- Stores the pets and owners in postgres database
- Uses a **single database query** to get owners for all pets

</div>
`,title:"Step 4: SELECT N+1 \u{1F4BB}",level:1,content:`<div class="dense">

# Step 4: SELECT N+1 \u{1F4BB}

- Implement the same Pet and Owners functionality as before
- Allows to query all pets and its owners by using GraphQL loaders
- Stores the pets and owners in postgres database
- Uses a **single database query** to get owners for all pets

</div>`,frontmatter:{},index:19,start:425,end:437,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:h1,meta:{slide:{raw:`
# Step 4: Solution

<div class="two-columns gap-5">

\`\`\`js
export async function ownersByPetNames(db, petNames) {
  const { rows } = await db.query(
    SQL\`
      SELECT owners.*
      FROM owners
      INNER JOIN pets
        ON pets.owner = owners.id
        AND pets.name = ANY(\${petNames})
    \`
  )

  return rows
}
\`\`\`

\`\`\`js
const loaders = {
  Pet: {
    async owner(queries, context) {
      const petNames = queries.map(({ obj }) => obj.name)
      return ownersByPetNames(context.app.pg, petNames)
    }
  }
}
\`\`\`

</div>

\u{1F4A1} For the full code examples and db setup instructions, see the repository
`,title:"Step 4: Solution",level:1,content:`# Step 4: Solution

<div class="two-columns gap-5">

\`\`\`js
export async function ownersByPetNames(db, petNames) {
  const { rows } = await db.query(
    SQL\`
      SELECT owners.*
      FROM owners
      INNER JOIN pets
        ON pets.owner = owners.id
        AND pets.name = ANY(\${petNames})
    \`
  )

  return rows
}
\`\`\`

\`\`\`js
const loaders = {
  Pet: {
    async owner(queries, context) {
      const petNames = queries.map(({ obj }) => obj.name)
      return ownersByPetNames(context.app.pg, petNames)
    }
  }
}
\`\`\`

</div>

\u{1F4A1} For the full code examples and db setup instructions, see the repository`,frontmatter:{},index:20,start:438,end:474,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:g1,meta:{slide:{raw:`
<div class="dense">

# Step 5: Context \u{1F4BB}

Context is an object populated at the server level which is made accessible to resolvers.

- Create a \`User\` type with \`name\` and \`locale\` properties
- Create an in-memory array of \`User\` with different locales
- Create a query called \`getUserByLocale\` returning the first user with \`en\` locale
- Set the property \`locale: 'en'\` in the mercurius context
- Respond with JSON object:

\`\`\`json
{
  "data": {
    "getUserByLocale": {
      "name": "Alice"
    }
  }
}
\`\`\`

</div>
`,title:"Step 5: Context \u{1F4BB}",level:1,content:`<div class="dense">

# Step 5: Context \u{1F4BB}

Context is an object populated at the server level which is made accessible to resolvers.

- Create a \`User\` type with \`name\` and \`locale\` properties
- Create an in-memory array of \`User\` with different locales
- Create a query called \`getUserByLocale\` returning the first user with \`en\` locale
- Set the property \`locale: 'en'\` in the mercurius context
- Respond with JSON object:

\`\`\`json
{
  "data": {
    "getUserByLocale": {
      "name": "Alice"
    }
  }
}
\`\`\`

</div>`,frontmatter:{},index:21,start:475,end:500,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:D1,meta:{slide:{raw:`
# Step 5: Solution

\`\`\`js
const server = Fastify(...)

server.register(mercurius, {
  schema,
  resolvers,
  context: () => ({
    locale: 'en'
  })
})
\`\`\`

\`\`\`js
const resolvers = {
  Query: {
    getUserByLocale(_, __, context) {
      return users.find(u => u.locale === context.locale)
    }
  }
}
\`\`\`
`,title:"Step 5: Solution",level:1,content:`# Step 5: Solution

\`\`\`js
const server = Fastify(...)

server.register(mercurius, {
  schema,
  resolvers,
  context: () => ({
    locale: 'en'
  })
})
\`\`\`

\`\`\`js
const resolvers = {
  Query: {
    getUserByLocale(_, __, context) {
      return users.find(u => u.locale === context.locale)
    }
  }
}
\`\`\``,frontmatter:{},index:22,start:501,end:526,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:w1,meta:{slide:{raw:`
<div class="dense">

# Step 6: Hooks \u{1F4BB}

Hooks are registered with the \`fastify.graphql.addHook\` method and allow you to listen to specific events in the GraphQL request/response lifecycle.

By using hooks you can interact directly with the GraphQL lifecycle of Mercurius.

- Create a query called \`sum\` which returns the sum of two numbers
- Create and print logs for the following hooks:
  - \`preParsing\`
  - \`preValidation\`
  - \`preExecution\`
  - \`onResolution\`
- Enrich the response with an error with the message "foo" in the \`preExecution\` hook

</div>
`,title:"Step 6: Hooks \u{1F4BB}",level:1,content:`<div class="dense">

# Step 6: Hooks \u{1F4BB}

Hooks are registered with the \`fastify.graphql.addHook\` method and allow you to listen to specific events in the GraphQL request/response lifecycle.

By using hooks you can interact directly with the GraphQL lifecycle of Mercurius.

- Create a query called \`sum\` which returns the sum of two numbers
- Create and print logs for the following hooks:
  - \`preParsing\`
  - \`preValidation\`
  - \`preExecution\`
  - \`onResolution\`
- Enrich the response with an error with the message "foo" in the \`preExecution\` hook

</div>`,frontmatter:{},index:23,start:527,end:546,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:k1,meta:{slide:{raw:`
<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "add": 10
  },
  "errors": [
    {
      "message": "foo"
    }
  ]
}
\`\`\`

</div>
`,content:`<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "add": 10
  },
  "errors": [
    {
      "message": "foo"
    }
  ]
}
\`\`\`

</div>`,frontmatter:{},index:24,start:547,end:567,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:C1,meta:{slide:{raw:`
# Step 6: Solution

\`\`\`js
// server.js
app.graphql.addHook('preParsing', async function () {
  app.log.info('preParsing called')
})

app.graphql.addHook('preValidation', async function () {
  app.log.info('preValidation called')
})

app.graphql.addHook('preExecution', async function (schema, document) {
  app.log.info('preExecution called')

  return {
    document,
    errors: [new Error('foo')]
  }
})

app.graphql.addHook('onResolution', async function () {
  app.log.info('onResolution called')
})
\`\`\`
`,title:"Step 6: Solution",level:1,content:`# Step 6: Solution

\`\`\`js
// server.js
app.graphql.addHook('preParsing', async function () {
  app.log.info('preParsing called')
})

app.graphql.addHook('preValidation', async function () {
  app.log.info('preValidation called')
})

app.graphql.addHook('preExecution', async function (schema, document) {
  app.log.info('preExecution called')

  return {
    document,
    errors: [new Error('foo')]
  }
})

app.graphql.addHook('onResolution', async function () {
  app.log.info('onResolution called')
})
\`\`\``,frontmatter:{},index:25,start:568,end:595,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:P1,meta:{slide:{raw:`
# Step 6: Trying it out

<div class="flex-row">

In terminal

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"{ add(x: 5, y:3) }"}'
\`\`\`

</div>

Output

<div class="two-columns gap-5">

\`\`\`bash
preParsing called
preValidation called
preExecution called
onResolution called
\`\`\`

\`\`\`json
{
  "data": {
    "add": 10
  },
  "errors": [
    {
      "message": "foo"
    }
  ]
}
\`\`\`

</div>
`,title:"Step 6: Trying it out",level:1,content:`# Step 6: Trying it out

<div class="flex-row">

In terminal

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"{ add(x: 5, y:3) }"}'
\`\`\`

</div>

Output

<div class="two-columns gap-5">

\`\`\`bash
preParsing called
preValidation called
preExecution called
onResolution called
\`\`\`

\`\`\`json
{
  "data": {
    "add": 10
  },
  "errors": [
    {
      "message": "foo"
    }
  ]
}
\`\`\`

</div>`,frontmatter:{},index:26,start:596,end:638,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:$1,meta:{slide:{raw:'\n<div class="dense">\n\n# Step 7: Error handling \u{1F4BB}\n\n- Create `User` type with `name` and `id` property\n- Create an in-memory array of users of type `User`\n- Create a query `findUser` which accepts an `id` and\n  - If the `id` matches then the corresponding user is returned\n  - If the `id` does not match with any user then an error is thrown with the message `"Invalid User ID"`\n- Add a property `extensions` to the error object with properties:\n  - `code: USER_ID_INVALID`\n  - `id: <query input>`\n- \u{1F4A1} Use Mercurius `ErrorWithProps` to create the error\n\n</div>\n',title:"Step 7: Error handling \u{1F4BB}",level:1,content:'<div class="dense">\n\n# Step 7: Error handling \u{1F4BB}\n\n- Create `User` type with `name` and `id` property\n- Create an in-memory array of users of type `User`\n- Create a query `findUser` which accepts an `id` and\n  - If the `id` matches then the corresponding user is returned\n  - If the `id` does not match with any user then an error is thrown with the message `"Invalid User ID"`\n- Add a property `extensions` to the error object with properties:\n  - `code: USER_ID_INVALID`\n  - `id: <query input>`\n- \u{1F4A1} Use Mercurius `ErrorWithProps` to create the error\n\n</div>',frontmatter:{},index:27,start:639,end:656,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:M1,meta:{slide:{raw:`
<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "findUser": null
  },
  "errors": [
    {
      "message": "Invalid User ID",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["findUser"],
      "extensions": {
        "code": "USER_ID_INVALID",
        "id": "5"
      }
    }
  ]
}
\`\`\`

</div>
`,content:`<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "findUser": null
  },
  "errors": [
    {
      "message": "Invalid User ID",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["findUser"],
      "extensions": {
        "code": "USER_ID_INVALID",
        "id": "5"
      }
    }
  ]
}
\`\`\`

</div>`,frontmatter:{},index:28,start:657,end:688,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:j1,meta:{slide:{raw:`
# Step 7: Solution

\`\`\`js
const resolvers = {
  Query: {
    findUser: (_, { id }) => {
      const user = users[id]

      if (user) {
        return users[id]
      }

      throw new ErrorWithProps('Invalid User ID', {
        id,
        code: 'USER_ID_INVALID'
      })
    }
  }
}
\`\`\`
`,title:"Step 7: Solution",level:1,content:`# Step 7: Solution

\`\`\`js
const resolvers = {
  Query: {
    findUser: (_, { id }) => {
      const user = users[id]

      if (user) {
        return users[id]
      }

      throw new ErrorWithProps('Invalid User ID', {
        id,
        code: 'USER_ID_INVALID'
      })
    }
  }
}
\`\`\``,frontmatter:{},index:29,start:689,end:711,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:N1,meta:{slide:{raw:'\n<div class="dense">\n\n# Step 8: Federation \u{1F4BB}\n\nA GraphQL server can act as a Gateway that composes the schemas of the underlying services into one federated schema and executes queries across the services. Every underlying service must be a GraphQL server that supports the federation.\n\n- Create a Federated GraphQL gateway which listens on port 4000\n- Run and expose to the gateway two GraphQL services on ports 4001 and 4002\n- Service 1 has a `User` type and a `me` query which returns the user\n- Service 2 has a `Post` type and extends `User` with a `posts` array which are the posts of that user\n- Keep an in-memory array of users of the type `User` and posts of type `Post`\n\n</div>\n',title:"Step 8: Federation \u{1F4BB}",level:1,content:'<div class="dense">\n\n# Step 8: Federation \u{1F4BB}\n\nA GraphQL server can act as a Gateway that composes the schemas of the underlying services into one federated schema and executes queries across the services. Every underlying service must be a GraphQL server that supports the federation.\n\n- Create a Federated GraphQL gateway which listens on port 4000\n- Run and expose to the gateway two GraphQL services on ports 4001 and 4002\n- Service 1 has a `User` type and a `me` query which returns the user\n- Service 2 has a `Post` type and extends `User` with a `posts` array which are the posts of that user\n- Keep an in-memory array of users of the type `User` and posts of type `Post`\n\n</div>',frontmatter:{},index:30,start:712,end:727,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:H1,meta:{slide:{raw:`
<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "me": {
      "name": "John",
      "posts": [
        {
          "id": "p1",
          "title": "Post 1",
          "content": "Content 1"
        },
        {
          "id": "p3",
          "title": "Post 3",
          "content": "Content 3"
        }
      ]
    }
  }
}
\`\`\`

</div>
`,content:`<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "me": {
      "name": "John",
      "posts": [
        {
          "id": "p1",
          "title": "Post 1",
          "content": "Content 1"
        },
        {
          "id": "p3",
          "title": "Post 3",
          "content": "Content 3"
        }
      ]
    }
  }
}
\`\`\`

</div>`,frontmatter:{},index:31,start:728,end:757,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Q1,meta:{slide:{raw:`
# Step 8: Solution / 1

<div class="two-columns gap-5">

\`\`\`js
// server.js
...
await createService(
  4001,
  service1.schema,
  service1.resolvers
)
await createService(
  4002,
  service2.schema,
  service2.resolvers
)

const gateway = buildGateway()
await gateway.listen({ port: 4000 })
...
\`\`\`

\`\`\`js
// index.js
export default function buildGateway() {
  const gateway = Fastify(...)
  gateway.register(mercurius, {
    graphiql: true,
    jit: 1,
    gateway: {
      services: [
        {
          name: 'user',
          url: 'http://localhost:4001/graphql'
        },
        {
          name: 'post',
          url: 'http://localhost:4002/graphql'
        }
      ]
    }
  })

  return gateway
}
\`\`\`

</div>
`,title:"Step 8: Solution / 1",level:1,content:`# Step 8: Solution / 1

<div class="two-columns gap-5">

\`\`\`js
// server.js
...
await createService(
  4001,
  service1.schema,
  service1.resolvers
)
await createService(
  4002,
  service2.schema,
  service2.resolvers
)

const gateway = buildGateway()
await gateway.listen({ port: 4000 })
...
\`\`\`

\`\`\`js
// index.js
export default function buildGateway() {
  const gateway = Fastify(...)
  gateway.register(mercurius, {
    graphiql: true,
    jit: 1,
    gateway: {
      services: [
        {
          name: 'user',
          url: 'http://localhost:4001/graphql'
        },
        {
          name: 'post',
          url: 'http://localhost:4002/graphql'
        }
      ]
    }
  })

  return gateway
}
\`\`\`

</div>`,frontmatter:{},index:32,start:758,end:809,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Y1,meta:{slide:{raw:`
# Step 8: Solution / 2

\`\`\`js
// services/service.js
const createService = async (port, schema, resolvers) => {
  const service = Fastify(...)

  service.register(mercurius, {
    schema,
    resolvers,
    federationMetadata: true,
    graphiql: true,
    jit: 1
  })

  await service.listen({ port })
  
  return service
}
\`\`\`



> \u{1F4A1} see service1 and service2 implementations in the repo
`,title:"Step 8: Solution / 2",level:1,content:`# Step 8: Solution / 2

\`\`\`js
// services/service.js
const createService = async (port, schema, resolvers) => {
  const service = Fastify(...)

  service.register(mercurius, {
    schema,
    resolvers,
    federationMetadata: true,
    graphiql: true,
    jit: 1
  })

  await service.listen({ port })
  
  return service
}
\`\`\`



> \u{1F4A1} see service1 and service2 implementations in the repo`,frontmatter:{},index:33,start:810,end:836,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:ev,meta:{slide:{raw:`
# Step 9: Variables \u{1F4BB}

<div class="dense">

- Review the \`add\` functionality implemented before
- The \`add\` function is supplied ith dynamic parameters<br/>\`($x: Int!, $y: Int!)\`
- The inputs to the \`add\` function should be passed as query variables, e.g <br/>\`{ "x": 3, "y": 5 }\`
- The query should return something similar to:

\`\`\`json
{
  "data": {
    "add": 8
  }
}
\`\`\`

</div>
`,title:"Step 9: Variables \u{1F4BB}",level:1,content:`# Step 9: Variables \u{1F4BB}

<div class="dense">

- Review the \`add\` functionality implemented before
- The \`add\` function is supplied ith dynamic parameters<br/>\`($x: Int!, $y: Int!)\`
- The inputs to the \`add\` function should be passed as query variables, e.g <br/>\`{ "x": 3, "y": 5 }\`
- The query should return something similar to:

\`\`\`json
{
  "data": {
    "add": 8
  }
}
\`\`\`

</div>`,frontmatter:{},index:34,start:837,end:857,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:ov,meta:{slide:{raw:`
# Step 9: Solution

\`\`\`js
const schema = \`
  type Query {
    add(x: Int, y: Int): Int
  }
\`

const resolvers = {
  add: async ({ x, y }) => x + y
}
\`\`\`

> \u{1F4A1} The implementation is the same as before
`,title:"Step 9: Solution",level:1,content:`# Step 9: Solution

\`\`\`js
const schema = \`
  type Query {
    add(x: Int, y: Int): Int
  }
\`

const resolvers = {
  add: async ({ x, y }) => x + y
}
\`\`\`

> \u{1F4A1} The implementation is the same as before`,frontmatter:{},index:35,start:858,end:875,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:pv,meta:{slide:{raw:`
# Step 9: Trying it out

In terminal

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"query AddQuery ($x: Int!, $y: Int!) { add(x: $x, y: $y) }","variables":{"x":3,"y":5},"operationName":"AddQuery"}'
\`\`\`

Output

\`\`\`json
{
  "data": {
    "add": 8
  }
}
\`\`\`
`,title:"Step 9: Trying it out",level:1,content:`# Step 9: Trying it out

In terminal

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"query AddQuery ($x: Int!, $y: Int!) { add(x: $x, y: $y) }","variables":{"x":3,"y":5},"operationName":"AddQuery"}'
\`\`\`

Output

\`\`\`json
{
  "data": {
    "add": 8
  }
}
\`\`\``,frontmatter:{},index:36,start:876,end:898,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:yv,meta:{slide:{raw:'\n<div class="dense">\n\n# Step 10: Fragments \u{1F4BB}\n\nCreate a GraphQL server using mercurius which:\n\n- Has `User` type with `id`, `name`, `age` and `level` properties\n- Has two Query methods named `getNoviceUsers` and `getAdvancedUsers` which return type `User`\n  - `getNoviceUsers` query returns users with `level: novice`\n  - `getAdvancedUsers` query returns users with `level: advanced`\n- Query both methods using a fragment on the type `User`\n\n</div>\n',title:"Step 10: Fragments \u{1F4BB}",level:1,content:'<div class="dense">\n\n# Step 10: Fragments \u{1F4BB}\n\nCreate a GraphQL server using mercurius which:\n\n- Has `User` type with `id`, `name`, `age` and `level` properties\n- Has two Query methods named `getNoviceUsers` and `getAdvancedUsers` which return type `User`\n  - `getNoviceUsers` query returns users with `level: novice`\n  - `getAdvancedUsers` query returns users with `level: advanced`\n- Query both methods using a fragment on the type `User`\n\n</div>',frontmatter:{},index:37,start:899,end:914,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:fv,meta:{slide:{raw:`
<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "getNoviceUsers": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 32,
        "level": "novice"
      }
    ],
    "getAdvancedUsers": [
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 28,
        "level": "advanced"
      }
    ]
  }
}
\`\`\`

</div>
`,content:`<div class="dense">

- The query should return something similar to:

\`\`\`json
{
  "data": {
    "getNoviceUsers": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 32,
        "level": "novice"
      }
    ],
    "getAdvancedUsers": [
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 28,
        "level": "advanced"
      }
    ]
  }
}
\`\`\`

</div>`,frontmatter:{},index:38,start:915,end:945,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:gv,meta:{slide:{raw:`
# Step 10: Solution

<div class="middle-flex">

\`\`\`js
const schema = \`
  type User {
    id: Int!
    name: String!
    age: Int!
    level: String!
  }

  type Query {
    getNoviceUsers: [User]
    getAdvancedUsers: [User]
  }
\`
const resolvers = {
  Query: {
    getNoviceUsers() {
      return users.filter(user => user.level === 'novice')
    },
    getAdvancedUsers() {
      return users.filter(user => user.level === 'advanced')
    }
  }
}
\`\`\`

</div>
`,title:"Step 10: Solution",level:1,content:`# Step 10: Solution

<div class="middle-flex">

\`\`\`js
const schema = \`
  type User {
    id: Int!
    name: String!
    age: Int!
    level: String!
  }

  type Query {
    getNoviceUsers: [User]
    getAdvancedUsers: [User]
  }
\`
const resolvers = {
  Query: {
    getNoviceUsers() {
      return users.filter(user => user.level === 'novice')
    },
    getAdvancedUsers() {
      return users.filter(user => user.level === 'advanced')
    }
  }
}
\`\`\`

</div>`,frontmatter:{},index:39,start:946,end:979,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:vv,meta:{slide:{raw:`
<div class="middle-flex">

# Step 10: Trying it out

### In terminal

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"{ getNoviceUsers { ...userFields } getAdvancedUsers { ...userFields } } fragment userFields on User { id  name age level }"}'
\`\`\`

\`\`\`json
{
  "data": {
    "getNoviceUsers": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 32,
        "level": "novice"
      }
    ],
    "getAdvancedUsers": [
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 28,
        "level": "advanced"
      }
    ]
  }
}
\`\`\`

</div>
`,title:"Step 10: Trying it out",level:1,content:`<div class="middle-flex">

# Step 10: Trying it out

### In terminal

\`\`\`bash
curl --request POST \\
  --url http://localhost:3000/graphql \\
  --header 'Content-Type: application/json' \\
  --data '{"query":"{ getNoviceUsers { ...userFields } getAdvancedUsers { ...userFields } } fragment userFields on User { id  name age level }"}'
\`\`\`

\`\`\`json
{
  "data": {
    "getNoviceUsers": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 32,
        "level": "novice"
      }
    ],
    "getAdvancedUsers": [
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 28,
        "level": "advanced"
      }
    ]
  }
}
\`\`\`

</div>`,frontmatter:{},index:40,start:980,end:1019,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Dv,meta:{slide:{raw:`
<div class="middle-flex">

# \u{1F3C6} Write Tests \u{1F3C6}

> \u{1F4A1} inspire from the code in the completed steps

</div>
`,title:"\u{1F3C6} Write Tests \u{1F3C6}",level:1,content:`<div class="middle-flex">

# \u{1F3C6} Write Tests \u{1F3C6}

> \u{1F4A1} inspire from the code in the completed steps

</div>`,frontmatter:{},index:41,start:1020,end:1029,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:wv,meta:{slide:{raw:`
<div class="middle-flex big">

# Thanks For Having Us!

## \u{1F44F}\u{1F44F}\u{1F44F}

<img class=logo-bottom src="/images/nearform.svg">

</div>
`,title:"Thanks For Having Us!",level:1,content:`<div class="middle-flex big">

# Thanks For Having Us!

## \u{1F44F}\u{1F44F}\u{1F44F}

<img class=logo-bottom src="/images/nearform.svg">

</div>`,frontmatter:{},index:42,start:1030,end:1041,notesHTML:"",filepath:"/home/runner/work/the-graphql-workshop/the-graphql-workshop/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",component:t3,meta:{layout:"end"}}];const Re=_v,kv=[{name:"play",path:"/",component:WA,children:[...Re]},{name:"print",path:"/print",component:JA},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>nn(()=>import("./Presenter.d5e86a09.js"),["assets/Presenter.d5e86a09.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.38abb6e4.js"]),beforeEnter:s=>{if(!mt.remote||mt.remote===s.query.password)return!0;if(mt.remote&&s.query.password===void 0){const t=prompt("Enter password");if(mt.remote===t)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],fs=O6({history:Gh("/the-graphql-workshop/"),routes:kv});function Bv(s,t,{mode:n="replace"}={}){return z({get(){const o=fs.currentRoute.value.query[s];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ke(()=>{fs[v(n)]({query:Ye(De({},fs.currentRoute.value.query),{[s]:o})})})}})}const du=N(0);Ke(()=>{fs.afterEach(async()=>{await Ke(),du.value+=1})});const Ks=z(()=>fs.currentRoute.value),sa=z(()=>Ks.value.query.print!==void 0),xv=z(()=>Ks.value.query.print==="clicks"),js=z(()=>Ks.value.query.embedded!==void 0),$s=z(()=>Ks.value.path.startsWith("/presenter")),Cn=z(()=>sa.value&&!xv.value),hr=z(()=>Ks.value.query.password),Cv=z(()=>!$s.value&&(!we.remote||hr.value===we.remote)),Xi=Bv("clicks","0"),fu=z(()=>Re.length-1),zv=z(()=>Ks.value.path),Ne=z(()=>parseInt(zv.value.split(/\//g).slice(-1)[0])||1);z(()=>ol(Ne.value));const ps=z(()=>Re.find(s=>s.path===`${Ne.value}`));z(()=>{var s,t,n;return(n=(t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:n.id});z(()=>{var s,t;return(t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.layout});const xl=z(()=>Re.find(s=>s.path===`${Math.min(Re.length,Ne.value+1)}`)),Sv=z(()=>{var s,t;return du.value,((t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.__clicksElements)||[]}),Ss=z({get(){if(Cn.value)return 99999;let s=+(Xi.value||0);return isNaN(s)&&(s=0),s},set(s){Xi.value=s.toString()}}),qo=z(()=>{var s,t,n;return+((n=(t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.clicks)!=null?n:Sv.value.length)}),Fv=z(()=>Ne.value<Re.length-1||Ss.value<qo.value),Tv=z(()=>Ne.value>1||Ss.value>0),Pv=z(()=>Re.filter(s=>{var t,n;return(n=(t=s.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((s,t)=>(ta(s,t),s),[])),Ov=z(()=>na(Pv.value,ps.value));z(()=>oa(Ov.value));function ot(){qo.value<=Ss.value?Un():Ss.value+=1}async function lt(){Ss.value<=0?await Hn():Ss.value-=1}function ol(s){return $s.value?`/presenter/${s}`:`/${s}`}function Un(){const s=Math.min(Re.length,Ne.value+1);return en(s)}async function Hn(s=!0){const t=Math.max(1,Ne.value-1);await en(t),s&&qo.value&&fs.replace({query:Ye(De({},Ks.value.query),{clicks:qo.value})})}function en(s,t){return fs.push({path:ol(s),query:Ye(De({},Ks.value.query),{clicks:t})})}function $v(s){const t=N(0),{direction:n,distanceX:o,distanceY:l}=Bh(s,{onSwipeStart(a){a.pointerType==="touch"&&(Rn.value||(t.value=nr()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!t.value||Rn.value)return;const i=Math.abs(o.value),c=Math.abs(l.value);i/window.innerWidth>.3||i>100?n.value===Us.LEFT?ot():lt():(c/window.innerHeight>.4||c>200)&&(n.value===Us.DOWN?Hn():Un())}})}async function mr(){const{saveAs:s}=await nn(()=>import("./FileSaver.min.4f92ed14.js").then(function(t){return t.F}),[]);s(zp(we.download)?we.download:we.exportFilename?`${we.exportFilename}.pdf`:"/the-graphql-workshop/slidev-exported.pdf",`${we.title}.pdf`)}async function qv(s){var t,n;if(s==null){const o=(n=(t=ps.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;s=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(s)}`),!0}function ta(s,t,n=1){var l,a,i,c,p;const o=(a=(l=t.meta)==null?void 0:l.slide)==null?void 0:a.level;o&&o>n&&s.length>0?ta(s[s.length-1].children,t,n+1):s.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(p=(c=t.meta)==null?void 0:c.slide)==null?void 0:p.title})}function na(s,t,n=!1,o){return s.map(l=>{const a=Ye(De({},l),{active:l.path===(t==null?void 0:t.path),hasActiveParent:n});return a.children.length>0&&(a.children=na(a.children,t,a.active||a.hasActiveParent,a)),o&&(a.active||a.activeParent)&&(o.activeParent=!0),a})}function oa(s,t=1){return s.filter(n=>!n.hideInToc).map(n=>Ye(De({},n),{children:oa(n.children,t+1)}))}function Mv(){const s=we.titleTemplate.replace("%s",we.title||"Slidev");s9({title:s}),c9(`${s} - shared`),d9(`${s} - drawings`);function t(){$s.value&&(ri("page",+Ne.value),ri("clicks",Ss.value))}fs.afterEach(t),ue(Ss,t),p9(n=>{(+n.page!=+Ne.value||Ss.value!==n.clicks)&&fs.replace({path:ol(n.page),query:Ye(De({},fs.currentRoute.value.query),{clicks:n.clicks||0})})})}const Iv=Te({__name:"App",setup(s){return L(U),Mv(),(t,n)=>{const o=Kl("RouterView"),l=Kl("StarportCarrier");return w(),K(ke,null,[J(o),J(l)],64)}}});function Cl(s){return s!==null&&typeof s=="object"}function gr(s,t,n=".",o){if(!Cl(t))return gr(s,{},n,o);const l=Object.assign({},t);for(const a in s){if(a==="__proto__"||a==="constructor")continue;const i=s[a];i!=null&&(o&&o(l,a,i,n)||(Array.isArray(i)&&Array.isArray(l[a])?l[a]=i.concat(l[a]):Cl(i)&&Cl(l[a])?l[a]=gr(i,l[a],(n?`${n}.`:"")+a.toString(),o):l[a]=i))}return l}function Lv(s){return(...t)=>t.reduce((n,o)=>gr(n,o,"",s),{})}const jv=Lv();var Gi;const Rv=typeof window!="undefined";Rv&&((Gi=window==null?void 0:window.navigator)==null?void 0:Gi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Nv(s){xt()&&el(s)}const hu=1/60*1e3,Uv=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),mu=typeof window!="undefined"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(Uv()),hu);function Hv(s){let t=[],n=[],o=0,l=!1,a=!1;const i=new WeakSet,c={schedule:(p,u=!1,y=!1)=>{const f=y&&l,d=f?t:n;return u&&i.add(p),d.indexOf(p)===-1&&(d.push(p),f&&l&&(o=t.length)),p},cancel:p=>{const u=n.indexOf(p);u!==-1&&n.splice(u,1),i.delete(p)},process:p=>{if(l){a=!0;return}if(l=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const y=t[u];y(p),i.has(y)&&(c.schedule(y),s())}l=!1,a&&(a=!1,c.process(p))}};return c}const Vv=40;let Ar=!0,Vn=!1,vr=!1;const Wt={delta:0,timestamp:0},Gn=["read","update","preRender","render","postRender"],ll=Gn.reduce((s,t)=>(s[t]=Hv(()=>Vn=!0),s),{}),Yi=Gn.reduce((s,t)=>{const n=ll[t];return s[t]=(o,l=!1,a=!1)=>(Vn||Qv(),n.schedule(o,l,a)),s},{});Gn.reduce((s,t)=>(s[t]=ll[t].cancel,s),{});Gn.reduce((s,t)=>(s[t]=()=>ll[t].process(Wt),s),{});const Kv=s=>ll[s].process(Wt),gu=s=>{Vn=!1,Wt.delta=Ar?hu:Math.max(Math.min(s-Wt.timestamp,Vv),1),Wt.timestamp=s,vr=!0,Gn.forEach(Kv),vr=!1,Vn&&(Ar=!1,mu(gu))},Qv=()=>{Vn=!0,Ar=!0,vr||mu(gu)},Wv=()=>Wt;function Au(s,t){var n={};for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(s);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(s,o[l])&&(n[o[l]]=s[o[l]]);return n}var Xv=function(){},Zi=function(){};const br=(s,t,n)=>Math.min(Math.max(n,s),t),zl=.001,Gv=.01,Ji=10,Yv=.05,Zv=1;function Jv({duration:s=800,bounce:t=.25,velocity:n=0,mass:o=1}){let l,a;Xv(s<=Ji*1e3);let i=1-t;i=br(Yv,Zv,i),s=br(Gv,Ji,s/1e3),i<1?(l=u=>{const y=u*i,f=y*s,d=y-n,h=Dr(u,i),g=Math.exp(-f);return zl-d/h*g},a=u=>{const f=u*i*s,d=f*n+n,h=Math.pow(i,2)*Math.pow(u,2)*s,g=Math.exp(-f),D=Dr(Math.pow(u,2),i);return(-l(u)+zl>0?-1:1)*((d-h)*g)/D}):(l=u=>{const y=Math.exp(-u*s),f=(u-n)*s+1;return-zl+y*f},a=u=>{const y=Math.exp(-u*s),f=(n-u)*(s*s);return y*f});const c=5/s,p=s0(l,a,c);if(s=s*1e3,isNaN(p))return{stiffness:100,damping:10,duration:s};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:i*2*Math.sqrt(o*u),duration:s}}}const e0=12;function s0(s,t,n){let o=n;for(let l=1;l<e0;l++)o=o-s(o)/t(o);return o}function Dr(s,t){return s*Math.sqrt(1-t*t)}const t0=["duration","bounce"],n0=["stiffness","damping","mass"];function ec(s,t){return t.some(n=>s[n]!==void 0)}function o0(s){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},s);if(!ec(s,n0)&&ec(s,t0)){const n=Jv(s);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function la(s){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:l}=s,a=Au(s,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:c,damping:p,mass:u,velocity:y,duration:f,isResolvedFromDuration:d}=o0(a),h=sc,g=sc;function D(){const b=y?-(y/1e3):0,x=n-t,_=p/(2*Math.sqrt(c*u)),k=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(n-t)/100,.4)),_<1){const B=Dr(k,_);h=M=>{const P=Math.exp(-_*k*M);return n-P*((b+_*k*x)/B*Math.sin(B*M)+x*Math.cos(B*M))},g=M=>{const P=Math.exp(-_*k*M);return _*k*P*(Math.sin(B*M)*(b+_*k*x)/B+x*Math.cos(B*M))-P*(Math.cos(B*M)*(b+_*k*x)-B*x*Math.sin(B*M))}}else if(_===1)h=B=>n-Math.exp(-k*B)*(x+(b+k*x)*B);else{const B=k*Math.sqrt(_*_-1);h=M=>{const P=Math.exp(-_*k*M),H=Math.min(B*M,300);return n-P*((b+_*k*x)*Math.sinh(H)+B*x*Math.cosh(H))/B}}}return D(),{next:b=>{const x=h(b);if(d)i.done=b>=f;else{const _=g(b)*1e3,k=Math.abs(_)<=o,B=Math.abs(n-x)<=l;i.done=k&&B}return i.value=i.done?n:x,i},flipTarget:()=>{y=-y,[t,n]=[n,t],D()}}}la.needsInterpolation=(s,t)=>typeof s=="string"||typeof t=="string";const sc=s=>0,vu=(s,t,n)=>{const o=t-s;return o===0?1:(n-s)/o},ra=(s,t,n)=>-n*s+n*t+s,bu=(s,t)=>n=>Math.max(Math.min(n,t),s),zn=s=>s%1?Number(s.toFixed(5)):s,Mo=/(-)?([\d]*\.?[\d])+/g,Er=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,l0=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Yn(s){return typeof s=="string"}const rl={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},Du=Object.assign(Object.assign({},rl),{transform:bu(0,1)});Object.assign(Object.assign({},rl),{default:1});const r0=s=>({test:t=>Yn(t)&&t.endsWith(s)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${s}`}),Sn=r0("%");Object.assign(Object.assign({},Sn),{parse:s=>Sn.parse(s)/100,transform:s=>Sn.transform(s*100)});const aa=(s,t)=>n=>Boolean(Yn(n)&&l0.test(n)&&n.startsWith(s)||t&&Object.prototype.hasOwnProperty.call(n,t)),Eu=(s,t,n)=>o=>{if(!Yn(o))return o;const[l,a,i,c]=o.match(Mo);return{[s]:parseFloat(l),[t]:parseFloat(a),[n]:parseFloat(i),alpha:c!==void 0?parseFloat(c):1}},At={test:aa("hsl","hue"),parse:Eu("hue","saturation","lightness"),transform:({hue:s,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(s)+", "+Sn.transform(zn(t))+", "+Sn.transform(zn(n))+", "+zn(Du.transform(o))+")"},a0=bu(0,255),Sl=Object.assign(Object.assign({},rl),{transform:s=>Math.round(a0(s))}),Js={test:aa("rgb","red"),parse:Eu("red","green","blue"),transform:({red:s,green:t,blue:n,alpha:o=1})=>"rgba("+Sl.transform(s)+", "+Sl.transform(t)+", "+Sl.transform(n)+", "+zn(Du.transform(o))+")"};function i0(s){let t="",n="",o="",l="";return s.length>5?(t=s.substr(1,2),n=s.substr(3,2),o=s.substr(5,2),l=s.substr(7,2)):(t=s.substr(1,1),n=s.substr(2,1),o=s.substr(3,1),l=s.substr(4,1),t+=t,n+=n,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const wr={test:aa("#"),parse:i0,transform:Js.transform},al={test:s=>Js.test(s)||wr.test(s)||At.test(s),parse:s=>Js.test(s)?Js.parse(s):At.test(s)?At.parse(s):wr.parse(s),transform:s=>Yn(s)?s:s.hasOwnProperty("red")?Js.transform(s):At.transform(s)},wu="${c}",_u="${n}";function c0(s){var t,n,o,l;return isNaN(s)&&Yn(s)&&((n=(t=s.match(Mo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((l=(o=s.match(Er))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function ku(s){typeof s=="number"&&(s=`${s}`);const t=[];let n=0;const o=s.match(Er);o&&(n=o.length,s=s.replace(Er,wu),t.push(...o.map(al.parse)));const l=s.match(Mo);return l&&(s=s.replace(Mo,_u),t.push(...l.map(rl.parse))),{values:t,numColors:n,tokenised:s}}function Bu(s){return ku(s).values}function xu(s){const{values:t,numColors:n,tokenised:o}=ku(s),l=t.length;return a=>{let i=o;for(let c=0;c<l;c++)i=i.replace(c<n?wu:_u,c<n?al.transform(a[c]):zn(a[c]));return i}}const p0=s=>typeof s=="number"?0:s;function u0(s){const t=Bu(s);return xu(s)(t.map(p0))}const Cu={test:c0,parse:Bu,createTransformer:xu,getAnimatableNone:u0};function Fl(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*(2/3-n)*6:s}function tc({hue:s,saturation:t,lightness:n,alpha:o}){s/=360,t/=100,n/=100;let l=0,a=0,i=0;if(!t)l=a=i=n;else{const c=n<.5?n*(1+t):n+t-n*t,p=2*n-c;l=Fl(p,c,s+1/3),a=Fl(p,c,s),i=Fl(p,c,s-1/3)}return{red:Math.round(l*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:o}}const y0=(s,t,n)=>{const o=s*s,l=t*t;return Math.sqrt(Math.max(0,n*(l-o)+o))},d0=[wr,Js,At],nc=s=>d0.find(t=>t.test(s)),zu=(s,t)=>{let n=nc(s),o=nc(t),l=n.parse(s),a=o.parse(t);n===At&&(l=tc(l),n=Js),o===At&&(a=tc(a),o=Js);const i=Object.assign({},l);return c=>{for(const p in i)p!=="alpha"&&(i[p]=y0(l[p],a[p],c));return i.alpha=ra(l.alpha,a.alpha,c),n.transform(i)}},f0=s=>typeof s=="number",h0=(s,t)=>n=>t(s(n)),Su=(...s)=>s.reduce(h0);function Fu(s,t){return f0(s)?n=>ra(s,t,n):al.test(s)?zu(s,t):Pu(s,t)}const Tu=(s,t)=>{const n=[...s],o=n.length,l=s.map((a,i)=>Fu(a,t[i]));return a=>{for(let i=0;i<o;i++)n[i]=l[i](a);return n}},m0=(s,t)=>{const n=Object.assign(Object.assign({},s),t),o={};for(const l in n)s[l]!==void 0&&t[l]!==void 0&&(o[l]=Fu(s[l],t[l]));return l=>{for(const a in o)n[a]=o[a](l);return n}};function oc(s){const t=Cu.parse(s),n=t.length;let o=0,l=0,a=0;for(let i=0;i<n;i++)o||typeof t[i]=="number"?o++:t[i].hue!==void 0?a++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:a}}const Pu=(s,t)=>{const n=Cu.createTransformer(t),o=oc(s),l=oc(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Su(Tu(o.parsed,l.parsed),n):i=>`${i>0?t:s}`},g0=(s,t)=>n=>ra(s,t,n);function A0(s){if(typeof s=="number")return g0;if(typeof s=="string")return al.test(s)?zu:Pu;if(Array.isArray(s))return Tu;if(typeof s=="object")return m0}function v0(s,t,n){const o=[],l=n||A0(s[0]),a=s.length-1;for(let i=0;i<a;i++){let c=l(s[i],s[i+1]);if(t){const p=Array.isArray(t)?t[i]:t;c=Su(p,c)}o.push(c)}return o}function b0([s,t],[n]){return o=>n(vu(s,t,o))}function D0(s,t){const n=s.length,o=n-1;return l=>{let a=0,i=!1;if(l<=s[0]?i=!0:l>=s[o]&&(a=o-1,i=!0),!i){let p=1;for(;p<n&&!(s[p]>l||p===o);p++);a=p-1}const c=vu(s[a],s[a+1],l);return t[a](c)}}function Ou(s,t,{clamp:n=!0,ease:o,mixer:l}={}){const a=s.length;Zi(a===t.length),Zi(!o||!Array.isArray(o)||o.length===a-1),s[0]>s[a-1]&&(s=[].concat(s),t=[].concat(t),s.reverse(),t.reverse());const i=v0(t,o,l),c=a===2?b0(s,i):D0(s,i);return n?p=>c(br(s[0],s[a-1],p)):c}const il=s=>t=>1-s(1-t),ia=s=>t=>t<=.5?s(2*t)/2:(2-s(2*(1-t)))/2,E0=s=>t=>Math.pow(t,s),$u=s=>t=>t*t*((s+1)*t-s),w0=s=>{const t=$u(s);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},qu=1.525,_0=4/11,k0=8/11,B0=9/10,Mu=s=>s,ca=E0(2),x0=il(ca),Iu=ia(ca),Lu=s=>1-Math.sin(Math.acos(s)),ju=il(Lu),C0=ia(ju),pa=$u(qu),z0=il(pa),S0=ia(pa),F0=w0(qu),T0=4356/361,P0=35442/1805,O0=16061/1805,Io=s=>{if(s===1||s===0)return s;const t=s*s;return s<_0?7.5625*t:s<k0?9.075*t-9.9*s+3.4:s<B0?T0*t-P0*s+O0:10.8*s*s-20.52*s+10.72},$0=il(Io),q0=s=>s<.5?.5*(1-Io(1-s*2)):.5*Io(s*2-1)+.5;function M0(s,t){return s.map(()=>t||Iu).splice(0,s.length-1)}function I0(s){const t=s.length;return s.map((n,o)=>o!==0?o/(t-1):0)}function L0(s,t){return s.map(n=>n*t)}function Eo({from:s=0,to:t=1,ease:n,offset:o,duration:l=300}){const a={done:!1,value:s},i=Array.isArray(t)?t:[s,t],c=L0(o&&o.length===i.length?o:I0(i),l);function p(){return Ou(c,i,{ease:Array.isArray(n)?n:M0(i,n)})}let u=p();return{next:y=>(a.value=u(y),a.done=y>=l,a),flipTarget:()=>{i.reverse(),u=p()}}}function j0({velocity:s=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:a}){const i={done:!1,value:t};let c=n*s;const p=t+c,u=a===void 0?p:a(p);return u!==p&&(c=u-t),{next:y=>{const f=-c*Math.exp(-y/o);return i.done=!(f>l||f<-l),i.value=i.done?u:u+f,i},flipTarget:()=>{}}}const lc={keyframes:Eo,spring:la,decay:j0};function R0(s){if(Array.isArray(s.to))return Eo;if(lc[s.type])return lc[s.type];const t=new Set(Object.keys(s));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Eo:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?la:Eo}const Ru=1/60*1e3,N0=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Nu=typeof window!="undefined"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(N0()),Ru);function U0(s){let t=[],n=[],o=0,l=!1,a=!1;const i=new WeakSet,c={schedule:(p,u=!1,y=!1)=>{const f=y&&l,d=f?t:n;return u&&i.add(p),d.indexOf(p)===-1&&(d.push(p),f&&l&&(o=t.length)),p},cancel:p=>{const u=n.indexOf(p);u!==-1&&n.splice(u,1),i.delete(p)},process:p=>{if(l){a=!0;return}if(l=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const y=t[u];y(p),i.has(y)&&(c.schedule(y),s())}l=!1,a&&(a=!1,c.process(p))}};return c}const H0=40;let _r=!0,Kn=!1,kr=!1;const Xt={delta:0,timestamp:0},Zn=["read","update","preRender","render","postRender"],cl=Zn.reduce((s,t)=>(s[t]=U0(()=>Kn=!0),s),{}),V0=Zn.reduce((s,t)=>{const n=cl[t];return s[t]=(o,l=!1,a=!1)=>(Kn||W0(),n.schedule(o,l,a)),s},{}),K0=Zn.reduce((s,t)=>(s[t]=cl[t].cancel,s),{});Zn.reduce((s,t)=>(s[t]=()=>cl[t].process(Xt),s),{});const Q0=s=>cl[s].process(Xt),Uu=s=>{Kn=!1,Xt.delta=_r?Ru:Math.max(Math.min(s-Xt.timestamp,H0),1),Xt.timestamp=s,kr=!0,Zn.forEach(Q0),kr=!1,Kn&&(_r=!1,Nu(Uu))},W0=()=>{Kn=!0,_r=!0,kr||Nu(Uu)},X0=()=>Xt;function Hu(s,t,n=0){return s-t-n}function G0(s,t,n=0,o=!0){return o?Hu(t+-s,t,n):t-(s-t)+n}function Y0(s,t,n,o){return o?s>=t+n:s<=-n}const Z0=s=>{const t=({delta:n})=>s(n);return{start:()=>V0.update(t,!0),stop:()=>K0.update(t)}};function Vu(s){var t,n,{from:o,autoplay:l=!0,driver:a=Z0,elapsed:i=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:y,onStop:f,onComplete:d,onRepeat:h,onUpdate:g}=s,D=Au(s,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=D,x,_=0,k=D.duration,B,M=!1,P=!0,H;const ae=R0(D);!((n=(t=ae).needsInterpolation)===null||n===void 0)&&n.call(t,o,b)&&(H=Ou([0,100],[o,b],{clamp:!1}),o=0,b=100);const ye=ae(Object.assign(Object.assign({},D),{from:o,to:b}));function he(){_++,p==="reverse"?(P=_%2===0,i=G0(i,k,u,P)):(i=Hu(i,k,u),p==="mirror"&&ye.flipTarget()),M=!1,h&&h()}function Ae(){x.stop(),d&&d()}function $e(Qe){if(P||(Qe=-Qe),i+=Qe,!M){const Be=ye.next(Math.max(0,i));B=Be.value,H&&(B=H(B)),M=P?Be.done:i<=0}g==null||g(B),M&&(_===0&&(k!=null||(k=i)),_<c?Y0(i,k,u,P)&&he():Ae())}function Le(){y==null||y(),x=a($e),x.start()}return l&&Le(),{stop:()=>{f==null||f(),x.stop()}}}function Ku(s,t){return t?s*(1e3/t):0}function J0({from:s=0,velocity:t=0,min:n,max:o,power:l=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:y,onUpdate:f,onComplete:d,onStop:h}){let g;function D(k){return n!==void 0&&k<n||o!==void 0&&k>o}function b(k){return n===void 0?o:o===void 0||Math.abs(n-k)<Math.abs(o-k)?n:o}function x(k){g==null||g.stop(),g=Vu(Object.assign(Object.assign({},k),{driver:y,onUpdate:B=>{var M;f==null||f(B),(M=k.onUpdate)===null||M===void 0||M.call(k,B)},onComplete:d,onStop:h}))}function _(k){x(Object.assign({type:"spring",stiffness:i,damping:c,restDelta:p},k))}if(D(s))_({from:s,velocity:t,to:b(s)});else{let k=l*t+s;typeof u!="undefined"&&(k=u(k));const B=b(k),M=B===n?-1:1;let P,H;const ae=ye=>{P=H,H=ye,t=Ku(ye-P,X0().delta),(M===1&&ye>B||M===-1&&ye<B)&&_({from:ye,to:B,velocity:t})};x({type:"decay",from:s,velocity:t,timeConstant:a,power:l,restDelta:p,modifyTarget:u,onUpdate:D(k)?ae:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Qu=(s,t)=>1-3*t+3*s,Wu=(s,t)=>3*t-6*s,Xu=s=>3*s,Lo=(s,t,n)=>((Qu(t,n)*s+Wu(t,n))*s+Xu(t))*s,Gu=(s,t,n)=>3*Qu(t,n)*s*s+2*Wu(t,n)*s+Xu(t),eb=1e-7,sb=10;function tb(s,t,n,o,l){let a,i,c=0;do i=t+(n-t)/2,a=Lo(i,o,l)-s,a>0?n=i:t=i;while(Math.abs(a)>eb&&++c<sb);return i}const nb=8,ob=.001;function lb(s,t,n,o){for(let l=0;l<nb;++l){const a=Gu(t,n,o);if(a===0)return t;t-=(Lo(t,n,o)-s)/a}return t}const wo=11,po=1/(wo-1);function rb(s,t,n,o){if(s===t&&n===o)return Mu;const l=new Float32Array(wo);for(let i=0;i<wo;++i)l[i]=Lo(i*po,s,n);function a(i){let c=0,p=1;const u=wo-1;for(;p!==u&&l[p]<=i;++p)c+=po;--p;const y=(i-l[p])/(l[p+1]-l[p]),f=c+y*po,d=Gu(f,s,n);return d>=ob?lb(i,f,s,n):d===0?f:tb(i,c,c+po,s,n)}return i=>i===0||i===1?i:Lo(a(i),t,o)}const Yu=(s,t)=>n=>Math.max(Math.min(n,t),s),Fn=s=>s%1?Number(s.toFixed(5)):s,Qn=/(-)?([\d]*\.?[\d])+/g,Br=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,ab=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Jn(s){return typeof s=="string"}const eo={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},Tn=Object.assign(Object.assign({},eo),{transform:Yu(0,1)}),uo=Object.assign(Object.assign({},eo),{default:1}),ua=s=>({test:t=>Jn(t)&&t.endsWith(s)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${s}`}),ut=ua("deg"),Pn=ua("%"),ie=ua("px"),rc=Object.assign(Object.assign({},Pn),{parse:s=>Pn.parse(s)/100,transform:s=>Pn.transform(s*100)}),ya=(s,t)=>n=>Boolean(Jn(n)&&ab.test(n)&&n.startsWith(s)||t&&Object.prototype.hasOwnProperty.call(n,t)),Zu=(s,t,n)=>o=>{if(!Jn(o))return o;const[l,a,i,c]=o.match(Qn);return{[s]:parseFloat(l),[t]:parseFloat(a),[n]:parseFloat(i),alpha:c!==void 0?parseFloat(c):1}},yo={test:ya("hsl","hue"),parse:Zu("hue","saturation","lightness"),transform:({hue:s,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(s)+", "+Pn.transform(Fn(t))+", "+Pn.transform(Fn(n))+", "+Fn(Tn.transform(o))+")"},ib=Yu(0,255),Tl=Object.assign(Object.assign({},eo),{transform:s=>Math.round(ib(s))}),bn={test:ya("rgb","red"),parse:Zu("red","green","blue"),transform:({red:s,green:t,blue:n,alpha:o=1})=>"rgba("+Tl.transform(s)+", "+Tl.transform(t)+", "+Tl.transform(n)+", "+Fn(Tn.transform(o))+")"};function cb(s){let t="",n="",o="",l="";return s.length>5?(t=s.substr(1,2),n=s.substr(3,2),o=s.substr(5,2),l=s.substr(7,2)):(t=s.substr(1,1),n=s.substr(2,1),o=s.substr(3,1),l=s.substr(4,1),t+=t,n+=n,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const ac={test:ya("#"),parse:cb,transform:bn.transform},As={test:s=>bn.test(s)||ac.test(s)||yo.test(s),parse:s=>bn.test(s)?bn.parse(s):yo.test(s)?yo.parse(s):ac.parse(s),transform:s=>Jn(s)?s:s.hasOwnProperty("red")?bn.transform(s):yo.transform(s)},Ju="${c}",ey="${n}";function pb(s){var t,n,o,l;return isNaN(s)&&Jn(s)&&((n=(t=s.match(Qn))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((l=(o=s.match(Br))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function sy(s){typeof s=="number"&&(s=`${s}`);const t=[];let n=0;const o=s.match(Br);o&&(n=o.length,s=s.replace(Br,Ju),t.push(...o.map(As.parse)));const l=s.match(Qn);return l&&(s=s.replace(Qn,ey),t.push(...l.map(eo.parse))),{values:t,numColors:n,tokenised:s}}function ty(s){return sy(s).values}function ny(s){const{values:t,numColors:n,tokenised:o}=sy(s),l=t.length;return a=>{let i=o;for(let c=0;c<l;c++)i=i.replace(c<n?Ju:ey,c<n?As.transform(a[c]):Fn(a[c]));return i}}const ub=s=>typeof s=="number"?0:s;function yb(s){const t=ty(s);return ny(s)(t.map(ub))}const da={test:pb,parse:ty,createTransformer:ny,getAnimatableNone:yb},db=new Set(["brightness","contrast","saturate","opacity"]);function fb(s){let[t,n]=s.slice(0,-1).split("(");if(t==="drop-shadow")return s;const[o]=n.match(Qn)||[];if(!o)return s;const l=n.replace(o,"");let a=db.has(t)?1:0;return o!==n&&(a*=100),t+"("+a+l+")"}const hb=/([a-z-]*)\(.*?\)/g,xr=Object.assign(Object.assign({},da),{getAnimatableNone:s=>{const t=s.match(hb);return t?t.map(fb).join(" "):s}}),Pl={};class mb{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(t,n,o)}clear(){this.subscriptions.clear()}}const ic=s=>!isNaN(parseFloat(s));class gb{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new mb,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:l}=Wv();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Yi.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Yi.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=ic(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=ic(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ku(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Ab(s){return new gb(s)}const{isArray:vb}=Array;function bb(){const s=N({}),t=o=>{const l=a=>{!s.value[a]||(s.value[a].stop(),s.value[a].destroy(),g9(s.value,a))};o?vb(o)?o.forEach(l):l(o):Object.keys(s.value).forEach(l)},n=(o,l,a)=>{if(s.value[o])return s.value[o];const i=Ab(l);return i.onChange(c=>{ns(a,o,c)}),ns(s.value,o,i),i};return Nv(t),{motionValues:s,get:n,stop:t}}const Db=s=>Array.isArray(s),yt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ol=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),Eb=s=>({type:"spring",stiffness:550,damping:s===0?100:30,restDelta:.01,restSpeed:10}),$l=()=>({type:"keyframes",ease:"linear",duration:300}),wb=s=>({type:"keyframes",duration:800,values:s}),cc={default:Eb,x:yt,y:yt,z:yt,rotate:yt,rotateX:yt,rotateY:yt,rotateZ:yt,scaleX:Ol,scaleY:Ol,scale:Ol,backgroundColor:$l,color:$l,opacity:$l},oy=(s,t)=>{let n;return Db(t)?n=wb:n=cc[s]||cc.default,De({to:t},n(t))},pc=Ye(De({},eo),{transform:Math.round}),ly={color:As,backgroundColor:As,outlineColor:As,fill:As,stroke:As,borderColor:As,borderTopColor:As,borderRightColor:As,borderBottomColor:As,borderLeftColor:As,borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,size:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,rotate:ut,rotateX:ut,rotateY:ut,rotateZ:ut,scale:uo,scaleX:uo,scaleY:uo,scaleZ:uo,skew:ut,skewX:ut,skewY:ut,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:Tn,originX:rc,originY:rc,originZ:ie,zIndex:pc,filter:xr,WebkitFilter:xr,fillOpacity:Tn,strokeOpacity:Tn,numOctaves:pc},fa=s=>ly[s],ry=(s,t)=>t&&typeof s=="number"&&t.transform?t.transform(s):s;function _b(s,t){let n=fa(s);return n!==xr&&(n=da),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const kb={linear:Mu,easeIn:ca,easeInOut:Iu,easeOut:x0,circIn:Lu,circInOut:C0,circOut:ju,backIn:pa,backInOut:S0,backOut:z0,anticipate:F0,bounceIn:$0,bounceInOut:q0,bounceOut:Io},uc=s=>{if(Array.isArray(s)){const[t,n,o,l]=s;return rb(t,n,o,l)}else if(typeof s=="string")return kb[s];return s},Bb=s=>Array.isArray(s)&&typeof s[0]!="number",yc=(s,t)=>s==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&da.test(t)&&!t.startsWith("url("));function xb(s){return Array.isArray(s.to)&&s.to[0]===null&&(s.to=[...s.to],s.to[0]=s.from),s}function Cb(l){var a=l,{ease:s,times:t,delay:n}=a,o=pl(a,["ease","times","delay"]);const i=De({},o);return t&&(i.offset=t),s&&(i.ease=Bb(s)?s.map(uc):uc(s)),n&&(i.elapsed=-n),i}function zb(s,t,n){return Array.isArray(t.to)&&(s.duration||(s.duration=800)),xb(t),Sb(s)||(s=De(De({},s),oy(n,t.to))),De(De({},t),Cb(s))}function Sb(i){var c=i,{delay:s,repeat:t,repeatType:n,repeatDelay:o,from:l}=c,a=pl(c,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(a).length}function Fb(s,t){return s[t]||s.default||s}function Tb(s,t,n,o,l){const a=Fb(o,s);let i=a.from===null||a.from===void 0?t.get():a.from;const c=yc(s,n);i==="none"&&c&&typeof n=="string"&&(i=_b(s,n));const p=yc(s,i);function u(f){const d={from:i,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return a.type==="inertia"||a.type==="decay"?J0(De(De({},d),a)):Vu(Ye(De({},zb(a,d,s)),{onUpdate:h=>{d.onUpdate(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}}))}function y(f){return t.set(n),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!p||!c||a.type===!1?y:u}function Pb(){const{motionValues:s,stop:t,get:n}=bb();return{motionValues:s,stop:t,push:(l,a,i,c={},p)=>{const u=i[l],y=n(l,u,i);if(c&&c.immediate){y.set(a);return}const f=Tb(l,y,a,c,p);y.start(f)}}}function Ob(s,t={},{motionValues:n,push:o,stop:l}=Pb()){const a=v(t),i=N(!1),c=ue(n,d=>{i.value=Object.values(d).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),p=d=>{if(!a||!a[d])throw new Error(`The variant ${d} does not exist.`);return a[d]},u=d=>(typeof d=="string"&&(d=p(d)),Promise.all(Object.entries(d).map(([h,g])=>{if(h!=="transition")return new Promise(D=>{o(h,g,s,d.transition||oy(h,d[h]),D)})}).filter(Boolean)));return{isAnimating:i,apply:u,set:d=>{const h=Fo(d)?d:p(d);Object.entries(h).forEach(([g,D])=>{g!=="transition"&&o(g,D,s,{immediate:!0})})},stopTransitions:()=>{c(),l()},leave:async d=>{let h;if(a&&(a.leave&&(h=a.leave),!a.leave&&a.initial&&(h=a.initial)),!h){d();return}await u(h),d()}}}const ha=typeof window!="undefined",$b=()=>ha&&window.onpointerdown===null,qb=()=>ha&&window.ontouchstart===null,Mb=()=>ha&&window.onmousedown===null;function Ib({target:s,state:t,variants:n,apply:o}){const l=v(n),a=[],i=(...g)=>{const D=Oe.apply(null,g);return a.push(D),D},c=N(!1),p=N(!1),u=N(!1),y=z(()=>{let g=[];return l&&(l.hovered&&(g=[...g,...Object.keys(l.hovered)]),l.tapped&&(g=[...g,...Object.keys(l.tapped)]),l.focused&&(g=[...g,...Object.keys(l.focused)])),g}),f=z(()=>{const g={};Object.assign(g,t.value),c.value&&l.hovered&&Object.assign(g,l.hovered),p.value&&l.tapped&&Object.assign(g,l.tapped),u.value&&l.focused&&Object.assign(g,l.focused);for(const D in g)y.value.includes(D)||delete g[D];return g});l.hovered&&(i(s,"mouseenter",()=>{c.value=!0}),i(s,"mouseleave",()=>{c.value=!1,p.value=!1}),i(s,"mouseout",()=>{c.value=!1,p.value=!1})),l.tapped&&(Mb()&&(i(s,"mousedown",()=>{p.value=!0}),i(s,"mouseup",()=>{p.value=!1})),$b()&&(i(s,"pointerdown",()=>{p.value=!0}),i(s,"pointerup",()=>{p.value=!1})),qb()&&(i(s,"touchstart",()=>{p.value=!0}),i(s,"touchend",()=>{p.value=!1}))),l.focused&&(i(s,"focus",()=>{u.value=!0}),i(s,"blur",()=>{u.value=!1}));const d=ue(f,o);return{stop:()=>{a.forEach(g=>g()),d()}}}function Lb({set:s,target:t,variants:n,variant:o}){const l=v(n);return{stop:ue(()=>t,()=>{!l||(l.initial&&s("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function jb({state:s,apply:t}){return{stop:ue(s,o=>{o&&t(o)},{immediate:!0})}}function Rb({target:s,variants:t,variant:n}){const o=v(t);let l=nt;if(o&&(o.visible||o.visibleOnce)){const{stop:a}=wh(s,([{isIntersecting:i}])=>{o.visible?i?n.value="visible":n.value="initial":o.visibleOnce&&(i?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});l=a}return{stop:l}}function Nb(s,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=N([]);if(t.lifeCycleHooks){const{stop:l}=Lb(s);n.value.push(l)}if(t.syncVariants){const{stop:l}=jb(s);n.value.push(l)}if(t.visibilityHooks){const{stop:l}=Rb(s);n.value.push(l)}if(t.eventListeners){const{stop:l}=Ib(s);n.value.push(l)}const o=()=>n.value.forEach(l=>l());return Fp(o),{stop:o}}function ay(s={}){const t=qe(De({},s)),n=N({});return ue(t,()=>{const o={};for(const[l,a]of Object.entries(t)){const i=fa(l),c=ry(a,i);o[l]=c}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}const Ub=["","X","Y","Z"],Hb=["perspective","translate","scale","rotate","skew"],iy=["transformPerspective","x","y","z"];Hb.forEach(s=>{Ub.forEach(t=>{const n=s+t;iy.push(n)})});const Vb=new Set(iy);function ma(s){return Vb.has(s)}const Kb=new Set(["originX","originY","originZ"]);function cy(s){return Kb.has(s)}function Qb(s){const t={},n={};return Object.entries(s).forEach(([o,l])=>{ma(o)||cy(o)?t[o]=l:n[o]=l}),{transform:t,style:n}}function Wb(s,t){let n,o;const{state:l,style:a}=ay(),i=ue(()=>os(s),u=>{if(!!u){o=u;for(const y of Object.keys(ly))u.style[y]===null||u.style[y]===""||ma(y)||cy(y)||ns(l,y,u.style[y]);n&&Object.entries(n).forEach(([y,f])=>ns(u.style,y,f)),t&&t(l)}},{immediate:!0}),c=ue(a,u=>{if(!o){n=u;return}for(const y in u)ns(o.style,y,u[y])},{immediate:!0});return{style:l,stop:()=>{o=void 0,n=void 0,i(),c()}}}const Xb={x:"translateX",y:"translateY",z:"translateZ"};function py(s={},t=!0){const n=qe(De({},s)),o=N("");return ue(n,l=>{let a="",i=!1;t&&(l.x||l.y||l.z)&&(a+=`translate3d(${[l.x||0,l.y||0,l.z||0].map(ie.transform).join(",")}) `,i=!0);for(const[c,p]of Object.entries(l)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const u=fa(c),y=ry(p,u);a+=`${Xb[c]||c}(${y}) `}t&&!i&&(a+="translateZ(0px) "),o.value=a.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}function Gb(s){const t=s.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[a,i]=l.split("("),p=i.split(",").map(y=>n(y.endsWith(")")?y.replace(")",""):y.trim())),u=p.length===1?p[0]:p;return Ye(De({},o),{[a]:u})},{})}function Yb(s,t){Object.entries(Gb(t)).forEach(([n,o])=>{o=parseFloat(o);const l=["x","y","z"];if(n==="translate3d"){if(o===0){l.forEach(a=>{ns(s,a,0)});return}o.forEach((a,i)=>{ns(s,l[i],a)});return}if(n==="translateX"){ns(s,"x",o);return}if(n==="translateY"){ns(s,"y",o);return}if(n==="translateZ"){ns(s,"z",o);return}ns(s,n,o)})}function Zb(s,t){let n,o;const{state:l,transform:a}=py(),i=ue(()=>os(s),u=>{!u||(o=u,u.style.transform&&Yb(l,u.style.transform),n&&(u.style.transform=n),t&&t(l))},{immediate:!0}),c=ue(a,u=>{if(!o){n=u;return}o.style.transform=u},{immediate:!0});return{transform:l,stop:()=>{n=void 0,o=void 0,i(),c()}}}function Jb(s,t){const n=qe({}),o=f=>{Object.entries(f).forEach(([d,h])=>{ns(n,d,h)})},{style:l,stop:a}=Wb(s,o),{transform:i,stop:c}=Zb(s,o),p=ue(n,f=>{Object.entries(f).forEach(([d,h])=>{const g=ma(d)?i:l;g[d]&&g[d]===h||ns(g,d,h)})},{immediate:!0,deep:!0}),u=ue(()=>os(s),f=>{!f||t&&o(t)},{immediate:!0});return{motionProperties:n,style:l,transform:i,stop:()=>{a(),c(),p(),u()}}}function e5(s={}){const t=v(s),n=N();return{state:z(()=>{if(!!n.value)return t[n.value]}),variant:n}}function s5(s,t={},n){const{motionProperties:o,stop:l}=Jb(s),{variant:a,state:i}=e5(t),c=Ob(o,t),p=Ye(De({target:s,variant:a,variants:t,state:i,motionProperties:o},c),{stop:(y=!1)=>{}}),{stop:u}=Nb(p,n);return p.stop=(y=!1)=>{const f=()=>{p.stopTransitions(),l(),u()};if(!y&&t.value&&t.value.leave){const d=ue(p.isAnimating,h=>{h||(d(),f())})}else f()},Fp(()=>p.stop()),j9(()=>os(s),y=>{!y||y!=null&&y.motionInstance&&(p.stop(),Object.assign(p,y.motionInstance))}),p}const t5=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],n5=(s,t)=>{const n=s.props?s.props:s.data&&s.data.attrs?s.data.attrs:{};n&&(n.variants&&Fo(n.variants)&&(t.value=De(De({},t.value),n.variants)),t5.forEach(o=>{if(o==="delay"){if(n&&n[o]&&D9(n[o])){const l=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition=Ye(De({},t.value.enter.transition),{delay:l})),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition=Ye(De({},t.value.visible.transition),{delay:l})),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition=Ye(De({},t.value.visibleOnce.transition),{delay:l})))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&Fo(n[o])&&(t.value[o]=n[o])}))},ql=s=>{const t=(o,l,a)=>{const i=l.value&&typeof l.value=="string"?l.value:a.key;i&&Pl[i]&&Pl[i].stop();const c=N(s||{});typeof l.value=="object"&&(c.value=l.value),n5(a,c);const p=s5(o,c);o.motionInstance=p,i&&ns(Pl,i,p)},n=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(o,l){const{initial:a}=o.value||l&&l.props||{},i=jv((s==null?void 0:s.initial)||{},a||{});if(!i||Object.keys(i).length===0)return;const{transform:c,style:p}=Qb(i),{transform:u}=py(c),{style:y}=ay(p);return u.value&&(y.value.transform=u.value),{style:y.value}}}},o5={initial:{opacity:0},enter:{opacity:1}},l5={initial:{opacity:0},visible:{opacity:1}},r5={initial:{opacity:0},visibleOnce:{opacity:1}},a5={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},i5={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},c5={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},p5={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},u5={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},y5={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},d5={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},f5={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},h5={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},m5={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},g5={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},A5={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},v5={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},b5={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},D5={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},E5={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},w5={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},_5={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},k5={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},B5={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},x5={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},C5={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},z5={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},S5={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},F5={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},T5={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},P5={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},dc={__proto__:null,fade:o5,fadeVisible:l5,fadeVisibleOnce:r5,pop:a5,popVisible:i5,popVisibleOnce:c5,rollBottom:v5,rollLeft:p5,rollRight:d5,rollTop:m5,rollVisibleBottom:b5,rollVisibleLeft:u5,rollVisibleRight:f5,rollVisibleTop:g5,rollVisibleOnceBottom:D5,rollVisibleOnceLeft:y5,rollVisibleOnceRight:h5,rollVisibleOnceTop:A5,slideBottom:F5,slideLeft:E5,slideRight:k5,slideTop:C5,slideVisibleBottom:T5,slideVisibleLeft:w5,slideVisibleRight:B5,slideVisibleTop:z5,slideVisibleOnceBottom:P5,slideVisibleOnceLeft:_5,slideVisibleOnceRight:x5,slideVisibleOnceTop:S5};function O5(s){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return s.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>n.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const $5={install(s,t){if(s.directive("motion",ql()),!t||t&&!t.excludePresets)for(const n in dc){const o=dc[n];s.directive(`motion-${O5(n)}`,ql(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,s.directive(`motion-${n}`,ql(o))}}},ga="vue-starport-injection",uy="vue-starport-options",q5={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},yy={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var M5=Object.defineProperty,jo=Object.getOwnPropertySymbols,dy=Object.prototype.hasOwnProperty,fy=Object.prototype.propertyIsEnumerable,fc=(s,t,n)=>t in s?M5(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,I5=(s,t)=>{for(var n in t||(t={}))dy.call(t,n)&&fc(s,n,t[n]);if(jo)for(var n of jo(t))fy.call(t,n)&&fc(s,n,t[n]);return s},hc=(s,t)=>{var n={};for(var o in s)dy.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&jo)for(var o of jo(s))t.indexOf(o)<0&&fy.call(s,o)&&(n[o]=s[o]);return n};const L5=Te({name:"StarportProxy",props:I5({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},yy),setup(s,t){const n=L(ga),o=z(()=>n.getInstance(s.port,s.component)),l=N(),a=o.value.generateId(),i=N(!1);return o.value.isVisible||(o.value.land(),i.value=!0),Wn(async()=>{o.value.el||(o.value.el=l.value,await Ke(),i.value=!0,o.value.rect.update())}),Jo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await Ke(),await Ke(),!o.value.el&&n.dispose(o.value.port))}),ue(()=>s,async()=>{o.value.props&&await Ke();const c=s,{props:p}=c,u=hc(c,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=s,{initialProps:p,mountedProps:u}=c,y=hc(c,["initialProps","mountedProps"]),f=zo(y,(i.value?u:p)||{});return zs("div",zo(f,{id:a,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?zs(t.slots.default):void 0)}}});var j5=Object.defineProperty,R5=Object.defineProperties,N5=Object.getOwnPropertyDescriptors,mc=Object.getOwnPropertySymbols,U5=Object.prototype.hasOwnProperty,H5=Object.prototype.propertyIsEnumerable,gc=(s,t,n)=>t in s?j5(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,V5=(s,t)=>{for(var n in t||(t={}))U5.call(t,n)&&gc(s,n,t[n]);if(mc)for(var n of mc(t))H5.call(t,n)&&gc(s,n,t[n]);return s},K5=(s,t)=>R5(s,N5(t));const Q5=Te({name:"Starport",inheritAttrs:!0,props:yy,setup(s,t){const n=N(!1);return Wn(()=>{n.value=!0}),()=>{var i,c;const o=(c=(i=t.slots).default)==null?void 0:c.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let a=l.type;return(!Fo(a)||Gt(a))&&(a={render(){return o}}),zs(L5,K5(V5({},s),{key:s.port,component:Ko(a),props:l.props}))}}});function W5(s){const t=qe({height:0,width:0,left:0,top:0,update:o,listen:a,pause:i,margin:"0px",padding:"0px"}),n=bs?document.documentElement||document.body:void 0;function o(){if(!bs)return;const c=os(s);if(!c)return;const{height:p,width:u,left:y,top:f}=c.getBoundingClientRect(),d=window.getComputedStyle(c),h=d.margin,g=d.padding;Object.assign(t,{height:p,width:u,left:y,top:n.scrollTop+f,margin:h,padding:g})}const l=$p(o,{immediate:!1});function a(){!bs||(o(),l.resume())}function i(){l.pause()}return t}let X5=(s,t=21)=>(n=t)=>{let o="",l=n;for(;l--;)o+=s[Math.random()*s.length|0];return o};const Ac=X5("abcdefghijklmnopqrstuvwxyz",5);function vc(s){return s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function G5(s){var t;return s.name||((t=s.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var Y5=Object.defineProperty,bc=Object.getOwnPropertySymbols,Z5=Object.prototype.hasOwnProperty,J5=Object.prototype.propertyIsEnumerable,Dc=(s,t,n)=>t in s?Y5(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,Ml=(s,t)=>{for(var n in t||(t={}))Z5.call(t,n)&&Dc(s,n,t[n]);if(bc)for(var n of bc(t))J5.call(t,n)&&Dc(s,n,t[n]);return s};function eD(s,t,n={}){const o=G5(t),l=vc(o)||Ac(),a=N(),i=N(null),c=N(!1),p=N(!1),u=Fy(!0),y=N({}),f=z(()=>Ml(Ml(Ml({},q5),n),y.value)),d=N(0);let h;u.run(()=>{h=W5(a),ue(a,async x=>{x&&(p.value=!0),await Ke(),a.value||(p.value=!1)})});const g=vc(s);function D(){return`starport-${l}-${g}-${Ac()}`}const b=D();return qe({el:a,id:b,port:s,props:i,rect:h,scope:u,isLanded:c,isVisible:p,options:f,liftOffTime:d,component:t,componentName:o,componentId:l,generateId:D,setLocalOptions(x={}){y.value=JSON.parse(JSON.stringify(x))},elRef(){return a},liftOff(){!c.value||(c.value=!1,d.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function sD(s){const t=qe(new Map);function n(l,a){let i=t.get(l);return i||(i=eD(l,a,s),t.set(l,i)),i.component=a,i}function o(l){var a;(a=t.get(l))==null||a.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:n}}var tD=Object.defineProperty,nD=Object.defineProperties,oD=Object.getOwnPropertyDescriptors,Ec=Object.getOwnPropertySymbols,lD=Object.prototype.hasOwnProperty,rD=Object.prototype.propertyIsEnumerable,wc=(s,t,n)=>t in s?tD(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,aD=(s,t)=>{for(var n in t||(t={}))lD.call(t,n)&&wc(s,n,t[n]);if(Ec)for(var n of Ec(t))rD.call(t,n)&&wc(s,n,t[n]);return s},iD=(s,t)=>nD(s,oD(t));const cD=Te({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(s){const t=L(ga);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=z(()=>t.getInstance(s.port,s.component)),o=z(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),l=z(()=>{const i=Date.now()-n.value.liftOffTime,c=Math.max(0,n.value.options.duration-i),p=n.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!n.value.isVisible||!n.value.el?iD(aD({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:n.value.options.easing}),u)}),a={};return()=>{const i=!!(n.value.isLanded&&n.value.el);return zs("div",{style:l.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},zs(of,{to:i?`#${o.value}`:"body",disabled:!i},zs(n.value.component,zo(a,n.value.props))))}}}),pD=Te({name:"StarportCarrier",setup(s,{slots:t}){const n=sD(L(uy,{}));return xt().appContext.app.provide(ga,n),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(n.portMap.entries()).map(([a,{component:i}])=>zs(cD,{key:a,port:a,component:i}))]}}});function uD(s={}){return{install(t){t.provide(uy,s),t.component("Starport",Q5),t.component("StarportCarrier",pD)}}}function yD(s){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),s.app.use($5),s.app.use(uD({keepAlive:!0}))}function as(s,t,n){var o,l;return(l=((o=s.instance)==null?void 0:o.$).provides[t])!=null?l:n}function dD(){return{install(s){s.directive("click",{name:"v-click",mounted(t,n){var y,f,d,h;if(Cn.value||((y=as(n,go))==null?void 0:y.value))return;const o=as(n,It),l=as(n,mo),a=as(n,tr),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,c=n.modifiers.fade!==!1&&n.modifiers.fade!=null,p=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=c?o9:Al;if(o&&!((d=o==null?void 0:o.value)!=null&&d.includes(t))&&o.value.push(t),n.value===null&&(n.value=o==null?void 0:o.value.length),!(a!=null&&a.value.has(n.value)))a==null||a.value.set(n.value,[t]);else if(!((h=a==null?void 0:a.value.get(n.value))!=null&&h.includes(t))){const g=(a==null?void 0:a.value.get(n.value))||[];a==null||a.value.set(n.value,[t].concat(g))}t==null||t.classList.toggle(Tt,!0),l&&ue(l,()=>{var x;const g=(x=l==null?void 0:l.value)!=null?x:0,D=n.value!=null?g>=n.value:g>p;t.classList.contains(vl)||t.classList.toggle(u,!D),i!==!1&&i!==void 0&&t.classList.toggle(u,D),t.classList.toggle(un,!1);const b=a==null?void 0:a.value.get(g);b==null||b.forEach((_,k)=>{_.classList.toggle(io,!1),k===b.length-1?_.classList.toggle(un,!0):_.classList.toggle(io,!0)}),t.classList.contains(un)||t.classList.toggle(io,D)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Tt,!1);const o=as(n,It);o!=null&&o.value&&li(o.value,t)}}),s.directive("after",{name:"v-after",mounted(t,n){var c,p;if(Cn.value||((c=as(n,go))==null?void 0:c.value))return;const o=as(n,It),l=as(n,mo),a=as(n,tr),i=o==null?void 0:o.value.length;n.value===void 0&&(n.value=o==null?void 0:o.value.length),a!=null&&a.value.has(n.value)?(p=a==null?void 0:a.value.get(n.value))==null||p.push(t):a==null||a.value.set(n.value,[t]),t==null||t.classList.toggle(Tt,!0),l&&ue(l,()=>{var y,f,d;const u=((y=l.value)!=null?y:0)>=((d=(f=n.value)!=null?f:i)!=null?d:0);t.classList.contains(vl)||t.classList.toggle(Al,!u),t.classList.toggle(un,!1),t.classList.contains(un)||t.classList.toggle(io,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Tt,!0)}}),s.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,c,p;if(Cn.value||((i=as(n,go))==null?void 0:i.value))return;const o=as(n,It),l=as(n,mo),a=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Tt,!0),l&&ue(l,()=>{var f;const u=(f=l==null?void 0:l.value)!=null?f:0,y=n.value!=null?u>=n.value:u>a;t.classList.toggle(Al,y),t.classList.toggle(vl,y)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Tt,!1);const o=as(n,It);o!=null&&o.value&&li(o.value,t)}})}}}function fD(s,t){const n=pu(s),o=uu(t,n.currentRoute,n.currentPage);return{nav:Ye(De(De({},n),o),{downloadPDF:mr,next:ot,nextSlide:Un,openInEditor:qv,prev:lt,prevSlide:Hn}),configs:we,themeConfigs:z(()=>we.themeConfig)}}function hD(){return{install(s){const t=fD(Ks,Ss);s.provide(U,qe(t))}}}const rn=jf(Iv);rn.use(fs);rn.use(Jf());rn.use(dD());rn.use(hD());yD({app:rn,router:fs});rn.mount("#app");export{mn as $,Y as A,ou as B,fe as C,Ne as D,fu as E,Je as F,_e as G,Nm as H,ke as I,gD as J,AD as K,Ss as L,qo as M,Fv as N,xl as O,bl as P,Rn as Q,kl as R,QA as S,Jr as T,ea as U,HA as V,Ym as W,Fs as X,vD as Y,_t as Z,au as _,e as a,co as a0,Xn as a1,dr as a2,vm as a3,bm as a4,Dm as a5,wm as a6,Hr as a7,Ep as a8,wD as a9,Ms as aa,es as ab,Fg as ac,gt as ad,_p as ae,_m as af,Jo as ag,z as b,K as c,Te as d,U as e,ps as f,R as g,v as h,L as i,Tm as j,$v as k,we as l,s9 as m,Me as n,w as o,Wn as p,qe as q,N as r,bD as s,wt as t,DD as u,ED as v,ue as w,J as x,ls as y,Bp as z};
