(window.webpackJsonp=window.webpackJsonp||[]).push([[22,9],{302:function(e,t,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("457d502c",content,!0,{sourceMap:!1})},310:function(e,t,n){"use strict";n(302)},311:function(e,t,n){var o=n(34)(!1);o.push([e.i,'.vue-dropzone{border:none;font-family:"DM Sans";color:#777;background:#ebf8f6;border-radius:10px}.vue-dropzone:hover{background-color:#ebf8f6}.added-bg{background-color:#fff}',""]),e.exports=o},322:function(e,t,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("03e69bb6",content,!0,{sourceMap:!1})},330:function(e,t,n){"use strict";n.r(t);var o=n(323),r=n.n(o),l=(n(324),{components:{Dropzone:r.a},data:function(){return{options:{url:"http://httpbin.org/anything",thumbnailWidth:200,addRemoveLinks:!0,maxFilesize:1,maxFiles:5,acceptedFiles:".jpeg,.jpg,.png,.svg"},isAddedFile:!1}},mounted:function(){this.$refs.el.dropzone},methods:{maxfileSize:function(e){alert("Max file exceed",e)},checkFileAdded:function(e){e.length>0?this.isAddedFile=!0:this.isAddedFile=!1},removeFiles:function(e){0===this.$refs.el.dropzone.files.length&&(this.isAddedFile=!1)}}}),c=(n(310),n(11)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Dropzone",{ref:"el",staticClass:"vue-dropzone dropzone dz-clickable",class:[!0===e.isAddedFile?"added-bg dz-started":""],attrs:{id:"foo",options:e.options,"destroy-dropzone":!0,"use-custom-slot":!0},on:{"vdropzone-max-files-exceeded":e.maxfileSize,"vdropzone-files-added":e.checkFileAdded,"vdropzone-removed-file":e.removeFiles}},[n("div",[n("svg",{attrs:{width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.75 11.957V10.2493H10.2502V11.9577C10.2502 12.8973 9.48141 13.666 8.54183 13.666C7.60225 13.666 6.8335 12.8973 6.8335 11.9577V8.54102C6.8335 7.60143 7.60225 6.83268 8.54183 6.83268H32.411C32.4267 6.83225 32.4425 6.83203 32.4583 6.83203C33.2425 6.83203 33.9077 7.3675 34.1063 8.09086C34.1122 8.11233 34.1177 8.13398 34.1227 8.15578C34.1516 8.27969 34.1668 8.40865 34.1668 8.54102L34.1667 8.56478V11.957C34.1667 12.8966 33.3979 13.6654 32.4583 13.6654C31.5187 13.6654 30.75 12.8966 30.75 11.957ZM13.6682 23.9153C13.1471 23.9153 12.6364 23.6796 12.2998 23.232C11.7326 22.4769 11.8864 21.4058 12.6415 20.8403L19.4748 15.7153C20.0659 15.2712 20.8791 15.2592 21.4821 15.6846L28.3154 20.4918C29.0876 21.0351 29.2738 22.1011 28.7306 22.8716C28.1873 23.642 27.123 23.8299 26.3509 23.2867L22.2035 20.3692C22.2067 20.4119 22.2083 20.4551 22.2083 20.4987V34.1654C22.2083 35.1084 21.4447 35.8737 20.5 35.8737C19.5553 35.8737 18.7917 35.1084 18.7917 34.1654V20.4988L14.6915 23.5737C14.384 23.8043 14.0252 23.9153 13.6682 23.9153Z",fill:"#07A287"}})]),e._v(" "),n("h3",{staticClass:"f5 green lh-copy fw4 mv2"},[e._v("Click here to upload images")])])])],1)}),[],!1,null,null,null);t.default=component.exports},342:function(e,t,n){"use strict";n(322)},343:function(e,t,n){var o=n(34)(!1);o.push([e.i,".input-unset,.select-unset{border-radius:unset;flex:1}.currency-label{padding:.8rem;background:#07a287;border-radius:8px 0 0 8px;cursor:pointer}",""]),e.exports=o},362:function(e,t,n){"use strict";n.r(t);var o=n(7),r=(n(56),n(25),n(42),{name:"AddListing",data:function(){return{title:null,exactaddress:null,listtype:null,description:null,amount:null,period:"",regionselected:"",cityselected:"",roomselected:"",bathroomselected:"",paymentduration:"",step:1,regionOptions:["Greater Accra","Ashanti"],cityOptions:["Accra","Kumasi","Weija","Osu","Labone"],roomOptions:[1,2,3,4,5,6,7,8,9,10],apartmentoptions:[],facilities:["A kitchen","Furnished living room","Home cleaning","Parking space","Personal ECG prepaid meter","Newly built","Home cleaning services","Walled apartment","Wifi services","Sitting room"]}},computed:{user:function(){return this.$auth.$storage.getUniversal("user")}},created:function(){},methods:{next:function(){this.step++},previous:function(){this.step--},submitListing:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.$auth.$storage.getUniversal("user"),o=n.profile.id,r="Bearer "+n.token,console.log("token",r),l={title:e.title,listing_type:e.listtype,region:e.regionselected,city:e.cityselected,address:e.exactaddress,description:e.description,number_of_rooms:e.roomselected,number_of_bathrooms:e.bathroomselected,amenities:"A kitchen, walled apartment, wifi, sitting room",amount:e.amount,period:e.period,user_id:o},console.log(l),e.$axios.setHeader("Authorization",r),e.$axios.setHeader("Content-Type","application/json"),t.next=11,e.$axios.post("property-listing/create",l);case 11:c=t.sent,console.log(c),e.$router.push("/list-property"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log("error",t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}}),l=(n(342),n(11)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"pv4"},[n("h2",{staticClass:"fw7 fs-normal dark lh-copy pv3"},[e._v("Add a new listing")]),e._v(" "),n("div",{},[n("ul",{staticClass:"listing-multistep-ul flex flex-wrap"},[n("li",{class:[1===e.step?"active":""]},[e._m(0)]),e._v(" "),n("li",{class:[2===e.step?"active":""]},[e._m(1)]),e._v(" "),n("li",{class:[3===e.step?"active":""]},[e._m(2)]),e._v(" "),n("li",{class:[4===e.step?"active":""]},[e._m(3)])]),e._v(" "),n("form",{staticClass:"listing-content",on:{submit:function(t){return t.preventDefault(),e.submitListing.apply(null,arguments)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"step === 1"}],staticClass:"flex flex-column center w-60-ns w-70-l w-90-m w-90-s"},[n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Listing title")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"mb4",attrs:{type:"text",placeholder:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Listing open for")]),e._v(" "),n("div",{staticClass:"flex flex-wrap justify-between list-radio mb4"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.listtype,expression:"listtype"}],attrs:{id:"rent",type:"radio",value:"rent",name:"listing-for"},domProps:{checked:e._q(e.listtype,"rent")},on:{change:function(t){e.listtype="rent"}}}),e._v(" "),n("label",{attrs:{for:"rent"}},[e._v("Rent")])]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.listtype,expression:"listtype"}],attrs:{id:"shortlet",type:"radio",value:"shortlet",name:"listing-for"},domProps:{checked:e._q(e.listtype,"shortlet")},on:{change:function(t){e.listtype="shortlet"}}}),e._v(" "),n("label",{attrs:{for:"shortlet"}},[e._v("Shortlet")])]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.listtype,expression:"listtype"}],attrs:{id:"lease",type:"radio",value:"lease",name:"listing-for"},domProps:{checked:e._q(e.listtype,"lease")},on:{change:function(t){e.listtype="lease"}}}),e._v(" "),n("label",{attrs:{for:"lease"}},[e._v("Lease")])])]),e._v(" "),n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Listing address")]),e._v(" "),n("div",{staticClass:"flex flex-wrap justify-between mb4"},[n("div",{staticClass:"w-40-ns"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.regionselected,expression:"regionselected"}],staticClass:"w-100-ns",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.regionselected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select region")]),e._v(" "),e._l(e.regionOptions,(function(t,o){return n("option",{key:o},[e._v("\n                  "+e._s(t)+"\n                ")])}))],2)]),e._v(" "),n("div",{staticClass:"w-40-ns"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.cityselected,expression:"cityselected"}],staticClass:"w-100-ns",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.cityselected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select city")]),e._v(" "),e._l(e.cityOptions,(function(t,o){return n("option",{key:o},[e._v("\n                  "+e._s(t)+"\n                ")])}))],2)])]),e._v(" "),n("div",{staticClass:"mb4"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.exactaddress,expression:"exactaddress"}],staticClass:"w-100",attrs:{cols:"30",rows:"10",placeholder:"Enter exact address"},domProps:{value:e.exactaddress},on:{input:function(t){t.target.composing||(e.exactaddress=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"center"},[n("button",{staticClass:"btn btn--green",on:{click:function(t){return t.preventDefault(),e.next.apply(null,arguments)}}},[e._v("\n              Proceed\n            ")])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"step === 2"}],staticClass:"flex flex-column center w-60-ns w-70-l w-90-m w-90-s"},[n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Listing Description")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"w-100 mb4",attrs:{cols:"30",rows:"10",placeholder:"Write here"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),n("div",{staticClass:"flex flex-wrap justify-between mb4"},[n("div",{staticClass:"w-40-ns"},[n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("No. of rooms")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.roomselected,expression:"roomselected"}],staticClass:"w-100-ns",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.roomselected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select number")]),e._v(" "),e._l(e.roomOptions,(function(t,o){return n("option",{key:o},[e._v("\n                  "+e._s(t)+"\n                ")])}))],2)]),e._v(" "),n("div",{staticClass:"w-40-ns"},[n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("No. of bathrooms")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.bathroomselected,expression:"bathroomselected"}],staticClass:"w-100-ns",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.bathroomselected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select number")]),e._v(" "),e._l(e.roomOptions,(function(t,o){return n("option",{key:o},[e._v("\n                  "+e._s(t)+"\n                ")])}))],2)])]),e._v(" "),n("div",{staticClass:"\n              flex flex-wrap\n              facilites\n              justify-between\n              pb4\n              bb\n              b--light-gray\n            "},e._l(e.facilities,(function(t,o){return n("div",{key:o},[n("div",{staticClass:"rounded-checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.apartmentoptions,expression:"apartmentoptions"}],attrs:{id:o,type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.apartmentoptions)?e._i(e.apartmentoptions,t)>-1:e.apartmentoptions},on:{change:function(n){var o=e.apartmentoptions,r=n.target,l=!!r.checked;if(Array.isArray(o)){var c=t,d=e._i(o,c);r.checked?d<0&&(e.apartmentoptions=o.concat([c])):d>-1&&(e.apartmentoptions=o.slice(0,d).concat(o.slice(d+1)))}else e.apartmentoptions=l}}}),e._v(" "),n("label",{attrs:{for:o}}),e._v(" "),n("span",{staticClass:"rounded-checkbox-text"},[e._v(e._s(t))])])])})),0),e._v(" "),n("div",{staticClass:"flex justify-between pv4"},[n("button",{staticClass:"btn btn--green",on:{click:function(t){return t.preventDefault(),e.previous.apply(null,arguments)}}},[e._v("\n              Back\n            ")]),e._v(" "),n("button",{staticClass:"btn btn--green",on:{click:function(t){return t.preventDefault(),e.next.apply(null,arguments)}}},[e._v("\n              Proceed\n            ")])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:3===e.step,expression:"step === 3"}],staticClass:"flex flex-column center w-60-ns w-70-l w-90-m w-90-s"},[n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("\n            Upload clear images of your listing\n          ")]),e._v(" "),n("h3",{staticClass:"f5 grey--6 lh-copy mb2 fw4"},[e._v("\n            Please ensure each image is not more than 5mb. Accepted format\n            include JPEG and PNG\n          ")]),e._v(" "),n("div",{staticClass:"pv4 bb b--light-gray"},[n("ImageUpload")],1),e._v(" "),n("div",{staticClass:"flex justify-between pv4"},[n("button",{staticClass:"btn btn--green mh3",on:{click:function(t){return t.preventDefault(),e.previous.apply(null,arguments)}}},[e._v("\n              Back\n            ")]),e._v(" "),n("button",{staticClass:"btn btn--green mh3",on:{click:function(t){return t.preventDefault(),e.next.apply(null,arguments)}}},[e._v("\n              Proceed\n            ")])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:4===e.step,expression:"step === 4"}],staticClass:"flex flex-column center w-60-ns w-50-l w-70-m w-90-s"},[n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Amount")]),e._v(" "),n("div",{staticClass:"flex flex-wrap mb4"},[e._m(4),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input-unset",attrs:{type:"text",placeholder:"Write listing price here"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],staticClass:"select-unset",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.period=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:""}},[e._v("Select duration")]),e._v(" "),n("option",[e._v("yearly")]),e._v(" "),n("option",[e._v("monthly")])])]),e._v(" "),n("h3",{staticClass:"f5 dark lh-copy mb2"},[e._v("Advance payment duration")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.paymentduration,expression:"paymentduration"}],staticClass:"mb4",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.paymentduration=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:""}},[e._v("Select one")]),e._v(" "),n("option",{attrs:{value:""}},[e._v("1 year")]),e._v(" "),n("option",{attrs:{value:""}},[e._v("2 years")]),e._v(" "),n("option",{attrs:{value:""}},[e._v("3 years")]),e._v(" "),n("option",{attrs:{value:""}},[e._v("4 years")])]),e._v(" "),n("div",{staticClass:"flex justify-between pv5 bt b--light-gray"},[n("button",{staticClass:"btn btn--green",on:{click:function(t){return t.preventDefault(),e.previous.apply(null,arguments)}}},[e._v("\n              Back\n            ")]),e._v(" "),n("button",{staticClass:"btn btn--green"},[e._v("Save")])])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",[n("span",{staticClass:"rounded-listing mr2"}),e._v("Listing overview")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",[n("span",{staticClass:"rounded-listing mr2"}),e._v("Description")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",[n("span",{staticClass:"rounded-listing mr2"}),e._v("Add images")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",[n("span",{staticClass:"rounded-listing mr2"}),e._v("Price details")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"currency-label"},[n("p",{staticClass:"white lh-copy fw7"},[e._v("GHS")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ImageUpload:n(330).default})}}]);