var __webpack_exports__={};const presence=new Presence({clientId:"796446671617130567"}),timeS=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/0.png",smallImageText:"OpenClassrooms"},s=window.location.pathname.toLowerCase();if("/fr/"===s||"/en/"===s)e.details="Home page";else if(s.includes("/fr/dashboard")||s.includes("/en/dashboard"))s.includes("/fr/dashboard/courses")||s.includes("/en/dashboard/courses")?(e.details="Dashboard",e.state=`Browsing: ${document.querySelectorAll(".Mui-selected")[0].querySelectorAll("span")[0].textContent}`,e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png"):"/fr/dashboard/paths"!==s&&"/en/dashboard/paths"!==s||(e.details="Dashboard",e.state=`Browsing: ${document.querySelectorAll(".jss326")[1].textContent}`,e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png");else if("/fr/courses"===s||"fr/courses/"===s||s.includes("/fr/search")||s.includes("/en/search"))e.details="Courses main page",e.state="Looking for a course",e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png";else if("/en/paths"===s||"/fr/paths"===s)e.details="Paths main page",e.state="Looking for a path",e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png";else if(s.includes("/fr/paths")||s.includes("/en/paths"))e.details="Looking for a path",e.state=`Looking at ${document.title.replace(" - OpenClassrooms","")}`,e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png";else if(s.includes("/fr/courses")||s.includes("/en/courses")){if(document.body.contains(document.querySelectorAll(".breadcrumb__item")[3])){const s=document.querySelectorAll(".breadcrumb__item");e.details=`Reading: ${s[2].querySelectorAll("span")[0].textContent}`,e.state=`Chapter: ${s[3].textContent}`,e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png"}else document.body.contains(document.querySelectorAll(".breadcrumb__item")[3])||(e.details=`Reading: ${document.querySelectorAll(".breadcrumb__item")[2].textContent}`,e.state="Chapter: First chapter",e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png");e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png"}else e.details="Browsing:",e.state=document.title.replace(" - OpenClassrooms",""),e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/O/OpenClassrooms/assets/logo.png";e.startTimestamp=timeS,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsTUFBUUMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUNwQ1AsU0FBU1EsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLG1FQUNmQyxlQUFnQixrQkFDakJDLEVBQVVDLE9BQU9DLFNBQVNDLFNBQVNDLGNBQ3RDLEdBQWdCLFNBQVpKLEdBQWtDLFNBQVpBLEVBQ3RCSCxFQUFhUSxRQUFVLGlCQUN0QixHQUFJTCxFQUFRTSxTQUFTLGtCQUN0Qk4sRUFBUU0sU0FBUyxpQkFDYk4sRUFBUU0sU0FBUywwQkFDakJOLEVBQVFNLFNBQVMsMEJBQ2pCVCxFQUFhUSxRQUFVLFlBQ3ZCUixFQUFhVSxNQUFRLGFBQWFDLFNBQzdCQyxpQkFBaUIsaUJBQWlCLEdBQ2xDQSxpQkFBaUIsUUFBUSxHQUFHQyxjQUNqQ2IsRUFBYWMsY0FDVCx1RUFFYSx3QkFBWlgsR0FDTyx3QkFBWkEsSUFDQUgsRUFBYVEsUUFBVSxZQUN2QlIsRUFBYVUsTUFBUSxhQUFhQyxTQUFTQyxpQkFBaUIsV0FBVyxHQUFHQyxjQUMxRWIsRUFBYWMsY0FDVCw0RUFHUCxHQUFnQixnQkFBWlgsR0FDTyxnQkFBWkEsR0FDQUEsRUFBUU0sU0FBUyxlQUNqQk4sRUFBUU0sU0FBUyxjQUNqQlQsRUFBYVEsUUFBVSxvQkFDdkJSLEVBQWFVLE1BQVEsdUJBQ3JCVixFQUFhYyxjQUNULDJFQUVILEdBQWdCLGNBQVpYLEdBQXVDLGNBQVpBLEVBQ2hDSCxFQUFhUSxRQUFVLGtCQUN2QlIsRUFBYVUsTUFBUSxxQkFDckJWLEVBQWFjLGNBQ1QsMkVBRUgsR0FBSVgsRUFBUU0sU0FBUyxjQUFnQk4sRUFBUU0sU0FBUyxhQUN2RFQsRUFBYVEsUUFBVSxxQkFDdkJSLEVBQWFVLE1BQVEsY0FBY0MsU0FBU0ksTUFBTUMsUUFBUSxvQkFBcUIsTUFDL0VoQixFQUFhYyxjQUNULDJFQUVILEdBQUlYLEVBQVFNLFNBQVMsZ0JBQ3RCTixFQUFRTSxTQUFTLGVBQWdCLENBQ2pDLEdBQUlFLFNBQVNNLEtBQUtDLFNBQVNQLFNBQVNDLGlCQUFpQixxQkFBcUIsSUFBSyxDQUMzRSxNQUFNTyxFQUFjUixTQUFTQyxpQkFBaUIscUJBQzlDWixFQUFhUSxRQUFVLFlBQVlXLEVBQVksR0FBR1AsaUJBQWlCLFFBQVEsR0FBR0MsY0FDOUViLEVBQWFVLE1BQVEsWUFBWVMsRUFBWSxHQUFHTixjQUNoRGIsRUFBYWMsY0FDVCxxRUFDUixNQUNVSCxTQUFTTSxLQUFLQyxTQUFTUCxTQUFTQyxpQkFBaUIscUJBQXFCLE1BQzVFWixFQUFhUSxRQUFVLFlBQVlHLFNBQVNDLGlCQUFpQixxQkFBcUIsR0FBR0MsY0FDckZiLEVBQWFVLE1BQVEseUJBQ3JCVixFQUFhYyxjQUNULHVFQUVSZCxFQUFhYyxjQUNULHFFQUNSLE1BRUlkLEVBQWFRLFFBQVUsWUFDdkJSLEVBQWFVLE1BQVFDLFNBQVNJLE1BQU1DLFFBQVEsb0JBQXFCLElBQ2pFaEIsRUFBYWMsY0FDVCxzRUFFUmQsRUFBYW9CLGVBQWlCM0IsTUFDMUJPLEVBQWFRLFFBQ2JsQixTQUFTK0IsWUFBWXJCLEdBRXJCVixTQUFTK0IsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3OTY0NDY2NzE2MTcxMzA1NjdcIixcbn0pLCB0aW1lUyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9PL09wZW5DbGFzc3Jvb21zL2Fzc2V0cy8wLnBuZ1wiLFxuICAgICAgICBzbWFsbEltYWdlVGV4dDogXCJPcGVuQ2xhc3Nyb29tc1wiLFxuICAgIH0sIHdlYnBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAod2VicGF0aCA9PT0gXCIvZnIvXCIgfHwgd2VicGF0aCA9PT0gXCIvZW4vXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJIb21lIHBhZ2VcIjtcbiAgICBlbHNlIGlmICh3ZWJwYXRoLmluY2x1ZGVzKFwiL2ZyL2Rhc2hib2FyZFwiKSB8fFxuICAgICAgICB3ZWJwYXRoLmluY2x1ZGVzKFwiL2VuL2Rhc2hib2FyZFwiKSkge1xuICAgICAgICBpZiAod2VicGF0aC5pbmNsdWRlcyhcIi9mci9kYXNoYm9hcmQvY291cnNlc1wiKSB8fFxuICAgICAgICAgICAgd2VicGF0aC5pbmNsdWRlcyhcIi9lbi9kYXNoYm9hcmQvY291cnNlc1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkRhc2hib2FyZFwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEJyb3dzaW5nOiAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuTXVpLXNlbGVjdGVkXCIpWzBdXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpWzBdLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL08vT3BlbkNsYXNzcm9vbXMvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2VicGF0aCA9PT0gXCIvZnIvZGFzaGJvYXJkL3BhdGhzXCIgfHxcbiAgICAgICAgICAgIHdlYnBhdGggPT09IFwiL2VuL2Rhc2hib2FyZC9wYXRoc1wiKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRGFzaGJvYXJkXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQnJvd3Npbmc6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qc3MzMjZcIilbMV0udGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9PcGVuQ2xhc3Nyb29tcy9hc3NldHMvbG9nby5wbmdcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh3ZWJwYXRoID09PSBcIi9mci9jb3Vyc2VzXCIgfHxcbiAgICAgICAgd2VicGF0aCA9PT0gXCJmci9jb3Vyc2VzL1wiIHx8XG4gICAgICAgIHdlYnBhdGguaW5jbHVkZXMoXCIvZnIvc2VhcmNoXCIpIHx8XG4gICAgICAgIHdlYnBhdGguaW5jbHVkZXMoXCIvZW4vc2VhcmNoXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb3Vyc2VzIG1haW4gcGFnZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkxvb2tpbmcgZm9yIGEgY291cnNlXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9PL09wZW5DbGFzc3Jvb21zL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmICh3ZWJwYXRoID09PSBcIi9lbi9wYXRoc1wiIHx8IHdlYnBhdGggPT09IFwiL2ZyL3BhdGhzXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBhdGhzIG1haW4gcGFnZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkxvb2tpbmcgZm9yIGEgcGF0aFwiO1xuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9PcGVuQ2xhc3Nyb29tcy9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAod2VicGF0aC5pbmNsdWRlcyhcIi9mci9wYXRoc1wiKSB8fCB3ZWJwYXRoLmluY2x1ZGVzKFwiL2VuL3BhdGhzXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIGZvciBhIHBhdGhcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYExvb2tpbmcgYXQgJHtkb2N1bWVudC50aXRsZS5yZXBsYWNlKFwiIC0gT3BlbkNsYXNzcm9vbXNcIiwgXCJcIil9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL08vT3BlbkNsYXNzcm9vbXMvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdlYnBhdGguaW5jbHVkZXMoXCIvZnIvY291cnNlc1wiKSB8fFxuICAgICAgICB3ZWJwYXRoLmluY2x1ZGVzKFwiL2VuL2NvdXJzZXNcIikpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5icmVhZGNydW1iX19pdGVtXCIpWzNdKSkge1xuICAgICAgICAgICAgY29uc3QgY291cnNlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJyZWFkY3J1bWJfX2l0ZW1cIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBSZWFkaW5nOiAke2NvdXJzZUNsYXNzWzJdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpWzBdLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQ2hhcHRlcjogJHtjb3Vyc2VDbGFzc1szXS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9PL09wZW5DbGFzc3Jvb21zL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnJlYWRjcnVtYl9faXRlbVwiKVszXSkpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmc6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5icmVhZGNydW1iX19pdGVtXCIpWzJdLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNoYXB0ZXI6IEZpcnN0IGNoYXB0ZXJcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9PcGVuQ2xhc3Nyb29tcy9hc3NldHMvbG9nby5wbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9PcGVuQ2xhc3Nyb29tcy9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZzpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUucmVwbGFjZShcIiAtIE9wZW5DbGFzc3Jvb21zXCIsIFwiXCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTy9PcGVuQ2xhc3Nyb29tcy9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gdGltZVM7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZGZGtNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExHRkJRV0VzUlVGRFdpeHJSVUZCYTBVN1VVRkRia1VzWTBGQll5eEZRVUZGTEdkQ1FVRm5RanRMUVVOb1F5eEZRVU5FTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVZHNSQ3hKUVVGSkxFOUJRVThzUzBGQlN5eE5RVUZOTEVsQlFVa3NUMEZCVHl4TFFVRkxMRTFCUVUwN1VVRkRNME1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVRlhMRU5CUVVNN1UwRkZMMElzU1VGRFNpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJRenRSUVVOcVF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVOb1F6dFJRVVZFTEVsQlEwTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXgxUWtGQmRVSXNRMEZCUXp0WlFVTjZReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFVkJRM2hETzFsQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExFTkJRVU03V1VGRGJrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhoUVVOd1FpeFJRVUZSTzJsQ1FVTk9MR2RDUVVGblFpeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRGNFTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkRMMElzUlVGQlJTeERRVUZETzFsQlEwZ3NXVUZCV1N4RFFVRkRMR0ZCUVdFN1owSkJRM3BDTEhGRlFVRnhSU3hEUVVGRE8xTkJRM1pGTzJGQlFVMHNTVUZEVGl4UFFVRlBMRXRCUVVzc2NVSkJRWEZDTzFsQlEycERMRTlCUVU4c1MwRkJTeXh4UWtGQmNVSXNSVUZEYUVNN1dVRkRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXp0WlFVTnVReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlEzQkNMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVU42UXl4RlFVRkZMRU5CUVVNN1dVRkRTQ3haUVVGWkxFTkJRVU1zWVVGQllUdG5Ra0ZEZWtJc2NVVkJRWEZGTEVOQlFVTTdVMEZEZGtVN1MwRkZSRHRUUVVGTkxFbEJRMDRzVDBGQlR5eExRVUZMTEdGQlFXRTdVVUZEZWtJc1QwRkJUeXhMUVVGTExHRkJRV0U3VVVGRGVrSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU03VVVGRE9VSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGRE4wSTdVVUZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMUZCUXpORExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1dVRkRla0lzY1VWQlFYRkZMRU5CUVVNN1MwRkZka1U3VTBGQlRTeEpRVUZKTEU5QlFVOHNTMEZCU3l4WFFVRlhMRWxCUVVrc1QwRkJUeXhMUVVGTExGZEJRVmNzUlVGQlJUdFJRVU01UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03VVVGRE1VTXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1dVRkRla0lzY1VWQlFYRkZMRU5CUVVNN1MwRkZka1U3VTBGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRSUVVNeFJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzFGQlF6VkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWTBGQll5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkRlRVFzYlVKQlFXMUNMRVZCUTI1Q0xFVkJRVVVzUTBGRFJpeEZRVUZGTEVOQlFVTTdVVUZEU2l4WlFVRlpMRU5CUVVNc1lVRkJZVHRaUVVONlFpeHhSVUZCY1VVc1EwRkJRenRMUVVWMlJUdFRRVUZOTEVsQlEwNHNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU03VVVGREwwSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGRE9VSTdVVUZGUkN4SlFVTkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEzaEZPMWxCUlVRc1RVRkJUU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1dVRkRia1VzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVTjBRaXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkROVU1zUlVGQlJTeERRVUZETzFsQlEwZ3NXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhaUVVGWkxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRaUVVNNVJDeFpRVUZaTEVOQlFVTXNZVUZCWVR0blFrRkRla0lzY1VWQlFYRkZMRU5CUVVNN1UwRkRka1U3WVVGQlRTeEpRVU5PTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRGVrVTdXVUZGUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRM1JDTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlEyNUVMRVZCUVVVc1EwRkJRenRaUVVOSUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03V1VGRE9VTXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1owSkJRM3BDTEhGRlFVRnhSU3hEUVVGRE8xTkJRM1pGTzFGQlEwUXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1dVRkRla0lzY1VWQlFYRkZMRU5CUVVNN1MwRkRka1U3VTBGQlRUdFJRVU5PTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1YwRkJWeXhEUVVGRE8xRkJRMjVETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEY2tVc1dVRkJXU3hEUVVGRExHRkJRV0U3V1VGRGVrSXNjVVZCUVhGRkxFTkJRVU03UzBGRGRrVTdTVUZEUkN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVVZ3UXl4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenM3VVVGRGVFUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInRpbWVTIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJ3ZWJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRvTG93ZXJDYXNlIiwiZGV0YWlscyIsImluY2x1ZGVzIiwic3RhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0Q29udGVudCIsImxhcmdlSW1hZ2VLZXkiLCJ0aXRsZSIsInJlcGxhY2UiLCJib2R5IiwiY29udGFpbnMiLCJjb3Vyc2VDbGFzcyIsInN0YXJ0VGltZXN0YW1wIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;