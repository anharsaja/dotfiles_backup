var __webpack_exports__={};const presence=new Presence({clientId:"901821070263336971"}),pages={"/":"Home","/downloads":"Downloads","/quickstart":"Quickstart","/plugins":"Plugins","/wiki":"Wiki","/about":"About","/imprint":"Imprint","/privacy-policy":"Privacy Policy"},browsingTimestamp=Math.round(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=location.pathname,t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/B/Blockbench/assets/logo.png",startTimestamp:browsingTimestamp},a=document.querySelector("#content_wrapper > div > div > h2")?.textContent;if("web"===location.host.split(".")[0]){const e=document.querySelectorAll("#page_wrapper #status_bar div[title]:not(.f_left)")[1]?.title;switch(e?.toLowerCase()){case"generic model":t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/B/Blockbench/assets/0.png";break;case"java block/item":t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/B/Blockbench/assets/1.png";break;case"bedrock model":t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/B/Blockbench/assets/2.png";break;case"modded entity":t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/B/Blockbench/assets/3.png";break;case"optifine entity":t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/B/Blockbench/assets/4.png";break;case"minecraft skin":t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/B/Blockbench/assets/5.png"}switch(t.details="Web App",document.querySelector("#main_toolbar #mode_selector li.selected")?.textContent.toLowerCase()||"Unknown"){case"Unknown":t.state="Just started";break;case"edit":t.state=`Editing a ${e}`;break;case"paint":t.state=`Painting a ${e}`;break;case"animate":t.state=`Animating a ${e}`;break;default:t.state="Unknown activity"}}else e.includes("/plugins")&&a?(t.details="Looking at a plugin:",t.state=a,t.buttons=[{label:"View Plugin",url:location.href}]):e.includes("/wiki")?(t.details="Blockbench Wiki",t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",t.smallImageText="Reading",t.state=document.querySelector("#wiki_wrapper div.content > div.nuxt-content > h1")?.textContent||document.querySelector("#wiki_wrapper div.content > h1")?.textContent||"Unknown Wiki Page",t.buttons=[{label:"Read Wiki",url:location.href}]):pages[e]&&(t.details=`Looking at the ${pages[e]} page`);presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsTUFBUSxDQUNSLElBQUssT0FDTCxhQUFjLFlBQ2QsY0FBZSxhQUNmLFdBQVksVUFDWixRQUFTLE9BQ1QsU0FBVSxRQUNWLFdBQVksVUFDWixrQkFBbUIsa0JBQ3BCQyxrQkFBb0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsS0FDL0NSLFNBQVNTLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBT0MsU0FBU0MsU0FBVUMsRUFBZSxDQUMzQ0MsY0FBZSxrRUFDZkMsZUFBZ0JaLG1CQUNqQmEsRUFBZUMsU0FBU0MsY0FBYyxzQ0FBc0NDLFlBQy9FLEdBQW9DLFFBQWhDUixTQUFTUyxLQUFLQyxNQUFNLEtBQUssR0FBYyxDQUN2QyxNQUFNQyxFQUFZTCxTQUFTTSxpQkFBaUIscURBQXFELElBQUlDLE1BQ3JHLE9BQVFGLEdBQVdHLGVBQ2YsSUFBSyxnQkFDRFosRUFBYWEsY0FBZ0IsK0RBQzdCLE1BQ0osSUFBSyxrQkFDRGIsRUFBYWEsY0FBZ0IsK0RBQzdCLE1BQ0osSUFBSyxnQkFDRGIsRUFBYWEsY0FBZ0IsK0RBQzdCLE1BQ0osSUFBSyxnQkFDRGIsRUFBYWEsY0FBZ0IsK0RBQzdCLE1BQ0osSUFBSyxrQkFDRGIsRUFBYWEsY0FBZ0IsK0RBQzdCLE1BQ0osSUFBSyxpQkFDRGIsRUFBYWEsY0FBZ0IsK0RBTXJDLE9BREFiLEVBQWFjLFFBQVUsVUFDZlYsU0FDSEMsY0FBYyw2Q0FDYkMsWUFBWU0sZUFDZCxXQUNBLElBQUssVUFDRFosRUFBYWUsTUFBUSxlQUNyQixNQUNKLElBQUssT0FDRGYsRUFBYWUsTUFBUSxhQUFhTixJQUNsQyxNQUNKLElBQUssUUFDRFQsRUFBYWUsTUFBUSxjQUFjTixJQUNuQyxNQUNKLElBQUssVUFDRFQsRUFBYWUsTUFBUSxlQUFlTixJQUNwQyxNQUNKLFFBQ0lULEVBQWFlLE1BQVEsbUJBRWpDLE1BQ1NsQixFQUFLbUIsU0FBUyxhQUFlYixHQUNsQ0gsRUFBYWMsUUFBVSx1QkFDdkJkLEVBQWFlLE1BQVFaLEVBQ3JCSCxFQUFhaUIsUUFBVSxDQUFDLENBQUVDLE1BQU8sY0FBZUMsSUFBS3JCLFNBQVNzQixRQUV6RHZCLEVBQUttQixTQUFTLFVBQ25CaEIsRUFBYWMsUUFBVSxrQkFDdkJkLEVBQWFhLGNBQWdCLGtEQUM3QmIsRUFBYXFCLGVBQWlCLFVBQzlCckIsRUFBYWUsTUFDVFgsU0FBU0MsY0FBYyxzREFBc0RDLGFBQ3pFRixTQUFTQyxjQUFjLG1DQUFtQ0MsYUFDMUQsb0JBQ1JOLEVBQWFpQixRQUFVLENBQUMsQ0FBRUMsTUFBTyxZQUFhQyxJQUFLckIsU0FBU3NCLFFBRXZEL0IsTUFBTVEsS0FDWEcsRUFBYWMsUUFBVSxrQkFBa0J6QixNQUFNUSxXQUNuRFgsU0FBU29DLFlBQVl0QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjkwMTgyMTA3MDI2MzMzNjk3MVwiLFxufSksIHBhZ2VzID0ge1xuICAgIFwiL1wiOiBcIkhvbWVcIixcbiAgICBcIi9kb3dubG9hZHNcIjogXCJEb3dubG9hZHNcIixcbiAgICBcIi9xdWlja3N0YXJ0XCI6IFwiUXVpY2tzdGFydFwiLFxuICAgIFwiL3BsdWdpbnNcIjogXCJQbHVnaW5zXCIsXG4gICAgXCIvd2lraVwiOiBcIldpa2lcIixcbiAgICBcIi9hYm91dFwiOiBcIkFib3V0XCIsXG4gICAgXCIvaW1wcmludFwiOiBcIkltcHJpbnRcIixcbiAgICBcIi9wcml2YWN5LXBvbGljeVwiOiBcIlByaXZhY3kgUG9saWN5XCIsXG59LCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gbG9jYXRpb24ucGF0aG5hbWUsIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0IvQmxvY2tiZW5jaC9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHBsdWdpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudF93cmFwcGVyID4gZGl2ID4gZGl2ID4gaDJcIik/LnRleHRDb250ZW50O1xuICAgIGlmIChsb2NhdGlvbi5ob3N0LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ3ZWJcIikge1xuICAgICAgICBjb25zdCBtb2RlbFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BhZ2Vfd3JhcHBlciAjc3RhdHVzX2JhciBkaXZbdGl0bGVdOm5vdCguZl9sZWZ0KVwiKVsxXT8udGl0bGU7XG4gICAgICAgIHN3aXRjaCAobW9kZWxUeXBlPy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFwiZ2VuZXJpYyBtb2RlbFwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0IvQmxvY2tiZW5jaC9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJqYXZhIGJsb2NrL2l0ZW1cIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9CL0Jsb2NrYmVuY2gvYXNzZXRzLzEucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmVkcm9jayBtb2RlbFwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0IvQmxvY2tiZW5jaC9hc3NldHMvMi5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb2RkZWQgZW50aXR5XCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQi9CbG9ja2JlbmNoL2Fzc2V0cy8zLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm9wdGlmaW5lIGVudGl0eVwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0IvQmxvY2tiZW5jaC9hc3NldHMvNC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaW5lY3JhZnQgc2tpblwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0IvQmxvY2tiZW5jaC9hc3NldHMvNS5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldlYiBBcHBcIjtcbiAgICAgICAgc3dpdGNoIChkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbl90b29sYmFyICNtb2RlX3NlbGVjdG9yIGxpLnNlbGVjdGVkXCIpXG4gICAgICAgICAgICA/LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgICAgICAgIFwiVW5rbm93blwiKSB7XG4gICAgICAgICAgICBjYXNlIFwiVW5rbm93blwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiSnVzdCBzdGFydGVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBFZGl0aW5nIGEgJHttb2RlbFR5cGV9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwYWludFwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBQYWludGluZyBhICR7bW9kZWxUeXBlfWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYW5pbWF0ZVwiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBBbmltYXRpbmcgYSAke21vZGVsVHlwZX1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlVua25vd24gYWN0aXZpdHlcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwiL3BsdWdpbnNcIikgJiYgcGx1Z2luSGVhZGVyKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIGF0IGEgcGx1Z2luOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwbHVnaW5IZWFkZXI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBQbHVnaW5cIiwgdXJsOiBsb2NhdGlvbi5ocmVmIH1dO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwiL3dpa2lcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJsb2NrYmVuY2ggV2lraVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpa2lfd3JhcHBlciBkaXYuY29udGVudCA+IGRpdi5udXh0LWNvbnRlbnQgPiBoMVwiKT8udGV4dENvbnRlbnQgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpa2lfd3JhcHBlciBkaXYuY29udGVudCA+IGgxXCIpPy50ZXh0Q29udGVudCB8fFxuICAgICAgICAgICAgICAgIFwiVW5rbm93biBXaWtpIFBhZ2VcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJSZWFkIFdpa2lcIiwgdXJsOiBsb2NhdGlvbi5ocmVmIH1dO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlc1twYWdlXSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgTG9va2luZyBhdCB0aGUgJHtwYWdlc1twYWdlXX0gcGFnZWA7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhMUVVGTExFZEJRVEpDTzBsQlF5OUNMRWRCUVVjc1JVRkJSU3hOUVVGTk8wbEJRMWdzV1VGQldTeEZRVUZGTEZkQlFWYzdTVUZEZWtJc1lVRkJZU3hGUVVGRkxGbEJRVms3U1VGRE0wSXNWVUZCVlN4RlFVRkZMRk5CUVZNN1NVRkRja0lzVDBGQlR5eEZRVUZGTEUxQlFVMDdTVUZEWml4UlFVRlJMRVZCUVVVc1QwRkJUenRKUVVOcVFpeFZRVUZWTEVWQlFVVXNVMEZCVXp0SlFVTnlRaXhwUWtGQmFVSXNSVUZCUlN4blFrRkJaMEk3UTBGRGJrTXNSVUZEUkN4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFWbHVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVNM1FpeFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzYlVWQlFXRTdVVUZETVVJc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhGUVVORUxGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTndReXh0UTBGQmJVTXNRMEZEYmtNc1JVRkJSU3hYUVVGWExFTkJRVU03U1VGRmFFSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFVkJRVVU3VVVGRE1VTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVTXhReXh0UkVGQmJVUXNRMEZEYmtRc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTTdVVUZGV2l4UlFVRlJMRk5CUVZNc1JVRkJSU3hYUVVGWExFVkJRVVVzUlVGQlJUdFpRVU5xUXl4TFFVRkxMR1ZCUVdVN1owSkJRMjVDTEZsQlFWa3NRMEZCUXl4aFFVRmhMR2xGUVVGcFFpeERRVUZETzJkQ1FVTTFReXhOUVVGTk8xbEJRMUFzUzBGQlN5eHBRa0ZCYVVJN1owSkJRM0pDTEZsQlFWa3NRMEZCUXl4aFFVRmhMR2xGUVVGdFFpeERRVUZETzJkQ1FVTTVReXhOUVVGTk8xbEJRMUFzUzBGQlN5eGxRVUZsTzJkQ1FVTnVRaXhaUVVGWkxFTkJRVU1zWVVGQllTeHBSVUZCYVVJc1EwRkJRenRuUWtGRE5VTXNUVUZCVFR0WlFVTlFMRXRCUVVzc1pVRkJaVHRuUWtGRGJrSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2FVVkJRV2RDTEVOQlFVTTdaMEpCUXpORExFMUJRVTA3V1VGRFVDeExRVUZMTEdsQ1FVRnBRanRuUWtGRGNrSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2FVVkJRV3RDTEVOQlFVTTdaMEpCUXpkRExFMUJRVTA3V1VGRFVDeExRVUZMTEdkQ1FVRm5RanRuUWtGRGNFSXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2FVVkJRV01zUTBGQlF6dG5Ra0ZEZWtNc1RVRkJUVHRaUVVOUU8yZENRVU5ETEUxQlFVMDdVMEZEVUR0UlFVVkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlEycERMRkZCUTBNc1VVRkJVVHRoUVVOT0xHRkJRV0VzUTBGQlF5d3dRMEZCTUVNc1EwRkJRenRaUVVNeFJDeEZRVUZGTEZkQlFWY3NRMEZCUXl4WFFVRlhMRVZCUVVVN1dVRkROVUlzVTBGQlV5eEZRVU5TTzFsQlEwUXNTMEZCU3l4VFFVRlRPMmRDUVVOaUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NZMEZCWXl4RFFVRkRPMmRDUVVOd1F5eE5RVUZOTzFsQlExQXNTMEZCU3l4TlFVRk5PMmRDUVVOV0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NZVUZCWVN4VFFVRlRMRVZCUVVVc1EwRkJRenRuUWtGRE9VTXNUVUZCVFR0WlFVTlFMRXRCUVVzc1QwRkJUenRuUWtGRFdDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR05CUVdNc1UwRkJVeXhGUVVGRkxFTkJRVU03WjBKQlF5OURMRTFCUVUwN1dVRkRVQ3hMUVVGTExGTkJRVk03WjBKQlEySXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhsUVVGbExGTkJRVk1zUlVGQlJTeERRVUZETzJkQ1FVTm9SQ3hOUVVGTk8xbEJRMUE3WjBKQlEwTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0VFFVTjZRenRMUVVORU8xTkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxGbEJRVmtzUlVGQlJUdFJRVU55UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMUZCUXpsRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NXVUZCV1N4RFFVRkRPMUZCUTJ4RExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hoUVVGaExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8wdEJRM1JGTzFOQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFGQlEyeERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRla01zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGVFTXNXVUZCV1N4RFFVRkRMRXRCUVVzN1dVRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc2JVUkJRVzFFTEVOQlEyNUVMRVZCUVVVc1YwRkJWenRuUWtGRFpDeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2REUVVGblF5eERRVUZETEVWQlFVVXNWMEZCVnp0blFrRkRja1VzYlVKQlFXMUNMRU5CUVVNN1VVRkRja0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03UzBGRGNFVTdVMEZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGNrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRk4wUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInBhZ2VzIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInBhZ2UiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGx1Z2luSGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJob3N0Iiwic3BsaXQiLCJtb2RlbFR5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsInNtYWxsSW1hZ2VLZXkiLCJkZXRhaWxzIiwic3RhdGUiLCJpbmNsdWRlcyIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsImhyZWYiLCJzbWFsbEltYWdlVGV4dCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;