var __webpack_exports__={};const presence=new Presence({clientId:"939893158777618432"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const[e,t]=await Promise.all([presence.getSetting("time"),presence.getSetting("buttons")]),r={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/0-9/2048Verse/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:n,href:o}=document.location,s=`${document.querySelectorAll(".grid-row").length.toString()}x${(document.querySelectorAll(".grid-cell").length/document.querySelectorAll(".grid-row").length).toString()}`;if("leaderboard"===n.split("/")[1]){let e;switch(document.querySelector("#marker").style.left){case"-280px":e="All Time";break;case"-157px":e="Today";break;case"-44px":e="Week"}r.details="Viewing leaderboard",r.state=`${document.querySelector("#variant").value} ${e}`}else"user"===n.split("/")[1]?(r.details="Viewing profile",r.state=document.querySelector("h1.title").firstChild.textContent,r.buttons=[{label:"View Profile",url:o}]):"replay"===n.split("/")[1]?(r.details=`Watching replay ${s}`,r.state=`Score ${document.querySelector(".score-container")?.firstChild?.textContent}`):"p"===n.split("/")[1]?(r.details=`Practising ${s}`,r.state=`Score ${document.querySelector(".score-container")?.firstChild?.textContent} Best ${document.querySelector(".best-container")?.textContent}`):"lessons"===n.split("/")[1]?r.details="Browsing lessons":document.querySelectorAll(".grid-row").length&&(r.details=`Playing ${s}`,r.state=`Score ${document.querySelector(".score-container")?.firstChild?.textContent} Best ${document.querySelector(".best-container")?.textContent}`);e||delete r.startTimestamp,!t&&r.buttons&&delete r.buttons,presence.setActivity(r)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU9DLEVBQU1DLFNBQWlCQyxRQUFRQyxJQUFJLENBQ3RDYixTQUFTYyxXQUFXLFFBQ3BCZCxTQUFTYyxXQUFXLGFBQ3BCQyxFQUFlLENBQ2ZDLGNBQWUsbUVBQ2ZDLGVBQWdCZCxvQkFDakIsU0FBRWUsRUFBUSxLQUFFQyxHQUFTQyxTQUFTQyxTQUFVQyxFQUFXLEdBQUdGLFNBQVNHLGlCQUFpQixhQUFhQyxPQUFPQyxlQUFlTCxTQUFTRyxpQkFBaUIsY0FBY0MsT0FDMUpKLFNBQVNHLGlCQUFpQixhQUFhQyxRQUFRQyxhQUNuRCxHQUErQixnQkFBM0JQLEVBQVNRLE1BQU0sS0FBSyxHQUFzQixDQUMxQyxJQUFJQyxFQUNKLE9BQVFQLFNBQVNRLGNBQWMsV0FBV0MsTUFBTUMsTUFDNUMsSUFBSyxTQUNESCxFQUFrQixXQUNsQixNQUVKLElBQUssU0FDREEsRUFBa0IsUUFDbEIsTUFFSixJQUFLLFFBQ0RBLEVBQWtCLE9BSTFCWixFQUFhZ0IsUUFBVSxzQkFDdkJoQixFQUFhaUIsTUFBUSxHQUFHWixTQUFTUSxjQUFjLFlBQVlLLFNBQVNOLEdBQ3hFLEtBQ29DLFNBQTNCVCxFQUFTUSxNQUFNLEtBQUssSUFDekJYLEVBQWFnQixRQUFVLGtCQUN2QmhCLEVBQWFpQixNQUNUWixTQUFTUSxjQUFjLFlBQVlNLFdBQVdDLFlBQ2xEcEIsRUFBYUosUUFBVSxDQUFDLENBQUV5QixNQUFPLGVBQWdCQyxJQUFLbEIsS0FFdEIsV0FBM0JELEVBQVNRLE1BQU0sS0FBSyxJQUN6QlgsRUFBYWdCLFFBQVUsbUJBQW1CVCxJQUMxQ1AsRUFBYWlCLE1BQVEsU0FBU1osU0FBU1EsY0FBYyxxQkFBcUJNLFlBQVlDLGVBRXRELE1BQTNCakIsRUFBU1EsTUFBTSxLQUFLLElBQ3pCWCxFQUFhZ0IsUUFBVSxjQUFjVCxJQUNyQ1AsRUFBYWlCLE1BQVEsU0FBU1osU0FBU1EsY0FBYyxxQkFBcUJNLFlBQVlDLG9CQUFvQmYsU0FBU1EsY0FBYyxvQkFBb0JPLGVBRXJILFlBQTNCakIsRUFBU1EsTUFBTSxLQUFLLEdBQ3pCWCxFQUFhZ0IsUUFBVSxtQkFDbEJYLFNBQVNHLGlCQUFpQixhQUFhQyxTQUM1Q1QsRUFBYWdCLFFBQVUsV0FBV1QsSUFDbENQLEVBQWFpQixNQUFRLFNBQVNaLFNBQVNRLGNBQWMscUJBQXFCTSxZQUFZQyxvQkFBb0JmLFNBQVNRLGNBQWMsb0JBQW9CTyxlQUVwSnpCLFVBQ01LLEVBQWFFLGdCQUNuQk4sR0FBV0ksRUFBYUosZ0JBQ2xCSSxFQUFhSixRQUN4QlgsU0FBU3NDLFlBQVl2QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjkzOTg5MzE1ODc3NzYxODQzMlwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFt0aW1lLCBidXR0b25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInRpbWVcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgIF0pLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy8wLTkvMjA0OFZlcnNlL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gZG9jdW1lbnQubG9jYXRpb24sIGdyaWRTaXplID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLXJvd1wiKS5sZW5ndGgudG9TdHJpbmcoKX14JHsoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWNlbGxcIikubGVuZ3RoIC9cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLXJvd1wiKS5sZW5ndGgpLnRvU3RyaW5nKCl9YDtcbiAgICBpZiAocGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PSBcImxlYWRlcmJvYXJkXCIpIHtcbiAgICAgICAgbGV0IGxlYWRlcmJvYXJkVHlwZTtcbiAgICAgICAgc3dpdGNoIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcmtlclwiKS5zdHlsZS5sZWZ0KSB7XG4gICAgICAgICAgICBjYXNlIFwiLTI4MHB4XCI6IHtcbiAgICAgICAgICAgICAgICBsZWFkZXJib2FyZFR5cGUgPSBcIkFsbCBUaW1lXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiLTE1N3B4XCI6IHtcbiAgICAgICAgICAgICAgICBsZWFkZXJib2FyZFR5cGUgPSBcIlRvZGF5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiLTQ0cHhcIjoge1xuICAgICAgICAgICAgICAgIGxlYWRlcmJvYXJkVHlwZSA9IFwiV2Vla1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGxlYWRlcmJvYXJkXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmFyaWFudFwiKS52YWx1ZX0gJHtsZWFkZXJib2FyZFR5cGV9YDtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PSBcInVzZXJcIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBwcm9maWxlXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEudGl0bGVcIikuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IFByb2ZpbGVcIiwgdXJsOiBocmVmIH1dO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zcGxpdChcIi9cIilbMV0gPT09IFwicmVwbGF5XCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgV2F0Y2hpbmcgcmVwbGF5ICR7Z3JpZFNpemV9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFNjb3JlICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS1jb250YWluZXJcIik/LmZpcnN0Q2hpbGQ/LnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSA9PT0gXCJwXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgUHJhY3Rpc2luZyAke2dyaWRTaXplfWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBTY29yZSAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtY29udGFpbmVyXCIpPy5maXJzdENoaWxkPy50ZXh0Q29udGVudH0gQmVzdCAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVzdC1jb250YWluZXJcIik/LnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSA9PT0gXCJsZXNzb25zXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBsZXNzb25zXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLXJvd1wiKS5sZW5ndGgpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgUGxheWluZyAke2dyaWRTaXplfWA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBTY29yZSAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtY29udGFpbmVyXCIpPy5maXJzdENoaWxkPy50ZXh0Q29udGVudH0gQmVzdCAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVzdC1jb250YWluZXJcIik/LnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGlmICghdGltZSlcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICBpZiAoIWJ1dHRvbnMgJiYgcHJlc2VuY2VEYXRhLmJ1dHRvbnMpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVTF1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU40UXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxFMUJRVTBzUTBGQlF6dFJRVU53UXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGTkJRVk1zUTBGQlF6dExRVU4yUXl4RFFVRkRMRVZCUTBZc1dVRkJXU3hIUVVGcFFqdFJRVU0xUWl4aFFVRmhMRzlGUVVGaE8xRkJRekZDTEdOQlFXTXNSVUZCUlN4cFFrRkJhVUk3UzBGRGFrTXNSVUZEUkN4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVTjBReXhSUVVGUkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRM3BGTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4TlFVRk5PMUZCUXpsRExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlF6ZERMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVZvUWl4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1lVRkJZU3hGUVVGRk8xRkJRemRETEVsQlFVa3NaVUZCWlN4RFFVRkRPMUZCUTNCQ0xGRkJRVkVzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYVVJc1UwRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTnlSU3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTmtMR1ZCUVdVc1IwRkJSeXhWUVVGVkxFTkJRVU03WjBKQlF6ZENMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTJRc1pVRkJaU3hIUVVGSExFOUJRVThzUTBGQlF6dG5Ra0ZETVVJc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRZaXhsUVVGbExFZEJRVWNzVFVGQlRTeERRVUZETzJkQ1FVTjZRaXhOUVVGTk8yRkJRMDQ3VTBGRFJEdFJRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdVVUZETjBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGdlFpeFZRVUZWTEVOQlFVTXNRMEZCUXl4TFFVTjJSQ3hKUVVGSkxHVkJRV1VzUlVGQlJTeERRVUZETzB0QlEzUkNPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFMUJRVTBzUlVGQlJUdFJRVU0zUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTzFsQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVNelJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzWTBGQll5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8wdEJRemxFTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRSUVVNdlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTnlSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzVjBGRGVrUXNSVUZCUlN4RFFVRkRPMHRCUTBnN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlF6RkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWTBGQll5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTm9SQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzVjBGRGVrUXNVMEZCVXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxFTkJRVU03UzBGRGJFVTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVenRSUVVNNVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzFOQlEzUkRMRWxCUVVrc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJUdFJRVU4yUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGTjBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGZEJRM3BFTEZOQlFWTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hEUVVGRE8wdEJRMnhGTzBsQlJVUXNTVUZCU1N4RFFVRkRMRWxCUVVrN1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTTdTVUZGT1VNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRTlCUVU4c1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVVZzUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInRpbWUiLCJidXR0b25zIiwiUHJvbWlzZSIsImFsbCIsImdldFNldHRpbmciLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImhyZWYiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiZ3JpZFNpemUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwidG9TdHJpbmciLCJzcGxpdCIsImxlYWRlcmJvYXJkVHlwZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImxlZnQiLCJkZXRhaWxzIiwic3RhdGUiLCJ2YWx1ZSIsImZpcnN0Q2hpbGQiLCJ0ZXh0Q29udGVudCIsImxhYmVsIiwidXJsIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;