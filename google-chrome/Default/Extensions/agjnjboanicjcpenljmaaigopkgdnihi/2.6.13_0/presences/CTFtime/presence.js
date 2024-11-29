var Settings,__webpack_exports__={};!function(e){e.TIMESTAMP="timestamp",e.BUTTONS="buttons",e.COVERS="images"}(Settings||(Settings={}));const{href,hostname}=document.location,presence=new Presence({clientId:"1253040451624370300"}),imgElements=document.querySelector(".span2 img")?.src??"https://cdn.rcd.gg/PreMiD/websites/C/CTFtime/assets/logo.png",startTimestamp=Math.floor(Date.now()/1e3),router=({path:e})=>[{path:/^\/$/,details:()=>"On Homepage",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing"},{path:/^\/ctfs$/,details:()=>"Looking for a CTF",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing"},{path:/^\/event\/list\/.*upcoming.*$/,details:()=>"Browsing upcoming CTFs",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing"},{path:/^\/event\/list\/.*now.*$/,details:()=>"Browsing running CTFs",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing"},{path:/^\/event\/list\/.*archive.*$/,details:()=>"Browsing past CTFs",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing"},{path:/^\/tasks.*$/,details:()=>"Searching write ups",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing"},{path:/^\/calendar.*$/,details:()=>"Checking Calendar",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing"},{path:/^\/profile.*$/,details:()=>"Editing their profile",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/writing.png"},{path:/^\/writeups$/,details:()=>"Looking for Writeups",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png"},{path:/^\/writeup.*$/,details:()=>"Reading a Challenge Writeup",state:()=>document.querySelector(".page-header h2").textContent,smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Learning",buttons:()=>[{label:"Read With Me",url:href.split("/").slice(0,5).join("/")}]},{path:/^\/task.*$/,details:()=>"Viewng a Challenge Info",state:()=>document.querySelector(".page-header h2").textContent,smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Learning",buttons:()=>[{label:"Challenge Link",url:href.split("/").slice(0,5).join("/")}]},{path:/^\/task.*\/writeup.*$/,details:()=>"Making a Challenge Write up",state:()=>document.querySelector(".page-header h2").textContent,smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Learning",buttons:()=>[{label:"Challenge Link",url:href.split("/").slice(0,5).join("/").replace(/\/writeup$/,"")}]},{path:/^\/event.*$/,details:()=>"Viewing a CTF",state:()=>document.querySelector(".page-header h2").textContent,largeImageKey:()=>imgElements,smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing",buttons:()=>[{label:"View CTF",url:href.split("/").slice(0,5).join("/")}]},{path:/^\/user.*$/,details:()=>"Viewing user profile",state:()=>document.querySelector(".page-header h2").textContent,largeImageKey:()=>imgElements,smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing",buttons:()=>[{label:"Profile",url:href.split("/").slice(0,5).join("/")}]},{path:/^\/team.*$/,state:()=>document.querySelector(".page-header h2").textContent,details:()=>"Viewing a Team",largeImageKey:()=>imgElements,smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing",buttons:()=>[{label:"View Team",url:href.split("/").slice(0,5).join("/")}]},{path:/^\/stats.*$/,state:()=>{const e=document.querySelectorAll("h3");return e.length>1?`Region: ${e[0].textContent}`:"Global Ranking"},details:()=>"Viewing Teams Ranking",smallImageKey:()=>"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:()=>"Browsing",buttons:()=>[{label:"View Ranks",url:href.split("/").slice(0,5).join("/")}]},{path:/^\/ctfprofile.*$/,details:()=>"Organizing CTF"},{path:/^\/+.*$/,details:()=>href.split("/")[3].toUpperCase().split("-").join(" ")}].find((t=>t.path.test(e)));presence.on("UpdateData",(async()=>{const[e,t,a]=await Promise.all([presence.getSetting(Settings.TIMESTAMP),presence.getSetting(Settings.BUTTONS),presence.getSetting(Settings.COVERS)]),s={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CTFtime/assets/logo.png"};e&&(s.startTimestamp=startTimestamp);const n=router({presenceData:s,path:href.replace(`https://${hostname}`,"")});if(!n)return presence.setActivity(s);n.state&&(s.state=n.state()),n.details&&(s.details=n.details()),t&&n.buttons&&(s.buttons=n.buttons()),n.largeImageKey&&a&&(s.largeImageKey=n.largeImageKey()),n.smallImageKey&&(s.smallImageKey=n.smallImageKey()),n.smallImageText&&(s.smallImageText=n.smallImageText()),e&&n.endTimestamp&&(s.endTimestamp=n.endTimestamp()),presence.setActivity(s)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0VBRWZVLElBQ0FTLEVBQWF2QyxlQUFpQkEsZ0JBQ2xDLE1BQU0wQixFQUFRckIsT0FBTyxDQUNqQmtDLGVBQ0FqQyxLQUFNUyxLQUFLSSxRQUFRLFdBQVdxQixXQUFZLE1BRTlDLElBQUtkLEVBQ0QsT0FBT2hDLFNBQVMrQyxZQUFZRixHQUM1QmIsRUFBTWhCLFFBQ042QixFQUFhN0IsTUFBUWdCLEVBQU1oQixTQUMzQmdCLEVBQU1uQixVQUNOZ0MsRUFBYWhDLFFBQVVtQixFQUFNbkIsV0FDN0J3QixHQUFlTCxFQUFNZCxVQUNyQjJCLEVBQWEzQixRQUFVYyxFQUFNZCxXQUM3QmMsRUFBTU4sZUFBaUJZLElBQ3ZCTyxFQUFhbkIsY0FBZ0JNLEVBQU1OLGlCQUNuQ00sRUFBTWxCLGdCQUNOK0IsRUFBYS9CLGNBQWdCa0IsRUFBTWxCLGlCQUNuQ2tCLEVBQU1qQixpQkFDTjhCLEVBQWE5QixlQUFpQmlCLEVBQU1qQixrQkFDcENxQixHQUFpQkosRUFBTWdCLGVBQ3ZCSCxFQUFhRyxhQUFlaEIsRUFBTWdCLGdCQUN0Q2hELFNBQVMrQyxZQUFZRixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFNldHRpbmdzO1xuKGZ1bmN0aW9uIChTZXR0aW5ncykge1xuICAgIFNldHRpbmdzW1wiVElNRVNUQU1QXCJdID0gXCJ0aW1lc3RhbXBcIjtcbiAgICBTZXR0aW5nc1tcIkJVVFRPTlNcIl0gPSBcImJ1dHRvbnNcIjtcbiAgICBTZXR0aW5nc1tcIkNPVkVSU1wiXSA9IFwiaW1hZ2VzXCI7XG59KShTZXR0aW5ncyB8fCAoU2V0dGluZ3MgPSB7fSkpO1xuY29uc3QgeyBocmVmLCBob3N0bmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMjUzMDQwNDUxNjI0MzcwMzAwXCIsXG59KSwgaW1nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwYW4yIGltZ1wiKT8uc3JjID8/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NURnRpbWUvYXNzZXRzL2xvZ28ucG5nXCIsIHN0YXJ0VGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIHJvdXRlciA9ICh7IHBhdGggfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogL15cXC8kLyxcbiAgICAgICAgICAgIGRldGFpbHM6ICgpID0+IFwiT24gSG9tZXBhZ2VcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6ICgpID0+IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiAoKSA9PiBcIkJyb3dzaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IC9eXFwvY3RmcyQvLFxuICAgICAgICAgICAgZGV0YWlsczogKCkgPT4gXCJMb29raW5nIGZvciBhIENURlwiLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogKCkgPT4gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6ICgpID0+IFwiQnJvd3NpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogL15cXC9ldmVudFxcL2xpc3RcXC8uKnVwY29taW5nLiokLyxcbiAgICAgICAgICAgIGRldGFpbHM6ICgpID0+IFwiQnJvd3NpbmcgdXBjb21pbmcgQ1RGc1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogKCkgPT4gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6ICgpID0+IFwiQnJvd3NpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogL15cXC9ldmVudFxcL2xpc3RcXC8uKm5vdy4qJC8sXG4gICAgICAgICAgICBkZXRhaWxzOiAoKSA9PiBcIkJyb3dzaW5nIHJ1bm5pbmcgQ1RGc1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogKCkgPT4gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6ICgpID0+IFwiQnJvd3NpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogL15cXC9ldmVudFxcL2xpc3RcXC8uKmFyY2hpdmUuKiQvLFxuICAgICAgICAgICAgZGV0YWlsczogKCkgPT4gXCJCcm93c2luZyBwYXN0IENURnNcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6ICgpID0+IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiAoKSA9PiBcIkJyb3dzaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IC9eXFwvdGFza3MuKiQvLFxuICAgICAgICAgICAgZGV0YWlsczogKCkgPT4gXCJTZWFyY2hpbmcgd3JpdGUgdXBzXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlS2V5OiAoKSA9PiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlVGV4dDogKCkgPT4gXCJCcm93c2luZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcL2NhbGVuZGFyLiokLyxcbiAgICAgICAgICAgIGRldGFpbHM6ICgpID0+IFwiQ2hlY2tpbmcgQ2FsZW5kYXJcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6ICgpID0+IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiAoKSA9PiBcIkJyb3dzaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IC9eXFwvcHJvZmlsZS4qJC8sXG4gICAgICAgICAgICBkZXRhaWxzOiAoKSA9PiBcIkVkaXRpbmcgdGhlaXIgcHJvZmlsZVwiLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogKCkgPT4gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy93cml0aW5nLnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcL3dyaXRldXBzJC8sXG4gICAgICAgICAgICBkZXRhaWxzOiAoKSA9PiBcIkxvb2tpbmcgZm9yIFdyaXRldXBzXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlS2V5OiAoKSA9PiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IC9eXFwvd3JpdGV1cC4qJC8sXG4gICAgICAgICAgICBkZXRhaWxzOiAoKSA9PiBcIlJlYWRpbmcgYSBDaGFsbGVuZ2UgV3JpdGV1cFwiLFxuICAgICAgICAgICAgc3RhdGU6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1oZWFkZXIgaDJcIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBzbWFsbEltYWdlS2V5OiAoKSA9PiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlVGV4dDogKCkgPT4gXCJMZWFybmluZ1wiLFxuICAgICAgICAgICAgYnV0dG9uczogKCkgPT4gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVhZCBXaXRoIE1lXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZi5zcGxpdChcIi9cIikuc2xpY2UoMCwgNSkuam9pbihcIi9cIiksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IC9eXFwvdGFzay4qJC8sXG4gICAgICAgICAgICBkZXRhaWxzOiAoKSA9PiBcIlZpZXduZyBhIENoYWxsZW5nZSBJbmZvXCIsXG4gICAgICAgICAgICBzdGF0ZTogKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWhlYWRlciBoMlwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6ICgpID0+IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiAoKSA9PiBcIkxlYXJuaW5nXCIsXG4gICAgICAgICAgICBidXR0b25zOiAoKSA9PiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDaGFsbGVuZ2UgTGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDUpLmpvaW4oXCIvXCIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcL3Rhc2suKlxcL3dyaXRldXAuKiQvLFxuICAgICAgICAgICAgZGV0YWlsczogKCkgPT4gXCJNYWtpbmcgYSBDaGFsbGVuZ2UgV3JpdGUgdXBcIixcbiAgICAgICAgICAgIHN0YXRlOiAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtaGVhZGVyIGgyXCIpLnRleHRDb250ZW50LFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogKCkgPT4gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6ICgpID0+IFwiTGVhcm5pbmdcIixcbiAgICAgICAgICAgIGJ1dHRvbnM6ICgpID0+IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNoYWxsZW5nZSBMaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBocmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiL1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC93cml0ZXVwJC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KSgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcL2V2ZW50LiokLyxcbiAgICAgICAgICAgIGRldGFpbHM6ICgpID0+IFwiVmlld2luZyBhIENURlwiLFxuICAgICAgICAgICAgc3RhdGU6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1oZWFkZXIgaDJcIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiAoKSA9PiBpbWdFbGVtZW50cyxcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6ICgpID0+IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiAoKSA9PiBcIkJyb3dzaW5nXCIsXG4gICAgICAgICAgICBidXR0b25zOiAoKSA9PiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IENURlwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDUpLmpvaW4oXCIvXCIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcL3VzZXIuKiQvLFxuICAgICAgICAgICAgZGV0YWlsczogKCkgPT4gXCJWaWV3aW5nIHVzZXIgcHJvZmlsZVwiLFxuICAgICAgICAgICAgc3RhdGU6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1oZWFkZXIgaDJcIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiAoKSA9PiBpbWdFbGVtZW50cyxcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6ICgpID0+IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VUZXh0OiAoKSA9PiBcIkJyb3dzaW5nXCIsXG4gICAgICAgICAgICBidXR0b25zOiAoKSA9PiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZi5zcGxpdChcIi9cIikuc2xpY2UoMCwgNSkuam9pbihcIi9cIiksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IC9eXFwvdGVhbS4qJC8sXG4gICAgICAgICAgICBzdGF0ZTogKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWhlYWRlciBoMlwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIGRldGFpbHM6ICgpID0+IFwiVmlld2luZyBhIFRlYW1cIixcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6ICgpID0+IGltZ0VsZW1lbnRzLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogKCkgPT4gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6ICgpID0+IFwiQnJvd3NpbmdcIixcbiAgICAgICAgICAgIGJ1dHRvbnM6ICgpID0+IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgVGVhbVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDUpLmpvaW4oXCIvXCIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcL3N0YXRzLiokLyxcbiAgICAgICAgICAgIHN0YXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaDNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoaDNFbGVtZW50cy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFJlZ2lvbjogJHtoM0VsZW1lbnRzWzBdLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJHbG9iYWwgUmFua2luZ1wiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRldGFpbHM6ICgpID0+IFwiVmlld2luZyBUZWFtcyBSYW5raW5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlS2V5OiAoKSA9PiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlVGV4dDogKCkgPT4gXCJCcm93c2luZ1wiLFxuICAgICAgICAgICAgYnV0dG9uczogKCkgPT4gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBSYW5rc1wiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDUpLmpvaW4oXCIvXCIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcL2N0ZnByb2ZpbGUuKiQvLFxuICAgICAgICAgICAgZGV0YWlsczogKCkgPT4gXCJPcmdhbml6aW5nIENURlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAvXlxcLysuKiQvLFxuICAgICAgICAgICAgZGV0YWlsczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBocmVmLnNwbGl0KFwiL1wiKVszXS50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICByZXR1cm4gcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0aC50ZXN0KHBhdGgpKTtcbn07XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFtzaG93VGltZXN0YW1wLCBzaG93QnV0dG9ucywgc2hvd0NvdmVyc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoU2V0dGluZ3MuVElNRVNUQU1QKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhTZXR0aW5ncy5CVVRUT05TKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhTZXR0aW5ncy5DT1ZFUlMpLFxuICAgIF0pLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0NURnRpbWUvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfTtcbiAgICBpZiAoc2hvd1RpbWVzdGFtcClcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gc3RhcnRUaW1lc3RhbXA7XG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXIoe1xuICAgICAgICBwcmVzZW5jZURhdGEsXG4gICAgICAgIHBhdGg6IGhyZWYucmVwbGFjZShgaHR0cHM6Ly8ke2hvc3RuYW1lfWAsIFwiXCIpLFxuICAgIH0pO1xuICAgIGlmICghcm91dGUpXG4gICAgICAgIHJldHVybiBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGlmIChyb3V0ZS5zdGF0ZSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcm91dGUuc3RhdGUoKTtcbiAgICBpZiAocm91dGUuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSByb3V0ZS5kZXRhaWxzKCk7XG4gICAgaWYgKHNob3dCdXR0b25zICYmIHJvdXRlLmJ1dHRvbnMpXG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gcm91dGUuYnV0dG9ucygpO1xuICAgIGlmIChyb3V0ZS5sYXJnZUltYWdlS2V5ICYmIHNob3dDb3ZlcnMpXG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gcm91dGUubGFyZ2VJbWFnZUtleSgpO1xuICAgIGlmIChyb3V0ZS5zbWFsbEltYWdlS2V5KVxuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHJvdXRlLnNtYWxsSW1hZ2VLZXkoKTtcbiAgICBpZiAocm91dGUuc21hbGxJbWFnZVRleHQpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHJvdXRlLnNtYWxsSW1hZ2VUZXh0KCk7XG4gICAgaWYgKHNob3dUaW1lc3RhbXAgJiYgcm91dGUuZW5kVGltZXN0YW1wKVxuICAgICAgICBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wID0gcm91dGUuZW5kVGltZXN0YW1wKCk7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZaUVN4SlFVRkxMRkZCU1VvN1FVRktSQ3hYUVVGTExGRkJRVkU3U1VGRFdpeHRRMEZCZFVJc1EwRkJRVHRKUVVOMlFpd3JRa0ZCYlVJc1EwRkJRVHRKUVVOdVFpdzJRa0ZCYVVJc1EwRkJRVHRCUVVOc1FpeERRVUZETEVWQlNra3NVVUZCVVN4TFFVRlNMRkZCUVZFc1VVRkpXanRCUVVORUxFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGRE0wTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1VVRkJVU3hEUVVGRE8wbEJRM1pDTEZGQlFWRXNSVUZCUlN4eFFrRkJjVUk3UTBGREwwSXNRMEZCUXl4RlFVTkdMRmRCUVZjc1IwRkRWaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ0UWl4WlFVRlpMRU5CUVVNc1JVRkJSU3hIUVVGSExHdEZRVUZsTEVWQlF6TkZMR05CUVdNc1IwRkJWeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGRGRFUXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRV2RFTEVWQlFWTXNSVUZCUlR0SlFVTXhSU3hOUVVGTkxFMUJRVTBzUjBGQldUdFJRVU4yUWp0WlFVTkRMRWxCUVVrc1JVRkJSU3hOUVVGTk8xbEJRMW9zVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMR0ZCUVdFN1dVRkROVUlzWVVGQllTeEZRVUZGTEVkQlFVY3NSVUZCUlN4clJFRkJaVHRaUVVOdVF5eGpRVUZqTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1ZVRkJWVHRUUVVOb1F6dFJRVVZFTzFsQlEwTXNTVUZCU1N4RlFVRkZMRlZCUVZVN1dVRkRhRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRzFDUVVGdFFqdFpRVU5zUXl4aFFVRmhMRVZCUVVVc1IwRkJSeXhGUVVGRkxHdEVRVUZsTzFsQlEyNURMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTzFOQlEyaERPMUZCUTBRN1dVRkRReXhKUVVGSkxFVkJRVVVzSzBKQlFTdENPMWxCUTNKRExFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4M1FrRkJkMEk3V1VGRGRrTXNZVUZCWVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hyUkVGQlpUdFpRVU51UXl4alFVRmpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zVlVGQlZUdFRRVU5vUXp0UlFVTkVPMWxCUTBNc1NVRkJTU3hGUVVGRkxEQkNRVUV3UWp0WlFVTm9ReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNkVUpCUVhWQ08xbEJRM1JETEdGQlFXRXNSVUZCUlN4SFFVRkhMRVZCUVVVc2EwUkJRV1U3V1VGRGJrTXNZMEZCWXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExGVkJRVlU3VTBGRGFFTTdVVUZEUkR0WlFVTkRMRWxCUVVrc1JVRkJSU3c0UWtGQk9FSTdXVUZEY0VNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEc5Q1FVRnZRanRaUVVOdVF5eGhRVUZoTEVWQlFVVXNSMEZCUnl4RlFVRkZMR3RFUVVGbE8xbEJRMjVETEdOQlFXTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhWUVVGVk8xTkJRMmhETzFGQlEwUTdXVUZEUXl4SlFVRkpMRVZCUVVVc1lVRkJZVHRaUVVOdVFpeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc2NVSkJRWEZDTzFsQlEzQkRMR0ZCUVdFc1JVRkJSU3hIUVVGSExFVkJRVVVzYTBSQlFXVTdXVUZEYmtNc1kwRkJZeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEZWQlFWVTdVMEZEYUVNN1VVRkRSRHRaUVVORExFbEJRVWtzUlVGQlJTeG5Ra0ZCWjBJN1dVRkRkRUlzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRzFDUVVGdFFqdFpRVU5zUXl4aFFVRmhMRVZCUVVVc1IwRkJSeXhGUVVGRkxHdEVRVUZsTzFsQlEyNURMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTzFOQlEyaERPMUZCUTBRN1dVRkRReXhKUVVGSkxFVkJRVVVzWlVGQlpUdFpRVU55UWl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zZFVKQlFYVkNPMWxCUTNSRExHRkJRV0VzUlVGQlJTeEhRVUZITEVWQlFVVXNhMFJCUVdVN1UwRkRia003VVVGRFJEdFpRVU5ETEVsQlFVa3NSVUZCUlN4alFVRmpPMWxCUTNCQ0xFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4elFrRkJjMEk3V1VGRGNrTXNZVUZCWVN4RlFVRkZMRWRCUVVjc1JVRkJSU3hyUkVGQlpUdFRRVU51UXp0UlFVTkVPMWxCUTBNc1NVRkJTU3hGUVVGRkxHVkJRV1U3V1VGRGNrSXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExEWkNRVUUyUWp0WlFVTTFReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRmRCUVZjN1dVRkRiRVVzWVVGQllTeEZRVUZGTEVkQlFVY3NSVUZCUlN4clJFRkJaVHRaUVVOdVF5eGpRVUZqTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1ZVRkJWVHRaUVVOb1F5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMlE3YjBKQlEwTXNTMEZCU3l4RlFVRkZMR05CUVdNN2IwSkJRM0pDTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0cFFrRkRNVU03WVVGRFJEdFRRVU5FTzFGQlEwUTdXVUZEUXl4SlFVRkpMRVZCUVVVc1dVRkJXVHRaUVVOc1FpeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc2VVSkJRWGxDTzFsQlEzaERMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNWMEZCVnp0WlFVTnNSU3hoUVVGaExFVkJRVVVzUjBGQlJ5eEZRVUZGTEd0RVFVRmxPMWxCUTI1RExHTkJRV01zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4VlFVRlZPMWxCUTJoRExFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRaRHR2UWtGRFF5eExRVUZMTEVWQlFVVXNaMEpCUVdkQ08yOUNRVU4yUWl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN2FVSkJRekZETzJGQlEwUTdVMEZEUkR0UlFVTkVPMWxCUTBNc1NVRkJTU3hGUVVGRkxIVkNRVUYxUWp0WlFVTTNRaXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNOa0pCUVRaQ08xbEJRelZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zVjBGQlZ6dFpRVU5zUlN4aFFVRmhMRVZCUVVVc1IwRkJSeXhGUVVGRkxHdEVRVUZsTzFsQlEyNURMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTzFsQlEyaERMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEWkR0dlFrRkRReXhMUVVGTExFVkJRVVVzWjBKQlFXZENPMjlDUVVOMlFpeEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVN2QwSkJRMVlzVDBGQlR5eEpRVUZKT3paQ1FVTlVMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU03TmtKQlExWXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03TmtKQlExZ3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenMyUWtGRFZDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4RFFVRkRMRU5CUVVNc1JVRkJSVHRwUWtGRFNqdGhRVU5FTzFOQlEwUTdVVUZEUkR0WlFVTkRMRWxCUVVrc1JVRkJSU3hoUVVGaE8xbEJRMjVDTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhsUVVGbE8xbEJRemxDTEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zVjBGQlZ6dFpRVU5zUlN4aFFVRmhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zVjBGQlZ6dFpRVU5vUXl4aFFVRmhMRVZCUVVVc1IwRkJSeXhGUVVGRkxHdEVRVUZsTzFsQlEyNURMR05CUVdNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTzFsQlEyaERMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEWkR0dlFrRkRReXhMUVVGTExFVkJRVVVzVlVGQlZUdHZRa0ZEYWtJc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8ybENRVU14UXp0aFFVTkVPMU5CUTBRN1VVRkRSRHRaUVVORExFbEJRVWtzUlVGQlJTeFpRVUZaTzFsQlEyeENMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eHpRa0ZCYzBJN1dVRkRja01zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhYUVVGWE8xbEJRMnhGTEdGQlFXRXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhYUVVGWE8xbEJRMmhETEdGQlFXRXNSVUZCUlN4SFFVRkhMRVZCUVVVc2EwUkJRV1U3V1VGRGJrTXNZMEZCWXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExGVkJRVlU3V1VGRGFFTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU5rTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hUUVVGVE8yOUNRVU5vUWl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN2FVSkJRekZETzJGQlEwUTdVMEZEUkR0UlFVTkVPMWxCUTBNc1NVRkJTU3hGUVVGRkxGbEJRVms3V1VGRGJFSXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTzFsQlEyeEZMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJN1dVRkRMMElzWVVGQllTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRmRCUVZjN1dVRkRhRU1zWVVGQllTeEZRVUZGTEVkQlFVY3NSVUZCUlN4clJFRkJaVHRaUVVOdVF5eGpRVUZqTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1ZVRkJWVHRaUVVOb1F5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMlE3YjBKQlEwTXNTMEZCU3l4RlFVRkZMRmRCUVZjN2IwSkJRMnhDTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0cFFrRkRNVU03WVVGRFJEdFRRVU5FTzFGQlEwUTdXVUZEUXl4SlFVRkpMRVZCUVVVc1lVRkJZVHRaUVVOdVFpeExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZPMmRDUVVOWUxFMUJRVTBzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRia1FzU1VGQlNTeFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNN2IwSkJRM2hDTEU5QlFVOHNWMEZCVnl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdPMjlDUVVNeFF5eFBRVUZQTEdkQ1FVRm5RaXhEUVVGRE8xbEJRemxDTEVOQlFVTTdXVUZEUkN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zZFVKQlFYVkNPMWxCUTNSRExHRkJRV0VzUlVGQlJTeEhRVUZITEVWQlFVVXNhMFJCUVdVN1dVRkRia01zWTBGQll5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRlZCUVZVN1dVRkRhRU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOa08yOUNRVU5ETEV0QlFVc3NSVUZCUlN4WlFVRlpPMjlDUVVOdVFpeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdhVUpCUXpGRE8yRkJRMFE3VTBGRFJEdFJRVU5FTzFsQlEwTXNTVUZCU1N4RlFVRkZMR3RDUVVGclFqdFpRVU40UWl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zWjBKQlFXZENPMU5CUXk5Q08xRkJRMFE3V1VGRFF5eEpRVUZKTEVWQlFVVXNVMEZCVXp0WlFVTm1MRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVU3WjBKQlEySXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE9VUXNRMEZCUXp0VFFVTkVPMHRCUTBRc1EwRkJRenRKUVVWR0xFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGNFUXNRMEZCUXl4RFFVRkRPMEZCUlVnc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeERRVUZETEdGQlFXRXNSVUZCUlN4WFFVRlhMRVZCUVVVc1ZVRkJWU3hEUVVGRExFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUTJwRkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVOb1JDeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRE9VTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETzB0QlF6ZERMRU5CUVVNc1JVRkRSaXhaUVVGWkxFZEJRV2xDTzFGQlF6VkNMR0ZCUVdFc1owVkJRV0U3UzBGRE1VSXNRMEZCUXp0SlFVVklMRWxCUVVrc1lVRkJZVHRSUVVGRkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NZMEZCWXl4RFFVRkRPMGxCUldoRkxFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTndRaXhaUVVGWk8xRkJRMW9zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhSUVVGUkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTMEZETjBNc1EwRkJReXhEUVVGRE8wbEJSVWdzU1VGQlNTeERRVUZETEV0QlFVczdVVUZCUlN4UFFVRlBMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUZEZEVRc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN6dFJRVUZGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBsQlEzQkVMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVTg3VVVGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU14UkN4SlFVRkpMRmRCUVZjc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR6dFJRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBsQlEzcEZMRWxCUVVrc1MwRkJTeXhEUVVGRExHRkJRV0VzU1VGQlNTeFZRVUZWTzFGQlEzQkRMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzUzBGQlN5eERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMGxCUTNCRUxFbEJRVWtzUzBGQlN5eERRVUZETEdGQlFXRTdVVUZCUlN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0SlFVTTFSU3hKUVVGSkxFdEJRVXNzUTBGQlF5eGpRVUZqTzFGQlEzWkNMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzUzBGQlN5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMGxCUTNSRUxFbEJRVWtzWVVGQllTeEpRVUZKTEV0QlFVc3NRMEZCUXl4WlFVRlpPMUZCUTNSRExGbEJRVmtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wbEJSV3hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGNFTXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiaW1nRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwic3RhcnRUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwicm91dGVyIiwicGF0aCIsImRldGFpbHMiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJzdGF0ZSIsInRleHRDb250ZW50IiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaHJlZiIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwicmVwbGFjZSIsImxhcmdlSW1hZ2VLZXkiLCJoM0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwiZmluZCIsInJvdXRlIiwidGVzdCIsIm9uIiwiYXN5bmMiLCJzaG93VGltZXN0YW1wIiwic2hvd0J1dHRvbnMiLCJzaG93Q292ZXJzIiwiUHJvbWlzZSIsImFsbCIsImdldFNldHRpbmciLCJUSU1FU1RBTVAiLCJCVVRUT05TIiwiQ09WRVJTIiwicHJlc2VuY2VEYXRhIiwiaG9zdG5hbWUiLCJzZXRBY3Rpdml0eSIsImVuZFRpbWVzdGFtcCJdLCJzb3VyY2VSb290IjoiIn0=
undefined;