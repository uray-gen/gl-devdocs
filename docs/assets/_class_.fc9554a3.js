import{d as S,u as R,e as z,f as F,h as f,l as O,o as e,c as n,a as r,b as u,p as M,z as y,x as $,m as a,q as t,t as _,F as b,r as N,Y as be,Z as $e,$ as xe,a0 as we,s as H,n as j,g as Te,i as P,w as Me,v as Ce,V as Le,C as He,k as Ee}from"./index.9ffd7a39.js";import{m as q,_ as J,H as Q}from"./markdown.f809f2e9.js";import{c as A,_ as K,a as X,p as De,t as V,b as B,d as W}from"./See.7a85226d.js";import{_ as je,a as Ze}from"./chevron-right.87874e86.js";import{r as U,a as Y,i as G}from"./headlessui.esm.ede12438.js";import{u as I}from"./ReducedMotion.56baf9c3.js";const qe=["id"],Ae={class:"flex items-center"},Be={class:"inline-block mr-2"},Se={class:"text-gray-200 text-sm font-semibold uppercase pt-6"},Pe={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Ve=["innerHTML"],Ie={class:"grid pl-2.5"},Ne=["innerHTML"],Re=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),ze=S({props:{event:null},setup(s){const d=s,g=R(),x=z(),C=F(),k=f(()=>C.state.docs),o=f(()=>q(A(d.event.description,k.value,g,x))),w=f(()=>typeof d.event.deprecated=="string"?q(A(d.event.deprecated,k.value,g,x)):"");return(E,p)=>{var L;const m=O("router-link");return e(),n(b,null,[r("div",{id:`doc-for-e-${s.event.name}`,class:"scroll-to mb-8"},[u(J,{class:"float-right mt-8",meta:s.event.meta},null,8,["meta"]),r("div",Ae,[r("h3",Be,[u(m,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${s.event.name}`}}},{default:M(()=>[y($(s.event.name),1)]),_:1},8,["to"])]),r("span",Se,[s.event.deprecated?(e(),n("span",Pe,"Deprecated")):a("",!0)])]),s.event.deprecated&&t(w)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(w)},null,8,Ve)):a("",!0),r("div",Ie,[r("p",{class:"noprose",innerHTML:t(o)},null,8,Ne),s.event.params&&s.event.params.length?(e(),_(K,{key:0,parameters:s.event.params},null,8,["parameters"])):a("",!0),(L=s.event.see)!=null&&L.length?(e(),_(X,{key:1,see:s.event.see},null,8,["see"])):a("",!0)])],8,qe),Re],64)}}}),Fe={class:"grid"},Oe={class:"overflow-x-auto lg:custom-scroll"},Je={class:"relative"},Ke={class:"my-0 javascript"},Ue=["innerHTML"],Ye=S({props:{code:null},setup(s){const d=s,g=N(),x=N(!1),C=be(E=>{E(),x.value=!1},1e3),{show:k,hide:o}=$e(g,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),w=async()=>{try{await navigator.clipboard.writeText(d.code),k()}catch{}x.value=!0,C(o)};return(E,p)=>{const m=xe,L=we;return e(),n("div",Fe,[r("div",Oe,[r("div",Je,[r("pre",Ke,[r("code",{innerHTML:t(Q).highlight(s.code,{language:"javascript"}).value},null,8,Ue)]),r("button",{ref_key:"copyButton",ref:g,class:"absolute right-0 top-0 mt-4 mr-4 inline-block hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200","aria-label":"Copy code"},[x.value?(e(),_(L,{key:1,class:"fill-current text-discord-green-600 dark:text-discord-green-500","aria-hidden":"true",onClick:w})):(e(),_(m,{key:0,class:"fill-current text-gray-700 dark:text-gray-200","aria-hidden":"true",onClick:w}))],512)])])])}}});const Ge=["id"],Qe={class:"flex items-center"},We={class:"inline-block mr-2"},Xe=y(") "),et={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},tt={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},st={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},nt={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ot={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},rt=["innerHTML"],at={class:"grid pl-2.5"},ct=["innerHTML"],lt={class:"font-semibold mt-3"},it=y(" Returns: "),dt={key:0},ut={key:1},mt={class:"mt-3"},pt=["innerHTML"],ht={key:1,class:"font-semibold"},_t=y(" Throws: "),ft={key:2,class:"font-semibold"},yt=y(" Emits: "),gt={key:0},vt={key:3,class:"font-semibold mt-3"},kt=y(" Examples: "),bt=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),$t=S({props:{method:null},setup(s){const d=s,g=R(),x=z(),C=F(),k=f(()=>C.state.docs),o=f(()=>{var v;return q(A((v=d.method.description)!=null?v:"No description.",k.value,g,x))}),w=f(()=>typeof d.method.deprecated=="string"?q(A(d.method.deprecated,k.value,g,x)):""),E=f(()=>{var v;return q(A((v=d.method.returns.description)!=null?v:d.method.returnsDescription,k.value,g,x))}),p=f(()=>d.method.params?d.method.params.filter(v=>!v.name.includes(".")):null),m=f(()=>d.method.emits?d.method.emits.map(v=>De(v,k.value)):null),L=f(()=>`${d.method.scope==="static"?"s-":""}${d.method.name}`);return(v,l)=>{var c,D;const i=O("router-link");return e(),n(b,null,[r("div",{id:`doc-for-${t(L)}`,class:"scroll-to mb-8"},[u(J,{class:"float-right mt-9",meta:s.method.meta},null,8,["meta"]),r("div",Qe,[r("h3",We,[u(i,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(L)}}},{default:M(()=>[y(" ."+$(s.method.name)+"(",1),(e(!0),n(b,null,H(t(p),h=>(e(),n("span",{key:h.name,class:j(["method-param text-discord-green-560 dark:text-discord-green-300 opacity-90 dark:opacity-75",h.optional?"optional":""])},$(h.variable?"...":"")+$(h.name),3))),128)),Xe]),_:1},8,["to"])]),r("span",et,[s.method.scope==="static"?(e(),n("span",tt,"Static")):a("",!0),s.method.abstract?(e(),n("span",st,"Abstract")):a("",!0),s.method.deprecated?(e(),n("span",nt,"Deprecated")):a("",!0),s.method.access==="private"?(e(),n("span",ot,"Private")):a("",!0)])]),s.method.deprecated&&t(w)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(w)},null,8,rt)):a("",!0),r("div",at,[r("p",{class:"noprose",innerHTML:t(o)},null,8,ct),s.method.params?(e(),_(K,{key:0,parameters:s.method.params},null,8,["parameters"])):a("",!0),r("div",lt,[it,s.method.returns&&Array.isArray(s.method.returns)?(e(),n("span",dt,[(e(!0),n(b,null,H(s.method.returns,h=>(e(),_(B,{key:t(V)(h),names:h},null,8,["names"]))),128))])):s.method.returns&&!Array.isArray(s.method.returns)?(e(),n("span",ut,[(e(!0),n(b,null,H(s.method.returns.types||s.method.returns,h=>(e(),_(B,{key:t(V)(h),names:h,variable:s.method.returns.variable,nullable:s.method.returns.nullable},null,8,["names","variable","nullable"]))),128))])):(e(),_(W,{key:2,type:["void"]})),r("div",mt,[s.method.returns&&!Array.isArray(s.method.returns)&&s.method.returns.description||s.method.returnsDescription?(e(),n("p",{key:0,class:"noprose",innerHTML:t(E)},null,8,pt)):a("",!0)])]),s.method.throws?(e(),n("div",ht,[_t,(e(!0),n(b,null,H(s.method.throws,h=>(e(),_(B,{key:h,names:h},null,8,["names"]))),128))])):a("",!0),t(m)&&t(m).length?(e(),n("div",ft,[yt,t(m).length>1?(e(),n("ul",gt,[(e(!0),n(b,null,H(t(m),h=>(e(),n("li",{key:h.text},[u(i,{to:h.link},{default:M(()=>[y($(h.text),1)]),_:2},1032,["to"])]))),128))])):(e(),_(i,{key:1,to:t(m)[0].link},{default:M(()=>[y($(t(m)[0].text),1)]),_:1},8,["to"]))])):a("",!0),(c=s.method.examples)!=null&&c.length?(e(),n("div",vt,[kt,(e(!0),n(b,null,H(s.method.examples,h=>(e(),_(Ye,{key:h,code:h.trim()},null,8,["code"]))),128))])):a("",!0),(D=s.method.see)!=null&&D.length?(e(),_(X,{key:4,see:s.method.see},null,8,["see"])):a("",!0)])],8,Ge),bt],64)}}});function Z(s){return`${s.scope==="static"?"s-":""}${s.name}`}const xt={key:0},wt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Tt=["aria-expanded"],Mt={class:"sr-only"},Ct=y(" Properties "),Lt=["onClick"],Ht={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Et={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},Dt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},jt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Zt={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},qt={key:1},At={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Bt=["aria-expanded"],St={class:"sr-only"},Pt=y(" Methods "),Vt=["onClick"],It={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Nt={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},Rt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},zt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Ft={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Ot={key:2},Jt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Kt=["aria-expanded"],Ut={class:"sr-only"},Yt=y(" Events "),Gt=["onClick"],Qt={key:0,class:"text-gray-200 text-sm font-semibold uppercase inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Wt=S({props:{properties:null,methods:null,events:null},setup(s){const d=s,x=Te(Ce).greater("lg"),C=N(!1),k=f(()=>{var p;return P.value?d.properties:(p=d.properties)==null?void 0:p.filter(m=>m.access!=="private")}),o=f(()=>{var p;return P.value?d.methods:(p=d.methods)==null?void 0:p.filter(m=>m.access!=="private")}),w=f(()=>{var p;return P.value?d.events:(p=d.events)==null?void 0:p.filter(m=>m.access!=="private")}),E=p=>{const m=document.getElementById(`doc-for-${p}`);m==null||m.scrollIntoView({behavior:I.value?void 0:"smooth",block:"start"})};return Me(x,()=>C.value=!0,{immediate:!0}),(p,m)=>{const L=je,v=Ze,l=O("router-link");return e(),n("div",{class:j(["grid sm:grid-cols-2 mb-10",s.events&&s.events.length?"md:grid-cols-3":null])},[t(k)&&t(k).length?(e(),n("div",xt,[u(t(U),{"default-open":C.value},{default:M(({open:i})=>[u(t(Y),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",wt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Mt,$(i?"Shrink":"Expand"),1),u(L,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(v,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Tt),Ct])]),_:2},1024),u(t(G),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(b,null,H(t(k),c=>(e(),n("li",{key:t(Z)(c),class:"cursor-pointer mb-14 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-green-500",onClick:D=>E(t(Z)(c))},[u(l,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(Z)(c)}},class:"mx-2"},{default:M(()=>[y($(c.name),1)]),_:2},1032,["to"]),r("span",Ht,[c.scope==="static"?(e(),n("span",Et,"S")):a("",!0),c.abstract?(e(),n("span",Dt,"A")):a("",!0),c.deprecated?(e(),n("span",jt,"D")):a("",!0),c.access==="private"?(e(),n("span",Zt,"P")):a("",!0)])],8,Lt))),128))]),_:1})]),_:1},8,["default-open"])])):a("",!0),t(o)&&t(o).length?(e(),n("div",qt,[u(t(U),{"default-open":C.value},{default:M(({open:i})=>[u(t(Y),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",At,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",St,$(i?"Shrink":"Expand"),1),u(L,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(v,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Bt),Pt])]),_:2},1024),u(t(G),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(b,null,H(t(o),c=>(e(),n("li",{key:t(Z)(c),class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-green-500",onClick:D=>E(t(Z)(c))},[u(l,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(Z)(c)}},class:"mx-2"},{default:M(()=>[y($(c.name),1)]),_:2},1032,["to"]),r("span",It,[c.scope==="static"?(e(),n("span",Nt,"S")):a("",!0),c.abstract?(e(),n("span",Rt,"A")):a("",!0),c.deprecated?(e(),n("span",zt,"D")):a("",!0),c.access==="private"?(e(),n("span",Ft,"P")):a("",!0)])],8,Vt))),128))]),_:1})]),_:1},8,["default-open"])])):a("",!0),t(w)&&t(w).length?(e(),n("div",Ot,[u(t(U),{"default-open":C.value},{default:M(({open:i})=>[u(t(Y),{class:"focus:outline-none",tabindex:"-1"},{default:M(()=>[r("div",Jt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Ut,$(i?"Shrink":"Expand"),1),u(L,{class:j(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),u(v,{class:j(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Kt),Yt])]),_:2},1024),u(t(G),{as:"ul",class:"no-list !mt-0 pl-2"},{default:M(()=>[(e(!0),n(b,null,H(t(w),c=>(e(),n("li",{key:c.name,class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-green-500",onClick:D=>E(`e-${c.name}`)},[u(l,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${c.name}`}},class:"mx-2"},{default:M(()=>[y($(c.name),1)]),_:2},1032,["to"]),c.deprecated?(e(),n("span",Qt,"D")):a("",!0)],8,Gt))),128))]),_:1})]),_:1},8,["default-open"])])):a("",!0)],2)}}}),Xt=["id"],es={class:"flex items-center"},ts={class:"inline-block mr-2"},ss={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},ns={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},os={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},rs={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},as={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},cs=["innerHTML"],ls={class:"grid pl-2.5"},is=["innerHTML"],ds={class:"font-semibold mt-3"},us=y(" Type: "),ms={key:1,class:"mt-3"},ps=y(" Default: "),hs=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),_s=S({props:{prop:null},setup(s){const d=s,g=R(),x=z(),C=F(),k=f(()=>C.state.docs),o=f(()=>{var p;return q((p=A(d.prop.description,k.value,g,x))!=null?p:"")}),w=f(()=>typeof d.prop.deprecated=="string"?q(A(d.prop.deprecated,k.value,g,x)):""),E=f(()=>`${d.prop.scope==="static"?"s-":""}${d.prop.name}`);return(p,m)=>{var v;const L=O("router-link");return e(),n(b,null,[r("div",{id:`doc-for-${t(E)}`,class:"scroll-to mb-8"},[u(J,{class:"float-right mt-8",meta:s.prop.meta},null,8,["meta"]),r("div",es,[r("h3",ts,[u(L,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(E)}}},{default:M(()=>[y("."+$(s.prop.name),1)]),_:1},8,["to"])]),r("span",ss,[s.prop.scope==="static"?(e(),n("span",ns,"Static")):a("",!0),s.prop.readonly?(e(),n("span",os,"Read-only")):a("",!0),s.prop.deprecated?(e(),n("span",rs,"Deprecated")):a("",!0),s.prop.access==="private"?(e(),n("span",as,"Private")):a("",!0)])]),s.prop.deprecated&&t(w)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(w)},null,8,cs)):a("",!0),r("div",ls,[r("p",{class:"noprose",innerHTML:t(o)},null,8,is),s.prop.props&&s.prop.props.length>0?(e(),_(K,{key:0,parameters:s.prop.props},null,8,["parameters"])):a("",!0),r("div",ds,[us,(e(!0),n(b,null,H(s.prop.type,l=>(e(),_(B,{key:t(V)(l),names:l,nullable:s.prop.nullable},null,8,["names","nullable"]))),128))]),s.prop.default?(e(),n("div",ms,[ps,r("code",null,$(s.prop.default),1)])):a("",!0),(v=s.prop.see)!=null&&v.length?(e(),_(X,{key:2,see:s.prop.see},null,8,["see"])):a("",!0)])],8,Xt),hs],64)}}}),fs={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},ys={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},gs=["id"],vs={class:"font-bold !mt-3"},ks={key:0},bs=y(" extends "),$s={key:1},xs=y(" implements "),ws=["innerHTML"],Ts={key:1,class:"grid"},Ms=r("h2",{class:"!mt-3"},"Constructor",-1),Cs=r("br",null,null,-1),Ls=y(");"),Hs={key:2,class:"!mt-4"},Es={key:3},Ds={key:4},Ps=S({setup(s){var v;Q.configure({ignoreUnescapedHTML:!0});const d=R(),g=z(),x=F(),C=N(),k=f(()=>x.state.docs),o=(v=k.value)==null?void 0:v.classes.find(l=>l.name===g.params.class),w=f(()=>q(A(o==null?void 0:o.description,k.value,d,g))),E=f(()=>!(o!=null&&o.construct)||!o.construct.params?null:o.construct.params.filter(l=>!l.name.includes("."))),p=f(()=>{if(!(o!=null&&o.props))return null;let l=o.props;return P.value||(l=l.filter(i=>i.access!=="private")),l.sort((i,c)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${c.scope==="static"?"ZZZ":""}${c.name}`))}),m=f(()=>{if(!(o!=null&&o.methods))return null;let l=o.methods;return P.value||(l=l.filter(i=>i.access!=="private")),l.sort((i,c)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${c.scope==="static"?"ZZZ":""}${c.name}`))}),L=l=>l;return Le({title:f(()=>{var l;return`discord.js | ${(l=o==null?void 0:o.name)!=null?l:""}`})}),He(()=>{const l=document.getElementById(`doc-for-${g.query.scrollTo}`);l==null||l.scrollIntoView({behavior:I.value?void 0:"smooth",block:"start"});const i=document.getElementById("container");!g.query.scrollTo&&i&&i.scrollTop>200&&i.scrollTo({top:0,behavior:I.value?void 0:"smooth"}),C.value&&Q.highlightElement(C.value)}),Ee(()=>g.query.scrollTo,()=>{const l=document.getElementById(`doc-for-${g.query.scrollTo}`);l==null||l.scrollIntoView({behavior:I.value?void 0:"smooth",block:"start"})}),(l,i)=>{var c,D,h,ee,te,se,ne,oe,re,ae,ce,le,ie,de,ue,me,pe,he,_e,fe,ye;return e(),n("div",fs,[u(J,{class:"float-right mt-2",meta:(c=t(o))==null?void 0:c.meta},null,8,["meta"]),r("div",ys,[r("h1",{id:`doc-for-${(D=t(o))==null?void 0:D.name}`,class:"!mb-3"},$((h=t(o))==null?void 0:h.name),9,gs),r("p",vs,[(ee=t(o))!=null&&ee.extends?(e(),n("span",ks,[bs,typeof((te=t(o))==null?void 0:te.extends[0])=="string"?(e(),_(W,{key:0,type:L((se=t(o))==null?void 0:se.extends)},null,8,["type"])):(e(!0),n(b,{key:1},H((ne=t(o))==null?void 0:ne.extends,T=>(e(),_(B,{key:t(V)(T),names:T},null,8,["names"]))),128))])):a("",!0),(oe=t(o))!=null&&oe.implements?(e(),n("span",$s,[xs,typeof((re=t(o))==null?void 0:re.implements[0])=="string"?(e(),_(W,{key:0,type:L((ae=t(o))==null?void 0:ae.implements)},null,8,["type"])):(e(!0),n(b,{key:1},H((ce=t(o))==null?void 0:ce.implements,T=>(e(),_(B,{key:t(V)(T),names:T},null,8,["names"]))),128))])):a("",!0)]),(le=t(o))!=null&&le.description?(e(),n("p",{key:0,class:"!mb-2",innerHTML:t(w)},null,8,ws)):a("",!0),(ie=t(o))!=null&&ie.construct?(e(),n("div",Ts,[Ms,r("pre",{ref_key:"codeblock",ref:C,class:"javascript"},[r("code",null,[y("const { "+$((de=t(o))==null?void 0:de.name)+` } = require('gl-brawlstars');
`,1),Cs,y("new "+$((ue=t(o))==null?void 0:ue.name)+"(",1),(e(!0),n(b,null,H(t(E),(T,ke)=>{var ge,ve;return e(),n("span",{key:T.name},$(T.name)+$(((ve=(ge=t(E))==null?void 0:ge.length)!=null?ve:1)-1!==ke?", ":""),1)}),128)),Ls])],512),t(o).construct.params?(e(),_(K,{key:0,parameters:t(o).construct.params},null,8,["parameters"])):a("",!0)])):a("",!0),u(Wt,{class:"mt-3",properties:(me=t(o))==null?void 0:me.props,methods:(pe=t(o))==null?void 0:pe.methods,events:(he=t(o))==null?void 0:he.events},null,8,["properties","methods","events"]),t(p)&&t(p).length?(e(),n("h2",Hs,"Properties")):a("",!0),(e(!0),n(b,null,H(t(p),T=>(e(),_(_s,{key:t(Z)(T),prop:T},null,8,["prop"]))),128)),t(m)&&t(m).length?(e(),n("h2",Es,"Methods")):a("",!0),(e(!0),n(b,null,H(t(m),T=>(e(),_($t,{key:t(Z)(T),method:T},null,8,["method"]))),128)),((_e=t(o))==null?void 0:_e.events)&&((fe=t(o))==null?void 0:fe.events.length)?(e(),n("h2",Ds,"Events")):a("",!0),(e(!0),n(b,null,H((ye=t(o))==null?void 0:ye.events,T=>(e(),_(ze,{key:`e-${T.name}`,event:T},null,8,["event"]))),128))])])}}});export{Ps as default};
