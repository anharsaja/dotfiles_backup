var __webpack_exports__={};const presence=new Presence({clientId:"626462884649500686"}),browsingTimestamp=Math.floor(Date.now()/1e3);let user,search,title;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/MinecraftForge/assets/logo.png",startTimestamp:browsingTimestamp};switch(document.location.hostname){case"www.minecraftforge.net":document.location.pathname.includes("/topic/")?(title=document.querySelector("body > main > div.sidebar-wrapper-content > div.ipsPageHeader.ipsClearfix > div.ipsPhotoPanel.ipsPhotoPanel_small.ipsPhotoPanel_notPhone.ipsClearfix > div > h1 > span > span"),e.details="Forums, viewing thread:",title.textContent.length>128?e.state=`${title.textContent.substring(0,125)}...`:e.state=title.textContent,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/search/")?(search=document.querySelector("body > main > div > div:nth-child(2) > div.ipsResponsive_hidePhone.ipsResponsive_block.ipsPageHeader > p"),e.details="Forums, searching for:",[e.state]=search.textContent.split("'"),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",presence.setActivity(e)):document.location.pathname.includes("/profile/")?(user=document.querySelector("#elProfileHeader > div.ipsColumns.ipsColumns_collapsePhone > div.ipsColumn.ipsColumn_fluid > div > h1"),e.details="Forums, viewing user:",e.state=user.textContent,delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/online/")?(e.details="Forums, viewing list of:",e.state="all online users",delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/staff/")?(e.details="Forums, viewing list of:",e.state="all staff members",delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/forum/")?(title=document.querySelector("body > main > div.sidebar-wrapper-content > div.forum-header > div:nth-child(1) > h1"),title?(e.details="Forums, viewing category:",e.state=title.textContent,delete e.smallImageKey,presence.setActivity(e)):(e.details="Forums, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e))):presence.setActivity();break;case"files.minecraftforge.net":title=document.querySelector("body > main > div.sidebar-sticky-wrapper-content > div.promos-wrapper > div.promos-content > h1"),title?(e.details="Files, viewing Forge for:",e.state=title.textContent.replace("Downloads for Minecraft Forge - ",""),delete e.smallImageKey,presence.setActivity(e)):(e.details="Files, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e));break;case"mcforge.readthedocs.io":title=document.querySelector("body > main > div.sidebar-sticky-wrapper-content > article > h1"),e.details="Docs, reading:",e.state=title.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",presence.setActivity(e);break;case"forgedev.flocker.tv":document.location.pathname.includes("/cart")?(e.details="Merch, viewing:",e.state="Shopping Cart",delete e.smallImageKey,presence.setActivity(e)):document.location.pathname.includes("/products/")?(title=document.querySelector("body > div:nth-child(18) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div.creatorhub__product-modal-content > div > div.creatorhub__product-modal-title-wrapper > h1"),e.details="Merch, viewing:",e.state=title.textContent,delete e.smallImageKey,presence.setActivity(e)):(e.details="Merch, Browsing...",delete e.state,delete e.smallImageKey,presence.setActivity(e));break;default:presence.setActivity()}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTNEIsWUFBWWYsSUFFekIsTUFFSixRQUNJYixTQUFTNEIsY0FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjI2NDYyODg0NjQ5NTAwNjg2XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCB1c2VyLCBzZWFyY2gsIHRpdGxlO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9NL01pbmVjcmFmdEZvcmdlL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lKSB7XG4gICAgICAgIGNhc2UgXCJ3d3cubWluZWNyYWZ0Zm9yZ2UubmV0XCI6IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi90b3BpYy9cIikpIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5zaWRlYmFyLXdyYXBwZXItY29udGVudCA+IGRpdi5pcHNQYWdlSGVhZGVyLmlwc0NsZWFyZml4ID4gZGl2Lmlwc1Bob3RvUGFuZWwuaXBzUGhvdG9QYW5lbF9zbWFsbC5pcHNQaG90b1BhbmVsX25vdFBob25lLmlwc0NsZWFyZml4ID4gZGl2ID4gaDEgPiBzcGFuID4gc3BhblwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIHRocmVhZDpcIjtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUudGV4dENvbnRlbnQubGVuZ3RoID4gMTI4KVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHt0aXRsZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMTI1KX0uLi5gO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9zZWFyY2gvXCIpKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBtYWluID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdi5pcHNSZXNwb25zaXZlX2hpZGVQaG9uZS5pcHNSZXNwb25zaXZlX2Jsb2NrLmlwc1BhZ2VIZWFkZXIgPiBwXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGb3J1bXMsIHNlYXJjaGluZyBmb3I6XCI7XG4gICAgICAgICAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGF0ZV0gPSBzZWFyY2gudGV4dENvbnRlbnQuc3BsaXQoXCInXCIpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3Byb2ZpbGUvXCIpKSB7XG4gICAgICAgICAgICAgICAgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWxQcm9maWxlSGVhZGVyID4gZGl2Lmlwc0NvbHVtbnMuaXBzQ29sdW1uc19jb2xsYXBzZVBob25lID4gZGl2Lmlwc0NvbHVtbi5pcHNDb2x1bW5fZmx1aWQgPiBkaXYgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIHVzZXI6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdXNlci50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL29ubGluZS9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIGxpc3Qgb2Y6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJhbGwgb25saW5lIHVzZXJzXCI7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9zdGFmZi9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIGxpc3Qgb2Y6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJhbGwgc3RhZmYgbWVtYmVyc1wiO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZm9ydW0vXCIpKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYuc2lkZWJhci13cmFwcGVyLWNvbnRlbnQgPiBkaXYuZm9ydW0taGVhZGVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGgxXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRm9ydW1zLCB2aWV3aW5nIGNhdGVnb3J5OlwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZvcnVtcywgQnJvd3NpbmcuLi5cIjtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImZpbGVzLm1pbmVjcmFmdGZvcmdlLm5ldFwiOiB7XG4gICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5zaWRlYmFyLXN0aWNreS13cmFwcGVyLWNvbnRlbnQgPiBkaXYucHJvbW9zLXdyYXBwZXIgPiBkaXYucHJvbW9zLWNvbnRlbnQgPiBoMVwiKTtcbiAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJGaWxlcywgdmlld2luZyBGb3JnZSBmb3I6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQucmVwbGFjZShcIkRvd25sb2FkcyBmb3IgTWluZWNyYWZ0IEZvcmdlIC0gXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkZpbGVzLCBCcm93c2luZy4uLlwiO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwibWNmb3JnZS5yZWFkdGhlZG9jcy5pb1wiOiB7XG4gICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5zaWRlYmFyLXN0aWNreS13cmFwcGVyLWNvbnRlbnQgPiBhcnRpY2xlID4gaDFcIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRG9jcywgcmVhZGluZzpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImZvcmdlZGV2LmZsb2NrZXIudHZcIjoge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NhcnRcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWVyY2gsIHZpZXdpbmc6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTaG9wcGluZyBDYXJ0XCI7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wcm9kdWN0cy9cIikpIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2Om50aC1jaGlsZCgxOCkgPiBkaXYgPiBkaXYuYW50LW1vZGFsLXdyYXAuYW50LW1vZGFsLWNlbnRlcmVkID4gZGl2ID4gZGl2LmFudC1tb2RhbC1jb250ZW50ID4gZGl2LmFudC1tb2RhbC1ib2R5ID4gZGl2LmNyZWF0b3JodWJfX3Byb2R1Y3QtbW9kYWwtY29udGVudCA+IGRpdiA+IGRpdi5jcmVhdG9yaHViX19wcm9kdWN0LW1vZGFsLXRpdGxlLXdyYXBwZXIgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWVyY2gsIHZpZXdpbmc6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWVyY2gsIEJyb3dzaW5nLi4uXCI7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEVsQlFXOURMRVZCUTNaRExFMUJRWE5ETEVWQlEzUkRMRXRCUVhGRExFTkJRVU03UVVGRmRrTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEyeERMR0ZCUVdFc1JVRkRXaXh4UlVGQmNVVTdVVUZEZEVVc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhEUVVGRE8wbEJSVVlzVVVGQlVTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSVHRSUVVOdVF5eExRVUZMTEhkQ1FVRjNRaXhEUVVGRExFTkJRVU03V1VGRE9VSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1owSkJRMjVFTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNM1Fpd3JTMEZCSzBzc1EwRkRMMHNzUTBGQlF6dG5Ra0ZGUml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMmRDUVVOcVJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWM3YjBKQlEycERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXpzN2IwSkJRemRFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF6dG5Ra0ZGTlVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzJkQ1FVTnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMkZCUTI1RE8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMmRDUVVNelJDeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRPVUlzTUVkQlFUQkhMRU5CUXpGSExFTkJRVU03WjBKQlEwWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0blFrRkRhRVFzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJSWEpFTEZsQlFWa3NRMEZCUXl4aFFVRmhMRzFFUVVGblFpeERRVUZETzJkQ1FVVXpReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMkZCUTI1RE8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMmRDUVVNMVJDeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROVUlzZFVkQlFYVkhMRU5CUTNaSExFTkJRVU03WjBKQlEwWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0blFrRkRMME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVVYwUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU03WjBKQlJXeERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdZVUZEYmtNN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVTdaMEpCUXpORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03WjBKQlEyeEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1owSkJSWGhETEU5QlFVOHNXVUZCV1N4RFFVRkRMR0ZCUVdFc1EwRkJRenRuUWtGRmJFTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dGhRVU51UXp0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdG5Ra0ZETVVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRuUWtGRGJFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0blFrRkZla01zVDBGQlR5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RFFVRkRPMmRDUVVWc1F5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8yRkJRMjVETzJsQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8yZENRVU14UkN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNjMFpCUVhOR0xFTkJRM1JHTEVOQlFVTTdaMEpCUTBZc1NVRkJTU3hMUVVGTExFVkJRVVU3YjBKQlExWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0dlFrRkRia1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRE8yOUNRVVYyUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU03YjBKQlJXeERMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdhVUpCUTI1RE8zRkNRVUZOTzI5Q1FVTk9MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN2IwSkJRemRETEU5QlFVOHNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJRenR2UWtGRk1VSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRE8yOUNRVVZzUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJsQ1FVTnVRenRoUVVORU96dG5Ra0ZCVFN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRk9VSXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXd3UWtGQk1FSXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTNRaXhwUjBGQmFVY3NRMEZEYWtjc1EwRkJRenRaUVVOR0xFbEJRVWtzUzBGQlN5eEZRVUZGTzJkQ1FVTldMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTWtKQlFUSkNMRU5CUVVNN1owSkJRMjVFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlF6ZERMR3REUVVGclF5eEZRVU5zUXl4RlFVRkZMRU5CUTBZc1EwRkJRenRuUWtGRlJpeFBRVUZQTEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1owSkJSV3hETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03WVVGRGJrTTdhVUpCUVUwN1owSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dG5Ra0ZETlVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETzJkQ1FVVXhRaXhQUVVGUExGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTTdaMEpCUld4RExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1lVRkRia003V1VGRlJDeE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMSGRDUVVGM1FpeERRVUZETEVOQlFVTTdXVUZET1VJc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6ZENMR2xGUVVGcFJTeERRVU5xUlN4RFFVRkRPMWxCUTBZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRaUVVONFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRmRrTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdXVUZGTlVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0WlFVVnVReXhOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03V1VGRE0wSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1owSkJRMnBFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdaMEpCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NaVUZCWlN4RFFVRkRPMmRDUVVWeVF5eFBRVUZQTEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1owSkJSV3hETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03WVVGRGJrTTdhVUpCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFVkJRVVU3WjBKQlF6ZEVMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0zUWl3MFRrRkJORTRzUTBGRE5VNHNRMEZCUXp0blFrRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8yZENRVU42UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdaMEpCUlhaRExFOUJRVThzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXp0blFrRkZiRU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRoUVVOdVF6dHBRa0ZCVFR0blFrRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE8yZENRVU0xUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU03WjBKQlJURkNMRTlCUVU4c1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF6dG5Ra0ZGYkVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTnVRenRaUVVWRUxFMUJRVTA3VTBGRFRqdFJRVU5FTzFsQlEwTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wdEJRM2hDTzBGQlEwWXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwidXNlciIsInNlYXJjaCIsInRpdGxlIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJxdWVyeVNlbGVjdG9yIiwiZGV0YWlscyIsInRleHRDb250ZW50IiwibGVuZ3RoIiwic3RhdGUiLCJzdWJzdHJpbmciLCJzbWFsbEltYWdlS2V5Iiwic2V0QWN0aXZpdHkiLCJzcGxpdCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9
undefined;