(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{301:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("480c2e4e",content,!0,{sourceMap:!1})},304:function(t,e,r){"use strict";r(301)},305:function(t,e,r){var n=r(66)(!1);n.push([t.i,".header-image[data-v-6de9d792]{position:relative}.col-3 img[data-v-6de9d792],.header-image[data-v-6de9d792]{width:100%;height:100%}",""]),t.exports=n},319:function(t,e,r){"use strict";r.r(e);var n=r(21),c=(r(52),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("articles").limit(3).only(["title","path","description","updatedAt"]).sortBy("date").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),l=(r(304),r(63)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row mt-5 pt-5"},[t._m(1),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"col-12 col-md-4"},[r("b-card",{attrs:{title:article.title}},[r("b-card-text",[t._v("\n          "+t._s(article.description)+"\n        ")]),t._v(" "),r("nuxt-link",{attrs:{to:article.path,variant:"primary"}},[t._v("Read More")])],1)],1)}))],2)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-4 offset-4"},[r("img",{staticClass:"header-image",attrs:{src:"img/header.svg"}})]),t._v(" "),r("div",{staticClass:"col-12 text-center"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h1",{staticClass:"mt-3 text-primary title"},[t._v("ZED Magdy")]),t._v(" "),r("h4",{staticClass:"description"},[t._v("\n            Software Engineer, Fullstack Web developer.\n          ")])])]),t._v(" "),r("div",{staticClass:"row mt-2"},[r("div",{staticClass:"col-12 text-center"},[r("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"https://twitter.com/ZedMagdy",target:"_blank"}},[t._v("Get in touch")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 mb-3 text-center"},[r("h2",[t._v("Recent Posts")])])}],!1,null,"6de9d792",null);e.default=component.exports}}]);