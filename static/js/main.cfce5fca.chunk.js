(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=a(2),l=(a(32),a(6)),i=a(7),u=a(9),m=a(8),h=a(10),d=a(11),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSelect=function(){a.setState({isSelected:!0}),a.checkRightAnswer()},a.state={isSelected:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"checkRightAnswer",value:function(){this.props.answer===this.props.correctAnswer&&(this.setState({isCorrect:!0}),this.props.onRightAnswer())}},{key:"render",value:function(){var e=this,t=this.props,a=t.answer,n=t.isCorrect;return r.a.createElement("div",null,r.a.createElement("div",{className:" number ".concat(e.state.isCorrect?" green":e.state.isSelected&&!n?" wrong":void 0),onClick:this.handleSelect},a))}}]),t}(n.Component),b=a(23),f=a(16),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup_inner"},r.a.createElement("h3",null,"Times up!"),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"homeButtons"}," Go home"))))}}]),t}(r.a.Component),w=a(26),v=a.n(w),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).calculateResult=function(){var e,t=Math.floor(30*Math.random()),n=Math.floor(20*Math.random()),r=Math.floor(30*Math.random()),c=Math.floor(40*Math.random()),o=Math.floor(20*Math.random()),s=Math.floor(4*Math.random());switch(s){case 0:e=t+n;break;case 1:e=t-n;break;case 2:e=t/n;break;case 3:e=t*n}a.setState({question:"".concat(t," ").concat(["+","-","/","x"][s]," ").concat(n," = "),correctAnswer:Math.floor(e),wrongAnswers:[r,c,o],shuffledAnswers:Object(b.shuffle)([r,c,o,Math.floor(e)])})},a.handleRightAnswerRecieved=function(){a.setState(function(){return{isAnsweredCorrectly:!0}},function(){setTimeout(function(){a.calculateResult(),document.getElementById("resetbtn").click()},1e3)})},a.state={question:"",correctAnswer:0,wrongAnswers:[],shuffledAnswers:[],gameStatus:"new",isSelected:!1,isCorrect:!1,isAnsweredCorrectly:!1,showPopup:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.calculateResult()}},{key:"timeIsUp",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){var e=this,t=this.state,a=t.question,n=t.shuffledAnswers,c=t.isSelected,o=t.correctAnswer,l=t.isCorrect,i=t.isAnsweredCorrectly;return r.a.createElement("div",{className:"game gamecontainer"},this.state.showPopup?r.a.createElement(E,null):null,r.a.createElement("div",{className:"intro"},r.a.createElement("h3",null," Do your best to answer the question as quick as possible, if your answer is wrong it will appear red")),r.a.createElement("div",{className:"target"},a),r.a.createElement("div",{className:"challenge-numbers"},n.map(function(t){return r.a.createElement(p,{key:v.a.v4(),isCorrect:l,answer:t,isSelected:c,isAnsweredCorrectly:i,correctAnswer:o,onRightAnswer:e.handleRightAnswerRecieved})})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"timer-value"},r.a.createElement(f.a,{initialTime:1e4,direction:"backward",checkpoints:[{time:0,callback:function(){return e.timeIsUp()}}]},function(e){var t=e.reset;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a.Seconds,null),r.a.createElement("button",{className:"resetbtn",id:"resetbtn",onClick:t},"Reset"))})),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"homeButtons"},"Home")))))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bodycontainer"},r.a.createElement("h1",null,"Math is Cool!"),r.a.createElement("div",{className:"bothButtons"},r.a.createElement(s.b,{to:"/Game"},r.a.createElement("button",{className:"homeButtons"},"START")),r.a.createElement(s.b,{to:"/About"},r.a.createElement("button",{className:"homeButtons"},"ABOUT"))),r.a.createElement("h3",null,"You will have 10 seconds to answer each question, good luck ;)"))}}]),t}(n.Component),O=function(){return r.a.createElement("div",{className:"aboutcontainer"},r.a.createElement("h1",null,"About the Creator"),r.a.createElement("img",{className:"profileImage",src:"https://res.cloudinary.com/dl2ribpco/image/upload/v1557245379/ChaseTheSpace/linkedin_ekkfus.jpg",alt:""}),r.a.createElement("div",{className:"textbox"},r.a.createElement("h4",null,"24H HACKATHON - Wild Code School"),"The creator of this app was immensely sleep deprived during its creation, and under a RIDICULOUS time constraint, so please be kind when evaluating the essence of this game. She hopes you can brush up on your math skills, and have fun! - Isabella Fry",r.a.createElement("div",{className:""},r.a.createElement("a",{href:"https://www.linkedin.com/in/isabella-fry-5a1618182/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"iconspecs",src:"https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png",alt:""})),r.a.createElement("a",{href:"https://github.com/dragonslayer77",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"iconspecs",src:"https://image.flaticon.com/icons/png/128/25/25231.png",alt:""})))),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"homeButtons aboutButtons"},"Home"))))},y=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:k}),r.a.createElement(d.a,{path:"/Game",component:g}),r.a.createElement(d.a,{path:"/About",component:O})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var j=document.getElementById("root");j&&o.a.render(r.a.createElement(s.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/MathIsCool"}).ROUTER_BASE_URL},r.a.createElement(y,null)),j),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.cfce5fca.chunk.js.map