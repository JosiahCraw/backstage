/*! For license information please see 53d1212e.80a220c4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[541103],{603905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,m=p["".concat(l,".").concat(y)]||p[y]||s[y]||a;return n?r.createElement(m,c(c({ref:t},f),{},{components:n})):r.createElement(m,c({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},870420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>f});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"plugin-catalog-common.analyzelocationgenerateentity",title:"AnalyzeLocationGenerateEntity",description:"API reference for AnalyzeLocationGenerateEntity"},i=void 0,l={unversionedId:"reference/plugin-catalog-common.analyzelocationgenerateentity",id:"reference/plugin-catalog-common.analyzelocationgenerateentity",title:"AnalyzeLocationGenerateEntity",description:"API reference for AnalyzeLocationGenerateEntity",source:"@site/../docs/reference/plugin-catalog-common.analyzelocationgenerateentity.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-common.analyzelocationgenerateentity",permalink:"/docs/reference/plugin-catalog-common.analyzelocationgenerateentity",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-common.analyzelocationgenerateentity.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-common.analyzelocationgenerateentity",title:"AnalyzeLocationGenerateEntity",description:"API reference for AnalyzeLocationGenerateEntity"}},u={},f=[],p={toc:f};function s(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-catalog-common"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-catalog-common"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-catalog-common.analyzelocationgenerateentity"}),(0,r.kt)("inlineCode",{parentName:"a"},"AnalyzeLocationGenerateEntity"))),(0,r.kt)("p",null,"This is some form of representation of what the analyzer could deduce. We should probably have a chat about how this can best be conveyed to the frontend. It'll probably contain a (possibly incomplete) entity, plus enough info for the frontend to know what form data to show to the user for overriding/completing the info."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type AnalyzeLocationGenerateEntity = {\n    entity: RecursivePartial<Entity>;\n    fields: AnalyzeLocationEntityField[];\n};\n")),(0,r.kt)("b",null,"References:")," [Entity](/docs/reference/catalog-model.entity), [AnalyzeLocationEntityField](/docs/reference/plugin-catalog-common.analyzelocationentityfield)")}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,i,l=o(e),u=1;u<arguments.length;u++){for(var f in c=Object(arguments[u]))n.call(c,f)&&(l[f]=c[f]);if(t){i=t(c);for(var p=0;p<i.length;p++)r.call(c,i[p])&&(l[i[p]]=c[i[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var c=60109,i=60110,l=60112;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),c=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),f=p("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function g(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||m}function b(){}function h(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=h.prototype=new b;v.constructor=h,r(v,g.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:O.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return c=c(l=e),e=""===r?"."+_(l,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),S(c,t,n,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),t.push(c)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=r+_(i=e[u],u);l+=S(i,t,n,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(i=e.next()).done;)l+=S(i=i.value,t,n,f=r+_(i,u++),c);else if("object"===i)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function z(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,n)=>{n(541535)}}]);