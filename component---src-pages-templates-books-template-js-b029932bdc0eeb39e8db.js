(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageQuery",function(){return l});var n=a(0),r=a.n(n),i=a(169),o=a(167);function c(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html;return r.a.createElement(i.a,{className:"article"},r.a.createElement(o.a,{title:"Quotes"}),r.a.createElement("h1",null,a.title),r.a.createElement("h2",null,a.date),r.a.createElement("div",{className:"books-summary-content",dangerouslySetInnerHTML:{__html:n}}))}var l="1579142440"},163:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(164);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},164:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},165:function(e){e.exports={data:{site:{siteMetadata:{headerTitle:"Central Filing"}}}}},166:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},167:function(e,t,a){"use strict";var n=a(168),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(170),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,l=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=d},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Ozzie Kirkby - Central Filing",description:"Engineering Student",author:"Ozzie Kirkby"}}}}},169:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(163),s=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{id:"header-content"},i.a.createElement(l.a,{to:"/",id:"home-icon"},i.a.createElement("img",{src:"/home-icon.svg",alt:"Home Icon",id:"home-icon"})),i.a.createElement("div",{id:"header-title"},i.a.createElement("p",null,t))))};s.propTypes={children:c.a.node},s.defaultProps={siteTitle:""};var d=s,u=function(e){var t=e.children,a=e.className,r=e.showHeader;return i.a.createElement(l.b,{query:"2280076314",render:function(e){return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(d,{siteTitle:e.site.siteMetadata.headerTitle}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,boxSizing:"border-box"},className:a},i.a.createElement("main",null,t)))},data:n})};u.propTypes={children:c.a.node.isRequired,className:c.a.string,showHeader:c.a.bool},u.defaultProps={children:i.a.createElement("div",null),className:"",showHeader:!0};t.a=u}}]);
//# sourceMappingURL=component---src-pages-templates-books-template-js-b029932bdc0eeb39e8db.js.map