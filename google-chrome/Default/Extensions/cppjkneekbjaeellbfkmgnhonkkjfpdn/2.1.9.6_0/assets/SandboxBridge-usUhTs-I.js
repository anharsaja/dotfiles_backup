var I=Object.defineProperty;var L=t=>{throw TypeError(t)};var O=(t,s,e)=>s in t?I(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var m=(t,s,e)=>O(t,typeof s!="symbol"?s+"":s,e),x=(t,s,e)=>s.has(t)||L("Cannot "+e);var i=(t,s,e)=>(x(t,s,"read from private field"),e?e.call(t):s.get(t)),a=(t,s,e)=>s.has(t)?L("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),c=(t,s,e,r)=>(x(t,s,"write to private field"),r?r.call(t,e):s.set(t,e),e);import{b as S,E as U}from"./index.esm-DBQD-6dI.js";import{M as W,B as z,p as B}from"./MessageBridge-C2lz_3Ul.js";import{l}from"./Logger-CenPrHM_.js";var y=(t=>(t.Init="init-paddle",t.Checkout="paddle-checkout",t.PreviewPrices="paddle-preview-pricing",t.UpdateSession="paddle-update-session",t.CancelSubscription="paddle-cancel-subscription",t.Initialized="paddle-initialized",t.Updated="paddle-updated",t.CheckoutStarted="paddle-checkout-started",t.CheckoutLoaded="paddle-checkout-loaded",t.CheckoutCompleted="paddle-checkout-completed",t.CheckoutFailed="paddle-checkout-failed",t.CheckoutClosed="paddle-checkout-closed",t.CancelFlowFinished="paddle-cancel-flow-finished",t.CancelCompleted="paddle-cancel-completed",t.CancelFailed="paddle-cancel-failed",t.CancelAborted="paddle-cancel-aborted",t.PaddleEvent="paddle-paddle-event",t))(y||{}),h,p,d,n,k,f,g,b,C,v,w,E;class H extends W{constructor(e,r,o){o||(o=u=>(chrome.runtime.sendMessage(u),!1));super(r,o);a(this,h);a(this,p);a(this,d);a(this,n);m(this,"init",async()=>i(this,h)?i(this,h):(c(this,h,i(this,k).call(this)),l.info("Sandbox bridge initialized"),i(this,h)));a(this,k,async()=>{var e,r;c(this,d,i(this,p).document),c(this,n,i(this,d).createElement("iframe")),i(this,n).addEventListener("click",i(this,C),!0),i(this,n).style.cssText=i(this,E).call(this),(r=(e=i(this,n))==null?void 0:e.contentWindow)==null||r.addEventListener("message",i(this,g)),i(this,n).src=i(this,w).call(this),i(this,d).body.appendChild(i(this,n)),chrome.runtime.onMessage.addListener(i(this,f))});m(this,"destroy",async()=>{var e,r,o,u;try{(e=i(this,n))==null||e.removeEventListener("click",i(this,C)),(o=(r=i(this,n))==null?void 0:r.contentWindow)==null||o.removeEventListener("message",i(this,g))}catch(F){l.error("Error removing event listeners:",F)}chrome.runtime.onMessage.hasListener(i(this,f))&&chrome.runtime.onMessage.removeListener(i(this,f)),(u=i(this,n))==null||u.remove(),c(this,n,void 0),c(this,d,void 0),c(this,h,void 0)});m(this,"sendMessage",async e=>{var r,o;if(e={...e,origin:this.origin},!i(this,n)){l.warn("Can't send to sandbox: iframe not initialized yet.");return}try{(o=(r=i(this,n))==null?void 0:r.contentWindow)==null||o.postMessage(e,"*")}catch(u){l.error("Error sending message to sandbox:",u)}});m(this,"showFrame",()=>{var e,r,o;(e=i(this,d))==null||e.documentElement.style.setProperty("pointer-events","none"),(r=i(this,n))==null||r.style.setProperty("pointer-events","auto"),(o=i(this,n))==null||o.style.setProperty("display","block")});m(this,"hideFrame",()=>{var e,r,o;(e=i(this,n))==null||e.style.setProperty("display","none"),(r=i(this,n))==null||r.style.setProperty("pointer-events","none"),(o=i(this,d))==null||o.documentElement.style.setProperty("pointer-events","auto")});a(this,f,(e,r,o)=>(this.sendMessage(e),!1));a(this,g,async e=>{var o;if(e.source&&e.source!==((o=i(this,n))==null?void 0:o.contentWindow)){l.info("Ignoring message from unknown source:",e.source);return}const r=e.data??{};if(r.origin!=="paddle"){l.info("Ignoring message from unknown origin:",e.source);return}switch(r.origin=this.origin,r.type){case y.CheckoutStarted:this.showFrame();break;case y.CheckoutClosed:this.hideFrame();break;case"paddle-event":i(this,b).call(this,r.data);break}return i(this,v).call(this,r)});a(this,b,async e=>{switch(l.debug("Paddle event:",e),e.name){case S.CHECKOUT_CLOSED:this.hideFrame();break;case S.CHECKOUT_LOADED:this.showFrame();break}});a(this,C,e=>{e==null||e.stopPropagation()});a(this,v,async e=>(e={...e,origin:this.origin},this.origin===z.Onscreen?B(this.callback,e):chrome.runtime.sendMessage(e)));a(this,w,()=>{{const e=U.resources.sandboxSrc??"";return e.startsWith("http")?e:e.startsWith("/")?chrome.runtime.getURL(`${e}`):chrome.runtime.getURL(`/${e}`)}});a(this,E,()=>`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
			display: none;
			background: rgba(0, 0, 0, 0.25);
			z-index: 9999;
		`);c(this,p,e),i(this,p).addEventListener("message",i(this,g))}}h=new WeakMap,p=new WeakMap,d=new WeakMap,n=new WeakMap,k=new WeakMap,f=new WeakMap,g=new WeakMap,b=new WeakMap,C=new WeakMap,v=new WeakMap,w=new WeakMap,E=new WeakMap;export{y as P,H as S};