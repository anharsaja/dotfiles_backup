var __webpack_exports__={};const presence=new Presence({clientId:"894514361559818260"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const[e,t]=await Promise.all([presence.getSetting("time"),presence.getSetting("buttons")]),a={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:r,hash:s,href:l}=document.location;switch(r.split("/")[1]){case"game":switch(a.details="Browsing lobbies",s.split("/")[1]){case"creategame":a.details="Creating a game";break;case"profile":a.details="Viewing profile",a.state=document.querySelector(".profile.header"),a.buttons=[{label:"View Profile",url:l}];break;case"table":{let e=!1;for(const t of document.querySelectorAll(".player-number > span"))document.querySelector(".playername").textContent!==(document.querySelectorAll(".player-number > span")[0].textContent.match(/^[0-9]+\. ([A-Za-z0-9]+)/)??"")[1]&&document.querySelector(".playername").textContent!==t.textContent||(e=!0);a.details=`${e?"Playing":"Observing"} game [${document.querySelector(".player-count > span").textContent} Player${1===parseInt(document.querySelector(".player-count > span").textContent)?"":"s"}]`,a.state=`${document.querySelector(".game-name").textContent}`,document.querySelector(".option-icons .lock")&&(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/0.png",a.smallImageText="Private game"),document.querySelector(".option-icons .lock.green")?(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/1.png",a.smallImageText="Unlisted game"):a.buttons=[{label:"View Table",url:l}];break}case"replay":{const e=document.querySelector(".rc-slider-handle");a.details="Viewing replay "+(e?`[Turn ${e?.ariaValueNow}/${e?.ariaValueMax}]`:"[Chat]"),a.state=`${document.querySelector(".game-name").textContent}`,document.querySelector(".option-icons .lock")&&(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/0.png",a.smallImageText="Private game"),document.querySelector(".option-icons .lock.green")?(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/1.png",a.smallImageText="Unlisted game"):a.buttons=[{label:"View Replay",url:l}];break}}break;case"observe":switch(a.details="Browsing lobbies",s.split("/")[1]){case"profile":a.details="Viewing profile",a.state=document.querySelector(".profile.header"),a.buttons=[{label:"View Profile",url:l}];break;case"table":a.details=`Observing\n\t\t\t\t\t game [${document.querySelector(".player-count > span").textContent} Player${1===parseInt(document.querySelector(".player-count > span").textContent)?"":"s"}]`,a.state=`${document.querySelector(".game-name").textContent}`,document.querySelector(".option-icons .lock")&&(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/0.png",a.smallImageText="Private game"),document.querySelector(".option-icons .lock.green")?(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/1.png",a.smallImageText="Unlisted game"):a.buttons=[{label:"View Table",url:l}];break;case"replay":{const e=document.querySelector(".rc-slider-handle");a.details="Viewing replay "+(e?`[Turn ${e?.ariaValueNow}/${e?.ariaValueMax}]`:"[Chat]"),a.state=`${document.querySelector(".game-name").textContent}`,document.querySelector(".option-icons .lock")&&(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/0.png",a.smallImageText="Private game"),document.querySelector(".option-icons .lock.green")?(a.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Secret%20Hitler/assets/1.png",a.smallImageText="Unlisted game"):a.buttons=[{label:"View Replay",url:l}];break}}break;default:a.details=`Viewing ${document.querySelector("nav > .active")?.textContent}`,"account"===r.split("/")[1]&&(a.details="Viewing account info")}e||delete a.startTimestamp,t||delete a.buttons,presence.setActivity(a)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yyw4QkFHeEJYLEVBQWFvQixjQUFnQixvRUFDN0JwQixFQUFhcUIsZUFBaUIsaUJBSDlCckIsRUFBYUosUUFBVSxDQUFDLENBQUVnQixNQUFPLGFBQWNDLElBQUtSLElBS3hELE1BRUosSUFBSyxTQUFVLENBQ1gsTUFBTWlCLEVBQWFoQixTQUFTSyxjQUFjLHFCQUMxQ1gsRUFBYVMsUUFBVSxtQkFBa0JhLEVBQ25DLFNBQVNBLEdBQVlDLGdCQUFnQkQsR0FBWUUsZ0JBQ2pELFVBQ054QixFQUFhVSxNQUFRLEdBQUdKLFNBQVNLLGNBQWMsY0FBY00sY0FDekRYLFNBQVNLLGNBQWMseUJBQ3ZCWCxFQUFhb0IsY0FBZ0Isb0VBQzdCcEIsRUFBYXFCLGVBQWlCLGdCQUU3QmYsU0FBU0ssY0FBYyw4QkFHeEJYLEVBQWFvQixjQUFnQixvRUFDN0JwQixFQUFhcUIsZUFBaUIsaUJBSDlCckIsRUFBYUosUUFBVSxDQUFDLENBQUVnQixNQUFPLGNBQWVDLElBQUtSLElBS3pELEtBQ0osRUFFSixNQUVKLFFBQ0lMLEVBQWFTLFFBQVUsV0FBV0gsU0FBU0ssY0FBYyxrQkFBa0JNLGNBQzVDLFlBQTNCZCxFQUFTSyxNQUFNLEtBQUssS0FDcEJSLEVBQWFTLFFBQVUsd0JBSTlCZCxVQUNNSyxFQUFhRSxlQUNuQk4sVUFDTUksRUFBYUosUUFDeEJYLFNBQVN3QyxZQUFZekIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4OTQ1MTQzNjE1NTk4MTgyNjBcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbdGltZSwgYnV0dG9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICBdKSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TZWNyZXQlMjBIaXRsZXIvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IHBhdGhuYW1lLCBoYXNoLCBocmVmIH0gPSBkb2N1bWVudC5sb2NhdGlvbjtcbiAgICBzd2l0Y2ggKHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSkge1xuICAgICAgICBjYXNlIFwiZ2FtZVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgbG9iYmllc1wiO1xuICAgICAgICAgICAgc3dpdGNoIChoYXNoLnNwbGl0KFwiL1wiKVsxXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVnYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNyZWF0aW5nIGEgZ2FtZVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInByb2ZpbGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBwcm9maWxlXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZS5oZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBQcm9maWxlXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0YWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLW51bWJlciA+IHNwYW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcm5hbWVcIikudGV4dENvbnRlbnQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1udW1iZXIgPiBzcGFuXCIpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5tYXRjaCgvXlswLTldK1xcLiAoW0EtWmEtejAtOV0rKS8pID8/IFwiXCIpWzFdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJuYW1lXCIpLnRleHRDb250ZW50ID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHtpc1BsYXlpbmcgPyBcIlBsYXlpbmdcIiA6IFwiT2JzZXJ2aW5nXCJ9IGdhbWUgWyR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItY291bnQgPiBzcGFuXCIpLnRleHRDb250ZW50fSBQbGF5ZXIke3BhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWNvdW50ID4gc3BhblwiKS50ZXh0Q29udGVudCkgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNcIn1dYDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW5hbWVcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uLWljb25zIC5sb2NrXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NlY3JldCUyMEhpdGxlci9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUHJpdmF0ZSBnYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbi1pY29ucyAubG9jay5ncmVlblwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBUYWJsZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TZWNyZXQlMjBIaXRsZXIvYXNzZXRzLzEucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlVubGlzdGVkIGdhbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlcGxheVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR1cm5TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJjLXNsaWRlci1oYW5kbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgcmVwbGF5ICR7dHVyblNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgW1R1cm4gJHt0dXJuU2xpZGVyPy5hcmlhVmFsdWVOb3d9LyR7dHVyblNsaWRlcj8uYXJpYVZhbHVlTWF4fV1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiW0NoYXRdXCJ9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW5hbWVcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uLWljb25zIC5sb2NrXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NlY3JldCUyMEhpdGxlci9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUHJpdmF0ZSBnYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbi1pY29ucyAubG9jay5ncmVlblwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBSZXBsYXlcIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU2VjcmV0JTIwSGl0bGVyL2Fzc2V0cy8xLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJVbmxpc3RlZCBnYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm9ic2VydmVcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGxvYmJpZXNcIjtcbiAgICAgICAgICAgIHN3aXRjaCAoaGFzaC5zcGxpdChcIi9cIilbMV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJvZmlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHByb2ZpbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlLmhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWaWV3IFByb2ZpbGVcIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInRhYmxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgT2JzZXJ2aW5nXG5cdFx0XHRcdFx0IGdhbWUgWyR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItY291bnQgPiBzcGFuXCIpLnRleHRDb250ZW50fSBQbGF5ZXIke3BhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWNvdW50ID4gc3BhblwiKS50ZXh0Q29udGVudCkgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNcIn1dYDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW5hbWVcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uLWljb25zIC5sb2NrXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NlY3JldCUyMEhpdGxlci9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUHJpdmF0ZSBnYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbi1pY29ucyAubG9jay5ncmVlblwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBUYWJsZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TZWNyZXQlMjBIaXRsZXIvYXNzZXRzLzEucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlVubGlzdGVkIGdhbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlcGxheVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR1cm5TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJjLXNsaWRlci1oYW5kbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgcmVwbGF5ICR7dHVyblNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgW1R1cm4gJHt0dXJuU2xpZGVyPy5hcmlhVmFsdWVOb3d9LyR7dHVyblNsaWRlcj8uYXJpYVZhbHVlTWF4fV1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiW0NoYXRdXCJ9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW5hbWVcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uLWljb25zIC5sb2NrXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NlY3JldCUyMEhpdGxlci9hc3NldHMvMC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUHJpdmF0ZSBnYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbi1pY29ucyAubG9jay5ncmVlblwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBSZXBsYXlcIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU2VjcmV0JTIwSGl0bGVyL2Fzc2V0cy8xLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJVbmxpc3RlZCBnYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgPiAuYWN0aXZlXCIpPy50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSA9PT0gXCJhY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYWNjb3VudCBpbmZvXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRpbWUpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgaWYgKCFidXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVZGdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVONFF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRTFCUVUwc1EwRkJRenRSUVVOd1F5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRk5CUVZNc1EwRkJRenRMUVVOMlF5eERRVUZETEVWQlEwWXNXVUZCV1N4SFFVRnBRanRSUVVNMVFpeGhRVUZoTEhkRlFVRmhPMUZCUXpGQ0xHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEZRVUZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVVTVReXhSUVVGUkxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGREwwSXNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOYUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMmRDUVVNelFpeExRVUZMTEZsQlFWa3NRMEZCUXl4RFFVRkRPMjlDUVVOc1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzI5Q1FVTjZReXhOUVVGTk8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03YjBKQlEyWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0dlFrRkRla01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN2IwSkJReTlFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeGpRVUZqTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03YjBKQlF6bEVMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4UFFVRlBMRU5CUVVNc1EwRkJRenR2UWtGRFlpeEpRVUZKTEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNN2IwSkJRM1JDTEV0QlFVc3NUVUZCVFN4UFFVRlBMRWxCUVVrc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVTTVReXgxUWtGQmRVSXNRMEZEZGtJc1JVRkJSVHQzUWtGRFJpeEpRVU5ETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zVjBGQlZ6czBRa0ZEYUVRc1EwRkJReXhSUVVGUk8ybERRVU5RTEdkQ1FVRm5RaXhEUVVGRExIVkNRVUYxUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8ybERRVU0xUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExEQkNRVUV3UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3pSQ1FVTXhSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRmRCUVZjN1owTkJRMmhFTEU5QlFVOHNRMEZCUXl4WFFVRlhPelJDUVVWd1FpeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRPM0ZDUVVOc1FqdHZRa0ZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFZEJRM1JDTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVU42UWl4VlFVTkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1EwRkJReXhYUVVOb1JDeFZRVU5ETEZGQlFWRXNRMEZEVUN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVNeFJDeExRVUZMTEVOQlFVTTdkMEpCUTA0c1EwRkJReXhEUVVGRExFVkJRVVU3ZDBKQlEwb3NRMEZCUXl4RFFVRkRMRWRCUTBvc1IwRkJSeXhEUVVGRE8yOUNRVU5LTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhYUVVOMFF5eEZRVUZGTEVOQlFVTTdiMEpCUTBnc1NVRkJTU3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFVkJRVVU3ZDBKQlEyeEVMRmxCUVZrc1EwRkJReXhoUVVGaExITkZRVUZwUWl4RFFVRkRPM2RDUVVNMVF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR05CUVdNc1EwRkJRenR4UWtGRE4wTTdiMEpCUTBRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNNa0pCUVRKQ0xFTkJRVU03ZDBKQlEzWkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4WlFVRlpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdlVUpCUTNoRU8zZENRVU5LTEZsQlFWa3NRMEZCUXl4aFFVRmhMSE5GUVVGclFpeERRVUZETzNkQ1FVTTNReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdWQlFXVXNRMEZCUXp0eFFrRkRPVU03YjBKQlEwUXNUVUZCVFR0cFFrRkRUanRuUWtGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMjlDUVVOa0xFMUJRVTBzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0dlFrRkRMMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkRkRUlzVlVGQlZUdDNRa0ZEVkN4RFFVRkRMRU5CUVVNc1UwRkJVeXhWUVVGVkxFVkJRVVVzV1VGQldTeEpRVUZKTEZWQlFWVXNSVUZCUlN4WlFVRlpMRWRCUVVjN2QwSkJRMnhGTEVOQlFVTXNRMEZCUXl4UlFVTktMRVZCUVVVc1EwRkJRenR2UWtGRFNDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1YwRkRkRU1zUlVGQlJTeERRVUZETzI5Q1FVTklMRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhGUVVGRk8zZENRVU5zUkN4WlFVRlpMRU5CUVVNc1lVRkJZU3h6UlVGQmFVSXNRMEZCUXp0M1FrRkROVU1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4alFVRmpMRU5CUVVNN2NVSkJRemRETzI5Q1FVTkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERKQ1FVRXlRaXhEUVVGRE8zZENRVU4yUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNZVUZCWVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzNsQ1FVTjZSRHQzUWtGRFNpeFpRVUZaTEVOQlFVTXNZVUZCWVN4elJVRkJhMElzUTBGQlF6dDNRa0ZETjBNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eGxRVUZsTEVOQlFVTTdjVUpCUXpsRE8yOUNRVU5FTEUxQlFVMDdhVUpCUTA0N1lVRkRSRHRaUVVORUxFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xbEJRekZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0blFrRkRNMElzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXp0dlFrRkRaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8yOUNRVU42UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dHZRa0ZETDBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkRPVVFzVFVGQlRUdHBRa0ZEVGp0blFrRkRSQ3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVTmlMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WTBGRFpDeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMSE5DUVVGelFpeERRVUZETEVOQlFVTXNWMEZCVnl4VlFVTnNSU3hSUVVGUkxFTkJRMUFzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4elFrRkJjMElzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZETVVRc1MwRkJTeXhEUVVGRE8zZENRVU5PTEVOQlFVTXNRMEZCUXl4RlFVRkZPM2RDUVVOS0xFTkJRVU1zUTBGQlF5eEhRVU5LTEVkQlFVY3NRMEZCUXp0dlFrRkRTaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNWMEZEZEVNc1JVRkJSU3hEUVVGRE8yOUNRVU5JTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RlFVRkZPM2RDUVVOc1JDeFpRVUZaTEVOQlFVTXNZVUZCWVN4elJVRkJhVUlzUTBGQlF6dDNRa0ZETlVNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eGpRVUZqTEVOQlFVTTdjVUpCUXpkRE8yOUNRVU5FTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExESkNRVUV5UWl4RFFVRkRPM2RDUVVOMlJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8zbENRVU40UkR0M1FrRkRTaXhaUVVGWkxFTkJRVU1zWVVGQllTeHpSVUZCYTBJc1EwRkJRenQzUWtGRE4wTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhsUVVGbExFTkJRVU03Y1VKQlF6bERPMjlDUVVORUxFMUJRVTA3YVVKQlEwNDdaMEpCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dHZRa0ZEWkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03YjBKQlF5OUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlEzUkNMRlZCUVZVN2QwSkJRMVFzUTBGQlF5eERRVUZETEZOQlFWTXNWVUZCVlN4RlFVRkZMRmxCUVZrc1NVRkJTU3hWUVVGVkxFVkJRVVVzV1VGQldTeEhRVUZITzNkQ1FVTnNSU3hEUVVGRExFTkJRVU1zVVVGRFNpeEZRVUZGTEVOQlFVTTdiMEpCUTBnc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEZkQlEzUkRMRVZCUVVVc1EwRkJRenR2UWtGRFNDeEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlR0M1FrRkRiRVFzV1VGQldTeERRVUZETEdGQlFXRXNjMFZCUVdsQ0xFTkJRVU03ZDBKQlF6VkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzWTBGQll5eERRVUZETzNGQ1FVTTNRenR2UWtGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXd5UWtGQk1rSXNRMEZCUXp0M1FrRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxHRkJRV0VzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenQ1UWtGRGVrUTdkMEpCUTBvc1dVRkJXU3hEUVVGRExHRkJRV0VzYzBWQlFXdENMRU5CUVVNN2QwSkJRemRETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1pVRkJaU3hEUVVGRE8zRkNRVU01UXp0dlFrRkRSQ3hOUVVGTk8ybENRVU5PTzJGQlEwUTdXVUZEUkN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU5TTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1YwRkRkRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4bFFVRmxMRU5CUVVNc1JVRkJSU3hYUVVNeFF5eEZRVUZGTEVOQlFVTTdXVUZEU0N4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVenRuUWtGRGRrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0WlFVTXZReXhOUVVGTk8xTkJRMDQ3UzBGRFJEdEpRVVZFTEVsQlFVa3NRMEZCUXl4SlFVRkpPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU1zWTBGQll5eERRVUZETzBsQlF6bERMRWxCUVVrc1EwRkJReXhQUVVGUE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUlRGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJ0aW1lIiwiYnV0dG9ucyIsIlByb21pc2UiLCJhbGwiLCJnZXRTZXR0aW5nIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWUiLCJoYXNoIiwiaHJlZiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJzcGxpdCIsImRldGFpbHMiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJsYWJlbCIsInVybCIsImlzUGxheWluZyIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGV4dENvbnRlbnQiLCJtYXRjaCIsInBhcnNlSW50Iiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwidHVyblNsaWRlciIsImFyaWFWYWx1ZU5vdyIsImFyaWFWYWx1ZU1heCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;