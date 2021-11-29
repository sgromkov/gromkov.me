"use strict";(self.webpackChunkgromkov_me=self.webpackChunkgromkov_me||[]).push([[2919],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,b=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3904:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return f},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={title:"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb: \u043f\u0440\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID",tags:["books","\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","Robert C. Martin"]},l=void 0,u={permalink:"/blog/2021/11/29/clean-architecture-about-solid-principles",source:"@site/blog/2021-11-29-clean-architecture-about-solid-principles/index.mdx",title:"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb: \u043f\u0440\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID",description:"\u0421\u0432\u043e\u044e \xab\u0447\u0438\u0441\u0442\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443\xbb \u0420\u043e\u0431\u0435\u0440\u0442 \u041c\u0430\u0440\u0442\u0438\u043d \u0441\u0442\u0440\u043e\u0438\u0442 \u043d\u0430 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u0445 SOLID, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0436\u0435 \u0438 \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b. \u042d\u0442\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438.",date:"2021-11-29T00:00:00.000Z",formattedDate:"November 29, 2021",tags:[{label:"books",permalink:"/blog/tags/books"},{label:"\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",permalink:"/blog/tags/\u0447\u0438\u0441\u0442\u0430\u044f-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"},{label:"Robert C. Martin",permalink:"/blog/tags/robert-c-martin"}],readingTime:4.09,truncated:!0,authors:[],nextItem:{title:"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb: \u043f\u0440\u043e \u043f\u043b\u043e\u0445\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443",permalink:"/blog/2021/11/27/clean-architecture-about-bad-architecture"}},p={authorsImageUrls:[]},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0421\u0432\u043e\u044e \xab\u0447\u0438\u0441\u0442\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443\xbb \u0420\u043e\u0431\u0435\u0440\u0442 \u041c\u0430\u0440\u0442\u0438\u043d \u0441\u0442\u0440\u043e\u0438\u0442 \u043d\u0430 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u0445 SOLID, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0436\u0435 \u0438 \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b. \u042d\u0442\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438."))}m.isMDXComponent=!0}}]);