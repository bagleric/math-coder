webpackJsonp([2],{"1vyl":function(t,e,n){var r=n("7Mjc");t.exports=function(t,e){var n=-1,s=t.length,i=s-1;for(e=void 0===e?s:e;++n<e;){var o=r(n,i),u=t[o];t[o]=t[n],t[n]=u}return t.length=e,t}},"2xZY":function(t,e,n){var r=n("1vyl"),s=n("L8MQ");t.exports=function(t){return r(s(t))}},"7yyd":function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"instructions"},[n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-account")]),t._v(" "),n("span",[t._v("\n    You should do this test by yourself. But, if you don't know a word you may\n    ask.\n  ")]),t._v(" "),n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-file-edit-outline")]),t._v(" "),n("span",[t._v("You can use scratch paper to find your answers.")]),t._v(" "),n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-account-question-outline")]),t._v(" "),n("span",[t._v("\n    If you don't know the answer, that's okay. You can go to the next\n    question.\n  ")]),t._v(" "),n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-clock-outline")]),t._v(" "),n("span",[t._v(" You can have as much time as you need.")])],1)},staticRenderFns:[]};var s=n("VU/8")({name:"AppTestInstructions"},r,!1,function(t){n("WX03")},"data-v-f00800d4",null);e.a=s.exports},"9uKM":function(t,e,n){t.exports=n("309y")},B5Uj:function(t,e){},VyRK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("kKGf"),s=n("7yyd"),i=n("oiih"),o=n("9uKM"),u=n.n(o),a={name:"PreActivity",components:{AppForm:r.a,AppTestInstructions:s.a},props:{moduleId:{required:!0,type:String}},data:function(){return{showInstructions:!0}},computed:{theModule:function(){return this.module=this.$store.getters.getModule(this.$route.params.moduleId)},c_viewAllQuestions:function(){return this.$store.getters.viewAllQuestions}},methods:{answerQuestion:function(t,e,n){return this.$http.post(i.c,{user_id:t,question_id:e,value:n}).then(function(t){console.log("Pre Test submitted. Response:",t)})},formComplete:function(t){var e=this;console.log({data:t});var n=this.$store.getters.userId;this.$store.getters.isTesting||u()(t,function(t,r){e.answerQuestion(n,r,t)}),this.$router.push({name:"Activity",params:{moduleId:this.moduleId,activityNum:0}})},completeInstructions:function(){this.showInstructions=!1}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pre-activity"},[t.showInstructions?n("div",{staticClass:"instruction-container"},[n("h1",{staticClass:"title"},[t._v("Pre-test instructions")]),t._v(" "),n("AppTestInstructions"),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(e){return t.completeInstructions()}}},[t._v("Start")])],1):n("AppForm",{attrs:{inputs:t.theModule.preModule.inputs,results:t.theModule.preModule.results,stepper:!t.c_viewAllQuestions,shuffle:!t.c_viewAllQuestions},on:{"form-complete":t.formComplete}})],1)},staticRenderFns:[]};var l=n("VU/8")(a,c,!1,function(t){n("fTgl")},"data-v-2121c2e4",null).exports,m={name:"PreActivity",data:function(){return{}},props:{moduleId:{required:!0,type:String}},components:{AppPreActivity:l}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pre-activity-view"},[e("AppPreActivity",{attrs:{moduleId:this.moduleId}})],1)},staticRenderFns:[]};var v=n("VU/8")(m,p,!1,function(t){n("B5Uj")},"data-v-c476cad2",null);e.default=v.exports},WX03:function(t,e){},fTgl:function(t,e){},gMbC:function(t,e,n){var r=n("hrPF"),s=n("1vyl");t.exports=function(t){return s(r(t))}},kKGf:function(t,e,n){"use strict";var r=n("yG5q"),s={name:"AppForm",props:{inputs:Array,results:Object,stepper:{type:Boolean,default:!1},shuffle:{type:Boolean,default:!1}},data:function(){return{formValues:{},iter:1}},methods:{formUpdated:function(t){this.$emit("form-updated",t)},incrementIter:function(){this.iter++},decrementIter:function(){this.iter>1&&this.iter--},submitHandler:function(t){this.$emit("form-complete",t)},submitForm:function(){this.$emit("form-complete",this.formValues)}},computed:{c_inputs:function(){return this.shuffle?r(this.inputs):this.inputs},c_inputsAsArrays:function(){for(var t=[],e=0;e<this.c_inputs.length;e++)t.push([this.c_inputs[e]]);return t}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-form"},[t.stepper?n("div",{staticClass:"form-container"},[t._l(t.c_inputsAsArrays,function(e){return n("FormulateForm",t._b({directives:[{name:"show",rawName:"v-show",value:t.c_inputsAsArrays[t.iter-1][0].name==e[0].name,expression:"c_inputsAsArrays[iter - 1][0].name == item[0].name"}],key:e[0].name,attrs:{schema:e},model:{value:t.formValues,callback:function(e){t.formValues=e},expression:"formValues"}},"FormulateForm",e,!1))}),t._v(" "),n("span",{staticClass:"controls"},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.iter>1,expression:"iter > 1"}],attrs:{text:"",color:"primary"},on:{click:t.decrementIter}},[t._v("Previous")]),t._v(" "),t.iter<t.c_inputs.length?n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.incrementIter}},[t._v("Skip")]):t._e(),t._v(" "),t.iter<t.c_inputs.length?n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.incrementIter}},[t._v("Next")]):n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.submitForm}},[t._v("Submit")])],1)],2):n("div",{staticClass:"form-container"},[n("FormulateForm",{attrs:{schema:t.c_inputs},on:{submit:t.submitHandler,input:t.formUpdated},model:{value:t.formValues,callback:function(e){t.formValues=e},expression:"formValues"}}),t._v(" "),n("span",{staticClass:"controls"},[n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.submitForm}},[t._v("Submit")])],1)],1)])},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(t){n("zNDM")},"data-v-397ae10f",null);e.a=o.exports},yG5q:function(t,e,n){var r=n("gMbC"),s=n("2xZY"),i=n("NGEn");t.exports=function(t){return(i(t)?r:s)(t)}},zNDM:function(t,e){}});
//# sourceMappingURL=2.748b0156d2f81dfa30a9.js.map