(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{324:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));n(320);function a(t){return parseInt(window.getComputedStyle(t).width)}function i(t){var e=parseInt(window.getComputedStyle(t.parentNode).width);return t.setAttribute("width",e),e}},376:function(t,e,n){},415:function(t,e,n){"use strict";n(376)},437:function(t,e,n){"use strict";n.r(e);var a=n(414),i=n(324),r={props:{color:{default:"#8e71c7",type:String}},data:function(){return{text:"新生与湮灭",position:{x:200,y:200},count:0}},mounted:function(){this.container=document.getElementById("star-text-display-container"),this.container.style.width=Object(i.a)(document.getElementById("star-text-display-container")),this.container.style.height="690px",this.tl=a.a.timeline(),this.displayText(this.text,{x:200,y:200}),this.displayText("梦呓",{x:250,y:180})},methods:{displayText:function(t,e){var n=this.createChar,i=document.createElement("div");i.classList.add("star-text-line"),i.style.left=e.x+"px",i.style.top=e.y+"px",i.append(n("-"));for(var r=0;r<t.length;r++){var s=n(t[r]);s.style.transform="translateY(-1rem) scale(0)",i.append(s)}i.append(n("-")),this.tl.add({targets:i.children,scale:1,translateY:0,delay:a.a.stagger(100)},"-="+800*this.count),this.container.append(i),this.count++},createChar:function(t){var e=document.createElement("span");return e.classList.add("star-char"),e.innerText=t,e}}},s=(n(415),n(27)),c=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"perspective-right",attrs:{id:"star-text-display-container"}})}),[],!1,null,null,null);e.default=c.exports}}]);