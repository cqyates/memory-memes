(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"./images/40percent.jpg"},{id:2,image:"./images/callTooMuch.jpg"},{id:3,image:"./images/dankMeme.jpg"},{id:4,image:"./images/laughHarder.jpg"},{id:5,image:"./images/feelBad.jpg"},{id:6,image:"./images/jerkBender.jpg"},{id:7,image:"./images/newMeme.jpg"},{id:8,image:"./images/robotFramework.jpg"},{id:9,image:"./images/supremeCourt.jpg"},{id:10,image:"./images/takeMyMoney.jpg"},{id:11,image:"./images/takeThis.jpg"},{id:12,image:"./images/weirdFeelings.png"}]},,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),c=t.n(i),s=t(3),o=t(4),m=t(7),l=t(5),g=t(8);t(15);var d=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("span",{onClick:function(){return e.shuffleCards(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,width:"170",height:"170"}))))};t(16);var u=function(e){return r.a.createElement("div",{className:"container"},e.children)};t(17);var p=function(e){return r.a.createElement("h1",{className:"jumbotron"},e.children)},f=(t(18),function(e){return console.log(e),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"col-xl-4 h3"},"Clicky Game"),r.a.createElement("div",{className:"col-xl-4 h3"},"Click an image to Begin"),r.a.createElement("div",{className:"col-xl-4 h3"},"Top Score: ",e.topScore," | Score: ",e.score))}),h=t(6),j=[],v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={cards:h,topScore:0,score:0},t.shuffleCards=function(e){var a=t.state.cards.sort(function(){return Math.random()-.5});t.setState({cards:a}),j.includes(e)?(t.state.topScore<t.state.score&&t.setState({topScore:t.state.score}),t.setState({score:0}),j=[]):(j.push(e),t.setState({score:t.state.score+1}))},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement(u,null,r.a.createElement(f,{topScore:this.state.topScore,score:this.state.score}),r.a.createElement(p,null,"Memory Memes Futurama Edition"),this.state.cards.map(function(a){return r.a.createElement(d,{shuffleCards:e.shuffleCards,id:a.id,key:a.id,image:a.image})}))}}]),a}(n.Component);t(19);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.078a6fcf.chunk.js.map