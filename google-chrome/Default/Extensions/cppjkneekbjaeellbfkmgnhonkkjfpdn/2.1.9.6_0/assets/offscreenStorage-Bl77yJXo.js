var p=Object.defineProperty;var g=e=>{throw TypeError(e)};var f=(e,t,s)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>f(e,typeof t!="symbol"?t+"":t,s),d=(e,t,s)=>t.has(e)||g("Cannot "+s);var n=(e,t,s)=>(d(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?g("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),o=(e,t,s,r)=>(d(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);import"./modulepreload-polyfill-B5Qt9EMX.js";import{M,B as y}from"./MessageBridge-C2lz_3Ul.js";import"./Logger-CenPrHM_.js";var a;class w extends M{constructor(s,r){super(s,r);l(this,a,!1);i(this,"init",async()=>{n(this,a)||(o(this,a,!0),chrome.runtime.onMessage.addListener(this.callback))});i(this,"destroy",async()=>{n(this,a)&&(o(this,a,!1),chrome.runtime.onMessage.removeListener(this.callback))});i(this,"sendMessage",async s=>await chrome.runtime.sendMessage(s))}}a=new WeakMap;const m=e=>e?{[e]:localStorage.getItem(e)}:localStorage,u=e=>({type:"initialized",data:{...m(e)}}),B=async()=>{const e=new w(y.Offscreen,(t,s,r)=>{var c;switch(t.type){case"get-local-storage":const h=m((c=t.data)==null?void 0:c.key);return r({type:"local-storage",data:{...h}}),!0;case"init":return r(u()),!0}return!1});await e.init(),await e.sendMessage(u())};B();
