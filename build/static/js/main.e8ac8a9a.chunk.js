(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,c){},141:function(e,c){},159:function(e,c,t){},160:function(e,c,t){},162:function(e,c,t){},166:function(e,c,t){},167:function(e,c,t){},168:function(e,c,t){},169:function(e,c,t){},170:function(e,c,t){},171:function(e,c,t){},172:function(e,c,t){"use strict";t.r(c);var s=t(0),i=t(9),n=t.n(i),r=t(27),a=t(212),l=t(207),j=t(202),o=t(205),d=t(173),b=t(25),h=t(91),x=t(60),O=t.n(x),f=t(1),u=Object(s.createContext)(),m=Object(h.io)("https://warm-wildwood-81069.herokuapp.com"),g=function(e){var c=e.children,t=Object(s.useState)(!1),i=Object(b.a)(t,2),n=i[0],r=i[1],a=Object(s.useState)(!1),l=Object(b.a)(a,2),j=l[0],o=l[1],d=Object(s.useState)(),h=Object(b.a)(d,2),x=h[0],g=h[1],v=Object(s.useState)(""),p=Object(b.a)(v,2),w=p[0],y=p[1],k=Object(s.useState)({}),C=Object(b.a)(k,2),S=C[0],N=C[1],D=Object(s.useState)(""),E=Object(b.a)(D,2),M=E[0],I=E[1],_=Object(s.useRef)(),A=Object(s.useRef)(),W=Object(s.useRef)();Object(s.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){g(e),_.current.srcObject=e})),m.on("me",(function(e){return I(e)})),m.on("callUser",(function(e){var c=e.from,t=e.name,s=e.signal;N({isReceivingCall:!0,from:c,name:t,signal:s})}))}),[]);return Object(f.jsx)(u.Provider,{value:{call:S,callAccepted:n,myVideo:_,userVideo:A,stream:x,name:w,setName:y,callEnded:j,me:M,callUser:function(e){var c=new O.a({initiator:!0,trickle:!1,stream:x});c.on("signal",(function(c){m.emit("callUser",{userToCall:e,signalData:c,from:M,name:w})})),c.on("stream",(function(e){A.current.srcObject=e})),m.on("callAccepted",(function(e){r(!0),c.signal(e)})),W.current=c},leaveCall:function(){o(!0),W.current.destroy(),window.location.reload()},answerCall:function(){r(!0);var e=new O.a({initiator:!1,trickle:!1,stream:x});e.on("signal",(function(e){m.emit("answerCall",{signal:e,to:S.from})})),e.on("stream",(function(e){A.current.srcObject=e})),e.signal(S.signal),W.current=e}},children:c})},v=Object(j.a)((function(e){return{video:Object(r.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(r.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}})),p=function(){var e=Object(s.useContext)(u),c=e.name,t=e.callAccepted,i=e.myVideo,n=e.userVideo,r=e.callEnded,a=e.stream,j=e.call,b=v();return Object(f.jsxs)(o.a,{container:!0,className:b.gridContainer,children:[a&&Object(f.jsx)(d.a,{className:b.paper,children:Object(f.jsxs)(o.a,{item:!0,xs:12,md:6,children:[Object(f.jsx)(l.a,{variant:"h5",gutterBottom:!0,children:c||"Name"}),Object(f.jsx)("video",{playsInline:!0,muted:!0,ref:i,autoPlay:!0,className:b.video})]})}),t&&!r&&Object(f.jsx)(d.a,{className:b.paper,children:Object(f.jsxs)(o.a,{item:!0,xs:12,md:6,children:[Object(f.jsx)(l.a,{variant:"h5",gutterBottom:!0,children:j.name||"Name"}),Object(f.jsx)("video",{playsInline:!0,ref:n,autoPlay:!0,className:b.video})]})})]})},w=t(208),y=t(213),k=t(214),C=t(96),S=t(209),N=t(210),D=t(211),E=Object(j.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(r.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(r.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),M=function(e){var c=e.children,t=Object(s.useContext)(u),i=t.me,n=t.callAccepted,r=t.name,a=t.setName,j=t.callEnded,h=t.leaveCall,x=t.callUser,O=Object(s.useState)(""),m=Object(b.a)(O,2),g=m[0],v=m[1],p=E();return Object(f.jsx)(w.a,{className:p.container,children:Object(f.jsxs)(d.a,{elevation:10,className:p.paper,children:[Object(f.jsx)("form",{className:p.root,noValidate:!0,autoComplete:"off",children:Object(f.jsxs)(o.a,{container:!0,className:p.gridContainer,children:[Object(f.jsxs)(o.a,{item:!0,xs:12,md:6,className:p.padding,children:[Object(f.jsx)(l.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(f.jsx)(y.a,{label:"Name",value:r,onChange:function(e){return a(e.target.value)},fullWidth:!0}),Object(f.jsx)(C.CopyToClipboard,{text:i,className:p.margin,children:Object(f.jsx)(k.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(f.jsx)(S.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(f.jsxs)(o.a,{item:!0,xs:12,md:6,className:p.padding,children:[Object(f.jsx)(l.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(f.jsx)(y.a,{label:"ID to call",value:g,onChange:function(e){return v(e.target.value)},fullWidth:!0}),n&&!j?Object(f.jsx)(k.a,{variant:"contained",color:"secondary",startIcon:Object(f.jsx)(N.a,{fontSize:"large"}),fullWidth:!0,onClick:h,className:p.margin,children:"Hang Up"}):Object(f.jsx)(k.a,{variant:"contained",color:"primary",startIcon:Object(f.jsx)(D.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return x(g)},className:p.margin,children:"Call"})]})]})}),c]})})},I=function(){var e=Object(s.useContext)(u),c=e.answerCall,t=e.call,i=e.callAccepted;return Object(f.jsx)(f.Fragment,{children:t.isReceivingCall&&!i&&Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(f.jsxs)("h1",{children:[t.name," is calling:"]}),Object(f.jsx)(k.a,{variant:"contained",color:"primary",onClick:c,children:"Answer"})]})})},_=Object(j.a)((function(e){return{appBar:Object(r.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),A=function(){var e=_();return Object(f.jsxs)("div",{className:e.wrapper,children:[Object(f.jsx)(a.a,{className:e.appBar,position:"static",color:"inherit",children:Object(f.jsx)(l.a,{variant:"h2",align:"center",children:"Video Chat"})}),Object(f.jsx)(p,{}),Object(f.jsx)(M,{children:Object(f.jsx)(I,{})})]})};var W=function(){return Object(f.jsx)(g,{children:Object(f.jsx)(A,{})})};t(159),t(160),t(161);var F=function(e){var c={backgroundColor:e.bgcolor,color:e.color,borderColor:e.bordercolor};return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"box bg-3",children:Object(f.jsxs)("button",{className:"button button--wapasha button--round-l button--text-thick button--inverted",style:c,children:[" ",e.message]})})})},P=(t(162),t(43));window.addEventListener("scroll",(function(){document.querySelector("header").classList.toggle("sticky",window.scrollY>0)}));var R=function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("header",{class:"header",children:[Object(f.jsxs)("a",{href:"#",class:"logo",children:[" ",Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png"}),"\xa0Microsoft "]}),Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsxs)("a",{class:"nav-link nav-link-ltr",href:"#",children:["Products   ",Object(f.jsx)("i",{class:"fa fa-caret-down"})]})}),Object(f.jsx)("li",{children:Object(f.jsxs)("a",{class:"nav-link nav-link-ltr",href:"#",children:["Solutions   ",Object(f.jsx)("i",{class:"fa fa-caret-down"})]})}),Object(f.jsx)("li",{children:Object(f.jsxs)("a",{class:"nav-link nav-link-ltr",href:"#",children:["Resources   ",Object(f.jsx)("i",{class:"fa fa-caret-down"})]})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{class:"nav-link nav-link-ltr",href:"#",children:"Pricing"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{class:"nav-link nav-link-ltr",href:"#",children:"Download Teams"})}),Object(f.jsxs)("li",{children:[" ",Object(f.jsxs)(P.b,{to:"/Video",children:["   ",Object(f.jsx)(F,{message:"Start for free"})," "]})," "]})]})})]}),Object(f.jsx)("section",{class:"banner"})]})},B=(t(166),t.p+"static/media/image2.7f21faff.gif");var T=function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{class:"cover",children:[Object(f.jsxs)("div",{class:"alignleft",children:["One app for ",Object(f.jsx)("br",{}),"  everything.  And ",Object(f.jsx)("br",{})," everyone."]}),Object(f.jsxs)("div",{class:"alignright",children:["\u2003 Calling, meetings, messaging, and",Object(f.jsx)("br",{}),"\u2003  events in the cloud for teams of all \u2003 \xa0 \xa0\xa0\u2003 \xa0 \u2003 \xa0  ",Object(f.jsx)("br",{}),"\u2003 sizes.",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),Object(f.jsx)(F,{message:"Start for free \u2192",bgcolor:"#078855",color:"white"}),Object(f.jsx)(F,{message:"Contact Us \u2192",bgcolor:"black",color:"white",bordercolor:"white"})]}),Object(f.jsx)("br",{})]}),Object(f.jsx)("div",{class:"bottom",children:Object(f.jsx)("img",{height:"290px",widhth:"290px",src:B})})]})};t(167);var H=function(){return Object(f.jsx)("div",{className:"main",children:Object(f.jsxs)("div",{className:"main2",children:[Object(f.jsx)("div",{class:"headingone",children:"Working better, together."}),Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"  Trusted by 85% of Fortune 500 companies."})}),Object(f.jsx)("div",{className:"feat",children:Object(f.jsxs)("div",{class:"container0",children:[Object(f.jsxs)("div",{class:"card0",children:[Object(f.jsx)("div",{class:"face face1",children:Object(f.jsxs)("div",{class:"content",children:[Object(f.jsx)("img",{src:"https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"}),Object(f.jsx)("h3",{children:"Flexible"})]})}),Object(f.jsx)("div",{class:"face face2",children:Object(f.jsx)("div",{class:"content",children:Object(f.jsx)("p",{children:"Adaptable for any workstyle, role, or device so you can choose when, where, and how you work."})})})]}),Object(f.jsxs)("div",{class:"card0",children:[Object(f.jsx)("div",{class:"face face1",children:Object(f.jsxs)("div",{class:"content",children:[Object(f.jsx)("img",{src:"https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"}),Object(f.jsx)("h3",{children:"Inclusive"})]})}),Object(f.jsx)("div",{class:"face face2",children:Object(f.jsx)("div",{class:"content",children:Object(f.jsx)("p",{children:"Equal experiences for everyone regardless of geography, language, or communication style."})})})]}),Object(f.jsxs)("div",{class:"card0",children:[Object(f.jsx)("div",{class:"face face1",children:Object(f.jsxs)("div",{class:"content",children:[Object(f.jsx)("img",{src:"https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"}),Object(f.jsx)("h3",{children:"Secure"})]})}),Object(f.jsx)("div",{class:"face face2",children:Object(f.jsx)("div",{class:"content",children:Object(f.jsx)("p",{children:"Secure by design, private by default, to defend against threats no matter where you're working."})})})]})]})})]})})},V=(t(90),t.p+"static/media/img3.bc829a2e.gif");var U=function(){return Object(f.jsxs)("div",{className:"vcf",children:[Object(f.jsxs)("div",{class:"vcfleft",children:[Object(f.jsx)("div",{class:"subhead",children:"Meet"}),Object(f.jsxs)("div",{class:"subhead2",children:["Instantly go from group chat to video conference ",Object(f.jsx)("br",{}),"with the touch of a button. ",Object(f.jsx)("br",{}),"Teams of two or 10,000 can meet ",Object(f.jsx)("br",{}),"in one place from anywhere."]}),Object(f.jsxs)("div",{class:"but",children:["  ",Object(f.jsx)(F,{message:"Start for free \u2192",bgcolor:"#078855",color:"white"})," "]})]}),Object(f.jsx)("div",{class:"vcfright",children:Object(f.jsx)("img",{height:"300px",widhth:"500px",src:V})})]})};t(168);var J=function(){return Object(f.jsxs)("div",{class:"footer header",children:[Object(f.jsxs)("div",{class:"content",children:[Object(f.jsxs)("div",{class:"top",children:[Object(f.jsx)("div",{class:"logo-details",children:Object(f.jsxs)("span",{class:"logo_name",children:[" ",Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png"})," MICROSOFT"]})}),Object(f.jsxs)("div",{class:"media-icons",children:[Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{class:"fab fa-facebook-f"})}),Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{class:"fab fa-twitter"})}),Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{class:"fab fa-instagram"})}),Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{class:"fab fa-youtube"})})]})]}),Object(f.jsxs)("div",{class:"link-boxes",children:[Object(f.jsxs)("ul",{class:"box",children:[Object(f.jsx)("li",{class:"link_name",children:"Small Business"}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Pricing"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Microsoft App "})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:" Meetings"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Calling"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Messaging"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Screen Sharing"})})]}),Object(f.jsxs)("ul",{class:"box",children:[Object(f.jsx)("li",{class:"link_name",children:" Enterprise"}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:" Microsoft Suite"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Calling "})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:" Meetings"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Messaging"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Slido"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Events"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Contact Center"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Experience Management"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"imimobile"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Security"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Control Hub"})})]}),Object(f.jsxs)("ul",{class:"box",children:[Object(f.jsx)("li",{class:"link_name",children:"Devices"}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Headsets"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Cameras"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Desk Series"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Room Series"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Board Series"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Phone Series"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Accessories"})})]}),Object(f.jsxs)("ul",{class:"box",children:[Object(f.jsx)("li",{class:"link_name",children:"Solutions For"}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Education"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Healthcare"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Financial Services"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Government"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Startups"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Sports & Entertainment"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Hybrid Work"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Future of Work"})})]}),Object(f.jsxs)("ul",{class:"box",children:[Object(f.jsx)("li",{class:"link_name",children:"Resources"}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Downloads"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Help Center"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Join a Test Meeting"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Online Classes"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Integrations"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Accessibility"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Inclusivity"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Webinars, Events & Demos"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Webex Community"})})]}),Object(f.jsxs)("ul",{class:"box input-box",children:[Object(f.jsx)("li",{class:"link_name",children:"Subscribe"}),Object(f.jsx)("li",{children:Object(f.jsx)("input",{type:"text",placeholder:"Enter your email"})}),Object(f.jsx)("li",{children:Object(f.jsx)("input",{type:"button",value:"Subscribe"})})]})]})]}),Object(f.jsx)("div",{class:"bottom-details",children:Object(f.jsxs)("div",{class:"bottom_text",children:[Object(f.jsxs)("span",{class:"copyright_text",children:["Copyright \xa9 2021 ",Object(f.jsx)("a",{href:"#",children:"MICROSOFT."}),"All rights reserved"]}),Object(f.jsxs)("span",{class:"policy_terms",children:[Object(f.jsx)("a",{href:"#",children:"Privacy policy"}),Object(f.jsx)("a",{href:"#",children:"Terms & condition"})]})]})})]})};t(169);var z=function(){return Object(f.jsxs)("div",{className:"chat",children:[Object(f.jsx)("div",{class:"chatleft",children:Object(f.jsx)("img",{height:"450px",width:"600px",src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/37910iECF8BE514DF43D84?v=v2"})}),Object(f.jsxs)("div",{class:"chatright",children:[Object(f.jsx)("div",{class:"subhead",children:"Chat"}),Object(f.jsxs)("div",{class:"subhead2 ",children:["Share your opinion and ",Object(f.jsx)("br",{}),"have fun with your team. ",Object(f.jsx)("br",{}),"Send GIFs, stickers, and emojis ",Object(f.jsx)("br",{})," in a group chat or in",Object(f.jsx)("br",{})," one-to-one messages."]}),Object(f.jsxs)("div",{class:"but2",children:["  ",Object(f.jsx)(F,{message:"Start for free \u2192",bgcolor:"white",color:"black"})," "]})]}),Object(f.jsx)("br",{})]})};t(170);var q=function(){return Object(f.jsxs)("div",{className:"vcf",children:[Object(f.jsxs)("div",{class:"vcfleft",children:[Object(f.jsx)("div",{class:"subhead",children:"Planner"}),Object(f.jsxs)("div",{class:"subhead2",children:["Organise your work with ",Object(f.jsx)("br",{})," Microsoft Planner, ",Object(f.jsx)("br",{}),"the only task management software you need."]}),Object(f.jsxs)("div",{class:"but",children:["  ",Object(f.jsx)(F,{message:"Start for free \u2192",bgcolor:"#078855",color:"white"})," "]})]}),Object(f.jsx)("div",{class:"vcright",children:Object(f.jsx)("img",{height:"450px",width:"600px",src:"https://cdn.vox-cdn.com/thumbor/ylrhiKdhjqXUCPSGS34zVyN3Va4=/0x0:1792x1162/1200x800/filters:focal(319x195:605x481)/cdn.vox-cdn.com/uploads/chorus_image/image/54341261/desktop.0.jpg"})})]})};var G=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(R,{}),Object(f.jsx)("br",{}),Object(f.jsx)(T,{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(H,{}),Object(f.jsx)(U,{}),Object(f.jsx)(z,{}),Object(f.jsx)(q,{}),Object(f.jsx)(J,{})]})},L=t(11);var Y=function(){return Object(f.jsxs)("div",{class:"App",children:[Object(f.jsx)(L.a,{exact:!0,path:"/",component:G}),Object(f.jsx)(L.a,{exact:!0,path:"/video",component:W})]})};t(171);n.a.render(Object(f.jsx)(P.a,{children:Object(f.jsx)(Y,{})}),document.getElementById("root"))},90:function(e,c,t){}},[[172,1,2]]]);
//# sourceMappingURL=main.e8ac8a9a.chunk.js.map