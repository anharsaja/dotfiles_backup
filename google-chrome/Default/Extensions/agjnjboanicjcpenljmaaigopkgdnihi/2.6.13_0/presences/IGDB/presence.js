var __webpack_exports__={};const presence=new Presence({clientId:"924944781703020554"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/I/IGDB/assets/logo.png",startTimestamp:browsingTimestamp},t=document.location.pathname;"/discover"===t?e.details="Discovering games":t.startsWith("/games")?t.includes("coming_soon")?e.details="Viewing future games":t.includes("recently_released")?e.details="Viewing recently released games":t.includes("new")?e.details="Adding a new game":(delete e.largeImageKey,e.details=`Viewing: ${document.title}`,e.state=document.querySelector("#content-page > div.loaded > div > div.gamepage-header-info > div.gamepage-summary > div.gamepage-title-container > div > a > h3").textContent,e.largeImageKey=document.querySelector("#content-page > div.loaded > div > div.gamepage-header-info > div.gamepage-cover > img").src,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/I/IGDB/assets/logo.png",e.smallImageText="IGDB"):t.startsWith("/genres")?"/genres"===t?e.details="Browsing all genres":(e.details="Browsing a genre",e.state=document.title.slice(0,-5)):t.startsWith("/platforms")?"/platforms"===t?e.details="Browsing all platforms":(delete e.largeImageKey,e.details="Viewing a platform",e.state=document.title,e.largeImageKey=document.querySelector("#content-page > div > div > div.row > div.col-sm-4 > img").src,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/I/IGDB/assets/logo.png",e.smallImageText="IGDB"):t.startsWith("/top-100")?(e.details="Viewing Top 100",e.state=document.title):t.startsWith("/reviews")?e.details="Finding game reviews":t.startsWith("/themes")?"/themes"===t?e.details="Browsing all themes":(e.details="Browsing a theme",e.state=document.title.slice(0,-5)):t.startsWith("/collections")?"/collections"===t?e.details="Browsing all collections":(e.details="Browsing a collection",e.state=document.title):t.startsWith("/player_perspectives")?"/player_perspectives"===t?e.details="Browsing all player perspectives":(e.details="Browsing a player perspective's games",e.state=document.title.slice(0,-5)):t.startsWith("/franchises")?"/franchises"===t?e.details="Browsing all franchises":(e.details="Browsing a franchise",e.state=document.title):t.startsWith("/categories")?"/categories"===t?e.details="Browsing all categories":(e.details="Browsing a category",e.state=document.title.slice(0,-5)):t.startsWith("/companies")&&("/companies"===t?e.details="Browsing all companies":(delete e.largeImageKey,e.details="Viewing a company",e.state=document.title,e.largeImageKey=document.querySelector("#content-page > div > div > div:nth-child(3) > div.row.mar-md-bottom > div.col-sm-4 > img").src,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/I/IGDB/assets/logo.png",e.smallImageText="IGDB")),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWMsS0FDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSw0REFDZkMsZUFBZ0JSLG1CQUNqQlMsRUFBT0MsU0FBU0MsU0FBU0MsU0FDZixjQUFUSCxFQUNBSCxFQUFhTyxRQUFVLG9CQUNsQkosRUFBS0ssV0FBVyxVQUNqQkwsRUFBS00sU0FBUyxlQUNkVCxFQUFhTyxRQUFVLHVCQUNsQkosRUFBS00sU0FBUyxxQkFDbkJULEVBQWFPLFFBQVUsa0NBQ2xCSixFQUFLTSxTQUFTLE9BQ25CVCxFQUFhTyxRQUFVLDRCQUVoQlAsRUFBYUMsY0FDcEJELEVBQWFPLFFBQVUsWUFBWUgsU0FBU00sUUFDNUNWLEVBQWFXLE1BQVFQLFNBQVNRLGNBQWMsb0lBQW9JQyxZQUNoTGIsRUFBYUMsY0FBZ0JHLFNBQVNRLGNBQWMsMEZBQTBGRSxJQUM5SWQsRUFBYWUsY0FBZ0IsNERBQzdCZixFQUFhZ0IsZUFBaUIsUUFHN0JiLEVBQUtLLFdBQVcsV0FDUixZQUFUTCxFQUNBSCxFQUFhTyxRQUFVLHVCQUV2QlAsRUFBYU8sUUFBVSxtQkFDdkJQLEVBQWFXLE1BQVFQLFNBQVNNLE1BQU1PLE1BQU0sR0FBSSxJQUc3Q2QsRUFBS0ssV0FBVyxjQUNSLGVBQVRMLEVBQ0FILEVBQWFPLFFBQVUsaUNBRWhCUCxFQUFhQyxjQUNwQkQsRUFBYU8sUUFBVSxxQkFDdkJQLEVBQWFXLE1BQVFQLFNBQVNNLE1BQzlCVixFQUFhQyxjQUFnQkcsU0FBU1EsY0FBYyw0REFBNERFLElBQ2hIZCxFQUFhZSxjQUFnQiw0REFDN0JmLEVBQWFnQixlQUFpQixRQUc3QmIsRUFBS0ssV0FBVyxhQUNyQlIsRUFBYU8sUUFBVSxrQkFDdkJQLEVBQWFXLE1BQVFQLFNBQVNNLE9BRXpCUCxFQUFLSyxXQUFXLFlBQ3JCUixFQUFhTyxRQUFVLHVCQUNsQkosRUFBS0ssV0FBVyxXQUNSLFlBQVRMLEVBQ0FILEVBQWFPLFFBQVUsdUJBRXZCUCxFQUFhTyxRQUFVLG1CQUN2QlAsRUFBYVcsTUFBUVAsU0FBU00sTUFBTU8sTUFBTSxHQUFJLElBRzdDZCxFQUFLSyxXQUFXLGdCQUNSLGlCQUFUTCxFQUNBSCxFQUFhTyxRQUFVLDRCQUV2QlAsRUFBYU8sUUFBVSx3QkFDdkJQLEVBQWFXLE1BQVFQLFNBQVNNLE9BRzdCUCxFQUFLSyxXQUFXLHdCQUNSLHlCQUFUTCxFQUNBSCxFQUFhTyxRQUFVLG9DQUV2QlAsRUFBYU8sUUFBVSx3Q0FDdkJQLEVBQWFXLE1BQVFQLFNBQVNNLE1BQU1PLE1BQU0sR0FBSSxJQUc3Q2QsRUFBS0ssV0FBVyxlQUNSLGdCQUFUTCxFQUNBSCxFQUFhTyxRQUFVLDJCQUV2QlAsRUFBYU8sUUFBVSx1QkFDdkJQLEVBQWFXLE1BQVFQLFNBQVNNLE9BRzdCUCxFQUFLSyxXQUFXLGVBQ1IsZ0JBQVRMLEVBQ0FILEVBQWFPLFFBQVUsMkJBRXZCUCxFQUFhTyxRQUFVLHNCQUN2QlAsRUFBYVcsTUFBUVAsU0FBU00sTUFBTU8sTUFBTSxHQUFJLElBRzdDZCxFQUFLSyxXQUFXLGdCQUNSLGVBQVRMLEVBQ0FILEVBQWFPLFFBQVUsaUNBRWhCUCxFQUFhQyxjQUNwQkQsRUFBYU8sUUFBVSxvQkFDdkJQLEVBQWFXLE1BQVFQLFNBQVNNLE1BQzlCVixFQUFhQyxjQUFnQkcsU0FBU1EsY0FBYyw2RkFBNkZFLElBQ2pKZCxFQUFhZSxjQUFnQiw0REFDN0JmLEVBQWFnQixlQUFpQixTQUd0Q3pCLFNBQVMyQixZQUFZbEIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI5MjQ5NDQ3ODE3MDMwMjA1NTRcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9JL0lHREIvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBwYXRoID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKHBhdGggPT09IFwiL2Rpc2NvdmVyXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJEaXNjb3ZlcmluZyBnYW1lc1wiO1xuICAgIGVsc2UgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9nYW1lc1wiKSkge1xuICAgICAgICBpZiAocGF0aC5pbmNsdWRlcyhcImNvbWluZ19zb29uXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgZnV0dXJlIGdhbWVzXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoXCJyZWNlbnRseV9yZWxlYXNlZFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHJlY2VudGx5IHJlbGVhc2VkIGdhbWVzXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoXCJuZXdcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQWRkaW5nIGEgbmV3IGdhbWVcIjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nOiAke2RvY3VtZW50LnRpdGxlfWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtcGFnZSA+IGRpdi5sb2FkZWQgPiBkaXYgPiBkaXYuZ2FtZXBhZ2UtaGVhZGVyLWluZm8gPiBkaXYuZ2FtZXBhZ2Utc3VtbWFyeSA+IGRpdi5nYW1lcGFnZS10aXRsZS1jb250YWluZXIgPiBkaXYgPiBhID4gaDNcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC1wYWdlID4gZGl2LmxvYWRlZCA+IGRpdiA+IGRpdi5nYW1lcGFnZS1oZWFkZXItaW5mbyA+IGRpdi5nYW1lcGFnZS1jb3ZlciA+IGltZ1wiKS5zcmM7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9JL0lHREIvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIklHREJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvZ2VucmVzXCIpKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBcIi9nZW5yZXNcIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBhbGwgZ2VucmVzXCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGEgZ2VucmVcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlLnNsaWNlKDAsIC01KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvcGxhdGZvcm1zXCIpKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBcIi9wbGF0Zm9ybXNcIilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBhbGwgcGxhdGZvcm1zXCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBwbGF0Zm9ybVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC1wYWdlID4gZGl2ID4gZGl2ID4gZGl2LnJvdyA+IGRpdi5jb2wtc20tNCA+IGltZ1wiKS5zcmM7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9JL0lHREIvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIklHREJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvdG9wLTEwMFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBUb3AgMTAwXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCIvcmV2aWV3c1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZpbmRpbmcgZ2FtZSByZXZpZXdzXCI7XG4gICAgZWxzZSBpZiAocGF0aC5zdGFydHNXaXRoKFwiL3RoZW1lc1wiKSkge1xuICAgICAgICBpZiAocGF0aCA9PT0gXCIvdGhlbWVzXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgYWxsIHRoZW1lc1wiO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBhIHRoZW1lXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC50aXRsZS5zbGljZSgwLCAtNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aC5zdGFydHNXaXRoKFwiL2NvbGxlY3Rpb25zXCIpKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBcIi9jb2xsZWN0aW9uc1wiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGFsbCBjb2xsZWN0aW9uc1wiO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBhIGNvbGxlY3Rpb25cIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9wbGF5ZXJfcGVyc3BlY3RpdmVzXCIpKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBcIi9wbGF5ZXJfcGVyc3BlY3RpdmVzXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgYWxsIHBsYXllciBwZXJzcGVjdGl2ZXNcIjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgYSBwbGF5ZXIgcGVyc3BlY3RpdmUncyBnYW1lc1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUuc2xpY2UoMCwgLTUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9mcmFuY2hpc2VzXCIpKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBcIi9mcmFuY2hpc2VzXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgYWxsIGZyYW5jaGlzZXNcIjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgYSBmcmFuY2hpc2VcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9jYXRlZ29yaWVzXCIpKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBcIi9jYXRlZ29yaWVzXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgYWxsIGNhdGVnb3JpZXNcIjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgYSBjYXRlZ29yeVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUuc2xpY2UoMCwgLTUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9jb21wYW5pZXNcIikpIHtcbiAgICAgICAgaWYgKHBhdGggPT09IFwiL2NvbXBhbmllc1wiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGFsbCBjb21wYW5pZXNcIjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIGNvbXBhbnlcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtcGFnZSA+IGRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMykgPiBkaXYucm93Lm1hci1tZC1ib3R0b20gPiBkaXYuY29sLXNtLTQgPiBpbWdcIikuc3JjO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSS9JR0RCL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJJR0RCXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVUxdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnBETEdGQlFXRXNOa1JCUVdFN1VVRkRNVUlzWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eEZRVU5FTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU51UXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhYUVVGWE8xRkJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dFRRVU5vUlN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZEYmtNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTXZRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8yRkJRekZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0WlFVTXhReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsRFFVRnBReXhEUVVGRE8yRkJRM0pFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU03V1VGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzJGQlEzSkZPMWxCUTBvc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlEyeERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGQldTeFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1dVRkRjRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNeFF5eHJTVUZCYTBrc1EwRkRiRWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEWkN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEyeEVMSGRHUVVGM1JpeERRVU40Uml4RFFVRkRMRWRCUVVjc1EwRkJRenRaUVVOT0xGbEJRVmtzUTBGQlF5eGhRVUZoTERoRVFVRmpMRU5CUVVNN1dVRkRla01zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1UwRkRja003UzBGRFJEdFRRVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFJRVU4wUXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhUUVVGVE8xbEJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dGhRVU5vUlR0WlFVTktMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1dVRkRNVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVJEdExRVU5FTzFOQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTzFGQlEzcERMRWxCUVVrc1NVRkJTU3hMUVVGTExGbEJRVms3V1VGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzJGQlEzUkZPMWxCUTBvc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlEyeERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1dVRkROVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRM0JETEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGJFUXNNRVJCUVRCRUxFTkJRekZFTEVOQlFVTXNSMEZCUnl4RFFVRkRPMWxCUTA0c1dVRkJXU3hEUVVGRExHRkJRV0VzT0VSQlFXTXNRMEZCUXp0WlFVTjZReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVTnlRenRMUVVORU8xTkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xRkJRM1pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRPMHRCUTNCRE8xTkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOeVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzFOQlF6RkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0UlFVTndReXhKUVVGSkxFbEJRVWtzUzBGQlN5eFRRVUZUTzFsQlFVVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0aFFVTm9SVHRaUVVOS0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUkR0TFFVTkVPMU5CUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMUZCUXpORExFbEJRVWtzU1VGQlNTeExRVUZMTEdOQlFXTTdXVUZETVVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRoUVVNNVF6dFpRVU5LTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdXVUZETDBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUTNCRE8wdEJRMFE3VTBGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNSVUZCUlR0UlFVTnVSQ3hKUVVGSkxFbEJRVWtzUzBGQlN5eHpRa0ZCYzBJN1dVRkRiRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clEwRkJhME1zUTBGQlF6dGhRVU4wUkR0WlFVTktMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVOQlFYVkRMRU5CUVVNN1dVRkRMMFFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVJEdExRVU5FTzFOQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTzFGQlF6RkRMRWxCUVVrc1NVRkJTU3hMUVVGTExHRkJRV0U3V1VGRGVrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0aFFVTTNRenRaUVVOS0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03V1VGRE9VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEzQkRPMHRCUTBRN1UwRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1VVRkRNVU1zU1VGQlNTeEpRVUZKTEV0QlFVc3NZVUZCWVR0WlFVTjZRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE8yRkJRemRETzFsQlEwb3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0WlFVTTNReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJwRU8wdEJRMFE3VTBGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFVkJRVVU3VVVGRGVrTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1dVRkJXVHRaUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03WVVGRGRFVTdXVUZEU2l4UFFVRlBMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU03V1VGRGJFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0WlFVTXpReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRjRU1zV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOc1JDd3lSa0ZCTWtZc1EwRkRNMFlzUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZEVGl4WlFVRlpMRU5CUVVNc1lVRkJZU3c0UkVGQll5eERRVUZETzFsQlEzcERMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVFVGQlRTeERRVUZETzFOQlEzSkRPMHRCUTBRN1NVRkRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTNCRExFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGgiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkZXRhaWxzIiwic3RhcnRzV2l0aCIsImluY2x1ZGVzIiwidGl0bGUiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNyYyIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsInNsaWNlIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;