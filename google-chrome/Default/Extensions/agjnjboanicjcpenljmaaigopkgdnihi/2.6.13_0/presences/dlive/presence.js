var __webpack_exports__={};const presence=new Presence({clientId:"609531561389588480"});let playback,lastPlaybackState=null,browsingTimestamp=Math.floor(Date.now()/1e3);lastPlaybackState!==playback&&(lastPlaybackState=playback,browsingTimestamp=Math.floor(Date.now()/1e3)),presence.on("UpdateData",(async()=>{if(playback=null!==document.querySelector("video.dplayer-video.dplayer-video-current"),!playback){const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/dlive/assets/logo.png",details:"Browsing..."};e.startTimestamp=browsingTimestamp,presence.setActivity(e,!0)}if(document.querySelector("video.dplayer-video.dplayer-video-current")){const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/dlive/assets/logo.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/live.png"};e.details=document.querySelector(".info-line-left.flex-box .flex-column.flex-justify-center div").textContent,e.state=document.querySelector("div.channel-header span.dlive-name span.overflow-ellipsis").textContent,e.startTimestamp=browsingTimestamp,presence.setActivity(e,!0)}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxJQUE4QkMsU0FBMUJDLGtCQUFvQixLQUFnQkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hGTCxvQkFBc0JELFdBQ3RCQyxrQkFBb0JELFNBQ3BCRSxrQkFBb0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsTUFFaERULFNBQVNVLEdBQUcsY0FBY0MsVUFLdEIsR0FKQVIsU0FDNEUsT0FBeEVTLFNBQVNDLGNBQWMsOENBR3RCVixTQUFVLENBQ1gsTUFBTVcsRUFBZSxDQUNqQkMsY0FBZSw2REFFbkJELFFBQXVCLGVBQ3ZCQSxFQUFhRSxlQUFpQlgsa0JBQzlCTCxTQUFTaUIsWUFBWUgsR0FBYyxFQUN2QyxDQUNBLEdBQUlGLFNBQVNDLGNBQWMsNkNBQThDLENBQ3JFLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsNkRBQ2ZHLGNBQWUsZ0RBRW5CSixFQUFhSyxRQUFVUCxTQUFTQyxjQUFjLGlFQUFpRU8sWUFDL0dOLEVBQWFPLE1BQVFULFNBQVNDLGNBQWMsNkRBQTZETyxZQUN6R04sRUFBYUUsZUFBaUJYLGtCQUM5QkwsU0FBU2lCLFlBQVlILEdBQWMsRUFDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjA5NTMxNTYxMzg5NTg4NDgwXCIsXG59KTtcbmxldCBsYXN0UGxheWJhY2tTdGF0ZSA9IG51bGwsIHBsYXliYWNrLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuaWYgKGxhc3RQbGF5YmFja1N0YXRlICE9PSBwbGF5YmFjaykge1xuICAgIGxhc3RQbGF5YmFja1N0YXRlID0gcGxheWJhY2s7XG4gICAgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbn1cbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgcGxheWJhY2sgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW8uZHBsYXllci12aWRlby5kcGxheWVyLXZpZGVvLWN1cnJlbnRcIikgIT09IG51bGxcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICBpZiAoIXBsYXliYWNrKSB7XG4gICAgICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9EL2RsaXZlL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICB9O1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcuLi5cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW8uZHBsYXllci12aWRlby5kcGxheWVyLXZpZGVvLWN1cnJlbnRcIikpIHtcbiAgICAgICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0QvZGxpdmUvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL2xpdmUucG5nXCIsXG4gICAgICAgIH07XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvLWxpbmUtbGVmdC5mbGV4LWJveCAuZmxleC1jb2x1bW4uZmxleC1qdXN0aWZ5LWNlbnRlciBkaXZcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hhbm5lbC1oZWFkZXIgc3Bhbi5kbGl2ZS1uYW1lIHNwYW4ub3ZlcmZsb3ctZWxsaXBzaXNcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEsIHRydWUpO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0zUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1EwRkJRenRCUVVWSUxFbEJRVWtzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hGUVVNelFpeFJRVUZwUWl4RlFVTnFRaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEdsQ1FVRnBRaXhMUVVGTExGRkJRVkVzUlVGQlJUdEpRVU51UXl4cFFrRkJhVUlzUjBGQlJ5eFJRVUZSTEVOQlFVTTdTVUZETjBJc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1EwRkRiRVE3UVVGRlJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4UlFVRlJPMUZCUTFBc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3lRMEZCTWtNc1EwRkJReXhMUVVGTExFbEJRVWs3V1VGRE0wVXNRMEZCUXl4RFFVRkRMRWxCUVVrN1dVRkRUaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzBsQlJWWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRSUVVOa0xFMUJRVTBzV1VGQldTeEhRVUZwUWp0WlFVTnNReXhoUVVGaExFVkJRMW9zTkVSQlFUUkVPMU5CUXpkRUxFTkJRVU03VVVGRlJpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1EwRkJRenRSUVVOeVF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFGQlJXaEVMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTNwRE8wbEJSVVFzU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMREpEUVVFeVF5eERRVUZETEVWQlFVVTdVVUZEZUVVc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFsQlEyeERMR0ZCUVdFc1JVRkRXaXcwUkVGQk5FUTdXVUZETjBRc1lVRkJZU3huUkVGQllUdFRRVU14UWl4RFFVRkRPMUZCUlVZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTFReXdyUkVGQkswUXNRMEZETDBRc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRFpDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRekZETERKRVFVRXlSQ3hEUVVNelJDeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTmtMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkZhRVFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGVrTTdRVUZEUml4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInBsYXliYWNrIiwibGFzdFBsYXliYWNrU3RhdGUiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwic2V0QWN0aXZpdHkiLCJzbWFsbEltYWdlS2V5IiwiZGV0YWlscyIsInRleHRDb250ZW50Iiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9
undefined;