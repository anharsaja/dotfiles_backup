var __webpack_exports__={};const presence=new Presence({clientId:"633801594541965334"}),browsingTimestamp=Math.floor(Date.now()/1e3);let title;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/Dyno/assets/logo.png",startTimestamp:browsingTimestamp};document.location.pathname.includes("/bot")?(e.details="Reading about the bot",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/account")?e.details="Viewing their account":document.location.pathname.includes("/manage/")?(e.details="Managing the settings of",title=document.querySelector("#dashboard-mount > div > div.column.nav-sidebar > aside > div.guild-header > h3 > div > div"),e.state=`server: ${title.textContent}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png"):document.location.pathname.includes("/servers")?(e.details="Browsing through the",e.state="server listings"):document.location.pathname.includes("/commands")?e.details="Viewing all the commands":document.location.pathname.includes("faq")?(e.details="Reading the FAQ",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/status")?e.details="Viewing the status":document.location.pathname.includes("/upgrade")&&(e.details="Viewing Dyno Premium Plans"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLE1BQ0pSLFNBQVNTLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSw0REFDZkMsZUFBZ0JWLG1CQUVoQlcsU0FBU0MsU0FBU0MsU0FBU0MsU0FBUyxTQUNwQ04sRUFBYU8sUUFBVSx3QkFDdkJQLEVBQWFRLGNBQWdCLG1EQUV4QkwsU0FBU0MsU0FBU0MsU0FBU0MsU0FBUyxZQUN6Q04sRUFBYU8sUUFBVSx3QkFDbEJKLFNBQVNDLFNBQVNDLFNBQVNDLFNBQVMsYUFDekNOLEVBQWFPLFFBQVUsMkJBQ3ZCVixNQUFRTSxTQUFTTSxjQUFjLCtGQUMvQlQsRUFBYVUsTUFBUSxXQUFXYixNQUFNYyxjQUN0Q1gsRUFBYVEsY0FBZ0IsbURBRXhCTCxTQUFTQyxTQUFTQyxTQUFTQyxTQUFTLGFBQ3pDTixFQUFhTyxRQUFVLHVCQUN2QlAsRUFBYVUsTUFBUSxtQkFFaEJQLFNBQVNDLFNBQVNDLFNBQVNDLFNBQVMsYUFDekNOLEVBQWFPLFFBQVUsMkJBQ2xCSixTQUFTQyxTQUFTQyxTQUFTQyxTQUFTLFFBQ3pDTixFQUFhTyxRQUFVLGtCQUN2QlAsRUFBYVEsY0FBZ0IsbURBRXhCTCxTQUFTQyxTQUFTQyxTQUFTQyxTQUFTLFdBQ3pDTixFQUFhTyxRQUFVLHFCQUNsQkosU0FBU0MsU0FBU0MsU0FBU0MsU0FBUyxjQUN6Q04sRUFBYU8sUUFBVSw4QkFDdkJQLEVBQWFPLFFBQ2JsQixTQUFTdUIsWUFBWVosR0FFckJYLFNBQVN1QixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYzMzgwMTU5NDU0MTk2NTMzNFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgdGl0bGU7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0QvRHluby9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2JvdFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhYm91dCB0aGUgYm90XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9hY2NvdW50XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGVpciBhY2NvdW50XCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvbWFuYWdlL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWFuYWdpbmcgdGhlIHNldHRpbmdzIG9mXCI7XG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXNoYm9hcmQtbW91bnQgPiBkaXYgPiBkaXYuY29sdW1uLm5hdi1zaWRlYmFyID4gYXNpZGUgPiBkaXYuZ3VpbGQtaGVhZGVyID4gaDMgPiBkaXYgPiBkaXZcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBzZXJ2ZXI6ICR7dGl0bGUudGV4dENvbnRlbnR9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3dyaXRpbmcucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3NlcnZlcnNcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRocm91Z2ggdGhlXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwic2VydmVyIGxpc3RpbmdzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NvbW1hbmRzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbGwgdGhlIGNvbW1hbmRzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJmYXFcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIEZBUVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvc3RhdHVzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgc3RhdHVzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdXBncmFkZVwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgRHlubyBQcmVtaXVtIFBsYW5zXCI7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEV0QlFXdENMRU5CUVVNN1FVRkZka0lzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnhETEdGQlFXRXNSVUZCUlN3eVJFRkJNa1E3VVVGRE1VVXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFqdExRVU5xUXl4RFFVRkRPMGxCUlVZc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VVVGRGFFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0UlFVTXZReXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSRUZCYVVJc1EwRkJRenRMUVVNMVF6dFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTjZSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xTkJRek5ETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMUZCUTNwRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03VVVGRGJFUXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRemRDTERaR1FVRTJSaXhEUVVNM1JpeERRVUZETzFGQlEwWXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndSQ3haUVVGWkxFTkJRVU1zWVVGQllTeHZSRUZCYVVJc1EwRkJRenRMUVVNMVF6dFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMUZCUXpORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03VVVGRE9VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0TFFVTjJRenRUUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU14UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEQkNRVUV3UWl4RFFVRkRPMU5CUXpsRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlEzQkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRla01zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03UzBGRE5VTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkRlRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dFRRVU40UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNN1VVRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3MFFrRkJORUlzUTBGQlF6dEpRVVZ5UkN4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenM3VVVGRGVFUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiZGV0YWlscyIsInNtYWxsSW1hZ2VLZXkiLCJxdWVyeVNlbGVjdG9yIiwic3RhdGUiLCJ0ZXh0Q29udGVudCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;