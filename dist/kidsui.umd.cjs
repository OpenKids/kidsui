(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports):typeof define==`function`&&define.amd?define([`exports`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.KidsUI={}))})(this,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var t=`
  :host {
    /* ---- Colors ---- */
    --kids-color-primary: #4F46E5;
    --kids-color-secondary: #F43F7A;
    --kids-color-accent: #10B964;
    --kids-color-warning: #F5A623;
    --kids-color-error: #EF4444;
    --kids-color-info: #06B6D4;
    --kids-color-success: #10B964;
    --kids-color-surface: #FFFFFF;
    --kids-color-surface-alt: #F5F3FF;
    --kids-color-text: #1E1B4B;
    --kids-color-text-light: #FFFFFF;
    --kids-color-border: #E0DAF5;

    /* ---- Derived alpha colors (for backgrounds, glows, overlays) ---- */
    --kids-alpha-primary-12: rgba(79, 70, 229, 0.12);
    --kids-alpha-primary-15: rgba(79, 70, 229, 0.15);
    --kids-alpha-primary-18: rgba(79, 70, 229, 0.18);
    --kids-alpha-secondary-12: rgba(244, 63, 122, 0.12);
    --kids-alpha-secondary-15: rgba(244, 63, 122, 0.15);
    --kids-alpha-accent-12: rgba(16, 185, 100, 0.12);
    --kids-alpha-accent-15: rgba(16, 185, 100, 0.15);
    --kids-alpha-accent-20: rgba(16, 185, 100, 0.2);
    --kids-alpha-warning-12: rgba(245, 166, 35, 0.12);
    --kids-alpha-warning-15: rgba(245, 166, 35, 0.15);
    --kids-alpha-error-12: rgba(239, 68, 68, 0.12);
    --kids-alpha-error-15: rgba(239, 68, 68, 0.15);
    --kids-alpha-info-12: rgba(6, 182, 212, 0.12);

    /* ---- Typography ---- */
    --kids-font-family: 'Nunito', 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
    --kids-font-size-sm: 0.85rem;
    --kids-font-size-md: 1rem;
    --kids-font-size-lg: 1.25rem;
    --kids-font-size-xl: 1.6rem;
    --kids-font-weight-normal: 600;
    --kids-font-weight-bold: 800;

    /* ---- Shape ---- */
    --kids-radius-sm: 10px;
    --kids-radius-md: 16px;
    --kids-radius-lg: 24px;
    --kids-radius-full: 9999px;

    /* ---- Spacing ---- */
    --kids-space-xs: 4px;
    --kids-space-sm: 8px;
    --kids-space-md: 16px;
    --kids-space-lg: 24px;
    --kids-space-xl: 32px;

    /* ---- Shadows (warm, friendly) ---- */
    --kids-shadow-sm: 0 2px 8px rgba(30, 27, 75, 0.08);
    --kids-shadow-md: 0 4px 16px rgba(30, 27, 75, 0.10);
    --kids-shadow-lg: 0 8px 30px rgba(30, 27, 75, 0.14);

    /* ---- Animation ---- */
    --kids-anim-duration-fast: 0.15s;
    --kids-anim-duration-normal: 0.3s;
    --kids-anim-duration-slow: 0.6s;
    --kids-anim-spring-bounce: 0.35;
    --kids-anim-spring-duration: 0.5;

    /* ---- Base styles ---- */
    font-family: var(--kids-font-family);
    color: var(--kids-color-text);
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;function n(e){"@babel/helpers - typeof";return n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},n(e)}function r(e,t){if(n(e)!=`object`||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||`default`);if(n(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function i(e){var t=r(e,`string`);return n(t)==`symbol`?t:t+``}function a(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=class extends HTMLElement{constructor(){super(),a(this,`root`,void 0),a(this,`_entered`,!1),this.root=this.attachShadow({mode:`open`})}connectedCallback(){this.render(),this._entered||(this._entered=!0,this.onEnter())}disconnectedCallback(){}template(){return``}render(){this.root.innerHTML=`<style>${t}</style>${this.template()}`}onEnter(){}attr(e,t=``){return this.getAttribute(e)??t}boolAttr(e){return this.hasAttribute(e)}};function s(e,t){e.indexOf(t)===-1&&e.push(t)}function c(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var l=(e,t,n)=>n>t?t:n<e?e:n,u={},d=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function f(e){return typeof e==`object`&&!!e}var p=e=>/^0[^.\s]+$/u.test(e);function m(e){let t;return()=>(t===void 0&&(t=e()),t)}var h=e=>e,g=(e,t)=>n=>t(e(n)),_=(...e)=>e.reduce(g),v=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},y=class{constructor(){this.subscriptions=[]}add(e){return s(this.subscriptions,e),()=>c(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},b=e=>e*1e3,x=e=>e/1e3;function S(e,t){return t?1e3/t*e:0}var C=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},w=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,T=1e-7,E=12;function D(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=w(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>T&&++s<E);return o}function O(e,t,n,r){if(e===t&&n===r)return h;let i=t=>D(t,0,1,e,n);return e=>e===0||e===1?e:w(i(e),t,r)}var ee=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,te=e=>t=>1-e(1-t),ne=O(.33,1.53,.69,.99),re=te(ne),ie=ee(re),ae=e=>e>=1?1:(e*=2)<1?.5*re(e):.5*(2-2**(-10*(e-1))),oe=e=>1-Math.sin(Math.acos(e)),se=te(oe),ce=ee(oe),le=O(.42,0,1,1),ue=O(0,0,.58,1),de=O(.42,0,.58,1),fe=e=>Array.isArray(e)&&typeof e[0]!=`number`;function pe(e,t){return fe(e)?e[C(0,e.length,t)]:e}var me=e=>Array.isArray(e)&&typeof e[0]==`number`,he={linear:h,easeIn:le,easeInOut:de,easeOut:ue,circIn:oe,circInOut:ce,circOut:se,backIn:re,backInOut:ie,backOut:ne,anticipate:ae},ge=e=>typeof e==`string`,_e=e=>{if(me(e)){e.length;let[t,n,r,i]=e;return O(t,n,r,i)}else if(ge(e))return he[e],`${e}`,he[e];return e},ve=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],ye={value:null,addProjectionMetrics:null};function be(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&ye.value&&ye.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var xe=40;function Se(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ve.reduce((e,n)=>(e[n]=be(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:d,update:f,preRender:p,render:m,postRender:h}=o,g=()=>{let a=u.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,xe),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),d.process(i),f.process(i),p.process(i),m.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},_=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:ve.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||_(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<ve.length;t++)o[ve[t]].cancel(e)},state:i,steps:o}}var{schedule:k,cancel:Ce,state:we,steps:Te}=Se(typeof requestAnimationFrame<`u`?requestAnimationFrame:h,!0),Ee;function De(){Ee=void 0}var A={now:()=>(Ee===void 0&&A.set(we.isProcessing||u.useManualTiming?we.timestamp:performance.now()),Ee),set:e=>{Ee=e,queueMicrotask(De)}},Oe={layout:0,mainThread:0,waapi:0},ke=e=>t=>typeof t==`string`&&t.startsWith(e),Ae=ke(`--`),je=ke(`var(--`),Me=e=>je(e)?Ne.test(e.split(`/*`)[0].trim()):!1,Ne=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Pe(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var j={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Fe={...j,transform:e=>l(0,1,e)},Ie={...j,default:1},Le=e=>Math.round(e*1e5)/1e5,Re=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ze(e){return e==null}var Be=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ve=(e,t)=>n=>!!(typeof n==`string`&&Be.test(n)&&n.startsWith(e)||t&&!ze(n)&&Object.prototype.hasOwnProperty.call(n,t)),He=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Re);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Ue=e=>l(0,255,e),We={...j,transform:e=>Math.round(Ue(e))},M={test:Ve(`rgb`,`red`),parse:He(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+We.transform(e)+`, `+We.transform(t)+`, `+We.transform(n)+`, `+Le(Fe.transform(r))+`)`};function Ge(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Ke={test:Ve(`#`),parse:Ge,transform:M.transform},N=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),P=N(`deg`),F=N(`%`),I=N(`px`),qe=N(`vh`),Je=N(`vw`),Ye={...F,parse:e=>F.parse(e)/100,transform:e=>F.transform(e*100)},L={test:Ve(`hsl`,`hue`),parse:He(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+F.transform(Le(t))+`, `+F.transform(Le(n))+`, `+Le(Fe.transform(r))+`)`},R={test:e=>M.test(e)||Ke.test(e)||L.test(e),parse:e=>M.test(e)?M.parse(e):L.test(e)?L.parse(e):Ke.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?M.transform(e):L.transform(e),getAnimatableNone:e=>{let t=R.parse(e);return t.alpha=0,R.transform(t)}},Xe=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ze(e){return isNaN(e)&&typeof e==`string`&&(e.match(Re)?.length||0)+(e.match(Xe)?.length||0)>0}var Qe=`number`,$e=`color`,et=`var`,tt=`var(`,nt="${}",rt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function z(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(rt,e=>(R.test(e)?(r.color.push(a),i.push($e),n.push(R.parse(e))):e.startsWith(tt)?(r.var.push(a),i.push(et),n.push(e)):(r.number.push(a),i.push(Qe),n.push(parseFloat(e))),++a,nt)).split(nt),indexes:r,types:i}}function it(e){return z(e).values}function at({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Qe?i+=Le(r[a]):e===$e?i+=R.transform(r[a]):i+=r[a]}return i}}function ot(e){return at(z(e))}var st=e=>typeof e==`number`?0:R.test(e)?R.getAnimatableNone(e):e,ct=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:st(e);function lt(e){let t=z(e);return at(t)(t.values.map((e,n)=>ct(e,t.split[n])))}var B={test:Ze,parse:it,createTransformer:ot,getAnimatableNone:lt};function ut(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function dt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=ut(s,r,e+1/3),a=ut(s,r,e),o=ut(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function ft(e,t){return n=>n>0?t:e}var V=(e,t,n)=>e+(t-e)*n,pt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},mt=[Ke,M,L],ht=e=>mt.find(t=>t.test(e));function gt(e){let t=ht(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===L&&(n=dt(n)),n}var _t=(e,t)=>{let n=gt(e),r=gt(t);if(!n||!r)return ft(e,t);let i={...n};return e=>(i.red=pt(n.red,r.red,e),i.green=pt(n.green,r.green,e),i.blue=pt(n.blue,r.blue,e),i.alpha=V(n.alpha,r.alpha,e),M.transform(i))},vt=new Set([`none`,`hidden`]);function yt(e,t){return vt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function bt(e,t){return n=>V(e,t,n)}function xt(e){return typeof e==`number`?bt:typeof e==`string`?Me(e)?ft:R.test(e)?_t:Tt:Array.isArray(e)?St:typeof e==`object`?R.test(e)?_t:Ct:ft}function St(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>xt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ct(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=xt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function wt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Tt=(e,t)=>{let n=B.createTransformer(t),r=z(e),i=z(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?vt.has(e)&&!i.values.length||vt.has(t)&&!r.values.length?yt(e,t):_(St(wt(r,i),i.values),n):(`${e}${t}`,ft(e,t))};function Et(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?V(e,t,n):xt(e)(e,t)}var Dt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>k.update(t,e),stop:()=>Ce(t),now:()=>we.isProcessing?we.timestamp:A.now()}},Ot=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},kt=2e4;function At(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function jt(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(At(r),kt);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:x(i)}}var H={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Mt(e,t){return e*Math.sqrt(1-t*t)}var Nt=12;function Pt(e,t,n){let r=n;for(let n=1;n<Nt;n++)r-=e(r)/t(r);return r}var Ft=.001;function It({duration:e=H.duration,bounce:t=H.bounce,velocity:n=H.velocity,mass:r=H.mass}){let i,a;H.maxDuration;let o=1-t;o=l(H.minDamping,H.maxDamping,o),e=l(H.minDuration,H.maxDuration,x(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Mt(t,o),c=Math.exp(-i);return Ft-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Mt(t**2,o);return(-i(t)+Ft>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Ft+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Pt(i,a,s);if(e=b(e),isNaN(c))return{stiffness:H.stiffness,damping:H.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Lt=[`duration`,`bounce`],Rt=[`stiffness`,`damping`,`mass`];function zt(e,t){return t.some(t=>e[t]!==void 0)}function Bt(e){let t={velocity:H.velocity,stiffness:H.stiffness,damping:H.damping,mass:H.mass,isResolvedFromDuration:!1,...e};if(!zt(e,Rt)&&zt(e,Lt))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*l(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:H.mass,stiffness:i,damping:a}}else{let n=It({...e,velocity:0});t={...t,...n,mass:H.mass},t.isResolvedFromDuration=!0}return t}function U(e=H.visualDuration,t=H.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Bt({...n,velocity:-x(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=x(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?H.restSpeed.granular:H.restSpeed.default,i||=v?H.restDelta.granular:H.restDelta.default;let y,S,C,w,T,E;if(h<1)C=Mt(_,h),w=(m+h*_*g)/C,y=e=>o-Math.exp(-h*_*e)*(w*Math.sin(C*e)+g*Math.cos(C*e)),T=h*_*w+g*C,E=h*_*g-w*C,S=e=>Math.exp(-h*_*e)*(T*Math.sin(C*e)+E*Math.cos(C*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;S=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;S=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let D={calculatedDuration:p&&d||null,velocity:e=>b(S(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(C*e),a=Math.cos(C*e),c=o-t*(w*n+g*a),l=b(t*(T*n+E*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=b(S(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(At(D),kt),t=Ot(t=>D.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return D}U.applyToOptions=e=>{let t=jt(e,100,U);return e.ease=t.ease,e.duration=b(t.duration),e.type=`keyframes`,e};var Vt=5;function Ht(e,t,n){let r=Math.max(t-Vt,0);return S(n-e(r),t-r)}function Ut({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=U({keyframes:[f.value,m(f.value)],velocity:Ht(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Wt(e,t,n){let r=[],i=n||u.mix||Et,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=_(Array.isArray(t)?t[n]||h:t,a)),r.push(a)}return r}function Gt(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Wt(t,r,i),c=s.length,u=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=v(e[r],e[r+1],n);return s[r](i)};return n?t=>u(l(e[0],e[a-1],t)):u}function Kt(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=v(0,t,r);e.push(V(n,1,i))}}function qt(e){let t=[0];return Kt(t,e.length-1),t}function Jt(e,t){return e.map(e=>e*t)}function Yt(e,t){return e.map(()=>t||de).splice(0,e.length-1)}function W({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=fe(r)?r.map(_e):_e(r),a={done:!1,value:t[0]},o=Gt(Jt(n&&n.length===t.length?n:qt(t),e),t,{ease:Array.isArray(i)?i:Yt(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Xt=e=>e!==null;function Zt(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Xt),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Qt={decay:Ut,inertia:Ut,tween:W,keyframes:W,spring:U};function $t(e){typeof e.type==`string`&&(e.type=Qt[e.type])}var en=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},tn=e=>e/100,nn=class extends en{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==A.now()&&this.tick(A.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Oe.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;$t(e);let{type:t=W,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||W;s!==W&&typeof o[0]!=`number`&&(this.mixKeyframes=_(tn,Et(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=At(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:m,onUpdate:h,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let _=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?_<0:_>r;this.currentTime=Math.max(_,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,b=n;if(d){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,d+1),t%2&&(f===`reverse`?(n=1-n,p&&(n-=p/o)):f===`mirror`&&(b=a)),y=l(0,1,n)*o}let x;v?(this.delayState.value=u[0],x=this.delayState):x=b.next(y),i&&!v&&(x.value=i(x.value));let{done:S}=x;!v&&s!==null&&(S=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let C=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&S);return C&&m!==Ut&&(x.value=Zt(u,this.options,g,this.speed)),h&&h(x.value),C&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return x(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+x(e)}get time(){return x(this.currentTime)}set time(e){e=b(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Ht(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(A.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=x(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Dt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(A.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Oe.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function rn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var G=e=>e*180/Math.PI,an=e=>sn(G(Math.atan2(e[1],e[0]))),on={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:an,rotateZ:an,skewX:e=>G(Math.atan(e[1])),skewY:e=>G(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},sn=e=>(e%=360,e<0&&(e+=360),e),cn=an,ln=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),un=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),dn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ln,scaleY:un,scale:e=>(ln(e)+un(e))/2,rotateX:e=>sn(G(Math.atan2(e[6],e[5]))),rotateY:e=>sn(G(Math.atan2(-e[2],e[0]))),rotateZ:cn,rotate:cn,skewX:e=>G(Math.atan(e[4])),skewY:e=>G(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function fn(e){return+!!e.includes(`scale`)}function pn(e,t){if(!e||e===`none`)return fn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=dn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=on,i=t}if(!i)return fn(t);let a=r[t],o=i[1].split(`,`).map(hn);return typeof a==`function`?a(o):o[a]}var mn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return pn(n,t)};function hn(e){return parseFloat(e.trim())}var K=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],q=new Set(K),gn=e=>e===j||e===I,_n=new Set([`x`,`y`,`z`]),vn=K.filter(e=>!_n.has(e));function yn(e){let t=[];return vn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var J={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>pn(t,`x`),y:(e,{transform:t})=>pn(t,`y`)};J.translateX=J.x,J.translateY=J.y;var Y=new Set,bn=!1,xn=!1,Sn=!1;function Cn(){if(xn){let e=Array.from(Y).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=yn(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}xn=!1,bn=!1,Y.forEach(e=>e.complete(Sn)),Y.clear()}function wn(){Y.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(xn=!0)})}function Tn(){Sn=!0,wn(),Cn(),Sn=!1}var En=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Y.add(this),bn||(bn=!0,k.read(wn),k.resolveKeyframes(Cn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}rn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Y.delete(this)}cancel(){this.state===`scheduled`&&(Y.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Dn=e=>e.startsWith(`--`);function On(e,t,n){Dn(t)?e.style.setProperty(t,n):e.style[t]=n}var kn={};function An(e,t){let n=m(e);return()=>kn[t]??n()}var jn=An(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Mn=An(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Nn=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Pn={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Nn([0,.65,.55,1]),circOut:Nn([.55,0,1,.45]),backIn:Nn([.31,.01,.66,-.59]),backOut:Nn([.33,1.53,.69,.99])};function Fn(e,t){if(e)return typeof e==`function`?Mn()?Ot(e,t):`ease-out`:me(e)?Nn(e):Array.isArray(e)?e.map(e=>Fn(e,t)||Pn.easeOut):Pn[e]}function In(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Fn(s,i);Array.isArray(d)&&(u.easing=d),ye.value&&Oe.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return ye.value&&p.finished.finally(()=>{Oe.waapi--}),p}function Ln(e){return typeof e==`function`&&`applyToOptions`in e}function Rn({type:e,...t}){return Ln(e)&&Mn()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var zn=class extends en{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Rn(e);this.animation=In(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Zt(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),On(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return x(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+x(e)}get time(){return x(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=b(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&jn()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),h):r(this)}},Bn={anticipate:ae,backInOut:ie,circInOut:ce};function Vn(e){return e in Bn}function Hn(e){typeof e.ease==`string`&&Vn(e.ease)&&(e.ease=Bn[e.ease])}var Un=10,Wn=class extends zn{constructor(e){Hn(e),$t(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new nn({...a,autoplay:!1}),s=Math.max(Un,A.now()-this.startTime),c=l(0,Un,s-Un),u=o.sample(s).value,{name:d}=this.options;i&&d&&On(i,d,u),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,u,c),o.stop()}},Gn=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(B.test(e)||e===`0`)&&!e.startsWith(`url(`));function Kn(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function qn(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Gn(i,t),s=Gn(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Kn(e)||(n===`spring`||Ln(n))&&r}function Jn(e){e.duration=0,e.type=`keyframes`}var Yn=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Xn=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Zn(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Xn.test(e[t]))return!0;return!1}var Qn=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),$n=m(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function er(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return $n()&&n&&(Yn.has(n)||Qn.has(n)&&Zn(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var tr=40,nr=class extends en{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=A.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||En)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=A.now();let d=!0;qn(e,i,a,o)||(d=!1,(u.instantAnimations||!s)&&l?.(Zt(e,n,t)),e[0]=e[e.length-1],Jn(n),n.repeat=0);let f={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>tr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},p=d&&!c&&er(f),m=f.motionValue?.owner?.current,g;if(p)try{g=new Wn({...f,element:m})}catch{g=new nn(f)}else g=new nn(f);g.finished.then(()=>{this.notifyFinished()}).catch(h),this.pendingTimeline&&=(this.stopTimeline=g.attachTimeline(this.pendingTimeline),void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Tn()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}},rr=class{constructor(e){this.stop=()=>this.runAll(`stop`),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>t.attachTimeline(e));return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll(`time`)}set time(e){this.setAll(`time`,e)}get speed(){return this.getAll(`speed`)}set speed(e){this.setAll(`speed`,e)}get state(){return this.getAll(`state`)}get startTime(){return this.getAll(`startTime`)}get duration(){return ir(this.animations,`duration`)}get iterationDuration(){return ir(this.animations,`iterationDuration`)}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll(`play`)}pause(){this.runAll(`pause`)}cancel(){this.runAll(`cancel`)}complete(){this.runAll(`complete`)}};function ir(e,t){let n=0;for(let r=0;r<e.length;r++){let i=e[r][t];i!==null&&i>n&&(n=i)}return n}var ar=class extends rr{then(e,t){return this.finished.finally(e).then(()=>{})}},or=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sr(e){let t=or.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function cr(e,t,n=1){`${e}`;let[r,i]=sr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return d(e)?parseFloat(e):e}return Me(i)?cr(i,t,n+1):i}var lr={type:`spring`,stiffness:500,damping:25,restSpeed:10},ur=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),dr={type:`keyframes`,duration:.8},fr={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},pr=(e,{keyframes:t})=>t.length>2?dr:q.has(e)?e.startsWith(`scale`)?ur(t[1]):lr:fr;function mr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function hr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:mr(n,e)}var gr=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function _r(e){for(let t in e)if(!gr.has(t))return!0;return!1}var vr=(e,t,n,r={},i,a)=>o=>{let s=hr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=b(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};_r(s)||Object.assign(d,pr(e,d)),d.duration&&=b(d.duration),d.repeatDelay&&=b(d.repeatDelay),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Jn(d),d.delay===0&&(f=!0)),(u.instantAnimations||u.skipAnimations||i?.shouldSkipAnimations)&&(f=!0,Jn(d),d.delay=0),d.allowFlatten=!s.type&&!s.ease,f&&!a&&t.get()!==void 0){let e=Zt(d.keyframes,s);if(e!==void 0){k.update(()=>{d.onUpdate(e),d.onComplete()});return}}return s.isSync?new nn(d):new nr(d)};function yr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function br(e,t,n,r){if(typeof t==`function`){let[i,a]=yr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=yr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function xr(e,t,n){let r=e.getProps();return br(r,t,n===void 0?r.custom:n,e)}var Sr=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...K]),Cr=30,wr=e=>!isNaN(parseFloat(e)),Tr={current:void 0},Er=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=A.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=A.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=wr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new y);let n=this.events[e].add(t);return e===`change`?()=>{n(),k.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Tr.current&&Tr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=A.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Cr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Cr);return S(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function X(e,t){return new Er(e,t)}var Dr=e=>Array.isArray(e);function Or(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,X(n))}function kr(e){return Dr(e)?e[e.length-1]||0:e}function Ar(e,t){let{transitionEnd:n={},transition:r={},...i}=xr(e,t)||{};i={...i,...n};for(let t in i)Or(e,t,kr(i[t]))}var Z=e=>!!(e&&e.getVelocity);function jr(e){return!!(Z(e)&&e.add)}function Mr(e,t){let n=e.getValue(`willChange`);if(jr(n))return n.add(t);if(!n&&u.WillChange){let n=new u.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Nr(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Pr=`data-`+Nr(`framerAppearId`);function Fr(e){return e.props[Pr]}function Ir({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Lr(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?mr(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Ir(d,t))continue;let o={delay:n,...hr(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){k.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Fr(e);if(n){let e=window.MotionHandoffAnimation(n,t,k);e!==null&&(o.startTime=e,f=!0)}}Mr(e,t);let p=l??e.shouldReduceMotion;r.start(vr(t,r,i,p&&Sr.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>k.update(()=>{o&&Ar(e,o)});u.length?Promise.all(u).then(t):t()}return u}var Rr={test:e=>e===`auto`,parse:e=>e},zr=e=>t=>t.test(e),Br=[j,I,F,P,Je,qe,Rr],Vr=e=>Br.find(zr(e));function Hr(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||p(e)}var Ur=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Wr(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Re)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Ur.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Gr=/\b([a-z-]*)\(.*?\)/gu,Kr={...B,getAnimatableNone:e=>{let t=e.match(Gr);return t?t.map(Wr).join(` `):e}},qr={...B,getAnimatableNone:e=>{let t=B.parse(e);return B.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Jr={...j,transform:Math.round},Yr={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,inset:I,insetBlock:I,insetBlockStart:I,insetBlockEnd:I,insetInline:I,insetInlineStart:I,insetInlineEnd:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,paddingBlock:I,paddingBlockStart:I,paddingBlockEnd:I,paddingInline:I,paddingInlineStart:I,paddingInlineEnd:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,marginBlock:I,marginBlockStart:I,marginBlockEnd:I,marginInline:I,marginInlineStart:I,marginInlineEnd:I,fontSize:I,backgroundPositionX:I,backgroundPositionY:I,rotate:P,rotateX:P,rotateY:P,rotateZ:P,scale:Ie,scaleX:Ie,scaleY:Ie,scaleZ:Ie,skew:P,skewX:P,skewY:P,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Fe,originX:Ye,originY:Ye,originZ:I,zIndex:Jr,fillOpacity:Fe,strokeOpacity:Fe,numOctaves:Jr},Xr={...Yr,color:R,backgroundColor:R,outlineColor:R,fill:R,stroke:R,borderColor:R,borderTopColor:R,borderRightColor:R,borderBottomColor:R,borderLeftColor:R,filter:Kr,WebkitFilter:Kr,mask:qr,WebkitMask:qr},Zr=e=>Xr[e],Qr=new Set([Kr,qr]);function $r(e,t){let n=Zr(e);return Qr.has(n)||(n=B),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var ei=new Set([`auto`,`none`,`0`]);function ti(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!ei.has(t)&&z(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=$r(n,i)}var ni=class extends En{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Me(r))){let i=cr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Sr.has(n)||e.length!==2)return;let[r,i]=e,a=Vr(r),o=Vr(i);if(Pe(r)!==Pe(i)&&J[n]){this.needsMeasurement=!0;return}if(a!==o)if(gn(a)&&gn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else J[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Hr(e[t]))&&n.push(t);n.length&&ti(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=J[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=J[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ri(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ii=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ai(e){return f(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:oi,cancel:si}=Se(queueMicrotask,!1),ci={x:!1,y:!1};function li(){return ci.x||ci.y}function ui(e,t){let n=ri(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function di(e){return!(e.pointerType===`touch`||li())}function Q(e,t,n={}){let[r,i,a]=ui(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!di(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var fi=(e,t)=>t?e===t?!0:fi(e,t.parentElement):!1,pi=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,mi=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function hi(e){return mi.has(e.tagName)||e.isContentEditable===!0}var gi=new WeakSet;function _i(e){return t=>{t.key===`Enter`&&e(t)}}function vi(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var yi=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=_i(()=>{if(gi.has(n))return;vi(n,`down`);let e=_i(()=>{vi(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>vi(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function bi(e){return pi(e)&&!li()}var xi=new WeakSet;function Si(e,t,n={}){let[r,i,a]=ui(e,n),o=e=>{let r=e.currentTarget;if(!bi(e)||xi.has(e))return;gi.add(r),n.stopPropagation&&xi.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),gi.has(r)&&gi.delete(r),bi(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||fi(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ai(e)&&(e.addEventListener(`focus`,e=>yi(e,i)),!hi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Ci(e){return f(e)&&`ownerSVGElement`in e}function wi(e){return Ci(e)&&e.tagName===`svg`}var Ti=[...Br,R,B],Ei=e=>Ti.find(zr(e)),Di=()=>({min:0,max:0}),Oi=()=>({x:Di(),y:Di()}),ki=new WeakMap;function Ai(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function ji(e){return typeof e==`string`||Array.isArray(e)}var Mi=[`initial`,...[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`]];function Ni(e){return Ai(e.animate)||Mi.some(t=>ji(e[t]))}function Pi(e){return!!(Ni(e)||e.variants)}function Fi(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Z(i))e.addValue(r,i);else if(Z(a))e.addValue(r,X(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,X(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ii={current:null},Li={current:!1},Ri=typeof window<`u`;function zi(){if(Li.current=!0,Ri)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ii.current=e.matches;e.addEventListener(`change`,t),t()}else Ii.current=!1}var Bi=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Vi={},Hi=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=En,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=A.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,k.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ni(t),this.isVariantNode=Pi(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Z(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,ki.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Li.current||zi(),this.shouldReduceMotion=Ii.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ce(this.notifyUpdate),Ce(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Yn.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new zn({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:b(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=q.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&k.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Vi){let t=Vi[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oi()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Bi.length;t++){let n=Bi[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Fi(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=X(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(d(n)||p(n))?n=parseFloat(n):!Ei(n)&&B.test(t)&&(n=$r(e,t)),this.setBaseTarget(e,Z(n)?n.get():n)),Z(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=br(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Z(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new y),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){oi.render(this.render)}},Ui=class extends Hi{constructor(){super(...arguments),this.KeyframeResolver=ni}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Z(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}};function Wi({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Gi(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ki(e,t){return Wi(Gi(e.getBoundingClientRect(),t))}var qi={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ji=K.length;function Yi(e,t,n){let r=``,i=!0;for(let a=0;a<Ji;a++){let o=K[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ii(s,Yr[o]);if(!c){i=!1;let t=qi[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Xi(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(q.has(e)){o=!0;continue}else if(Ae(e)){i[e]=n;continue}else{let t=ii(n,Yr[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Yi(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Zi(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Qi(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var $i={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(I.test(e))e=parseFloat(e);else return e;return`${Qi(e,t.target.x)}% ${Qi(e,t.target.y)}%`}},ea={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=B.parse(e);if(i.length>5)return r;let a=B.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=V(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ta={borderRadius:{...$i,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:$i,borderTopRightRadius:$i,borderBottomLeftRadius:$i,borderBottomRightRadius:$i,boxShadow:ea};function na(e,{layout:t,layoutId:n}){return q.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!ta[e]||e===`opacity`)}function ra(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Z(r[t])||i&&Z(i[t])||na(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function ia(e){return window.getComputedStyle(e)}var aa=class extends Ui{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Zi}readValueFromInstance(e,t){if(q.has(t))return this.projection?.isProjecting?fn(t):mn(e,t);{let n=ia(e),r=(Ae(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ki(e,t)}build(e,t,n){Xi(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ra(e,t,n)}};function oa(e,t){return e in t}var sa=class extends Hi{constructor(){super(...arguments),this.type=`object`}readValueFromInstance(e,t){if(oa(t,e)){let n=e[t];if(typeof n==`string`||typeof n==`number`)return n}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return Oi()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}},ca={offset:`stroke-dashoffset`,array:`stroke-dasharray`},la={offset:`strokeDashoffset`,array:`strokeDasharray`};function ua(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?ca:la;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var da=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function fa(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Xi(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of da)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ua(d,i,a,o,!1)}var pa=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ma=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ha(e,t,n,r){Zi(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(pa.has(n)?n:Nr(n),t.attrs[n])}function ga(e,t,n){let r=ra(e,t,n);for(let n in e)if(Z(e[n])||Z(t[n])){let t=K.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var _a=class extends Ui{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Oi}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(q.has(t)){let e=Zr(t);return e&&e.default||0}return t=pa.has(t)?t:Nr(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ga(e,t,n)}build(e,t,n){fa(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ha(e,t,n,r)}mount(e){this.isSVGTag=ma(e.tagName),super.mount(e)}};function va(e,t,n){let r=Z(e)?e:X(e);return r.start(vr(``,r,t,n)),r.animation}function ya(e){return typeof e==`object`&&!Array.isArray(e)}function ba(e,t,n,r){return e==null?[]:typeof e==`string`&&ya(t)?ri(e,n,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(e=>e!=null):[e]}function xa(e,t,n){return e*(t+1)}function Sa(e,t,n,r){return typeof t==`number`?t:t.startsWith(`-`)||t.startsWith(`+`)?Math.max(0,e+parseFloat(t)):t===`<`?n:t.startsWith(`<`)?Math.max(0,n+parseFloat(t.slice(1))):r.get(t)??e}function Ca(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.at>t&&i.at<n&&(c(e,i),r--)}}function wa(e,t,n,r,i,a){Ca(e,i,a);for(let o=0;o<t.length;o++)e.push({value:t[o],at:V(i,a,r[o]),easing:pe(n,o)})}function Ta(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]/(t+1)}function Ea(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}var Da=`easeInOut`;function Oa(e,{defaultTransition:t={},...n}={},r,i){let a=t.duration||.3,o=new Map,s=new Map,c={},l=new Map,u=0,d=0,f=0;for(let n=0;n<e.length;n++){let o=e[n];if(typeof o==`string`){l.set(o,d);continue}else if(!Array.isArray(o)){l.set(o.name,Sa(d,o.at,u,l));continue}let[p,m,h={}]=o;h.at!==void 0&&(d=Sa(d,h.at,u,l));let g=0,_=(e,n,r,o=0,s=0)=>{let c=ja(e),{delay:l=0,times:u=qt(c),type:p=t.type||`keyframes`,repeat:m,repeatType:h,repeatDelay:_=0,...v}=n,{ease:y=t.ease||`easeOut`,duration:x}=n,S=typeof l==`function`?l(o,s):l,C=c.length,w=Ln(p)?p:i?.[p||`keyframes`];if(C<=2&&w){let e=100;if(C===2&&Pa(c)){let t=c[1]-c[0];e=Math.abs(t)}let n={...t,...v};x!==void 0&&(n.duration=b(x));let r=jt(n,e,w);y=r.ease,x=r.duration}x??=a;let T=d+S;u.length===1&&u[0]===0&&(u[1]=1);let E=u.length-c.length;if(E>0&&Kt(u,E),c.length===1&&c.unshift(null),m){x=xa(x,m);let e=[...c],t=[...u];y=Array.isArray(y)?[...y]:[y];let n=[...y];for(let r=0;r<m;r++){c.push(...e);for(let i=0;i<e.length;i++)u.push(t[i]+(r+1)),y.push(i===0?`linear`:pe(n,i-1))}Ta(u,m)}let D=T+x;wa(r,c,y,u,T,D),g=Math.max(S+x,g),f=Math.max(D,f)};if(Z(p)){let e=ka(p,s);_(m,h,Aa(`default`,e))}else{let e=ba(p,m,r,c),t=e.length;for(let n=0;n<t;n++){m=m,h=h;let r=e[n],i=ka(r,s);for(let e in m)_(m[e],Ma(h,e),Aa(e,i),n,t)}}u=d,d+=g}return s.forEach((e,r)=>{for(let i in e){let a=e[i];a.sort(Ea);let s=[],c=[],l=[];for(let e=0;e<a.length;e++){let{at:t,value:n,easing:r}=a[e];s.push(n),c.push(v(0,f,t)),l.push(r||`easeOut`)}c[0]!==0&&(c.unshift(0),s.unshift(s[0]),l.unshift(Da)),c[c.length-1]!==1&&(c.push(1),s.push(null)),o.has(r)||o.set(r,{keyframes:{},transition:{}});let u=o.get(r);u.keyframes[i]=s;let{type:d,...p}=t;u.transition[i]={...p,duration:f,ease:l,times:c,...n}}}),o}function ka(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function Aa(e,t){return t[e]||(t[e]=[]),t[e]}function ja(e){return Array.isArray(e)?e:[e]}function Ma(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}var Na=e=>typeof e==`number`,Pa=e=>e.every(Na);function Fa(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Ci(e)&&!wi(e)?new _a(t):new aa(t);n.mount(e),ki.set(e,n)}function Ia(e){let t=new sa({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});t.mount(e),ki.set(e,t)}function La(e,t){return Z(e)||typeof e==`number`||typeof e==`string`&&!ya(t)}function Ra(e,t,n,r){let i=[];if(La(e,t))i.push(va(e,ya(t)&&t.default||t,n&&(n.default||n)));else{if(e==null)return i;let a=ba(e,t,r),o=a.length;for(let e=0;e<o;e++){let r=a[e],s=r instanceof Element?Fa:Ia;ki.has(r)||s(r);let c=ki.get(r),l={...n};`delay`in l&&typeof l.delay==`function`&&(l.delay=l.delay(e,o)),i.push(...Lr(c,{...t,transition:l},{}))}}return i}function za(e,t,n){let r=[];return Oa(e.map(e=>{if(Array.isArray(e)&&typeof e[0]==`function`){let t=e[0],n=X(0);return n.on(`change`,t),e.length===1?[n,[0,1]]:e.length===2?[n,[0,1],e[1]]:[n,e[1],e[2]]}return e}),t,n,{spring:U}).forEach(({keyframes:e,transition:t},n)=>{r.push(...Ra(n,e,t))}),r}function Ba(e){return Array.isArray(e)&&e.some(Array.isArray)}function Va(e={}){let{scope:t,reduceMotion:n}=e;function r(e,r,i){let a=[],o;if(Ba(e)){let{onComplete:i,...s}=r||{};typeof i==`function`&&(o=i),a=za(e,n===void 0?s:{reduceMotion:n,...s},t)}else{let{onComplete:s,...c}=i||{};typeof s==`function`&&(o=s),a=Ra(e,r,n===void 0?c:{reduceMotion:n,...c},t)}let s=new ar(a);return o&&s.finished.then(o),t&&(t.animations.push(s),s.finished.then(()=>{c(t.animations,s)})),s}return r}var $=Va(),Ha=class extends o{template(){return`
      <style>
        :host {
          display: inline-block;
        }

        button {
          /* Reset */
          border: none;
          cursor: pointer;
          outline: none;
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.02em;
          border-radius: var(--kids-radius-full);
          transition: box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
          user-select: none;
          -webkit-tap-highlight-color: transparent;

          /* Default (md) sizing */
          padding: var(--kids-space-sm) var(--kids-space-lg);
          font-size: var(--kids-font-size-md);
        }

        /* ---- Sizes ---- */
        button.sm {
          padding: var(--kids-space-xs) var(--kids-space-md);
          font-size: var(--kids-font-size-sm);
        }
        button.lg {
          padding: var(--kids-space-md) var(--kids-space-xl);
          font-size: var(--kids-font-size-lg);
        }

        /* ---- Variants ---- */
        button.primary {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }
        button.secondary {
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }
        button.accent {
          background: var(--kids-color-accent);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }
        button.warning {
          background: var(--kids-color-warning);
          color: var(--kids-color-text);
          box-shadow: var(--kids-shadow-md);
        }

        /* ---- Disabled ---- */
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Focus ring ---- */
        button:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }
      </style>

      <button
        class="${this.attr(`variant`,`primary`)} ${this.attr(`size`,`md`)}"
        ${this.boolAttr(`disabled`)?`disabled`:``}
        part="button"
      >
        <slot></slot>
      </button>
    `}onEnter(){$(this.root.querySelector(`button`),{scale:[0,1]},{type:`spring`,stiffness:400,damping:18})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`button`);e&&(Q(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:1.07},{type:`spring`,stiffness:500,damping:15}),()=>{$(e,{scale:1},{type:`spring`,stiffness:500,damping:15})})),Si(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:.92},{type:`spring`,stiffness:600,damping:20}),()=>{$(e,{scale:1.07},{type:`spring`,stiffness:500,damping:12})})))}attributeChangedCallback(){this.render(),this._bindEvents()}};a(Ha,`observedAttributes`,[`variant`,`size`,`disabled`]),customElements.define(`kids-button`,Ha);var Ua=class extends o{template(){return`
      <style>
        :host {
          display: block;
        }

        .card {
          border-radius: var(--kids-radius-lg);
          padding: var(--kids-space-lg);
          font-family: var(--kids-font-family);
          overflow: hidden;
          will-change: transform, opacity;
        }

        .card.default {
          background: var(--kids-color-surface);
          box-shadow: var(--kids-shadow-md);
        }

        .card.outlined {
          background: var(--kids-color-surface);
          border: 3px solid var(--kids-color-primary);
          box-shadow: none;
        }

        .card.hoverable {
          cursor: pointer;
          transition: box-shadow 0.25s ease;
        }

        /* ---- Slots ---- */
        .header-wrapper {
          margin-bottom: var(--kids-space-md);
        }

        ::slotted([slot="header"]) {
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          display: block;
        }

        .body {
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }

        .footer-wrapper {
          margin-top: var(--kids-space-lg);
        }

      </style>

      <div class="card ${this.attr(`variant`,`default`)} ${this.boolAttr(`hoverable`)?`hoverable`:``}" part="card">
        <div class="header-wrapper">
          <slot name="header"></slot>
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer-wrapper">
          <slot name="footer"></slot>
        </div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.card`),{scale:[.9,1],opacity:[0,1]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindHoverEvents()}_bindHoverEvents(){if(this.boolAttr(`hoverable`)){let e=this.root.querySelector(`.card`);if(!e)return;Q(e,e=>($(e,{scale:1.03,y:-4},{type:`spring`,stiffness:400,damping:15}),()=>{$(e,{scale:1,y:0},{type:`spring`,stiffness:400,damping:15})}))}}attributeChangedCallback(){this.render(),this._bindHoverEvents()}};a(Ua,`observedAttributes`,[`variant`,`hoverable`]),customElements.define(`kids-card`,Ua);var Wa=class extends o{constructor(...e){super(...e),a(this,`_loopAnimation`,void 0)}template(){return`
      <style>
        :host {
          display: inline-block;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-xs);
          padding: var(--kids-space-xs) var(--kids-space-md);
          border-radius: var(--kids-radius-full);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.03em;
          white-space: nowrap;
          user-select: none;
          will-change: transform;
        }

        .badge.primary {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
        }
        .badge.secondary {
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
        }
        .badge.accent {
          background: var(--kids-color-accent);
          color: var(--kids-color-text-light);
        }
        .badge.warning {
          background: var(--kids-color-warning);
          color: var(--kids-color-text);
        }
        .badge.info {
          background: var(--kids-color-info);
          color: var(--kids-color-text-light);
        }
      </style>

      <span class="badge ${this.attr(`variant`,`primary`)}" part="badge">
        <slot></slot>
      </span>
    `}onEnter(){$(this.root.querySelector(`.badge`),{scale:[0,1.15,1]},{type:`spring`,stiffness:500,damping:14}),this.startLoop()}startLoop(){let e=this.attr(`animate`,`none`);if(e===`none`)return;let t=this.root.querySelector(`.badge`);if(t)switch(e){case`pulse`:this._loopAnimation=$(t,{scale:[1,1.12,1]},{duration:1.2,repeat:1/0,ease:`easeInOut`});break;case`wiggle`:this._loopAnimation=$(t,{rotate:[0,-6,6,-4,4,0]},{duration:.6,repeat:1/0,repeatDelay:1.5,ease:`easeInOut`});break;case`bounce`:this._loopAnimation=$(t,{y:[0,-8,0]},{duration:.5,repeat:1/0,repeatDelay:2,type:`spring`,stiffness:400,damping:10});break}}disconnectedCallback(){this._loopAnimation?.cancel()}attributeChangedCallback(){this._loopAnimation?.cancel(),this.render(),this.startLoop()}};a(Wa,`observedAttributes`,[`variant`,`animate`]),customElements.define(`kids-badge`,Wa);var Ga=class extends o{constructor(...e){super(...e),a(this,`_track`,null),a(this,`_thumb`,null)}template(){let e=this.boolAttr(`checked`),t=this.boolAttr(`disabled`),n=this.attr(`variant`,`primary`);return`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-sm);
        }

        .track {
          position: relative;
          border-radius: var(--kids-radius-full);
          cursor: pointer;
          transition: background 0.3s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          background: #D1D5DB;
        }

        /* ---- Sizes ---- */
        .track.sm { width: 36px; height: 20px; }
        .track.md { width: 48px; height: 26px; }
        .track.lg { width: 60px; height: 32px; }

        /* ---- On states by variant ---- */
        .track.checked.primary { background: var(--kids-color-primary); }
        .track.checked.secondary { background: var(--kids-color-secondary); }
        .track.checked.accent { background: var(--kids-color-accent); }

        /* ---- Thumb ---- */
        .thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          background: var(--kids-color-surface);
          border-radius: 50%;
          box-shadow: var(--kids-shadow-sm);
          will-change: transform;
        }

        .track.sm .thumb { width: 14px; height: 14px; }
        .track.md .thumb { width: 20px; height: 20px; }
        .track.lg .thumb { width: 26px; height: 26px; }

        /* ---- Disabled ---- */
        .track.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Focus ---- */
        .track:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        /* ---- Label ---- */
        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          user-select: none;
          cursor: pointer;
        }
        .label.disabled { cursor: not-allowed; opacity: 0.5; }
      </style>

      <div
        class="track ${this.attr(`size`,`md`)} ${n} ${e?`checked`:``} ${t?`disabled`:``}"
        role="switch"
        tabindex="${t?`-1`:`0`}"
        aria-checked="${e}"
        part="track"
      >
        <div class="thumb" part="thumb"></div>
      </div>
      <span class="label ${t?`disabled`:``}"><slot></slot></span>
    `}connectedCallback(){super.connectedCallback(),this._track=this.root.querySelector(`.track`),this._thumb=this.root.querySelector(`.thumb`),this._track&&(this._setThumbPosition(!1),Si(this._track,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:.95},{type:`spring`,stiffness:500,damping:20}),()=>{$(e,{scale:1},{type:`spring`,stiffness:400,damping:15})})),this._track.addEventListener(`click`,()=>this._toggle()),this._track.addEventListener(`keydown`,e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this._toggle())}),this.root.querySelector(`.label`)?.addEventListener(`click`,()=>this._toggle()))}onEnter(){$(this.root.querySelector(`.track`),{scale:[0,1]},{type:`spring`,stiffness:400,damping:15}),this._setThumbPosition(!1)}_toggle(){if(this.boolAttr(`disabled`))return;let e=!this.boolAttr(`checked`);e?this.setAttribute(`checked`,``):this.removeAttribute(`checked`),this.dispatchEvent(new CustomEvent(`kids-toggle`,{bubbles:!0,composed:!0,detail:{checked:e}}))}attributeChangedCallback(e){if(!(!this._track||!this._thumb)){if(e===`checked`){let e=this.boolAttr(`checked`);this._track.classList.toggle(`checked`,e),this._track.setAttribute(`aria-checked`,String(e)),this._setThumbPosition(!0);return}if(e===`disabled`){let e=this.boolAttr(`disabled`);this._track.classList.toggle(`disabled`,e),this._track.setAttribute(`tabindex`,e?`-1`:`0`),this.root.querySelector(`.label`)?.classList.toggle(`disabled`,e);return}this.render(),this._track=this.root.querySelector(`.track`),this._thumb=this.root.querySelector(`.thumb`),this._rebindListeners(),this._setThumbPosition(!1)}}_setThumbPosition(e){let t=this.boolAttr(`checked`),n=this.attr(`size`,`md`),r=t?{sm:16,md:22,lg:28}[n]??22:0;e&&this._thumb?$(this._thumb,{x:r},{type:`spring`,stiffness:600,damping:20}):this._thumb&&(this._thumb.style.transform=`translateX(${r}px)`)}_rebindListeners(){this._track?.addEventListener(`click`,()=>this._toggle()),this._track?.addEventListener(`keydown`,e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this._toggle())}),this.root.querySelector(`.label`)?.addEventListener(`click`,()=>this._toggle())}};a(Ga,`observedAttributes`,[`checked`,`disabled`,`variant`,`size`]),customElements.define(`kids-toggle`,Ga);var Ka=class extends o{template(){let e=this.attr(`placeholder`,``),t=this.attr(`value`,``),n=this.attr(`type`,`text`),r=this.boolAttr(`disabled`);return`
      <style>
        :host {
          display: inline-block;
          min-width: 200px;
        }

        .wrapper {
          position: relative;
          will-change: transform, opacity;
        }

        input {
          width: 100%;
          border: 3px solid transparent;
          outline: none;
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          box-shadow: var(--kids-shadow-sm);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }

        /* ---- Sizes ---- */
        input.sm {
          padding: var(--kids-space-xs) var(--kids-space-sm);
          font-size: var(--kids-font-size-sm);
        }
        input.md {
          padding: var(--kids-space-sm) var(--kids-space-md);
          font-size: var(--kids-font-size-md);
        }
        input.lg {
          padding: var(--kids-space-md) var(--kids-space-lg);
          font-size: var(--kids-font-size-lg);
        }

        /* ---- Variants ---- */
        input.outlined {
          border-color: var(--kids-color-primary);
          box-shadow: none;
        }

        /* ---- Focus ---- */
        input:focus {
          border-color: var(--kids-color-primary);
          box-shadow: var(--kids-shadow-md);
        }

        input.outlined:focus {
          border-color: var(--kids-color-secondary);
          box-shadow: 0 0 0 3px var(--kids-alpha-primary-15);
        }

        /* ---- Disabled ---- */
        input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Placeholder ---- */
        input::placeholder {
          color: var(--kids-color-text);
          opacity: 0.4;
          font-weight: var(--kids-font-weight-normal);
        }
      </style>

      <div class="wrapper">
        <input
          class="${this.attr(`variant`,`default`)} ${this.attr(`size`,`md`)}"
          type="${n}"
          placeholder="${e}"
          value="${t}"
          ${r?`disabled`:``}
          part="input"
        />
      </div>
    `}onEnter(){$(this.root.querySelector(`.wrapper`),{opacity:[0,1],y:[12,0]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`input`),t=this.root.querySelector(`.wrapper`);!e||!t||(Q(t,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:1.01},{type:`spring`,stiffness:400,damping:20}),()=>{$(e,{scale:1},{type:`spring`,stiffness:400,damping:20})})),e.addEventListener(`focus`,()=>{this.boolAttr(`disabled`)||$(t,{scale:1.02},{type:`spring`,stiffness:400,damping:15})}),e.addEventListener(`blur`,()=>{$(t,{scale:1},{type:`spring`,stiffness:400,damping:15})}),e.addEventListener(`input`,()=>{this.dispatchEvent(new CustomEvent(`kids-input`,{detail:{value:e.value},bubbles:!0,composed:!0}))}),e.addEventListener(`change`,()=>{this.dispatchEvent(new CustomEvent(`kids-change`,{detail:{value:e.value},bubbles:!0,composed:!0}))}))}attributeChangedCallback(){this.render(),this._bindEvents()}};a(Ka,`observedAttributes`,[`placeholder`,`value`,`type`,`disabled`,`variant`,`size`]),customElements.define(`kids-input`,Ka);var qa=class extends o{template(){let e=Math.min(100,Math.max(0,Number(this.attr(`value`,`0`))||0)),t=this.attr(`variant`,`primary`),n=this.attr(`size`,`md`),r=this.boolAttr(`striped`),i=this.boolAttr(`label`);return`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .track {
          width: 100%;
          border-radius: var(--kids-radius-full);
          background: var(--kids-color-surface-alt);
          overflow: hidden;
          position: relative;
        }

        /* ---- Sizes ---- */
        .track.sm { height: 8px; }
        .track.md { height: 16px; }
        .track.lg { height: 24px; }

        .fill {
          height: 100%;
          border-radius: var(--kids-radius-full);
          width: 0%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: var(--kids-space-xs);
          will-change: width;
          position: relative;
          overflow: hidden;
        }

        /* ---- Variants ---- */
        .fill.primary { background: var(--kids-color-primary); }
        .fill.secondary { background: var(--kids-color-secondary); }
        .fill.accent { background: var(--kids-color-accent); }
        .fill.warning { background: var(--kids-color-warning); }
        .fill.info { background: var(--kids-color-info); }

        /* ---- Stripes ---- */
        .fill.striped::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 6px,
            rgba(255, 255, 255, 0.2) 6px,
            rgba(255, 255, 255, 0.2) 12px
          );
          animation: stripe-move 0.8s linear infinite;
        }

        @keyframes stripe-move {
          0% { background-position: 0 0; }
          100% { background-position: 17px 0; }
        }

        /* ---- Label ---- */
        .label-text {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text-light);
          position: relative;
          z-index: 1;
          line-height: 1;
        }

        .fill.warning .label-text {
          color: var(--kids-color-text);
        }
      </style>

      <div class="track ${n}" role="progressbar" aria-valuenow="${e}" aria-valuemin="0" aria-valuemax="100" part="track">
        <div class="fill ${t} ${r?`striped`:``}" part="fill">
          ${i?`<span class="label-text">${e}%</span>`:``}
        </div>
      </div>
    `}onEnter(){let e=Math.min(100,Math.max(0,Number(this.attr(`value`,`0`))||0));$(this.root.querySelector(`.fill`),{width:[`0%`,`${e}%`]},{type:`spring`,stiffness:200,damping:25})}attributeChangedCallback(){this.render();let e=Math.min(100,Math.max(0,Number(this.attr(`value`,`0`))||0));$(this.root.querySelector(`.fill`),{width:`${e}%`},{type:`spring`,stiffness:200,damping:25})}};a(qa,`observedAttributes`,[`value`,`variant`,`size`,`striped`,`label`]),customElements.define(`kids-progress`,qa);var Ja=class extends o{template(){let e=this.attr(`src`,``),t=this.attr(`size`,`md`),n=this.attr(`variant`,`primary`),r={sm:`32px`,md:`48px`,lg:`64px`,xl:`96px`},i=r[t]??r.md,a={sm:`var(--kids-font-size-sm)`,md:`var(--kids-font-size-md)`,lg:`var(--kids-font-size-lg)`,xl:`var(--kids-font-size-xl)`};return`
      <style>
        :host {
          display: inline-block;
        }

        .avatar {
          width: ${i};
          height: ${i};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--kids-font-family);
          font-size: ${a[t]??a.md};
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.04em;
          overflow: hidden;
          user-select: none;
          cursor: default;
          will-change: transform;
          box-shadow: var(--kids-shadow-sm);
          border: 3px solid var(--kids-color-surface);
        }

        /* ---- Variants (background for initials mode) ---- */
        .avatar.primary { background: var(--kids-color-primary); color: var(--kids-color-text-light); }
        .avatar.secondary { background: var(--kids-color-secondary); color: var(--kids-color-text-light); }
        .avatar.accent { background: var(--kids-color-accent); color: var(--kids-color-text-light); }
        .avatar.warning { background: var(--kids-color-warning); color: var(--kids-color-text); }
        .avatar.info { background: var(--kids-color-info); color: var(--kids-color-text-light); }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      </style>

      <div class="avatar ${n}" part="avatar">
        ${e?`<img src="${e}" alt="avatar" />`:`<slot></slot>`}
      </div>
    `}onEnter(){$(this.root.querySelector(`.avatar`),{scale:[0,1.1,1]},{type:`spring`,stiffness:450,damping:15})}connectedCallback(){super.connectedCallback();let e=this.root.querySelector(`.avatar`);e&&Q(e,e=>{let t=$(e,{rotate:[0,-8,8,-4,0]},{duration:.5,ease:`easeInOut`});return()=>t.stop()})}attributeChangedCallback(){this.render()}};a(Ja,`observedAttributes`,[`src`,`size`,`variant`]),customElements.define(`kids-avatar`,Ja);var Ya=class extends o{template(){let e=this.attr(`variant`,`info`),t=this.boolAttr(`dismissible`),n={info:`&#9432;`,success:`&#10004;`,warning:`&#9888;`,error:`&#10008;`};return`
      <style>
        :host {
          display: block;
        }

        .alert {
          display: flex;
          align-items: flex-start;
          gap: var(--kids-space-sm);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          will-change: transform, opacity;
          border-left: 5px solid transparent;
        }

        /* ---- Variants ---- */
        .alert.info {
          background: #EFF6FF;
          border-left-color: var(--kids-color-info);
          color: #1E40AF;
        }
        .alert.success {
          background: #ECFDF5;
          border-left-color: var(--kids-color-accent);
          color: #166534;
        }
        .alert.warning {
          background: #FFFBEB;
          border-left-color: var(--kids-color-warning);
          color: #92400E;
        }
        .alert.error {
          background: #FEF2F2;
          border-left-color: var(--kids-color-error);
          color: #991B1B;
        }

        .icon {
          font-size: var(--kids-font-size-lg);
          flex-shrink: 0;
          line-height: 1;
        }

        .content {
          flex: 1;
          line-height: 1.5;
        }

        .close {
          border: none;
          background: none;
          cursor: pointer;
          font-size: var(--kids-font-size-lg);
          opacity: 0.5;
          padding: 0;
          line-height: 1;
          color: inherit;
          flex-shrink: 0;
          transition: opacity 0.15s ease;
        }

        .close:hover {
          opacity: 1;
        }
      </style>

      <div class="alert ${e}" role="alert" part="alert">
        <span class="icon">${n[e]??n.info}</span>
        <div class="content"><slot></slot></div>
        ${t?`<button class="close" aria-label="Dismiss">&times;</button>`:``}
      </div>
    `}onEnter(){$(this.root.querySelector(`.alert`),{opacity:[0,1],y:[-16,0]},{type:`spring`,stiffness:300,damping:22})}connectedCallback(){super.connectedCallback(),this.boolAttr(`dismissible`)&&this.root.querySelector(`.close`)?.addEventListener(`click`,()=>this._dismiss())}_dismiss(){$(this.root.querySelector(`.alert`),{opacity:[1,0],y:[0,-16]},{duration:.25,ease:`easeIn`}),setTimeout(()=>{this.dispatchEvent(new CustomEvent(`kids-dismiss`,{bubbles:!0,composed:!0})),this.remove()},280)}attributeChangedCallback(){this.render()}};a(Ya,`observedAttributes`,[`variant`,`dismissible`]),customElements.define(`kids-alert`,Ya);var Xa=class extends o{template(){let e=this.attr(`variant`,`solid`);return`
      <style>
        :host {
          display: block;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          will-change: transform, opacity;
        }

        /* ---- Spacing ---- */
        .divider.sm { margin: var(--kids-space-sm) 0; }
        .divider.md { margin: var(--kids-space-md) 0; }
        .divider.lg { margin: var(--kids-space-xl) 0; }

        .line {
          flex: 1;
          height: 3px;
          border: none;
          border-radius: var(--kids-radius-full);
        }

        /* ---- Variants ---- */
        .line.solid { background: currentColor; }
        .line.dashed {
          background: repeating-linear-gradient(
            90deg,
            currentColor 0,
            currentColor 8px,
            transparent 8px,
            transparent 14px
          );
        }
        .line.dotted {
          background: repeating-linear-gradient(
            90deg,
            currentColor 0,
            currentColor 4px,
            transparent 4px,
            transparent 10px
          );
        }
        .line.wavy {
          height: 8px;
          background: none;
          position: relative;
          overflow: hidden;
        }
        .line.wavy::after {
          content: "";
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='M0 4 Q5 0 10 4 Q15 8 20 4' fill='none' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E") repeat-x;
        }

        /* ---- Colors ---- */
        .divider.primary { color: var(--kids-color-primary); }
        .divider.secondary { color: var(--kids-color-secondary); }
        .divider.accent { color: var(--kids-color-accent); }
        .divider.warning { color: var(--kids-color-warning); }
        .divider.info { color: var(--kids-color-info); }

        /* ---- Label ---- */
        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          white-space: nowrap;
        }
      </style>

      <div class="divider ${this.attr(`color`,`primary`)} ${this.attr(`spacing`,`md`)}" role="separator" part="divider">
        <div class="line ${e}"></div>
        <span class="label"><slot></slot></span>
        <div class="line ${e}"></div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.divider`),{opacity:[0,1],scaleX:[0,1]},{type:`spring`,stiffness:300,damping:20})}attributeChangedCallback(){this.render()}};a(Xa,`observedAttributes`,[`variant`,`color`,`spacing`]),customElements.define(`kids-divider`,Xa);var Za=class extends o{template(){let e=this.attr(`variant`,`primary`),t=this.boolAttr(`removable`),n=this.boolAttr(`selected`);return`
      <style>
        :host {
          display: inline-block;
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-xs);
          border-radius: var(--kids-radius-full);
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.02em;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          will-change: transform;
          border: 2px solid transparent;
          transition: box-shadow 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        /* ---- Sizes ---- */
        .chip.sm {
          padding: 2px var(--kids-space-sm);
          font-size: var(--kids-font-size-sm);
        }
        .chip.md {
          padding: var(--kids-space-xs) var(--kids-space-md);
          font-size: var(--kids-font-size-md);
        }

        /* ---- Variants (outline by default, filled when selected) ---- */
        .chip.primary   { background: var(--kids-alpha-primary-12); color: var(--kids-color-primary); border-color: var(--kids-color-primary); }
        .chip.secondary { background: var(--kids-alpha-secondary-12); color: var(--kids-color-secondary); border-color: var(--kids-color-secondary); }
        .chip.accent    { background: var(--kids-alpha-accent-12); color: var(--kids-color-text); border-color: var(--kids-color-accent); }
        .chip.warning   { background: var(--kids-alpha-warning-12); color: var(--kids-color-text); border-color: var(--kids-color-warning); }
        .chip.info      { background: var(--kids-alpha-info-12); color: var(--kids-color-text); border-color: var(--kids-color-info); }

        /* ---- Selected (filled) ---- */
        .chip.selected.primary   { background: var(--kids-color-primary); color: var(--kids-color-text-light); }
        .chip.selected.secondary { background: var(--kids-color-secondary); color: var(--kids-color-text-light); }
        .chip.selected.accent    { background: var(--kids-color-accent); color: var(--kids-color-text-light); }
        .chip.selected.warning   { background: var(--kids-color-warning); color: var(--kids-color-text); }
        .chip.selected.info      { background: var(--kids-color-info); color: var(--kids-color-text-light); }

        .close {
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
          margin-left: 2px;
          font-size: 1em;
          line-height: 1;
          opacity: 0.6;
          color: inherit;
          display: flex;
          align-items: center;
          transition: opacity 0.15s ease;
        }
        .close:hover { opacity: 1; }

        /* ---- Focus ---- */
        .chip:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 2px;
        }
      </style>

      <span class="chip ${e} ${this.attr(`size`,`md`)} ${n?`selected`:``}" tabindex="0" part="chip">
        <slot></slot>
        ${t?`<button class="close" aria-label="Remove">&times;</button>`:``}
      </span>
    `}onEnter(){$(this.root.querySelector(`.chip`),{scale:[0,1.1,1]},{type:`spring`,stiffness:400,damping:15})}connectedCallback(){super.connectedCallback();let e=this.root.querySelector(`.chip`);e&&(Q(e,e=>($(e,{scale:1.06},{type:`spring`,stiffness:400,damping:15}),()=>{$(e,{scale:1},{type:`spring`,stiffness:400,damping:15})})),e.addEventListener(`click`,e=>{e.target.classList.contains(`close`)||this.dispatchEvent(new CustomEvent(`kids-chip-click`,{bubbles:!0,composed:!0}))}),this.boolAttr(`removable`)&&this.root.querySelector(`.close`)?.addEventListener(`click`,()=>this._remove()))}_remove(){$(this.root.querySelector(`.chip`),{scale:[1,0],opacity:[1,0]},{duration:.2}),setTimeout(()=>{this.dispatchEvent(new CustomEvent(`kids-remove`,{bubbles:!0,composed:!0})),this.remove()},220)}attributeChangedCallback(){this.render()}};a(Za,`observedAttributes`,[`variant`,`removable`,`selected`,`size`]),customElements.define(`kids-chip`,Za);var Qa=class extends o{template(){let e=this.attr(`text`,``);return`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        .trigger {
          display: inline-block;
        }

        .tip {
          position: absolute;
          z-index: 1000;
          padding: var(--kids-space-xs) var(--kids-space-sm);
          border-radius: var(--kids-radius-sm);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          will-change: transform, opacity;
        }

        /* ---- Variants ---- */
        .tip.dark  { background: var(--kids-color-text); color: var(--kids-color-text-light); }
        .tip.primary { background: var(--kids-color-primary); color: var(--kids-color-text-light); }
        .tip.secondary { background: var(--kids-color-secondary); color: var(--kids-color-text-light); }

        /* ---- Positions ---- */
        .tip.top {
          bottom: calc(100% + 8px);
          left: 50%;
        }
        .tip.bottom {
          top: calc(100% + 8px);
          left: 50%;
        }
        .tip.left {
          right: calc(100% + 8px);
          top: 50%;
        }
        .tip.right {
          left: calc(100% + 8px);
          top: 50%;
        }

        /* ---- Arrow ---- */
        .tip::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: inherit;
          transform: rotate(45deg);
        }
        .tip.top::after    { bottom: -4px; left: calc(50% - 4px); }
        .tip.bottom::after { top: -4px; left: calc(50% - 4px); }
        .tip.left::after   { right: -4px; top: calc(50% - 4px); }
        .tip.right::after  { left: -4px; top: calc(50% - 4px); }
      </style>

      <div class="trigger" part="trigger">
        <slot></slot>
      </div>
      <div class="tip ${this.attr(`position`,`top`)} ${this.attr(`variant`,`dark`)}" part="tip">${e}</div>
    `}connectedCallback(){super.connectedCallback();let e=this.root.querySelector(`.trigger`);e&&(e.addEventListener(`pointerenter`,()=>this._show()),e.addEventListener(`pointerleave`,()=>this._hide()),e.addEventListener(`focusin`,()=>this._show()),e.addEventListener(`focusout`,()=>this._hide()))}_show(){let e=this.root.querySelector(`.tip`);if(!e)return;let t=this.attr(`position`,`top`),n=t===`top`||t===`bottom`?`translateX(-50%)`:`translateY(-50%)`,r={top:`${n} translateY(6px)`,bottom:`${n} translateY(-6px)`,left:`${n} translateX(6px)`,right:`${n} translateX(-6px)`},i={top:`${n} translateY(0)`,bottom:`${n} translateY(0)`,left:`${n} translateX(0)`,right:`${n} translateX(0)`};$(e,{opacity:[0,1],transform:[r[t]??r.top,i[t]??i.top]},{type:`spring`,stiffness:400,damping:20})}_hide(){let e=this.root.querySelector(`.tip`);e&&$(e,{opacity:0},{duration:.15})}attributeChangedCallback(){this.render()}};a(Qa,`observedAttributes`,[`text`,`position`,`variant`]),customElements.define(`kids-tooltip`,Qa);var $a=class extends o{constructor(...e){super(...e),a(this,`_loopAnimation`,void 0)}template(){let e=this.attr(`variant`,`primary`),t=this.attr(`size`,`md`),n=this.attr(`type`,`spin`),r={sm:`24px`,md:`40px`,lg:`56px`},i=r[t]??r.md,a={sm:`6px`,md:`10px`,lg:`14px`},o=a[t]??a.md;if(n===`dots`)return`
        <style>
          :host { display: inline-flex; align-items: center; gap: var(--kids-space-xs); }
          .dot {
            width: ${o};
            height: ${o};
            border-radius: 50%;
            will-change: transform;
          }
          .dot.primary   { background: var(--kids-color-primary); }
          .dot.secondary { background: var(--kids-color-secondary); }
          .dot.accent    { background: var(--kids-color-accent); }
          .dot.warning   { background: var(--kids-color-warning); }
          .dot.info      { background: var(--kids-color-info); }
        </style>
        <div class="dot ${e}" part="dot"></div>
        <div class="dot ${e}" part="dot"></div>
        <div class="dot ${e}" part="dot"></div>
      `;if(n===`bounce`)return`
        <style>
          :host { display: inline-block; }
          .ball {
            width: ${i};
            height: ${i};
            border-radius: 50%;
            will-change: transform;
          }
          .ball.primary   { background: var(--kids-color-primary); }
          .ball.secondary { background: var(--kids-color-secondary); }
          .ball.accent    { background: var(--kids-color-accent); }
          .ball.warning   { background: var(--kids-color-warning); }
          .ball.info      { background: var(--kids-color-info); }
        </style>
        <div class="ball ${e}" part="ball"></div>
      `;let s={sm:`3px`,md:`4px`,lg:`5px`};return`
      <style>
        :host { display: inline-block; }
        .ring {
          width: ${i};
          height: ${i};
          border-radius: 50%;
          border: ${s[t]??s.md} solid var(--kids-color-surface-alt);
          will-change: transform;
        }
        .ring.primary   { border-top-color: var(--kids-color-primary); }
        .ring.secondary { border-top-color: var(--kids-color-secondary); }
        .ring.accent    { border-top-color: var(--kids-color-accent); }
        .ring.warning   { border-top-color: var(--kids-color-warning); }
        .ring.info      { border-top-color: var(--kids-color-info); }
      </style>
      <div class="ring ${e}" role="status" aria-label="Loading" part="ring"></div>
    `}onEnter(){this._startAnimation()}_startAnimation(){let e=this.attr(`type`,`spin`);if(e===`dots`){Array.from(this.root.querySelectorAll(`.dot`)).forEach((e,t)=>{this._loopAnimation=$(e,{y:[0,-10,0]},{duration:.5,repeat:1/0,repeatDelay:.8,delay:t*.15,ease:`easeInOut`})});return}if(e===`bounce`){this._loopAnimation=$(this.root.querySelector(`.ball`),{y:[0,-20,0],scaleY:[1,.9,1.15,1]},{duration:.6,repeat:1/0,ease:`easeInOut`});return}this._loopAnimation=$(this.root.querySelector(`.ring`),{rotate:[0,360]},{duration:.8,repeat:1/0,ease:`linear`})}disconnectedCallback(){this._loopAnimation?.cancel()}attributeChangedCallback(){this._loopAnimation?.cancel(),this.render(),this._startAnimation()}};a($a,`observedAttributes`,[`size`,`variant`,`type`]),customElements.define(`kids-spinner`,$a);var eo=class extends o{constructor(...e){super(...e),a(this,`_outer`,null)}template(){let e=this.boolAttr(`checked`),t=this.boolAttr(`disabled`),n=this.attr(`variant`,`primary`);return`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-sm);
          cursor: pointer;
          user-select: none;
        }
        :host([disabled]) { cursor: not-allowed; }

        .outer {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease;
          will-change: transform;
          flex-shrink: 0;
        }

        .outer.primary.checked   { border-color: var(--kids-color-primary); }
        .outer.secondary.checked { border-color: var(--kids-color-secondary); }
        .outer.accent.checked    { border-color: var(--kids-color-accent); }

        .inner {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transform: scale(0);
          will-change: transform;
        }

        .inner.primary   { background: var(--kids-color-primary); }
        .inner.secondary { background: var(--kids-color-secondary); }
        .inner.accent    { background: var(--kids-color-accent); }

        .outer.disabled {
          opacity: 0.5;
        }

        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }
        .label.disabled { opacity: 0.5; }

        /* ---- Focus ---- */
        :host(:focus-visible) .outer {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }
      </style>

      <div class="outer ${n} ${e?`checked`:``} ${t?`disabled`:``}" part="outer">
        <div class="inner ${n}" part="inner"></div>
      </div>
      <span class="label ${t?`disabled`:``}"><slot></slot></span>
    `}connectedCallback(){super.connectedCallback(),!this.hasAttribute(`tabindex`)&&!this.boolAttr(`disabled`)&&this.setAttribute(`tabindex`,`0`),this.setAttribute(`role`,`radio`),this._outer=this.root.querySelector(`.outer`),Si(this,e=>this.boolAttr(`disabled`)?()=>{}:($(this._outer,{scale:.85},{type:`spring`,stiffness:500,damping:20}),()=>{$(this._outer,{scale:1},{type:`spring`,stiffness:400,damping:15})})),this.addEventListener(`click`,()=>this._select()),this.addEventListener(`keydown`,e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this._select())})}onEnter(){if($(this.root.querySelector(`.outer`),{scale:[0,1]},{type:`spring`,stiffness:400,damping:15}),this.boolAttr(`checked`)){let e=this.root.querySelector(`.inner`);e&&(e.style.transform=`scale(1)`)}}_select(){if(this.boolAttr(`disabled`)||this.boolAttr(`checked`))return;let e=this.attr(`name`,``);if(e){let t=this.parentElement;t&&t.querySelectorAll(`kids-radio[name="${e}"]`).forEach(e=>{e!==this&&e.hasAttribute(`checked`)&&e.removeAttribute(`checked`)})}this.setAttribute(`checked`,``),this.dispatchEvent(new CustomEvent(`kids-radio-change`,{detail:{value:this.attr(`value`,``),name:this.attr(`name`,``)},bubbles:!0,composed:!0}))}attributeChangedCallback(e){if(this._outer){if(e===`checked`){let e=this.boolAttr(`checked`);this._outer.classList.toggle(`checked`,e),this.setAttribute(`aria-checked`,String(e));let t=this.root.querySelector(`.inner`);t&&$(t,{scale:+!!e},{type:`spring`,stiffness:500,damping:15});return}this.render(),this._outer=this.root.querySelector(`.outer`)}}};a(eo,`observedAttributes`,[`checked`,`disabled`,`variant`,`name`,`value`]),customElements.define(`kids-radio`,eo);var to=class extends o{constructor(...e){super(...e),a(this,`_box`,null)}template(){let e=this.boolAttr(`checked`),t=this.boolAttr(`disabled`);return`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-sm);
          cursor: pointer;
          user-select: none;
        }
        :host([disabled]) { cursor: not-allowed; }

        .box {
          width: 24px;
          height: 24px;
          border-radius: var(--kids-radius-sm);
          border: 3px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, border-color 0.2s ease;
          will-change: transform;
          flex-shrink: 0;
          background: var(--kids-color-surface);
        }

        .box.checked.primary   { background: var(--kids-color-primary); border-color: var(--kids-color-primary); }
        .box.checked.secondary { background: var(--kids-color-secondary); border-color: var(--kids-color-secondary); }
        .box.checked.accent    { background: var(--kids-color-accent); border-color: var(--kids-color-accent); }

        .box.disabled {
          opacity: 0.5;
        }

        .check {
          width: 14px;
          height: 14px;
          will-change: transform;
          transform: scale(0);
        }

        .check svg {
          width: 100%;
          height: 100%;
        }

        .check svg path {
          fill: none;
          stroke: var(--kids-color-text-light);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .box.checked.accent .check svg path {
          stroke: var(--kids-color-text-light);
        }

        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }
        .label.disabled { opacity: 0.5; }

        /* ---- Focus ---- */
        :host(:focus-visible) .box {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }
      </style>

      <div class="box ${this.attr(`variant`,`primary`)} ${e?`checked`:``} ${t?`disabled`:``}" part="box">
        <div class="check">
          <svg viewBox="0 0 16 16">
            <path d="M3 8.5 L6.5 12 L13 4"></path>
          </svg>
        </div>
      </div>
      <span class="label ${t?`disabled`:``}"><slot></slot></span>
    `}connectedCallback(){super.connectedCallback(),!this.hasAttribute(`tabindex`)&&!this.boolAttr(`disabled`)&&this.setAttribute(`tabindex`,`0`),this.setAttribute(`role`,`checkbox`),this._box=this.root.querySelector(`.box`),Si(this,e=>this.boolAttr(`disabled`)?()=>{}:($(this._box,{scale:.85},{type:`spring`,stiffness:500,damping:20}),()=>{$(this._box,{scale:1},{type:`spring`,stiffness:400,damping:15})})),this.addEventListener(`click`,()=>this._toggle()),this.addEventListener(`keydown`,e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this._toggle())})}onEnter(){if($(this.root.querySelector(`.box`),{scale:[0,1]},{type:`spring`,stiffness:400,damping:18}),this.boolAttr(`checked`)){let e=this.root.querySelector(`.check`);e&&(e.style.transform=`scale(1)`)}}_toggle(){if(this.boolAttr(`disabled`))return;let e=!this.boolAttr(`checked`);e?this.setAttribute(`checked`,``):this.removeAttribute(`checked`),this.dispatchEvent(new CustomEvent(`kids-checkbox-change`,{detail:{checked:e},bubbles:!0,composed:!0}))}attributeChangedCallback(e){if(this._box){if(e===`checked`){let e=this.boolAttr(`checked`);this._box.classList.toggle(`checked`,e),this.setAttribute(`aria-checked`,String(e));let t=this.attr(`variant`,`primary`);for(let e of[`primary`,`secondary`,`accent`])this._box.classList.toggle(e,e===t);let n=this.root.querySelector(`.check`);n&&$(n,{scale:+!!e},{type:`spring`,stiffness:500,damping:e?15:22}),e&&$(this._box,{scale:[1,1.15,1]},{type:`spring`,stiffness:400,damping:14});return}this.render(),this._box=this.root.querySelector(`.box`)}}};a(to,`observedAttributes`,[`checked`,`disabled`,`variant`]),customElements.define(`kids-checkbox`,to);var no=class extends o{constructor(...e){super(...e),a(this,`_open`,!1),a(this,`_options`,[]),a(this,`_onDocClick`,e=>{!this.contains(e.target)&&this._open&&(this._open=!1,this.render(),this._bindEvents())})}template(){let e=this.attr(`placeholder`,`Pick one!`),t=this.boolAttr(`disabled`),n=this.attr(`value`),r=this.attr(`variant`,`default`);this._options=Array.from(this.querySelectorAll(`option`)).map(e=>({value:e.value||e.textContent||``,label:e.textContent||e.value||``}));let i=this._options.find(e=>e.value===n),a=i?i.label:e,o=this._options.map(e=>`
        <div class="option ${e.value===n?`selected`:``}" data-value="${e.value}">
          ${e.label}
        </div>`).join(``);return`
      <style>
        :host {
          display: inline-block;
          position: relative;
          min-width: 180px;
        }

        .trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--kids-space-sm);
          padding: var(--kids-space-sm) var(--kids-space-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          border-radius: var(--kids-radius-md);
          cursor: pointer;
          user-select: none;
          border: 3px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .trigger.default {
          background: var(--kids-color-surface-alt);
          box-shadow: var(--kids-shadow-sm);
        }

        .trigger.outlined {
          background: var(--kids-color-surface);
          border-color: var(--kids-color-primary);
        }

        .trigger.open,
        .trigger:focus-visible {
          border-color: var(--kids-color-primary);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-18);
        }

        .trigger.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .trigger.placeholder {
          color: var(--kids-color-text);
          opacity: 0.5;
        }

        .arrow {
          font-size: 0.7em;
          transition: transform 0.2s ease;
        }
        .arrow.open { transform: rotate(180deg); }

        .dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          box-shadow: var(--kids-shadow-lg);
          overflow: hidden;
          z-index: 100;
          display: none;
        }

        .dropdown.open { display: block; }

        .option {
          padding: var(--kids-space-sm) var(--kids-space-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .option:hover {
          background: var(--kids-color-surface-alt);
        }

        .option.selected {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          font-weight: var(--kids-font-weight-bold);
        }
      </style>

      <div
        class="trigger ${r} ${t?`disabled`:``} ${i?``:`placeholder`} ${this._open?`open`:``}"
        tabindex="${t?`-1`:`0`}"
        role="combobox"
        aria-expanded="${this._open}"
        part="trigger"
      >
        <span class="display-text">${a}</span>
        <span class="arrow ${this._open?`open`:``}">▼</span>
      </div>

      <div class="dropdown ${this._open?`open`:``}" part="dropdown">
        ${o}
      </div>
    `}onEnter(){$(this.root.querySelector(`.trigger`),{scale:[.9,1],opacity:[0,1]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindEvents(),document.addEventListener(`click`,this._onDocClick)}disconnectedCallback(){document.removeEventListener(`click`,this._onDocClick)}_bindEvents(){let e=this.root.querySelector(`.trigger`);e&&(e.addEventListener(`click`,()=>{if(!this.boolAttr(`disabled`)&&(this._open=!this._open,this.render(),this._bindEvents(),this._open)){let e=this.root.querySelector(`.dropdown`);e&&$(e,{opacity:[0,1],y:[-8,0]},{type:`spring`,stiffness:400,damping:20})}}),e.addEventListener(`keydown`,t=>{t.key===`Enter`||t.key===` `?(t.preventDefault(),e.dispatchEvent(new Event(`click`))):t.key===`Escape`&&this._open&&(this._open=!1,this.render(),this._bindEvents())}),this.root.querySelectorAll(`.option`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.value||``;this.setAttribute(`value`,t),this._open=!1,this.render(),this._bindEvents();let n=this._options.find(e=>e.value===t)?.label||``;this.dispatchEvent(new CustomEvent(`kids-change`,{bubbles:!0,composed:!0,detail:{value:t,label:n}}))})}))}attributeChangedCallback(){this.render(),this._bindEvents()}};a(no,`observedAttributes`,[`placeholder`,`disabled`,`value`,`variant`]),customElements.define(`kids-select`,no);var ro=class extends o{template(){let e=this.attr(`placeholder`,`Type something fun...`),t=this.attr(`rows`,`4`),n=this.boolAttr(`disabled`),r=this.attr(`value`);return`
      <style>
        :host {
          display: block;
        }

        textarea {
          width: 100%;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          border-radius: var(--kids-radius-md);
          padding: var(--kids-space-md);
          border: 3px solid transparent;
          outline: none;
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        textarea.default {
          background: var(--kids-color-surface-alt);
          box-shadow: var(--kids-shadow-sm);
        }

        textarea.outlined {
          background: var(--kids-color-surface);
          border-color: var(--kids-color-primary);
        }

        textarea:focus {
          border-color: var(--kids-color-primary);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-18);
        }

        textarea:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        textarea::placeholder {
          color: var(--kids-color-text);
          opacity: 0.4;
        }
      </style>

      <textarea
        class="${this.attr(`variant`,`default`)}"
        placeholder="${e}"
        rows="${t}"
        ${n?`disabled`:``}
        part="textarea"
      >${r}</textarea>
    `}onEnter(){$(this.root.querySelector(`textarea`),{opacity:[0,1],y:[12,0]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindEvents()}attributeChangedCallback(){this.render(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`textarea`);e&&(Q(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{y:-2},{type:`spring`,stiffness:400,damping:20}),()=>{$(e,{y:0},{type:`spring`,stiffness:400,damping:20})})),e.addEventListener(`input`,()=>{this.dispatchEvent(new CustomEvent(`kids-input`,{bubbles:!0,composed:!0,detail:{value:e.value}}))}),e.addEventListener(`change`,()=>{this.dispatchEvent(new CustomEvent(`kids-change`,{bubbles:!0,composed:!0,detail:{value:e.value}}))}))}};a(ro,`observedAttributes`,[`placeholder`,`rows`,`disabled`,`value`,`variant`]),customElements.define(`kids-textarea`,ro);var io=class extends o{template(){let e=parseInt(this.attr(`active`,`0`),10);return`
      <style>
        :host { display: block; }

        .tab-header {
          display: flex;
          gap: var(--kids-space-xs);
          border-bottom: 3px solid var(--kids-color-surface-alt);
          margin-bottom: var(--kids-space-md);
          position: relative;
        }

        .tab-header.pills {
          border-bottom: none;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          padding: var(--kids-space-xs);
        }

        .tab-btn {
          border: none;
          background: transparent;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          padding: var(--kids-space-sm) var(--kids-space-md);
          cursor: pointer;
          position: relative;
          opacity: 0.6;
          transition: opacity 0.2s ease;
          border-radius: 0;
          outline: none;
        }

        .pills .tab-btn {
          border-radius: var(--kids-radius-full);
        }

        .tab-btn:hover { opacity: 0.85; }

        .tab-btn.active {
          opacity: 1;
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-primary);
        }

        .pills .tab-btn.active {
          background: var(--kids-color-surface);
          box-shadow: var(--kids-shadow-sm);
          color: var(--kids-color-primary);
        }

        .tab-btn:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 2px;
        }

        /* Underline indicator for default variant */
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--kids-color-primary);
          border-radius: var(--kids-radius-full);
        }

        .pills .tab-btn.active::after { display: none; }

        .tab-panel {
          will-change: opacity;
        }
      </style>

      <div class="tab-header ${this.attr(`variant`,`default`)}" role="tablist" part="header">
        ${Array.from(this.children).filter(e=>e.tagName===`KIDS-TAB`).map((t,n)=>`
        <button
          class="tab-btn ${n===e?`active`:``}"
          data-index="${n}"
          role="tab"
          aria-selected="${n===e}"
        >
          ${t.getAttribute(`label`)||`Tab ${n+1}`}
        </button>`).join(``)}
      </div>
      <div class="tab-panel" role="tabpanel" part="panel">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._updatePanels(),this._bindEvents(),requestAnimationFrame(()=>{this._updatePanels()})}onEnter(){$(this.root.querySelector(`.tab-header`),{opacity:[0,1],y:[-10,0]},{type:`spring`,stiffness:300,damping:20})}_updatePanels(){let e=parseInt(this.attr(`active`,`0`),10);Array.from(this.children).filter(e=>e.tagName===`KIDS-TAB`).forEach((t,n)=>{t.style.display=n===e?`block`:`none`})}_bindEvents(){this.root.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index||`0`,10);this.setAttribute(`active`,String(t))})})}attributeChangedCallback(e){if(this.render(),this._updatePanels(),this._bindEvents(),e===`active`){let e=parseInt(this.attr(`active`,`0`),10),t=Array.from(this.children).filter(e=>e.tagName===`KIDS-TAB`)[e]?.getAttribute(`label`)||``;$(this.root.querySelector(`.tab-panel`),{opacity:[0,1]},{duration:.2}),this.dispatchEvent(new CustomEvent(`kids-tab-change`,{bubbles:!0,detail:{index:e,label:t}}))}}};a(io,`observedAttributes`,[`active`,`variant`]);var ao=class extends HTMLElement{connectedCallback(){requestAnimationFrame(()=>{this.style.display||(this.style.display=`none`)})}};customElements.define(`kids-tabs`,io),customElements.define(`kids-tab`,ao);var oo=class extends o{constructor(...e){super(...e),a(this,`_onKeydown`,null)}template(){let e=this.boolAttr(`open`),t=this.attr(`title`),n=this.attr(`size`,`md`);return`
      <style>
        :host { display: contents; }

        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(45, 43, 85, 0.45);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }

        .backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        .dialog {
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-lg);
          box-shadow: var(--kids-shadow-lg);
          padding: var(--kids-space-lg);
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          will-change: transform, opacity;
        }

        .dialog.sm { width: min(340px, 90vw); }
        .dialog.md { width: min(480px, 90vw); }
        .dialog.lg { width: min(640px, 90vw); }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--kids-space-md);
        }

        .title {
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin: 0;
        }

        .close-btn {
          background: var(--kids-color-surface-alt);
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--kids-color-text);
          transition: background 0.15s ease;
        }

        .close-btn:hover {
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
        }

        .body {
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }

        .footer {
          margin-top: var(--kids-space-lg);
          display: flex;
          justify-content: flex-end;
          gap: var(--kids-space-sm);
        }
      </style>

      <div class="backdrop ${e?`open`:``}" part="backdrop">
        <div class="dialog ${n}" role="dialog" aria-modal="true" part="dialog">
          <div class="header">
            <h2 class="title">${t}</h2>
            <button class="close-btn" aria-label="Close">✕</button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){this.root.querySelector(`.close-btn`)?.addEventListener(`click`,()=>this._close());let e=this.root.querySelector(`.backdrop`);e?.addEventListener(`click`,t=>{t.target===e&&this._close()}),this._onKeydown&&document.removeEventListener(`keydown`,this._onKeydown),this._onKeydown=e=>{e.key===`Escape`&&this.boolAttr(`open`)&&this._close()},document.addEventListener(`keydown`,this._onKeydown)}disconnectedCallback(){this._onKeydown&&=(document.removeEventListener(`keydown`,this._onKeydown),null)}_close(){this.removeAttribute(`open`),this.dispatchEvent(new CustomEvent(`kids-close`,{bubbles:!0}))}attributeChangedCallback(e){this.render(),this._bindEvents(),e===`open`&&this.boolAttr(`open`)&&$(this.root.querySelector(`.dialog`),{scale:[.8,1],opacity:[0,1]},{type:`spring`,stiffness:300,damping:20})}};a(oo,`observedAttributes`,[`open`,`title`,`size`]),customElements.define(`kids-dialog`,oo);var so=class extends o{constructor(...e){super(...e),a(this,`_timer`,null)}template(){let e=this.attr(`variant`,`info`),t=this.boolAttr(`open`);this.attr(`position`,`top-right`);let n={info:`💡`,success:`🎉`,warning:`⚠️`,error:`😿`};return`
      <style>
        :host {
          display: block;
          position: fixed;
          z-index: 2000;
          pointer-events: none;
        }

        /* ---- Position ---- */
        :host { top: var(--kids-space-lg); right: var(--kids-space-lg); }
        :host(.top-left) { top: var(--kids-space-lg); left: var(--kids-space-lg); right: auto; }
        :host(.bottom-right) { top: auto; bottom: var(--kids-space-lg); right: var(--kids-space-lg); }
        :host(.bottom-left) { top: auto; bottom: var(--kids-space-lg); left: var(--kids-space-lg); right: auto; }
        :host(.top-center) { top: var(--kids-space-lg); left: 50%; right: auto; transform: translateX(-50%); }
        :host(.bottom-center) { top: auto; bottom: var(--kids-space-lg); left: 50%; right: auto; transform: translateX(-50%); }

        .toast {
          display: flex;
          align-items: center;
          gap: var(--kids-space-sm);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          box-shadow: var(--kids-shadow-lg);
          pointer-events: auto;
          min-width: 240px;
          max-width: 380px;
          will-change: transform, opacity;
          opacity: 0;
        }

        .toast.open { opacity: 1; }

        .toast.info {
          background: var(--kids-color-info);
          color: var(--kids-color-text-light);
        }
        .toast.success {
          background: var(--kids-color-accent);
          color: var(--kids-color-text);
        }
        .toast.warning {
          background: var(--kids-color-warning);
          color: var(--kids-color-text);
        }
        .toast.error {
          background: var(--kids-color-error);
          color: var(--kids-color-text-light);
        }

        .icon { font-size: 1.3em; flex-shrink: 0; }

        .message { flex: 1; }

        .close-btn {
          background: none;
          border: none;
          color: inherit;
          font-size: 1.1rem;
          cursor: pointer;
          opacity: 0.7;
          padding: 2px 6px;
          border-radius: var(--kids-radius-sm);
          transition: opacity 0.15s ease;
        }
        .close-btn:hover { opacity: 1; }
      </style>

      <div class="toast ${e} ${t?`open`:``}" role="alert" part="toast">
        <span class="icon">${n[e]||n.info}</span>
        <span class="message"><slot></slot></span>
        <button class="close-btn" aria-label="Close">✕</button>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.className=this.attr(`position`,`top-right`),this._bindEvents(),this._startTimer()}_bindEvents(){this.root.querySelector(`.close-btn`)?.addEventListener(`click`,()=>this._close())}_startTimer(){this._timer&&clearTimeout(this._timer);let e=parseInt(this.attr(`duration`,`4000`),10);e>0&&this.boolAttr(`open`)&&(this._timer=setTimeout(()=>this._close(),e))}_close(){this._timer&&clearTimeout(this._timer);let e=this.root.querySelector(`.toast`);e&&$(e,{opacity:[1,0],x:[0,60]},{duration:.3}),setTimeout(()=>{this.removeAttribute(`open`),this.dispatchEvent(new CustomEvent(`kids-close`,{bubbles:!0}))},280)}attributeChangedCallback(e){this.render(),this._bindEvents(),e===`open`&&this.boolAttr(`open`)&&($(this.root.querySelector(`.toast`),{x:[60,0],opacity:[0,1]},{type:`spring`,stiffness:400,damping:25}),this._startTimer()),e===`position`&&(this.className=this.attr(`position`,`top-right`))}};a(so,`observedAttributes`,[`variant`,`duration`,`position`,`open`]),customElements.define(`kids-toast`,so);var co=class extends o{constructor(...e){super(...e),a(this,`_input`,null),a(this,`_skipRender`,!1)}template(){let e=this.attr(`min`,`0`),t=this.attr(`max`,`100`),n=this.attr(`value`,`50`),r=this.attr(`step`,`1`),i=this.boolAttr(`disabled`),a=this.attr(`variant`,`primary`),o=this.attr(`label`),s=parseFloat(n),c=parseFloat(e),l=parseFloat(t),u=(s-c)/(l-c)*100;return`
      <style>
        :host {
          display: block;
        }

        .slider-wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-xs);
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .track-container {
          position: relative;
          height: 28px;
          display: flex;
          align-items: center;
        }

        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 10px;
          border-radius: var(--kids-radius-full);
          background: linear-gradient(
            to right,
            var(--track-color) 0%,
            var(--track-color) ${u}%,
            var(--kids-color-surface-alt) ${u}%,
            var(--kids-color-surface-alt) 100%
          );
          outline: none;
          cursor: pointer;
        }

        input[type="range"]:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Thumb */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--kids-color-surface);
          border: 3px solid var(--track-color);
          box-shadow: var(--kids-shadow-md);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        input[type="range"]::-moz-range-thumb {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--kids-color-surface);
          border: 3px solid var(--track-color);
          box-shadow: var(--kids-shadow-md);
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        input[type="range"]:focus-visible::-webkit-slider-thumb {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        /* Variant colors */
        :host { --track-color: var(--kids-color-primary); }
        .secondary { --track-color: var(--kids-color-secondary); }
        .accent { --track-color: var(--kids-color-accent); }
      </style>

      <div class="slider-wrapper ${a}" part="wrapper">
        ${o?`<div class="label-row"><span>${o}</span><span class="value-display">${n}</span></div>`:``}
        <div class="track-container">
          <input
            type="range"
            min="${e}"
            max="${t}"
            value="${n}"
            step="${r}"
            ${i?`disabled`:``}
            part="input"
          />
        </div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.track-container`),{scaleX:[0,1],opacity:[0,1]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){this._input=this.root.querySelector(`input`),this._input&&(this._input.addEventListener(`input`,()=>{let e=this._input.value;this._updateTrackFill(e),this._updateValueDisplay(e),this._skipRender=!0,this.setAttribute(`value`,e),this._skipRender=!1,this.dispatchEvent(new CustomEvent(`kids-input`,{bubbles:!0,detail:{value:parseFloat(e)}}))}),this._input.addEventListener(`change`,()=>{this.dispatchEvent(new CustomEvent(`kids-change`,{bubbles:!0,detail:{value:parseFloat(this._input.value)}}))}))}_updateTrackFill(e){if(!this._input)return;let t=parseFloat(this.attr(`min`,`0`)),n=parseFloat(this.attr(`max`,`100`)),r=(parseFloat(e)-t)/(n-t)*100;this._input.style.background=`linear-gradient(to right, var(--track-color) 0%, var(--track-color) ${r}%, var(--kids-color-surface-alt) ${r}%, var(--kids-color-surface-alt) 100%)`}_updateValueDisplay(e){let t=this.root.querySelector(`.value-display`);t&&(t.textContent=e)}attributeChangedCallback(e){if(!this._skipRender){if(e===`value`&&this._input){let e=this.attr(`value`,`50`);this._input.value=e,this._updateTrackFill(e),this._updateValueDisplay(e);return}this.render(),this._bindEvents()}}};a(co,`observedAttributes`,[`min`,`max`,`value`,`step`,`disabled`,`variant`,`label`]),customElements.define(`kids-slider`,co);var lo=class extends o{template(){return`
      <style>
        :host { display: block; }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }
      </style>

      <div class="accordion" role="tablist" part="accordion">
        <slot></slot>
      </div>
    `}onEnter(){$(this.root.querySelector(`.accordion`),{opacity:[0,1],y:[10,0]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this.addEventListener(`kids-accordion-toggle`,e=>{let t=e.target;this.boolAttr(`multiple`)||Array.from(this.querySelectorAll(`kids-accordion-item`)).forEach(e=>{e!==t&&e.hasAttribute(`open`)&&e.removeAttribute(`open`)})})}attributeChangedCallback(){this.render()}};a(lo,`observedAttributes`,[`multiple`]);var uo=class extends o{template(){let e=this.attr(`label`,``),t=this.boolAttr(`open`);return`
      <style>
        :host { display: block; }

        .item {
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          box-shadow: var(--kids-shadow-sm);
          overflow: hidden;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--kids-space-md) var(--kids-space-lg);
          cursor: pointer;
          user-select: none;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          outline: none;
        }

        .header:hover {
          background: var(--kids-color-surface-alt);
        }

        .header:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: -3px;
        }

        .chevron {
          font-size: 0.8em;
          transition: transform 0.25s ease;
        }
        .chevron.open { transform: rotate(180deg); }

        .content {
          padding: 0 var(--kids-space-lg) var(--kids-space-lg);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          display: none;
        }

        .content.open {
          display: block;
        }
      </style>

      <div class="item" part="item">
        <button class="header" role="tab" aria-expanded="${t}" part="header">
          <span>${e}</span>
          <span class="chevron ${t?`open`:``}">▼</span>
        </button>
        <div class="content ${t?`open`:``}" role="tabpanel" part="content">
          <slot></slot>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.header`);e?.addEventListener(`click`,()=>this._toggle()),e?.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._toggle())})}_toggle(){let e=this.boolAttr(`open`);e?this.removeAttribute(`open`):this.setAttribute(`open`,``),this.dispatchEvent(new CustomEvent(`kids-accordion-toggle`,{bubbles:!0,detail:{open:!e}}))}attributeChangedCallback(){if(this.render(),this._bindEvents(),this.boolAttr(`open`)){let e=this.root.querySelector(`.content`);e&&$(e,{opacity:[0,1]},{duration:.2})}}};a(uo,`observedAttributes`,[`label`,`open`]),customElements.define(`kids-accordion`,lo),customElements.define(`kids-accordion-item`,uo);var fo=class extends o{template(){let e=this.attr(`steps`,`[]`),t=parseInt(this.attr(`active`,`0`),10),n=this.attr(`variant`,`default`),r=[];try{r=JSON.parse(e)}catch{r=[]}return`
      <style>
        :host { display: block; }

        .stepper {
          display: flex;
          align-items: flex-start;
          gap: 0;
          width: 100%;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--kids-space-xs);
          flex-shrink: 0;
          cursor: default;
        }

        .step.completed {
          cursor: pointer;
        }

        .circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          transition: background 0.3s ease, color 0.3s ease;
          will-change: transform;
        }

        .step.completed .circle {
          background: var(--kids-color-accent);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-sm);
        }

        .step.active .circle {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }

        .step.upcoming .circle {
          background: var(--kids-color-surface-alt);
          color: var(--kids-color-text);
          opacity: 0.5;
        }

        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          text-align: center;
          max-width: 80px;
        }

        .step.upcoming .label { opacity: 0.5; }

        .connector {
          flex: 1;
          height: 4px;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          margin-top: 18px;
          overflow: hidden;
          min-width: 20px;
        }

        .connector-fill {
          width: 100%;
          height: 100%;
          background: var(--kids-color-accent);
          border-radius: var(--kids-radius-full);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
      </style>

      <div class="stepper" role="navigation" aria-label="Progress" part="stepper">
        ${r.map((e,i)=>{let a=i<t?`completed`:i===t?`active`:`upcoming`;return`
          <div class="step ${a}" data-index="${i}">
            <div class="circle">
              ${a===`completed`?`✓`:i+1}
            </div>
            ${n===`default`?`<span class="label">${e}</span>`:``}
          </div>
          ${i<r.length-1?`<div class="connector"><div class="connector-fill" style="transform: scaleX(${+(i<t)})"></div></div>`:``}
        `}).join(``)}
      </div>
    `}onEnter(){Array.from(this.root.querySelectorAll(`.circle`)).forEach((e,t)=>{$(e,{scale:[0,1],opacity:[0,1]},{type:`spring`,stiffness:400,damping:18,delay:t*.08})})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){this.root.querySelectorAll(`.step.completed`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index||`0`,10);this.dispatchEvent(new CustomEvent(`kids-step-click`,{bubbles:!0,detail:{index:t}}))})})}attributeChangedCallback(){this.render(),this._bindEvents()}};a(fo,`observedAttributes`,[`steps`,`active`,`variant`]),customElements.define(`kids-stepper`,fo);var po=class extends o{template(){let e=this.attr(`variant`,`text`),t=this.attr(`width`,`100%`),n=this.attr(`height`),r=parseInt(this.attr(`lines`,`1`),10),i=n||{text:`1em`,circle:`48px`,rect:`120px`,card:`180px`}[e]||`1em`,a=``;return a=e===`text`&&r>1?`<div class="lines">${Array.from({length:r},(e,t)=>`<div class="bone text" style="width: ${t===r-1?`70%`:`100%`}; height: ${i};"></div>`).join(``)}</div>`:`<div class="bone ${e}" style="width: ${e===`circle`?i:t}; height: ${i};"></div>`,`
      <style>
        :host { display: block; }

        .bone {
          background: linear-gradient(
            90deg,
            var(--kids-color-surface-alt) 25%,
            #E8E4F8 37%,
            var(--kids-color-surface-alt) 63%
          );
          background-size: 200% 100%;
          animation: shimmer 1.8s ease infinite;
          border-radius: var(--kids-radius-sm);
        }

        .bone.circle {
          border-radius: 50%;
        }

        .bone.card {
          border-radius: var(--kids-radius-lg);
        }

        .lines {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      </style>

      ${a}
    `}attributeChangedCallback(){this.render()}};a(po,`observedAttributes`,[`variant`,`width`,`height`,`lines`]),customElements.define(`kids-skeleton`,po);var mo=class extends o{template(){let e=this.boolAttr(`selected`),t=this.boolAttr(`correct`),n=this.boolAttr(`incorrect`),r=this.boolAttr(`disabled`),i=this.attr(`variant`,`default`);return`
      <style>
        :host {
          display: block;
        }

        .choice {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          border: 3px solid var(--kids-color-surface-alt);
          background: var(--kids-color-surface);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          will-change: transform;
        }

        .choice.image {
          flex-direction: column;
          text-align: center;
          padding: var(--kids-space-lg);
        }

        .choice:hover:not(.disabled) {
          border-color: var(--kids-color-primary);
          box-shadow: var(--kids-shadow-sm);
        }

        .choice.selected {
          border-color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-15);
          font-weight: var(--kids-font-weight-bold);
        }

        .choice.correct {
          border-color: var(--kids-color-accent);
          background: var(--kids-alpha-accent-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-accent-20);
        }

        .choice.incorrect {
          border-color: var(--kids-color-secondary);
          background: var(--kids-alpha-secondary-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-secondary-15);
        }

        .choice.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .choice:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        .indicator {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 3px solid var(--kids-color-surface-alt);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .selected .indicator {
          border-color: var(--kids-color-primary);
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
        }

        .correct .indicator {
          border-color: var(--kids-color-accent);
          background: var(--kids-color-accent);
          color: var(--kids-color-text-light);
        }

        .incorrect .indicator {
          border-color: var(--kids-color-secondary);
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
        }

        .content {
          flex: 1;
        }

        .icon-slot {
          display: flex;
          align-items: center;
        }
      </style>

      <div
        class="choice ${i} ${t?`correct`:n?`incorrect`:e?`selected`:``} ${r?`disabled`:``}"
        role="option"
        tabindex="${r?`-1`:`0`}"
        aria-selected="${e||t}"
        part="choice"
      >
        ${i===`image`?``:`
          <div class="indicator">
            ${t?`✓`:n?`✕`:e?`●`:``}
          </div>
        `}
        <div class="icon-slot"><slot name="icon"></slot></div>
        <div class="content"><slot></slot></div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.choice`),{scale:[.9,1],opacity:[0,1]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.choice`);e&&(Si(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:.95},{type:`spring`,stiffness:500,damping:20}),()=>{$(e,{scale:1},{type:`spring`,stiffness:400,damping:15})})),e.addEventListener(`click`,()=>{this.boolAttr(`disabled`)||this.dispatchEvent(new CustomEvent(`kids-select`,{bubbles:!0,detail:{value:this.attr(`value`)}}))}),e.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.dispatchEvent(new Event(`click`)))}))}attributeChangedCallback(e){this.render(),this._bindEvents(),e===`correct`&&this.boolAttr(`correct`)&&$(this.root.querySelector(`.choice`),{scale:[1,1.05,1]},{duration:.3}),e===`incorrect`&&this.boolAttr(`incorrect`)&&$(this.root.querySelector(`.choice`),{x:[0,-8,8,-6,6,0]},{duration:.4})}};a(mo,`observedAttributes`,[`value`,`selected`,`correct`,`incorrect`,`disabled`,`variant`]),customElements.define(`kids-choice-card`,mo);var ho=class extends o{template(){let e=this.attr(`variant`,`tip`),t=this.attr(`title`),n={tip:{icon:`💡`,title:`Tip`,color:`var(--kids-color-warning)`},info:{icon:`ℹ️`,title:`Good to know`,color:`var(--kids-color-info)`},warning:{icon:`⚠️`,title:`Watch out!`,color:`var(--kids-color-secondary)`},"fun-fact":{icon:`🌟`,title:`Fun Fact`,color:`var(--kids-color-accent)`},remember:{icon:`🧠`,title:`Remember`,color:`var(--kids-color-primary)`}},r=n[e]||n.tip,i=t||r.title;return`
      <style>
        :host { display: block; }

        .callout {
          display: flex;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          background: var(--kids-color-surface);
          border-left: 5px solid ${r.color};
          box-shadow: var(--kids-shadow-sm);
          will-change: transform, opacity;
        }

        .icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          line-height: 1;
          margin-top: 2px;
        }

        .body {
          flex: 1;
        }

        .title {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin-bottom: var(--kids-space-xs);
        }

        .content {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          line-height: 1.5;
        }
      </style>

      <div class="callout" role="note" part="callout">
        <span class="icon">${r.icon}</span>
        <div class="body">
          <div class="title">${i}</div>
          <div class="content"><slot></slot></div>
        </div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.callout`),{opacity:[0,1],x:[-20,0]},{type:`spring`,stiffness:300,damping:22})}attributeChangedCallback(){this.render()}};a(ho,`observedAttributes`,[`variant`,`title`]),customElements.define(`kids-callout`,ho);var go=class extends o{template(){let e=parseInt(this.attr(`current`,`1`),10),t=parseInt(this.attr(`total`,`1`),10),n=this.attr(`prev-label`,`Back`),r=this.attr(`next-label`,`Next`),i=this.boolAttr(`show-progress`),a=e<=1,o=e>=t,s=t>1?(e-1)/(t-1)*100:100;return`
      <style>
        :host { display: block; }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) 0;
          will-change: transform, opacity;
        }

        .btn {
          border: none;
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          padding: var(--kids-space-sm) var(--kids-space-lg);
          border-radius: var(--kids-radius-full);
          cursor: pointer;
          box-shadow: var(--kids-shadow-sm);
          transition: opacity 0.2s ease, transform 0.15s ease;
          outline: none;
        }

        .btn:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .btn:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        .btn.prev {
          background: var(--kids-color-surface-alt);
          color: var(--kids-color-text);
        }

        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--kids-space-xs);
        }

        .progress-text {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          opacity: 0.7;
        }

        .progress-bar {
          width: 100%;
          max-width: 200px;
          height: 6px;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--kids-color-primary);
          border-radius: var(--kids-radius-full);
          transition: width 0.4s ease;
        }
      </style>

      <div class="nav" part="nav">
        <button class="btn prev" ${a?`disabled`:``} part="prev-btn">
          ← ${n}
        </button>

        <div class="center">
          ${i?`<span class="progress-text">${e} of ${t}</span>`:``}
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${s}%"></div>
          </div>
        </div>

        <button class="btn next" ${o?`disabled`:``} part="next-btn">
          ${o?`Finish ✓`:`${r} →`}
        </button>
      </div>
    `}onEnter(){$(this.root.querySelector(`.nav`),{opacity:[0,1],y:[15,0]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.prev`),t=this.root.querySelector(`.next`);e?.addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`kids-prev`,{bubbles:!0}))}),t?.addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`kids-next`,{bubbles:!0}))})}attributeChangedCallback(){this.render(),this._bindEvents()}};a(go,`observedAttributes`,[`current`,`total`,`prev-label`,`next-label`,`show-progress`]),customElements.define(`kids-lesson-nav`,go);var _o=class extends o{template(){let e=this.attr(`lessons`,`[]`),t=this.attr(`variant`,`list`),n=[];try{n=JSON.parse(e)}catch{n=[]}return`
      <style>
        :host { display: block; }

        .progress-list {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .progress-list.map {
          gap: 0;
          padding-left: var(--kids-space-lg);
          border-left: 4px solid var(--kids-color-surface-alt);
        }

        .lesson {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          padding: var(--kids-space-sm) var(--kids-space-md);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          cursor: pointer;
          transition: background 0.15s ease;
          will-change: transform, opacity;
        }

        .map .lesson {
          position: relative;
          margin-left: calc(-1 * var(--kids-space-lg) - 2px);
          padding-left: calc(var(--kids-space-lg) + var(--kids-space-md));
        }

        .lesson:hover:not(.locked) {
          background: var(--kids-color-surface-alt);
        }

        .lesson.locked {
          cursor: not-allowed;
          opacity: 0.5;
        }

        .lesson-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          flex-shrink: 0;
        }

        .completed .lesson-icon {
          background: var(--kids-color-accent);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-sm);
        }

        .current .lesson-icon {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }

        .locked .lesson-icon {
          background: var(--kids-color-surface-alt);
          color: var(--kids-color-text);
        }

        .lesson-info {
          display: flex;
          flex-direction: column;
        }

        .lesson-number {
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          opacity: 0.6;
        }

        .lesson-title {
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .locked .lesson-title { opacity: 0.6; }
      </style>

      <div class="progress-list ${t}" part="list">
        ${n.map((e,t)=>`
        <div class="lesson ${e.status}" data-index="${t}">
          <div class="lesson-icon">
            ${e.status===`completed`?`✓`:e.status===`locked`?`🔒`:`▶`}
          </div>
          <div class="lesson-info">
            <span class="lesson-number">Lesson ${t+1}</span>
            <span class="lesson-title">${e.title}</span>
          </div>
        </div>`).join(``)}
      </div>
    `}onEnter(){Array.from(this.root.querySelectorAll(`.lesson`)).forEach((e,t)=>{$(e,{opacity:[0,1],x:[-15,0]},{type:`spring`,stiffness:300,damping:20,delay:t*.06})})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){this.root.querySelectorAll(`.lesson:not(.locked)`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index||`0`,10),n=e.querySelector(`.lesson-title`)?.textContent||``;this.dispatchEvent(new CustomEvent(`kids-lesson-click`,{bubbles:!0,detail:{index:t,title:n}}))})})}attributeChangedCallback(){this.render(),this._bindEvents()}};a(_o,`observedAttributes`,[`lessons`,`variant`]),customElements.define(`kids-lesson-progress`,_o);var vo=class extends o{template(){let e=this.attr(`number`),t=this.attr(`total`),n=this.attr(`status`,`unanswered`),r=this.attr(`points`),i={unanswered:{label:``,color:`var(--kids-color-surface-alt)`,icon:``},correct:{label:`Correct!`,color:`var(--kids-color-accent)`,icon:`🎉`},incorrect:{label:`Not quite!`,color:`var(--kids-color-secondary)`,icon:`🤔`},skipped:{label:`Skipped`,color:`var(--kids-color-warning)`,icon:`⏭`}},a=i[n]||i.unanswered;return`
      <style>
        :host { display: block; }

        .question-card {
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-lg);
          box-shadow: var(--kids-shadow-md);
          padding: var(--kids-space-lg);
          border: 3px solid transparent;
          transition: border-color 0.3s ease;
          will-change: transform;
        }

        .question-card.correct {
          border-color: var(--kids-color-accent);
        }
        .question-card.incorrect {
          border-color: var(--kids-color-secondary);
        }
        .question-card.skipped {
          border-color: var(--kids-color-warning);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--kids-space-md);
        }

        .question-number {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
          padding: var(--kids-space-xs) var(--kids-space-md);
          border-radius: var(--kids-radius-full);
        }

        .points {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-warning);
        }

        .question-text {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-lg);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin-bottom: var(--kids-space-lg);
          line-height: 1.4;
        }

        .answers {
          margin-bottom: var(--kids-space-md);
        }

        .hint {
          display: none;
        }
        .hint:has(::slotted(*)) {
          display: block;
          margin-top: var(--kids-space-md);
          padding: var(--kids-space-sm) var(--kids-space-md);
          background: var(--kids-alpha-warning-15);
          border-radius: var(--kids-radius-sm);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          color: var(--kids-color-text);
        }

        .explanation {
          margin-top: var(--kids-space-md);
          padding: var(--kids-space-md);
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          display: none;
        }

        .explanation.show { display: block; }

        .status-bar {
          display: flex;
          align-items: center;
          gap: var(--kids-space-sm);
          margin-top: var(--kids-space-md);
          padding: var(--kids-space-sm) var(--kids-space-md);
          border-radius: var(--kids-radius-sm);
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-bold);
          font-size: var(--kids-font-size-md);
          display: none;
        }

        .status-bar.show {
          display: flex;
        }

        .status-bar.correct { background: var(--kids-alpha-accent-15); color: var(--kids-color-text); }
        .status-bar.incorrect { background: var(--kids-alpha-secondary-15); color: var(--kids-color-text); }
        .status-bar.skipped { background: var(--kids-alpha-warning-15); color: var(--kids-color-text); }
      </style>

      <div class="question-card ${n}" part="card">
        <div class="header">
          ${e?`<span class="question-number">Question ${e}${t?` / ${t}`:``}</span>`:``}
          ${r?`<span class="points">⭐ ${r} pts</span>`:``}
        </div>

        <div class="question-text">
          <slot name="question"></slot>
        </div>

        <div class="answers">
          <slot></slot>
        </div>

        <div class="hint">
          <slot name="hint"></slot>
        </div>

        <div class="status-bar ${n} ${n===`unanswered`?``:`show`}">
          <span>${a.icon}</span>
          <span>${a.label}</span>
        </div>

        <div class="explanation ${n===`unanswered`?``:`show`}">
          <slot name="explanation"></slot>
        </div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.question-card`),{opacity:[0,1],y:[25,0]},{type:`spring`,stiffness:300,damping:20})}attributeChangedCallback(e){if(this.render(),e===`status`){let e=this.attr(`status`,`unanswered`);e===`correct`?$(this.root.querySelector(`.question-card`),{scale:[1,1.03,1]},{duration:.4}):e===`incorrect`&&$(this.root.querySelector(`.question-card`),{x:[0,-6,6,-4,4,0]},{duration:.5})}}};a(vo,`observedAttributes`,[`number`,`total`,`status`,`points`]),customElements.define(`kids-question-card`,vo);var yo=class extends o{template(){let e=this.attr(`direction`,`vertical`);return`
      <style>
        :host { display: block; }

        .group {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .group.horizontal {
          flex-direction: row;
          flex-wrap: wrap;
        }

        .group.horizontal ::slotted(*) {
          flex: 1;
          min-width: 120px;
        }

        .group.grid {
          display: grid;
          grid-template-columns: repeat(${this.attr(`columns`,`2`)}, 1fr);
          gap: var(--kids-space-sm);
        }
      </style>

      <div class="group ${e}" role="listbox" aria-multiselectable="${this.attr(`mode`,`single`)===`multiple`}" part="group">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._syncSelection(),this._bindEvents()}onEnter(){Array.from(this.querySelectorAll(`kids-choice-card`)).forEach((e,t)=>{e.style.opacity=`0`,setTimeout(()=>{e.style.opacity=`1`,e.style.transition=`none`},60+t*60)})}_syncSelection(){let e=this.attr(`value`),t=e?e.split(`,`).map(e=>e.trim()):[],n=this.boolAttr(`disabled`);Array.from(this.querySelectorAll(`kids-choice-card`)).forEach(e=>{let r=e.getAttribute(`value`)||``;t.includes(r)?e.setAttribute(`selected`,``):e.removeAttribute(`selected`),n&&e.setAttribute(`disabled`,``)})}_bindEvents(){this.addEventListener(`kids-select`,e=>{if(e.stopPropagation(),this.boolAttr(`disabled`))return;let t=e.detail.value,n=this.attr(`mode`,`single`),r=this.attr(`value`),i=r?r.split(`,`).map(e=>e.trim()):[];if(n===`single`)this.setAttribute(`value`,t);else{let e=i.indexOf(t);e>=0?i.splice(e,1):i.push(t),this.setAttribute(`value`,i.join(`,`))}this._syncSelection();let a=this.attr(`value`).split(`,`).map(e=>e.trim()).filter(Boolean);this.dispatchEvent(new CustomEvent(`kids-change`,{bubbles:!0,detail:{value:n===`single`?t:a,selected:a}}))})}attributeChangedCallback(){this.render(),this._syncSelection()}};a(yo,`observedAttributes`,[`mode`,`value`,`disabled`,`direction`,`columns`]),customElements.define(`kids-choice-group`,yo);var bo=class extends o{template(){let e=this.attr(`icon`,`🎒`),t=this.attr(`title`,`Nothing here yet!`),n=this.attr(`message`,``);return`
      <style>
        :host { display: block; }

        .empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--kids-space-xl) var(--kids-space-lg);
          gap: var(--kids-space-md);
        }

        .icon {
          font-size: 3.5rem;
          line-height: 1;
          will-change: transform;
        }

        .title {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .message {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          opacity: 0.7;
          max-width: 360px;
          line-height: 1.5;
        }

        .action {
          margin-top: var(--kids-space-sm);
        }
      </style>

      <div class="empty" part="empty">
        <div class="icon">${e}</div>
        <div class="title">${t}</div>
        ${n?`<div class="message">${n}</div>`:``}
        <div class="action"><slot name="action"></slot></div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.icon`),{scale:[0,1],rotate:[`-15deg`,`0deg`]},{type:`spring`,stiffness:350,damping:12}),$(this.root.querySelector(`.title`),{opacity:[0,1],y:[15,0]},{type:`spring`,stiffness:300,damping:20}),$(this.root.querySelector(`.message`),{opacity:[0,.7],y:[15,0]},{type:`spring`,stiffness:300,damping:20})}attributeChangedCallback(){this.render()}};a(bo,`observedAttributes`,[`icon`,`title`,`message`]),customElements.define(`kids-empty-state`,bo);var xo=class extends o{constructor(...e){super(...e),a(this,`_onClick`,e=>{e.target.closest(`.dismiss`)&&this._close()})}template(){let e=this.attr(`icon`,`🏆`),t=this.attr(`title`,`Achievement Unlocked!`),n=this.attr(`message`,``),r=this.attr(`variant`,`gold`);this.boolAttr(`open`);let i={gold:{bg:`linear-gradient(135deg, #FFD700, #FFA500)`,glow:`rgba(255, 215, 0, 0.4)`},silver:{bg:`linear-gradient(135deg, #C0C0C0, #A0A0A0)`,glow:`rgba(192, 192, 192, 0.4)`},bronze:{bg:`linear-gradient(135deg, #CD7F32, #A0522D)`,glow:`rgba(205, 127, 50, 0.4)`},special:{bg:`linear-gradient(135deg, var(--kids-color-primary), var(--kids-color-secondary))`,glow:`rgba(108, 99, 255, 0.4)`}},a=i[r]||i.gold;return`
      <style>
        :host {
          display: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3000;
          pointer-events: none;
        }

        :host([open]) {
          display: block;
        }

        .achievement {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--kids-space-xl);
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-lg);
          box-shadow: 0 0 40px ${a.glow}, var(--kids-shadow-lg);
          pointer-events: auto;
          will-change: transform, opacity;
          opacity: 0;
          transform: scale(0.5);
          position: relative;
          min-width: 280px;
          max-width: 380px;
        }

        .achievement.open {
          opacity: 1;
          transform: scale(1);
        }

        .badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: ${a.bg};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          box-shadow: 0 4px 20px ${a.glow};
          margin-bottom: var(--kids-space-md);
          will-change: transform;
        }

        .title {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin-bottom: var(--kids-space-xs);
        }

        .message {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          opacity: 0.7;
          line-height: 1.4;
        }

        .dismiss {
          margin-top: var(--kids-space-lg);
          background: ${a.bg};
          border: none;
          color: var(--kids-color-text);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          padding: var(--kids-space-sm) var(--kids-space-xl);
          border-radius: var(--kids-radius-full);
          cursor: pointer;
          box-shadow: var(--kids-shadow-sm);
        }

        .dismiss:hover { transform: scale(1.05); }
      </style>

      <div class="achievement" part="achievement">
        <div class="badge">${e}</div>
        <div class="title">${t}</div>
        ${n?`<div class="message">${n}</div>`:``}
        <button class="dismiss">Awesome!</button>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.root.addEventListener(`click`,this._onClick),this.boolAttr(`open`)&&this._playOpenAnimation()}disconnectedCallback(){this.root.removeEventListener(`click`,this._onClick)}_close(){cancelAnimationFrame(this._openFrame),this.removeAttribute(`open`),this.dispatchEvent(new CustomEvent(`kids-close`,{bubbles:!0}))}_playOpenAnimation(){cancelAnimationFrame(this._openFrame),this._openFrame=requestAnimationFrame(()=>{let e=this.root.querySelector(`.achievement`),t=this.root.querySelector(`.badge`);e?.classList.add(`open`),t&&$(t,{scale:[0,1.2,1],rotate:[`0deg`,`10deg`,`0deg`]},{type:`spring`,stiffness:400,damping:12}),e&&$(e,{scale:[.5,1],opacity:[0,1]},{type:`spring`,stiffness:250,damping:15})})}attributeChangedCallback(e){if(this.isConnected){if(e===`open`){this.boolAttr(`open`)&&this._playOpenAnimation();return}this.render()}}};a(xo,`observedAttributes`,[`icon`,`title`,`message`,`variant`,`open`]),customElements.define(`kids-achievement`,xo);var So=class extends o{constructor(...e){super(...e),a(this,`_currentRotation`,0),a(this,`_isFlipping`,!1)}template(){return`
      <style>
        :host {
          display: block;
          perspective: 1000px;
        }

        .card-container {
          position: relative;
          cursor: pointer;
          user-select: none;
          min-height: ${this.attr(`variant`,`default`)===`compact`?`150px`:`220px`};
          transform-style: preserve-3d;
          /* Remove CSS transition - we use motion.dev for animations */
        }

        .face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--kids-space-lg);
          border-radius: var(--kids-radius-lg);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-lg);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          text-align: center;
          line-height: 1.4;
          will-change: transform;
        }

        .front {
          background: var(--kids-color-surface);
          box-shadow: var(--kids-shadow-md);
          border: 3px solid var(--kids-color-primary);
          /* Ensure front face is at rotation 0 */
          transform: rotateY(0deg);
        }

        .back {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
          /* Back face starts rotated 180 degrees */
          transform: rotateY(180deg);
        }

        .flip-hint {
          position: absolute;
          bottom: var(--kids-space-sm);
          right: var(--kids-space-md);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          opacity: 0.5;
        }
      </style>

      <div class="card-container" part="card" tabindex="0" role="button" aria-label="Flashcard - click to flip" aria-pressed="false">
        <div class="face front">
          <slot name="front"></slot>
          <span class="flip-hint">tap to flip</span>
        </div>
        <div class="face back">
          <slot name="back"></slot>
        </div>
      </div>
    `}onEnter(){let e=this.root.querySelector(`.card-container`);e&&$(e,{scale:[.85,1],opacity:[0,1]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this._bindEvents(),this._currentRotation=this.boolAttr(`flipped`)?180:0,this._applyRotation(this._currentRotation)}_bindEvents(){let e=this.root.querySelector(`.card-container`);e&&(e.addEventListener(`click`,()=>this._flip()),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._flip())}),e.addEventListener(`mouseenter`,()=>{this._isFlipping||$(e,{y:-4,scale:1.02},{type:`spring`,stiffness:400,damping:25})}),e.addEventListener(`mouseleave`,()=>{this._isFlipping||$(e,{y:0,scale:1},{type:`spring`,stiffness:400,damping:25})}))}_flip(){if(this._isFlipping)return;let e=this.root.querySelector(`.card-container`);if(!e)return;this._isFlipping=!0;let t=this._currentRotation>=90,n=t?0:180;t?this.removeAttribute(`flipped`):this.setAttribute(`flipped`,``),e.setAttribute(`aria-pressed`,String(!t)),$(e,{rotateY:[this._currentRotation,n],scale:[1,.95,1]},{type:`spring`,stiffness:200,damping:20,duration:.6}).then(()=>{this._isFlipping=!1,this._currentRotation=n}),this.dispatchEvent(new CustomEvent(`kids-flip`,{bubbles:!0,detail:{flipped:!t}}))}_applyRotation(e){let t=this.root.querySelector(`.card-container`);t&&(t.style.transform=`rotateY(${e}deg)`)}attributeChangedCallback(e,t,n){e===`variant`?(this.render(),this._bindEvents(),this._applyRotation(this._currentRotation)):e===`flipped`&&n!==null!=this._currentRotation>=90&&!this._isFlipping&&this._flip()}};a(So,`observedAttributes`,[`flipped`,`variant`]),customElements.define(`kids-flashcard`,So);var Co=class extends o{constructor(...e){super(...e),a(this,`_selectedLeft`,null),a(this,`_selectedRight`,null),a(this,`_matched`,new Set),a(this,`_shuffledRight`,[])}template(){let e=this.attr(`pairs`,`[]`),t=[];try{t=JSON.parse(e)}catch{t=[]}if((this._shuffledRight.length===0||this._shuffledRight.length!==t.length)&&(this._shuffledRight=t.map(e=>e.right),this.getAttribute(`shuffle`)!==`false`))for(let e=this._shuffledRight.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[this._shuffledRight[e],this._shuffledRight[t]]=[this._shuffledRight[t],this._shuffledRight[e]]}let n=t.map(e=>`
        <div class="item left-item ${this._matched.has(e.left)?`matched`:``} ${this._selectedLeft===e.left?`selected`:``}"
             data-value="${e.left}" data-side="left">
          ${e.left}
        </div>`).join(``),r=this._shuffledRight.map(e=>`
        <div class="item right-item ${this._matched.has(e)?`matched`:``} ${this._selectedRight===e?`selected`:``}"
             data-value="${e}" data-side="right">
          ${e}
        </div>`).join(``),i=t.length;return`
      <style>
        :host { display: block; }

        .match-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--kids-space-lg);
        }

        .column {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .item {
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          text-align: center;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          border: 3px solid var(--kids-color-surface-alt);
          background: var(--kids-color-surface);
          will-change: transform;
        }

        .item:hover:not(.matched) {
          border-color: var(--kids-color-primary);
          box-shadow: var(--kids-shadow-sm);
        }

        .item.selected {
          border-color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-15);
        }

        .item.matched {
          border-color: var(--kids-color-accent);
          background: var(--kids-alpha-accent-12);
          opacity: 0.7;
          cursor: default;
        }

        .item.incorrect {
          border-color: var(--kids-color-secondary);
          background: var(--kids-alpha-secondary-12);
        }

        .progress {
          text-align: center;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          opacity: 0.6;
          margin-top: var(--kids-space-md);
        }
      </style>

      <div class="match-grid" part="grid">
        <div class="column left-column">${n}</div>
        <div class="column right-column">${r}</div>
      </div>
      <div class="progress">${this._matched.size/2} / ${i} matched</div>
    `}onEnter(){Array.from(this.root.querySelectorAll(`.item`)).forEach((e,t)=>{$(e,{opacity:[0,1],scale:[.9,1]},{type:`spring`,stiffness:400,damping:22,delay:t*.05})})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){this.root.querySelectorAll(`.item:not(.matched)`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e,n=t.dataset.value||``;(t.dataset.side||``)===`left`?this._selectedLeft=this._selectedLeft===n?null:n:this._selectedRight=this._selectedRight===n?null:n,this._selectedLeft&&this._selectedRight?this._checkMatch():(this.render(),this._bindEvents())})})}_checkMatch(){let e=this.attr(`pairs`,`[]`),t=[];try{t=JSON.parse(e)}catch{t=[]}let n=t.find(e=>e.left===this._selectedLeft),r=n?n.right===this._selectedRight:!1;r&&(this._matched.add(this._selectedLeft),this._matched.add(this._selectedRight)),this.dispatchEvent(new CustomEvent(`kids-match`,{bubbles:!0,detail:{left:this._selectedLeft,right:this._selectedRight,correct:r}}));let i=r?[]:Array.from(this.root.querySelectorAll(`.item.selected`));this._selectedLeft=null,this._selectedRight=null,this.render(),this._bindEvents(),r||i.forEach(e=>{$(e,{x:[0,-6,6,-4,4,0]},{duration:.4})}),this._matched.size/2===t.length&&(this.setAttribute(`status`,`completed`),this.dispatchEvent(new CustomEvent(`kids-complete`,{bubbles:!0,detail:{correct:t.length,total:t.length}})))}attributeChangedCallback(){this.render(),this._bindEvents()}};a(Co,`observedAttributes`,[`pairs`,`status`,`shuffle`]),customElements.define(`kids-match-grid`,Co);var wo=class extends o{constructor(...e){super(...e),a(this,`_currentItems`,[]),a(this,`_dragIndex`,null)}template(){let e=this.attr(`items`,`[]`),t=this.attr(`status`,`playing`);try{let t=JSON.parse(e);if(this._currentItems.length===0&&(this._currentItems=[...t],this.getAttribute(`shuffle`)!==`false`))for(let e=this._currentItems.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[this._currentItems[e],this._currentItems[t]]=[this._currentItems[t],this._currentItems[e]]}}catch{}return`
      <style>
        :host { display: block; }

        .sort-list {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .sort-item {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) var(--kids-space-lg);
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          border: 3px solid var(--kids-color-surface-alt);
          box-shadow: var(--kids-shadow-sm);
          font-family: var(--kids-font-family);
          cursor: grab;
          user-select: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          will-change: transform;
        }

        .sort-item:active { cursor: grabbing; }

        .sort-item.dragging {
          opacity: 0.5;
          border-style: dashed;
        }

        .sort-item.drag-over {
          border-color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
        }

        .sort-item.correct {
          border-color: var(--kids-color-accent);
          background: var(--kids-alpha-accent-12);
        }

        .sort-item.incorrect {
          border-color: var(--kids-color-secondary);
          background: var(--kids-alpha-secondary-12);
        }

        .handle {
          color: var(--kids-color-text);
          opacity: 0.3;
          font-size: var(--kids-font-size-lg);
          flex-shrink: 0;
        }

        .number {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--kids-color-surface-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          flex-shrink: 0;
        }

        .text {
          flex: 1;
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .arrows {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .arrow-btn {
          background: var(--kids-color-surface-alt);
          border: none;
          font-size: 0.6rem;
          padding: 2px 6px;
          cursor: pointer;
          border-radius: var(--kids-radius-sm);
          color: var(--kids-color-text);
          transition: background 0.15s ease;
        }

        .arrow-btn:hover:not(:disabled) {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
        }

        .arrow-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      </style>

      <div class="sort-list" part="list">
        ${this._currentItems.map((e,n)=>`
        <div class="sort-item ${t}" draggable="true" data-index="${n}" part="item">
          <span class="handle">⠿</span>
          <span class="number">${n+1}</span>
          <span class="text">${e}</span>
          <div class="arrows">
            <button class="arrow-btn up" data-index="${n}" ${n===0?`disabled`:``}>▲</button>
            <button class="arrow-btn down" data-index="${n}" ${n===this._currentItems.length-1?`disabled`:``}>▼</button>
          </div>
        </div>`).join(``)}
      </div>
    `}onEnter(){Array.from(this.root.querySelectorAll(`.sort-item`)).forEach((e,t)=>{$(e,{opacity:[0,1],x:[-20,0]},{type:`spring`,stiffness:300,damping:20,delay:t*.06})})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){this.root.querySelectorAll(`.sort-item`).forEach(e=>{let t=e;t.addEventListener(`dragstart`,()=>{this._dragIndex=parseInt(t.dataset.index||`0`,10),t.classList.add(`dragging`)}),t.addEventListener(`dragend`,()=>{t.classList.remove(`dragging`),this._dragIndex=null}),t.addEventListener(`dragover`,e=>{e.preventDefault(),t.classList.add(`drag-over`)}),t.addEventListener(`dragleave`,()=>{t.classList.remove(`drag-over`)}),t.addEventListener(`drop`,e=>{e.preventDefault(),t.classList.remove(`drag-over`);let n=parseInt(t.dataset.index||`0`,10);this._dragIndex!==null&&this._dragIndex!==n&&this._moveItem(this._dragIndex,n)})}),this.root.querySelectorAll(`.arrow-btn.up`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.index||`0`,10);n>0&&this._moveItem(n,n-1)})}),this.root.querySelectorAll(`.arrow-btn.down`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.index||`0`,10);n<this._currentItems.length-1&&this._moveItem(n,n+1)})})}_moveItem(e,t){let n=this._currentItems.splice(e,1)[0];this._currentItems.splice(t,0,n),this.render(),this._bindEvents(),this.dispatchEvent(new CustomEvent(`kids-reorder`,{bubbles:!0,detail:{items:[...this._currentItems]}}));let r=this.root.querySelectorAll(`.sort-item`)[t];r&&$(r,{scale:[.95,1]},{type:`spring`,stiffness:400,damping:15})}check(){let e=this.attr(`correct`,`[]`),t=[];try{t=JSON.parse(e)}catch{return!1}let n=JSON.stringify(this._currentItems)===JSON.stringify(t);return this.setAttribute(`status`,n?`correct`:`incorrect`),this.dispatchEvent(new CustomEvent(`kids-check`,{bubbles:!0,detail:{correct:n,items:[...this._currentItems]}})),n||$(this.root.querySelector(`.sort-list`),{x:[0,-6,6,-4,4,0]},{duration:.4}),n}attributeChangedCallback(){this.render(),this._bindEvents()}};a(wo,`observedAttributes`,[`items`,`correct`,`status`,`shuffle`]),customElements.define(`kids-sort-list`,wo);var To=class extends o{constructor(...e){super(...e),a(this,`_elapsed`,0),a(this,`_interval`,null),a(this,`_warned`,!1)}template(){let e=parseInt(this.attr(`duration`,`60`),10),t=this.attr(`mode`,`countdown`),n=this.attr(`variant`,`default`),r=this.boolAttr(`running`),i=Math.max(0,e-this._elapsed),a=t===`countdown`?i:this._elapsed,o=Math.floor(a/60),s=a%60,c=`${String(o).padStart(2,`0`)}:${String(s).padStart(2,`0`)}`,l=parseInt(this.attr(`warn-at`,`10`),10),u=t===`countdown`&&i<=l&&i>0,d=t===`countdown`&&i===0&&this._elapsed>0,f=e>0?i/e*100:100;return`
      <style>
        :host { display: inline-block; }

        .timer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--kids-space-sm);
          font-family: var(--kids-font-family);
          will-change: transform;
        }

        .time-display {
          font-size: 2.5rem;
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
        }

        .timer.compact .time-display {
          font-size: 1.5rem;
        }

        .timer.warning .time-display {
          color: var(--kids-color-secondary);
          animation: pulse 0.8s ease infinite;
        }

        .timer.complete .time-display {
          color: var(--kids-color-accent);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        .progress-bar {
          width: 100%;
          max-width: 200px;
          height: 8px;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: var(--kids-radius-full);
          transition: width 1s linear, background 0.3s ease;
          background: var(--kids-color-primary);
        }

        .progress-fill.warning {
          background: var(--kids-color-secondary);
        }

        /* Circular variant */
        .circular-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .circular-bg {
          fill: none;
          stroke: var(--kids-color-surface-alt);
          stroke-width: 8;
        }

        .circular-fill {
          fill: none;
          stroke: var(--kids-color-primary);
          stroke-width: 8;
          stroke-linecap: round;
          transition: stroke-dashoffset 1s linear, stroke 0.3s ease;
          transform: rotate(-90deg);
          transform-origin: center;
        }

        .circular-fill.warning {
          stroke: var(--kids-color-secondary);
        }

        .circular-time {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: var(--kids-font-weight-bold);
        }

        .status-label {
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          opacity: 0.6;
        }

        .compact { flex-direction: row; gap: var(--kids-space-md); }
      </style>

      <div class="timer ${n} ${u?`warning`:``} ${d?`complete`:``}" part="timer">
        ${n===`circular`?`
          <div class="circular-wrapper">
            <svg viewBox="0 0 120 120" width="120" height="120">
              <circle class="circular-bg" cx="60" cy="60" r="50" />
              <circle
                class="circular-fill ${u?`warning`:``}"
                cx="60" cy="60" r="50"
                stroke-dasharray="${2*Math.PI*50}"
                stroke-dashoffset="${2*Math.PI*50*(1-f/100)}"
              />
            </svg>
            <div class="circular-time ${u?`warning`:``}">${c}</div>
          </div>
        `:`
          <div class="time-display">${c}</div>
          ${n===`compact`?``:`
            <div class="progress-bar">
              <div class="progress-fill ${u?`warning`:``}" style="width: ${t===`countdown`?f:this._elapsed/e*100}%"></div>
            </div>
          `}
        `}
        <span class="status-label">
          ${d?`Time's up!`:r?t===`countdown`?`Time remaining`:`Elapsed`:`Paused`}
        </span>
      </div>
    `}onEnter(){$(this.root.querySelector(`.timer`),{scale:[.8,1],opacity:[0,1]},{type:`spring`,stiffness:300,damping:20})}connectedCallback(){super.connectedCallback(),this.boolAttr(`running`)&&this._start()}disconnectedCallback(){this._stop()}_start(){this._interval||=setInterval(()=>this._tick(),1e3)}_stop(){this._interval&&=(clearInterval(this._interval),null)}_tick(){let e=parseInt(this.attr(`duration`,`60`),10),t=this.attr(`mode`,`countdown`),n=parseInt(this.attr(`warn-at`,`10`),10);this._elapsed++;let r=Math.max(0,e-this._elapsed);if(this.dispatchEvent(new CustomEvent(`kids-tick`,{bubbles:!0,detail:{remaining:r,elapsed:this._elapsed}})),t===`countdown`&&r<=n&&!this._warned&&(this._warned=!0,this.dispatchEvent(new CustomEvent(`kids-warning`,{bubbles:!0}))),t===`countdown`&&r<=0){this._stop(),this.removeAttribute(`running`),this.dispatchEvent(new CustomEvent(`kids-complete`,{bubbles:!0})),this.render(),$(this.root.querySelector(`.timer`),{scale:[1,1.1,1]},{duration:.5});return}this.render()}reset(){this._stop(),this._elapsed=0,this._warned=!1,this.removeAttribute(`running`),this.render()}attributeChangedCallback(e){e===`running`&&(this.boolAttr(`running`)?this._start():this._stop()),this.render()}};a(To,`observedAttributes`,[`duration`,`mode`,`running`,`variant`,`warn-at`]),customElements.define(`kids-timer`,To),e.KidsAccordion=lo,e.KidsAccordionItem=uo,e.KidsAchievement=xo,e.KidsAlert=Ya,e.KidsAvatar=Ja,e.KidsBadge=Wa,e.KidsButton=Ha,e.KidsCallout=ho,e.KidsCard=Ua,e.KidsCheckbox=to,e.KidsChip=Za,e.KidsChoiceCard=mo,e.KidsChoiceGroup=yo,e.KidsDialog=oo,e.KidsDivider=Xa,e.KidsElement=o,e.KidsEmptyState=bo,e.KidsFlashcard=So,e.KidsInput=Ka,e.KidsLessonNav=go,e.KidsLessonProgress=_o,e.KidsMatchGrid=Co,e.KidsProgress=qa,e.KidsQuestionCard=vo,e.KidsRadio=eo,e.KidsSelect=no,e.KidsSkeleton=po,e.KidsSlider=co,e.KidsSortList=wo,e.KidsSpinner=$a,e.KidsStepper=fo,e.KidsTab=ao,e.KidsTabs=io,e.KidsTextarea=ro,e.KidsTimer=To,e.KidsToast=so,e.KidsToggle=Ga,e.KidsTooltip=Qa,e.themeStyles=t});