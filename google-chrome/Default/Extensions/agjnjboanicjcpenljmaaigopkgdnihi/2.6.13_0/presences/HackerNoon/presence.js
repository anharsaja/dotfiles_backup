var __webpack_exports__={};const presence=new Presence({clientId:"651671730905153539"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=document.location.pathname,t=document.querySelector("#root > div.more > div.divider-title > h1"),o=document.querySelector("#root > div.profile-author > div.name > strong"),s=document.querySelector("#root > div.story.story-container > h1"),n={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/H/HackerNoon/assets/logo.png",startTimestamp:browsingTimestamp};e.includes("/tagged")&&t&&""!==t.textContent?(n.details="Viewing Tag:",n.state=`${t.textContent}`):s&&""!==s.textContent?(n.details="Reads a Post:",n.state=s.textContent):e.includes("/search")?(n.details="Searching:",n.state=document.querySelector("#searchbox > div > form > input").value,n.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/H/HackerNoon/assets/logo.png"):o&&""!==o.textContent?(n.details="Viewing User Profile:",n.state=o.textContent):(n.details="Viewing Page:",n.state="Homepage"),n.details?presence.setActivity(n):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQU9DLFNBQVNDLFNBQVNDLFNBQVVDLEVBQVNILFNBQVNJLGNBQWMsNkNBQThDQyxFQUFPTCxTQUFTSSxjQUFjLGtEQUFtREUsRUFBWU4sU0FBU0ksY0FBYywwQ0FBMkNHLEVBQWUsQ0FDalNDLGNBQWUsa0VBQ2ZDLGVBQWdCakIsbUJBRWhCTyxFQUFLVyxTQUFTLFlBQWNQLEdBQWlDLEtBQXZCQSxFQUFPUSxhQUM3Q0osRUFBYUssUUFBVSxlQUN2QkwsRUFBYU0sTUFBUSxHQUFHVixFQUFPUSxlQUUxQkwsR0FBdUMsS0FBMUJBLEVBQVVLLGFBQzVCSixFQUFhSyxRQUFVLGdCQUN2QkwsRUFBYU0sTUFBUVAsRUFBVUssYUFFMUJaLEVBQUtXLFNBQVMsWUFDbkJILEVBQWFLLFFBQVUsYUFDdkJMLEVBQWFNLE1BQVFiLFNBQVNJLGNBQWMsbUNBQW1DVSxNQUMvRVAsRUFBYVEsY0FDVCxtRUFFQ1YsR0FBNkIsS0FBckJBLEVBQUtNLGFBQ2xCSixFQUFhSyxRQUFVLHdCQUN2QkwsRUFBYU0sTUFBUVIsRUFBS00sY0FHMUJKLEVBQWFLLFFBQVUsZ0JBQ3ZCTCxFQUFhTSxNQUFRLFlBRXJCTixFQUFhSyxRQUNidkIsU0FBUzJCLFlBQVlULEdBRXJCbEIsU0FBUzJCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjUxNjcxNzMwOTA1MTUzNTM5XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLCB0YWdnZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3QgPiBkaXYubW9yZSA+IGRpdi5kaXZpZGVyLXRpdGxlID4gaDFcIiksIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3QgPiBkaXYucHJvZmlsZS1hdXRob3IgPiBkaXYubmFtZSA+IHN0cm9uZ1wiKSwgcG9zdHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290ID4gZGl2LnN0b3J5LnN0b3J5LWNvbnRhaW5lciA+IGgxXCIpLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9IL0hhY2tlck5vb24vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9O1xuICAgIGlmIChwYWdlLmluY2x1ZGVzKFwiL3RhZ2dlZFwiKSAmJiB0YWdnZWQgJiYgdGFnZ2VkLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFRhZzpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dGFnZ2VkLnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvc3R0aXRsZSAmJiBwb3N0dGl0bGUudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRzIGEgUG9zdDpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcG9zdHRpdGxlLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveCA+IGRpdiA+IGZvcm0gPiBpbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPVxuICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0gvSGFja2VyTm9vbi9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodXNlciAmJiB1c2VyLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFVzZXIgUHJvZmlsZTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdXNlci50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFBhZ2U6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiSG9tZXBhZ2VcIjtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZEZEVNc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6bENMREpEUVVFeVF5eERRVU16UXl4RlFVTkVMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0xUWl4blJFRkJaMFFzUTBGRGFFUXNSVUZEUkN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGFrTXNkME5CUVhkRExFTkJRM2hETEVWQlEwUXNXVUZCV1N4SFFVRnBRanRSUVVNMVFpeGhRVUZoTEVWQlExb3NhVVZCUVdsRk8xRkJRMnhGTEdOQlFXTXNSVUZCUlN4cFFrRkJhVUk3UzBGRGFrTXNRMEZCUXp0SlFVVklMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGZEJRVmNzUzBGQlN5eEZRVUZGTEVWQlFVVTdVVUZEY0VVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGpRVUZqTEVOQlFVTTdVVUZEZEVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRMUVVNM1F6dFRRVUZOTEVsQlFVa3NVMEZCVXl4SlFVRkpMRk5CUVZNc1EwRkJReXhYUVVGWExFdEJRVXNzUlVGQlJTeEZRVUZGTzFGQlEzSkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzFGQlEzWkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXp0TFFVTXpRenRUUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRSUVVOd1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJRenRSUVVOd1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRekZETEdsRFFVRnBReXhEUVVOcVF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTlNMRmxCUVZrc1EwRkJReXhoUVVGaE8xbEJRM3BDTEdsRlFVRnBSU3hEUVVGRE8wdEJRMjVGTzFOQlFVMHNTVUZCU1N4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUzBGQlN5eEZRVUZGTEVWQlFVVTdVVUZETTBNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDFRa0ZCZFVJc1EwRkJRenRSUVVNdlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03UzBGRGRFTTdVMEZCVFR0UlFVTk9MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzFGQlEzWkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVlVGQlZTeERRVUZETzB0QlEyaERPMGxCUlVRc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR6dFJRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03TzFGQlEzaEVMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwYWdlIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGFnZ2VkIiwicXVlcnlTZWxlY3RvciIsInVzZXIiLCJwb3N0dGl0bGUiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJpbmNsdWRlcyIsInRleHRDb250ZW50IiwiZGV0YWlscyIsInN0YXRlIiwidmFsdWUiLCJzbWFsbEltYWdlS2V5Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;