var __webpack_exports__={};const presence=new Presence({clientId:"849684658563055627"}),logRegex=/^.+ - \w+$/,generalStartTime=Math.floor(Date.now()/1e3);let lobbyStartTime,gameStartTime;presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/Dominion%20Online/assets/logo.jpg",startTimestamp:generalStartTime};if(document.querySelector(".my-table")||document.querySelector(".score-page"))0===lobbyStartTime&&(lobbyStartTime=Math.floor(Date.now()/1e3)),gameStartTime=0,e.details=`In Lobby: ${document.querySelector(".participant-list-label").textContent.trim()}`,e.state=document.querySelector(".rules-editor")||document.querySelector('button[ng-click="$ctrl.editTable()"]')?"Host":null,e.startTimestamp=lobbyStartTime;else if(document.querySelector(".game-page")){0===gameStartTime&&(gameStartTime=Math.floor(Date.now()/1e3)),lobbyStartTime=0;const t=document.querySelectorAll(".actual-log");for(let a=t.length-1;a>=0;a--){if(!t[a])continue;const r=t[a].textContent.trim();if(logRegex.test(r)){e.state=r;break}}e.details=`In Game (${document.querySelectorAll(".spec-list-line").length} Players)`,e.startTimestamp=gameStartTime}else document.querySelector(".login-page")||document.querySelector(".lobby-page")?(gameStartTime=lobbyStartTime=0,e.details="Main Menu"):document.querySelector(".loading-spinner")&&(gameStartTime=lobbyStartTime=0,e.details="Loading...");e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsU0FBVyxhQUFjQyxpQkFBbUJDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsS0FDeEUsSUFBSUMsZUFBZ0JDLGNBQ3BCVixTQUFTVyxHQUFHLGNBQWMsS0FDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSx5RUFDZkMsZUFBZ0JWLGtCQUVwQixHQUFJVyxTQUFTQyxjQUFjLGNBQ3ZCRCxTQUFTQyxjQUFjLGVBQ0EsSUFBbkJQLGlCQUNBQSxlQUFpQkosS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxNQUM3Q0UsY0FBZ0IsRUFDaEJFLEVBQWFLLFFBQVUsYUFBYUYsU0FDL0JDLGNBQWMsMkJBQ2RFLFlBQVlDLFNBQ2pCUCxFQUFhUSxNQUNUTCxTQUFTQyxjQUFjLGtCQUNuQkQsU0FBU0MsY0FBYyx3Q0FDckIsT0FDQSxLQUNWSixFQUFhRSxlQUFpQkwsb0JBRTdCLEdBQUlNLFNBQVNDLGNBQWMsY0FBZSxDQUNyQixJQUFsQk4sZ0JBQ0FBLGNBQWdCTCxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLE1BQzVDQyxlQUFpQixFQUNqQixNQUFNWSxFQUFPTixTQUFTTyxpQkFBaUIsZUFDdkMsSUFBSyxJQUFJQyxFQUFJRixFQUFLRyxPQUFTLEVBQUdELEdBQUssRUFBR0EsSUFBSyxDQUN2QyxJQUFLRixFQUFLRSxHQUNOLFNBQ0osTUFBTUUsRUFBVUosRUFBS0UsR0FBR0wsWUFBWUMsT0FDcEMsR0FBSWhCLFNBQVN1QixLQUFLRCxHQUFVLENBQ3hCYixFQUFhUSxNQUFRSyxFQUNyQixLQUNKLENBQ0osQ0FDQWIsRUFBYUssUUFBVSxZQUFZRixTQUFTTyxpQkFBaUIsbUJBQW1CRSxrQkFDaEZaLEVBQWFFLGVBQWlCSixhQUNsQyxNQUNTSyxTQUFTQyxjQUFjLGdCQUM1QkQsU0FBU0MsY0FBYyxnQkFDdkJOLGNBQWdCRCxlQUFpQixFQUNqQ0csRUFBYUssUUFBVSxhQUVsQkYsU0FBU0MsY0FBYyxzQkFDNUJOLGNBQWdCRCxlQUFpQixFQUNqQ0csRUFBYUssUUFBVSxjQUV2QkwsRUFBYUssUUFDYmpCLFNBQVMyQixZQUFZZixHQUVyQlosU0FBUzJCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODQ5Njg0NjU4NTYzMDU1NjI3XCIsXG59KSwgbG9nUmVnZXggPSAvXi4rIC0gXFx3KyQvLCBnZW5lcmFsU3RhcnRUaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgbG9iYnlTdGFydFRpbWUsIGdhbWVTdGFydFRpbWU7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0QvRG9taW5pb24lMjBPbmxpbmUvYXNzZXRzL2xvZ28uanBnXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBnZW5lcmFsU3RhcnRUaW1lLFxuICAgIH07XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktdGFibGVcIikgfHxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS1wYWdlXCIpKSB7XG4gICAgICAgIGlmIChsb2JieVN0YXJ0VGltZSA9PT0gMClcbiAgICAgICAgICAgIGxvYmJ5U3RhcnRUaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGdhbWVTdGFydFRpbWUgPSAwO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBJbiBMb2JieTogJHtkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGFydGljaXBhbnQtbGlzdC1sYWJlbFwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ydWxlcy1lZGl0b3JcIikgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bbmctY2xpY2s9XCIkY3RybC5lZGl0VGFibGUoKVwiXScpXG4gICAgICAgICAgICAgICAgPyBcIkhvc3RcIlxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gbG9iYnlTdGFydFRpbWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1wYWdlXCIpKSB7XG4gICAgICAgIGlmIChnYW1lU3RhcnRUaW1lID09PSAwKVxuICAgICAgICAgICAgZ2FtZVN0YXJ0VGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBsb2JieVN0YXJ0VGltZSA9IDA7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdHVhbC1sb2dcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSBsb2dzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoIWxvZ3NbaV0pXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBsb2dUZXh0ID0gbG9nc1tpXS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAobG9nUmVnZXgudGVzdChsb2dUZXh0KSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGxvZ1RleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgSW4gR2FtZSAoJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNwZWMtbGlzdC1saW5lXCIpLmxlbmd0aH0gUGxheWVycylgO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBnYW1lU3RhcnRUaW1lO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLXBhZ2VcIikgfHxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2JieS1wYWdlXCIpKSB7XG4gICAgICAgIGdhbWVTdGFydFRpbWUgPSBsb2JieVN0YXJ0VGltZSA9IDA7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJNYWluIE1lbnVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXNwaW5uZXJcIikpIHtcbiAgICAgICAgZ2FtZVN0YXJ0VGltZSA9IGxvYmJ5U3RhcnRUaW1lID0gMDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvYWRpbmcuLi5cIjtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhSUVVGUkxFZEJRVWNzV1VGQldTeEZRVU4yUWl4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTnNSQ3hKUVVGSkxHTkJRWE5DTEVWQlFVVXNZVUZCY1VJc1EwRkJRenRCUVVWc1JDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnhETEdGQlFXRXNSVUZEV2l4M1JVRkJkMFU3VVVGRGVrVXNZMEZCWXl4RlFVRkZMR2RDUVVGblFqdExRVU5vUXl4RFFVRkRPMGxCUlVZc1NVRkRReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTnVReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RlFVTndRenRSUVVORUxFbEJRVWtzWTBGQll5eExRVUZMTEVOQlFVTTdXVUZCUlN4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGVrVXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWc1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1VVRkJVVHRoUVVNeFF5eGhRVUZoTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU03WVVGRGVFTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGRrSXNXVUZCV1N4RFFVRkRMRXRCUVVzN1dVRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4bFFVRmxMRU5CUVVNN1owSkJRM1pETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2MwTkJRWE5ETEVOQlFVTTdaMEpCUXpkRUxFTkJRVU1zUTBGQlF5eE5RVUZOTzJkQ1FVTlNMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRFZDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR05CUVdNc1EwRkJRenRMUVVNM1F6dFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJUdFJRVU5vUkN4SlFVRkpMR0ZCUVdFc1MwRkJTeXhEUVVGRE8xbEJRVVVzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNaRkxHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGYmtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlIzUkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkJSU3hUUVVGVE8xbEJSWFpDTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkhNME1zU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8yZENRVU16UWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF6dG5Ra0ZETjBJc1RVRkJUVHRoUVVOT08xTkJRMFE3VVVGRlJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUTNSQ0xGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRTFCUXpsRExGZEJRVmNzUTBGQlF6dFJRVU5hTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1lVRkJZU3hEUVVGRE8wdEJRelZETzFOQlFVMHNTVUZEVGl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHRkJRV0VzUTBGQlF6dFJRVU55UXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVU53UXp0UlFVTkVMR0ZCUVdFc1IwRkJSeXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyNURMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eERRVUZETzB0QlEyNURPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFVkJRVVU3VVVGRGRFUXNZVUZCWVN4SFFVRkhMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGJrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFTkJRVU03UzBGRGNFTTdTVUZGUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenM3VVVGRGVFUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImxvZ1JlZ2V4IiwiZ2VuZXJhbFN0YXJ0VGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJsb2JieVN0YXJ0VGltZSIsImdhbWVTdGFydFRpbWUiLCJvbiIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRldGFpbHMiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJzdGF0ZSIsImxvZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImxvZ1RleHQiLCJ0ZXN0Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;