(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(2),o=n.n(r),s=(n(13),n(3)),l=n(4),m=n(6),c=n(5),h=n(7),u=function(e){var a=e.name,n=e.email,t=e.id;return i.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow"},i.a.createElement("img",{src:"https://robohash.org/".concat(t,"?w=100&h=100"),alt:"robot"}),i.a.createElement("div",null,i.a.createElement("h2",null," ",a," "),i.a.createElement("p",null," ",n," ")))},d=function(e){var a=e.robots;return i.a.createElement("div",null,a.map((function(e,n){return i.a.createElement(u,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},b=function(e){e.searchfield;var a=e.searchChange;return i.a.createElement("div",{className:"pa2"},i.a.createElement("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))},v=[{id:1,name:"Rashid Makki",username:"rashidmakki",email:"sincere@april.biz"},{id:2,name:"Arbab Qutub",username:"arbab123",email:"arbab@li.tv"},{id:3,name:"Aijaz Saleem",username:"aijaz_saleem",email:"aijaz_123@yesenia.net"},{id:4,name:"Mohd Zaid ",username:"Zaidi",email:"mohdzaid@april.biz"},{id:5,name:"Ariz Hayat",username:"hayat_ariz",email:"ariz_54@li.tv"},{id:6,name:"Subash Singh",username:"subash_rockz",email:"subash@yesenia.net"},{id:7,name:"Sourabh Tiwari",username:"sourabh_tiwari",email:"sourabh@april.biz"},{id:8,name:"Rohit Rana",username:"rohit@rana",email:"rohit123@li.tv"},{id:9,name:"Nishant Chauhan",username:"nishi",email:"nishi_rocks@li.tv"},{id:10,name:"Vikas Kumar",username:"vikas",email:"vikas@april.biz"},{id:11,name:"Shivam Singh ",username:"shivam",email:"shivam@net.biz"}],f=function(e){return console.log(e),i.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"}},e.children)},g=(n(14),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(c.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({robots:v})}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?i.a.createElement("div",{className:"tc"},i.a.createElement("h1",{className:"f1"},"Robofriends"),i.a.createElement(b,{searchChange:this.onSearchChange}),i.a.createElement(f,null,i.a.createElement(d,{robots:t}))):i.a.createElement("h1",null," Loading...")}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.ba074903.chunk.js.map