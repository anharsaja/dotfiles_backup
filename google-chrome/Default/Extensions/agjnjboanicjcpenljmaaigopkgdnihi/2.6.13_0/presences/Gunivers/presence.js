var __webpack_exports__={};const presence=new Presence({clientId:"723474173208297532"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Gunivers/assets/logo.png",startTimestamp:browsingTimestamp},e=await presence.getSetting("privacy"),a=await presence.getSetting("button");e?t.details="Browsing":"gunivers.net"===document.location.hostname?window.location.pathname.startsWith("/articles")?(t.details="Viewing a page:",t.state="Activities"):window.location.pathname.startsWith("/category/")?(t.details="Searching an article:",t.state=`in category ${document.title.replace(" | Gunivers","")}`,window.location.pathname.endsWith("category/chronique/")&&(t.details="Viewing a page:",t.state="Chronicles")):window.location.pathname.startsWith("/chronique-mensuelle-")?(t.details="Reading a chronicle",t.state=document.title.replace(" | Gunivers","").replace("Chronique Mensuelle - ",""),a&&(t.buttons=[{label:"View chronicle",url:document.URL}])):window.location.pathname.endsWith("/a-propos/")||window.location.pathname.endsWith("/about-us/")?(t.details="Viewing a page:",t.state="About us"):window.location.pathname.endsWith("/contact-us/")||window.location.pathname.endsWith("/contactez-nous/")||window.location.pathname.endsWith("/histoire/")||window.location.pathname.endsWith("/history/")?(t.details="Viewing a page:",t.state="Contact us"):window.location.pathname.endsWith("/affiliation-program/")||window.location.pathname.endsWith("/programme-daffiliation/")?(t.details="Viewing a page:",t.state="Affiliation program"):window.location.pathname.endsWith("/equipes/")||window.location.pathname.endsWith("/teams/")?(t.details="Viewing a page:",t.state="Affiliated teams"):window.location.pathname.endsWith("/partners/")||window.location.pathname.endsWith("/partenaires/")?(t.details="Viewing a page:",t.state="Our partners"):window.location.pathname.startsWith("/")&&1!==window.location.pathname.length&&!window.location.pathname.startsWith("/home")?(t.details="Reading an article:",t.state=document.title.replace(" | Gunivers",""),a&&(t.buttons=[{label:"View article",url:document.URL}]),window.location.pathname.includes("/author/")&&(t.details="Looking for an user:",t.state=document.title.replace(" | Gunivers",""),a&&(t.buttons=[{label:"View user",url:document.URL}]))):(1===window.location.pathname.length||window.location.pathname.startsWith("/home"))&&(t.details="Viewing a page:",t.state="Home"):"project.gunivers.net"===document.location.hostname&&(t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/G/Gunivers/assets/0.png",t.details="Viewing a page:",t.state="Gunivers Workspace",window.location.pathname.endsWith("/projects")?(t.details="Searching a project:",t.state="on Gunivers Workspace"):window.location.pathname.startsWith("/projects/")?(t.details="Reading a project:",[,t.state]=document.title.split(" - "),a&&(t.buttons=[{label:"View project",url:document.URL}])):window.location.pathname.startsWith("/users/")&&(t.details="Looking for an user:",t.state=document.querySelector("#content > h2").textContent,a&&(t.buttons=[{label:"View user",url:document.URL}]))),t.details?presence.setActivity(t):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9GLFNBQVNHLFNBQVNLLFNBQVMsY0FDbENoQixFQUFhTSxRQUFVLHVCQUN2Qk4sRUFBYWEsTUFBUSx5QkFFaEJILE9BQU9GLFNBQVNHLFNBQVNDLFdBQVcsZUFDekNaLEVBQWFNLFFBQVUsc0JBQ3RCLENBQUVOLEVBQWFhLE9BQVNOLFNBQVNPLE1BQU1VLE1BQU0sT0FDMUNuQixJQUNBTCxFQUFhaUIsUUFBVSxDQUNuQixDQUNJQyxNQUFPLGVBQ1BDLElBQUtaLFNBQVNhLFFBS3JCVixPQUFPRixTQUFTRyxTQUFTQyxXQUFXLGFBQ3pDWixFQUFhTSxRQUFVLHVCQUN2Qk4sRUFBYWEsTUFBUU4sU0FBU2tCLGNBQWMsaUJBQWlCQyxZQUN6RHJCLElBQ0FMLEVBQWFpQixRQUFVLENBQ25CLENBQ0lDLE1BQU8sWUFDUEMsSUFBS1osU0FBU2EsU0FNOUJwQixFQUFhTSxRQUNiaEIsU0FBU3FDLFlBQVkzQixHQUVyQlYsU0FBU3FDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzIzNDc0MTczMjA4Mjk3NTMyXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HdW5pdmVycy9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHByaXZhY3kgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwicHJpdmFjeVwiKSwgYnV0dG9uID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvblwiKTtcbiAgICBpZiAocHJpdmFjeSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT09IFwiZ3VuaXZlcnMubmV0XCIpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FydGljbGVzXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHBhZ2U6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkFjdGl2aXRpZXNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9jYXRlZ29yeS9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmcgYW4gYXJ0aWNsZTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBpbiBjYXRlZ29yeSAke2RvY3VtZW50LnRpdGxlLnJlcGxhY2UoXCIgfCBHdW5pdmVyc1wiLCBcIlwiKX1gO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcImNhdGVnb3J5L2Nocm9uaXF1ZS9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHBhZ2U6XCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDaHJvbmljbGVzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvY2hyb25pcXVlLW1lbnN1ZWxsZS1cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIGEgY2hyb25pY2xlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC50aXRsZVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiIHwgR3VuaXZlcnNcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIkNocm9uaXF1ZSBNZW5zdWVsbGUgLSBcIiwgXCJcIik7XG4gICAgICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZpZXcgY2hyb25pY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50LlVSTCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9hLXByb3Bvcy9cIikgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9hYm91dC11cy9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQWJvdXQgdXNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuZW5kc1dpdGgoXCIvY29udGFjdC11cy9cIikgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9jb250YWN0ZXotbm91cy9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ29udGFjdCB1c1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9oaXN0b2lyZS9cIikgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9oaXN0b3J5L1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBwYWdlOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDb250YWN0IHVzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKFwiL2FmZmlsaWF0aW9uLXByb2dyYW0vXCIpIHx8XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuZW5kc1dpdGgoXCIvcHJvZ3JhbW1lLWRhZmZpbGlhdGlvbi9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQWZmaWxpYXRpb24gcHJvZ3JhbVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9lcXVpcGVzL1wiKSB8fFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKFwiL3RlYW1zL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBwYWdlOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJBZmZpbGlhdGVkIHRlYW1zXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKFwiL3BhcnRuZXJzL1wiKSB8fFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKFwiL3BhcnRlbmFpcmVzL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBwYWdlOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJPdXIgcGFydG5lcnNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikgJiZcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sZW5ndGggIT09IDEgJiZcbiAgICAgICAgICAgICF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9ob21lXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZGluZyBhbiBhcnRpY2xlOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQudGl0bGUucmVwbGFjZShcIiB8IEd1bml2ZXJzXCIsIFwiXCIpO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IGFydGljbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQuVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2F1dGhvci9cIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBmb3IgYW4gdXNlcjpcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC50aXRsZS5yZXBsYWNlKFwiIHwgR3VuaXZlcnNcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IHVzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50LlVSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sZW5ndGggPT09IDEgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2hvbWVcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiSG9tZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcInByb2plY3QuZ3VuaXZlcnMubmV0XCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPVxuICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR3VuaXZlcnMvYXNzZXRzLzAucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJHdW5pdmVycyBXb3Jrc3BhY2VcIjtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aChcIi9wcm9qZWN0c1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBhIHByb2plY3Q6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIm9uIEd1bml2ZXJzIFdvcmtzcGFjZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL3Byb2plY3RzL1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYSBwcm9qZWN0OlwiO1xuICAgICAgICAgICAgWywgcHJlc2VuY2VEYXRhLnN0YXRlXSA9IGRvY3VtZW50LnRpdGxlLnNwbGl0KFwiIC0gXCIpO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IHByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQuVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdXNlcnMvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9va2luZyBmb3IgYW4gdXNlcjpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGgyXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IHVzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQuVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMQ3RFUVVFclJEdFJRVU5vUlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRVZCUTBRc1QwRkJUeXhIUVVGSExFMUJRVTBzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNc1JVRkRka1FzVFVGQlRTeEhRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVVYyUkN4SlFVRkpMRTlCUVU4N1VVRkJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXp0VFFVTXhReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMR05CUVdNc1JVRkJSVHRSUVVOMlJDeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTnlSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xbEJRM3BETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRE8xTkJRMnhETzJGQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVN1dVRkROMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4MVFrRkJkVUlzUTBGQlF6dFpRVU12UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHVkJRV1VzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUTNwRUxHRkJRV0VzUlVGRFlpeEZRVUZGTEVOQlEwWXNSVUZCUlN4RFFVRkRPMWxCUTBvc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlR0blFrRkROMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTTdZVUZEYkVNN1UwRkRSRHRoUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRMRVZCUVVVN1dVRkRlRVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dFpRVU0zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTzJsQ1FVTnFReXhQUVVGUExFTkJRVU1zWVVGQllTeEZRVUZGTEVWQlFVVXNRMEZCUXp0cFFrRkRNVUlzVDBGQlR5eERRVUZETEhkQ1FVRjNRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzaERMRWxCUVVrc1RVRkJUU3hGUVVGRk8yZENRVU5ZTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2IwSkJRM1JDTzNkQ1FVTkRMRXRCUVVzc1JVRkJSU3huUWtGQlowSTdkMEpCUTNaQ0xFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnp0eFFrRkRha0k3YVVKQlEwUXNRMEZCUXp0aFFVTkdPMU5CUTBRN1lVRkJUU3hKUVVOT0xFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU03V1VGREwwTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVTTVRenRaUVVORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03V1VGRGVrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVkxFTkJRVU03VTBGRGFFTTdZVUZCVFN4SlFVTk9MRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNN1dVRkRha1FzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRVZCUTNCRU8xbEJRMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFpRVU42UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUTBGQlF6dFRRVU5zUXp0aFFVRk5MRWxCUTA0c1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJRenRaUVVNdlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlF6ZERPMWxCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRaUVVONlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJRenRUUVVOc1F6dGhRVUZOTEVsQlEwNHNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEhWQ1FVRjFRaXhEUVVGRE8xbEJRekZFTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhGUVVNMVJEdFpRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdXVUZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRUUVVNelF6dGhRVUZOTEVsQlEwNHNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTTVReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRek5ETzFsQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0WlFVTjZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xTkJRM2hETzJGQlFVMHNTVUZEVGl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRPMWxCUXk5RExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUlVGRGFrUTdXVUZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMWxCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NZMEZCWXl4RFFVRkRPMU5CUTNCRE8yRkJRVTBzU1VGRFRpeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETzFsQlEzaERMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRPMWxCUTNKRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVU0xUXp0WlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1dVRkROME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeE5RVUZOTEVWQlFVVTdaMEpCUTFnc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dHZRa0ZEZEVJN2QwSkJRME1zUzBGQlN5eEZRVUZGTEdOQlFXTTdkMEpCUTNKQ0xFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnp0eFFrRkRha0k3YVVKQlEwUXNRMEZCUXp0aFFVTkdPMWxCUTBRc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3WjBKQlEyeEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1owSkJRemxETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU12UkN4SlFVRkpMRTFCUVUwc1JVRkJSVHR2UWtGRFdDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPM2RDUVVOMFFqczBRa0ZEUXl4TFFVRkxMRVZCUVVVc1YwRkJWenMwUWtGRGJFSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSE8zbENRVU5xUWp0eFFrRkRSQ3hEUVVGRE8ybENRVU5HTzJGQlEwUTdVMEZEUkR0aFFVRk5MRWxCUTA0c1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNN1dVRkRja01zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVU16UXp0WlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1dVRkRla01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNN1UwRkROVUk3UzBGRFJEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzYzBKQlFYTkNMRVZCUVVVN1VVRkRha1VzV1VGQldTeERRVUZETEdGQlFXRTdXVUZEZWtJc05FUkJRVFJFTEVOQlFVTTdVVUZET1VRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRSUVVONlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRzlDUVVGdlFpeERRVUZETzFGQlF6RkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRMjVFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdXVUZET1VNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eDFRa0ZCZFVJc1EwRkJRenRUUVVNM1F6dGhRVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZPMWxCUXpkRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03V1VGRE5VTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU55UkN4SlFVRkpMRTFCUVUwc1JVRkJSVHRuUWtGRFdDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1kwRkJZenQzUWtGRGNrSXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSE8zRkNRVU5xUWp0cFFrRkRSQ3hEUVVGRE8yRkJRMFk3VTBGRFJEdGhRVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMWxCUXpGRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03V1VGRE9VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVONlJTeEpRVUZKTEUxQlFVMHNSVUZCUlR0blFrRkRXQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzI5Q1FVTjBRanQzUWtGRFF5eExRVUZMTEVWQlFVVXNWMEZCVnp0M1FrRkRiRUlzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SFFVRkhPM0ZDUVVOcVFqdHBRa0ZEUkN4RFFVRkRPMkZCUTBZN1UwRkRSRHRMUVVORU8wbEJSVVFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInByaXZhY3kiLCJnZXRTZXR0aW5nIiwiYnV0dG9uIiwiZGV0YWlscyIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0bmFtZSIsIndpbmRvdyIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInN0YXRlIiwidGl0bGUiLCJyZXBsYWNlIiwiZW5kc1dpdGgiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJVUkwiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInNtYWxsSW1hZ2VLZXkiLCJzcGxpdCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;