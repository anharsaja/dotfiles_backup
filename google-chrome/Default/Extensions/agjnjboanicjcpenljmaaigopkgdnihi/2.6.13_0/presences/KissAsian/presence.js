var __webpack_exports__={};const presence=new Presence({clientId:"641402862961950733"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"}),browsingTimestamp=Math.floor(Date.now()/1e3);let video;presence.on("iFrameData",(e=>{video=e.iframeVideo})),presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/K/KissAsian/assets/logo.png",startTimestamp:browsingTimestamp};if("/"===document.location.pathname)e.details="Viewing home page";else if(document.location.pathname.includes("/drama/")){const t=document.querySelector('[class="Animeinfo"]')?.querySelector("a"),a=document.querySelector("option[selected]").textContent.match(/Episode [0-9]*/gm);isNaN(video?.duration)||!t&&!a[0]?t&&(e.details="Viewing drama:",e.state=t.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):(delete e.startTimestamp,e.details=t?t?.textContent:document.querySelector("#navsubbar > p > a").textContent.split("\n")[2].trim(),e.state=a[0],e.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=video.paused?(await strings).pause:(await strings).play,[e.startTimestamp,e.endTimestamp]=presence.getTimestampsfromMedia(video),video.paused&&delete e.endTimestamp)}else document.location.pathname.includes("/DramaList")?(e.details="Viewing drama list",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("AreYouHuman")&&(e.details="Completing a captcha...");e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxtQkFDUEMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLE1BQ0paLFNBQVNhLEdBQUcsY0FBZUMsSUFDdkJGLE1BQVFFLEVBQUtDLFdBQVcsSUFFNUJmLFNBQVNhLEdBQUcsY0FBY0csVUFDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSxpRUFDZkMsZUFBZ0JaLG1CQUVwQixHQUFtQyxNQUEvQmEsU0FBU0MsU0FBU0MsU0FDbEJMLEVBQWFNLFFBQVUseUJBQ3RCLEdBQUlILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsV0FBWSxDQUNyRCxNQUFNQyxFQUFhTCxTQUNkTSxjQUFjLHdCQUNiQSxjQUFjLEtBQU1DLEVBQWdCUCxTQUNyQ00sY0FBYyxvQkFDZEUsWUFBWUMsTUFBTSxvQkFDbEJDLE1BQU1sQixPQUFPbUIsWUFBY04sSUFBY0UsRUFBYyxHQW9CbkRGLElBQ0xSLEVBQWFNLFFBQVUsaUJBQ3ZCTixFQUFhZSxNQUFRUCxFQUFXRyxZQUNoQ1gsRUFBYWdCLGNBQWdCLDJEQXRCdEJoQixFQUFhRSxlQUVoQkYsRUFBYU0sUUFEYkUsRUFDdUJBLEdBQVlHLFlBRVpSLFNBQ2xCTSxjQUFjLHNCQUNkRSxZQUFZTSxNQUFNLE1BQU0sR0FDeEJDLE9BRVRsQixFQUFhZSxNQUFRTCxFQUFjLEdBQ25DVixFQUFhZ0IsY0FBZ0JyQixNQUFNd0IsT0FBUyxnREFBa0QsK0NBQzlGbkIsRUFBYW9CLGVBQWlCekIsTUFBTXdCLGNBQ3ZCakMsU0FBU0csYUFDVEgsU0FBU0UsTUFDckJZLEVBQWFFLGVBQWdCRixFQUFhcUIsY0FDdkN0QyxTQUFTdUMsdUJBQXVCM0IsT0FDaENBLE1BQU13QixlQUNDbkIsRUFBYXFCLGFBT2hDLE1BQ1NsQixTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGVBQ3pDUCxFQUFhTSxRQUFVLHFCQUN2Qk4sRUFBYWdCLGNBQWdCLG1EQUV4QmIsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxpQkFDekNQLEVBQWFNLFFBQVUsMkJBQ3ZCTixFQUFhTSxRQUNidkIsU0FBU3dDLFlBQVl2QixHQUVyQmpCLFNBQVN3QyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjY0MTQwMjg2Mjk2MTk1MDczM1wiLFxufSksIHN0cmluZ3MgPSBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgIHBhdXNlOiBcImdlbmVyYWwucGF1c2VkXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCB2aWRlbztcbnByZXNlbmNlLm9uKFwiaUZyYW1lRGF0YVwiLCAoZGF0YSkgPT4ge1xuICAgIHZpZGVvID0gZGF0YS5pZnJhbWVWaWRlbztcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0tpc3NBc2lhbi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgaG9tZSBwYWdlXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZHJhbWEvXCIpKSB7XG4gICAgICAgIGNvbnN0IGRyYW1hVGl0bGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cIkFuaW1laW5mb1wiXScpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLCBzZWxlY3RFcGlzb2RlID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwib3B0aW9uW3NlbGVjdGVkXVwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50Lm1hdGNoKC9FcGlzb2RlIFswLTldKi9nbSk7XG4gICAgICAgIGlmICghaXNOYU4odmlkZW8/LmR1cmF0aW9uKSAmJiAoZHJhbWFUaXRsZSB8fCBzZWxlY3RFcGlzb2RlWzBdKSkge1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgICAgIGlmIChkcmFtYVRpdGxlKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZHJhbWFUaXRsZT8udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hdnN1YmJhciA+IHAgPiBhXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIlxcblwiKVsyXVxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VsZWN0RXBpc29kZVswXTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gdmlkZW8ucGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHZpZGVvLnBhdXNlZFxuICAgICAgICAgICAgICAgID8gKGF3YWl0IHN0cmluZ3MpLnBhdXNlXG4gICAgICAgICAgICAgICAgOiAoYXdhaXQgc3RyaW5ncykucGxheTtcbiAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzZnJvbU1lZGlhKHZpZGVvKTtcbiAgICAgICAgICAgIGlmICh2aWRlby5wYXVzZWQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHJhbWFUaXRsZSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgZHJhbWE6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkcmFtYVRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvRHJhbWFMaXN0XCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGRyYW1hIGxpc3RcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiQXJlWW91SHVtYW5cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb21wbGV0aW5nIGEgY2FwdGNoYS4uLlwiO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF6dEpRVU0zUWl4SlFVRkpMRVZCUVVVc2FVSkJRV2xDTzBsQlEzWkNMRXRCUVVzc1JVRkJSU3huUWtGQlowSTdRMEZEZGtJc1EwRkJReXhGUVVOR0xHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJSVzVFTEVsQlFVa3NTMEZCZFVJc1EwRkJRenRCUVVVMVFpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFbEJRWFZETEVWQlFVVXNSVUZCUlR0SlFVTnlSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0QlFVTXhRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVZJTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5zUXl4aFFVRmhMRVZCUTFvc1owVkJRV2RGTzFGQlEycEZMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdTMEZEYWtNc1EwRkJRenRKUVVWR0xFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRXRCUVVzc1IwRkJSenRSUVVOeVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzFOQlEzWkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xRkJRM2hFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRkZCUVZFN1lVRkRlRUlzWVVGQllTeERRVUZETEhGQ1FVRnhRaXhEUVVGRE8xbEJRM0pETEVWQlFVVXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVOeVFpeGhRVUZoTEVkQlFVY3NVVUZCVVR0aFFVTjBRaXhoUVVGaExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1lVRkRha01zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzFGQlJYcERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJoRkxFOUJRVThzV1VGQldTeERRVUZETEdOQlFXTXNRMEZCUXp0WlFVTnVReXhKUVVGSkxGVkJRVlU3WjBKQlFVVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFVkJRVVVzVjBGQlZ5eERRVUZETzJsQ1FVTXhSRHRuUWtGRFNpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFN2NVSkJRemRDTEdGQlFXRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dHhRa0ZEYmtNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2NVSkJRekZDTEVsQlFVa3NSVUZCUlN4RFFVRkRPMkZCUTFRN1dVRkRSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eHBSRUZCWXl4RFFVRkRMQ3REUVVGWkxFTkJRVU03V1VGRGRrVXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRUdG5Ra0ZEZWtNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxPMmRDUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU40UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0blFrRkRka1FzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzaERMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTA3WjBKQlFVVXNUMEZCVHl4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xTkJRMjVFTzJGQlFVMHNTVUZCU1N4VlFVRlZMRVZCUVVVN1dVRkRkRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dFpRVU40UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZETlVNc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBSQlFXbENMRU5CUVVNN1UwRkROVU03UzBGRFJEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZPMUZCUXpkRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdTMEZETlVNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU03VVVGRE5VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0SlFVVnNSQ3hKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTzFGQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6czdVVUZEZUVRc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwic3RyaW5ncyIsImdldFN0cmluZ3MiLCJwbGF5IiwicGF1c2UiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ2aWRlbyIsIm9uIiwiZGF0YSIsImlmcmFtZVZpZGVvIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkZXRhaWxzIiwiaW5jbHVkZXMiLCJkcmFtYVRpdGxlIiwicXVlcnlTZWxlY3RvciIsInNlbGVjdEVwaXNvZGUiLCJ0ZXh0Q29udGVudCIsIm1hdGNoIiwiaXNOYU4iLCJkdXJhdGlvbiIsInN0YXRlIiwic21hbGxJbWFnZUtleSIsInNwbGl0IiwidHJpbSIsInBhdXNlZCIsInNtYWxsSW1hZ2VUZXh0IiwiZW5kVGltZXN0YW1wIiwiZ2V0VGltZXN0YW1wc2Zyb21NZWRpYSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;