var __webpack_exports__={};const presence=new Presence({clientId:"798312419260104705"}),browsingTimestamp=Math.floor(Date.now()/1e3);let user,search,title;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/PERPHeads/assets/logo.png",startTimestamp:browsingTimestamp};"perpheads.com"===document.location.hostname&&(title=document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1")),document.location.pathname.includes("/threads/")?(title=document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"),title?(title=document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"),e.state=title.textContent,e.details="Forums, viewing thread:",delete e.smallImageKey,presence.setActivity(e)):(e.details="Forums, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e))):document.location.pathname.includes("/forums/")?(title=document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"),title?(title=document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"),e.state=title.textContent,e.details="Forums, viewing category:",delete e.smallImageKey,presence.setActivity(e)):(e.details="Forums, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e))):document.location.pathname.includes("/whats-new/")&&document.location.pathname.includes("/profile-posts/")?(e.details="Forums, viewing the list of",e.state="latest profile posts",delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/whats-new/")&&document.location.pathname.includes("/posts/")?(e.details="Forums, viewing the list of",e.state="latest posts",delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/search/")?(search=document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1 > a > em"),search&&(e.details="Forums, searching for:",e.state=search.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",presence.setActivity(e))):document.location.pathname.includes("/members/")?(user=document.querySelector("div.p-body-content > div.block > div.block-container > div.block-body > div.memberHeader > div.memberProfileBanner > div.memberHeader-mainContent > div.memberHeader-content > h1 > span > span > span > span"),e.details="Forums, viewing user:",e.state=user.textContent,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/account/")?(e.details="Forums, account settings",delete e.state,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/watched/")?document.location.pathname.includes("/threads")?(e.details="Forums, Viewing their",e.state="watched threads",delete e.smallImageKey,presence.setActivity(e)):(e.details="Forums, Viewing their",e.state="watched forums",delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/conversations/")?document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1")?(title=document.querySelector("div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"),e.state=title.textContent,e.details="Forums, Reading a DM",e.state=`${title}...`,delete e.smallImageKey,presence.setActivity(e)):(e.details="Forums, Browsing",e.state="through DMs",delete e.smallImageKey,presence.setActivity(e)):"help.perpheads.com"===document.location.hostname?(e.details="PERPHeads Help",delete e.state,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/pages/")&&document.location.pathname.includes("/donate/")?(e.details="PERPHeads Donate",delete e.state,delete e.smallImageKey,presence.setActivity(e)):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTMEIsWUFBWWIsSUFHVyx1QkFBL0JHLFNBQVNDLFNBQVNDLFVBQ3ZCTCxFQUFhVyxRQUFVLHdCQUNoQlgsRUFBYVMsYUFDYlQsRUFBYVksY0FDcEJ6QixTQUFTMEIsWUFBWWIsSUFFaEJHLFNBQVNDLFNBQVNHLFNBQVNDLFNBQVMsWUFDekNMLFNBQVNDLFNBQVNHLFNBQVNDLFNBQVMsYUFDcENSLEVBQWFXLFFBQVUsMEJBQ2hCWCxFQUFhUyxhQUNiVCxFQUFhWSxjQUNwQnpCLFNBQVMwQixZQUFZYixJQUdyQmIsU0FBUzBCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzk4MzEyNDE5MjYwMTA0NzA1XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCB1c2VyLCBzZWFyY2gsIHRpdGxlO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL1BFUlBIZWFkcy9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcInBlcnBoZWFkcy5jb21cIikge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYucC1ib2R5ID4gZGl2LnAtYm9keS1pbm5lciA+IGRpdi5wLWJvZHktaGVhZGVyID4gZGl2LnAtdGl0bGUgPiBoMVwiKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RocmVhZHMvXCIpKSB7XG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5wLWJvZHkgPiBkaXYucC1ib2R5LWlubmVyID4gZGl2LnAtYm9keS1oZWFkZXIgPiBkaXYucC10aXRsZSA+IGgxXCIpO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5wLWJvZHkgPiBkaXYucC1ib2R5LWlubmVyID4gZGl2LnAtYm9keS1oZWFkZXIgPiBkaXYucC10aXRsZSA+IGgxXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIHRocmVhZDpcIjtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCBCcm93c2luZy4uLlwiO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZm9ydW1zL1wiKSkge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYucC1ib2R5ID4gZGl2LnAtYm9keS1pbm5lciA+IGRpdi5wLWJvZHktaGVhZGVyID4gZGl2LnAtdGl0bGUgPiBoMVwiKTtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYucC1ib2R5ID4gZGl2LnAtYm9keS1pbm5lciA+IGRpdi5wLWJvZHktaGVhZGVyID4gZGl2LnAtdGl0bGUgPiBoMVwiKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZvcnVtcywgdmlld2luZyBjYXRlZ29yeTpcIjtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCBCcm93c2luZy4uLlwiO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvd2hhdHMtbmV3L1wiKSAmJlxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wcm9maWxlLXBvc3RzL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIHRoZSBsaXN0IG9mXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwibGF0ZXN0IHByb2ZpbGUgcG9zdHNcIjtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi93aGF0cy1uZXcvXCIpICYmXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3Bvc3RzL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIHRoZSBsaXN0IG9mXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwibGF0ZXN0IHBvc3RzXCI7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvc2VhcmNoL1wiKSkge1xuICAgICAgICBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnAtYm9keSA+IGRpdi5wLWJvZHktaW5uZXIgPiBkaXYucC1ib2R5LWhlYWRlciA+IGRpdi5wLXRpdGxlID4gaDEgPiBhID4gZW1cIik7XG4gICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGb3J1bXMsIHNlYXJjaGluZyBmb3I6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzZWFyY2gudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9tZW1iZXJzL1wiKSkge1xuICAgICAgICB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5wLWJvZHktY29udGVudCA+IGRpdi5ibG9jayA+IGRpdi5ibG9jay1jb250YWluZXIgPiBkaXYuYmxvY2stYm9keSA+IGRpdi5tZW1iZXJIZWFkZXIgPiBkaXYubWVtYmVyUHJvZmlsZUJhbm5lciA+IGRpdi5tZW1iZXJIZWFkZXItbWFpbkNvbnRlbnQgPiBkaXYubWVtYmVySGVhZGVyLWNvbnRlbnQgPiBoMSA+IHNwYW4gPiBzcGFuID4gc3BhbiA+IHNwYW5cIik7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGb3J1bXMsIHZpZXdpbmcgdXNlcjpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdXNlci50ZXh0Q29udGVudDtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9hY2NvdW50L1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCBhY2NvdW50IHNldHRpbmdzXCI7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvd2F0Y2hlZC9cIikpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RocmVhZHNcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGb3J1bXMsIFZpZXdpbmcgdGhlaXJcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwid2F0Y2hlZCB0aHJlYWRzXCI7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZvcnVtcywgVmlld2luZyB0aGVpclwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJ3YXRjaGVkIGZvcnVtc1wiO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jb252ZXJzYXRpb25zL1wiKSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5wLWJvZHkgPiBkaXYucC1ib2R5LWlubmVyID4gZGl2LnAtYm9keS1oZWFkZXIgPiBkaXYucC10aXRsZSA+IGgxXCIpKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYucC1ib2R5ID4gZGl2LnAtYm9keS1pbm5lciA+IGRpdi5wLWJvZHktaGVhZGVyID4gZGl2LnAtdGl0bGUgPiBoMVwiKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZvcnVtcywgUmVhZGluZyBhIERNXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHt0aXRsZX0uLi5gO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGb3J1bXMsIEJyb3dzaW5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcInRocm91Z2ggRE1zXCI7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcImhlbHAucGVycGhlYWRzLmNvbVwiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJQRVJQSGVhZHMgSGVscFwiO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3BhZ2VzL1wiKSAmJlxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9kb25hdGUvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJQRVJQSGVhZHMgRG9uYXRlXCI7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4SlFVRkpMRWxCUVdsQ0xFVkJRVVVzVFVGQmJVSXNSVUZCUlN4TFFVRnJRaXhEUVVGRE8wRkJSUzlFTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5zUXl4aFFVRmhMRVZCUTFvc1owVkJRV2RGTzFGQlEycEZMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdTMEZEYWtNc1EwRkJRenRKUVVOR0xFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRXRCUVVzc1pVRkJaU3hGUVVGRk8xRkJRMjVFTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNM1FpeHpSVUZCYzBVc1EwRkRkRVVzUTBGQlF6dExRVU5HTzBsQlEwUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1VVRkRja1FzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpkQ0xITkZRVUZ6UlN4RFFVTjBSU3hEUVVGRE8xRkJRMFlzU1VGQlNTeExRVUZMTEVWQlFVVTdXVUZEVml4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNjMFZCUVhORkxFTkJRM1JGTEVOQlFVTTdXVUZEUml4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEZGtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJRenRaUVVWcVJDeFBRVUZQTEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1dVRkRiRU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVOdVF6dGhRVUZOTzFsQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0WlFVTTNReXhQUVVGUExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZETVVJc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlEyeERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVMEZEYmtNN1MwRkRSRHRUUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzFGQlF6TkVMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0zUWl4elJVRkJjMFVzUTBGRGRFVXNRMEZCUXp0UlFVTkdMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMVlzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpkQ0xITkZRVUZ6UlN4RFFVTjBSU3hEUVVGRE8xbEJRMFlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRM1pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01rSkJRVEpDTEVOQlFVTTdXVUZGYmtRc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlEyeERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVMEZEYmtNN1lVRkJUVHRaUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03V1VGRE4wTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRekZDTEU5QlFVOHNXVUZCV1N4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVOc1F5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRMjVETzB0QlEwUTdVMEZCVFN4SlFVTk9MRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNN1VVRkRiRVFzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRVZCUTNKRU8xRkJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3MlFrRkJOa0lzUTBGQlF6dFJRVU55UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMUZCUXpWRExFOUJRVThzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVVnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMHRCUTI1RE8xTkJRVTBzU1VGRFRpeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETzFGQlEyeEVMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkROME03VVVGRFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFpDUVVFMlFpeERRVUZETzFGQlEzSkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWTBGQll5eERRVUZETzFGQlJYQkRMRTlCUVU4c1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF6dFJRVVZzUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzB0QlEyNURPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3VVVGRE0wUXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRemxDTEN0RlFVRXJSU3hEUVVNdlJTeERRVUZETzFGQlEwWXNTVUZCU1N4TlFVRk5MRVZCUVVVN1dVRkRXQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xbEJRMmhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVVY0UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h0UkVGQlowSXNRMEZCUXp0WlFVVXpReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMU5CUTI1RE8wdEJRMFE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0UlFVTTFSQ3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETlVJc0swMUJRU3ROTEVOQlF5OU5MRU5CUVVNN1VVRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xRkJReTlETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVVYwUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU03VVVGRmJFTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dExRVU51UXp0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xRkJRelZFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTTdVVUZEYkVRc1QwRkJUeXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlJURkNMRTlCUVU4c1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF6dFJRVVZzUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzB0QlEyNURPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3VVVGRE5VUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1dVRkRjRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4MVFrRkJkVUlzUTBGQlF6dFpRVU12UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMWxCUlhaRExFOUJRVThzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVVnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMU5CUTI1RE8yRkJRVTA3V1VGRFRpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzFsQlF5OURMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1dVRkZkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUld4RExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1UwRkRia003UzBGRFJEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFVkJRVVU3VVVGRGJFVXNTVUZEUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpeHpSVUZCYzBVc1EwRkRkRVVzUlVGRFFUdFpRVU5FTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNM1FpeHpSVUZCYzBVc1EwRkRkRVVzUTBGQlF6dFpRVU5HTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU4yUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMWxCUXpsRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4TFFVRkxMRXRCUVVzc1EwRkJRenRaUVVWdVF5eFBRVUZQTEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1dVRkZiRU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRUUVVOdVF6dGhRVUZOTzFsQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0WlFVTXhReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlFXRXNRMEZCUXp0WlFVVnVReXhQUVVGUExGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZGYkVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0VFFVTnVRenRMUVVORU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1MwRkJTeXh2UWtGQmIwSXNSVUZCUlR0UlFVTXZSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRM2hETEU5QlFVOHNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVVeFFpeFBRVUZQTEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1VVRkZiRU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRMUVVOdVF6dFRRVUZOTEVsQlEwNHNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTTVReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRemxETzFGQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0UlFVTXhReXhQUVVGUExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGTVVJc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzFGQlJXeERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTMEZEYmtNN08xRkJRVTBzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXk5Q0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ1c2VyIiwic2VhcmNoIiwidGl0bGUiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwicXVlcnlTZWxlY3RvciIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJzdGF0ZSIsInRleHRDb250ZW50IiwiZGV0YWlscyIsInNtYWxsSW1hZ2VLZXkiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;