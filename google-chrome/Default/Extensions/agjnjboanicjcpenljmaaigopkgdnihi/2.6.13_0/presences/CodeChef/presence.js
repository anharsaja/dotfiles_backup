var __webpack_exports__={};const presence=new Presence({clientId:"845716323296083999"}),timeElapsed=~~(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CodeChef/assets/logo.png",startTimestamp:timeElapsed};switch(location.host.split(".")[0]){case"blog":e.details="Viewing Blogs",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png","all-blogs"===location.pathname.split("/")[1]?e.details="Viewing All Blogs":"author"===location.pathname.split("/")[1]?(e.details="Viewing Profile: ",e.state=`Author: ${location.pathname.split("/")[2]}`):location.pathname.split("/")[4]&&(e.details=`Reading: ${document.querySelector(".posttitle").textContent}`,e.state=`Author: ${document.querySelector(".author-username").textContent}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png");break;case"discuss":e.details="Viewing Discussions","t"===location.pathname.split("/")[1]&&(e.details="Reading Discussions:",e.state=document.querySelector(".fancy-title").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png");break;default:if(""===location.pathname.split("/")[1])e.details="Viewing Home Page";else if(location.pathname.split("/").includes("tags"))e.details="Viewing:",e.state="Problems By Tag Name";else if(location.pathname.split("/").includes("problems"))e.details=document.querySelector(".breadcrumbs").lastElementChild.textContent,e.state=`Solving: ${document.title.split("|")[0]}`;else switch(location.pathname.split("/")[1]){case"ide":e.details="Using IDE",e.state=`Editing ${document.querySelector(".chosen-single").childNodes[0].textContent} file`;break;case"AIMICPC":e.details="Viewing:",e.state="AIM ICPC - Weekly Training Series";break;case"LEARNDSA":e.details="Viewing:",e.state="DSA Learning Series";break;case"contests":e.details="Viewing:",e.state="Contests List";break;case"certification":e.details="Viewing Certification: ",e.state=document.querySelector(".page-title").childNodes[3].textContent;break;case"careers":e.details="Viewing:",e.state="Careers Page";break;case"signup":e.details="Creating an account";break;case"wiki":e.details="Viewing Wiki:",e.state=document.querySelector(".ns-heading").textContent;break;case"users":e.details="Viewing Profile:",e.state=`${document.title.split("|")[0]} (${document.querySelector("header > h2").textContent})`}}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsZUFBaUJDLEtBQUtDLE1BQVEsS0FDbENMLFNBQVNNLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSxnRUFDZkMsZUFBZ0JQLGFBRXBCLE9BQVFRLFNBQVNDLEtBQUtDLE1BQU0sS0FBSyxJQUM3QixJQUFLLE9BQ0RMLEVBQWFNLFFBQVUsZ0JBQ3ZCTixFQUFhTyxjQUFnQixrREFDVyxjQUFwQ0osU0FBU0ssU0FBU0gsTUFBTSxLQUFLLEdBQzdCTCxFQUFhTSxRQUFVLG9CQUNrQixXQUFwQ0gsU0FBU0ssU0FBU0gsTUFBTSxLQUFLLElBQ2xDTCxFQUFhTSxRQUFVLG9CQUN2Qk4sRUFBYVMsTUFBUSxXQUFXTixTQUFTSyxTQUFTSCxNQUFNLEtBQUssTUFFeERGLFNBQVNLLFNBQVNILE1BQU0sS0FBSyxLQUNsQ0wsRUFBYU0sUUFBVSxZQUFZSSxTQUFTQyxjQUFjLGNBQWNDLGNBQ3hFWixFQUFhUyxNQUFRLFdBQVdDLFNBQVNDLGNBQWMsb0JBQW9CQyxjQUMzRVosRUFBYU8sY0FBZ0IsbURBRWpDLE1BRUosSUFBSyxVQUNEUCxFQUFhTSxRQUFVLHNCQUNpQixNQUFwQ0gsU0FBU0ssU0FBU0gsTUFBTSxLQUFLLEtBQzdCTCxFQUFhTSxRQUFVLHVCQUN2Qk4sRUFBYVMsTUFBUUMsU0FBU0MsY0FBYyxnQkFBZ0JDLFlBQzVEWixFQUFhTyxjQUFnQixtREFFakMsTUFFSixRQUNJLEdBQXdDLEtBQXBDSixTQUFTSyxTQUFTSCxNQUFNLEtBQUssR0FDN0JMLEVBQWFNLFFBQVUseUJBQ3RCLEdBQUlILFNBQVNLLFNBQVNILE1BQU0sS0FBS1EsU0FBUyxRQUMzQ2IsRUFBYU0sUUFBVSxXQUN2Qk4sRUFBYVMsTUFBUSw0QkFFcEIsR0FBSU4sU0FBU0ssU0FBU0gsTUFBTSxLQUFLUSxTQUFTLFlBQzNDYixFQUFhTSxRQUNUSSxTQUFTQyxjQUFjLGdCQUFnQkcsaUJBQWlCRixZQUM1RFosRUFBYVMsTUFBUSxZQUFZQyxTQUFTSyxNQUFNVixNQUFNLEtBQUssVUFHM0QsT0FBUUYsU0FBU0ssU0FBU0gsTUFBTSxLQUFLLElBQ2pDLElBQUssTUFDREwsRUFBYU0sUUFBVSxZQUN2Qk4sRUFBYVMsTUFBUSxXQUFXQyxTQUFTQyxjQUFjLGtCQUFrQkssV0FBVyxHQUFHSixtQkFDdkYsTUFFSixJQUFLLFVBQ0RaLEVBQWFNLFFBQVUsV0FDdkJOLEVBQWFTLE1BQVEsb0NBQ3JCLE1BRUosSUFBSyxXQUNEVCxFQUFhTSxRQUFVLFdBQ3ZCTixFQUFhUyxNQUFRLHNCQUNyQixNQUVKLElBQUssV0FDRFQsRUFBYU0sUUFBVSxXQUN2Qk4sRUFBYVMsTUFBUSxnQkFDckIsTUFFSixJQUFLLGdCQUNEVCxFQUFhTSxRQUFVLDBCQUN2Qk4sRUFBYVMsTUFDVEMsU0FBU0MsY0FBYyxlQUFlSyxXQUFXLEdBQUdKLFlBQ3hELE1BRUosSUFBSyxVQUNEWixFQUFhTSxRQUFVLFdBQ3ZCTixFQUFhUyxNQUFRLGVBQ3JCLE1BRUosSUFBSyxTQUNEVCxFQUFhTSxRQUFVLHNCQUN2QixNQUVKLElBQUssT0FDRE4sRUFBYU0sUUFBVSxnQkFDdkJOLEVBQWFTLE1BQ1RDLFNBQVNDLGNBQWMsZUFBZUMsWUFDMUMsTUFFSixJQUFLLFFBQ0RaLEVBQWFNLFFBQVUsbUJBQ3ZCTixFQUFhUyxNQUFRLEdBQUdDLFNBQVNLLE1BQU1WLE1BQU0sS0FBSyxPQUFPSyxTQUFTQyxjQUFjLGVBQWVDLGdCQU8vR1osRUFBYU0sUUFDYmQsU0FBU3lCLFlBQVlqQixHQUVyQlIsU0FBU3lCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODQ1NzE2MzIzMjk2MDgzOTk5XCIsXG59KSwgdGltZUVsYXBzZWQgPSB+fihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29kZUNoZWYvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiB0aW1lRWxhcHNlZCxcbiAgICB9O1xuICAgIHN3aXRjaCAobG9jYXRpb24uaG9zdC5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgY2FzZSBcImJsb2dcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQmxvZ3NcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSA9PT0gXCJhbGwtYmxvZ3NcIilcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBBbGwgQmxvZ3NcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSA9PT0gXCJhdXRob3JcIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFByb2ZpbGU6IFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBBdXRob3I6ICR7bG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbNF0pIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBSZWFkaW5nOiAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdHRpdGxlXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEF1dGhvcjogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvci11c2VybmFtZVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImRpc2N1c3NcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgRGlzY3Vzc2lvbnNcIjtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0gPT09IFwidFwiKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgRGlzY3Vzc2lvbnM6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYW5jeS10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0gPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgSG9tZSBQYWdlXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikuaW5jbHVkZXMoXCJ0YWdzXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmc6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJQcm9ibGVtcyBCeSBUYWcgTmFtZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmluY2x1ZGVzKFwicHJvYmxlbXNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJlYWRjcnVtYnNcIikubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgU29sdmluZzogJHtkb2N1bWVudC50aXRsZS5zcGxpdChcInxcIilbMF19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpZGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlVzaW5nIElERVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEVkaXRpbmcgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob3Nlbi1zaW5nbGVcIikuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudH0gZmlsZWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQUlNSUNQQ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZzpcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQUlNIElDUEMgLSBXZWVrbHkgVHJhaW5pbmcgU2VyaWVzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTEVBUk5EU0FcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmc6XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkRTQSBMZWFybmluZyBTZXJpZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb250ZXN0c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZzpcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ29udGVzdHMgTGlzdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNlcnRpZmljYXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQ2VydGlmaWNhdGlvbjogXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS10aXRsZVwiKS5jaGlsZE5vZGVzWzNdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNhcmVlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmc6XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNhcmVlcnMgUGFnZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNpZ251cFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ3JlYXRpbmcgYW4gYWNjb3VudFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndpa2lcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgV2lraTpcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ucy1oZWFkaW5nXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVzZXJzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFByb2ZpbGU6XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC50aXRsZS5zcGxpdChcInxcIilbMF19ICgke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgPiBoMlwiKS50ZXh0Q29udGVudH0pYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4WFFVRlhMRWRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJUVGRETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5zUXl4aFFVRmhMR2xGUVVGaE8xRkJRekZDTEdOQlFXTXNSVUZCUlN4WFFVRlhPMHRCUXpOQ0xFTkJRVU03U1VGRlJpeFJRVUZSTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTNCRExFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZGV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dFpRVU4yUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0WlFVTTFReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZkQlFWYzdaMEpCUTJ4RUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03YVVKQlEzWkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVTjBSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yZENRVU16UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0aFFVTnNSVHRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMmRDUVVNelF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUTNSQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1YwRkRkRU1zUlVGQlJTeERRVUZETzJkQ1FVTklMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVjBGRGNFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRMRmRCUXpWRExFVkJRVVVzUTBGQlF6dG5Ra0ZEU0N4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0aFFVTTFRenRaUVVORUxFMUJRVTA3VTBGRFRqdFJRVVZFTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkZaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8xbEJRemRETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRk8yZENRVU0xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMmRDUVVNNVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMmRDUVVONFJTeFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6dGhRVU0xUXp0WlFVTkVMRTFCUVUwN1UwRkRUanRSUVVWRUxFOUJRVThzUTBGQlF5eERRVUZETzFsQlExSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRk8yZENRVU42UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMmxDUVVOMlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRuUWtGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFTkJRVU03WjBKQlEyeERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1lVRkROVU03YVVKQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3WjBKQlF6ZEVMRmxCUVZrc1EwRkJReXhQUVVGUE8yOUNRVU51UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUTBGQlF6dG5Ra0ZEY2tVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1lVRkRhRVU3YVVKQlFVMDdaMEpCUlU0c1VVRkJVU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZEZUVNc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dDNRa0ZEV0N4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF6dDNRa0ZEYmtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlEzaEVMRTlCUVU4c1EwRkJRenQzUWtGRFVpeE5RVUZOTzNGQ1FVTk9PMjlDUVVWRUxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdkMEpCUTJZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdkMEpCUTJ4RExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NiVU5CUVcxRExFTkJRVU03ZDBKQlEzcEVMRTFCUVUwN2NVSkJRMDQ3YjBKQlJVUXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenQzUWtGRGFFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFTkJRVU03ZDBKQlEyeERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN2QwSkJRek5ETEUxQlFVMDdjVUpCUTA0N2IwSkJSVVFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0M1FrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN2QwSkJRMnhETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1pVRkJaU3hEUVVGRE8zZENRVU55UXl4TlFVRk5PM0ZDUVVOT08yOUNRVVZFTEV0QlFVc3NaVUZCWlN4RFFVRkRMRU5CUVVNN2QwSkJRM0pDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdkMEpCUTJwRUxGbEJRVmtzUTBGQlF5eExRVUZMT3pSQ1FVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdkMEpCUTJwRkxFMUJRVTA3Y1VKQlEwNDdiMEpCUlVRc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dDNRa0ZEWml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF6dDNRa0ZEYkVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGpRVUZqTEVOQlFVTTdkMEpCUTNCRExFMUJRVTA3Y1VKQlEwNDdiMEpCUlVRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dDNRa0ZEWkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPM2RDUVVNM1F5eE5RVUZOTzNGQ1FVTk9PMjlDUVVWRUxFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdkMEpCUTFvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdkMEpCUTNaRExGbEJRVmtzUTBGQlF5eExRVUZMT3pSQ1FVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenQzUWtGRGJrUXNUVUZCVFR0eFFrRkRUanR2UWtGRlJDeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPM2RDUVVOaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03ZDBKQlF6RkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZEYmtRc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4WFFVTjJReXhIUVVGSExFTkJRVU03ZDBKQlEwb3NUVUZCVFR0eFFrRkRUanRwUWtGRFJEdGhRVU5FTzFOQlEwUTdTMEZEUkR0SlFVVkVMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96dFJRVU40UkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwidGltZUVsYXBzZWQiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImxvY2F0aW9uIiwiaG9zdCIsInNwbGl0IiwiZGV0YWlscyIsInNtYWxsSW1hZ2VLZXkiLCJwYXRobmFtZSIsInN0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJpbmNsdWRlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJ0aXRsZSIsImNoaWxkTm9kZXMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;