var __webpack_exports__={};const presence=new Presence({clientId:"764916517895798796"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused",live:"general.live",search:"general.searching"});function getStateText(e,t){return t?"Live":e?"Paused":"Watching"}let elapsed,oldUrl,title;presence.on("UpdateData",(async()=>{let e=null;const{href:t,pathname:a}=window.location,s={details:void 0,state:void 0,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Sling%20TV/assets/logo.png",smallImageKey:void 0,smallImageText:void 0,startTimestamp:void 0,endTimestamp:void 0};if(t!==oldUrl&&(oldUrl=t,elapsed=Math.floor(Date.now()/1e3)),s.startTimestamp=elapsed,a.includes("/watch")&&(e=document.querySelector(".bitmovinplayer-container video"),e)){title=document.querySelector("title");const t=e.duration===1/0;title&&(s.state=getStateText(e.paused,t)),s.smallImageKey=t?"https://cdn.rcd.gg/PreMiD/resources/live.png":e.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",s.smallImageText=t?(await strings).live:e.paused?(await strings).pause:(await strings).play,t||([s.startTimestamp,s.endTimestamp]=presence.getTimestampsfromMedia(e)),e.paused&&(delete s.startTimestamp,delete s.endTimestamp)}presence.setActivity(s,!e||!e.paused)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxpQkFDUEMsS0FBTSxlQUNOQyxPQUFRLHNCQUVaLFNBQVNDLGFBQWFDLEVBQVFILEdBQzFCLE9BQU9BLEVBQU8sT0FBU0csRUFBUyxTQUFXLFVBQy9DLENBQ0EsSUFBSUMsUUFBU0MsT0FBUUMsTUFDckJiLFNBQVNjLEdBQUcsY0FBY0MsVUFDdEIsSUFBSUMsRUFBUSxLQUNaLE1BQU0sS0FBRUMsRUFBSSxTQUFFQyxHQUFhQyxPQUFPQyxTQUFVQyxFQUFlLENBQ3ZEQyxhQUZjQSxFQUdkQyxXQUh1QkEsRUFJdkJDLGNBQWUsa0VBQ2ZDLG1CQUw4QkEsRUFNOUJDLG9CQU42Q0EsRUFPN0NDLG9CQVA2REEsRUFRN0RDLGtCQVI2RUEsR0FlakYsR0FMSVgsSUFBU0wsU0FDVEEsT0FBU0ssRUFDVE4sUUFBVWtCLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsTUFFdENYLEVBQWFNLGVBQWlCaEIsUUFDMUJPLEVBQVNlLFNBQVMsWUFDbEJqQixFQUFRa0IsU0FBU0MsY0FBYyxtQ0FDM0JuQixHQUFPLENBQ1BILE1BQVFxQixTQUFTQyxjQUFjLFNBQy9CLE1BQU01QixFQUFPUyxFQUFNb0IsV0FBYUMsSUFDNUJ4QixRQUNBUSxFQUFhRSxNQUFRZCxhQUFhTyxFQUFNTixPQUFRSCxJQUNwRGMsRUFBYUksY0FBZ0JsQixFQUN2QiwrQ0FDQVMsRUFBTU4sT0FDRixnREFDQSwrQ0FDVlcsRUFBYUssZUFBaUJuQixTQUNqQkosU0FBU0ksS0FDaEJTLEVBQU1OLGNBQ0tQLFNBQVNHLGFBQ1RILFNBQVNFLEtBQ3JCRSxLQUNBYyxFQUFhTSxlQUFnQk4sRUFBYU8sY0FDdkM1QixTQUFTc0MsdUJBQXVCdEIsSUFFcENBLEVBQU1OLGdCQUNDVyxFQUFhTSxzQkFDYk4sRUFBYU8sYUFFNUIsQ0FFSjVCLFNBQVN1QyxZQUFZbEIsR0FBY0wsSUFBU0EsRUFBTU4sT0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3NjQ5MTY1MTc4OTU3OTg3OTZcIixcbn0pLCBzdHJpbmdzID0gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICBwYXVzZTogXCJnZW5lcmFsLnBhdXNlZFwiLFxuICAgIGxpdmU6IFwiZ2VuZXJhbC5saXZlXCIsXG4gICAgc2VhcmNoOiBcImdlbmVyYWwuc2VhcmNoaW5nXCIsXG59KTtcbmZ1bmN0aW9uIGdldFN0YXRlVGV4dChwYXVzZWQsIGxpdmUpIHtcbiAgICByZXR1cm4gbGl2ZSA/IFwiTGl2ZVwiIDogcGF1c2VkID8gXCJQYXVzZWRcIiA6IFwiV2F0Y2hpbmdcIjtcbn1cbmxldCBlbGFwc2VkLCBvbGRVcmwsIHRpdGxlO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgdmlkZW8gPSBudWxsLCBkZXRhaWxzLCBzdGF0ZSwgc21hbGxJbWFnZUtleSwgc21hbGxJbWFnZVRleHQsIHN0YXJ0VGltZXN0YW1wLCBlbmRUaW1lc3RhbXA7XG4gICAgY29uc3QgeyBocmVmLCBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TbGluZyUyMFRWL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzbWFsbEltYWdlS2V5LFxuICAgICAgICBzbWFsbEltYWdlVGV4dCxcbiAgICAgICAgc3RhcnRUaW1lc3RhbXAsXG4gICAgICAgIGVuZFRpbWVzdGFtcCxcbiAgICB9O1xuICAgIGlmIChocmVmICE9PSBvbGRVcmwpIHtcbiAgICAgICAgb2xkVXJsID0gaHJlZjtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBlbGFwc2VkO1xuICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi93YXRjaFwiKSkge1xuICAgICAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYml0bW92aW5wbGF5ZXItY29udGFpbmVyIHZpZGVvXCIpO1xuICAgICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpO1xuICAgICAgICAgICAgY29uc3QgbGl2ZSA9IHZpZGVvLmR1cmF0aW9uID09PSBJbmZpbml0eTtcbiAgICAgICAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBnZXRTdGF0ZVRleHQodmlkZW8ucGF1c2VkLCBsaXZlKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gbGl2ZVxuICAgICAgICAgICAgICAgID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9saXZlLnBuZ1wiXG4gICAgICAgICAgICAgICAgOiB2aWRlby5wYXVzZWRcbiAgICAgICAgICAgICAgICAgICAgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gbGl2ZVxuICAgICAgICAgICAgICAgID8gKGF3YWl0IHN0cmluZ3MpLmxpdmVcbiAgICAgICAgICAgICAgICA6IHZpZGVvLnBhdXNlZFxuICAgICAgICAgICAgICAgICAgICA/IChhd2FpdCBzdHJpbmdzKS5wYXVzZVxuICAgICAgICAgICAgICAgICAgICA6IChhd2FpdCBzdHJpbmdzKS5wbGF5O1xuICAgICAgICAgICAgaWYgKCFsaXZlKSB7XG4gICAgICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzZnJvbU1lZGlhKHZpZGVvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSwgdmlkZW8gPyAhdmlkZW8ucGF1c2VkIDogdHJ1ZSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF6dEpRVU0zUWl4SlFVRkpMRVZCUVVVc2FVSkJRV2xDTzBsQlEzWkNMRXRCUVVzc1JVRkJSU3huUWtGQlowSTdTVUZEZGtJc1NVRkJTU3hGUVVGRkxHTkJRV003U1VGRGNFSXNUVUZCVFN4RlFVRkZMRzFDUVVGdFFqdERRVU16UWl4RFFVRkRMRU5CUVVNN1FVRlBTaXhUUVVGVExGbEJRVmtzUTBGQlF5eE5RVUZsTEVWQlFVVXNTVUZCWVR0SlFVTnVSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wRkJRM1pFTEVOQlFVTTdRVUZGUkN4SlFVRkpMRTlCUVdVc1JVRkJSU3hOUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETzBGQlJUTkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUlhCRExFbEJRVWtzUzBGQlN5eEhRVUZ4UWl4SlFVRkpMRVZCUTJwRExFOUJRVThzUlVGRFVDeExRVUZMTEVWQlEwd3NZVUZCWVN4RlFVTmlMR05CUVdNc1JVRkRaQ3hqUVVGakxFVkJRMlFzV1VGQldTeERRVUZETzBsQlIyUXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVTjZReXhaUVVGWkxFZEJRV2xDTzFGQlF6VkNMRTlCUVU4N1VVRkRVQ3hMUVVGTE8xRkJRMHdzWVVGQllTeEZRVU5hTEdsRlFVRnBSVHRSUVVOc1JTeGhRVUZoTzFGQlEySXNZMEZCWXp0UlFVTmtMR05CUVdNN1VVRkRaQ3haUVVGWk8wdEJRMW9zUTBGQlF6dEpRVVZJTEVsQlFVa3NTVUZCU1N4TFFVRkxMRTFCUVUwc1JVRkJSVHRSUVVOd1FpeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJRc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEzaERPMGxCUlVRc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eFBRVUZQTEVOQlFVTTdTVUZGZEVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMUZCUTJoRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2xEUVVGcFF5eERRVUZETEVOQlFVTTdVVUZEYkVVc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFZpeExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU40UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRXNRMEZCUXp0WlFVVjZReXhKUVVGSkxFdEJRVXM3WjBKQlFVVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVWcVJTeFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrN1owSkJRMmhETEVOQlFVTTdaMEpCUTBRc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTzI5Q1FVTmtMRU5CUVVNN2IwSkJRMFFzUTBGQlF5d3JRMEZCV1N4RFFVRkRPMWxCUTJZc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTzJkQ1FVTnFReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrN1owSkJRM1JDTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUVHR2UWtGRFpDeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXM3YjBKQlEzWkNMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUlhoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdaMEpCUTFZc1EwRkJReXhaUVVGWkxFTkJRVU1zWTBGQll5eEZRVUZGTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNN2IwSkJRM1pFTEZGQlFWRXNRMEZCUXl4elFrRkJjMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0aFFVTjRRenRaUVVORUxFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0blFrRkRha0lzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMmRDUVVOdVF5eFBRVUZQTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNN1lVRkRha003VTBGRFJEdExRVU5FTzBsQlJVUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTJ4RkxFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsImxpdmUiLCJzZWFyY2giLCJnZXRTdGF0ZVRleHQiLCJwYXVzZWQiLCJlbGFwc2VkIiwib2xkVXJsIiwidGl0bGUiLCJvbiIsImFzeW5jIiwidmlkZW8iLCJocmVmIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByZXNlbmNlRGF0YSIsImRldGFpbHMiLCJzdGF0ZSIsImxhcmdlSW1hZ2VLZXkiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJzdGFydFRpbWVzdGFtcCIsImVuZFRpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJpbmNsdWRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJnZXRUaW1lc3RhbXBzZnJvbU1lZGlhIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;