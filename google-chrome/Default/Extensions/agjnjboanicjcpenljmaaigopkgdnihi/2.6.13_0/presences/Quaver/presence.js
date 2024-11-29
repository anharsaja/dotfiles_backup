var __webpack_exports__={};const presence=new Presence({clientId:"897489206199324713"}),browsingTimestamp=Math.floor(Date.now()/1e3),keys={"4K":"https://cdn.rcd.gg/PreMiD/websites/Q/Quaver/assets/0.png","7K":"https://cdn.rcd.gg/PreMiD/websites/Q/Quaver/assets/1.png"};presence.on("UpdateData",(async()=>{const[e,t,a,s]=await Promise.all([presence.getSetting("time"),presence.getSetting("smallImage"),presence.getSetting("cover"),presence.getSetting("buttons")]),r={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/Q/Quaver/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:l,href:i}=document.location;switch(l.split("/")[1]){case"":r.details="Viewing homepage";break;case"mapset":if("ranking"!==l.split("/")[3]){const e=document.querySelector(".container .dropdown button").textContent.trim().match(/\[(..)\] ([0-9.]+ - .*)/);t&&(r.smallImageKey=keys[e[1]],r.smallImageText=e[2])}r.details=document.querySelector("h1").firstChild.textContent.trim(),r.state=`Created by: ${document.querySelector(".card-body a").textContent.trim()}`,a&&(r.largeImageKey=document.querySelector(".background")),r.buttons=[{label:"View Mapset",url:i},{label:"View Creator",url:document.querySelector(".card-body a").href}];break;case"mapsets":r.details="Viewing ranking queue",t&&"All"!==document.querySelector("[class*='active-keys']").textContent.trim()&&(r.smallImageKey=keys[document.querySelector("[class*='active-keys']").textContent.trim().replace("eys","").replace(" ","")],r.smallImageText=document.querySelector("[class*='active-keys']").textContent.trim());break;case"maps":r.details="Browsing maps";break;case"user":r.details="Viewing profile",r.state=document.querySelector("#user-card .text-white"),a&&(r.largeImageKey=document.querySelector(".avatar-thumbnail img")),t&&(r.smallImageKey=document.querySelector("#user-card img")),r.buttons=[{label:"View Profile",url:i}];break;case"leaderboard":switch(l.split("/")[2]??""){case"":r.details="Browsing leaderboard",t&&(r.smallImageKey=keys[document.querySelector("[class*='active-keys']").textContent.trim().replace("eys","").replace(" ","")],r.smallImageText=document.querySelector("[class*='active-keys']").textContent.trim());break;case"hits":r.details="Browsing hits leaderboard";break;case"multiplayer":r.details="Browsing multiplayer leaderboard",t&&(r.smallImageKey=keys[document.querySelector("[class*='active-keys']").textContent.trim().replace("eys","").replace(" ","")],r.smallImageText=document.querySelector("[class*='active-keys']").textContent.trim());break;case"countries":r.details="Browsing country leaderboard";break;default:r.details=l.split("/")[1],r.state=l.split("/")[2]}break;case"playlist":r.details=document.querySelector("h1").textContent.trim(),r.state=document.querySelector(".card-block a[href='']").parentElement,a&&(r.largeImageKey=document.querySelector(".card .image img")),r.buttons=[{label:"View Playlist",url:i}];break;case"playlists":r.details="Browsing playlists";break;case"multiplayer":switch(l.split("/")[2]){case"games":r.details="Browsing multiplayer games";break;case"game":r.details="Viewing multiplayer game",r.state=document.querySelector("h1").textContent.trim().replace("Multiplayer - ",""),r.buttons=[{label:"View Game",url:i}]}break;case"docs":r.details="Viewing wiki",r.state=document.querySelector("h1").textContent.trim();break;case"team":r.details="Viewing Quaver team";break;default:r.details=l.split("/")[1]}e||delete r.startTimestamp,!s&&r.buttons&&delete r.buttons,presence.setActivity(r)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssR0FHakQsTUFFSixJQUFLLFdBQ0RQLEVBQWFRLFFBQVVILFNBQVNLLGNBQWMsTUFBTUMsWUFBWUMsT0FDaEVaLEVBQWFpQixNQUFRWixTQUFTSyxjQUFjLDBCQUEwQlcsY0FDbEUxQixJQUNBSyxFQUFhQyxjQUNUSSxTQUFTSyxjQUFjLHFCQUUvQlYsRUFBYUosUUFBVSxDQUNuQixDQUNJc0IsTUFBTyxnQkFDUEMsSUFBS2YsSUFHYixNQUVKLElBQUssWUFDREosRUFBYVEsUUFBVSxxQkFDdkIsTUFFSixJQUFLLGNBQ0QsT0FBUUwsRUFBU0ksTUFBTSxLQUFLLElBQ3hCLElBQUssUUFDRFAsRUFBYVEsUUFBVSw2QkFDdkIsTUFFSixJQUFLLE9BQ0RSLEVBQWFRLFFBQVUsMkJBQ3ZCUixFQUFhaUIsTUFBUVosU0FDaEJLLGNBQWMsTUFDZEMsWUFBWUMsT0FDWlEsUUFBUSxpQkFBa0IsSUFDL0JwQixFQUFhSixRQUFVLENBQ25CLENBQ0lzQixNQUFPLFlBQ1BDLElBQUtmLElBTXJCLE1BRUosSUFBSyxPQUNESixFQUFhUSxRQUFVLGVBQ3ZCUixFQUFhaUIsTUFBUVosU0FBU0ssY0FBYyxNQUFNQyxZQUFZQyxPQUM5RCxNQUVKLElBQUssT0FDRFosRUFBYVEsUUFBVSxzQkFDdkIsTUFFSixRQUNJUixFQUFhUSxRQUFVTCxFQUFTSSxNQUFNLEtBQUssR0FHOUNkLFVBQ01PLEVBQWFFLGdCQUNuQk4sR0FBV0ksRUFBYUosZ0JBQ2xCSSxFQUFhSixRQUN4QmQsU0FBU3dDLFlBQVl0QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjg5NzQ4OTIwNjE5OTMyNDcxM1wiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIGtleXMgPSB7XG4gICAgXCI0S1wiOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUS9RdWF2ZXIvYXNzZXRzLzAucG5nXCIsXG4gICAgXCI3S1wiOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUS9RdWF2ZXIvYXNzZXRzLzEucG5nXCIsXG59O1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbdGltZSwgc21hbGxJbWFnZSwgY292ZXIsIGJ1dHRvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidGltZVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInNtYWxsSW1hZ2VcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJjb3ZlclwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIiksXG4gICAgXSksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1EvUXVhdmVyL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gZG9jdW1lbnQubG9jYXRpb247XG4gICAgc3dpdGNoIChwYXRobmFtZS5zcGxpdChcIi9cIilbMV0pIHtcbiAgICAgICAgY2FzZSBcIlwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBob21lcGFnZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm1hcHNldFwiOiB7XG4gICAgICAgICAgICBpZiAocGF0aG5hbWUuc3BsaXQoXCIvXCIpWzNdICE9PSBcInJhbmtpbmdcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHlJbmZvID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5kcm9wZG93biBidXR0b25cIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAubWF0Y2goL1xcWyguLilcXF0gKFswLTkuXSsgLSAuKikvKTtcbiAgICAgICAgICAgICAgICBpZiAoc21hbGxJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IGtleXNbZGlmZmljdWx0eUluZm9bMV1dO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBkaWZmaWN1bHR5SW5mb1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKVxuICAgICAgICAgICAgICAgIC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBDcmVhdGVkIGJ5OiAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1ib2R5IGFcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfWA7XG4gICAgICAgICAgICBpZiAoY292ZXIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBNYXBzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IENyZWF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtYm9keSBhXCIpLmhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwibWFwc2V0c1wiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyByYW5raW5nIHF1ZXVlXCI7XG4gICAgICAgICAgICBpZiAoc21hbGxJbWFnZSAmJlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3MqPSdhY3RpdmUta2V5cyddXCIpLnRleHRDb250ZW50LnRyaW0oKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgXCJBbGxcIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICAgICAga2V5c1tkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3MqPSdhY3RpdmUta2V5cyddXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcImV5c1wiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCIgXCIsIFwiXCIpXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIltjbGFzcyo9J2FjdGl2ZS1rZXlzJ11cIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJtYXBzXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBtYXBzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwidXNlclwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBwcm9maWxlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXItY2FyZCAudGV4dC13aGl0ZVwiKTtcbiAgICAgICAgICAgIGlmIChjb3Zlcikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmF0YXItdGh1bWJuYWlsIGltZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzbWFsbEltYWdlKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXItY2FyZCBpbWdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgUHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwibGVhZGVyYm9hcmRcIjoge1xuICAgICAgICAgICAgc3dpdGNoIChwYXRobmFtZS5zcGxpdChcIi9cIilbMl0gPz8gXCJcIikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgbGVhZGVyYm9hcmRcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNtYWxsSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzW2RvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzKj0nYWN0aXZlLWtleXMnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiZXlzXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiIFwiLCBcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzKj0nYWN0aXZlLWtleXMnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJoaXRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGhpdHMgbGVhZGVyYm9hcmRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsYXllclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBtdWx0aXBsYXllciBsZWFkZXJib2FyZFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc21hbGxJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXNbZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3MqPSdhY3RpdmUta2V5cyddXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJleXNcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCIgXCIsIFwiXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3MqPSdhY3RpdmUta2V5cyddXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvdW50cmllc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBjb3VudHJ5IGxlYWRlcmJvYXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYXRobmFtZS5zcGxpdChcIi9cIilbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInBsYXlsaXN0XCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1ibG9jayBhW2hyZWY9JyddXCIpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoY292ZXIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZCAuaW1hZ2UgaW1nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFBsYXlsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJwbGF5bGlzdHNcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHBsYXlsaXN0c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm11bHRpcGxheWVyXCI6IHtcbiAgICAgICAgICAgIHN3aXRjaCAocGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdhbWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIG11bHRpcGxheWVyIGdhbWVzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2FtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIG11bHRpcGxheWVyIGdhbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiTXVsdGlwbGF5ZXIgLSBcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgR2FtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkb2NzXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHdpa2lcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwidGVhbVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBRdWF2ZXIgdGVhbVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYXRobmFtZS5zcGxpdChcIi9cIilbMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aW1lKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgIGlmICghYnV0dG9ucyAmJiBwcmVzZW5jZURhdGEuYnV0dG9ucylcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5idXR0b25zO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZEYWtRc1NVRkJTU3hIUVVFeVFqdEpRVU01UWl4SlFVRkpMRVZCUVVVc01FUkJRVEJFTzBsQlEyaEZMRWxCUVVrc1JVRkJSU3d3UkVGQk1FUTdRMEZEYUVVc1EwRkJRenRCUVUxSUxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4TlFVRk5MRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU03VVVGRE0wUXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hOUVVGTkxFTkJRVU03VVVGRGNFTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3haUVVGWkxFTkJRVU03VVVGRE1VTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hQUVVGUExFTkJRVU03VVVGRGNrTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hUUVVGVExFTkJRVU03UzBGRGRrTXNRMEZCUXl4RlFVTkdMRmxCUVZrc1IwRkJhVUk3VVVGRE5VSXNZVUZCWVN3clJFRkJZVHRSUVVNeFFpeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVVjRReXhSUVVGUkxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGREwwSXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOU0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU5rTEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRM3BETEUxQlFVMHNZMEZCWXl4SFFVRkhMRkZCUVZFN2NVSkJRemRDTEdGQlFXRXNRMEZCUXl3MlFrRkJOa0lzUTBGQlF6dHhRa0ZETlVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJUdHhRa0ZEYkVJc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1owSkJRMjVETEVsQlFVa3NWVUZCVlN4RlFVRkZPMjlDUVVObUxGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlSQ3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRGFFUTdZVUZEUkR0WlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVUdHBRa0ZETjBJc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF6dHBRa0ZEYmtJc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVTm9ReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdWQlFXVXNVVUZCVVR0cFFrRkRNVU1zWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXp0cFFrRkROMElzVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRka0lzU1VGQlNTeExRVUZMTEVWQlFVVTdaMEpCUTFZc1dVRkJXU3hEUVVGRExHRkJRV0U3YjBKQlEzcENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVzFDTEdGQlFXRXNRMEZCUXl4RFFVRkRPMkZCUTNwRU8xbEJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMR0ZCUVdFN2IwSkJRM0JDTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmxDUVVOVU8yZENRVU5FTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hqUVVGak8yOUNRVU55UWl4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNZMEZCWXl4RFFVRkRMRU5CUVVNc1NVRkJTVHRwUWtGRGJrVTdZVUZEUkN4RFFVRkRPMWxCUTBZc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTm1MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1dVRkRMME1zU1VGRFF5eFZRVUZWTzJkQ1FVTldMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTzI5Q1FVTnNSU3hMUVVGTExFVkJRMHc3WjBKQlEwUXNXVUZCV1N4RFFVRkRMR0ZCUVdFN2IwSkJRM3BDTEVsQlFVa3NRMEZEU0N4UlFVRlJPM2xDUVVOT0xHRkJRV0VzUTBGQlF5eDNRa0ZCZDBJc1EwRkJRenQ1UWtGRGRrTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSVHQ1UWtGRGJFSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU03ZVVKQlEyeENMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlEyeENMRU5CUVVNN1owSkJRMGdzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4UlFVRlJPM0ZDUVVOd1F5eGhRVUZoTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU03Y1VKQlEzWkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dGhRVU55UWp0WlFVTkVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dFpRVU4yUXl4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlExb3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0WlFVTjZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hKUVVGSkxFdEJRVXNzUlVGQlJUdG5Ra0ZEVml4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEyeEVMSFZDUVVGMVFpeERRVU4yUWl4RFFVRkRPMkZCUTBZN1dVRkRSQ3hKUVVGSkxGVkJRVlVzUlVGQlJUdG5Ra0ZEWml4WlFVRlpMRU5CUVVNc1lVRkJZVHR2UWtGRGVrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJiVUlzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRoUVVNMVJEdFpRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hqUVVGak8yOUNRVU55UWl4SFFVRkhMRVZCUVVVc1NVRkJTVHRwUWtGRFZEdGhRVU5FTEVOQlFVTTdXVUZEUml4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExHRkJRV0VzUTBGQlF5eERRVUZETzFsQlEyNUNMRkZCUVZFc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3WjBKQlEzSkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03YjBKQlExSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0dlFrRkRPVU1zU1VGQlNTeFZRVUZWTEVWQlFVVTdkMEpCUTJZc1dVRkJXU3hEUVVGRExHRkJRV0U3TkVKQlEzcENMRWxCUVVrc1EwRkRTQ3hSUVVGUk8ybERRVU5PTEdGQlFXRXNRMEZCUXl4M1FrRkJkMElzUTBGQlF6dHBRMEZEZGtNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJUdHBRMEZEYkVJc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTTdhVU5CUTJ4Q0xFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUTJ4Q0xFTkJRVU03ZDBKQlEwZ3NXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhSUVVGUk96WkNRVU53UXl4aFFVRmhMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTTdOa0pCUTNaRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0eFFrRkRja0k3YjBKQlEwUXNUVUZCVFR0cFFrRkRUanRuUWtGRFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRPMjlDUVVOYUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNa0pCUVRKQ0xFTkJRVU03YjBKQlEyNUVMRTFCUVUwN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4aFFVRmhMRU5CUVVNc1EwRkJRenR2UWtGRGJrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUTBGQmEwTXNRMEZCUXp0dlFrRkRNVVFzU1VGQlNTeFZRVUZWTEVWQlFVVTdkMEpCUTJZc1dVRkJXU3hEUVVGRExHRkJRV0U3TkVKQlEzcENMRWxCUVVrc1EwRkRTQ3hSUVVGUk8ybERRVU5PTEdGQlFXRXNRMEZCUXl4M1FrRkJkMElzUTBGQlF6dHBRMEZEZGtNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJUdHBRMEZEYkVJc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTTdhVU5CUTJ4Q0xFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUTJ4Q0xFTkJRVU03ZDBKQlEwZ3NXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhSUVVGUk96WkNRVU53UXl4aFFVRmhMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTTdOa0pCUTNaRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0eFFrRkRja0k3YjBKQlEwUXNUVUZCVFR0cFFrRkRUanRuUWtGRFJDeExRVUZMTEZkQlFWY3NRMEZCUXl4RFFVRkRPMjlDUVVOcVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRGhDUVVFNFFpeERRVUZETzI5Q1FVTjBSQ3hOUVVGTk8ybENRVU5PTzJkQ1FVTkVMRTlCUVU4c1EwRkJReXhEUVVGRE8yOUNRVU5TTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE9VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU0xUXp0aFFVTkVPMWxCUTBRc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTm9RaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTNaRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRNVU1zZDBKQlFYZENMRU5CUTNoQ0xFTkJRVU1zWVVGQllTeERRVUZETzFsQlEyaENMRWxCUVVrc1MwRkJTeXhGUVVGRk8yZENRVU5XTEZsQlFWa3NRMEZCUXl4aFFVRmhPMjlDUVVONlFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnRRaXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMkZCUXpsRU8xbEJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMR1ZCUVdVN2IwSkJRM1JDTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmxDUVVOVU8yRkJRMFFzUTBGQlF6dFpRVU5HTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGFrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0WlFVTTFReXhOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xGRkJRVkVzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZETDBJc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF6dHZRa0ZEWWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEUkNRVUUwUWl4RFFVRkRPMjlDUVVOd1JDeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdiMEpCUTFvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenR2UWtGRGJFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUk8zbENRVU16UWl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRE8zbENRVU51UWl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRk8zbENRVU5zUWl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN2IwSkJRMmhETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2QwSkJRM1JDT3pSQ1FVTkRMRXRCUVVzc1JVRkJSU3hYUVVGWE96UkNRVU5zUWl4SFFVRkhMRVZCUVVVc1NVRkJTVHQ1UWtGRFZEdHhRa0ZEUkN4RFFVRkRPMjlDUVVOR0xFMUJRVTA3YVVKQlEwNDdZVUZEUkR0WlFVTkVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHTkJRV01zUTBGQlF6dFpRVU4wUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlEzSkZMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMWxCUXpkRExFMUJRVTA3VTBGRFRqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTFJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6bERPMHRCUTBRN1NVRkZSQ3hKUVVGSkxFTkJRVU1zU1VGQlNUdFJRVUZGTEU5QlFVOHNXVUZCV1N4RFFVRkRMR05CUVdNc1EwRkJRenRKUVVVNVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUld4RkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImtleXMiLCJvbiIsImFzeW5jIiwidGltZSIsInNtYWxsSW1hZ2UiLCJjb3ZlciIsImJ1dHRvbnMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwiaHJlZiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJzcGxpdCIsImRldGFpbHMiLCJkaWZmaWN1bHR5SW5mbyIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJtYXRjaCIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsImZpcnN0Q2hpbGQiLCJzdGF0ZSIsImxhYmVsIiwidXJsIiwicmVwbGFjZSIsInBhcmVudEVsZW1lbnQiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;