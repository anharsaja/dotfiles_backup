var __webpack_exports__={};const presence=new Presence({clientId:"1027249400738750625"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/The%20Weather%20Channel/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:a,hostname:t,href:s}=window.location,r=a.split("/").filter((e=>e)),i=document.querySelector("[class*='--locationName--']")?.textContent,c=document.querySelector("h1")?.textContent;function l(a,t){""===(a??"")?e.details=`Browsing ${t} stories`:a.includes("video")?(e.details=`Watching a ${t} video`,e.state=c,e.buttons=[{label:"Watch Video",url:s}]):a.includes("news")&&(e.details=`Reading a ${t} article`,e.state=c,e.buttons=[{label:"Read Article",url:s}])}if("weather.com"===t)switch(r[0]??""){case"":e.details="Browsing homepage";break;case"deals":l(r,"deal");break;case"forecast":switch(r[1]){case"air-quality":e.details="Viewing air quality forecast",e.state=i;break;case"allergy":e.details="Viewing allergy forecast",e.state=`${document.querySelector("h2").textContent} for ${i}`;break;case"cold-flu":e.details="Viewing cold & flu forecasts";break;default:l(r.slice(1),"forecast")}break;case"health":"cold-flu"===r[1]?l(r.slice(2),"cold & flu"):l(r.slice(1),"health");break;case"slideshows":case"photos":l(r.slice(1),"photo"),"news"===r[1]&&(e.largeImageKey=document.querySelector("[id*='int-image'] img").src);break;case"promos":l(r.slice(1),"promo");break;case"login":case"signup":e.details="Logging in";break;case"maps":e.details="Viewing a map",e.state=c,e.buttons=[{label:"View Map",url:s}];break;case"member":e.details="Managing account";break;case"news":l(r.slice(1),"news");break;case"safety":l(r.slice(1),"safety");break;case"science":l(r.slice(1),"science");break;case"sports-recreation":"fishing"===r[1]?l(r.slice(2),"fishing"):l(r.slice(1),"sports & recreation");break;case"storms":switch(r[1]){case"tornado":l(r.slice(2),"tornado");break;case"hurricane":l(r.slice(2),"hurricane")}break;case"subscribe":e.details="Subscribing";break;case"travel":l(r.slice(1),"travel");break;case"weather":switch(r[1]){case"today":e.details="Browsing today's weather forecast",e.state=i;break;case"hourbyhour":e.details="Browsing hourly weather forecast",e.state=i;break;case"tenday":e.details="Browsing 10-day weather forecast",e.state=i;break;case"weekend":e.details="Browsing weekend weather forecast",e.state=i;break;case"monthly":e.details="Browsing monthly weather forecast",e.state=i;break;case"radar":e.details="Viewing weather radar",e.state=i}break;default:e.details="Browsing",e.state=document.title.match(/^(.*?)( \| The Weather Channel)?$/)[1]}else"features.weather.com"===t&&(""===r[0]?(e.details="Browsing",e.state="All features and stories"):"category"===r[0]?(e.details="Browsing category",e.state=c.match(/: (.*)$/)[1]):(e.details="Reading an article",e.state=c,e.buttons=[{label:"Read Article",url:s}]));e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDRDFCLEVBQWFvQixRQUFVLGNBQ3ZCLE1BRUosSUFBSyxTQUNESCxFQUFvQlQsRUFBVWtCLE1BQU0sR0FBSSxVQUN4QyxNQUVKLElBQUssVUFDRCxPQUFRbEIsRUFBVSxJQUNkLElBQUssUUFDRFIsRUFBYW9CLFFBQVUsb0NBQ3ZCcEIsRUFBYXNCLE1BQVFWLEVBQ3JCLE1BRUosSUFBSyxhQUNEWixFQUFhb0IsUUFBVSxtQ0FDdkJwQixFQUFhc0IsTUFBUVYsRUFDckIsTUFFSixJQUFLLFNBQ0RaLEVBQWFvQixRQUFVLG1DQUN2QnBCLEVBQWFzQixNQUFRVixFQUNyQixNQUVKLElBQUssVUFDRFosRUFBYW9CLFFBQVUsb0NBQ3ZCcEIsRUFBYXNCLE1BQVFWLEVBQ3JCLE1BRUosSUFBSyxVQUNEWixFQUFhb0IsUUFBVSxvQ0FDdkJwQixFQUFhc0IsTUFBUVYsRUFDckIsTUFFSixJQUFLLFFBQ0RaLEVBQWFvQixRQUFVLHdCQUN2QnBCLEVBQWFzQixNQUFRVixFQUk3QixNQUVKLFFBQ0laLEVBQWFvQixRQUFVLFdBQ3ZCcEIsRUFBYXNCLE1BQVFULFNBQVNlLE1BQU1DLE1BQU0scUNBQXFDLE9BS3JFLHlCQUFiekIsSUFDZ0IsS0FBakJJLEVBQVUsSUFDVlIsRUFBYW9CLFFBQVUsV0FDdkJwQixFQUFhc0IsTUFBUSw0QkFFQyxhQUFqQmQsRUFBVSxJQUNmUixFQUFhb0IsUUFBVSxvQkFDdkJwQixFQUFhc0IsTUFBUU4sRUFBVWEsTUFBTSxXQUFXLEtBR2hEN0IsRUFBYW9CLFFBQVUscUJBQ3ZCcEIsRUFBYXNCLE1BQVFOLEVBQ3JCaEIsRUFBYXVCLFFBQVUsQ0FBQyxDQUFFQyxNQUFPLGVBQWdCQyxJQUFLcEIsTUFHMURMLEVBQWFvQixRQUNiOUIsU0FBU3dDLFlBQVk5QixHQUVyQlYsU0FBU3dDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiMTAyNzI0OTQwMDczODc1MDYyNVwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVGhlJTIwV2VhdGhlciUyMENoYW5uZWwvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IHBhdGhuYW1lLCBob3N0bmFtZSwgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uLCBwYXRoU3BsaXQgPSBwYXRobmFtZS5zcGxpdChcIi9cIikuZmlsdGVyKHggPT4geCksIGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3MqPSctLWxvY2F0aW9uTmFtZS0tJ11cIik/LnRleHRDb250ZW50LCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik/LnRleHRDb250ZW50O1xuICAgIGZ1bmN0aW9uIHNldE5ld3NQcmVzZW5jZURhdGEoc3ViUGF0aCwgdHlwZSkge1xuICAgICAgICBpZiAoKHN1YlBhdGggPz8gXCJcIikgPT09IFwiXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBCcm93c2luZyAke3R5cGV9IHN0b3JpZXNgO1xuICAgICAgICBlbHNlIGlmIChzdWJQYXRoLmluY2x1ZGVzKFwidmlkZW9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFdhdGNoaW5nIGEgJHt0eXBlfSB2aWRlb2A7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIldhdGNoIFZpZGVvXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdWJQYXRoLmluY2x1ZGVzKFwibmV3c1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgUmVhZGluZyBhICR7dHlwZX0gYXJ0aWNsZWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlJlYWQgQXJ0aWNsZVwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhvc3RuYW1lID09PSBcIndlYXRoZXIuY29tXCIpIHtcbiAgICAgICAgc3dpdGNoIChwYXRoU3BsaXRbMF0gPz8gXCJcIikge1xuICAgICAgICAgICAgY2FzZSBcIlwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGhvbWVwYWdlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiZGVhbHNcIjoge1xuICAgICAgICAgICAgICAgIHNldE5ld3NQcmVzZW5jZURhdGEocGF0aFNwbGl0LCBcImRlYWxcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiZm9yZWNhc3RcIjoge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aFNwbGl0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhaXItcXVhbGl0eVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhaXIgcXVhbGl0eSBmb3JlY2FzdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gbG9jYXRpb25OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFsbGVyZ3lcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYWxsZXJneSBmb3JlY2FzdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50fSBmb3IgJHtsb2NhdGlvbk5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xkLWZsdVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjb2xkICYgZmx1IGZvcmVjYXN0c1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3c1ByZXNlbmNlRGF0YShwYXRoU3BsaXQuc2xpY2UoMSksIFwiZm9yZWNhc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiaGVhbHRoXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aFNwbGl0WzFdID09PSBcImNvbGQtZmx1XCIpXG4gICAgICAgICAgICAgICAgICAgIHNldE5ld3NQcmVzZW5jZURhdGEocGF0aFNwbGl0LnNsaWNlKDIpLCBcImNvbGQgJiBmbHVcIik7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZXROZXdzUHJlc2VuY2VEYXRhKHBhdGhTcGxpdC5zbGljZSgxKSwgXCJoZWFsdGhcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwic2xpZGVzaG93c1wiOlxuICAgICAgICAgICAgY2FzZSBcInBob3Rvc1wiOiB7XG4gICAgICAgICAgICAgICAgc2V0TmV3c1ByZXNlbmNlRGF0YShwYXRoU3BsaXQuc2xpY2UoMSksIFwicGhvdG9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhTcGxpdFsxXSA9PT0gXCJuZXdzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkKj0naW50LWltYWdlJ10gaW1nXCIpLnNyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicHJvbW9zXCI6IHtcbiAgICAgICAgICAgICAgICBzZXROZXdzUHJlc2VuY2VEYXRhKHBhdGhTcGxpdC5zbGljZSgxKSwgXCJwcm9tb1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgY2FzZSBcInNpZ251cFwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvZ2dpbmcgaW5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJtYXBzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIG1hcFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhZ2VUaXRsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgTWFwXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJtZW1iZXJcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJNYW5hZ2luZyBhY2NvdW50XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwibmV3c1wiOiB7XG4gICAgICAgICAgICAgICAgc2V0TmV3c1ByZXNlbmNlRGF0YShwYXRoU3BsaXQuc2xpY2UoMSksIFwibmV3c1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJzYWZldHlcIjoge1xuICAgICAgICAgICAgICAgIHNldE5ld3NQcmVzZW5jZURhdGEocGF0aFNwbGl0LnNsaWNlKDEpLCBcInNhZmV0eVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJzY2llbmNlXCI6IHtcbiAgICAgICAgICAgICAgICBzZXROZXdzUHJlc2VuY2VEYXRhKHBhdGhTcGxpdC5zbGljZSgxKSwgXCJzY2llbmNlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInNwb3J0cy1yZWNyZWF0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aFNwbGl0WzFdID09PSBcImZpc2hpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV3c1ByZXNlbmNlRGF0YShwYXRoU3BsaXQuc2xpY2UoMiksIFwiZmlzaGluZ1wiKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNldE5ld3NQcmVzZW5jZURhdGEocGF0aFNwbGl0LnNsaWNlKDEpLCBcInNwb3J0cyAmIHJlY3JlYXRpb25cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwic3Rvcm1zXCI6IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGhTcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidG9ybmFkb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdzUHJlc2VuY2VEYXRhKHBhdGhTcGxpdC5zbGljZSgyKSwgXCJ0b3JuYWRvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImh1cnJpY2FuZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdzUHJlc2VuY2VEYXRhKHBhdGhTcGxpdC5zbGljZSgyKSwgXCJodXJyaWNhbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJzdWJzY3JpYmVcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTdWJzY3JpYmluZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInRyYXZlbFwiOiB7XG4gICAgICAgICAgICAgICAgc2V0TmV3c1ByZXNlbmNlRGF0YShwYXRoU3BsaXQuc2xpY2UoMSksIFwidHJhdmVsXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIndlYXRoZXJcIjoge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aFNwbGl0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b2RheVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdG9kYXkncyB3ZWF0aGVyIGZvcmVjYXN0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBsb2NhdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaG91cmJ5aG91clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgaG91cmx5IHdlYXRoZXIgZm9yZWNhc3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGxvY2F0aW9uTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZW5kYXlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIDEwLWRheSB3ZWF0aGVyIGZvcmVjYXN0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBsb2NhdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2Vla2VuZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3Npbmcgd2Vla2VuZCB3ZWF0aGVyIGZvcmVjYXN0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBsb2NhdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibW9udGhseVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgbW9udGhseSB3ZWF0aGVyIGZvcmVjYXN0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBsb2NhdGlvbk5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmFkYXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgd2VhdGhlciByYWRhclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gbG9jYXRpb25OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUubWF0Y2goL14oLio/KSggXFx8IFRoZSBXZWF0aGVyIENoYW5uZWwpPyQvKVsxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChob3N0bmFtZSA9PT0gXCJmZWF0dXJlcy53ZWF0aGVyLmNvbVwiKSB7XG4gICAgICAgIGlmIChwYXRoU3BsaXRbMF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJBbGwgZmVhdHVyZXMgYW5kIHN0b3JpZXNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXRoU3BsaXRbMF0gPT09IFwiY2F0ZWdvcnlcIikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGNhdGVnb3J5XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBwYWdlVGl0bGUubWF0Y2goLzogKC4qKSQvKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGFuIGFydGljbGVcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhZ2VUaXRsZTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiUmVhZCBBcnRpY2xlXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1lVRkJZU3hGUVVOYUxEaEZRVUU0UlR0UlFVTXZSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFVkJRMFFzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlF6bERMRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTTVReXhaUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY0VNc05rSkJRVFpDTEVOQlF6ZENMRVZCUVVVc1YwRkJWeXhGUVVOa0xGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGZEJRVmNzUTBGQlF6dEpRVVYyUkN4VFFVRlRMRzFDUVVGdFFpeERRVUZETEU5QlFXbENMRVZCUVVVc1NVRkJXVHRSUVVNelJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRGVrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFbEJRVWtzVlVGQlZTeERRVUZETzJGQlF6bERMRWxCUVVrc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0WlFVTnVReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdOQlFXTXNTVUZCU1N4UlFVRlJMRU5CUVVNN1dVRkRiRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1dVRkRMMElzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxHRkJRV0VzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNM1JEdGhRVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU53UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzU1VGQlNTeFZRVUZWTEVOQlFVTTdXVUZEYmtRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdXVUZETDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTTVSRHRKUVVOR0xFTkJRVU03U1VGRlJDeEpRVUZKTEZGQlFWRXNTMEZCU3l4aFFVRmhMRVZCUVVVN1VVRkRMMElzVVVGQlVTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRek5DTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dG5Ra0ZETTBNc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRZaXh0UWtGQmJVSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03WjBKQlEzWkRMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUTJoQ0xGRkJRVkVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVOeVFpeExRVUZMTEdGQlFXRXNRMEZCUXl4RFFVRkRPM2RDUVVOdVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRGhDUVVFNFFpeERRVUZETzNkQ1FVTjBSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZsQlFWa3NRMEZCUXp0M1FrRkRiRU1zVFVGQlRUdHhRa0ZEVGp0dlFrRkRSQ3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzNkQ1FVTm1MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNN2QwSkJRMnhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVNNVFpeFJRVUZSTEZsQlFWa3NSVUZCUlN4RFFVRkRPM2RDUVVOMlFpeE5RVUZOTzNGQ1FVTk9PMjlDUVVORUxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTTdkMEpCUTJoQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NPRUpCUVRoQ0xFTkJRVU03ZDBKQlEzUkVMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN2QwSkJRMUlzYlVKQlFXMUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenR4UWtGRGNFUTdhVUpCUTBRN1owSkJRMFFzVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRFpDeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhWUVVGVk8yOUNRVU01UWl4dFFrRkJiVUlzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZET3p0dlFrRkRiRVFzYlVKQlFXMUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRGRrUXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhaUVVGWkxFTkJRVU03V1VGRGJFSXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRFpDeHRRa0ZCYlVJc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8yZENRVU5xUkN4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eE5RVUZOTEVWQlFVVTdiMEpCUXpWQ0xGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRiRVFzZFVKQlFYVkNMRU5CUTNaQ0xFTkJRVU1zUjBGQlJ5eERRVUZETzJsQ1FVTk9PMmRDUVVORUxFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRMlFzYlVKQlFXMUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRuUWtGRGFrUXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhQUVVGUExFTkJRVU03V1VGRFlpeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOa0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NXVUZCV1N4RFFVRkRPMmRDUVVOd1F5eE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRE8yZENRVU4yUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZETDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRNVVFzVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRFpDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzJkQ1FVTXhReXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVOYUxHMUNRVUZ0UWl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJRMmhFTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEyUXNiVUpCUVcxQ0xFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVRc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRaaXh0UWtGQmJVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVOdVJDeE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdaMEpCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNN2IwSkJRemRDTEcxQ1FVRnRRaXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03TzI5Q1FVTXZReXh0UWtGQmJVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03WjBKQlEzQkZMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTJRc1VVRkJVU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTNKQ0xFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdkMEpCUTJZc2JVSkJRVzFDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0M1FrRkRia1FzVFVGQlRUdHhRa0ZEVGp0dlFrRkRSQ3hMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETzNkQ1FVTnFRaXh0UWtGQmJVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPM2RDUVVOeVJDeE5RVUZOTzNGQ1FVTk9PMmxDUVVORU8yZENRVU5FTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU03WjBKQlEycENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzJkQ1FVTnlReXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOa0xHMUNRVUZ0UWl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRMnhFTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03WjBKQlEyWXNVVUZCVVN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlEzSkNMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03ZDBKQlEySXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UTBGQmJVTXNRMEZCUXp0M1FrRkRNMFFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRU5CUVVNN2QwSkJRMnhETEUxQlFVMDdjVUpCUTA0N2IwSkJRMFFzUzBGQlN5eFpRVUZaTEVOQlFVTXNRMEZCUXp0M1FrRkRiRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clEwRkJhME1zUTBGQlF6dDNRa0ZETVVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTTdkMEpCUTJ4RExFMUJRVTA3Y1VKQlEwNDdiMEpCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dDNRa0ZEWkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdERRVUZyUXl4RFFVRkRPM2RDUVVNeFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJRenQzUWtGRGJFTXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPM2RDUVVObUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVU5CUVcxRExFTkJRVU03ZDBKQlF6TkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzV1VGQldTeERRVUZETzNkQ1FVTnNReXhOUVVGTk8zRkNRVU5PTzI5Q1FVTkVMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03ZDBKQlEyWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UTBGQmJVTXNRMEZCUXp0M1FrRkRNMFFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRU5CUVVNN2QwSkJRMnhETEUxQlFVMDdjVUpCUTA0N2IwSkJRMFFzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXp0M1FrRkRZaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8zZENRVU12UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUTBGQlF6dDNRa0ZEYkVNc1RVRkJUVHR4UWtGRFRqdHBRa0ZEUkR0blFrRkRSQ3hOUVVGTk8yRkJRMDQ3V1VGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRVaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXp0blFrRkRiRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGRGVFTXNiVU5CUVcxRExFTkJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMHdzVFVGQlRUdGhRVU5PTzFOQlEwUTdTMEZEUkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hMUVVGTExITkNRVUZ6UWl4RlFVRkZPMUZCUXk5RExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSVHRaUVVONFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCUVZVc1EwRkJRenRaUVVOc1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMREJDUVVFd1FpeERRVUZETzFOQlEyaEVPMkZCUVUwc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMWxCUTNaRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03V1VGRE0wTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMjVFTzJGQlFVMDdXVUZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMWxCUXpWRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMWxCUXk5Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hqUVVGakxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRPVVE3UzBGRFJEdEpRVVZFTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPenRSUVVONFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkROMElzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImhvc3RuYW1lIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aFNwbGl0Iiwic3BsaXQiLCJmaWx0ZXIiLCJ4IiwibG9jYXRpb25OYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJwYWdlVGl0bGUiLCJzZXROZXdzUHJlc2VuY2VEYXRhIiwic3ViUGF0aCIsInR5cGUiLCJkZXRhaWxzIiwiaW5jbHVkZXMiLCJzdGF0ZSIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsInNsaWNlIiwic3JjIiwidGl0bGUiLCJtYXRjaCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;