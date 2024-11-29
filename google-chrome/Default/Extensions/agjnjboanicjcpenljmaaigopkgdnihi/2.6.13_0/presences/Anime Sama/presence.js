var __webpack_exports__={};const presence=new Presence({clientId:"1016797607370162256"}),browsingTimestamp=Math.floor(Date.now()/1e3),staticPages={"":"Visionne la page d'accueil",planning:"Regarde le planning des sorties",aide:"Lit la page d'aide",profil:"Visionne son profil",catalogue:"Parcourir le catalogue"};let video={duration:0,currentTime:0,paused:!0};presence.on("iFrameData",(e=>{e?.duration&&(video=e)})),presence.on("UpdateData",(async()=>{const e={type:3,largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/Anime%20Sama/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t,href:a}=document.location,s=t.split("/"),[n,r,i,l]=await Promise.all([presence.getSetting("buttons"),presence.getSetting("privacy"),presence.getSetting("timestamps"),presence.getSetting("cover")]);if(Object.keys(staticPages).includes(s[1])&&s.length<=3)e.details=staticPages[s[1]],r&&(e.details="Navigue...");else if(4===s.length){const t=document.querySelector("h2.border-slate-500")?.textContent;e.details="Anime"===t?"Regarde la page de l'anime":"Regarde la page du manga",e.state=document.querySelector("#titreOeuvre").textContent.trim(),e.buttons=[{label:"Voir la Page",url:a}],e.largeImageKey=document.querySelector("[property='og:image']")?.content??"https://cdn.rcd.gg/PreMiD/websites/A/Anime%20Sama/assets/logo.png",r&&(delete e.state,e.details="Anime"===t?"Regarde la page d'un anime":"Regarde la page d'un manga")}else if(document.querySelector("#selectEpisodes")){const t=document.querySelector("#avOeuvre").textContent,s=document.querySelector("#selectEpisodes"),n=document.querySelector("#selectLecteurs");e.details=`Regarde ${document.querySelector("#titreOeuvre").textContent}`;const[i,l]=presence.getTimestamps(video.currentTime,video.duration);e.state=`${t?`${t} - `:""}${s.options[s.selectedIndex].value}`,e.buttons=[{label:"Voir l'Anime",url:a}],e.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=n.options[n.selectedIndex].value,e.largeImageKey=document.querySelector("[property='og:image']")?.content??"https://cdn.rcd.gg/PreMiD/websites/A/Anime%20Sama/assets/logo.png",[e.startTimestamp,e.endTimestamp]=[i,l],video.paused&&(delete e.startTimestamp,delete e.endTimestamp),r&&(delete e.state,delete e.smallImageKey,e.details="Regarde un anime")}else{const t=document.querySelector("#selectChapitres");e.details=`Lit ${document.querySelector("#titreOeuvre").textContent}`,e.state=t.options[t.selectedIndex].value.trim();const s=document.querySelector("#selectLecteurs");e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText=s.options[s.selectedIndex].value,e.buttons=[{label:"Voir le Scan",url:a}],e.largeImageKey=document.querySelector("[property='og:image']")?.content??"https://cdn.rcd.gg/PreMiD/websites/A/Anime%20Sama/assets/logo.png",r&&(delete e.state,delete e.smallImageKey,e.details="Lit un manga")}n&&!r||delete e.buttons,i||(delete e.startTimestamp,delete e.endTimestamp),l&&!r||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/A/Anime%20Sama/assets/logo.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDN0N2QixFQUFhdUMsY0FBZ0Isa0RBQzdCdkMsRUFBYXdDLGVBQ1RQLEVBQWNHLFFBQVFILEVBQWNJLGVBQWVDLE1BQ3ZEdEMsRUFBYTJCLFFBQVUsQ0FBQyxDQUFFQyxNQUFPLGVBQWdCQyxJQUFLeEIsSUFDdERMLEVBQWFFLGNBQ1RJLFNBQVNpQixjQUFjLDBCQUNqQk8sU0FBVyxvRUFDakJuQixXQUNPWCxFQUFheUIsYUFDYnpCLEVBQWF1QyxjQUNwQnZDLEVBQWFxQixRQUFVLGVBRS9CLENBQ0tYLElBQWVDLFVBQ1RYLEVBQWEyQixRQUNuQmYsV0FDTVosRUFBYUcsc0JBQ2JILEVBQWFrQyxjQUVuQnJCLElBQWFGLElBQ2RYLEVBQWFFLGNBQWdCLHFFQUM3QkYsRUFBYXFCLFFBQ2J6QyxTQUFTOEQsWUFBWTFDLEdBRXJCcEIsU0FBUzhELGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7IGNsaWVudElkOiBcIjEwMTY3OTc2MDczNzAxNjIyNTZcIiB9KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSwgc3RhdGljUGFnZXMgPSB7XG4gICAgXCJcIjogXCJWaXNpb25uZSBsYSBwYWdlIGQnYWNjdWVpbFwiLFxuICAgIHBsYW5uaW5nOiBcIlJlZ2FyZGUgbGUgcGxhbm5pbmcgZGVzIHNvcnRpZXNcIixcbiAgICBhaWRlOiBcIkxpdCBsYSBwYWdlIGQnYWlkZVwiLFxuICAgIHByb2ZpbDogXCJWaXNpb25uZSBzb24gcHJvZmlsXCIsXG4gICAgY2F0YWxvZ3VlOiBcIlBhcmNvdXJpciBsZSBjYXRhbG9ndWVcIixcbn07XG5sZXQgdmlkZW8gPSB7XG4gICAgZHVyYXRpb246IDAsXG4gICAgY3VycmVudFRpbWU6IDAsXG4gICAgcGF1c2VkOiB0cnVlLFxufTtcbnByZXNlbmNlLm9uKFwiaUZyYW1lRGF0YVwiLCAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhPy5kdXJhdGlvbilcbiAgICAgICAgdmlkZW8gPSBkYXRhO1xufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgdHlwZTogMyxcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0EvQW5pbWUlMjBTYW1hL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHBhdGhBcnIgPSBwYXRobmFtZS5zcGxpdChcIi9cIiksIFtzaG93QnV0dG9ucywgcHJpdmFjeU1vZGUsIHNob3dUaW1lc3RhbXBzLCBzaG93Q292ZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lc3RhbXBzXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiY292ZXJcIiksXG4gICAgXSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHN0YXRpY1BhZ2VzKS5pbmNsdWRlcyhwYXRoQXJyWzFdKSAmJiBwYXRoQXJyLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RhdGljUGFnZXNbcGF0aEFyclsxXV07XG4gICAgICAgIGlmIChwcml2YWN5TW9kZSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJOYXZpZ3VlLi4uXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhBcnIubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMi5ib3JkZXItc2xhdGUtNTAwXCIpPy50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPVxuICAgICAgICAgICAgcGFnZVRpdGxlID09PSBcIkFuaW1lXCJcbiAgICAgICAgICAgICAgICA/IFwiUmVnYXJkZSBsYSBwYWdlIGRlIGwnYW5pbWVcIlxuICAgICAgICAgICAgICAgIDogXCJSZWdhcmRlIGxhIHBhZ2UgZHUgbWFuZ2FcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3RpdHJlT2V1dnJlXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZvaXIgbGEgUGFnZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbcHJvcGVydHk9J29nOmltYWdlJ11cIilcbiAgICAgICAgICAgICAgICA/LmNvbnRlbnQgPz8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0EvQW5pbWUlMjBTYW1hL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICBpZiAocHJpdmFjeU1vZGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9XG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlID09PSBcIkFuaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcIlJlZ2FyZGUgbGEgcGFnZSBkJ3VuIGFuaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlJlZ2FyZGUgbGEgcGFnZSBkJ3VuIG1hbmdhXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RFcGlzb2Rlc1wiKSkge1xuICAgICAgICBjb25zdCBzZWFzb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F2T2V1dnJlXCIpLnRleHRDb250ZW50LCBzZWxlY3RFcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdEVwaXNvZGVzXCIpLCBzZWxlY3RMZWN0ZXVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RMZWN0ZXVyc1wiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgUmVnYXJkZSAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0cmVPZXV2cmVcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgY29uc3QgW3N0YXJ0VGltZXN0YW1wLCBlbmRUaW1lc3RhbXBdID0gcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyh2aWRlby5jdXJyZW50VGltZSwgdmlkZW8uZHVyYXRpb24pO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtzZWFzb24gPyBgJHtzZWFzb259IC0gYCA6IFwiXCJ9JHtzZWxlY3RFcHMub3B0aW9uc1tzZWxlY3RFcHMuc2VsZWN0ZWRJbmRleF0udmFsdWV9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogXCJWb2lyIGwnQW5pbWVcIiwgdXJsOiBocmVmIH1dO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHZpZGVvLnBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9XG4gICAgICAgICAgICBzZWxlY3RMZWN0ZXVyLm9wdGlvbnNbc2VsZWN0TGVjdGV1ci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltwcm9wZXJ0eT0nb2c6aW1hZ2UnXVwiKVxuICAgICAgICAgICAgICAgID8uY29udGVudCA/PyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BbmltZSUyMFNhbWEvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID0gW1xuICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXAsXG4gICAgICAgICAgICBlbmRUaW1lc3RhbXAsXG4gICAgICAgIF07XG4gICAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpdmFjeU1vZGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSB1biBhbmltZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBzZWxlY3RDaGFwaXRyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdENoYXBpdHJlc1wiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgTGl0ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRyZU9ldXZyZVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgc2VsZWN0Q2hhcGl0cmVzLm9wdGlvbnNbc2VsZWN0Q2hhcGl0cmVzLnNlbGVjdGVkSW5kZXhdLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0TGVjdGV1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0TGVjdGV1cnNcIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPVxuICAgICAgICAgICAgc2VsZWN0TGVjdGV1ci5vcHRpb25zW3NlbGVjdExlY3RldXIuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVm9pciBsZSBTY2FuXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltwcm9wZXJ0eT0nb2c6aW1hZ2UnXVwiKVxuICAgICAgICAgICAgICAgID8uY29udGVudCA/PyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BbmltZSUyMFNhbWEvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgIGlmIChwcml2YWN5TW9kZSkge1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMaXQgdW4gbWFuZ2FcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNob3dCdXR0b25zIHx8IHByaXZhY3lNb2RlKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgaWYgKCFzaG93VGltZXN0YW1wcykge1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICB9XG4gICAgaWYgKCFzaG93Q292ZXIgfHwgcHJpdmFjeU1vZGUpXG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0EvQW5pbWUlMjBTYW1hL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRExFVkJRMnBGTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVU5xUkN4WFFVRlhMRWRCUVN0Q08wbEJRM3BETEVWQlFVVXNSVUZCUlN3MFFrRkJORUk3U1VGRGFFTXNVVUZCVVN4RlFVRkZMR2xEUVVGcFF6dEpRVU16UXl4SlFVRkpMRVZCUVVVc2IwSkJRVzlDTzBsQlF6RkNMRTFCUVUwc1JVRkJSU3h4UWtGQmNVSTdTVUZETjBJc1UwRkJVeXhGUVVGRkxIZENRVUYzUWp0RFFVTnVReXhEUVVGRE8wRkJUVWdzU1VGQlNTeExRVUZMTEVkQlFVYzdTVUZEV0N4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOWUxGZEJRVmNzUlVGQlJTeERRVUZETzBsQlEyUXNUVUZCVFN4RlFVRkZMRWxCUVVrN1EwRkRXaXhEUVVGRE8wRkJSVVlzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZEVml4WlFVRlpMRVZCUTFvc1EwRkJReXhKUVVGblJTeEZRVUZGTEVWQlFVVTdTVUZEY0VVc1NVRkJTU3hKUVVGSkxFVkJRVVVzVVVGQlVUdFJRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRiRU1zUTBGQlF5eERRVU5FTEVOQlFVTTdRVUZGUml4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1NVRkJTU3hIUVVGMVFqdFJRVU16UWl4aFFVRmhMSEZGUVVGaE8xRkJRekZDTEdOQlFXTXNSVUZCUlN4cFFrRkJhVUk3UzBGRGFrTXNSVUZEUkN4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVTjBReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkROMElzUTBGQlF5eFhRVUZYTEVWQlFVVXNWMEZCVnl4RlFVRkZMR05CUVdNc1JVRkJSU3hUUVVGVExFTkJRVU1zUjBGQlJ5eE5RVUZOTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRla1VzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4WlFVRlpMRU5CUVVNN1VVRkRNVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4UFFVRlBMRU5CUVVNN1MwRkRja01zUTBGQlF5eERRVUZETzBsQlJVb3NTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRSUVVONlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZReXhKUVVGSkxGZEJRVmM3V1VGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJRenRMUVVOeVJEdFRRVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGRGFFTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGRrTXNjVUpCUVhGQ0xFTkJRM0pDTEVWQlFVVXNWMEZCVnl4RFFVRkRPMUZCUTJZc1dVRkJXU3hEUVVGRExFOUJRVTg3V1VGRGJrSXNVMEZCVXl4TFFVRkxMRTlCUVU4N1owSkJRM0JDTEVOQlFVTXNRMEZCUXl3MFFrRkJORUk3WjBKQlF6bENMRU5CUVVNc1EwRkJReXd3UWtGQk1FSXNRMEZCUXp0UlFVTXZRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRTdZVUZETTBJc1lVRkJZU3hEUVVGRExHTkJRV01zUTBGQlF6dGhRVU0zUWl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGNrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEdOQlFXTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU01UkN4WlFVRlpMRU5CUVVNc1lVRkJZVHRaUVVONlFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnJRaXgxUWtGQmRVSXNRMEZCUXp0blFrRkRMMFFzUlVGQlJTeFBRVUZQTEhWRlFVRmxMRU5CUVVNN1VVRkRNMElzU1VGQlNTeFhRVUZYTEVWQlFVVTdXVUZEYUVJc1QwRkJUeXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlF6RkNMRmxCUVZrc1EwRkJReXhQUVVGUE8yZENRVU51UWl4VFFVRlRMRXRCUVVzc1QwRkJUenR2UWtGRGNFSXNRMEZCUXl4RFFVRkRMRFJDUVVFMFFqdHZRa0ZET1VJc1EwRkJReXhEUVVGRExEUkNRVUUwUWl4RFFVRkRPMU5CUTJwRE8wdEJRMFE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVc5Q0xHbENRVUZwUWl4RFFVRkRMRVZCUVVVN1VVRkRlRVVzVFVGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlF6ZEVMRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ2UWl4cFFrRkJhVUlzUTBGQlF5eEZRVU40UlN4aFFVRmhMRWRCUTFvc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dFJRVU12UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRM1JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zVjBGRGVFTXNSVUZCUlN4RFFVRkRPMUZCUTBnc1RVRkJUU3hEUVVGRExHTkJRV01zUlVGQlJTeFpRVUZaTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNMVJDeExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVTnFRaXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVU5rTEVOQlFVTTdVVUZEUml4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlEyNUVMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRXRCUXpWRExFVkJRVVVzUTBGQlF6dFJRVVZJTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeGpRVUZqTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VUXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNhVVJCUVdNc1EwRkJReXdyUTBGQldTeERRVUZETzFGQlEzWkZMRmxCUVZrc1EwRkJReXhqUVVGak8xbEJRekZDTEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTXhSQ3haUVVGWkxFTkJRVU1zWVVGQllUdFpRVU42UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGclFpeDFRa0ZCZFVJc1EwRkJRenRuUWtGREwwUXNSVUZCUlN4UFFVRlBMSFZGUVVGbExFTkJRVU03VVVGRE0wSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnp0WlFVTXhSQ3hqUVVGak8xbEJRMlFzV1VGQldUdFRRVU5hTEVOQlFVTTdVVUZEUml4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFrSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xbEJRMjVETEU5QlFVOHNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJRenRUUVVOcVF6dFJRVU5FTEVsQlFVa3NWMEZCVnl4RlFVRkZPMWxCUTJoQ0xFOUJRVThzV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTXhRaXhQUVVGUExGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZEYkVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRUUVVNeFF6dExRVU5FTzFOQlFVMDdVVUZEVGl4TlFVRk5MR1ZCUVdVc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYjBJc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0UlFVTXZSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlEzUkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWMEZEZUVNc1JVRkJSU3hEUVVGRE8xRkJRMGdzV1VGQldTeERRVUZETEV0QlFVczdXVUZEYWtJc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzSkZMRTFCUVUwc1lVRkJZU3hIUVVOc1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnZRaXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUXpsRUxGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8xRkJRelZETEZsQlFWa3NRMEZCUXl4alFVRmpPMWxCUXpGQ0xHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU14UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNZMEZCWXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6bEVMRmxCUVZrc1EwRkJReXhoUVVGaE8xbEJRM3BDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVd0Q0xIVkNRVUYxUWl4RFFVRkRPMmRDUVVNdlJDeEZRVUZGTEU5QlFVOHNkVVZCUVdVc1EwRkJRenRSUVVNelFpeEpRVUZKTEZkQlFWY3NSVUZCUlR0WlFVTm9RaXhQUVVGUExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZETVVJc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlEyeERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWTBGQll5eERRVUZETzFOQlEzUkRPMHRCUTBRN1NVRkZSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEZkQlFWYzdVVUZCUlN4UFFVRlBMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRE4wUXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSVHRSUVVOd1FpeFBRVUZQTEZsQlFWa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkRia01zVDBGQlR5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRPMHRCUTJwRE8wbEJRMFFzU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4WFFVRlhPMUZCUVVVc1dVRkJXU3hEUVVGRExHRkJRV0VzYzBWQlFXTXNRMEZCUXp0SlFVTjRSU3hKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTzFGQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6czdVVUZEZUVRc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwic3RhdGljUGFnZXMiLCJwbGFubmluZyIsImFpZGUiLCJwcm9maWwiLCJjYXRhbG9ndWUiLCJ2aWRlbyIsImR1cmF0aW9uIiwiY3VycmVudFRpbWUiLCJwYXVzZWQiLCJvbiIsImRhdGEiLCJhc3luYyIsInByZXNlbmNlRGF0YSIsInR5cGUiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImhyZWYiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aEFyciIsInNwbGl0Iiwic2hvd0J1dHRvbnMiLCJwcml2YWN5TW9kZSIsInNob3dUaW1lc3RhbXBzIiwic2hvd0NvdmVyIiwiUHJvbWlzZSIsImFsbCIsImdldFNldHRpbmciLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJkZXRhaWxzIiwicGFnZVRpdGxlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic3RhdGUiLCJ0cmltIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiY29udGVudCIsInNlYXNvbiIsInNlbGVjdEVwcyIsInNlbGVjdExlY3RldXIiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsInNlbGVjdENoYXBpdHJlcyIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;