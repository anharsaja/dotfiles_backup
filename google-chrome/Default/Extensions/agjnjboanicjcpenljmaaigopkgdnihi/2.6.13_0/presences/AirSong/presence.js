var __webpack_exports__={};const presence=new Presence({clientId:"936448491373359105"});presence.on("UpdateData",(async()=>{if(document.querySelector("a.as-logo")){const[e,t,a]=await Promise.all([presence.getSetting("songDetail"),presence.getSetting("songState"),presence.getSetting("time")]),r=document.querySelector("#as-player-title").textContent,s=document.querySelector("#as-player-artist").textContent.split(" - ",1)[0],[,n]=document.querySelector("#as-player-artist").textContent.split(/(?: - )(.+)/),c=document.querySelector("div.mejs-horizontal-volume-current").style.width.replace("px",""),l=presence.timestampFromFormat(document.querySelector("span.mejs-currenttime").textContent),o={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AirSong/assets/logo.png"},p=document.querySelector("#as-player-play").className.includes("fa-play");o.details=e.replace("%title%",r).replace("%artist%",s).replace("%album%",n),o.state=t.replace("%title%",r).replace("%artist%",s).replace("%album%",n),p||1!==a?p||2!==a||(o.startTimestamp=Date.now()/1e3-l):[o.startTimestamp,o.endTimestamp]=presence.getTimestamps(presence.timestampFromFormat(document.querySelector("span.mejs-duration").textContent),l),o.smallImageKey=p?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",o.smallImageText=p?"Paused":`Playing at ${2*c}%`,presence.setActivity(o)}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZEYsU0FBU0csR0FBRyxjQUFjQyxVQUN0QixHQUFJQyxTQUFTQyxjQUFjLGFBQWMsQ0FDckMsTUFBT0MsRUFBWUMsRUFBV0MsU0FBY0MsUUFBUUMsSUFBSSxDQUNwRFgsU0FBU1ksV0FBVyxjQUNwQlosU0FBU1ksV0FBVyxhQUNwQlosU0FBU1ksV0FBVyxVQUNwQkMsRUFBUVIsU0FBU0MsY0FBYyxvQkFBb0JRLFlBQWFDLEVBQVNWLFNBQ3hFQyxjQUFjLHFCQUNkUSxZQUFZRSxNQUFNLE1BQU8sR0FBRyxJQUFLLENBQUVDLEdBQVNaLFNBQzVDQyxjQUFjLHFCQUNkUSxZQUFZRSxNQUFNLGVBQWdCRSxFQUFTYixTQUMzQ0MsY0FBYyxzQ0FDZGEsTUFBTUMsTUFBTUMsUUFBUSxLQUFNLElBQUtDLEVBQWN0QixTQUFTdUIsb0JBQW9CbEIsU0FBU0MsY0FBYyx5QkFDakdRLGFBQWNVLEVBQWUsQ0FDOUJDLGNBQWUsZ0VBQ2hCQyxFQUFTckIsU0FDUEMsY0FBYyxtQkFDZHFCLFVBQVVDLFNBQVMsV0FDeEJKLEVBQWFLLFFBQVV0QixFQUNsQmMsUUFBUSxVQUFXUixHQUNuQlEsUUFBUSxXQUFZTixHQUNwQk0sUUFBUSxVQUFXSixHQUN4Qk8sRUFBYU0sTUFBUXRCLEVBQ2hCYSxRQUFRLFVBQVdSLEdBQ25CUSxRQUFRLFdBQVlOLEdBQ3BCTSxRQUFRLFVBQVdKLEdBQ25CUyxHQUFtQixJQUFUakIsRUFLTGlCLEdBQW1CLElBQVRqQixJQUNoQmUsRUFBYU8sZUFBaUJDLEtBQUtDLE1BQVEsSUFBT1gsSUFMakRFLEVBQWFPLGVBQWdCUCxFQUFhVSxjQUN2Q2xDLFNBQVNtQyxjQUFjbkMsU0FBU3VCLG9CQUFvQmxCLFNBQVNDLGNBQWMsc0JBQ3RFUSxhQUFjUSxHQUkzQkUsRUFBYVksY0FBZ0JWLEVBQVMsZ0RBQWtELCtDQUN4RkYsRUFBYWEsZUFBaUJYLEVBQ3hCLFNBQ0EsY0FBdUIsRUFBVFIsS0FDcEJsQixTQUFTc0MsWUFBWWQsRUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTM2NDQ4NDkxMzczMzU5MTA1XCIsXG59KTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLmFzLWxvZ29cIikpIHtcbiAgICAgICAgY29uc3QgW3NvbmdEZXRhaWwsIHNvbmdTdGF0ZSwgdGltZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic29uZ0RldGFpbFwiKSxcbiAgICAgICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJzb25nU3RhdGVcIiksXG4gICAgICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidGltZVwiKSxcbiAgICAgICAgXSksIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcy1wbGF5ZXItdGl0bGVcIikudGV4dENvbnRlbnQsIGFydGlzdCA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNhcy1wbGF5ZXItYXJ0aXN0XCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCIgLSBcIiwgMSlbMF0sIFssIGFsYnVtXSA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNhcy1wbGF5ZXItYXJ0aXN0XCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoLyg/OiAtICkoLispLyksIHZvbHVtZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImRpdi5tZWpzLWhvcml6b250YWwtdm9sdW1lLWN1cnJlbnRcIilcbiAgICAgICAgICAgIC5zdHlsZS53aWR0aC5yZXBsYWNlKFwicHhcIiwgXCJcIiksIHRpbWVFbGFwc2VkID0gcHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5tZWpzLWN1cnJlbnR0aW1lXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQpLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BaXJTb25nL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICB9LCBwYXVzZWQgPSBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXMtcGxheWVyLXBsYXlcIilcbiAgICAgICAgICAgIC5jbGFzc05hbWUuaW5jbHVkZXMoXCJmYS1wbGF5XCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHNvbmdEZXRhaWxcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJXRpdGxlJVwiLCB0aXRsZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJWFydGlzdCVcIiwgYXJ0aXN0KVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIlYWxidW0lXCIsIGFsYnVtKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc29uZ1N0YXRlXG4gICAgICAgICAgICAucmVwbGFjZShcIiV0aXRsZSVcIiwgdGl0bGUpXG4gICAgICAgICAgICAucmVwbGFjZShcIiVhcnRpc3QlXCIsIGFydGlzdClcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiJWFsYnVtJVwiLCBhbGJ1bSk7XG4gICAgICAgIGlmICghcGF1c2VkICYmIHRpbWUgPT09IDEpIHtcbiAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHByZXNlbmNlLnRpbWVzdGFtcEZyb21Gb3JtYXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4ubWVqcy1kdXJhdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQpLCB0aW1lRWxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXBhdXNlZCAmJiB0aW1lID09PSAyKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gRGF0ZS5ub3coKSAvIDEwMDAgLSB0aW1lRWxhcHNlZDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBwYXVzZWQgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBwYXVzZWRcbiAgICAgICAgICAgID8gXCJQYXVzZWRcIlxuICAgICAgICAgICAgOiBgUGxheWluZyBhdCAke3ZvbHVtZSAqIDJ9JWA7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNWMEZCVnl4RFFVRkRMRVZCUVVVN1VVRkRNMFFzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMWxCUTNSRUxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNXVUZCV1N4RFFVRkRPMWxCUTNwRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNWMEZCVnl4RFFVRkRPMWxCUTNoRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNUVUZCVFN4RFFVRkRPMU5CUTI1RExFTkJRVU1zUlVGRFJpeExRVUZMTEVkQlEwb3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJhVUlzYTBKQlFXdENMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRM1pGTEUxQlFVMHNSMEZCUnl4UlFVRlJPMkZCUTJZc1lVRkJZU3hEUVVGcFFpeHRRa0ZCYlVJc1EwRkJRenRoUVVOc1JDeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZGYUVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEZGQlFWRTdZVUZEYkVJc1lVRkJZU3hEUVVGcFFpeHRRa0ZCYlVJc1EwRkJRenRoUVVOc1JDeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVOc1F5eE5RVUZOTEVkQlFVY3NVVUZCVVR0aFFVTm1MR0ZCUVdFc1EwRkJhVUlzYjBOQlFXOURMRU5CUVVNN1lVRkRia1VzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQmMwSXNSVUZEY0VRc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eHRRa0ZCYlVJc1EwRkRla01zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYTBJc2RVSkJRWFZDTEVOQlFVTTdZVUZET1VRc1YwRkJWeXhEUVVOaUxFVkJRMFFzV1VGQldTeEhRVUZwUWp0WlFVTTFRaXhoUVVGaExFVkJRMW9zT0VSQlFUaEVPMU5CUXk5RUxFVkJRMFFzVFVGQlRTeEhRVUZITEZGQlFWRTdZVUZEWml4aFFVRmhMRU5CUVc5Q0xHbENRVUZwUWl4RFFVRkRPMkZCUTI1RUxGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRha01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZPMkZCUXk5Q0xFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRPMkZCUTNwQ0xFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNUVUZCVFN4RFFVRkRPMkZCUXpOQ0xFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROVUlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRPMkZCUXpWQ0xFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRPMkZCUTNwQ0xFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNUVUZCVFN4RFFVRkRPMkZCUXpOQ0xFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRekZDTEVOQlFVTXNXVUZCV1N4RFFVRkRMR05CUVdNc1JVRkJSU3haUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzJkQ1FVTjJSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlF6TkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRV3RDTEc5Q1FVRnZRaXhEUVVGRE8zRkNRVU16UkN4WFFVRlhMRU5CUTJJc1JVRkRSQ3hYUVVGWExFTkJRMWdzUTBGQlF6dFRRVU5JTzJGQlFVMHNTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF6dFpRVU12UWl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRWRCUVVjc1YwRkJWeXhEUVVGRE8xRkJSUzlFTEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zYVVSQlFXTXNRMEZCUXl3clEwRkJXU3hEUVVGRE8xRkJRMnBGTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1RVRkJUVHRaUVVOdVF5eERRVUZETEVOQlFVTXNVVUZCVVR0WlFVTldMRU5CUVVNc1EwRkJReXhqUVVGakxFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVVXZRaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMHRCUTI1RE8wRkJRMFlzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsIm9uIiwiYXN5bmMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzb25nRGV0YWlsIiwic29uZ1N0YXRlIiwidGltZSIsIlByb21pc2UiLCJhbGwiLCJnZXRTZXR0aW5nIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImFydGlzdCIsInNwbGl0IiwiYWxidW0iLCJ2b2x1bWUiLCJzdHlsZSIsIndpZHRoIiwicmVwbGFjZSIsInRpbWVFbGFwc2VkIiwidGltZXN0YW1wRnJvbUZvcm1hdCIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJwYXVzZWQiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsImRldGFpbHMiLCJzdGF0ZSIsInN0YXJ0VGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;