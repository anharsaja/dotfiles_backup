var __webpack_exports__={};const presence=new Presence({clientId:"733216959382159400"});let currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/");const browsingTimestamp=Math.floor(Date.now()/1e3);let presenceData={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wikivoyage/assets/logo.png",startTimestamp:browsingTimestamp};const updateCallback={_function:null,get function(){return this._function},set function(e){this._function=e},get present(){return null!==this._function}},resetData=(e={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wikivoyage/assets/logo.png",startTimestamp:browsingTimestamp})=>{currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/"),presenceData={...e}},getURLParam=e=>currentURL.searchParams.get(e);if((()=>{if("www.wikivoyage.org"===currentURL.hostname)presenceData.details="On the home page";else{let e;const a=()=>getURLParam("action")||getURLParam("veaction"),[t]=currentURL.hostname.split("."),n=()=>decodeURI(("index.php"===currentPath[1]?getURLParam("title"):currentPath.slice(1).join("/")).replaceAll("_"," "));try{e=document.querySelector("h1:not(:empty)").textContent}catch(a){e=n()}const i=()=>({"-2":"Viewing a media","-1":"Viewing a special page",0:"Reading an article",1:"Viewing a talk page",2:"Viewing a user page",3:"Viewing a user talk page",4:"Viewing a project page",5:"Viewing a project talk page",6:"Viewing a file",7:"Viewing a file talk page",8:"Viewing an interface page",9:"Viewing an interface talk page",10:"Viewing a template",11:"Viewing a template talk page",12:"Viewing a help page",13:"Viewing a help talk page",14:"Viewing a category",15:"Viewing a category talk page",828:"Viewing a module",829:"Viewing a module talk page",2300:"Viewing a gadget",2301:"Viewing a gadget talk page",2302:"Viewing a gadget definition page",2303:"Viewing a gadget definition talk page",2600:"Viewing a topic"}[[...document.querySelector("body").classList].find((e=>/ns--?\d/.test(e))).slice(3)]||"Viewing a page");(document.querySelector("#n-mainpage a")??document.querySelector("#p-navigation a")??document.querySelector(".mw-wiki-logo")).href===currentURL.href?presenceData.details="On the main page":document.querySelector("#wpLoginAttempt")?presenceData.details="Logging in":document.querySelector("#wpCreateaccount")?presenceData.details="Creating an account":document.querySelector(".searchresults")?(presenceData.details="Searching for a page",presenceData.state=document.querySelector("input[type=search]").value):"history"===a()?(presenceData.details="Viewing revision history",presenceData.state=n()):getURLParam("diff")?(presenceData.details="Viewing difference between revisions",presenceData.state=n()):getURLParam("oldid")?(presenceData.details="Viewing an old revision of a page",presenceData.state=n()):document.querySelector("#ca-ve-edit")||getURLParam("veaction")?(presenceData.state=e.toLowerCase()===n().toLowerCase()?`${e}`:`${e} (${n()})`,updateCallback.function=()=>{"edit"===a()||"editsource"===a()?presenceData.details="Editing a page":presenceData.details=i()}):"edit"===a()?(presenceData.details=document.querySelector("#ca-edit")?"Editing a page":"Viewing source",presenceData.state=n()):(presenceData.details=i(),presenceData.state=e.toLowerCase()===n().toLowerCase()?`${e}`:`${e} (${n()})`),"en"!==t&&(presenceData.state?presenceData.state+=` (${t})`:presenceData.details+=` (${t})`)}})(),updateCallback.present){const e={...presenceData};presence.on("UpdateData",(async()=>{resetData(e),updateCallback.function(),presence.setActivity(presenceData)}))}else presence.on("UpdateData",(async()=>{presence.setActivity(presenceData)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUNILEdBQUdBLE1BQVVHLE9BQ25CaEIsZUFBZUUsU0FBVyxLQUNDLFNBQW5CWSxLQUFnRCxlQUFuQkEsSUFDN0JsQixhQUFhQyxRQUFVLGlCQUV2QkQsYUFBYUMsUUFBVTJCLEdBQWtCLEdBR3pCLFNBQW5CVixLQUNMbEIsYUFBYUMsUUFBVWIsU0FBU3FDLGNBQWMsWUFDeEMsaUJBQ0EsaUJBQ056QixhQUFhaUMsTUFBUWIsTUFHckJwQixhQUFhQyxRQUFVMkIsSUFDdkI1QixhQUFhaUMsTUFBV2hCLEVBQU1rQixnQkFBa0JmLElBQWVlLGNBQ3pELEdBQUdsQixJQUNILEdBQUdBLE1BQVVHLFFBRVYsT0FBVEQsSUFDSW5CLGFBQWFpQyxNQUNiakMsYUFBYWlDLE9BQVMsS0FBS2QsS0FFM0JuQixhQUFhQyxTQUFXLEtBQUtrQixLQUV6QyxDQUNILEVBeEdELEdBeUdJZixlQUFlSyxRQUFTLENBQ3hCLE1BQU1FLEVBQWMsSUFBS1gsY0FDekJqQixTQUFTcUQsR0FBRyxjQUFjQyxVQUN0QjNCLFVBQVVDLEdBQ1ZQLGVBQWVFLFdBQ2Z2QixTQUFTdUQsWUFBWXRDLGFBQWEsR0FFMUMsTUFFSWpCLFNBQVNxRCxHQUFHLGNBQWNDLFVBQ3RCdEQsU0FBU3VELFlBQVl0QyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjczMzIxNjk1OTM4MjE1OTQwMFwiLFxufSk7XG5sZXQgY3VycmVudFVSTCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZiksIGN1cnJlbnRQYXRoID0gY3VycmVudFVSTC5wYXRobmFtZS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgXCJcIikuc3BsaXQoXCIvXCIpO1xuY29uc3QgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgZGV0YWlsczogXCJWaWV3aW5nIGFuIHVuc3VwcG9ydGVkIHBhZ2VcIixcbiAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVy9XaWtpdm95YWdlL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbn07XG5jb25zdCB1cGRhdGVDYWxsYmFjayA9IHtcbiAgICBfZnVuY3Rpb246IG51bGwsXG4gICAgZ2V0IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb247XG4gICAgfSxcbiAgICBzZXQgZnVuY3Rpb24ocGFyYW1ldGVyKSB7XG4gICAgICAgIHRoaXMuX2Z1bmN0aW9uID0gcGFyYW1ldGVyO1xuICAgIH0sXG4gICAgZ2V0IHByZXNlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbiAhPT0gbnVsbDtcbiAgICB9LFxufSwgcmVzZXREYXRhID0gKGRlZmF1bHREYXRhID0ge1xuICAgIGRldGFpbHM6IFwiVmlld2luZyBhbiB1bnN1cHBvcnRlZCBwYWdlXCIsXG4gICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1cvV2lraXZveWFnZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG59KSA9PiB7XG4gICAgY3VycmVudFVSTCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgY3VycmVudFBhdGggPSBjdXJyZW50VVJMLnBhdGhuYW1lLnJlcGxhY2UoL15cXC98XFwvJC9nLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gICAgcHJlc2VuY2VEYXRhID0geyAuLi5kZWZhdWx0RGF0YSB9O1xufSwgZ2V0VVJMUGFyYW0gPSAodXJsUGFyYW0pID0+IHtcbiAgICByZXR1cm4gY3VycmVudFVSTC5zZWFyY2hQYXJhbXMuZ2V0KHVybFBhcmFtKTtcbn07XG4oKCkgPT4ge1xuICAgIGlmIChjdXJyZW50VVJMLmhvc3RuYW1lID09PSBcInd3dy53aWtpdm95YWdlLm9yZ1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiT24gdGhlIGhvbWUgcGFnZVwiO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgdGl0bGU7XG4gICAgICAgIGNvbnN0IGFjdGlvblJlc3VsdCA9ICgpID0+IGdldFVSTFBhcmFtKFwiYWN0aW9uXCIpIHx8IGdldFVSTFBhcmFtKFwidmVhY3Rpb25cIiksIFtsYW5nXSA9IGN1cnJlbnRVUkwuaG9zdG5hbWUuc3BsaXQoXCIuXCIpLCB0aXRsZUZyb21VUkwgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJKChjdXJyZW50UGF0aFsxXSA9PT0gXCJpbmRleC5waHBcIlxuICAgICAgICAgICAgICAgID8gZ2V0VVJMUGFyYW0oXCJ0aXRsZVwiKVxuICAgICAgICAgICAgICAgIDogY3VycmVudFBhdGguc2xpY2UoMSkuam9pbihcIi9cIikpLnJlcGxhY2VBbGwoXCJfXCIsIFwiIFwiKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMTpub3QoOmVtcHR5KVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aXRsZUZyb21VUkwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lc3BhY2VEZXRhaWxzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IHtcbiAgICAgICAgICAgICAgICBcIi0yXCI6IFwiVmlld2luZyBhIG1lZGlhXCIsXG4gICAgICAgICAgICAgICAgXCItMVwiOiBcIlZpZXdpbmcgYSBzcGVjaWFsIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAwOiBcIlJlYWRpbmcgYW4gYXJ0aWNsZVwiLFxuICAgICAgICAgICAgICAgIDE6IFwiVmlld2luZyBhIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDI6IFwiVmlld2luZyBhIHVzZXIgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDM6IFwiVmlld2luZyBhIHVzZXIgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgNDogXCJWaWV3aW5nIGEgcHJvamVjdCBwYWdlXCIsXG4gICAgICAgICAgICAgICAgNTogXCJWaWV3aW5nIGEgcHJvamVjdCB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA2OiBcIlZpZXdpbmcgYSBmaWxlXCIsXG4gICAgICAgICAgICAgICAgNzogXCJWaWV3aW5nIGEgZmlsZSB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA4OiBcIlZpZXdpbmcgYW4gaW50ZXJmYWNlIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA5OiBcIlZpZXdpbmcgYW4gaW50ZXJmYWNlIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDEwOiBcIlZpZXdpbmcgYSB0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIDExOiBcIlZpZXdpbmcgYSB0ZW1wbGF0ZSB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAxMjogXCJWaWV3aW5nIGEgaGVscCBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTM6IFwiVmlld2luZyBhIGhlbHAgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTQ6IFwiVmlld2luZyBhIGNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgMTU6IFwiVmlld2luZyBhIGNhdGVnb3J5IHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDgyODogXCJWaWV3aW5nIGEgbW9kdWxlXCIsXG4gICAgICAgICAgICAgICAgODI5OiBcIlZpZXdpbmcgYSBtb2R1bGUgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMjMwMDogXCJWaWV3aW5nIGEgZ2FkZ2V0XCIsXG4gICAgICAgICAgICAgICAgMjMwMTogXCJWaWV3aW5nIGEgZ2FkZ2V0IHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDIzMDI6IFwiVmlld2luZyBhIGdhZGdldCBkZWZpbml0aW9uIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAyMzAzOiBcIlZpZXdpbmcgYSBnYWRnZXQgZGVmaW5pdGlvbiB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAyNjAwOiBcIlZpZXdpbmcgYSB0b3BpY1wiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoZGV0YWlsc1tbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0XVxuICAgICAgICAgICAgICAgIC5maW5kKHYgPT4gL25zLS0/XFxkLy50ZXN0KHYpKVxuICAgICAgICAgICAgICAgIC5zbGljZSgzKV0gfHwgXCJWaWV3aW5nIGEgcGFnZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI24tbWFpbnBhZ2UgYVwiKSA/P1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLW5hdmlnYXRpb24gYVwiKSA/P1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdy13aWtpLWxvZ29cIikpLmhyZWYgPT09IGN1cnJlbnRVUkwuaHJlZilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJPbiB0aGUgbWFpbiBwYWdlXCI7XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3BMb2dpbkF0dGVtcHRcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9nZ2luZyBpblwiO1xuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwQ3JlYXRlYWNjb3VudFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDcmVhdGluZyBhbiBhY2NvdW50XCI7XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNocmVzdWx0c1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3IgYSBwYWdlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPXNlYXJjaF1cIikudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uUmVzdWx0KCkgPT09IFwiaGlzdG9yeVwiKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyByZXZpc2lvbiBoaXN0b3J5XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZUZyb21VUkwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnZXRVUkxQYXJhbShcImRpZmZcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGRpZmZlcmVuY2UgYmV0d2VlbiByZXZpc2lvbnNcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlRnJvbVVSTCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdldFVSTFBhcmFtKFwib2xkaWRcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFuIG9sZCByZXZpc2lvbiBvZiBhIHBhZ2VcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlRnJvbVVSTCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2EtdmUtZWRpdFwiKSB8fFxuICAgICAgICAgICAgZ2V0VVJMUGFyYW0oXCJ2ZWFjdGlvblwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGl0bGVGcm9tVVJMKCkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgID8gYCR7dGl0bGV9YFxuICAgICAgICAgICAgICAgIDogYCR7dGl0bGV9ICgke3RpdGxlRnJvbVVSTCgpfSlgfWA7XG4gICAgICAgICAgICB1cGRhdGVDYWxsYmFjay5mdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uUmVzdWx0KCkgPT09IFwiZWRpdFwiIHx8IGFjdGlvblJlc3VsdCgpID09PSBcImVkaXRzb3VyY2VcIilcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkVkaXRpbmcgYSBwYWdlXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IG5hbWVzcGFjZURldGFpbHMoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uUmVzdWx0KCkgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2EtZWRpdFwiKVxuICAgICAgICAgICAgICAgID8gXCJFZGl0aW5nIGEgcGFnZVwiXG4gICAgICAgICAgICAgICAgOiBcIlZpZXdpbmcgc291cmNlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZUZyb21VUkwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gbmFtZXNwYWNlRGV0YWlscygpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGl0bGVGcm9tVVJMKCkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgID8gYCR7dGl0bGV9YFxuICAgICAgICAgICAgICAgIDogYCR7dGl0bGV9ICgke3RpdGxlRnJvbVVSTCgpfSlgfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhbmcgIT09IFwiZW5cIikge1xuICAgICAgICAgICAgaWYgKHByZXNlbmNlRGF0YS5zdGF0ZSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgKz0gYCAoJHtsYW5nfSlgO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzICs9IGAgKCR7bGFuZ30pYDtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG5pZiAodXBkYXRlQ2FsbGJhY2sucHJlc2VudCkge1xuICAgIGNvbnN0IGRlZmF1bHREYXRhID0geyAuLi5wcmVzZW5jZURhdGEgfTtcbiAgICBwcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXNldERhdGEoZGVmYXVsdERhdGEpO1xuICAgICAgICB1cGRhdGVDYWxsYmFjay5mdW5jdGlvbigpO1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH0pO1xufVxuZWxzZSB7XG4gICAgcHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFVVklMRWxCUVVrc1ZVRkJWU3hIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJReTlETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzUkZMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRlRVFzU1VGQlNTeFpRVUZaTEVkQlFXbENPMGxCUTJoRExFOUJRVThzUlVGQlJTdzJRa0ZCTmtJN1NVRkRkRU1zWVVGQllTeEZRVU5hTEdsRlFVRnBSVHRKUVVOc1JTeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wTkJRMnBETEVOQlFVTTdRVUZEUml4TlFVRk5MR05CUVdNc1IwRkJSenRKUVVOeVFpeFRRVUZUTEVWQlFVVXNTVUZCYTBJN1NVRkROMElzU1VGQlNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZEUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhUUVVGVE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZEUkN4SlFVRkpMRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEV0QlFVc3NTVUZCU1N4RFFVRkRPMGxCUTJoRExFTkJRVU03UTBGRFJDeEZRVWxFTEZOQlFWTXNSMEZCUnl4RFFVTllMR05CUVRSQ08wbEJRek5DTEU5QlFVOHNSVUZCUlN3MlFrRkJOa0k3U1VGRGRFTXNZVUZCWVN4RlFVTmFMR2xGUVVGcFJUdEpRVU5zUlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzBOQlEycERMRVZCUTAwc1JVRkJSVHRKUVVOVUxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6ZERMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNKRkxGbEJRVmtzUjBGQlJ5eEZRVUZGTEVkQlFVY3NWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRia01zUTBGQlF5eEZRVXRFTEZkQlFWY3NSMEZCUnl4RFFVRkRMRkZCUVdkQ0xFVkJRVlVzUlVGQlJUdEpRVU14UXl4UFFVRlBMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUXpsRExFTkJRVU1zUTBGQlF6dEJRVVZJTEVOQlFVTXNSMEZCVXl4RlFVRkZPMGxCUTFnc1NVRkJTU3hWUVVGVkxFTkJRVU1zVVVGQlVTeExRVUZMTEc5Q1FVRnZRanRSUVVNdlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzFOQlEzUkRPMUZCUTBvc1NVRkJTU3hMUVVGaExFTkJRVU03VVVGRGJFSXNUVUZCVFN4WlFVRlpMRWRCUVVjc1IwRkJWeXhGUVVGRkxFTkJRMmhETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hYUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEVWQlEycEVMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRM1pETEZsQlFWa3NSMEZCUnl4SFFVRlhMRVZCUVVVN1dVRkRNMElzVDBGQlR5eFRRVUZUTEVOQlEyWXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVjBGQlZ6dG5Ra0ZET1VJc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTTdaMEpCUTNSQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZEYUVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVTjBRaXhEUVVGRE8xRkJRMGdzUTBGQlF5eERRVUZETzFGQlJVZ3NTVUZCU1R0WlFVTklMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlF6ZEVPMUZCUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3V1VGRFdDeExRVUZMTEVkQlFVY3NXVUZCV1N4RlFVRkZMRU5CUVVNN1UwRkRka0k3VVVGTlJDeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFZEJRVmNzUlVGQlJUdFpRVU55UXl4TlFVRk5MRTlCUVU4c1IwRkJaME03WjBKQlF6VkRMRWxCUVVrc1JVRkJSU3hwUWtGQmFVSTdaMEpCUTNaQ0xFbEJRVWtzUlVGQlJTeDNRa0ZCZDBJN1owSkJRemxDTEVOQlFVTXNSVUZCUlN4dlFrRkJiMEk3WjBKQlEzWkNMRU5CUVVNc1JVRkJSU3h4UWtGQmNVSTdaMEpCUTNoQ0xFTkJRVU1zUlVGQlJTeHhRa0ZCY1VJN1owSkJRM2hDTEVOQlFVTXNSVUZCUlN3d1FrRkJNRUk3WjBKQlF6ZENMRU5CUVVNc1JVRkJSU3gzUWtGQmQwSTdaMEpCUXpOQ0xFTkJRVU1zUlVGQlJTdzJRa0ZCTmtJN1owSkJRMmhETEVOQlFVTXNSVUZCUlN4blFrRkJaMEk3WjBKQlEyNUNMRU5CUVVNc1JVRkJSU3d3UWtGQk1FSTdaMEpCUXpkQ0xFTkJRVU1zUlVGQlJTd3lRa0ZCTWtJN1owSkJRemxDTEVOQlFVTXNSVUZCUlN4blEwRkJaME03WjBKQlEyNURMRVZCUVVVc1JVRkJSU3h2UWtGQmIwSTdaMEpCUTNoQ0xFVkJRVVVzUlVGQlJTdzRRa0ZCT0VJN1owSkJRMnhETEVWQlFVVXNSVUZCUlN4eFFrRkJjVUk3WjBKQlEzcENMRVZCUVVVc1JVRkJSU3d3UWtGQk1FSTdaMEpCUXpsQ0xFVkJRVVVzUlVGQlJTeHZRa0ZCYjBJN1owSkJRM2hDTEVWQlFVVXNSVUZCUlN3NFFrRkJPRUk3WjBKQlEyeERMRWRCUVVjc1JVRkJSU3hyUWtGQmEwSTdaMEpCUTNaQ0xFZEJRVWNzUlVGQlJTdzBRa0ZCTkVJN1owSkJRMnBETEVsQlFVa3NSVUZCUlN4clFrRkJhMEk3WjBKQlEzaENMRWxCUVVrc1JVRkJSU3cwUWtGQk5FSTdaMEpCUTJ4RExFbEJRVWtzUlVGQlJTeHJRMEZCYTBNN1owSkJRM2hETEVsQlFVa3NSVUZCUlN4MVEwRkJkVU03WjBKQlF6ZERMRWxCUVVrc1JVRkJSU3hwUWtGQmFVSTdZVUZEZGtJc1EwRkJRenRaUVVOR0xFOUJRVThzUTBGRFRpeFBRVUZQTEVOQlEwNHNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMmxDUVVNelF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNMVFpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUTFZc1NVRkJTU3huUWtGQlowSXNRMEZEY2tJc1EwRkJRenRSUVVOSUxFTkJRVU1zUTBGQlF6dFJRVlZHTEVsQlEwTXNRMEZEUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGdlFpeGxRVUZsTEVOQlFVTTdXVUZETVVRc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNhVUpCUVdsQ0xFTkJRVU03V1VGRE5VUXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJiMElzWlVGQlpTeERRVUZETEVOQlF6RkVMRU5CUVVNc1NVRkJTU3hMUVVGTExGVkJRVlVzUTBGQlF5eEpRVUZKTzFsQlJURkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1lVRkRkRU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2xDUVVGcFFpeERRVUZETzFsQlEycEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGQldTeERRVUZETzJGQlEyaERMRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRaUVVOc1JDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzJGQlEzcERMRWxCUVVrc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRk8xbEJRMnhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdXVUZET1VNc1dVRkJXU3hEUVVGRExFdEJRVXM3WjBKQlEycENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVzFDTEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEzUkZPMkZCUVUwc1NVRkJTU3haUVVGWkxFVkJRVVVzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZUVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRaUVVOc1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1JVRkJSU3hEUVVGRE8xTkJRM0JETzJGQlFVMHNTVUZCU1N4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3V1VGREwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UTBGQmMwTXNRMEZCUXp0WlFVTTVSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZsQlFWa3NSVUZCUlN4RFFVRkRPMU5CUTNCRE8yRkJRVTBzU1VGQlNTeFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1dVRkRhRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFEwRkJiVU1zUTBGQlF6dFpRVU16UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUlVGQlJTeERRVUZETzFOQlEzQkRPMkZCUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTnlReXhYUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEVWQlEzUkNPMWxCUTBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4TFFVRkxMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzV1VGQldTeEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVOdVJDeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVN1owSkJRMW9zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4TFFVRkxMRmxCUVZrc1JVRkJSU3hIUVVNdlFpeEZRVUZGTEVOQlFVTTdXVUZEU0N4alFVRmpMRU5CUVVNc1VVRkJVU3hIUVVGSExFZEJRVk1zUlVGQlJUdG5Ra0ZEY0VNc1NVRkJTU3haUVVGWkxFVkJRVVVzUzBGQlN5eE5RVUZOTEVsQlFVa3NXVUZCV1N4RlFVRkZMRXRCUVVzc1dVRkJXVHR2UWtGREwwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGQlowSXNRMEZCUXpzN2IwSkJRM0JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVWQlFVVXNRMEZCUXp0WlFVTm9SQ3hEUVVGRExFTkJRVU03VTBGRFJqdGhRVUZOTEVsQlFVa3NXVUZCV1N4RlFVRkZMRXRCUVVzc1RVRkJUU3hGUVVGRk8xbEJRM0pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTTdaMEpCUTNoRUxFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJN1owSkJRMnhDTEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF6dFpRVU53UWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUlVGQlJTeERRVUZETzFOQlEzQkRPMkZCUVUwN1dVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVOd1FpeExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRXRCUVVzc1dVRkJXU3hGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzJkQ1FVTnVSQ3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVWQlFVVTdaMEpCUTFvc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eExRVUZMTEZsQlFWa3NSVUZCUlN4SFFVTXZRaXhGUVVGRkxFTkJRVU03VTBGRFNEdFJRVVZFTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEZsQlFWa3NRMEZCUXl4TFFVRkxPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVsQlFVa3NTMEZCU3l4SlFVRkpMRWRCUVVjc1EwRkJRenM3WjBKQlEzUkVMRmxCUVZrc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eEpRVUZKTEVkQlFVY3NRMEZCUXp0VFFVTXhRenRMUVVORU8wRkJRMFlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVVk1MRWxCUVVrc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJUdEpRVU16UWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFZEJRVWNzV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZUVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1VVRkRjRU1zVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTNaQ0xHTkJRV01zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlEwZzdTMEZCVFR0SlFVTk9MRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMUZCUTNCRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTTdRMEZEU0NKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJjdXJyZW50VVJMIiwiVVJMIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJjdXJyZW50UGF0aCIsInBhdGhuYW1lIiwicmVwbGFjZSIsInNwbGl0IiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwicHJlc2VuY2VEYXRhIiwiZGV0YWlscyIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInVwZGF0ZUNhbGxiYWNrIiwiX2Z1bmN0aW9uIiwiZnVuY3Rpb24iLCJ0aGlzIiwicGFyYW1ldGVyIiwicHJlc2VudCIsInJlc2V0RGF0YSIsImRlZmF1bHREYXRhIiwiZ2V0VVJMUGFyYW0iLCJ1cmxQYXJhbSIsInNlYXJjaFBhcmFtcyIsImdldCIsImhvc3RuYW1lIiwidGl0bGUiLCJhY3Rpb25SZXN1bHQiLCJsYW5nIiwidGl0bGVGcm9tVVJMIiwiZGVjb2RlVVJJIiwic2xpY2UiLCJqb2luIiwicmVwbGFjZUFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImUiLCJuYW1lc3BhY2VEZXRhaWxzIiwiY2xhc3NMaXN0IiwiZmluZCIsInYiLCJ0ZXN0Iiwic3RhdGUiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwib24iLCJhc3luYyIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;