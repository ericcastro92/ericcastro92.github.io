(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(21),r=a.n(l),o=(a(93),a(5)),i=a(6),u=a(8),s=a(7),m=a(9),h=a(26),d=a(83),b=a.n(d),E=a(50),f=a.n(E),v=a(85),p=a.n(v),C=a(42),g=a.n(C),O=a(86),j=a.n(O),y=(a(94),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={appMenuOpen:!1,anchorEl:null},a.handleMenu=a.handleMenu.bind(Object(h.a)(a)),a.handleLogout=a.handleLogout.bind(Object(h.a)(a)),a.handleClose=a.handleClose.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e);return c.a.createElement(b.a,{style:{backgroundColor:"#3B7592"},position:"static"},c.a.createElement(p.a,null,c.a.createElement("a",{href:"/",style:{flexGrow:1,color:"white",textDecoration:"none",fontWeight:"bold",fontSize:"16pt"}},"Poondora"),c.a.createElement("div",null,c.a.createElement(f.a,{onClick:this.handleMenu,color:"inherit"},"Menu"),c.a.createElement(j.a,{id:"menu-appbar",anchorEl:e,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:t,onClose:this.handleClose},c.a.createElement(g.a,null,c.a.createElement("a",{className:"MenuItem__Link",href:"/account"},"My account")),c.a.createElement(g.a,null,c.a.createElement("a",{className:"MenuItem__Link",href:"/favorites"},"Favorites")),c.a.createElement(g.a,{onClick:this.handleLogout},"Logout")))))}},{key:"handleLogout",value:function(){this.handleClose()}},{key:"handleMenu",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleClose",value:function(){this.setState({anchorEl:null})}}]),t}(n.Component)),N=a(30);a(206);function k(e){return c.a.createElement(N.b,{className:"Tile",to:e.to},e.children)}function w(e){return c.a.createElement(k,{to:e.to},c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"TileButton__Label"},e.label),c.a.createElement("div",{className:"TileButton__IconContainer"},c.a.createElement("span",{className:"TileButton__Icon ".concat(e.icon)}))))}function L(e){var t=e.to||"/channel/1",a=e.label||"Channel";return c.a.createElement(k,{to:t},c.a.createElement("div",null,c.a.createElement("div",{className:"ThumbnailTile__Label"},a)))}a(212);var _=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=new Array(3),t=new Array(5);return e.fill(1),t.fill(1),c.a.createElement("div",{className:"LandingContainer"},c.a.createElement("h2",null,"My Channels"),c.a.createElement("div",{className:"Carousel"},c.a.createElement(w,{to:"/createchannel",label:"Create Channel",icon:"ion-md-add-circle-outline"}),e.map(function(){return c.a.createElement(L,null)}),c.a.createElement(w,{to:"/channels",label:"View All",icon:"ion-md-arrow-forward"})),c.a.createElement("h2",null,"Popular Channels"),c.a.createElement("div",{className:"Carousel"},t.map(function(){return c.a.createElement(L,null)})),c.a.createElement("h2",null,"Favorites"),c.a.createElement("div",{className:"Carousel"},e.map(function(){return c.a.createElement(L,null)}),c.a.createElement(w,{to:"/channels",label:"View All",icon:"ion-md-arrow-forward"})))}}]),t}(n.Component),M=(a(82),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Account")}}]),t}(n.Component)),P=(a(213),["aab","bab","cab","dab","eab","fab","gab","hab","iab","jab","kab","lab","mab","abc","bbc","cbc","dbc","ebc","fbc","gbc","hbc","ibc","jbc","kbc","lbc","mbc","acd","bcd","ccd","dcd","ecd","fcd","gcd","hcd","icd","jcd","kcd","lcd","mcd"]),S=function(e){return c.a.createElement("div",{className:"CategoryEntry ".concat(e.selected?"CategoryEntry--Selected":""),onClick:function(){e.onClick(e.category)}},e.category)},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={query:"",categories:new Set,showCategoriesList:!1},a.toggleCategory=a.toggleCategory.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.query,n=t.categories;t.showCategoriesList;return c.a.createElement("div",{className:"Container"},c.a.createElement("input",{placeholder:"Name your channel"}),c.a.createElement("h2",null,"Add some categories"),c.a.createElement("div",{className:"CategoryContainer"},c.a.createElement("input",{className:"SearchBar",placeholder:"Search categories...",type:"text",onChange:this.search.bind(this)}),c.a.createElement("div",{className:"CategoryList"},P.filter(function(e){return!a||e.indexOf(a)>=0}).map(function(t){return c.a.createElement(S,{key:t,category:t,selected:n.has(t),onClick:e.toggleCategory})}))),c.a.createElement("button",null,"Create Channel"))}},{key:"search",value:function(e){var t=e.target.value,a=t.length>0;this.setState({query:t,showCategoriesList:a})}},{key:"toggleCategory",value:function(e){var t=this.state.categories;t.has(e)?t.delete(e):t.add(e),this.setState({categories:t})}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Channels")}}]),t}(n.Component),T=a(43),V=a.n(T);a(214);function x(){return c.a.createElement("div",{className:"VideoPlayerContainer"},c.a.createElement("h1",null,"Channel Name"),c.a.createElement("h2",null,"Video Name"),c.a.createElement("div",{className:"VideoPlaceholder"}),c.a.createElement("div",null,"Controls"),c.a.createElement("div",null,"Details"))}a(215);var I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(V.a,{className:"ChannelContainer",container:!0},c.a.createElement(V.a,{className:"VideoContainer",item:!0,sm:8},c.a.createElement(x,null)),c.a.createElement(V.a,{className:"ChannelGuide",item:!0,sm:4},c.a.createElement("div",{className:"ChannelPlaceholder"}),c.a.createElement("div",{className:"ChannelPlaceholder"}),c.a.createElement("div",{className:"ChannelPlaceholder"}),c.a.createElement("div",{className:"ChannelPlaceholder"}),c.a.createElement("div",{className:"ChannelPlaceholder"})))}}]),t}(n.Component),F=(a(218),function(e){return c.a.createElement("a",{href:"/",className:"Card"},c.a.createElement("div",{className:"Card__Label"},"Video"))}),q=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=new Array(32).fill(1);return c.a.createElement("div",null,c.a.createElement("h1",null,"Favorites"),c.a.createElement("section",{className:"FavoritesGrid"},e.map(function(){return c.a.createElement(F,null)})))}}]),t}(n.Component),z=(a(219),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Page not found.")}}]),t}(n.Component)),G=a(27),W=(a(220),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y,null),c.a.createElement("div",{className:"App"},c.a.createElement(N.a,null,c.a.createElement(G.c,null,c.a.createElement(G.a,{path:"/",exact:!0,component:_}),c.a.createElement(G.a,{path:"/account",component:M}),c.a.createElement(G.a,{path:"/createchannel",component:A}),c.a.createElement(G.a,{path:"/channels",component:B}),c.a.createElement(G.a,{path:"/channel/:channelId",component:I}),c.a.createElement(G.a,{path:"/favorites",component:q}),c.a.createElement(G.a,{component:z})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){},88:function(e,t,a){e.exports=a(221)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.87384914.chunk.js.map