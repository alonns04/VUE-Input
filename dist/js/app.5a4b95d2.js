(function(){"use strict";var n={9763:function(n,t,e){var r=e(5130),a=e(6768);function o(n,t,e,r,o,u){const i=(0,a.g2)("inputTag");return(0,a.uX)(),(0,a.Wv)(i,{onOnTagsChange:u.handleOnTagsChange},null,8,["onOnTagsChange"])}var u=e(4232);const i={class:"inputTag"},s={class:"tags"},c=["onClick"];function l(n,t,e,o,l,h){return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("div",s,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.tags,((n,t)=>((0,a.uX)(),(0,a.CE)("div",{class:"tag",key:t},[(0,a.eW)((0,u.v_)(n)+" ",1),(0,a.Lk)("button",{onClick:t=>h.deleteTag(n)},"X",8,c)])))),128))]),(0,a.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...n)=>h.handleSubmit&&h.handleSubmit(...n)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>l.currentValue=n),onKeydown:t[1]||(t[1]=(...n)=>h.handleKeyDown&&h.handleKeyDown(...n))},null,544),[[r.Jo,l.currentValue]])],32)])}e(4114);var h={emits:["onTagsChange"],data(){return{currentValue:"",tags:[]}},methods:{handleKeyDown(n){"Backspace"===n.key&&""===this.currentValue&&(this.tags.pop(),this.$emit("OnTagsChange",this.tags))},handleSubmit(){if(""!==this.currentValue){const n=this.tags.some((n=>n===this.currentValue));n||(this.tags.push(this.currentValue),this.currentValue="",this.$emit("OnTagsChange",this.tags))}},deleteTag(n){this.tags=this.tags.filter((t=>t!==n)),this.$emit("OnTagsChange",this.tags)}}},f=e(1241);const g=(0,f.A)(h,[["render",l],["__scopeId","data-v-0e3e461b"]]);var d=g,p={components:{InputTag:d},methods:{handleOnTagsChange(n){console.log(n)}}};const v=(0,f.A)(p,[["render",o]]);var b=v;(0,r.Ef)(b).mount("#app")}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return n[r].call(o.exports,o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,r,a,o){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],a=n[l][1],o=n[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&o||u>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(i=!1,o<u&&(u=o));if(i){n.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,a,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var a,o,u=r[0],i=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(a in i)e.o(i,a)&&(e.m[a]=i[a]);if(s)var l=s(e)}for(t&&t(r);c<u.length;c++)o=u[c],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(l)},r=self["webpackChunkinput"]=self["webpackChunkinput"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(9763)}));r=e.O(r)})();
//# sourceMappingURL=app.5a4b95d2.js.map