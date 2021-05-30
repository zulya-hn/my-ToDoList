(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{255:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("0ace817b",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n(255)},259:function(t,e,n){var o=n(104)(!1);o.push([t.i,".task-card{border:2px solid #dee2e6}ul{list-style:none;margin:0;padding:0}li{border:1px solid #ccc;display:flex;justify-content:space-between;padding:.5rem 2rem;margin-bottom:1rem;align-items:center}.rm{background:#da1f24;color:#fff;border-radius:50%;font-weight:700}input{margin-right:1rem}.done{text-decoration:line-through}",""]),t.exports=o},260:function(t,e,n){"use strict";n.r(e);n(29),n(55),n(81);var o=n(256),r=n.n(o),c=(n(141),{props:{day:String},data:function(){return{title:""}},methods:{onSubmit:function(){if(this.title.trim()){var t={id:Date.now(),title:this.title,completed:!1,day:this.day};this.$emit("add-todo",t),this.title=""}}}}),l=n(61),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Create")])])}),[],!1,null,null,null).exports,m={components:{Draggable:r.a,AddTodo:d},data:function(){return{sat:{items:[]},sun:{items:[]},other:{items:[]}}},mounted:function(){this.getTodosFromStorage()},computed:{sats:{get:function(){return this.sat.items.slice().sort((function(a,b){return a.id<b.id||a.completed>b.completed}))},set:function(t){this.sat.items=t}},suns:{get:function(){return this.sun.items.slice().sort((function(a,b){return a.id<b.id||a.completed>b.completed}))},set:function(t){this.sun.items=t}},others:{get:function(){return this.other.items.slice().sort((function(a,b){return a.id<b.id||a.completed>b.completed}))},set:function(t){this.other.items=t}}},methods:{changeElementPosition:function(t,e){if(void 0!==t.added){t.added.element.day=e;var element=t.added.element,n=JSON.stringify(element);localStorage.setItem(element.id,n)}},removeTodo:function(t,e){e.items=e.items.filter((function(e){return e.id!==t})),localStorage.removeItem(t)},addTodo:function(t,e){e.items.push(t);var n=JSON.stringify(t);localStorage.setItem(t.id,n)},getTodosFromStorage:function(){for(var t=0,e=Object.keys(localStorage);t<e.length;t++){var n=e[t];localStorage.getItem(n);var o=localStorage.getItem(n);try{var r=JSON.parse(o);this[r.day].items.push(r)}catch(t){}}},changeTodoState:function(t){t.completed=!t.completed;var e=JSON.stringify(t);localStorage.setItem(t.id,e)}}},f=(n(258),Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("b-container",[n("div",{staticClass:"row my-lg-40"},[n("b-col",{staticClass:"task-card border-right-0"},[n("h2",{staticClass:"mt-24 text-center"},[t._v("Saturday")]),t._v(" "),n("AddTodo",{staticClass:"my-24",attrs:{day:"sat"},on:{"add-todo":function(e){return t.addTodo(e,t.sat)}}}),t._v(" "),n("draggable",{attrs:{group:"list"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},change:function(e){return t.changeElementPosition(e,"sat")}},model:{value:t.sats,callback:function(e){t.sats=e},expression:"sats"}},t._l(t.sats,(function(e){return n("li",{key:e.id,staticClass:"vertical-center"},[n("span",[n("label",{class:{done:e.completed},attrs:{for:e.id+e.title},on:{click:function(n){return t.changeTodoState(e)}}},[t._v("\n                "+t._s(e.title)+"\n              ")])]),t._v(" "),n("button",{staticClass:"rm",on:{click:function(n){return t.removeTodo(e.id,t.sat)}}},[t._v("×")])])})),0)],1),t._v(" "),n("b-col",{staticClass:"task-card"},[n("h2",{staticClass:"mt-24 text-center"},[t._v("Sunday")]),t._v(" "),n("AddTodo",{staticClass:"my-24",attrs:{day:"sun"},on:{"add-todo":function(e){return t.addTodo(e,t.sun)}}}),t._v(" "),n("draggable",{attrs:{group:"list"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},change:function(e){return t.changeElementPosition(e,"sun")}},model:{value:t.suns,callback:function(e){t.suns=e},expression:"suns"}},t._l(t.suns,(function(e){return n("li",{key:e.id,staticClass:"vertical-center"},[n("span",[n("label",{class:{done:e.completed},attrs:{for:e.id+e.title},on:{click:function(n){return t.changeTodoState(e)}}},[t._v("\n                "+t._s(e.title)+"\n              ")])]),t._v(" "),n("button",{staticClass:"rm",on:{click:function(n){return t.removeTodo(e.id,t.sun)}}},[t._v("×")])])})),0)],1)],1),t._v(" "),n("div",{staticClass:"row text-center"},[n("b-col",{staticClass:"task-card"},[n("h2",{staticClass:"mt-24 text-center"},[t._v("Other days")]),t._v(" "),n("AddTodo",{staticClass:"my-24",attrs:{day:"other"},on:{"add-todo":function(e){return t.addTodo(e,t.other)}}}),t._v(" "),n("draggable",{attrs:{group:"list"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},change:function(e){return t.changeElementPosition(e,"other")}},model:{value:t.others,callback:function(e){t.others=e},expression:"others"}},t._l(t.others,(function(e){return n("li",{key:e.id,staticClass:"vertical-center"},[n("span",[n("label",{class:{done:e.completed},attrs:{for:e.id+e.title},on:{click:function(n){return t.changeTodoState(e)}}},[t._v("\n                "+t._s(e.title)+"\n              ")])]),t._v(" "),n("button",{staticClass:"rm",on:{click:function(n){return t.removeTodo(e.id,t.other)}}},[t._v("×")])])})),0)],1)],1)])],1)}),[],!1,null,null,null));e.default=f.exports}}]);