(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(r,t,o){"use strict";o.r(t);var c=o(198),e=o(0),d=o.n(e),l=o(160),i=o(174),g=o(166),s=o(164),n=o(169);function f(r){return d.a.createElement(n.Col,{xs:12,sm:6,key:r.path},d.a.createElement(l.a,{to:r.path},d.a.createElement("p",{style:{color:"black",textAlign:"center"}},d.a.createElement("b",null,r.title))))}t.default=function(){return d.a.createElement(g.a,{className:"article"},d.a.createElement(s.a,{title:"Books"}),d.a.createElement("h1",null,"Books"),d.a.createElement("h2",null,"My notes on books that I have read"),d.a.createElement("br",null),d.a.createElement(l.b,{query:a,render:function(r){return function(r){return Object(i.a)(r,2).map(function(r,t){return d.a.createElement(n.Row,{key:t},r.map(f))})}(r.allMarkdownRemark.edges.map(function(r){return r.node.frontmatter}))},data:c}))};var a="2206549529"},160:function(r,t,o){"use strict";o.d(t,"b",function(){return n});var c=o(0),e=o.n(c),d=o(4),l=o.n(d),i=o(33),g=o.n(i);o.d(t,"a",function(){return g.a});o(161);var s=e.a.createContext({}),n=function(r){return e.a.createElement(s.Consumer,null,function(t){return r.data||t[r.query]&&t[r.query].data?(r.render||r.children)(r.data?r.data.data:t[r.query].data):e.a.createElement("div",null,"Loading (StaticQuery)")})};n.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},161:function(r,t,o){var c;r.exports=(c=o(163))&&c.default||c},162:function(r){r.exports={data:{site:{siteMetadata:{headerTitle:"Central Filing"}}}}},163:function(r,t,o){"use strict";o.r(t);o(34);var c=o(0),e=o.n(c),d=o(4),l=o.n(d),i=o(55),g=o(2),s=function(r){var t=r.location,o=g.default.getResourcesForPathnameSync(t.pathname);return o?e.a.createElement(i.a,Object.assign({location:t,pageResources:o},o.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},164:function(r,t,o){"use strict";var c=o(165),e=o(0),d=o.n(e),l=o(4),i=o.n(l),g=o(167),s=o.n(g);function n(r){var t=r.description,o=r.lang,e=r.meta,l=r.title,i=c.data.site,g=t||i.siteMetadata.description;return d.a.createElement(s.a,{htmlAttributes:{lang:o},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:g},{property:"og:title",content:l},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:g}].concat(e)})}n.defaultProps={lang:"en",meta:[],description:""},n.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=n},165:function(r){r.exports={data:{site:{siteMetadata:{title:"Ozzie Kirkby - Central Filing",description:"Engineering Student",author:"Ozzie Kirkby"}}}}},166:function(r,t,o){"use strict";var c=o(162),e=o(0),d=o.n(e),l=o(4),i=o.n(l),g=o(160),s=function(r){var t=r.siteTitle;return d.a.createElement("header",null,d.a.createElement("div",{id:"header-content"},d.a.createElement(g.a,{to:"/",id:"home-icon"},d.a.createElement("img",{src:"/home-icon.svg",alt:"Home Icon",id:"home-icon"})),d.a.createElement("div",{id:"header-title"},d.a.createElement("p",null,t))))};s.propTypes={children:i.a.node},s.defaultProps={siteTitle:""};var n=s,f=function(r){var t=r.children,o=r.className,e=r.showHeader;return d.a.createElement(g.b,{query:"3778772209",render:function(r){return d.a.createElement(d.a.Fragment,null,e&&d.a.createElement(n,{siteTitle:r.site.siteMetadata.headerTitle}),d.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0},className:o},d.a.createElement("main",null,t)))},data:c})};f.propTypes={children:i.a.node.isRequired,className:i.a.string,showHeader:i.a.bool},f.defaultProps={children:d.a.createElement("div",null),className:"",showHeader:!0};t.a=f},169:function(r,t,o){var c;r.exports=(c=o(0),function(r){function t(c){if(o[c])return o[c].exports;var e=o[c]={i:c,l:!1,exports:{}};return r[c].call(e.exports,e,e.exports,t),e.l=!0,e.exports}var o={};return t.m=r,t.c=o,t.i=function(r){return r},t.d=function(r,o,c){t.o(r,o)||Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:c})},t.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(o,"a",o),o},t.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},t.p="",t(t.s=11)}([function(r,t,o){"use strict";function c(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.Row=t.Col=void 0;var e=o(5),d=c(e),l=o(6),i=c(l);t.Col=d.default,t.Row=i.default},function(r,t,o){var c;!function(){"use strict";function o(){for(var r=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var d=typeof c;if("string"===d||"number"===d)r.push(c);else if(Array.isArray(c))r.push(o.apply(null,c));else if("object"===d)for(var l in c)e.call(c,l)&&c[l]&&r.push(l)}}return r.join(" ")}var e={}.hasOwnProperty;void 0!==r&&r.exports?r.exports=o:void 0!==(c=function(){return o}.apply(t,[]))&&(r.exports=c)}()},function(r,t){r.exports={"rct-grid-row":"rct-grid-row","rct-grid-row-start":"rct-grid-row-start","rct-grid-row-center":"rct-grid-row-center","rct-grid-row-end":"rct-grid-row-end","rct-grid-row-space-between":"rct-grid-row-space-between","rct-grid-row-space-around":"rct-grid-row-space-around","rct-grid-row-top":"rct-grid-row-top","rct-grid-row-middle":"rct-grid-row-middle","rct-grid-row-bottom":"rct-grid-row-bottom","rct-grid-col-1":"rct-grid-col-1","rct-grid-col-xs-1":"rct-grid-col-xs-1","rct-grid-col-sm-1":"rct-grid-col-sm-1","rct-grid-col-md-1":"rct-grid-col-md-1","rct-grid-col-lg-1":"rct-grid-col-lg-1","rct-grid-col-2":"rct-grid-col-2","rct-grid-col-xs-2":"rct-grid-col-xs-2","rct-grid-col-sm-2":"rct-grid-col-sm-2","rct-grid-col-md-2":"rct-grid-col-md-2","rct-grid-col-lg-2":"rct-grid-col-lg-2","rct-grid-col-3":"rct-grid-col-3","rct-grid-col-xs-3":"rct-grid-col-xs-3","rct-grid-col-sm-3":"rct-grid-col-sm-3","rct-grid-col-md-3":"rct-grid-col-md-3","rct-grid-col-lg-3":"rct-grid-col-lg-3","rct-grid-col-4":"rct-grid-col-4","rct-grid-col-xs-4":"rct-grid-col-xs-4","rct-grid-col-sm-4":"rct-grid-col-sm-4","rct-grid-col-md-4":"rct-grid-col-md-4","rct-grid-col-lg-4":"rct-grid-col-lg-4","rct-grid-col-5":"rct-grid-col-5","rct-grid-col-xs-5":"rct-grid-col-xs-5","rct-grid-col-sm-5":"rct-grid-col-sm-5","rct-grid-col-md-5":"rct-grid-col-md-5","rct-grid-col-lg-5":"rct-grid-col-lg-5","rct-grid-col-6":"rct-grid-col-6","rct-grid-col-xs-6":"rct-grid-col-xs-6","rct-grid-col-sm-6":"rct-grid-col-sm-6","rct-grid-col-md-6":"rct-grid-col-md-6","rct-grid-col-lg-6":"rct-grid-col-lg-6","rct-grid-col-7":"rct-grid-col-7","rct-grid-col-xs-7":"rct-grid-col-xs-7","rct-grid-col-sm-7":"rct-grid-col-sm-7","rct-grid-col-md-7":"rct-grid-col-md-7","rct-grid-col-lg-7":"rct-grid-col-lg-7","rct-grid-col-8":"rct-grid-col-8","rct-grid-col-xs-8":"rct-grid-col-xs-8","rct-grid-col-sm-8":"rct-grid-col-sm-8","rct-grid-col-md-8":"rct-grid-col-md-8","rct-grid-col-lg-8":"rct-grid-col-lg-8","rct-grid-col-9":"rct-grid-col-9","rct-grid-col-xs-9":"rct-grid-col-xs-9","rct-grid-col-sm-9":"rct-grid-col-sm-9","rct-grid-col-md-9":"rct-grid-col-md-9","rct-grid-col-lg-9":"rct-grid-col-lg-9","rct-grid-col-10":"rct-grid-col-10","rct-grid-col-xs-10":"rct-grid-col-xs-10","rct-grid-col-sm-10":"rct-grid-col-sm-10","rct-grid-col-md-10":"rct-grid-col-md-10","rct-grid-col-lg-10":"rct-grid-col-lg-10","rct-grid-col-11":"rct-grid-col-11","rct-grid-col-xs-11":"rct-grid-col-xs-11","rct-grid-col-sm-11":"rct-grid-col-sm-11","rct-grid-col-md-11":"rct-grid-col-md-11","rct-grid-col-lg-11":"rct-grid-col-lg-11","rct-grid-col-12":"rct-grid-col-12","rct-grid-col-xs-12":"rct-grid-col-xs-12","rct-grid-col-sm-12":"rct-grid-col-sm-12","rct-grid-col-md-12":"rct-grid-col-md-12","rct-grid-col-lg-12":"rct-grid-col-lg-12","rct-grid-col-0":"rct-grid-col-0","rct-grid-col-offset-0":"rct-grid-col-offset-0","rct-grid-col-order-0":"rct-grid-col-order-0","rct-grid-col-offset-1":"rct-grid-col-offset-1","rct-grid-col-order-1":"rct-grid-col-order-1","rct-grid-col-offset-2":"rct-grid-col-offset-2","rct-grid-col-order-2":"rct-grid-col-order-2","rct-grid-col-offset-3":"rct-grid-col-offset-3","rct-grid-col-order-3":"rct-grid-col-order-3","rct-grid-col-offset-4":"rct-grid-col-offset-4","rct-grid-col-order-4":"rct-grid-col-order-4","rct-grid-col-offset-5":"rct-grid-col-offset-5","rct-grid-col-order-5":"rct-grid-col-order-5","rct-grid-col-offset-6":"rct-grid-col-offset-6","rct-grid-col-order-6":"rct-grid-col-order-6","rct-grid-col-offset-7":"rct-grid-col-offset-7","rct-grid-col-order-7":"rct-grid-col-order-7","rct-grid-col-offset-8":"rct-grid-col-offset-8","rct-grid-col-order-8":"rct-grid-col-order-8","rct-grid-col-offset-9":"rct-grid-col-offset-9","rct-grid-col-order-9":"rct-grid-col-order-9","rct-grid-col-offset-10":"rct-grid-col-offset-10","rct-grid-col-order-10":"rct-grid-col-order-10","rct-grid-col-offset-11":"rct-grid-col-offset-11","rct-grid-col-order-11":"rct-grid-col-order-11","rct-grid-col-offset-12":"rct-grid-col-offset-12","rct-grid-col-order-12":"rct-grid-col-order-12","rct-grid-col-xs-0":"rct-grid-col-xs-0","rct-grid-col-xs-offset-0":"rct-grid-col-xs-offset-0","rct-grid-col-xs-order-0":"rct-grid-col-xs-order-0","rct-grid-col-xs-offset-1":"rct-grid-col-xs-offset-1","rct-grid-col-xs-order-1":"rct-grid-col-xs-order-1","rct-grid-col-xs-offset-2":"rct-grid-col-xs-offset-2","rct-grid-col-xs-order-2":"rct-grid-col-xs-order-2","rct-grid-col-xs-offset-3":"rct-grid-col-xs-offset-3","rct-grid-col-xs-order-3":"rct-grid-col-xs-order-3","rct-grid-col-xs-offset-4":"rct-grid-col-xs-offset-4","rct-grid-col-xs-order-4":"rct-grid-col-xs-order-4","rct-grid-col-xs-offset-5":"rct-grid-col-xs-offset-5","rct-grid-col-xs-order-5":"rct-grid-col-xs-order-5","rct-grid-col-xs-offset-6":"rct-grid-col-xs-offset-6","rct-grid-col-xs-order-6":"rct-grid-col-xs-order-6","rct-grid-col-xs-offset-7":"rct-grid-col-xs-offset-7","rct-grid-col-xs-order-7":"rct-grid-col-xs-order-7","rct-grid-col-xs-offset-8":"rct-grid-col-xs-offset-8","rct-grid-col-xs-order-8":"rct-grid-col-xs-order-8","rct-grid-col-xs-offset-9":"rct-grid-col-xs-offset-9","rct-grid-col-xs-order-9":"rct-grid-col-xs-order-9","rct-grid-col-xs-offset-10":"rct-grid-col-xs-offset-10","rct-grid-col-xs-order-10":"rct-grid-col-xs-order-10","rct-grid-col-xs-offset-11":"rct-grid-col-xs-offset-11","rct-grid-col-xs-order-11":"rct-grid-col-xs-order-11","rct-grid-col-xs-offset-12":"rct-grid-col-xs-offset-12","rct-grid-col-xs-order-12":"rct-grid-col-xs-order-12","rct-grid-col-sm-0":"rct-grid-col-sm-0","rct-grid-col-sm-offset-0":"rct-grid-col-sm-offset-0","rct-grid-col-sm-order-0":"rct-grid-col-sm-order-0","rct-grid-col-sm-offset-1":"rct-grid-col-sm-offset-1","rct-grid-col-sm-order-1":"rct-grid-col-sm-order-1","rct-grid-col-sm-offset-2":"rct-grid-col-sm-offset-2","rct-grid-col-sm-order-2":"rct-grid-col-sm-order-2","rct-grid-col-sm-offset-3":"rct-grid-col-sm-offset-3","rct-grid-col-sm-order-3":"rct-grid-col-sm-order-3","rct-grid-col-sm-offset-4":"rct-grid-col-sm-offset-4","rct-grid-col-sm-order-4":"rct-grid-col-sm-order-4","rct-grid-col-sm-offset-5":"rct-grid-col-sm-offset-5","rct-grid-col-sm-order-5":"rct-grid-col-sm-order-5","rct-grid-col-sm-offset-6":"rct-grid-col-sm-offset-6","rct-grid-col-sm-order-6":"rct-grid-col-sm-order-6","rct-grid-col-sm-offset-7":"rct-grid-col-sm-offset-7","rct-grid-col-sm-order-7":"rct-grid-col-sm-order-7","rct-grid-col-sm-offset-8":"rct-grid-col-sm-offset-8","rct-grid-col-sm-order-8":"rct-grid-col-sm-order-8","rct-grid-col-sm-offset-9":"rct-grid-col-sm-offset-9","rct-grid-col-sm-order-9":"rct-grid-col-sm-order-9","rct-grid-col-sm-offset-10":"rct-grid-col-sm-offset-10","rct-grid-col-sm-order-10":"rct-grid-col-sm-order-10","rct-grid-col-sm-offset-11":"rct-grid-col-sm-offset-11","rct-grid-col-sm-order-11":"rct-grid-col-sm-order-11","rct-grid-col-sm-offset-12":"rct-grid-col-sm-offset-12","rct-grid-col-sm-order-12":"rct-grid-col-sm-order-12","rct-grid-col-md-0":"rct-grid-col-md-0","rct-grid-col-md-offset-0":"rct-grid-col-md-offset-0","rct-grid-col-md-order-0":"rct-grid-col-md-order-0","rct-grid-col-md-offset-1":"rct-grid-col-md-offset-1","rct-grid-col-md-order-1":"rct-grid-col-md-order-1","rct-grid-col-md-offset-2":"rct-grid-col-md-offset-2","rct-grid-col-md-order-2":"rct-grid-col-md-order-2","rct-grid-col-md-offset-3":"rct-grid-col-md-offset-3","rct-grid-col-md-order-3":"rct-grid-col-md-order-3","rct-grid-col-md-offset-4":"rct-grid-col-md-offset-4","rct-grid-col-md-order-4":"rct-grid-col-md-order-4","rct-grid-col-md-offset-5":"rct-grid-col-md-offset-5","rct-grid-col-md-order-5":"rct-grid-col-md-order-5","rct-grid-col-md-offset-6":"rct-grid-col-md-offset-6","rct-grid-col-md-order-6":"rct-grid-col-md-order-6","rct-grid-col-md-offset-7":"rct-grid-col-md-offset-7","rct-grid-col-md-order-7":"rct-grid-col-md-order-7","rct-grid-col-md-offset-8":"rct-grid-col-md-offset-8","rct-grid-col-md-order-8":"rct-grid-col-md-order-8","rct-grid-col-md-offset-9":"rct-grid-col-md-offset-9","rct-grid-col-md-order-9":"rct-grid-col-md-order-9","rct-grid-col-md-offset-10":"rct-grid-col-md-offset-10","rct-grid-col-md-order-10":"rct-grid-col-md-order-10","rct-grid-col-md-offset-11":"rct-grid-col-md-offset-11","rct-grid-col-md-order-11":"rct-grid-col-md-order-11","rct-grid-col-md-offset-12":"rct-grid-col-md-offset-12","rct-grid-col-md-order-12":"rct-grid-col-md-order-12","rct-grid-col-lg-0":"rct-grid-col-lg-0","rct-grid-col-lg-offset-0":"rct-grid-col-lg-offset-0","rct-grid-col-lg-order-0":"rct-grid-col-lg-order-0","rct-grid-col-lg-offset-1":"rct-grid-col-lg-offset-1","rct-grid-col-lg-order-1":"rct-grid-col-lg-order-1","rct-grid-col-lg-offset-2":"rct-grid-col-lg-offset-2","rct-grid-col-lg-order-2":"rct-grid-col-lg-order-2","rct-grid-col-lg-offset-3":"rct-grid-col-lg-offset-3","rct-grid-col-lg-order-3":"rct-grid-col-lg-order-3","rct-grid-col-lg-offset-4":"rct-grid-col-lg-offset-4","rct-grid-col-lg-order-4":"rct-grid-col-lg-order-4","rct-grid-col-lg-offset-5":"rct-grid-col-lg-offset-5","rct-grid-col-lg-order-5":"rct-grid-col-lg-order-5","rct-grid-col-lg-offset-6":"rct-grid-col-lg-offset-6","rct-grid-col-lg-order-6":"rct-grid-col-lg-order-6","rct-grid-col-lg-offset-7":"rct-grid-col-lg-offset-7","rct-grid-col-lg-order-7":"rct-grid-col-lg-order-7","rct-grid-col-lg-offset-8":"rct-grid-col-lg-offset-8","rct-grid-col-lg-order-8":"rct-grid-col-lg-order-8","rct-grid-col-lg-offset-9":"rct-grid-col-lg-offset-9","rct-grid-col-lg-order-9":"rct-grid-col-lg-order-9","rct-grid-col-lg-offset-10":"rct-grid-col-lg-offset-10","rct-grid-col-lg-order-10":"rct-grid-col-lg-order-10","rct-grid-col-lg-offset-11":"rct-grid-col-lg-offset-11","rct-grid-col-lg-order-11":"rct-grid-col-lg-order-11","rct-grid-col-lg-offset-12":"rct-grid-col-lg-offset-12","rct-grid-col-lg-order-12":"rct-grid-col-lg-order-12","rct-grid-col-xl-1":"rct-grid-col-xl-1","rct-grid-col-xl-2":"rct-grid-col-xl-2","rct-grid-col-xl-3":"rct-grid-col-xl-3","rct-grid-col-xl-4":"rct-grid-col-xl-4","rct-grid-col-xl-5":"rct-grid-col-xl-5","rct-grid-col-xl-6":"rct-grid-col-xl-6","rct-grid-col-xl-7":"rct-grid-col-xl-7","rct-grid-col-xl-8":"rct-grid-col-xl-8","rct-grid-col-xl-9":"rct-grid-col-xl-9","rct-grid-col-xl-10":"rct-grid-col-xl-10","rct-grid-col-xl-11":"rct-grid-col-xl-11","rct-grid-col-xl-12":"rct-grid-col-xl-12","rct-grid-col-xl-0":"rct-grid-col-xl-0","rct-grid-col-xl-offset-0":"rct-grid-col-xl-offset-0","rct-grid-col-xl-order-0":"rct-grid-col-xl-order-0","rct-grid-col-xl-offset-1":"rct-grid-col-xl-offset-1","rct-grid-col-xl-order-1":"rct-grid-col-xl-order-1","rct-grid-col-xl-offset-2":"rct-grid-col-xl-offset-2","rct-grid-col-xl-order-2":"rct-grid-col-xl-order-2","rct-grid-col-xl-offset-3":"rct-grid-col-xl-offset-3","rct-grid-col-xl-order-3":"rct-grid-col-xl-order-3","rct-grid-col-xl-offset-4":"rct-grid-col-xl-offset-4","rct-grid-col-xl-order-4":"rct-grid-col-xl-order-4","rct-grid-col-xl-offset-5":"rct-grid-col-xl-offset-5","rct-grid-col-xl-order-5":"rct-grid-col-xl-order-5","rct-grid-col-xl-offset-6":"rct-grid-col-xl-offset-6","rct-grid-col-xl-order-6":"rct-grid-col-xl-order-6","rct-grid-col-xl-offset-7":"rct-grid-col-xl-offset-7","rct-grid-col-xl-order-7":"rct-grid-col-xl-order-7","rct-grid-col-xl-offset-8":"rct-grid-col-xl-offset-8","rct-grid-col-xl-order-8":"rct-grid-col-xl-order-8","rct-grid-col-xl-offset-9":"rct-grid-col-xl-offset-9","rct-grid-col-xl-order-9":"rct-grid-col-xl-order-9","rct-grid-col-xl-offset-10":"rct-grid-col-xl-offset-10","rct-grid-col-xl-order-10":"rct-grid-col-xl-order-10","rct-grid-col-xl-offset-11":"rct-grid-col-xl-offset-11","rct-grid-col-xl-order-11":"rct-grid-col-xl-order-11","rct-grid-col-xl-offset-12":"rct-grid-col-xl-offset-12","rct-grid-col-xl-order-12":"rct-grid-col-xl-order-12"}},function(r,t,o){r.exports=o(7)()},function(r,t){r.exports=c},function(r,t,o){"use strict";function c(r){return r&&r.__esModule?r:{default:r}}function e(r,t,o){return t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function d(r){var t,o=r.span,c=r.offset,d=r.className,g=r.children,n=r.prefix,f=void 0===n?"rct-grid-col":n,a=r.order,m=function(r,t){var o={};for(var c in r)t.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(r,c)&&(o[c]=r[c]);return o}(r,["span","offset","className","children","prefix","order"]),x={};["xs","sm","md","lg","xl"].forEach(function(r){if(m[r]){var t,o={};"number"==typeof m[r]?o.span=m[r]:"object"===i(m[r])&&(o=m[r]||{}),delete m[r],x=Object.assign({},x,(e(t={},p.default[f+"-"+r+"-"+o.span],void 0!==o.span),e(t,p.default[f+"-"+r+"-offset-"+o.offset],o.offset||0===o.offset),e(t,p.default[f+"-"+r+"-order-"+o.order],o.order||0===o.order),t))}});var h=(0,u.default)((e(t={},p.default[f+"-"+o],void 0!==o),e(t,p.default[f+"-offset-"+c],c),e(t,p.default[f+"-order-"+a],a),t),d,x);return s.default.createElement("div",l({},m,{className:h}),g)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},g=o(4),s=c(g),n=o(3),f=c(n),a=o(1),u=c(a),m=o(2),p=c(m);f.default.oneOfType([f.default.string,f.default.number]),f.default.oneOfType([f.default.number,f.default.object]),d.defaultProps={offset:0},t.default=d},function(r,t,o){"use strict";function c(r){return r&&r.__esModule?r:{default:r}}function e(r,t,o){return t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}Object.defineProperty(t,"__esModule",{value:!0});var d=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},l=function(){function r(r,t){for(var o=0;o<t.length;o++){var c=t[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}return function(t,o,c){return o&&r(t.prototype,o),c&&r(t,c),t}}(),i=o(4),g=c(i),s=o(3),n=(c(s),o(1)),f=c(n),a=o(2),u=c(a),m=function(r){function t(){return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?r:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}(t,r),l(t,[{key:"render",value:function(){var r,t=this.props,o=t.justify,c=t.align,l=t.className,i=t.gutter,s=t.style,n=t.children,a=t.prefix,m=void 0===a?"rct-grid-row":a,p=function(r,t){var o={};for(var c in r)t.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(r,c)&&(o[c]=r[c]);return o}(t,["justify","align","className","gutter","style","children","prefix"]),x=(0,f.default)(u.default[""+m],(e(r={},u.default[m+"-"+o],o),e(r,u.default[m+"-"+c],c),r),l),h=i>0?Object.assign({},{marginLeft:i/-2,marginRight:i/-2},s):s,y=g.default.Children.map(n,function(r){return r?r.props&&i>0?g.default.cloneElement(r,{style:Object.assign({},{paddingLeft:i/2,paddingRight:i/2},r.props.style)}):r:null});return g.default.createElement("div",d({},p,{className:x,style:h}),y)}}]),t}(g.default.Component);m.defaultProps={gutter:0,justify:"start",align:"top"},t.default=m},function(r,t,o){"use strict";var c=o(9),e=o(10),d=o(8);r.exports=function(){function r(r,t,o,c,l,i){i!==d&&e(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return r}r.isRequired=r;var o={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:t,element:r,instanceOf:t,node:r,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=c,o.PropTypes=o,o}},function(r,t,o){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(r,t,o){"use strict";function c(r){return function(){return r}}var e=function(){};e.thatReturns=c,e.thatReturnsFalse=c(!1),e.thatReturnsTrue=c(!0),e.thatReturnsNull=c(null),e.thatReturnsThis=function(){return this},e.thatReturnsArgument=function(r){return r},r.exports=e},function(r,t,o){"use strict";var c=function(r){};r.exports=function(r,t,o,e,d,l,i,g){if(c(t),!r){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var n=[o,e,d,l,i,g],f=0;(s=new Error(t.replace(/%s/g,function(){return n[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(r,t,o){o(0),r.exports=o(0)}]))},174:function(r,t,o){"use strict";function c(r,t){for(var o=[],c=0,e=r.length;c<e;c+=t)o.push(r.slice(c,c+t));return o}o.d(t,"a",function(){return c})},198:function(r){r.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"10% Happier",path:"/books/10-happier"}}},{node:{frontmatter:{title:"Extreme Ownership",path:"/books/extreme-ownership"}}},{node:{frontmatter:{title:"Born to Run",path:"/books/born-to-run"}}},{node:{frontmatter:{title:"The Five People You Meet in Heaven",path:"/books/five-people-in-heaven"}}},{node:{frontmatter:{title:"Living with a SEAL",path:"/books/living-with-a-seal"}}},{node:{frontmatter:{title:"The Last Lecture",path:"/books/last-lecture"}}},{node:{frontmatter:{title:"Vagabonding",path:"/books/vagabonding"}}},{node:{frontmatter:{title:"Subtle Art of Not Giving a F*ck",path:"/books/subtle-art-of-not-giving-a-fuck"}}},{node:{frontmatter:{title:"Tribe of Mentors",path:"/books/tribe-of-mentors"}}},{node:{frontmatter:{title:"Tools of Titans",path:"/books/tools-of-titans"}}},{node:{frontmatter:{title:"Dignity",path:"/books/dignity"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-books-js-78d5f9a24f57639556d5.js.map