var __webpack_exports__={};const presence=new Presence({clientId:"611544256758153225"});presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/Derpibooru/assets/logo.png"};"/"===document.location.pathname?t.details="Viewing the homepage":document.location.pathname.startsWith("/users/sign_in")?t.details="Logging in":document.location.pathname.startsWith("/users/sign_up")?t.details="Registering":document.location.pathname.startsWith("/store")?t.details="Browsing through the store":document.location.pathname.startsWith("/rankings")?t.details="Browsing through the rankings":document.location.pathname.startsWith("/settings")?t.details="Editing settings":document.location.pathname.startsWith("/galleries")?t.details="Browsing through the Gallerie":document.location.pathname.startsWith("/commissions")?t.details="Browsing through commissions":document.location.pathname.startsWith("/channels")?t.details="Browsing through livestreams":document.location.pathname.startsWith("/tags/ratings")?t.details="Browsing through the tag ratings":document.location.pathname.startsWith("/pages/tags")?t.details="Looking at the tag guide":document.location.pathname.startsWith("/tags/aliases")?t.details="Going through the tag aliases":"/art"===document.location.pathname?t.details="Browsing through art chats":document.location.pathname.startsWith("/art/")?(t.details="Reading the post:",t.state=document.querySelector(".layout--narrow h1").textContent):document.location.pathname.startsWith("/writing")?t.details="Browsing through Fanfictions":"/dis"===document.location.pathname?t.details="Browsing through Discussions":document.location.pathname.startsWith("/dis/")?(t.details="Reading the general discussion:",t.state=document.querySelector(".layout--narrow h1").textContent):"/generals"===document.location.pathname?t.details="Looking at general posts":document.location.pathname.startsWith("/generals/")?t.details="test <work in progress>":"/pony"===document.location.pathname?t.details="Browsing through pony discussion":document.location.pathname.startsWith("/pony/")?(t.details="Reading the pony discussion:",t.state=document.querySelector(".layout--narrow h1").textContent):"/rp"===document.location.pathname?t.details="Browsing through rp's":document.location.pathname.startsWith("/rp/")?(t.details="Reading the rp chat:",t.state=document.querySelector(".layout--narrow h1").textContent):"/meta"===document.location.pathname?t.details="Browsing through the website policy":document.location.pathname.startsWith("/meta/")?(t.details="Reading the information post:",t.state=document.querySelector(".layout--narrow h1").textContent):"/tagging"===document.location.pathname?t.details="Browsing through tagging discussions":document.location.pathname.startsWith("/tagging/")?(t.details="Reading the tagging discussion:",t.state=document.querySelector(".layout--narrow h1").textContent):"/uppers"===document.location.pathname?t.details="Browsing through uploader discussions":document.location.pathname.startsWith("/uppers/")?(t.details="Reading the uploader discussion:",t.state=document.querySelector(".layout--narrow h1").textContent):"/forums"===document.location.pathname?t.details="Browsing through the forum":document.location.pathname.startsWith("/forums")?(t.details="Reading the forum post:",t.state=document.querySelector(".layout--narrow h1").textContent):document.location.pathname.startsWith("/activity")?t.details="Browsing recently uploaded pictures":document.location.pathname.startsWith("/lists")?t.details="Browsing through top scores":document.location.pathname.startsWith("/posts")?t.details="Browsing through global posts":document.location.pathname.startsWith("/search")?t.details="Searching something":document.location.pathname.startsWith("/filters")?t.details="Changing their filter settings":document.location.pathname.startsWith("/pages/rules")?t.details="Reading the rules":document.location.pathname.startsWith("/pages/privacy")?t.details="Reading the privacy informations":document.location.pathname.startsWith("/pages/takedowns")?t.details="Reading about takedowns":document.location.pathname.startsWith("/dnp")?t.details="Reading through the Do-Not-Post List":document.location.pathname.startsWith("/changelog")?t.details="Reading the changelog":document.location.pathname.startsWith("/pages/faq")?t.details="Reading the FAQ":document.location.pathname.startsWith("/pages/api")?t.details="Reading about the API":document.location.pathname.startsWith("/pages/shortcuts")?t.details="Reading about the keyboard shortcuts":document.location.pathname.startsWith("/pages/advertising")?t.details="Reading about their advertising":document.location.pathname.startsWith("/pages/onion")?t.details="Reading about onions":document.location.pathname.startsWith("/pages/stats")?t.details="Watching the website stats":document.location.pathname.startsWith("/pages/staff")?t.details="Looking at the staff list":document.location.pathname.startsWith("/images")&&(document.location.pathname.startsWith("/images/new")?t.details="uploading a new picture":t.details="Browsing through all pictures"),presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsNkJBQ2xCSCxTQUFTQyxTQUFTQyxTQUFTRSxXQUFXLGdCQUMzQ04sRUFBYUssUUFBVSw0QkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFdBQVcsYUFDdkNKLFNBQVNDLFNBQVNDLFNBQVNFLFdBQVcsZUFDdENOLEVBQWFLLFFBQVUsMEJBRXZCTCxFQUFhSyxRQUFVLGlDQUUvQlYsU0FBU2UsWUFBWVYsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2MTE1NDQyNTY3NTgxNTMyMjVcIixcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9EL0RlcnBpYm9vcnUvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgaG9tZXBhZ2VcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3VzZXJzL3NpZ25faW5cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb2dnaW5nIGluXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi91c2Vycy9zaWduX3VwXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnaXN0ZXJpbmdcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3N0b3JlXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCB0aGUgc3RvcmVcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3JhbmtpbmdzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCB0aGUgcmFua2luZ3NcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3NldHRpbmdzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRWRpdGluZyBzZXR0aW5nc1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZ2FsbGVyaWVzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCB0aGUgR2FsbGVyaWVcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2NvbW1pc3Npb25zXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCBjb21taXNzaW9uc1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvY2hhbm5lbHNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aHJvdWdoIGxpdmVzdHJlYW1zXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi90YWdzL3JhdGluZ3NcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aHJvdWdoIHRoZSB0YWcgcmF0aW5nc1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcGFnZXMvdGFnc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlIHRhZyBndWlkZVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdGFncy9hbGlhc2VzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiR29pbmcgdGhyb3VnaCB0aGUgdGFnIGFsaWFzZXNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYXJ0XCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aHJvdWdoIGFydCBjaGF0c1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYXJ0L1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgcG9zdDpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXlvdXQtLW5hcnJvdyBoMVwiKS50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi93cml0aW5nXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCBGYW5maWN0aW9uc1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9kaXNcIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRocm91Z2ggRGlzY3Vzc2lvbnNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2Rpcy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIGdlbmVyYWwgZGlzY3Vzc2lvbjpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXlvdXQtLW5hcnJvdyBoMVwiKS50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2dlbmVyYWxzXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIGF0IGdlbmVyYWwgcG9zdHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2dlbmVyYWxzL1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcInRlc3QgPHdvcmsgaW4gcHJvZ3Jlc3M+XCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3BvbnlcIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRocm91Z2ggcG9ueSBkaXNjdXNzaW9uXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wb255L1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgcG9ueSBkaXNjdXNzaW9uOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheW91dC0tbmFycm93IGgxXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvcnBcIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRocm91Z2ggcnAnc1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcnAvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBycCBjaGF0OlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheW91dC0tbmFycm93IGgxXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWV0YVwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCB0aGUgd2Vic2l0ZSBwb2xpY3lcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL21ldGEvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBpbmZvcm1hdGlvbiBwb3N0OlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheW91dC0tbmFycm93IGgxXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvdGFnZ2luZ1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCB0YWdnaW5nIGRpc2N1c3Npb25zXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi90YWdnaW5nL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgdGFnZ2luZyBkaXNjdXNzaW9uOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheW91dC0tbmFycm93IGgxXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvdXBwZXJzXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aHJvdWdoIHVwbG9hZGVyIGRpc2N1c3Npb25zXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi91cHBlcnMvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSB1cGxvYWRlciBkaXNjdXNzaW9uOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheW91dC0tbmFycm93IGgxXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZm9ydW1zXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aHJvdWdoIHRoZSBmb3J1bVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZm9ydW1zXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBmb3J1bSBwb3N0OlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheW91dC0tbmFycm93IGgxXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FjdGl2aXR5XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgcmVjZW50bHkgdXBsb2FkZWQgcGljdHVyZXNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2xpc3RzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgdGhyb3VnaCB0b3Agc2NvcmVzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wb3N0c1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIHRocm91Z2ggZ2xvYmFsIHBvc3RzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9zZWFyY2hcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmcgc29tZXRoaW5nXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9maWx0ZXJzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2hhbmdpbmcgdGhlaXIgZmlsdGVyIHNldHRpbmdzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wYWdlcy9ydWxlc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIHJ1bGVzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wYWdlcy9wcml2YWN5XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgcHJpdmFjeSBpbmZvcm1hdGlvbnNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3BhZ2VzL3Rha2Vkb3duc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYWJvdXQgdGFrZWRvd25zXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9kbnBcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRocm91Z2ggdGhlIERvLU5vdC1Qb3N0IExpc3RcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2NoYW5nZWxvZ1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgdGhlIGNoYW5nZWxvZ1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcGFnZXMvZmFxXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyB0aGUgRkFRXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wYWdlcy9hcGlcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGFib3V0IHRoZSBBUElcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3BhZ2VzL3Nob3J0Y3V0c1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYWJvdXQgdGhlIGtleWJvYXJkIHNob3J0Y3V0c1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcGFnZXMvYWR2ZXJ0aXNpbmdcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGFib3V0IHRoZWlyIGFkdmVydGlzaW5nXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wYWdlcy9vbmlvblwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYWJvdXQgb25pb25zXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wYWdlcy9zdGF0c1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIldhdGNoaW5nIHRoZSB3ZWJzaXRlIHN0YXRzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wYWdlcy9zdGFmZlwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxvb2tpbmcgYXQgdGhlIHN0YWZmIGxpc3RcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2ltYWdlc1wiKSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9pbWFnZXMvbmV3XCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcInVwbG9hZGluZyBhIG5ldyBwaWN0dXJlXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyB0aHJvdWdoIGFsbCBwaWN0dXJlc1wiO1xuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5zUXl4aFFVRmhMRVZCUTFvc2FVVkJRV2xGTzB0QlEyeEZMRU5CUVVNN1NVRkRSaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWRCUVVjN1VVRkRja01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dFRRVU14UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4blFrRkJaMElzUTBGQlF6dFJRVU12UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF6dFRRVU5vUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4blFrRkJaMElzUTBGQlF6dFJRVU12UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzUTBGQlF6dFRRVU5xUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRka1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3MFFrRkJORUlzUTBGQlF6dFRRVU5vUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3clFrRkJLMElzUTBGQlF6dFRRVU51UkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFRRVU4wUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNN1VVRkRNMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3clFrRkJLMElzUTBGQlF6dFRRVU51UkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkROMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3NFFrRkJPRUlzUTBGQlF6dFRRVU5zUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3NFFrRkJPRUlzUTBGQlF6dFRRVU5zUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRmxMRU5CUVVNN1VVRkRPVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clEwRkJhME1zUTBGQlF6dFRRVU4wUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4aFFVRmhMRU5CUVVNN1VVRkROVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF6dFRRVU01UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRmxMRU5CUVVNN1VVRkRPVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3clFrRkJLMElzUTBGQlF6dFRRVU51UkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEUxQlFVMDdVVUZETjBNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzBRa0ZCTkVJc1EwRkJRenRUUVVOb1JDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0UlFVTjRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8xRkJRek5ETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUTJwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRek5ETEVOQlFVTXNWMEZCVnl4RFFVRkRPMHRCUTJRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRE0wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXc0UWtGQk9FSXNRMEZCUXp0VFFVTnNSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRTFCUVUwN1VVRkROME1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3NFFrRkJPRUlzUTBGQlF6dFRRVU5zUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRSUVVONFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xEUVVGcFF5eERRVUZETzFGQlEzcEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwSkJRVzlDTEVOQlF6TkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8wdEJRMlE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExGZEJRVmM3VVVGRGNFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXp0VFFVTTVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU03VVVGRE0wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0VFFVTTNReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRTlCUVU4N1VVRkRPVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clEwRkJhME1zUTBGQlF6dFRRVU4wUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRSUVVONlJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRGhDUVVFNFFpeERRVUZETzFGQlEzUkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwSkJRVzlDTEVOQlF6TkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8wdEJRMlE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExFdEJRVXM3VVVGRE9VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0VFFVTXpReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdFJRVU4yUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMUZCUXpsRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYjBKQlFXOUNMRU5CUXpORExFTkJRVU1zVjBGQlZ5eERRVUZETzB0QlEyUTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEU5QlFVODdVVUZEYUVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRMEZCY1VNc1EwRkJRenRUUVVONlJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTjZSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEN0Q1FVRXJRaXhEUVVGRE8xRkJRM1pFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUTJwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRek5ETEVOQlFVTXNWMEZCVnl4RFFVRkRPMHRCUTJRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRlZCUVZVN1VVRkRia1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elEwRkJjME1zUTBGQlF6dFRRVU14UkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRSUVVNMVJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xEUVVGcFF5eERRVUZETzFGQlEzcEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwSkJRVzlDTEVOQlF6TkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8wdEJRMlE3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExGTkJRVk03VVVGRGJFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUTBGQmRVTXNRMEZCUXp0VFFVTXpSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJUdFJRVU16UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdERRVUZyUXl4RFFVRkRPMUZCUXpGRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYjBKQlFXOUNMRU5CUXpORExFTkJRVU1zVjBGQlZ5eERRVUZETzB0QlEyUTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTTdVVUZEYkVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzBRa0ZCTkVJc1EwRkJRenRUUVVOb1JDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0UlFVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE8xRkJRMnBFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUTJwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRek5ETEVOQlFVTXNWMEZCVnl4RFFVRkRPMHRCUTJRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE5VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UTBGQmNVTXNRMEZCUXp0VFFVTjZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0VFFVTnFSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXdyUWtGQkswSXNRMEZCUXp0VFFVTnVSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGVFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0VFFVTjZReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGVrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0VFFVTndSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRE4wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0VFFVTjJReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhuUWtGQlowSXNRMEZCUXp0UlFVTXZSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0RFFVRnJReXhEUVVGRE8xTkJRM1JFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEd0Q1FVRnJRaXhEUVVGRE8xRkJRMnBGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdVMEZETjBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM0pFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwTkJRWE5ETEVOQlFVTTdVMEZETVVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRek5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdVMEZETTBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRek5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVMEZEY2tNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRek5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdVMEZETTBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTTdVVUZEYWtVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRMEZCYzBNc1EwRkJRenRUUVVNeFJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eHZRa0ZCYjBJc1EwRkJRenRSUVVOdVJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xEUVVGcFF5eERRVUZETzFOQlEzSkVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJRenRSUVVNM1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzFOQlF6RkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJRenRSUVVNM1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFJDUVVFMFFpeERRVUZETzFOQlEyaEVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJRenRSUVVNM1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREpDUVVFeVFpeERRVUZETzFOQlF5OURMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xRkJRekZFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTjJSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE96dFpRVU0zUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExDdENRVUVyUWl4RFFVRkRPMHRCUXpWRU8wbEJRMFFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJzdGFydHNXaXRoIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;