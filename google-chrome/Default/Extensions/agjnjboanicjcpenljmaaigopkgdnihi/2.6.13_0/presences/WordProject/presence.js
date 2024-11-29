var __webpack_exports__={};const presence=new Presence({clientId:"869131200948756500"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/WordProject/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:s}=location,i=await presence.getSetting("buttons");if(t.startsWith("/index")){const t=document.querySelector("li.noMargin");if(e.details="At homepage",t&&t.classList.contains("sm2_playing")){const t=document.querySelector(".sm2_position"),s=document.querySelector(".sm2_total");if(e.state="Listening to audio sample",t&&s){const[i,n]=[t,s].map((e=>presence.timestampFromFormat(e.textContent)));[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(i,n)}}}else if("/bibles/index.htm"===t||"/bibles/resources/links/index.htm"===t)e.details="Choosing Language";else if("/bibles/audio/index.htm"===t)e.details="Looking for Audio Bibles";else if(/\/bibles\/audio\/.+\/index\.htm/.test(t)){const t=document.querySelector("h1.audi"),s=document.querySelector("span.dimmed");t&&(e.details=t.textContent),s&&(e.state=s.textContent)}else if(/\/bibles\/verses\/.*index\.htm/.test(t)){const t=document.querySelector("h1.vers")||document.querySelector("h1.idx");t&&(e.details=t.textContent)}else if(t.startsWith("/bibles/audio")||t.startsWith("/bibles/verses")){const t=document.querySelector("div.sm2-playlist > div > ul > li"),n=document.querySelector(".sm2-bar-ui");if(t){if(e.details="Listening to",e.state=t.textContent,n&&n.classList.contains("playing")){const t=document.querySelector(".sm2-inline-time"),s=document.querySelector(".sm2-inline-duration");if(t&&s){const[i,n]=[t,s].map((e=>presence.timestampFromFormat(e.textContent)));[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(i,n)}}i&&(e.buttons=[{label:"Listen",url:s}])}}else if(t.startsWith("/bibles/parallel"))e.details="Looking at multiple Bibles parallely";else if(/\/bibles\/\w+\/index\.htm/.test(t)){const t=document.querySelector("h1.idx"),s=document.querySelector("span.faded4");t?(e.details=t.textContent,s&&(e.state=s.textContent)):e.details=document.title}else if(/\/bibles\/\w+\/[0-9]+\/[0-9]+\.htm/.test(t)){const t=document.querySelector(".sm2-bar-ui");if(e.details="Listening to",e.state=`${document.querySelector(".sm2-bar-ui").textContent}: ${document.querySelector("h3").textContent}`,t&&t.classList.contains("playing")){const t=document.querySelector(".sm2-inline-time"),s=document.querySelector(".sm2-inline-duration");if(t&&s){const[i,n]=[t,s].map((e=>presence.timestampFromFormat(e.textContent)));[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(i,n)}}i&&(e.buttons=[{label:"Listen",url:s}])}else e.details=document.title;e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdQLFNBQVNDLGNBQWMsZUFBZVksZ0JBQWdCYixTQUFTQyxjQUFjLE1BQU1ZLGNBQ3ZHTyxHQUFVQSxFQUFPakIsVUFBVUMsU0FBUyxXQUFZLENBQ2hELE1BQU1pQixFQUFPckIsU0FBU0MsY0FBYyxvQkFBcUJxQixFQUFXdEIsU0FBU0MsY0FBYyx3QkFDM0YsR0FBSW9CLEdBQVFDLEVBQVUsQ0FDbEIsTUFBT0MsRUFBUWQsR0FBUyxDQUFDWSxFQUFNQyxHQUFVWixLQUFJQyxHQUFLL0IsU0FBU2dDLG9CQUFvQkQsRUFBRUUsZ0JBQ2hGdkIsRUFBYUUsZUFBZ0JGLEVBQWF3QixjQUN2Q2xDLFNBQVNtQyxjQUFjUSxFQUFRZCxFQUN2QyxDQUNKLENBQ0liLElBQ0FOLEVBQWFNLFFBQVUsQ0FDbkIsQ0FDSTRCLE1BQU8sU0FDUEMsSUFBSy9CLElBSXJCLE1BRUlKLEVBQWFZLFFBQVVGLFNBQVNpQixNQUNoQzNCLEVBQWFZLFFBQ2J0QixTQUFTOEMsWUFBWXBDLEdBRXJCVixTQUFTOEMsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4NjkxMzEyMDA5NDg3NTY1MDBcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1dvcmRQcm9qZWN0L2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gbG9jYXRpb24sIGJ1dHRvbnMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKTtcbiAgICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9pbmRleFwiKSkge1xuICAgICAgICBjb25zdCBzYW1wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGkubm9NYXJnaW5cIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBdCBob21lcGFnZVwiO1xuICAgICAgICBpZiAoc2FtcGxlICYmIHNhbXBsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzbTJfcGxheWluZ1wiKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc20yX3Bvc2l0aW9uXCIpLCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc20yX3RvdGFsXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJMaXN0ZW5pbmcgdG8gYXVkaW8gc2FtcGxlXCI7XG4gICAgICAgICAgICBpZiAoY3VycmVudCAmJiB0b3RhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjdXJyVFMsIGR1clRTXSA9IFtjdXJyZW50LCB0b3RhbF0ubWFwKGUgPT4gcHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKGN1cnJUUywgZHVyVFMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lID09PSBcIi9iaWJsZXMvaW5kZXguaHRtXCIgfHxcbiAgICAgICAgcGF0aG5hbWUgPT09IFwiL2JpYmxlcy9yZXNvdXJjZXMvbGlua3MvaW5kZXguaHRtXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDaG9vc2luZyBMYW5ndWFnZVwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lID09PSBcIi9iaWJsZXMvYXVkaW8vaW5kZXguaHRtXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIGZvciBBdWRpbyBCaWJsZXNcIjtcbiAgICBlbHNlIGlmICgvXFwvYmlibGVzXFwvYXVkaW9cXC8uK1xcL2luZGV4XFwuaHRtLy50ZXN0KHBhdGhuYW1lKSkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMS5hdWRpXCIpLCBzdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5kaW1tZWRcIik7XG4gICAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmIChzdWIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdWIudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9cXC9iaWJsZXNcXC92ZXJzZXNcXC8uKmluZGV4XFwuaHRtLy50ZXN0KHBhdGhuYW1lKSkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMS52ZXJzXCIpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDEuaWR4XCIpO1xuICAgICAgICBpZiAodGl0bGUpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2JpYmxlcy9hdWRpb1wiKSB8fFxuICAgICAgICBwYXRobmFtZS5zdGFydHNXaXRoKFwiL2JpYmxlcy92ZXJzZXNcIikpIHtcbiAgICAgICAgY29uc3QgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc20yLXBsYXlsaXN0ID4gZGl2ID4gdWwgPiBsaVwiKSwgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbTItYmFyLXVpXCIpO1xuICAgICAgICBpZiAoY2hhcHRlcikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxpc3RlbmluZyB0b1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gY2hhcHRlci50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIgJiYgcGxheWVyLmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbTItaW5saW5lLXRpbWVcIiksIGR1cmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbTItaW5saW5lLWR1cmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lICYmIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFt0aW1lVFMsIGR1clRTXSA9IFt0aW1lLCBkdXJhdGlvbl0ubWFwKGUgPT4gcHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHModGltZVRTLCBkdXJUUyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTGlzdGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2JpYmxlcy9wYXJhbGxlbFwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgbXVsdGlwbGUgQmlibGVzIHBhcmFsbGVseVwiO1xuICAgIGVsc2UgaWYgKC9cXC9iaWJsZXNcXC9cXHcrXFwvaW5kZXhcXC5odG0vLnRlc3QocGF0aG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxLmlkeFwiKSwgc3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uZmFkZWQ0XCIpO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoc3ViKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN1Yi50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50LnRpdGxlO1xuICAgIH1cbiAgICBlbHNlIGlmICgvXFwvYmlibGVzXFwvXFx3K1xcL1swLTldK1xcL1swLTldK1xcLmh0bS8udGVzdChwYXRobmFtZSkpIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbTItYmFyLXVpXCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGlzdGVuaW5nIHRvXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc20yLWJhci11aVwiKS50ZXh0Q29udGVudH06ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgIGlmIChwbGF5ZXIgJiYgcGxheWVyLmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlpbmdcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNtMi1pbmxpbmUtdGltZVwiKSwgZHVyYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNtMi1pbmxpbmUtZHVyYXRpb25cIik7XG4gICAgICAgICAgICBpZiAodGltZSAmJiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFt0aW1lVFMsIGR1clRTXSA9IFt0aW1lLCBkdXJhdGlvbl0ubWFwKGUgPT4gcHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHRpbWVUUywgZHVyVFMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChidXR0b25zKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxpc3RlblwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50LnRpdGxlO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTEd0RlFVRnJSVHRSUVVOdVJTeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeEZRVU0zUWl4UFFVRlBMRWRCUVVjc1RVRkJUU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUlhwRUxFbEJRVWtzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRSUVVOc1F5eE5RVUZOTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEzSkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzFGQlEzSkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRk8xbEJRM1pFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRV3RDTEdWQlFXVXNRMEZCUXl4RlFVTjJSU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYTBJc1dVRkJXU3hEUVVGRExFTkJRVU03V1VGREwwUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0WlFVTnFSQ3hKUVVGSkxFOUJRVThzU1VGQlNTeExRVUZMTEVWQlFVVTdaMEpCUTNKQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRMmhFTEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUXpORExFTkJRVU03WjBKQlJVWXNRMEZCUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTTdiMEpCUTNaRUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRM1pETzFOQlEwUTdTMEZEUkR0VFFVRk5MRWxCUTA0c1VVRkJVU3hMUVVGTExHMUNRVUZ0UWp0UlFVTm9ReXhSUVVGUkxFdEJRVXNzYlVOQlFXMURPMUZCUldoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03VTBGRGRrTXNTVUZCU1N4UlFVRlJMRXRCUVVzc2VVSkJRWGxDTzFGQlF6bERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNN1UwRkRPVU1zU1VGQlNTeHBRMEZCYVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZETVVRc1RVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCY1VJc1UwRkJVeXhEUVVGRExFVkJRMnhGTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGclFpeGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVVTVSQ3hKUVVGSkxFdEJRVXM3V1VGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGNFUXNTVUZCU1N4SFFVRkhPMWxCUVVVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRPMHRCUXpsRE8xTkJRVTBzU1VGQlNTeG5RMEZCWjBNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZETTBRc1RVRkJUU3hMUVVGTExFZEJRMVlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCY1VJc1UwRkJVeXhEUVVGRE8xbEJRM0pFTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVhGQ0xGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzUkVMRWxCUVVrc1MwRkJTenRaUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJRenRMUVVOd1JEdFRRVUZOTEVsQlEwNHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRGNFTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RlFVTndRenRSUVVORUxFMUJRVTBzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNCRExHdERRVUZyUXl4RFFVTnNReXhGUVVORUxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnBRaXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU5vUlN4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVOYUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZMEZCWXl4RFFVRkRPMWxCUTNSRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVWNlF5eEpRVUZKTEUxQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0blFrRkRia1FzVFVGQlRTeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJhVUlzYTBKQlFXdENMRU5CUVVNc1JVRkRkRVVzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTJoRExITkNRVUZ6UWl4RFFVTjBRaXhEUVVGRE8yZENRVVZJTEVsQlFVa3NTVUZCU1N4SlFVRkpMRkZCUVZFc1JVRkJSVHR2UWtGRGNrSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZEYUVRc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGRE0wTXNRMEZCUXp0dlFrRkRSaXhEUVVGRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVWQlFVVXNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJRenQzUWtGRGRrUXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUTNaRE8yRkJRMFE3V1VGRFJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0blFrRkRXaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzI5Q1FVTjBRanQzUWtGRFF5eExRVUZMTEVWQlFVVXNVVUZCVVR0M1FrRkRaaXhIUVVGSExFVkJRVVVzU1VGQlNUdHhRa0ZEVkR0cFFrRkRSQ3hEUVVGRE8yRkJRMFk3VTBGRFJEdExRVU5FTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExHdENRVUZyUWl4RFFVRkRPMUZCUTJwRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjME5CUVhORExFTkJRVU03VTBGRE1VUXNTVUZCU1N3eVFrRkJNa0lzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRjRVFzVFVGQlRTeExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJjVUlzVVVGQlVTeERRVUZETEVWQlEycEZMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZyUWl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVVNVJDeEpRVUZKTEV0QlFVc3NSVUZCUlR0WlFVTldMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTjZReXhKUVVGSkxFZEJRVWM3WjBKQlFVVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlF6bERPenRaUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVNM1F6dFRRVUZOTEVsQlFVa3NiME5CUVc5RExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMUZCUXk5RUxFMUJRVTBzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVdsQ0xHRkJRV0VzUTBGQlF5eERRVUZETzFGQlJYSkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWTBGQll5eERRVUZETzFGQlEzUkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGRGNFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJhVUlzWVVGQllTeERRVUZETEVOQlFVTXNWMEZEZGtRc1MwRkJTeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ4UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU53UlN4SlFVRkpMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVOdVJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGcFFpeHJRa0ZCYTBJc1EwRkJReXhGUVVOMFJTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRhRU1zYzBKQlFYTkNMRU5CUTNSQ0xFTkJRVU03V1VGRlNDeEpRVUZKTEVsQlFVa3NTVUZCU1N4UlFVRlJMRVZCUVVVN1owSkJRM0pDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlEyaEVMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRek5ETEVOQlFVTTdaMEpCUTBZc1EwRkJReXhaUVVGWkxFTkJRVU1zWTBGQll5eEZRVUZGTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNN2IwSkJRM1pFTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzJGQlEzWkRPMU5CUTBRN1VVRkRSQ3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hSUVVGUk8yOUNRVU5tTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmxDUVVOVU8yRkJRMFFzUTBGQlF6dFRRVU5HTzB0QlEwUTdPMUZCUVUwc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUlRkRExFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWUiLCJocmVmIiwibG9jYXRpb24iLCJidXR0b25zIiwiZ2V0U2V0dGluZyIsInN0YXJ0c1dpdGgiLCJzYW1wbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXRhaWxzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjdXJyZW50IiwidG90YWwiLCJzdGF0ZSIsImN1cnJUUyIsImR1clRTIiwibWFwIiwiZSIsInRpbWVzdGFtcEZyb21Gb3JtYXQiLCJ0ZXh0Q29udGVudCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJ0ZXN0IiwidGl0bGUiLCJzdWIiLCJjaGFwdGVyIiwicGxheWVyIiwidGltZSIsImR1cmF0aW9uIiwidGltZVRTIiwibGFiZWwiLCJ1cmwiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;