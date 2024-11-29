var __webpack_exports__={};const presence=new Presence({clientId:"714628886222209105"}),browsingTimestamp=Math.floor(Date.now()/1e3);let chapter,titlePage,title,subject;const path=document.location.pathname;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Sparknotes/assets/logo.png"};function t(t){title=document.querySelector("body > header.TitleHeader_header.TitleHeader_header--studyGuide > div > div > h1"),path===`/${t}/`?(e.startTimestamp=browsingTimestamp,e.details=`Viewing ${t.replace(/-/gi," ")}`):title&&(e.startTimestamp=browsingTimestamp,e.details=title.textContent,chapter=document.querySelector("body > header.interior-header > div > div.interior-header__title > div"),chapter&&(e.state=chapter.textContent))}switch(title=document.querySelector("body > header.TitleHeader_header.TitleHeader_header--studyGuide > div > div > h1"),path){case"/":e.details="Viewing Home",e.startTimestamp=browsingTimestamp;break;case"/shakespeare/":e.startTimestamp=browsingTimestamp,e.details="Viewing Shakespheare Literature";break;case"/lit/":e.startTimestamp=browsingTimestamp,e.details="Viewing All Literature";break;default:if(path.includes("/blog/"))title=document.querySelector("head > title"),title?(e.startTimestamp=browsingTimestamp,e.details="Viewing: ",e.state=title.textContent.replace(" | The SparkNotes Blog","")):(e.startTimestamp=browsingTimestamp,e.details="Viewing Blog");else if(path.includes("/writinghelp/"))title=document.querySelector("body > header.titleHeader--howTo > div > h1"),title&&(e.startTimestamp=browsingTimestamp,e.details="Viewing:",e.state=title.textContent);else switch(path){case"/othersubjects/":e.startTimestamp=browsingTimestamp,e.details="Viewing Other Subjects";break;case"/math/":t("math");break;case"/biology/":t("biology");break;case"/american-government/":t("american-government");break;case"/sociology/":t("sociology");break;case"/poetry/":t("poetry");break;case"/drama/":t("drama");break;case"/cs/":subject="cs",title=document.querySelector("body > header.TitleHeader_header.TitleHeader_header--studyGuide > div > div > h1"),path===`/${subject}/`?(e.startTimestamp=browsingTimestamp,e.details="Viewing Computer Science"):title&&(e.startTimestamp=browsingTimestamp,e.details=title.textContent,chapter=document.querySelector("body > header.interior-header > div > div.interior-header__title > div"),chapter&&(e.state=chapter.textContent));break;case"/health/":t("health");break;case"/physics/":t("physics");break;case"/biography/":t("biography");break;case"/economics/":t("economics");break;case"/history/":t("history");break;case"/philosophy/":t("philosophy");break;case"/psychology/":t("psychology");break;case"/us-government-and-politics/":t("us-government-and-politics");break;case"/search":title=document.querySelector("#results-search-input").value,e.startTimestamp=browsingTimestamp,e.details="Searching:",e.state=title;break;default:title?(e.startTimestamp=browsingTimestamp,e.details=`Viewing: ${title.textContent}`,chapter=document.querySelector("#section > h3:nth-child(2)"),titlePage=document.querySelector("body > header.interior-header > div > div.interior-header__title > div > span.interior-header__title__pagetitle"),e.state=chapter?chapter.textContent:titlePage?titlePage.textContent:"Viewing Study Guide"):null===title&&document.querySelector("body > header.TitleHeader_header.TitleHeader_header--noFear > div > div > h1")?(title=document.querySelector("body > header.TitleHeader_header.TitleHeader_header--noFear > div > div > h1"),e.startTimestamp=browsingTimestamp,e.details=`Viewing: ${title.textContent}`,e.state=`${document.querySelector(".interior-header__title__umbrella-label").textContent.trim()} ${document.querySelector(".interior-header__title__text__pagetitle").textContent.trim()}`):"/login/"===path?(e.startTimestamp=browsingTimestamp,e.details="Login Unavailable"):"/help/"===path?(e.startTimestamp=browsingTimestamp,e.details="Viewing Help"):(e.details="Unable to Read Page",e.startTimestamp=browsingTimestamp)}}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBYUksZUFBaUJuQixrQkFDOUJlLEVBQWFLLFFBQVUsWUFBWWIsTUFBTWUsY0FDekNqQixRQUFVSyxTQUFTUSxjQUFjLDhCQUNqQ1osVUFBWUksU0FBU1EsY0FBYyxtSEFFL0JILEVBQWFRLE1BRGJsQixRQUNxQkEsUUFBUWlCLFlBQ3hCaEIsVUFDZ0JBLFVBQVVnQixZQUVWLHVCQUVWLE9BQVZmLE9BQ0xHLFNBQVNRLGNBQWMsaUZBQ3ZCWCxNQUFRRyxTQUFTUSxjQUFjLGdGQUMvQkgsRUFBYUksZUFBaUJuQixrQkFDOUJlLEVBQWFLLFFBQVUsWUFBWWIsTUFBTWUsY0FDekNQLEVBQWFRLE1BQVEsR0FBR2IsU0FDbkJRLGNBQWMsMkNBQ2RJLFlBQVlJLFVBQVVoQixTQUN0QlEsY0FBYyw0Q0FDZEksWUFBWUksVUFFSCxZQUFUakIsTUFDTE0sRUFBYUksZUFBaUJuQixrQkFDOUJlLEVBQWFLLFFBQVUscUJBRVQsV0FBVFgsTUFDTE0sRUFBYUksZUFBaUJuQixrQkFDOUJlLEVBQWFLLFFBQVUsaUJBR3ZCTCxFQUFhSyxRQUFVLHNCQUN2QkwsRUFBYUksZUFBaUJuQixvQkFLbERlLEVBQWFLLFFBQ2J2QixTQUFTOEIsWUFBWVosR0FFckJsQixTQUFTOEIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3MTQ2Mjg4ODYyMjIyMDkxMDVcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xubGV0IGNoYXB0ZXIsIHRpdGxlUGFnZSwgdGl0bGUsIHN1YmplY3Q7XG5jb25zdCBwYXRoID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU3Bhcmtub3Rlcy9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHN1YmplY3RDb25kaXRpb24oc3ViamVjdCkge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gaGVhZGVyLlRpdGxlSGVhZGVyX2hlYWRlci5UaXRsZUhlYWRlcl9oZWFkZXItLXN0dWR5R3VpZGUgPiBkaXYgPiBkaXYgPiBoMVwiKTtcbiAgICAgICAgaWYgKHBhdGggPT09IGAvJHtzdWJqZWN0fS9gKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFZpZXdpbmcgJHtzdWJqZWN0LnJlcGxhY2UoLy0vZ2ksIFwiIFwiKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBoZWFkZXIuaW50ZXJpb3ItaGVhZGVyID4gZGl2ID4gZGl2LmludGVyaW9yLWhlYWRlcl9fdGl0bGUgPiBkaXZcIik7XG4gICAgICAgICAgICBpZiAoY2hhcHRlcilcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBjaGFwdGVyLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGhlYWRlci5UaXRsZUhlYWRlcl9oZWFkZXIuVGl0bGVIZWFkZXJfaGVhZGVyLS1zdHVkeUd1aWRlID4gZGl2ID4gZGl2ID4gaDFcIik7XG4gICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICAgIGNhc2UgXCIvXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEhvbWVcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIi9zaGFrZXNwZWFyZS9cIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBTaGFrZXNwaGVhcmUgTGl0ZXJhdHVyZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIi9saXQvXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQWxsIExpdGVyYXR1cmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAocGF0aC5pbmNsdWRlcyhcIi9ibG9nL1wiKSkge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgPiB0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nOiBcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQucmVwbGFjZShcIiB8IFRoZSBTcGFya05vdGVzIEJsb2dcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQmxvZ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoXCIvd3JpdGluZ2hlbHAvXCIpKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGhlYWRlci50aXRsZUhlYWRlci0taG93VG8gPiBkaXYgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nOlwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9vdGhlcnN1YmplY3RzL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIE90aGVyIFN1YmplY3RzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL21hdGgvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3RDb25kaXRpb24oXCJtYXRoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9iaW9sb2d5L1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Q29uZGl0aW9uKFwiYmlvbG9neVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvYW1lcmljYW4tZ292ZXJubWVudC9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdENvbmRpdGlvbihcImFtZXJpY2FuLWdvdmVybm1lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL3NvY2lvbG9neS9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdENvbmRpdGlvbihcInNvY2lvbG9neVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvcG9ldHJ5L1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Q29uZGl0aW9uKFwicG9ldHJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9kcmFtYS9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdENvbmRpdGlvbihcImRyYW1hXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9jcy9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdCA9IFwiY3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBoZWFkZXIuVGl0bGVIZWFkZXJfaGVhZGVyLlRpdGxlSGVhZGVyX2hlYWRlci0tc3R1ZHlHdWlkZSA+IGRpdiA+IGRpdiA+IGgxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGggPT09IGAvJHtzdWJqZWN0fS9gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgQ29tcHV0ZXIgU2NpZW5jZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGhlYWRlci5pbnRlcmlvci1oZWFkZXIgPiBkaXYgPiBkaXYuaW50ZXJpb3ItaGVhZGVyX190aXRsZSA+IGRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gY2hhcHRlci50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvaGVhbHRoL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Q29uZGl0aW9uKFwiaGVhbHRoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9waHlzaWNzL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Q29uZGl0aW9uKFwicGh5c2ljc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvYmlvZ3JhcGh5L1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Q29uZGl0aW9uKFwiYmlvZ3JhcGh5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9lY29ub21pY3MvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3RDb25kaXRpb24oXCJlY29ub21pY3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL2hpc3RvcnkvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3RDb25kaXRpb24oXCJoaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9waGlsb3NvcGh5L1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Q29uZGl0aW9uKFwicGhpbG9zb3BoeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvcHN5Y2hvbG9neS9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdENvbmRpdGlvbihcInBzeWNob2xvZ3lcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL3VzLWdvdmVybm1lbnQtYW5kLXBvbGl0aWNzL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Q29uZGl0aW9uKFwidXMtZ292ZXJubWVudC1hbmQtcG9saXRpY3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL3NlYXJjaFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0cy1zZWFyY2gtaW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmc6XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nOiAke3RpdGxlLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdGlvbiA+IGgzOm50aC1jaGlsZCgyKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGhlYWRlci5pbnRlcmlvci1oZWFkZXIgPiBkaXYgPiBkaXYuaW50ZXJpb3ItaGVhZGVyX190aXRsZSA+IGRpdiA+IHNwYW4uaW50ZXJpb3ItaGVhZGVyX190aXRsZV9fcGFnZXRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFwdGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBjaGFwdGVyLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpdGxlUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGVQYWdlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nIFN0dWR5IEd1aWRlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aXRsZSA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gaGVhZGVyLlRpdGxlSGVhZGVyX2hlYWRlci5UaXRsZUhlYWRlcl9oZWFkZXItLW5vRmVhciA+IGRpdiA+IGRpdiA+IGgxXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGhlYWRlci5UaXRsZUhlYWRlcl9oZWFkZXIuVGl0bGVIZWFkZXJfaGVhZGVyLS1ub0ZlYXIgPiBkaXYgPiBkaXYgPiBoMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nOiAke3RpdGxlLnRleHRDb250ZW50fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuaW50ZXJpb3ItaGVhZGVyX190aXRsZV9fdW1icmVsbGEtbGFiZWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX0gJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5pbnRlcmlvci1oZWFkZXJfX3RpdGxlX190ZXh0X19wYWdldGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGF0aCA9PT0gXCIvbG9naW4vXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9naW4gVW5hdmFpbGFibGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhdGggPT09IFwiL2hlbHAvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBIZWxwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVW5hYmxlIHRvIFJlYWQgUGFnZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF6dEJRVU4yUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0QlFVTjRReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRiRU1zWVVGQllTeEZRVU5hTEdsRlFVRnBSVHRMUVVOc1JTeERRVUZETzBsQlEwWXNVMEZCVXl4blFrRkJaMElzUTBGQlF5eFBRVUZsTzFGQlEzaERMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0zUWl4clJrRkJhMFlzUTBGRGJFWXNRMEZCUXp0UlFVTkdMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVTdXVUZETlVJc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRaUVVOb1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmRCUVZjc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJRenRUUVVOb1JUdGhRVUZOTEVsQlFVa3NTMEZCU3l4RlFVRkZPMWxCUTJwQ0xGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03V1VGRGFFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEzcERMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU12UWl4M1JVRkJkMFVzUTBGRGVFVXNRMEZCUXp0WlFVTkdMRWxCUVVrc1QwRkJUenRuUWtGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU03VTBGRGRFUTdVVUZEUkN4UFFVRlBPMGxCUTFJc1EwRkJRenRKUVVORUxFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTNRaXhyUmtGQmEwWXNRMEZEYkVZc1EwRkJRenRKUVVOR0xGRkJRVkVzU1VGQlNTeEZRVUZGTzFGQlEySXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOVUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZMEZCWXl4RFFVRkRPMWxCUTNSRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03V1VGRmFFUXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhsUVVGbExFTkJRVU1zUTBGQlF6dFpRVU55UWl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMWxCUTJoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVU5CUVdsRExFTkJRVU03V1VGRmVrUXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU5pTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdXVUZEYUVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRaUVVWb1JDeE5RVUZOTzFOQlEwNDdVVUZEUkR0WlFVTkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0blFrRkROVUlzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03WjBKQlF5OURMRWxCUVVrc1MwRkJTeXhGUVVGRk8yOUNRVU5XTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdiMEpCUTJoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRPMjlDUVVOdVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVU0zUXl4M1FrRkJkMElzUlVGRGVFSXNSVUZCUlN4RFFVTkdMRU5CUVVNN2FVSkJRMFk3Y1VKQlFVMDdiMEpCUTA0c1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenR2UWtGRGFFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhqUVVGakxFTkJRVU03YVVKQlEzUkRPMkZCUTBRN2FVSkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRk8yZENRVU14UXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNOa05CUVRaRExFTkJRemRETEVOQlFVTTdaMEpCUTBZc1NVRkJTU3hMUVVGTExFVkJRVVU3YjBKQlExWXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0dlFrRkRhRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN2IwSkJRMnhETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF6dHBRa0ZEZGtNN1lVRkRSRHRwUWtGQlRUdG5Ra0ZEVGl4UlFVRlJMRWxCUVVrc1JVRkJSVHR2UWtGRFlpeExRVUZMTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03ZDBKQlEzWkNMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN2QwSkJRMmhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdkMEpCUldoRUxFMUJRVTA3Y1VKQlEwNDdiMEpCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dDNRa0ZEWkN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0M1FrRkRla0lzVFVGQlRUdHhRa0ZEVGp0dlFrRkRSQ3hMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETzNkQ1FVTnFRaXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenQzUWtGRE5VSXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEhWQ1FVRjFRaXhEUVVGRExFTkJRVU03ZDBKQlF6ZENMR2RDUVVGblFpeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03ZDBKQlEzaERMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNTMEZCU3l4aFFVRmhMRU5CUVVNc1EwRkJRenQzUWtGRGJrSXNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdkMEpCUXpsQ0xFMUJRVTA3Y1VKQlEwNDdiMEpCUTBRc1MwRkJTeXhWUVVGVkxFTkJRVU1zUTBGQlF6dDNRa0ZEYUVJc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2QwSkJRek5DTEUxQlFVMDdjVUpCUTA0N2IwSkJRMFFzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXp0M1FrRkRaaXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenQzUWtGRE1VSXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRPM2RDUVVOYUxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdkMEpCUTJZc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6ZENMR3RHUVVGclJpeERRVU5zUml4RFFVRkRPM2RDUVVOR0xFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NUMEZCVHl4SFFVRkhMRVZCUVVVN05FSkJRelZDTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdORUpCUTJoRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03ZVVKQlEyeEVPelpDUVVGTkxFbEJRVWtzUzBGQlN5eEZRVUZGT3pSQ1FVTnFRaXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE96UkNRVU5vUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdORUpCUTNwRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTXZRaXgzUlVGQmQwVXNRMEZEZUVVc1EwRkJRenMwUWtGRFJpeEpRVUZKTEU5QlFVODdaME5CUVVVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPM2xDUVVOMFJEdDNRa0ZGUkN4TlFVRk5PM0ZDUVVOT08yOUNRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN2QwSkJRMmhDTEdkQ1FVRm5RaXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNkQ1FVTXpRaXhOUVVGTk8zRkNRVU5PTzI5Q1FVTkVMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU03ZDBKQlEycENMR2RDUVVGblFpeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPM2RDUVVNMVFpeE5RVUZOTzNGQ1FVTk9PMjlDUVVORUxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTTdkMEpCUTI1Q0xHZENRVUZuUWl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8zZENRVU01UWl4TlFVRk5PM0ZDUVVOT08yOUNRVU5FTEV0QlFVc3NZVUZCWVN4RFFVRkRMRU5CUVVNN2QwSkJRMjVDTEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzNkQ1FVTTVRaXhOUVVGTk8zRkNRVU5PTzI5Q1FVTkVMRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU03ZDBKQlEycENMR2RDUVVGblFpeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPM2RDUVVNMVFpeE5RVUZOTzNGQ1FVTk9PMjlDUVVORUxFdEJRVXNzWTBGQll5eERRVUZETEVOQlFVTTdkMEpCUTNCQ0xHZENRVUZuUWl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8zZENRVU12UWl4TlFVRk5PM0ZDUVVOT08yOUNRVU5FTEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNN2QwSkJRM0JDTEdkQ1FVRm5RaXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzNkQ1FVTXZRaXhOUVVGTk8zRkNRVU5PTzI5Q1FVTkVMRXRCUVVzc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0M1FrRkRjRU1zWjBKQlFXZENMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNRMEZCUXp0M1FrRkRMME1zVFVGQlRUdHhRa0ZEVGp0dlFrRkRSQ3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzNkQ1FVTm1MRXRCUVVzc1IwRkRTaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4MVFrRkJkVUlzUTBGRmVFSXNRMEZCUXl4TFFVRkxMRU5CUVVNN2QwSkJRMUlzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dDNRa0ZEYUVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFpRVUZaTEVOQlFVTTdkMEpCUTNCRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPM2RDUVVVelFpeE5RVUZOTzNGQ1FVTk9PMjlDUVVORU8zZENRVU5ETEVsQlFVa3NTMEZCU3l4RlFVRkZPelJDUVVOV0xGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03TkVKQlEyaEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGQldTeExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN05FSkJRM1pFTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExEUkNRVUUwUWl4RFFVRkRMRU5CUVVNN05FSkJReTlFTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOcVF5eHBTRUZCYVVnc1EwRkRha2dzUTBGQlF6czBRa0ZEUml4SlFVRkpMRTlCUVU4N1owTkJRVVVzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRE8ybERRVU5xUkN4SlFVRkpMRk5CUVZNN1owTkJRVVVzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNc1YwRkJWeXhEUVVGRE96dG5RMEZETVVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenQ1UWtGRGFFUTdOa0pCUVUwc1NVRkRUaXhMUVVGTExFdEJRVXNzU1VGQlNUczBRa0ZEWkN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpdzRSVUZCT0VVc1EwRkRPVVVzUlVGRFFUczBRa0ZEUkN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNPRVZCUVRoRkxFTkJRemxGTEVOQlFVTTdORUpCUTBZc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenMwUWtGRGFFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXpzMFFrRkRka1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRkZCUVZFN2FVTkJRemxDTEdGQlFXRXNRMEZCUXl4NVEwRkJlVU1zUTBGQlF6dHBRMEZEZUVRc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEZGQlFWRTdhVU5CUXpsQ0xHRkJRV0VzUTBGQlF5d3dRMEZCTUVNc1EwRkJRenRwUTBGRGVrUXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU03ZVVKQlEzWkNPelpDUVVGTkxFbEJRVWtzU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlRzMFFrRkRPVUlzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6czBRa0ZEYUVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenQ1UWtGRE0wTTdOa0pCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzVVVGQlVTeEZRVUZGT3pSQ1FVTTNRaXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE96UkNRVU5vUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHTkJRV01zUTBGQlF6dDVRa0ZEZEVNN05rSkJRVTA3TkVKQlEwNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXpzMFFrRkROME1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dDVRa0ZEYUVRN2FVSkJRMFk3WVVGRFJEdExRVU5HTzBsQlJVUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjaGFwdGVyIiwidGl0bGVQYWdlIiwidGl0bGUiLCJzdWJqZWN0IiwicGF0aCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3ViamVjdENvbmRpdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydFRpbWVzdGFtcCIsImRldGFpbHMiLCJyZXBsYWNlIiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsImluY2x1ZGVzIiwidmFsdWUiLCJ0cmltIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;