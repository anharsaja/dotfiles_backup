var __webpack_exports__={};const presence=new Presence({clientId:"655247212728811530"});let currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/");const browsingTimestamp=Math.floor(Date.now()/1e3);let presenceData={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/Typeracer/assets/logo.png",startTimestamp:browsingTimestamp};const updateCallback={_function:null,get function(){return this._function},set function(e){this._function=e},get present(){return null!==this._function}},resetData=(e={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/Typeracer/assets/logo.png",startTimestamp:browsingTimestamp})=>{currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/"),presenceData={...e}};if((()=>{let e=null;if("play.typeracer.com"===currentURL.hostname)updateCallback.function=()=>{if(document.querySelector(".gameView")){presenceData.details="Playing a race";const t=document.querySelector(".gameStatusLabel").textContent;switch(t){case"Waiting for more people...":presenceData.state="Waiting for more people...",null===e&&(e=Math.floor(Date.now()/1e3)),presenceData.startTimestamp=e;break;case"The race is about to start!":presenceData.state="Counting down...",presenceData.endTimestamp=Math.floor(Date.now()/1e3)+Number(document.querySelector(".countdownPopup .time").textContent.slice(1)),e=null;break;case"The race is on! Type the text below:":case"Go!":{const t=document.querySelector("table.gameView > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div");let a=0;for(const e in t.children)"number"!=typeof t.children[e]&&"function"!=typeof t.children[e]&&"rgb(153, 204, 0)"===getComputedStyle(t.children[e]).color&&(a+=t.children[e].textContent.length);presenceData.state=`${Math.round(a/t.textContent.length*1e4)/100}%, ${document.querySelector(".rankPanelWpm-self").textContent.toUpperCase()}`,null===e&&(e=Math.floor(Date.now()/1e3)),presenceData.startTimestamp=e;break}default:("The race has ended."===t||t.startsWith("You finished"))&&(presenceData.details="Just finished with a race",presenceData.state=`${document.querySelector(".rankPanelWpm-self").textContent.toUpperCase()}, ${document.querySelector(".tblOwnStats > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2)").textContent} acc., ${document.querySelector(".tblOwnStats > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)").textContent}`,presenceData.startTimestamp=browsingTimestamp)}}else presenceData.details="Viewing the home page"};else if("data.typeracer.com"===currentURL.hostname)switch(currentPath[0]){case"pit":switch(currentPath[1]){case"profile":presenceData.details="Viewing a racer profile",presenceData.state=document.querySelector("#profileUsername").textContent||null;break;case"text_info":presenceData.details="Viewing a text",presenceData.state=currentURL.searchParams.get("id");break;case"result":presenceData.details="Viewing a race result",presenceData.state=`Race ${currentURL.searchParams.get("id").split("|")[2]} of ${currentURL.searchParams.get("id").split("|")[1].slice(3)}`;break;case"race_history":presenceData.details="Viewing someone's race history",presenceData.state=currentURL.searchParams.get("user")||null;break;case"home":presenceData.details="Viewing the pit stop";break;case"competitions":{presenceData.details="Viewing the competition result";const e=document.querySelector("div.themeContent > div:nth-child(5) > strong").textContent.trim().slice(0,-1).split(" ");switch(document.querySelector("option[selected]").textContent.trim()){case"day":presenceData.state=e.join(" ");break;case"week":presenceData.state=`${e[1]} ${e[2]}, ${e[4]}`;break;case"month":presenceData.state=`${e[3]} ${e[4]}`;break;case"year":[,presenceData.state]=e}break}case"login":presenceData.details="Logging in";break;default:{const e={upgrade_account:"Upgrade your account",tos:"Terms of Service",privacy_poicy:"Privacy Policy"};presenceData.details="Viewing a page",presenceData.state=e[currentPath[1]]}}break;case"misc":"about"===currentPath[1]&&(presenceData.details="Viewing a page",presenceData.state="About");break;case"admin":presenceData.details="Viewing school admin pages"}})(),updateCallback.present){const e={...presenceData};presence.on("UpdateData",(async()=>{resetData(e),updateCallback.function(),presence.setActivity(presenceData)}))}else presence.on("UpdateData",(async()=>{presence.setActivity(presenceData)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxTQUV6QixNQUVKLElBQUssUUFFR2pCLGFBQWFDLFFBQVUsNkJBSzFDLEVBbkpELEdBb0pJRyxlQUFlSyxRQUFTLENBQ3hCLE1BQU1FLEVBQWMsSUFBS1gsY0FDekJqQixTQUFTeUQsR0FBRyxjQUFjQyxVQUN0Qi9CLFVBQVVDLEdBQ1ZQLGVBQWVFLFdBQ2Z2QixTQUFTMkQsWUFBWTFDLGFBQWEsR0FFMUMsTUFFSWpCLFNBQVN5RCxHQUFHLGNBQWNDLFVBQ3RCMUQsU0FBUzJELFlBQVkxQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjY1NTI0NzIxMjcyODgxMTUzMFwiLFxufSk7XG5sZXQgY3VycmVudFVSTCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZiksIGN1cnJlbnRQYXRoID0gY3VycmVudFVSTC5wYXRobmFtZS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgXCJcIikuc3BsaXQoXCIvXCIpO1xuY29uc3QgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgZGV0YWlsczogXCJWaWV3aW5nIGFuIHVuc3VwcG9ydGVkIHBhZ2VcIixcbiAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9UeXBlcmFjZXIvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxufTtcbmNvbnN0IHVwZGF0ZUNhbGxiYWNrID0ge1xuICAgIF9mdW5jdGlvbjogbnVsbCxcbiAgICBnZXQgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbjtcbiAgICB9LFxuICAgIHNldCBmdW5jdGlvbihwYXJhbWV0ZXIpIHtcbiAgICAgICAgdGhpcy5fZnVuY3Rpb24gPSBwYXJhbWV0ZXI7XG4gICAgfSxcbiAgICBnZXQgcHJlc2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uICE9PSBudWxsO1xuICAgIH0sXG59LCByZXNldERhdGEgPSAoZGVmYXVsdERhdGEgPSB7XG4gICAgZGV0YWlsczogXCJWaWV3aW5nIGFuIHVuc3VwcG9ydGVkIHBhZ2VcIixcbiAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9UeXBlcmFjZXIvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxufSkgPT4ge1xuICAgIGN1cnJlbnRVUkwgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFVSTC5wYXRobmFtZS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgIHByZXNlbmNlRGF0YSA9IHsgLi4uZGVmYXVsdERhdGEgfTtcbn07XG4oKCkgPT4ge1xuICAgIGxldCByYWNlU3RhbXAgPSBudWxsO1xuICAgIGlmIChjdXJyZW50VVJMLmhvc3RuYW1lID09PSBcInBsYXkudHlwZXJhY2VyLmNvbVwiKSB7XG4gICAgICAgIHVwZGF0ZUNhbGxiYWNrLmZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZVZpZXdcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUGxheWluZyBhIHJhY2VcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lU3RhdHVzTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVTdGF0dXNMYWJlbFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGdhbWVTdGF0dXNMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiV2FpdGluZyBmb3IgbW9yZSBwZW9wbGUuLi5cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJXYWl0aW5nIGZvciBtb3JlIHBlb3BsZS4uLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhY2VTdGFtcCA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWNlU3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IHJhY2VTdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJUaGUgcmFjZSBpcyBhYm91dCB0byBzdGFydCFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDb3VudGluZyBkb3duLi4uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRkb3duUG9wdXAgLnRpbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByYWNlU3RhbXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlRoZSByYWNlIGlzIG9uISBUeXBlIHRoZSB0ZXh0IGJlbG93OlwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR28hXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGUuZ2FtZVZpZXcgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgyKSA+IHRkID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkID4gZGl2ID4gZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldHRlcnNUeXBlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGV4dEJveC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGV4dEJveC5jaGlsZHJlbltpXSAhPT0gXCJudW1iZXJcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdGV4dEJveC5jaGlsZHJlbltpXSAhPT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGV4dEJveC5jaGlsZHJlbltpXSkuY29sb3IgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYigxNTMsIDIwNCwgMClcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyc1R5cGVkICs9IHRleHRCb3guY2hpbGRyZW5baV0udGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7TWF0aC5yb3VuZCgobGV0dGVyc1R5cGVkIC8gdGV4dEJveC50ZXh0Q29udGVudC5sZW5ndGgpICogMTAwMDApIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDB9JSwgJHtkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnJhbmtQYW5lbFdwbS1zZWxmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYWNlU3RhbXAgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFjZVN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSByYWNlU3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVTdGF0dXNMYWJlbCA9PT0gXCJUaGUgcmFjZSBoYXMgZW5kZWQuXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzTGFiZWwuc3RhcnRzV2l0aChcIllvdSBmaW5pc2hlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJKdXN0IGZpbmlzaGVkIHdpdGggYSByYWNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucmFua1BhbmVsV3BtLXNlbGZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCl9LCAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGJsT3duU3RhdHMgPiB0Ym9keTpudGgtY2hpbGQoMikgPiB0cjpudGgtY2hpbGQoMykgPiB0ZDpudGgtY2hpbGQoMilcIikudGV4dENvbnRlbnR9IGFjYy4sICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YmxPd25TdGF0cyA+IHRib2R5Om50aC1jaGlsZCgyKSA+IHRyOm50aC1jaGlsZCgyKSA+IHRkOm50aC1jaGlsZCgyKVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgaG9tZSBwYWdlXCI7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbnRVUkwuaG9zdG5hbWUgPT09IFwiZGF0YS50eXBlcmFjZXIuY29tXCIpIHtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50UGF0aFswXSkge1xuICAgICAgICAgICAgY2FzZSBcInBpdFwiOiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50UGF0aFsxXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJvZmlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHJhY2VyIHByb2ZpbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlVXNlcm5hbWVcIikudGV4dENvbnRlbnQgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXh0X2luZm9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSB0ZXh0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBjdXJyZW50VVJMLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXN1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSByYWNlIHJlc3VsdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFJhY2UgJHtjdXJyZW50VVJMLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKS5zcGxpdChcInxcIilbMl19IG9mICR7Y3VycmVudFVSTC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIikuc3BsaXQoXCJ8XCIpWzFdLnNsaWNlKDMpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmFjZV9oaXN0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHNvbWVvbmUncyByYWNlIGhpc3RvcnlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGN1cnJlbnRVUkwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIikgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJob21lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBwaXQgc3RvcFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBldGl0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgY29tcGV0aXRpb24gcmVzdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJvbmcgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRoZW1lQ29udGVudCA+IGRpdjpudGgtY2hpbGQoNSkgPiBzdHJvbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJvcHRpb25bc2VsZWN0ZWRdXCIpLnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkYXlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdHJvbmcuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2Vla1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3N0cm9uZ1sxXX0gJHtzdHJvbmdbMl19LCAke3N0cm9uZ1s0XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1vbnRoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7c3Ryb25nWzNdfSAke3N0cm9uZ1s0XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWywgcHJlc2VuY2VEYXRhLnN0YXRlXSA9IHN0cm9uZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9nZ2luZyBpblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFnZU5hbWVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVfYWNjb3VudDogXCJVcGdyYWRlIHlvdXIgYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvczogXCJUZXJtcyBvZiBTZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmFjeV9wb2ljeTogXCJQcml2YWN5IFBvbGljeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGFnZU5hbWVzW2N1cnJlbnRQYXRoWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJtaXNjXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhdGhbMV0gPT09IFwiYWJvdXRcIikge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJBYm91dFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJhZG1pblwiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgc2Nob29sIGFkbWluIHBhZ2VzXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcbmlmICh1cGRhdGVDYWxsYmFjay5wcmVzZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdERhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSB9O1xuICAgIHByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJlc2V0RGF0YShkZWZhdWx0RGF0YSk7XG4gICAgICAgIHVwZGF0ZUNhbGxiYWNrLmZ1bmN0aW9uKCk7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfSk7XG59XG5lbHNlIHtcbiAgICBwcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0zUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1EwRkJRenRCUVVWSUxFbEJRVWtzVlVGQlZTeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlF5OURMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNSRkxFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGVFUXNTVUZCU1N4WlFVRlpMRWRCUVdsQ08wbEJRMmhETEU5QlFVOHNSVUZCUlN3MlFrRkJOa0k3U1VGRGRFTXNZVUZCWVN4RlFVTmFMR2RGUVVGblJUdEpRVU5xUlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzBOQlEycERMRU5CUVVNN1FVRkRSaXhOUVVGTkxHTkJRV01zUjBGQlJ6dEpRVU55UWl4VFFVRlRMRVZCUVVVc1NVRkJhMEk3U1VGRE4wSXNTVUZCU1N4UlFVRlJPMUZCUTFnc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkRSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFRRVUZUTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkRSQ3hKUVVGSkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRXRCUVVzc1NVRkJTU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdRMEZEUkN4RlFVTkVMRk5CUVZNc1IwRkJSeXhEUVVOWUxHTkJRVFJDTzBsQlF6TkNMRTlCUVU4c1JVRkJSU3cyUWtGQk5rSTdTVUZEZEVNc1lVRkJZU3hGUVVOYUxHZEZRVUZuUlR0SlFVTnFSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENPME5CUTJwRExFVkJRMDBzUlVGQlJUdEpRVU5VTEZWQlFWVXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpkRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0pGTEZsQlFWa3NSMEZCUnl4RlFVRkZMRWRCUVVjc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRGJrTXNRMEZCUXl4RFFVRkRPMEZCUlVnc1EwRkJReXhIUVVGVExFVkJRVVU3U1VGRFdDeEpRVUZKTEZOQlFWTXNSMEZCVnl4SlFVRkpMRU5CUVVNN1NVRkZOMElzU1VGQlNTeFZRVUZWTEVOQlFVTXNVVUZCVVN4TFFVRkxMRzlDUVVGdlFpeEZRVUZGTzFGQlEycEVMR05CUVdNc1EwRkJReXhSUVVGUkxFZEJRVWNzUjBGQlV5eEZRVUZGTzFsQlEzQkRMRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0blFrRkRlRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dG5Ra0ZEZUVNc1RVRkJUU3hsUVVGbExFZEJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1owSkJSWGhFTEZGQlFWRXNaVUZCWlN4RlFVRkZPMjlDUVVONFFpeExRVUZMTERSQ1FVRTBRaXhEUVVGRExFTkJRVU03ZDBKQlEyeERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzTkVKQlFUUkNMRU5CUVVNN2QwSkJRMnhFTEVsQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVVrN05FSkJRVVVzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPM2RDUVVOc1JTeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRk5CUVZNc1EwRkJRenQzUWtGRmVFTXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTERaQ1FVRTJRaXhEUVVGRExFTkJRVU03ZDBKQlEyNURMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN2QwSkJRM2hETEZsQlFWa3NRMEZCUXl4WlFVRlpPelJDUVVONFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdaME5CUXpkQ0xFMUJRVTBzUTBGRFRDeFJRVUZSTzNGRFFVTk9MR0ZCUVdFc1EwRkJReXgxUWtGQmRVSXNRMEZCUXp0eFEwRkRkRU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkRkRUlzUTBGQlF6dDNRa0ZEU0N4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8zZENRVVZxUWl4TlFVRk5PM0ZDUVVOT08yOUNRVU5FTEV0QlFVc3NjME5CUVhORExFTkJRVU03YjBKQlF6VkRMRXRCUVVzc1MwRkJTeXhEUVVGRExFTkJRVU03ZDBKQlExZ3NUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrTXNlVWxCUVhsSkxFTkJRM3BKTEVOQlFVTTdkMEpCUTBZc1NVRkJTU3haUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTnlRaXhMUVVGTExFMUJRVTBzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVN05FSkJRMnBETEVsQlEwTXNUMEZCVHl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZGQlFWRTdaME5CUTNaRExFOUJRVThzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhWUVVGVk8yZERRVU42UXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN6dHZRMEZETVVNc2EwSkJRV3RDTzJkRFFVVnVRaXhaUVVGWkxFbEJRVWtzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETzNsQ1FVTjRSRHQzUWtGRFJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4WlFVRlpMRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN05FSkJReTlFTEVkQlEwUXNUVUZCVFN4UlFVRlJPelpDUVVOYUxHRkJRV0VzUTBGQlF5eHZRa0ZCYjBJc1EwRkJRenMyUWtGRGJrTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFTkJRVU03ZDBKQlF6bENMRWxCUVVrc1UwRkJVeXhMUVVGTExFbEJRVWs3TkVKQlFVVXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8zZENRVU5zUlN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExGTkJRVk1zUTBGQlF6dDNRa0ZGZUVNc1RVRkJUVHR4UWtGRFRqdHZRa0ZEUkR0M1FrRkRReXhKUVVORExHVkJRV1VzUzBGQlN5eHhRa0ZCY1VJN05FSkJRM3BETEdWQlFXVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRM3BET3pSQ1FVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTWtKQlFUSkNMRU5CUVVNN05FSkJRMjVFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhSUVVGUk8ybERRVU01UWl4aFFVRmhMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTTdhVU5CUTI1RExGZEJRVmNzUTBGQlF5eFhRVUZYTEVWQlFVVXNTMEZETVVJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNkVVZCUVhWRkxFTkJRM1pGTEVOQlFVTXNWMEZEU0N4VlFVTkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTEhWRlFVRjFSU3hEUVVOMlJTeERRVUZETEZkQlEwZ3NSVUZCUlN4RFFVRkRPelJDUVVOSUxGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03ZVVKQlEyaEVPMmxDUVVOR08yRkJRMFE3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN1VVRkRka1FzUTBGQlF5eERRVUZETzB0QlEwWTdVMEZCVFN4SlFVRkpMRlZCUVZVc1EwRkJReXhSUVVGUkxFdEJRVXNzYjBKQlFXOUNMRVZCUVVVN1VVRlJlRVFzVVVGQlVTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRka0lzUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRXQ3hSUVVGUkxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRka0lzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXp0M1FrRkRaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE8zZENRVU5xUkN4WlFVRlpMRU5CUVVNc1MwRkJTenMwUWtGRGFrSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU03ZDBKQlJXaEZMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJRenQzUWtGRGFrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0M1FrRkRlRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0M1FrRkZka1FzVFVGQlRUdHhRa0ZEVGp0dlFrRkRSQ3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzNkQ1FVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN2QwSkJReTlETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkRjRUlzVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkRMME1zVDBGQlR5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN2QwSkJSV3hGTEUxQlFVMDdjVUpCUTA0N2IwSkJRMFFzUzBGQlN5eGpRVUZqTEVOQlFVTXNRMEZCUXp0M1FrRkRjRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blEwRkJaME1zUTBGQlF6dDNRa0ZEZUVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTTdkMEpCUldwRkxFMUJRVTA3Y1VKQlEwNDdiMEpCUTBRc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF6dDNRa0ZEV2l4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPM2RDUVVNNVF5eE5RVUZOTzNGQ1FVTk9PMjlDUVVORUxFdEJRVXNzWTBGQll5eERRVUZETEVOQlFVTTdkMEpCUTNCQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NaME5CUVdkRExFTkJRVU03ZDBKQlEzaEVMRTFCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkU3TmtKQlEzSkNMR0ZCUVdFc1EwRkJReXc0UTBGQk9FTXNRMEZCUXpzMlFrRkROMFFzVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlRzMlFrRkRiRUlzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenMyUWtGRFdpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJRMklzVVVGRFF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVNMVJEczBRa0ZEUkN4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRE8yZERRVU5ZTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blEwRkRkRU1zVFVGQlRUczJRa0ZEVGpzMFFrRkRSQ3hMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZETzJkRFFVTmFMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZERRVU12UkN4TlFVRk5PelpDUVVOT096UkNRVU5FTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN1owTkJRMklzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRuUTBGRGFrUXNUVUZCVFRzMlFrRkRUanMwUWtGRFJDeExRVUZMTEUxQlFVMDdaME5CUTFZN2IwTkJRME1zUTBGQlF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03YVVOQlJXaERPMmREUVVORUxFMUJRVTA3ZVVKQlExQTdkMEpCUlVRc1RVRkJUVHR4UWtGRFRqdHZRa0ZEUkN4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRE8zZENRVU5pTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1dVRkJXU3hEUVVGRE8zZENRVU53UXl4TlFVRk5PM0ZDUVVOT08yOUNRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPM2RDUVVWU0xFMUJRVTBzVTBGQlV5eEhRVUZuUXpzMFFrRkZPVU1zWlVGQlpTeEZRVUZGTEhOQ1FVRnpRanMwUWtGRGRrTXNSMEZCUnl4RlFVRkZMR3RDUVVGclFqczBRa0ZGZGtJc1lVRkJZU3hGUVVGRkxHZENRVUZuUWp0NVFrRkRMMElzUTBGQlF6dDNRa0ZEUml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RFFVRkRPM2RDUVVONFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0eFFrRkRMME03YVVKQlEwUTdaMEpCUTBRc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRXaXhKUVVGSkxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4UFFVRlBMRVZCUVVVN2IwSkJReTlDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdiMEpCUTNoRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPMmxDUVVNM1FqdG5Ra0ZGUkN4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExFOUJRVTg3WjBKQlExZzdiMEpCUTBNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzBRa0ZCTkVJc1EwRkJRenRwUWtGRmNFUTdaMEpCUTBRc1RVRkJUVHRUUVVOUU8wdEJRMFE3UVVGRFJpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMEZCUlV3c1NVRkJTU3hqUVVGakxFTkJRVU1zVDBGQlR5eEZRVUZGTzBsQlF6TkNMRTFCUVUwc1YwRkJWeXhIUVVGSExFVkJRVVVzUjBGQlJ5eFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTjRReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRSUVVOd1F5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRka0lzWTBGQll5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTTdRMEZEU0R0TFFVRk5PMGxCUTA0c1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1VVRkRjRU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTklJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImN1cnJlbnRVUkwiLCJVUkwiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImN1cnJlbnRQYXRoIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwic3BsaXQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwcmVzZW5jZURhdGEiLCJkZXRhaWxzIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwidXBkYXRlQ2FsbGJhY2siLCJfZnVuY3Rpb24iLCJmdW5jdGlvbiIsInRoaXMiLCJwYXJhbWV0ZXIiLCJwcmVzZW50IiwicmVzZXREYXRhIiwiZGVmYXVsdERhdGEiLCJyYWNlU3RhbXAiLCJob3N0bmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lU3RhdHVzTGFiZWwiLCJ0ZXh0Q29udGVudCIsInN0YXRlIiwiZW5kVGltZXN0YW1wIiwiTnVtYmVyIiwic2xpY2UiLCJ0ZXh0Qm94IiwibGV0dGVyc1R5cGVkIiwiaSIsImNoaWxkcmVuIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbG9yIiwibGVuZ3RoIiwicm91bmQiLCJ0b1VwcGVyQ2FzZSIsInN0YXJ0c1dpdGgiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzdHJvbmciLCJ0cmltIiwiam9pbiIsInBhZ2VOYW1lcyIsInVwZ3JhZGVfYWNjb3VudCIsInRvcyIsInByaXZhY3lfcG9pY3kiLCJvbiIsImFzeW5jIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;