(()=>{var t,e={6595:t=>{t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"panelTitle":"Add/Remove Runs","removeAllRuns":"Remove All Runs"},"ja":{"panelTitle":"走者情報の追加/削除","removeAllRuns":"全ての走者情報の削除"}}'),delete t.options._Ctor}},3569:(t,e,n)=>{"use strict";var r,o,i=n(5803),a=n(3559),s=n(8138),l=n.n(s),c=n(3415),u=n(4170),p=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(){return f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},f.apply(this,arguments)},d=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},h={defaultSetupTime:nodecg.Replicant("defaultSetupTime"),horaroImportSavedOpts:nodecg.Replicant("horaroImportSavedOpts"),horaroImportStatus:nodecg.Replicant("horaroImportStatus"),oengusImportStatus:nodecg.Replicant("oengusImportStatus"),runDataActiveRun:nodecg.Replicant("runDataActiveRun"),runDataActiveRunSurrounding:nodecg.Replicant("runDataActiveRunSurrounding"),runDataArray:nodecg.Replicant("runDataArray"),runFinishTimes:nodecg.Replicant("runFinishTimes"),timer:nodecg.Replicant("timer"),timerChangesDisabled:nodecg.Replicant("timerChangesDisabled"),twitchAPIData:nodecg.Replicant("twitchAPIData"),twitchChannelInfo:nodecg.Replicant("twitchChannelInfo"),twitchCommercialTimer:nodecg.Replicant("twitchCommercialTimer")},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.reps={},e}return p(e,t),e.prototype.setState=function(t){var e=t.name,n=t.val;i.ZP.set(this.reps,e,l()(n))},e.prototype.setReplicant=function(t){var e=t.name,n=t.val,r=t.merge,o=void 0===r||r,a=this.reps[e],s=n;a&&o&&"object"==typeof a&&!Array.isArray(a)&&(s=f(f({},l()(a)),n)),i.ZP.set(this.reps,e,l()(s)),h[e].value=l()(s)},d([u.mm],e.prototype,"setState",null),d([u.mm],e.prototype,"setReplicant",null),d([(0,u.Yl)({name:"ReplicantModule",namespaced:!0})],e)}(u.g4),m=(0,c.uD)("ReplicantModule"),g=n(504),y=n(9146),b=n(209),w=n(7653),R=n(1954),S=n(5010),x=n(9405),O=n(2377),_=n(6248);!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));const C=(0,_.Z)(w.Z,R.Z,S.Z,x.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:()=>!1,hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,O.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,O.XP)(t).find((e=>t[e]));return e&&o[e]||(0,O.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],r=this.getDefaultData();let o="material-icons";const i=t.indexOf("-"),a=i<=-1;a?n.push(t):(o=t.slice(0,i),function(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}(o)&&(o="")),r.class[o]=!0,r.class[t]=!a;const s=this.getSize();return s&&(r.style={fontSize:s}),this.applyColors(r),e(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);const o=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(o,n)])}},render(t){const e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),P=i.ZP.extend({name:"v-icon",$_wrapperFor:C,functional:!0,render(t,{data:e,children:n}){let r="";return e.domProps&&(r=e.domProps.textContent||e.domProps.innerHTML||r,delete e.domProps.textContent,delete e.domProps.innerHTML),t(C,e,r?[r]:n)}});var k=n(5925);function j(t){var e;try{var n=nodecg.getDialog(t),r=(null===(e=null==n?void 0:n.querySelector("iframe"))||void 0===e?void 0:e.contentWindow)||null;if(!r)throw new Error("Could not find the iFrame");return r}catch(e){nodecg.log.error('getDialog could not successfully find dialog "'.concat(t,'":'),e),window.alert("Attempted to open a NodeCG dialog but failed (if you are using a standalone version of a dashboard panel, this is not yet supported).")}return null}n(4807),n(7023),n(5654),n(779),n(8793);var A=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),D=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};const T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return A(e,t),Object.defineProperty(e.prototype,"disableRemoveAll",{get:function(){return["running","paused"].includes(this.timer.state)},enumerable:!1,configurable:!0}),e.prototype.openAddDialog=function(){var t=j("run-modification-dialog");t&&t.openDialog({mode:"New"})},e.prototype.removeAllRunsConfirm=function(){var t=j("alert-dialog");t&&t.openDialog({name:"RemoveAllRunsConfirm",func:this.removeAllRuns})},e.prototype.removeAllRuns=function(t){return e=this,n=void 0,o=function(){return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(e){switch(e.label){case 0:if(!t)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,nodecg.sendMessage("removeAllRuns")];case 2:case 3:return e.sent(),[3,4];case 4:return[2]}}))},new((r=Promise)||(r=Promise))((function(t,i){function a(t){try{l(o.next(t))}catch(t){i(t)}}function s(t){try{l(o.throw(t))}catch(t){i(t)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(a,s)}l((o=o.apply(e,n||[])).next())}));var e,n,r,o},e.prototype.mounted=function(){var t;(null===(t=window.frameElement)||void 0===t?void 0:t.parentElement)&&window.frameElement.parentElement.setAttribute("display-title",this.$t("panelTitle"))},D([m.State((function(t){return t.reps.timer}))],e.prototype,"timer",void 0),D([k.ZP],e)}(i.ZP);var Z=n(5440),$=n(6595);const I=n.n($)();var L=(0,Z.Z)(T,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e(y.Z,[e(b.Z,{staticClass:"green darken-2",on:{click:t.openAddDialog}},[e(P,{staticClass:"pr-2"},[t._v("\n      mdi-plus-box\n    ")]),t._v(t._s(t.$t("addNewRun"))+"\n  ")],1),t._v(" "),e(b.Z,{staticClass:"red darken-2 mt-3",attrs:{disabled:t.disableRemoveAll},on:{click:t.removeAllRunsConfirm}},[e(P,{staticClass:"pr-2"},[t._v("\n      mdi-delete\n    ")]),t._v(t._s(t.$t("removeAllRuns"))+"\n  ")],1)],1)}),[],!1,null,null,null);"function"==typeof I&&I(L);const z=L.exports;var E=n(8586);i.ZP.use(E.ZP);const M=new E.yh({strict:!1,state:{},modules:{ReplicantModule:v}});(function(t){return e=this,n=void 0,o=function(){return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(e){switch(e.label){case 0:return Object.keys(h).forEach((function(e){h[e].on("change",(function(n){t.commit("ReplicantModule/setState",{name:e,val:n})}))})),[4,NodeCG.waitForReplicants.apply(NodeCG,Object.keys(h).map((function(t){return h[t]})))];case 1:return e.sent(),(0,u.rT)(v,t),[2]}}))},new((r=Promise)||(r=Promise))((function(t,i){function a(t){try{l(o.next(t))}catch(t){i(t)}}function s(t){try{l(o.throw(t))}catch(t){i(t)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(a,s)}l((o=o.apply(e,n||[])).next())}));var e,n,r,o})(M).then((function(){new i.ZP({vuetify:g.Z,i18n:a.Z,store:M,el:"#App",render:function(t){return t(z)}})}))},779:(t,e,n)=>{"use strict";"undefined"!=typeof Reflect&&Reflect.getMetadata},2377:(t,e,n)=>{"use strict";n.d(e,{Do:()=>c,Ee:()=>d,RB:()=>u,XP:()=>p,ji:()=>a,kb:()=>s,qw:()=>o,uZ:()=>f,vO:()=>i});let r=!1;try{if("undefined"!=typeof window){const t=Object.defineProperty({},"passive",{get:()=>{r=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function o(t,e,n){const r=e.length-1;if(r<0)return void 0===t?n:t;for(let o=0;o<r;o++){if(null==t)return n;t=t[e[o]]}return null==t||void 0===t[e[r]]?n:t[e[r]]}function i(t,e,n){return null!=t&&e&&"string"==typeof e?void 0!==t[e]?t[e]:o(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function a(t,e){const n={};for(let r=0;r<e.length;r++){const o=e[r];void 0!==t[o]&&(n[o]=t[o])}return n}function s(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function l(t){return null!==t&&"object"==typeof t}const c=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function u(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=i(t,`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,e);if("string"!=typeof n)return n;e=n}return null==n?e:{component:n,props:{icon:e}}}function p(t){return Object.keys(t)}function f(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function d(t={},e={}){for(const n in e){const r=t[n],o=e[n];l(r)&&l(o)?t[n]=d(r,o):t[n]=o}return t}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<t.length;u++){for(var[n,o,i]=t[u],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,o,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={477:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,s,l]=n,c=0;if(a.some((e=>0!==t[e]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(e&&e(n);c<a.length;c++)i=a[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[468,81,170,325],(()=>r(3569)));o=r.O(o)})();