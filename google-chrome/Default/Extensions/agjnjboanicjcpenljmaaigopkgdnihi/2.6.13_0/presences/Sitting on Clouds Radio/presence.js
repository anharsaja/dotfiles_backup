var __webpack_exports__={};const presence=new Presence({clientId:"689724677274337290"}),timeElapsed=Math.floor(Date.now()/1e3),slideshow=presence.createSlideshow();presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Sitting%20on%20Clouds%20Radio/assets/logo.png"},t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Sitting%20on%20Clouds%20Radio/assets/logo.png"};if(document.querySelector(".player_playing__N2IaC")){const s=document.querySelectorAll(".marquee_marquee__1MS_n");e.details=t.details=s[1].textContent,e.state=`By ${s[0].textContent}`,t.state=`From ${s[2].textContent}`,e.smallImageKey=t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/live.png",e.startTimestamp=t.startTimestamp=timeElapsed,slideshow.addSlide("slideArtist",e,5e3),slideshow.addSlide("slideAlbum",t,5e3)}else e.details="Not tuned in.",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png";slideshow.getSlides().length>0?presence.setActivity(slideshow):presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsWUFBY0MsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUFPQyxVQUFZUixTQUFTUyxrQkFDdEVULFNBQVNVLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSxzRkFDaEJDLEVBQW9CLENBQ25CRCxjQUFlLHNGQUVuQixHQUFJRSxTQUFTQyxjQUFjLDBCQUEyQixDQUNsRCxNQUFNQyxFQUFnQkYsU0FBU0csaUJBQWlCLDJCQUNoRE4sRUFBYU8sUUFBVUwsRUFBa0JLLFFBQ3JDRixFQUFjLEdBQUdHLFlBQ3JCUixFQUFhUyxNQUFRLE1BQU1KLEVBQWMsR0FBR0csY0FDNUNOLEVBQWtCTyxNQUFRLFFBQVFKLEVBQWMsR0FBR0csY0FDbkRSLEVBQWFVLGNBQWdCUixFQUFrQlEsY0FBZ0IsK0NBQy9EVixFQUFhVyxlQUFpQlQsRUFBa0JTLGVBQzVDcEIsWUFDSkssVUFBVWdCLFNBQVMsY0FBZVosRUFBYyxLQUNoREosVUFBVWdCLFNBQVMsYUFBY1YsRUFBbUIsSUFDeEQsTUFFSUYsRUFBYU8sUUFBVSxnQkFDdkJQLEVBQWFVLGNBQWdCLGdEQUU3QmQsVUFBVWlCLFlBQVlDLE9BQVMsRUFDL0IxQixTQUFTMkIsWUFBWW5CLFdBRXJCUixTQUFTMkIsWUFBWWYsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2ODk3MjQ2NzcyNzQzMzcyOTBcIixcbn0pLCB0aW1lRWxhcHNlZCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLCBzbGlkZXNob3cgPSBwcmVzZW5jZS5jcmVhdGVTbGlkZXNob3coKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TaXR0aW5nJTIwb24lMjBDbG91ZHMlMjBSYWRpby9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9LCBwcmVzZW5jZURhdGFTbGlkZSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU2l0dGluZyUyMG9uJTIwQ2xvdWRzJTIwUmFkaW8vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfcGxheWluZ19fTjJJYUNcIikpIHtcbiAgICAgICAgY29uc3Qgc29uZ0luZm9BcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFycXVlZV9tYXJxdWVlX18xTVNfblwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwcmVzZW5jZURhdGFTbGlkZS5kZXRhaWxzID1cbiAgICAgICAgICAgIHNvbmdJbmZvQXJyYXlbMV0udGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBCeSAke3NvbmdJbmZvQXJyYXlbMF0udGV4dENvbnRlbnR9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhU2xpZGUuc3RhdGUgPSBgRnJvbSAke3NvbmdJbmZvQXJyYXlbMl0udGV4dENvbnRlbnR9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBwcmVzZW5jZURhdGFTbGlkZS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9saXZlLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBwcmVzZW5jZURhdGFTbGlkZS5zdGFydFRpbWVzdGFtcCA9XG4gICAgICAgICAgICB0aW1lRWxhcHNlZDtcbiAgICAgICAgc2xpZGVzaG93LmFkZFNsaWRlKFwic2xpZGVBcnRpc3RcIiwgcHJlc2VuY2VEYXRhLCA1MDAwKTtcbiAgICAgICAgc2xpZGVzaG93LmFkZFNsaWRlKFwic2xpZGVBbGJ1bVwiLCBwcmVzZW5jZURhdGFTbGlkZSwgNTAwMCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTm90IHR1bmVkIGluLlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCI7XG4gICAgfVxuICAgIGlmIChzbGlkZXNob3cuZ2V0U2xpZGVzKCkubGVuZ3RoID4gMClcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoc2xpZGVzaG93KTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRek5ETEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03UVVGRmVFTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXh2UmtGQmIwWTdTMEZEY2tZc1JVRkRSQ3hwUWtGQmFVSXNSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTEc5R1FVRnZSanRMUVVOeVJpeERRVUZETzBsQlJVZ3NTVUZCU1N4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRVZCUVVVN1VVRkRja1FzVFVGQlRTeGhRVUZoTEVkQlFVY3NVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03VVVGRE0wVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4UFFVRlBPMWxCUXk5RExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRPVUlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTXhSQ3hwUWtGQmFVSXNRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkRha1VzV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eGhRVUZoTEdsRVFVRmpMRU5CUVVNN1VVRkRNMFVzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eGpRVUZqTzFsQlF6ZEVMRmRCUVZjc1EwRkJRenRSUVVOaUxGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RlFVRkZMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4wUkN4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUlVGQlJTeHBRa0ZCYVVJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU14UkR0VFFVRk5PMUZCUTA0c1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdVVUZEZGtNc1dVRkJXU3hEUVVGRExHRkJRV0VzYTBSQlFXVXNRMEZCUXp0TFFVTXhRenRKUVVORUxFbEJRVWtzVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenM3VVVGRGFrVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU42UXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInRpbWVFbGFwc2VkIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNsaWRlc2hvdyIsImNyZWF0ZVNsaWRlc2hvdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwicHJlc2VuY2VEYXRhU2xpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzb25nSW5mb0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImRldGFpbHMiLCJ0ZXh0Q29udGVudCIsInN0YXRlIiwic21hbGxJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiYWRkU2xpZGUiLCJnZXRTbGlkZXMiLCJsZW5ndGgiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;