var __webpack_exports__={};const presence=new Presence({clientId:"1252257462476738580"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/L/League%20of%20Angels%20Pact/assets/logo.jpg",startTimestamp:browsingTimestamp},t=location.pathname+location.search,a=await presence.getSetting("uid");if(t.includes("/web/oz/login.php")){const t=new URL(document.location.href).searchParams.get("uid");e.details=t&&a?`[API] UID: ${t}`:"From API"}if(t.includes("/play/?game=719")){const t=document.querySelector(".server-uid .txt-light");e.details=t&&a?`[R2] UID: ${t.textContent}`:"From r2games.com"}if(t.includes("/games/loginGameServer.action?gameName=LeagueofAngels_GHG")){const t=document.querySelector(".headerID span");e.details=t&&a?`[GHG] UID: ${t.textContent}`:"From gamehollywood.com"}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUFFQyxTQUFVLHdCQUEwQkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hIUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsbUZBQ2ZDLGVBQWdCVCxtQkFDakJVLEVBQU9DLFNBQVNDLFNBQVdELFNBQVNFLE9BQVFDLFFBQWdCakIsU0FBU2tCLFdBQVcsT0FDbkYsR0FBSUwsRUFBS00sU0FBUyxxQkFBc0IsQ0FDcEMsTUFBTUMsRUFBTSxJQUFJQyxJQUFJQyxTQUFTUixTQUFTUyxNQUFNQyxhQUFhQyxJQUFJLE9BRXpEZixFQUFhZ0IsUUFEYk4sR0FBT0gsRUFDZ0IsY0FBY0csSUFFZCxVQUMvQixDQUNBLEdBQUlQLEVBQUtNLFNBQVMsbUJBQW9CLENBQ2xDLE1BQU1DLEVBQU1FLFNBQVNLLGNBQWMsMEJBRS9CakIsRUFBYWdCLFFBRGJOLEdBQU9ILEVBQ2dCLGFBQWFHLEVBQUlRLGNBRWpCLGtCQUMvQixDQUNBLEdBQUlmLEVBQUtNLFNBQVMsNkRBQThELENBQzVFLE1BQU1DLEVBQU1FLFNBQVNLLGNBQWMsa0JBRS9CakIsRUFBYWdCLFFBRGJOLEdBQU9ILEVBQ2dCLGNBQWNHLEVBQUlRLGNBRWxCLHdCQUMvQixDQUNJbEIsRUFBYWdCLFFBQ2IxQixTQUFTNkIsWUFBWW5CLEdBRXJCVixTQUFTNkIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHsgY2xpZW50SWQ6IFwiMTI1MjI1NzQ2MjQ3NjczODU4MFwiIH0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9ML0xlYWd1ZSUyMG9mJTIwQW5nZWxzJTIwUGFjdC9hc3NldHMvbG9nby5qcGdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCwgc2hvd1VJRCA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJ1aWRcIik7XG4gICAgaWYgKHBhdGguaW5jbHVkZXMoXCIvd2ViL296L2xvZ2luLnBocFwiKSkge1xuICAgICAgICBjb25zdCB1aWQgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJ1aWRcIik7XG4gICAgICAgIGlmICh1aWQgJiYgc2hvd1VJRClcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFtBUEldIFVJRDogJHt1aWR9YDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZyb20gQVBJXCI7XG4gICAgfVxuICAgIGlmIChwYXRoLmluY2x1ZGVzKFwiL3BsYXkvP2dhbWU9NzE5XCIpKSB7XG4gICAgICAgIGNvbnN0IHVpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmVyLXVpZCAudHh0LWxpZ2h0XCIpO1xuICAgICAgICBpZiAodWlkICYmIHNob3dVSUQpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBbUjJdIFVJRDogJHt1aWQudGV4dENvbnRlbnR9YDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZyb20gcjJnYW1lcy5jb21cIjtcbiAgICB9XG4gICAgaWYgKHBhdGguaW5jbHVkZXMoXCIvZ2FtZXMvbG9naW5HYW1lU2VydmVyLmFjdGlvbj9nYW1lTmFtZT1MZWFndWVvZkFuZ2Vsc19HSEdcIikpIHtcbiAgICAgICAgY29uc3QgdWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJJRCBzcGFuXCIpO1xuICAgICAgICBpZiAodWlkICYmIHNob3dVSUQpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBbR0hHXSBVSUQ6ICR7dWlkLnRleHRDb250ZW50fWA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGcm9tIGdhbWVob2xseXdvb2QuY29tXCI7XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRExFVkJRMnBGTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlJXNUVMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzV1VGQldTeEhRVUZwUWp0UlFVTnFReXhoUVVGaExFVkJRMW9zYTBaQlFXdEdPMUZCUTI1R0xHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVU14UXl4UFFVRlBMRWRCUVZrc1RVRkJUU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUlRsRUxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eEZRVUZGTzFGQlEzWkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVWd1JTeEpRVUZKTEVkQlFVY3NTVUZCU1N4UFFVRlBPMWxCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRaUVVNeFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZVc1EwRkJRenRMUVVOMlF6dEpRVVZFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RlFVRkZPMUZCUTNKRExFMUJRVTBzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0UlFVVTNSQ3hKUVVGSkxFZEJRVWNzU1VGQlNTeFBRVUZQTzFsQlFVVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXpzN1dVRkRja1VzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dExRVU12UXp0SlFVVkVMRWxCUTBNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5d3lSRUZCTWtRc1EwRkJReXhGUVVONlJUdFJRVU5FTEUxQlFVMHNSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRenRSUVVWeVJDeEpRVUZKTEVkQlFVY3NTVUZCU1N4UFFVRlBPMWxCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGpRVUZqTEVkQlFVY3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenM3V1VGRGRFVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0TFFVTnlSRHRKUVVWRUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJzaG93VUlEIiwiZ2V0U2V0dGluZyIsImluY2x1ZGVzIiwidWlkIiwiVVJMIiwiZG9jdW1lbnQiLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZGV0YWlscyIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;