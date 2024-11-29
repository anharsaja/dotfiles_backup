var __webpack_exports__={};const presence=new Presence({clientId:"1272521587912081428"}),browsingTimestamp=Math.floor(Date.now()/1e3);function getTitleText(e){const t=document.querySelector(e);return t?t.textContent.replace(/\t|\n/g,"").trim():"Unknown"}presence.on("UpdateData",(async()=>{const e={details:"Browsing...",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/K/Komik%20Indo/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:i}=document.location,n=await presence.getSetting("buttons");if(i.includes("?s="))e.state=`Searching: ${getTitleText("div.widget-title h1").replace("Komik Hasil Pencarian ","")}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.details="Searching for Comics";else if("/"===t)e.details="Viewing Homepage";else if(t.endsWith("/daftar-komik/"))e.details="Viewing Popular Comics List";else if(t.endsWith("/komik-terbaru/"))e.details="Viewing Latest Comics List";else if(t.endsWith("/komik-berwarna/"))e.details="Viewing Colored Comics List";else if(t.endsWith("/daftar-manga"))e.details="Viewing Manga List";else if(t.endsWith("/manga/"))e.details="Viewing Manga";else if(t.endsWith("/manhwa/"))e.details="Viewing Manhwa";else if(t.endsWith("/manhua/"))e.details="Viewing Manhua";else if(t.endsWith("/akun/"))e.details="Viewing Account";else if(t.endsWith("/iklan/"))e.details="Contact Komikindo";else if(t.endsWith("/konten/ecchi/"))e.details="Viewing Ecchi Content";else if(t.startsWith("/komik/")){const t=getTitleText("h1.entry-title").replace("Komik","");e.details=`Viewing: ${t}`;let s="Unknown",a="Unknown";for(const e of document.querySelectorAll("div.infox > div.spe > span > b"))e.textContent.includes("Pengarang:")&&(s=e.nextSibling.textContent.trim()),e.textContent.includes("Jenis Komik:")&&(a=e.nextElementSibling.textContent.trim());e.state=`Author: ${s} | Type: ${a}`,e.smallImageText=t,n&&(e.buttons=[{label:"View Comic",url:i}])}else if(i.includes("chapter-")){const t=getTitleText("div.dtlx > h1.entry-title").replace("Komik","");e.details=t,e.state="Reading Chapter",e.smallImageText=t,n&&(e.buttons=[{label:"Read Chapter",url:i},{label:"View Comic",url:document.querySelectorAll("div.nextprev > a")[1].getAttribute("href")}])}else e.details="Browsing...";presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELFNBQVNDLGFBQWFDLEdBQ2xCLE1BQU1DLEVBQVVDLFNBQVNDLGNBQWNILEdBQ3ZDLE9BQU9DLEVBQVVBLEVBQVFHLFlBQVlDLFFBQVEsU0FBVSxJQUFJQyxPQUFTLFNBQ3hFLENBQ0FmLFNBQVNnQixHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLFFBQVMsY0FDVEMsY0FBZSxvRUFDZkMsZUFBZ0JsQixvQkFDakIsU0FBRW1CLEVBQVEsS0FBRUMsR0FBU1osU0FBU2EsU0FBVUMsUUFBZ0J6QixTQUFTMEIsV0FBVyxXQUMvRSxHQUFJSCxFQUFLSSxTQUFTLE9BQ2RULEVBQWFVLE1BQVEsY0FBY3BCLGFBQWEsdUJBQXVCTSxRQUFRLHlCQUEwQixNQUN6R0ksRUFBYVcsY0FBZ0IsaURBQzdCWCxFQUFhQyxRQUFVLDRCQUV0QixHQUFpQixNQUFiRyxFQUNMSixFQUFhQyxRQUFVLHdCQUN0QixHQUFJRyxFQUFTUSxTQUFTLGtCQUN2QlosRUFBYUMsUUFBVSxtQ0FDdEIsR0FBSUcsRUFBU1EsU0FBUyxtQkFDdkJaLEVBQWFDLFFBQVUsa0NBQ3RCLEdBQUlHLEVBQVNRLFNBQVMsb0JBQ3ZCWixFQUFhQyxRQUFVLG1DQUN0QixHQUFJRyxFQUFTUSxTQUFTLGlCQUN2QlosRUFBYUMsUUFBVSwwQkFDdEIsR0FBSUcsRUFBU1EsU0FBUyxXQUN2QlosRUFBYUMsUUFBVSxxQkFDdEIsR0FBSUcsRUFBU1EsU0FBUyxZQUN2QlosRUFBYUMsUUFBVSxzQkFDdEIsR0FBSUcsRUFBU1EsU0FBUyxZQUN2QlosRUFBYUMsUUFBVSxzQkFDdEIsR0FBSUcsRUFBU1EsU0FBUyxVQUN2QlosRUFBYUMsUUFBVSx1QkFDdEIsR0FBSUcsRUFBU1EsU0FBUyxXQUN2QlosRUFBYUMsUUFBVSx5QkFDdEIsR0FBSUcsRUFBU1EsU0FBUyxrQkFDdkJaLEVBQWFDLFFBQVUsNkJBQ3RCLEdBQUlHLEVBQVNTLFdBQVcsV0FBWSxDQUNyQyxNQUFNQyxFQUFleEIsYUFBYSxrQkFBa0JNLFFBQVEsUUFBUyxJQUNyRUksRUFBYUMsUUFBVSxZQUFZYSxJQUNuQyxJQUFJQyxFQUFTLFVBQVdDLEVBQVksVUFDcEMsSUFBSyxNQUFNeEIsS0FBV0MsU0FBU3dCLGlCQUFpQixrQ0FDeEN6QixFQUFRRyxZQUFZYyxTQUFTLGdCQUM3Qk0sRUFBU3ZCLEVBQVEwQixZQUFZdkIsWUFBWUUsUUFDekNMLEVBQVFHLFlBQVljLFNBQVMsa0JBQzdCTyxFQUFZeEIsRUFBUTJCLG1CQUFtQnhCLFlBQVlFLFFBRTNERyxFQUFhVSxNQUFRLFdBQVdLLGFBQWtCQyxJQUNsRGhCLEVBQWFvQixlQUFpQk4sRUFDMUJQLElBQ0FQLEVBQWFPLFFBQVUsQ0FDbkIsQ0FDSWMsTUFBTyxhQUNQQyxJQUFLakIsSUFJckIsTUFDSyxHQUFJQSxFQUFLSSxTQUFTLFlBQWEsQ0FDaEMsTUFBTUssRUFBZXhCLGFBQWEsNkJBQTZCTSxRQUFRLFFBQVMsSUFDaEZJLEVBQWFDLFFBQVVhLEVBQ3ZCZCxFQUFhVSxNQUFRLGtCQUNyQlYsRUFBYW9CLGVBQWlCTixFQUMxQlAsSUFDQVAsRUFBYU8sUUFBVSxDQUNuQixDQUNJYyxNQUFPLGVBQ1BDLElBQUtqQixHQUVULENBQ0lnQixNQUFPLGFBQ1BDLElBQUs3QixTQUNBd0IsaUJBQWlCLG9CQUFvQixHQUNyQ00sYUFBYSxVQUlsQyxNQUVJdkIsRUFBYUMsUUFBVSxjQUMzQm5CLFNBQVMwQyxZQUFZeEIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMjcyNTIxNTg3OTEyMDgxNDI4XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmZ1bmN0aW9uIGdldFRpdGxlVGV4dChzZWxlY3Rvcikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQudGV4dENvbnRlbnQucmVwbGFjZSgvXFx0fFxcbi9nLCBcIlwiKS50cmltKCkgOiBcIlVua25vd25cIjtcbn1cbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nLi4uXCIsXG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0tvbWlrJTIwSW5kby9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHsgcGF0aG5hbWUsIGhyZWYgfSA9IGRvY3VtZW50LmxvY2F0aW9uLCBidXR0b25zID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIik7XG4gICAgaWYgKGhyZWYuaW5jbHVkZXMoXCI/cz1cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFNlYXJjaGluZzogJHtnZXRUaXRsZVRleHQoXCJkaXYud2lkZ2V0LXRpdGxlIGgxXCIpLnJlcGxhY2UoXCJLb21payBIYXNpbCBQZW5jYXJpYW4gXCIsIFwiXCIpfWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmcgZm9yIENvbWljc1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZSA9PT0gXCIvXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEhvbWVwYWdlXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuZW5kc1dpdGgoXCIvZGFmdGFyLWtvbWlrL1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgUG9wdWxhciBDb21pY3MgTGlzdFwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmVuZHNXaXRoKFwiL2tvbWlrLXRlcmJhcnUvXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBMYXRlc3QgQ29taWNzIExpc3RcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5lbmRzV2l0aChcIi9rb21pay1iZXJ3YXJuYS9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIENvbG9yZWQgQ29taWNzIExpc3RcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5lbmRzV2l0aChcIi9kYWZ0YXItbWFuZ2FcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIE1hbmdhIExpc3RcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5lbmRzV2l0aChcIi9tYW5nYS9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIE1hbmdhXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuZW5kc1dpdGgoXCIvbWFuaHdhL1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgTWFuaHdhXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuZW5kc1dpdGgoXCIvbWFuaHVhL1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgTWFuaHVhXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuZW5kc1dpdGgoXCIvYWt1bi9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEFjY291bnRcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5lbmRzV2l0aChcIi9pa2xhbi9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb250YWN0IEtvbWlraW5kb1wiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLmVuZHNXaXRoKFwiL2tvbnRlbi9lY2NoaS9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEVjY2hpIENvbnRlbnRcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2tvbWlrL1wiKSkge1xuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBnZXRUaXRsZVRleHQoXCJoMS5lbnRyeS10aXRsZVwiKS5yZXBsYWNlKFwiS29taWtcIiwgXCJcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmc6ICR7dGl0bGVFbGVtZW50fWA7XG4gICAgICAgIGxldCBhdXRob3IgPSBcIlVua25vd25cIiwgY29taWNUeXBlID0gXCJVbmtub3duXCI7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmluZm94ID4gZGl2LnNwZSA+IHNwYW4gPiBiXCIpKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIlBlbmdhcmFuZzpcIikpXG4gICAgICAgICAgICAgICAgYXV0aG9yID0gZWxlbWVudC5uZXh0U2libGluZy50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkplbmlzIEtvbWlrOlwiKSlcbiAgICAgICAgICAgICAgICBjb21pY1R5cGUgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEF1dGhvcjogJHthdXRob3J9IHwgVHlwZTogJHtjb21pY1R5cGV9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gdGl0bGVFbGVtZW50O1xuICAgICAgICBpZiAoYnV0dG9ucykge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IENvbWljXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChocmVmLmluY2x1ZGVzKFwiY2hhcHRlci1cIikpIHtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZ2V0VGl0bGVUZXh0KFwiZGl2LmR0bHggPiBoMS5lbnRyeS10aXRsZVwiKS5yZXBsYWNlKFwiS29taWtcIiwgXCJcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGVFbGVtZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlJlYWRpbmcgQ2hhcHRlclwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSB0aXRsZUVsZW1lbnQ7XG4gICAgICAgIGlmIChidXR0b25zKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWQgQ2hhcHRlclwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgQ29taWNcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYubmV4dHByZXYgPiBhXCIpWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZy4uLlwiO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVMXVSQ3hUUVVGVExGbEJRVmtzUTBGQlF5eFJRVUZuUWp0SlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRMnBFTEU5QlFVOHNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRCUVVNdlJTeERRVUZETzBGQlJVUXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMRTlCUVU4c1JVRkJSU3hoUVVGaE8xRkJRM1JDTEdGQlFXRXNjVVZCUVdFN1VVRkRNVUlzWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eEZRVU5FTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlEzUkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkZla1FzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM3BDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1kwRkJZeXhaUVVGWkxFTkJRemxETEhGQ1FVRnhRaXhEUVVOeVFpeERRVUZETEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUXpGRExGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8xRkJRek5ETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdTMEZET1VNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUzBGQlN5eEhRVUZITzFGQlFVVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0VFFVTnNSU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0VFFVTnFSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcwUWtGQk5FSXNRMEZCUXp0VFFVTm9SQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03VVVGRE4wTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0VFFVTnFSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRPMUZCUXpGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03VTBGRGVFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRE8xTkJRM3BGTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGNrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0VFFVTndReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRPMUZCUTNKRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03VTBGRGNFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU51UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMU5CUTNKRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkRjRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dFRRVU4yUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNN1VVRkRNME1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4MVFrRkJkVUlzUTBGQlF6dFRRVU16UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVVUZEZUVNc1RVRkJUU3haUVVGWkxFZEJRVWNzV1VGQldTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1dVRkJXU3hGUVVGRkxFTkJRVU03VVVGRmJFUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVOeVFpeFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUlhaQ0xFdEJRVXNzVFVGQlRTeFBRVUZQTEVsQlFVa3NVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVU01UXl4blEwRkJaME1zUTBGRGFFTXNSVUZCUlR0WlFVTkdMRWxCUVVrc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRPMmRDUVVNM1F5eE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEYWtRc1NVRkJTU3hQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNN1owSkJReTlETEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xTkJRek5FTzFGQlJVUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFMUJRVTBzV1VGQldTeFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTTVSQ3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXp0UlFVTXpReXhKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3haUVVGWk8yOUNRVU51UWl4SFFVRkhMRVZCUVVVc1NVRkJTVHRwUWtGRFZEdGhRVU5FTEVOQlFVTTdVMEZEUmp0TFFVTkVPMU5CUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMUZCUTNKRExFMUJRVTBzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl3eVFrRkJNa0lzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZEY2tVc1QwRkJUeXhGUVVOUUxFVkJRVVVzUTBGRFJpeERRVUZETzFGQlEwWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFTkJRVU03VVVGRGNFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0UlFVTjJReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXp0UlFVVXpReXhKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hqUVVGak8yOUNRVU55UWl4SFFVRkhMRVZCUVVVc1NVRkJTVHRwUWtGRFZEdG5Ra0ZEUkR0dlFrRkRReXhMUVVGTExFVkJRVVVzV1VGQldUdHZRa0ZEYmtJc1IwRkJSeXhGUVVGRkxGRkJRVkU3ZVVKQlExZ3NaMEpCUVdkQ0xFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEzWkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU03YVVKQlEzUkNPMkZCUTBRc1EwRkJRenRUUVVOR08wdEJRMFE3TzFGQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03U1VGRk5VTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImdldFRpdGxlVGV4dCIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInRyaW0iLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwiZGV0YWlscyIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwiaHJlZiIsImxvY2F0aW9uIiwiYnV0dG9ucyIsImdldFNldHRpbmciLCJpbmNsdWRlcyIsInN0YXRlIiwic21hbGxJbWFnZUtleSIsImVuZHNXaXRoIiwic3RhcnRzV2l0aCIsInRpdGxlRWxlbWVudCIsImF1dGhvciIsImNvbWljVHlwZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXh0U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsInNtYWxsSW1hZ2VUZXh0IiwibGFiZWwiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;