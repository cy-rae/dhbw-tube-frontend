var oe=Object.defineProperty;var ie=(e,r,v)=>r in e?oe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:v}):e[r]=v;var N=(e,r,v)=>(ie(e,typeof r!="symbol"?r+"":r,v),v);import{o as se,f as re,a as ue,c as ce,g as de,p as fe,b as ve,Q as me,h as Y,e as pe,j as H,n as K,k as ge}from"./QSeparator.b3f791d7.js";import{a as L,aX as he,aY as be,d as V,h as I,e as te,j as M,r as $,a4 as ye,a7 as U,$ as Fe,al as Ve,a3 as Se,aZ as xe,a9 as Ce,aa as _e,u as qe,aj as je,v as ze,p as Ae,aQ as ke,A as Pe,a_ as Ie,K as Re,i as G,a$ as Qe,aH as $e,q as De,C as Ne,D as Q,E as Ee,F,H as Oe,I as Te,G as A,P as D,Q as Z,O as J}from"./index.20f70b14.js";import{a as Ue,Q as we}from"./QPage.f1093871.js";import"./use-dark.ed68e3ed.js";var Be=L({name:"QCardActions",props:{...he,vertical:Boolean},setup(e,{slots:r}){const v=be(e),x=V(()=>`q-card__actions ${v.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>I("div",{class:x.value},te(r.default))}});function E(e,r,v,x){const o=[];return e.forEach(d=>{x(d)===!0?o.push(d):r.push({failedPropValidation:v,file:d})}),o}function T(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),U(e)}const Ke={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Le=["rejected"];function Me({editable:e,dnd:r,getFileInput:v,addFilesToQueue:x}){const{props:o,emit:d,proxy:m}=M(),C=$(null),q=V(()=>o.accept!==void 0?o.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),u=V(()=>parseInt(o.maxFiles,10)),k=V(()=>parseInt(o.maxTotalSize,10));function _(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&ye(t);else{const l=v();l&&l!==t.target&&l.click(t)}}function p(t){e.value&&t&&x(null,t)}function a(t,l,g,b){let i=Array.from(l||t.target.files);const y=[],R=()=>{y.length!==0&&d("rejected",y)};if(o.accept!==void 0&&q.value.indexOf("*/")===-1&&(i=E(i,y,"accept",f=>q.value.some(h=>f.type.toUpperCase().startsWith(h)||f.name.toUpperCase().endsWith(h))),i.length===0))return R();if(o.maxFileSize!==void 0){const f=parseInt(o.maxFileSize,10);if(i=E(i,y,"max-file-size",h=>h.size<=f),i.length===0)return R()}if(o.multiple!==!0&&i.length!==0&&(i=[i[0]]),i.forEach(f=>{f.__key=f.webkitRelativePath+f.lastModified+f.name+f.size}),b===!0){const f=g.map(h=>h.__key);i=E(i,y,"duplicate",h=>f.includes(h.__key)===!1)}if(i.length===0)return R();if(o.maxTotalSize!==void 0){let f=b===!0?g.reduce((h,w)=>h+w.size,0):0;if(i=E(i,y,"max-total-size",h=>(f+=h.size,f<=k.value)),i.length===0)return R()}if(typeof o.filter=="function"){const f=o.filter(i);i=E(i,y,"filter",h=>f.includes(h))}if(o.maxFiles!==void 0){let f=b===!0?g.length:0;if(i=E(i,y,"max-files",()=>(f++,f<=u.value)),i.length===0)return R()}if(R(),i.length!==0)return i}function c(t){T(t),r.value!==!0&&(r.value=!0)}function s(t){U(t),(t.relatedTarget!==null||Fe.is.safari!==!0?t.relatedTarget!==C.value:document.elementsFromPoint(t.clientX,t.clientY).includes(C.value)===!1)===!0&&(r.value=!1)}function j(t){T(t);const l=t.dataTransfer.files;l.length!==0&&x(null,l),r.value=!1}function P(t){if(r.value===!0)return I("div",{ref:C,class:`q-${t}__dnd absolute-full`,onDragenter:T,onDragover:T,onDragleave:s,onDrop:j})}return Object.assign(m,{pickFiles:_,addFiles:p}),{pickFiles:_,addFiles:p,onDragover:c,onDragleave:s,processFiles:a,getDndNode:P,maxFilesNumber:u,maxTotalSizeNumber:k}}var ee=L({name:"QFile",inheritAttrs:!1,props:{...se,...re,...Ke,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ue,...Le],setup(e,{slots:r,emit:v,attrs:x}){const{proxy:o}=M(),d=ce(),m=$(null),C=$(!1),q=de(e),{pickFiles:u,onDragover:k,onDragleave:_,processFiles:p,getDndNode:a}=Me({editable:d.editable,dnd:C,getFileInput:W,addFilesToQueue:X}),c=fe(e),s=V(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),j=V(()=>Y(s.value)),P=V(()=>s.value.map(n=>n.name).join(", ")),t=V(()=>xe(s.value.reduce((n,S)=>n+S.size,0))),l=V(()=>({totalSize:t.value,filesNumber:s.value.length,maxFiles:e.maxFiles})),g=V(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:q.value,...x,id:d.targetUid.value,disabled:d.editable.value!==!0})),b=V(()=>"q-file q-field--auto-height"+(C.value===!0?" q-file--dnd":"")),i=V(()=>e.multiple===!0&&e.append===!0);function y(n){const S=s.value.slice();S.splice(n,1),f(S)}function R(n){const S=s.value.indexOf(n);S!==-1&&y(S)}function f(n){v("update:modelValue",e.multiple===!0?n:n[0])}function h(n){n.keyCode===13&&Se(n)}function w(n){(n.keyCode===13||n.keyCode===32)&&u(n)}function W(){return m.value}function X(n,S){const z=p(n,S,s.value,i.value),B=W();B!=null&&(B.value=""),z!==void 0&&((e.multiple===!0?e.modelValue&&z.every(ne=>s.value.includes(ne)):e.modelValue===z[0])||f(i.value===!0?s.value.concat(z):z))}function O(){return[I("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function ae(){if(r.file!==void 0)return s.value.length===0?O():s.value.map((S,z)=>r.file({index:z,file:S,ref:this}));if(r.selected!==void 0)return s.value.length===0?O():r.selected({files:s.value,ref:this});if(e.useChips===!0)return s.value.length===0?O():s.value.map((S,z)=>I(me,{key:"file-"+z,removable:d.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{y(z)}},()=>I("span",{class:"ellipsis",textContent:S.name})));const n=e.displayValue!==void 0?e.displayValue:P.value;return n.length!==0?[I("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:O()}function le(){const n={ref:m,...g.value,...c.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:X};return e.multiple===!0&&(n.multiple=!0),I("input",n)}return Object.assign(d,{fieldClass:b,emitValue:f,hasValue:j,inputRef:m,innerValue:s,floatingLabel:V(()=>j.value===!0||Y(e.displayValue)),computedCounter:V(()=>{if(e.counterLabel!==void 0)return e.counterLabel(l.value);const n=e.maxFiles;return`${s.value.length}${n!==void 0?" / "+n:""} (${t.value})`}),getControlChild:()=>a("file"),getControl:()=>{const n={ref:d.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return d.editable.value===!0&&Object.assign(n,{onDragover:k,onDragleave:_,onKeydown:h,onKeyup:w}),I("div",n,[le()].concat(ae()))}}),Object.assign(o,{removeAtIndex:y,removeFile:R,getNativeElement:()=>m.value}),Ve(o,"nativeEl",()=>m.value),ve(d)}}),We=L({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:r,emit:v}){const x=M(),o=$(null);let d=0;const m=[];function C(a){const c=typeof a=="boolean"?a:e.noErrorFocus!==!0,s=++d,j=(l,g)=>{v(`validation${l===!0?"Success":"Error"}`,g)},P=l=>{const g=l.validate();return typeof g.then=="function"?g.then(b=>({valid:b,comp:l}),b=>({valid:!1,comp:l,err:b})):Promise.resolve({valid:g,comp:l})};return(e.greedy===!0?Promise.all(m.map(P)).then(l=>l.filter(g=>g.valid!==!0)):m.reduce((l,g)=>l.then(()=>P(g).then(b=>{if(b.valid===!1)return Promise.reject(b)})),Promise.resolve()).catch(l=>[l])).then(l=>{if(l===void 0||l.length===0)return s===d&&j(!0),!0;if(s===d){const{comp:g,err:b}=l[0];if(b!==void 0&&console.error(b),j(!1,g),c===!0){const i=l.find(({comp:y})=>typeof y.focus=="function"&&je(y.$)===!1);i!==void 0&&i.comp.focus()}}return!1})}function q(){d++,m.forEach(a=>{typeof a.resetValidation=="function"&&a.resetValidation()})}function u(a){a!==void 0&&U(a);const c=d+1;C().then(s=>{c===d&&s===!0&&(e.onSubmit!==void 0?v("submit",a):a!==void 0&&a.target!==void 0&&typeof a.target.submit=="function"&&a.target.submit())})}function k(a){a!==void 0&&U(a),v("reset"),ze(()=>{q(),e.autofocus===!0&&e.noResetFocus!==!0&&_()})}function _(){pe(()=>{if(o.value===null)return;const a=o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"),c=>c.tabIndex!==-1);a!=null&&a.focus({preventScroll:!0})})}Ae(ke,{bindComponent(a){m.push(a)},unbindComponent(a){const c=m.indexOf(a);c!==-1&&m.splice(c,1)}});let p=!1;return Ce(()=>{p=!0}),_e(()=>{p===!0&&e.autofocus===!0&&_()}),qe(()=>{e.autofocus===!0&&_()}),Object.assign(x.proxy,{validate:C,resetValidation:q,submit:u,reset:k,focus:_,getValidationComponents:()=>m}),()=>I("form",{class:"q-form",ref:o,onSubmit:u,onReset:k},te(r.default))}});class Xe{constructor(){N(this,"title");N(this,"creator");N(this,"description");N(this,"video");N(this,"cover");this.title="",this.creator="",this.description="",this.video=null,this.cover=null}reset(){this.title="",this.creator="",this.description="",this.video=null,this.cover=null}}const Ye={class:"row q-col-gutter-md"},He={class:"col"},Ge={class:"col"},Ze={class:"row q-col-gutter-md q-pt-md"},Je={class:"col"},et={class:"col"},tt={class:"row q-col-gutter-md q-pt-md"},st=Pe({__name:"UploadPage",setup(e){const r=Ie(),v=Re(),x=G(Qe),o=G($e),d=$(null),m=$(null),C=$(null),q=$(null),u=De(new Xe);async function k(){var j,P,t,l;const p=(j=d.value)==null?void 0:j.validate(),a=(P=m.value)==null?void 0:P.validate(),c=(t=C.value)==null?void 0:t.validate(),s=(l=q.value)==null?void 0:l.validate();!p||!a||!c||!s||!u.video||!u.cover||await x.post(u)}function _(){r.notify({type:"negative",message:v.t("error-message.file-size-exceeded"),position:"top"})}return(p,a)=>(Ee(),Ne(Ue,{class:"row items-center justify-evenly"},{default:Q(()=>[F(we,null,{default:Q(()=>[F(H,{class:"q-pa-none q-pb-md text-h5"},{default:Q(()=>[Oe(Te(p.$t("upload.title")),1)]),_:1}),F(H,{class:"q-pa-none"},{default:Q(()=>[F(A(We),{class:"q-gutter-md"},{default:Q(()=>[D("div",Ye,[D("div",He,[F(A(K),{ref_key:"titleRef",ref:d,modelValue:u.title,"onUpdate:modelValue":a[0]||(a[0]=c=>u.title=c),placeholder:p.$t("upload.placeholder.title"),rules:[()=>A(o).isSet(u.title)],autofocus:!1,required:"",standout:"",maxlength:"120"},null,8,["modelValue","placeholder","rules"])]),D("div",Ge,[F(A(K),{ref_key:"creatorRef",ref:m,modelValue:u.creator,"onUpdate:modelValue":a[1]||(a[1]=c=>u.creator=c),placeholder:p.$t("upload.placeholder.creator"),rules:[()=>A(o).isSet(u.creator)],autofocus:!1,required:"",standout:"",maxlength:"120"},null,8,["modelValue","placeholder","rules"])])]),D("div",Ze,[D("div",Je,[F(A(ee),{ref_key:"videoRef",ref:C,modelValue:u.video,"onUpdate:modelValue":a[2]||(a[2]=c=>u.video=c),label:p.$t("upload.placeholder.video"),rules:[()=>A(o).isSet(u.video)],onRejected:_,accept:"video/*","max-file-size":"4294967296",standout:"",clearable:""},{prepend:Q(()=>[F(Z,{name:"attach_file"})]),_:1},8,["modelValue","label","rules"])]),D("div",et,[F(A(ee),{ref_key:"coverRef",ref:q,modelValue:u.cover,"onUpdate:modelValue":a[3]||(a[3]=c=>u.cover=c),label:p.$t("upload.placeholder.cover"),rules:[()=>A(o).isSet(u.cover)],onRejected:_,accept:"image/*","max-file-size":"10485760",standout:"",clearable:""},{prepend:Q(()=>[F(Z,{name:"attach_file"})]),_:1},8,["modelValue","label","rules"])])]),D("div",tt,[F(A(K),{modelValue:u.description,"onUpdate:modelValue":a[4]||(a[4]=c=>u.description=c),placeholder:p.$t("upload.placeholder.description"),autofocus:!1,standout:"",type:"textarea",class:"full-width",maxlength:"5000"},null,8,["modelValue","placeholder"])])]),_:1})]),_:1}),F(ge,{class:"q-my-md"}),F(Be,{align:"center",class:"q-pa-none"},{default:Q(()=>[F(J,{label:p.$t("upload.label.reset"),onClick:a[5]||(a[5]=c=>u.reset()),color:"grey-5","no-caps":"","text-color":"black",unelevated:""},null,8,["label"]),F(J,{label:p.$t("upload.label.upload"),onClick:k,color:"primary","no-caps":"",unelevated:""},null,8,["label"])]),_:1})]),_:1})]),_:1}))}});export{st as default};