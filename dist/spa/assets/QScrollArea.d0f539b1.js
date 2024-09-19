import{u as Ce,a as qe}from"./use-dark.d0a1fcbf.js";import{r as g,m as Te,u as O,a as F,o as A,T as N,v as Z,h as y,j as X,U as k,V as we,w as B,W as _e,X as Ee,Y as Pe,Z as Me,_ as Oe,$ as q,a0 as Ae,a1 as P,a2 as H,a3 as G,a4 as D,a5 as x,a6 as j,a7 as He,d as p,a8 as De,a9 as je,aa as $e,t as Le,x as J,z as M,ab as $,ac as ee}from"./index.429e91c8.js";function Re(){const l=g(!Te.value);return l.value===!1&&O(()=>{l.value=!0}),{isHydrated:l}}const ce=typeof ResizeObserver!="undefined",te=ce===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var le=F({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(l,{emit:a}){let n=null,c,e={width:-1,height:-1};function i(s){s===!0||l.debounce===0||l.debounce==="0"?r():n===null&&(n=setTimeout(r,l.debounce))}function r(){if(n!==null&&(clearTimeout(n),n=null),c){const{offsetWidth:s,offsetHeight:u}=c;(s!==e.width||u!==e.height)&&(e={width:s,height:u},a("resize",e))}}const{proxy:t}=X();if(t.trigger=i,ce===!0){let s;const u=m=>{c=t.$el.parentNode,c?(s=new ResizeObserver(i),s.observe(c),r()):m!==!0&&Z(()=>{u(!0)})};return O(()=>{u()}),A(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():c&&s.unobserve(c))}),N}else{let m=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",i,k.passive),u=void 0)},b=function(){m(),c&&c.contentDocument&&(u=c.contentDocument.defaultView,u.addEventListener("resize",i,k.passive),r())};const{isHydrated:s}=Re();let u;return O(()=>{Z(()=>{c=t.$el,c&&b()})}),A(m),()=>{if(s.value===!0)return y("object",{class:"q--avoid-card-border",style:te.style,tabindex:-1,type:"text/html",data:te.url,"aria-hidden":"true",onLoad:b})}}}});const{passive:ie}=k,ke=["both","horizontal","vertical"];var Be=F({name:"QScrollObserver",props:{axis:{type:String,validator:l=>ke.includes(l),default:"vertical"},debounce:[String,Number],scrollTarget:we},emits:["scroll"],setup(l,{emit:a}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,e,i;B(()=>l.scrollTarget,()=>{s(),t()});function r(){c!==null&&c();const b=Math.max(0,Ee(e)),h=Pe(e),f={top:b-n.position.top,left:h-n.position.left};if(l.axis==="vertical"&&f.top===0||l.axis==="horizontal"&&f.left===0)return;const z=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:b,left:h},n.directionChanged=n.direction!==z,n.delta=f,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),a("scroll",{...n})}function t(){e=_e(i,l.scrollTarget),e.addEventListener("scroll",u,ie),u(!0)}function s(){e!==void 0&&(e.removeEventListener("scroll",u,ie),e=void 0)}function u(b){if(b===!0||l.debounce===0||l.debounce==="0")r();else if(c===null){const[h,f]=l.debounce?[setTimeout(r,l.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];c=()=>{f(h),c=null}}}const{proxy:m}=X();return B(()=>m.$q.lang.rtl,r),O(()=>{i=m.$el.parentNode,t()}),A(()=>{c!==null&&c(),s()}),Object.assign(m,{trigger:u,getPosition:()=>n}),N}});const V={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},xe=Object.keys(V);V.all=!0;function re(l){const a={};for(const n of xe)l[n]===!0&&(a[n]=!0);return Object.keys(a).length===0?V:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Fe=["INPUT","TEXTAREA"];function oe(l,a){return a.event===void 0&&l.target!==void 0&&l.target.draggable!==!0&&typeof a.handler=="function"&&Fe.includes(l.target.nodeName.toUpperCase())===!1&&(l.qClonedBy===void 0||l.qClonedBy.indexOf(a.uid)===-1)}function Ne(){if(window.getSelection!==void 0){const l=window.getSelection();l.empty!==void 0?l.empty():l.removeAllRanges!==void 0&&(l.removeAllRanges(),Me.is.mobile!==!0&&l.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function L(l,a,n){const c=x(l);let e,i=c.left-a.event.x,r=c.top-a.event.y,t=Math.abs(i),s=Math.abs(r);const u=a.direction;u.horizontal===!0&&u.vertical!==!0?e=i<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=r<0?"up":"down":u.up===!0&&r<0?(e="up",t>s&&(u.left===!0&&i<0?e="left":u.right===!0&&i>0&&(e="right"))):u.down===!0&&r>0?(e="down",t>s&&(u.left===!0&&i<0?e="left":u.right===!0&&i>0&&(e="right"))):u.left===!0&&i<0?(e="left",t<s&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down"))):u.right===!0&&i>0&&(e="right",t<s&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down")));let m=!1;if(e===void 0&&n===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};e=a.event.lastDir,m=!0,e==="left"||e==="right"?(c.left-=i,t=0,i=0):(c.top-=r,s=0,r=0)}return{synthetic:m,payload:{evt:l,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:c,direction:e,isFirst:a.event.isFirst,isFinal:n===!0,duration:Date.now()-a.event.time,distance:{x:t,y:s},offset:{x:i,y:r},delta:{x:c.left-a.event.lastX,y:c.top-a.event.lastY}}}}let Xe=0;var ae=Oe({name:"touch-pan",beforeMount(l,{value:a,modifiers:n}){if(n.mouse!==!0&&q.has.touch!==!0)return;function c(i,r){n.mouse===!0&&r===!0?He(i):(n.stop===!0&&D(i),n.prevent===!0&&G(i))}const e={uid:"qvtp_"+Xe++,handler:a,modifiers:n,direction:re(n),noop:N,mouseStart(i){oe(i,e)&&Ae(i)&&(P(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(i,!0))},touchStart(i){if(oe(i,e)){const r=i.target;P(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(i)}},start(i,r){if(q.is.firefox===!0&&H(l,!0),e.lastEvt=i,r===!0||n.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&G(u),i.cancelBubble===!0&&D(u),Object.assign(u,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[e.uid]:i.qClonedBy.concat(e.uid)}),e.initialEvent={target:i.target,event:u}}D(i)}const{left:t,top:s}=x(i);e.event={x:t,y:s,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:s}},move(i){if(e.event===void 0)return;const r=x(i),t=r.left-e.event.x,s=r.top-e.event.y;if(t===0&&s===0)return;e.lastEvt=i;const u=e.event.mouse===!0,m=()=>{c(i,u);let f;n.preserveCursor!==!0&&n.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ne(),e.styleCleanup=z=>{if(e.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),u===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};z!==void 0?setTimeout(()=>{T(),z()},50):T()}else z!==void 0&&z()}};if(e.event.detected===!0){e.event.isFirst!==!0&&c(i,e.event.mouse);const{payload:f,synthetic:z}=L(i,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(i):(e.styleCleanup===void 0&&e.event.isFirst===!0&&m(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=z===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){m(),e.event.detected=!0,e.move(i);return}const b=Math.abs(t),h=Math.abs(s);b!==h&&(e.direction.horizontal===!0&&b>h||e.direction.vertical===!0&&b<h||e.direction.up===!0&&b<h&&s<0||e.direction.down===!0&&b<h&&s>0||e.direction.left===!0&&b>h&&t<0||e.direction.right===!0&&b>h&&t>0?(e.event.detected=!0,e.move(i)):e.end(i,!0))},end(i,r){if(e.event!==void 0){if(j(e,"temp"),q.is.firefox===!0&&H(l,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(L(i===void 0?e.lastEvt:i,e).payload);const{payload:t}=L(i===void 0?e.lastEvt:i,e,!0),s=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(l.__qtouchpan=e,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";P(e,"main",[[l,"mousedown","mouseStart",`passive${i}`]])}q.has.touch===!0&&P(e,"main",[[l,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[l,"touchmove","noop","notPassiveCapture"]])},updated(l,a){const n=l.__qtouchpan;n!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&n.end(),n.handler=a.value),n.direction=re(a.modifiers))},beforeUnmount(l){const a=l.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),j(a,"main"),j(a,"temp"),q.is.firefox===!0&&H(l,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete l.__qtouchpan)}});const ne=["vertical","horizontal"],R={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ue={prevent:!0,mouse:!0,mouseAllDir:!0},se=l=>l>=250?50:Math.ceil(l/5);var Qe=F({name:"QScrollArea",props:{...Ce,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:a,emit:n}){const c=g(!1),e=g(!1),i=g(!1),r={vertical:g(0),horizontal:g(0)},t={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:s}=X(),u=qe(l,s.$q);let m=null,b;const h=g(null),f=p(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=p(()=>{const o=t.vertical.size.value-r.vertical.value;if(o<=0)return 0;const v=M(t.vertical.position.value/o,0,1);return Math.round(v*1e4)/1e4}),t.vertical.thumbHidden=p(()=>(l.visible===null?i.value:l.visible)!==!0&&c.value===!1&&e.value===!1||t.vertical.size.value<=r.vertical.value+1),t.vertical.thumbStart=p(()=>t.vertical.percentage.value*(r.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=p(()=>Math.round(M(r.vertical.value*r.vertical.value/t.vertical.size.value,se(r.vertical.value),r.vertical.value))),t.vertical.style=p(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=p(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=p(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=p(()=>{const o=t.horizontal.size.value-r.horizontal.value;if(o<=0)return 0;const v=M(Math.abs(t.horizontal.position.value)/o,0,1);return Math.round(v*1e4)/1e4}),t.horizontal.thumbHidden=p(()=>(l.visible===null?i.value:l.visible)!==!0&&c.value===!1&&e.value===!1||t.horizontal.size.value<=r.horizontal.value+1),t.horizontal.thumbStart=p(()=>t.horizontal.percentage.value*(r.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=p(()=>Math.round(M(r.horizontal.value*r.horizontal.value/t.horizontal.size.value,se(r.horizontal.value),r.horizontal.value))),t.horizontal.style=p(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[s.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=p(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=p(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const z=p(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),T=[[ae,o=>{I(o,"vertical")},void 0,{vertical:!0,...ue}]],ve=[[ae,o=>{I(o,"horizontal")},void 0,{horizontal:!0,...ue}]];function Y(){const o={};return ne.forEach(v=>{const d=t[v];o[v+"Position"]=d.position.value,o[v+"Percentage"]=d.percentage.value,o[v+"Size"]=d.size.value,o[v+"ContainerSize"]=r[v].value}),o}const Q=De(()=>{const o=Y();o.ref=s,n("scroll",o)},0);function U(o,v,d){if(ne.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?ee:$)(h.value,v,d)}function de({height:o,width:v}){let d=!1;r.vertical.value!==o&&(r.vertical.value=o,d=!0),r.horizontal.value!==v&&(r.horizontal.value=v,d=!0),d===!0&&w()}function fe({position:o}){let v=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,v=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,v=!0),v===!0&&w()}function he({height:o,width:v}){t.horizontal.size.value!==v&&(t.horizontal.size.value=v,w()),t.vertical.size.value!==o&&(t.vertical.size.value=o,w())}function I(o,v){const d=t[v];if(o.isFirst===!0){if(d.thumbHidden.value===!0)return;b=d.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const C=R[v],E=r[v].value,ze=(d.size.value-E)/(E-d.thumbSize.value),ye=o.distance[C.dist],Se=b+(o.direction===C.dir?1:-1)*ye*ze;W(Se,v)}function K(o,v){const d=t[v];if(d.thumbHidden.value!==!0){const C=o[R[v].offset];if(C<d.thumbStart.value||C>d.thumbStart.value+d.thumbSize.value){const E=C-d.thumbSize.value/2;W(E/r[v].value*d.size.value,v)}d.ref.value!==null&&d.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function me(o){K(o,"vertical")}function be(o){K(o,"horizontal")}function w(){c.value=!0,m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,c.value=!1},l.delay),l.onScroll!==void 0&&Q()}function W(o,v){h.value[R[v].scroll]=o}let S=null;function pe(){S!==null&&clearTimeout(S),S=setTimeout(()=>{S=null,i.value=!0},s.$q.platform.is.ios?50:0)}function ge(){S!==null&&(clearTimeout(S),S=null),i.value=!1}let _=null;return B(()=>s.$q.lang.rtl,o=>{h.value!==null&&$(h.value,Math.abs(t.horizontal.position.value)*(o===!0?-1:1))}),je(()=>{_={top:t.vertical.position.value,left:t.horizontal.position.value}}),$e(()=>{if(_===null)return;const o=h.value;o!==null&&($(o,_.left),ee(o,_.top))}),A(Q.cancel),Object.assign(s,{getScrollTarget:()=>h.value,getScroll:Y,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:U,setScrollPercentage(o,v,d){U(o,v*(t[o].size.value-r[o].value)*(o==="horizontal"&&s.$q.lang.rtl===!0?-1:1),d)}}),()=>y("div",{class:f.value,onMouseenter:pe,onMouseleave:ge},[y("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:z.value},Le(a.default,[y(le,{debounce:0,onResize:he})])),y(Be,{axis:"both",onScroll:fe})]),y(le,{debounce:0,onResize:de}),y("div",{class:t.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:me}),y("div",{class:t.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:be}),J(y("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),T),J(y("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),ve)])}});export{le as Q,ae as T,Be as a,Qe as b,Ne as c};
