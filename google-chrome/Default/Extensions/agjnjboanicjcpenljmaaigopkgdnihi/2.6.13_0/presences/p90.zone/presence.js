var __webpack_exports__={};const presence=new Presence({clientId:"633714339999645737"});function getTimestamps(e,t){const s=Math.floor(Date.now()/1e3);return[s,Math.floor(s-e+t)]}presence.on("UpdateData",(async()=>{const e=document.querySelector("video"),t=await presence.getStrings({playing:"general.playing",paused:"general.paused",browsing:"general.browsing"});if(e){const s=getTimestamps(e.currentTime,e.duration),a={state:document.querySelector("body > div.menu.main > div > h2").textContent,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/p90.zone/assets/logo.png",startTimestamp:s[0],endTimestamp:s[1],smallImageKey:e.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",smallImageText:e.paused?(await t).paused:(await t).playing};e.paused&&(delete a.startTimestamp,delete a.endTimestamp),presence.setActivity(a)}else presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxTQUFTQyxjQUFjQyxFQUFNQyxHQUN6QixNQUFNQyxFQUFZQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQzFDLE1BQU8sQ0FBQ0osRUFBV0MsS0FBS0MsTUFBTUYsRUFBWUYsRUFBT0MsR0FDckQsQ0FDQUwsU0FBU1csR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFRQyxTQUFTQyxjQUFjLFNBQVVDLFFBQWdCaEIsU0FBU2lCLFdBQVcsQ0FDL0VDLFFBQVMsa0JBQ1RDLE9BQVEsaUJBQ1JDLFNBQVUscUJBRWQsR0FBSVAsRUFBTyxDQUNQLE1BQU1RLEVBQWFsQixjQUFjVSxFQUFNUyxZQUFhVCxFQUFNVSxVQUFXQyxFQUFlLENBQ2hGQyxNQUFPWCxTQUFTQyxjQUFjLG1DQUN6QlcsWUFDTEMsY0FBZSxnRUFDZkMsZUFBZ0JQLEVBQVcsR0FDM0JRLGFBQWNSLEVBQVcsR0FDekJTLGNBQWVqQixFQUFNTSxPQUFTLGdEQUFrRCwrQ0FDaEZZLGVBQWdCbEIsRUFBTU0sY0FDVEgsR0FBU0csY0FDVEgsR0FBU0UsU0FFdEJMLEVBQU1NLGdCQUNDSyxFQUFhSSxzQkFDYkosRUFBYUssY0FFeEI3QixTQUFTZ0MsWUFBWVIsRUFDekIsTUFFSXhCLFNBQVNnQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYzMzcxNDMzOTk5OTY0NTczN1wiLFxufSk7XG5mdW5jdGlvbiBnZXRUaW1lc3RhbXBzKGN1cnIsIGR1cmEpIHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICByZXR1cm4gW3N0YXJ0VGltZSwgTWF0aC5mbG9vcihzdGFydFRpbWUgLSBjdXJyICsgZHVyYSldO1xufVxucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKSwgc3RyaW5ncyA9IGF3YWl0IHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgICAgICBwbGF5aW5nOiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgICAgICBwYXVzZWQ6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbiAgICAgICAgYnJvd3Npbmc6IFwiZ2VuZXJhbC5icm93c2luZ1wiLFxuICAgIH0pO1xuICAgIGlmICh2aWRlbykge1xuICAgICAgICBjb25zdCB0aW1lc3RhbXBzID0gZ2V0VGltZXN0YW1wcyh2aWRlby5jdXJyZW50VGltZSwgdmlkZW8uZHVyYXRpb24pLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgICAgICBzdGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYubWVudS5tYWluID4gZGl2ID4gaDJcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUC9wOTAuem9uZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiB0aW1lc3RhbXBzWzBdLFxuICAgICAgICAgICAgZW5kVGltZXN0YW1wOiB0aW1lc3RhbXBzWzFdLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogdmlkZW8ucGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiB2aWRlby5wYXVzZWRcbiAgICAgICAgICAgICAgICA/IChhd2FpdCBzdHJpbmdzKS5wYXVzZWRcbiAgICAgICAgICAgICAgICA6IChhd2FpdCBzdHJpbmdzKS5wbGF5aW5nLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEZOQlFWTXNZVUZCWVN4RFFVRkRMRWxCUVZrc1JVRkJSU3hKUVVGWk8wbEJRMmhFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMmhFTEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVrUXNRMEZCUXp0QlFVVkVMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRelZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGJrTXNUMEZCVHl4RlFVRkZMR2xDUVVGcFFqdFJRVU14UWl4TlFVRk5MRVZCUVVVc1owSkJRV2RDTzFGQlEzaENMRkZCUVZFc1JVRkJSU3hyUWtGQmEwSTdTMEZETlVJc1EwRkJReXhEUVVGRE8wbEJSVW9zU1VGQlNTeExRVUZMTEVWQlFVVTdVVUZEVml4TlFVRk5MRlZCUVZVc1IwRkJSeXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRMnhGTEZsQlFWa3NSMEZCYVVJN1dVRkROVUlzUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2FVTkJRV2xETEVOQlFVTTdhVUpCUXpsRUxGZEJRVmM3V1VGRFlpeGhRVUZoTEVWQlExb3NLMFJCUVN0RU8xbEJRMmhGTEdOQlFXTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemRDTEZsQlFWa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEdGQlFXRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zYVVSQlFXTXNRMEZCUXl3clEwRkJXVHRaUVVONFJDeGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwN1owSkJRek5DTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRUdG5Ra0ZEZUVJc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBPMU5CUXpGQ0xFTkJRVU03VVVGRlNDeEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRha0lzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTI1RExFOUJRVThzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0VFFVTnFRenRSUVVWRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1MwRkRia003TzFGQlFVMHNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJReTlDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImdldFRpbWVzdGFtcHMiLCJjdXJyIiwiZHVyYSIsInN0YXJ0VGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwidmlkZW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXlpbmciLCJwYXVzZWQiLCJicm93c2luZyIsInRpbWVzdGFtcHMiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicHJlc2VuY2VEYXRhIiwic3RhdGUiLCJ0ZXh0Q29udGVudCIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImVuZFRpbWVzdGFtcCIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;