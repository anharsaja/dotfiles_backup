var __webpack_exports__={};const presence=new Presence({clientId:"613393646330576931"});presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/N/NPM%20Package%20Registry/assets/logo.png"};"/"===document.location.pathname?t.details="Viewing the homepage":document.location.pathname.startsWith("/search")?(t.details="Searching...",t.state=document.location.search.substr(3)):document.location.pathname.startsWith("/package/")?(t.details="Viewing a package",t.state="Fetching...",4===document.location.pathname.split("/").length?t.state=`${document.location.pathname.split("/")[2]}/${document.location.pathname.split("/")[3]}`:t.state=document.location.pathname.split("/")[2]):document.location.pathname.startsWith("/~")&&(t.details="Viewing a profile...",t.state=document.location.pathname.substr(3)),presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZEYsU0FBU0csR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLGlGQUVnQixNQUEvQkMsU0FBU0MsU0FBU0MsU0FDbEJKLEVBQWFLLFFBQVUsdUJBQ2xCSCxTQUFTQyxTQUFTQyxTQUFTRSxXQUFXLFlBQzNDTixFQUFhSyxRQUFVLGVBQ3ZCTCxFQUFhTyxNQUFRTCxTQUFTQyxTQUFTSyxPQUFPQyxPQUFPLElBRWhEUCxTQUFTQyxTQUFTQyxTQUFTRSxXQUFXLGNBQzNDTixFQUFhSyxRQUFVLG9CQUN2QkwsRUFBYU8sTUFBUSxjQUNnQyxJQUFqREwsU0FBU0MsU0FBU0MsU0FBU00sTUFBTSxLQUFLQyxPQUN0Q1gsRUFBYU8sTUFBUSxHQUFHTCxTQUFTQyxTQUFTQyxTQUFTTSxNQUFNLEtBQUssTUFBTVIsU0FBU0MsU0FBU0MsU0FBU00sTUFBTSxLQUFLLEtBRzFHVixFQUFhTyxNQUFRTCxTQUFTQyxTQUFTQyxTQUFTTSxNQUFNLEtBQUssSUFFMURSLFNBQVNDLFNBQVNDLFNBQVNFLFdBQVcsUUFDM0NOLEVBQWFLLFFBQVUsdUJBQ3ZCTCxFQUFhTyxNQUFRTCxTQUFTQyxTQUFTQyxTQUFTSyxPQUFPLElBRTNEZCxTQUFTaUIsWUFBWVosRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2MTMzOTM2NDYzMzA1NzY5MzFcIixcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9OL05QTSUyMFBhY2thZ2UlMjBSZWdpc3RyeS9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBob21lcGFnZVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvc2VhcmNoXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmcuLi5cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLnN1YnN0cigzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wYWNrYWdlL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHBhY2thZ2VcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJGZXRjaGluZy4uLlwiO1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdfS8ke2RvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9+XCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcHJvZmlsZS4uLlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoMyk7XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFVVklMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzV1VGQldTeEhRVUZwUWp0UlFVTnNReXhoUVVGaExFVkJRMW9zSzBWQlFTdEZPMHRCUTJoR0xFTkJRVU03U1VGRFJpeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExFZEJRVWM3VVVGRGNrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0VFFVTXhReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFJRVU14UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHTkJRV01zUTBGQlF6dFJRVU4wUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU40UkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xRkJRemxFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdVVUZETTBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZEYmtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTjJSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVNdlJDeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTjRReXhGUVVGRkxFTkJRVU03VTBGRFNEczdXVUZCVFN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTnlSVHRUUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFGQlEzWkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1VVRkRPVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRNVVE3U1VGRFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZGV0YWlscyIsInN0YXJ0c1dpdGgiLCJzdGF0ZSIsInNlYXJjaCIsInN1YnN0ciIsInNwbGl0IiwibGVuZ3RoIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;