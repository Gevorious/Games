(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports={Drawer:"Drawer__Drawer___3vVJZ",open:"Drawer__open___XzWAV",close:"Drawer__close___3Ddcc"}},function(e,t,a){e.exports={GameArea:"GameArea__GameArea___1giao",Content:"GameArea__Content___4kaKX",Score:"GameArea__Score___1D7VO"}},function(e,t,a){e.exports={Card:"Card__Card___1hLlG",Back:"Card__Back___1npfg",Front:"Card__Front___9n4gs",img_1:"Card__img_1____dj2Q",img_2:"Card__img_2___W4W5o",img_3:"Card__img_3___PLeoc",img_4:"Card__img_4___2OFpm",img_5:"Card__img_5___7p706",img_6:"Card__img_6___KFOV0",img_7:"Card__img_7___3aiXz",img_8:"Card__img_8___2xjld",img_9:"Card__img_9___3j_B_",img_10:"Card__img_10___3hRjl",img_11:"Card__img_11___2FFoi",img_12:"Card__img_12___2Ociu"}},function(e,t,a){e.exports={MineField:"MineField__MineField___2ltSN",Content:"MineField__Content___12a-V",TimerDiv:"MineField__TimerDiv___243WH",Flags:"MineField__Flags___1c8xe"}},,,,,,function(e,t,a){e.exports={Tab:"Tab__Tab___14e1b",active:"Tab__active___1lvsB"}},function(e,t,a){e.exports={loader:"Loader__loader___3eqKX",ldsring:"Loader__ldsring___FVzqB","lds-ring":"Loader__lds-ring___1-K7Z"}},function(e,t,a){e.exports={FinishGame:"FinishGame__FinishGame___1DOLG",inputs:"FinishGame__inputs___2nA1x"}},function(e,t,a){e.exports={Snake:"Snake__Snake___1TMtE",controls:"Snake__controls___2I5gs"}},function(e,t,a){e.exports={Dashboard:"Dashboard__Dashboard___2kqn7",Content:"Dashboard__Content___2kUz6"}},,,,,,,,,,,,function(e,t,a){e.exports={Index:"index__Index___2BZWd"}},function(e,t,a){e.exports={Layout:"Layout__Layout___2C2_c"}},,,function(e,t,a){e.exports={Menu:"Menu__Menu___l3EzY"}},function(e,t,a){e.exports={BackDrop:"BackDrop__BackDrop___wZny4"}},function(e,t,a){e.exports={GameList:"GameList__GameList___1QyfV"}},function(e,t,a){e.exports={Navigation:"Navigation__Navigation___2telG"}},function(e,t,a){e.exports={Stats:"Stats__Stats___F33My",ButtonDiv:"Stats__ButtonDiv___1hyFL"}},function(e,t,a){e.exports={TabsDiv:"LeaderboardRenderer__TabsDiv___1uBVR"}},function(e,t,a){e.exports={StatsList:"StatsList__StatsList___1oElK"}},function(e,t,a){e.exports={ListItem:"ListItem__ListItem___3TNW4"}},function(e,t,a){e.exports={Input:"Input__Input___s67N0"}},function(e,t,a){e.exports={Button:"Button__Button___QI7b2"}},function(e,t,a){e.exports={Target:"Target__Target___cetQA"}},function(e,t,a){e.exports={SnakeDot:"SnakeDot__SnakeDot___3Uuil"}},function(e,t,a){e.exports={Header:"Header__Header___oE2FH"}},function(e,t,a){e.exports={MemoryGame:"MemoryGame__MemoryGame___3tkag"}},function(e,t,a){e.exports={Timer:"Timer__Timer___vJ6dw"}},function(e,t,a){e.exports={Minesweeper:"Minesweeper__Minesweeper___INENJ",MemoryGame:"Minesweeper__MemoryGame___2sIbP"}},function(e,t,a){e.exports={Cell:"Cell__Cell___dKMvy"}},,function(e,t,a){e.exports=a(92)},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(41),s=a.n(i),o=a(42),c=a.n(o),l=a(1),u=a(3),m=a(5),d=a(4),_=a(6),f=a(43),h=a.n(f),p=a(17),v=a.n(p),g=a(47),b=a.n(g),E=function(e){return r.a.createElement("div",{onClick:e.onClick,className:b.a.BackDrop})},k=a(10),C=function(e){var t=[v.a.Drawer],a=["fa"];return e.isOpen?(a.push("fa-times"),t.push(v.a.open)):(a.push("fa-bars"),t.push(v.a.close)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement("i",{onClick:e.toggleDrawer,className:a.join(" ")}),r.a.createElement("ul",{onClick:e.toggleDrawer},r.a.createElement(k.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement("li",null,"Games")),r.a.createElement(k.b,{style:{textDecoration:"none"},to:"/stats"},r.a.createElement("li",null,"Statistics")))),e.isOpen?r.a.createElement(E,{onClick:e.toggleDrawer}):null)},w=a(11),S=a(50),y=a.n(S),N=a(16),T=a.n(N),x=a(24),O=a(25),M=a.n(O),D=function(){function e(){Object(l.a)(this,e),this._APIUrlBase="https://fun-games-46704.firebaseio.com"}return Object(u.a)(e,[{key:"getData",value:function(){var e=Object(x.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("".concat(this._APIUrlBase,"/").concat(t,".json"));case 2:return a=e.sent,e.next=5,a.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendData",value:function(){var e=Object(x.a)(T.a.mark((function e(t,a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.post("".concat(this._APIUrlBase,"/").concat(t,".json"),a).catch((function(e){console.log(e)}));case 2:if(200!==e.sent.status){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),F=function e(){Object(l.a)(this,e),this.sort=function(e){isNaN(e[0].result)?e.sort((function(e,t){return Number(e.result.replace(/:/g,""))-Number(t.result.replace(/:/g,""))})):e.sort((function(e,t){return t.result-e.result}))},this.transformData=function(e){var t=Object.keys(e),a=[];return e&&t.map((function(t){var n=e[t];return a.push(n)})),a}},G=a(51),j=a.n(G),I=a(26),A=a.n(I),R=function(e){var t=[A.a.Tab];return e.activeTab===e.name&&t.push(A.a.active),r.a.createElement("div",{className:t.join(" "),onClick:e.onClick},e.children)},B=a(27),L=a.n(B),H=function(){return r.a.createElement("div",{className:L.a.loader},r.a.createElement("div",{className:L.a.ldsring},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},J=a(52),W=a.n(J),V=a(53),z=a.n(V),K=function(e){var t=e.player;return r.a.createElement("li",{className:z.a.ListItem},t.firstName+" "+t.lastName,r.a.createElement("strong",null,t.result))},P=function(e){var t=e.leaderboard;return r.a.createElement("ol",{className:W.a.StatsList},t.map((function(e,t){return r.a.createElement(K,{key:t,player:e})})))},U=function(e){var t=e.loading,a=e.leaderboard,n=e.activeTab,i=e.switchTab;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.TabsDiv},r.a.createElement(R,{onClick:function(){return i("Memory_Game")},name:"Memory_Game",activeTab:n},"Memory Game"),r.a.createElement(R,{onClick:function(){return i("Snake")},name:"Snake",activeTab:n},"Snake Game"),r.a.createElement(R,{onClick:function(){return i("Minesweeper")},name:"Minesweeper",activeTab:n},"Minesweeper")),t?r.a.createElement(H,null):r.a.createElement(P,{leaderboard:a}))},Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).game=a.props.location.state?a.props.location.state.game:"Memory_Game",a.APIService=new D,a.Organizer=new F,a.state={loading:!0,leaderboard:[],activeTab:a.game},a.switchTab=function(e){a.setState({activeTab:e},(function(){a.getData(a.state.activeTab)}))},a.handleResponse=function(e){if(e){var t=a.Organizer.transformData(e);a.Organizer.sort(t),a.setState({loading:!1,leaderboard:t})}else a.setState({loading:!0})},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.state.activeTab)}},{key:"getData",value:function(e){var t=this;this.APIService.getData(e).then((function(e){t.handleResponse(e)}))}},{key:"render",value:function(){var e=this.state,t=e.leaderboard,a=e.loading,n=e.activeTab;return r.a.createElement("div",{className:y.a.Stats},r.a.createElement("h1",null,"Leaderboard"),r.a.createElement(U,{leaderboard:t,loading:a,switchTab:this.switchTab,activeTab:n}))}}]),t}(n.Component),Y=a(13),Q=a(59),X=a.n(Q),q=a(30),$=a.n(q),ee=a(19),te=a.n(ee),ae=function(e){var t=[te.a.Card,te.a[e.cardState]];return"Front"===e.cardState&&t.push(te.a[e.img]),r.a.createElement("div",{className:t.join(" "),onClick:function(){return e.cardFlip(e.id)}})},ne=a(60),re=a.n(ne),ie=null,se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={timer:"00:00"},a.date=new Date,a.setTimer=function(){var e=new Date-a.date,t=new Date(e).getMinutes(),n=new Date(e).getSeconds();t<10&&(t="0"+t),n<10&&(n="0"+n),a.setState({timer:t+":"+n})},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:re.a.Timer},"Time: ",this.state.timer)}},{key:"componentDidMount",value:function(){var e=this;ie=setInterval((function(){e.setTimer()}),1e3)}},{key:"componentWillUnmount",value:function(){this.props.handleTime(this.state.timer),clearInterval(ie)}}]),t}(n.Component),oe=a(55),ce=a.n(oe),le=function(e){return r.a.createElement("button",{className:ce.a.Button,onClick:e.onClick,disabled:e.disabled},e.children)},ue=a(58),me=a.n(ue),de=function(e){var t=null;return t=e.end?r.a.createElement(r.a.Fragment,null,e.text,r.a.createElement(le,{onClick:e.saveResults,disabled:e.disableSave},"Save?"),r.a.createElement(le,{onClick:e.startGame},"New?")):e.children,r.a.createElement("div",{className:me.a.Header},t)},_e=function(e){var t=null;return t=e.start?e.cardList.map((function(t){return r.a.createElement(ae,Object.assign({key:t.id,cardFlip:e.cardFlip},t))})):r.a.createElement(le,{onClick:e.startGame},"Start"),r.a.createElement("div",{className:$.a.Dashboard},r.a.createElement(de,{text:"Game Over",end:e.isFinished,start:e.start,startGame:e.startGame,saveResults:e.saveResults},e.stopTimer?null:r.a.createElement(se,{handleTime:e.handleTime})),r.a.createElement("div",{className:$.a.Content},t))},fe=a(63),he=a(28),pe=a.n(he),ve=function e(){Object(l.a)(this,e),this.inputHandler=function(e,t,a,n){return n.result=a,"First Name:"===e&&(n.firstName=t.trim()),"Last Name:"===e&&(n.lastName=t.trim()),n}},ge=a(54),be=a.n(ge),Ee=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:e.name},e.name),r.a.createElement("input",{className:be.a.Input,name:e.name,type:"text",onChange:e.onChange}))};function ke(e,t){var a=!0;return e&&t||(a=!1),(t.length<2||e.length<2)&&(a=!1),t.match(/^[a-zA-Z]+$/)&&e.match(/^[a-zA-Z]+$/)||(a=!1),a}var Ce=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).APIService=new D,a.InputHandler=new ve,a.state={data:{firstName:"",lastName:"",result:""},showStats:!1,isValid:!1},a.personInfoHandler=function(e){e=e||window.event;var t=Object(fe.a)({},a.state.data),n=a.props.score||a.props.time;a.InputHandler.inputHandler(e.target.name,e.target.value,n,t);var r=ke(t.firstName,t.lastName);a.setState({data:t,isValid:r})},a.sendData=function(){var e=a.props.game;a.APIService.sendData(e,a.state.data).then((function(e){a.setState({showStats:e})}))},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.time||this.props.score;return void 0===e?r.a.createElement(w.a,{to:"/"}):this.state.showStats?r.a.createElement(w.a,{to:{pathname:"/stats/",state:{game:this.props.game}}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:pe.a.FinishGame},r.a.createElement("h1",null,"Game Over!"),r.a.createElement("h2",null,"Your result is",r.a.createElement("strong",null,e),this.props.time?" s!":" pts!"),r.a.createElement("div",{className:pe.a.inputs},r.a.createElement(Ee,{name:"First Name:",onChange:this.personInfoHandler}),r.a.createElement(Ee,{name:"Last Name:",onChange:this.personInfoHandler}),r.a.createElement("div",null,r.a.createElement(le,{onClick:this.props.startNew},"New Game"),r.a.createElement(le,{onClick:this.sendData,disabled:!this.state.isValid},"Save Results")))),")")}}]),t}(n.Component),we=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).counter=0,a.turn=!0,a.cardCount=24,a.generateCards=function(e){for(var t=[],a=1,n=1,r=0;r<e;r++)t.push({img:"img_".concat(a),id:n,cardState:"Back"}),n++,r%2===1&&a++;return t},a.state={time:null,activeCards:[],start:!1,stopTimer:!0,isFinished:!1,cardContent:a.generateCards(a.cardCount),saveResults:!1},a.saveResults=function(){a.setState({saveResults:!0,start:!1})},a.cardFlipHandler=function(e){var t=Object(Y.a)(a.state.cardContent),n=Object(Y.a)(a.state.activeCards);t.forEach((function(t){t.id===e&&"Back"===t.cardState&&n.length<2&&(t.cardState="Front",n.push(t))})),a.setState({cardContent:t,activeCards:n}),2===n.length&&a.turn&&(a.turn=!1,a.checkMatching(n))},a.startGame=function(){var e=Object(Y.a)(a.state.cardContent).sort((function(){return Math.random()-.5}));e.forEach((function(e){e.cardState="Back"})),a.setState({stopTimer:!1,isFinished:!1,cardContent:e,saveResults:!1,start:!0})},a.checkMatching=function(e){if(e[0].img===e[1].img)a.setState({activeCards:[]}),a.counter++,a.turn=!0;else var t=window.setTimeout((function(){a.flipBackHandler(e),a.turn=!0,window.clearTimeout(t)}),1e3);a.counter>=a.state.cardContent.length/2&&a.finishGame()},a.flipBackHandler=function(e){var t=Object(Y.a)(a.state.cardContent);t.forEach((function(t){t.id!==e[0].id&&t.id!==e[1].id||(t.cardState="Back")})),a.setState({cardContent:t,activeCards:[]})},a.finishGame=function(){a.setState({stopTimer:!0,isFinished:!0,activeCards:[]}),a.counter=0},a.handleTime=function(e){a.setState({time:e})},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:X.a.MemoryGame},this.state.saveResults?r.a.createElement(Ce,{game:"Memory_Game",time:this.state.time,startNew:this.startGame}):r.a.createElement(_e,{stopTimer:this.state.stopTimer,cardList:this.state.cardContent,cardFlip:this.cardFlipHandler,start:this.state.start,startGame:this.startGame,handleTime:this.handleTime,isFinished:this.state.isFinished,saveResults:this.saveResults}))}}]),t}(n.Component),Se=a(29),ye=a.n(Se),Ne=a(18),Te=a.n(Ne),xe=a(57),Oe=a.n(xe),Me=function(e){var t;return t=e.cordinates.map((function(e,t){return r.a.createElement("div",{key:t,style:{left:e[0]+"%",top:e[1]+"%"},className:Oe.a.SnakeDot})})),r.a.createElement(r.a.Fragment,null,t)},De=a(56),Fe=a.n(De),Ge=function(e){var t=e.cordinate;return r.a.createElement("div",{className:Fe.a.Target,style:{backgroundColor:"#fff",left:t[0]+"%",top:t[1]+"%"}})},je=function(e){var t=null;return t=e.start?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,{cordinate:e.targetCords}),r.a.createElement(Me,{cordinates:e.cordinates})):r.a.createElement(le,{onClick:e.startGame},"Start"),r.a.createElement("div",{className:Te.a.GameArea},r.a.createElement(de,{text:"Game Over",end:e.isFinished,start:e.start,startGame:e.startGame,saveResults:e.saveResults},r.a.createElement("div",{className:Te.a.Score}," ",e.start?"Score - ".concat(e.score):null," ")),r.a.createElement("div",{className:Te.a.Content},t))},Ie=null,Ae=!1,Re=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getTargetCords=function(){return[2*Math.round(49*Math.random()),2*Math.round(49*Math.random())]},a.state={start:!1,isFinished:!1,saveResults:!1,score:0,speed:250,direction:39,targetCords:a.getTargetCords(),cordinates:[[0,0],[2,0]]},a.startGame=function(){a.setState({start:!0,isFinished:!1,score:0,saveResults:!1,speed:250,direction:39,cordinates:[[0,0],[2,0]]}),Ie=window.setInterval(a.onKeyDown,a.state.speed),document.onkeydown=a.setDirection},a.saveResults=function(){a.setState({saveResults:!0})},a.setDirection=function(e){var t=e.keyCode||e;if(t&&!0===Ae)switch(t){case 37:39!==a.state.direction&&a.setState({direction:t});break;case 38:40!==a.state.direction&&a.setState({direction:t});break;case 39:37!==a.state.direction&&a.setState({direction:t});break;case 40:38!==a.state.direction&&a.setState({direction:t})}Ae=!1},a.checkArea=function(e){return e[0]<0||e[1]>98||e[1]<0||e[0]>98},a.checkSelfHit=function(e){var t=!1,n=Object(Y.a)(a.state.cordinates);return n.pop(),n.forEach((function(a){e[0]===a[0]&&e[1]===a[1]&&(t=!0)})),t},a.checkTargetHit=function(e){if(e[0]===a.state.targetCords[0]&&e[1]===a.state.targetCords[1]){var t=a.state.speed;return a.setState((function(e){return{score:e.score+100}})),t>30&&a.setState((function(e){return{speed:e.speed-5}})),a.setState({targetCords:a.getTargetCords()}),window.clearInterval(Ie),Ie=window.setInterval(a.onKeyDown,a.state.speed),!0}},a.onKeyDown=function(){var e=Object(Y.a)(a.state.cordinates),t=e[e.length-1];switch(a.state.direction){case 37:t=[t[0]-2,t[1]];break;case 38:t=[t[0],t[1]-2];break;case 39:t=[t[0]+2,t[1]];break;case 40:t=[t[0],t[1]+2]}a.checkArea(t)||a.checkSelfHit(t)?(window.clearInterval(Ie),a.gameOver()):(a.checkTargetHit(t)||e.shift(),e.push(t),a.setState({cordinates:e}),Ae=!0)},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){document.onkeydown=null,window.clearInterval(Ie)}},{key:"gameOver",value:function(){this.setState({isFinished:!0}),document.onkeydown=null}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:ye.a.Snake},this.state.saveResults?r.a.createElement(Ce,{game:"Snake",startNew:this.startGame,score:this.state.score}):r.a.createElement(r.a.Fragment,null," ",r.a.createElement(je,{setDirection:this.setDirection,score:this.state.score,cordinates:this.state.cordinates,start:this.state.start,handleTime:this.handleTime,targetCords:this.state.targetCords,startGame:this.startGame,saveResults:this.saveResults,isFinished:this.state.isFinished}),r.a.createElement("div",{className:ye.a.controls},r.a.createElement("i",{className:"fa fa-arrow-left",onTouchStart:function(){return e.setDirection(37)}}),r.a.createElement("i",{className:"fa fa-arrow-up",onTouchStart:function(){return e.setDirection(38)}}),r.a.createElement("i",{className:"fa fa-arrow-right",onTouchStart:function(){return e.setDirection(39)}}),r.a.createElement("i",{className:"fa fa-arrow-down",onTouchStart:function(){return e.setDirection(40)}}))))}}]),t}(n.Component),Be=a(48),Le=a.n(Be),He=a(49),Je=a.n(He),We=function(e){return r.a.createElement("div",{className:Je.a.Navigation},r.a.createElement("li",null," ",r.a.createElement(k.b,{to:e.url,style:{textDecoration:"none"}},e.children)))},Ve=function(){return r.a.createElement("div",{className:Le.a.GameList},r.a.createElement(We,{url:"/memory-game"},"Memory Card Game"),r.a.createElement(We,{url:"/snake-game"},"Snake Game"),r.a.createElement(We,{url:"/minesweeper"},"Minesweeper"))},ze=a(46),Ke=a.n(ze),Pe=function(){return r.a.createElement("div",{className:Ke.a.Menu},r.a.createElement("ul",null,r.a.createElement(k.b,{to:"/"},r.a.createElement("li",null,"GAMES")),r.a.createElement(k.b,{to:{pathname:"/stats/",state:{game:"Memory_Game"}}},r.a.createElement("li",null,"STATS")),r.a.createElement(k.b,{to:"/about/"},r.a.createElement("li",null,"ABOUT US"))))},Ue=a(61),Ze=a.n(Ue),Ye=a(20),Qe=a.n(Ye),Xe=a(62),qe=a.n(Xe),$e=function(e){var t=e.cell,a=e.onToggleMarked,n=e.onClick,i=e.isFinished,s=["fa"],o=null,c={color:""};if(t.open&&(c=t.epicenter?{backgroundColor:"red"}:{backgroundColor:"#ccc"}),t.isMine&&t.open&&!t.marked&&s.push("fa-bomb"),t.value>0&&t.open&&(o=t.value),t.marked&&!t.open&&s.push("fa-flag"),i&&t.marked&&!t.isMine&&(s.splice(1,1),s.push("fa-times")),t.value>0&&t.open)switch(t.value){case 1:c.color="blue";break;case 2:c.color="green";break;case 3:c.color="red";break;case 4:c.color="darkblue";break;case 5:c.color="maroon";break;case 6:c.color="#009D9D";break;case 7:c.color="black";break;case 8:c.color="#6b6b6b"}return r.a.createElement("div",{className:qe.a.Cell,onContextMenu:function(e){return a(t.id,e)},onClick:i?null:function(e){return n(t.id,e)},style:c},t.marked||t.isMine?r.a.createElement("i",{className:s.join(" "),style:t.marked?{color:"red"}:{color:"black"}}):o)},et=function(e){var t=e.cells,a=e.onToggleMarked,n=e.onClick,i=e.stopTimer,s=e.handleTime,o=e.started,c=e.startGame,l=e.isFinished,u=e.win,m=e.flaggedCount,d=e.mineCount,_=e.saveResults,f=e.rows,h=e.cols,p={width:25*h+"px",height:25*f+"px"},v={width:25*h+4+"px",height:25*f+44+"px"},g=null,b=r.a.createElement(de,{text:""});return g=o?t.map((function(e,t){return r.a.createElement($e,{key:t,cell:e,isFinished:l,onToggleMarked:a,onClick:n})})):r.a.createElement(le,{onClick:c},"Start"),i||(b=r.a.createElement(de,{text:"Boom! You Lost!",end:l,start:o,startGame:c,saveResults:_,disableSave:!0},r.a.createElement(se,{handleTime:s}),r.a.createElement("div",{className:Qe.a.Flags},d-m))),u&&(b=r.a.createElement(de,{text:"Yay! You Won!",end:u,start:o,startGame:c,saveResults:_})),r.a.createElement("div",{className:Qe.a.MineField,style:v},b,r.a.createElement("div",{className:Qe.a.Content,style:p},g))},tt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).rows=16,a.cols=24,a.cellCount=a.cols*a.rows,a.mineCount=Math.floor(a.cellCount/5.4),a.generateCells=function(){for(var e=0,t=0,n=1,r=[],i=0;i<a.cellCount;i++)t<a.cols?t++:(n++,t=1),r.push({cordinates:[t,n],isMine:!1,open:!1,value:0,id:e++,marked:!1});return r},a.state={time:null,cellArr:a.generateCells(),started:!1,stopTimer:!0,isFinished:!1,saveResults:!1,flaggedCount:0,win:!1},a.startGame=function(){a.setState({time:null,cellArr:a.generateCells(a.cellCount),started:!0,stopTimer:!0,isFinished:!1,saveResults:!1,win:!1,flaggedCount:0})},a.saveResults=function(){a.setState({saveResults:!0})},a.onGameWin=function(){var e=JSON.parse(JSON.stringify(a.state.cellArr)),t=e.filter((function(e){return!0===e.open})).length,n=e.filter((function(e){return e.marked&&!e.isMine})).length;t===a.cellCount-a.mineCount&&0===n&&a.setState({win:!0})},a.onClick=function(e){var t=JSON.parse(JSON.stringify(a.state.cellArr)),n=t.findIndex((function(t){return t.id===e})),r=JSON.parse(JSON.stringify(a.state.flaggedCount)),i=t[n];a.state.stopTimer&&!i.marked&&(t=a.generateMines(i,t),a.setState({stopTimer:!1})),0!==i.value||i.marked||a.revealEmpty(n,t),i.value>0&&!i.marked&&a.openCell(n,t),i.isMine&&!i.marked&&(a.gameOver(t),i.epicenter=!0,a.setState({isFinished:!0})),a.setState({cellArr:t},(function(){r===a.mineCount&&a.onGameWin()}))},a.gameOver=function(e){return e.forEach((function(e){return!0!==e.isMine||e.marked?e:e.open=!0})),e},a.openCell=function(e,t){t[e].open=!0},a.revealEmpty=function(e,t){a.getNeighbours(e,t).forEach((function(e){if(!e.marked&&!e.open&&!e.isMine){var n=t.findIndex((function(t){return t.id===e.id}));t[n].open=!0,0===e.value&&a.revealEmpty(n,t)}}))},a.getNeighbours=function(e,t){var n,r=[],i=t[e].cordinates[0],s=t[e].cordinates[1];return n=t.findIndex((function(e){return e.cordinates[0]===i&&e.cordinates[1]===s})),r.push(t[n]),i>1&&s>1&&(n=t.findIndex((function(e){return e.cordinates[0]===i-1&&e.cordinates[1]===s-1})),r.push(t[n])),s>1&&(n=t.findIndex((function(e){return e.cordinates[0]===i&&e.cordinates[1]===s-1})),r.push(t[n])),i<a.cols&&s>1&&(n=t.findIndex((function(e){return e.cordinates[0]===i+1&&e.cordinates[1]===s-1})),r.push(t[n])),i>1&&(n=t.findIndex((function(e){return e.cordinates[0]===i-1&&e.cordinates[1]===s})),r.push(t[n])),i<a.cols&&(n=t.findIndex((function(e){return e.cordinates[0]===i+1&&e.cordinates[1]===s})),r.push(t[n])),i>1&&s<a.rows&&(n=t.findIndex((function(e){return e.cordinates[0]===i-1&&e.cordinates[1]===s+1})),r.push(t[n])),s<a.rows&&(n=t.findIndex((function(e){return e.cordinates[0]===i&&e.cordinates[1]===s+1})),r.push(t[n])),i<a.cols&&s<a.rows&&(n=t.findIndex((function(e){return e.cordinates[0]===i+1&&e.cordinates[1]===s+1})),r.push(t[n])),r},a.generateMines=function(e,t){for(var n=[],r=0;r<a.mineCount;){var i=Math.round(Math.random()*(a.cellCount-1));t[i].id===e.id||t[i].isMine||(t[i].isMine=!0,t[i].value=-1,n.push(t[i]),r++)}return n.forEach((function(e){a.setNumbers(e,t)})),t},a.setNumbers=function(e,t){var n,r=e.cordinates[0],i=e.cordinates[1];r>1&&i>1&&(n=t.findIndex((function(e){return e.cordinates[0]===r-1&&e.cordinates[1]===i-1})),t[n].isMine||t[n].value++),i>1&&(n=t.findIndex((function(e){return e.cordinates[0]===r&&e.cordinates[1]===i-1})),t[n].isMine||t[n].value++),r<a.cols&&i>1&&(n=t.findIndex((function(e){return e.cordinates[0]===r+1&&e.cordinates[1]===i-1})),t[n].isMine||t[n].value++),r>1&&(n=t.findIndex((function(e){return e.cordinates[0]===r-1&&e.cordinates[1]===i})),t[n].isMine||t[n].value++),r<a.cols&&(n=t.findIndex((function(e){return e.cordinates[0]===r+1&&e.cordinates[1]===i})),t[n].isMine||t[n].value++),r>1&&i<a.rows&&(n=t.findIndex((function(e){return e.cordinates[0]===r-1&&e.cordinates[1]===i+1})),t[n].isMine||t[n].value++),i<a.rows&&(n=t.findIndex((function(e){return e.cordinates[0]===r&&e.cordinates[1]===i+1})),t[n].isMine||t[n].value++),r<a.cols&&i<a.rows&&(n=t.findIndex((function(e){return e.cordinates[0]===r+1&&e.cordinates[1]===i+1})),t[n].isMine||t[n].value++)},a.onToggleMarked=function(e,t){t.preventDefault();var n=JSON.parse(JSON.stringify(a.state.cellArr)),r=n.findIndex((function(t){return t.id===e})),i=JSON.parse(JSON.stringify(a.state.flaggedCount));n[r].open||a.state.isFinished||(n[r].marked=!n[r].marked,n[r].marked?i++:i--,i===a.mineCount&&a.onGameWin()),a.setState({cellArr:n,flaggedCount:i})},a.handleTime=function(e){a.setState({time:e})},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.cellArr,a=e.stopTimer,n=e.isFinished,i=e.started,s=e.win,o=e.flaggedCount,c=e.saveResults;return r.a.createElement("div",{className:Ze.a.Minesweeper},c?r.a.createElement(Ce,{game:"Minesweeper",startNew:this.startGame,time:this.state.time}):r.a.createElement(et,{mineCount:this.mineCount,saveResults:this.saveResults,win:s,isFinished:n,started:i,startGame:this.startGame,stopTimer:a,cells:t,onToggleMarked:this.onToggleMarked,onClick:this.onClick,handleTime:this.handleTime,flaggedCount:o,rows:this.rows,cols:this.cols}))}}]),t}(n.Component);var at=function(e){return function(t){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={isOpen:!1},t.toggleDrawer=function(){t.setState((function(e){return{isOpen:!e.isOpen}}))},t}return Object(_.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.Layout},r.a.createElement(e,null),r.a.createElement(k.a,null,r.a.createElement(Pe,null),r.a.createElement(C,{isOpen:this.state.isOpen,toggleDrawer:this.toggleDrawer}),r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/",exact:!0,component:Ve}),r.a.createElement(w.b,{path:"/stats",exact:!0,component:Z}),r.a.createElement(w.b,{path:"/stats/:id",component:U}),r.a.createElement(w.b,{path:"/finish",exact:!0,component:Ce}),r.a.createElement(w.b,{path:"/snake-game",exact:!0,component:Re}),r.a.createElement(w.b,{path:"/memory-game",exact:!0,component:we}),r.a.createElement(w.b,{path:"/minesweeper",exact:!0,component:tt}),r.a.createElement(w.b,{path:"/about"}),r.a.createElement(w.a,{to:"/"}))))}}]),a}(n.Component)}((function(){return r.a.createElement(r.a.Fragment,null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var nt=r.a.createElement("div",{className:c.a.Index},r.a.createElement(at,null));s.a.render(nt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[64,1,2]]]);
//# sourceMappingURL=main.731f475c.chunk.js.map