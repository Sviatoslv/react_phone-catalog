(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(40)},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),i=a(2),o=a(5),u=a.n(o),s=a(8),m=a(22),p=(a(35),a(7)),d=function(){var e=Object(s.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static/api/phones.json",e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static/api/phones/",e.next=3,fetch("".concat("https://mate-academy.github.io/phone-catalogue-static/api/phones/").concat(t,".json"));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.basketPhones;return l.a.createElement("ul",{className:"navigation__list"},l.a.createElement("li",{className:"navigation__item"},l.a.createElement(i.c,{to:"/",exact:!0,className:"navigation__link"},"Home")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement(i.c,{to:"/phones",className:"navigation__link"},"Phones")),l.a.createElement("li",{className:"navigation__item"},l.a.createElement(i.c,{to:"/basket",className:"navigation__link"},"Basket:",l.a.createElement("span",null,t.length))))},b=function(){return l.a.createElement("main",{className:"main-container"},l.a.createElement("h1",null,"Home, sweet Home!"),l.a.createElement("img",{src:"./img/legs_500.gif",alt:"gif"}))},f=a(16),g=function(e){var t=e.basketPhones,a=e.chandgeBasketItems;return l.a.createElement("main",{className:"main-container"},l.a.createElement("h2",null,"Chosen phones:",t.length),l.a.createElement("ul",{className:"backet__card-list"},t.map(function(e){return l.a.createElement("li",{key:e.id,className:"backet__card-item"},l.a.createElement("div",{className:"basket__preview-name-container"},l.a.createElement("div",{className:"backet__card-image"},l.a.createElement("img",{src:e.imageUrl,alt:"phone",width:"100"})),l.a.createElement(i.b,{to:"/phones/".concat(e.id)},e.name)),l.a.createElement("p",null,e.snippet),l.a.createElement("div",{className:"phone__buttons"},l.a.createElement("p",null,"quantity:",e.quantity),l.a.createElement("button",{name:e.id,type:"button",className:"button button--basket",onClick:function(){return e.quantity>1&&a(t.map(function(t){return t.id===e.id?Object(f.a)({},t,{quantity:t.quantity-1}):t})),t}},"-"),l.a.createElement("button",{name:e.id,type:"button",className:"button button--basket",onClick:function(){return a(t.map(function(t){return t.id===e.id?Object(f.a)({},t,{quantity:t.quantity+1}):t}))}},"+"),l.a.createElement("button",{name:e.id,type:"button",className:"button button--basket",onClick:function(){return a(t.filter(function(t){return t.id!==e.id}))}},"X")))})),l.a.createElement("div",{className:"basket__controls"},t.length>0&&l.a.createElement("button",{type:"button",onClick:function(){return a(t.filter(function(e){return!1}))}},"Delete all Items from Card"),l.a.createElement(i.b,{to:"/phones"},"Back to Catalog")))},y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"404"),l.a.createElement("img",{src:"https://i.gifer.com/MbHR.gif",alt:"You are lost"}),l.a.createElement(i.c,{to:"/",exact:!0},"Back to Home"))},v=a(9),k=a(10),w=a(12),j=a(11),_=a(13),O=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Unfortunatly there is no such phone anymore"),l.a.createElement("img",{src:"./img/boys_500.jpg",alt:"sad boys"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/phones/"},"Back To Phone Catalog")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},"Back To Home"))))},N=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(w.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).state={imageUrl:a.props.phoneDetails.images[0]},a.handleImageIndex=function(e){a.setState({imageUrl:e.target.name})},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=this.props.phoneDetails,a=this.state.imageUrl;return l.a.createElement("div",{className:"phone__details"},l.a.createElement("img",{src:a,alt:t.name}),t.images.map(function(a){return l.a.createElement("input",{name:a,onClick:e.handleImageIndex,key:a,type:"image",className:"phone__galery",src:a,alt:t.name})}),l.a.createElement("table",null,l.a.createElement("tbody",null,t.additionalFeatures&&l.a.createElement("tr",null,l.a.createElement("td",null,"Additional Features:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,t.additionalFeatures)))),l.a.createElement("tr",null,l.a.createElement("td",null,"android:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"os:","".concat(t.android.os)),l.a.createElement("li",null,"ui:","".concat(t.android.ui))))),l.a.createElement("tr",null,l.a.createElement("td",null,"battery:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"standbyTime:","".concat(t.battery.standbyTime)),l.a.createElement("li",null,"talkTime:","".concat(t.battery.talkTime)),l.a.createElement("li",null,"type:","".concat(t.battery.type))))),l.a.createElement("tr",null,l.a.createElement("td",null,"camera:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"screenResolution:","".concat(t.camera.features)),l.a.createElement("li",null,"primary:","".concat(t.camera.primary))))),l.a.createElement("tr",null,l.a.createElement("td",null,"connectivity:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"bluetooth:","".concat(t.connectivity.bluetooth)),l.a.createElement("li",null,"cell:","".concat(t.connectivity.cell)),l.a.createElement("li",null,"gps:","".concat(t.connectivity.gps)),l.a.createElement("li",null,"infrared:","".concat(t.connectivity.infrared)),l.a.createElement("li",null,"wifi:","".concat(t.connectivity.wifi))))),l.a.createElement("tr",null,l.a.createElement("td",null,"display:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"screenResolution:","".concat(t.display.screenResolution)),l.a.createElement("li",null,"screenSize:","".concat(t.display.screenSize)),l.a.createElement("li",null,"touchScreen:","".concat(t.display.touchScreen))))),l.a.createElement("tr",null,l.a.createElement("td",null,"hardware:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"accelerometer:","".concat(t.hardware.accelerometer)),l.a.createElement("li",null,"audioJack:","".concat(t.hardware.audioJack," ")),l.a.createElement("li",null,"cpu:","".concat(t.hardware.cpu," ")),l.a.createElement("li",null,"fmRadio:","".concat(t.hardware.fmRadio," ")),l.a.createElement("li",null,"physicalKeyboard:","".concat(t.hardware.physicalKeyboard," ")),l.a.createElement("li",null,"usb:","".concat(t.hardware.usb," "))))),l.a.createElement("tr",null,l.a.createElement("td",null,"sizeAndWeight:"),l.a.createElement("td",null,l.a.createElement("ul",null,l.a.createElement("li",null,"dimensions:",t.sizeAndWeight.dimensions),l.a.createElement("li",null,"weight:",t.sizeAndWeight.weight)))))))}}]),t}(l.a.Component),C=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(w.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).state={phoneDetails:null,isLoaded:!1},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.phoneId,e.next=3,h(t);case 3:a=e.sent,this.setState({phoneDetails:a,isLoaded:!0});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.phone,t=this.state,a=t.phoneDetails,n=t.isLoaded;return n||e?l.a.createElement("main",{className:"main-container"},l.a.createElement("h1",null,n&&a.name),l.a.createElement("h3",null,n&&a.description),!n&&l.a.createElement("img",{src:"./img/giphy.webp",alt:"loader"}),n&&l.a.createElement(N,{phoneDetails:a})):l.a.createElement(O,null)}}]),t}(l.a.Component),x=a(18),I=a(17),A=function(e){var t=[],a=[];return function(){for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return l.every(function(e,a){return e===t[a]})?a:(t=l,a=e.apply(void 0,l))}},q=A(function(e,t){return e.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())})}),B=A(function(e,t){return Object(x.a)(e).sort(function(e,a){switch(t){case"abc":return e.name.localeCompare(a.name);case"newest":return e.age-a.age;default:return 0}})}),P=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(w.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).state={filterValue:"",sortValue:"newest"},a.handleFilter=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(I.a)({},n,l))},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.phones,a=e.chandgeBasketItems,n=e.basketPhones,r=this.state,c=r.filterValue,o=r.sortValue,u=q(t,c),s=B(u,this.state.sortValue);return l.a.createElement("div",null,l.a.createElement("input",{name:"filterValue",value:c,onChange:this.handleFilter}),l.a.createElement("select",{name:"sortValue",value:o,onChange:this.handleFilter},l.a.createElement("option",{value:"abc"},"Alphabet"),l.a.createElement("option",{value:"newest"},"Newst")),l.a.createElement("ul",{className:"phone__card-list"},s.map(function(e){return l.a.createElement("li",{key:e.id,className:"phone__card-item"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:e.imageUrl,alt:"phone",width:"100"})),l.a.createElement(i.b,{to:"/phones/".concat(e.id)},l.a.createElement("h4",null,e.name)),l.a.createElement("p",null,e.snippet)),l.a.createElement("button",{name:e.id,type:"button",className:"button",onClick:function(){return n.some(function(t){return t.id===e.id})?a(n.map(function(t){return t.id===e.id?Object(f.a)({},t,{quantity:t.quantity+1}):t})):a([].concat(Object(x.a)(n),[{id:e.id,quantity:1,name:e.name,imageUrl:e.imageUrl}]))}},"Add to card"))})))}}]),t}(l.a.Component),S=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),o=i[0],h=i[1];return Object(n.useEffect)(function(){Object(s.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}},e)}))()},[]),l.a.createElement("div",{className:"App"},l.a.createElement(E,{basketPhones:o}),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",exact:!0,component:b}),l.a.createElement(p.a,{path:"/phones",exact:!0,render:function(){return l.a.createElement("main",{className:"main-container"},l.a.createElement("h1",null,"Phones number:",a.length),l.a.createElement(P,{phones:a,chandgeBasketItems:h,basketPhones:o}))}}),l.a.createElement(p.a,{path:"/phones/:phoneId?",render:function(e){var t=e.match.params.phoneId,n=a.find(function(e){return e.id===t});return l.a.createElement(C,{phone:n,phoneId:t})}}),l.a.createElement(p.a,{path:"/basket",render:function(){return l.a.createElement(g,{basketPhones:o,chandgeBasketItems:h})}}),l.a.createElement(p.a,{component:y})))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(S,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9d6c406e.chunk.js.map