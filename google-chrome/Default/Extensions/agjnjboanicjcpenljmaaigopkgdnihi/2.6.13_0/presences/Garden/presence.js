var __webpack_exports__={};const presence=new Presence({clientId:"714194261679276094"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Garden/assets/logo.png",startTimestamp:browsingTimestamp};if("/"===document.location.pathname)e.details="play.gardenmc.fr";else if("/p/rules"===document.location.pathname)e.details="Lit les règles",e.state="Règles";else if(document.location.pathname.includes("/blog"))e.details="Lit les news",e.state="Blog";else if(document.location.pathname.includes("/user"))e.details="Consulte un profil",e.state="Profil";else if(document.location.pathname.includes("/topic/add/"))e.details="Écrit un nouveau topic";else switch(document.location.pathname){case"/vote":e.details="En train de Voter",e.state="Vote";break;case"/message":e.details="Consulte ses messages",e.state="MP";break;case"/support":e.details="Consulte le support",e.state="Support";break;case"/support/create":e.details="Écrit un ticket au support",e.state="Support";break;case"/message/new":e.details="Écrit un message privé",e.state="MP";break;case"/list":e.details="Consulte la liste des membres",e.state="List";break;case"/stats":e.details="Consultes les stats du site",e.state="Statistiques";break;case"/profile":e.details="Consulte son profil",e.state="Profil";break;case"/shop":e.details="Consulte la boutique",e.state="Shop";break;case"/faq":e.state="F.A.Q",e.details="Consulte la F.A.Q";break;case"/forum":e.details="Consulte le forum",e.state="Forum";break;case"/forum/Informations.4/":e.details="Consulte les infos",e.state="Informations";break;default:document.location.pathname.includes("/forum/Candidatures.5/")?(e.details="Parcourt les candidatures",e.state="Candidatures"):document.location.pathname.includes("/topic/Candi")||document.location.pathname.includes("/topic/candi")?(e.details="Lit une candidature",e.state="Candidatures"):document.location.pathname.includes("/topic")?(e.details="Lit un topic",e.state="Topic"):document.location.pathname.includes("/forum/Boite")?(e.state="Boite à idées",e.details="Consulte la boite à idée"):document.location.pathname.includes("/forum/Bugs.7/")?(e.details="Consulte la section Bug",e.state="Bugs"):document.location.pathname.includes("/forum/Demande-de-Debannissement-.15/")?(e.state="Demande deban",e.details="Consulte la section unban"):document.location.pathname.includes("/forum/Aide.10/")?(e.state="Aides",e.details="Consulte la section aide"):document.location.pathname.includes("/forum/Cr")?(e.state="Créations",e.details="Consulte les projets"):"/forum/Taverne.12/"===document.location.pathname&&(e.state="Taverne",e.details="Boit un verre")}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFJdkNoQixTQUFTbUIsWUFBWVQsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3MTQxOTQyNjE2NzkyNzYwOTRcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dhcmRlbi9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcInBsYXkuZ2FyZGVubWMuZnJcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvcC9ydWxlc1wiKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMaXQgbGVzIHLDqGdsZXNcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJSw6hnbGVzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2Jsb2dcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxpdCBsZXMgbmV3c1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJsb2dcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdXNlclwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uc3VsdGUgdW4gcHJvZmlsXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiUHJvZmlsXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RvcGljL2FkZC9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCLDiWNyaXQgdW4gbm91dmVhdSB0b3BpY1wiO1xuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiL3ZvdGVcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFbiB0cmFpbiBkZSBWb3RlclwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiVm90ZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9tZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uc3VsdGUgc2VzIG1lc3NhZ2VzXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJNUFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9zdXBwb3J0XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uc3VsdGUgbGUgc3VwcG9ydFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU3VwcG9ydFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9zdXBwb3J0L2NyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIsOJY3JpdCB1biB0aWNrZXQgYXUgc3VwcG9ydFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiU3VwcG9ydFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9tZXNzYWdlL25ld1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIsOJY3JpdCB1biBtZXNzYWdlIHByaXbDqVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiTVBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvbGlzdFwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNvbnN1bHRlIGxhIGxpc3RlIGRlcyBtZW1icmVzXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJMaXN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL3N0YXRzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uc3VsdGVzIGxlcyBzdGF0cyBkdSBzaXRlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJTdGF0aXN0aXF1ZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvcHJvZmlsZVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNvbnN1bHRlIHNvbiBwcm9maWxcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlByb2ZpbFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIi9zaG9wXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uc3VsdGUgbGEgYm91dGlxdWVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlNob3BcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvZmFxXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkYuQS5RXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNvbnN1bHRlIGxhIEYuQS5RXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL2ZvcnVtXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uc3VsdGUgbGUgZm9ydW1cIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkZvcnVtXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiL2ZvcnVtL0luZm9ybWF0aW9ucy40L1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNvbnN1bHRlIGxlcyBpbmZvc1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiSW5mb3JtYXRpb25zXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9mb3J1bS9DYW5kaWRhdHVyZXMuNS9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBhcmNvdXJ0IGxlcyBjYW5kaWRhdHVyZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDYW5kaWRhdHVyZXNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdG9waWMvQ2FuZGlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxpdCB1bmUgY2FuZGlkYXR1cmVcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDYW5kaWRhdHVyZXNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdG9waWMvY2FuZGlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxpdCB1bmUgY2FuZGlkYXR1cmVcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDYW5kaWRhdHVyZXNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdG9waWNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxpdCB1biB0b3BpY1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlRvcGljXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2ZvcnVtL0JvaXRlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQm9pdGUgw6AgaWTDqWVzXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb25zdWx0ZSBsYSBib2l0ZSDDoCBpZMOpZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9mb3J1bS9CdWdzLjcvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb25zdWx0ZSBsYSBzZWN0aW9uIEJ1Z1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJ1Z3NcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZm9ydW0vRGVtYW5kZS1kZS1EZWJhbm5pc3NlbWVudC0uMTUvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiRGVtYW5kZSBkZWJhblwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uc3VsdGUgbGEgc2VjdGlvbiB1bmJhblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9mb3J1bS9BaWRlLjEwL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkFpZGVzXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb25zdWx0ZSBsYSBzZWN0aW9uIGFpZGVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZm9ydW0vQ3JcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDcsOpYXRpb25zXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb25zdWx0ZSBsZXMgcHJvamV0c1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZm9ydW0vVGF2ZXJuZS4xMi9cIikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlRhdmVybmVcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJvaXQgdW4gdmVycmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGJFTXNZVUZCWVN4RlFVTmFMRFpFUVVFMlJEdFJRVU01UkN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRU5CUVVNN1NVRkRSaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWRCUVVjN1VVRkRja01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFRRVU4wUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnVSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRM2hETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRE8wdEJRemxDTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1VVRkRlRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRU5CUVVNN1VVRkRkRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNN1MwRkROVUk3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0UlFVTjRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE8xRkJRelZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRE8wdEJRemxDTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRPMUZCUXpWRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03VTBGRE5VTTdVVUZEU2l4UlFVRlJMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEyNURMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlEySXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0blFrRkRNME1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNN1owSkJSVFZDTEUxQlFVMDdZVUZEVGp0WlFVTkVMRXRCUVVzc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlEyaENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1owSkJReTlETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8yZENRVVV4UWl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETzJkQ1FVTm9RaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8yZENRVU0zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZGTDBJc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8yZENRVU4yUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEUkNRVUUwUWl4RFFVRkRPMmRDUVVOd1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJRenRuUWtGRkwwSXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhqUVVGakxFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRuUWtGRGFFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlJURkNMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTJJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3JRa0ZCSzBJc1EwRkJRenRuUWtGRGRrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlJUVkNMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTJRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzJRa0ZCTmtJc1EwRkJRenRuUWtGRGNrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhqUVVGakxFTkJRVU03WjBKQlJYQkRMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUTJoQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03WjBKQlF6ZERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETzJkQ1FVVTVRaXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPMmRDUVVOaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03WjBKQlF6bERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETzJkQ1FVVTFRaXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVOYUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPMmRDUVVNM1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETzJkQ1FVVXpReXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOa0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03WjBKQlF6TkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETzJkQ1FVVTNRaXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEhkQ1FVRjNRaXhEUVVGRExFTkJRVU03WjBKQlF6bENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1owSkJRelZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1kwRkJZeXhEUVVGRE8yZENRVVZ3UXl4TlFVRk5PMkZCUTA0N1dVRkRSRHRuUWtGRFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhGUVVGRk8yOUNRVU5zUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExESkNRVUV5UWl4RFFVRkRPMjlDUVVOdVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMR05CUVdNc1EwRkJRenRwUWtGRGNFTTdjVUpCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3YjBKQlF5OUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN2IwSkJRemRETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1kwRkJZeXhEUVVGRE8ybENRVU53UXp0eFFrRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZETDBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenR2UWtGRE4wTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhqUVVGakxFTkJRVU03YVVKQlEzQkRPM0ZDUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzI5Q1FVTjZSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdOQlFXTXNRMEZCUXp0dlFrRkRkRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNN2FVSkJRemRDTzNGQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk8yOUNRVU12UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHVkJRV1VzUTBGQlF6dHZRa0ZEY2tNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRwUWtGRGJFUTdjVUpCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSVUZCUlR0dlFrRkRha1VzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4NVFrRkJlVUlzUTBGQlF6dHZRa0ZEYWtRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdhVUpCUXpWQ08zRkNRVUZOTEVsQlEwNHNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVU5zUXl4MVEwRkJkVU1zUTBGRGRrTXNSVUZEUVR0dlFrRkRSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdWQlFXVXNRMEZCUXp0dlFrRkRja01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dHBRa0ZEYmtRN2NVSkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1JVRkJSVHR2UWtGRGJFVXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU03YjBKQlF6ZENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNN2FVSkJRMnhFTzNGQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8yOUNRVU0xUkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF6dHZRa0ZEYWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenRwUWtGRE9VTTdjVUpCUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNTMEZCU3l4dlFrRkJiMElzUlVGQlJUdHZRa0ZETDBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdiMEpCUXk5Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRPMmxDUVVOMlF6dFRRVU5HTzB0QlEwUTdTVUZEUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJzdGF0ZSIsImluY2x1ZGVzIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;