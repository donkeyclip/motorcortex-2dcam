!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-2dcam"]=e(t.MotorCortex)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&f(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function p(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=function(t){return t&&t.Math==Math&&t},g=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof d&&d)||function(){return this}()||Function("return this")(),v={},m=function(t){try{return!!t()}catch(t){return!0}},b=!m((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),x=Function.prototype.call,w=x.bind?x.bind(x):function(){return x.apply(x,arguments)},O={},P={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor,S=j&&!P.call({1:2},1);O.f=S?function(t){var e=j(this,t);return!!e&&e.enumerable}:P;var E,T,I=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},M=Function.prototype,R=M.bind,k=M.call,A=R&&R.bind(k),C=R?function(t){return t&&A(k,t)}:function(t){return t&&function(){return k.apply(t,arguments)}},F=C,z=F({}.toString),_=F("".slice),D=function(t){return _(z(t),8,-1)},Y=C,X=m,L=D,$=g.Object,N=Y("".split),V=X((function(){return!$("z").propertyIsEnumerable(0)}))?function(t){return"String"==L(t)?N(t,""):$(t)}:$,B=g.TypeError,G=function(t){if(null==t)throw B("Can't call method on "+t);return t},U=V,q=G,K=function(t){return U(q(t))},W=function(t){return"function"==typeof t},Z=W,H=function(t){return"object"==typeof t?null!==t:Z(t)},J=g,Q=W,tt=function(t){return Q(t)?t:void 0},et=function(t,e){return arguments.length<2?tt(J[t]):J[t]&&J[t][e]},nt=C({}.isPrototypeOf),rt=g,ot=et("navigator","userAgent")||"",it=rt.process,at=rt.Deno,ut=it&&it.versions||at&&at.version,ct=ut&&ut.v8;ct&&(T=(E=ct.split("."))[0]>0&&E[0]<4?1:+(E[0]+E[1])),!T&&ot&&(!(E=ot.match(/Edge\/(\d+)/))||E[1]>=74)&&(E=ot.match(/Chrome\/(\d+)/))&&(T=+E[1]);var lt=T,st=lt,ft=m,pt=!!Object.getOwnPropertySymbols&&!ft((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&st&&st<41})),ht=pt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,dt=et,yt=W,gt=nt,vt=ht,mt=g.Object,bt=vt?function(t){return"symbol"==typeof t}:function(t){var e=dt("Symbol");return yt(e)&&gt(e.prototype,mt(t))},xt=g.String,wt=function(t){try{return xt(t)}catch(t){return"Object"}},Ot=W,Pt=wt,jt=g.TypeError,St=function(t){if(Ot(t))return t;throw jt(Pt(t)+" is not a function")},Et=function(t,e){var n=t[e];return null==n?void 0:St(n)},Tt=w,It=W,Mt=H,Rt=g.TypeError,kt={exports:{}},At=g,Ct=Object.defineProperty,Ft=function(t,e){try{Ct(At,t,{value:e,configurable:!0,writable:!0})}catch(n){At[t]=e}return e},zt=Ft,_t="__core-js_shared__",Dt=g[_t]||zt(_t,{}),Yt=Dt;(kt.exports=function(t,e){return Yt[t]||(Yt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Xt=G,Lt=g.Object,$t=function(t){return Lt(Xt(t))},Nt=$t,Vt=C({}.hasOwnProperty),Bt=Object.hasOwn||function(t,e){return Vt(Nt(t),e)},Gt=C,Ut=0,qt=Math.random(),Kt=Gt(1..toString),Wt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Kt(++Ut+qt,36)},Zt=g,Ht=kt.exports,Jt=Bt,Qt=Wt,te=pt,ee=ht,ne=Ht("wks"),re=Zt.Symbol,oe=re&&re.for,ie=ee?re:re&&re.withoutSetter||Qt,ae=function(t){if(!Jt(ne,t)||!te&&"string"!=typeof ne[t]){var e="Symbol."+t;te&&Jt(re,t)?ne[t]=re[t]:ne[t]=ee&&oe?oe(e):ie(e)}return ne[t]},ue=w,ce=H,le=bt,se=Et,fe=function(t,e){var n,r;if("string"===e&&It(n=t.toString)&&!Mt(r=Tt(n,t)))return r;if(It(n=t.valueOf)&&!Mt(r=Tt(n,t)))return r;if("string"!==e&&It(n=t.toString)&&!Mt(r=Tt(n,t)))return r;throw Rt("Can't convert object to primitive value")},pe=ae,he=g.TypeError,de=pe("toPrimitive"),ye=function(t,e){if(!ce(t)||le(t))return t;var n,r=se(t,de);if(r){if(void 0===e&&(e="default"),n=ue(r,t,e),!ce(n)||le(n))return n;throw he("Can't convert object to primitive value")}return void 0===e&&(e="number"),fe(t,e)},ge=bt,ve=function(t){var e=ye(t,"string");return ge(e)?e:e+""},me=H,be=g.document,xe=me(be)&&me(be.createElement),we=function(t){return xe?be.createElement(t):{}},Oe=we,Pe=!b&&!m((function(){return 7!=Object.defineProperty(Oe("div"),"a",{get:function(){return 7}}).a})),je=b,Se=w,Ee=O,Te=I,Ie=K,Me=ve,Re=Bt,ke=Pe,Ae=Object.getOwnPropertyDescriptor;v.f=je?Ae:function(t,e){if(t=Ie(t),e=Me(e),ke)try{return Ae(t,e)}catch(t){}if(Re(t,e))return Te(!Se(Ee.f,t,e),t[e])};var Ce={},Fe=g,ze=H,_e=Fe.String,De=Fe.TypeError,Ye=function(t){if(ze(t))return t;throw De(_e(t)+" is not an object")},Xe=b,Le=Pe,$e=Ye,Ne=ve,Ve=g.TypeError,Be=Object.defineProperty;Ce.f=Xe?Be:function(t,e,n){if($e(t),e=Ne(e),$e(n),Le)try{return Be(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ve("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ge=Ce,Ue=I,qe=b?function(t,e,n){return Ge.f(t,e,Ue(1,n))}:function(t,e,n){return t[e]=n,t},Ke={exports:{}},We=W,Ze=Dt,He=C(Function.toString);We(Ze.inspectSource)||(Ze.inspectSource=function(t){return He(t)});var Je,Qe,tn,en=Ze.inspectSource,nn=W,rn=en,on=g.WeakMap,an=nn(on)&&/native code/.test(rn(on)),un=kt.exports,cn=Wt,ln=un("keys"),sn=function(t){return ln[t]||(ln[t]=cn(t))},fn={},pn=an,hn=g,dn=C,yn=H,gn=qe,vn=Bt,mn=Dt,bn=sn,xn=fn,wn="Object already initialized",On=hn.TypeError,Pn=hn.WeakMap;if(pn||mn.state){var jn=mn.state||(mn.state=new Pn),Sn=dn(jn.get),En=dn(jn.has),Tn=dn(jn.set);Je=function(t,e){if(En(jn,t))throw new On(wn);return e.facade=t,Tn(jn,t,e),e},Qe=function(t){return Sn(jn,t)||{}},tn=function(t){return En(jn,t)}}else{var In=bn("state");xn[In]=!0,Je=function(t,e){if(vn(t,In))throw new On(wn);return e.facade=t,gn(t,In,e),e},Qe=function(t){return vn(t,In)?t[In]:{}},tn=function(t){return vn(t,In)}}var Mn={set:Je,get:Qe,has:tn,enforce:function(t){return tn(t)?Qe(t):Je(t,{})},getterFor:function(t){return function(e){var n;if(!yn(e)||(n=Qe(e)).type!==t)throw On("Incompatible receiver, "+t+" required");return n}}},Rn=b,kn=Bt,An=Function.prototype,Cn=Rn&&Object.getOwnPropertyDescriptor,Fn=kn(An,"name"),zn=Fn&&"something"===function(){}.name,_n=Fn&&(!Rn||Rn&&Cn(An,"name").configurable),Dn=g,Yn=W,Xn=Bt,Ln=qe,$n=Ft,Nn=en,Vn={EXISTS:Fn,PROPER:zn,CONFIGURABLE:_n}.CONFIGURABLE,Bn=Mn.get,Gn=Mn.enforce,Un=String(String).split("String");(Ke.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;Yn(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Xn(n,"name")||Vn&&n.name!==c)&&Ln(n,"name",c),(o=Gn(n)).source||(o.source=Un.join("string"==typeof c?c:""))),t!==Dn?(i?!u&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Ln(t,e,n)):a?t[e]=n:$n(e,n)})(Function.prototype,"toString",(function(){return Yn(this)&&Bn(this).source||Nn(this)}));var qn={},Kn=Math.ceil,Wn=Math.floor,Zn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Wn:Kn)(e)},Hn=Zn,Jn=Math.max,Qn=Math.min,tr=function(t,e){var n=Hn(t);return n<0?Jn(n+e,0):Qn(n,e)},er=Zn,nr=Math.min,rr=function(t){return t>0?nr(er(t),9007199254740991):0},or=rr,ir=function(t){return or(t.length)},ar=K,ur=tr,cr=ir,lr=function(t){return function(e,n,r){var o,i=ar(e),a=cr(i),u=ur(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},sr={includes:lr(!0),indexOf:lr(!1)},fr=Bt,pr=K,hr=sr.indexOf,dr=fn,yr=C([].push),gr=function(t,e){var n,r=pr(t),o=0,i=[];for(n in r)!fr(dr,n)&&fr(r,n)&&yr(i,n);for(;e.length>o;)fr(r,n=e[o++])&&(~hr(i,n)||yr(i,n));return i},vr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mr=gr,br=vr.concat("length","prototype");qn.f=Object.getOwnPropertyNames||function(t){return mr(t,br)};var xr={};xr.f=Object.getOwnPropertySymbols;var wr=et,Or=qn,Pr=xr,jr=Ye,Sr=C([].concat),Er=wr("Reflect","ownKeys")||function(t){var e=Or.f(jr(t)),n=Pr.f;return n?Sr(e,n(t)):e},Tr=Bt,Ir=Er,Mr=v,Rr=Ce,kr=m,Ar=W,Cr=/#|\.prototype\./,Fr=function(t,e){var n=_r[zr(t)];return n==Yr||n!=Dr&&(Ar(e)?kr(e):!!e)},zr=Fr.normalize=function(t){return String(t).replace(Cr,".").toLowerCase()},_r=Fr.data={},Dr=Fr.NATIVE="N",Yr=Fr.POLYFILL="P",Xr=Fr,Lr=g,$r=v.f,Nr=qe,Vr=Ke.exports,Br=Ft,Gr=function(t,e,n){for(var r=Ir(e),o=Rr.f,i=Mr.f,a=0;a<r.length;a++){var u=r[a];Tr(t,u)||n&&Tr(n,u)||o(t,u,i(e,u))}},Ur=Xr,qr=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,l=t.stat;if(n=c?Lr:l?Lr[u]||Br(u,{}):(Lr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=$r(n,r))&&a.value:n[r],!Ur(c?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Gr(i,o)}(t.sham||o&&o.sham)&&Nr(i,"sham",!0),Vr(n,r,i,t)}},Kr=D,Wr=Array.isArray||function(t){return"Array"==Kr(t)},Zr=ve,Hr=Ce,Jr=I,Qr=function(t,e,n){var r=Zr(e);r in t?Hr.f(t,r,Jr(0,n)):t[r]=n},to={};to[ae("toStringTag")]="z";var eo=g,no="[object z]"===String(to),ro=W,oo=D,io=ae("toStringTag"),ao=eo.Object,uo="Arguments"==oo(function(){return arguments}()),co=no?oo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=ao(t),io))?n:uo?oo(e):"Object"==(r=oo(e))&&ro(e.callee)?"Arguments":r},lo=C,so=m,fo=W,po=co,ho=en,yo=function(){},go=[],vo=et("Reflect","construct"),mo=/^\s*(?:class|function)\b/,bo=lo(mo.exec),xo=!mo.exec(yo),wo=function(t){if(!fo(t))return!1;try{return vo(yo,go,t),!0}catch(t){return!1}},Oo=function(t){if(!fo(t))return!1;switch(po(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return xo||!!bo(mo,ho(t))}catch(t){return!0}};Oo.sham=!0;var Po=!vo||so((function(){var t;return wo(wo.call)||!wo(Object)||!wo((function(){t=!0}))||t}))?Oo:wo,jo=g,So=Wr,Eo=Po,To=H,Io=ae("species"),Mo=jo.Array,Ro=function(t){var e;return So(t)&&(e=t.constructor,(Eo(e)&&(e===Mo||So(e.prototype))||To(e)&&null===(e=e[Io]))&&(e=void 0)),void 0===e?Mo:e},ko=m,Ao=lt,Co=ae("species"),Fo=qr,zo=g,_o=m,Do=Wr,Yo=H,Xo=$t,Lo=ir,$o=Qr,No=function(t,e){return new(Ro(t))(0===e?0:e)},Vo=function(t){return Ao>=51||!ko((function(){var e=[];return(e.constructor={})[Co]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Bo=lt,Go=ae("isConcatSpreadable"),Uo=9007199254740991,qo="Maximum allowed index exceeded",Ko=zo.TypeError,Wo=Bo>=51||!_o((function(){var t=[];return t[Go]=!1,t.concat()[0]!==t})),Zo=Vo("concat"),Ho=function(t){if(!Yo(t))return!1;var e=t[Go];return void 0!==e?!!e:Do(t)};Fo({target:"Array",proto:!0,forced:!Wo||!Zo},{concat:function(t){var e,n,r,o,i,a=Xo(this),u=No(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(Ho(i=-1===e?a:arguments[e])){if(c+(o=Lo(i))>Uo)throw Ko(qo);for(n=0;n<o;n++,c++)n in i&&$o(u,c,i[n])}else{if(c>=Uo)throw Ko(qo);$o(u,c++,i)}return u.length=c,u}});var Jo,Qo=co,ti=g.String,ei=function(t){if("Symbol"===Qo(t))throw TypeError("Cannot convert a Symbol value to a string");return ti(t)},ni=Ye,ri=m,oi=g.RegExp,ii=ri((function(){var t=oi("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),ai=ii||ri((function(){return!oi("a","y").sticky})),ui={BROKEN_CARET:ii||ri((function(){var t=oi("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:ai,UNSUPPORTED_Y:ii},ci=gr,li=vr,si=Object.keys||function(t){return ci(t,li)},fi=Ce,pi=Ye,hi=K,di=si,yi=b?Object.defineProperties:function(t,e){pi(t);for(var n,r=hi(e),o=di(e),i=o.length,a=0;i>a;)fi.f(t,n=o[a++],r[n]);return t},gi=et("document","documentElement"),vi=Ye,mi=yi,bi=vr,xi=fn,wi=gi,Oi=we,Pi=sn("IE_PROTO"),ji=function(){},Si=function(t){return"<script>"+t+"</"+"script>"},Ei=function(t){t.write(Si("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ti=function(){try{Jo=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ti="undefined"!=typeof document?document.domain&&Jo?Ei(Jo):((e=Oi("iframe")).style.display="none",wi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Si("document.F=Object")),t.close(),t.F):Ei(Jo);for(var n=bi.length;n--;)delete Ti.prototype[bi[n]];return Ti()};xi[Pi]=!0;var Ii,Mi,Ri=Object.create||function(t,e){var n;return null!==t?(ji.prototype=vi(t),n=new ji,ji.prototype=null,n[Pi]=t):n=Ti(),void 0===e?n:mi(n,e)},ki=m,Ai=g.RegExp,Ci=ki((function(){var t=Ai(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Fi=m,zi=g.RegExp,_i=Fi((function(){var t=zi("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Di=w,Yi=C,Xi=ei,Li=function(){var t=ni(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},$i=ui,Ni=kt.exports,Vi=Ri,Bi=Mn.get,Gi=Ci,Ui=_i,qi=Ni("native-string-replace",String.prototype.replace),Ki=RegExp.prototype.exec,Wi=Ki,Zi=Yi("".charAt),Hi=Yi("".indexOf),Ji=Yi("".replace),Qi=Yi("".slice),ta=(Mi=/b*/g,Di(Ki,Ii=/a/,"a"),Di(Ki,Mi,"a"),0!==Ii.lastIndex||0!==Mi.lastIndex),ea=$i.BROKEN_CARET,na=void 0!==/()??/.exec("")[1];(ta||na||ea||Gi||Ui)&&(Wi=function(t){var e,n,r,o,i,a,u,c=this,l=Bi(c),s=Xi(t),f=l.raw;if(f)return f.lastIndex=c.lastIndex,e=Di(Wi,f,s),c.lastIndex=f.lastIndex,e;var p=l.groups,h=ea&&c.sticky,d=Di(Li,c),y=c.source,g=0,v=s;if(h&&(d=Ji(d,"y",""),-1===Hi(d,"g")&&(d+="g"),v=Qi(s,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==Zi(s,c.lastIndex-1))&&(y="(?: "+y+")",v=" "+v,g++),n=new RegExp("^(?:"+y+")",d)),na&&(n=new RegExp("^"+y+"$(?!\\s)",d)),ta&&(r=c.lastIndex),o=Di(Ki,h?n:c,v),h?o?(o.input=Qi(o.input,g),o[0]=Qi(o[0],g),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:ta&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),na&&o&&o.length>1&&Di(qi,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=Vi(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var ra=Wi;qr({target:"RegExp",proto:!0,forced:/./.exec!==ra},{exec:ra});var oa=Function.prototype,ia=oa.apply,aa=oa.bind,ua=oa.call,ca="object"==typeof Reflect&&Reflect.apply||(aa?ua.bind(ia):function(){return ua.apply(ia,arguments)}),la=C,sa=Ke.exports,fa=ra,pa=m,ha=ae,da=qe,ya=ha("species"),ga=RegExp.prototype,va=function(t,e,n,r){var o=ha(t),i=!pa((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!pa((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[ya]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!a||n){var u=la(/./[o]),c=e(o,""[t],(function(t,e,n,r,o){var a=la(t),c=e.exec;return c===fa||c===ga.exec?i&&!o?{done:!0,value:u(e,n,r)}:{done:!0,value:a(n,e,r)}:{done:!1}}));sa(String.prototype,t,c[0]),sa(ga,o,c[1])}r&&da(ga[o],"sham",!0)},ma=C,ba=Zn,xa=ei,wa=G,Oa=ma("".charAt),Pa=ma("".charCodeAt),ja=ma("".slice),Sa=function(t){return function(e,n){var r,o,i=xa(wa(e)),a=ba(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=Pa(i,a))<55296||r>56319||a+1===u||(o=Pa(i,a+1))<56320||o>57343?t?Oa(i,a):r:t?ja(i,a,a+2):o-56320+(r-55296<<10)+65536}},Ea={codeAt:Sa(!1),charAt:Sa(!0)}.charAt,Ta=function(t,e,n){return e+(n?Ea(t,e).length:1)},Ia=C,Ma=$t,Ra=Math.floor,ka=Ia("".charAt),Aa=Ia("".replace),Ca=Ia("".slice),Fa=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,za=/\$([$&'`]|\d{1,2})/g,_a=w,Da=Ye,Ya=W,Xa=D,La=ra,$a=g.TypeError,Na=function(t,e){var n=t.exec;if(Ya(n)){var r=_a(n,t,e);return null!==r&&Da(r),r}if("RegExp"===Xa(t))return _a(La,t,e);throw $a("RegExp#exec called on incompatible receiver")},Va=ca,Ba=w,Ga=C,Ua=va,qa=m,Ka=Ye,Wa=W,Za=Zn,Ha=rr,Ja=ei,Qa=G,tu=Ta,eu=Et,nu=function(t,e,n,r,o,i){var a=n+t.length,u=r.length,c=za;return void 0!==o&&(o=Ma(o),c=Fa),Aa(i,c,(function(i,c){var l;switch(ka(c,0)){case"$":return"$";case"&":return t;case"`":return Ca(e,0,n);case"'":return Ca(e,a);case"<":l=o[Ca(c,1,-1)];break;default:var s=+c;if(0===s)return i;if(s>u){var f=Ra(s/10);return 0===f?i:f<=u?void 0===r[f-1]?ka(c,1):r[f-1]+ka(c,1):i}l=r[s-1]}return void 0===l?"":l}))},ru=Na,ou=ae("replace"),iu=Math.max,au=Math.min,uu=Ga([].concat),cu=Ga([].push),lu=Ga("".indexOf),su=Ga("".slice),fu="$0"==="a".replace(/./,"$0"),pu=!!/./[ou]&&""===/./[ou]("a","$0");Ua("replace",(function(t,e,n){var r=pu?"$":"$0";return[function(t,n){var r=Qa(this),o=null==t?void 0:eu(t,ou);return o?Ba(o,t,r,n):Ba(e,Ja(r),t,n)},function(t,o){var i=Ka(this),a=Ja(t);if("string"==typeof o&&-1===lu(o,r)&&-1===lu(o,"$<")){var u=n(e,i,a,o);if(u.done)return u.value}var c=Wa(o);c||(o=Ja(o));var l=i.global;if(l){var s=i.unicode;i.lastIndex=0}for(var f=[];;){var p=ru(i,a);if(null===p)break;if(cu(f,p),!l)break;""===Ja(p[0])&&(i.lastIndex=tu(a,Ha(i.lastIndex),s))}for(var h,d="",y=0,g=0;g<f.length;g++){for(var v=Ja((p=f[g])[0]),m=iu(au(Za(p.index),a.length),0),b=[],x=1;x<p.length;x++)cu(b,void 0===(h=p[x])?h:String(h));var w=p.groups;if(c){var O=uu([v],b,m,a);void 0!==w&&cu(O,w);var P=Ja(Va(o,void 0,O))}else P=nu(v,a,m,b,w,o);m>=y&&(d+=su(a,y,m)+P,y=m+v.length)}return d+su(a,y)}]}),!!qa((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!fu||pu);var hu=H,du=D,yu=ae("match"),gu=Po,vu=wt,mu=g.TypeError,bu=Ye,xu=function(t){if(gu(t))return t;throw mu(vu(t)+" is not a constructor")},wu=ae("species"),Ou=tr,Pu=ir,ju=Qr,Su=g.Array,Eu=Math.max,Tu=ca,Iu=w,Mu=C,Ru=va,ku=function(t){var e;return hu(t)&&(void 0!==(e=t[yu])?!!e:"RegExp"==du(t))},Au=Ye,Cu=G,Fu=function(t,e){var n,r=bu(t).constructor;return void 0===r||null==(n=bu(r)[wu])?e:xu(n)},zu=Ta,_u=rr,Du=ei,Yu=Et,Xu=function(t,e,n){for(var r=Pu(t),o=Ou(e,r),i=Ou(void 0===n?r:n,r),a=Su(Eu(i-o,0)),u=0;o<i;o++,u++)ju(a,u,t[o]);return a.length=u,a},Lu=Na,$u=ra,Nu=m,Vu=ui.UNSUPPORTED_Y,Bu=4294967295,Gu=Math.min,Uu=[].push,qu=Mu(/./.exec),Ku=Mu(Uu),Wu=Mu("".slice),Zu=!Nu((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));Ru("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=Du(Cu(this)),o=void 0===n?Bu:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!ku(t))return Iu(e,r,t,o);for(var i,a,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),s=0,f=new RegExp(t.source,l+"g");(i=Iu($u,f,r))&&!((a=f.lastIndex)>s&&(Ku(c,Wu(r,s,i.index)),i.length>1&&i.index<r.length&&Tu(Uu,c,Xu(i,1)),u=i[0].length,s=a,c.length>=o));)f.lastIndex===i.index&&f.lastIndex++;return s===r.length?!u&&qu(f,"")||Ku(c,""):Ku(c,Wu(r,s)),c.length>o?Xu(c,0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:Iu(e,this,t,n)}:e,[function(e,n){var o=Cu(this),i=null==e?void 0:Yu(e,t);return i?Iu(i,e,o,n):Iu(r,Du(o),e,n)},function(t,o){var i=Au(this),a=Du(t),u=n(r,i,a,o,r!==e);if(u.done)return u.value;var c=Fu(i,RegExp),l=i.unicode,s=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(Vu?"g":"y"),f=new c(Vu?"^(?:"+i.source+")":i,s),p=void 0===o?Bu:o>>>0;if(0===p)return[];if(0===a.length)return null===Lu(f,a)?[a]:[];for(var h=0,d=0,y=[];d<a.length;){f.lastIndex=Vu?0:d;var g,v=Lu(f,Vu?Wu(a,d):a);if(null===v||(g=Gu(_u(f.lastIndex+(Vu?d:0)),a.length))===h)d=zu(a,d,l);else{if(Ku(y,Wu(a,h,d)),y.length===p)return y;for(var m=1;m<=v.length-1;m++)if(Ku(y,v[m]),y.length===p)return y;d=h=g}}return Ku(y,Wu(a,h)),y}]}),!Zu,Vu);var Hu=function(){function t(e){i(this,t),this.el=e,this.matrix=this.getMatrix(e),this.viewportCenter=this.getViewPortCenter(),this.idlePosition=this.getIdlePosition()}return u(t,[{key:"getMatrix",value:function(t){return function(t){var e=window.getComputedStyle(t).transform;if(""===e||"none"===e)return{rotate:"0deg",scaleX:1,scaleY:1,skewX:"0deg",skewY:"0deg",translateX:"0px",translateY:"0px"};var n,r,o,i,a,u,c,l,s=e.split("(")[1].split(")")[0].split(",");return n=s,r=Math.atan2(n[1],n[0]),o=Math.pow(n[0],2)+Math.pow(n[1],2),i=Math.pow(n[2],2)+Math.pow(n[3],2),a=Math.sqrt(o),u=(n[0]*n[3]-n[2]*n[1])/a,c=Math.atan2(n[0]*n[2]+n[1]*n[3],o),l=Math.atan2(n[1]*n[3]+n[0]*n[2],i),{rotate:r/(Math.PI/180)+"deg",scaleX:a,scaleY:u,skewX:(1===o?c/(Math.PI/180):0)+"deg",skewY:(1===i?l/(Math.PI/180):0)+"deg",translateX:n[4]+"px",translateY:n[5]+"px"}}(t)}},{key:"getViewPortCenter",value:function(){var t=this.el.parentNode;return{x:parseFloat(getComputedStyle(t,null).width.replace("px",""))/2,y:parseFloat(getComputedStyle(t,null).height.replace("px",""))/2}}},{key:"getIdlePosition",value:function(){var t=this.el,e=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect();return{x:e.left-n.left,y:e.top-n.top}}},{key:"calcXYZoom",value:function(){var t=this.matrix,e=this.idlePosition,n=this.viewportCenter,r=n.x-e.x,i=n.y-e.y;return o(o({},{x:r/t.scaleX,y:i/t.scaleY}),{},{zoom:t.scaleX})}},{key:"createProgressFunction",value:function(t){var e=this._xyzoomToTranslate(t.start),n=this._xyzoomToTranslate(t.target),r=Math.atan(Math.abs(n.y-e.y)/Math.abs(n.x-e.x)),o=Math.sqrt(Math.pow(n.y-e.y,2)+Math.pow(n.x-e.x,2)),i=1,a=1;return n.x<e.x&&(i=-1),n.y<e.y&&(a=-1),function(t){var u=t*o;return{translateX:i*u*Math.cos(r)+e.x,translateY:a*u*Math.sin(r)+e.y,scale:(n.scale-e.scale)*t+e.scale}}}},{key:"_xyzoomToTranslate",value:function(t){var e=t.zoom*t.x,n=t.zoom*t.y,r=this.viewportCenter.x-e,o=this.viewportCenter.y-n;return{x:r-this.idlePosition.x,y:o-this.idlePosition.y,scale:t.zoom}}},{key:"createPathProgressFunction",value:function(t,e){var n=this,r=function(t){};t.transitionDuration>0&&(r=this.createProgressFunction({start:e,target:{x:t.startPoint.x,y:t.startPoint.y,zoom:e.zoom}}));var o=t.transitionDuration/(t.transitionDuration+t.alongPathDuration),i=t.alongPathDuration/(t.transitionDuration+t.alongPathDuration),a=(t.endTo-t.startFrom)*t.pathLength;return function(u){if(t.transitionDuration>0&&u<o)return r(u/o);var c=(u-o)/i,l=(t.zoom-e.zoom)*c+e.zoom,s=c*a+t.startFrom*t.pathLength,f=t.path.getPointAtLength(s),p=n._xyzoomToTranslate({x:f.x,y:f.y,zoom:l});return{translateX:p.x,translateY:p.y,scale:p.scale}}}}]),t}(),Ju=function(t){l(n,t);var e=h(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"getScratchValue",value:function(){return this.adaptor=new Hu(this.element),this.adaptor.calcXYZoom()}},{key:"onGetContext",value:function(){this.adaptor=new Hu(this.element),this.progressMethod=this.adaptor.createProgressFunction({start:this.initialValue,target:this.targetValue})}},{key:"onProgress",value:function(t){var e=this.progressMethod(t);this.element.style.transform="translateX(".concat(e.translateX,"px) translateY(").concat(e.translateY,"px) scaleX(").concat(e.scale,") scaleY(").concat(e.scale,")")}}]),n}(n.default.Effect),Qu=function(t){l(n,t);var e=h(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"onInitialise",value:function(){var t=this.props.duration,e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttributeNS(null,"d",this.targetValue.path),this.data={path:e,finalPoint:null,startPoint:null,zoom:this.targetValue.zoom,pathLength:e.getTotalLength(),startFrom:this.attrs.from?this.attrs.from:0,endTo:this.attrs.to?this.attrs.to:1,transitionDuration:this.attrs.transition?this.attrs.transition:0,get alongPathDuration(){return t-this.transitionDuration}},this.data.finalPoint=e.getPointAtLength(this.data.endTo*this.data.pathLength),this.data.startPoint=e.getPointAtLength(this.data.startFrom*this.data.pathLength),this.targetValue.x=this.data.finalPoint.x,this.targetValue.y=this.data.finalPoint.y}},{key:"onGetContext",value:function(){this.adaptor=new Hu(this.element),this.data.zoom=this.targetValue.zoom,this.progressMethod=this.adaptor.createPathProgressFunction(this.data,this.initialValue)}}]),n}(Ju);return{npm_name:"@donkeyclip/motorcortex-2dcam",version:"0.0.16",incidents:[{exportable:Ju,name:"ZoomTo",attributesValidationRules:{animatedAttrs:{type:"object",props:{position:{type:"object",props:{x:{type:"number",optional:!0,min:0},y:{type:"number",optional:!0,min:0},zoom:{type:"number",optional:!0,min:0}}}}}}},{exportable:Qu,name:"FollowPath",attributesValidationRules:{animatedAttrs:{type:"object",props:{position:{type:"object",props:{path:{type:"string",optional:!1},zoom:{type:"number",optional:!0,min:0}}}}},transition:{type:"number",integer:!0,min:0,optional:!0},from:{type:"number",min:0,max:1,optional:!0},to:{type:"number",min:0,max:1,optional:!0}}}],compositeAttributes:{position:["x","y","zoom","path"]}}}));
