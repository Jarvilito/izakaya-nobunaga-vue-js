(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a314a"],{"013f":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row justify-center q-mt-xl q-mb-xl"},[i("q-card",{staticClass:"my-card text-indigo",staticStyle:{width:"350px"},attrs:{flat:""}},[i("q-card-section",{attrs:{align:"center"}},[i("img",{attrs:{src:e.logo,width:"300",height:"150"}})]),i("q-card-section",[i("q-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[i("q-input",{attrs:{rounded:"",outlined:"",hint:"Required *",label:"Email",rules:[function(t){return e.$v.email.email||"Invalid email format"},function(t){return e.$v.email.required||"Email Required"}]},on:{keydown:function(t){return e.$v.email.$touch()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"account_circle"}})]},proxy:!0}]),model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}}),i("q-input",{staticClass:"q-mt-md",attrs:{rounded:"",outlined:"",type:e.isPwd?"password":"text",label:"Password",hint:"Required *",rules:[function(t){return e.$v.password.required||"Please enter your password"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0},{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("q-separator"),i("q-card-actions",[i("q-btn",{staticClass:"full-width text-center",attrs:{type:"submit",rounded:"",icon:"launch",size:"20px",color:"primary"}},[e._v(" LOGIN")])],1)],1)],1)],1)],1)},r=[],n=(i("e669"),i("b5ae")),s=(i("fc1b"),i("2a19"),{data:function(){return{isPwd:!0,emailErrorMsg:"",isEmailValid:!1,email:"",password:"",logo:"statics/img/login.svg"}},validations:{email:{required:n["required"],email:n["email"]},password:{required:n["required"]}},methods:{login:function(){var e={email:this.email,password:this.password};console.log(e),this.$store.dispatch("auth/login",e)}}}),o=s,l=i("2877"),c=i("eebe"),d=i.n(c),u=i("f09f"),p=i("a370"),m=i("0378"),f=i("27f9"),w=i("0016"),q=i("eb85"),b=i("4b7e"),v=i("9c40"),y=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=y.exports;d()(y,"components",{QCard:u["a"],QCardSection:p["a"],QForm:m["a"],QInput:f["a"],QIcon:w["a"],QSeparator:q["a"],QCardActions:b["a"],QBtn:v["a"]})}}]);