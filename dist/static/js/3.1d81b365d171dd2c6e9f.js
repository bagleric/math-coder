webpackJsonp([3],{"1vyl":function(t,e,n){var s=n("7Mjc");t.exports=function(t,e){var n=-1,r=t.length,o=r-1;for(e=void 0===e?r:e;++n<e;){var i=s(n,o),u=t[i];t[i]=t[n],t[n]=u}return t.length=e,t}},"2xZY":function(t,e,n){var s=n("1vyl"),r=n("L8MQ");t.exports=function(t){return s(r(t))}},"5yI8":function(t,e){},"7yyd":function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"instructions"},[n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-account")]),t._v(" "),n("span",[t._v("\n    You should do this test by yourself. But, if you don't know a word you may\n    ask.\n  ")]),t._v(" "),n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-file-edit-outline")]),t._v(" "),n("span",[t._v("You can use scratch paper to find your answers.")]),t._v(" "),n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-account-question-outline")]),t._v(" "),n("span",[t._v("\n    If you don't know the answer, that's okay. You can go to the next\n    question.\n  ")]),t._v(" "),n("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-clock-outline")]),t._v(" "),n("span",[t._v(" You can have as much time as you need.")])],1)},staticRenderFns:[]};var r=n("VU/8")({name:"AppTestInstructions"},s,!1,function(t){n("WX03")},"data-v-f00800d4",null);e.a=r.exports},"9uKM":function(t,e,n){t.exports=n("309y")},FYZt:function(t,e){},WX03:function(t,e){},ZtlQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("kKGf"),r=n("7yyd"),o=n("oiih"),i=n("9uKM"),u=n.n(i),a={name:"AppPostActivity",components:{AppForm:s.a,AppTestInstructions:r.a},props:{moduleId:{required:!0,type:String}},data:function(){return{showInstructions:!0}},computed:{theModule:function(){return this.module=this.$store.getters.getModule(this.$route.params.moduleId)},c_viewAllQuestions:function(){return this.$store.getters.viewAllQuestions}},methods:{answerQuestion:function(t,e,n){this.$http.post(o.c,{user_id:t,question_id:e,value:n}).then(function(t){console.log("Post Test submitted. Response:",t)})},formComplete:function(t){var e=this;console.log({data:t});var n=this.$store.getters.userId;u()(t,function(t,s){e.answerQuestion(n,s,t)}),this.$router.push({name:"Goodbye"})},completeInstructions:function(){this.showInstructions=!1}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-activity"},[t.showInstructions?n("div",{staticClass:"instruction-container"},[n("h1",{staticClass:"title"},[t._v("Post-test instructions")]),t._v(" "),n("AppTestInstructions"),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(e){return t.completeInstructions()}}},[t._v("Start")])],1):n("AppForm",{attrs:{inputs:t.theModule.postModule.inputs,results:t.theModule.postModule.results,stepper:!t.c_viewAllQuestions,shuffle:!t.c_viewAllQuestions},on:{"form-complete":t.formComplete}})],1)},staticRenderFns:[]};var l=n("VU/8")(a,c,!1,function(t){n("pT+f")},"data-v-57ba2cb3",null).exports,p={name:"ViewPostActivity",props:{moduleId:{required:!0,type:String}},data:function(){return{}},components:{AppPostActivity:l}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-activity"},[e("AppPostActivity",{attrs:{moduleId:this.moduleId}})],1)},staticRenderFns:[]};var v=n("VU/8")(p,m,!1,function(t){n("5yI8")},"data-v-03f5e3c9",null);e.default=v.exports},gMbC:function(t,e,n){var s=n("hrPF"),r=n("1vyl");t.exports=function(t){return r(s(t))}},kKGf:function(t,e,n){"use strict";var s=n("yG5q"),r={name:"AppForm",props:{inputs:Array,results:Object,stepper:{type:Boolean,default:!1},shuffle:{type:Boolean,default:!1}},data:function(){return{formValues:{},iter:1}},methods:{formUpdated:function(t){this.$emit("form-updated",t)},incrementIter:function(){this.iter++},decrementIter:function(){this.iter>1&&this.iter--},submitHandler:function(t){this.$emit("form-complete",t)},submitForm:function(){this.$emit("form-complete",this.formValues)}},computed:{c_inputs:function(){return this.shuffle?s(this.inputs):this.inputs},c_inputsAsArrays:function(){for(var t=[],e=0;e<this.c_inputs.length;e++)t.push([this.c_inputs[e]]);return t}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-form"},[t.stepper?n("div",{staticClass:"form-container"},[t._l(t.c_inputsAsArrays,function(e){return n("FormulateForm",t._b({directives:[{name:"show",rawName:"v-show",value:t.c_inputsAsArrays[t.iter-1][0].name==e[0].name,expression:"c_inputsAsArrays[iter - 1][0].name == item[0].name"}],key:e[0].name,attrs:{schema:e},model:{value:t.formValues,callback:function(e){t.formValues=e},expression:"formValues"}},"FormulateForm",e,!1))}),t._v(" "),n("span",{staticClass:"controls"},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.iter>1,expression:"iter > 1"}],attrs:{text:"",color:"primary"},on:{click:t.decrementIter}},[t._v("Previous")]),t._v(" "),t.iter<t.c_inputs.length?n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.incrementIter}},[t._v("Next")]):n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.submitForm}},[t._v("Submit")])],1)],2):n("div",{staticClass:"form-container"},[n("FormulateForm",{attrs:{schema:t.c_inputs},on:{submit:t.submitHandler,input:t.formUpdated},model:{value:t.formValues,callback:function(e){t.formValues=e},expression:"formValues"}}),t._v(" "),n("span",{staticClass:"controls"},[n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.submitForm}},[t._v("Submit")])],1)],1)])},staticRenderFns:[]};var i=n("VU/8")(r,o,!1,function(t){n("FYZt")},"data-v-590e07ae",null);e.a=i.exports},"pT+f":function(t,e){},yG5q:function(t,e,n){var s=n("gMbC"),r=n("2xZY"),o=n("NGEn");t.exports=function(t){return(o(t)?s:r)(t)}}});
//# sourceMappingURL=3.1d81b365d171dd2c6e9f.js.map