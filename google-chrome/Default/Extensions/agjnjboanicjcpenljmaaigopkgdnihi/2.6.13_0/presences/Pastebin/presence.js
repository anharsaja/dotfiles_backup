var __webpack_exports__={};const presence=new Presence({clientId:"630194809763790871"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Pastebin/assets/logo.png",startTimestamp:browsingTimestamp},t=window.location.pathname.replace(/^\/([^/]*).*$/,"$1");let s=document.title.slice(15);8===t.length?(e.details="Viewing a paste",e.state=`${document.querySelector(".paste_box_line1").getAttribute("title")} | ${t}`):(e.details="Browsing pastebin","#1 paste tool since 2002!"===s&&(s="Homepage"),e.state=s),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWMsS0FDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSxnRUFDZkMsZUFBZ0JSLG1CQUNqQlMsRUFBVUMsT0FBT0MsU0FBU0MsU0FBU0MsUUFBUSxnQkFBaUIsTUFDL0QsSUFBSUMsRUFBY0MsU0FBU0MsTUFBTUMsTUFBTSxJQUNoQixJQUFuQlIsRUFBUVMsUUFDUlosRUFBYWEsUUFBVSxrQkFDdkJiLEVBQWFjLE1BQVEsR0FBR0wsU0FDbkJNLGNBQWMsb0JBQ2RDLGFBQWEsY0FBY2IsTUFHaENILEVBQWFhLFFBQVUsb0JBQ0gsOEJBQWhCTCxJQUNBQSxFQUFjLFlBQ2xCUixFQUFhYyxNQUFRTixHQUVyQlIsRUFBYWEsUUFDYnRCLFNBQVMwQixZQUFZakIsR0FFckJULFNBQVMwQixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYzMDE5NDgwOTc2Mzc5MDg3MVwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1AvUGFzdGViaW4vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB1cmxEYXRhID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8oW14vXSopLiokLywgXCIkMVwiKTtcbiAgICBsZXQgY3VycmVudFBhZ2UgPSBkb2N1bWVudC50aXRsZS5zbGljZSgxNSk7XG4gICAgaWYgKHVybERhdGEubGVuZ3RoID09PSA4KSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFzdGVcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBhc3RlX2JveF9saW5lMVwiKVxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpfSB8ICR7dXJsRGF0YX1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHBhc3RlYmluXCI7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gXCIjMSBwYXN0ZSB0b29sIHNpbmNlIDIwMDIhXCIpXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IFwiSG9tZXBhZ2VcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gY3VycmVudFBhZ2U7XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4SFFVRkhMRVZCUVVVN1NVRkRPVUlzVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExHRkJRV0VzUlVGRFdpd3JSRUZCSzBRN1VVRkRhRVVzWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eEZRVU5FTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMjVGTEVsQlFVa3NWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUlRORExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRla0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFJRVU42UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzVVVGQlVUdGhRVU01UWl4aFFVRmhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTTdZVUZEYWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEU5QlFVOHNSVUZCUlN4RFFVRkRPMHRCUTNaRE8xTkJRVTA3VVVGRFRpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzFGQlJUTkRMRWxCUVVrc1YwRkJWeXhMUVVGTExESkNRVUV5UWp0WlFVRkZMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRk1VVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU03UzBGRGFrTTdTVUZGUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenM3VVVGRGVFUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwidXJsRGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiY3VycmVudFBhZ2UiLCJkb2N1bWVudCIsInRpdGxlIiwic2xpY2UiLCJsZW5ndGgiLCJkZXRhaWxzIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;