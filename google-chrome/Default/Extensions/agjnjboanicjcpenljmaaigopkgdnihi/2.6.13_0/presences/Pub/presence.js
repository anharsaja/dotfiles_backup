var __webpack_exports__={};const presence=new Presence({clientId:"1233135474395189399"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Pub/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:a,href:t,search:s}=document.location,c=new URLSearchParams(s),i=a.split("/").filter(Boolean);switch(i[0]??"/"){case"/":e.details="Browsing the home page";break;case"help":e.details="Browsing help",i[1]&&(e.state=document.querySelector("h1"));break;case"packages":i[1]?(e.details="Viewing a package",e.state=i[1],e.buttons=[{label:"View Package",url:t}]):c.has("q")?(e.details="Searching for packages",e.state=c.get("q")):(e.details="Browsing packages",e.state=`${document.querySelector(".count").textContent} packages`);break;case"policy":e.details="Reading the policy";break;case"security":e.details="Reading the security policy"}e.details?presence.setActivity(e):presence.clearActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsMkRBQ2ZDLGVBQWdCVCxvQkFDakIsU0FBRVUsRUFBUSxLQUFFQyxFQUFJLE9BQUVDLEdBQVdDLFNBQVNDLFNBQVVDLEVBQWUsSUFBSUMsZ0JBQWdCSixHQUFTSyxFQUFXUCxFQUFTUSxNQUFNLEtBQUtDLE9BQU9DLFNBQ3JJLE9BQVFILEVBQVMsSUFBTSxLQUNuQixJQUFLLElBQ0RWLEVBQWFjLFFBQVUseUJBQ3ZCLE1BRUosSUFBSyxPQUNEZCxFQUFhYyxRQUFVLGdCQUNuQkosRUFBUyxLQUNUVixFQUFhZSxNQUFRVCxTQUFTVSxjQUFjLE9BQ2hELE1BRUosSUFBSyxXQUNHTixFQUFTLElBQ1RWLEVBQWFjLFFBQVUsb0JBQ3ZCZCxFQUFhZSxNQUFRTCxFQUFTLEdBQzlCVixFQUFhaUIsUUFBVSxDQUFDLENBQUVDLE1BQU8sZUFBZ0JDLElBQUtmLEtBRWpESSxFQUFhWSxJQUFJLE1BQ3RCcEIsRUFBYWMsUUFBVSx5QkFDdkJkLEVBQWFlLE1BQVFQLEVBQWFhLElBQUksT0FHdENyQixFQUFhYyxRQUFVLG9CQUN2QmQsRUFBYWUsTUFBUSxHQUFHVCxTQUFTVSxjQUFjLFVBQVVNLHdCQUU3RCxNQUVKLElBQUssU0FDRHRCLEVBQWFjLFFBQVUscUJBQ3ZCLE1BRUosSUFBSyxXQUNEZCxFQUFhYyxRQUFVLDhCQUkzQmQsRUFBYWMsUUFDYnhCLFNBQVNpQyxZQUFZdkIsR0FFckJWLFNBQVNrQyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEyMzMxMzU0NzQzOTUxODkzOTlcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL1B1Yi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHsgcGF0aG5hbWUsIGhyZWYsIHNlYXJjaCB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKSwgcGF0aExpc3QgPSBwYXRobmFtZS5zcGxpdChcIi9cIikuZmlsdGVyKEJvb2xlYW4pO1xuICAgIHN3aXRjaCAocGF0aExpc3RbMF0gPz8gXCIvXCIpIHtcbiAgICAgICAgY2FzZSBcIi9cIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRoZSBob21lIHBhZ2VcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJoZWxwXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBoZWxwXCI7XG4gICAgICAgICAgICBpZiAocGF0aExpc3RbMV0pXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInBhY2thZ2VzXCI6IHtcbiAgICAgICAgICAgIGlmIChwYXRoTGlzdFsxXSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFja2FnZVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhdGhMaXN0WzFdO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBQYWNrYWdlXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaFBhcmFtcy5oYXMoXCJxXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3IgcGFja2FnZXNcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBwYWNrYWdlc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRcIikudGV4dENvbnRlbnR9IHBhY2thZ2VzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJwb2xpY3lcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIHBvbGljeVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNlY3VyaXR5XCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBzZWN1cml0eSBwb2xpY3lcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLmNsZWFyQWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2NVSkJRWEZDTzBOQlF5OUNMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVUxdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN3MFJFRkJZVHRSUVVNeFFpeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUXpsRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkRNVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUldoRUxGRkJRVkVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSVHRSUVVNelFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRaUVVOb1JDeE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMW9zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4bFFVRmxMRU5CUVVNN1dVRkRka01zU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU51UlN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETzFsQlEyaENMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzJkQ1FVTm9RaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yZENRVU16UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRha01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxHTkJRV01zUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVNNVJEdHBRa0ZCVFN4SlFVRkpMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJwRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03WjBKQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNelF6dHBRa0ZCVFR0blFrRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yZENRVU16UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVd0Q0xGRkJRVkVzUTBGQlF5eERRVUZETEZkQlEyNUVMRmRCUVZjc1EwRkJRenRoUVVOYU8xbEJRMFFzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOa0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03V1VGRE5VTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhWUVVGVkxFTkJRVU1zUTBGQlF6dFpRVU5vUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEWkNRVUUyUWl4RFFVRkRPMWxCUTNKRUxFMUJRVTA3VTBGRFRqdExRVU5FTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4aFFVRmhMRVZCUVVVc1EwRkJRenRCUVVNdlFpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWUiLCJocmVmIiwic2VhcmNoIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInBhdGhMaXN0Iiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZGV0YWlscyIsInN0YXRlIiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsImhhcyIsImdldCIsInRleHRDb250ZW50Iiwic2V0QWN0aXZpdHkiLCJjbGVhckFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;