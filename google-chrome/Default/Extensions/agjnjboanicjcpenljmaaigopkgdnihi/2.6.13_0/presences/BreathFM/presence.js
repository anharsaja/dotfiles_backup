var __webpack_exports__={};const presence=new Presence({clientId:"846282107462352927"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{let e;if("mediaSession"in navigator&&navigator.mediaSession.metadata&&!document.querySelector("audio")?.paused)e={largeImageKey:navigator.mediaSession.metadata.artwork[0].src,details:navigator.mediaSession.metadata.title,state:navigator.mediaSession.metadata.artist,buttons:[{label:"Listen",url:location.href}]};else switch(e={startTimestamp:browsingTimestamp,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/B/BreathFM/assets/0.jpg"},location.pathname.replace("/","")){case"history":e.details="Schaut die Historie an";break;case"bots":e.details="Interresiert sich für die Bots";break;case"status":e.details="Schaut sich den Status an",e.state=`${document.querySelectorAll('[class="online"]')?.length} von ${document.querySelectorAll('[class="monitor"]')?.length} Services Online`;break;case"impressum":e.details="Schaut sich das Impressum an";break;case"changelog":e.details="Schaut sich die Änderungen an";break;case"dashboard":e.details="Schaut sich im Dashboard um";break;case"datenschutz":e.details="Schaut sich den Datenschutz an";break;default:e.details="Durch Stöbert die Webseite"}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLElBQUlDLEVBQ0osR0FBSSxpQkFBa0JDLFdBQ2xCQSxVQUFVQyxhQUFhQyxXQUN0QkMsU0FBU0MsY0FBYyxVQUFVQyxPQUNsQ04sRUFBZSxDQUNYTyxjQUFlTixVQUFVQyxhQUFhQyxTQUFTSyxRQUFRLEdBQUdDLElBQzFEQyxRQUFTVCxVQUFVQyxhQUFhQyxTQUFTUSxNQUN6Q0MsTUFBT1gsVUFBVUMsYUFBYUMsU0FBU1UsT0FDdkNDLFFBQVMsQ0FDTCxDQUNJQyxNQUFPLFNBQ1BDLElBQUtDLFNBQVNDLGFBVTFCLE9BSkFsQixFQUFlLENBQ1htQixlQUFnQjFCLGtCQUNoQmMsY0FBZSw4REFFWFUsU0FBU0csU0FBU0MsUUFBUSxJQUFLLEtBQ25DLElBQUssVUFDRHJCLEVBQWFVLFFBQVUseUJBQ3ZCLE1BQ0osSUFBSyxPQUNEVixFQUFhVSxRQUFVLGlDQUN2QixNQUNKLElBQUssU0FDRFYsRUFBYVUsUUFBVSw0QkFDdkJWLEVBQWFZLE1BQVEsR0FBR1IsU0FBU2tCLGlCQUFpQixxQkFBcUJDLGNBQWNuQixTQUFTa0IsaUJBQWlCLHNCQUFzQkMseUJBQ3JJLE1BQ0osSUFBSyxZQUNEdkIsRUFBYVUsUUFBVSwrQkFDdkIsTUFDSixJQUFLLFlBQ0RWLEVBQWFVLFFBQVUsZ0NBQ3ZCLE1BQ0osSUFBSyxZQUNEVixFQUFhVSxRQUFVLDhCQUN2QixNQUNKLElBQUssY0FDRFYsRUFBYVUsUUFBVSxpQ0FDdkIsTUFDSixRQUNJVixFQUFhVSxRQUFVLDZCQUduQ3BCLFNBQVNrQyxZQUFZeEIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4NDYyODIxMDc0NjIzNTI5MjdcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgcHJlc2VuY2VEYXRhO1xuICAgIGlmIChcIm1lZGlhU2Vzc2lvblwiIGluIG5hdmlnYXRvciAmJlxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLm1ldGFkYXRhICYmXG4gICAgICAgICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik/LnBhdXNlZCkge1xuICAgICAgICBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLm1ldGFkYXRhLmFydHdvcmtbMF0uc3JjLFxuICAgICAgICAgICAgZGV0YWlsczogbmF2aWdhdG9yLm1lZGlhU2Vzc2lvbi5tZXRhZGF0YS50aXRsZSxcbiAgICAgICAgICAgIHN0YXRlOiBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLm1ldGFkYXRhLmFydGlzdCxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxpc3RlblwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQi9CcmVhdGhGTS9hc3NldHMvMC5qcGdcIixcbiAgICAgICAgfTtcbiAgICAgICAgc3dpdGNoIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKFwiL1wiLCBcIlwiKSkge1xuICAgICAgICAgICAgY2FzZSBcImhpc3RvcnlcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2NoYXV0IGRpZSBIaXN0b3JpZSBhblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvdHNcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSW50ZXJyZXNpZXJ0IHNpY2ggZsO8ciBkaWUgQm90c1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YXR1c1wiOlxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTY2hhdXQgc2ljaCBkZW4gU3RhdHVzIGFuXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzPVwib25saW5lXCJdJyk/Lmxlbmd0aH0gdm9uICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzPVwibW9uaXRvclwiXScpPy5sZW5ndGh9IFNlcnZpY2VzIE9ubGluZWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW1wcmVzc3VtXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNjaGF1dCBzaWNoIGRhcyBJbXByZXNzdW0gYW5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2Vsb2dcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2NoYXV0IHNpY2ggZGllIMOEbmRlcnVuZ2VuIGFuXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGFzaGJvYXJkXCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNjaGF1dCBzaWNoIGltIERhc2hib2FyZCB1bVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGVuc2NodXR6XCI6XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNjaGF1dCBzaWNoIGRlbiBEYXRlbnNjaHV0eiBhblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRHVyY2ggU3TDtmJlcnQgZGllIFdlYnNlaXRlXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4SlFVRkpMRmxCUVRCQ0xFTkJRVU03U1VGREwwSXNTVUZEUXl4alFVRmpMRWxCUVVrc1UwRkJVenRSUVVNelFpeFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFN1VVRkRMMElzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnRRaXhQUVVGUExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlEzcEVPMUZCUTBRc1dVRkJXU3hIUVVGSE8xbEJRMlFzWVVGQllTeEZRVUZGTEZOQlFWTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhPMWxCUXpkRUxFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTE8xbEJRemxETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTzFsQlF6ZERMRTlCUVU4c1JVRkJSVHRuUWtGRFVqdHZRa0ZEUXl4TFFVRkxMRVZCUVVVc1VVRkJVVHR2UWtGRFppeEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrN2FVSkJRMnhDTzJGQlEwUTdVMEZEUkN4RFFVRkRPMHRCUTBZN1UwRkJUVHRSUVVOT0xGbEJRVmtzUjBGQlJ6dFpRVU5rTEdOQlFXTXNSVUZCUlN4cFFrRkJhVUk3V1VGRGFrTXNZVUZCWVN4RlFVTmFMRFJFUVVFMFJEdFRRVU0zUkN4RFFVRkRPMUZCUTBZc1VVRkJVU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVU3V1VGRE0wTXNTMEZCU3l4VFFVRlRPMmRDUVVOaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03WjBKQlEyaEVMRTFCUVUwN1dVRkRVQ3hMUVVGTExFMUJRVTA3WjBKQlExWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0blFrRkRlRVFzVFVGQlRUdFpRVU5RTEV0QlFVc3NVVUZCVVR0blFrRkRXaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERKQ1FVRXlRaXhEUVVGRE8yZENRVU51UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRM0JDTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhGUVVGRkxFMUJRMmhFTEZGQlEwTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFVkJRVVVzVFVGRGFrUXNhMEpCUVd0Q0xFTkJRVU03WjBKQlEyNUNMRTFCUVUwN1dVRkRVQ3hMUVVGTExGZEJRVmM3WjBKQlEyWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXc0UWtGQk9FSXNRMEZCUXp0blFrRkRkRVFzVFVGQlRUdFpRVU5RTEV0QlFVc3NWMEZCVnp0blFrRkRaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEN0Q1FVRXJRaXhEUVVGRE8yZENRVU4yUkN4TlFVRk5PMWxCUTFBc1MwRkJTeXhYUVVGWE8yZENRVU5tTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc05rSkJRVFpDTEVOQlFVTTdaMEpCUTNKRUxFMUJRVTA3V1VGRFVDeExRVUZMTEdGQlFXRTdaMEpCUTJwQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaME5CUVdkRExFTkJRVU03WjBKQlEzaEVMRTFCUVUwN1dVRkRVRHRuUWtGRFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFJDUVVFMFFpeERRVUZETzFOQlEzSkVPMHRCUTBRN1NVRkRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTNCRExFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibmF2aWdhdG9yIiwibWVkaWFTZXNzaW9uIiwibWV0YWRhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXVzZWQiLCJsYXJnZUltYWdlS2V5IiwiYXJ0d29yayIsInNyYyIsImRldGFpbHMiLCJ0aXRsZSIsInN0YXRlIiwiYXJ0aXN0IiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;