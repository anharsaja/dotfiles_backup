var __webpack_exports__={};const presence=new Presence({clientId:"651135297756856339"}),browsingTimestamp=Math.floor(Date.now()/1e3);let title;const actionURL=new URL(document.location.href),title2URL=new URL(document.location.href);presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/Touhou%20Wiki/assets/logo.png"};title=document.querySelector("h1#firstHeading");const e=actionURL.searchParams.get("action"),i=title2URL.searchParams.get("title");"/wiki/Touhou_Wiki"===document.location.pathname||"/wiki/Заглавная_страница"===document.location.pathname||"/wiki/东方维基"===document.location.pathname||"/wiki/동방위키:대문"===document.location.pathname?(t.state="Main Page | Home",t.startTimestamp=browsingTimestamp):title&&document.location.pathname.includes("/wiki/")?(t.details="Reading about:",t.state=title.textContent,t.startTimestamp=browsingTimestamp):"history"===e&&i&&document.location.pathname.includes("/w/")?(t.details="Viewing revision history of:",i.includes("_")?t.state=i.replaceAll("_"," "):t.state=i,t.startTimestamp=browsingTimestamp):"edit"===e&&i&&document.location.pathname.includes("/w/")&&(t.details="Editing a page:",i.includes("_")?t.state=i.replaceAll("_"," "):t.state=i,t.startTimestamp=browsingTimestamp),t.details?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLE1BQ0osTUFBTUMsVUFBWSxJQUFJQyxJQUFJQyxTQUFTQyxTQUFTQyxNQUFPQyxVQUFZLElBQUlKLElBQUlDLFNBQVNDLFNBQVNDLE1BQ3pGYixTQUFTZSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsc0VBRW5CVixNQUFRRyxTQUFTUSxjQUFjLG1CQUMvQixNQUFNQyxFQUFlWCxVQUFVWSxhQUFhQyxJQUFJLFVBQVdDLEVBQWVULFVBQVVPLGFBQWFDLElBQUksU0FDbEUsc0JBQS9CWCxTQUFTQyxTQUFTWSxVQUNhLDZCQUEvQmIsU0FBU0MsU0FBU1ksVUFDYSxlQUEvQmIsU0FBU0MsU0FBU1ksVUFDYSxrQkFBL0JiLFNBQVNDLFNBQVNZLFVBQ2xCUCxFQUFhUSxNQUFRLG1CQUNyQlIsRUFBYVMsZUFBaUJ2QixtQkFFekJLLE9BQVNHLFNBQVNDLFNBQVNZLFNBQVNHLFNBQVMsV0FDbERWLEVBQWFXLFFBQVUsaUJBQ3ZCWCxFQUFhUSxNQUFRakIsTUFBTXFCLFlBQzNCWixFQUFhUyxlQUFpQnZCLG1CQUVSLFlBQWpCaUIsR0FDTEcsR0FDQVosU0FBU0MsU0FBU1ksU0FBU0csU0FBUyxRQUNwQ1YsRUFBYVcsUUFBVSwrQkFDbkJMLEVBQWFJLFNBQVMsS0FDdEJWLEVBQWFRLE1BQVFGLEVBQWFPLFdBQVcsSUFBSyxLQUVsRGIsRUFBYVEsTUFBUUYsRUFDekJOLEVBQWFTLGVBQWlCdkIsbUJBRVIsU0FBakJpQixHQUNMRyxHQUNBWixTQUFTQyxTQUFTWSxTQUFTRyxTQUFTLFNBQ3BDVixFQUFhVyxRQUFVLGtCQUNuQkwsRUFBYUksU0FBUyxLQUN0QlYsRUFBYVEsTUFBUUYsRUFBYU8sV0FBVyxJQUFLLEtBRWxEYixFQUFhUSxNQUFRRixFQUN6Qk4sRUFBYVMsZUFBaUJ2QixtQkFFOUJjLEVBQWFXLFFBQ2I1QixTQUFTK0IsWUFBWWQsR0FFckJqQixTQUFTK0IsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NTExMzUyOTc3NTY4NTYzMzlcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xubGV0IHRpdGxlO1xuY29uc3QgYWN0aW9uVVJMID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKSwgdGl0bGUyVVJMID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9Ub3Vob3UlMjBXaWtpL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIH07XG4gICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEjZmlyc3RIZWFkaW5nXCIpO1xuICAgIGNvbnN0IGFjdGlvblJlc3VsdCA9IGFjdGlvblVSTC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWN0aW9uXCIpLCB0aXRsZTJSZXN1bHQgPSB0aXRsZTJVUkwuc2VhcmNoUGFyYW1zLmdldChcInRpdGxlXCIpO1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd2lraS9Ub3Vob3VfV2lraVwiIHx8XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93aWtpL9CX0LDQs9C70LDQstC90LDRj1/RgdGC0YDQsNC90LjRhtCwXCIgfHxcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dpa2kv5Lic5pa557u05Z+6XCIgfHxcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dpa2kv64+Z67Cp7JyE7YKkOuuMgOusuFwiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTWFpbiBQYWdlIHwgSG9tZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGl0bGUgJiYgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvd2lraS9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYWJvdXQ6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYWN0aW9uUmVzdWx0ID09PSBcImhpc3RvcnlcIiAmJlxuICAgICAgICB0aXRsZTJSZXN1bHQgJiZcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgcmV2aXNpb24gaGlzdG9yeSBvZjpcIjtcbiAgICAgICAgaWYgKHRpdGxlMlJlc3VsdC5pbmNsdWRlcyhcIl9cIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZTJSZXN1bHQucmVwbGFjZUFsbChcIl9cIiwgXCIgXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZTJSZXN1bHQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgIH1cbiAgICBlbHNlIGlmIChhY3Rpb25SZXN1bHQgPT09IFwiZWRpdFwiICYmXG4gICAgICAgIHRpdGxlMlJlc3VsdCAmJlxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi93L1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRWRpdGluZyBhIHBhZ2U6XCI7XG4gICAgICAgIGlmICh0aXRsZTJSZXN1bHQuaW5jbHVkZXMoXCJfXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUyUmVzdWx0LnJlcGxhY2VBbGwoXCJfXCIsIFwiIFwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUyUmVzdWx0O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEV0QlFVc3NRMEZCUXp0QlFVTldMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRMmhFTEZOQlFWTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUlRkRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNXVUZCV1N4SFFVRnBRanRSUVVOc1F5eGhRVUZoTEVWQlExb3NiMFZCUVc5Rk8wdEJRM0pGTEVOQlFVTTdTVUZGUml4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJRMnhFTEUxQlFVMHNXVUZCV1N4SFFVRkhMRk5CUVZNc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVTjRSQ3haUVVGWkxFZEJRVWNzVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNFUXNTVUZEUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUzBGQlN5eHRRa0ZCYlVJN1VVRkRiRVFzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRXRCUVVzc01FSkJRVEJDTzFGQlEzcEVMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEZsQlFWazdVVUZETTBNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NaVUZCWlN4RlFVTTNRenRSUVVORUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03VVVGRGVFTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0TFFVTm9SRHRUUVVGTkxFbEJRVWtzUzBGQlN5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTnNSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRM2hETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU4yUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMHRCUTJoRU8xTkJRVTBzU1VGRFRpeFpRVUZaTEV0QlFVc3NVMEZCVXp0UlFVTXhRaXhaUVVGWk8xRkJRMW9zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVU42UXp0UlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzT0VKQlFUaENMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJRenRaUVVNM1FpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRaUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJRenRSUVVWMlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzB0QlEyaEVPMU5CUVUwc1NVRkRUaXhaUVVGWkxFdEJRVXNzVFVGQlRUdFJRVU4yUWl4WlFVRlpPMUZCUTFvc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVONlF6dFJRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1NVRkJTU3haUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXp0WlFVTTNRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZET3p0WlFVTnVSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZsQlFWa3NRMEZCUXp0UlFVVjJReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8wdEJRMmhFTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0aXRsZSIsImFjdGlvblVSTCIsIlVSTCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwidGl0bGUyVVJMIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJxdWVyeVNlbGVjdG9yIiwiYWN0aW9uUmVzdWx0Iiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwidGl0bGUyUmVzdWx0IiwicGF0aG5hbWUiLCJzdGF0ZSIsInN0YXJ0VGltZXN0YW1wIiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwidGV4dENvbnRlbnQiLCJyZXBsYWNlQWxsIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;