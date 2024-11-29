"use strict";var __webpack_exports__={};const presence=new Presence({clientId:"1240164154682249227"}),browsingTimestamp=Math.floor(Date.now()/1e3);let duration,currentTime,paused,playback;function getDetails(e,t,s,a){switch(t[0].toLowerCase()){case"browse":e.details="Browsing home page";break;case"continue-watching":e.details="Browsing Continue Watching playlist";break;case"my-list":e.details="Browisng my list";break;case"new-releases":e.details="Browsing new releases";break;case"recommended-new-shelf":e.details="Browsing trending page";break;case"series":e.details="Browsing series";break;case"search":getSearchDetails(e);break;default:getVideoDetails(e,s,a)}}function getSearchDetails(e){e.details="Searching for:",e.state=parseQueryParams().q||"...",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"}function getVideoDetails(e,t,s){const a="main > section > section > div > div > div",i=document.querySelector(`${a} > h1`);if(null!==i){const n=document.querySelector(`${a} > form:nth-child(1) > select`);e.details="Viewing a series",e.state=null===n?i.textContent.trim():`${i.textContent.trim()}: ${n.options[n.selectedIndex].textContent.trim()}`,t&&(e.buttons=[{label:"View Series",url:s}])}else{const a=document.querySelector(".video-title"),i=document.querySelector(".context-link"),n=document.querySelector("#watch-info > div > div > div > div > div > h5 > a");if(!a)return;if(e.details=a.textContent.trim(),i||n){if(!i&&n)e.state=n.textContent.trim(),t&&(e.buttons=[{label:"Watch Video",url:s},{label:"View Series",url:n.getAttribute("href")}]);else if(i&&n){const r=n.textContent.trim().match(/(\d+)[^\d]+(\d+)/);e.state=i.textContent.trim(),r&&(e.details=`S${r[1]}E${r[2]}: ${a.textContent.trim()}`),t&&(e.buttons=[{label:"Watch Episode",url:s},{label:"View Series",url:i.href}])}}else t&&(e.buttons=[{label:"Watch Video",url:s}]);setTimestamps(e)}}function setTimestamps(e){delete e.startTimestamp,paused||([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(currentTime,duration)),e.smallImageKey=paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png"}function parseQueryParams(){const e={},t=document.location.search.split("?")[1];if(t){const s=t.split("&");for(const t of s){const s=t.split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]||"")}}return e}presence.on("iFrameData",(e=>{playback=!!e.duration,playback&&({duration,currentTime,paused}=e)})),presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/Dropout/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:s}=document.location,a=await presence.getSetting("buttons");getDetails(e,t.split("/").filter(Boolean),a,s),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNSSxFQUFRSixFQUFZRyxNQUFNLEtBQ2hDLElBQUssTUFBTUUsS0FBUUQsRUFBTyxDQUN0QixNQUFNRSxFQUFXRCxFQUFLRixNQUFNLEtBQzVCSixFQUFZUSxtQkFBbUJELEVBQVMsS0FBT0MsbUJBQW1CRCxFQUFTLElBQU0sR0FDckYsQ0FDSixDQUNBLE9BQU9QLENBQ1gsQ0F0SUE5QyxTQUFTdUQsR0FBRyxjQUFlQyxJQUN2QjdDLFdBQVc2QyxFQUFLaEQsU0FDWkcsWUFDR0gsU0FBVUMsWUFBYUMsUUFBVzhDLEVBQUssSUFFbER4RCxTQUFTdUQsR0FBRyxjQUFjRSxVQUN0QixNQUFNNUMsRUFBZSxDQUNqQjZDLGNBQWUsK0RBQ2ZmLGVBQWdCeEMsb0JBQ2pCLFNBQUV3RCxFQUFRLEtBQUUzQyxHQUFTVyxTQUFTcUIsU0FBVWpDLFFBQW9CZixTQUFTNEQsV0FBVyxXQUNuRmhELFdBQVdDLEVBQWM4QyxFQUFTVCxNQUFNLEtBQUtXLE9BQU9DLFNBQVUvQyxFQUFhQyxHQUMzRWhCLFNBQVMrRCxZQUFZbEQsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMjQwMTY0MTU0NjgyMjQ5MjI3XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCBkdXJhdGlvbiwgY3VycmVudFRpbWUsIHBhdXNlZCwgcGxheWJhY2s7XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgKGRhdGEpID0+IHtcbiAgICBwbGF5YmFjayA9IGRhdGEuZHVyYXRpb24gPyB0cnVlIDogZmFsc2U7XG4gICAgaWYgKHBsYXliYWNrKVxuICAgICAgICAoeyBkdXJhdGlvbiwgY3VycmVudFRpbWUsIHBhdXNlZCB9ID0gZGF0YSk7XG59KTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRC9Ecm9wb3V0L2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHNob3dCdXR0b25zID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIik7XG4gICAgZ2V0RGV0YWlscyhwcmVzZW5jZURhdGEsIHBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIoQm9vbGVhbiksIHNob3dCdXR0b25zLCBocmVmKTtcbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG5mdW5jdGlvbiBnZXREZXRhaWxzKHByZXNlbmNlRGF0YSwgcGF0aCwgc2hvd0J1dHRvbnMsIGhyZWYpIHtcbiAgICBzd2l0Y2ggKHBhdGhbMF0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwiYnJvd3NlXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgaG9tZSBwYWdlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNvbnRpbnVlLXdhdGNoaW5nXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgQ29udGludWUgV2F0Y2hpbmcgcGxheWxpc3RcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibXktbGlzdFwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dpc25nIG15IGxpc3RcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmV3LXJlbGVhc2VzXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgbmV3IHJlbGVhc2VzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJlY29tbWVuZGVkLW5ldy1zaGVsZlwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRyZW5kaW5nIHBhZ2VcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2VyaWVzXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3Npbmcgc2VyaWVzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNlYXJjaFwiOlxuICAgICAgICAgICAgZ2V0U2VhcmNoRGV0YWlscyhwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBnZXRWaWRlb0RldGFpbHMocHJlc2VuY2VEYXRhLCBzaG93QnV0dG9ucywgaHJlZik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0U2VhcmNoRGV0YWlscyhwcmVzZW5jZURhdGEpIHtcbiAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGZvcjpcIjtcbiAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYXJzZVF1ZXJ5UGFyYW1zKCkucSB8fCBcIi4uLlwiO1xuICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG59XG5mdW5jdGlvbiBnZXRWaWRlb0RldGFpbHMocHJlc2VuY2VEYXRhLCBzaG93QnV0dG9ucywgaHJlZikge1xuICAgIGNvbnN0IG1haW5TZWxlY3RvciA9IFwibWFpbiA+IHNlY3Rpb24gPiBzZWN0aW9uID4gZGl2ID4gZGl2ID4gZGl2XCIsIHNlcmllc05hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHttYWluU2VsZWN0b3J9ID4gaDFgKTtcbiAgICBpZiAoc2VyaWVzTmFtZUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bWFpblNlbGVjdG9yfSA+IGZvcm06bnRoLWNoaWxkKDEpID4gc2VsZWN0YCk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgc2VyaWVzXCI7XG4gICAgICAgIGlmIChzZWxlY3RFbGVtZW50ID09PSBudWxsKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VyaWVzTmFtZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3Nlcmllc05hbWVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKX06ICR7c2VsZWN0RWxlbWVudC5vcHRpb25zW3NlbGVjdEVsZW1lbnQuc2VsZWN0ZWRJbmRleF0udGV4dENvbnRlbnQudHJpbSgpfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dCdXR0b25zKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgU2VyaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdmlkZW9OYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tdGl0bGVcIiksIHNlcmllc0xpbmtFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZXh0LWxpbmtcIiksIGVwaXNvZGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YXRjaC1pbmZvID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaDUgPiBhXCIpO1xuICAgICAgICBpZiAoIXZpZGVvTmFtZUVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdmlkZW9OYW1lRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIGlmICghc2VyaWVzTGlua0VsZW1lbnQgJiYgIWVwaXNvZGVFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiV2F0Y2ggVmlkZW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFzZXJpZXNMaW5rRWxlbWVudCAmJiBlcGlzb2RlRWxlbWVudCkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZXBpc29kZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHNob3dCdXR0b25zKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIldhdGNoIFZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgU2VyaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGVwaXNvZGVFbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZXJpZXNMaW5rRWxlbWVudCAmJiBlcGlzb2RlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBlcGlzb2RlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkubWF0Y2goLyhcXGQrKVteXFxkXSsoXFxkKykvKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNlcmllc0xpbmtFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFMke21hdGNoWzFdfUUke21hdGNoWzJdfTogJHt2aWRlb05hbWVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3dCdXR0b25zKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIldhdGNoIEVwaXNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBTZXJpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VyaWVzTGlua0VsZW1lbnQuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVzdGFtcHMocHJlc2VuY2VEYXRhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRUaW1lc3RhbXBzKHByZXNlbmNlRGF0YSkge1xuICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgaWYgKCFwYXVzZWQpIHtcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyhjdXJyZW50VGltZSwgZHVyYXRpb24pO1xuICAgIH1cbiAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG59XG5mdW5jdGlvbiBwYXJzZVF1ZXJ5UGFyYW1zKCkge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge30sIHF1ZXJ5U3RyaW5nID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLnNwbGl0KFwiP1wiKVsxXTtcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcGFpcnMgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIik7XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBwYWlyLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChrZXlWYWx1ZVswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleVZhbHVlWzFdIHx8IFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcbn1cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGRlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVMXVSQ3hKUVVGSkxGRkJRV2RDTEVWQlFVVXNWMEZCYlVJc1JVRkJSU3hOUVVGbExFVkJRVVVzVVVGQmFVSXNRMEZCUXp0QlFVVTVSU3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRWxCUVdkQ0xFVkJRVVVzUlVGQlJUdEpRVU01UXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGVFTXNTVUZCU1N4UlFVRlJPMUZCUVVVc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeFhRVUZYTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRE1VUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZTQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeG5SVUZCY1VJN1VVRkRiRU1zWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eEZRVU5FTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlEzUkRMRmRCUVZjc1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkZOMFFzVlVGQlZTeERRVU5VTEZsQlFWa3NSVUZEV2l4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkRia01zVjBGQlZ5eEZRVU5ZTEVsQlFVa3NRMEZEU2l4RFFVRkRPMGxCUTBZc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVZJTEZOQlFWTXNWVUZCVlN4RFFVTnNRaXhaUVVFd1FpeEZRVU14UWl4SlFVRmpMRVZCUTJRc1YwRkJiMElzUlVGRGNFSXNTVUZCV1R0SlFVVmFMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZPMUZCUXpsQ0xFdEJRVXNzVVVGQlVUdFpRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdXVUZETlVNc1RVRkJUVHRSUVVOUUxFdEJRVXNzYlVKQlFXMUNPMWxCUTNaQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVU5CUVhGRExFTkJRVU03V1VGRE4wUXNUVUZCVFR0UlFVTlFMRXRCUVVzc1UwRkJVenRaUVVOaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNUVUZCVFR0UlFVTlFMRXRCUVVzc1kwRkJZenRaUVVOc1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzFsQlF5OURMRTFCUVUwN1VVRkRVQ3hMUVVGTExIVkNRVUYxUWp0WlFVTXpRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xbEJRMmhFTEUxQlFVMDdVVUZEVUN4TFFVRkxMRkZCUVZFN1dVRkRXaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xbEJRM3BETEUxQlFVMDdVVUZEVUN4TFFVRkxMRkZCUVZFN1dVRkRXaXhuUWtGQlowSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRaUVVNdlFpeE5RVUZOTzFGQlExQTdXVUZEUXl4bFFVRmxMRU5CUVVNc1dVRkJXU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTnNSRHRCUVVOR0xFTkJRVU03UVVGRlJDeFRRVUZUTEdkQ1FVRm5RaXhEUVVGRExGbEJRVEJDTzBsQlEyNUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1NVRkRlRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4blFrRkJaMElzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNN1NVRkRia1FzV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03UVVGRE5VTXNRMEZCUXp0QlFVVkVMRk5CUVZNc1pVRkJaU3hEUVVOMlFpeFpRVUV3UWl4RlFVTXhRaXhYUVVGdlFpeEZRVU53UWl4SlFVRlpPMGxCUlZvc1RVRkJUU3haUVVGWkxFZEJRVWNzTkVOQlFUUkRMRVZCUTJoRkxHbENRVUZwUWl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eFpRVUZaTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUlhCRkxFbEJRVWtzYVVKQlFXbENMRXRCUVVzc1NVRkJTU3hGUVVGRk8xRkJSUzlDTEUxQlFVMHNZVUZCWVN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRek5ETEVkQlFVY3NXVUZCV1N3clFrRkJLMElzUTBGRE9VTXNRMEZCUXp0UlFVTkdMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1VVRkZNVU1zU1VGQlNTeGhRVUZoTEV0QlFVc3NTVUZCU1R0WlFVTjZRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0aFFVTjBSRHRaUVVOS0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1lVRkJZU3hEUVVGRExFOUJRVThzUTBGRGNrWXNZVUZCWVN4RFFVRkRMR0ZCUVdFc1EwRkRNMElzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJRenRUUVVOMlFqdFJRVVZFTEVsQlFVa3NWMEZCVnl4RlFVRkZPMWxCUTJoQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdaMEpCUTNSQ08yOUNRVU5ETEV0QlFVc3NSVUZCUlN4aFFVRmhPMjlDUVVOd1FpeEhRVUZITEVWQlFVVXNTVUZCU1R0cFFrRkRWRHRoUVVORUxFTkJRVU03VTBGRFJqdExRVU5FTzFOQlFVMDdVVUZEVGl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRemxFTEdsQ1FVRnBRaXhIUVVOb1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnZRaXhsUVVGbExFTkJRVU1zUlVGRE0wUXNZMEZCWXl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM1JETEc5RVFVRnZSQ3hEUVVOd1JDeERRVUZETzFGQlJVZ3NTVUZCU1N4RFFVRkRMR2RDUVVGblFqdFpRVUZGTEU5QlFVODdVVUZET1VJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGTTBRc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRk8xbEJSVEZETEVsQlFVa3NWMEZCVnl4RlFVRkZPMmRDUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1lVRkJZVHQzUWtGRGNFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2NVSkJRMVE3YVVKQlEwUXNRMEZCUXp0aFFVTkdPMU5CUTBRN1lVRkJUU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRWxCUVVrc1kwRkJZeXhGUVVGRk8xbEJSV2hFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVVjJSQ3hKUVVGSkxGZEJRVmNzUlVGQlJUdG5Ra0ZEYUVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dHZRa0ZEZEVJN2QwSkJRME1zUzBGQlN5eEZRVUZGTEdGQlFXRTdkMEpCUTNCQ0xFZEJRVWNzUlVGQlJTeEpRVUZKTzNGQ1FVTlVPMjlDUVVORU8zZENRVU5ETEV0QlFVc3NSVUZCUlN4aFFVRmhPM2RDUVVOd1FpeEhRVUZITEVWQlFVVXNZMEZCWXl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU03Y1VKQlEzaERPMmxDUVVORUxFTkJRVU03WVVGRFJqdFRRVU5FTzJGQlFVMHNTVUZCU1N4cFFrRkJhVUlzU1VGQlNTeGpRVUZqTEVWQlFVVTdXVUZGTDBNc1RVRkJUU3hMUVVGTExFZEJRVWNzWTBGQll5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRaUVVVeFJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR2xDUVVGcFFpeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVVeFJDeEpRVUZKTEV0QlFVc3NSVUZCUlR0blFrRkRWaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVOc1F5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVTlNMRXRCUVVzc1owSkJRV2RDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU03WVVGRE0wTTdXVUZGUkN4SlFVRkpMRmRCUVZjc1JVRkJSVHRuUWtGRGFFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenR2UWtGRGRFSTdkMEpCUTBNc1MwRkJTeXhGUVVGRkxHVkJRV1U3ZDBKQlEzUkNMRWRCUVVjc1JVRkJSU3hKUVVGSk8zRkNRVU5VTzI5Q1FVTkVPM2RDUVVORExFdEJRVXNzUlVGQlJTeGhRVUZoTzNkQ1FVTndRaXhIUVVGSExFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1NVRkJTVHR4UWtGRE0wSTdhVUpCUTBRc1EwRkJRenRoUVVOR08xTkJRMFE3VVVGRlJDeGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1MwRkROVUk3UVVGRFJpeERRVUZETzBGQlJVUXNVMEZCVXl4aFFVRmhMRU5CUVVNc1dVRkJNRUk3U1VGRGFFUXNUMEZCVHl4WlFVRlpMRU5CUVVNc1kwRkJZeXhEUVVGRE8wbEJRMjVETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1VVRkRXaXhEUVVGRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVWQlFVVXNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJRenRaUVVOMlJDeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dExRVU12UXp0SlFVTkVMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNhVVJCUVdNc1EwRkJReXdyUTBGQldTeERRVUZETzBGQlEyeEZMRU5CUVVNN1FVRkZSQ3hUUVVGVExHZENRVUZuUWp0SlFVTjRRaXhOUVVGTkxGZEJRVmNzUjBGQlowSXNSVUZCUlN4RlFVTnNReXhYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlhSRUxFbEJRVWtzVjBGQlZ5eEZRVUZGTzFGQlEyaENMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZja01zUzBGQlN5eE5RVUZOTEVsQlFVa3NTVUZCU1N4TFFVRkxMRVZCUVVVN1dVRkRla0lzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4WFFVRlhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJc1EwRkRhRVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkRha0lzUTBGQlF6dFRRVU5HTzB0QlEwUTdTVUZGUkN4UFFVRlBMRmRCUVZjc1EwRkJRenRCUVVOd1FpeERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJkdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwicGF1c2VkIiwicGxheWJhY2siLCJnZXREZXRhaWxzIiwicHJlc2VuY2VEYXRhIiwicGF0aCIsInNob3dCdXR0b25zIiwiaHJlZiIsInRvTG93ZXJDYXNlIiwiZGV0YWlscyIsImdldFNlYXJjaERldGFpbHMiLCJnZXRWaWRlb0RldGFpbHMiLCJzdGF0ZSIsInBhcnNlUXVlcnlQYXJhbXMiLCJxIiwic21hbGxJbWFnZUtleSIsIm1haW5TZWxlY3RvciIsInNlcmllc05hbWVFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0RWxlbWVudCIsInRleHRDb250ZW50IiwidHJpbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwidmlkZW9OYW1lRWxlbWVudCIsInNlcmllc0xpbmtFbGVtZW50IiwiZXBpc29kZUVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJtYXRjaCIsInNldFRpbWVzdGFtcHMiLCJzdGFydFRpbWVzdGFtcCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJxdWVyeVBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJzcGxpdCIsInBhaXJzIiwicGFpciIsImtleVZhbHVlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwib24iLCJkYXRhIiwiYXN5bmMiLCJsYXJnZUltYWdlS2V5IiwicGF0aG5hbWUiLCJnZXRTZXR0aW5nIiwiZmlsdGVyIiwiQm9vbGVhbiIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;