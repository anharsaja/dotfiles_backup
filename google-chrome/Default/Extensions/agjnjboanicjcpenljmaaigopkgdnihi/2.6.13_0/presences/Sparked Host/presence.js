var __webpack_exports__={};const presence=new Presence({clientId:"807949437922050069"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Sparked%20Host/assets/logo.png",startTimestamp:browsingTimestamp};switch(document.location.hostname){case"sparkedhost.com":document.location.pathname.includes("/budget-minecraft-hosting")?(t.details="Minecraft Hosting",t.state="Budget Packages"):document.location.pathname.includes("/enterprise-minecraft-hosting")?(t.details="Minecraft Hosting",t.state="Enterprise Packages"):document.location.pathname.includes("/singapore-minecraft-hosting")?(t.details="Minecraft Hosting",t.state="Singapore Packages"):document.location.pathname.includes("/extreme-minecraft-hosting")?(t.details="Minecraft Hosting",t.state="Extreme Packages"):document.location.pathname.includes("/game-hosting")?(t.details="Game Hosting",t.state="Exploring Packages"):document.location.pathname.includes("/budget-vps")?(t.details="VPS Hosting",t.state="Budget Packages"):document.location.pathname.includes("/premium-vps")?(t.details="VPS Hosting",t.state="Premium Packages"):document.location.pathname.includes("/discord-hosting")?(t.details="Discord Bot Hosting",t.state="Exploring Packages"):document.location.pathname.includes("/web-hosting")?(t.details="Web Hosting",t.state="Exploring Packages"):document.location.pathname.includes("/giftcards")?(t.details="Giftcards",t.state="Treat a friend"):document.location.pathname.includes("/about-us")?(t.details="About Us",t.state="People behind Sparked"):document.location.pathname.includes("/hardware-and-locations")?(t.details="Hardware & Locations",t.state="Behind the scenes"):document.location.pathname.includes("/contact")?(t.details="Contact Us",t.state="Support & Help"):document.location.pathname.includes("/partners")?(t.details="Partners",t.state="The cool kids"):document.location.pathname.includes("/help-center")&&(t.details="Help Center",t.state="Guides & Tutorials");break;case"billing.sparkedhost.com":if(document.location.pathname.includes("knowledgebase")){const[e]=document.title.split(" - ");t.state="Knowledgebase"===e?"Browsing Articles":e,t.details="Knowledgebase"}else document.location.pathname.includes("clientarea")?(t.details="Client Area",t.state="Account Management"):document.location.pathname.includes("cart")?(t.details="Shopping",t.state="Server Hosting"):document.location.pathname.includes("announcements")?(t.details="Announcements",t.state="Reading The News"):document.location.pathname.includes("affiliates")?(t.details="Affiliates",t.state="Signups = $$$"):document.location.pathname.includes("submitticket")&&(t.details="Support Ticket",t.state="Opening a Ticket");break;case"control.sparkedhost.us":{const e=document.title.split(" | ");t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Sparked%20Host/assets/0.png",t.smallImageText="Pterodactyl","/"===document.location.pathname?(t.details="Viewing Servers",t.state="Lookin' at the glory."):document.location.pathname.includes("admin")?([,t.state]=document.title.split(" - "),t.details="Admin Area"):document.location.pathname.includes("files")?(t.details=`Managing ${e[0]}`,t.state="File Manager"):document.location.pathname.includes("databases")?(t.details=`Managing ${e[0]}`,t.state="Databases"):document.location.pathname.includes("schedules")?(t.details=`Managing ${e[0]}`,t.state="Schedules"):document.location.pathname.includes("users")?(t.details=`Managing ${e[0]}`,t.state="Subusers"):document.location.pathname.includes("backups")?(t.details=`Managing ${e[0]}`,t.state="Backups"):document.location.pathname.includes("subdomains")?(t.details=`Managing ${e[0]}`,t.state="Subdomains"):document.location.pathname.includes("network")?(t.details=`Managing ${e[0]}`,t.state="Network"):document.location.pathname.includes("startup")?(t.details=`Managing ${e[0]}`,t.state="Startup"):document.location.pathname.includes("settings")?(t.details=`Managing ${e[0]}`,t.state="Settings"):document.location.pathname.includes("server")?(t.details=`Managing ${e[0]}`,t.state="Watching Console"):document.location.pathname.includes("account")&&(t.details="Account Settings",t.state="Changing information");break}case"status.sparkedhost.com":t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Sparked%20Host/assets/1.png",t.smallImageText="HetrixTools",t.details="Server Status",t.state="Who broke it?";break;default:(document.location.hostname.startsWith("altar")||document.location.hostname.startsWith("web-01")||document.location.hostname.startsWith("cloud852"))&&(t.details="Web Hosting",t.state="Managing cPanel")}t.details?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0UsU0FBU0MsU0FBUyxXQUN6Q1AsRUFBYVEsUUFBVSxZQUFZSyxFQUFXLEtBQzlDYixFQUFhUyxNQUFRLG9CQUVoQk4sU0FBU0MsU0FBU0UsU0FBU0MsU0FBUyxhQUN6Q1AsRUFBYVEsUUFBVSxtQkFDdkJSLEVBQWFTLE1BQVEsd0JBRXpCLEtBQ0osQ0FDQSxJQUFLLHlCQUNEVCxFQUFhYyxjQUFnQixtRUFDN0JkLEVBQWFlLGVBQWlCLGNBQzlCZixFQUFhUSxRQUFVLGdCQUN2QlIsRUFBYVMsTUFBUSxnQkFDckIsTUFFSixTQUNRTixTQUFTQyxTQUFTQyxTQUFTVyxXQUFXLFVBQ3RDYixTQUFTQyxTQUFTQyxTQUFTVyxXQUFXLFdBQ3RDYixTQUFTQyxTQUFTQyxTQUFTVyxXQUFXLGVBQ3RDaEIsRUFBYVEsUUFBVSxjQUN2QlIsRUFBYVMsTUFBUSxtQkFHNUJULEVBQWFRLFFBR2RsQixTQUFTMkIsWUFBWWpCLEdBRnJCVixTQUFTMkIsYUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODA3OTQ5NDM3OTIyMDUwMDY5XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TcGFya2VkJTIwSG9zdC9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgc3dpdGNoIChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSkge1xuICAgICAgICBjYXNlIFwic3BhcmtlZGhvc3QuY29tXCI6IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9idWRnZXQtbWluZWNyYWZ0LWhvc3RpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWluZWNyYWZ0IEhvc3RpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJ1ZGdldCBQYWNrYWdlc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZW50ZXJwcmlzZS1taW5lY3JhZnQtaG9zdGluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJNaW5lY3JhZnQgSG9zdGluZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiRW50ZXJwcmlzZSBQYWNrYWdlc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvc2luZ2Fwb3JlLW1pbmVjcmFmdC1ob3N0aW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIk1pbmVjcmFmdCBIb3N0aW5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTaW5nYXBvcmUgUGFja2FnZXNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2V4dHJlbWUtbWluZWNyYWZ0LWhvc3RpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTWluZWNyYWZ0IEhvc3RpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkV4dHJlbWUgUGFja2FnZXNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2dhbWUtaG9zdGluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJHYW1lIEhvc3RpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkV4cGxvcmluZyBQYWNrYWdlc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvYnVkZ2V0LXZwc1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWUFMgSG9zdGluZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnVkZ2V0IFBhY2thZ2VzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wcmVtaXVtLXZwc1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWUFMgSG9zdGluZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiUHJlbWl1bSBQYWNrYWdlc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZGlzY29yZC1ob3N0aW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkRpc2NvcmQgQm90IEhvc3RpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkV4cGxvcmluZyBQYWNrYWdlc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvd2ViLWhvc3RpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV2ViIEhvc3RpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkV4cGxvcmluZyBQYWNrYWdlc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZ2lmdGNhcmRzXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkdpZnRjYXJkc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiVHJlYXQgYSBmcmllbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2Fib3V0LXVzXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkFib3V0IFVzXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJQZW9wbGUgYmVoaW5kIFNwYXJrZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2hhcmR3YXJlLWFuZC1sb2NhdGlvbnNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSGFyZHdhcmUgJiBMb2NhdGlvbnNcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJlaGluZCB0aGUgc2NlbmVzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jb250YWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlN1cHBvcnQgJiBIZWxwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wYXJ0bmVyc1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJQYXJ0bmVyc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiVGhlIGNvb2wga2lkc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvaGVscC1jZW50ZXJcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSGVscCBDZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkd1aWRlcyAmIFR1dG9yaWFsc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImJpbGxpbmcuc3BhcmtlZGhvc3QuY29tXCI6IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImtub3dsZWRnZWJhc2VcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYXJ0aWNsZV0gPSBkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJ0aWNsZSA9PT0gXCJLbm93bGVkZ2ViYXNlXCIpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnJvd3NpbmcgQXJ0aWNsZXNcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGFydGljbGU7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIktub3dsZWRnZWJhc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiY2xpZW50YXJlYVwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDbGllbnQgQXJlYVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQWNjb3VudCBNYW5hZ2VtZW50XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImNhcnRcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2hvcHBpbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlNlcnZlciBIb3N0aW5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImFubm91bmNlbWVudHNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQW5ub3VuY2VtZW50c1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiUmVhZGluZyBUaGUgTmV3c1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJhZmZpbGlhdGVzXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkFmZmlsaWF0ZXNcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlNpZ251cHMgPSAkJCRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwic3VibWl0dGlja2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlN1cHBvcnQgVGlja2V0XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJPcGVuaW5nIGEgVGlja2V0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiY29udHJvbC5zcGFya2VkaG9zdC51c1wiOiB7XG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJOYW1lID0gZG9jdW1lbnQudGl0bGUuc3BsaXQoXCIgfCBcIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NwYXJrZWQlMjBIb3N0L2Fzc2V0cy8wLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJQdGVyb2RhY3R5bFwiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFNlcnZlcnNcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkxvb2tpbicgYXQgdGhlIGdsb3J5LlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJhZG1pblwiKSkge1xuICAgICAgICAgICAgICAgIFssIHByZXNlbmNlRGF0YS5zdGF0ZV0gPSBkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQWRtaW4gQXJlYVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJmaWxlc1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYE1hbmFnaW5nICR7c2VydmVyTmFtZVswXX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiRmlsZSBNYW5hZ2VyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImRhdGFiYXNlc1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYE1hbmFnaW5nICR7c2VydmVyTmFtZVswXX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiRGF0YWJhc2VzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInNjaGVkdWxlc1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYE1hbmFnaW5nICR7c2VydmVyTmFtZVswXX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU2NoZWR1bGVzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInVzZXJzXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgTWFuYWdpbmcgJHtzZXJ2ZXJOYW1lWzBdfWA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTdWJ1c2Vyc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJiYWNrdXBzXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgTWFuYWdpbmcgJHtzZXJ2ZXJOYW1lWzBdfWA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJCYWNrdXBzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInN1YmRvbWFpbnNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBNYW5hZ2luZyAke3NlcnZlck5hbWVbMF19YDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlN1YmRvbWFpbnNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwibmV0d29ya1wiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYE1hbmFnaW5nICR7c2VydmVyTmFtZVswXX1gO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTmV0d29ya1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJzdGFydHVwXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgTWFuYWdpbmcgJHtzZXJ2ZXJOYW1lWzBdfWA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTdGFydHVwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInNldHRpbmdzXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgTWFuYWdpbmcgJHtzZXJ2ZXJOYW1lWzBdfWA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTZXR0aW5nc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJzZXJ2ZXJcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBNYW5hZ2luZyAke3NlcnZlck5hbWVbMF19YDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIldhdGNoaW5nIENvbnNvbGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiYWNjb3VudFwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJBY2NvdW50IFNldHRpbmdzXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDaGFuZ2luZyBpbmZvcm1hdGlvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInN0YXR1cy5zcGFya2VkaG9zdC5jb21cIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TcGFya2VkJTIwSG9zdC9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiSGV0cml4VG9vbHNcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZXJ2ZXIgU3RhdHVzXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIldobyBicm9rZSBpdD9cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUuc3RhcnRzV2l0aChcImFsdGFyXCIpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUuc3RhcnRzV2l0aChcIndlYi0wMVwiKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLnN0YXJ0c1dpdGgoXCJjbG91ZDg1MlwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXZWIgSG9zdGluZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTWFuYWdpbmcgY1BhbmVsXCI7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGlmICghcHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVkZ1UkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYkVNc1lVRkJZU3gxUlVGQllUdFJRVU14UWl4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRU5CUVVNN1NVRkZSaXhSUVVGUkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1RExFdEJRVXNzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRaUVVOMlFpeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5d3lRa0ZCTWtJc1EwRkJReXhGUVVGRk8yZENRVU55UlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMmRDUVVNelF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR2xDUVVGcFFpeERRVUZETzJGQlEzWkRPMmxDUVVGTkxFbEJRMDRzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExDdENRVUVyUWl4RFFVRkRMRVZCUTI1Rk8yZENRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdaMEpCUXpORExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03WVVGRE0wTTdhVUpCUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNSVUZEYkVVN1owSkJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dG5Ra0ZETTBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRoUVVNeFF6dHBRa0ZCVFN4SlFVTk9MRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl3MFFrRkJORUlzUTBGQlF5eEZRVU5vUlR0blFrRkRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yZENRVU16UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMkZCUTNoRE8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMmRDUVVOb1JTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR05CUVdNc1EwRkJRenRuUWtGRGRFTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0aFFVTXhRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0blFrRkRPVVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN1owSkJRM0pETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdZVUZEZGtNN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdaMEpCUXk5RUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZVUZCWVN4RFFVRkRPMmRDUVVOeVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR3RDUVVGclFpeERRVUZETzJGQlEzaERPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRVZCUVVVN1owSkJRMjVGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdaMEpCUXpkRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03WVVGRE1VTTdhVUpCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3WjBKQlF5OUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzJkQ1FVTnlReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE8yRkJRekZETzJsQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRk8yZENRVU0zUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF6dG5Ra0ZEYmtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRoUVVOMFF6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRuUWtGRE5VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFTkJRVU03WjBKQlEyeERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1lVRkROME03YVVKQlFVMHNTVUZEVGl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUlVGRE4wUTdaMEpCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenRuUWtGRE9VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0aFFVTjZRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0blFrRkRNMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVRlpMRU5CUVVNN1owSkJRM0JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdZVUZEZEVNN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUXpWRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMmRDUVVOc1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR1ZCUVdVc1EwRkJRenRoUVVOeVF6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSVHRuUWtGREwwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03WjBKQlEzSkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1lVRkRNVU03V1VGRlJDeE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdXVUZETDBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVU3WjBKQlEzcEVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZET1VNc1NVRkJTU3hQUVVGUExFdEJRVXNzWlVGQlpUdHZRa0ZET1VJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenM3YjBKQlEzSkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETzJkQ1FVVnNReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXp0aFFVTjJRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlR0blFrRkROMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN1owSkJRM0pETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdZVUZETVVNN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdaMEpCUTNaRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMmRDUVVOc1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR2RDUVVGblFpeERRVUZETzJGQlEzUkRPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzJkQ1FVTm9SU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXp0blFrRkRka01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4clFrRkJhMElzUTBGQlF6dGhRVU40UXp0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJUdG5Ra0ZETjBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFpRVUZaTEVOQlFVTTdaMEpCUTNCRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NaVUZCWlN4RFFVRkRPMkZCUTNKRE8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMmRDUVVNdlJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2RDUVVGblFpeERRVUZETzJkQ1FVTjRReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yRkJRM2hETzFsQlJVUXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMWxCUXpsQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlF5OURMRmxCUVZrc1EwRkJReXhoUVVGaExIRkZRVUZ4UWl4RFFVRkRPMWxCUTJoRUxGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NZVUZCWVN4RFFVRkRPMWxCUXpWRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRXRCUVVzc1IwRkJSeXhGUVVGRk8yZENRVU4yUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMmRDUVVONlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMSFZDUVVGMVFpeERRVUZETzJGQlF6ZERPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzJkQ1FVTjRSQ3hEUVVGRExFVkJRVVVzV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVOeVJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJRenRoUVVOd1F6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRuUWtGRGVFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR05CUVdNc1EwRkJRenRoUVVOd1F6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRuUWtGRE5VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJRenRoUVVOcVF6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRuUWtGRE5VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJRenRoUVVOcVF6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRuUWtGRGVFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJRenRoUVVOb1F6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRE1VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRoUVVNdlFqdHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkJSVHRuUWtGRE4wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJRenRoUVVOc1F6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRE1VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRoUVVNdlFqdHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRuUWtGRE1VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRoUVVNdlFqdHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRuUWtGRE0wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJRenRoUVVOb1F6dHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRuUWtGRGVrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR3RDUVVGclFpeERRVUZETzJGQlEzaERPMmxDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzJkQ1FVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yZENRVU14UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMkZCUXpWRE8xbEJSVVFzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4M1FrRkJkMElzUTBGQlF5eERRVUZETzFsQlF6bENMRmxCUVZrc1EwRkJReXhoUVVGaExIRkZRVUZuUWl4RFFVRkRPMWxCUXpORExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NZVUZCWVN4RFFVRkRPMWxCUXpWRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRPMWxCUTNaRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NaVUZCWlN4RFFVRkRPMWxCUlhKRExFMUJRVTA3VTBGRFRqdFJRVU5FTzFsQlEwTXNTVUZEUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRPMmRDUVVNNVF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETzJkQ1FVTXZReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRMmhFTzJkQ1FVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWVVGQllTeERRVUZETzJkQ1FVTnlReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8yRkJRM1pETzB0QlEwWTdTVUZGUkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN08xRkJRemRETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGVrTXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwic3RhdGUiLCJhcnRpY2xlIiwidGl0bGUiLCJzcGxpdCIsInNlcnZlck5hbWUiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJzdGFydHNXaXRoIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;