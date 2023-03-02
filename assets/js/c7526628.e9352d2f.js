/*! For license information please see c7526628.e9352d2f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[900280],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},269584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});n(827378);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format"},s=void 0,l={unversionedId:"architecture-decisions/adrs-adr002",id:"architecture-decisions/adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format",source:"@site/../docs/architecture-decisions/adr002-default-catalog-file-format.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr002",permalink:"/docs/architecture-decisions/adrs-adr002",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/adr002-default-catalog-file-format.md",tags:[],version:"current",frontMatter:{id:"adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format"},sidebar:"docs",previous:{title:"ADR001: Architecture Decision Record (ADR) log",permalink:"/docs/architecture-decisions/adrs-adr001"},next:{title:"ADR003: Avoid Default Exports and Prefer Named Exports",permalink:"/docs/architecture-decisions/adrs-adr003"}},c={},p=[{value:"Background",id:"background",level:2},{value:"Inspiration",id:"inspiration",level:3},{value:"Core Concepts",id:"core-concepts",level:3},{value:"Format",id:"format",level:2},{value:"Envelope",id:"envelope",level:2},{value:"<code>apiVersion</code> and <code>kind</code>",id:"apiversion-and-kind",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>spec</code>",id:"spec",level:3},{value:"Metadata",id:"metadata-1",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>namespace</code>",id:"namespace",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>labels</code>",id:"labels",level:3},{value:"<code>annotations</code>",id:"annotations",level:3},{value:"Component",id:"component",level:2}],d={toc:p};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"background"}),"Background"),(0,a.kt)("p",null,"Backstage comes with a software catalog functionality, that you can use to track\nall your software components and more. It can be powered by data from various\nsources, and one of them that is included with the package, is a custom database\nbacked catalog. It has the ability to keep itself updated automatically based on\nthe contents of little descriptor files in your version control system of\nchoice. Developers create these files and maintain them side by side with their\ncode, and the catalog system reacts accordingly."),(0,a.kt)("p",null,"This ADR describes the default format of these descriptor files."),(0,a.kt)("h3",r({},{id:"inspiration"}),"Inspiration"),(0,a.kt)("p",null,"Internally at Spotify, a homegrown software catalog system is used heavily and\nforms a core part of Backstage and other important pieces of the infrastructure.\nThe user experience, learnings and certain pieces of metadata from that catalog\nare being carried over to the open source effort."),(0,a.kt)("p",null,"The file format described herein, also draws heavy inspiration from the\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"}),"kubernetes object format"),"."),(0,a.kt)("h3",r({},{id:"core-concepts"}),"Core Concepts"),(0,a.kt)("p",null,"There are a number of descriptor files, all of whose locations (e.g. within a\nversion control system) are registered with the software catalog. The method of\nregistration is not covered in this document; it could happen either manually\ninside Backstage, or by push events from a CI/CD pipelines, or by webhook\ntriggers from the version control system, etc."),(0,a.kt)("p",null,"Each file describes one or more entities in accordance with the\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/390"}),"Backstage System Model"),". All\nof these entities have a common structure and nomenclature, and they are stored\nin the software catalog from which they then can be queried."),(0,a.kt)("p",null,"Entities have distinct names, and they may reference each other by those names."),(0,a.kt)("h2",r({},{id:"format"}),"Format"),(0,a.kt)("p",null,"Descriptor files use the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://yaml.org/spec/1.2/spec.html"}),"YAML")," format.\nThey may be written by hand, or created using automated tools. Each file may\nconsist of several YAML documents (separated by ",(0,a.kt)("inlineCode",{parentName:"p"},"---"),"), where each document\ndescribes a single entity."),(0,a.kt)("p",null,"This is an example entity definition with some mocked data."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yaml"}),"---\napiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: frobs-awesome\n  description: |\n    Backend service that implements the Frobs API, as defined\n    in [the Frobs RFC](https://example.com/spec/frob.html).\n  labels:\n    system: frobs\n    lifecycle: production\n    example.com/service-discovery-name: frobsawesome\n  annotations:\n    circleci.com/project-slug: github/example-org/frobs-awesome\nspec:\n  type: service\n")),(0,a.kt)("p",null,"The root fields ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," are part of the\n",(0,a.kt)("em",{parentName:"p"},"envelope"),", defining the overall structure of all kinds of entity. Likewise, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"labels"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"annotations")," metadata fields are of special\nsignificance and have reserved purposes and distinct shapes."),(0,a.kt)("p",null,"See below for details about these fields."),(0,a.kt)("h2",r({},{id:"envelope"}),"Envelope"),(0,a.kt)("p",null,"The root envelope object has the following structure."),(0,a.kt)("h3",r({},{id:"apiversion-and-kind"}),(0,a.kt)("inlineCode",{parentName:"h3"},"apiVersion")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"kind")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," is the high level entity type being described, typically from the\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/390"}),"Backstage system model"),". The\nfirst versions of the catalog will focus on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," kind."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion"),"is the version of specification format for that particular\nentity that this file is written against. The version is used for being able to\nevolve the format, and the tuple of ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," should be enough for\na parser to know how to interpret the contents of the rest of the document."),(0,a.kt)("p",null,"Backstage specific entities have an ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," that is prefixed with\n",(0,a.kt)("inlineCode",{parentName:"p"},"backstage.io/"),", to distinguish them from other types of object that share the\nsame type of structure. This may be relevant when co-hosting these\nspecifications with e.g. kubernetes object manifests."),(0,a.kt)("p",null,"Early versions of the catalog will be using alpha/beta versions, e.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"backstage.io/v1alpha1"),", to signal that the format may still change. After that,\nwe will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage.io/v1")," and up."),(0,a.kt)("h3",r({},{id:"metadata"}),(0,a.kt)("inlineCode",{parentName:"h3"},"metadata")),(0,a.kt)("p",null,"A structure that contains metadata about the entity, i.e. things that aren't\ndirectly part of the entity specification itself. See below for more details\nabout this structure."),(0,a.kt)("h3",r({},{id:"spec"}),(0,a.kt)("inlineCode",{parentName:"h3"},"spec")),(0,a.kt)("p",null,"The actual specification data that describes the entity."),(0,a.kt)("p",null,"The precise structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," depends on the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),"\ncombination, and some kinds may not even have a ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," at all. See further down\nin this document for the specification structure of specific kinds."),(0,a.kt)("h2",r({},{id:"metadata-1"}),"Metadata"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata")," root field has the following nested structure."),(0,a.kt)("h3",r({},{id:"name"}),(0,a.kt)("inlineCode",{parentName:"h3"},"name")),(0,a.kt)("p",null,"The name of the entity. This name is both meant for human eyes to recognize the\nentity, and for machines and other components to reference the entity (e.g. in\nURLs or from other entity specification files)."),(0,a.kt)("p",null,"Names must be unique per kind, within a given namespace (if specified), at any\npoint in time. This uniqueness constraint is also case insensitive. Names may be\nreused at a later time, after an entity is deleted from the registry."),(0,a.kt)("p",null,"Names are required to follow a certain format. Entities that do not follow those\nrules will not be accepted for registration in the catalog. The ruleset is\nconfigurable to fit your organization's needs, but the default behavior is as\nfollows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Strings of length at least 1, and at most 63"),(0,a.kt)("li",{parentName:"ul"},"Must consist of sequences of ",(0,a.kt)("inlineCode",{parentName:"li"},"[a-z0-9A-Z]")," possibly separated by one of\n",(0,a.kt)("inlineCode",{parentName:"li"},"[-_.]"))),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"visits-tracking-service"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CircleciBuildsDs_avro_gcs")),(0,a.kt)("h3",r({},{id:"namespace"}),(0,a.kt)("inlineCode",{parentName:"h3"},"namespace")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of a namespace that the entity belongs to. This field is optional,\nand currently has no special semantics apart from bounding the name uniqueness\nconstraint if specified. It is reserved for future use and may get broader\nsemantic implication."),(0,a.kt)("p",null,"Namespaces may also be part of the catalog, and are ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace")," entities,\ni.e. not Backstage specific but the same as in Kubernetes."),(0,a.kt)("h3",r({},{id:"description"}),(0,a.kt)("inlineCode",{parentName:"h3"},"description")),(0,a.kt)("p",null,"A human readable description of the entity, to be shown in Backstage. Should be\nkept short and informative, suitable to give an overview of the entity's purpose\nat a glance. More detailed explanations and documentation should be placed\nelsewhere."),(0,a.kt)("h3",r({},{id:"labels"}),(0,a.kt)("inlineCode",{parentName:"h3"},"labels")),(0,a.kt)("p",null,"Labels are optional key/value pairs of that are attached to the entity, and\ntheir use is identical to\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"}),"kubernetes object labels"),"."),(0,a.kt)("p",null,"Their main purpose is for references to other entities, and for information that\nis in one way or another classifying for the current entity. They are often used\nas values in queries or filters."),(0,a.kt)("p",null,"Both the key and the value are strings, subject to the following restrictions."),(0,a.kt)("p",null,"Keys have an optional prefix followed by a slash, and then the name part which\nis required. The prefix must be a valid lowercase domain name, at most 253\ncharacters in total. The name part must be sequences of ",(0,a.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9]")," separated\nby any of ",(0,a.kt)("inlineCode",{parentName:"p"},"[-_.]"),", at most 63 characters in total."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage.io/")," prefix is reserved for use by Backstage core components.\nSome keys such as ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," also have predefined semantics."),(0,a.kt)("p",null,"Values are strings that follow the same restrictions as ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," above."),(0,a.kt)("h3",r({},{id:"annotations"}),(0,a.kt)("inlineCode",{parentName:"h3"},"annotations")),(0,a.kt)("p",null,"An object with arbitrary non-identifying metadata attached to the entity,\nidentical in use to\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"}),"kubernetes object annotations"),"."),(0,a.kt)("p",null,"Their purpose is mainly, but not limited, to reference into external systems.\nThis could for example be a reference to the git ref the entity was ingested\nfrom, to monitoring and logging systems, to pagerduty schedules, etc."),(0,a.kt)("p",null,"Both the key and the value are strings, subject to the following restrictions."),(0,a.kt)("p",null,"Keys have an optional prefix followed by a slash, and then the name part which\nis required. The prefix must be a valid lowercase domain name, at most 253\ncharacters in total. The name part must be sequences of ",(0,a.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9]")," separated\nby any of ",(0,a.kt)("inlineCode",{parentName:"p"},"[-_.]"),", at most 63 characters in total."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage.io/")," prefix is reserved for use by Backstage core components."),(0,a.kt)("p",null,"Values can be of any length, but are limited to being strings."),(0,a.kt)("h2",r({},{id:"component"}),"Component"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"apiVersion")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"backstage.io/v1alpha1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"kind")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Component"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," object for this kind is as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The type of component, e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"service"),".")))))}u.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,s,l=r(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))n.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var d=0;d<s.length;d++)a.call(i,s[d])&&(l[s[d]]=i[s[d]])}}return l}},541535:(e,t,n)=>{var a=n(862525),r=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;r=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),i=d("react.provider"),s=d("react.context"),l=d("react.forward_ref"),d("react.suspense"),c=d("react.memo"),p=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function k(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var g=b.prototype=new y;g.constructor=b,a(g,k.prototype),g.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!N.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=e),e=""===a?"."+T(l,0):a,Array.isArray(i)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=a+T(s=e[c],c);l+=S(s,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(s=e.next()).done;)l+=S(s=s.value,t,n,p=a+T(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function x(e,t,n){if(null==e)return e;var a=[],r=0;return S(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function _(){var e=A.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);