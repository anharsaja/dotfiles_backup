var __webpack_exports__={};const presence=new Presence({clientId:"978557181911773214"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Geotastic/assets/logo.png",details:"Viewing an unsupported page",startTimestamp:browsingTimestamp};const t={"/home":{details:"Viewing the home page"},"/local-lobby":{details:"Creating a local lobby"},"/user-challenges/find":{details:"Browsing unplayed user challenges"},"/user-challenges/played":{details:"Browsing played user challenges"},"/user-challenges/own":{details:"Browsing created user challenges"},"/user-challenges/create":{details:"Creating a challenge"},"/matchmaking-lobby":{details:"In a matchmaking lobby"},"/community-map":{details:"Viewing the community map"},"/squad/list":{details:"Browsing the list of squads"},"/squad/management":{details:"Viewing the squad management page"},"/map-editor/maps":{details:"Creating a map"},"/map-editor/drop-groups":{details:"Viewing their drop groups"},"/events":{details:"Browsing past and future events"},"/account/profile":{details:"Viewing their profile settings"},"/account/statistics":{details:"Viewing their statistics"},"/account/trophies":{details:"Viewing their trophies"},"/account/friends":{details:"Viewing their friends"},"/account/supporter-status":{details:"Viewing their supporter status"},"/account/quota-consumption":{details:"Viewing their quota consumption"},"/account/account-settings":{details:"Viewing their account settings"}};for(const[n,a]of Object.entries(t))document.location.pathname.includes(n)&&(e={...e,...a});switch(!0){case document.location.pathname.includes("/challenge-details/"):e.details="Viewing a challenge";break;case document.location.pathname.includes("/online-lobby/"):e.details="In an online lobby";break;case document.location.pathname.includes("/events/"):e.details="Viewing an event",e.state=document.querySelector("h1").textContent;break;case document.location.pathname.includes("/help-out/"):e.details="Viewing ways to support Geotastic"}if("/play"===document.location.pathname||document.location.pathname.includes("/play-online/"))if(document.querySelector(".active-component-prepare"))e.details="Preparing for a round";else if(document.querySelector(".active-component-play"))if(document.querySelector(".side-bar"))e.details="In an online battle",e.state=`Playing map ${document.querySelector(".meta-infos").querySelectorAll("span")[1].textContent}`;else{const t=document.querySelector(".meta-infos").querySelectorAll("span");e.details=`Playing map ${t[1].textContent}`,e.state=`${t[2].textContent} ${t[3].textContent}`}else document.querySelector(".active-component-result")?(e.details=document.querySelector(".round-info").querySelector("span").textContent,e.state=`Score ${document.querySelector(".own-score").textContent}`):document.querySelector(".active-component-finished")?(e.details="Round finished",e.state=`Final score ${document.querySelector(".score").textContent}`):e.details="Playing a game";e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLElBQUlDLEVBQWUsQ0FDZkMsY0FBZSxpRUFDZkMsUUFBUyw4QkFDVEMsZUFBZ0JWLG1CQUVwQixNQUFNVyxFQUFRLENBQ1YsUUFBUyxDQUFFRixRQUFTLHlCQUNwQixlQUFnQixDQUFFQSxRQUFTLDBCQUMzQix3QkFBeUIsQ0FBRUEsUUFBUyxxQ0FDcEMsMEJBQTJCLENBQUVBLFFBQVMsbUNBQ3RDLHVCQUF3QixDQUFFQSxRQUFTLG9DQUNuQywwQkFBMkIsQ0FBRUEsUUFBUyx3QkFDdEMscUJBQXNCLENBQUVBLFFBQVMsMEJBQ2pDLGlCQUFrQixDQUFFQSxRQUFTLDZCQUM3QixjQUFlLENBQUVBLFFBQVMsK0JBQzFCLG9CQUFxQixDQUFFQSxRQUFTLHFDQUNoQyxtQkFBb0IsQ0FBRUEsUUFBUyxrQkFDL0IsMEJBQTJCLENBQUVBLFFBQVMsNkJBQ3RDLFVBQVcsQ0FBRUEsUUFBUyxtQ0FDdEIsbUJBQW9CLENBQUVBLFFBQVMsa0NBQy9CLHNCQUF1QixDQUFFQSxRQUFTLDRCQUNsQyxvQkFBcUIsQ0FBRUEsUUFBUywwQkFDaEMsbUJBQW9CLENBQUVBLFFBQVMseUJBQy9CLDRCQUE2QixDQUN6QkEsUUFBUyxrQ0FFYiw2QkFBOEIsQ0FDMUJBLFFBQVMsbUNBRWIsNEJBQTZCLENBQUVBLFFBQVMsbUNBRTVDLElBQUssTUFBT0csRUFBTUMsS0FBU0MsT0FBT0MsUUFBUUosR0FDbENLLFNBQVNDLFNBQVNDLFNBQVNDLFNBQVNQLEtBQ3BDTCxFQUFlLElBQUtBLEtBQWlCTSxJQUU3QyxRQUFRLEdBQ0osS0FBS0csU0FBU0MsU0FBU0MsU0FBU0MsU0FBUyx1QkFDckNaLEVBQWFFLFFBQVUsc0JBQ3ZCLE1BQ0osS0FBS08sU0FBU0MsU0FBU0MsU0FBU0MsU0FBUyxrQkFDckNaLEVBQWFFLFFBQVUscUJBQ3ZCLE1BQ0osS0FBS08sU0FBU0MsU0FBU0MsU0FBU0MsU0FBUyxZQUNyQ1osRUFBYUUsUUFBVSxtQkFDdkJGLEVBQWFhLE1BQVFKLFNBQVNLLGNBQWMsTUFBTUMsWUFDbEQsTUFDSixLQUFLTixTQUFTQyxTQUFTQyxTQUFTQyxTQUFTLGNBQ3JDWixFQUFhRSxRQUFVLG9DQUcvQixHQUFtQyxVQUEvQk8sU0FBU0MsU0FBU0MsVUFDbEJGLFNBQVNDLFNBQVNDLFNBQVNDLFNBQVMsaUJBQ3BDLEdBQUlILFNBQVNLLGNBQWMsNkJBQ3ZCZCxFQUFhRSxRQUFVLDZCQUN0QixHQUFJTyxTQUFTSyxjQUFjLDBCQUM1QixHQUFJTCxTQUFTSyxjQUFjLGFBQ3ZCZCxFQUFhRSxRQUFVLHNCQUN2QkYsRUFBYWEsTUFBUSxlQUFlSixTQUFTSyxjQUFjLGVBQWVFLGlCQUFpQixRQUFRLEdBQzlGRCxrQkFFSixDQUNELE1BQU1FLEVBQU9SLFNBQ1JLLGNBQWMsZUFDZEUsaUJBQWlCLFFBQ3RCaEIsRUFBYUUsUUFBVSxlQUFlZSxFQUFLLEdBQUdGLGNBQzlDZixFQUFhYSxNQUFRLEdBQUdJLEVBQUssR0FBR0YsZUFBZUUsRUFBSyxHQUFHRixhQUMzRCxNQUVLTixTQUFTSyxjQUFjLDZCQUM1QmQsRUFBYUUsUUFBVU8sU0FDbEJLLGNBQWMsZUFDZEEsY0FBYyxRQUFRQyxZQUMzQmYsRUFBYWEsTUFBUSxTQUFTSixTQUFTSyxjQUFjLGNBQWNDLGVBRTlETixTQUFTSyxjQUFjLCtCQUM1QmQsRUFBYUUsUUFBVSxpQkFDdkJGLEVBQWFhLE1BQVEsZUFBZUosU0FBU0ssY0FBYyxVQUFVQyxlQUdyRWYsRUFBYUUsUUFBVSxpQkFFM0JGLEVBQWFFLFFBQ2JaLFNBQVM0QixZQUFZbEIsR0FFckJWLFNBQVM0QixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjk3ODU1NzE4MTkxMTc3MzIxNFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlb3Rhc3RpYy9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIGFuIHVuc3VwcG9ydGVkIHBhZ2VcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgY29uc3QgcGFnZXMgPSB7XG4gICAgICAgIFwiL2hvbWVcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgdGhlIGhvbWUgcGFnZVwiIH0sXG4gICAgICAgIFwiL2xvY2FsLWxvYmJ5XCI6IHsgZGV0YWlsczogXCJDcmVhdGluZyBhIGxvY2FsIGxvYmJ5XCIgfSxcbiAgICAgICAgXCIvdXNlci1jaGFsbGVuZ2VzL2ZpbmRcIjogeyBkZXRhaWxzOiBcIkJyb3dzaW5nIHVucGxheWVkIHVzZXIgY2hhbGxlbmdlc1wiIH0sXG4gICAgICAgIFwiL3VzZXItY2hhbGxlbmdlcy9wbGF5ZWRcIjogeyBkZXRhaWxzOiBcIkJyb3dzaW5nIHBsYXllZCB1c2VyIGNoYWxsZW5nZXNcIiB9LFxuICAgICAgICBcIi91c2VyLWNoYWxsZW5nZXMvb3duXCI6IHsgZGV0YWlsczogXCJCcm93c2luZyBjcmVhdGVkIHVzZXIgY2hhbGxlbmdlc1wiIH0sXG4gICAgICAgIFwiL3VzZXItY2hhbGxlbmdlcy9jcmVhdGVcIjogeyBkZXRhaWxzOiBcIkNyZWF0aW5nIGEgY2hhbGxlbmdlXCIgfSxcbiAgICAgICAgXCIvbWF0Y2htYWtpbmctbG9iYnlcIjogeyBkZXRhaWxzOiBcIkluIGEgbWF0Y2htYWtpbmcgbG9iYnlcIiB9LFxuICAgICAgICBcIi9jb21tdW5pdHktbWFwXCI6IHsgZGV0YWlsczogXCJWaWV3aW5nIHRoZSBjb21tdW5pdHkgbWFwXCIgfSxcbiAgICAgICAgXCIvc3F1YWQvbGlzdFwiOiB7IGRldGFpbHM6IFwiQnJvd3NpbmcgdGhlIGxpc3Qgb2Ygc3F1YWRzXCIgfSxcbiAgICAgICAgXCIvc3F1YWQvbWFuYWdlbWVudFwiOiB7IGRldGFpbHM6IFwiVmlld2luZyB0aGUgc3F1YWQgbWFuYWdlbWVudCBwYWdlXCIgfSxcbiAgICAgICAgXCIvbWFwLWVkaXRvci9tYXBzXCI6IHsgZGV0YWlsczogXCJDcmVhdGluZyBhIG1hcFwiIH0sXG4gICAgICAgIFwiL21hcC1lZGl0b3IvZHJvcC1ncm91cHNcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgdGhlaXIgZHJvcCBncm91cHNcIiB9LFxuICAgICAgICBcIi9ldmVudHNcIjogeyBkZXRhaWxzOiBcIkJyb3dzaW5nIHBhc3QgYW5kIGZ1dHVyZSBldmVudHNcIiB9LFxuICAgICAgICBcIi9hY2NvdW50L3Byb2ZpbGVcIjogeyBkZXRhaWxzOiBcIlZpZXdpbmcgdGhlaXIgcHJvZmlsZSBzZXR0aW5nc1wiIH0sXG4gICAgICAgIFwiL2FjY291bnQvc3RhdGlzdGljc1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyB0aGVpciBzdGF0aXN0aWNzXCIgfSxcbiAgICAgICAgXCIvYWNjb3VudC90cm9waGllc1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyB0aGVpciB0cm9waGllc1wiIH0sXG4gICAgICAgIFwiL2FjY291bnQvZnJpZW5kc1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyB0aGVpciBmcmllbmRzXCIgfSxcbiAgICAgICAgXCIvYWNjb3VudC9zdXBwb3J0ZXItc3RhdHVzXCI6IHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiVmlld2luZyB0aGVpciBzdXBwb3J0ZXIgc3RhdHVzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiL2FjY291bnQvcXVvdGEtY29uc3VtcHRpb25cIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHRoZWlyIHF1b3RhIGNvbnN1bXB0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiL2FjY291bnQvYWNjb3VudC1zZXR0aW5nc1wiOiB7IGRldGFpbHM6IFwiVmlld2luZyB0aGVpciBhY2NvdW50IHNldHRpbmdzXCIgfSxcbiAgICB9O1xuICAgIGZvciAoY29uc3QgW3BhdGgsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHBhZ2VzKSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMocGF0aCkpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4uZGF0YSB9O1xuICAgIH1cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jaGFsbGVuZ2UtZGV0YWlscy9cIik6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIGNoYWxsZW5nZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvb25saW5lLWxvYmJ5L1wiKTpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJJbiBhbiBvbmxpbmUgbG9iYnlcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50cy9cIik6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbiBldmVudFwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvaGVscC1vdXQvXCIpOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgd2F5cyB0byBzdXBwb3J0IEdlb3Rhc3RpY1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvcGxheVwiIHx8XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3BsYXktb25saW5lL1wiKSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtY29tcG9uZW50LXByZXBhcmVcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUHJlcGFyaW5nIGZvciBhIHJvdW5kXCI7XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLWNvbXBvbmVudC1wbGF5XCIpKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJJbiBhbiBvbmxpbmUgYmF0dGxlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFBsYXlpbmcgbWFwICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXRhLWluZm9zXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpWzFdXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1ldGEtaW5mb3NcIilcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFBsYXlpbmcgbWFwICR7aW5mb1sxXS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2luZm9bMl0udGV4dENvbnRlbnR9ICR7aW5mb1szXS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLWNvbXBvbmVudC1yZXN1bHRcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5yb3VuZC1pbmZvXCIpXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFNjb3JlICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd24tc2NvcmVcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1jb21wb25lbnQtZmluaXNoZWRcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSb3VuZCBmaW5pc2hlZFwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEZpbmFsIHNjb3JlICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJQbGF5aW5nIGEgZ2FtZVwiO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhKUVVGSkxGbEJRVmtzUjBGQmFVSTdVVUZEYUVNc1lVRkJZU3hGUVVOYUxHZEZRVUZuUlR0UlFVTnFSU3hQUVVGUExFVkJRVVVzTmtKQlFUWkNPMUZCUTNSRExHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUTBGQlF6dEpRVU5HTEUxQlFVMHNTMEZCU3l4SFFVRnBRenRSUVVNelF5eFBRVUZQTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2RVSkJRWFZDTEVWQlFVVTdVVUZETjBNc1kwRkJZeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEhkQ1FVRjNRaXhGUVVGRk8xRkJRM0pFTEhWQ1FVRjFRaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEcxRFFVRnRReXhGUVVGRk8xRkJRM3BGTEhsQ1FVRjVRaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEdsRFFVRnBReXhGUVVGRk8xRkJRM3BGTEhOQ1FVRnpRaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEd0RFFVRnJReXhGUVVGRk8xRkJRM1pGTEhsQ1FVRjVRaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEhOQ1FVRnpRaXhGUVVGRk8xRkJRemxFTEc5Q1FVRnZRaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEhkQ1FVRjNRaXhGUVVGRk8xRkJRek5FTEdkQ1FVRm5RaXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTERKQ1FVRXlRaXhGUVVGRk8xRkJRekZFTEdGQlFXRXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3cyUWtGQk5rSXNSVUZCUlR0UlFVTjZSQ3h0UWtGQmJVSXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3h0UTBGQmJVTXNSVUZCUlR0UlFVTnlSU3hyUWtGQmEwSXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3huUWtGQlowSXNSVUZCUlR0UlFVTnFSQ3g1UWtGQmVVSXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3d5UWtGQk1rSXNSVUZCUlR0UlFVTnVSU3hUUVVGVExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNhVU5CUVdsRExFVkJRVVU3VVVGRGVrUXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNaME5CUVdkRExFVkJRVVU3VVVGRGFrVXNjVUpCUVhGQ0xFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNNRUpCUVRCQ0xFVkJRVVU3VVVGRE9VUXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNkMEpCUVhkQ0xFVkJRVVU3VVVGRE1VUXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNkVUpCUVhWQ0xFVkJRVVU3VVVGRGVFUXNNa0pCUVRKQ0xFVkJRVVU3V1VGRE5VSXNUMEZCVHl4RlFVRkZMR2REUVVGblF6dFRRVU42UXp0UlFVTkVMRFJDUVVFMFFpeEZRVUZGTzFsQlF6ZENMRTlCUVU4c1JVRkJSU3hwUTBGQmFVTTdVMEZETVVNN1VVRkRSQ3d5UWtGQk1rSXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3huUTBGQlowTXNSVUZCUlR0TFFVTXhSU3hEUVVGRE8wbEJSVVlzUzBGQlN5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRha1FzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzFsQlF6VkRMRmxCUVZrc1IwRkJSeXhGUVVGRkxFZEJRVWNzV1VGQldTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RlFVRkZMRU5CUVVNN1MwRkROME03U1VGRlJDeFJRVUZSTEVsQlFVa3NSVUZCUlR0UlFVTmlMRXRCUVVzc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMSEZDUVVGeFFpeERRVUZETzFsQlF6bEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1dVRkROME1zVFVGQlRUdFJRVU5RTEV0QlFVc3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRE8xbEJRM3BFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdXVUZETlVNc1RVRkJUVHRSUVVOUUxFdEJRVXNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF6dFpRVU51UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMWxCUXpGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZET1VRc1RVRkJUVHRSUVVOUUxFdEJRVXNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF6dFpRVU55UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMURRVUZ0UXl4RFFVRkRPMWxCUXpORUxFMUJRVTA3UzBGRFVEdEpRVVZFTEVsQlEwTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzVDBGQlR6dFJRVU4wUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRVZCUTI1RU8xRkJRMFFzU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMREpDUVVFeVFpeERRVUZETzFsQlEzUkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1lVRkRNME1zU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVWQlFVVTdXVUZETVVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMmRDUVVONFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzJkQ1FVTTNReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdWQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM0ZDUVVNdlJDeFhRVU5JTEVWQlFVVXNRMEZCUXp0aFFVTklPMmxDUVVGTk8yZENRVU5PTEUxQlFVMHNTVUZCU1N4SFFVRkhMRkZCUVZFN2NVSkJRMjVDTEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNN2NVSkJRelZDTEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTXpRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJkQ1FVTTFSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03WVVGRGNrVTdVMEZEUkR0aFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhGUVVGRk8xbEJRemxFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVVHRwUWtGRE4wSXNZVUZCWVN4RFFVRkRMR0ZCUVdFc1EwRkJRenRwUWtGRE5VSXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU53UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zVjBGRGRFTXNSVUZCUlN4RFFVRkRPMU5CUTBnN1lVRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zUlVGQlJUdFpRVU5vUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRPMWxCUTNoRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NaVUZEY0VJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4WFFVTnNReXhGUVVGRkxFTkJRVU03VTBGRFNEczdXVUZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRPMHRCUXk5RE8wbEJSVVFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJkZXRhaWxzIiwic3RhcnRUaW1lc3RhbXAiLCJwYWdlcyIsInBhdGgiLCJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5mbyIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;