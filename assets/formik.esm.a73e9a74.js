import{r as p}from"./index.81de7608.js";var xt=function(r){return Mt(r)&&!Pt(r)};function Mt(e){return!!e&&typeof e=="object"}function Pt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Dt(e)}var Rt=typeof Symbol=="function"&&Symbol.for,Lt=Rt?Symbol.for("react.element"):60103;function Dt(e){return e.$$typeof===Lt}function Ut(e){return Array.isArray(e)?[]:{}}function he(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ie(Ut(e),e,r):e}function Vt(e,r,t){return e.concat(r).map(function(n){return he(n,t)})}function Nt(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=he(e[a],t)}),Object.keys(r).forEach(function(a){!t.isMergeableObject(r[a])||!e[a]?n[a]=he(r[a],t):n[a]=ie(e[a],r[a],t)}),n}function ie(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Vt,t.isMergeableObject=t.isMergeableObject||xt;var n=Array.isArray(r),a=Array.isArray(e),o=n===a;return o?n?t.arrayMerge(e,r,t):Nt(e,r,t):he(r,t)}ie.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,a){return ie(n,a,t)},{})};var Ce=ie,Bt=typeof global=="object"&&global&&global.Object===Object&&global;const Gr=Bt;var Gt=typeof self=="object"&&self&&self.Object===Object&&self,kt=Gr||Gt||Function("return this")();const D=kt;var Ht=D.Symbol;const B=Ht;var kr=Object.prototype,zt=kr.hasOwnProperty,Wt=kr.toString,te=B?B.toStringTag:void 0;function Kt(e){var r=zt.call(e,te),t=e[te];try{e[te]=void 0;var n=!0}catch{}var a=Wt.call(e);return n&&(r?e[te]=t:delete e[te]),a}var Yt=Object.prototype,qt=Yt.toString;function Xt(e){return qt.call(e)}var Zt="[object Null]",Jt="[object Undefined]",lr=B?B.toStringTag:void 0;function K(e){return e==null?e===void 0?Jt:Zt:lr&&lr in Object(e)?Kt(e):Xt(e)}function Hr(e,r){return function(t){return e(r(t))}}var Qt=Hr(Object.getPrototypeOf,Object);const Ve=Qt;function Y(e){return e!=null&&typeof e=="object"}var en="[object Object]",rn=Function.prototype,tn=Object.prototype,zr=rn.toString,nn=tn.hasOwnProperty,an=zr.call(Object);function fr(e){if(!Y(e)||K(e)!=en)return!1;var r=Ve(e);if(r===null)return!0;var t=nn.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&zr.call(t)==an}var dr=Array.isArray,pr=Object.keys,on=Object.prototype.hasOwnProperty,un=typeof Element<"u";function xe(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=dr(e),n=dr(r),a,o,u;if(t&&n){if(o=e.length,o!=r.length)return!1;for(a=o;a--!==0;)if(!xe(e[a],r[a]))return!1;return!0}if(t!=n)return!1;var s=e instanceof Date,h=r instanceof Date;if(s!=h)return!1;if(s&&h)return e.getTime()==r.getTime();var y=e instanceof RegExp,C=r instanceof RegExp;if(y!=C)return!1;if(y&&C)return e.toString()==r.toString();var E=pr(e);if(o=E.length,o!==pr(r).length)return!1;for(a=o;a--!==0;)if(!on.call(r,E[a]))return!1;if(un&&e instanceof Element&&r instanceof Element)return e===r;for(a=o;a--!==0;)if(u=E[a],!(u==="_owner"&&e.$$typeof)&&!xe(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var N=function(r,t){try{return xe(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}},sn=!1;function Me(e,r){if(!sn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function cn(){this.__data__=[],this.size=0}function Wr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Wr(e[t][0],r))return t;return-1}var ln=Array.prototype,fn=ln.splice;function dn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():fn.call(r,t,1),--this.size,!0}function pn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function hn(e){return ve(this.__data__,e)>-1}function vn(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=cn;U.prototype.delete=dn;U.prototype.get=pn;U.prototype.has=hn;U.prototype.set=vn;function yn(){this.__data__=new U,this.size=0}function gn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function bn(e){return this.__data__.get(e)}function mn(e){return this.__data__.has(e)}function se(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Tn="[object AsyncFunction]",Sn="[object Function]",En="[object GeneratorFunction]",_n="[object Proxy]";function Kr(e){if(!se(e))return!1;var r=K(e);return r==Sn||r==En||r==Tn||r==_n}var An=D["__core-js_shared__"];const Oe=An;var hr=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $n(e){return!!hr&&hr in e}var On=Function.prototype,jn=On.toString;function q(e){if(e!=null){try{return jn.call(e)}catch{}try{return e+""}catch{}}return""}var wn=/[\\^$.*+?()[\]{}|]/g,Fn=/^\[object .+?Constructor\]$/,In=Function.prototype,Cn=Object.prototype,xn=In.toString,Mn=Cn.hasOwnProperty,Pn=RegExp("^"+xn.call(Mn).replace(wn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Rn(e){if(!se(e)||$n(e))return!1;var r=Kr(e)?Pn:Fn;return r.test(q(e))}function Ln(e,r){return e==null?void 0:e[r]}function X(e,r){var t=Ln(e,r);return Rn(t)?t:void 0}var Dn=X(D,"Map");const oe=Dn;var Un=X(Object,"create");const ue=Un;function Vn(){this.__data__=ue?ue(null):{},this.size=0}function Nn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Bn="__lodash_hash_undefined__",Gn=Object.prototype,kn=Gn.hasOwnProperty;function Hn(e){var r=this.__data__;if(ue){var t=r[e];return t===Bn?void 0:t}return kn.call(r,e)?r[e]:void 0}var zn=Object.prototype,Wn=zn.hasOwnProperty;function Kn(e){var r=this.__data__;return ue?r[e]!==void 0:Wn.call(r,e)}var Yn="__lodash_hash_undefined__";function qn(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ue&&r===void 0?Yn:r,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=Vn;z.prototype.delete=Nn;z.prototype.get=Hn;z.prototype.has=Kn;z.prototype.set=qn;function Xn(){this.size=0,this.__data__={hash:new z,map:new(oe||U),string:new z}}function Zn(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function ye(e,r){var t=e.__data__;return Zn(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Jn(e){var r=ye(this,e).delete(e);return this.size-=r?1:0,r}function Qn(e){return ye(this,e).get(e)}function ea(e){return ye(this,e).has(e)}function ra(e,r){var t=ye(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function G(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}G.prototype.clear=Xn;G.prototype.delete=Jn;G.prototype.get=Qn;G.prototype.has=ea;G.prototype.set=ra;var ta=200;function na(e,r){var t=this.__data__;if(t instanceof U){var n=t.__data__;if(!oe||n.length<ta-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new G(n)}return t.set(e,r),this.size=t.size,this}function ee(e){var r=this.__data__=new U(e);this.size=r.size}ee.prototype.clear=yn;ee.prototype.delete=gn;ee.prototype.get=bn;ee.prototype.has=mn;ee.prototype.set=na;function aa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var ia=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const vr=ia;function Yr(e,r,t){r=="__proto__"&&vr?vr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var oa=Object.prototype,ua=oa.hasOwnProperty;function qr(e,r,t){var n=e[r];(!(ua.call(e,r)&&Wr(n,t))||t===void 0&&!(r in e))&&Yr(e,r,t)}function ge(e,r,t,n){var a=!t;t||(t={});for(var o=-1,u=r.length;++o<u;){var s=r[o],h=n?n(t[s],e[s],s,t,e):void 0;h===void 0&&(h=e[s]),a?Yr(t,s,h):qr(t,s,h)}return t}function sa(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var ca="[object Arguments]";function yr(e){return Y(e)&&K(e)==ca}var Xr=Object.prototype,la=Xr.hasOwnProperty,fa=Xr.propertyIsEnumerable,da=yr(function(){return arguments}())?yr:function(e){return Y(e)&&la.call(e,"callee")&&!fa.call(e,"callee")};const pa=da;var ha=Array.isArray;const ce=ha;function va(){return!1}var Zr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gr=Zr&&typeof module=="object"&&module&&!module.nodeType&&module,ya=gr&&gr.exports===Zr,br=ya?D.Buffer:void 0,ga=br?br.isBuffer:void 0,ba=ga||va;const Jr=ba;var ma=9007199254740991,Ta=/^(?:0|[1-9]\d*)$/;function Sa(e,r){var t=typeof e;return r=r==null?ma:r,!!r&&(t=="number"||t!="symbol"&&Ta.test(e))&&e>-1&&e%1==0&&e<r}var Ea=9007199254740991;function Qr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ea}var _a="[object Arguments]",Aa="[object Array]",$a="[object Boolean]",Oa="[object Date]",ja="[object Error]",wa="[object Function]",Fa="[object Map]",Ia="[object Number]",Ca="[object Object]",xa="[object RegExp]",Ma="[object Set]",Pa="[object String]",Ra="[object WeakMap]",La="[object ArrayBuffer]",Da="[object DataView]",Ua="[object Float32Array]",Va="[object Float64Array]",Na="[object Int8Array]",Ba="[object Int16Array]",Ga="[object Int32Array]",ka="[object Uint8Array]",Ha="[object Uint8ClampedArray]",za="[object Uint16Array]",Wa="[object Uint32Array]",S={};S[Ua]=S[Va]=S[Na]=S[Ba]=S[Ga]=S[ka]=S[Ha]=S[za]=S[Wa]=!0;S[_a]=S[Aa]=S[La]=S[$a]=S[Da]=S[Oa]=S[ja]=S[wa]=S[Fa]=S[Ia]=S[Ca]=S[xa]=S[Ma]=S[Pa]=S[Ra]=!1;function Ka(e){return Y(e)&&Qr(e.length)&&!!S[K(e)]}function Ne(e){return function(r){return e(r)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ne=et&&typeof module=="object"&&module&&!module.nodeType&&module,Ya=ne&&ne.exports===et,je=Ya&&Gr.process,qa=function(){try{var e=ne&&ne.require&&ne.require("util").types;return e||je&&je.binding&&je.binding("util")}catch{}}();const Q=qa;var mr=Q&&Q.isTypedArray,Xa=mr?Ne(mr):Ka;const Za=Xa;var Ja=Object.prototype,Qa=Ja.hasOwnProperty;function rt(e,r){var t=ce(e),n=!t&&pa(e),a=!t&&!n&&Jr(e),o=!t&&!n&&!a&&Za(e),u=t||n||a||o,s=u?sa(e.length,String):[],h=s.length;for(var y in e)(r||Qa.call(e,y))&&!(u&&(y=="length"||a&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Sa(y,h)))&&s.push(y);return s}var ei=Object.prototype;function Be(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||ei;return e===t}var ri=Hr(Object.keys,Object);const ti=ri;var ni=Object.prototype,ai=ni.hasOwnProperty;function ii(e){if(!Be(e))return ti(e);var r=[];for(var t in Object(e))ai.call(e,t)&&t!="constructor"&&r.push(t);return r}function tt(e){return e!=null&&Qr(e.length)&&!Kr(e)}function Ge(e){return tt(e)?rt(e):ii(e)}function oi(e,r){return e&&ge(r,Ge(r),e)}function ui(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var si=Object.prototype,ci=si.hasOwnProperty;function li(e){if(!se(e))return ui(e);var r=Be(e),t=[];for(var n in e)n=="constructor"&&(r||!ci.call(e,n))||t.push(n);return t}function ke(e){return tt(e)?rt(e,!0):li(e)}function fi(e,r){return e&&ge(r,ke(r),e)}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tr=nt&&typeof module=="object"&&module&&!module.nodeType&&module,di=Tr&&Tr.exports===nt,Sr=di?D.Buffer:void 0,Er=Sr?Sr.allocUnsafe:void 0;function pi(e,r){if(r)return e.slice();var t=e.length,n=Er?Er(t):new e.constructor(t);return e.copy(n),n}function at(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function hi(e,r){for(var t=-1,n=e==null?0:e.length,a=0,o=[];++t<n;){var u=e[t];r(u,t,e)&&(o[a++]=u)}return o}function it(){return[]}var vi=Object.prototype,yi=vi.propertyIsEnumerable,_r=Object.getOwnPropertySymbols,gi=_r?function(e){return e==null?[]:(e=Object(e),hi(_r(e),function(r){return yi.call(e,r)}))}:it;const He=gi;function bi(e,r){return ge(e,He(e),r)}function ot(e,r){for(var t=-1,n=r.length,a=e.length;++t<n;)e[a+t]=r[t];return e}var mi=Object.getOwnPropertySymbols,Ti=mi?function(e){for(var r=[];e;)ot(r,He(e)),e=Ve(e);return r}:it;const ut=Ti;function Si(e,r){return ge(e,ut(e),r)}function st(e,r,t){var n=r(e);return ce(e)?n:ot(n,t(e))}function Ei(e){return st(e,Ge,He)}function _i(e){return st(e,ke,ut)}var Ai=X(D,"DataView");const Pe=Ai;var $i=X(D,"Promise");const Re=$i;var Oi=X(D,"Set");const Le=Oi;var ji=X(D,"WeakMap");const De=ji;var Ar="[object Map]",wi="[object Object]",$r="[object Promise]",Or="[object Set]",jr="[object WeakMap]",wr="[object DataView]",Fi=q(Pe),Ii=q(oe),Ci=q(Re),xi=q(Le),Mi=q(De),H=K;(Pe&&H(new Pe(new ArrayBuffer(1)))!=wr||oe&&H(new oe)!=Ar||Re&&H(Re.resolve())!=$r||Le&&H(new Le)!=Or||De&&H(new De)!=jr)&&(H=function(e){var r=K(e),t=r==wi?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case Fi:return wr;case Ii:return Ar;case Ci:return $r;case xi:return Or;case Mi:return jr}return r});const ze=H;var Pi=Object.prototype,Ri=Pi.hasOwnProperty;function Li(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Ri.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Di=D.Uint8Array;const Fr=Di;function We(e){var r=new e.constructor(e.byteLength);return new Fr(r).set(new Fr(e)),r}function Ui(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Vi=/\w*$/;function Ni(e){var r=new e.constructor(e.source,Vi.exec(e));return r.lastIndex=e.lastIndex,r}var Ir=B?B.prototype:void 0,Cr=Ir?Ir.valueOf:void 0;function Bi(e){return Cr?Object(Cr.call(e)):{}}function Gi(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var ki="[object Boolean]",Hi="[object Date]",zi="[object Map]",Wi="[object Number]",Ki="[object RegExp]",Yi="[object Set]",qi="[object String]",Xi="[object Symbol]",Zi="[object ArrayBuffer]",Ji="[object DataView]",Qi="[object Float32Array]",eo="[object Float64Array]",ro="[object Int8Array]",to="[object Int16Array]",no="[object Int32Array]",ao="[object Uint8Array]",io="[object Uint8ClampedArray]",oo="[object Uint16Array]",uo="[object Uint32Array]";function so(e,r,t){var n=e.constructor;switch(r){case Zi:return We(e);case ki:case Hi:return new n(+e);case Ji:return Ui(e,t);case Qi:case eo:case ro:case to:case no:case ao:case io:case oo:case uo:return Gi(e,t);case zi:return new n;case Wi:case qi:return new n(e);case Ki:return Ni(e);case Yi:return new n;case Xi:return Bi(e)}}var xr=Object.create,co=function(){function e(){}return function(r){if(!se(r))return{};if(xr)return xr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const lo=co;function fo(e){return typeof e.constructor=="function"&&!Be(e)?lo(Ve(e)):{}}var po="[object Map]";function ho(e){return Y(e)&&ze(e)==po}var Mr=Q&&Q.isMap,vo=Mr?Ne(Mr):ho;const yo=vo;var go="[object Set]";function bo(e){return Y(e)&&ze(e)==go}var Pr=Q&&Q.isSet,mo=Pr?Ne(Pr):bo;const To=mo;var So=1,Eo=2,_o=4,ct="[object Arguments]",Ao="[object Array]",$o="[object Boolean]",Oo="[object Date]",jo="[object Error]",lt="[object Function]",wo="[object GeneratorFunction]",Fo="[object Map]",Io="[object Number]",ft="[object Object]",Co="[object RegExp]",xo="[object Set]",Mo="[object String]",Po="[object Symbol]",Ro="[object WeakMap]",Lo="[object ArrayBuffer]",Do="[object DataView]",Uo="[object Float32Array]",Vo="[object Float64Array]",No="[object Int8Array]",Bo="[object Int16Array]",Go="[object Int32Array]",ko="[object Uint8Array]",Ho="[object Uint8ClampedArray]",zo="[object Uint16Array]",Wo="[object Uint32Array]",T={};T[ct]=T[Ao]=T[Lo]=T[Do]=T[$o]=T[Oo]=T[Uo]=T[Vo]=T[No]=T[Bo]=T[Go]=T[Fo]=T[Io]=T[ft]=T[Co]=T[xo]=T[Mo]=T[Po]=T[ko]=T[Ho]=T[zo]=T[Wo]=!0;T[jo]=T[lt]=T[Ro]=!1;function ae(e,r,t,n,a,o){var u,s=r&So,h=r&Eo,y=r&_o;if(t&&(u=a?t(e,n,a,o):t(e)),u!==void 0)return u;if(!se(e))return e;var C=ce(e);if(C){if(u=Li(e),!s)return at(e,u)}else{var E=ze(e),f=E==lt||E==wo;if(Jr(e))return pi(e,s);if(E==ft||E==ct||f&&!a){if(u=h||f?{}:fo(e),!s)return h?Si(e,fi(u,e)):bi(e,oi(u,e))}else{if(!T[E])return a?e:{};u=so(e,E,s)}}o||(o=new ee);var w=o.get(e);if(w)return w;o.set(e,u),To(e)?e.forEach(function(A){u.add(ae(A,r,t,A,e,o))}):yo(e)&&e.forEach(function(A,$){u.set($,ae(A,r,t,$,e,o))});var M=y?h?_i:Ei:h?ke:Ge,F=C?void 0:M(e);return aa(F||e,function(A,$){F&&($=A,A=e[$]),qr(u,$,ae(A,r,t,$,e,o))}),u}var Ko=4;function Rr(e){return ae(e,Ko)}function dt(e,r){for(var t=-1,n=e==null?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a}var Yo="[object Symbol]";function Ke(e){return typeof e=="symbol"||Y(e)&&K(e)==Yo}var qo="Expected a function";function Ye(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(qo);var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],o=t.cache;if(o.has(a))return o.get(a);var u=e.apply(this,n);return t.cache=o.set(a,u)||o,u};return t.cache=new(Ye.Cache||G),t}Ye.Cache=G;var Xo=500;function Zo(e){var r=Ye(e,function(n){return t.size===Xo&&t.clear(),n}),t=r.cache;return r}var Jo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qo=/\\(\\)?/g,eu=Zo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Jo,function(t,n,a,o){r.push(a?o.replace(Qo,"$1"):n||t)}),r});const ru=eu;var tu=1/0;function nu(e){if(typeof e=="string"||Ke(e))return e;var r=e+"";return r=="0"&&1/e==-tu?"-0":r}var au=1/0,Lr=B?B.prototype:void 0,Dr=Lr?Lr.toString:void 0;function pt(e){if(typeof e=="string")return e;if(ce(e))return dt(e,pt)+"";if(Ke(e))return Dr?Dr.call(e):"";var r=e+"";return r=="0"&&1/e==-au?"-0":r}function iu(e){return e==null?"":pt(e)}function ht(e){return ce(e)?dt(e,nu):Ke(e)?[e]:at(ru(iu(e)))}var ou=1,uu=4;function su(e){return ae(e,ou|uu)}function _(){return _=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_.apply(this,arguments)}function cu(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function qe(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Ur(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var be=p.exports.createContext(void 0);be.displayName="FormikContext";be.Provider;be.Consumer;function lu(){var e=p.exports.useContext(be);return e||Me(!1,"Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component."),e}var Vr=function(r){return Array.isArray(r)&&r.length===0},I=function(r){return typeof r=="function"},le=function(r){return r!==null&&typeof r=="object"},fu=function(r){return String(Math.floor(Number(r)))===r},we=function(r){return Object.prototype.toString.call(r)==="[object String]"},du=function(r){return p.exports.Children.count(r)===0},Fe=function(r){return le(r)&&I(r.then)};function pu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function j(e,r,t,n){n===void 0&&(n=0);for(var a=ht(r);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?t:e}function L(e,r,t){for(var n=Rr(e),a=n,o=0,u=ht(r);o<u.length-1;o++){var s=u[o],h=j(e,u.slice(0,o+1));if(h&&(le(h)||Array.isArray(h)))a=a[s]=Rr(h);else{var y=u[o+1];a=a[s]=fu(y)&&Number(y)>=0?[]:{}}}return(o===0?e:a)[u[o]]===t?e:(t===void 0?delete a[u[o]]:a[u[o]]=t,o===0&&t===void 0&&delete n[u[o]],n)}function vt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var a=0,o=Object.keys(e);a<o.length;a++){var u=o[a],s=e[u];le(s)?t.get(s)||(t.set(s,!0),n[u]=Array.isArray(s)?[]:{},vt(s,r,t,n[u])):n[u]=r}return n}function hu(e,r){switch(r.type){case"SET_VALUES":return _({},e,{values:r.payload});case"SET_TOUCHED":return _({},e,{touched:r.payload});case"SET_ERRORS":return N(e.errors,r.payload)?e:_({},e,{errors:r.payload});case"SET_STATUS":return _({},e,{status:r.payload});case"SET_ISSUBMITTING":return _({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return _({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return _({},e,{values:L(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return _({},e,{touched:L(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return _({},e,{errors:L(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return _({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return _({},e,{touched:vt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return _({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return _({},e,{isSubmitting:!1});default:return e}}var k={},pe={};function ju(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,a=n===void 0?!0:n,o=e.validateOnMount,u=o===void 0?!1:o,s=e.isInitialValid,h=e.enableReinitialize,y=h===void 0?!1:h,C=e.onSubmit,E=qe(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=_({validateOnChange:t,validateOnBlur:a,validateOnMount:u,onSubmit:C},E),w=p.exports.useRef(f.initialValues),M=p.exports.useRef(f.initialErrors||k),F=p.exports.useRef(f.initialTouched||pe),A=p.exports.useRef(f.initialStatus),$=p.exports.useRef(!1),V=p.exports.useRef({});p.exports.useEffect(function(){typeof s>"u"||Me(!1,"isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.")},[]),p.exports.useEffect(function(){return $.current=!0,function(){$.current=!1}},[]);var yt=p.exports.useState(0),gt=yt[1],fe=p.exports.useRef({values:f.initialValues,errors:f.initialErrors||k,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),m=fe.current,b=p.exports.useCallback(function(i){var c=fe.current;fe.current=hu(c,i),c!==fe.current&&gt(function(l){return l+1})},[]),Xe=p.exports.useCallback(function(i,c){return new Promise(function(l,d){var v=f.validate(i,c);v==null?l(k):Fe(v)?v.then(function(g){l(g||k)},function(g){console.warn("Warning: An unhandled error was caught during validation in <Formik validate />",g),d(g)}):l(v)})},[f.validate]),me=p.exports.useCallback(function(i,c){var l=f.validationSchema,d=I(l)?l(c):l,v=c&&d.validateAt?d.validateAt(c,i):yu(i,d);return new Promise(function(g,O){v.then(function(){g(k)},function(R){R.name==="ValidationError"?g(vu(R)):(console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />",R),O(R))})})},[f.validationSchema]),Ze=p.exports.useCallback(function(i,c){return new Promise(function(l){return l(V.current[i].validate(c))})},[]),Je=p.exports.useCallback(function(i){var c=Object.keys(V.current).filter(function(d){return I(V.current[d].validate)}),l=c.length>0?c.map(function(d){return Ze(d,j(i,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(v,g,O){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(v=L(v,c[O],g)),v},{})})},[Ze]),bt=p.exports.useCallback(function(i){return Promise.all([Je(i),f.validationSchema?me(i):{},f.validate?Xe(i):{}]).then(function(c){var l=c[0],d=c[1],v=c[2],g=Ce.all([l,d,v],{arrayMerge:gu});return g})},[f.validate,f.validationSchema,Je,Xe,me]),P=x(function(i){return i===void 0&&(i=m.values),b({type:"SET_ISVALIDATING",payload:!0}),bt(i).then(function(c){return $.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:c})),c})});p.exports.useEffect(function(){u&&$.current===!0&&N(w.current,f.initialValues)&&P(w.current)},[u,P]);var re=p.exports.useCallback(function(i){var c=i&&i.values?i.values:w.current,l=i&&i.errors?i.errors:M.current?M.current:f.initialErrors||{},d=i&&i.touched?i.touched:F.current?F.current:f.initialTouched||{},v=i&&i.status?i.status:A.current?A.current:f.initialStatus;w.current=c,M.current=l,F.current=d,A.current=v;var g=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!i&&!!i.isSubmitting,errors:l,touched:d,status:v,values:c,isValidating:!!i&&!!i.isValidating,submitCount:!!i&&!!i.submitCount&&typeof i.submitCount=="number"?i.submitCount:0}})};if(f.onReset){var O=f.onReset(m.values,sr);Fe(O)?O.then(g):g()}else g()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);p.exports.useEffect(function(){$.current===!0&&!N(w.current,f.initialValues)&&y&&(w.current=f.initialValues,re(),u&&P(w.current))},[y,f.initialValues,re,u,P]),p.exports.useEffect(function(){y&&$.current===!0&&!N(M.current,f.initialErrors)&&(M.current=f.initialErrors||k,b({type:"SET_ERRORS",payload:f.initialErrors||k}))},[y,f.initialErrors]),p.exports.useEffect(function(){y&&$.current===!0&&!N(F.current,f.initialTouched)&&(F.current=f.initialTouched||pe,b({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[y,f.initialTouched]),p.exports.useEffect(function(){y&&$.current===!0&&!N(A.current,f.initialStatus)&&(A.current=f.initialStatus,b({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var Qe=x(function(i){if(V.current[i]&&I(V.current[i].validate)){var c=j(m.values,i),l=V.current[i].validate(c);return Fe(l)?(b({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){b({type:"SET_FIELD_ERROR",payload:{field:i,value:d}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:i,value:l}}),Promise.resolve(l))}else if(f.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),me(m.values,i).then(function(d){return d}).then(function(d){b({type:"SET_FIELD_ERROR",payload:{field:i,value:j(d,i)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),mt=p.exports.useCallback(function(i,c){var l=c.validate;V.current[i]={validate:l}},[]),Tt=p.exports.useCallback(function(i){delete V.current[i]},[]),er=x(function(i,c){b({type:"SET_TOUCHED",payload:i});var l=c===void 0?a:c;return l?P(m.values):Promise.resolve()}),rr=p.exports.useCallback(function(i){b({type:"SET_ERRORS",payload:i})},[]),tr=x(function(i,c){var l=I(i)?i(m.values):i;b({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?P(l):Promise.resolve()}),de=p.exports.useCallback(function(i,c){b({type:"SET_FIELD_ERROR",payload:{field:i,value:c}})},[]),Z=x(function(i,c,l){b({type:"SET_FIELD_VALUE",payload:{field:i,value:c}});var d=l===void 0?t:l;return d?P(L(m.values,i,c)):Promise.resolve()}),nr=p.exports.useCallback(function(i,c){var l=c,d=i,v;if(!we(i)){i.persist&&i.persist();var g=i.target?i.target:i.currentTarget,O=g.type,R=g.name,Ae=g.id,$e=g.value,Ft=g.checked,It=g.outerHTML,cr=g.options,Ct=g.multiple;l=c||R||Ae,l||Nr({htmlContent:It,documentationAnchorLink:"handlechange-e-reactchangeeventany--void",handlerName:"handleChange"}),d=/number|range/.test(O)?(v=parseFloat($e),isNaN(v)?"":v):/checkbox/.test(O)?mu(j(m.values,l),Ft,$e):cr&&Ct?bu(cr):$e}l&&Z(l,d)},[Z,m.values]),Te=x(function(i){if(we(i))return function(c){return nr(c,i)};nr(i)}),J=x(function(i,c,l){c===void 0&&(c=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:i,value:c}});var d=l===void 0?a:l;return d?P(m.values):Promise.resolve()}),ar=p.exports.useCallback(function(i,c){i.persist&&i.persist();var l=i.target,d=l.name,v=l.id,g=l.outerHTML,O=c||d||v;O||Nr({htmlContent:g,documentationAnchorLink:"handleblur-e-any--void",handlerName:"handleBlur"}),J(O,!0)},[J]),Se=x(function(i){if(we(i))return function(c){return ar(c,i)};ar(i)}),ir=p.exports.useCallback(function(i){I(i)?b({type:"SET_FORMIK_STATE",payload:i}):b({type:"SET_FORMIK_STATE",payload:function(){return i}})},[]),or=p.exports.useCallback(function(i){b({type:"SET_STATUS",payload:i})},[]),ur=p.exports.useCallback(function(i){b({type:"SET_ISSUBMITTING",payload:i})},[]),Ee=x(function(){return b({type:"SUBMIT_ATTEMPT"}),P().then(function(i){var c=i instanceof Error,l=!c&&Object.keys(i).length===0;if(l){var d;try{if(d=Et(),d===void 0)return}catch(v){throw v}return Promise.resolve(d).then(function(v){return $.current&&b({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if($.current)throw b({type:"SUBMIT_FAILURE"}),v})}else if($.current&&(b({type:"SUBMIT_FAILURE"}),c))throw i})}),St=x(function(i){if(i&&i.preventDefault&&I(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&I(i.stopPropagation)&&i.stopPropagation(),typeof document<"u"){var c=pu();c!==null&&c instanceof HTMLButtonElement&&(c.attributes&&c.attributes.getNamedItem("type")||Me(!1,'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.'))}Ee().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),sr={resetForm:re,validateForm:P,validateField:Qe,setErrors:rr,setFieldError:de,setFieldTouched:J,setFieldValue:Z,setStatus:or,setSubmitting:ur,setTouched:er,setValues:tr,setFormikState:ir,submitForm:Ee},Et=x(function(){return C(m.values,sr)}),_t=x(function(i){i&&i.preventDefault&&I(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&I(i.stopPropagation)&&i.stopPropagation(),re()}),At=p.exports.useCallback(function(i){return{value:j(m.values,i),error:j(m.errors,i),touched:!!j(m.touched,i),initialValue:j(w.current,i),initialTouched:!!j(F.current,i),initialError:j(M.current,i)}},[m.errors,m.touched,m.values]),$t=p.exports.useCallback(function(i){return{setValue:function(l,d){return Z(i,l,d)},setTouched:function(l,d){return J(i,l,d)},setError:function(l){return de(i,l)}}},[Z,J,de]),Ot=p.exports.useCallback(function(i){var c=le(i),l=c?i.name:i,d=j(m.values,l),v={name:l,value:d,onChange:Te,onBlur:Se};if(c){var g=i.type,O=i.value,R=i.as,Ae=i.multiple;g==="checkbox"?O===void 0?v.checked=!!d:(v.checked=!!(Array.isArray(d)&&~d.indexOf(O)),v.value=O):g==="radio"?(v.checked=d===O,v.value=O):R==="select"&&Ae&&(v.value=v.value||[],v.multiple=!0)}return v},[Se,Te,m.values]),_e=p.exports.useMemo(function(){return!N(w.current,m.values)},[w.current,m.values]),jt=p.exports.useMemo(function(){return typeof s<"u"?_e?m.errors&&Object.keys(m.errors).length===0:s!==!1&&I(s)?s(f):s:m.errors&&Object.keys(m.errors).length===0},[s,_e,m.errors,f]),wt=_({},m,{initialValues:w.current,initialErrors:M.current,initialTouched:F.current,initialStatus:A.current,handleBlur:Se,handleChange:Te,handleReset:_t,handleSubmit:St,resetForm:re,setErrors:rr,setFormikState:ir,setFieldTouched:J,setFieldValue:Z,setFieldError:de,setStatus:or,setSubmitting:ur,setTouched:er,setValues:tr,submitForm:Ee,validateForm:P,validateField:Qe,isValid:jt,dirty:_e,unregisterField:Tt,registerField:mt,getFieldProps:Ot,getFieldMeta:At,getFieldHelpers:$t,validateOnBlur:a,validateOnChange:t,validateOnMount:u});return wt}function Nr(e){var r=e.htmlContent,t=e.documentationAnchorLink,n=e.handlerName;console.warn("Warning: Formik called `"+n+"`, but you forgot to pass an `id` or `name` attribute to your input:\n    "+r+`
    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#`+t+`
  `)}function vu(e){var r={};if(e.inner){if(e.inner.length===0)return L(r,e.path,e.message);for(var a=e.inner,t=Array.isArray(a),n=0,a=t?a:a[Symbol.iterator]();;){var o;if(t){if(n>=a.length)break;o=a[n++]}else{if(n=a.next(),n.done)break;o=n.value}var u=o;j(r,u.path)||(r=L(r,u.path,u.message))}}return r}function yu(e,r,t,n){t===void 0&&(t=!1);var a=Ue(e);return r[t?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function Ue(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(a){return Array.isArray(a)===!0||fr(a)?Ue(a):a!==""?a:void 0}):fr(e[n])?r[n]=Ue(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function gu(e,r,t){var n=e.slice();return r.forEach(function(o,u){if(typeof n[u]>"u"){var s=t.clone!==!1,h=s&&t.isMergeableObject(o);n[u]=h?Ce(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[u]=Ce(e[u],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function bu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function mu(e,r,t){if(typeof e=="boolean")return Boolean(r);var n=[],a=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),a=o>=0;else if(!t||t=="true"||t=="false")return Boolean(r);return r&&t&&!a?n.concat(t):a?n.slice(0,o).concat(n.slice(o+1)):n}var Tu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.exports.useLayoutEffect:p.exports.useEffect;function x(e){var r=p.exports.useRef(e);return Tu(function(){r.current=e}),p.exports.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current.apply(void 0,n)},[])}var Su=p.exports.forwardRef(function(e,r){var t=e.action,n=qe(e,["action"]),a=t!=null?t:"#",o=lu(),u=o.handleReset,s=o.handleSubmit;return p.exports.createElement("form",_({onSubmit:s,ref:r,onReset:u,action:a},n))});Su.displayName="Form";var Eu=function(r,t,n){var a=W(r),o=a[t];return a.splice(t,1),a.splice(n,0,o),a},_u=function(r,t,n){var a=W(r),o=a[t];return a[t]=a[n],a[n]=o,a},Ie=function(r,t,n){var a=W(r);return a.splice(t,0,n),a},Au=function(r,t,n){var a=W(r);return a[t]=n,a},W=function(r){if(r){if(Array.isArray(r))return[].concat(r);var t=Object.keys(r).map(function(n){return parseInt(n)}).reduce(function(n,a){return a>n?a:n},0);return Array.from(_({},r,{length:t+1}))}else return[]},Br=function(r,t){var n=typeof r=="function"?r:t;return function(a){if(Array.isArray(a)||le(a)){var o=W(a);return n(o)}return a}},$u=function(e){cu(r,e);function r(n){var a;return a=e.call(this,n)||this,a.updateArrayField=function(o,u,s){var h=a.props,y=h.name,C=h.formik.setFormikState;C(function(E){var f=Br(s,o),w=Br(u,o),M=L(E.values,y,o(j(E.values,y))),F=s?f(j(E.errors,y)):void 0,A=u?w(j(E.touched,y)):void 0;return Vr(F)&&(F=void 0),Vr(A)&&(A=void 0),_({},E,{values:M,errors:s?L(E.errors,y,F):E.errors,touched:u?L(E.touched,y,A):E.touched})})},a.push=function(o){return a.updateArrayField(function(u){return[].concat(W(u),[su(o)])},!1,!1)},a.handlePush=function(o){return function(){return a.push(o)}},a.swap=function(o,u){return a.updateArrayField(function(s){return _u(s,o,u)},!0,!0)},a.handleSwap=function(o,u){return function(){return a.swap(o,u)}},a.move=function(o,u){return a.updateArrayField(function(s){return Eu(s,o,u)},!0,!0)},a.handleMove=function(o,u){return function(){return a.move(o,u)}},a.insert=function(o,u){return a.updateArrayField(function(s){return Ie(s,o,u)},function(s){return Ie(s,o,null)},function(s){return Ie(s,o,null)})},a.handleInsert=function(o,u){return function(){return a.insert(o,u)}},a.replace=function(o,u){return a.updateArrayField(function(s){return Au(s,o,u)},!1,!1)},a.handleReplace=function(o,u){return function(){return a.replace(o,u)}},a.unshift=function(o){var u=-1;return a.updateArrayField(function(s){var h=s?[o].concat(s):[o];return u=h.length,h},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),u},a.handleUnshift=function(o){return function(){return a.unshift(o)}},a.handleRemove=function(o){return function(){return a.remove(o)}},a.handlePop=function(){return function(){return a.pop()}},a.remove=a.remove.bind(Ur(a)),a.pop=a.pop.bind(Ur(a)),a}var t=r.prototype;return t.componentDidUpdate=function(a){this.props.validateOnChange&&this.props.formik.validateOnChange&&!N(j(a.formik.values,a.name),j(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},t.remove=function(a){var o;return this.updateArrayField(function(u){var s=u?W(u):[];return o||(o=s[a]),I(s.splice)&&s.splice(a,1),I(s.every)&&s.every(function(h){return h===void 0})?[]:s},!0,!0),o},t.pop=function(){var a;return this.updateArrayField(function(o){var u=o.slice();return a||(a=u&&u.pop&&u.pop()),u},!0,!0),a},t.render=function(){var a={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,u=o.component,s=o.render,h=o.children,y=o.name,C=o.formik,E=qe(C,["validate","validationSchema"]),f=_({},a,{form:E,name:y});return u?p.exports.createElement(u,f):s?s(f):h?typeof h=="function"?h(f):du(h)?null:p.exports.Children.only(h):null},r}(p.exports.Component);$u.defaultProps={validateOnChange:!0};export{ju as u};
