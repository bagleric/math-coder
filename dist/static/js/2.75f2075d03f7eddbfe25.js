webpackJsonp([2],{"1vyl":function(t,n,e){var r=e("7Mjc");t.exports=function(t,n){var e=-1,o=t.length,s=o-1;for(n=void 0===n?o:n;++e<n;){var i=r(e,s),u=t[i];t[i]=t[e],t[e]=u}return t.length=n,t}},"2xZY":function(t,n,e){var r=e("1vyl"),o=e("L8MQ");t.exports=function(t){return r(o(t))}},"309y":function(t,n,e){var r=e("PqYH"),o=e("v9aJ"),s=e("CxPB"),i=e("NGEn");t.exports=function(t,n){return(i(t)?r:o)(t,s(n))}},"7yyd":function(t,n,e){"use strict";var r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"instructions"},[e("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-account")]),t._v(" "),e("span",[t._v("\n    You should do this test by yourself.\n  ")]),t._v(" "),e("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-file-edit-outline")]),t._v(" "),e("span",[t._v("You can use scratch paper to find your answers.")]),t._v(" "),e("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-account-question-outline")]),t._v(" "),e("span",[t._v("\n    If you don't know the answer, that's okay. You can go to the next\n    question.\n  ")]),t._v(" "),e("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-clock-outline")]),t._v(" "),e("span",[t._v(" You can have as much time as you need.")])],1)},staticRenderFns:[]};var o=e("VU/8")({name:"AppTestInstructions"},r,!1,function(t){e("8UJY")},"data-v-6f14123b",null);n.a=o.exports},"8UJY":function(t,n){},"9uKM":function(t,n,e){t.exports=e("309y")},CxPB:function(t,n,e){var r=e("wSKX");t.exports=function(t){return"function"==typeof t?t:r}},FYZt:function(t,n){},M6Wl:function(t,n,e){var r=e("rpnb"),o=e("ktak");t.exports=function(t,n){return t&&r(t,n,o)}},PqYH:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r&&!1!==n(t[e],e,t););return t}},W5er:function(t,n){},ZtlQ:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("kKGf"),o=e("7yyd"),s=e("oiih"),i=e("9uKM"),u=e.n(i),a={name:"AppPostActivity",components:{AppForm:r.a,AppTestInstructions:o.a},props:{moduleId:{required:!0,type:String}},data:function(){return{showInstructions:!0}},computed:{theModule:function(){return this.module=this.$store.getters.getModule(this.$route.params.moduleId)}},methods:{answerQuestion:function(t,n,e){this.$http.post(s.b,{user_id:t,question_id:n,value:e}).then(function(t){})},formComplete:function(t){var n=this;console.log({data:t});var e=this.$store.getters.userId;u()(t,function(t,r){n.answerQuestion(e,r,t)}),this.$router.push({name:"Goodbye"})},completeInstructions:function(){this.showInstructions=!1}}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post-activity"},[t.showInstructions?e("div",{staticClass:"instruction-container"},[e("h1",{staticClass:"title"},[t._v("Post-test instructions")]),t._v(" "),e("AppTestInstructions"),t._v(" "),e("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(n){return t.completeInstructions()}}},[t._v("Start")])],1):e("AppForm",{attrs:{inputs:t.theModule.postModule.inputs,results:t.theModule.postModule.results,stepper:!0,shuffle:!0},on:{"form-complete":t.formComplete}})],1)},staticRenderFns:[]};var l=e("VU/8")(a,c,!1,function(t){e("i80l")},"data-v-2ea707cc",null).exports,p={name:"ViewPostActivity",props:{moduleId:{required:!0,type:String}},data:function(){return{}},components:{AppPostActivity:l}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"post-activity"},[n("AppPostActivity",{attrs:{moduleId:this.moduleId}})],1)},staticRenderFns:[]};var m=e("VU/8")(p,f,!1,function(t){e("W5er")},"data-v-5be07e4f",null);n.default=m.exports},gMbC:function(t,n,e){var r=e("hrPF"),o=e("1vyl");t.exports=function(t){return o(r(t))}},hrPF:function(t,n){t.exports=function(t,n){var e=-1,r=t.length;for(n||(n=Array(r));++e<r;)n[e]=t[e];return n}},i80l:function(t,n){},kKGf:function(t,n,e){"use strict";var r=e("yG5q"),o={name:"AppForm",props:{inputs:Array,results:Object,stepper:{type:Boolean,default:!1},shuffle:{type:Boolean,default:!1}},data:function(){return{formValues:{},iter:1}},methods:{formUpdated:function(t){this.$emit("form-updated",t)},incrementIter:function(){this.iter++},decrementIter:function(){this.iter>1&&this.iter--},submitHandler:function(t){this.$emit("form-complete",t)},submitForm:function(){this.$emit("form-complete",this.formValues)}},computed:{c_inputs:function(){return this.shuffle?r(this.inputs):this.inputs},c_inputsAsArrays:function(){for(var t=[],n=0;n<this.c_inputs.length;n++)t.push([this.c_inputs[n]]);return t}}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-form"},[t.stepper?e("div",{staticClass:"form-container"},[t._l(t.c_inputsAsArrays,function(n){return e("FormulateForm",t._b({directives:[{name:"show",rawName:"v-show",value:t.c_inputsAsArrays[t.iter-1][0].name==n[0].name,expression:"c_inputsAsArrays[iter - 1][0].name == item[0].name"}],key:n[0].name,attrs:{schema:n},model:{value:t.formValues,callback:function(n){t.formValues=n},expression:"formValues"}},"FormulateForm",n,!1))}),t._v(" "),e("span",{staticClass:"controls"},[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.iter>1,expression:"iter > 1"}],attrs:{text:"",color:"primary"},on:{click:t.decrementIter}},[t._v("Previous")]),t._v(" "),t.iter<t.c_inputs.length?e("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.incrementIter}},[t._v("Next")]):e("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.submitForm}},[t._v("Submit")])],1)],2):e("div",{staticClass:"form-container"},[e("FormulateForm",{attrs:{schema:t.c_inputs},on:{submit:t.submitHandler,input:t.formUpdated},model:{value:t.formValues,callback:function(n){t.formValues=n},expression:"formValues"}}),t._v(" "),e("span",{staticClass:"controls"},[e("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.submitForm}},[t._v("Submit")])],1)],1)])},staticRenderFns:[]};var i=e("VU/8")(o,s,!1,function(t){e("FYZt")},"data-v-590e07ae",null);n.a=i.exports},pQJ6:function(t,n,e){var r=e("bGc4");t.exports=function(t,n){return function(e,o){if(null==e)return e;if(!r(e))return t(e,o);for(var s=e.length,i=n?s:-1,u=Object(e);(n?i--:++i<s)&&!1!==o(u[i],i,u););return e}}},rpnb:function(t,n,e){var r=e("tHks")();t.exports=r},tHks:function(t,n){t.exports=function(t){return function(n,e,r){for(var o=-1,s=Object(n),i=r(n),u=i.length;u--;){var a=i[t?u:++o];if(!1===e(s[a],a,s))break}return n}}},v9aJ:function(t,n,e){var r=e("M6Wl"),o=e("pQJ6")(r);t.exports=o},yG5q:function(t,n,e){var r=e("gMbC"),o=e("2xZY"),s=e("NGEn");t.exports=function(t){return(s(t)?r:o)(t)}}});
//# sourceMappingURL=2.75f2075d03f7eddbfe25.js.map