(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(t,e,n){"use strict";n.r(e);n(26),n(23);var l=n(3),r=n(1),c=n(46),o=n.n(c),d=r.a.extend({data:function(){return{name:"",email:"",subject:"",message:""}},methods:{submit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/","https://docs.google.com/forms/u/0/d/e/1FAIpQLSeoSwm1nyLq9twZApkFpyI8pHcRM1eZsCO7VBadRk8SD8JL9A/formResponse",(n=new FormData).append("entry.1656591080",t.name),n.append("entry.2052484463",t.email),n.append("entry.1555034560",t.subject),n.append("entry.576767999",t.message),e.next=9,o.a.post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLSeoSwm1nyLq9twZApkFpyI8pHcRM1eZsCO7VBadRk8SD8JL9A/formResponse",n);case 9:t.$router.push("contact/thanks");case 10:case"end":return e.stop()}}),e)})))()}}}),m=n(22),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"has-text-centered"},[t._m(0),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("\n    Let's get in touch\n  ")]),t._v(" "),n("div",{staticClass:"has-text-left"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[t._m(1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"field is-horizontal"},[t._m(2),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("p",{staticClass:"control is-expanded has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),t._m(3)])]),t._v(" "),n("div",{staticClass:"field"},[n("p",{staticClass:"control is-expanded has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t._m(4)])])])]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[t._m(5),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})])])])]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[t._m(6),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea",attrs:{required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])])])]),t._v(" "),t._m(7)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title"},[e("i",{staticClass:"fas fa-envelope"}),this._v(" Contact")])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content has-text-centered"},[e("h2",[e("i",{staticClass:"fas fa-cat"}),this._v(" Say hello")]),this._v(" "),e("p",[this._v("\n            Want to get in touch? I'm not currently looking for a job, but\n            welcome feedback and chat."),e("br"),this._v("\n            Fill out the form below and I will try my best to reply to you.\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("From")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-user"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-envelope"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("Subject")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("Message")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field is-horizontal"},[e("div",{staticClass:"field-label"}),this._v(" "),e("div",{staticClass:"field-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-paper-plane"})]),this._v(" "),e("span",[this._v("Send")])])])])])])}],!1,null,null,null);e.default=component.exports}}]);