"use strict";(self.webpackChunkconcat_docs=self.webpackChunkconcat_docs||[]).push([[381],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,g=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9303:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:1},s="Create a Product",u={unversionedId:"registration/product",id:"registration/product",title:"Create a Product",description:"Registration products need to be created inside of the registration product category.",source:"@site/docs/registration/product.md",sourceDirName:"registration",slug:"/registration/product",permalink:"/docs/registration/product",editUrl:"https://github.com/ConventionCatCorp/concat-docs/tree/main/docs/registration/product.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Cashier",permalink:"/docs/registration/cashier"}},p={},d=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Transfer registration",id:"transfer-registration",level:2},{value:"Refund requests",id:"refund-requests",level:2}],l={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-product"},"Create a Product"),(0,i.kt)("p",null,"Registration products need to be created inside of the registration product category."),(0,i.kt)("p",null,"When the user finishes buying the registration, they are given a \u201cproduct grant\u201d, in which it allows them to check in at the convention."),(0,i.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,i.kt)("p",null,'Open registration under "Settings".'),(0,i.kt)("h2",{id:"transfer-registration"},"Transfer registration"),(0,i.kt)("p",null,'Users with paid registrations can transfer their digital grant to other users. Click the "..." button in the "Register" page.'),(0,i.kt)("h2",{id:"refund-requests"},"Refund requests"),(0,i.kt)("p",null,"Users can request for a refund, have it reviewed by administrators, and if approved, have Stripe refund the money, and have the digital grant removed."))}f.isMDXComponent=!0}}]);