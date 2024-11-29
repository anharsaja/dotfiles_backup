var __webpack_exports__={};const presence=new Presence({clientId:"959109938779684874"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={details:"Browsing",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Webnovel/assets/logo.png"},[t,s,a,r]=await Promise.all([presence.getSetting("privacy"),presence.getSetting("timestamp"),presence.getSetting("cover"),presence.getSetting("buttons")]),{pathname:i,hostname:l,href:n,search:o}=document.location,[c,g,d,m]=[i.startsWith("/book/"),i.startsWith("/comic/"),i.startsWith("/stories/"),i.startsWith("/ranking/")];switch(l){case"www.webnovel.com":if("/"===i)e.details="Home Page";else if(d||m){if(d?e.details="Browsing Categories":m&&(e.details="Viewing Rankings"),!t){const t=document.querySelectorAll("a[class~='_on']");e.details=`Viewing ${t[0].title.replace(",","")}`,e.state=t[1].title}e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"}else if(c||g)if(a&&(e.largeImageKey=`https://img.webnovel.com/bookcover/${i.split("/")[2].split("_")[1]}/600/600.jpg`),document.querySelector(".cha-hd-mn")){const s=document.querySelector(".cha-hd-mn-text").textContent.split(" / ");c?e.details="Reading a Novel":g&&(e.details="Reading a Comic"),t||(e.details=s[0].trim(),e.state=s[1].trim(),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading",e.buttons=[{label:"Read Chapter",url:document.URL},{label:"Read Book",url:document.querySelector(".dib.ell").href}])}else c?e.details="Viewing a Novel":g&&(e.details="Viewing a Comic"),t||(e.state=document.querySelector("h2").innerHTML.split(" <")[0],e.buttons=[{label:"View Book",url:document.URL}]);else i.startsWith("/profile/")?(e.details="Viewing a Profile",a&&(e.largeImageKey=document.querySelector(".avatar-area img").src),t||(e.state=document.querySelector("h3").textContent,e.buttons=[{label:"View Profile",url:document.URL}])):i.startsWith("/search")?(e.details="Searching",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",t||(e.details="Searching for:",e.state=document.querySelector("input").value)):i.startsWith("/library")?e.details="Viewing Library":i.startsWith("/history")?e.details="Viewing History":i.startsWith("/tags")&&(e.details="Browsing Tags",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",t||(e.state=document.querySelector("h2").textContent));break;case"forum.webnovel.com":{const s=new URLSearchParams(o);s.has("q")&&"/"===i?(e.details="Searching Forum",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",t||(e.details="Searching Forum for",e.state=s.get("q"))):"/"===i?e.details="Forum Home Page":i.startsWith("/following")?e.details="Viewing Followed discussions":i.startsWith("/tags")?e.details="Browsing Tags":i.startsWith("/t")?(e.details="Browsing Topics",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",t||(e.state=document.querySelector(".Hero-title").textContent)):i.startsWith("/d")?(e.details="Reading Discussion",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",t||(e.state=document.querySelector("h2").textContent,e.buttons=[{label:"View Discussion",url:n.split("/").splice(0,5).join("/")}])):i.startsWith("/u")?(e.details="Viewing User Profile",a&&(e.largeImageKey=document.querySelector(".UserCard-profile .Avatar").src),t||(e.state=document.querySelector(".UserCard-profile .username").textContent,e.buttons=[{label:"View Profile",url:n.split("/").splice(0,5).join("/")}])):i.startsWith("/p")&&(e.details="Reading a Post",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",t||(e.state=document.querySelector(".PageHero-title").textContent,e.buttons=[{label:"Read Post",url:document.URL}]));break}case"inkstone.webnovel.com":i.includes("/dashboard")?e.details="Author's Dashboard":i.startsWith("/academy")?(e.details="Writers Academy",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",i.includes("/column")?(e.details="Viewing a Column",t||(e.state=document.querySelector("h2").textContent)):i.includes("/article")&&(e.details="Reading an Article",a&&document.querySelector('[class^="cover"] > img')&&(e.largeImageKey=document.querySelector('[class^="cover"] > img').src),t||(e.state=document.querySelector(".fs32.lh40").textContent))):i.includes("/list")?e.details="Viewing their Novel List":i.includes("/create")&&(e.details="Making a Novel",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png")}switch(e.smallImageKey){case"search":e.smallImageText="Searching";break;case"reading":e.smallImageText="Reading"}s&&(e.startTimestamp=browsingTimestamp),r||delete e.buttons,presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBVSxpQkFDdkJELEVBQWEwQixjQUFnQixrREFDeEJ2QixJQUNESCxFQUFheUIsTUFDVFgsU0FBU2MsY0FBYyxtQkFBbUJFLFlBQzlDOUIsRUFBYU0sUUFBVSxDQUFDLENBQUUyQixNQUFPLFlBQWFDLElBQUtwQixTQUFTcUIsUUFHcEUsS0FDSixDQUNBLElBQUssd0JBQ0d6QixFQUFTbUMsU0FBUyxjQUNsQjdDLEVBQWFDLFFBQVUscUJBQ2xCUyxFQUFTVSxXQUFXLGFBQ3pCcEIsRUFBYUMsUUFBVSxrQkFDdkJELEVBQWEwQixjQUFnQixrREFDekJoQixFQUFTbUMsU0FBUyxZQUNsQjdDLEVBQWFDLFFBQVUsbUJBQ2xCRSxJQUNESCxFQUFheUIsTUFBUVgsU0FBU2MsY0FBYyxNQUFNRSxjQUVqRHBCLEVBQVNtQyxTQUFTLGNBQ3ZCN0MsRUFBYUMsUUFBVSxxQkFDbkJJLEdBQVNTLFNBQVNjLGNBQWMsNEJBQ2hDNUIsRUFBYUUsY0FDVFksU0FBU2MsY0FBYywwQkFBMEJTLEtBRXBEbEMsSUFDREgsRUFBYXlCLE1BQ1RYLFNBQVNjLGNBQWMsY0FBY0UsZUFJNUNwQixFQUFTbUMsU0FBUyxTQUN2QjdDLEVBQWFDLFFBQVUsMkJBQ2xCUyxFQUFTbUMsU0FBUyxhQUN2QjdDLEVBQWFDLFFBQVUsaUJBQ3ZCRCxFQUFhMEIsY0FBZ0IsbURBS3pDLE9BQVExQixFQUFhMEIsZUFDakIsSUFBSyxTQUNEMUIsRUFBYWdDLGVBQWlCLFlBQzlCLE1BQ0osSUFBSyxVQUNEaEMsRUFBYWdDLGVBQWlCLFVBR2xDNUIsSUFDQUosRUFBYThDLGVBQWlCckQsbUJBQzdCYSxVQUNNTixFQUFhTSxRQUN4QmhCLFNBQVN5RCxZQUFZL0MsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI5NTkxMDk5Mzg3Nzk2ODQ4NzRcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmdcIixcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1cvV2Vibm92ZWwvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfSwgW3ByaXZhY3ksIHRpbWVzdGFtcCwgY292ZXIsIGJ1dHRvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwicHJpdmFjeVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInRpbWVzdGFtcFwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImNvdmVyXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSxcbiAgICBdKSwgeyBwYXRobmFtZSwgaG9zdG5hbWUsIGhyZWYsIHNlYXJjaCB9ID0gZG9jdW1lbnQubG9jYXRpb24sIFtib29rLCBjb21pYywgc3RvcmllcywgcmFua2luZ10gPSBbXG4gICAgICAgIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYm9vay9cIiksXG4gICAgICAgIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvY29taWMvXCIpLFxuICAgICAgICBwYXRobmFtZS5zdGFydHNXaXRoKFwiL3N0b3JpZXMvXCIpLFxuICAgICAgICBwYXRobmFtZS5zdGFydHNXaXRoKFwiL3JhbmtpbmcvXCIpLFxuICAgIF07XG4gICAgc3dpdGNoIChob3N0bmFtZSkge1xuICAgICAgICBjYXNlIFwid3d3LndlYm5vdmVsLmNvbVwiOiB7XG4gICAgICAgICAgICBpZiAocGF0aG5hbWUgPT09IFwiL1wiKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJIb21lIFBhZ2VcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0b3JpZXMgfHwgcmFua2luZykge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yaWVzKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgQ2F0ZWdvcmllc1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJhbmtpbmcpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFJhbmtpbmdzXCI7XG4gICAgICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2NsYXNzfj0nX29uJ11cIik7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHthY3RpdmVUYWJbMF0udGl0bGUucmVwbGFjZShcIixcIiwgXCJcIil9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYWN0aXZlVGFiWzFdLnRpdGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYm9vayB8fCBjb21pYykge1xuICAgICAgICAgICAgICAgIGlmIChjb3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGBodHRwczovL2ltZy53ZWJub3ZlbC5jb20vYm9va2NvdmVyLyR7cGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdLnNwbGl0KFwiX1wiKVsxXX0vNjAwLzYwMC5qcGdgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGEtaGQtbW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm92ZWxJbmZvID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNoYS1oZC1tbi10ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCIgLyBcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib29rKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYSBOb3ZlbFwiO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21pYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGEgQ29taWNcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IG5vdmVsSW5mb1swXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBub3ZlbEluZm9bMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlJlYWRpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiUmVhZCBDaGFwdGVyXCIsIHVybDogZG9jdW1lbnQuVVJMIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSZWFkIEJvb2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYi5lbGxcIikuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvb2spXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIE5vdmVsXCI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbWljKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBDb21pY1wiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbm5lckhUTUwuc3BsaXQoXCIgPFwiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBCb29rXCIsIHVybDogZG9jdW1lbnQuVVJMIH1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wcm9maWxlL1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgUHJvZmlsZVwiO1xuICAgICAgICAgICAgICAgIGlmIChjb3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2YXRhci1hcmVhIGltZ1wiKS5zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgUHJvZmlsZVwiLCB1cmw6IGRvY3VtZW50LlVSTCB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGZvcjpcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2xpYnJhcnlcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgTGlicmFyeVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9oaXN0b3J5XCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEhpc3RvcnlcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdGFnc1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBUYWdzXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiZm9ydW0ud2Vibm92ZWwuY29tXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzKFwicVwiKSAmJiBwYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIEZvcnVtXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBGb3J1bSBmb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFyYW1zLmdldChcInFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUgPT09IFwiL1wiKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGb3J1bSBIb21lIFBhZ2VcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZm9sbG93aW5nXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEZvbGxvd2VkIGRpc2N1c3Npb25zXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3RhZ3NcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIFRhZ3NcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdFwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBUb3BpY3NcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5IZXJvLXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZFwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIERpc2N1c3Npb25cIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBEaXNjdXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLnNwbGl0KFwiL1wiKS5zcGxpY2UoMCwgNSkuam9pbihcIi9cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdVwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFVzZXIgUHJvZmlsZVwiO1xuICAgICAgICAgICAgICAgIGlmIChjb3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuVXNlckNhcmQtcHJvZmlsZSAuQXZhdGFyXCIpLnNyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuVXNlckNhcmQtcHJvZmlsZSAudXNlcm5hbWVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgUHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZi5zcGxpdChcIi9cIikuc3BsaWNlKDAsIDUpLmpvaW4oXCIvXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3BcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhIFBvc3RcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUGFnZUhlcm8tdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiUmVhZCBQb3N0XCIsIHVybDogZG9jdW1lbnQuVVJMIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpbmtzdG9uZS53ZWJub3ZlbC5jb21cIjoge1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2Rhc2hib2FyZFwiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQXV0aG9yJ3MgRGFzaGJvYXJkXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL2FjYWRlbXlcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV3JpdGVycyBBY2FkZW15XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2NvbHVtblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIENvbHVtblwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByaXZhY3kpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2FydGljbGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYW4gQXJ0aWNsZVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY292ZXIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzXj1cImNvdmVyXCJdID4gaW1nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3NePVwiY292ZXJcIl0gPiBpbWcnKS5zcmM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnMzMi5saDQwXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvbGlzdFwiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGVpciBOb3ZlbCBMaXN0XCI7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9jcmVhdGVcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWFraW5nIGEgTm92ZWxcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvd3JpdGluZy5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAocHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkpIHtcbiAgICAgICAgY2FzZSBcInNlYXJjaFwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJTZWFyY2hpbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmVhZGluZ1wiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHRpbWVzdGFtcClcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgaWYgKCFidXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNUMEZCVHl4RlFVRkZMRlZCUVZVN1VVRkRia0lzWVVGQllTeEZRVU5hTEN0RVFVRXJSRHRMUVVOb1JTeEZRVU5FTEVOQlFVTXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSU3hMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NUVUZCVFN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRM2hFTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRE8xRkJRM1pETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZNc1YwRkJWeXhEUVVGRE8xRkJRM2hETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1QwRkJUeXhEUVVGRE8xRkJRM0pETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRE8wdEJRM1pETEVOQlFVTXNSVUZEUml4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRM2hFTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVYzdVVUZEYWtNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZETjBJc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZET1VJc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEYUVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTTdTMEZEYUVNc1EwRkJRenRKUVVOSUxGRkJRVkVzVVVGQlVTeEZRVUZGTzFGQlEycENMRXRCUVVzc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhKUVVGSkxGRkJRVkVzUzBGQlN5eEhRVUZITzJkQ1FVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eERRVUZETzJsQ1FVTndSQ3hKUVVGSkxFOUJRVThzU1VGQlNTeFBRVUZQTEVWQlFVVTdaMEpCUXpWQ0xFbEJRVWtzVDBGQlR6dHZRa0ZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPM0ZDUVVOeVJDeEpRVUZKTEU5QlFVODdiMEpCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRuUWtGRE5VUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHR2UWtGRFlpeE5RVUZOTEZOQlFWTXNSMEZEWkN4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFXOUNMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdiMEpCUTJwRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZETTBRc1IwRkJSeXhGUVVOSUxFVkJRVVVzUTBGRFJpeEZRVUZGTEVOQlFVTTdiMEpCUTBvc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8ybENRVU40UXp0blFrRkRSQ3haUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRoUVVNelF6dHBRa0ZCVFN4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFVkJRVVU3WjBKQlEzcENMRWxCUVVrc1MwRkJTeXhGUVVGRk8yOUNRVU5XTEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVjc2MwTkJRelZDTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRGNFTXNZMEZCWXl4RFFVRkRPMmxDUVVObU8yZENRVU5FTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJUdHZRa0ZEZWtNc1RVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVUdDVRa0ZEZUVJc1lVRkJZU3hEUVVGclFpeHBRa0ZCYVVJc1EwRkJRenQ1UWtGRGFrUXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dHZRa0ZETTBJc1NVRkJTU3hKUVVGSk8zZENRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdlVUpCUXpsRExFbEJRVWtzUzBGQlN6dDNRa0ZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMjlDUVVONlJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPM2RDUVVOaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzNkQ1FVTXpReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dDNRa0ZEZWtNc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBSQlFXbENMRU5CUVVNN2QwSkJRelZETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1UwRkJVeXhEUVVGRE8zZENRVU40UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE96UkNRVU4wUWl4RlFVRkZMRXRCUVVzc1JVRkJSU3hqUVVGakxFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVN05FSkJRelZETzJkRFFVTkRMRXRCUVVzc1JVRkJSU3hYUVVGWE8yZERRVU5zUWl4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNWVUZCVlN4RFFVRkRMRU5CUVVNc1NVRkJTVHMyUWtGREwwUTdlVUpCUTBRc1EwRkJRenR4UWtGRFJqdHBRa0ZEUkR0eFFrRkJUVHR2UWtGRFRpeEpRVUZKTEVsQlFVazdkMEpCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenQ1UWtGRE9VTXNTVUZCU1N4TFFVRkxPM2RDUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03YjBKQlEzcEVMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3ZDBKQlEySXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUk96WkNRVU16UWl4aFFVRmhMRU5CUVhGQ0xFbEJRVWtzUTBGQlF6czJRa0ZEZGtNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRE0wSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdjVUpCUTI1Rk8ybENRVU5FTzJGQlEwUTdhVUpCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMmRDUVVNMVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzJkQ1FVTXpReXhKUVVGSkxFdEJRVXNzUlVGQlJUdHZRa0ZEVml4WlFVRlpMRU5CUVVNc1lVRkJZVHQzUWtGRGVrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJiVUlzYTBKQlFXdENMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03YVVKQlEyeEZPMmRDUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdiMEpCUTJJc1dVRkJXU3hEUVVGRExFdEJRVXM3ZDBKQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVzlDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenR2UWtGRE4wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEdOQlFXTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdhVUpCUTNSRk8yRkJRMFE3YVVKQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzJkQ1FVTXhReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXp0blFrRkRia01zV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03WjBKQlJUTkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3YjBKQlEySXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0dlFrRkRlRU1zV1VGQldTeERRVUZETEV0QlFVczdkMEpCUTJwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFXMUNMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dHBRa0ZEZWtRN1lVRkRSRHRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRE8yZENRVU42UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMmxDUVVOeVF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRE8yZENRVU4yUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMmxDUVVOeVF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlEzUkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzJkQ1FVTjJReXhaUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRuUWtGRE0wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHR2UWtGRFlpeFpRVUZaTEVOQlFVTXNTMEZCU3p0M1FrRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCY1VJc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzJsQ1FVTTVSRHRoUVVORU8xbEJSVVFzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4dlFrRkJiMElzUTBGQlF5eERRVUZETzFsQlF6RkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUXpORExFbEJRVWtzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hSUVVGUkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzJkQ1FVTjRReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8yZENRVU42UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h0UkVGQlowSXNRMEZCUXp0blFrRkRNME1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0dlFrRkRZaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8yOUNRVU0zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRM0pETzJGQlEwUTdhVUpCUVUwc1NVRkJTU3hSUVVGUkxFdEJRVXNzUjBGQlJ6dG5Ra0ZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMmxDUVVOcVJTeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRE8yZENRVU42UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEaENRVUU0UWl4RFFVRkRPMmxDUVVOc1JDeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRE8yZENRVU53UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dHBRa0ZEYmtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVOdVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzJkQ1FVTjZReXhaUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRuUWtGRE0wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHR2UWtGRFlpeFpRVUZaTEVOQlFVTXNTMEZCU3p0M1FrRkRha0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc1lVRkJZU3hEUVVOaUxFTkJRVU1zVjBGQlZ5eERRVUZETzJsQ1FVTm1PMkZCUTBRN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU55UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMmRDUVVNMVF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6dG5Ra0ZETlVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdHZRa0ZEWWl4WlFVRlpMRU5CUVVNc1MwRkJTenQzUWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJjVUlzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMjlDUVVNNVJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPM2RDUVVOMFFqczBRa0ZEUXl4TFFVRkxMRVZCUVVVc2FVSkJRV2xDT3pSQ1FVTjRRaXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU03ZVVKQlF6TkRPM0ZDUVVORUxFTkJRVU03YVVKQlEwWTdZVUZEUkR0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1owSkJRM0pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdaMEpCUXpsRExFbEJRVWtzUzBGQlN5eEZRVUZGTzI5Q1FVTldMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEYkVRc01rSkJRVEpDTEVOQlF6TkNMRU5CUVVNc1IwRkJSeXhEUVVGRE8ybENRVU5PTzJkQ1FVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3YjBKQlEySXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl3MlFrRkJOa0lzUTBGRE4wSXNRMEZCUXl4WFFVRlhMRU5CUVVNN2IwSkJRMlFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0M1FrRkRkRUk3TkVKQlEwTXNTMEZCU3l4RlFVRkZMR05CUVdNN05FSkJRM0pDTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0NVFrRkRNME03Y1VKQlEwUXNRMEZCUXp0cFFrRkRSanRoUVVORU8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdG5Ra0ZEY2tNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRuUWtGRGVFTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdaMEpCUXpWRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdiMEpCUTJJc1dVRkJXU3hEUVVGRExFdEJRVXM3ZDBKQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTEdsQ1FVRnBRaXhEUVVOcVFpeERRVUZETEZkQlFWY3NRMEZCUXp0dlFrRkRaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1YwRkJWeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRwUWtGRGJrVTdZVUZEUkR0WlFVVkVMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzZFVKQlFYVkNMRU5CUVVNc1EwRkJRenRaUVVNM1FpeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRE8yZENRVU5zUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMmxDUVVONFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3WjBKQlEzcERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1owSkJRM3BETEZsQlFWa3NRMEZCUXl4aFFVRmhMRzlFUVVGcFFpeERRVUZETzJkQ1FVTTFReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN2IwSkJRMnBETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdiMEpCUXpGRExFbEJRVWtzUTBGQlF5eFBRVUZQTzNkQ1FVTllMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03YVVKQlF5OUVPM0ZDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHR2UWtGRGVrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0dlFrRkROVU1zU1VGQlNTeExRVUZMTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4RlFVRkZPM2RDUVVNNVJDeFpRVUZaTEVOQlFVTXNZVUZCWVRzMFFrRkRla0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc2QwSkJRWGRDTEVOQlEzaENMRU5CUVVNc1IwRkJSeXhEUVVGRE8zRkNRVU5RTzI5Q1FVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3ZDBKQlEySXNXVUZCV1N4RFFVRkRMRXRCUVVzN05FSkJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVdsQ0xGbEJRVmtzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXp0eFFrRkRiRVU3YVVKQlEwUTdZVUZEUkR0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPMmRDUVVOd1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREJDUVVFd1FpeERRVUZETzJsQ1FVTTVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1owSkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdaMEpCUTNoRExGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8yRkJRelZETzFsQlJVUXNUVUZCVFR0VFFVTk9PMHRCUTBRN1NVRkZSQ3hSUVVGUkxGbEJRVmtzUTBGQlF5eGhRVUZoTEVWQlFVVTdVVUZEYmtNc1MwRkJTeXhSUVVGUk8xbEJRMW9zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4WFFVRlhMRU5CUVVNN1dVRkRNVU1zVFVGQlRUdFJRVU5RTEV0QlFVc3NVMEZCVXp0WlFVTmlMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVTBGQlV5eERRVUZETzFsQlEzaERMRTFCUVUwN1MwRkRVRHRKUVVWRUxFbEJRVWtzVTBGQlV6dFJRVUZGTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdTVUZETDBRc1NVRkJTU3hEUVVGRExFOUJRVTg3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkZNVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwiZGV0YWlscyIsImxhcmdlSW1hZ2VLZXkiLCJwcml2YWN5IiwidGltZXN0YW1wIiwiY292ZXIiLCJidXR0b25zIiwiUHJvbWlzZSIsImFsbCIsImdldFNldHRpbmciLCJwYXRobmFtZSIsImhvc3RuYW1lIiwiaHJlZiIsInNlYXJjaCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJib29rIiwiY29taWMiLCJzdG9yaWVzIiwicmFua2luZyIsInN0YXJ0c1dpdGgiLCJhY3RpdmVUYWIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGl0bGUiLCJyZXBsYWNlIiwic3RhdGUiLCJzbWFsbEltYWdlS2V5Iiwic3BsaXQiLCJxdWVyeVNlbGVjdG9yIiwibm92ZWxJbmZvIiwidGV4dENvbnRlbnQiLCJ0cmltIiwic21hbGxJbWFnZVRleHQiLCJsYWJlbCIsInVybCIsIlVSTCIsImlubmVySFRNTCIsInNyYyIsInZhbHVlIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwiZ2V0Iiwic3BsaWNlIiwiam9pbiIsImluY2x1ZGVzIiwic3RhcnRUaW1lc3RhbXAiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;