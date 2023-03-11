import{o as n,c as t,a as o,d as F,u as Y,e as q,f as z,h as y,r as K,t as m,p as L,b as c,x as w,s as M,q as e,F as B,n as D,m as u,V as J,C as O}from"./index.9cf14029.js";import{a as Q,i as U,r as W}from"./headlessui.esm.6574b8f8.js";import{c as G,d as X,t as C,_ as T,b as A,a as Z}from"./See.5cd2d7ba.js";import{m as I,_ as ee}from"./markdown.15879207.js";import{u as se}from"./ReducedMotion.16c356b8.js";const ne={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1),oe=[te];function ae(r,f){return n(),t("svg",ne,oe)}var re={name:"heroicons-outline-minus",render:ae};const le={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ie=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1),ue=[ie];function ce(r,f){return n(),t("svg",le,ue)}var de={name:"heroicons-outline-plus",render:ce};const me={class:"flex gap-1 items-center -ml-1"},_e={class:"font-semibold"},pe=["aria-expanded"],he={class:"sr-only"},fe=["innerHTML"],ve=F({props:["names","variable","nullable"],setup(r){var a;const f=r,x=Y(),H=q(),b=z(),s=y(()=>b.state.docs),_=K((a=s.value)==null?void 0:a.typedefs.find(p=>p.name===f.names[0][0])),v=y(()=>{var p,h;return I((h=G((p=_.value)==null?void 0:p.description,s.value,x,H))!=null?h:"")});return(p,h)=>{const $=de,g=re;return _.value?(n(),m(e(W),{key:0,as:"div"},{default:L(({open:d})=>[c(e(Q),{as:"div",class:"focus:outline-none"},{default:L(()=>[o("div",me,[o("span",_e,w(r.nullable?"?":"")+w(r.variable?"...":""),1),(n(!0),t(B,null,M(r.names,l=>(n(),m(X,{key:e(C)(l),type:l},null,8,["type"]))),128)),o("button",{class:"leading-3 focus:outline-none","aria-expanded":d},[o("span",he,w(d?"Shrink":"Expand"),1),c($,{class:D(["inline-block",{hidden:d}]),"aria-hidden":"true"},null,8,["class"]),c(g,{class:D(["inline-block",{hidden:!d}]),"aria-hidden":"true"},null,8,["class"])],8,pe)])]),_:2},1024),c(e(U),null,{default:L(()=>{var l,k;return[e(v)?(n(),t("div",{key:0,innerHTML:e(v)},null,8,fe)):u("",!0),(l=_.value)!=null&&l.props?(n(),m(T,{key:1,parameters:(k=_.value)==null?void 0:k.props},null,8,["parameters"])):u("",!0)]}),_:1})]),_:1})):(n(),m(A,{key:1,names:r.names},null,8,["names"]))}}}),ke={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},ye={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},xe=["id"],be=["innerHTML"],$e=o("h2",null,"Types",-1),ge={id:"typedef-types"},we={key:2},Me=o("h2",null,"Properties",-1),Be={key:3},Ce=o("h2",null,"Parameters",-1),He={key:4},Le=o("h2",null,"Returns",-1),Te={key:0},Ae={key:1},Se=F({setup(r){var v;const f=Y(),x=q(),H=z(),b=y(()=>H.state.docs),s=(v=b.value)==null?void 0:v.typedefs.find(a=>a.name===x.params.typedef),_=y(()=>I(G(s==null?void 0:s.description,b.value,f,x)));return J({title:y(()=>{var a;return`Game Lobby Docs | ${(a=s==null?void 0:s.name)!=null?a:""}`})}),O(()=>{const a=document.getElementById("container");a&&a.scrollTop>200&&a.scrollTo({top:0,behavior:se.value?void 0:"smooth"})}),(a,p)=>{var h,$,g,d,l,k,R,E,V,N,P,S,j;return n(),t("div",ke,[c(ee,{class:"float-right mt-2",meta:(h=e(s))==null?void 0:h.meta},null,8,["meta"]),o("div",ye,[o("h1",{id:`doc-for-${($=e(s))==null?void 0:$.name}`},w((g=e(s))==null?void 0:g.name),9,xe),(d=e(s))!=null&&d.description?(n(),t("p",{key:0,innerHTML:e(_)},null,8,be)):u("",!0),(k=(l=e(s))==null?void 0:l.see)!=null&&k.length?(n(),m(Z,{key:1,see:(R=e(s))==null?void 0:R.see},null,8,["see"])):u("",!0),$e,o("ul",ge,[(n(!0),t(B,null,M((E=e(s))==null?void 0:E.type,i=>(n(),t("li",{key:e(C)(i)},[c(ve,{class:"!m-0",names:i},null,8,["names"])]))),128))]),((V=e(s))==null?void 0:V.props)&&((N=e(s))==null?void 0:N.props.length)?(n(),t("div",we,[Me,c(T,{parameters:e(s).props},null,8,["parameters"])])):u("",!0),((P=e(s))==null?void 0:P.params)&&((S=e(s))==null?void 0:S.params.length)?(n(),t("div",Be,[Ce,c(T,{parameters:e(s).params},null,8,["parameters"])])):u("",!0),(j=e(s))!=null&&j.returns?(n(),t("div",He,[Le,o("p",null,[e(s).returns&&Array.isArray(e(s).returns)?(n(),t("span",Te,[(n(!0),t(B,null,M(e(s).returns,i=>(n(),m(A,{key:e(C)(i),names:i},null,8,["names"]))),128))])):e(s).returns&&!Array.isArray(e(s).returns)?(n(),t("span",Ae,[(n(!0),t(B,null,M(e(s).returns.types||e(s).returns,i=>(n(),m(A,{key:e(C)(i),names:i,variable:e(s).returns.variable,nullable:e(s).returns.nullable},null,8,["names","variable","nullable"]))),128))])):u("",!0)])])):u("",!0)])])}}});export{Se as default};
