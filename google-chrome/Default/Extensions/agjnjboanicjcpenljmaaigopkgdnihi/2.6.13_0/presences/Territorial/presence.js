var __webpack_exports__={};const presence=new Presence({clientId:"1014903980410802237"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/Territorial/assets/logo.png",startTimestamp:browsingTimestamp},{href:a}=document.location,t=await presence.getSetting("buttons"),i=document.querySelector("#canvasA").getContext("2d");let s;const n=i.getImageData(100,550,400,60).data[0];57===n||27===n||45===n?(s=Number(i.getImageData(810,140,400,60).data[0]),55===s?e.details="Viewing clans leaderboard":4===s?e.details="Viewing players leaderboard":68===i.getImageData(810,80,400,60).data[0]?e.details="Viewing clans leaderboard":254===(s=i.getImageData(780,160,400,60).data[0])||8===s?e.details="Viewing emoji menu":8===(s=i.getImageData(1380,60,400,60).data[0])||56===s||94===(s=i.getImageData(1400,80,400,60).data[0])||46===s?e.details="Viewing options":14===(s=i.getImageData(500,220,400,60).data[0])||6===s||14===(s=i.getImageData(500,60,400,60).data[0])||6===s?e.details="Viewing color options":e.details="Viewing main menu",e.buttons=[{label:"View Menu",url:a}]):255===i.getImageData(1020,540,400,60).data[0]||255===i.getImageData(1116,502,400,60).data[0]?e.details="The game has ended":(e.details="Playing the game",e.buttons=[{label:"Play",url:a}]),t||delete e.buttons,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsbUVBQ2ZDLGVBQWdCVCxvQkFDakIsS0FBRVUsR0FBU0MsU0FBU0MsU0FBVUMsUUFBZ0JoQixTQUFTaUIsV0FBVyxXQUFZQyxFQUFVSixTQUN0RkssY0FBYyxZQUNkQyxXQUFXLE1BQ2hCLElBQUlDLEVBQ0osTUFBTUMsRUFBUUosRUFBUUssYUFBYSxJQUFLLElBQUssSUFBSyxJQUFJQyxLQUFLLEdBQzdDLEtBQVZGLEdBQTBCLEtBQVZBLEdBQTBCLEtBQVZBLEdBQ2hDRCxFQUFTSSxPQUFPUCxFQUFRSyxhQUFhLElBQUssSUFBSyxJQUFLLElBQUlDLEtBQUssSUFDbEQsS0FBWEgsRUFDT1gsRUFBYWdCLFFBQVUsNEJBQ2IsSUFBWEwsRUFDS1gsRUFBYWdCLFFBQVUsOEJBQzJCLEtBQW5EUixFQUFRSyxhQUFhLElBQUssR0FBSSxJQUFLLElBQUlDLEtBQUssR0FDdkNkLEVBQWFnQixRQUFVLDRCQUN1QyxPQUE5REwsRUFBU0gsRUFBUUssYUFBYSxJQUFLLElBQUssSUFBSyxJQUFJQyxLQUFLLEtBQzFDLElBQVhILEVBQ0dYLEVBQWFnQixRQUFVLHFCQUN1QyxLQUE5REwsRUFBU0gsRUFBUUssYUFBYSxLQUFNLEdBQUksSUFBSyxJQUFJQyxLQUFLLEtBQzFDLEtBQVhILEdBRWlFLE1BQTlEQSxFQUFTSCxFQUFRSyxhQUFhLEtBQU0sR0FBSSxJQUFLLElBQUlDLEtBQUssS0FDMUMsS0FBWEgsRUFGRFgsRUFBYWdCLFFBQVUsa0JBSTJDLE1BQTlETCxFQUFTSCxFQUFRSyxhQUFhLElBQUssSUFBSyxJQUFLLElBQUlDLEtBQUssS0FDMUMsSUFBWEgsR0FFZ0UsTUFBN0RBLEVBQVNILEVBQVFLLGFBQWEsSUFBSyxHQUFJLElBQUssSUFBSUMsS0FBSyxLQUN6QyxJQUFYSCxFQUZEWCxFQUFhZ0IsUUFBVSx3QkFJbkJoQixFQUFhZ0IsUUFBVSxvQkFDMURoQixFQUFhTSxRQUFVLENBQUMsQ0FBRVcsTUFBTyxZQUFhQyxJQUFLZixLQUVPLE1BQXJESyxFQUFRSyxhQUFhLEtBQU0sSUFBSyxJQUFLLElBQUlDLEtBQUssSUFDRSxNQUFyRE4sRUFBUUssYUFBYSxLQUFNLElBQUssSUFBSyxJQUFJQyxLQUFLLEdBQzlDZCxFQUFhZ0IsUUFBVSxzQkFFdkJoQixFQUFhZ0IsUUFBVSxtQkFDdkJoQixFQUFhTSxRQUFVLENBQUMsQ0FBRVcsTUFBTyxPQUFRQyxJQUFLZixLQUU3Q0csVUFDTU4sRUFBYU0sUUFDcEJOLEVBQWFnQixRQUNiMUIsU0FBUzZCLFlBQVluQixHQUVyQlYsU0FBUzZCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiMTAxNDkwMzk4MDQxMDgwMjIzN1wiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVGVycml0b3JpYWwvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IGhyZWYgfSA9IGRvY3VtZW50LmxvY2F0aW9uLCBidXR0b25zID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIiksIGNvbnRleHQgPSBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNjYW52YXNBXCIpXG4gICAgICAgIC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IHRyeU9uZTtcbiAgICBjb25zdCBzdGFydCA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDEwMCwgNTUwLCA0MDAsIDYwKS5kYXRhWzBdO1xuICAgIGlmIChzdGFydCA9PT0gNTcgfHwgc3RhcnQgPT09IDI3IHx8IHN0YXJ0ID09PSA0NSkge1xuICAgICAgICB0cnlPbmUgPSBOdW1iZXIoY29udGV4dC5nZXRJbWFnZURhdGEoODEwLCAxNDAsIDQwMCwgNjApLmRhdGFbMF0pO1xuICAgICAgICB0cnlPbmUgPT09IDU1XG4gICAgICAgICAgICA/IChwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjbGFucyBsZWFkZXJib2FyZFwiKVxuICAgICAgICAgICAgOiB0cnlPbmUgPT09IDRcbiAgICAgICAgICAgICAgICA/IChwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBwbGF5ZXJzIGxlYWRlcmJvYXJkXCIpXG4gICAgICAgICAgICAgICAgOiBjb250ZXh0LmdldEltYWdlRGF0YSg4MTAsIDgwLCA0MDAsIDYwKS5kYXRhWzBdID09PSA2OFxuICAgICAgICAgICAgICAgICAgICA/IChwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjbGFucyBsZWFkZXJib2FyZFwiKVxuICAgICAgICAgICAgICAgICAgICA6ICh0cnlPbmUgPSBjb250ZXh0LmdldEltYWdlRGF0YSg3ODAsIDE2MCwgNDAwLCA2MCkuZGF0YVswXSkgPT09IDI1NCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5T25lID09PSA4XG4gICAgICAgICAgICAgICAgICAgICAgICA/IChwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBlbW9qaSBtZW51XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICh0cnlPbmUgPSBjb250ZXh0LmdldEltYWdlRGF0YSgxMzgwLCA2MCwgNDAwLCA2MCkuZGF0YVswXSkgPT09IDggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlPbmUgPT09IDU2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgb3B0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRyeU9uZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDE0MDAsIDgwLCA0MDAsIDYwKS5kYXRhWzBdKSA9PT0gOTQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5T25lID09PSA0NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBvcHRpb25zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRyeU9uZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDUwMCwgMjIwLCA0MDAsIDYwKS5kYXRhWzBdKSA9PT0gMTQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeU9uZSA9PT0gNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY29sb3Igb3B0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodHJ5T25lID0gY29udGV4dC5nZXRJbWFnZURhdGEoNTAwLCA2MCwgNDAwLCA2MCkuZGF0YVswXSkgPT09IDE0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5T25lID09PSA2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAocHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY29sb3Igb3B0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIG1haW4gbWVudVwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IE1lbnVcIiwgdXJsOiBocmVmIH1dO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZXh0LmdldEltYWdlRGF0YSgxMDIwLCA1NDAsIDQwMCwgNjApLmRhdGFbMF0gPT09IDI1NSB8fFxuICAgICAgICBjb250ZXh0LmdldEltYWdlRGF0YSgxMTE2LCA1MDIsIDQwMCwgNjApLmRhdGFbMF0gPT09IDI1NSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlRoZSBnYW1lIGhhcyBlbmRlZFwiO1xuICAgIGVsc2Uge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUGxheWluZyB0aGUgZ2FtZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlBsYXlcIiwgdXJsOiBocmVmIH1dO1xuICAgIH1cbiAgICBpZiAoIWJ1dHRvbnMpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1lVRkJZU3hGUVVOYUxHdEZRVUZyUlR0UlFVTnVSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFVkJRMFFzUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVNMVFpeFBRVUZQTEVkQlFVY3NUVUZCVFN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVkxGTkJRVk1zUTBGQlF5eEZRVU4yUkN4UFFVRlBMRWRCUVVjc1VVRkJVVHRUUVVOb1FpeGhRVUZoTEVOQlFXOUNMRlZCUVZVc1EwRkJRenRUUVVNMVF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRjRUlzU1VGQlNTeE5RVUZqTEVOQlFVTTdTVUZEYmtJc1RVRkJUU3hMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE9VUXNTVUZCU1N4TFFVRkxMRXRCUVVzc1JVRkJSU3hKUVVGSkxFdEJRVXNzUzBGQlN5eEZRVUZGTEVsQlFVa3NTMEZCU3l4TFFVRkxMRVZCUVVVc1JVRkJSVHRSUVVOcVJDeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzVFVGQlRTeExRVUZMTEVWQlFVVTdXVUZEV2l4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERKQ1FVRXlRaXhEUVVGRE8xbEJRM1JFTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJRenRuUWtGRFpDeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEWkNRVUUyUWl4RFFVRkRPMmRDUVVONFJDeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlR0dlFrRkRka1FzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0dlFrRkRkRVFzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSenQzUWtGRGJFVXNUVUZCVFN4TFFVRkxMRU5CUVVNN2QwSkJRMlFzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0M1FrRkRMME1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenMwUWtGRGFFVXNUVUZCVFN4TFFVRkxMRVZCUVVVN05FSkJRMllzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXpzMFFrRkROVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUTBGRGFrVXNUVUZCVFN4TFFVRkxMRVZCUVVVN1owTkJRMllzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0blEwRkROVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSVHR2UTBGRGFrVXNUVUZCVFN4TFFVRkxMRU5CUVVNN2IwTkJRMlFzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0dlEwRkRiRVFzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSVHQzUTBGRGFFVXNUVUZCVFN4TFFVRkxMRU5CUVVNN2QwTkJRMlFzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0M1EwRkRiRVFzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMUZCUldoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hYUVVGWExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1MwRkRNMFE3VTBGQlRTeEpRVU5PTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVYzdVVUZEZUVRc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSenRSUVVWNFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzFOQlEzaERPMUZCUTBvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRSUVVNeFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8wdEJRM1JFTzBsQlEwUXNTVUZCU1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZETVVNc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR6dFJRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03TzFGQlEzaEVMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJocmVmIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImJ1dHRvbnMiLCJnZXRTZXR0aW5nIiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwidHJ5T25lIiwic3RhcnQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwiTnVtYmVyIiwiZGV0YWlscyIsImxhYmVsIiwidXJsIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;