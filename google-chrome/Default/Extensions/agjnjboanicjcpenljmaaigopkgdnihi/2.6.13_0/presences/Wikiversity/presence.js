var __webpack_exports__={};const presence=new Presence({clientId:"733216937336766486"});let currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/");const browsingTimestamp=Math.floor(Date.now()/1e3);let presenceData={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wikiversity/assets/logo.png",startTimestamp:browsingTimestamp};const updateCallback={_function:null,get function(){return this._function},set function(e){this._function=e},get present(){return null!==this._function}},resetData=(e={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wikiversity/assets/logo.png",startTimestamp:browsingTimestamp})=>{currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/"),presenceData={...e}},getURLParam=e=>currentURL.searchParams.get(e);if((()=>{if("www.wikiversity.org"===currentURL.hostname)presenceData.details="On the home page";else{let e;const a=()=>getURLParam("action")||getURLParam("veaction"),[t]=currentURL.hostname.split("."),i=()=>decodeURI(("index.php"===currentPath[1]?getURLParam("title"):currentPath.slice(1).join("/")).replaceAll("_"," "));try{e=document.querySelector("h1").textContent}catch(a){e=i()}const n=()=>({"-2":"Viewing a media","-1":"Viewing a special page",0:"Reading a resource",1:"Viewing a talk page",2:"Viewing a user page",3:"Viewing a user talk page",4:"Viewing a project page",5:"Viewing a project talk page",6:"Viewing a file",7:"Viewing a file talk page",8:"Viewing an interface page",9:"Viewing an interface talk page",10:"Viewing a template",11:"Viewing a template talk page",12:"Viewing a help page",13:"Viewing a help talk page",14:"Viewing a category",15:"Viewing a category talk page",100:"Viewing a school",101:"Viewing a school talk page",102:"Viewing a portal",103:"Viewing a portal talk page",104:"Viewing a topic",105:"Viewing a topic talk page",106:"Viewing a collection",107:"Viewing a collection talk page",118:"Viewing a draft",119:"Viewing a draft talk page",828:"Viewing a module",829:"Viewing a module talk page",2300:"Viewing a gadget",2301:"Viewing a gadget talk page",2302:"Viewing a gadget definition page",2303:"Viewing a gadget definition talk page",2600:"Viewing a topic"}[[...document.querySelector("body").classList].find((e=>/ns--?\d/.test(e))).slice(3)]||"Viewing a page");(document.querySelector("#n-mainpage a")||document.querySelector("#p-navigation a")||document.querySelector(".mw-wiki-logo")).href===currentURL.href?presenceData.details="On the main page":document.querySelector("#wpLoginAttempt")?presenceData.details="Logging in":document.querySelector("#wpCreateaccount")?presenceData.details="Creating an account":document.querySelector(".searchresults")?(presenceData.details="Searching for a page",presenceData.state=document.querySelector("input[type=search]").value):"history"===a()?(presenceData.details="Viewing revision history",presenceData.state=i()):getURLParam("diff")?(presenceData.details="Viewing difference between revisions",presenceData.state=i()):getURLParam("oldid")?(presenceData.details="Viewing an old revision of a page",presenceData.state=i()):document.querySelector("#ca-ve-edit")||getURLParam("veaction")?(presenceData.state=e.toLowerCase()===i().toLowerCase()?`${e}`:`${e} (${i()})`,updateCallback.function=()=>{"edit"===a()||"editsource"===a()?presenceData.details="Editing a page":presenceData.details=n()}):"edit"===a()?(presenceData.details=document.querySelector("#ca-edit")?"Editing a page":"Viewing source",presenceData.state=i()):(presenceData.details=n(),presenceData.state=e.toLowerCase()===i().toLowerCase()?`${e}`:`${e} (${i()})`),"en"!==t&&(presenceData.state?presenceData.state+=` (${t})`:presenceData.details+=` (${t})`)}})(),updateCallback.present){const e={...presenceData};presence.on("UpdateData",(async()=>{resetData(e),updateCallback.function(),presence.setActivity(presenceData)}))}else presence.on("UpdateData",(async()=>{presence.setActivity(presenceData)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxvQ0FDdkJELGFBQWFpQyxNQUFRYixLQUVoQmhDLFNBQVNxQyxjQUFjLGdCQUM1QmIsWUFBWSxhQUNaWixhQUFhaUMsTUFBV2hCLEVBQU1rQixnQkFBa0JmLElBQWVlLGNBQ3pELEdBQUdsQixJQUNILEdBQUdBLE1BQVVHLE9BQ25CaEIsZUFBZUUsU0FBVyxLQUNDLFNBQW5CWSxLQUFnRCxlQUFuQkEsSUFDN0JsQixhQUFhQyxRQUFVLGlCQUV2QkQsYUFBYUMsUUFBVTJCLEdBQWtCLEdBR3pCLFNBQW5CVixLQUNMbEIsYUFBYUMsUUFBVWIsU0FBU3FDLGNBQWMsWUFDeEMsaUJBQ0EsaUJBQ056QixhQUFhaUMsTUFBUWIsTUFHckJwQixhQUFhQyxRQUFVMkIsSUFDdkI1QixhQUFhaUMsTUFBV2hCLEVBQU1rQixnQkFBa0JmLElBQWVlLGNBQ3pELEdBQUdsQixJQUNILEdBQUdBLE1BQVVHLFFBRVYsT0FBVEQsSUFDSW5CLGFBQWFpQyxNQUNiakMsYUFBYWlDLE9BQVMsS0FBS2QsS0FFM0JuQixhQUFhQyxTQUFXLEtBQUtrQixLQUV6QyxDQUNILEVBbEhELEdBbUhJZixlQUFlSyxRQUFTLENBQ3hCLE1BQU1FLEVBQWMsSUFBS1gsY0FDekJqQixTQUFTcUQsR0FBRyxjQUFjQyxVQUN0QjNCLFVBQVVDLEdBQ1ZQLGVBQWVFLFdBQ2Z2QixTQUFTdUQsWUFBWXRDLGFBQWEsR0FFMUMsTUFFSWpCLFNBQVNxRCxHQUFHLGNBQWNDLFVBQ3RCdEQsU0FBU3VELFlBQVl0QyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjczMzIxNjkzNzMzNjc2NjQ4NlwiLFxufSk7XG5sZXQgY3VycmVudFVSTCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZiksIGN1cnJlbnRQYXRoID0gY3VycmVudFVSTC5wYXRobmFtZS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgXCJcIikuc3BsaXQoXCIvXCIpO1xuY29uc3QgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCBwcmVzZW5jZURhdGEgPSB7XG4gICAgZGV0YWlsczogXCJWaWV3aW5nIGFuIHVuc3VwcG9ydGVkIHBhZ2VcIixcbiAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVy9XaWtpdmVyc2l0eS9hc3NldHMvbG9nby5wbmdcIixcbiAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG59O1xuY29uc3QgdXBkYXRlQ2FsbGJhY2sgPSB7XG4gICAgX2Z1bmN0aW9uOiBudWxsLFxuICAgIGdldCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uO1xuICAgIH0sXG4gICAgc2V0IGZ1bmN0aW9uKHBhcmFtZXRlcikge1xuICAgICAgICB0aGlzLl9mdW5jdGlvbiA9IHBhcmFtZXRlcjtcbiAgICB9LFxuICAgIGdldCBwcmVzZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb24gIT09IG51bGw7XG4gICAgfSxcbn0sIHJlc2V0RGF0YSA9IChkZWZhdWx0RGF0YSA9IHtcbiAgICBkZXRhaWxzOiBcIlZpZXdpbmcgYW4gdW5zdXBwb3J0ZWQgcGFnZVwiLFxuICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1dpa2l2ZXJzaXR5L2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbn0pID0+IHtcbiAgICBjdXJyZW50VVJMID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcbiAgICBjdXJyZW50UGF0aCA9IGN1cnJlbnRVUkwucGF0aG5hbWUucmVwbGFjZSgvXlxcL3xcXC8kL2csIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgICBwcmVzZW5jZURhdGEgPSB7IC4uLmRlZmF1bHREYXRhIH07XG59LCBnZXRVUkxQYXJhbSA9ICh1cmxQYXJhbSkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50VVJMLnNlYXJjaFBhcmFtcy5nZXQodXJsUGFyYW0pO1xufTtcbigoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRVUkwuaG9zdG5hbWUgPT09IFwid3d3Lndpa2l2ZXJzaXR5Lm9yZ1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiT24gdGhlIGhvbWUgcGFnZVwiO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgdGl0bGU7XG4gICAgICAgIGNvbnN0IGFjdGlvblJlc3VsdCA9ICgpID0+IGdldFVSTFBhcmFtKFwiYWN0aW9uXCIpIHx8IGdldFVSTFBhcmFtKFwidmVhY3Rpb25cIiksIFtsYW5nXSA9IGN1cnJlbnRVUkwuaG9zdG5hbWUuc3BsaXQoXCIuXCIpLCB0aXRsZUZyb21VUkwgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJKChjdXJyZW50UGF0aFsxXSA9PT0gXCJpbmRleC5waHBcIlxuICAgICAgICAgICAgICAgID8gZ2V0VVJMUGFyYW0oXCJ0aXRsZVwiKVxuICAgICAgICAgICAgICAgIDogY3VycmVudFBhdGguc2xpY2UoMSkuam9pbihcIi9cIikpLnJlcGxhY2VBbGwoXCJfXCIsIFwiIFwiKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aXRsZUZyb21VUkwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lc3BhY2VEZXRhaWxzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IHtcbiAgICAgICAgICAgICAgICBcIi0yXCI6IFwiVmlld2luZyBhIG1lZGlhXCIsXG4gICAgICAgICAgICAgICAgXCItMVwiOiBcIlZpZXdpbmcgYSBzcGVjaWFsIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAwOiBcIlJlYWRpbmcgYSByZXNvdXJjZVwiLFxuICAgICAgICAgICAgICAgIDE6IFwiVmlld2luZyBhIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDI6IFwiVmlld2luZyBhIHVzZXIgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDM6IFwiVmlld2luZyBhIHVzZXIgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgNDogXCJWaWV3aW5nIGEgcHJvamVjdCBwYWdlXCIsXG4gICAgICAgICAgICAgICAgNTogXCJWaWV3aW5nIGEgcHJvamVjdCB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA2OiBcIlZpZXdpbmcgYSBmaWxlXCIsXG4gICAgICAgICAgICAgICAgNzogXCJWaWV3aW5nIGEgZmlsZSB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA4OiBcIlZpZXdpbmcgYW4gaW50ZXJmYWNlIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA5OiBcIlZpZXdpbmcgYW4gaW50ZXJmYWNlIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDEwOiBcIlZpZXdpbmcgYSB0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIDExOiBcIlZpZXdpbmcgYSB0ZW1wbGF0ZSB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAxMjogXCJWaWV3aW5nIGEgaGVscCBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTM6IFwiVmlld2luZyBhIGhlbHAgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTQ6IFwiVmlld2luZyBhIGNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgMTU6IFwiVmlld2luZyBhIGNhdGVnb3J5IHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDEwMDogXCJWaWV3aW5nIGEgc2Nob29sXCIsXG4gICAgICAgICAgICAgICAgMTAxOiBcIlZpZXdpbmcgYSBzY2hvb2wgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTAyOiBcIlZpZXdpbmcgYSBwb3J0YWxcIixcbiAgICAgICAgICAgICAgICAxMDM6IFwiVmlld2luZyBhIHBvcnRhbCB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAxMDQ6IFwiVmlld2luZyBhIHRvcGljXCIsXG4gICAgICAgICAgICAgICAgMTA1OiBcIlZpZXdpbmcgYSB0b3BpYyB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAxMDY6IFwiVmlld2luZyBhIGNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAxMDc6IFwiVmlld2luZyBhIGNvbGxlY3Rpb24gdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTE4OiBcIlZpZXdpbmcgYSBkcmFmdFwiLFxuICAgICAgICAgICAgICAgIDExOTogXCJWaWV3aW5nIGEgZHJhZnQgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgODI4OiBcIlZpZXdpbmcgYSBtb2R1bGVcIixcbiAgICAgICAgICAgICAgICA4Mjk6IFwiVmlld2luZyBhIG1vZHVsZSB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAyMzAwOiBcIlZpZXdpbmcgYSBnYWRnZXRcIixcbiAgICAgICAgICAgICAgICAyMzAxOiBcIlZpZXdpbmcgYSBnYWRnZXQgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMjMwMjogXCJWaWV3aW5nIGEgZ2FkZ2V0IGRlZmluaXRpb24gcGFnZVwiLFxuICAgICAgICAgICAgICAgIDIzMDM6IFwiVmlld2luZyBhIGdhZGdldCBkZWZpbml0aW9uIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDI2MDA6IFwiVmlld2luZyBhIHRvcGljXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIChkZXRhaWxzW1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3RdXG4gICAgICAgICAgICAgICAgLmZpbmQodiA9PiAvbnMtLT9cXGQvLnRlc3QodikpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDMpXSB8fCBcIlZpZXdpbmcgYSBwYWdlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbi1tYWlucGFnZSBhXCIpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtbmF2aWdhdGlvbiBhXCIpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm13LXdpa2ktbG9nb1wiKSkuaHJlZiA9PT0gY3VycmVudFVSTC5ocmVmKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIk9uIHRoZSBtYWluIHBhZ2VcIjtcbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cExvZ2luQXR0ZW1wdFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb2dnaW5nIGluXCI7XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3BDcmVhdGVhY2NvdW50XCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNyZWF0aW5nIGFuIGFjY291bnRcIjtcbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hyZXN1bHRzXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nIGZvciBhIHBhZ2VcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9c2VhcmNoXVwiKS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY3Rpb25SZXN1bHQoKSA9PT0gXCJoaXN0b3J5XCIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHJldmlzaW9uIGhpc3RvcnlcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlRnJvbVVSTCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdldFVSTFBhcmFtKFwiZGlmZlwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgZGlmZmVyZW5jZSBiZXR3ZWVuIHJldmlzaW9uc1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGVGcm9tVVJMKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2V0VVJMUGFyYW0oXCJvbGRpZFwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYW4gb2xkIHJldmlzaW9uIG9mIGEgcGFnZVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGVGcm9tVVJMKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYS12ZS1lZGl0XCIpIHx8XG4gICAgICAgICAgICBnZXRVUkxQYXJhbShcInZlYWN0aW9uXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHt0aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aXRsZUZyb21VUkwoKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgPyBgJHt0aXRsZX1gXG4gICAgICAgICAgICAgICAgOiBgJHt0aXRsZX0gKCR7dGl0bGVGcm9tVVJMKCl9KWB9YDtcbiAgICAgICAgICAgIHVwZGF0ZUNhbGxiYWNrLmZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25SZXN1bHQoKSA9PT0gXCJlZGl0XCIgfHwgYWN0aW9uUmVzdWx0KCkgPT09IFwiZWRpdHNvdXJjZVwiKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiRWRpdGluZyBhIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gbmFtZXNwYWNlRGV0YWlscygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY3Rpb25SZXN1bHQoKSA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYS1lZGl0XCIpXG4gICAgICAgICAgICAgICAgPyBcIkVkaXRpbmcgYSBwYWdlXCJcbiAgICAgICAgICAgICAgICA6IFwiVmlld2luZyBzb3VyY2VcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlRnJvbVVSTCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBuYW1lc3BhY2VEZXRhaWxzKCk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHt0aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aXRsZUZyb21VUkwoKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgPyBgJHt0aXRsZX1gXG4gICAgICAgICAgICAgICAgOiBgJHt0aXRsZX0gKCR7dGl0bGVGcm9tVVJMKCl9KWB9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFuZyAhPT0gXCJlblwiKSB7XG4gICAgICAgICAgICBpZiAocHJlc2VuY2VEYXRhLnN0YXRlKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSArPSBgICgke2xhbmd9KWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgKz0gYCAoJHtsYW5nfSlgO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcbmlmICh1cGRhdGVDYWxsYmFjay5wcmVzZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdERhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSB9O1xuICAgIHByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJlc2V0RGF0YShkZWZhdWx0RGF0YSk7XG4gICAgICAgIHVwZGF0ZUNhbGxiYWNrLmZ1bmN0aW9uKCk7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfSk7XG59XG5lbHNlIHtcbiAgICBwcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0zUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1EwRkJRenRCUVVWSUxFbEJRVWtzVlVGQlZTeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlF5OURMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNSRkxFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGVFUXNTVUZCU1N4WlFVRlpMRWRCUVdsQ08wbEJRMmhETEU5QlFVOHNSVUZCUlN3MlFrRkJOa0k3U1VGRGRFTXNZVUZCWVN4RlFVTmFMR3RGUVVGclJUdEpRVU51UlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzBOQlEycERMRU5CUVVNN1FVRkRSaXhOUVVGTkxHTkJRV01zUjBGQlJ6dEpRVU55UWl4VFFVRlRMRVZCUVVVc1NVRkJhMEk3U1VGRE4wSXNTVUZCU1N4UlFVRlJPMUZCUTFnc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkRSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFRRVUZUTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkRSQ3hKUVVGSkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRXRCUVVzc1NVRkJTU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdRMEZEUkN4RlFVbEVMRk5CUVZNc1IwRkJSeXhEUVVOWUxHTkJRVFJDTzBsQlF6TkNMRTlCUVU4c1JVRkJSU3cyUWtGQk5rSTdTVUZEZEVNc1lVRkJZU3hGUVVOYUxHdEZRVUZyUlR0SlFVTnVSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENPME5CUTJwRExFVkJRMDBzUlVGQlJUdEpRVU5VTEZWQlFWVXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUXpkRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM0pGTEZsQlFWa3NSMEZCUnl4RlFVRkZMRWRCUVVjc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRGJrTXNRMEZCUXl4RlFVdEVMRmRCUVZjc1IwRkJSeXhEUVVGRExGRkJRV2RDTEVWQlFWVXNSVUZCUlR0SlFVTXhReXhQUVVGUExGVkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRemxETEVOQlFVTXNRMEZCUXp0QlFVVklMRU5CUVVNc1IwRkJVeXhGUVVGRk8wbEJRMWdzU1VGQlNTeFZRVUZWTEVOQlFVTXNVVUZCVVN4TFFVRkxMSEZDUVVGeFFqdFJRVU5vUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMU5CUTNSRE8xRkJRMG9zU1VGQlNTeExRVUZoTEVOQlFVTTdVVUZEYkVJc1RVRkJUU3haUVVGWkxFZEJRVWNzUjBGQlZ5eEZRVUZGTEVOQlEyaERMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFhRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUTJwRUxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEzWkRMRmxCUVZrc1IwRkJSeXhIUVVGWExFVkJRVVU3V1VGRE0wSXNUMEZCVHl4VFFVRlRMRU5CUTJZc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWMEZCVnp0blFrRkRPVUlzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNN1owSkJRM1JDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkRhRU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVOMFFpeERRVUZETzFGQlEwZ3NRMEZCUXl4RFFVRkRPMUZCUlVnc1NVRkJTVHRaUVVOSUxFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dFRRVU5xUkR0UlFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJRMWdzUzBGQlN5eEhRVUZITEZsQlFWa3NSVUZCUlN4RFFVRkRPMU5CUTNaQ08xRkJUVVFzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhIUVVGWExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4UFFVRlBMRWRCUVdkRE8yZENRVU0xUXl4SlFVRkpMRVZCUVVVc2FVSkJRV2xDTzJkQ1FVTjJRaXhKUVVGSkxFVkJRVVVzZDBKQlFYZENPMmRDUVVNNVFpeERRVUZETEVWQlFVVXNiMEpCUVc5Q08yZENRVU4yUWl4RFFVRkRMRVZCUVVVc2NVSkJRWEZDTzJkQ1FVTjRRaXhEUVVGRExFVkJRVVVzY1VKQlFYRkNPMmRDUVVONFFpeERRVUZETEVWQlFVVXNNRUpCUVRCQ08yZENRVU0zUWl4RFFVRkRMRVZCUVVVc2QwSkJRWGRDTzJkQ1FVTXpRaXhEUVVGRExFVkJRVVVzTmtKQlFUWkNPMmRDUVVOb1F5eERRVUZETEVWQlFVVXNaMEpCUVdkQ08yZENRVU51UWl4RFFVRkRMRVZCUVVVc01FSkJRVEJDTzJkQ1FVTTNRaXhEUVVGRExFVkJRVVVzTWtKQlFUSkNPMmRDUVVNNVFpeERRVUZETEVWQlFVVXNaME5CUVdkRE8yZENRVU51UXl4RlFVRkZMRVZCUVVVc2IwSkJRVzlDTzJkQ1FVTjRRaXhGUVVGRkxFVkJRVVVzT0VKQlFUaENPMmRDUVVOc1F5eEZRVUZGTEVWQlFVVXNjVUpCUVhGQ08yZENRVU42UWl4RlFVRkZMRVZCUVVVc01FSkJRVEJDTzJkQ1FVTTVRaXhGUVVGRkxFVkJRVVVzYjBKQlFXOUNPMmRDUVVONFFpeEZRVUZGTEVWQlFVVXNPRUpCUVRoQ08yZENRVU5zUXl4SFFVRkhMRVZCUVVVc2EwSkJRV3RDTzJkQ1FVTjJRaXhIUVVGSExFVkJRVVVzTkVKQlFUUkNPMmRDUVVOcVF5eEhRVUZITEVWQlFVVXNhMEpCUVd0Q08yZENRVU4yUWl4SFFVRkhMRVZCUVVVc05FSkJRVFJDTzJkQ1FVTnFReXhIUVVGSExFVkJRVVVzYVVKQlFXbENPMmRDUVVOMFFpeEhRVUZITEVWQlFVVXNNa0pCUVRKQ08yZENRVU5vUXl4SFFVRkhMRVZCUVVVc2MwSkJRWE5DTzJkQ1FVTXpRaXhIUVVGSExFVkJRVVVzWjBOQlFXZERPMmRDUVVOeVF5eEhRVUZITEVWQlFVVXNhVUpCUVdsQ08yZENRVU4wUWl4SFFVRkhMRVZCUVVVc01rSkJRVEpDTzJkQ1FVTm9ReXhIUVVGSExFVkJRVVVzYTBKQlFXdENPMmRDUVVOMlFpeEhRVUZITEVWQlFVVXNORUpCUVRSQ08yZENRVU5xUXl4SlFVRkpMRVZCUVVVc2EwSkJRV3RDTzJkQ1FVTjRRaXhKUVVGSkxFVkJRVVVzTkVKQlFUUkNPMmRDUVVOc1F5eEpRVUZKTEVWQlFVVXNhME5CUVd0RE8yZENRVU40UXl4SlFVRkpMRVZCUVVVc2RVTkJRWFZETzJkQ1FVTTNReXhKUVVGSkxFVkJRVVVzYVVKQlFXbENPMkZCUTNaQ0xFTkJRVU03V1VGRFJpeFBRVUZQTEVOQlEwNHNUMEZCVHl4RFFVTk9MRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRwUWtGRE0wTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRE5VSXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVOV0xFbEJRVWtzWjBKQlFXZENMRU5CUTNKQ0xFTkJRVU03VVVGRFNDeERRVUZETEVOQlFVTTdVVUZWUml4SlFVTkRMRU5CUTBNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmIwSXNaVUZCWlN4RFFVRkRPMWxCUXpGRUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFXOUNMR2xDUVVGcFFpeERRVUZETzFsQlF6VkVMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVzlDTEdWQlFXVXNRMEZCUXl4RFFVTXhSQ3hEUVVGRExFbEJRVWtzUzBGQlN5eFZRVUZWTEVOQlFVTXNTVUZCU1R0WlFVVXhRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yRkJRM1JETEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0WlFVTnFSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZsQlFWa3NRMEZCUXp0aFFVTm9ReXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03V1VGRGJFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0aFFVTjZReXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUlVGQlJUdFpRVU5zUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMWxCUXpsRExGbEJRVmtzUTBGQlF5eExRVUZMTzJkQ1FVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ0UWl4dlFrRkJiMElzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTjBSVHRoUVVGTkxFbEJRVWtzV1VGQldTeEZRVUZGTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUTNoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU03V1VGRGJFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhaUVVGWkxFVkJRVVVzUTBGQlF6dFRRVU53UXp0aFFVRk5MRWxCUVVrc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlF5OUNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYzBOQlFYTkRMRU5CUVVNN1dVRkRPVVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRVZCUVVVc1EwRkJRenRUUVVOd1F6dGhRVUZOTEVsQlFVa3NWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJRMmhETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2JVTkJRVzFETEVOQlFVTTdXVUZETTBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVWQlFVVXNRMEZCUXp0VFFVTndRenRoUVVGTkxFbEJRMDRzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNN1dVRkRja01zVjBGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RlFVTjBRanRaUVVORUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZEY0VJc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeExRVUZMTEZsQlFWa3NSVUZCUlN4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRGJrUXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRk8yZENRVU5hTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1MwRkJTeXhaUVVGWkxFVkJRVVVzUjBGREwwSXNSVUZCUlN4RFFVRkRPMWxCUTBnc1kwRkJZeXhEUVVGRExGRkJRVkVzUjBGQlJ5eEhRVUZUTEVWQlFVVTdaMEpCUTNCRExFbEJRVWtzV1VGQldTeEZRVUZGTEV0QlFVc3NUVUZCVFN4SlFVRkpMRmxCUVZrc1JVRkJSU3hMUVVGTExGbEJRVms3YjBKQlF5OUVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWjBKQlFXZENMRU5CUVVNN08yOUNRVU53UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1dVRkRhRVFzUTBGQlF5eERRVUZETzFOQlEwWTdZVUZCVFN4SlFVRkpMRmxCUVZrc1JVRkJSU3hMUVVGTExFMUJRVTBzUlVGQlJUdFpRVU55UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRPMmRDUVVONFJDeERRVUZETEVOQlFVTXNaMEpCUVdkQ08yZENRVU5zUWl4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVOQlFVTTdXVUZEY0VJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVWQlFVVXNRMEZCUXp0VFFVTndRenRoUVVGTk8xbEJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUlVGQlJTeERRVUZETzFsQlF6RkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGRGNFSXNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExGbEJRVmtzUlVGQlJTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkRia1FzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZPMmRDUVVOYUxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NTMEZCU3l4WlFVRlpMRVZCUVVVc1IwRkRMMElzUlVGQlJTeERRVUZETzFOQlEwZzdVVUZGUkN4SlFVRkpMRWxCUVVrc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGJFSXNTVUZCU1N4WlFVRlpMRU5CUVVNc1MwRkJTenRuUWtGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SlFVRkpMRXRCUVVzc1NVRkJTU3hIUVVGSExFTkJRVU03TzJkQ1FVTjBSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NTVUZCU1N4SFFVRkhMRU5CUVVNN1UwRkRNVU03UzBGRFJEdEJRVU5HTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkZUQ3hKUVVGSkxHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVTdTVUZETTBJc1RVRkJUU3hYUVVGWExFZEJRVWNzUlVGQlJTeEhRVUZITEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUTNoRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8xRkJRM0JETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVOMlFpeGpRVUZqTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRNVUlzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTklPMHRCUVUwN1NVRkRUaXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRSUVVOd1F5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRM0JETEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUTBnaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiY3VycmVudFVSTCIsIlVSTCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJzcGxpdCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInByZXNlbmNlRGF0YSIsImRldGFpbHMiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJ1cGRhdGVDYWxsYmFjayIsIl9mdW5jdGlvbiIsImZ1bmN0aW9uIiwidGhpcyIsInBhcmFtZXRlciIsInByZXNlbnQiLCJyZXNldERhdGEiLCJkZWZhdWx0RGF0YSIsImdldFVSTFBhcmFtIiwidXJsUGFyYW0iLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJob3N0bmFtZSIsInRpdGxlIiwiYWN0aW9uUmVzdWx0IiwibGFuZyIsInRpdGxlRnJvbVVSTCIsImRlY29kZVVSSSIsInNsaWNlIiwiam9pbiIsInJlcGxhY2VBbGwiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJlIiwibmFtZXNwYWNlRGV0YWlscyIsImNsYXNzTGlzdCIsImZpbmQiLCJ2IiwidGVzdCIsInN0YXRlIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIm9uIiwiYXN5bmMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;