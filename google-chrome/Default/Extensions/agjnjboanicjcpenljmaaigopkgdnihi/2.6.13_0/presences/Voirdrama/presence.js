var __webpack_exports__={};const presence=new Presence({clientId:"1234098856376012860"}),pathArr=document.location.pathname.split("/"),browsingTimestamp=Math.floor(Date.now()/1e3),pages={"liste-dramas":{details:"Visite la page :",state:"Listes de dramas"},"nouveaux-ajouts":{details:"Visite la page :",state:"Nouveaux dramas"}};let currentLang,strings,video={duration:0,currentTime:0,paused:!0};presence.on("iFrameData",(e=>{e?.duration&&(video=e)})),presence.on("UpdateData",(async()=>{let e={details:"Page d'accueil",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/V/Voirdrama/assets/logo.png",startTimestamp:browsingTimestamp};const t=await presence.getSetting("lang").catch((()=>"en"));switch(t!==currentLang&&(currentLang=t,strings=await presence.getStrings({browsing:"general.browsing",watchingMovie:"general.watchingMovie",watchingSeries:"general.watchingSeries",buttonViewMovie:"general.buttonViewMovie",buttonViewSeries:"general.buttonViewSeries",buttonViewPage:"general.buttonViewPage",viewPage:"general.viewPage",playing:"general.playing",searching:"general.search",searchFor:"general.searchFor",play:"general.playing",pause:"general.paused"},t)),pathArr[1]){case"drama":{const t=document.querySelector("ol > li:nth-child(2) > a");if(e.details="Visite la page du drama :",e.state=document.querySelector("div.post-title > h1")?.textContent,!isNaN(video.duration)&&t&&document.querySelector("li.active")){const[a,s]=presence.getTimestamps(video.currentTime,video.duration);e.details=t.textContent,e.state=`Episode: ${document.querySelector("li.active").textContent.split("-").pop()}`,[e.startTimestamp,e.endTimestamp]=[a,s],e.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=video.paused?strings.pause:strings.play,e.buttons=[{label:"Regarder l'épisode",url:document.location.href},{label:"Voir le drama",url:t.getAttribute("href")}],video.paused&&(delete e.startTimestamp,delete e.endTimestamp)}break}case"anime-genre":e.details="Visite la page :",e.state=`Listes drama du genre "${document.querySelector("h1")?.textContent}"`;break;default:document.location.search.startsWith("?s")?(e.details="Recherche un drama :",e.state=new URLSearchParams(document.location.search).get("s"),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):Object.keys(pages).includes(pathArr[1])&&(e={...e,...pages[pathArr[1]]})}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsUUFBVUMsU0FBU0MsU0FBU0MsU0FBU0MsTUFBTSxLQUFNQyxrQkFBb0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsS0FBT0MsTUFBUSxDQUM1RyxlQUFnQixDQUNaQyxRQUFTLG1CQUNUQyxNQUFPLG9CQUVYLGtCQUFtQixDQUNmRCxRQUFTLG1CQUNUQyxNQUFPLG9CQUdmLElBSUdDLFlBQWFDLFFBSlpDLE1BQVEsQ0FDUkMsU0FBVSxFQUNWQyxZQUFhLEVBQ2JDLFFBQVEsR0FFWnJCLFNBQVNzQixHQUFHLGNBQWVDLElBQ25CQSxHQUFNSixXQUNORCxNQUFRSyxFQUFJLElBRXBCdkIsU0FBU3NCLEdBQUcsY0FBY0UsVUFDdEIsSUFBSUMsRUFBZSxDQUNmWCxRQUFTLGlCQUNUWSxjQUFlLGlFQUNmQyxlQUFnQm5CLG1CQUVwQixNQUFNb0IsUUFBZ0I1QixTQUFTNkIsV0FBVyxRQUFRQyxPQUFNLElBQU0sT0FrQjlELE9BakJJRixJQUFZWixjQUNaQSxZQUFjWSxFQUNkWCxjQUFnQmpCLFNBQVMrQixXQUFXLENBQ2hDQyxTQUFVLG1CQUNWQyxjQUFlLHdCQUNmQyxlQUFnQix5QkFDaEJDLGdCQUFpQiwwQkFDakJDLGlCQUFrQiwyQkFDbEJDLGVBQWdCLHlCQUNoQkMsU0FBVSxtQkFDVkMsUUFBUyxrQkFDVEMsVUFBVyxpQkFDWEMsVUFBVyxvQkFDWEMsS0FBTSxrQkFDTkMsTUFBTyxrQkFDUmYsSUFFQ3pCLFFBQVEsSUFDWixJQUFLLFFBQVMsQ0FDVixNQUFNeUMsRUFBUXhDLFNBQVN5QyxjQUFjLDRCQUdyQyxHQUZBcEIsRUFBYVgsUUFBVSw0QkFDdkJXLEVBQWFWLE1BQVFYLFNBQVN5QyxjQUFjLHdCQUF3QkMsYUFDL0RDLE1BQU03QixNQUFNQyxXQUNieUIsR0FDRXhDLFNBQVN5QyxjQUFjLGFBQWMsQ0FDdkMsTUFBT2xCLEVBQWdCcUIsR0FBZ0JoRCxTQUFTaUQsY0FBYy9CLE1BQU1FLFlBQWFGLE1BQU1DLFVBQ3ZGTSxFQUFhWCxRQUFVOEIsRUFBTUUsWUFDN0JyQixFQUFhVixNQUFRLFlBQVlYLFNBQzVCeUMsY0FBYyxhQUNkQyxZQUFZdkMsTUFBTSxLQUNsQjJDLFNBQ0p6QixFQUFhRSxlQUFnQkYsRUFBYXVCLGNBQWdCLENBQ3ZEckIsRUFDQXFCLEdBRUp2QixFQUFhMEIsY0FBZ0JqQyxNQUFNRyxPQUFTLGdEQUFrRCwrQ0FDOUZJLEVBQWEyQixlQUFpQmxDLE1BQU1HLE9BQzlCSixRQUFRMEIsTUFDUjFCLFFBQVF5QixLQUNkakIsRUFBYTRCLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxxQkFDUEMsSUFBS25ELFNBQVNDLFNBQVNtRCxNQUUzQixDQUNJRixNQUFPLGdCQUNQQyxJQUFLWCxFQUFNYSxhQUFhLFVBRzVCdkMsTUFBTUcsZ0JBQ0NJLEVBQWFFLHNCQUNiRixFQUFhdUIsYUFFNUIsQ0FDQSxLQUNKLENBQ0EsSUFBSyxjQUNEdkIsRUFBYVgsUUFBVSxtQkFDdkJXLEVBQWFWLE1BQVEsMEJBQTBCWCxTQUFTeUMsY0FBYyxPQUFPQyxlQUM3RSxNQUNKLFFBQ1ExQyxTQUFTQyxTQUFTcUQsT0FBT0MsV0FBVyxPQUNwQ2xDLEVBQWFYLFFBQVUsdUJBQ3ZCVyxFQUFhVixNQUFRLElBQUk2QyxnQkFBZ0J4RCxTQUFTQyxTQUFTcUQsUUFBUUcsSUFBSSxLQUN2RXBDLEVBQWEwQixjQUFnQixrREFFeEJXLE9BQU9DLEtBQUtsRCxPQUFPbUQsU0FBUzdELFFBQVEsTUFDekNzQixFQUFlLElBQUtBLEtBQWlCWixNQUFNVixRQUFRLE1BRzNEc0IsRUFBYVgsUUFDYmQsU0FBU2lFLFlBQVl4QyxHQUVyQnpCLFNBQVNpRSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEyMzQwOTg4NTYzNzYwMTI4NjBcIixcbn0pLCBwYXRoQXJyID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLCBwYWdlcyA9IHtcbiAgICBcImxpc3RlLWRyYW1hc1wiOiB7XG4gICAgICAgIGRldGFpbHM6IFwiVmlzaXRlIGxhIHBhZ2UgOlwiLFxuICAgICAgICBzdGF0ZTogXCJMaXN0ZXMgZGUgZHJhbWFzXCIsXG4gICAgfSxcbiAgICBcIm5vdXZlYXV4LWFqb3V0c1wiOiB7XG4gICAgICAgIGRldGFpbHM6IFwiVmlzaXRlIGxhIHBhZ2UgOlwiLFxuICAgICAgICBzdGF0ZTogXCJOb3V2ZWF1eCBkcmFtYXNcIixcbiAgICB9LFxufTtcbmxldCB2aWRlbyA9IHtcbiAgICBkdXJhdGlvbjogMCxcbiAgICBjdXJyZW50VGltZTogMCxcbiAgICBwYXVzZWQ6IHRydWUsXG59LCBjdXJyZW50TGFuZywgc3RyaW5ncztcbnByZXNlbmNlLm9uKFwiaUZyYW1lRGF0YVwiLCAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhPy5kdXJhdGlvbilcbiAgICAgICAgdmlkZW8gPSBkYXRhO1xufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGRldGFpbHM6IFwiUGFnZSBkJ2FjY3VlaWxcIixcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1YvVm9pcmRyYW1hL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBjb25zdCBuZXdMYW5nID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKTtcbiAgICBpZiAobmV3TGFuZyAhPT0gY3VycmVudExhbmcpIHtcbiAgICAgICAgY3VycmVudExhbmcgPSBuZXdMYW5nO1xuICAgICAgICBzdHJpbmdzID0gYXdhaXQgcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgICAgICAgICBicm93c2luZzogXCJnZW5lcmFsLmJyb3dzaW5nXCIsXG4gICAgICAgICAgICB3YXRjaGluZ01vdmllOiBcImdlbmVyYWwud2F0Y2hpbmdNb3ZpZVwiLFxuICAgICAgICAgICAgd2F0Y2hpbmdTZXJpZXM6IFwiZ2VuZXJhbC53YXRjaGluZ1Nlcmllc1wiLFxuICAgICAgICAgICAgYnV0dG9uVmlld01vdmllOiBcImdlbmVyYWwuYnV0dG9uVmlld01vdmllXCIsXG4gICAgICAgICAgICBidXR0b25WaWV3U2VyaWVzOiBcImdlbmVyYWwuYnV0dG9uVmlld1Nlcmllc1wiLFxuICAgICAgICAgICAgYnV0dG9uVmlld1BhZ2U6IFwiZ2VuZXJhbC5idXR0b25WaWV3UGFnZVwiLFxuICAgICAgICAgICAgdmlld1BhZ2U6IFwiZ2VuZXJhbC52aWV3UGFnZVwiLFxuICAgICAgICAgICAgcGxheWluZzogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICAgICAgICAgIHNlYXJjaGluZzogXCJnZW5lcmFsLnNlYXJjaFwiLFxuICAgICAgICAgICAgc2VhcmNoRm9yOiBcImdlbmVyYWwuc2VhcmNoRm9yXCIsXG4gICAgICAgICAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgICAgICAgICAgcGF1c2U6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbiAgICAgICAgfSwgbmV3TGFuZyk7XG4gICAgfVxuICAgIHN3aXRjaCAocGF0aEFyclsxXSkge1xuICAgICAgICBjYXNlIFwiZHJhbWFcIjoge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwib2wgPiBsaTpudGgtY2hpbGQoMikgPiBhXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpc2l0ZSBsYSBwYWdlIGR1IGRyYW1hIDpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYucG9zdC10aXRsZSA+IGgxXCIpPy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmICghaXNOYU4odmlkZW8uZHVyYXRpb24pICYmXG4gICAgICAgICAgICAgICAgdGl0bGUgJiZcbiAgICAgICAgICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaS5hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbc3RhcnRUaW1lc3RhbXAsIGVuZFRpbWVzdGFtcF0gPSBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHZpZGVvLmN1cnJlbnRUaW1lLCB2aWRlby5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgRXBpc29kZTogJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImxpLmFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCItXCIpXG4gICAgICAgICAgICAgICAgICAgIC5wb3AoKX1gO1xuICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID0gW1xuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgZW5kVGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSB2aWRlby5wYXVzZWQgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHZpZGVvLnBhdXNlZFxuICAgICAgICAgICAgICAgICAgICA/IHN0cmluZ3MucGF1c2VcbiAgICAgICAgICAgICAgICAgICAgOiBzdHJpbmdzLnBsYXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlZ2FyZGVyIGwnw6lwaXNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVm9pciBsZSBkcmFtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aXRsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiYW5pbWUtZ2VucmVcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaXNpdGUgbGEgcGFnZSA6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgTGlzdGVzIGRyYW1hIGR1IGdlbnJlIFwiJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50fVwiYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zdGFydHNXaXRoKFwiP3NcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVjaGVyY2hlIHVuIGRyYW1hIDpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwic1wiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmtleXMocGFnZXMpLmluY2x1ZGVzKHBhdGhBcnJbMV0pKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YSA9IHsgLi4ucHJlc2VuY2VEYXRhLCAuLi5wYWdlc1twYXRoQXJyWzFdXSB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVNdlF5eHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGRGFrUXNTMEZCU3l4SFFVRnBRenRKUVVOeVF5eGpRVUZqTEVWQlFVVTdVVUZEWml4UFFVRlBMRVZCUVVVc2EwSkJRV3RDTzFGQlF6TkNMRXRCUVVzc1JVRkJSU3hyUWtGQmEwSTdTMEZEZWtJN1NVRkRSQ3hwUWtGQmFVSXNSVUZCUlR0UlFVTnNRaXhQUVVGUExFVkJRVVVzYTBKQlFXdENPMUZCUXpOQ0xFdEJRVXNzUlVGQlJTeHBRa0ZCYVVJN1MwRkRlRUk3UTBGRFJDeERRVUZETzBGQlJVZ3NTVUZCU1N4TFFVRkxMRWRCUVVjN1NVRkRWaXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCUTJRc1RVRkJUU3hGUVVGRkxFbEJRVWs3UTBGRFdpeEZRVU5FTEZkQlFXMUNMRVZCUTI1Q0xFOUJRV3RETEVOQlFVTTdRVUZGY0VNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGRFZpeFpRVUZaTEVWQlExb3NRMEZCUXl4SlFVRm5SU3hGUVVGRkxFVkJRVVU3U1VGRGNFVXNTVUZCU1N4SlFVRkpMRVZCUVVVc1VVRkJVVHRSUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYkVNc1EwRkJReXhEUVVORUxFTkJRVU03UVVGRlJpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4SlFVRkpMRmxCUVZrc1IwRkJhVUk3VVVGRGFFTXNUMEZCVHl4RlFVRkZMR2RDUVVGblFqdFJRVU42UWl4aFFVRmhMRVZCUTFvc1owVkJRV2RGTzFGQlEycEZMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdTMEZEYWtNc1EwRkJRenRKUVVOR0xFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJVeXhOUVVGTkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE5VVXNTVUZCU1N4UFFVRlBMRXRCUVVzc1YwRkJWeXhGUVVGRk8xRkJRelZDTEZkQlFWY3NSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRkRUlzVDBGQlR5eEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkRiRU03V1VGRFF5eFJRVUZSTEVWQlFVVXNhMEpCUVd0Q08xbEJRelZDTEdGQlFXRXNSVUZCUlN4MVFrRkJkVUk3V1VGRGRFTXNZMEZCWXl4RlFVRkZMSGRDUVVGM1FqdFpRVU40UXl4bFFVRmxMRVZCUVVVc2VVSkJRWGxDTzFsQlF6RkRMR2RDUVVGblFpeEZRVUZGTERCQ1FVRXdRanRaUVVNMVF5eGpRVUZqTEVWQlFVVXNkMEpCUVhkQ08xbEJRM2hETEZGQlFWRXNSVUZCUlN4clFrRkJhMEk3V1VGRE5VSXNUMEZCVHl4RlFVRkZMR2xDUVVGcFFqdFpRVU14UWl4VFFVRlRMRVZCUVVVc1owSkJRV2RDTzFsQlF6TkNMRk5CUVZNc1JVRkJSU3h0UWtGQmJVSTdXVUZET1VJc1NVRkJTU3hGUVVGRkxHbENRVUZwUWp0WlFVTjJRaXhMUVVGTExFVkJRVVVzWjBKQlFXZENPMU5CUTNaQ0xFVkJRMFFzVDBGQlR5eERRVU5RTEVOQlFVTTdTMEZEUmp0SlFVTkVMRkZCUVZFc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlEyNUNMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRFlpeE5RVUZOTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExEQkNRVUV3UWl4RFFVRkRMRU5CUVVNN1dVRkRha1VzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dFpRVU51UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6RkRMSEZDUVVGeFFpeERRVU55UWl4RlFVRkZMRmRCUVZjc1EwRkJRenRaUVVObUxFbEJRME1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJRenRuUWtGRGRFSXNTMEZCU3p0blFrRkRUQ3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkRjRU03WjBKQlEwUXNUVUZCVFN4RFFVRkRMR05CUVdNc1JVRkJSU3haUVVGWkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTFSQ3hMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVU5xUWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVOa0xFTkJRVU03WjBKQlJVWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETzJkQ1FVTjZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZsQlFWa3NVVUZCVVR0eFFrRkRka01zWVVGQllTeERRVUZETEZkQlFWY3NRMEZCUXp0eFFrRkRNVUlzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNN2NVSkJRM1JDTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRMVlzUTBGQlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ6dHZRa0ZETVVRc1kwRkJZenR2UWtGRFpDeFpRVUZaTzJsQ1FVTmFMRU5CUVVNN1owSkJRMFlzV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zYVVSQlFXTXNRMEZCUXl3clEwRkJXU3hEUVVGRE8yZENRVU4yUlN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTzI5Q1FVTjZReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVczdiMEpCUTJZc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUTJoQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdiMEpCUTNSQ08zZENRVU5ETEV0QlFVc3NSVUZCUlN4dlFrRkJiMEk3ZDBKQlF6TkNMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVazdjVUpCUXpOQ08yOUNRVU5FTzNkQ1FVTkRMRXRCUVVzc1JVRkJSU3hsUVVGbE8zZENRVU4wUWl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTTdjVUpCUXk5Q08ybENRVU5FTEVOQlFVTTdaMEpCUTBZc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzI5Q1FVTnFRaXhQUVVGUExGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTTdiMEpCUTI1RExFOUJRVThzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0cFFrRkRha003WVVGRFJEdFpRVU5FTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1lVRkJZVHRaUVVOcVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzFsQlF6RkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzTUVKQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZETDBJc1IwRkJSeXhEUVVGRE8xbEJRMG9zVFVGQlRUdFJRVU5RTzFsQlEwTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1owSkJRemxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdaMEpCUXpsRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUTNKRkxFZEJRVWNzUTBGRFNDeERRVUZETzJkQ1FVTkdMRmxCUVZrc1EwRkJReXhoUVVGaExHMUVRVUZuUWl4RFFVRkRPMkZCUXpORE8ybENRVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5xUkN4WlFVRlpMRWRCUVVjc1JVRkJSU3hIUVVGSExGbEJRVmtzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFsQlF6RkVMRTFCUVUwN1MwRkRVRHRKUVVWRUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJwYXRoQXJyIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwYWdlcyIsImRldGFpbHMiLCJzdGF0ZSIsImN1cnJlbnRMYW5nIiwic3RyaW5ncyIsInZpZGVvIiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsInBhdXNlZCIsIm9uIiwiZGF0YSIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwibmV3TGFuZyIsImdldFNldHRpbmciLCJjYXRjaCIsImdldFN0cmluZ3MiLCJicm93c2luZyIsIndhdGNoaW5nTW92aWUiLCJ3YXRjaGluZ1NlcmllcyIsImJ1dHRvblZpZXdNb3ZpZSIsImJ1dHRvblZpZXdTZXJpZXMiLCJidXR0b25WaWV3UGFnZSIsInZpZXdQYWdlIiwicGxheWluZyIsInNlYXJjaGluZyIsInNlYXJjaEZvciIsInBsYXkiLCJwYXVzZSIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiaXNOYU4iLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwicG9wIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsInNlYXJjaCIsInN0YXJ0c1dpdGgiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;