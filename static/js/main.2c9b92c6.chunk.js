(this.webpackJsonpcreditcardtask=this.webpackJsonpcreditcardtask||[]).push([[0],{32:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(8),s=c.n(n),r=(c(40),c(10)),i=(c(41),c(20),c(42),c(2)),l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"pa2 white bg-black",children:"Card Details"})})},o=c(81),j=c(80),d=c(79),b=function(e){var t=e.errorMessage,c=e.handleSubmit,a=e.flipFront,n=e.flipBack,s=e.nameChangeHandler,r=e.numChangeHandler,l=e.month,b=e.monthChangeHandler,u=e.year,h=e.yearChangeHandler,O=e.cvnChangeHanlder,v=e.btnAvail;return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"red",children:t}),Object(i.jsxs)("form",{onSubmit:c,children:[Object(i.jsxs)("div",{className:"db inputBox",children:[Object(i.jsx)("label",{children:"Card Number"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",name:"creditCardNumber",placeholder:"No More Than 16 Digit Number",maxLength:"16",minLength:"14",required:!0,onClick:a,onChange:r})]}),Object(i.jsxs)("div",{className:"db inputBox",children:[Object(i.jsx)("label",{children:"Card Name"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",name:"cardholderName",placeholder:"Cardholder Name",onClick:a,onChange:s,maxLength:"16",minLength:"16",required:!0})]}),Object(i.jsxs)("div",{className:"flex inputBox ",children:[Object(i.jsxs)("div",{className:"inputBox",children:[Object(i.jsx)("label",{children:"Expire Date "}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"flex justify-between w-70 ",children:[Object(i.jsxs)(j.a,{className:"w-50 ",variant:"outlined",children:[Object(i.jsx)(o.a,{htmlFor:"outlined-month-native-simple",children:"Month"}),Object(i.jsxs)(d.a,{className:"mt1 mr3",native:!0,value:l,onClick:a,onChange:b,label:"Expiry Month",name:"expiryMonth",id:"outlined-month-native-simple",children:[Object(i.jsx)("option",{"aria-label":"None",value:""}),Object(i.jsx)("option",{value:"01",children:"01"}),Object(i.jsx)("option",{value:"02",children:"02"}),Object(i.jsx)("option",{value:"03",children:"03"}),Object(i.jsx)("option",{value:"04",children:"04"}),Object(i.jsx)("option",{value:"05",children:"05"}),Object(i.jsx)("option",{value:"06",children:"06"}),Object(i.jsx)("option",{value:"07",children:"07"}),Object(i.jsx)("option",{value:"08",children:"08"}),Object(i.jsx)("option",{value:"09",children:"09"}),Object(i.jsx)("option",{value:"10",children:"10"}),Object(i.jsx)("option",{value:"11",children:"11"}),Object(i.jsx)("option",{value:"12",children:"12"})]})]}),Object(i.jsxs)(j.a,{className:"w-50 ",variant:"outlined",children:[Object(i.jsx)(o.a,{htmlFor:"outlined-year-native-simple",children:"Year"}),Object(i.jsxs)(d.a,{className:"mt1 mr3",native:!0,value:u,onClick:a,onChange:h,label:"Expiry Year",name:"expiryYear",id:"outlined-year-native-simple",children:[Object(i.jsx)("option",{"aria-label":"None",value:""}),Object(i.jsx)("option",{value:"21",children:"21"}),Object(i.jsx)("option",{value:"22",children:"22"}),Object(i.jsx)("option",{value:"23",children:"23"}),Object(i.jsx)("option",{value:"24",children:"24"}),Object(i.jsx)("option",{value:"25",children:"25"}),Object(i.jsx)("option",{value:"26",children:"26"}),Object(i.jsx)("option",{value:"27",children:"27"}),Object(i.jsx)("option",{value:"28",children:"28"}),Object(i.jsx)("option",{value:"29",children:"29"}),Object(i.jsx)("option",{value:"30",children:"30"})]})]})]})]}),Object(i.jsxs)("div",{className:"db inputBox w-30",children:[Object(i.jsx)("label",{children:"CVN"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",name:"cvn",placeholder:"3/4 DigitNumber",maxLength:"4",minLength:"3",required:!0,onClick:n,onChange:O})]})]}),Object(i.jsx)("div",{className:"center",children:Object(i.jsx)("button",{className:"f6 link  ph3 pa1 pv2 mb2 ",type:"submit",disabled:v,children:"Make payment"})})]})]})},u=(c(32),function(e){var t=e.name,c=e.num,a=e.month,n=e.year,s=e.issuer,r=e.bgColor;return Object(i.jsxs)("div",{className:"rccs__card--front fl .rccs--flipped ".concat(r),children:[Object(i.jsx)("div",{className:"rccs__card__background"}),Object(i.jsx)("div",{className:"rccs__chip"}),Object(i.jsx)("div",{className:"rccs__issuer issuer_front ".concat(s)}),Object(i.jsx)("div",{className:"rccs__chip"}),Object(i.jsx)("div",{className:"rccs__number rccs--focused",children:Object(i.jsx)("p",{children:c})}),Object(i.jsx)("div",{className:"rccs__expiry__valid",children:"Expire Date"}),Object(i.jsx)("div",{className:"rccs__expiry__value rccs--focused",children:Object(i.jsxs)("p",{children:[a,"/",n]})}),Object(i.jsx)("div",{className:"rccs__name rccs--focused",children:Object(i.jsx)("p",{children:t})})]})}),h=function(e){var t=e.cvn,c=e.issuer,a=e.bgColor;return Object(i.jsxs)("div",{className:"rccs__card--back fl .rccs--flipped ".concat(a),children:[Object(i.jsx)("div",{className:"rccs__card__background"}),Object(i.jsx)("div",{className:"rccs__stripe"}),Object(i.jsx)("div",{className:"rccs__signature"}),Object(i.jsx)("div",{className:"rccs__cvc rccs--focused",children:t}),Object(i.jsx)("div",{className:"rccs__issuer issuer_back ".concat(c)})]})},O=function(){var e=Object(a.useState)("Your Name"),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"),o=Object(r.a)(s,2),j=o[0],d=o[1],O=Object(a.useState)("\u2022\u2022"),v=Object(r.a)(O,2),x=v[0],m=v[1],p=Object(a.useState)("\u2022\u2022"),g=Object(r.a)(p,2),C=g[0],f=g[1],N=Object(a.useState)("\u2022\u2022\u2022\u2022"),_=Object(r.a)(N,2),y=_[0],S=_[1],k=Object(a.useState)(""),B=Object(r.a)(k,2),E=B[0],H=B[1],$=Object(a.useState)(!0),L=Object(r.a)($,2),w=L[0],M=L[1],D=Object(a.useState)(!1),A=Object(r.a)(D,2),F=A[0],Y=A[1],q=Object(a.useState)(!1),I=Object(r.a)(q,2),P=I[0],W=I[1],J=Object(a.useState)(!1),T=Object(r.a)(J,2),V=T[0],z=T[1],Z=Object(a.useState)(!1),G=Object(r.a)(Z,2),K=G[0],Q=G[1],R=Object(a.useState)(!1),U=Object(r.a)(R,2),X=U[0],ee=U[1],te=Object(a.useState)("none"),ce=Object(r.a)(te,2),ae=ce[0],ne=ce[1],se=Object(a.useState)("bgColor"),re=Object(r.a)(se,2),ie=re[0],le=re[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(l,{className:"header"})}),Object(i.jsx)("div",{className:"\r cards center\r flip-container \r ",id:"flipperContainer",children:Object(i.jsxs)("div",{className:"flipper",children:[Object(i.jsx)(u,{name:c,num:j,month:x,year:C,issuer:ae,bgColor:ie}),Object(i.jsx)(h,{cvn:y,issuer:ae,bgColor:ie})]})}),Object(i.jsx)("div",{className:"App center",children:Object(i.jsx)(b,{errorMessage:E,handleSubmit:function(e){alert("The submission has processed"),e.preventDefault()},flipFront:function(){var e=document.getElementById("flipperContainer");e.classList.contains("flip")&&e.classList.remove("flip")},flipBack:function(){document.getElementById("flipperContainer").classList.add("flip")},nameChangeHandler:function(e){console.log(e.target.value);!0===/^((?:[A-Za-z]+ ?){1,3})$/.test(e.target.value)?(n(e.target.value),H(""),Y(!0),F&&P&&V&&K&&X&&M(!1)):(H("Enter valid Cardholder Name!"),M(!0))},numChangeHandler:function(e){var t=e.target.value,c=t.toString(),a=[];function n(e,t){for(var c=0;c<t/4;c++)a[c]=e.substring(4*c,4*(c+1));d(a.join(" ").trim())}var s=/^(?:3[47][0-9]{13})$/.test(t),r=/^(?:4[0-9]{15})$/.test(t),i=/^(?:5[1-5][0-9]{14})$/.test(t),l=/^(?:(6011|5[0-9][0-9])[0-9]{12})$/.test(t),o=/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/.test(t),j=/^(?:(?:2131|1800|35\d{3})\d{11})$/.test(t),b=/^(?:6211[0-9]{12})$/.test(t),u=/^[0-9]*$/.test(t);c.length?!0===u?(H(""),c.length>4?"amex"===ae||"jcb"===ae&&c.startsWith("2131")||"jcb"===ae&&c.startsWith("1800")||"discover"===ae&&!0===c.startsWith("5")?c.length>15?n(c.slice(0,15),c.length):n(c,c.length):"dinersClub"===ae&&c.length>14?n(c.slice(0,14),c.length):n(c,c.length):d(c),s?(ne("amex"),le("amexBgColor"),W(!0)):r?(ne("visa"),le("visaBgColor"),S("\u2022\u2022\u2022"),W(!0)):i?(ne("mastercard"),le("mastercardBgColor"),S("\u2022\u2022\u2022"),W(!0)):l?(ne("discover"),le("discoverBgColor"),ne("discover"),le("discoverBgColor"),W(!0)):o?(ne("dinersClub"),le("dinersClubBgColor"),W(!0)):j?(ne("jcb"),le("jcbBgColor"),W(!0)):b?(ne("unionPay"),le("unionPayBgColor"),W(!0)):(ne("none"),le("bgColor ")),F&&P&&V&&K&&X&&M(!1)):H("Enter valid CreditCard Number!"):(H("Please input"),d("\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"))},monthChangeHandler:function(e){var t=e.target.value.toString();console.log(t),m(t),z(!0),F&&P&&V&&K&&X&&M(!1)},yearChangeHandler:function(e){var t=e.target.value,c=t.toString();console.log(t),f(c),Q(!0),F&&P&&V&&K&&X&&M(!1)},cvnChangeHanlder:function(e){var t=e.target.value,c=t.toString();console.log(t),!0===/^[0-9]*$/.test(t)?(H(""),"mastercard"===ae||"visa"===ae?(S(c.slice(0,3)),ee(!0)):(S(c),ee(!0)),F&&P&&V&&K&&X&&M(!1)):H("Enter valid CVN!")},month:x,year:C,btnAvail:w})})]})};s.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2c9b92c6.chunk.js.map