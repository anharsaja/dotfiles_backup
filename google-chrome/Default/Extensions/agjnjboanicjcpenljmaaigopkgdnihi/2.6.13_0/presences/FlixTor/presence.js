var __webpack_exports__={};const presence=new Presence({clientId:"1001112348192423946"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"});let lastPlaybackState,playback,browsingTimestamp=Math.floor(Date.now()/1e3);lastPlaybackState!==playback&&(lastPlaybackState=playback,browsingTimestamp=Math.floor(Date.now()/1e3)),presence.on("UpdateData",(async()=>{const e={details:"Unknown page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/F/FlixTor/assets/logo.png"},t=document.querySelector("#player > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video");if(playback=!!t,playback||(e.details="Browsing...",e.startTimestamp=browsingTimestamp,presence.setActivity(e)),t&&!isNaN(t.duration)){const a=document.querySelector("div.watch-header.h4.mb-0.font-weight-normal.link.hidden-sm-down"),s=document.querySelector("#playercontainer span.outPes"),n=document.querySelector("#playercontainer span.outPep");e.largeImageKey=document.querySelector('meta[property="og:image"]').getAttribute("content").replace("https:https:","https:"),e.smallImageKey=t.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=t.paused?(await strings).pause:(await strings).play,[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(t.currentTime),Math.floor(t.duration)),s&&n?(e.details=a?a.textContent:"Title not found...",e.state=`Season ${s.textContent} Episode ${n.textContent}`,e.buttons=[{label:e.details.length>=30?"View Now":e.details,url:document.location.href.split("/season/")[0]},{label:e.state,url:document.location.href}]):!s&&n?(e.details=a?a.textContent:"Title not found...",e.state=`Episode ${n.textContent}`,e.buttons=[{label:e.details.length>=30?"View Now":e.details,url:document.location.href.split("/episode/")[0]},{label:e.state,url:document.location.href}]):(e.details="Watching",e.state=a?a.textContent:"Title not found...",e.buttons=[{label:e.state.length>=30?"Watch Now":e.state,url:document.location.href}]),t.paused&&(delete e.startTimestamp,delete e.endTimestamp),a&&presence.setActivity(e,!t.paused)}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxtQkFFWCxJQUFJQyxrQkFBbUJDLFNBQVVDLGtCQUFvQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUN6RU4sb0JBQXNCQyxXQUN0QkQsa0JBQW9CQyxTQUNwQkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLE1BRWhEYixTQUFTYyxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLFFBQVMsZUFDVEMsY0FBZSxnRUFDaEJDLEVBQVFDLFNBQVNDLGNBQWMscUVBT2xDLEdBTkFiLFdBQWFXLEVBQ1JYLFdBQ0RRLEVBQWFDLFFBQVUsY0FDdkJELEVBQWFNLGVBQWlCYixrQkFDOUJULFNBQVN1QixZQUFZUCxJQUVyQkcsSUFBVUssTUFBTUwsRUFBTU0sVUFBVyxDQUNqQyxNQUFNQyxFQUFhTixTQUFTQyxjQUFjLG1FQUFvRU0sRUFBU1AsU0FBU0MsY0FBYyxnQ0FBaUNPLEVBQVVSLFNBQVNDLGNBQWMsZ0NBQ2hOTCxFQUFhRSxjQUFnQkUsU0FDeEJDLGNBQWMsNkJBQ2RRLGFBQWEsV0FDYkMsUUFBUSxlQUFnQixVQUM3QmQsRUFBYWUsY0FBZ0JaLEVBQU1hLE9BQVMsZ0RBQWtELCtDQUM5RmhCLEVBQWFpQixlQUFpQmQsRUFBTWEsY0FDdkI3QixTQUFTRyxhQUNUSCxTQUFTRSxNQUNyQlcsRUFBYU0sZUFBZ0JOLEVBQWFrQixjQUN2Q2xDLFNBQVNtQyxjQUFjekIsS0FBS0MsTUFBTVEsRUFBTWlCLGFBQWMxQixLQUFLQyxNQUFNUSxFQUFNTSxXQUN2RUUsR0FBVUMsR0FDVlosRUFBYUMsUUFBVVMsRUFDakJBLEVBQVdXLFlBQ1gscUJBQ05yQixFQUFhc0IsTUFBUSxVQUFVWCxFQUFPVSx1QkFBdUJULEVBQVFTLGNBQ3JFckIsRUFBYXVCLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBT3hCLEVBQWFDLFFBQVF3QixRQUFVLEdBQ2hDLFdBQ0F6QixFQUFhQyxRQUNuQnlCLElBQUt0QixTQUFTdUIsU0FBU0MsS0FBS0MsTUFBTSxZQUFZLElBRWxELENBQ0lMLE1BQU94QixFQUFhc0IsTUFDcEJJLElBQUt0QixTQUFTdUIsU0FBU0MsU0FJekJqQixHQUFVQyxHQUNoQlosRUFBYUMsUUFBVVMsRUFDakJBLEVBQVdXLFlBQ1gscUJBQ05yQixFQUFhc0IsTUFBUSxXQUFXVixFQUFRUyxjQUN4Q3JCLEVBQWF1QixRQUFVLENBQ25CLENBQ0lDLE1BQU94QixFQUFhQyxRQUFRd0IsUUFBVSxHQUNoQyxXQUNBekIsRUFBYUMsUUFDbkJ5QixJQUFLdEIsU0FBU3VCLFNBQVNDLEtBQUtDLE1BQU0sYUFBYSxJQUVuRCxDQUNJTCxNQUFPeEIsRUFBYXNCLE1BQ3BCSSxJQUFLdEIsU0FBU3VCLFNBQVNDLFNBSy9CNUIsRUFBYUMsUUFBVSxXQUN2QkQsRUFBYXNCLE1BQVFaLEVBQ2ZBLEVBQVdXLFlBQ1gscUJBQ05yQixFQUFhdUIsUUFBVSxDQUNuQixDQUNJQyxNQUFPeEIsRUFBYXNCLE1BQU1HLFFBQVUsR0FBSyxZQUFjekIsRUFBYXNCLE1BQ3BFSSxJQUFLdEIsU0FBU3VCLFNBQVNDLFFBSS9CekIsRUFBTWEsZ0JBQ0NoQixFQUFhTSxzQkFDYk4sRUFBYWtCLGNBRXBCUixHQUNBMUIsU0FBU3VCLFlBQVlQLEdBQWVHLEVBQU1hLE9BQ2xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEwMDExMTIzNDgxOTI0MjM5NDZcIixcbn0pLCBzdHJpbmdzID0gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICBwYXVzZTogXCJnZW5lcmFsLnBhdXNlZFwiLFxufSk7XG5sZXQgbGFzdFBsYXliYWNrU3RhdGUsIHBsYXliYWNrLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuaWYgKGxhc3RQbGF5YmFja1N0YXRlICE9PSBwbGF5YmFjaykge1xuICAgIGxhc3RQbGF5YmFja1N0YXRlID0gcGxheWJhY2s7XG4gICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbn1cbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBkZXRhaWxzOiBcIlVua25vd24gcGFnZVwiLFxuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRi9GbGl4VG9yL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIH0sIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIgPiBkaXYuanctd3JhcHBlci5qdy1yZXNldCA+IGRpdi5qdy1tZWRpYS5qdy1yZXNldCA+IHZpZGVvXCIpO1xuICAgIHBsYXliYWNrID0gISF2aWRlbztcbiAgICBpZiAoIXBsYXliYWNrKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZy4uLlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9XG4gICAgaWYgKHZpZGVvICYmICFpc05hTih2aWRlby5kdXJhdGlvbikpIHtcbiAgICAgICAgY29uc3QgdmlkZW9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYud2F0Y2gtaGVhZGVyLmg0Lm1iLTAuZm9udC13ZWlnaHQtbm9ybWFsLmxpbmsuaGlkZGVuLXNtLWRvd25cIiksIHNlYXNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyY29udGFpbmVyIHNwYW4ub3V0UGVzXCIpLCBlcGlzb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJjb250YWluZXIgc3Bhbi5vdXRQZXBcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKVxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiaHR0cHM6aHR0cHM6XCIsIFwiaHR0cHM6XCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHZpZGVvLnBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHZpZGVvLnBhdXNlZFxuICAgICAgICAgICAgPyAoYXdhaXQgc3RyaW5ncykucGF1c2VcbiAgICAgICAgICAgIDogKGF3YWl0IHN0cmluZ3MpLnBsYXk7XG4gICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMoTWF0aC5mbG9vcih2aWRlby5jdXJyZW50VGltZSksIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24pKTtcbiAgICAgICAgaWYgKHNlYXNvbiAmJiBlcGlzb2RlKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHZpZGVvVGl0bGVcbiAgICAgICAgICAgICAgICA/IHZpZGVvVGl0bGUudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICA6IFwiVGl0bGUgbm90IGZvdW5kLi4uXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgU2Vhc29uICR7c2Vhc29uLnRleHRDb250ZW50fSBFcGlzb2RlICR7ZXBpc29kZS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2VuY2VEYXRhLmRldGFpbHMubGVuZ3RoID49IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiVmlldyBOb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmVzZW5jZURhdGEuZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiL3NlYXNvbi9cIilbMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBwcmVzZW5jZURhdGEuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghc2Vhc29uICYmIGVwaXNvZGUpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdmlkZW9UaXRsZVxuICAgICAgICAgICAgICAgID8gdmlkZW9UaXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIDogXCJUaXRsZSBub3QgZm91bmQuLi5cIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBFcGlzb2RlICR7ZXBpc29kZS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2VuY2VEYXRhLmRldGFpbHMubGVuZ3RoID49IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiVmlldyBOb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmVzZW5jZURhdGEuZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiL2VwaXNvZGUvXCIpWzBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2VuY2VEYXRhLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2F0Y2hpbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHZpZGVvVGl0bGVcbiAgICAgICAgICAgICAgICA/IHZpZGVvVGl0bGUudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICA6IFwiVGl0bGUgbm90IGZvdW5kLi4uXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBwcmVzZW5jZURhdGEuc3RhdGUubGVuZ3RoID49IDMwID8gXCJXYXRjaCBOb3dcIiA6IHByZXNlbmNlRGF0YS5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlkZW9UaXRsZSlcbiAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSwgIXZpZGVvLnBhdXNlZCk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3UTBGRGRrSXNRMEZCUXl4RFFVRkRPMEZCUlVvc1NVRkJTU3hwUWtGQmFVSXNSVUZEY0VJc1VVRkJhVUlzUlVGRGFrSXNhVUpCUVdsQ0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZGYmtRc1NVRkJTU3hwUWtGQmFVSXNTMEZCU3l4UlFVRlJMRVZCUVVVN1NVRkRia01zYVVKQlFXbENMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRemRDTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzBOQlEyeEVPMEZCUlVRc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExFOUJRVThzUlVGQlJTeGpRVUZqTzFGQlEzWkNMR0ZCUVdFc1JVRkRXaXc0UkVGQk9FUTdTMEZETDBRc1JVRkRSQ3hMUVVGTExFZEJRWEZDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXk5RExHMUZRVUZ0UlN4RFFVTnVSU3hEUVVGRE8wbEJSVWdzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkZia0lzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzFGQlEzSkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkZhRVFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRMUVVOdVF6dEpRVVZFTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTndReXhOUVVGTkxGVkJRVlVzUjBGQlowSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRjRVFzYVVWQlFXbEZMRU5CUTJwRkxFVkJRMFFzVFVGQlRTeEhRVUZuUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNelF5dzRRa0ZCT0VJc1EwRkRPVUlzUlVGRFJDeFBRVUZQTEVkQlFXZENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRelZETERoQ1FVRTRRaXhEUVVNNVFpeERRVUZETzFGQlEwZ3NXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhSUVVGUk8yRkJRMjVETEdGQlFXRXNRMEZCYTBJc01rSkJRVEpDTEVOQlFVTTdZVUZETTBRc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF6dGhRVU4yUWl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlJYQkRMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMR2xFUVVGakxFTkJRVU1zSzBOQlFWa3NRMEZCUXp0UlFVTjJSU3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5PMWxCUTNwRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTenRaUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFJRVU40UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0WlFVTjJSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZETjBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUXpGQ0xFTkJRVU03VVVGRlNDeEpRVUZKTEUxQlFVMHNTVUZCU1N4UFFVRlBMRVZCUVVVN1dVRkRkRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZPMmRDUVVOb1F5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjN1owSkJRM2hDTEVOQlFVTXNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dFpRVU40UWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVlVzVFVGQlRTeERRVUZETEZkQlFWY3NXVUZCV1N4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRGJrWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenRuUWtGRGRFSTdiMEpCUTBNc1MwRkJTeXhGUVVOS0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVN2QwSkJRMmhETEVOQlFVTXNRMEZCUXl4VlFVRlZPM2RDUVVOYUxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHp0dlFrRkRlRUlzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRMmhFTzJkQ1FVTkVPMjlDUVVORExFdEJRVXNzUlVGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3p0dlFrRkRla0lzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTVHRwUWtGRE0wSTdZVUZEUkN4RFFVRkRPMU5CUTBZN1lVRkJUU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTTVRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVTdaMEpCUTJoRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnp0blFrRkRlRUlzUTBGQlF5eERRVUZETEc5Q1FVRnZRaXhEUVVGRE8xbEJRM2hDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1YwRkJWeXhQUVVGUExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdXVUZEZEVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJN2IwSkJRME1zUzBGQlN5eEZRVU5LTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVU3ZDBKQlEyaERMRU5CUVVNc1EwRkJReXhWUVVGVk8zZENRVU5hTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUenR2UWtGRGVFSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEycEVPMmRDUVVORU8yOUNRVU5ETEV0QlFVc3NSVUZCUlN4WlFVRlpMRU5CUVVNc1MwRkJTenR2UWtGRGVrSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNUdHBRa0ZETTBJN1lVRkRSQ3hEUVVGRE8xTkJRMFk3WVVGQlRUdFpRVU5PTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xbEJRMnhETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJWVHRuUWtGRE9VSXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWE8yZENRVU40UWl4RFFVRkRMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTTdXVUZEZUVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJN2IwSkJRME1zUzBGQlN5eEZRVU5LTEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN6dHZRa0ZEYmtVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1R0cFFrRkRNMEk3WVVGRFJDeERRVUZETzFOQlEwWTdVVUZGUkN4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFrSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xbEJRMjVETEU5QlFVOHNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJRenRUUVVOcVF6dFJRVU5FTEVsQlFVa3NWVUZCVlR0WlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wdEJRMnhGTzBGQlEwWXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwic3RyaW5ncyIsImdldFN0cmluZ3MiLCJwbGF5IiwicGF1c2UiLCJsYXN0UGxheWJhY2tTdGF0ZSIsInBsYXliYWNrIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImRldGFpbHMiLCJsYXJnZUltYWdlS2V5IiwidmlkZW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydFRpbWVzdGFtcCIsInNldEFjdGl2aXR5IiwiaXNOYU4iLCJkdXJhdGlvbiIsInZpZGVvVGl0bGUiLCJzZWFzb24iLCJlcGlzb2RlIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInNtYWxsSW1hZ2VLZXkiLCJwYXVzZWQiLCJzbWFsbEltYWdlVGV4dCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJjdXJyZW50VGltZSIsInRleHRDb250ZW50Iiwic3RhdGUiLCJidXR0b25zIiwibGFiZWwiLCJsZW5ndGgiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=
undefined;