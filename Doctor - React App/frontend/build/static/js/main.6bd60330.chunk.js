(this.webpackJsonpdoctor=this.webpackJsonpdoctor||[]).push([[0],{109:function(e,t,a){e.exports=a(199)},193:function(e,t,a){e.exports=a.p+"static/media/stethoscope.6a3e12e3.svg"},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),s=a(22),o=a(11),m=a(2),i=a(6),u=a.n(i),d=function(){return l.a.createElement(m.m,{className:"main-navbar__search w-100 d-none d-md-flex d-lg-flex"},l.a.createElement(m.r,{seamless:!0,className:"ml-3"},l.a.createElement(m.s,{type:"prepend"},l.a.createElement(m.t,null,l.a.createElement("i",{className:"material-icons"},"search"))),l.a.createElement(m.o,{className:"navbar-search",placeholder:"Search for something..."})))},E=a(14),p=a(15),h=a(12),b=a(17),f=a(16),g=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={visible:!1},n.toggleNotifications=n.toggleNotifications.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"toggleNotifications",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){return l.a.createElement(m.x,{className:"border-right dropdown notifications"},l.a.createElement(m.y,{className:"nav-link-icon text-center",onClick:this.toggleNotifications},l.a.createElement("div",{className:"nav-link-icon__wrapper"},l.a.createElement("i",{className:"material-icons"},"\ue7f4"),l.a.createElement(m.a,{pill:!0,theme:"danger"},"2"))),l.a.createElement(m.g,{open:this.state.visible,className:"dropdown-menu dropdown-menu-small"},l.a.createElement(m.j,null,l.a.createElement("div",{className:"notification__icon-wrapper"},l.a.createElement("div",{className:"notification__icon"},l.a.createElement("i",{className:"material-icons"},"\ue6e1"))),l.a.createElement("div",{className:"notification__content"},l.a.createElement("span",{className:"notification__category"},"Analytics"),l.a.createElement("p",null,"Your website\u2019s active patients count increased by"," ",l.a.createElement("span",{className:"text-success text-semibold"},"28%")," in the last week. Great job!"))),l.a.createElement(m.j,null,l.a.createElement("div",{className:"notification__icon-wrapper"},l.a.createElement("div",{className:"notification__icon"},l.a.createElement("i",{className:"material-icons"},"\ue8d1"))),l.a.createElement("div",{className:"notification__content"},l.a.createElement("span",{className:"notification__category"},"Critical"),l.a.createElement("p",null,"Last week your response time decreased by"," ",l.a.createElement("span",{className:"text-danger text-semibold"},"5.52%"),". It could have been worse!"))),l.a.createElement(m.j,{className:"notification__all text-center"},"View all Notifications")))}}]),a}(l.a.Component),v=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(E.a)(this,n),(a=t.call(this,e)).state={visible:!1},a.toggleUserActions=a.toggleUserActions.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"toggleUserActions",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){return l.a.createElement(m.x,{tag:m.i,caret:!0,toggle:this.toggleUserActions},l.a.createElement(m.l,{caret:!0,tag:m.y,className:"text-nowrap px-3"},l.a.createElement("img",{className:"user-avatar rounded-circle mr-2",src:a(95),alt:"User Avatar"})," ",l.a.createElement("span",{className:"d-none d-md-inline-block"},"Vivek Kumar Singh")),l.a.createElement(m.g,{tag:m.k,right:!0,small:!0,open:this.state.visible},l.a.createElement(m.j,{tag:s.b,to:"user-profile"},l.a.createElement("i",{className:"material-icons"},"\ue8b8")," Edit Profile"),l.a.createElement(m.j,{tag:s.b,to:"file-manager-list"},l.a.createElement("i",{className:"material-icons"},"\ue2c7")," My Patients"),l.a.createElement(m.j,{tag:s.b,to:"transaction-history"},l.a.createElement("i",{className:"material-icons"},"\ue896")," Transactions"),l.a.createElement(m.j,{divider:!0}),l.a.createElement(m.j,{tag:s.b,to:"/",className:"text-danger"},l.a.createElement("i",{className:"material-icons text-danger"},"\ue879")," Logout")))}}]),n}(l.a.Component),N=function(){return l.a.createElement(m.w,{navbar:!0,className:"border-left flex-row"},l.a.createElement(g,null),l.a.createElement(v,null))},y="CHANGE",C="TOGGLE_SIDEBAR",k=new(a(101).Dispatcher),O=a(102),_={menuVisible:!1,navItems:[{title:"Dashboard",to:"/dashboard",htmlBefore:'<i class="material-icons">dashboard</i>',htmlAfter:""},{title:"Messages",htmlBefore:'<i class="material-icons">chat</i>',to:"/messages"},{title:"Profile",htmlBefore:'<i class="material-icons">person</i>',to:"/user-profile"}]},j=new(function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(E.a)(this,a),(e=t.call(this)).registerToActions=e.registerToActions.bind(Object(h.a)(e)),e.toggleSidebar=e.toggleSidebar.bind(Object(h.a)(e)),k.register(e.registerToActions.bind(Object(h.a)(e))),e}return Object(p.a)(a,[{key:"registerToActions",value:function(e){var t=e.actionType;e.payload;switch(t){case C:this.toggleSidebar()}}},{key:"toggleSidebar",value:function(){_.menuVisible=!_.menuVisible,this.emit(y)}},{key:"getMenuState",value:function(){return _.menuVisible}},{key:"getSidebarItems",value:function(){return _.navItems}},{key:"addChangeListener",value:function(e){this.on(y,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(y,e)}}]),a}(O.EventEmitter)),S=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"handleClick",value:function(){k.dispatch({actionType:C})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"nav"},l.a.createElement("a",{href:"#",onClick:this.handleClick,className:"nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"},l.a.createElement("i",{className:"material-icons"},"\ue5d2")))}}]),a}(l.a.Component),x=function(e){e.layout;var t=e.stickyTop,a=u()("main-navbar","bg-white",t&&"sticky-top");return l.a.createElement("div",{className:a},l.a.createElement(m.h,{className:"p-0"},l.a.createElement(m.z,{type:"light",className:"align-items-stretch flex-md-nowrap p-0"},l.a.createElement(d,null),l.a.createElement(N,null),l.a.createElement(S,null))))};x.defaultProps={stickyTop:!0};var w=x,T=a(34),A=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(E.a)(this,n),(a=t.call(this,e)).handleToggleSidebar=a.handleToggleSidebar.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"handleToggleSidebar",value:function(){k.dispatch({actionType:C})}},{key:"render",value:function(){var e=this.props.hideLogoText;return l.a.createElement("div",{className:"main-navbar"},l.a.createElement(m.z,{className:"align-items-stretch bg-white flex-md-nowrap border-bottom p-0",type:"light"},l.a.createElement(m.A,{className:"w-100 mr-0",href:"#",style:{lineHeight:"25px"}},l.a.createElement("div",{className:"d-table m-auto"},l.a.createElement("img",{id:"main-logo",className:"d-inline-block align-top mr-1",style:{maxWidth:"25px"},src:a(193),alt:"Chikitsak Dashboard"}),!e&&l.a.createElement("span",{className:"d-none d-md-inline ml-1"},"Chikitsak"))),l.a.createElement("a",{className:"toggle-sidebar d-sm-inline d-md-none d-lg-none",onClick:this.handleToggleSidebar},l.a.createElement("i",{className:"material-icons"},"\ue5c4"))))}}]),n}(l.a.Component);A.defaultProps={hideLogoText:!1};var P=A,D=function(){return l.a.createElement(m.m,{className:"main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none",style:{display:"flex",minHeight:"45px"}},l.a.createElement(m.r,{seamless:!0,className:"ml-3"},l.a.createElement(m.s,{type:"prepend"},l.a.createElement(m.t,null,l.a.createElement("i",{className:"material-icons"},"search")),l.a.createElement(m.o,{className:"navbar-search",placeholder:"Search for something...","aria-label":"Search"}))))},L=function(e){var t=e.item;return l.a.createElement(m.x,null,l.a.createElement(m.y,{tag:s.c,to:t.to},t.htmlBefore&&l.a.createElement("div",{className:"d-inline-block item-icon-wrapper",dangerouslySetInnerHTML:{__html:t.htmlBefore}}),t.title&&l.a.createElement("span",null,t.title),t.htmlAfter&&l.a.createElement("div",{className:"d-inline-block item-icon-wrapper",dangerouslySetInnerHTML:{__html:t.htmlAfter}})))},I=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={navItems:j.getSidebarItems()},n.onChange=n.onChange.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"componentWillMount",value:function(){j.addChangeListener(this.onChange)}},{key:"componentWillUnmount",value:function(){j.removeChangeListener(this.onChange)}},{key:"onChange",value:function(){this.setState(Object(T.a)(Object(T.a)({},this.state),{},{navItems:j.getSidebarItems()}))}},{key:"render",value:function(){var e=this.state.navItems;return l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(m.w,{className:"nav--no-borders flex-column"},e.map((function(e,t){return l.a.createElement(L,{key:t,item:e})}))))}}]),a}(l.a.Component),V=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={menuVisible:!1,sidebarNavItems:j.getSidebarItems()},n.onChange=n.onChange.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"componentWillMount",value:function(){j.addChangeListener(this.onChange)}},{key:"componentWillUnmount",value:function(){j.removeChangeListener(this.onChange)}},{key:"onChange",value:function(){this.setState(Object(T.a)(Object(T.a)({},this.state),{},{menuVisible:j.getMenuState(),sidebarNavItems:j.getSidebarItems()}))}},{key:"render",value:function(){var e=u()("main-sidebar","px-0","col-12",this.state.menuVisible&&"open");return l.a.createElement(m.f,{tag:"aside",className:e,lg:{size:2},md:{size:3}},l.a.createElement(P,{hideLogoText:this.props.hideLogoText}),l.a.createElement(D,null),l.a.createElement(I,null))}}]),a}(l.a.Component);V.defaultProps={hideLogoText:!1};var H=V,F=function(e){var t=e.contained,a=e.menuItems,n=e.copyright;return l.a.createElement("footer",{className:"main-footer d-flex p-2 px-3 bg-white border-top"},l.a.createElement(m.h,{fluid:t},l.a.createElement(m.C,null,l.a.createElement(m.w,null,a.map((function(e,t){return l.a.createElement(m.x,{key:t},l.a.createElement(m.y,{tag:s.b,to:e.to},e.title))}))),l.a.createElement("span",{className:"copyright ml-auto my-auto mr-2"},n))))};F.defaultProps={contained:!1,copyright:"Made With \u2661 By Team Chikitsak",menuItems:[{title:"Home",to:"#"},{title:"About Us",to:"#"},{title:"Microsoft Azure",to:"#"},{title:"Serverless",to:"#"},{title:"Hire Us?",to:"#"}]};var M=F,U=function(e){var t=e.children,a=e.noNavbar,n=e.noFooter;return l.a.createElement(m.h,{fluid:!0},l.a.createElement(m.C,null,l.a.createElement(H,null),l.a.createElement(m.f,{className:"main-content p-0",lg:{size:10,offset:2},md:{size:9,offset:3},sm:"12",tag:"main"},!a&&l.a.createElement(w,null),t,!n&&l.a.createElement(M,null))))};U.defaultProps={noNavbar:!1,noFooter:!1};var W=U,B=a(106),R=function(e){var t=e.title,a=e.subtitle,n=e.className,r=Object(B.a)(e,["title","subtitle","className"]),c=u()(n,"text-center","text-md-left","mb-sm-0");return l.a.createElement(m.f,Object.assign({xs:"12",sm:"4",className:c},r),l.a.createElement("span",{className:"text-uppercase page-subtitle"},a),l.a.createElement("h3",{className:"page-title"},t))},K=function(){return l.a.createElement(m.h,{fluid:!0,className:"main-content-container px-4"},l.a.createElement(m.C,{noGutters:!0,className:"page-header py-4"},l.a.createElement(R,{sm:"4",title:"Live Cases",subtitle:"Cases Now",className:"text-sm-left"})),l.a.createElement(m.C,null,l.a.createElement(m.f,null,l.a.createElement(m.c,{small:!0,className:"mb-4"},l.a.createElement(m.e,{className:"border-bottom"}),l.a.createElement(m.d,{className:"p-0 pb-3"},l.a.createElement("table",{className:"table mb-0"},l.a.createElement("thead",{className:"bg-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",className:"border-0"},"PID"),l.a.createElement("th",{scope:"col",className:"border-0"},"Name"),l.a.createElement("th",{scope:"col",className:"border-0"},"Sex"),l.a.createElement("th",{scope:"col",className:"border-0"},"Category"),l.a.createElement("th",{scope:"col",className:"border-0"},"Description"),l.a.createElement("th",{scope:"col",className:"border-0"},"Time Log"),l.a.createElement("th",{scope:"col",className:"border-0"},"Prev History"),l.a.createElement("th",{scope:"col",className:"border-0"},"Action"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Rahul"),l.a.createElement("td",null,"Male"),l.a.createElement("td",null,"Cardiologist"),l.a.createElement("td",null,"Experienced a catastrophic heart attack 5 mins ago"),l.a.createElement("td",null,"21:30 Hours"),l.a.createElement("td",null,"Yes"),l.a.createElement("td",null,l.a.createElement(m.b,{outline:!0,theme:"success",className:"mb-2 mr-1"},"Accept"))),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Shiva"),l.a.createElement("td",null,"Male"),l.a.createElement("td",null,"Psychologist"),l.a.createElement("td",null,"Can't sleep properly due to stress and work load. Not able to enjoy life!"),l.a.createElement("td",null,"18:30 Hours"),l.a.createElement("td",null,"No"),l.a.createElement("td",null,l.a.createElement(m.b,{outline:!0,theme:"success",className:"mb-2 mr-1"},"Accept"))),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Akshith"),l.a.createElement("td",null,"Male"),l.a.createElement("td",null,"Orthopaedist"),l.a.createElement("td",null,"Fractures reported in the wrist due to excessive coding on Flutter without pause"),l.a.createElement("td",null,"03:30 Hours"),l.a.createElement("td",null,"Yes"),l.a.createElement("td",null,l.a.createElement(m.b,{outline:!0,theme:"success",className:"mb-2 mr-1"},"Accept"))),l.a.createElement("tr",null,l.a.createElement("td",null,"4"),l.a.createElement("td",null,"Harshita"),l.a.createElement("td",null,"Female"),l.a.createElement("td",null,"Dermatologist"),l.a.createElement("td",null,"Needs to get rid of Pimples on her skin"),l.a.createElement("td",null,"21:30 Hours"),l.a.createElement("td",null,"Yes"),l.a.createElement("td",null,l.a.createElement(m.b,{outline:!0,theme:"success",className:"mb-2 mr-1"},"Accept"))),l.a.createElement("tr",null,l.a.createElement("td",null,"5"),l.a.createElement("td",null,"Vivek"),l.a.createElement("td",null,"Male"),l.a.createElement("td",null,"Physician"),l.a.createElement("td",null,"Suspected to be Covid + due to violation of Lockdown norms during Lockdown."),l.a.createElement("td",null,"14:30 Hours"),l.a.createElement("td",null,"No"),l.a.createElement("td",null,l.a.createElement(m.b,{outline:!0,theme:"success",className:"mb-2 mr-1"},"Accept"))))))))))},z=function(e){var t=e.userDetails;return l.a.createElement(m.c,{small:!0,className:"mb-4 pt-3"},l.a.createElement(m.e,{className:"border-bottom text-center"},l.a.createElement("div",{className:"mb-3 mx-auto"},l.a.createElement("img",{className:"rounded-circle",src:t.avatar,alt:t.name,width:"110"})),l.a.createElement("h4",{className:"mb-0"},t.name),l.a.createElement("span",{className:"text-muted d-block mb-2"},t.jobTitle),l.a.createElement(m.b,{pill:!0,outline:!0,size:"sm",className:"mb-2"},l.a.createElement("i",{className:"material-icons mr-1"},"person_add")," Follow")),l.a.createElement(m.u,{flush:!0},l.a.createElement(m.v,{className:"px-4"},l.a.createElement("div",{className:"progress-wrapper"},l.a.createElement("strong",{className:"text-muted d-block mb-2"},t.performanceReportTitle),l.a.createElement(m.B,{className:"progress-sm",value:t.performanceReportValue},l.a.createElement("span",{className:"progress-value"},t.performanceReportValue,"%")))),l.a.createElement(m.v,{className:"p-4"},l.a.createElement("strong",{className:"text-muted d-block mb-2"},t.metaTitle),l.a.createElement("span",null,t.metaValue))))};z.defaultProps={userDetails:{name:"Dr. Vivek Kumar Singh",avatar:a(95),jobTitle:"Physician",performanceReportTitle:"Workload",performanceReportValue:74,metaTitle:"Ph.D | MBBS | Delhi University",metaValue:"Demonstrated work in field of Physiology and more than 1k+ successful cases of patients!"}};var G=z,Y=function(e){var t=e.title;return l.a.createElement(m.c,{small:!0,className:"mb-4"},l.a.createElement(m.e,{className:"border-bottom"},l.a.createElement("h6",{className:"m-0"},t)),l.a.createElement(m.u,{flush:!0},l.a.createElement(m.v,{className:"p-3"},l.a.createElement(m.C,null,l.a.createElement(m.f,null,l.a.createElement(m.m,null,l.a.createElement(m.C,{form:!0},l.a.createElement(m.f,{md:"6",className:"form-group"},l.a.createElement("label",{htmlFor:"feFirstName"},"First Name"),l.a.createElement(m.o,{id:"feFirstName",placeholder:"First Name",value:"Vivek",onChange:function(){}})),l.a.createElement(m.f,{md:"6",className:"form-group"},l.a.createElement("label",{htmlFor:"feLastName"},"Last Name"),l.a.createElement(m.o,{id:"feLastName",placeholder:"Last Name",value:"Singh",onChange:function(){}}))),l.a.createElement(m.C,{form:!0},l.a.createElement(m.f,{md:"6",className:"form-group"},l.a.createElement("label",{htmlFor:"feEmail"},"Email"),l.a.createElement(m.o,{type:"email",id:"feEmail",placeholder:"Email Address",value:"rogerthatvivek@gmail.com",onChange:function(){},autoComplete:"email"})),l.a.createElement(m.f,{md:"6",className:"form-group"},l.a.createElement("label",{htmlFor:"fePassword"},"Password"),l.a.createElement(m.o,{type:"password",id:"fePassword",placeholder:"Password",value:"Lol!DontEvenTryThis",onChange:function(){},autoComplete:"current-password"}))),l.a.createElement(m.n,null,l.a.createElement("label",{htmlFor:"feAddress"},"Address"),l.a.createElement(m.o,{id:"feAddress",placeholder:"Address",value:"Mannar 1st Street, Vadapalani,",onChange:function(){}})),l.a.createElement(m.C,{form:!0},l.a.createElement(m.f,{md:"6",className:"form-group"},l.a.createElement("label",{htmlFor:"feCity"},"City"),l.a.createElement(m.o,{id:"feCity",placeholder:"Chennai",onChange:function(){}})),l.a.createElement(m.f,{md:"4",className:"form-group"},l.a.createElement("label",{htmlFor:"feInputState"},"State"),l.a.createElement(m.p,{id:"feInputState"},l.a.createElement("option",null,"Tamil Nadu"),l.a.createElement("option",null,"Andhra Pradesh"),l.a.createElement("option",null,"Jharkhand"))),l.a.createElement(m.f,{md:"2",className:"form-group"},l.a.createElement("label",{htmlFor:"feZipCode"},"Zip"),l.a.createElement(m.o,{id:"feZipCode",placeholder:"600026",onChange:function(){}}))),l.a.createElement(m.C,{form:!0},l.a.createElement(m.f,{md:"12",className:"form-group"},l.a.createElement("label",{htmlFor:"feDescription"},"Description"),l.a.createElement(m.q,{id:"feDescription",rows:"5"}))),l.a.createElement(m.b,{theme:"accent"},"Update Account")))))))};Y.defaultProps={title:"Account Details"};var J=Y,Z=function(){return l.a.createElement(m.h,{fluid:!0,className:"main-content-container px-4"},l.a.createElement(m.C,{noGutters:!0,className:"page-header py-4"},l.a.createElement(R,{title:"Doctor's Profile",subtitle:"Overview",md:"12",className:"ml-sm-auto mr-sm-auto"})),l.a.createElement(m.C,null,l.a.createElement(m.f,{lg:"4"},l.a.createElement(G,null)),l.a.createElement(m.f,{lg:"8"},l.a.createElement(J,null))))},q=(a(194),a(221)),$=a(218),Q=a(219),X=a(220);var ee=function(){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar__header"},l.a.createElement("div",{className:"sidebar__headerRight"},l.a.createElement(q.a,null,l.a.createElement($.a,null)),l.a.createElement(q.a,null,l.a.createElement(Q.a,null)),l.a.createElement(q.a,null,l.a.createElement(X.a,null)))))};a(195);var te=function(){return l.a.createElement("div",{className:"chat"},l.a.createElement("h1",null,"I'm the Chatbox"))},ae=(a(196),[{path:"/",exact:!0,layout:W,component:function(){return l.a.createElement(o.a,{to:"/dashboard"})}},{path:"/dashboard",layout:W,component:K},{path:"/messages",layout:W,component:function(){return l.a.createElement(m.h,{fluid:!0,className:"main-content-container px-4"},l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"app__body"},l.a.createElement(ee,null),l.a.createElement(te,null))))}},{path:"/user-profile",layout:W,component:Z}]),ne=a(65);ne.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GAID||"UA-115105611-2");var le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(e){ne.a.set(Object(T.a)({page:e},t)),ne.a.pageview(e)},r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BASENAME||"",c=function(t){Object(b.a)(c,t);var n=Object(f.a)(c);function c(){return Object(E.a)(this,c),n.apply(this,arguments)}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname+this.props.location.search;a("".concat(r).concat(e))}},{key:"componentDidUpdate",value:function(e){var t=e.location.pathname+e.location.search,n=this.props.location.pathname+this.props.location.search;t!==n&&a("".concat(r).concat(n))}},{key:"render",value:function(){return l.a.createElement(e,this.props)}}]),c}(n.Component);return c},re=(a(197),a(198),function(){return l.a.createElement(s.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BASENAME||""},l.a.createElement("div",null,ae.map((function(e,t){return l.a.createElement(o.b,{key:t,path:e.path,exact:e.exact,component:le((function(t){return l.a.createElement(e.layout,t,l.a.createElement(e.component,t))}))})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,a){e.exports=a.p+"static/media/vivek.a51c879e.jpg"}},[[109,1,2]]]);
//# sourceMappingURL=main.6bd60330.chunk.js.map