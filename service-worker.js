if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const t=e=>n(e,o),l={module:{uri:o},exports:r,require:t};i[o]=Promise.all(c.map((e=>l[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-1117adb6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/apple-touch-icon.png",revision:"4b9ecc777e999b102ac75d03ac4b2abf"},{url:"/index.dbea0761e00006291c02.js",revision:null},{url:"/index.dbea0761e00006291c02.js.LICENSE.txt",revision:"f54066aeec718a1fb1008f8c89f697b0"},{url:"/index.html",revision:"d8dbe0e15034be188235d40c28229907"},{url:"/logo-192x192.png",revision:"d6efa73a090d3ebad60aec0634818e16"},{url:"/manifest.json",revision:"69c6f5f47279c5de95cc430d5cc0c1d9"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|webp|gif|svg|glb|gltf|bin)$/,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/\.(?:js|css|html)$/,new e.StaleWhileRevalidate({cacheName:"resources",plugins:[]}),"GET")}));
