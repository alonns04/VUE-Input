(function(){"use strict";var n={5286:function(n,t,e){var r=e(3751),a=e(641);const o={style:{"text-align":"center"}},i=(0,a.Lk)("h1",null,"INPUT CON VUE",-1);function u(n,t,e,r,u,s){const c=(0,a.g2)("inputTag");return(0,a.uX)(),(0,a.CE)("div",o,[i,(0,a.bF)(c,{onOnTagsChange:s.handleOnTagsChange},null,8,["onOnTagsChange"])])}var s=e(33);const c={class:"inputTag"},l={class:"tags"},h=["onClick"];function g(n,t,e,o,i,u){return(0,a.uX)(),(0,a.CE)("div",c,[(0,a.Lk)("div",l,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.tags,((n,t)=>((0,a.uX)(),(0,a.CE)("div",{class:"tag",key:t},[(0,a.eW)((0,s.v_)(n)+" ",1),(0,a.Lk)("button",{onClick:t=>u.deleteTag(n)},"X",8,h)])))),128))]),(0,a.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...n)=>u.handleSubmit&&u.handleSubmit(...n)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>i.currentValue=n),onKeydown:t[1]||(t[1]=(...n)=>u.handleKeyDown&&u.handleKeyDown(...n))},null,544),[[r.Jo,i.currentValue]])],32)])}e(4114);var f={emits:["onTagsChange"],data(){return{currentValue:"",tags:[]}},methods:{handleKeyDown(n){"Backspace"===n.key&&""===this.currentValue&&(this.tags.pop(),this.$emit("OnTagsChange",this.tags))},handleSubmit(){if(""!==this.currentValue){const n=this.tags.some((n=>n===this.currentValue));n||(this.tags.push(this.currentValue),this.currentValue="",this.$emit("OnTagsChange",this.tags))}},deleteTag(n){this.tags=this.tags.filter((t=>t!==n)),this.$emit("OnTagsChange",this.tags)}}},d=e(6262);const p=(0,d.A)(f,[["render",g],["__scopeId","data-v-6502dade"]]);var v=p,b={components:{InputTag:v},methods:{handleOnTagsChange(n){console.log(n)}}};const m=(0,d.A)(b,[["render",u]]);var O=m;(0,r.Ef)(O).mount("#app")}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return n[r].call(o.exports,o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],a=n[l][1],o=n[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){n.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,a,o]}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(a in u)e.o(u,a)&&(e.m[a]=u[a]);if(s)var l=s(e)}for(t&&t(r);c<i.length;c++)o=i[c],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(l)},r=self["webpackChunkinput"]=self["webpackChunkinput"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(5286)}));r=e.O(r)})();
//# sourceMappingURL=app.dd81a25b.js.map