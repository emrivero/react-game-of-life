(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),l=n(177),c=n(179),s=n(178),u=n(7),m=Object(u.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"#2E7D32"},secondary:{main:"#ffffff"},status:{danger:"orange"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#1C74A6"},lightblue:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20"},lightgreen:{50:"#F1F8E9",100:"#DCEDC8",200:"#C5E1A5",300:"#AED581",400:"#9CCC65",500:"#8BC34A",600:"#7CB342",700:"#689F38",800:"#558B2F",900:"#33691E"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100"},deeporange:{50:"#FBE9E7",100:"#FFCCBC",200:"#FFAB91",300:"#FF8A65",400:"#FF7043",500:"#FF5722",600:"#F4511E",700:"#E64A19",800:"#D84315",900:"#BF360C"},brown:{50:"#EFEBE9",100:"#D7CCC8",200:"#BCAAA4",300:"#A1887F",400:"#8D6E63",500:"#795548",600:"#6D4C41",700:"#5D4037",800:"#4E342E",900:"#3E2723"},bluegrey:{50:"#ECEFF1",100:"#CFD8DC",200:"#B0BEC5",300:"#90A4AE",400:"#78909C",500:"#607D8B",600:"#546E7A",700:"#455A64",800:"#37474F",900:"#263238"}}}),d=(n(142),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function f(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E=n(6),p=n.n(E),h=n(33),F=n(62),g=n(63),C=n(72),v=n(64),b=n(73),w=Object(a.createContext)(),B=function(e,t){for(var n=[],a=[],r=0;r<t;r+=1)a.push(!1);for(var o=0;o<e;o+=1)n.push([].concat(a));return n},y=function(e,t,n){return e.map(function(a,r){return a.map(function(a,o){return function(e,t,n,a,r){var o=n[e][t],i=[e-1,e,e+1].filter(function(e){return e>=0&&e<a}),l=[t-1,t,t+1].filter(function(e){return e>=0&&e<r}),c=0;return i.forEach(function(a){l.forEach(function(r){a===e?r!==t&&!0===n[a][r]&&(c+=1):!0===n[a][r]&&(c+=1)})}),!o&&3===c||o&&(2===c||3===c)}(r,o,e,t,n)})})},A=function(e){return e.reduce(function(e,t){return e+t.filter(function(e){return!0===e}).length},0)},S=function(e){function t(e){var n;return Object(F.a)(this,t),(n=Object(C.a)(this,Object(v.a)(t).call(this,e))).randomGame=function(){var e=n.state.gameState.map(function(e){return e.map(function(e){return[!0,!1][Math.floor(2*Math.random())]})});n.setGameState(e)},n.nextGameState=function(){n.timeout=setTimeout(function(){var e=n.state,t=e.gameState,a=e.numRows,r=e.numCols,o=y(t,a,r);n.setState(Object(h.a)({},n.state,{generation:n.state.generation+1,population:A(o),isRunning:!0,gameState:o}),n.nextGameState)},10)},n.next=function(){var e=n.state,t=e.gameState,a=e.numRows,r=e.numCols,o=y(t,a,r);n.setState(Object(h.a)({},n.state,{population:A(o),generation:n.state.generation+1,gameState:o}))},n.play=function(){n.nextGameState()},n.stop=function(){clearTimeout(n.timeout),n.setState({isRunning:!1})},n.clear=function(){var e=n.state,t=e.numRows,a=e.numCols;n.setGameState(B(t,a),0)},n.setGameState=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=null===t?n.state.generation:t;return n.setState(Object(h.a)({},n.state,{generation:a,population:A(e),gameState:e})),e},n.editGameState=function(e,t,a){var r=n.state.gameState;r[e][t]=!a,n.setGameState(r)},n.state={numRows:e.numRows,generation:0,population:0,numCols:e.numCols,gameState:B(e.numRows,e.numCols),isRunning:!1},n}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(w.Provider,{value:{editGameState:this.editGameState,next:this.next,play:this.play,stop:this.stop,clear:this.clear,randomGame:this.randomGame,cellSize:(this.props.numRows,this.props.numberCols,18),boardWidth:(t=this.props.numCols,this.props.numRows,Math.round(19)*t),boardHeight:(e=this.props.numRows,Math.round(19)*e),gameState:this.state.gameState,isRunning:this.state.isRunning,generation:this.state.generation,population:this.state.population}},this.props.children);var e,t}}]),t}(a.Component),D=Object(u.withStyles)(function(e){return{border:{borderTop:"1px solid black",borderLeft:"1px solid black"},dead:{backgroundColor:"#eee","&:hover":{backgroundColor:e.palette.orange[200]}},alive:{backgroundColor:e.palette.orange[400]}}},{withTheme:!0})(function(e){var t=e.alive,n=e.classes,a=e.posX,o=e.posY;return r.a.createElement(w.Consumer,null,function(e){return r.a.createElement("div",{style:{width:"".concat(e.cellSize,"px"),height:"".concat(e.cellSize,"px")},onMouseUp:function(){return e.editGameState(a,o,t)},className:p()(n.border,n.cellSize,!0===t?n.alive:n.dead)})})}),x=Object(u.withStyles)(function(e){return{cellsContainer:{borderRight:"1px solid black",borderBottom:"1px solid black",display:"flex",flexWrap:"wrap"}}},{withTheme:!0})(function(e){var t=e.classes;return r.a.createElement(w.Consumer,null,function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:t.cellsContainer,style:{width:"".concat(e.boardWidth,"px"),height:"".concat(e.boardHeight,"px")}},e.gameState.map(function(e,t){return e.map(function(e,n){return r.a.createElement(D,{key:Math.random(),alive:e,posX:t,posY:n})})})))})}),R=n(65),k=n.n(R),j=n(18),G=n.n(j),O=Object(u.withStyles)(function(e){return{height:{height:"5%",padding:"5px"},font:{fontFamily:"Josefin Sans, sans-serif"}}},{theme:!0})(function(e){var t=e.classes;return r.a.createElement(k.a,{className:p()(t.height)},r.a.createElement(G.a,{className:p()(t.font),variant:"h4",align:"center",color:"secondary"},"Game of Life"))}),T=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(O,null),e.children)},N=n(21),W=n.n(N),M=n(66),P=n.n(M),z=n(68),L=n.n(z),U=n(69),J=n.n(U),H=n(70),X=n.n(H),Y=n(67),I=n.n(Y),V=Object(u.withStyles)(function(e){return{}},{withTheme:!0})(function(e){return r.a.createElement(w.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement(W.a,{disabled:e.isRunning,onClick:e.play},r.a.createElement(P.a,{color:e.isRunning?"disabled":"primary"})),r.a.createElement(W.a,{disabled:e.isRunning,onClick:e.next},r.a.createElement(I.a,{color:e.isRunning?"disabled":"primary"})),r.a.createElement(W.a,{disabled:!e.isRunning,onClick:function(){return e.stop(e.idTimeout)}},r.a.createElement(L.a,{color:e.isRunning?"primary":"disabled"})),r.a.createElement(W.a,{disabled:e.isRunning,color:"primary",onClick:e.randomGame},r.a.createElement(J.a,{color:e.isRunning?"disabled":"primary"})),r.a.createElement(W.a,{disabled:e.isRunning,color:"primary",onClick:e.clear},r.a.createElement(X.a,{color:e.isRunning?"disabled":"primary"})))})}),$=Object(u.withStyles)(function(e){return{flex:{display:"flex",justifyContent:"flex-end"},margin:{marginRight:".5rem"}}},{withTheme:!0})(function(e){var t=e.classes;return r.a.createElement(w.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:t.flex},r.a.createElement(G.a,{color:"primary",variant:"h6",className:p()(t.margin)},"Generaci\xf3n:"),r.a.createElement(G.a,{variant:"h6"},e.generation)),r.a.createElement("div",{className:t.flex},r.a.createElement(G.a,{color:"primary",variant:"h6",className:p()(t.margin)},"Poblaci\xf3n:"),r.a.createElement(G.a,{variant:"h6"},e.population)))})}),q=Object(u.withStyles)(function(e){return{main:{display:"flex",flexDirection:"column",marginTop:"4%"},flex:{display:"flex",justifyContent:"center"},container:{marginTop:"5%"}}},{withTheme:!0})(function(e){var t=e.classes;return r.a.createElement(S,{numRows:35,numCols:50},r.a.createElement(T,null,r.a.createElement(w.Consumer,null,function(e){return r.a.createElement("div",{className:t.flex},r.a.createElement("div",{className:t.main},r.a.createElement(V,null),r.a.createElement(x,null),r.a.createElement($,null)))})))});i.a.render(r.a.createElement(l.a,{basename:"/"},r.a.createElement(u.MuiThemeProvider,{theme:m},r.a.createElement(c.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:q})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-game-of-life",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-game-of-life","/service-worker.js");d?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):f(t,e)})}}()},74:function(e,t,n){e.exports=n(175)}},[[74,1,2]]]);
//# sourceMappingURL=main.924435bd.chunk.js.map