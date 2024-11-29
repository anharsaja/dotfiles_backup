var __webpack_exports__={};const presence=new Presence({clientId:"966643093308837938"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/TMDB/assets/logo.png",startTimestamp:browsingTimestamp},{pathname:t}=window.location;if(t.startsWith("/u")){const i=t.split("/")[2];t.includes("watchlist")?e.details=`Viewing ${i}'s watchlist`:t.includes("favorites")?e.details=`Viewing ${i}'s favorites`:t.includes("lists")?e.details=`Viewing ${i}'s lists`:t.includes("activity")?e.details=`Viewing ${i}'s activity`:t.includes("discussions")?e.details=`Reading ${i}'s discussions`:t.includes("ratings")?e.details=`Viewing ${i}'s ratings`:t.includes("recommendations")?e.details=`Viewing ${i}'s recommendations`:t.includes("events")?e.details=`Viewing ${i}'s events`:e.details=`Viewing ${i}'s profile`}else if(t.startsWith("/movie"))t.startsWith("/movie/now-playing")?e.details="Viewing now playing movies":t.startsWith("/movie/upcoming")?e.details="Viewing upcoming movies":t.startsWith("/movie/top-rated")?e.details="Viewing top rated movies":t.startsWith("/movie/new")?e.details="Adding a new movie":3===t.split("/").length?e.details=`Viewing ${document.querySelector(`h2 > [href="${t}"]`).textContent.trim()}`:t.includes("/reviews")?e.details=`Reading ${document.querySelector(`h2 > [href="${t.split("/").slice(0,3).join("/")}"]`).textContent.trim()}'s reviews`:t.includes("/discuss")?e.details=`Reading ${document.querySelector("h2").textContent.trim()}`:e.details="Viewing movies";else if(t.startsWith("/tv"))t.startsWith("/tv/airing-today")?e.details="Viewing airing today TV shows":t.startsWith("/tv/on-the-air")?e.details="Viewing airing TV shows":t.startsWith("/tv/top-rated")?e.details="Viewing top rated TV shows":t.startsWith("/tv/new")?e.details="Adding a new TV show":3===t.split("/").length?e.details=`Viewing ${document.querySelector(`h2 > [href="${t}"]`).textContent.trim()}`:t.includes("/reviews")?e.state=`Reading ${document.querySelector(`h2 > [href="${t.split("/").slice(0,3).join("/")}"]`).textContent.trim()}'s reviews`:t.includes("/discuss")?e.details=`Reading ${document.querySelector("h2").textContent.trim()}`:e.details="Viewing TV shows";else if(t.startsWith("/person"))3===t.split("/").length?e.details=`Viewing ${document.querySelector(`h2 > [href="${t}"]`).textContent.trim()}`:e.details="Viewing Popular People list";else if(t.startsWith("/discuss"))e.details="Viewing discussions";else if(t.startsWith("/leaderboard"))e.details="Viewing leaderboard";else if(t.startsWith("/talk"))e.details="Viewing TMDB support";else if(t.startsWith("/search")){const t=document.querySelector("input").value;t.length>0?e.details=`Searching for ${t}`:e.details="Searching"}else t.startsWith("/")&&(e.details="Browsing TMDB");presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxRQUFVLDRCQUN0QixHQUFJUCxFQUFTRyxXQUFXLFdBQVksQ0FDckMsTUFBTWEsRUFBUVAsU0FBU0MsY0FBYyxTQUFTTyxNQUMxQ0QsRUFBTVIsT0FBUyxFQUNmWCxFQUFhVSxRQUFVLGlCQUFpQlMsSUFFeENuQixFQUFhVSxRQUFVLFdBQy9CLE1BQ1NQLEVBQVNHLFdBQVcsT0FDekJOLEVBQWFVLFFBQVUsaUJBQzNCcEIsU0FBUytCLFlBQVlyQixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjk2NjY0MzA5MzMwODgzNzkzOFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVE1EQi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi91XCIpKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBwYXRobmFtZS5zcGxpdChcIi9cIilbMl07XG4gICAgICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIndhdGNobGlzdFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHt1c2VyfSdzIHdhdGNobGlzdGA7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiZmF2b3JpdGVzXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke3VzZXJ9J3MgZmF2b3JpdGVzYDtcbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJsaXN0c1wiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHt1c2VyfSdzIGxpc3RzYDtcbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJhY3Rpdml0eVwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHt1c2VyfSdzIGFjdGl2aXR5YDtcbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJkaXNjdXNzaW9uc1wiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmcgJHt1c2VyfSdzIGRpc2N1c3Npb25zYDtcbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJyYXRpbmdzXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke3VzZXJ9J3MgcmF0aW5nc2A7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwicmVjb21tZW5kYXRpb25zXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke3VzZXJ9J3MgcmVjb21tZW5kYXRpb25zYDtcbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJldmVudHNcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7dXNlcn0ncyBldmVudHNgO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7dXNlcn0ncyBwcm9maWxlYDtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9tb3ZpZVwiKSkge1xuICAgICAgICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9tb3ZpZS9ub3ctcGxheWluZ1wiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIG5vdyBwbGF5aW5nIG1vdmllc1wiO1xuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL21vdmllL3VwY29taW5nXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdXBjb21pbmcgbW92aWVzXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvbW92aWUvdG9wLXJhdGVkXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdG9wIHJhdGVkIG1vdmllc1wiO1xuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL21vdmllL25ld1wiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBZGRpbmcgYSBuZXcgbW92aWVcIjtcbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYGgyID4gW2hyZWY9XCIke3BhdGhuYW1lfVwiXWApXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3Jldmlld3NcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmcgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBoMiA+IFtocmVmPVwiJHtwYXRobmFtZS5zcGxpdChcIi9cIikuc2xpY2UoMCwgMykuam9pbihcIi9cIil9XCJdYClcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfSdzIHJldmlld3NgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2Rpc2N1c3NcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmcgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaDJcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgbW92aWVzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdHZcIikpIHtcbiAgICAgICAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdHYvYWlyaW5nLXRvZGF5XCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYWlyaW5nIHRvZGF5IFRWIHNob3dzXCI7XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdHYvb24tdGhlLWFpclwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFpcmluZyBUViBzaG93c1wiO1xuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3R2L3RvcC1yYXRlZFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRvcCByYXRlZCBUViBzaG93c1wiO1xuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3R2L25ld1wiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBZGRpbmcgYSBuZXcgVFYgc2hvd1wiO1xuICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgaDIgPiBbaHJlZj1cIiR7cGF0aG5hbWV9XCJdYClcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvcmV2aWV3c1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFJlYWRpbmcgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBoMiA+IFtocmVmPVwiJHtwYXRobmFtZS5zcGxpdChcIi9cIikuc2xpY2UoMCwgMykuam9pbihcIi9cIil9XCJdYClcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfSdzIHJldmlld3NgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2Rpc2N1c3NcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmcgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaDJcIilcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgVFYgc2hvd3NcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wZXJzb25cIikpIHtcbiAgICAgICAgaWYgKHBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBoMiA+IFtocmVmPVwiJHtwYXRobmFtZX1cIl1gKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBQb3B1bGFyIFBlb3BsZSBsaXN0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZGlzY3Vzc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgZGlzY3Vzc2lvbnNcIjtcbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2xlYWRlcmJvYXJkXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBsZWFkZXJib2FyZFwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdGFsa1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgVE1EQiBzdXBwb3J0XCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9zZWFyY2hcIikpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWU7XG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU2VhcmNoaW5nIGZvciAke3F1ZXJ5fWA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBUTURCXCI7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJZU3hKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU4wUXl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMREpFUVVFeVJEdFJRVU0xUkN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRVZCUTBRc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUldoRExFbEJRVWtzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRSUVVNNVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlhCRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRha01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVRlhMRWxCUVVrc1kwRkJZeXhEUVVGRE8yRkJRMnBFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGRFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExFbEJRVWtzWTBGQll5eERRVUZETzJGQlEycEVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEYkVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFhRVUZYTEVsQlFVa3NWVUZCVlN4RFFVRkRPMkZCUXpkRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNN1dVRkRja01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVRlhMRWxCUVVrc1lVRkJZU3hEUVVGRE8yRkJRMmhFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU03V1VGRGVFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExFbEJRVWtzWjBKQlFXZENMRU5CUVVNN1lVRkRia1FzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVOd1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmRCUVZjc1NVRkJTU3haUVVGWkxFTkJRVU03WVVGREwwTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHbENRVUZwUWl4RFFVRkRPMWxCUXpWRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4SlFVRkpMRzlDUVVGdlFpeERRVUZETzJGQlEzWkVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZEYmtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFhRVUZYTEVsQlFVa3NWMEZCVnl4RFFVRkRPenRaUVVNNVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmRCUVZjc1NVRkJTU3haUVVGWkxFTkJRVU03UzBGRGVFUTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdVVUZEZWtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEc5Q1FVRnZRaXhEUVVGRE8xbEJRelZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc05FSkJRVFJDTEVOQlFVTTdZVUZEYUVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEdsQ1FVRnBRaXhEUVVGRE8xbEJRemxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdZVUZETjBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEd0Q1FVRnJRaXhEUVVGRE8xbEJReTlETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTTdZVUZET1VNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXp0WlFVTjZReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE8yRkJRM2hETEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4UlFVRlJPMmxDUVVONFF5eGhRVUZoTEVOQlFVTXNaVUZCWlN4UlFVRlJMRWxCUVVrc1EwRkJRenRwUWtGRE1VTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU03VTBGRGRrSTdZVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdXVUZEZWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFhRVUZYTEZGQlFWRTdhVUpCUTNoRExHRkJRV0VzUTBGRFlpeGxRVUZsTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZETlVRN2FVSkJRMEVzVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4WlFVRlpMRU5CUVVNN1UwRkRha003WVVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3V1VGRGVrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExGRkJRVkU3YVVKQlEzaERMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU03YVVKQlEyNUNMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETzFOQlEzWkNPenRaUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03UzBGREwwTTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdVVUZEZEVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEd0Q1FVRnJRaXhEUVVGRE8xbEJRekZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc0swSkJRU3RDTEVOQlFVTTdZVUZEYmtRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEdkQ1FVRm5RaXhEUVVGRE8xbEJRemRETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdZVUZETjBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFXVXNRMEZCUXp0WlFVTTFReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERSQ1FVRTBRaXhEUVVGRE8yRkJRMmhFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRGRFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0aFFVTXhReXhKUVVGSkxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU14UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzVVVGQlVUdHBRa0ZEZUVNc1lVRkJZU3hEUVVGRExHVkJRV1VzVVVGQlVTeEpRVUZKTEVOQlFVTTdhVUpCUXpGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRPMU5CUTNaQ08yRkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRM3BETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1YwRkJWeXhSUVVGUk8ybENRVU4wUXl4aFFVRmhMRU5CUTJJc1pVRkJaU3hSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRelZFTzJsQ1FVTkJMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzV1VGQldTeERRVUZETzFOQlEycERPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMWxCUTNwRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4UlFVRlJPMmxDUVVONFF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmxDUVVOdVFpeFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJRenRUUVVOMlFqczdXVUZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMHRCUTJwRU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xRkJRekZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNKRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4UlFVRlJPMmxDUVVONFF5eGhRVUZoTEVOQlFVTXNaVUZCWlN4UlFVRlJMRWxCUVVrc1EwRkJRenRwUWtGRE1VTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU03VTBGRGRrSTdPMWxCUVUwc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzJRa0ZCTmtJc1EwRkJRenRMUVVNMVJEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGVrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0VFFVTjZReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUXpORExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03VTBGRGVrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF6dFJRVU53UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMU5CUXpGRExFbEJRVWtzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRSUVVONFF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGdFFpeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRkRVVzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNN1dVRkJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhMUVVGTExFVkJRVVVzUTBGQlF6czdXVUZEYWtVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFhRVUZYTEVOQlFVTTdTMEZEZUVNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdTVUZGTlVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInBhdGhuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJzdGFydHNXaXRoIiwidXNlciIsInNwbGl0IiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ0cmltIiwic2xpY2UiLCJqb2luIiwic3RhdGUiLCJxdWVyeSIsInZhbHVlIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;