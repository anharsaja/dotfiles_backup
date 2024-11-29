"use strict";var __webpack_exports__={};const presence=new Presence({clientId:"820023496934817804"}),browsingTimestamp=Math.floor(Date.now()/1e3),slideshow=presence.createSlideshow();let oldSlideshowKey;function registerSlideshowKey(e){return oldSlideshowKey!==e&&(presence.info(`Slideshow key changed from ${oldSlideshowKey} to ${e}`),slideshow.deleteAllSlides(),oldSlideshowKey=e,!0)}const iconCache={};function getIconImage(e,t="#fff"){const a=document.createElement("canvas");a.width=512,a.height=512;const c=a.getContext("2d"),{fontFamily:n,fontWeight:o,color:s}=getComputedStyle(e),{content:l}=getComputedStyle(e,":before"),r=l.replace(/"/g,""),i=`${n}-${o}-${t}-${s}-${r}`;if(iconCache[i])return iconCache[i];c.fillStyle=t,c.fillRect(0,0,512,512),c.font=`${o} 384px/1 ${n}`,c.fillStyle=s,c.textAlign="center",c.textBaseline="middle",c.fillText(r,256,256);const h=new Promise((e=>{a.toBlob((t=>{const a=URL.createObjectURL(t);presence.info(`${i} -> ${a}`),setTimeout((()=>URL.revokeObjectURL(a)),15e3),e(t)}))}));return iconCache[i]=h,iconCache[i]}let batchCacheKey,batchInterval,batchCache=[],batchIndex=0,batchItems=[],batchAborter=new AbortController;async function batch(e,t,a){if(batchCacheKey===e)return batchItems.length!==t.length&&(presence.info(`Batched items changed from ${batchItems.length} to ${t.length}`),batchAborter.abort(),batchCache=[],batchIndex=0,batchItems=t,null===batchInterval&&c()),batchCache;async function c(){for(let e=batchIndex,t=0;e<batchItems.length&&t<10;e++,t++){const t=await a(batchItems[e]);if(batchAborter.signal.aborted){presence.info("Batch aborted"),batchAborter=new AbortController;break}batchCache.push(t),batchIndex++}presence.info(`Batched ${batchIndex} of ${batchItems.length}`),batchIndex===batchItems.length?(clearTimeout(batchInterval),batchInterval=null):e===batchCacheKey&&(batchInterval=setTimeout(c,5e3))}return presence.info(`Batched key changed from ${batchCacheKey} to ${e}`),clearTimeout(batchInterval),batchAborter.abort(),batchCacheKey=e,batchCache=[],batchItems=t,batchIndex=0,c(),batchCache}presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/F/Font%20Awesome/assets/logo.png",startTimestamp:browsingTimestamp,type:0,name:"Font Awesome"},{pathname:t,href:a,search:c}=document.location,n=t.split("/").filter(Boolean);let o=!1;switch(n[0]??"/"){case"/":e.details="Browsing Home Page";break;case"docs":e.details="Reading Documentation",n[1]&&(e.state=document.querySelector(".section+h1"),e.buttons=[{label:"Read Docs",url:a}]);break;case"icons":if("categories"===n[1])if(n[2]){const t=document.querySelector("h2");e.details="Viewing Icon Category",e.state=t,e.smallImageKey=await getIconImage(t.querySelector("i")),e.smallImageText=t,e.buttons=[{label:"View Category",url:a}]}else e.details="Browsing Categories";else if(n[1]){e.details="Viewing Icon",e.state=document.querySelector(".icon-detail h1+button,#icon-landing h1+button").childNodes[1],e.smallImageKey=await getIconImage(document.querySelector(".icon-details-preview-rendering i"),getComputedStyle(document.querySelector(".icon-details-preview.card")).backgroundColor);const t=document.querySelector("#icon_family");t&&(e.smallImageText=t.value),e.buttons=[{label:"View Icon",url:a}]}else e.details="Browsing Icons";break;case"search":{const t=new URLSearchParams(c).get("q");if(e.details="Searching Icons",t){e.state=t;const a=[...document.querySelectorAll("#icons-results > article")];if(a.length){const c=`search-${t}-${a[0].id}`;registerSlideshowKey(c),o=!0;const n=await batch(c,a,(async t=>({...e,smallImageKey:await getIconImage(t.querySelector("i")),smallImageText:t.id})));for(const e of n)slideshow.addSlide(e.smallImageText,e,5e3)}}break}case"start":e.details="Getting Started";break;case"support":e.details="Browsing Support";break;case"plans":n[1]?(e.details="Viewing Plan",e.state=document.querySelector("h3")):e.details="Browsing Plans";break;case"sessions":e.details="Signing In"}o?presence.setActivity(slideshow):e.details?presence.setActivity(e):presence.clearActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQixNQUVKLElBQUssU0FBVSxDQUNYLE1BQU1XLEVBQWMsSUFBSUMsZ0JBQWdCbkIsR0FBUW9CLElBQUksS0FFcEQsR0FEQTNCLEVBQWFjLFFBQVUsa0JBQ25CVyxFQUFhLENBQ2J6QixFQUFhZSxNQUFRVSxFQUNyQixNQUFNRyxFQUFZLElBQ1gvRSxTQUFTZ0YsaUJBQWlCLDZCQUVqQyxHQUFJRCxFQUFVdkMsT0FBUSxDQUNsQixNQUFNaEQsRUFBTSxVQUFVb0YsS0FBZUcsRUFBVSxHQUFHRSxLQUNsRDFGLHFCQUFxQkMsR0FDckJ3RSxHQUFnQixFQUNoQixNQUFNa0IsUUFBa0I3QyxNQUFNN0MsRUFBS3VGLEdBQVczQyxNQUFPK0MsSUFDaEMsSUFDVmhDLEVBQ0hvQixvQkFBcUIzRSxhQUFhdUYsRUFBS2hCLGNBQWMsTUFDckRLLGVBQWdCVyxFQUFLRixPQUk3QixJQUFLLE1BQU1wQyxLQUFRcUMsRUFDZjlGLFVBQVVnRyxTQUFTdkMsRUFBSzJCLGVBQWdCM0IsRUFBTSxJQUN0RCxDQUNKLENBQ0EsS0FDSixDQUNBLElBQUssUUFDRE0sRUFBYWMsUUFBVSxrQkFDdkIsTUFFSixJQUFLLFVBQ0RkLEVBQWFjLFFBQVUsbUJBQ3ZCLE1BRUosSUFBSyxRQUNHTCxFQUFTLElBQ1RULEVBQWFjLFFBQVUsZUFDdkJkLEVBQWFlLE1BQVFsRSxTQUFTbUUsY0FBYyxPQUc1Q2hCLEVBQWFjLFFBQVUsaUJBQzNCLE1BRUosSUFBSyxXQUNEZCxFQUFhYyxRQUFVLGFBSTNCRCxFQUNBcEYsU0FBU3lHLFlBQVlqRyxXQUNmK0QsRUFBYWMsUUFHbkJyRixTQUFTeUcsWUFBWWxDLEdBRnJCdkUsU0FBUzBHLGVBRXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjgyMDAyMzQ5NjkzNDgxNzgwNFwiLFxufSk7XG5leHBvcnQgY29uc3QgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmV4cG9ydCBjb25zdCBzbGlkZXNob3cgPSBwcmVzZW5jZS5jcmVhdGVTbGlkZXNob3coKTtcbmxldCBvbGRTbGlkZXNob3dLZXk7XG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTbGlkZXNob3dLZXkoa2V5KSB7XG4gICAgaWYgKG9sZFNsaWRlc2hvd0tleSAhPT0ga2V5KSB7XG4gICAgICAgIHByZXNlbmNlLmluZm8oYFNsaWRlc2hvdyBrZXkgY2hhbmdlZCBmcm9tICR7b2xkU2xpZGVzaG93S2V5fSB0byAke2tleX1gKTtcbiAgICAgICAgc2xpZGVzaG93LmRlbGV0ZUFsbFNsaWRlcygpO1xuICAgICAgICBvbGRTbGlkZXNob3dLZXkgPSBrZXk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5jb25zdCBpY29uQ2FjaGUgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJY29uSW1hZ2UoaWNvbiwgYmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCIpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDUxMjtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTEyO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksIHsgZm9udEZhbWlseSwgZm9udFdlaWdodCwgY29sb3IgfSA9IGdldENvbXB1dGVkU3R5bGUoaWNvbiksIHsgY29udGVudCB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShpY29uLCBcIjpiZWZvcmVcIiksIHRleHQgPSBjb250ZW50LnJlcGxhY2UoL1wiL2csIFwiXCIpLCBrZXkgPSBgJHtmb250RmFtaWx5fS0ke2ZvbnRXZWlnaHR9LSR7YmFja2dyb3VuZENvbG9yfS0ke2NvbG9yfS0ke3RleHR9YDtcbiAgICBpZiAoaWNvbkNhY2hlW2tleV0pXG4gICAgICAgIHJldHVybiBpY29uQ2FjaGVba2V5XTtcbiAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCA1MTIsIDUxMik7XG4gICAgY3R4LmZvbnQgPSBgJHtmb250V2VpZ2h0fSAzODRweC8xICR7Zm9udEZhbWlseX1gO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICBjdHguZmlsbFRleHQodGV4dCwgMjU2LCAyNTYpO1xuICAgIGNvbnN0IGJsb2JQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgcHJlc2VuY2UuaW5mbyhgJHtrZXl9IC0+ICR7dXJsfWApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCksIDE1ZTMpO1xuICAgICAgICAgICAgcmVzb2x2ZShibG9iKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWNvbkNhY2hlW2tleV0gPSBibG9iUHJvbWlzZTtcbiAgICByZXR1cm4gaWNvbkNhY2hlW2tleV07XG59XG5sZXQgYmF0Y2hDYWNoZUtleSwgYmF0Y2hDYWNoZSA9IFtdLCBiYXRjaEludGVydmFsLCBiYXRjaEluZGV4ID0gMCwgYmF0Y2hJdGVtcyA9IFtdLCBiYXRjaEFib3J0ZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmF0Y2goa2V5LCBpdGVtTGlzdCwgbWFwcGVyKSB7XG4gICAgaWYgKGJhdGNoQ2FjaGVLZXkgPT09IGtleSkge1xuICAgICAgICBpZiAoYmF0Y2hJdGVtcy5sZW5ndGggIT09IGl0ZW1MaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcHJlc2VuY2UuaW5mbyhgQmF0Y2hlZCBpdGVtcyBjaGFuZ2VkIGZyb20gJHtiYXRjaEl0ZW1zLmxlbmd0aH0gdG8gJHtpdGVtTGlzdC5sZW5ndGh9YCk7XG4gICAgICAgICAgICBiYXRjaEFib3J0ZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIGJhdGNoQ2FjaGUgPSBbXTtcbiAgICAgICAgICAgIGJhdGNoSW5kZXggPSAwO1xuICAgICAgICAgICAgYmF0Y2hJdGVtcyA9IGl0ZW1MaXN0O1xuICAgICAgICAgICAgaWYgKGJhdGNoSW50ZXJ2YWwgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgZXhlY3V0ZUJhdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhdGNoQ2FjaGU7XG4gICAgfVxuICAgIHByZXNlbmNlLmluZm8oYEJhdGNoZWQga2V5IGNoYW5nZWQgZnJvbSAke2JhdGNoQ2FjaGVLZXl9IHRvICR7a2V5fWApO1xuICAgIGNsZWFyVGltZW91dChiYXRjaEludGVydmFsKTtcbiAgICBiYXRjaEFib3J0ZXIuYWJvcnQoKTtcbiAgICBiYXRjaENhY2hlS2V5ID0ga2V5O1xuICAgIGJhdGNoQ2FjaGUgPSBbXTtcbiAgICBiYXRjaEl0ZW1zID0gaXRlbUxpc3Q7XG4gICAgYmF0Y2hJbmRleCA9IDA7XG4gICAgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUJhdGNoKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gYmF0Y2hJbmRleCwgaiA9IDA7IGkgPCBiYXRjaEl0ZW1zLmxlbmd0aCAmJiBqIDwgMTA7IGkrKywgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFwcGVyKGJhdGNoSXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYgKGJhdGNoQWJvcnRlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLmluZm8oXCJCYXRjaCBhYm9ydGVkXCIpO1xuICAgICAgICAgICAgICAgIGJhdGNoQWJvcnRlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhdGNoQ2FjaGUucHVzaChkYXRhKTtcbiAgICAgICAgICAgIGJhdGNoSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBwcmVzZW5jZS5pbmZvKGBCYXRjaGVkICR7YmF0Y2hJbmRleH0gb2YgJHtiYXRjaEl0ZW1zLmxlbmd0aH1gKTtcbiAgICAgICAgaWYgKGJhdGNoSW5kZXggPT09IGJhdGNoSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYmF0Y2hJbnRlcnZhbCk7XG4gICAgICAgICAgICBiYXRjaEludGVydmFsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09IGJhdGNoQ2FjaGVLZXkpXG4gICAgICAgICAgICBiYXRjaEludGVydmFsID0gc2V0VGltZW91dChleGVjdXRlQmF0Y2gsIDUwMDApO1xuICAgIH1cbiAgICBleGVjdXRlQmF0Y2goKTtcbiAgICByZXR1cm4gYmF0Y2hDYWNoZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluVjBhV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETzBsQlEzQkRMRkZCUVZFc1JVRkJSU3h2UWtGQmIwSTdRMEZET1VJc1EwRkJReXhEUVVGRE8wRkJRMGdzVFVGQlRTeERRVUZETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETDBRc1RVRkJUU3hEUVVGRExFMUJRVTBzVTBGQlV5eEhRVUZITEZGQlFWRXNRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRCUVVWd1JDeEpRVUZKTEdWQlFYVkNMRU5CUVVNN1FVRkpOVUlzVFVGQlRTeFZRVUZWTEc5Q1FVRnZRaXhEUVVGRExFZEJRVmM3U1VGREwwTXNTVUZCU1N4bFFVRmxMRXRCUVVzc1IwRkJSeXhGUVVGRk8xRkJRelZDTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc09FSkJRVGhDTEdWQlFXVXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM3BGTEZOQlFWTXNRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRSUVVNMVFpeGxRVUZsTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNSQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlExbzdTVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVOa0xFTkJRVU03UVVGRlJDeE5RVUZOTEZOQlFWTXNSMEZCYTBNc1JVRkJSU3hEUVVGRE8wRkJUM0JFTEUxQlFVMHNWVUZCVlN4WlFVRlpMRU5CUXpOQ0xFbEJRV2xDTEVWQlEycENMR1ZCUVdVc1IwRkJSeXhOUVVGTk8wbEJSWGhDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEYUVRc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTTdTVUZEYmtJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTTdTVUZEY0VJc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkZiRU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVNeFJDeEZRVUZGTEU5QlFVOHNSVUZCUlN4SFFVRkhMR2RDUVVGblFpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkRMME1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVU5vUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhWUVVGVkxFbEJRVWtzVlVGQlZTeEpRVUZKTEdWQlFXVXNTVUZCU1N4TFFVRkxMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU03U1VGRmVrVXNTVUZCU1N4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRVVVzVDBGQlR5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkZNVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSMEZCUnl4bFFVRmxMRU5CUVVNN1NVRkRhRU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVYzNRaXhIUVVGSExFTkJRVU1zU1VGQlNTeEhRVUZITEVkQlFVY3NWVUZCVlN4WlFVRlpMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRMnBFTEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRM3BDTEVkQlFVY3NRMEZCUXl4WlFVRlpMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRelZDTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVVTNRaXhOUVVGTkxGZEJRVmNzUjBGQmEwSXNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3VVVGRGVFUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVVZ3UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNSRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5xUkN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFppeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSVWdzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJRenRKUVVNM1FpeFBRVUZQTEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlFpeERRVUZETzBGQlJVUXNTVUZCU1N4aFFVRnhRaXhGUVVONFFpeFZRVUZWTEVkQlFXTXNSVUZCUlN4RlFVTXhRaXhoUVVGeFFpeEZRVU55UWl4VlFVRlZMRWRCUVVjc1EwRkJReXhGUVVOa0xGVkJRVlVzUjBGQll5eEZRVUZGTEVWQlF6RkNMRmxCUVZrc1IwRkJSeXhKUVVGSkxHVkJRV1VzUlVGQlJTeERRVUZETzBGQldYUkRMRTFCUVUwc1EwRkJReXhMUVVGTExGVkJRVlVzUzBGQlN5eERRVU14UWl4SFFVRlhMRVZCUTFnc1VVRkJZU3hGUVVOaUxFMUJRV3RETzBsQlJXeERMRWxCUVVrc1lVRkJZU3hMUVVGTExFZEJRVWNzUlVGQlJUdFJRVVV4UWl4SlFVRkpMRlZCUVZVc1EwRkJReXhOUVVGTkxFdEJRVXNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTXhReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVU5hTERoQ1FVRTRRaXhWUVVGVkxFTkJRVU1zVFVGQlRTeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkRka1VzUTBGQlF6dFpRVU5HTEZsQlFWa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVOeVFpeFZRVUZWTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJoQ0xGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEWml4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRE8xbEJRM1JDTEVsQlFVa3NZVUZCWVN4TFFVRkxMRWxCUVVrN1owSkJRVVVzV1VGQldTeEZRVUZGTEVOQlFVTTdVMEZETTBNN1VVRkRSQ3hQUVVGUExGVkJRV2xDTEVOQlFVTTdTMEZEZWtJN1NVRkRSQ3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETERSQ1FVRTBRaXhoUVVGaExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnlSU3haUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdTVUZETlVJc1dVRkJXU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBsQlEzSkNMR0ZCUVdFc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRGNFSXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOb1FpeFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRPMGxCUTNSQ0xGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZGWml4TFFVRkxMRlZCUVZVc1dVRkJXVHRSUVVNeFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VVXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hOUVVGTkxFTkJRVVVzVlVGQmEwSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhFTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVU3WjBKQlEyaERMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdaMEpCUXk5Q0xGbEJRVmtzUjBGQlJ5eEpRVUZKTEdWQlFXVXNSVUZCUlN4RFFVRkRPMmRDUVVOeVF5eE5RVUZOTzJGQlEwNDdXVUZEUkN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEzUkNMRlZCUVZVc1JVRkJSU3hEUVVGRE8xTkJRMkk3VVVGRFJDeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1ZVRkJWU3hQUVVGUExGVkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXk5RUxFbEJRVWtzVlVGQlZTeExRVUZMTEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRja01zV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZEY2tJN1lVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eGhRVUZoTzFsQlF5OUNMR0ZCUVdFc1IwRkJSeXhWUVVGVkxFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRlJDeFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTm1MRTlCUVU4c1ZVRkJhVUlzUTBGQlF6dEJRVU14UWl4RFFVRkRJbjA9IiwiaW1wb3J0IHsgYmF0Y2gsIGJyb3dzaW5nVGltZXN0YW1wLCBnZXRJY29uSW1hZ2UsIHByZXNlbmNlLCByZWdpc3RlclNsaWRlc2hvd0tleSwgc2xpZGVzaG93LCB9IGZyb20gXCIuL3V0aWxcIjtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRi9Gb250JTIwQXdlc29tZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgICAgICB0eXBlOiAwLFxuICAgICAgICBuYW1lOiBcIkZvbnQgQXdlc29tZVwiLFxuICAgIH0sIHsgcGF0aG5hbWUsIGhyZWYsIHNlYXJjaCB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHBhdGhMaXN0ID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgICBsZXQgdXNlc1NsaWRlc2hvdyA9IGZhbHNlO1xuICAgIHN3aXRjaCAocGF0aExpc3RbMF0gPz8gXCIvXCIpIHtcbiAgICAgICAgY2FzZSBcIi9cIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIEhvbWUgUGFnZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImRvY3NcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgRG9jdW1lbnRhdGlvblwiO1xuICAgICAgICAgICAgaWYgKHBhdGhMaXN0WzFdKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uK2gxXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiUmVhZCBEb2NzXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpY29uc1wiOiB7XG4gICAgICAgICAgICBpZiAocGF0aExpc3RbMV0gPT09IFwiY2F0ZWdvcmllc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhMaXN0WzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgSWNvbiBDYXRlZ29yeVwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBoZWFkZXI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gYXdhaXQgZ2V0SWNvbkltYWdlKGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiaVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IENhdGVnb3J5XCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgQ2F0ZWdvcmllc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0aExpc3RbMV0pIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBJY29uXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLWRldGFpbCBoMStidXR0b24sI2ljb24tbGFuZGluZyBoMStidXR0b25cIikuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IGF3YWl0IGdldEljb25JbWFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmljb24tZGV0YWlscy1wcmV2aWV3LXJlbmRlcmluZyBpXCIpLCBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1kZXRhaWxzLXByZXZpZXcuY2FyZFwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICAgICAgY29uc3QgZmFtaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uX2ZhbWlseVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFtaWx5KVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBmYW1pbHkudmFsdWU7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IEljb25cIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBJY29uc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKS5nZXQoXCJxXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBJY29uc1wiO1xuICAgICAgICAgICAgaWYgKHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VhcmNoUXVlcnk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNhcmRzID0gW1xuICAgICAgICAgICAgICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2ljb25zLXJlc3VsdHMgPiBhcnRpY2xlXCIpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgaWYgKGljb25DYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYHNlYXJjaC0ke3NlYXJjaFF1ZXJ5fS0ke2ljb25DYXJkc1swXS5pZH1gO1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclNsaWRlc2hvd0tleShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB1c2VzU2xpZGVzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmF0Y2hEYXRhID0gYXdhaXQgYmF0Y2goa2V5LCBpY29uQ2FyZHMsIGFzeW5jIChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmVzZW5jZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxJbWFnZUtleTogYXdhaXQgZ2V0SWNvbkltYWdlKGNhcmQucXVlcnlTZWxlY3RvcihcImlcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiBjYXJkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiBiYXRjaERhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNob3cuYWRkU2xpZGUoZGF0YS5zbWFsbEltYWdlVGV4dCwgZGF0YSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJHZXR0aW5nIFN0YXJ0ZWRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJzdXBwb3J0XCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBTdXBwb3J0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicGxhbnNcIjoge1xuICAgICAgICAgICAgaWYgKHBhdGhMaXN0WzFdKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgUGxhblwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgUGxhbnNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2lnbmluZyBJblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVzZXNTbGlkZXNob3cpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHNsaWRlc2hvdyk7XG4gICAgZWxzZSBpZiAoIXByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5jbGVhckFjdGl2aXR5KCk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRMDRzUzBGQlN5eEZRVU5NTEdsQ1FVRnBRaXhGUVVOcVFpeFpRVUZaTEVWQlExb3NVVUZCVVN4RlFVTlNMRzlDUVVGdlFpeEZRVU53UWl4VFFVRlRMRWRCUTFRc1RVRkJUU3hSUVVGUkxFTkJRVU03UVVGRmFFSXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXh4UlVGQmNVVTdVVUZEZEVVc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0UlFVTnFReXhKUVVGSkxFZEJRWE5DTzFGQlF6RkNMRWxCUVVrc1JVRkJSU3hqUVVGak8wdEJRM0JDTEVWQlEwUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUXpsRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVVm9SQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZGTVVJc1VVRkJVU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZPMUZCUXpOQ0xFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMWxCUXpWRExFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRXaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xbEJReTlETEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU5vUWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1owSkJRek5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRE0wUTdXVUZEUkN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzFsQlEySXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzV1VGQldTeEZRVUZGTzJkQ1FVTnFReXhKUVVGSkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRhRUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZETlVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDFRa0ZCZFVJc1EwRkJRenR2UWtGREwwTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03YjBKQlF6VkNMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlRTeFpRVUZaTEVOQlF6bERMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlEzcENMRU5CUVVNN2IwSkJRMFlzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4TlFVRk5MRU5CUVVNN2IwSkJRM0pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeGxRVUZsTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03YVVKQlF5OUVPenR2UWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzJGQlEzQkVPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMmRDUVVOMlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR05CUVdNc1EwRkJRenRuUWtGRGRFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl4blJFRkJaMFFzUTBGRGFFUXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaENMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlRTeFpRVUZaTEVOQlF6bERMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYlVOQlFXMURMRU5CUVVNc1JVRkRNMFFzWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRE8zRkNRVU53UlN4bFFVRmxMRU5CUTJwQ0xFTkJRVU03WjBKQlEwWXNUVUZCVFN4TlFVRk5MRWRCUTFnc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNZMEZCWXl4RFFVRkRMRU5CUVVNN1owSkJRek5FTEVsQlFVa3NUVUZCVFR0dlFrRkJSU3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1owSkJSWFpFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRE0wUTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03V1VGREwwTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU5rTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc1pVRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONlJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFsQlEzcERMRWxCUVVrc1YwRkJWeXhGUVVGRk8yZENRVU5vUWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF6dG5Ra0ZEYWtNc1RVRkJUU3hUUVVGVExFZEJRVWM3YjBKQlEycENMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMREJDUVVFd1FpeERRVUZETzJsQ1FVTjRSQ3hEUVVGRE8yZENRVU5HTEVsQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSVHR2UWtGRGNrSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1ZVRkJWU3hYUVVGWExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yOUNRVU4yUkN4dlFrRkJiMElzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRNVUlzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkRja0lzVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxGTkJRVk1zUlVGQlJTeExRVUZMTEVWQlFVTXNTVUZCU1N4RlFVRkRMRVZCUVVVN2QwSkJRekZFTEUxQlFVMHNVVUZCVVN4SFFVRnBRanMwUWtGRE9VSXNSMEZCUnl4WlFVRlpPelJDUVVObUxHRkJRV0VzUlVGQlJTeE5RVUZOTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3pSQ1FVTXhSQ3hqUVVGakxFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVTdlVUpCUTNaQ0xFTkJRVU03ZDBKQlEwWXNUMEZCVHl4UlFVRlJMRU5CUVVNN2IwSkJRMnBDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOSUxFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NVMEZCVXp0M1FrRkRNMElzVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJkMElzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJReTlFTzJGQlEwUTdXVUZEUkN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzFsQlEySXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0WlFVTjZReXhOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRaUVVNeFF5eE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRMklzU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRMmhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1kwRkJZeXhEUVVGRE8yZENRVU4wUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRiRVE3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1dVRkRMME1zVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJRenRaUVVOd1F5eE5RVUZOTzFOQlEwNDdTMEZEUkR0SlFVVkVMRWxCUVVrc1lVRkJZVHRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkRPVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZET3p0UlFVTndSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTNwRExFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJzbGlkZXNob3ciLCJjcmVhdGVTbGlkZXNob3ciLCJvbGRTbGlkZXNob3dLZXkiLCJyZWdpc3RlclNsaWRlc2hvd0tleSIsImtleSIsImluZm8iLCJkZWxldGVBbGxTbGlkZXMiLCJpY29uQ2FjaGUiLCJnZXRJY29uSW1hZ2UiLCJpY29uIiwiYmFja2dyb3VuZENvbG9yIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJjb250ZW50IiwidGV4dCIsInJlcGxhY2UiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsImJsb2JQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0b0Jsb2IiLCJibG9iIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic2V0VGltZW91dCIsInJldm9rZU9iamVjdFVSTCIsImJhdGNoQ2FjaGVLZXkiLCJiYXRjaEludGVydmFsIiwiYmF0Y2hDYWNoZSIsImJhdGNoSW5kZXgiLCJiYXRjaEl0ZW1zIiwiYmF0Y2hBYm9ydGVyIiwiQWJvcnRDb250cm9sbGVyIiwiYXN5bmMiLCJiYXRjaCIsIml0ZW1MaXN0IiwibWFwcGVyIiwibGVuZ3RoIiwiYWJvcnQiLCJleGVjdXRlQmF0Y2giLCJpIiwiaiIsImRhdGEiLCJzaWduYWwiLCJhYm9ydGVkIiwicHVzaCIsImNsZWFyVGltZW91dCIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwidHlwZSIsIm5hbWUiLCJwYXRobmFtZSIsImhyZWYiLCJzZWFyY2giLCJsb2NhdGlvbiIsInBhdGhMaXN0Iiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwidXNlc1NsaWRlc2hvdyIsImRldGFpbHMiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25zIiwibGFiZWwiLCJoZWFkZXIiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJjaGlsZE5vZGVzIiwiZmFtaWx5IiwidmFsdWUiLCJzZWFyY2hRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsImljb25DYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpZCIsImJhdGNoRGF0YSIsImNhcmQiLCJhZGRTbGlkZSIsInNldEFjdGl2aXR5IiwiY2xlYXJBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;