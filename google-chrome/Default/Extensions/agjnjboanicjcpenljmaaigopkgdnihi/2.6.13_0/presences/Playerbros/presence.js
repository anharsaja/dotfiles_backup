var __webpack_exports__={};const presence=new Presence({clientId:"643848955586805770"}),pages={"/":"Ana Sayfa","/espor":"Espor Haberleri","/video-konusu":"Video Konuları","/roportaj":"Röportajlar","/testler":"Testler","/lol":"LoL Haberleri","/csgo":"CS:GO Haberleri","/fortnite":"Fortnite Haberleri","/pubg":"PUBG Haberleri","/fifa":"FIFA Haberleri","/zula":"Zula Haberleri","/register":"Kayıt Ol","/login":"Giriş Yap","/hakkinda":"Hakkımızda","/kunye":"Künye","/iletisim":"İletişim","/wp-admin/profile.php":"Profil"};presence.on("UpdateData",(async()=>{const e=document.location.pathname,t=document.querySelector("#mvp-article-head > h1"),a=document.querySelector("#mvp-article-head > div > ul > li > span > p > time"),s=document.querySelector("#mvp-author-box-head > span > a"),r=document.querySelector("#mvp-author-top-right > h1");if(t&&s&&a&&""!==t.textContent&&""!==s.textContent&&""!==a.textContent)presence.setActivity({largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Playerbros/assets/logo.png",details:t.textContent||"Belirsiz",state:`Yazar: ${s.textContent} (${a.textContent})`,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png",smallImageText:"Bir gönderi okuyor...",startTimestamp:Math.floor(Date.now()/1e3)});else if(e.includes("/author/")&&r&&""!==r.textContent)presence.setActivity({largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Playerbros/assets/logo.png",details:"Bir yazara göz atıyor:",state:r.textContent,startTimestamp:Math.floor(Date.now()/1e3)});else if(e.includes("/etiket/")){const e=document.querySelector("#mvp-main-body > div > div > div > div.mvp-main-body-in2 > div > h1 > span");presence.setActivity({largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Playerbros/assets/logo.png",details:"Bir etikete göz atıyor:",state:e&&""!==e.textContent?e.textContent.split(" ")[e.textContent.split(" ").length-1].replaceAll('"',""):"Belirsiz",startTimestamp:Math.floor(Date.now()/1e3)})}else if(document.location.search.includes("?s=")){const e=document.querySelector("#mvp-main-body > div > div > div > div.mvp-main-body-in2 > div > h1 > span");presence.setActivity({largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Playerbros/assets/logo.png",details:"Bir şey arıyor:",state:e&&""!==e.textContent?e.textContent.split(" ")[e.textContent.split(" ").length-1].replaceAll('"',""):"Belirsiz",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png",startTimestamp:Math.floor(Date.now()/1e3)})}else pages[e]||pages[e.slice(0,-1)]?presence.setActivity({largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Playerbros/assets/logo.png",details:"Bir sayfaya göz atıyor:",state:pages[e]||pages[e.slice(0,-1)],startTimestamp:Math.floor(Date.now()/1e3)}):presence.setActivity({largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/P/Playerbros/assets/logo.png",details:"Bir sayfaya göz atıyor:",state:"Ana Sayfa",startTimestamp:Math.floor(Date.now()/1e3)})}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsTUFBUSxDQUNSLElBQUssWUFDTCxTQUFVLGtCQUNWLGdCQUFpQixpQkFDakIsWUFBYSxjQUNiLFdBQVksVUFDWixPQUFRLGdCQUNSLFFBQVMsa0JBQ1QsWUFBYSxxQkFDYixRQUFTLGlCQUNULFFBQVMsaUJBQ1QsUUFBUyxpQkFDVCxZQUFhLFdBQ2IsU0FBVSxZQUNWLFlBQWEsYUFDYixTQUFVLFFBQ1YsWUFBYSxXQUNiLHdCQUF5QixVQUU3QkgsU0FBU0ksR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFPQyxTQUFTQyxTQUFTQyxTQUFVQyxFQUFZSCxTQUFTSSxjQUFjLDBCQUEyQkMsRUFBT0wsU0FBU0ksY0FBYyx1REFBd0RFLEVBQVNOLFNBQVNJLGNBQWMsbUNBQW9DRyxFQUFVUCxTQUFTSSxjQUFjLDhCQUNsUyxHQUFJRCxHQUNBRyxHQUNBRCxHQUMwQixLQUExQkYsRUFBVUssYUFDYSxLQUF2QkYsRUFBT0UsYUFDYyxLQUFyQkgsRUFBS0csWUFDTGYsU0FBU2dCLFlBQVksQ0FDakJDLGNBQWUsa0VBQ2ZDLFFBQVNSLEVBQVVLLGFBQWUsV0FDbENJLE1BQU8sVUFBVU4sRUFBT0UsZ0JBQWdCSCxFQUFLRyxlQUM3Q0ssY0FBZSxrREFDZkMsZUFBZ0Isd0JBQ2hCQyxlQUFnQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxZQUczQyxHQUFJcEIsRUFBS3FCLFNBQVMsYUFDbkJiLEdBQ3dCLEtBQXhCQSxFQUFRQyxZQUNSZixTQUFTZ0IsWUFBWSxDQUNqQkMsY0FBZSxrRUFDZkMsUUFBUyx5QkFDVEMsTUFBT0wsRUFBUUMsWUFDZk8sZUFBZ0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsWUFHM0MsR0FBSXBCLEVBQUtxQixTQUFTLFlBQWEsQ0FDaEMsTUFBTUMsRUFBTXJCLFNBQVNJLGNBQWMsOEVBQ25DWCxTQUFTZ0IsWUFBWSxDQUNqQkMsY0FBZSxrRUFDZkMsUUFBUywwQkFDVEMsTUFBT1MsR0FBMkIsS0FBcEJBLEVBQUliLFlBQ1phLEVBQUliLFlBQ0RjLE1BQU0sS0FBS0QsRUFBSWIsWUFBWWMsTUFBTSxLQUFLQyxPQUFTLEdBQUdDLFdBQVcsSUFBSyxJQUM3RCxXQUNkVCxlQUFnQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxNQUVoRCxNQUNLLEdBQUluQixTQUFTQyxTQUFTd0IsT0FBT0wsU0FBUyxPQUFRLENBQy9DLE1BQU1NLEVBQWUxQixTQUFTSSxjQUFjLDhFQUM1Q1gsU0FBU2dCLFlBQVksQ0FDakJDLGNBQWUsa0VBQ2ZDLFFBQVMsa0JBQ1RDLE1BQU9jLEdBQTZDLEtBQTdCQSxFQUFhbEIsWUFDOUJrQixFQUFhbEIsWUFDVmMsTUFBTSxLQUFLSSxFQUFhbEIsWUFBWWMsTUFBTSxLQUFLQyxPQUFTLEdBQUdDLFdBQVcsSUFBSyxJQUN0RSxXQUNkWCxjQUFlLGlEQUNmRSxlQUFnQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxNQUVoRCxNQUNTdkIsTUFBTUcsSUFBU0gsTUFBTUcsRUFBSzRCLE1BQU0sR0FBSSxJQUN6Q2xDLFNBQVNnQixZQUFZLENBQ2pCQyxjQUFlLGtFQUNmQyxRQUFTLDBCQUNUQyxNQUFPaEIsTUFBTUcsSUFBU0gsTUFBTUcsRUFBSzRCLE1BQU0sR0FBSSxJQUMzQ1osZUFBZ0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsT0FJNUMxQixTQUFTZ0IsWUFBWSxDQUNqQkMsY0FBZSxrRUFDZkMsUUFBUywwQkFDVEMsTUFBTyxZQUNQRyxlQUFnQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxNQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NDM4NDg5NTU1ODY4MDU3NzBcIixcbn0pLCBwYWdlcyA9IHtcbiAgICBcIi9cIjogXCJBbmEgU2F5ZmFcIixcbiAgICBcIi9lc3BvclwiOiBcIkVzcG9yIEhhYmVybGVyaVwiLFxuICAgIFwiL3ZpZGVvLWtvbnVzdVwiOiBcIlZpZGVvIEtvbnVsYXLEsVwiLFxuICAgIFwiL3JvcG9ydGFqXCI6IFwiUsO2cG9ydGFqbGFyXCIsXG4gICAgXCIvdGVzdGxlclwiOiBcIlRlc3RsZXJcIixcbiAgICBcIi9sb2xcIjogXCJMb0wgSGFiZXJsZXJpXCIsXG4gICAgXCIvY3Nnb1wiOiBcIkNTOkdPIEhhYmVybGVyaVwiLFxuICAgIFwiL2ZvcnRuaXRlXCI6IFwiRm9ydG5pdGUgSGFiZXJsZXJpXCIsXG4gICAgXCIvcHViZ1wiOiBcIlBVQkcgSGFiZXJsZXJpXCIsXG4gICAgXCIvZmlmYVwiOiBcIkZJRkEgSGFiZXJsZXJpXCIsXG4gICAgXCIvenVsYVwiOiBcIlp1bGEgSGFiZXJsZXJpXCIsXG4gICAgXCIvcmVnaXN0ZXJcIjogXCJLYXnEsXQgT2xcIixcbiAgICBcIi9sb2dpblwiOiBcIkdpcmnFnyBZYXBcIixcbiAgICBcIi9oYWtraW5kYVwiOiBcIkhha2vEsW3EsXpkYVwiLFxuICAgIFwiL2t1bnllXCI6IFwiS8O8bnllXCIsXG4gICAgXCIvaWxldGlzaW1cIjogXCLEsGxldGnFn2ltXCIsXG4gICAgXCIvd3AtYWRtaW4vcHJvZmlsZS5waHBcIjogXCJQcm9maWxcIixcbn07XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSwgcG9zdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtdnAtYXJ0aWNsZS1oZWFkID4gaDFcIiksIGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI212cC1hcnRpY2xlLWhlYWQgPiBkaXYgPiB1bCA+IGxpID4gc3BhbiA+IHAgPiB0aW1lXCIpLCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI212cC1hdXRob3ItYm94LWhlYWQgPiBzcGFuID4gYVwiKSwgX2F1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXZwLWF1dGhvci10b3AtcmlnaHQgPiBoMVwiKTtcbiAgICBpZiAocG9zdFRpdGxlICYmXG4gICAgICAgIGF1dGhvciAmJlxuICAgICAgICBkYXRlICYmXG4gICAgICAgIHBvc3RUaXRsZS50ZXh0Q29udGVudCAhPT0gXCJcIiAmJlxuICAgICAgICBhdXRob3IudGV4dENvbnRlbnQgIT09IFwiXCIgJiZcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSh7XG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUC9QbGF5ZXJicm9zL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgZGV0YWlsczogcG9zdFRpdGxlLnRleHRDb250ZW50IHx8IFwiQmVsaXJzaXpcIixcbiAgICAgICAgICAgIHN0YXRlOiBgWWF6YXI6ICR7YXV0aG9yLnRleHRDb250ZW50fSAoJHtkYXRlLnRleHRDb250ZW50fSlgLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6IFwiQmlyIGfDtm5kZXJpIG9rdXlvci4uLlwiLFxuICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZS5pbmNsdWRlcyhcIi9hdXRob3IvXCIpICYmXG4gICAgICAgIF9hdXRob3IgJiZcbiAgICAgICAgX2F1dGhvci50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSh7XG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUC9QbGF5ZXJicm9zL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgZGV0YWlsczogXCJCaXIgeWF6YXJhIGfDtnogYXTEsXlvcjpcIixcbiAgICAgICAgICAgIHN0YXRlOiBfYXV0aG9yLnRleHRDb250ZW50LFxuICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZS5pbmNsdWRlcyhcIi9ldGlrZXQvXCIpKSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXZwLW1haW4tYm9keSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdi5tdnAtbWFpbi1ib2R5LWluMiA+IGRpdiA+IGgxID4gc3BhblwiKTtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoe1xuICAgICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1AvUGxheWVyYnJvcy9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQmlyIGV0aWtldGUgZ8O2eiBhdMSxeW9yOlwiLFxuICAgICAgICAgICAgc3RhdGU6IHRhZyAmJiB0YWcudGV4dENvbnRlbnQgIT09IFwiXCJcbiAgICAgICAgICAgICAgICA/IHRhZy50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIgXCIpW3RhZy50ZXh0Q29udGVudC5zcGxpdChcIiBcIikubGVuZ3RoIC0gMV0ucmVwbGFjZUFsbCgnXCInLCBcIlwiKVxuICAgICAgICAgICAgICAgIDogbnVsbCB8fCBcIkJlbGlyc2l6XCIsXG4gICAgICAgICAgICBzdGFydFRpbWVzdGFtcDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCI/cz1cIikpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoaW5nRm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtdnAtbWFpbi1ib2R5ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2Lm12cC1tYWluLWJvZHktaW4yID4gZGl2ID4gaDEgPiBzcGFuXCIpO1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSh7XG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUC9QbGF5ZXJicm9zL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgZGV0YWlsczogXCJCaXIgxZ9leSBhcsSxeW9yOlwiLFxuICAgICAgICAgICAgc3RhdGU6IHNlYXJjaGluZ0ZvciAmJiBzZWFyY2hpbmdGb3IudGV4dENvbnRlbnQgIT09IFwiXCJcbiAgICAgICAgICAgICAgICA/IHNlYXJjaGluZ0Zvci50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIgXCIpW3NlYXJjaGluZ0Zvci50ZXh0Q29udGVudC5zcGxpdChcIiBcIikubGVuZ3RoIC0gMV0ucmVwbGFjZUFsbCgnXCInLCBcIlwiKVxuICAgICAgICAgICAgICAgIDogbnVsbCB8fCBcIkJlbGlyc2l6XCIsXG4gICAgICAgICAgICBzbWFsbEltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIixcbiAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhZ2VzW3BhZ2VdIHx8IHBhZ2VzW3BhZ2Uuc2xpY2UoMCwgLTEpXSkge1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSh7XG4gICAgICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUC9QbGF5ZXJicm9zL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgZGV0YWlsczogXCJCaXIgc2F5ZmF5YSBnw7Z6IGF0xLF5b3I6XCIsXG4gICAgICAgICAgICBzdGF0ZTogcGFnZXNbcGFnZV0gfHwgcGFnZXNbcGFnZS5zbGljZSgwLCAtMSldLFxuICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHtcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9QL1BsYXllcmJyb3MvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkJpciBzYXlmYXlhIGfDtnogYXTEsXlvcjpcIixcbiAgICAgICAgICAgIHN0YXRlOiBcIkFuYSBTYXlmYVwiLFxuICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4TFFVRkxMRWRCUlVRN1NVRkRTQ3hIUVVGSExFVkJRVVVzVjBGQlZ6dEpRVU5vUWl4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTzBsQlF6TkNMR1ZCUVdVc1JVRkJSU3huUWtGQlowSTdTVUZEYWtNc1YwRkJWeXhGUVVGRkxHRkJRV0U3U1VGRE1VSXNWVUZCVlN4RlFVRkZMRk5CUVZNN1NVRkRja0lzVFVGQlRTeEZRVUZGTEdWQlFXVTdTVUZEZGtJc1QwRkJUeXhGUVVGRkxHbENRVUZwUWp0SlFVTXhRaXhYUVVGWExFVkJRVVVzYjBKQlFXOUNPMGxCUTJwRExFOUJRVThzUlVGQlJTeG5Ra0ZCWjBJN1NVRkRla0lzVDBGQlR5eEZRVUZGTEdkQ1FVRm5RanRKUVVONlFpeFBRVUZQTEVWQlFVVXNaMEpCUVdkQ08wbEJRM3BDTEZkQlFWY3NSVUZCUlN4VlFVRlZPMGxCUTNaQ0xGRkJRVkVzUlVGQlJTeFhRVUZYTzBsQlEzSkNMRmRCUVZjc1JVRkJSU3haUVVGWk8wbEJRM3BDTEZGQlFWRXNSVUZCUlN4UFFVRlBPMGxCUTJwQ0xGZEJRVmNzUlVGQlJTeFZRVUZWTzBsQlEzWkNMSFZDUVVGMVFpeEZRVUZGTEZGQlFWRTdRMEZEYWtNc1EwRkJRenRCUVVWSUxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVU4wUXl4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhGUVVNMVJDeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROVUlzY1VSQlFYRkVMRU5CUTNKRUxFVkJRMFFzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNSVUZEYkVVc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zUTBGQlF6dEpRVVZvUlN4SlFVTkRMRk5CUVZNN1VVRkRWQ3hOUVVGTk8xRkJRMDRzU1VGQlNUdFJRVU5LTEZOQlFWTXNRMEZCUXl4WFFVRlhMRXRCUVVzc1JVRkJSVHRSUVVNMVFpeE5RVUZOTEVOQlFVTXNWMEZCVnl4TFFVRkxMRVZCUVVVN1VVRkRla0lzU1VGQlNTeERRVUZETEZkQlFWY3NTMEZCU3l4RlFVRkZMRVZCUTNSQ08xRkJRMFFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTndRaXhoUVVGaExFVkJRMW9zYVVWQlFXbEZPMWxCUTJ4RkxFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNWMEZCVnl4SlFVRkpMRlZCUVZVN1dVRkROVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNUVUZCVFN4RFFVRkRMRmRCUVZjc1MwRkJTeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITzFsQlF6TkVMR0ZCUVdFc2JVUkJRV2RDTzFsQlF6ZENMR05CUVdNc1JVRkJSU3gxUWtGQmRVSTdXVUZEZGtNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU0zUXl4RFFVRkRMRU5CUVVNN1MwRkRTRHRUUVVGTkxFbEJRMDRzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNN1VVRkRla0lzVDBGQlR6dFJRVU5RTEU5QlFVOHNRMEZCUXl4WFFVRlhMRXRCUVVzc1JVRkJSU3hGUVVONlFqdFJRVU5FTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRjRUlzWVVGQllTeEZRVU5hTEdsRlFVRnBSVHRaUVVOc1JTeFBRVUZQTEVWQlFVVXNkMEpCUVhkQ08xbEJRMnBETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1YwRkJWenRaUVVNeFFpeGpRVUZqTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUXpkRExFTkJRVU1zUTBGQlF6dExRVU5JTzFOQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzFGQlEzSkRMRTFCUVUwc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEycERMRFJGUVVFMFJTeERRVU0xUlN4RFFVRkRPMUZCUlVZc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU53UWl4aFFVRmhMRVZCUTFvc2FVVkJRV2xGTzFsQlEyeEZMRTlCUVU4c1JVRkJSU3g1UWtGQmVVSTdXVUZEYkVNc1MwRkJTeXhGUVVOS0xFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4TFFVRkxMRVZCUVVVN1owSkJRelZDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWenR4UWtGRFpDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUTFZc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU0zUkN4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxGVkJRVlU3V1VGRGRFSXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRUUVVNM1F5eERRVUZETEVOQlFVTTdTMEZEU0R0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM0JFTEUxQlFVMHNXVUZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRekZETERSRlFVRTBSU3hEUVVNMVJTeERRVUZETzFGQlJVWXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVOd1FpeGhRVUZoTEVWQlExb3NhVVZCUVdsRk8xbEJRMnhGTEU5QlFVOHNSVUZCUlN4cFFrRkJhVUk3V1VGRE1VSXNTMEZCU3l4RlFVTktMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zVjBGQlZ5eExRVUZMTEVWQlFVVTdaMEpCUXpsRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnp0eFFrRkRka0lzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVTldMRmxCUVZrc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlF6RkVMRWRCUVVjc1JVRkRTQ3hGUVVGRkxFTkJRMFk3WjBKQlEwZ3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hWUVVGVk8xbEJRM1JDTEdGQlFXRXNhMFJCUVdVN1dVRkROVUlzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTTNReXhEUVVGRExFTkJRVU03UzBGRFNEdFRRVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdVVUZEYmtRc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU53UWl4aFFVRmhMRVZCUTFvc2FVVkJRV2xGTzFsQlEyeEZMRTlCUVU4c1JVRkJSU3g1UWtGQmVVSTdXVUZEYkVNc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eGpRVUZqTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUXpkRExFTkJRVU1zUTBGQlF6dExRVU5JTzFOQlFVMDdVVUZEVGl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRM0JDTEdGQlFXRXNSVUZEV2l4cFJVRkJhVVU3V1VGRGJFVXNUMEZCVHl4RlFVRkZMSGxDUVVGNVFqdFpRVU5zUXl4TFFVRkxMRVZCUVVVc1YwRkJWenRaUVVOc1FpeGpRVUZqTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUXpkRExFTkJRVU1zUTBGQlF6dExRVU5JTzBGQlEwWXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwicGFnZXMiLCJvbiIsImFzeW5jIiwicGFnZSIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBvc3RUaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRlIiwiYXV0aG9yIiwiX2F1dGhvciIsInRleHRDb250ZW50Iiwic2V0QWN0aXZpdHkiLCJsYXJnZUltYWdlS2V5IiwiZGV0YWlscyIsInN0YXRlIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0Iiwic3RhcnRUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiaW5jbHVkZXMiLCJ0YWciLCJzcGxpdCIsImxlbmd0aCIsInJlcGxhY2VBbGwiLCJzZWFyY2giLCJzZWFyY2hpbmdGb3IiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;