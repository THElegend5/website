(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{309:function(t,a,e){},361:function(t,a,e){"use strict";var n=e(309);e.n(n).a},383:function(t,a,e){"use strict";e(327),e(169),e(70),e(170),e(102);var n=e(61),r=e(326),s=e(343),o=e.n(s),i={name:"Home",components:{NavLink:r.a},data:function(){return{tagName:"",browserDownloadUrl:""}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var e,n,r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.get("https://api.github.com/repos/shosetsuorg/android-app/releases/latest");case 2:e=a.sent,n=e.data,r=n.assets.find((function(t){return t.name.includes(".apk")})),t.$data.tagName=n.tag_name,t.$data.browserDownloadUrl=r.browser_download_url;case 7:case"end":return a.stop()}}),a)})))()}},l=(e(361),e(42)),d=Object(l.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n\t\t\t"+t._s(t.data.heroText||t.$title||"Shosetsu")+"\n\t\t")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n\t\t\t"+t._s(t.data.tagline||t.$description||"Free and open source novel reader for Android.")+"\n\t\t")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("a",{staticClass:"action-button action-download",attrs:{rel:"noopener noreferrer",href:t.browserDownloadUrl||"https://github.com/shosetsuorg/android-app/releases/latest",title:"Download latest release",download:t.browserDownloadUrl?"":null}},[e("span",[t._v(" Download ")])]),t._v(" "),e("NavLink",{staticClass:"action-button action-get-started",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n\t\t"+t._s(t.data.footer)+"\n\t")]):t._e()],1)}),[],!1,null,null,null);a.a=d.exports}}]);