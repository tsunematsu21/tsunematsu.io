(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(t,e,l){"use strict";var n=l(6),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("section",[this._t("default")],2)])])])}),[],!1,null,null,null);e.a=component.exports},213:function(t,e,l){"use strict";l.r(e);l(26),l(25);var n=l(3),o=l(0),c=l(44),r=l.n(c),d=l(197),v=o.a.extend({components:{AppSection:d.a},data:function(){return{isActive:!1,hasError:!1,name:"",email:"",subject:"",message:"",messageClass:""}},methods:{submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/","https://docs.google.com/forms/u/0/d/e/1FAIpQLSeoSwm1nyLq9twZApkFpyI8pHcRM1eZsCO7VBadRk8SD8JL9A/formResponse",l=new FormData,e.prev=3,l.append("entry.1656591080",t.name),l.append("entry.2052484463",t.email),l.append("entry.1555034560",t.subject),l.append("entry.576767999",t.message),e.next=10,r.a.post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLSeoSwm1nyLq9twZApkFpyI8pHcRM1eZsCO7VBadRk8SD8JL9A/formResponse",l);case 10:t.name="",t.email="",t.subject="",t.message="",t.hasError=!1,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),t.hasError=!0;case 20:return e.prev=20,t.isActive=!0,e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})))()},closeModal:function(){this.isActive=!1}}}),m=l(6),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"modal",class:{"is-active":t.isActive}},[l("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),l("div",{staticClass:"modal-content"},[l("div",{staticClass:"box"},[l("section",{staticClass:"content"},[t.hasError?[t._m(0),t._v(" "),l("p",[t._v("Error occurred...")])]:[t._m(1),t._v(" "),l("p",[t._v("Thanks for your message!")])]],2),t._v(" "),l("button",{staticClass:"button",on:{click:t.closeModal}},[t._v("Close")])])])]),t._v(" "),l("app-section",[l("h1",{staticClass:"title"},[l("i",{staticClass:"fas fa-envelope"}),t._v(" Get in touch")]),t._v(" "),l("p",[t._v("\n      Want to get in touch? I'm not currently looking for a job, but welcome\n      feedback and chat."),l("br"),t._v("\n      Fill out the form below and I will try my best to reply to you.\n    ")])]),t._v(" "),l("app-section",{staticClass:"is-small"},[l("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[l("div",{staticClass:"field is-horizontal"},[l("div",{staticClass:"field-label is-normal"},[l("label",{staticClass:"label"},[t._v("From")])]),t._v(" "),l("div",{staticClass:"field-body"},[l("div",{staticClass:"field"},[l("p",{staticClass:"control is-expanded has-icons-left"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),l("span",{staticClass:"icon is-small is-left"},[l("i",{staticClass:"fas fa-user"})])])]),t._v(" "),l("div",{staticClass:"field"},[l("p",{staticClass:"control is-expanded has-icons-left"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),l("span",{staticClass:"icon is-small is-left"},[l("i",{staticClass:"fas fa-envelope"})])])])])]),t._v(" "),l("div",{staticClass:"field is-horizontal"},[l("div",{staticClass:"field-label is-normal"},[l("label",{staticClass:"label"},[t._v("Subject")])]),t._v(" "),l("div",{staticClass:"field-body"},[l("div",{staticClass:"field"},[l("div",{staticClass:"control"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})])])])]),t._v(" "),l("div",{staticClass:"field is-horizontal"},[l("div",{staticClass:"field-label is-normal"},[l("label",{staticClass:"label"},[t._v("Message")])]),t._v(" "),l("div",{staticClass:"field-body"},[l("div",{staticClass:"field"},[l("div",{staticClass:"control"},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea",attrs:{required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])])])]),t._v(" "),l("div",{staticClass:"field is-horizontal"},[l("div",{staticClass:"field-label"}),t._v(" "),l("div",{staticClass:"field-body"},[l("div",{staticClass:"field"},[l("div",{staticClass:"control"},[l("button",{staticClass:"button is-primary"},[l("span",{staticClass:"icon"},[l("i",{staticClass:"fas fa-paper-plane"})]),t._v(" "),l("span",[t._v("Send")])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("i",{staticClass:"fas fa-skull-crossbones"}),this._v(" Failed...")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("i",{staticClass:"fas fa-thumbs-up"}),this._v(" Success")])}],!1,null,null,null);e.default=component.exports}}]);