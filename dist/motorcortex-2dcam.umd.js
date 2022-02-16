!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-2dcam"]=e(t.MotorCortex)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=function(t){return t&&t.Math==Math&&t},g=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof d&&d)||function(){return this}()||Function("return this")(),v={},b=function(t){try{return!!t()}catch(t){return!0}},m=!b((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),x=!b((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),w=x,O=Function.prototype.call,P=w?O.bind(O):function(){return O.apply(O,arguments)},j={},S={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,T=E&&!S.call({1:2},1);j.f=T?function(t){var e=E(this,t);return!!e&&e.enumerable}:S;var I,M,R=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},k=x,A=Function.prototype,C=A.bind,F=A.call,z=k&&C.bind(F,F),D=k?function(t){return t&&z(t)}:function(t){return t&&function(){return F.apply(t,arguments)}},_=D,Y=_({}.toString),L=_("".slice),X=function(t){return L(Y(t),8,-1)},$=D,N=b,V=X,B=g.Object,G=$("".split),U=N((function(){return!B("z").propertyIsEnumerable(0)}))?function(t){return"String"==V(t)?G(t,""):B(t)}:B,q=g.TypeError,K=function(t){if(null==t)throw q("Can't call method on "+t);return t},W=U,Z=K,H=function(t){return W(Z(t))},J=function(t){return"function"==typeof t},Q=J,tt=function(t){return"object"==typeof t?null!==t:Q(t)},et=g,nt=J,rt=function(t){return nt(t)?t:void 0},ot=function(t,e){return arguments.length<2?rt(et[t]):et[t]&&et[t][e]},it=D({}.isPrototypeOf),at=g,ut=ot("navigator","userAgent")||"",ct=at.process,lt=at.Deno,st=ct&&ct.versions||lt&&lt.version,ft=st&&st.v8;ft&&(M=(I=ft.split("."))[0]>0&&I[0]<4?1:+(I[0]+I[1])),!M&&ut&&(!(I=ut.match(/Edge\/(\d+)/))||I[1]>=74)&&(I=ut.match(/Chrome\/(\d+)/))&&(M=+I[1]);var pt=M,ht=pt,dt=b,yt=!!Object.getOwnPropertySymbols&&!dt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ht&&ht<41})),gt=yt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,vt=ot,bt=J,mt=it,xt=gt,wt=g.Object,Ot=xt?function(t){return"symbol"==typeof t}:function(t){var e=vt("Symbol");return bt(e)&&mt(e.prototype,wt(t))},Pt=g.String,jt=function(t){try{return Pt(t)}catch(t){return"Object"}},St=J,Et=jt,Tt=g.TypeError,It=function(t){if(St(t))return t;throw Tt(Et(t)+" is not a function")},Mt=function(t,e){var n=t[e];return null==n?void 0:It(n)},Rt=P,kt=J,At=tt,Ct=g.TypeError,Ft={exports:{}},zt=g,Dt=Object.defineProperty,_t=function(t,e){try{Dt(zt,t,{value:e,configurable:!0,writable:!0})}catch(n){zt[t]=e}return e},Yt=_t,Lt="__core-js_shared__",Xt=g[Lt]||Yt(Lt,{}),$t=Xt;(Ft.exports=function(t,e){return $t[t]||($t[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Nt=K,Vt=g.Object,Bt=function(t){return Vt(Nt(t))},Gt=Bt,Ut=D({}.hasOwnProperty),qt=Object.hasOwn||function(t,e){return Ut(Gt(t),e)},Kt=D,Wt=0,Zt=Math.random(),Ht=Kt(1..toString),Jt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ht(++Wt+Zt,36)},Qt=g,te=Ft.exports,ee=qt,ne=Jt,re=yt,oe=gt,ie=te("wks"),ae=Qt.Symbol,ue=ae&&ae.for,ce=oe?ae:ae&&ae.withoutSetter||ne,le=function(t){if(!ee(ie,t)||!re&&"string"!=typeof ie[t]){var e="Symbol."+t;re&&ee(ae,t)?ie[t]=ae[t]:ie[t]=oe&&ue?ue(e):ce(e)}return ie[t]},se=P,fe=tt,pe=Ot,he=Mt,de=function(t,e){var n,r;if("string"===e&&kt(n=t.toString)&&!At(r=Rt(n,t)))return r;if(kt(n=t.valueOf)&&!At(r=Rt(n,t)))return r;if("string"!==e&&kt(n=t.toString)&&!At(r=Rt(n,t)))return r;throw Ct("Can't convert object to primitive value")},ye=le,ge=g.TypeError,ve=ye("toPrimitive"),be=function(t,e){if(!fe(t)||pe(t))return t;var n,r=he(t,ve);if(r){if(void 0===e&&(e="default"),n=se(r,t,e),!fe(n)||pe(n))return n;throw ge("Can't convert object to primitive value")}return void 0===e&&(e="number"),de(t,e)},me=Ot,xe=function(t){var e=be(t,"string");return me(e)?e:e+""},we=tt,Oe=g.document,Pe=we(Oe)&&we(Oe.createElement),je=function(t){return Pe?Oe.createElement(t):{}},Se=je,Ee=!m&&!b((function(){return 7!=Object.defineProperty(Se("div"),"a",{get:function(){return 7}}).a})),Te=m,Ie=P,Me=j,Re=R,ke=H,Ae=xe,Ce=qt,Fe=Ee,ze=Object.getOwnPropertyDescriptor;v.f=Te?ze:function(t,e){if(t=ke(t),e=Ae(e),Fe)try{return ze(t,e)}catch(t){}if(Ce(t,e))return Re(!Ie(Me.f,t,e),t[e])};var De={},_e=m&&b((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ye=g,Le=tt,Xe=Ye.String,$e=Ye.TypeError,Ne=function(t){if(Le(t))return t;throw $e(Xe(t)+" is not an object")},Ve=m,Be=Ee,Ge=_e,Ue=Ne,qe=xe,Ke=g.TypeError,We=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,He="enumerable",Je="configurable",Qe="writable";De.f=Ve?Ge?function(t,e,n){if(Ue(t),e=qe(e),Ue(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Qe in n&&!n.writable){var r=Ze(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Je in n?n.configurable:r.configurable,enumerable:He in n?n.enumerable:r.enumerable,writable:!1})}return We(t,e,n)}:We:function(t,e,n){if(Ue(t),e=qe(e),Ue(n),Be)try{return We(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ke("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var tn=De,en=R,nn=m?function(t,e,n){return tn.f(t,e,en(1,n))}:function(t,e,n){return t[e]=n,t},rn={exports:{}},on=J,an=Xt,un=D(Function.toString);on(an.inspectSource)||(an.inspectSource=function(t){return un(t)});var cn,ln,sn,fn=an.inspectSource,pn=J,hn=fn,dn=g.WeakMap,yn=pn(dn)&&/native code/.test(hn(dn)),gn=Ft.exports,vn=Jt,bn=gn("keys"),mn=function(t){return bn[t]||(bn[t]=vn(t))},xn={},wn=yn,On=g,Pn=D,jn=tt,Sn=nn,En=qt,Tn=Xt,In=mn,Mn=xn,Rn="Object already initialized",kn=On.TypeError,An=On.WeakMap;if(wn||Tn.state){var Cn=Tn.state||(Tn.state=new An),Fn=Pn(Cn.get),zn=Pn(Cn.has),Dn=Pn(Cn.set);cn=function(t,e){if(zn(Cn,t))throw new kn(Rn);return e.facade=t,Dn(Cn,t,e),e},ln=function(t){return Fn(Cn,t)||{}},sn=function(t){return zn(Cn,t)}}else{var _n=In("state");Mn[_n]=!0,cn=function(t,e){if(En(t,_n))throw new kn(Rn);return e.facade=t,Sn(t,_n,e),e},ln=function(t){return En(t,_n)?t[_n]:{}},sn=function(t){return En(t,_n)}}var Yn={set:cn,get:ln,has:sn,enforce:function(t){return sn(t)?ln(t):cn(t,{})},getterFor:function(t){return function(e){var n;if(!jn(e)||(n=ln(e)).type!==t)throw kn("Incompatible receiver, "+t+" required");return n}}},Ln=m,Xn=qt,$n=Function.prototype,Nn=Ln&&Object.getOwnPropertyDescriptor,Vn=Xn($n,"name"),Bn=Vn&&"something"===function(){}.name,Gn=Vn&&(!Ln||Ln&&Nn($n,"name").configurable),Un=g,qn=J,Kn=qt,Wn=nn,Zn=_t,Hn=fn,Jn={EXISTS:Vn,PROPER:Bn,CONFIGURABLE:Gn}.CONFIGURABLE,Qn=Yn.get,tr=Yn.enforce,er=String(String).split("String");(rn.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;qn(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Kn(n,"name")||Jn&&n.name!==c)&&Wn(n,"name",c),(o=tr(n)).source||(o.source=er.join("string"==typeof c?c:""))),t!==Un?(i?!u&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Wn(t,e,n)):a?t[e]=n:Zn(e,n)})(Function.prototype,"toString",(function(){return qn(this)&&Qn(this).source||Hn(this)}));var nr={},rr=Math.ceil,or=Math.floor,ir=function(t){var e=+t;return e!=e||0===e?0:(e>0?or:rr)(e)},ar=ir,ur=Math.max,cr=Math.min,lr=function(t,e){var n=ar(t);return n<0?ur(n+e,0):cr(n,e)},sr=ir,fr=Math.min,pr=function(t){return t>0?fr(sr(t),9007199254740991):0},hr=pr,dr=function(t){return hr(t.length)},yr=H,gr=lr,vr=dr,br=function(t){return function(e,n,r){var o,i=yr(e),a=vr(i),u=gr(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},mr={includes:br(!0),indexOf:br(!1)},xr=qt,wr=H,Or=mr.indexOf,Pr=xn,jr=D([].push),Sr=function(t,e){var n,r=wr(t),o=0,i=[];for(n in r)!xr(Pr,n)&&xr(r,n)&&jr(i,n);for(;e.length>o;)xr(r,n=e[o++])&&(~Or(i,n)||jr(i,n));return i},Er=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Tr=Sr,Ir=Er.concat("length","prototype");nr.f=Object.getOwnPropertyNames||function(t){return Tr(t,Ir)};var Mr={};Mr.f=Object.getOwnPropertySymbols;var Rr=ot,kr=nr,Ar=Mr,Cr=Ne,Fr=D([].concat),zr=Rr("Reflect","ownKeys")||function(t){var e=kr.f(Cr(t)),n=Ar.f;return n?Fr(e,n(t)):e},Dr=qt,_r=zr,Yr=v,Lr=De,Xr=b,$r=J,Nr=/#|\.prototype\./,Vr=function(t,e){var n=Gr[Br(t)];return n==qr||n!=Ur&&($r(e)?Xr(e):!!e)},Br=Vr.normalize=function(t){return String(t).replace(Nr,".").toLowerCase()},Gr=Vr.data={},Ur=Vr.NATIVE="N",qr=Vr.POLYFILL="P",Kr=Vr,Wr=g,Zr=v.f,Hr=nn,Jr=rn.exports,Qr=_t,to=function(t,e,n){for(var r=_r(e),o=Lr.f,i=Yr.f,a=0;a<r.length;a++){var u=r[a];Dr(t,u)||n&&Dr(n,u)||o(t,u,i(e,u))}},eo=Kr,no=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,l=t.stat;if(n=c?Wr:l?Wr[u]||Qr(u,{}):(Wr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Zr(n,r))&&a.value:n[r],!eo(c?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;to(i,o)}(t.sham||o&&o.sham)&&Hr(i,"sham",!0),Jr(n,r,i,t)}},ro=X,oo=Array.isArray||function(t){return"Array"==ro(t)},io=xe,ao=De,uo=R,co=function(t,e,n){var r=io(e);r in t?ao.f(t,r,uo(0,n)):t[r]=n},lo={};lo[le("toStringTag")]="z";var so=g,fo="[object z]"===String(lo),po=J,ho=X,yo=le("toStringTag"),go=so.Object,vo="Arguments"==ho(function(){return arguments}()),bo=fo?ho:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=go(t),yo))?n:vo?ho(e):"Object"==(r=ho(e))&&po(e.callee)?"Arguments":r},mo=D,xo=b,wo=J,Oo=bo,Po=fn,jo=function(){},So=[],Eo=ot("Reflect","construct"),To=/^\s*(?:class|function)\b/,Io=mo(To.exec),Mo=!To.exec(jo),Ro=function(t){if(!wo(t))return!1;try{return Eo(jo,So,t),!0}catch(t){return!1}},ko=function(t){if(!wo(t))return!1;switch(Oo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Mo||!!Io(To,Po(t))}catch(t){return!0}};ko.sham=!0;var Ao=!Eo||xo((function(){var t;return Ro(Ro.call)||!Ro(Object)||!Ro((function(){t=!0}))||t}))?ko:Ro,Co=g,Fo=oo,zo=Ao,Do=tt,_o=le("species"),Yo=Co.Array,Lo=function(t){var e;return Fo(t)&&(e=t.constructor,(zo(e)&&(e===Yo||Fo(e.prototype))||Do(e)&&null===(e=e[_o]))&&(e=void 0)),void 0===e?Yo:e},Xo=b,$o=pt,No=le("species"),Vo=no,Bo=g,Go=b,Uo=oo,qo=tt,Ko=Bt,Wo=dr,Zo=co,Ho=function(t,e){return new(Lo(t))(0===e?0:e)},Jo=function(t){return $o>=51||!Xo((function(){var e=[];return(e.constructor={})[No]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Qo=pt,ti=le("isConcatSpreadable"),ei=9007199254740991,ni="Maximum allowed index exceeded",ri=Bo.TypeError,oi=Qo>=51||!Go((function(){var t=[];return t[ti]=!1,t.concat()[0]!==t})),ii=Jo("concat"),ai=function(t){if(!qo(t))return!1;var e=t[ti];return void 0!==e?!!e:Uo(t)};Vo({target:"Array",proto:!0,forced:!oi||!ii},{concat:function(t){var e,n,r,o,i,a=Ko(this),u=Ho(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(ai(i=-1===e?a:arguments[e])){if(c+(o=Wo(i))>ei)throw ri(ni);for(n=0;n<o;n++,c++)n in i&&Zo(u,c,i[n])}else{if(c>=ei)throw ri(ni);Zo(u,c++,i)}return u.length=c,u}});var ui=bo,ci=g.String,li=function(t){if("Symbol"===ui(t))throw TypeError("Cannot convert a Symbol value to a string");return ci(t)},si=K,fi=li,pi=D("".replace),hi="[\t\n\v\f\r                　\u2028\u2029\ufeff]",di=RegExp("^"+hi+hi+"*"),yi=RegExp(hi+hi+"*$"),gi=function(t){return function(e){var n=fi(si(e));return 1&t&&(n=pi(n,di,"")),2&t&&(n=pi(n,yi,"")),n}},vi={start:gi(1),end:gi(2),trim:gi(3)},bi=g,mi=b,xi=li,wi=vi.trim,Oi=D("".charAt),Pi=bi.parseFloat,ji=bi.Symbol,Si=ji&&ji.iterator,Ei=1/Pi("\t\n\v\f\r                　\u2028\u2029\ufeff-0")!=-1/0||Si&&!mi((function(){Pi(Object(Si))}))?function(t){var e=wi(xi(t)),n=Pi(e);return 0===n&&"-"==Oi(e,0)?-0:n}:Pi;no({global:!0,forced:parseFloat!=Ei},{parseFloat:Ei});var Ti=Ne,Ii=b,Mi=g.RegExp,Ri=Ii((function(){var t=Mi("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),ki=Ri||Ii((function(){return!Mi("a","y").sticky})),Ai={BROKEN_CARET:Ri||Ii((function(){var t=Mi("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:ki,UNSUPPORTED_Y:Ri},Ci={},Fi=Sr,zi=Er,Di=Object.keys||function(t){return Fi(t,zi)},_i=m,Yi=_e,Li=De,Xi=Ne,$i=H,Ni=Di;Ci.f=_i&&!Yi?Object.defineProperties:function(t,e){Xi(t);for(var n,r=$i(e),o=Ni(e),i=o.length,a=0;i>a;)Li.f(t,n=o[a++],r[n]);return t};var Vi,Bi=ot("document","documentElement"),Gi=Ne,Ui=Ci,qi=Er,Ki=xn,Wi=Bi,Zi=je,Hi=mn("IE_PROTO"),Ji=function(){},Qi=function(t){return"<script>"+t+"</"+"script>"},ta=function(t){t.write(Qi("")),t.close();var e=t.parentWindow.Object;return t=null,e},ea=function(){try{Vi=new ActiveXObject("htmlfile")}catch(t){}var t,e;ea="undefined"!=typeof document?document.domain&&Vi?ta(Vi):((e=Zi("iframe")).style.display="none",Wi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Qi("document.F=Object")),t.close(),t.F):ta(Vi);for(var n=qi.length;n--;)delete ea.prototype[qi[n]];return ea()};Ki[Hi]=!0;var na,ra,oa=Object.create||function(t,e){var n;return null!==t?(Ji.prototype=Gi(t),n=new Ji,Ji.prototype=null,n[Hi]=t):n=ea(),void 0===e?n:Ui.f(n,e)},ia=b,aa=g.RegExp,ua=ia((function(){var t=aa(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),ca=b,la=g.RegExp,sa=ca((function(){var t=la("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),fa=P,pa=D,ha=li,da=function(){var t=Ti(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},ya=Ai,ga=Ft.exports,va=oa,ba=Yn.get,ma=ua,xa=sa,wa=ga("native-string-replace",String.prototype.replace),Oa=RegExp.prototype.exec,Pa=Oa,ja=pa("".charAt),Sa=pa("".indexOf),Ea=pa("".replace),Ta=pa("".slice),Ia=(ra=/b*/g,fa(Oa,na=/a/,"a"),fa(Oa,ra,"a"),0!==na.lastIndex||0!==ra.lastIndex),Ma=ya.BROKEN_CARET,Ra=void 0!==/()??/.exec("")[1];(Ia||Ra||Ma||ma||xa)&&(Pa=function(t){var e,n,r,o,i,a,u,c=this,l=ba(c),s=ha(t),f=l.raw;if(f)return f.lastIndex=c.lastIndex,e=fa(Pa,f,s),c.lastIndex=f.lastIndex,e;var p=l.groups,h=Ma&&c.sticky,d=fa(da,c),y=c.source,g=0,v=s;if(h&&(d=Ea(d,"y",""),-1===Sa(d,"g")&&(d+="g"),v=Ta(s,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==ja(s,c.lastIndex-1))&&(y="(?: "+y+")",v=" "+v,g++),n=new RegExp("^(?:"+y+")",d)),Ra&&(n=new RegExp("^"+y+"$(?!\\s)",d)),Ia&&(r=c.lastIndex),o=fa(Oa,h?n:c,v),h?o?(o.input=Ta(o.input,g),o[0]=Ta(o[0],g),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:Ia&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),Ra&&o&&o.length>1&&fa(wa,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=va(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var ka=Pa;no({target:"RegExp",proto:!0,forced:/./.exec!==ka},{exec:ka});var Aa=x,Ca=Function.prototype,Fa=Ca.apply,za=Ca.call,Da="object"==typeof Reflect&&Reflect.apply||(Aa?za.bind(Fa):function(){return za.apply(Fa,arguments)}),_a=D,Ya=rn.exports,La=ka,Xa=b,$a=le,Na=nn,Va=$a("species"),Ba=RegExp.prototype,Ga=function(t,e,n,r){var o=$a(t),i=!Xa((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!Xa((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Va]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!a||n){var u=_a(/./[o]),c=e(o,""[t],(function(t,e,n,r,o){var a=_a(t),c=e.exec;return c===La||c===Ba.exec?i&&!o?{done:!0,value:u(e,n,r)}:{done:!0,value:a(n,e,r)}:{done:!1}}));Ya(String.prototype,t,c[0]),Ya(Ba,o,c[1])}r&&Na(Ba[o],"sham",!0)},Ua=D,qa=ir,Ka=li,Wa=K,Za=Ua("".charAt),Ha=Ua("".charCodeAt),Ja=Ua("".slice),Qa=function(t){return function(e,n){var r,o,i=Ka(Wa(e)),a=qa(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=Ha(i,a))<55296||r>56319||a+1===u||(o=Ha(i,a+1))<56320||o>57343?t?Za(i,a):r:t?Ja(i,a,a+2):o-56320+(r-55296<<10)+65536}},tu={codeAt:Qa(!1),charAt:Qa(!0)}.charAt,eu=function(t,e,n){return e+(n?tu(t,e).length:1)},nu=D,ru=Bt,ou=Math.floor,iu=nu("".charAt),au=nu("".replace),uu=nu("".slice),cu=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,lu=/\$([$&'`]|\d{1,2})/g,su=P,fu=Ne,pu=J,hu=X,du=ka,yu=g.TypeError,gu=function(t,e){var n=t.exec;if(pu(n)){var r=su(n,t,e);return null!==r&&fu(r),r}if("RegExp"===hu(t))return su(du,t,e);throw yu("RegExp#exec called on incompatible receiver")},vu=Da,bu=P,mu=D,xu=Ga,wu=b,Ou=Ne,Pu=J,ju=ir,Su=pr,Eu=li,Tu=K,Iu=eu,Mu=Mt,Ru=function(t,e,n,r,o,i){var a=n+t.length,u=r.length,c=lu;return void 0!==o&&(o=ru(o),c=cu),au(i,c,(function(i,c){var l;switch(iu(c,0)){case"$":return"$";case"&":return t;case"`":return uu(e,0,n);case"'":return uu(e,a);case"<":l=o[uu(c,1,-1)];break;default:var s=+c;if(0===s)return i;if(s>u){var f=ou(s/10);return 0===f?i:f<=u?void 0===r[f-1]?iu(c,1):r[f-1]+iu(c,1):i}l=r[s-1]}return void 0===l?"":l}))},ku=gu,Au=le("replace"),Cu=Math.max,Fu=Math.min,zu=mu([].concat),Du=mu([].push),_u=mu("".indexOf),Yu=mu("".slice),Lu="$0"==="a".replace(/./,"$0"),Xu=!!/./[Au]&&""===/./[Au]("a","$0");xu("replace",(function(t,e,n){var r=Xu?"$":"$0";return[function(t,n){var r=Tu(this),o=null==t?void 0:Mu(t,Au);return o?bu(o,t,r,n):bu(e,Eu(r),t,n)},function(t,o){var i=Ou(this),a=Eu(t);if("string"==typeof o&&-1===_u(o,r)&&-1===_u(o,"$<")){var u=n(e,i,a,o);if(u.done)return u.value}var c=Pu(o);c||(o=Eu(o));var l=i.global;if(l){var s=i.unicode;i.lastIndex=0}for(var f=[];;){var p=ku(i,a);if(null===p)break;if(Du(f,p),!l)break;""===Eu(p[0])&&(i.lastIndex=Iu(a,Su(i.lastIndex),s))}for(var h,d="",y=0,g=0;g<f.length;g++){for(var v=Eu((p=f[g])[0]),b=Cu(Fu(ju(p.index),a.length),0),m=[],x=1;x<p.length;x++)Du(m,void 0===(h=p[x])?h:String(h));var w=p.groups;if(c){var O=zu([v],m,b,a);void 0!==w&&Du(O,w);var P=Eu(vu(o,void 0,O))}else P=Ru(v,a,b,m,w,o);b>=y&&(d+=Yu(a,y,b)+P,y=b+v.length)}return d+Yu(a,y)}]}),!!wu((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!Lu||Xu);var $u=tt,Nu=X,Vu=le("match"),Bu=Ao,Gu=jt,Uu=g.TypeError,qu=Ne,Ku=function(t){if(Bu(t))return t;throw Uu(Gu(t)+" is not a constructor")},Wu=le("species"),Zu=lr,Hu=dr,Ju=co,Qu=g.Array,tc=Math.max,ec=Da,nc=P,rc=D,oc=Ga,ic=function(t){var e;return $u(t)&&(void 0!==(e=t[Vu])?!!e:"RegExp"==Nu(t))},ac=Ne,uc=K,cc=function(t,e){var n,r=qu(t).constructor;return void 0===r||null==(n=qu(r)[Wu])?e:Ku(n)},lc=eu,sc=pr,fc=li,pc=Mt,hc=function(t,e,n){for(var r=Hu(t),o=Zu(e,r),i=Zu(void 0===n?r:n,r),a=Qu(tc(i-o,0)),u=0;o<i;o++,u++)Ju(a,u,t[o]);return a.length=u,a},dc=gu,yc=ka,gc=b,vc=Ai.UNSUPPORTED_Y,bc=4294967295,mc=Math.min,xc=[].push,wc=rc(/./.exec),Oc=rc(xc),Pc=rc("".slice),jc=!gc((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));oc("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=fc(uc(this)),o=void 0===n?bc:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!ic(t))return nc(e,r,t,o);for(var i,a,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),s=0,f=new RegExp(t.source,l+"g");(i=nc(yc,f,r))&&!((a=f.lastIndex)>s&&(Oc(c,Pc(r,s,i.index)),i.length>1&&i.index<r.length&&ec(xc,c,hc(i,1)),u=i[0].length,s=a,c.length>=o));)f.lastIndex===i.index&&f.lastIndex++;return s===r.length?!u&&wc(f,"")||Oc(c,""):Oc(c,Pc(r,s)),c.length>o?hc(c,0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:nc(e,this,t,n)}:e,[function(e,n){var o=uc(this),i=null==e?void 0:pc(e,t);return i?nc(i,e,o,n):nc(r,fc(o),e,n)},function(t,o){var i=ac(this),a=fc(t),u=n(r,i,a,o,r!==e);if(u.done)return u.value;var c=cc(i,RegExp),l=i.unicode,s=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(vc?"g":"y"),f=new c(vc?"^(?:"+i.source+")":i,s),p=void 0===o?bc:o>>>0;if(0===p)return[];if(0===a.length)return null===dc(f,a)?[a]:[];for(var h=0,d=0,y=[];d<a.length;){f.lastIndex=vc?0:d;var g,v=dc(f,vc?Pc(a,d):a);if(null===v||(g=mc(sc(f.lastIndex+(vc?d:0)),a.length))===h)d=lc(a,d,l);else{if(Oc(y,Pc(a,h,d)),y.length===p)return y;for(var b=1;b<=v.length-1;b++)if(Oc(y,v[b]),y.length===p)return y;d=h=g}}return Oc(y,Pc(a,h)),y}]}),!jc,vc);var Sc=function(){function t(e){i(this,t),this.el=e,this.matrix=this.getMatrix(e),this.viewportCenter=this.getViewPortCenter(),this.idlePosition=this.getIdlePosition()}return u(t,[{key:"getMatrix",value:function(t){return function(t){var e=window.getComputedStyle(t).transform;if(""===e||"none"===e)return{rotate:"0deg",scaleX:1,scaleY:1,skewX:"0deg",skewY:"0deg",translateX:"0px",translateY:"0px"};var n,r,o,i,a,u,c,l,s=e.split("(")[1].split(")")[0].split(",");return n=s,r=Math.atan2(n[1],n[0]),o=Math.pow(n[0],2)+Math.pow(n[1],2),i=Math.pow(n[2],2)+Math.pow(n[3],2),a=Math.sqrt(o),u=(n[0]*n[3]-n[2]*n[1])/a,c=Math.atan2(n[0]*n[2]+n[1]*n[3],o),l=Math.atan2(n[1]*n[3]+n[0]*n[2],i),{rotate:r/(Math.PI/180)+"deg",scaleX:a,scaleY:u,skewX:(1===o?c/(Math.PI/180):0)+"deg",skewY:(1===i?l/(Math.PI/180):0)+"deg",translateX:n[4]+"px",translateY:n[5]+"px"}}(t)}},{key:"getViewPortCenter",value:function(){var t=this.el.parentNode;return{x:parseFloat(getComputedStyle(t,null).width.replace("px",""))/2,y:parseFloat(getComputedStyle(t,null).height.replace("px",""))/2}}},{key:"getIdlePosition",value:function(){var t=this.el,e=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect();return{x:e.left-n.left,y:e.top-n.top}}},{key:"calcXYZoom",value:function(){var t=this.matrix,e=this.idlePosition,n=this.viewportCenter,r=n.x-e.x,i=n.y-e.y;return o(o({},{x:r/t.scaleX,y:i/t.scaleY}),{},{zoom:t.scaleX})}},{key:"createProgressFunction",value:function(t){var e=this._xyzoomToTranslate(t.start),n=this._xyzoomToTranslate(t.target),r=Math.atan(Math.abs(n.y-e.y)/Math.abs(n.x-e.x)),o=Math.sqrt(Math.pow(n.y-e.y,2)+Math.pow(n.x-e.x,2)),i=1,a=1;return n.x<e.x&&(i=-1),n.y<e.y&&(a=-1),function(t){var u=t*o;return{translateX:i*u*Math.cos(r)+e.x,translateY:a*u*Math.sin(r)+e.y,scale:(n.scale-e.scale)*t+e.scale}}}},{key:"_xyzoomToTranslate",value:function(t){var e=t.zoom*t.x,n=t.zoom*t.y,r=this.viewportCenter.x-e,o=this.viewportCenter.y-n;return{x:r-this.idlePosition.x,y:o-this.idlePosition.y,scale:t.zoom}}},{key:"createPathProgressFunction",value:function(t,e){var n=this,r=function(t){};t.transitionDuration>0&&(r=this.createProgressFunction({start:e,target:{x:t.startPoint.x,y:t.startPoint.y,zoom:e.zoom}}));var o=t.transitionDuration/(t.transitionDuration+t.alongPathDuration),i=t.alongPathDuration/(t.transitionDuration+t.alongPathDuration),a=(t.endTo-t.startFrom)*t.pathLength;return function(u){if(t.transitionDuration>0&&u<o)return r(u/o);var c=(u-o)/i,l=(t.zoom-e.zoom)*c+e.zoom,s=c*a+t.startFrom*t.pathLength,f=t.path.getPointAtLength(s),p=n._xyzoomToTranslate({x:f.x,y:f.y,zoom:l});return{translateX:p.x,translateY:p.y,scale:p.scale}}}}]),t}(),Ec=function(t){l(n,t);var e=h(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"getScratchValue",value:function(){return this.adaptor=new Sc(this.element),this.adaptor.calcXYZoom()}},{key:"onGetContext",value:function(){this.adaptor=new Sc(this.element),this.progressMethod=this.adaptor.createProgressFunction({start:this.initialValue,target:this.targetValue})}},{key:"onProgress",value:function(t){var e=this.progressMethod(t);this.element.style.transform="translateX(".concat(e.translateX,"px) translateY(").concat(e.translateY,"px) scaleX(").concat(e.scale,") scaleY(").concat(e.scale,")")}}]),n}(n.default.Effect),Tc=function(t){l(n,t);var e=h(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"onInitialise",value:function(){var t=this.props.duration,e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttributeNS(null,"d",this.targetValue.path),this.data={path:e,finalPoint:null,startPoint:null,zoom:this.targetValue.zoom,pathLength:e.getTotalLength(),startFrom:this.attrs.from?this.attrs.from:0,endTo:this.attrs.to?this.attrs.to:1,transitionDuration:this.attrs.transition?this.attrs.transition:0,get alongPathDuration(){return t-this.transitionDuration}},this.data.finalPoint=e.getPointAtLength(this.data.endTo*this.data.pathLength),this.data.startPoint=e.getPointAtLength(this.data.startFrom*this.data.pathLength),this.targetValue.x=this.data.finalPoint.x,this.targetValue.y=this.data.finalPoint.y}},{key:"onGetContext",value:function(){this.adaptor=new Sc(this.element),this.data.zoom=this.targetValue.zoom,this.progressMethod=this.adaptor.createPathProgressFunction(this.data,this.initialValue)}}]),n}(Ec);return{npm_name:"@donkeyclip/motorcortex-2dcam",version:"0.0.16",incidents:[{exportable:Ec,name:"ZoomTo",attributesValidationRules:{animatedAttrs:{type:"object",props:{position:{type:"object",props:{x:{type:"number",optional:!0,min:0},y:{type:"number",optional:!0,min:0},zoom:{type:"number",optional:!0,min:0}}}}}}},{exportable:Tc,name:"FollowPath",attributesValidationRules:{animatedAttrs:{type:"object",props:{position:{type:"object",props:{path:{type:"string",optional:!1},zoom:{type:"number",optional:!0,min:0}}}}},transition:{type:"number",integer:!0,min:0,optional:!0},from:{type:"number",min:0,max:1,optional:!0},to:{type:"number",min:0,max:1,optional:!0}}}],compositeAttributes:{position:["x","y","zoom","path"]}}}));
