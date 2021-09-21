(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{286:function(e,t,l){var content=l(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(40).default)("03e69bb6",content,!0,{sourceMap:!1})},293:function(e,t,l){"use strict";l(286)},294:function(e,t,l){var n=l(39)(!1);n.push([e.i,".rounded-listing{padding:9px;border-radius:50%;border:1px solid #c3c7ce;display:inline-block;vertical-align:middle}.listing-multistep-ul{list-style:none;border-top:.5px solid #e1e3e6;padding:0}.listing-content{border:.5px solid #e1e3e6;padding:3rem}.listing-multistep-ul>li{padding:1.2rem;flex:1}.listing-multistep-ul>li.active{background-color:#07a287}.listing-multistep-ul>li.active>a{color:#fff}.listing-multistep-ul>li>a{font-style:normal;font-weight:400;font-size:1rem;line-height:24px;color:#757d8a;text-align:center;display:block}.list-radio input[type=radio]{opacity:0;position:fixed;width:0}.list-radio label{display:inline-block;background:#f8f8f8;padding:10px 30px;font-size:1rem;border:1px solid #e1e3e6;border-radius:8px;color:#757d8a;font-weight:500;line-height:24px;cursor:pointer;text-align:center;width:100%}.list-radio input[type=radio]:checked+label{background-color:#08b395;color:#fff}.list-radio>div{flex:0 0 30%}",""]),e.exports=n},304:function(e,t,l){"use strict";l.r(t);var n={name:"Add Listing",data:function(){return{listtype:null,regionselected:"",cityselected:"",regionOptions:["Greater Accra","Ashanti"],cityOptions:["Accra","Kumasi","Weija","Osu","Labone"]}}},r=(l(293),l(20)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"container"},[l("div",[l("h2",{staticClass:"fw7 fs-normal dark lh-copy"},[e._v("Add a new listing")]),e._v(" "),l("div",{staticClass:"pv5"},[e._m(0),e._v(" "),l("form",{staticClass:"listing-content"},[l("div",{staticClass:"flex flex-column center w-50-ns"},[l("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Listing title")]),e._v(" "),l("input",{staticClass:"mb4",attrs:{type:"text",placeholder:"",name:"",id:""}}),e._v(" "),l("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Listing open for")]),e._v(" "),l("div",{staticClass:"flex  flex-wrap justify-between list-radio mb4"},[l("div",[l("input",{directives:[{name:"model",rawName:"v-model",value:e.listtype,expression:"listtype"}],attrs:{type:"radio",value:"rent",name:"listing-for",id:"rent"},domProps:{checked:e._q(e.listtype,"rent")},on:{change:function(t){e.listtype="rent"}}}),e._v(" "),l("label",{attrs:{for:"rent"}},[e._v("Rent")])]),e._v(" "),l("div",[l("input",{directives:[{name:"model",rawName:"v-model",value:e.listtype,expression:"listtype"}],attrs:{type:"radio",value:"shortlet",name:"listing-for",id:"shortlet"},domProps:{checked:e._q(e.listtype,"shortlet")},on:{change:function(t){e.listtype="shortlet"}}}),e._v(" "),l("label",{attrs:{for:"shortlet"}},[e._v("Shortlet")])]),e._v(" "),l("div",[l("input",{directives:[{name:"model",rawName:"v-model",value:e.listtype,expression:"listtype"}],attrs:{type:"radio",value:"lease",name:"listing-for",id:"lease"},domProps:{checked:e._q(e.listtype,"lease")},on:{change:function(t){e.listtype="lease"}}}),e._v(" "),l("label",{attrs:{for:"lease"}},[e._v("Lease")])])]),e._v(" "),l("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Listing address")]),e._v(" "),l("div",{staticClass:"flex flex-wrap justify-between mb4"},[l("div",{staticClass:"w-40-ns"},[l("select",{directives:[{name:"model",rawName:"v-model",value:e.regionselected,expression:"regionselected"}],staticClass:"w-100-ns",on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.regionselected=t.target.multiple?l:l[0]}}},[l("option",{attrs:{disabled:"",value:""}},[e._v("Select region")]),e._v(" "),e._l(e.regionOptions,(function(t,n){return l("option",{key:n},[e._v(e._s(t))])}))],2)]),e._v(" "),l("div",{staticClass:"w-40-ns"},[l("select",{directives:[{name:"model",rawName:"v-model",value:e.cityselected,expression:"cityselected"}],staticClass:"w-100-ns",on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.cityselected=t.target.multiple?l:l[0]}}},[l("option",{attrs:{disabled:"",value:""}},[e._v("Select city")]),e._v(" "),e._l(e.cityOptions,(function(t,n){return l("option",{key:n},[e._v(e._s(t))])}))],2)])]),e._v(" "),e._m(1),e._v(" "),e._m(2)])])])])])}),[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"listing-multistep-ul flex flex-wrap"},[l("li",{staticClass:"active"},[l("a",[l("span",{staticClass:"rounded-listing mr2"}),e._v("Listing overview")])]),e._v(" "),l("li",[l("a",[l("span",{staticClass:"rounded-listing mr2"}),e._v("Description")])]),e._v(" "),l("li",[l("a",[l("span",{staticClass:"rounded-listing mr2"}),e._v("Add images")])]),e._v(" "),l("li",[l("a",[l("span",{staticClass:"rounded-listing mr2"}),e._v("Price details")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb4"},[t("textarea",{staticClass:"w-100",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Enter exact address"}})])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"center"},[l("button",{staticClass:"btn btn--green"},[e._v("Proceed")])])}],!1,null,null,null);t.default=component.exports}}]);