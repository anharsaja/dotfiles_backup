var __webpack_exports__={};const presence=new Presence({clientId:"969716001090437120"}),pages={"/animes":"Betrachtet alle Animes","/beliebte-animes":"Betrachtet beliebte Animes","/support/anleitung":"So funktioniert's -","/animekalender":"Animekalender - ","/random":"Der Anime-Zufallsgenerator","/zufall":"Der Anime-Zufallsgenerator","/neu":"Betrachtet neue Animes","/support/regeln":"Betrachtet die Nutzungsbedingungen","/dmca":"Digital Millennium Copyright Act of 1998","/animewuensche":"Betrachtet Animewünsche","/login":"Login bei AniWorld","/registation":"Registrierung bei AniWorld","/account":"Betrachtet sein Account","/user/profil/":"Betrachtet ein Profil","/account/nachrichten":"Betrachtet seine Nachrichten","/account/notifications":"Betrachtet seine Benachrichtigungen","/account/support":"im Support Bereich","/account/watchlist":"Betrachtet seine Watchlist","/account/subscribed":"Betrachtet seine Abonnierte Animes","/account/settings":"Account Einstellungen","/support/fragen":"Betrachtet Fragen & Antworten","/support":"Hilfe & Support bei AniWorld","/edit:information":"Neue Serieninformationen vorschlagen"};let video,timeEnd,currentTime,paused,played;presence.on("iFrameData",(async e=>{({currentTime,timeEnd,played,paused}=e)})),presence.on("UpdateData",(async()=>{const e=document.location.pathname,t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AniWorld/assets/logo.png",startTimestamp:Math.floor(Date.now()/1e3)};if("/"===e)t.details="Betrachtet die Startseite";else if(e.startsWith("/anime/"))4===e.split("/").length?(t.details=document.querySelector("h1").textContent,t.state="Betrachtet die Episodenliste"):(t.details=document.querySelector("h1").textContent,t.state=`${document.querySelector("title").textContent.split("Staffel")[0].replace("Filme von"," ").split(" | AniWorld.to - Animes gratis online ansehen")} - ${document.querySelector("h2").textContent}`,[t.startTimestamp,t.endTimestamp]=presence.getTimestamps(currentTime,timeEnd),t.buttons=[{label:"Watch Anime",url:document.location.href}],video=document.querySelector("video"),video&&(played=0!==video.currentTime,({currentTime,duration:timeEnd,paused}=video)),played&&(paused||([t.startTimestamp,t.endTimestamp]=presence.getTimestamps(currentTime,timeEnd)),t.smallImageKey=paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",t.smallImageText=paused?"Pausiert":"Wiedergabe"));else switch(e){case"/animes":case"/animes-alphabet":case"/animes-genres":t.details=pages[e],t.state=`Sortiert nach: ${document.querySelector("#wrapper > div.container.marginBottom > div.seriesListNavigation > strong").textContent}`;break;case"/beliebte-animes":t.state=`${document.querySelector("title").textContent.split("|")[0]}`;break;case"/support/anleitung":t.details=pages[e],t.state="Die Anleitung";break;default:if(e.includes("/search"))t.details="Sucht nach:",t.state=`${document.querySelector("#wrapper > div.container > div.pageTitle.searchResultsPageTitle > h2 > strong").textContent}`;else switch(e){case"/animekalender":t.details=pages[e],t.state=`${document.querySelector("#wrapper > div.container > div.seriesWishListHeader > div.row > div.col-md-4 > small").textContent}`;break;case"/zufall":case"/random":case"/neu":case"/support/regeln":case"/dmca":case"/animewuensche":case"/login":case"/registrierung":case"/account":t.details=pages[e];break;default:if(e.startsWith("/user/profil/"))t.details="Betrachtet ein Profil",t.state=`${document.querySelector("h1").textContent}`,t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/A/AniWorld/assets/0.png",t.smallImageText=`${document.querySelector("#userDetails > div > div > div:nth-child(3) > div").textContent}`;else switch(e){case"/account/nachrichten":case"/account/notifications":case"/account/support":case"/account/watchlist":case"/account/subscribed":case"/account/settings":t.details=pages[e];break;default:e.startsWith("/support/fragen")||"/support"===e||"/edit:information"===e?t.details=pages[e]:e.startsWith("/katalog/")?t.details=`Betrachtet Animes mit ${document.querySelector("#wrapper > div.container.marginBottom > div.pageTitle > h1 > strong").textContent}`:e.startsWith("/support/frage/")?(t.details=`Frage von ${document.querySelector("h5").textContent}`,t.state=`${document.querySelector("h1").textContent}`):e.startsWith("/genre/")?t.details=`Sucht nach ${document.querySelector("#wrapper > div.container.marginBottom > div.seriesListSection > div.pageTitle.pageCenter.homeTitle > h1").textContent}`:t.details="Befindet sich auf einer Unbekannte Seite"}}}t.details&&presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1TLEdBQzdCLE1BRUosUUFDSSxHQUFJQSxFQUFLWSxXQUFXLGlCQUNoQlIsRUFBYU8sUUFBVSx3QkFDdkJQLEVBQWFhLE1BQVEsR0FBR2hCLFNBQVNjLGNBQWMsTUFBTUMsY0FDckRaLEVBQWFzQixjQUNULDZEQUNKdEIsRUFBYXVCLGVBQWlCLEdBQUcxQixTQUFTYyxjQUFjLHFEQUFxREMsbUJBRzdHLE9BQVFoQixHQUNKLElBQUssdUJBSUwsSUFBSyx5QkFJTCxJQUFLLG1CQUlMLElBQUsscUJBSUwsSUFBSyxzQkFJTCxJQUFLLG9CQUNESSxFQUFhTyxRQUFVcEIsTUFBTVMsR0FDN0IsTUFFSixRQUNRQSxFQUFLWSxXQUFXLG9CQUVGLGFBQVRaLEdBRVMsc0JBQVRBLEVBSExJLEVBQWFPLFFBQVVwQixNQUFNUyxHQUt4QkEsRUFBS1ksV0FBVyxhQUNyQlIsRUFBYU8sUUFBVSx5QkFBeUJWLFNBQVNjLGNBQWMsdUVBQXVFQyxjQUV6SWhCLEVBQUtZLFdBQVcsb0JBQ3JCUixFQUFhTyxRQUFVLGFBQWFWLFNBQVNjLGNBQWMsTUFDdERDLGNBQ0xaLEVBQWFhLE1BQVEsR0FBR2hCLFNBQVNjLGNBQWMsTUFDMUNDLGVBRUFoQixFQUFLWSxXQUFXLFdBQ3JCUixFQUFhTyxRQUFVLGNBQWNWLFNBQVNjLGNBQWMsMkdBQTJHQyxjQUd2S1osRUFBYU8sUUFDVCw2Q0FReENQLEVBQWFPLFNBQ2J2QixTQUFTeUMsWUFBWXpCLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTY5NzE2MDAxMDkwNDM3MTIwXCIsXG59KSwgcGFnZXMgPSB7XG4gICAgXCIvYW5pbWVzXCI6IFwiQmV0cmFjaHRldCBhbGxlIEFuaW1lc1wiLFxuICAgIFwiL2JlbGllYnRlLWFuaW1lc1wiOiBcIkJldHJhY2h0ZXQgYmVsaWVidGUgQW5pbWVzXCIsXG4gICAgXCIvc3VwcG9ydC9hbmxlaXR1bmdcIjogXCJTbyBmdW5rdGlvbmllcnQncyAtXCIsXG4gICAgXCIvYW5pbWVrYWxlbmRlclwiOiBcIkFuaW1la2FsZW5kZXIgLSBcIixcbiAgICBcIi9yYW5kb21cIjogXCJEZXIgQW5pbWUtWnVmYWxsc2dlbmVyYXRvclwiLFxuICAgIFwiL3p1ZmFsbFwiOiBcIkRlciBBbmltZS1adWZhbGxzZ2VuZXJhdG9yXCIsXG4gICAgXCIvbmV1XCI6IFwiQmV0cmFjaHRldCBuZXVlIEFuaW1lc1wiLFxuICAgIFwiL3N1cHBvcnQvcmVnZWxuXCI6IFwiQmV0cmFjaHRldCBkaWUgTnV0enVuZ3NiZWRpbmd1bmdlblwiLFxuICAgIFwiL2RtY2FcIjogXCJEaWdpdGFsIE1pbGxlbm5pdW0gQ29weXJpZ2h0IEFjdCBvZiAxOTk4XCIsXG4gICAgXCIvYW5pbWV3dWVuc2NoZVwiOiBcIkJldHJhY2h0ZXQgQW5pbWV3w7xuc2NoZVwiLFxuICAgIFwiL2xvZ2luXCI6IFwiTG9naW4gYmVpIEFuaVdvcmxkXCIsXG4gICAgXCIvcmVnaXN0YXRpb25cIjogXCJSZWdpc3RyaWVydW5nIGJlaSBBbmlXb3JsZFwiLFxuICAgIFwiL2FjY291bnRcIjogXCJCZXRyYWNodGV0IHNlaW4gQWNjb3VudFwiLFxuICAgIFwiL3VzZXIvcHJvZmlsL1wiOiBcIkJldHJhY2h0ZXQgZWluIFByb2ZpbFwiLFxuICAgIFwiL2FjY291bnQvbmFjaHJpY2h0ZW5cIjogXCJCZXRyYWNodGV0IHNlaW5lIE5hY2hyaWNodGVuXCIsXG4gICAgXCIvYWNjb3VudC9ub3RpZmljYXRpb25zXCI6IFwiQmV0cmFjaHRldCBzZWluZSBCZW5hY2hyaWNodGlndW5nZW5cIixcbiAgICBcIi9hY2NvdW50L3N1cHBvcnRcIjogXCJpbSBTdXBwb3J0IEJlcmVpY2hcIixcbiAgICBcIi9hY2NvdW50L3dhdGNobGlzdFwiOiBcIkJldHJhY2h0ZXQgc2VpbmUgV2F0Y2hsaXN0XCIsXG4gICAgXCIvYWNjb3VudC9zdWJzY3JpYmVkXCI6IFwiQmV0cmFjaHRldCBzZWluZSBBYm9ubmllcnRlIEFuaW1lc1wiLFxuICAgIFwiL2FjY291bnQvc2V0dGluZ3NcIjogXCJBY2NvdW50IEVpbnN0ZWxsdW5nZW5cIixcbiAgICBcIi9zdXBwb3J0L2ZyYWdlblwiOiBcIkJldHJhY2h0ZXQgRnJhZ2VuICYgQW50d29ydGVuXCIsXG4gICAgXCIvc3VwcG9ydFwiOiBcIkhpbGZlICYgU3VwcG9ydCBiZWkgQW5pV29ybGRcIixcbiAgICBcIi9lZGl0OmluZm9ybWF0aW9uXCI6IFwiTmV1ZSBTZXJpZW5pbmZvcm1hdGlvbmVuIHZvcnNjaGxhZ2VuXCIsXG59O1xubGV0IHZpZGVvLCB0aW1lRW5kLCBjdXJyZW50VGltZSwgcGF1c2VkLCBwbGF5ZWQ7XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgYXN5bmMgKGRhdGEpID0+IHtcbiAgICAoeyBjdXJyZW50VGltZSwgdGltZUVuZCwgcGxheWVkLCBwYXVzZWQgfSA9IGRhdGEpO1xufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BbmlXb3JsZC9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgIH07XG4gICAgaWYgKHBhZ2UgPT09IFwiL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQmV0cmFjaHRldCBkaWUgU3RhcnRzZWl0ZVwiO1xuICAgIGVsc2UgaWYgKHBhZ2Uuc3RhcnRzV2l0aChcIi9hbmltZS9cIikpIHtcbiAgICAgICAgaWYgKHBhZ2Uuc3BsaXQoXCIvXCIpLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQmV0cmFjaHRldCBkaWUgRXBpc29kZW5saXN0ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIlN0YWZmZWxcIilbMF1cbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIkZpbG1lIHZvblwiLCBcIiBcIilcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCIgfCBBbmlXb3JsZC50byAtIEFuaW1lcyBncmF0aXMgb25saW5lIGFuc2VoZW5cIil9IC0gJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKGN1cnJlbnRUaW1lLCB0aW1lRW5kKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiV2F0Y2ggQW5pbWVcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7XG4gICAgICAgICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgICAgICAgICBwbGF5ZWQgPSB2aWRlby5jdXJyZW50VGltZSAhPT0gMDtcbiAgICAgICAgICAgICAgICAoeyBjdXJyZW50VGltZSwgZHVyYXRpb246IHRpbWVFbmQsIHBhdXNlZCB9ID0gdmlkZW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYXllZCkge1xuICAgICAgICAgICAgICAgIGlmICghcGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMoY3VycmVudFRpbWUsIHRpbWVFbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gcGF1c2VkID8gXCJQYXVzaWVydFwiIDogXCJXaWVkZXJnYWJlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAocGFnZSkge1xuICAgICAgICAgICAgY2FzZSBcIi9hbmltZXNcIjpcbiAgICAgICAgICAgIGNhc2UgXCIvYW5pbWVzLWFscGhhYmV0XCI6XG4gICAgICAgICAgICBjYXNlIFwiL2FuaW1lcy1nZW5yZXNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV07XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFNvcnRpZXJ0IG5hY2g6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwcGVyID4gZGl2LmNvbnRhaW5lci5tYXJnaW5Cb3R0b20gPiBkaXYuc2VyaWVzTGlzdE5hdmlnYXRpb24gPiBzdHJvbmdcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvYmVsaWVidGUtYW5pbWVzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcInxcIilbMF19YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCIvc3VwcG9ydC9hbmxlaXR1bmdcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV07XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJEaWUgQW5sZWl0dW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChwYWdlLmluY2x1ZGVzKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU3VjaHQgbmFjaDpcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwcGVyID4gZGl2LmNvbnRhaW5lciA+IGRpdi5wYWdlVGl0bGUuc2VhcmNoUmVzdWx0c1BhZ2VUaXRsZSA+IGgyID4gc3Ryb25nXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvYW5pbWVrYWxlbmRlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBwZXIgPiBkaXYuY29udGFpbmVyID4gZGl2LnNlcmllc1dpc2hMaXN0SGVhZGVyID4gZGl2LnJvdyA+IGRpdi5jb2wtbWQtNCA+IHNtYWxsXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL3p1ZmFsbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvcmFuZG9tXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9uZXVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL3N1cHBvcnQvcmVnZWxuXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9kbWNhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9hbmltZXd1ZW5zY2hlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9sb2dpblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvcmVnaXN0cmllcnVuZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvYWNjb3VudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2Uuc3RhcnRzV2l0aChcIi91c2VyL3Byb2ZpbC9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJldHJhY2h0ZXQgZWluIFByb2ZpbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0EvQW5pV29ybGQvYXNzZXRzLzAucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlckRldGFpbHMgPiBkaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpID4gZGl2XCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvYWNjb3VudC9uYWNocmljaHRlblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvYWNjb3VudC9ub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9hY2NvdW50L3N1cHBvcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL2FjY291bnQvd2F0Y2hsaXN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9hY2NvdW50L3N1YnNjcmliZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL2FjY291bnQvc2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIvc3VwcG9ydC9mcmFnZW5cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFnZSA9PT0gXCIvc3VwcG9ydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHBhZ2VzW3BhZ2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhZ2UgPT09IFwiL2VkaXQ6aW5mb3JtYXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwYWdlc1twYWdlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYWdlLnN0YXJ0c1dpdGgoXCIva2F0YWxvZy9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgQmV0cmFjaHRldCBBbmltZXMgbWl0ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwcGVyID4gZGl2LmNvbnRhaW5lci5tYXJnaW5Cb3R0b20gPiBkaXYucGFnZVRpdGxlID4gaDEgPiBzdHJvbmdcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFnZS5zdGFydHNXaXRoKFwiL3N1cHBvcnQvZnJhZ2UvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYEZyYWdlIHZvbiAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoNVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhZ2Uuc3RhcnRzV2l0aChcIi9nZW5yZS9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU3VjaHQgbmFjaCAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3JhcHBlciA+IGRpdi5jb250YWluZXIubWFyZ2luQm90dG9tID4gZGl2LnNlcmllc0xpc3RTZWN0aW9uID4gZGl2LnBhZ2VUaXRsZS5wYWdlQ2VudGVyLmhvbWVUaXRsZSA+IGgxXCIpLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJlZmluZGV0IHNpY2ggYXVmIGVpbmVyIFVuYmVrYW5udGUgU2VpdGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeExRVUZMTEVkQlFUUkNPMGxCUTJoRExGTkJRVk1zUlVGQlJTeDNRa0ZCZDBJN1NVRkRia01zYTBKQlFXdENMRVZCUVVVc05FSkJRVFJDTzBsQlEyaEVMRzlDUVVGdlFpeEZRVUZGTEhGQ1FVRnhRanRKUVVNelF5eG5Ra0ZCWjBJc1JVRkJSU3hyUWtGQmEwSTdTVUZEY0VNc1UwRkJVeXhGUVVGRkxEUkNRVUUwUWp0SlFVTjJReXhUUVVGVExFVkJRVVVzTkVKQlFUUkNPMGxCUTNaRExFMUJRVTBzUlVGQlJTeDNRa0ZCZDBJN1NVRkRhRU1zYVVKQlFXbENMRVZCUVVVc2IwTkJRVzlETzBsQlEzWkVMRTlCUVU4c1JVRkJSU3d3UTBGQk1FTTdTVUZEYmtRc1owSkJRV2RDTEVWQlFVVXNlVUpCUVhsQ08wbEJRek5ETEZGQlFWRXNSVUZCUlN4dlFrRkJiMEk3U1VGRE9VSXNZMEZCWXl4RlFVRkZMRFJDUVVFMFFqdEpRVU0xUXl4VlFVRlZMRVZCUVVVc2VVSkJRWGxDTzBsQlEzSkRMR1ZCUVdVc1JVRkJSU3gxUWtGQmRVSTdTVUZEZUVNc2MwSkJRWE5DTEVWQlFVVXNPRUpCUVRoQ08wbEJRM1JFTEhkQ1FVRjNRaXhGUVVGRkxIRkRRVUZ4UXp0SlFVTXZSQ3hyUWtGQmEwSXNSVUZCUlN4dlFrRkJiMEk3U1VGRGVFTXNiMEpCUVc5Q0xFVkJRVVVzTkVKQlFUUkNPMGxCUTJ4RUxIRkNRVUZ4UWl4RlFVRkZMRzlEUVVGdlF6dEpRVU16UkN4dFFrRkJiVUlzUlVGQlJTeDFRa0ZCZFVJN1NVRkROVU1zYVVKQlFXbENMRVZCUVVVc0swSkJRU3RDTzBsQlEyeEVMRlZCUVZVc1JVRkJSU3c0UWtGQk9FSTdTVUZETVVNc2JVSkJRVzFDTEVWQlFVVXNjME5CUVhORE8wTkJRek5FTEVOQlFVTTdRVUZEU0N4SlFVRkpMRXRCUVVzc1JVRkRVaXhQUVVGbExFVkJRMllzVjBGQmJVSXNSVUZEYmtJc1RVRkJaU3hGUVVObUxFMUJRV1VzUTBGQlF6dEJRVVZxUWl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVOV0xGbEJRVmtzUlVGRFdpeExRVUZMTEVWQlFVVXNTVUZMVGl4RlFVRkZMRVZCUVVVN1NVRkRTaXhEUVVGRExFVkJRVVVzVjBGQlZ5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEYmtRc1EwRkJReXhEUVVORUxFTkJRVU03UVVGRlJpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZEZEVNc1dVRkJXU3hIUVVGcFFqdFJRVU0xUWl4aFFVRmhMRVZCUTFvc0swUkJRU3RFTzFGQlEyaEZMR05CUVdNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03UzBGRE4wTXNRMEZCUXp0SlFVTklMRWxCUVVrc1NVRkJTU3hMUVVGTExFZEJRVWM3VVVGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREpDUVVFeVFpeERRVUZETzFOQlEyaEZMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0UlFVVndReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5xUXl4WlFVRlpMRU5CUVVNc1QwRkJUenRuUWtGRGJrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJjVUlzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUXpsRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NPRUpCUVRoQ0xFTkJRVU03VTBGRGNFUTdZVUZCVFR0WlFVTk9MRmxCUVZrc1EwRkJReXhQUVVGUE8yZENRVU51UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGeFFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRPVVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRkZCUVZFN2FVSkJRemxDTEdGQlFXRXNRMEZCYlVJc1QwRkJUeXhEUVVGRE8ybENRVU40UXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRMMElzVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRU5CUVVNN2FVSkJRM3BDTEV0QlFVc3NRMEZCUXl3clEwRkJLME1zUTBGQlF5eE5RVU4yUkN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGeFFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVTnNSQ3hGUVVGRkxFTkJRVU03V1VGRFNDeERRVUZETEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF6dG5Ra0ZEZGtRc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRPVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMR0ZCUVdFN2IwSkJRM0JDTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWs3YVVKQlF6TkNPMkZCUTBRc1EwRkJRenRaUVVWR0xFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnRRaXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU14UkN4SlFVRkpMRXRCUVVzc1JVRkJSVHRuUWtGRFZpeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1MwRkJTeXhEUVVGRExFTkJRVU03WjBKQlEycERMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzVVVGQlVTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVU55UkR0WlFVTkVMRWxCUVVrc1RVRkJUU3hGUVVGRk8yZENRVU5ZTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRMW9zUTBGQlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU03ZDBKQlEzWkVMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVNNVF6dG5Ra0ZEUkN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEdsRVFVRmpMRU5CUVVNc0swTkJRVmtzUTBGQlF6dG5Ra0ZEYWtVc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzJGQlEycEZPMU5CUTBRN1MwRkZSRHRUUVVGTk8xRkJRMDRzVVVGQlVTeEpRVUZKTEVWQlFVVTdXVUZEWWl4TFFVRkxMRk5CUVZNc1EwRkJRenRaUVVObUxFdEJRVXNzYTBKQlFXdENMRU5CUVVNN1dVRkRlRUlzUzBGQlN5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8yZENRVU4wUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRia01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4clFrRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc01rVkJRVEpGTEVOQlF6TkZMRU5CUVVNc1YwRkRTQ3hGUVVGRkxFTkJRVU03WjBKQlJVZ3NUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xGRkJRVkU3Y1VKQlEwNHNZVUZCWVN4RFFVRnRRaXhQUVVGUExFTkJRVU03Y1VKQlEzaERMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTXpRaXhGUVVGRkxFTkJRVU03WjBKQlJVZ3NUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMmRDUVVNeFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGxRVUZsTEVOQlFVTTdaMEpCUlhKRExFMUJRVTA3WVVGRFRqdFpRVU5FTzJkQ1FVTkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0dlFrRkROMElzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN2IwSkJRM0pETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc0swVkJRU3RGTEVOQlF5OUZMRU5CUVVNc1YwRkRTQ3hGUVVGRkxFTkJRVU03YVVKQlEwZzdjVUpCUVUwN2IwSkJRMDRzVVVGQlVTeEpRVUZKTEVWQlFVVTdkMEpCUTJJc1MwRkJTeXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPelJDUVVOMFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czBRa0ZEYmtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpeHpSa0ZCYzBZc1EwRkRkRVlzUTBGQlF5eFhRVU5JTEVWQlFVVXNRMEZCUXpzMFFrRkZTQ3hOUVVGTk8zbENRVU5PTzNkQ1FVTkVMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03TkVKQlEyWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdORUpCUTI1RExFMUJRVTA3ZVVKQlEwNDdkMEpCUTBRc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6czBRa0ZEWml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzMFFrRkRia01zVFVGQlRUdDVRa0ZEVGp0M1FrRkRSQ3hMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZET3pSQ1FVTmFMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPelJDUVVOdVF5eE5RVUZOTzNsQ1FVTk9PM2RDUVVORUxFdEJRVXNzYVVKQlFXbENMRU5CUVVNc1EwRkJRenMwUWtGRGRrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdORUpCUTI1RExFMUJRVTA3ZVVKQlEwNDdkMEpCUTBRc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF6czBRa0ZEWWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzMFFrRkRia01zVFVGQlRUdDVRa0ZEVGp0M1FrRkRSQ3hMUVVGTExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN05FSkJRM1JDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3pSQ1FVTnVReXhOUVVGTk8zbENRVU5PTzNkQ1FVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03TkVKQlEyUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdORUpCUTI1RExFMUJRVTA3ZVVKQlEwNDdkMEpCUTBRc1MwRkJTeXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPelJDUVVOMFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czBRa0ZEYmtNc1RVRkJUVHQ1UWtGRFRqdDNRa0ZEUkN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRE96UkNRVU5vUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzMFFrRkRia01zVFVGQlRUdDVRa0ZEVGp0M1FrRkRSRHMwUWtGRFF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVU3WjBOQlEzSkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1owTkJReTlETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCY1VJc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGRGJFUXNSVUZCUlN4RFFVRkRPMmREUVVOSUxGbEJRVmtzUTBGQlF5eGhRVUZoTzI5RFFVTjZRaXcwUkVGQk5FUXNRMEZCUXp0blEwRkRPVVFzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4SFFVTTNRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4dFJFRkJiVVFzUTBGRGJrUXNRMEZCUXl4WFFVTklMRVZCUVVVc1EwRkJRenMyUWtGRFNEdHBRMEZCVFR0blEwRkRUaXhSUVVGUkxFbEJRVWtzUlVGQlJUdHZRMEZEWWl4TFFVRkxMSE5DUVVGelFpeERRVUZETEVOQlFVTTdkME5CUXpWQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8zZERRVU51UXl4TlFVRk5PM0ZEUVVOT08yOURRVU5FTEV0QlFVc3NkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dDNRMEZET1VJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2QwTkJRMjVETEUxQlFVMDdjVU5CUTA0N2IwTkJRMFFzUzBGQlN5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8zZERRVU40UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0M1EwRkRia01zVFVGQlRUdHhRMEZEVGp0dlEwRkRSQ3hMUVVGTExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN2QwTkJRekZDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzNkRFFVTnVReXhOUVVGTk8zRkRRVU5PTzI5RFFVTkVMRXRCUVVzc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0M1EwRkRNMElzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03ZDBOQlEyNURMRTFCUVUwN2NVTkJRMDQ3YjBOQlEwUXNTMEZCU3l4dFFrRkJiVUlzUTBGQlF5eERRVUZETzNkRFFVTjZRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenQzUTBGRGJrTXNUVUZCVFR0eFEwRkRUanR2UTBGRFJEdDNRMEZEUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN05FTkJRM0pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3paRFFVTXZRaXhKUVVGSkxFbEJRVWtzUzBGQlN5eFZRVUZWT3pSRFFVTXpRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenMyUTBGREwwSXNTVUZCU1N4SlFVRkpMRXRCUVVzc2JVSkJRVzFDT3pSRFFVTndReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenMyUTBGREwwSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGT3pSRFFVTjBReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVTjBRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4eFJVRkJjVVVzUTBGRGNrVXNRMEZCUXl4WFFVTklMRVZCUVVVc1EwRkJRenQ1UTBGRFNEczJRMEZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1JVRkJSVHMwUTBGRE9VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVOMFFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRnhRaXhKUVVGSkxFTkJRVU03YVVSQlF6bERMRmRCUTBnc1JVRkJSU3hEUVVGRE96UkRRVU5JTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCY1VJc1NVRkJTU3hEUVVGRE8ybEVRVU01UXl4WFFVTklMRVZCUVVVc1EwRkJRenQ1UTBGRFNEczJRMEZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdORU5CUTNSRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZMEZEZEVJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNlVWRCUVhsSExFTkJRM3BITEVOQlFVTXNWMEZEU0N4RlFVRkZMRU5CUVVNN2VVTkJRMGc3TmtOQlFVMDdORU5CUTA0c1dVRkJXU3hEUVVGRExFOUJRVTg3WjBSQlEyNUNMREJEUVVFd1F5eERRVUZETzNsRFFVTTFRenRwUTBGRFJqczJRa0ZEUkR0eFFrRkRSanRwUWtGRFJEdFRRVU5HTzB0QlEwUTdTVUZGUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVNNVJDeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJwYWdlcyIsInZpZGVvIiwidGltZUVuZCIsImN1cnJlbnRUaW1lIiwicGF1c2VkIiwicGxheWVkIiwib24iLCJhc3luYyIsImRhdGEiLCJwYWdlIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImRldGFpbHMiLCJzdGFydHNXaXRoIiwic3BsaXQiLCJsZW5ndGgiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsInJlcGxhY2UiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaHJlZiIsImR1cmF0aW9uIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiaW5jbHVkZXMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;