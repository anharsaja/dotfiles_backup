var __webpack_exports__={};const presence=new Presence({clientId:"632013978608074764"}),browsingTimestamp=Math.floor(Date.now()/1e3);let user,title,search,playing,paused,progress,lastState;lastState=null,presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/Monstercat/assets/logo.png"};"www.monstercat.com"===document.location.hostname?(progress=document.querySelector(".progress"),progress=progress.style.cssText.replace("width: ","").replace("%;",""),lastState===progress&&"0"!==progress&&"100"!==progress?(playing=!0,paused=!0):"0"===progress||"100"===progress?(playing=!1,paused=!0):(lastState=progress,playing=!0,paused=!1),progress=Number(progress),progress=Math.round(progress),!0===playing&&!1===paused?(title=document.querySelector("body > header > div.container.player > div.flex.controls.push-right.playing > a > span"),e.details=title.textContent,e.state=`${progress}% progressed`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Playing"):!0===playing&&!0===paused?(title=document.querySelector("body > header > div.container.player > div.flex.controls.push-right.playing > a > span"),e.details=title.textContent,e.state=`${progress}% progressed`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png",e.smallImageText="Paused"):(e.startTimestamp=browsingTimestamp,document.location.pathname.includes("/release/")?(title=document.querySelector("body > section > div:nth-child(1) > div.container.flex > div > h1"),user=document.querySelector("body > section > div:nth-child(1) > div.container.flex > div > h3"),e.details="Viewing release:",e.state=`${title.textContent} by ${user.textContent}`):document.location.pathname.includes("/artist/")?(user=document.querySelector("body > section > div.top-banner > div.container.flex > div > div > h1"),e.details="Viewing artist:",e.state=user.textContent):document.location.pathname.includes("/music")?e.details="Browsing music releases...":document.location.pathname.includes("/browse")?e.details="Browsing...":document.location.pathname.includes("/catalog")?e.details="Viewing catalog":document.location.pathname.includes("/artists")?e.details="Viewing artists":document.location.pathname.includes("/playlist/")?(title=document.querySelector("body > section > div > h1"),e.details="Viewing playlist:",e.state=title.textContent):document.location.pathname.includes("/playlists")?e.details="Viewing their playlists":document.location.pathname.includes("/events")?e.details="Viewing events":document.location.pathname.includes("/event/")?(title=document.querySelector("body > section > div.event-page-header > div > div.container.container--event-header.flex > div > a.silent.no-hover > h1"),e.details="Reading about event:",title.textContent.length>128?e.state=`${title.textContent.substring(0,125)}...`:e.state=title.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/publishing")?e.details="Viewing publishing":document.location.pathname.includes("/cotw")?e.details="Viewing radio":document.location.pathname.includes("/gold")?e.details="Viewing Monstercat Gold":document.location.pathname.includes("/account")?e.details="Viewing their account":document.location.pathname.includes("/blog/")?document.location.pathname.includes("/tags/")?(title=document.querySelector("head > title"),title=title.textContent.replace(" Posts - Monstercat",""),e.details="Blog - Viewing tag:",e.state=title):(title=document.querySelector("body > section > div.panel.panel--article > header > h1"),e.details="Reading article:",title.textContent.length>128?e.state=`${title.textContent.substring(0,125)}...`:e.state=title.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/blog")?e.details="Viewing blog posts":document.location.pathname.includes("/search")?(search=document.querySelector("body > header > div.container.player > div.col-xs-hidden.col-md-visible.global-search > form > input[type=text]"),e.details="Searching for:",e.state=search.value,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):"/"===document.location.pathname&&(e.details="Viewing homepage"))):"shop.monstercat.com"===document.location.hostname&&(e.startTimestamp=browsingTimestamp,document.location.pathname.includes("/products/")?(e.details="Shop - Viewing product:",title=document.querySelector("#product-description > div:nth-child(1) > h1"),title.textContent.length>128?e.state=`${title.textContent.substring(0,125)}...`:e.state=title.textContent):document.location.pathname.includes("/collections/")?(e.details="Shop - Viewing collection:",title=document.querySelector("#collection-description > h1"),e.state=title.textContent):document.location.pathname.includes("/cart")?e.details="Shop - Viewing cart":"/"===document.location.pathname&&(e.details="Viewing store front")),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YVcsUUFBVSw2QkFDdkJuQixNQUFRVSxTQUFTRyxjQUFjLGdDQUMvQkwsRUFBYWEsTUFBUXJCLE1BQU1vQixhQUV0QlYsU0FBU0MsU0FBU2MsU0FBU0MsU0FBUyxTQUN6Q2xCLEVBQWFXLFFBQVUsc0JBQ2EsTUFBL0JULFNBQVNDLFNBQVNjLFdBQ3ZCakIsRUFBYVcsUUFBVSx3QkFFM0JYLEVBQWFXLFFBQ2I1QixTQUFTdUMsWUFBWXRCLEdBRXJCakIsU0FBU3VDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjMyMDEzOTc4NjA4MDc0NzY0XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCB1c2VyLCB0aXRsZSwgc2VhcmNoLCBwbGF5aW5nLCBwYXVzZWQsIHByb2dyZXNzLCBsYXN0U3RhdGU7XG5sYXN0U3RhdGUgPSBudWxsO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9NL01vbnN0ZXJjYXQvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT09IFwid3d3Lm1vbnN0ZXJjYXQuY29tXCIpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpO1xuICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzLnN0eWxlLmNzc1RleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKFwid2lkdGg6IFwiLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCIlO1wiLCBcIlwiKTtcbiAgICAgICAgaWYgKGxhc3RTdGF0ZSA9PT0gcHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MgIT09IFwiMFwiICYmIHByb2dyZXNzICE9PSBcIjEwMFwiKSB7XG4gICAgICAgICAgICBwbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvZ3Jlc3MgPT09IFwiMFwiIHx8IHByb2dyZXNzID09PSBcIjEwMFwiKSB7XG4gICAgICAgICAgICBwbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGFzdFN0YXRlID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICBwbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHByb2dyZXNzID0gTnVtYmVyKHByb2dyZXNzKTtcbiAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKHByb2dyZXNzKTtcbiAgICAgICAgaWYgKHBsYXlpbmcgPT09IHRydWUgJiYgcGF1c2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGhlYWRlciA+IGRpdi5jb250YWluZXIucGxheWVyID4gZGl2LmZsZXguY29udHJvbHMucHVzaC1yaWdodC5wbGF5aW5nID4gYSA+IHNwYW5cIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7cHJvZ3Jlc3N9JSBwcm9ncmVzc2VkYDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJQbGF5aW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGxheWluZyA9PT0gdHJ1ZSAmJiBwYXVzZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBoZWFkZXIgPiBkaXYuY29udGFpbmVyLnBsYXllciA+IGRpdi5mbGV4LmNvbnRyb2xzLnB1c2gtcmlnaHQucGxheWluZyA+IGEgPiBzcGFuXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3Byb2dyZXNzfSUgcHJvZ3Jlc3NlZGA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlBhdXNlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcmVsZWFzZS9cIikpIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gc2VjdGlvbiA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYuY29udGFpbmVyLmZsZXggPiBkaXYgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBzZWN0aW9uID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdi5jb250YWluZXIuZmxleCA+IGRpdiA+IGgzXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHJlbGVhc2U6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dGl0bGUudGV4dENvbnRlbnR9IGJ5ICR7dXNlci50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvYXJ0aXN0L1wiKSkge1xuICAgICAgICAgICAgICAgIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IHNlY3Rpb24gPiBkaXYudG9wLWJhbm5lciA+IGRpdi5jb250YWluZXIuZmxleCA+IGRpdiA+IGRpdiA+IGgxXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFydGlzdDpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB1c2VyLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvbXVzaWNcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIG11c2ljIHJlbGVhc2VzLi4uXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9icm93c2VcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jYXRhbG9nXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGNhdGFsb2dcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FydGlzdHNcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYXJ0aXN0c1wiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcGxheWxpc3QvXCIpKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IHNlY3Rpb24gPiBkaXYgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBwbGF5bGlzdDpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3BsYXlsaXN0c1wiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGVpciBwbGF5bGlzdHNcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50c1wiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBldmVudHNcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V2ZW50L1wiKSkge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBzZWN0aW9uID4gZGl2LmV2ZW50LXBhZ2UtaGVhZGVyID4gZGl2ID4gZGl2LmNvbnRhaW5lci5jb250YWluZXItLWV2ZW50LWhlYWRlci5mbGV4ID4gZGl2ID4gYS5zaWxlbnQubm8taG92ZXIgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhYm91dCBldmVudDpcIjtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUudGV4dENvbnRlbnQubGVuZ3RoID4gMTI4KSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3RpdGxlLnRleHRDb250ZW50LnN1YnN0cmluZygwLCAxMjUpfS4uLmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wdWJsaXNoaW5nXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHB1Ymxpc2hpbmdcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NvdHdcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgcmFkaW9cIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2dvbGRcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgTW9uc3RlcmNhdCBHb2xkXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9hY2NvdW50XCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZWlyIGFjY291bnRcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2Jsb2cvXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RhZ3MvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgPiB0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB0aXRsZS50ZXh0Q29udGVudC5yZXBsYWNlKFwiIFBvc3RzIC0gTW9uc3RlcmNhdFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJsb2cgLSBWaWV3aW5nIHRhZzpcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gc2VjdGlvbiA+IGRpdi5wYW5lbC5wYW5lbC0tYXJ0aWNsZSA+IGhlYWRlciA+IGgxXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhcnRpY2xlOlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUudGV4dENvbnRlbnQubGVuZ3RoID4gMTI4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHt0aXRsZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMTI1KX0uLi5gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9ibG9nXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGJsb2cgcG9zdHNcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gaGVhZGVyID4gZGl2LmNvbnRhaW5lci5wbGF5ZXIgPiBkaXYuY29sLXhzLWhpZGRlbi5jb2wtbWQtdmlzaWJsZS5nbG9iYWwtc2VhcmNoID4gZm9ybSA+IGlucHV0W3R5cGU9dGV4dF1cIik7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3I6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VhcmNoLnZhbHVlO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgaG9tZXBhZ2VcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJzaG9wLm1vbnN0ZXJjYXQuY29tXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wcm9kdWN0cy9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTaG9wIC0gVmlld2luZyBwcm9kdWN0OlwiO1xuICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3QtZGVzY3JpcHRpb24gPiBkaXY6bnRoLWNoaWxkKDEpID4gaDFcIik7XG4gICAgICAgICAgICBpZiAodGl0bGUudGV4dENvbnRlbnQubGVuZ3RoID4gMTI4KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dGl0bGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIDEyNSl9Li4uYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jb2xsZWN0aW9ucy9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTaG9wIC0gVmlld2luZyBjb2xsZWN0aW9uOlwiO1xuICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbGxlY3Rpb24tZGVzY3JpcHRpb24gPiBoMVwiKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NhcnRcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2hvcCAtIFZpZXdpbmcgY2FydFwiO1xuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBzdG9yZSBmcm9udFwiO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4SlFVRkpMRWxCUVc5RExFVkJRM1pETEV0QlFYRkRMRVZCUTNKRExFMUJRWE5ETEVWQlEzUkRMRTlCUVdkQ0xFVkJRMmhDTEUxQlFXVXNSVUZEWml4UlFVRnBSQ3hGUVVOcVJDeFRRVUY1UXl4RFFVRkRPMEZCUlRORExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZGYWtJc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJ4RExHRkJRV0VzUlVGRFdpeHBSVUZCYVVVN1MwRkRiRVVzUTBGQlF6dEpRVVZHTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzYjBKQlFXOUNMRVZCUVVVN1VVRkRlRVFzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGREwwTXNVVUZCVVN4SFFVRkpMRkZCUVRaQ0xFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVODdZVUZEY2tRc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTTdZVUZEZEVJc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhKUVVGSkxGTkJRVk1zUzBGQlN5eFJRVUZSTEVsQlFVa3NVVUZCVVN4TFFVRkxMRWRCUVVjc1NVRkJTU3hSUVVGUkxFdEJRVXNzUzBGQlN5eEZRVUZGTzFsQlEzSkZMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRFppeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUTJRN1lVRkJUU3hKUVVGSkxGRkJRVkVzUzBGQlN5eEhRVUZITEVsQlFVa3NVVUZCVVN4TFFVRkxMRXRCUVVzc1JVRkJSVHRaUVVOc1JDeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMWxCUTJoQ0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZEWkR0aFFVRk5PMWxCUTA0c1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF6dFpRVU55UWl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRMllzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTm1PMUZCUlVRc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVWb1F5eEpRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRWxCUVVrc1RVRkJUU3hMUVVGTExFdEJRVXNzUlVGQlJUdFpRVU42UXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNkMFpCUVhkR0xFTkJRM2hHTEVOQlFVTTdXVUZEUml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSkxFdEJRWEZDTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUXpGRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4UlFVRlJMR05CUVdNc1EwRkJRenRaUVVNdlF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4cFJFRkJZeXhEUVVGRE8xbEJRM3BETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRM2hETzJGQlFVMHNTVUZCU1N4UFFVRlBMRXRCUVVzc1NVRkJTU3hKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZETDBNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6ZENMSGRHUVVGM1JpeERRVU40Uml4RFFVRkRPMWxCUTBZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlNTeExRVUZ4UWl4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVNeFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1VVRkJVU3hqUVVGakxFTkJRVU03V1VGREwwTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2EwUkJRV1VzUTBGQlF6dFpRVU14UXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExGRkJRVkVzUTBGQlF6dFRRVU4yUXp0aFFVRk5PMWxCUlU0c1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRaUVVOb1JDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0blFrRkRja1FzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpkQ0xHMUZRVUZ0UlN4RFFVTnVSU3hEUVVGRE8yZENRVU5HTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNMVFpeHRSVUZCYlVVc1EwRkRia1VzUTBGQlF6dG5Ra0ZEUml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMmRDUVVNeFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVrc1MwRkJjVUlzUTBGQlF5eFhRVUZYTEU5QlEzaEVMRWxCUVc5Q0xFTkJRVU1zVjBGRGRrSXNSVUZCUlN4RFFVRkRPMkZCUTBnN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdaMEpCUXpORUxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTFRaXgxUlVGQmRVVXNRMEZEZGtVc1EwRkJRenRuUWtGRFJpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzJkQ1FVTjZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZKTEVsQlFXOUNMRU5CUVVNc1YwRkJWeXhEUVVGRE8yRkJRM1pFTzJsQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJRenRuUWtGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcwUWtGQk5FSXNRMEZCUXp0cFFrRkRhRVFzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETzJkQ1FVTjBSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdGQlFXRXNRMEZCUXp0cFFrRkRha01zU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETzJkQ1FVTjJSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8ybENRVU55UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNN1owSkJRM1pFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdhVUpCUTNKRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTzJkQ1FVTXpSQ3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3eVFrRkJNa0lzUTBGQlF5eERRVUZETzJkQ1FVTTFSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yZENRVU16UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSkxFdEJRWEZDTEVOQlFVTXNWMEZCVnl4RFFVRkRPMkZCUTNoRU8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXp0blFrRkRNMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4NVFrRkJlVUlzUTBGQlF6dHBRa0ZETjBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRE8yZENRVU4wUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRPMmxDUVVOd1F5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0blFrRkRlRVFzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpkQ0xEQklRVUV3U0N4RFFVTXhTQ3hEUVVGRE8yZENRVU5HTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdaMEpCUXpsRExFbEJRVXNzUzBGQmNVSXNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUlVGQlJUdHZRa0ZEY0VRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZKTEV0QlFYRkNMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGRGJrVXNRMEZCUXl4RlFVTkVMRWRCUVVjc1EwRkRTQ3hMUVVGTExFTkJRVU03YVVKQlExQTdPMjlDUVVGTkxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVa3NTMEZCY1VJc1EwRkJReXhYUVVGWExFTkJRVU03WjBKQlJTOUVMRmxCUVZrc1EwRkJReXhoUVVGaExHOUVRVUZwUWl4RFFVRkRPMkZCUXpWRE8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXp0blFrRkROVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dHBRa0ZEZUVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8yZENRVU53UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dHBRa0ZEYmtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8yZENRVU53UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMmxDUVVNM1F5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTTdaMEpCUTNaRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU03YVVKQlF6TkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHR2UWtGRGJFUXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdiMEpCUXk5RExFdEJRVXNzUjBGQlNTeExRVUZ4UWl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRMnBFTEhGQ1FVRnhRaXhGUVVOeVFpeEZRVUZGTEVOQlEwWXNRMEZCUXp0dlFrRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8yOUNRVU0zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dHBRa0ZETTBJN2NVSkJRVTA3YjBKQlEwNHNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRemRDTEhsRVFVRjVSQ3hEUVVONlJDeERRVUZETzI5Q1FVTkdMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2IwSkJRekZETEVsQlFVc3NTMEZCY1VJc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlR0M1FrRkRjRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVTndRaXhMUVVOQkxFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dHhRa0ZEY2tNN08zZENRVUZOTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVrc1MwRkJjVUlzUTBGQlF5eFhRVUZYTEVOQlFVTTdiMEpCUlM5RUxGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8ybENRVU0xUXp0aFFVTkVPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF6dG5Ra0ZEZEVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRwUWtGRGVFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1owSkJRM2hFTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNNVFpeHBTRUZCYVVnc1EwRkRha2dzUTBGQlF6dG5Ra0ZEUml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRPMmRDUVVONFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkpMRTFCUVRKQ0xFTkJRVU1zUzBGQlN5eERRVUZETzJkQ1FVTjRSQ3haUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRoUVVNelF6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEVkQlFVYzdaMEpCUXpWRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03VTBGRE0wTTdTMEZEUkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NjVUpCUVhGQ0xFVkJRVVU3VVVGRGFFVXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0UlFVTm9SQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJUdFpRVU4wUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMWxCUTJwRUxFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTNRaXc0UTBGQk9FTXNRMEZET1VNc1EwRkJRenRaUVVOR0xFbEJRVXNzUzBGQmNVSXNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUlVGQlJUdG5Ra0ZEY0VRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZKTEV0QlFYRkNMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGRGJrVXNRMEZCUXl4RlFVTkVMRWRCUVVjc1EwRkRTQ3hMUVVGTExFTkJRVU03WVVGRFVEczdaMEpCUVUwc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlNTeExRVUZ4UWl4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVNdlJEdGhRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMWxCUTJoRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NORUpCUVRSQ0xFTkJRVU03V1VGRGNFUXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRaUVVNdlJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkpMRXRCUVhGQ0xFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlEzaEVPMkZCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8xbEJRM1JFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdZVUZEZWtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNTMEZCU3l4SFFVRkhPMWxCUXpGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03UzBGRE9VTTdTVUZGUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenM3VVVGRGVFUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInVzZXIiLCJ0aXRsZSIsInNlYXJjaCIsInBsYXlpbmciLCJwYXVzZWQiLCJwcm9ncmVzcyIsImxhc3RTdGF0ZSIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiY3NzVGV4dCIsInJlcGxhY2UiLCJOdW1iZXIiLCJyb3VuZCIsImRldGFpbHMiLCJ0ZXh0Q29udGVudCIsInN0YXRlIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwidmFsdWUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;