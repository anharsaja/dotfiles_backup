var __webpack_exports__={};const presence=new Presence({clientId:"730897382937591848"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/F/FiveM/assets/logo.png",startTimestamp:browsingTimestamp},{href:t,hostname:s,pathname:a}=document.location,[r,c,i]=await Promise.all([presence.getSetting("privacy"),presence.getSetting("buttons"),presence.getSetting("covers")]);let l;if(r)return e.details="Browsing",void presence.setActivity(e);switch(s.replace("www.","")){case"fivem.net":"/"===a?e.details="Viewing home Page":a.includes("terms")&&(e.details="Reading terms",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png");break;case"docs.fivem.net":l=document.querySelector('[name="search"]'),l?.value?(e.details="Searchin for",e.state=l.value,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):a.startsWith("/docs/")&&(e.details="Reading documentation about",e.state=document.querySelector('[class="docContent"]')?.firstChild?.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.buttons=[{label:"Read Docs",url:t}]);break;case"forum.cfx.re":if(l=document.querySelector('[id="search-term"]'),l?.value)return e.details="Searchin for",e.state=l.value,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",void presence.setActivity(e);switch(a.split("/")[1]){case"":e.details="Viewing the forum home Page";break;case"categories":case"c":e.details="Viewing forum category",e.state=document.querySelector('[class="category-name"]')?.textContent,e.buttons=[{label:"View Forum Category",url:t}];break;case"tag":e.details="Viewing posts with tag",e.state=document.querySelector('[class="name"]')?.textContent,e.buttons=[{label:"View Posts",url:t}];break;case"t":e.details="Reading post",e.state=document.querySelector('[class="fancy-title"]')?.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.buttons=[{label:"Reading Post",url:t}];break;case"u":e.details="Viewing user",e.largeImageKey=`https://${s}/${document.querySelector('[class="user-profile-avatar"]')?.firstElementChild.getAttribute("src")}`,e.state=document.querySelector('[class="username"]').textContent.split("\n")[1].trim(),e.buttons=[{label:"View Profile",url:t}];break;case"latest":e.details="Exploring the latest posts";break;case"top":e.details="Exploring the top posts";break;case"badges":e.details="Exploring all badges";break;case"g":e.details="Exploring all groups"}break;case"servers.fivem.net":l=document.querySelector('[id="searchBox"]'),l?.value?(e.details="Searchin for",e.state=l.value,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):a.startsWith("/servers/detail/")?(e.largeImageKey=document.querySelector('[class="icon"]').firstElementChild.getAttribute("src"),e.details="Viewing server",e.state=document.querySelector('[class="title"]').textContent,e.buttons=[{label:"View Server",url:t}]):(e.details=`Exploring ${document.querySelector('[class="nav-item subnav-item active"]')?.textContent??"all servers"}`,e.state=`Sorted by ${document.querySelector('[class="sort-by active"]')?.textContent}`,e.buttons=[{label:"View All Server",url:t}])}i||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/F/FiveM/assets/logo.png"),c||delete e.buttons,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxvQkFDNUJOLEdBQVFPLE9BQ1JyQixFQUFhZSxRQUFVLGVBQ3ZCZixFQUFhc0IsTUFBUVIsRUFBT08sTUFDNUJyQixFQUFhbUIsY0FBZ0Isa0RBRXhCZCxFQUFTa0IsV0FBVyxxQkFDekJ2QixFQUFhQyxjQUFnQkssU0FDeEJjLGNBQWMsa0JBQ2RTLGtCQUFrQkMsYUFBYSxPQUNwQzlCLEVBQWFlLFFBQVUsaUJBQ3ZCZixFQUFhc0IsTUFDVGhCLFNBQVNjLGNBQWMsbUJBQW1CSyxZQUM5Q3pCLEVBQWFTLFFBQVUsQ0FDbkIsQ0FDSWlCLE1BQU8sY0FDUEMsSUFBS3hCLE1BS2JILEVBQWFlLFFBQVUsYUFBYVQsU0FBU2MsY0FBYywwQ0FDckRLLGFBQWUsZ0JBQ3JCekIsRUFBYXNCLE1BQVEsYUFBYWhCLFNBQVNjLGNBQWMsNkJBQTZCSyxjQUN0RnpCLEVBQWFTLFFBQVUsQ0FDbkIsQ0FDSWlCLE1BQU8sa0JBQ1BDLElBQUt4QixLQU9wQk8sSUFDRFYsRUFBYUMsY0FBZ0IsOERBQzVCUSxVQUNNVCxFQUFhUyxRQUNwQlQsRUFBYWUsUUFDYnpCLFNBQVMwQixZQUFZaEIsR0FFckJWLFNBQVMwQixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjczMDg5NzM4MjkzNzU5MTg0OFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0YvRml2ZU0vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCB7IGhyZWYsIGhvc3RuYW1lLCBwYXRobmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb24sIFtwcml2YWN5LCBidXR0b25zLCBjb3ZlcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwicHJpdmFjeVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJjb3ZlcnNcIiksXG4gICAgXSk7XG4gICAgbGV0IHNlYXJjaDtcbiAgICBpZiAocHJpdmFjeSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmdcIjtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGhvc3RuYW1lLnJlcGxhY2UoXCJ3d3cuXCIsIFwiXCIpKSB7XG4gICAgICAgIGNhc2UgXCJmaXZlbS5uZXRcIjoge1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBob21lIFBhZ2VcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwidGVybXNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0ZXJtc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImRvY3MuZml2ZW0ubmV0XCI6IHtcbiAgICAgICAgICAgIHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2VhcmNoXCJdJyk7XG4gICAgICAgICAgICBpZiAoc2VhcmNoPy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbiBmb3JcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzZWFyY2gudmFsdWU7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZG9jcy9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBkb2N1bWVudGF0aW9uIGFib3V0XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwiZG9jQ29udGVudFwiXScpPy5maXJzdENoaWxkPy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVhZCBEb2NzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJmb3J1bS5jZngucmVcIjoge1xuICAgICAgICAgICAgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkPVwic2VhcmNoLXRlcm1cIl0nKTtcbiAgICAgICAgICAgIGlmIChzZWFyY2g/LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluIGZvclwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNlYXJjaC52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChwYXRobmFtZS5zcGxpdChcIi9cIilbMV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlIGZvcnVtIGhvbWUgUGFnZVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImNhdGVnb3JpZXNcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiY1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGZvcnVtIGNhdGVnb3J5XCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cImNhdGVnb3J5LW5hbWVcIl0nKT8udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgRm9ydW0gQ2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInRhZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHBvc3RzIHdpdGggdGFnXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJuYW1lXCJdJyk/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFBvc3RzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgcG9zdFwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJmYW5jeS10aXRsZVwiXScpPy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWRpbmcgUG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwidVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHVzZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBgaHR0cHM6Ly8ke2hvc3RuYW1lfS8ke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW2NsYXNzPVwidXNlci1wcm9maWxlLWF2YXRhclwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZShcInNyY1wiKX1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cInVzZXJuYW1lXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIlxcblwiKVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJsYXRlc3RcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRXhwbG9yaW5nIHRoZSBsYXRlc3QgcG9zdHNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRXhwbG9yaW5nIHRoZSB0b3AgcG9zdHNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJiYWRnZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRXhwbG9yaW5nIGFsbCBiYWRnZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJnXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkV4cGxvcmluZyBhbGwgZ3JvdXBzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJzZXJ2ZXJzLmZpdmVtLm5ldFwiOiB7XG4gICAgICAgICAgICBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJzZWFyY2hCb3hcIl0nKTtcbiAgICAgICAgICAgIGlmIChzZWFyY2g/LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluIGZvclwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNlYXJjaC52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9zZXJ2ZXJzL2RldGFpbC9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJpY29uXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBzZXJ2ZXJcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJ0aXRsZVwiXScpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IFNlcnZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBFeHBsb3JpbmcgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJuYXYtaXRlbSBzdWJuYXYtaXRlbSBhY3RpdmVcIl0nKVxuICAgICAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50ID8/IFwiYWxsIHNlcnZlcnNcIn1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBTb3J0ZWQgYnkgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3M9XCJzb3J0LWJ5IGFjdGl2ZVwiXScpPy50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IEFsbCBTZXJ2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjb3ZlcnMpXG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0YvRml2ZU0vYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgaWYgKCFidXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVUxdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN3NFJFRkJZVHRSUVVNeFFpeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wdEJRMnBETEVWQlEwUXNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUTJoRUxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhOUVVGTkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZET1VNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFRRVUZUTEVOQlFVTTdVVUZEZGtNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFRRVUZUTEVOQlFVTTdVVUZEZGtNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFJRVUZSTEVOQlFVTTdTMEZEZEVNc1EwRkJReXhEUVVGRE8wbEJSVW9zU1VGQlNTeE5RVUYzUWl4RFFVRkRPMGxCUlRkQ0xFbEJRVWtzVDBGQlR5eEZRVUZGTzFGQlExb3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRGJFTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU51UXl4UFFVRlBPMHRCUTFBN1NVRkRSQ3hSUVVGUkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRk8xRkJRM0pETEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRha0lzU1VGQlNTeFJRVUZSTEV0QlFVc3NSMEZCUnp0blFrRkJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8ybENRVU0xUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdaMEpCUTNCRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRPMmRDUVVOMlF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6dGhRVU0xUXp0WlFVTkVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRaUVVOMFFpeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMWxCUTI1RUxFbEJRVWtzVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlR0blFrRkRiRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRU5CUVVNN1owSkJRM1JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dG5Ra0ZEYkVNc1dVRkJXU3hEUVVGRExHRkJRV0VzYlVSQlFXZENMRU5CUVVNN1lVRkRNME03YVVKQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTjZReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERaQ1FVRTJRaXhEUVVGRE8yZENRVU55UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6RkRMSE5DUVVGelFpeERRVU4wUWl4RlFVRkZMRlZCUVZVc1JVRkJSU3hYUVVGWExFTkJRVU03WjBKQlF6TkNMRmxCUVZrc1EwRkJReXhoUVVGaExHOUVRVUZwUWl4RFFVRkRPMmRDUVVNMVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1YwRkJWenQzUWtGRGJFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2NVSkJRMVE3YVVKQlEwUXNRMEZCUXp0aFFVTkdPMWxCUlVRc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eGpRVUZqTEVOQlFVTXNRMEZCUXp0WlFVTndRaXhOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETzFsQlEzUkVMRWxCUVVrc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJUdG5Ra0ZEYkVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGpRVUZqTEVOQlFVTTdaMEpCUTNSRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRenRuUWtGRGJFTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2JVUkJRV2RDTEVOQlFVTTdaMEpCUXpORExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1owSkJRMjVETEU5QlFVODdZVUZEVUR0WlFVTkVMRkZCUVZFc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGREwwSXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenR2UWtGRFVpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFpDUVVFMlFpeERRVUZETzI5Q1FVTnlSQ3hOUVVGTk8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1dVRkJXU3hEUVVGRE8yZENRVU5zUWl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVVZVTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdiMEpCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRNVU1zZVVKQlFYbENMRU5CUTNwQ0xFVkJRVVVzVjBGQlZ5eERRVUZETzI5Q1FVTm1MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3ZDBKQlEzUkNPelJDUVVORExFdEJRVXNzUlVGQlJTeHhRa0ZCY1VJN05FSkJRelZDTEVkQlFVY3NSVUZCUlN4SlFVRkpPM2xDUVVOVU8zRkNRVU5FTEVOQlFVTTdiMEpCUTBZc1RVRkJUVHRwUWtGRFRqdG5Ra0ZEUkN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRE8yOUNRVU5ZTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdiMEpCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTzNkQ1FVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETzI5Q1FVTjJSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzNkQ1FVTjBRanMwUWtGRFF5eExRVUZMTEVWQlFVVXNXVUZCV1RzMFFrRkRia0lzUjBGQlJ5eEZRVUZGTEVsQlFVazdlVUpCUTFRN2NVSkJRMFFzUTBGQlF6dHZRa0ZEUml4TlFVRk5PMmxDUVVOT08yZENRVU5FTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJSVlFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRU5CUVVNN2IwSkJRM1JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE1VTXNkVUpCUVhWQ0xFTkJRM1pDTEVWQlFVVXNWMEZCVnl4RFFVRkRPMjlDUVVObUxGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8yOUNRVU0xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8zZENRVU4wUWpzMFFrRkRReXhMUVVGTExFVkJRVVVzWTBGQll6czBRa0ZEY2tJc1IwRkJSeXhGUVVGRkxFbEJRVWs3ZVVKQlExUTdjVUpCUTBRc1EwRkJRenR2UWtGRFJpeE5RVUZOTzJsQ1FVTk9PMmRDUVVORUxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUlZRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGpRVUZqTEVOQlFVTTdiMEpCUTNSRExGbEJRVmtzUTBGQlF5eGhRVUZoTEVkQlFVY3NWMEZCVnl4UlFVRlJMRWxCUVVrc1VVRkJVVHQ1UWtGRE1VUXNZVUZCWVN4RFFVRkRMQ3RDUVVFclFpeERRVUZETzNkQ1FVTXZReXhGUVVGRkxHbENRVUZwUWl4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETzI5Q1FVTXpReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRTdlVUpCUXpOQ0xHRkJRV0VzUTBGQlF5eHZRa0ZCYjBJc1EwRkJRenQ1UWtGRGJrTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUXpGQ0xFbEJRVWtzUlVGQlJTeERRVUZETzI5Q1FVTlVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3ZDBKQlEzUkNPelJDUVVORExFdEJRVXNzUlVGQlJTeGpRVUZqT3pSQ1FVTnlRaXhIUVVGSExFVkJRVVVzU1VGQlNUdDVRa0ZEVkR0eFFrRkRSQ3hEUVVGRE8yOUNRVU5HTEUxQlFVMDdhVUpCUTA0N1owSkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0dlFrRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERSQ1FVRTBRaXhEUVVGRE8yOUNRVU53UkN4TlFVRk5PMmxDUVVOT08yZENRVU5FTEV0QlFVc3NTMEZCU3l4RFFVRkRMRU5CUVVNN2IwSkJRMWdzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4NVFrRkJlVUlzUTBGQlF6dHZRa0ZEYWtRc1RVRkJUVHRwUWtGRFRqdG5Ra0ZEUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8yOUNRVU5rTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdiMEpCUXpsRExFMUJRVTA3YVVKQlEwNDdaMEpCUTBRc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dHZRa0ZEVkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMjlDUVVNNVF5eE5RVUZOTzJsQ1FVTk9PMkZCUTBRN1dVRkRSQ3hOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03V1VGRGVrSXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRaUVVOd1JDeEpRVUZKTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVN1owSkJRMnhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1kwRkJZeXhEUVVGRE8yZENRVU4wUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdaMEpCUTJ4RExGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8yRkJRek5ETzJsQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhGUVVGRk8yZENRVU51UkN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExGRkJRVkU3Y1VKQlEyNURMR0ZCUVdFc1EwRkJReXhuUWtGQlowSXNRMEZCUXp0eFFrRkRMMElzYVVKQlFXbENMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTjRReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8yZENRVU40UXl4WlFVRlpMRU5CUVVNc1MwRkJTenR2UWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenR2UWtGRGRFSTdkMEpCUTBNc1MwRkJTeXhGUVVGRkxHRkJRV0U3ZDBKQlEzQkNMRWRCUVVjc1JVRkJSU3hKUVVGSk8zRkNRVU5VTzJsQ1FVTkVMRU5CUVVNN1lVRkRSanRwUWtGQlRUdG5Ra0ZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRM1JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2RVTkJRWFZETEVOQlFVTTdiMEpCUXpsRUxFVkJRVVVzVjBGQlZ5eEpRVUZKTEdGQlEyNUNMRVZCUVVVc1EwRkJRenRuUWtGRFNDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR0ZCUTNCQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUlVGQlJTeFhRVU55UkN4RlFVRkZMRU5CUVVNN1owSkJRMGdzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0dlFrRkRkRUk3ZDBKQlEwTXNTMEZCU3l4RlFVRkZMR2xDUVVGcFFqdDNRa0ZEZUVJc1IwRkJSeXhGUVVGRkxFbEJRVWs3Y1VKQlExUTdhVUpCUTBRc1EwRkJRenRoUVVOR08xbEJSVVFzVFVGQlRUdFRRVU5PTzB0QlEwUTdTVUZGUkN4SlFVRkpMRU5CUVVNc1RVRkJUVHRSUVVGRkxGbEJRVmtzUTBGQlF5eGhRVUZoTEN0RVFVRmpMRU5CUVVNN1NVRkRkRVFzU1VGQlNTeERRVUZETEU5QlFVODdVVUZCUlN4UFFVRlBMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRE1VTXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiaHJlZiIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicHJpdmFjeSIsImJ1dHRvbnMiLCJjb3ZlcnMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsInNlYXJjaCIsImRldGFpbHMiLCJzZXRBY3Rpdml0eSIsInJlcGxhY2UiLCJpbmNsdWRlcyIsInNtYWxsSW1hZ2VLZXkiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJzdGF0ZSIsInN0YXJ0c1dpdGgiLCJmaXJzdENoaWxkIiwidGV4dENvbnRlbnQiLCJsYWJlbCIsInVybCIsInNwbGl0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJnZXRBdHRyaWJ1dGUiLCJ0cmltIl0sInNvdXJjZVJvb3QiOiIifQ==
undefined;