(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{124:function(e,t,a){e.exports=a(263)},163:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),c=a(6),s=a(30),i=a(17),u=a(268),m=function(e){for(var t=e.split("\n"),a={questions:[]},n=t.length,r=!1,l=!1,o=!1,c=0,s={questionText:"",correctAnswer:0,answers:[]},i=0;i<n;i+=1)if("*"!=t[i].substr(0,1))switch(t[i].substr(0,2).toUpperCase()){case"@Q":0!=s.correctAnswer&&s.answers.length>0&&""!=s.questionText&&a.questions.push(s),s={questionText:"",correctAnswer:0,answers:[]},r=!0,l=!1,o=!1;break;case"@A":c=0,r=!1,l=!0,o=!1;break;case"@E":r=!1,l=!1,o=!0;break;default:r?s.questionText=s.questionText+"\n"+t[i]:l?0==c?(s.correctAnswer=Number(t[i])-1,c=1):s.answers.push(t[i]):o&&(a.questions.push(s),s={questionText:"",correctAnswer:0,answers:[]},o=!1)}return a},p={questions:[],attempted:0,correct:0,lastQuestion:!1,begin:!1,timeleft:600,questionsleft:10,qcomplete:!1,questionEl:10,timerEl:10};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=localStorage.getItem("qmcorrect"),n=localStorage.getItem("qmtotal");switch(t.type){case"updateTimer":return Object(i.a)({},e,{timerEl:t.payload,timeleft:60*t.payload});case"updateQuestions":return Object(i.a)({},e,{questionEl:t.payload,questionsleft:t.payload});case"startQuiz":return Object(i.a)({},e,{questionsleft:e.questionEl,timeleft:60*e.timerEl,lastQuestion:!1,begin:!0,qcomplete:!1});case"restartQuiz":return console.log("RESTARTING QUIZ"),Object(i.a)({},e,{correct:0,lastQuestion:!1,attempted:0,begin:!1,qcomplete:!1});case"completeQuiz":return Object(i.a)({},e,{lastQuestion:!1,begin:!1,qcomplete:!0});case"fileSelected":var l=m(t.payload);return Object(i.a)({},e,{attempted:0,correct:0,questions:l.questions});case"questionAnswered":var o=0,c={message:r.a.createElement(u.a,{type:"error",title:"Sorry",description:"Corect answer was:  "+t.payload.correctAnswer})};"correct"==t.payload.type&&(o=1,null!=a?localStorage.setItem("qmcorrect",(parseInt(a)+1).toString()):localStorage.setItem("qmcorrect","1"),c.message=r.a.createElement(u.a,{type:"success",title:"Correct",description:"Great Job!"})),null!=n?localStorage.setItem("qmtotal",(parseInt(n)+1).toString()):localStorage.setItem("qmtotal","1");localStorage.getItem("qmcorrect"),localStorage.getItem("qmtotal");var s=!0,d=!1;return e.questionsleft<2&&(s=!1,d=!0),Object(i.a)({},e,{begin:s,qcomplete:d,questionsleft:e.questionsleft-1,lastQuestion:c,attempted:e.attempted+1,correct:e.correct+o});default:return e}},f=(a(163),function(e){Object(c.c)((function(e){return e})),Object(c.b)();return r.a.createElement("div",null)}),E=a(31),q=a(269),g=a(267),b=a(270),v=(a(99),a(266));function h(){var e=Object(c.c)((function(e){return e})),t=Object(c.b)(),a=Object(n.useRef)(null),l=Object(n.useRef)(null);return r.a.createElement("div",{className:"qmOptions"},r.a.createElement(q.a,{fluid:!0},r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(b.a,{xs:24,sm:24,md:8},r.a.createElement(v.a,{onChange:function(e){t({type:"updateTimer",payload:e})},ref:a,prefix:"Time Limit",postfix:"minutes",defaultValue:e.timerEl,max:1e3,min:1,step:5})),r.a.createElement(b.a,{xs:24,sm:24,md:8},r.a.createElement(v.a,{onChange:function(e){t({type:"updateQuestions",payload:e})},ref:l,prefix:"Ask",postfix:"questions",value:e.questionEl,max:1e4,min:1,step:1})),r.a.createElement(b.a,{xs:24,sm:24,md:8},r.a.createElement(E.a,{onClick:function(){t({type:"startQuiz",payload:{time:"0",questions:"0"}})},color:"green"},"Start Quiz!")))))}var y=function(e){var t=Object(c.c)((function(e){return e})),a=Object(c.b)();null==localStorage.getItem("qmcorrect")&&localStorage.setItem("qmcorrect","0"),"NaN"==localStorage.getItem("qmtotal")&&localStorage.setItem("qmtotal","0");var n=r.a.createElement("div",null),l=r.a.createElement("div",null);return t.questions.length>0&&0==t.begin&&(n=r.a.createElement(h,null)),t.questions.length>0&&1==t.begin&&(l=r.a.createElement(E.a,{onClick:function(e){a({type:"restartQuiz",payload:!1})}},"Restart Quiz")),r.a.createElement("div",null,r.a.createElement(q.a,{fluid:!0},r.a.createElement(g.a,{className:"qmHeader"},r.a.createElement(b.a,{xs:3},r.a.createElement("img",{className:"qmLogo",src:"qmlogo.png"})),r.a.createElement(b.a,{xs:9},"Current Score: ",t.correct,"/",t.attempted," -- Lifetime Score: ",localStorage.getItem("qmcorrect")," / ",localStorage.getItem("qmtotal")," "),r.a.createElement(b.a,{xs:3},r.a.createElement(E.a,{onClick:function(e){return function(){var e=document.createElement("input");e.type="file",e.onchange=function(e){var t=new FileReader;t.readAsText(e.target.files[0]),t.onload=function(e){a({type:"fileSelected",payload:e.target.result})}},e.click()}()}},"Load Question File")," "),r.a.createElement(b.a,{xs:3},l,"  ")),r.a.createElement(g.a,null,n)))},w=a(271),S=a(123);function x(){var e=Object(c.c)((function(e){return e})),t=Object(c.b)(),a=r.a.useState(e.timeleft),n=Object(S.a)(a,2),l=n[0],o=n[1];return r.a.useEffect((function(){l>0&&e.begin?setTimeout((function(){return o(l-1)}),1e3):t({type:"completeQuiz",payload:null})}),[l]),r.a.createElement("div",null,r.a.createElement(u.a,{type:"info",title:"Time Left",description:r.a.createElement("p",null,r.a.createElement("div",{style:{fontSize:"30px"}},Math.round(l/60*10)/10," minutes"))}))}var O=a(120),j=a.n(O),Q=a(119),I=a.n(Q);function T(){var e=Object(c.c)((function(e){return e})),t=j()(),a=t.width,n=t.height;return r.a.createElement("div",null,r.a.createElement(I.a,{recycle:!1,width:a,height:n}),r.a.createElement("div",{style:{fontSize:"40px"}},"Quest Complete!"),"Your Score: ",e.correct,"/",e.attempted,r.a.createElement("div",{style:{fontSize:"30px",fontWeight:"bold"}}," ",10*Math.round(e.correct/e.attempted*10),"%"))}var k=function(e){var t=Object(c.c)((function(e){return e})),a=Object(c.b)();console.log(e.question);var n=e.question.questionText.split("\n").map((function(e,t){return r.a.createElement("p",{key:t},e)})),l=r.a.createElement("div",null),o=r.a.createElement("div",null),s=r.a.createElement("div",null);t.lastQuestion&&1==t.begin&&(l=r.a.createElement("div",null,t.lastQuestion.message),o=r.a.createElement(x,null)),0==t.begin&&t.qcomplete&&(s=r.a.createElement(T,null));var i=e.question.answers.map((function(t,n){var l={type:"incorrect",correctAnswer:e.question.answers[e.question.correctAnswer]};return n==e.question.correctAnswer&&(l.type="correct"),r.a.createElement(b.a,{key:n},r.a.createElement(w.a,{className:"answerPanel",shaded:!0,key:n,onClick:function(e){return a({type:"questionAnswered",payload:l})}},t))}));return r.a.createElement("div",null,r.a.createElement(w.a,null,o,l,s,r.a.createElement("span",{className:"questionText"},n),r.a.createElement(q.a,null,r.a.createElement(g.a,null,i))))};var A=function(){Object(c.b)();var e,t,a=Object(c.c)((function(e){return e})),n=[{questionText:"Please load a question file",answers:[],correct:0}],l=0;return a.questions.length>0&&a.begin&&(n=a.questions,e=0,t=a.questions.length,e=Math.ceil(e),t=Math.floor(t),l=Math.floor(Math.random()*(t-e))+e),a.questions.length>0&&0==a.begin&&(n=[{questionText:"Select your quiz options and press the start quiz button",answers:[],correct:0}]),r.a.createElement("div",null,r.a.createElement(k,{question:n[l]}))},z=function(e){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(f,null),r.a.createElement(A,null))},C=(a(262),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(122),M=Object(s.createStore)(d,Object(N.composeWithDevTools)());o.a.render(r.a.createElement(c.a,{store:M},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.4ba72136.chunk.js.map