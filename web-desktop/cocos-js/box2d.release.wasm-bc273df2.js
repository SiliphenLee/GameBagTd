System.register(["./_virtual_cc-530b6fbb.js","./_commonjsHelpers-ac46539f.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t._},function(t){r=t.c}],execute:function(){var n=r((function(t){var r,n=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){void 0===t&&(t={});var n,o,i=void 0!==t?t:{};i.ready=new Promise((function(t,e){n=t,o=e}));var a=Object.assign({},i),s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),r&&(s=r),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var u,c,l=i.print||console.log.bind(console),f=i.printErr||console.error.bind(console);Object.assign(i,a),a=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(u=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&k("no native wasm support detected");var p,d,h,v,y,m,g,b,C,w=!1;function $(){var t=c.buffer;i.HEAP8=p=new Int8Array(t),i.HEAP16=h=new Int16Array(t),i.HEAP32=y=new Int32Array(t),i.HEAPU8=d=new Uint8Array(t),i.HEAPU16=v=new Uint16Array(t),i.HEAPU32=m=new Uint32Array(t),i.HEAPF32=g=new Float32Array(t),i.HEAPF64=b=new Float64Array(t)}var T,P,A=[],_=[],O=[],W=0,S=null;function k(t){i.onAbort&&i.onAbort(t),f(t="Aborted("+t+")"),w=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw o(e),e}function E(t){return t.startsWith("data:application/octet-stream;base64,")}function j(t){try{if(t==T&&u)return new Uint8Array(u);throw"both async and sync fetching of the wasm failed"}catch(t){k(t)}}function F(t,e,r){return function(t){return u||"function"!=typeof fetch?Promise.resolve().then((function(){return j(t)})):fetch(t,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((function(){return j(t)}))}(t).then((function(t){return WebAssembly.instantiate(t,e)})).then((function(t){return t})).then(r,(function(t){f("failed to asynchronously prepare wasm: "+t),k(t)}))}function R(t){for(;t.length>0;)t.shift()(i)}function D(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function I(t,e){var r;return(r={},r[t=D(t)]=function(){return e.apply(this,arguments)},r)[t]}E(T="box2d.MinSizeRel.wasm.wasm")||(P=T,T=i.locateFile?i.locateFile(P,s):s+P);var x=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.has=function(t){return void 0!==this.allocated[t]},this.allocate=function(t){var e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}};function U(t,e){var r=I(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var V=void 0;function z(t){throw new V(t)}var H=function(t){return t||z("Cannot use deleted val. handle = "+t),x.get(t).value},B=function(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return x.allocate({refcount:1,value:t})}},M=void 0,N=void 0;function q(t){for(var e="",r=t;d[r];)e+=N[d[r++]];return e}var G=[];function L(){for(;G.length;){var t=G.pop();t.$$.deleteScheduled=!1,t.delete()}}var J=void 0;var K={};function Z(t,e){for(void 0===e&&z("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}function Q(t,e,r){e=Z(t,e),K.hasOwnProperty(e)?z("Tried to register registered instance: "+e):K[e]=r}var X={};function Y(t){var e=se(t),r=q(e);return ae(e),r}function tt(t,e){var r=X[t];return void 0===r&&z(e+" has unknown type "+Y(t)),r}function et(){}var rt=!1;function nt(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function ot(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=ot(t,e,r.baseClass);return null===n?null:r.downcast(n)}var it={},at=void 0;function st(t){throw new at(t)}function ut(t,e){return e.ptrType&&e.ptr||st("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&st("Both smartPtrType and smartPtr must be specified"),e.count={value:1},ct(Object.create(t,{$$:{value:e}}))}function ct(t){return"undefined"==typeof FinalizationRegistry?(ct=function(t){return t},t):(rt=new FinalizationRegistry((function(t){nt(t.$$)})),et=function(t){return rt.unregister(t)},(ct=function(t){var e=t.$$;if(e.smartPtr){var r={$$:e};rt.register(t,r,t)}return t})(t))}var lt={};function ft(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function pt(t){return this.fromWireType(y[t>>2])}var dt={},ht={};function vt(t,e,r){function n(e){var n=r(e);n.length!==t.length&&st("Mismatched type converter count");for(var o=0;o<t.length;++o)mt(t[o],n[o])}t.forEach((function(t){ht[t]=e}));var o=new Array(e.length),i=[],a=0;e.forEach((function(t,e){X.hasOwnProperty(t)?o[e]=X[t]:(i.push(t),dt.hasOwnProperty(t)||(dt[t]=[]),dt[t].push((function(){o[e]=X[t],++a===i.length&&n(o)})))})),0===i.length&&n(o)}function yt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function mt(t,e,r){if(void 0===r&&(r={}),!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||z('type "'+n+'" must have a positive integer typeid pointer'),X.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;z("Cannot register type '"+n+"' twice")}if(X[t]=e,delete ht[t],dt.hasOwnProperty(t)){var o=dt[t];delete dt[t],o.forEach((function(t){return t()}))}}function gt(t){z(t.$$.ptrType.registeredClass.name+" instance already deleted")}function bt(){}function Ct(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||z("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function wt(t,e,r){i.hasOwnProperty(t)?((void 0===r||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[r])&&z("Cannot register public name '"+t+"' twice"),Ct(i,t,t),i.hasOwnProperty(r)&&z("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[t].overloadTable[r]=e):(i[t]=e,void 0!==r&&(i[t].numArguments=r))}function $t(t,e,r,n,o,i,a,s){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function Tt(t,e,r){for(;e!==r;)e.upcast||z("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function Pt(t,e){if(null===e)return this.isReference&&z("null is not a valid "+this.name),0;e.$$||z('Cannot pass "'+Vt(e)+'" as a '+this.name),e.$$.ptr||z("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return Tt(e.$$.ptr,r,this.registeredClass)}function At(t,e){var r;if(null===e)return this.isReference&&z("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||z('Cannot pass "'+Vt(e)+'" as a '+this.name),e.$$.ptr||z("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&z("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=Tt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&z("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:z("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var o=e.clone();r=this.rawShare(r,B((function(){o.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:z("Unsupporting sharing policy")}return r}function _t(t,e){if(null===e)return this.isReference&&z("null is not a valid "+this.name),0;e.$$||z('Cannot pass "'+Vt(e)+'" as a '+this.name),e.$$.ptr||z("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&z("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return Tt(e.$$.ptr,r,this.registeredClass)}function Ot(t,e,r,n,o,i,a,s,u,c,l){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=l,o||void 0!==e.baseClass?this.toWireType=At:n?(this.toWireType=Pt,this.destructorFunction=null):(this.toWireType=_t,this.destructorFunction=null)}function Wt(t,e,r){i.hasOwnProperty(t)||st("Replacing nonexistant public symbol"),void 0!==i[t].overloadTable&&void 0!==r?i[t].overloadTable[r]=e:(i[t]=e,i[t].argCount=r)}function St(t){return C.get(t)}function kt(t,e,r){return t.includes("j")?function(t,e,r){var n=i["dynCall_"+t];return r&&r.length?n.apply(null,[e].concat(r)):n.call(null,e)}(t,e,r):St(e).apply(null,r)}function Et(t,e){var r,n,o,i=(t=q(t)).includes("j")?(r=t,n=e,o=[],function(){return o.length=0,Object.assign(o,arguments),kt(r,n,o)}):St(e);return"function"!=typeof i&&z("unknown function pointer with signature "+t+": "+e),i}var jt=void 0;function Ft(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||X[e]||(ht[e]?ht[e].forEach(t):(r.push(e),n[e]=!0))})),new jt(t+": "+r.map(Y).join([", "]))}function Rt(t,e,r,n,o){var i=e.length;i<2&&z("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,s=!1,u=1;u<e.length;++u)if(null!==e[u]&&void 0===e[u].destructorFunction){s=!0;break}var c="void"!==e[0].name,l=i-2,f=new Array(l),p=[],d=[];return function(){var r;arguments.length!==l&&z("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),d.length=0,p.length=a?2:1,p[0]=o,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var i=0;i<l;++i)f[i]=e[i+2].toWireType(d,arguments[i]),p.push(f[i]);var u=n.apply(null,p);function h(t){if(s)ft(d);else for(var n=a?1:2;n<e.length;n++){var o=1===n?r:f[n-2];null!==e[n].destructorFunction&&e[n].destructorFunction(o)}if(c)return e[0].fromWireType(t)}return h(u)}}function Dt(t,e){for(var r=[],n=0;n<t;n++)r.push(m[e+4*n>>2]);return r}function It(t,e,r){return t instanceof Object||z(r+' with invalid "this": '+t),t instanceof e.registeredClass.constructor||z(r+' incompatible with "this" of type '+t.constructor.name),t.$$.ptr||z("cannot call emscripten binding method "+r+" on deleted object"),Tt(t.$$.ptr,t.$$.ptrType.registeredClass,e.registeredClass)}function xt(t){t>=x.reserved&&0==--x.get(t).refcount&&x.free(t)}function Ut(t,e,r){switch(e){case 0:return function(t){var e=r?p:d;return this.fromWireType(e[t])};case 1:return function(t){var e=r?h:v;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=r?y:m;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function Vt(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function zt(t,e){switch(e){case 2:return function(t){return this.fromWireType(g[t>>2])};case 3:return function(t){return this.fromWireType(b[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function Ht(t,e,r){switch(e){case 0:return r?function(t){return p[t]}:function(t){return d[t]};case 1:return r?function(t){return h[t>>1]}:function(t){return v[t>>1]};case 2:return r?function(t){return y[t>>2]}:function(t){return m[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}var Bt="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Mt(t,e,r){for(var n=e+r,o=e;t[o]&&!(o>=n);)++o;if(o-e>16&&t.buffer&&Bt)return Bt.decode(t.subarray(e,o));for(var i="";e<o;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|s)}else i+=String.fromCharCode(a)}return i}var Nt="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function qt(t,e){for(var r=t,n=r>>1,o=n+e/2;!(n>=o)&&v[n];)++n;if((r=n<<1)-t>32&&Nt)return Nt.decode(d.subarray(t,r));for(var i="",a=0;!(a>=e/2);++a){var s=h[t+2*a>>1];if(0==s)break;i+=String.fromCharCode(s)}return i}function Gt(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,o=(r-=2)<2*t.length?r/2:t.length,i=0;i<o;++i){var a=t.charCodeAt(i);h[e>>1]=a,e+=2}return h[e>>1]=0,e-n}function Lt(t){return 2*t.length}function Jt(t,e){for(var r=0,n="";!(r>=e/4);){var o=y[t+4*r>>2];if(0==o)break;if(++r,o>=65536){var i=o-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(o)}return n}function Kt(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,o=n+r-4,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),y[e>>2]=a,(e+=4)+4>o)break}return y[e>>2]=0,e-n}function Zt(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}var Qt={};function Xt(t){var e=Qt[t];return void 0===e?q(t):e}var Yt=[],te=[];function ee(t){var e=t-c.buffer.byteLength+65535>>>16;try{return c.grow(e),$(),1}catch(t){}}var re=[null,[],[]];V=i.BindingError=U(Error,"BindingError"),x.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),x.reserved=x.allocated.length,i.count_emval_handles=function(){for(var t=0,e=x.reserved;e<x.allocated.length;++e)void 0!==x.allocated[e]&&++t;return t},M=i.PureVirtualError=U(Error,"PureVirtualError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);N=t}(),i.getInheritedInstanceCount=function(){return Object.keys(K).length},i.getLiveInheritedInstances=function(){var t=[];for(var e in K)K.hasOwnProperty(e)&&t.push(K[e]);return t},i.flushPendingDeletes=L,i.setDelayFunction=function(t){J=t,G.length&&J&&J(L)},at=i.InternalError=U(Error,"InternalError"),bt.prototype.isAliasOf=function(t){if(!(this instanceof bt))return!1;if(!(t instanceof bt))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,o=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return e===n&&r===o},bt.prototype.clone=function(){if(this.$$.ptr||gt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=ct(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},bt.prototype.delete=function(){this.$$.ptr||gt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&z("Object already scheduled for deletion"),et(this),nt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},bt.prototype.isDeleted=function(){return!this.$$.ptr},bt.prototype.deleteLater=function(){return this.$$.ptr||gt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&z("Object already scheduled for deletion"),G.push(this),1===G.length&&J&&J(L),this.$$.deleteScheduled=!0,this},Ot.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Ot.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Ot.prototype.argPackAdvance=8,Ot.prototype.readValueFromPointer=pt,Ot.prototype.deleteObject=function(t){null!==t&&t.delete()},Ot.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=function(t,e){return e=Z(t,e),K[e]}(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function o(){return this.isSmartPointer?ut(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):ut(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var i,a=this.registeredClass.getActualType(e),s=it[a];if(!s)return o.call(this);i=this.isConst?s.constPointerType:s.pointerType;var u=ot(e,this.registeredClass,i.registeredClass);return null===u?o.call(this):this.isSmartPointer?ut(i.registeredClass.instancePrototype,{ptrType:i,ptr:u,smartPtrType:this,smartPtr:t}):ut(i.registeredClass.instancePrototype,{ptrType:i,ptr:u})},jt=i.UnboundTypeError=U(Error,"UnboundTypeError");var ne={q:function(t,e,r){t=q(t),e=tt(e,"wrapper"),r=H(r);var n=[].slice,o=e.registeredClass,i=o.instancePrototype,a=o.baseClass.instancePrototype,s=o.baseClass.constructor,u=I(t,(function(){o.baseClass.pureVirtualFunctions.forEach(function(t){if(this[t]===a[t])throw new M("Pure virtual function "+t+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:i}),this.__construct.apply(this,n.call(arguments))}));for(var c in i.__construct=function(){this===i&&z("Pass correct 'this' to __construct");var t=s.implement.apply(void 0,[this].concat(n.call(arguments)));et(t);var e=t.$$;t.notifyOnDestruction(),e.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:e}}),ct(this),Q(o,e.ptr,this)},i.__destruct=function(){var t;this===i&&z("Pass correct 'this' to __destruct"),et(this),t=Z(o,t=this.$$.ptr),K.hasOwnProperty(t)?delete K[t]:z("Tried to unregister unregistered instance: "+t)},u.prototype=Object.create(i),r)u.prototype[c]=r[c];return B(u)},k:function(t){var e=lt[t];delete lt[t];var r=e.rawConstructor,n=e.rawDestructor,o=e.fields;vt([t],o.map((function(t){return t.getterReturnType})).concat(o.map((function(t){return t.setterArgumentType}))),(function(t){var i={};return o.forEach((function(e,r){var n=e.fieldName,a=t[r],s=e.getter,u=e.getterContext,c=t[r+o.length],l=e.setter,f=e.setterContext;i[n]={read:function(t){return a.fromWireType(s(u,t))},write:function(t,e){var r=[];l(f,t,c.toWireType(r,e)),ft(r)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var r in i)e[r]=i[r].read(t);return n(t),e},toWireType:function(t,e){for(var o in i)if(!(o in e))throw new TypeError('Missing field: "'+o+'"');var a=r();for(o in i)i[o].write(a,e[o]);return null!==t&&t.push(n,a),a},argPackAdvance:8,readValueFromPointer:pt,destructorFunction:n}]}))},B:function(){},F:function(t,e,r,n,o){var i=yt(r);mt(t,{name:e=q(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:o},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=p;else if(2===r)n=h;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=y}return this.fromWireType(n[t>>i])},destructorFunction:null})},d:function(t,e,r,n,o,i,a,s,u,c,l,f,p){l=q(l),i=Et(o,i),s&&(s=Et(a,s)),c&&(c=Et(u,c)),p=Et(f,p);var d=D(l);wt(d,(function(){Ft("Cannot construct "+l+" due to unbound types",[n])})),vt([t,e,r],n?[n]:[],(function(e){var r,o;e=e[0],o=n?(r=e.registeredClass).instancePrototype:bt.prototype;var a=I(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new V("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new V(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new V("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),u=Object.create(o,{constructor:{value:a}});a.prototype=u;var f=new $t(l,a,u,p,r,i,s,c);f.baseClass&&(void 0===f.baseClass.__derivedClasses&&(f.baseClass.__derivedClasses=[]),f.baseClass.__derivedClasses.push(f));var h=new Ot(l,f,!0,!1,!1),v=new Ot(l+"*",f,!1,!1,!1),y=new Ot(l+" const*",f,!1,!0,!1);return it[t]={pointerType:v,constPointerType:y},Wt(d,a),[h,v,y]}))},j:function(t,r,n,o,i,a,s){var u=Dt(n,o);r=q(r),a=Et(i,a),vt([],[t],(function(t){var o=(t=t[0]).name+"."+r;function i(){Ft("Cannot call "+o+" due to unbound types",u)}r.startsWith("@@")&&(r=Symbol[r.substring(2)]);var c=t.registeredClass.constructor;return void 0===c[r]?(i.argCount=n-1,c[r]=i):(Ct(c,r,o),c[r].overloadTable[n-1]=i),vt([],u,(function(i){var u=[i[0],null].concat(i.slice(1)),l=Rt(o,u,null,a,s);if(void 0===c[r].overloadTable?(l.argCount=n-1,c[r]=l):c[r].overloadTable[n-1]=l,t.registeredClass.__derivedClasses)for(var f,p=e(t.registeredClass.__derivedClasses);!(f=p()).done;){var d=f.value;d.constructor.hasOwnProperty(r)||(d.constructor[r]=l)}return[]})),[]}))},f:function(t,e,r,n,o,i){e>0||k(undefined);var a=Dt(e,r);o=Et(n,o),vt([],[t],(function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new V("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){Ft("Cannot construct "+t.name+" due to unbound types",a)},vt([],a,(function(n){return n.splice(1,0,null),t.registeredClass.constructor_body[e-1]=Rt(r,n,null,o,i),[]})),[]}))},a:function(t,e,r,n,o,i,a,s){var u=Dt(r,n);e=q(e),i=Et(o,i),vt([],[t],(function(t){var n=(t=t[0]).name+"."+e;function o(){Ft("Cannot call "+n+" due to unbound types",u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(o.argCount=r-2,o.className=t.name,c[e]=o):(Ct(c,e,n),c[e].overloadTable[r-2]=o),vt([],u,(function(o){var s=Rt(n,o,t,i,a);return void 0===c[e].overloadTable?(s.argCount=r-2,c[e]=s):c[e].overloadTable[r-2]=s,[]})),[]}))},c:function(t,e,r,n,o,i,a,s,u,c){e=q(e),o=Et(n,o),vt([],[t],(function(t){var n=(t=t[0]).name+"."+e,l={get:function(){Ft("Cannot access "+n+" due to unbound types",[r,a])},enumerable:!0,configurable:!0};return l.set=u?function(){Ft("Cannot access "+n+" due to unbound types",[r,a])}:function(){z(n+" is a read-only property")},Object.defineProperty(t.registeredClass.instancePrototype,e,l),vt([],u?[r,a]:[r],(function(r){var a=r[0],l={get:function(){var e=It(this,t,n+" getter");return a.fromWireType(o(i,e))},enumerable:!0};if(u){u=Et(s,u);var f=r[1];l.set=function(e){var r=It(this,t,n+" setter"),o=[];u(c,r,f.toWireType(o,e)),ft(o)}}return Object.defineProperty(t.registeredClass.instancePrototype,e,l),[]})),[]}))},r:function(t,e,r){t=q(t),vt([],[e],(function(e){return e=e[0],i[t]=e.fromWireType(r),[]}))},E:function(t,e){mt(t,{name:e=q(e),fromWireType:function(t){var e=H(t);return xt(t),e},toWireType:function(t,e){return B(e)},argPackAdvance:8,readValueFromPointer:pt,destructorFunction:null})},x:function(t,e,r,n){var o=yt(r);function i(){}e=q(e),i.values={},mt(t,{name:e,constructor:i,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:Ut(e,o,n),destructorFunction:null}),wt(e,i)},m:function(t,e,r){var n=tt(t,"enum");e=q(e);var o=n.constructor,i=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:I(n.name+"_"+e,(function(){}))}});o.values[r]=i,o[e]=i},v:function(t,e,r){var n=yt(r);mt(t,{name:e=q(e),fromWireType:function(t){return t},toWireType:function(t,e){return e},argPackAdvance:8,readValueFromPointer:zt(e,n),destructorFunction:null})},b:function(t,e,r,n,o,i){var a=Dt(e,r);t=q(t),o=Et(n,o),wt(t,(function(){Ft("Cannot call "+t+" due to unbound types",a)}),e-1),vt([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return Wt(t,Rt(t,n,null,o,i),e-1),[]}))},i:function(t,e,r,n){e=q(e);var o=yt(r),i=function(t){return t};if(0===n){var a=32-8*r;i=function(t){return t<<a>>>a}}var s=e.includes("unsigned");mt(t,{name:e,fromWireType:i,toWireType:s?function(t,e){return this.name,e>>>0}:function(t,e){return this.name,e},argPackAdvance:8,readValueFromPointer:Ht(e,o,0!==n),destructorFunction:null})},e:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function o(t){var e=m,r=e[t>>=2],o=e[t+1];return new n(e.buffer,o,r)}mt(t,{name:r=q(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},u:function(t,e){var r="std::string"===(e=q(e));mt(t,{name:e,fromWireType:function(t){var e,n,o=m[t>>2],i=t+4;if(r)for(var a=i,s=0;s<=o;++s){var u=i+s;if(s==o||0==d[u]){var c=(n=a)?Mt(d,n,u-a):"";void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),a=u+1}}else{var l=new Array(o);for(s=0;s<o;++s)l[s]=String.fromCharCode(d[i+s]);e=l.join("")}return ae(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var o="string"==typeof e;o||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||z("Cannot pass non-string to std::string"),n=r&&o?function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e}(e):e.length;var i=ie(4+n+1),a=i+4;if(m[i>>2]=n,r&&o)!function(t,e,r,n){if(!(n>0))return 0;for(var o=r+n-1,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),a<=127){if(r>=o)break;e[r++]=a}else if(a<=2047){if(r+1>=o)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=o)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=o)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,d,a,n+1);else if(o)for(var s=0;s<n;++s){var u=e.charCodeAt(s);u>255&&(ae(a),z("String has UTF-16 code units that do not fit in 8 bits")),d[a+s]=u}else for(s=0;s<n;++s)d[a+s]=e[s];return null!==t&&t.push(ae,i),i},argPackAdvance:8,readValueFromPointer:pt,destructorFunction:function(t){ae(t)}})},s:function(t,e,r){var n,o,i,a,s;r=q(r),2===e?(n=qt,o=Gt,a=Lt,i=function(){return v},s=1):4===e&&(n=Jt,o=Kt,a=Zt,i=function(){return m},s=2),mt(t,{name:r,fromWireType:function(t){for(var r,o=m[t>>2],a=i(),u=t+4,c=0;c<=o;++c){var l=t+4+c*e;if(c==o||0==a[l>>s]){var f=n(u,l-u);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),u=l+e}}return ae(t),r},toWireType:function(t,n){"string"!=typeof n&&z("Cannot pass non-string to C++ string type "+r);var i=a(n),u=ie(4+i+e);return m[u>>2]=i>>s,o(n,u+4,i+e),null!==t&&t.push(ae,u),u},argPackAdvance:8,readValueFromPointer:pt,destructorFunction:function(t){ae(t)}})},l:function(t,e,r,n,o,i){lt[t]={name:q(e),rawConstructor:Et(r,n),rawDestructor:Et(o,i),fields:[]}},g:function(t,e,r,n,o,i,a,s,u,c){lt[t].fields.push({fieldName:q(e),getterReturnType:r,getter:Et(n,o),getterContext:i,setterArgumentType:a,setter:Et(s,u),setterContext:c})},G:function(t,e){mt(t,{isVoid:!0,name:e=q(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},y:function(t,e,r,n,o){return(t=Yt[t])(e=H(e),r=Xt(r),function(t){var e=[];return m[t>>2]=B(e),e}(n),o)},n:function(t,e,r,n){(t=Yt[t])(e=H(e),r=Xt(r),null,n)},o:xt,h:function(t,e){var r=function(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=tt(m[e+4*n>>2],"parameter "+n);return r}(t,e),n=r[0],o=n.name+"_$"+r.slice(1).map((function(t){return t.name})).join("_")+"$",i=te[o];if(void 0!==i)return i;var a,s,u=new Array(t-1);return a=function(e,o,i,a){for(var s=0,c=0;c<t-1;++c)u[c]=r[c+1].readValueFromPointer(a+s),s+=r[c+1].argPackAdvance;var l=e[o].apply(e,u);for(c=0;c<t-1;++c)r[c+1].deleteObject&&r[c+1].deleteObject(u[c]);if(!n.isVoid)return n.toWireType(i,l)},s=Yt.length,Yt.push(a),i=s,te[o]=i,i},z:function(t){t>4&&(x.get(t).refcount+=1)},w:function(t){ft(H(t)),xt(t)},A:function(t,e){var r=(t=tt(t,"_emval_take_value")).readValueFromPointer(e);return B(r)},p:function(){k("")},D:function(t,e,r){d.copyWithin(t,e,e+r)},C:function(t){var e=d.length,r=2147483648;if((t>>>=0)>r)return!1;for(var n,o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,t+100663296),ee(Math.min(r,(n=Math.max(t,i))+(65536-n%65536)%65536)))return!0}return!1},t:function(t,e,r,n){for(var o,i,a,s=0,u=0;u<r;u++){var c=m[e>>2],p=m[e+4>>2];e+=8;for(var h=0;h<p;h++)o=t,i=d[c+h],a=void 0,a=re[o],0===i||10===i?((1===o?l:f)(Mt(a,0)),a.length=0):a.push(i);s+=p}return m[n>>2]=s,0}};!function(){var t,e,r,n,a={a:ne};function s(t){var e,r=t.exports;return i.asm=r,c=i.asm.H,$(),C=i.asm.J,e=i.asm.I,_.unshift(e),function(){if(W--,i.monitorRunDependencies&&i.monitorRunDependencies(W),0==W&&S){var t=S;S=null,t()}}(),r}if(W++,i.monitorRunDependencies&&i.monitorRunDependencies(W),i.instantiateWasm)try{return i.instantiateWasm(a,s)}catch(t){f("Module.instantiateWasm callback failed with error: "+t),o(t)}(t=u,e=T,r=a,n=function(t){s(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||E(e)||"function"!=typeof fetch?F(e,r,n):fetch(e,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,r).then(n,(function(t){return f("wasm streaming compile failed: "+t),f("falling back to ArrayBuffer instantiation"),F(e,r,n)}))}))).catch(o)}();var oe,ie=function(){return(ie=i.asm.K).apply(null,arguments)},ae=function(){return(ae=i.asm.L).apply(null,arguments)},se=function(){return(se=i.asm.M).apply(null,arguments)};function ue(){function t(){oe||(oe=!0,i.calledRun=!0,w||(R(_),n(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),O.unshift(t);var t;R(O)}()))}W>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),A.unshift(t);var t;R(A)}(),W>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm.N).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.O).apply(null,arguments)},S=function t(){oe||ue(),oe||(S=t)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return ue(),t.ready});t.exports=n}));t({default:n,__moduleExports:n})}}}));