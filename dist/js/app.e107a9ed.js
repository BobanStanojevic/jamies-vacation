(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/jamies-vacation/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0a18":function(e,t,r){"use strict";var n=r("f144"),a=r.n(n);a.a},2355:function(e,t,r){},"2e77":function(e,t,r){},"40ef":function(e,t,r){"use strict";var n=r("2355"),a=r.n(n);a.a},"583c":function(e,t,r){},"5b98":function(e,t,r){"use strict";var n=r("8c88"),a=r.n(n);a.a},"66e3":function(e,t,r){"use strict";var n=r("aa8c"),a=r.n(n);a.a},"8c88":function(e,t,r){},a4e2:function(e,t,r){"use strict";var n=r("583c"),a=r.n(n);a.a},aa8c:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("ui-header"),e.citiesForecast[0]?r("main",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("destinations",{attrs:{citiesForecast:e.citiesForecast}})],1)])]):r("overlay",[r("loader")],1),r("ui-footer")],1)},i=[],s=r("5530"),o=function(e,t){t._c;return t._m(0)},c=[function(e,t){var r=t._c;return r("div",{staticClass:"loader"},[r("div",{staticClass:"loader__container"},[r("div",{staticClass:"loader__corner--top"}),r("div",{staticClass:"loader__corner--bottom"})]),r("div",{staticClass:"loader__square"})])}],u=(r("40ef"),r("2877")),l={},p=Object(u["a"])(l,o,c,!0,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overlay"},[r("div",{staticClass:"overlay__content"},[e._t("default")],2)])},m=[],v=(r("66e3"),{}),h=Object(u["a"])(v,d,m,!1,null,null,null),y=h.exports,_=function(e,t){t._c;return t._m(0)},g=[function(e,t){var r=t._c;return r("header",{staticClass:"o-header"},[r("div",{staticClass:"containerFluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"o-header__logo"},[r("h1",[r("a",{staticClass:"o-header__link",attrs:{href:"#"}},[t._v(" Jamies Vacation ")])])])])])])])}],b=(r("dd55"),{}),w=Object(u["a"])(b,_,g,!0,null,null,null),C=w.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"o-footer"},[r("div",{staticClass:"o-footer__menu container"},[r("ul",{staticClass:"o-footer__menu-list"},[r("li",{staticClass:"o-footer__menu-item"},[r("a",{staticClass:"o-footer__menu-link",attrs:{href:"#"}},[e._v("About Me")])]),r("li",{staticClass:"o-footer__menu-item"},[r("a",{staticClass:"o-footer__menu-link",attrs:{href:"#"}},[e._v("Contact")])]),r("li",{staticClass:"o-footer__menu-item"},[r("a",{staticClass:"o-footer__menu-link",attrs:{href:"#"}},[e._v("Blog")])])])])])}],x=(r("a4e2"),{}),F=Object(u["a"])(x,O,j,!1,null,null,null),k=F.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"m-destinations"},[r("h2",{staticClass:"m-destinations__header"},[e._v(" Destinations")]),r("ul",{staticClass:"m-destinations__list row"},e._l(e.citiesForecast,(function(t,n){return r("li",{key:n,staticClass:"m-destinations__list-item col-12 col-md-6 col-lg-4"},[r("destination",e._b({},"destination",t,!1))],1)})),0)])},P=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"m-destination"},[r("div",{staticClass:"m-destination__top",style:"background-image: url("+e.image+")"}),r("div",{staticClass:"m-destination__bottom"},[r("h3",[e._v(e._s(e.cityName))]),r("p",{staticClass:"m-destination__text"},[e._v("Forcast for next five days")]),r("p",{staticClass:"m-destination__text"},[e._v(" "+e._s(e.cityName)+" has "+e._s(e.sunnyDays)+"/5 sunny days with average temperature of "+e._s(e.averageTemp)+" ")])])])},R=[],S=(r("a9e3"),{name:"Destination",props:{image:{type:String,required:!0},cityName:{type:String,required:!0},averageTemp:{type:String,required:!0},sunnyDays:{type:Number,required:!0}}}),q=S,D=(r("0a18"),Object(u["a"])(q,E,R,!1,null,null,null)),A=D.exports,M={name:"Destinations",props:{citiesForecast:{type:Array,required:!0}},components:{Destination:A}},N=M,I=(r("5b98"),Object(u["a"])(N,T,P,!1,null,null,null)),$=I.exports,H=r("2f62"),V={name:"App",components:{UiHeader:C,UiFooter:k,Destinations:$,Loader:f,Overlay:y},mounted:function(){this.getFavoriteCitiesWeatherForcast()},computed:Object(s["a"])({},Object(H["c"])(["citiesForecast"])),methods:Object(s["a"])({},Object(H["b"])(["getFavoriteCitiesWeatherForcast"]))},K=V,B=Object(u["a"])(K,a,i,!1,null,null,null),G=B.exports,J=(r("caad"),r("d81d"),r("13d5"),r("b680"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("1da1")),U=(r("7db0"),r("b64b"),r("ac1f"),r("5319"),r("72bf")),W=r.n(U),z=r("d4ec"),L=r("257e"),Y=r("262e"),Z=r("2caf"),Q=r("9072"),X=function(e){Object(Y["a"])(r,e);var t=Object(Z["a"])(r);function r(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Object(z["a"])(this,r),n=t.call(this,e),Object.setPrototypeOf(Object(L["a"])(n),(this instanceof r?this.constructor:void 0).prototype),n.errorCode=a,n.apiMessage=i,n.apiCode=s,n}return r}(Object(Q["a"])(Error)),ee=X;function te(e,t){return re.apply(this,arguments)}function re(){return re=Object(J["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o,c,u,l,p,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.path,r.pathParameters&&(n=Object.keys(r.pathParameters).reduce((function(e,t){return e.replace("{"+t+"}",r.pathParameters[t])}),n)),(r.queryParameters||r.includeCredentials)&&(r.queryParameters||(r.queryParameters={}),r.queryParameters.apikey="cuy78gAlYgOT3PG3VEHtA2ZFEV6uwCke",n+="?"+W.a.stringify(r.queryParameters)),a={},e.prev=4,e.next=7,fetch(n,Object(s["a"])({method:r.method},a));case 7:i=e.sent,e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](4),new ee(e.t0.message);case 13:if(i.ok){e.next=30;break}return o="",c=0,e.prev=16,e.next=19,i.json();case 19:u=e.sent,l=u.message,p=u.code,o=l,c=p,e.next=29;break;case 26:e.prev=26,e.t1=e["catch"](16),console.warn("no api message ",e.t1.message);case 29:throw new ee(i.statusText,i.status,o,c);case 30:if(e.prev=30,!i.headers.get("Content-Type")){e.next=38;break}return e.next=34,i.json();case 34:return f=e.sent,e.abrupt("return",t(f));case 38:return e.abrupt("return",t(i.text()));case 39:e.next=44;break;case 41:throw e.prev=41,e.t2=e["catch"](30),new ee(e.t2.message);case 44:case"end":return e.stop()}}),e,null,[[4,10],[16,26],[30,41]])}))),re.apply(this,arguments)}function ne(e,t){return ae.apply(this,arguments)}function ae(){return ae=Object(J["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",te((function(e){var t=e.find((function(e){var t=e.Country;return t.ID===r}));return t.Key}),{method:"GET",path:"https://dataservice.accuweather.com/locations/v1/cities/search",includeCredentials:!0,queryParameters:{q:t}}));case 1:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function ie(e){return se.apply(this,arguments)}function se(){return se=Object(J["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",te((function(e){return e}),{method:"GET",path:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}",includeCredentials:!0,pathParameters:{locationKey:t},queryParameters:{locationKey:t}}));case 1:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}r("dca8");var oe,ce=Object.freeze([{city:"Amsterdam",country:"Netherlands",iso:"NL",image:"https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Netherlands/Amsterdam/amsterdam-dusk-lead-image-guide.jpg?imwidth=400"},{city:"Budapest",country:"Hungary",iso:"HU",image:"https://cw-gbl-gws-prod.azureedge.net/-/media/cw/emea/hungary/offices/hero-image-emea-offices-budapest-small-750x480.jpg?rev=3bd438b112da43b3a50ebf77560e8e3f"},{city:"Madrid",country:"Spain",iso:"ES",image:"https://s29745.pcdn.co/wp-content/uploads/2019/12/Best-Airbnbs-in-Madrid.jpg.optimal.jpg"}]),ue=ce;(function(e){e["SET_FORECAST_FOR_CITIES"]="setForecastForCities"})(oe||(oe={}));var le=oe;function pe(e){return(e-32)/1.8}var fe={getFavoriteCitiesWeatherForcast:function(e){return Object(J["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.dispatch,n=function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(ue.map(function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.city,n=t.iso,e.abrupt("return",ne(r,n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then(function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",ie(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){r("formatTemparatures",e,{root:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=e.message;return console.log("Something went wrong",t)}));case 3:case"end":return t.stop()}}),t)})))()},formatTemparatures:function(e,t){var r=e.commit,n=["Sunny","Hot","Partly sunny","Mostly sunny"],a=t.reduce((function(e,t,r){var a=t.DailyForecasts,i={cityName:"",averageTemp:"",sunnyDays:"",image:""};i.cityName=ue[r].city,i.image=ue[r].image;var s=a.map((function(e){var t=pe(e.Temperature.Minimum.Value),r=pe(e.Temperature.Maximum.Value);return(t+r)/2}));i.averageTemp=(s.reduce((function(e,t){return e+t}),0)/s.length).toFixed(2);var o=a.map((function(e){return e.Day.IconPhrase}));return i.sunnyDays=o.reduce((function(e,t){return n.includes(t)&&(e+=1),e}),0),e.push(i),e}),[]);console.log(a),r(le.SET_FORECAST_FOR_CITIES,a)}},de=fe,me=r("ade3"),ve=Object(me["a"])({},oe.SET_FORECAST_FOR_CITIES,(function(e,t){e.citiesForecast=t})),he=ve,ye=function(){return{citiesForecast:[]}},_e={citiesForecast:function(e){var t=e.citiesForecast;return t}},ge=_e;n["a"].use(H["a"]);var be=new H["a"].Store({state:ye,mutations:he,actions:de,getters:ge});n["a"].config.productionTip=!1,new n["a"]({store:be,render:function(e){return e(G)}}).$mount("#app")},dd55:function(e,t,r){"use strict";var n=r("2e77"),a=r.n(n);a.a},f144:function(e,t,r){}});
//# sourceMappingURL=app.e107a9ed.js.map