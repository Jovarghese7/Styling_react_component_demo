(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o,c=n(0),i=n(11),r=n.n(i),a=(n(25),n(17)),l=n(3),s=(n(26),n(1)),u=function(e){return Object(s.jsx)("li",{className:"goal-item",onClick:function(){e.onDelete(e.id)},children:e.children})},d=(n(28),function(e){return Object(s.jsx)("ul",{className:"goal-list",children:e.items.map((function(t){return Object(s.jsx)(u,{id:t.id,onDelete:e.onDeleteItem,children:t.text},t.id)}))})}),b=n(12),j=n(13).a.button(o||(o=Object(b.a)(["\n\n  font: inherit;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #8b005d;\n  color: white;\n  background: #8b005d;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);\n  cursor: pointer;\n\n\n&:focus {\n  outline: none;\n}\n\n&:hover,\n&:active {\n  background: #ac0e77;\n  border-color: #ac0e77;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);\n}\n\n"]))),h=n(7),x=n.n(h),f=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],i=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),u=a[0],d=a[1];return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==o.trim().length?e.onAddGoal(o):d(!1)},children:[Object(s.jsxs)("div",{className:"".concat(x.a["form-control"]," ").concat(!u&&x.a.invalid),children:[Object(s.jsx)("label",{children:"Course Goal"}),Object(s.jsx)("input",{type:"text",onChange:function(e){e.target.value.trim().length>0&&d(!0),i(e.target.value)}})]}),Object(s.jsx)(j,{type:"submit",children:"Add Goal"})]})},m=(n(32),function(){var e=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(s.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"});return n.length>0&&(i=Object(s.jsx)(d,{items:n,onDeleteItem:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))}})),Object(s.jsxs)("div",{children:[Object(s.jsx)("section",{id:"goal-form",children:Object(s.jsx)(f,{onAddGoal:function(e){o((function(t){var n=Object(a.a)(t);return n.unshift({text:e,id:Math.random().toString()}),n}))}})}),Object(s.jsx)("section",{id:"goals",children:i})]})});r.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(m,{}))},7:function(e,t,n){e.exports={"form-control":"nmvigcYyLWE68qtkyo0LYA==",invalid:"luhjVkt3xhh31HlHGvyx5Q=="}}},[[33,1,2]]]);
//# sourceMappingURL=main.21e51228.chunk.js.map