var __webpack_exports__={};const presence=new Presence({clientId:"651438286962688044"});presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CHIP%20Online/assets/logo.png"};window.location.pathname.startsWith("/haber/")?(e.details="Bir haberi okuyor:",e.state=document.querySelector("#colana > article > h1").textContent):window.location.pathname.endsWith("video/")?(e.details="Bütün videolara göz atıyor.",e.state="CHIP Online"):window.location.pathname.endsWith("haber/")?(e.state="Bütün haberlere göz atıyor.",e.details="CHIP Online"):window.location.pathname.endsWith("inceleme/")?(e.state="Bütün incelemelere göz atıyor.",e.details="CHIP Online"):window.location.pathname.startsWith("/inceleme/")?(e.state=document.querySelector("#anacontainer > h1").textContent,e.details="Bir incelemeyi okuyor:"):window.location.pathname.startsWith("/blog/")?(e.state=document.querySelector("#article-body > h1").textContent,e.details="Bir blog okuyor:"):window.location.pathname.endsWith("forum/")?e.details="Tüm forumlara göz atıyor.":window.location.pathname.endsWith("canli/")?(e.state="CHIP Online",e.details="Tüm Tech-Talk arşivine göz atıyor."):window.location.pathname.startsWith("/forum/")&&(e.state="Adlı konuyu/gönderiyi okuyor.",e.details=document.querySelector("#forumwrap > h1").textContent),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZEYsU0FBU0csR0FBRyxjQUFjLEtBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsc0VBRWZDLE9BQU9DLFNBQVNDLFNBQVNDLFdBQVcsWUFDcENMLEVBQWFNLFFBQVUscUJBQ3ZCTixFQUFhTyxNQUFRQyxTQUFTQyxjQUFjLDBCQUEwQkMsYUFFakVSLE9BQU9DLFNBQVNDLFNBQVNPLFNBQVMsV0FDdkNYLEVBQWFNLFFBQVUsOEJBQ3ZCTixFQUFhTyxNQUFRLGVBRWhCTCxPQUFPQyxTQUFTQyxTQUFTTyxTQUFTLFdBQ3ZDWCxFQUFhTyxNQUFRLDhCQUNyQlAsRUFBYU0sUUFBVSxlQUVsQkosT0FBT0MsU0FBU0MsU0FBU08sU0FBUyxjQUN2Q1gsRUFBYU8sTUFBUSxpQ0FDckJQLEVBQWFNLFFBQVUsZUFFbEJKLE9BQU9DLFNBQVNDLFNBQVNDLFdBQVcsZUFDekNMLEVBQWFPLE1BQ1RDLFNBQVNDLGNBQWMsc0JBQXNCQyxZQUNqRFYsRUFBYU0sUUFBVSwwQkFFbEJKLE9BQU9DLFNBQVNDLFNBQVNDLFdBQVcsV0FDekNMLEVBQWFPLE1BQ1RDLFNBQVNDLGNBQWMsc0JBQXNCQyxZQUNqRFYsRUFBYU0sUUFBVSxvQkFFbEJKLE9BQU9DLFNBQVNDLFNBQVNPLFNBQVMsVUFDdkNYLEVBQWFNLFFBQVUsNEJBQ2xCSixPQUFPQyxTQUFTQyxTQUFTTyxTQUFTLFdBQ3ZDWCxFQUFhTyxNQUFRLGNBQ3JCUCxFQUFhTSxRQUFVLHNDQUVsQkosT0FBT0MsU0FBU0MsU0FBU0MsV0FBVyxhQUN6Q0wsRUFBYU8sTUFBUSxnQ0FDckJQLEVBQWFNLFFBQ1RFLFNBQVNDLGNBQWMsbUJBQW1CQyxhQUU5Q1YsRUFBYU0sUUFDYlYsU0FBU2dCLFlBQVlaLEdBRXJCSixTQUFTZ0IsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NTE0MzgyODY5NjI2ODgwNDRcIixcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NISVAlMjBPbmxpbmUvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvaGFiZXIvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCaXIgaGFiZXJpIG9rdXlvcjpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xhbmEgPiBhcnRpY2xlID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcInZpZGVvL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQsO8dMO8biB2aWRlb2xhcmEgZ8O2eiBhdMSxeW9yLlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNISVAgT25saW5lXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcImhhYmVyL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkLDvHTDvG4gaGFiZXJsZXJlIGfDtnogYXTEsXlvci5cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNISVAgT25saW5lXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcImluY2VsZW1lL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkLDvHTDvG4gaW5jZWxlbWVsZXJlIGfDtnogYXTEsXlvci5cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNISVAgT25saW5lXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2luY2VsZW1lL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbmFjb250YWluZXIgPiBoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJpciBpbmNlbGVtZXlpIG9rdXlvcjpcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYmxvZy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1ib2R5ID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCaXIgYmxvZyBva3V5b3I6XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcImZvcnVtL1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlTDvG0gZm9ydW1sYXJhIGfDtnogYXTEsXlvci5cIjtcbiAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuZW5kc1dpdGgoXCJjYW5saS9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDSElQIE9ubGluZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVMO8bSBUZWNoLVRhbGsgYXLFn2l2aW5lIGfDtnogYXTEsXlvci5cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZm9ydW0vXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQWRsxLEga29udXl1L2fDtm5kZXJpeWkgb2t1eW9yLlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvcnVtd3JhcCA+IGgxXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJUdEpRVU01UWl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGJFTXNZVUZCWVN4RlFVTmFMRzlGUVVGdlJUdExRVU55UlN4RFFVRkRPMGxCUlVZc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VVVGRGJrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0UlFVTTFReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpGRExIZENRVUYzUWl4RFFVTjRRaXhEUVVGRExGZEJRVmNzUTBGQlF6dExRVU5rTzFOQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3MlFrRkJOa0lzUTBGQlF6dFJRVU55UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHRkJRV0VzUTBGQlF6dExRVU51UXp0VFFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xRkJRM1pFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc05rSkJRVFpDTEVOQlFVTTdVVUZEYmtRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGhRVUZoTEVOQlFVTTdTMEZEY2tNN1UwRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdFJRVU14UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHZERRVUZuUXl4RFFVRkRPMUZCUTNSRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZVUZCWVN4RFFVRkRPMHRCUTNKRE8xTkJRVTBzU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVTdVVUZETjBRc1dVRkJXU3hEUVVGRExFdEJRVXM3V1VGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVNeFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzB0QlEyaEVPMU5CUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3VVVGRGVrUXNXVUZCV1N4RFFVRkRMRXRCUVVzN1dVRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8wdEJRekZETzFOQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUTNKRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNa0pCUVRKQ0xFTkJRVU03VTBGREwwTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRja1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRia01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlEwRkJiME1zUTBGQlF6dExRVU0xUkR0VFFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xRkJRekZFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc0swSkJRU3RDTEVOQlFVTTdVVUZEY2tRc1dVRkJXU3hEUVVGRExFOUJRVTg3V1VGRGJrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRMUVVOMlJEdEpRVVZFTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPenRSUVVONFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkROMElzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiZGV0YWlscyIsInN0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJlbmRzV2l0aCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;