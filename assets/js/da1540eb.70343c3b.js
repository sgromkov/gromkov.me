"use strict";(self.webpackChunkgromkov_me=self.webpackChunkgromkov_me||[]).push([[6948],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=l.createContext({}),c=function(t){var e=l.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(a.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},f=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),f=c(n),s=r,d=f["".concat(a,".").concat(s)]||f[s]||k[s]||i;return n?l.createElement(d,u(u({ref:e},p),{},{components:n})):l.createElement(d,u({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,u=new Array(i);u[0]=f;var o={};for(var a in e)hasOwnProperty.call(e,a)&&(o[a]=e[a]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var c=2;c<i;c++)u[c]=n[c];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5640:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return c},assets:function(){return p},toc:function(){return k},default:function(){return s}});var l=n(7462),r=n(3366),i=(n(7294),n(3905)),u=["components"],o={title:"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb: \u043f\u0440\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID",tags:["books","\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","Robert C. Martin"]},a=void 0,c={permalink:"/blog/2021/11/29/clean-architecture-about-solid-principles",source:"@site/blog/2021-11-29-clean-architecture-about-solid-principles/index.mdx",title:"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb: \u043f\u0440\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID",description:"\u0421\u0432\u043e\u044e \xab\u0447\u0438\u0441\u0442\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443\xbb \u0420\u043e\u0431\u0435\u0440\u0442 \u041c\u0430\u0440\u0442\u0438\u043d \u0441\u0442\u0440\u043e\u0438\u0442 \u043d\u0430 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u0445 SOLID, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0436\u0435 \u0438 \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b. \u042d\u0442\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438.",date:"2021-11-29T00:00:00.000Z",formattedDate:"November 29, 2021",tags:[{label:"books",permalink:"/blog/tags/books"},{label:"\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",permalink:"/blog/tags/\u0447\u0438\u0441\u0442\u0430\u044f-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"},{label:"Robert C. Martin",permalink:"/blog/tags/robert-c-martin"}],readingTime:4.065,truncated:!0,authors:[],nextItem:{title:"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb: \u043f\u0440\u043e \u043f\u043b\u043e\u0445\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443",permalink:"/blog/2021/11/27/clean-architecture-about-bad-architecture"}},p={authorsImageUrls:[]},k=[{value:"\u0417\u0430\u0447\u0435\u043c \u043d\u0430\u043c SOLID",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0430\u043c-solid",children:[]},{value:"\u041f\u044f\u0442\u044c \u043a\u0438\u0442\u043e\u0432 \u041e\u041e\u041f",id:"\u043f\u044f\u0442\u044c-\u043a\u0438\u0442\u043e\u0432-\u043e\u043e\u043f",children:[{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439-\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:[]},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",children:[]},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0431\u0430\u0440\u0431\u0430\u0440\u044b-\u043b\u0438\u0441\u043a\u043e\u0432",children:[]},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432",children:[]},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",children:[]}]}],f={toc:k};function s(t){var e=t.components,o=(0,r.Z)(t,u);return(0,i.kt)("wrapper",(0,l.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0421\u0432\u043e\u044e \xab\u0447\u0438\u0441\u0442\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443\xbb \u0420\u043e\u0431\u0435\u0440\u0442 \u041c\u0430\u0440\u0442\u0438\u043d \u0441\u0442\u0440\u043e\u0438\u0442 \u043d\u0430 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u0445 SOLID, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0436\u0435 \u0438 \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b. \u042d\u0442\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438."),(0,i.kt)("h2",{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0430\u043c-solid"},"\u0417\u0430\u0447\u0435\u043c \u043d\u0430\u043c SOLID"),(0,i.kt)("p",null,"\u041c\u0430\u0440\u0442\u0438\u043d \u043d\u0435 \u0438\u0434\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0441\u0432\u043e\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b, \u0430 \u0432\u0438\u0434\u0438\u0442 \u0438\u0445, \u043a\u0430\u043a \u0445\u043e\u0440\u043e\u0448\u043e\u0435 \u043a\u043e\u043c\u043f\u0440\u043e\u043c\u0438\u0441\u0441\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b:"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u0447\u0438\u0441\u0442\u043e\u0433\u043e \u043a\u043e\u0434\u0430. \u0421 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0435\u0441\u043b\u0438 \u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0438\u0437 \u043f\u043b\u043e\u0445\u0438\u0445 \u043a\u0438\u0440\u043f\u0438\u0447\u0435\u0439, \u0435\u0433\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0421 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u043f\u043b\u043e\u0445\u0438\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0442\u044c \u0441 \u0445\u043e\u0440\u043e\u0448\u0438\u043c\u0438. \u0418\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u044d\u0442\u043e\u043c \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u044b \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("p",null,"SOLID \u044d\u0442\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e \u041e\u041e\u041f:"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442, \u043a\u0430\u043a \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u043a\u0430\u043a \u044d\u0442\u0438 \u043a\u043b\u0430\u0441\u0441\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0447\u0435\u0442\u0430\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430 \xab\u043a\u043b\u0430\u0441\u0441\xbb \u043d\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u044d\u0442\u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u043c\u0443 \u043a\u043e\u0434\u0443. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \xab\u043a\u043b\u0430\u0441\u0441\xbb \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043b\u0438\u0448\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0433\u0440\u0443\u043f\u043f\u044b. \u041b\u044e\u0431\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043c\u0435\u0435\u0442 \u0442\u0430\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u043a\u0430\u043a \u0431\u044b \u043e\u043d\u0438 \u043d\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u043b\u0438\u0441\u044c, \xab\u043a\u043b\u0430\u0441\u0441\xbb \u0438\u043b\u0438 \u043a\u0430\u043a-\u0442\u043e \u0435\u0449\u0435. \u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043a \u044d\u0442\u0438\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u043c.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("h2",{id:"\u043f\u044f\u0442\u044c-\u043a\u0438\u0442\u043e\u0432-\u043e\u043e\u043f"},"\u041f\u044f\u0442\u044c \u043a\u0438\u0442\u043e\u0432 \u041e\u041e\u041f"),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439-\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u043d\u0435 \u043f\u0440\u043e \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u0430, \u0430 \u043f\u0440\u043e \u0433\u0440\u0443\u043f\u043f\u0443 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043b\u0438\u0446 (\u0430\u043a\u0442\u043e\u0440\u0430), \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u043b\u0430\u0441\u0441:"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"SRP: Single Responsibility Principle \u2014 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438."),(0,i.kt)("p",null,"\u041b\u0443\u0447\u0448\u0435\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043f\u043e\u0434 \u0432\u043b\u0438\u044f\u043d\u0438\u0435\u043c \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0439 \u044d\u0442\u0443 \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0438\u043c\u0435\u0435\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0443 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("p",null,"\u041a\u0430\u043a \u043c\u043d\u043e\u0433\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u0447\u043d\u043e \u0442\u0440\u0430\u043a\u0442\u0443\u044e\u0442 \u044d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f:"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u0418\u0437 \u0432\u0441\u0435\u0445 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u0432 SOLID \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0442\u0440\u0443\u0434\u043d\u043e\u043f\u043e\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 (Single Responsibility Principle, SRP). \u042d\u0442\u043e, \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u043e\u0431\u0443\u0441\u043b\u043e\u0432\u043b\u0435\u043d\u043e \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f, \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0442\u043e\u0447\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u0443\u0442\u0438. \u0423\u0441\u043b\u044b\u0448\u0430\u0432 \u044d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u043c\u043d\u043e\u0433\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u044b \u0440\u0435\u0448\u0430\u044e\u0442: \u043e\u043d\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0437\u0430 \u0447\u0442\u043e-\u0442\u043e \u043e\u0434\u043d\u043e."),(0,i.kt)("p",null,"\u0421\u0430\u043c\u043e\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435, \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0439 \u043f\u0440\u0438\u043d\u0446\u0438\u043f ",(0,i.kt)("em",null,"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e")," \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u041e\u043d \u0433\u043b\u0430\u0441\u0438\u0442: ",(0,i.kt)("em",null,"\u0444\u0443\u043d\u043a\u0446\u0438\u044f")," \u0434\u043e\u043b\u0436\u043d\u0430 \u0434\u0435\u043b\u0430\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u043e\u0434\u043d\u043e \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e. \u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c, \u043a\u043e\u0433\u0434\u0430 \u0434\u0435\u043b\u0438\u043c \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430 \u043c\u0435\u043d\u044c\u0448\u0438\u0435, \u0442\u043e \u0435\u0441\u0442\u044c \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043d\u0438\u0437\u043a\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435. \u041d\u043e \u043e\u043d \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u0432 SOLID \u2014 \u044d\u0442\u043e \u043d\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("p",null,"\u0427\u0442\u043e \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043e\u043d \u0437\u043d\u0430\u0447\u0438\u0442:"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u043b\u0441\u044f \u0442\u0430\u043a: ",(0,i.kt)("em",null,"\u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u043d\u0443 \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0443 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.")),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u0434 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043b\u0438\u0446. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0438 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043b\u0438\u0446\u0430 \u043a\u0430\u043a \u0440\u0430\u0437 \u0438 \u0435\u0441\u0442\u044c ",(0,i.kt)("em",null,"\u0442\u0430 \u0441\u0430\u043c\u0430\u044f")," \xab\u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\xbb, \u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u274c \u041d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u2705 \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{alt:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430 Employee, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0435\u043c\u0443 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u0442\u0434\u0435\u043b\u043e\u0432",src:n(2241).Z}),(0,i.kt)("br",null),(0,i.kt)("img",{alt:"\u0414\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u0447\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u043e\u0448\u0438\u0431\u043a\u0430\u043c",src:n(5499).Z})),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("img",{alt:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u0433\u0434\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u043f\u043e\u0434\u0447\u0438\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c\u0443 \u043e\u0442\u0434\u0435\u043b\u0443",src:n(8522).Z}))))),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"OCP: Open-Closed Principle \u2014 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438."),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0443\u044e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0435\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043d\u043e\u0432\u043e\u0433\u043e, \u043d\u043e \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430."),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0433\u043b\u0430\u0441\u0438\u0442: ",(0,i.kt)("em",null,"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.")),(0,i.kt)("p",null,"\u0418\u043d\u044b\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0431\u0435\u0437 \u0438\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438 \u2014 \u043e\u0434\u043d\u0430 \u0438\u0437 \u0434\u0432\u0438\u0436\u0443\u0449\u0438\u0445 \u0441\u0438\u043b \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 \u0441\u0438\u0441\u0442\u0435\u043c. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u2014 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043b\u0435\u0433\u043a\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0439 \u0438 \u043e\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u0438\u0442\u044c \u0435\u0435 \u043e\u0442 \u0432\u043b\u0438\u044f\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439. \u042d\u0442\u0430 \u0446\u0435\u043b\u044c \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e, \u0437\u0430\u0449\u0438\u0449\u0430\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0432\u044b\u0448\u0435 \u043e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u043d\u0438\u0436\u0435.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0431\u0430\u0440\u0431\u0430\u0440\u044b-\u043b\u0438\u0441\u043a\u043e\u0432"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"LSP: Liskov Substitution Principle \u2014 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0438\u0437 \u0432\u0437\u0430\u0438\u043c\u043e\u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u044d\u0442\u0438 \u0447\u0430\u0441\u0442\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u044f\u0442\u044c \u044d\u0442\u0438 \u0447\u0430\u0441\u0442\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u043e\u043c.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"ISP: Interface Segregation Principle \u2014 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432."),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u0440\u0438\u0437\u044b\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0432\u0441\u0435\u0433\u043e, \u0447\u0442\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f."),(0,i.kt)("p",null,"\u041e\u043f\u0430\u0441\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f. \u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043d\u0435\u0441\u0443\u0449\u0438\u0435 \u043b\u0438\u0448\u043d\u0438\u0439 \u0433\u0440\u0443\u0437 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0445 \u0438 \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439, \u043c\u043e\u0433\u0443\u0442 \u0441\u0442\u0430\u0442\u044c \u043f\u0440\u0438\u0447\u0438\u043d\u043d\u043e\u0439 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"),(0,i.kt)("figure",null,(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"DIP: Dependency Inversion Principle \u2014 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438."),(0,i.kt)("p",null,"\u041a\u043e\u0434, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u0443\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443, \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043a\u043e\u0434\u0430, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0435\u0433\u043e \u043d\u0438\u0437\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438. \u041d\u0430\u043f\u0440\u043e\u0442\u0438\u0432, \u0434\u0435\u0442\u0430\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438."),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442, \u0447\u0442\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u0438\u043c\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u043a\u043e\u0434\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438, \u0430 \u043d\u0435 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."),(0,i.kt)("p",null,"\u0412 \u044f\u0437\u044b\u043a\u0430\u0445 \u0441\u043e \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0442\u0438\u043f\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a Java, \u044d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 use, import \u0438 include \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u0441\u044b\u043b\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043c\u043e\u0434\u0443\u043b\u0438 \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b, \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f. \u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c."),(0,i.kt)("p",null,"\u0422\u043e \u0436\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043b\u044f \u044f\u0437\u044b\u043a\u043e\u0432 \u0441 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0442\u0438\u043f\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a Ruby \u0438\u043b\u0438 Python. \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439. \u041e\u0434\u043d\u0430\u043a\u043e \u0432 \u044d\u0442\u0438\u0445 \u044f\u0437\u044b\u043a\u0430\u0445 \u0442\u0440\u0443\u0434\u043d\u0435\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c. \u0412 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u044d\u0442\u043e \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,i.kt)("p",null,"\u041c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044e\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0438 \u043f\u0440\u0435\u0442\u0435\u0440\u043f\u0435\u0432\u0430\u044e\u0442 \u0447\u0430\u0441\u0442\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.")),(0,i.kt)("figcaption",null,"\u2014 \u0420. \u041c\u0430\u0440\u0442\u0438\u043d, ",(0,i.kt)("cite",null,"\xab\u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\xbb"))))}s.isMDXComponent=!0},2241:function(t,e,n){e.Z=n.p+"assets/images/1-46d16d4cbf591242cfdc2368bc2d7574.jpg"},5499:function(t,e,n){e.Z=n.p+"assets/images/2-1108a7622c2ea9f5e77988bf75430929.jpg"},8522:function(t,e,n){e.Z=n.p+"assets/images/3-166dd6c88c5c4e0f924f1a4d750b1755.jpg"}}]);