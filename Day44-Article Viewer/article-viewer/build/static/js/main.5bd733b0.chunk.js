(this["webpackJsonparticle-viewer"]=this["webpackJsonparticle-viewer"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),l=(a(14),a(1)),i=a.n(l),o=a(2),m=a(5),u=a(6),d=a(8),p=a(7),w=(a(16),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={news:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNews();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNews",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=f7ab95d1410a4fd8a89cc7a08ed8d8fc",{mode:"no-cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,this.setState({news:t.articles});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"news-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-title-box text-center"},r.a.createElement("div",{className:"small-title"},"News & Blog"),r.a.createElement("h2",{className:"big-title"},"Our Recent Artciles")),r.a.createElement("div",{className:"row"},this.state.news.map((function(e){return r.a.createElement("div",{className:"col-lg-4 col-md-6 wow fadeInUp","data-wow-delay":"0ms"},r.a.createElement("div",{className:"news-item"},r.a.createElement("div",{className:"news_box"},r.a.createElement("div",{className:"newsimg"},r.a.createElement("img",{className:"img-responsive",src:e.urlToImage,alt:""})),r.a.createElement("div",{className:"news-content"},r.a.createElement("div",{className:"news_postdate"},r.a.createElement("span",null,e.publishedAt)),r.a.createElement("a",{href:"#"},r.a.createElement("h3",null,e.title)),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"news_authorinfo"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-user"}),"  ",r.a.createElement("a",{href:""},e.author)))))))}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.5bd733b0.chunk.js.map