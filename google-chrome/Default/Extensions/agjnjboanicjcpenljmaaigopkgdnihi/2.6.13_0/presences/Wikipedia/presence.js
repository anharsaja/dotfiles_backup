var __webpack_exports__={};const presence=new Presence({clientId:"609364070684033044"});let currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/");const browsingTimestamp=Math.floor(Date.now()/1e3);let presenceData={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wikipedia/assets/logo.png",startTimestamp:browsingTimestamp};const updateCallback={_function:null,get function(){return this._function},set function(e){this._function=e},get present(){return null!==this._function}},resetData=(e={details:"Viewing an unsupported page",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wikipedia/assets/logo.png",startTimestamp:browsingTimestamp})=>{currentURL=new URL(document.location.href),currentPath=currentURL.pathname.replace(/^\/|\/$/g,"").split("/"),presenceData={...e}},getURLParam=e=>currentURL.searchParams.get(e);if((()=>{if("www.wikipedia.org"===currentURL.hostname)presenceData.details="On the home page";else{let e;const a=()=>getURLParam("action")||getURLParam("veaction"),[t]=currentURL.hostname.split("."),i=()=>decodeURI(("index.php"===currentPath[1]?getURLParam("title"):currentPath.slice(1).join("/")).replaceAll("_"," "));try{e=document.querySelector("h1").textContent}catch(a){e=i()}const n=()=>({"-2":"Viewing a media","-1":"Viewing a special page",0:"Reading an article",1:"Viewing a talk page",2:"Viewing a user page",3:"Viewing a user talk page",4:"Viewing a project page",5:"Viewing a project talk page",6:"Viewing a file",7:"Viewing a file talk page",8:"Viewing an interface page",9:"Viewing an interface talk page",10:"Viewing a template",11:"Viewing a template talk page",12:"Viewing a help page",13:"Viewing a help talk page",14:"Viewing a category",15:"Viewing a category talk page",100:"Viewing a portal",101:"Viewing a portal talk page",118:"Viewing a draft",119:"Viewing a draft talk page",710:"Viewing a media's subtitles",711:"Viewing a media's subtitles talk page",828:"Viewing a module",829:"Viewing a module talk page",108:"Viewing a Wikipedia book",109:"Viewing a Wikipedia book talk page",446:"Viewing an Education Program page",447:"Viewing an Education Program talk page",2300:"Viewing a gadget",2301:"Viewing a gadget talk page",2302:"Viewing a gadget definition page",2303:"Viewing a gadget definition talk page",2600:"Viewing a topic"}[[...document.querySelector("body").classList].find((e=>/ns--?\d/.test(e))).split("[",1)[0].slice(3)]||"Viewing a page");(document.querySelector("#n-mainpage a")||document.querySelector("#p-navigation a")||document.querySelector(".mw-wiki-logo")).href===currentURL.href?presenceData.details="On the main page":document.querySelector("#wpLoginAttempt")?presenceData.details="Logging in":document.querySelector("#wpCreateaccount")?presenceData.details="Creating an account":document.querySelector(".searchresults")?(presenceData.details="Searching for a page",presenceData.state=document.querySelector("input[type=search]").value):"history"===a()?(presenceData.details="Viewing revision history",presenceData.state=i()):getURLParam("diff")?(presenceData.details="Viewing difference between revisions",presenceData.state=i()):getURLParam("oldid")?(presenceData.details="Viewing an old revision of a page",presenceData.state=i()):document.querySelector("#ca-ve-edit")||getURLParam("veaction")?(presenceData.state=e.toLowerCase()===i().toLowerCase()?`${e}`:`${e} (${i()})`,updateCallback.function=()=>{"edit"===a()||"editsource"===a()?presenceData.details="Editing a page":presenceData.details=n()}):"edit"===a()?(presenceData.details=document.querySelector("#ca-edit")?"Editing a page":"Viewing source",presenceData.state=i()):(presenceData.details=n(),presenceData.state=e.toLowerCase()===i().toLowerCase()?`${e}`:`${e} (${i()})`),"en"!==t&&(presenceData.state?presenceData.state+=` (${t})`:presenceData.details+=` (${t})`)}})(),updateCallback.present){const e={...presenceData};presence.on("UpdateData",(async()=>{resetData(e),updateCallback.function(),presence.setActivity(presenceData)}))}else presence.on("UpdateData",(async()=>{presence.setActivity(presenceData)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixZQUFZLFVBQ2pCWixhQUFhQyxRQUFVLG9DQUN2QkQsYUFBYWlDLE1BQVFiLEtBRWhCaEMsU0FBU3FDLGNBQWMsZ0JBQzVCYixZQUFZLGFBQ1paLGFBQWFpQyxNQUFXaEIsRUFBTWtCLGdCQUFrQmYsSUFBZWUsY0FDekQsR0FBR2xCLElBQ0gsR0FBR0EsTUFBVUcsT0FDbkJoQixlQUFlRSxTQUFXLEtBQ0MsU0FBbkJZLEtBQWdELGVBQW5CQSxJQUM3QmxCLGFBQWFDLFFBQVUsaUJBRXZCRCxhQUFhQyxRQUFVMkIsR0FBa0IsR0FHekIsU0FBbkJWLEtBQ0xsQixhQUFhQyxRQUFVYixTQUFTcUMsY0FBYyxZQUN4QyxpQkFDQSxpQkFDTnpCLGFBQWFpQyxNQUFRYixNQUdyQnBCLGFBQWFDLFFBQVUyQixJQUN2QjVCLGFBQWFpQyxNQUFXaEIsRUFBTWtCLGdCQUFrQmYsSUFBZWUsY0FDekQsR0FBR2xCLElBQ0gsR0FBR0EsTUFBVUcsUUFFVixPQUFURCxJQUNJbkIsYUFBYWlDLE1BQ2JqQyxhQUFhaUMsT0FBUyxLQUFLZCxLQUUzQm5CLGFBQWFDLFNBQVcsS0FBS2tCLEtBRXpDLENBQ0gsRUFsSEQsR0FtSElmLGVBQWVLLFFBQVMsQ0FDeEIsTUFBTUUsRUFBYyxJQUFLWCxjQUN6QmpCLFNBQVNxRCxHQUFHLGNBQWNDLFVBQ3RCM0IsVUFBVUMsR0FDVlAsZUFBZUUsV0FDZnZCLFNBQVN1RCxZQUFZdEMsYUFBYSxHQUUxQyxNQUVJakIsU0FBU3FELEdBQUcsY0FBY0MsVUFDdEJ0RCxTQUFTdUQsWUFBWXRDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjA5MzY0MDcwNjg0MDMzMDQ0XCIsXG59KTtcbmxldCBjdXJyZW50VVJMID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKSwgY3VycmVudFBhdGggPSBjdXJyZW50VVJMLnBhdGhuYW1lLnJlcGxhY2UoL15cXC98XFwvJC9nLCBcIlwiKS5zcGxpdChcIi9cIik7XG5jb25zdCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xubGV0IHByZXNlbmNlRGF0YSA9IHtcbiAgICBkZXRhaWxzOiBcIlZpZXdpbmcgYW4gdW5zdXBwb3J0ZWQgcGFnZVwiLFxuICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1dpa2lwZWRpYS9hc3NldHMvbG9nby5wbmdcIixcbiAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG59O1xuY29uc3QgdXBkYXRlQ2FsbGJhY2sgPSB7XG4gICAgX2Z1bmN0aW9uOiBudWxsLFxuICAgIGdldCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uO1xuICAgIH0sXG4gICAgc2V0IGZ1bmN0aW9uKHBhcmFtZXRlcikge1xuICAgICAgICB0aGlzLl9mdW5jdGlvbiA9IHBhcmFtZXRlcjtcbiAgICB9LFxuICAgIGdldCBwcmVzZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb24gIT09IG51bGw7XG4gICAgfSxcbn0sIHJlc2V0RGF0YSA9IChkZWZhdWx0RGF0YSA9IHtcbiAgICBkZXRhaWxzOiBcIlZpZXdpbmcgYW4gdW5zdXBwb3J0ZWQgcGFnZVwiLFxuICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1dpa2lwZWRpYS9hc3NldHMvbG9nby5wbmdcIixcbiAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG59KSA9PiB7XG4gICAgY3VycmVudFVSTCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgY3VycmVudFBhdGggPSBjdXJyZW50VVJMLnBhdGhuYW1lLnJlcGxhY2UoL15cXC98XFwvJC9nLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gICAgcHJlc2VuY2VEYXRhID0geyAuLi5kZWZhdWx0RGF0YSB9O1xufSwgZ2V0VVJMUGFyYW0gPSAodXJsUGFyYW0pID0+IHtcbiAgICByZXR1cm4gY3VycmVudFVSTC5zZWFyY2hQYXJhbXMuZ2V0KHVybFBhcmFtKTtcbn07XG4oKCkgPT4ge1xuICAgIGlmIChjdXJyZW50VVJMLmhvc3RuYW1lID09PSBcInd3dy53aWtpcGVkaWEub3JnXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJPbiB0aGUgaG9tZSBwYWdlXCI7XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgY29uc3QgYWN0aW9uUmVzdWx0ID0gKCkgPT4gZ2V0VVJMUGFyYW0oXCJhY3Rpb25cIikgfHwgZ2V0VVJMUGFyYW0oXCJ2ZWFjdGlvblwiKSwgW2xhbmddID0gY3VycmVudFVSTC5ob3N0bmFtZS5zcGxpdChcIi5cIiksIHRpdGxlRnJvbVVSTCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUkkoKGN1cnJlbnRQYXRoWzFdID09PSBcImluZGV4LnBocFwiXG4gICAgICAgICAgICAgICAgPyBnZXRVUkxQYXJhbShcInRpdGxlXCIpXG4gICAgICAgICAgICAgICAgOiBjdXJyZW50UGF0aC5zbGljZSgxKS5qb2luKFwiL1wiKSkucmVwbGFjZUFsbChcIl9cIiwgXCIgXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRpdGxlRnJvbVVSTCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVzcGFjZURldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0ge1xuICAgICAgICAgICAgICAgIFwiLTJcIjogXCJWaWV3aW5nIGEgbWVkaWFcIixcbiAgICAgICAgICAgICAgICBcIi0xXCI6IFwiVmlld2luZyBhIHNwZWNpYWwgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDA6IFwiUmVhZGluZyBhbiBhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgMTogXCJWaWV3aW5nIGEgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMjogXCJWaWV3aW5nIGEgdXNlciBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMzogXCJWaWV3aW5nIGEgdXNlciB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA0OiBcIlZpZXdpbmcgYSBwcm9qZWN0IHBhZ2VcIixcbiAgICAgICAgICAgICAgICA1OiBcIlZpZXdpbmcgYSBwcm9qZWN0IHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDY6IFwiVmlld2luZyBhIGZpbGVcIixcbiAgICAgICAgICAgICAgICA3OiBcIlZpZXdpbmcgYSBmaWxlIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDg6IFwiVmlld2luZyBhbiBpbnRlcmZhY2UgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDk6IFwiVmlld2luZyBhbiBpbnRlcmZhY2UgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTA6IFwiVmlld2luZyBhIHRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgMTE6IFwiVmlld2luZyBhIHRlbXBsYXRlIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDEyOiBcIlZpZXdpbmcgYSBoZWxwIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAxMzogXCJWaWV3aW5nIGEgaGVscCB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAxNDogXCJWaWV3aW5nIGEgY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAxNTogXCJWaWV3aW5nIGEgY2F0ZWdvcnkgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMTAwOiBcIlZpZXdpbmcgYSBwb3J0YWxcIixcbiAgICAgICAgICAgICAgICAxMDE6IFwiVmlld2luZyBhIHBvcnRhbCB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAxMTg6IFwiVmlld2luZyBhIGRyYWZ0XCIsXG4gICAgICAgICAgICAgICAgMTE5OiBcIlZpZXdpbmcgYSBkcmFmdCB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA3MTA6IFwiVmlld2luZyBhIG1lZGlhJ3Mgc3VidGl0bGVzXCIsXG4gICAgICAgICAgICAgICAgNzExOiBcIlZpZXdpbmcgYSBtZWRpYSdzIHN1YnRpdGxlcyB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA4Mjg6IFwiVmlld2luZyBhIG1vZHVsZVwiLFxuICAgICAgICAgICAgICAgIDgyOTogXCJWaWV3aW5nIGEgbW9kdWxlIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDEwODogXCJWaWV3aW5nIGEgV2lraXBlZGlhIGJvb2tcIixcbiAgICAgICAgICAgICAgICAxMDk6IFwiVmlld2luZyBhIFdpa2lwZWRpYSBib29rIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDQ0NjogXCJWaWV3aW5nIGFuIEVkdWNhdGlvbiBQcm9ncmFtIHBhZ2VcIixcbiAgICAgICAgICAgICAgICA0NDc6IFwiVmlld2luZyBhbiBFZHVjYXRpb24gUHJvZ3JhbSB0YWxrIHBhZ2VcIixcbiAgICAgICAgICAgICAgICAyMzAwOiBcIlZpZXdpbmcgYSBnYWRnZXRcIixcbiAgICAgICAgICAgICAgICAyMzAxOiBcIlZpZXdpbmcgYSBnYWRnZXQgdGFsayBwYWdlXCIsXG4gICAgICAgICAgICAgICAgMjMwMjogXCJWaWV3aW5nIGEgZ2FkZ2V0IGRlZmluaXRpb24gcGFnZVwiLFxuICAgICAgICAgICAgICAgIDIzMDM6IFwiVmlld2luZyBhIGdhZGdldCBkZWZpbml0aW9uIHRhbGsgcGFnZVwiLFxuICAgICAgICAgICAgICAgIDI2MDA6IFwiVmlld2luZyBhIHRvcGljXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIChkZXRhaWxzW1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3RdXG4gICAgICAgICAgICAgICAgLmZpbmQodiA9PiAvbnMtLT9cXGQvLnRlc3QodikpXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiW1wiLCAxKVswXVxuICAgICAgICAgICAgICAgIC5zbGljZSgzKV0gfHwgXCJWaWV3aW5nIGEgcGFnZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI24tbWFpbnBhZ2UgYVwiKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLW5hdmlnYXRpb24gYVwiKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdy13aWtpLWxvZ29cIikpLmhyZWYgPT09IGN1cnJlbnRVUkwuaHJlZilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJPbiB0aGUgbWFpbiBwYWdlXCI7XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3BMb2dpbkF0dGVtcHRcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTG9nZ2luZyBpblwiO1xuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dwQ3JlYXRlYWNjb3VudFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDcmVhdGluZyBhbiBhY2NvdW50XCI7XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNocmVzdWx0c1wiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3IgYSBwYWdlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT1zZWFyY2hdXCIpLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvblJlc3VsdCgpID09PSBcImhpc3RvcnlcIikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgcmV2aXNpb24gaGlzdG9yeVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGVGcm9tVVJMKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2V0VVJMUGFyYW0oXCJkaWZmXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBkaWZmZXJlbmNlIGJldHdlZW4gcmV2aXNpb25zXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZUZyb21VUkwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnZXRVUkxQYXJhbShcIm9sZGlkXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbiBvbGQgcmV2aXNpb24gb2YgYSBwYWdlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZUZyb21VUkwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhLXZlLWVkaXRcIikgfHxcbiAgICAgICAgICAgIGdldFVSTFBhcmFtKFwidmVhY3Rpb25cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3RpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHRpdGxlRnJvbVVSTCgpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICA/IGAke3RpdGxlfWBcbiAgICAgICAgICAgICAgICA6IGAke3RpdGxlfSAoJHt0aXRsZUZyb21VUkwoKX0pYH1gO1xuICAgICAgICAgICAgdXBkYXRlQ2FsbGJhY2suZnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvblJlc3VsdCgpID09PSBcImVkaXRcIiB8fCBhY3Rpb25SZXN1bHQoKSA9PT0gXCJlZGl0c291cmNlXCIpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFZGl0aW5nIGEgcGFnZVwiO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBuYW1lc3BhY2VEZXRhaWxzKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvblJlc3VsdCgpID09PSBcImVkaXRcIikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhLWVkaXRcIilcbiAgICAgICAgICAgICAgICA/IFwiRWRpdGluZyBhIHBhZ2VcIlxuICAgICAgICAgICAgICAgIDogXCJWaWV3aW5nIHNvdXJjZVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGVGcm9tVVJMKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IG5hbWVzcGFjZURldGFpbHMoKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke3RpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHRpdGxlRnJvbVVSTCgpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICA/IGAke3RpdGxlfWBcbiAgICAgICAgICAgICAgICA6IGAke3RpdGxlfSAoJHt0aXRsZUZyb21VUkwoKX0pYH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYW5nICE9PSBcImVuXCIpIHtcbiAgICAgICAgICAgIGlmIChwcmVzZW5jZURhdGEuc3RhdGUpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlICs9IGAgKCR7bGFuZ30pYDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyArPSBgICgke2xhbmd9KWA7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuaWYgKHVwZGF0ZUNhbGxiYWNrLnByZXNlbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IHsgLi4ucHJlc2VuY2VEYXRhIH07XG4gICAgcHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgcmVzZXREYXRhKGRlZmF1bHREYXRhKTtcbiAgICAgICAgdXBkYXRlQ2FsbGJhY2suZnVuY3Rpb24oKTtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICB9KTtcbn1cbmVsc2Uge1xuICAgIHByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEVsQlFVa3NWVUZCVlN4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUXk5RExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM1JGTEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEZUVRc1NVRkJTU3haUVVGWkxFZEJRV2xDTzBsQlEyaERMRTlCUVU4c1JVRkJSU3cyUWtGQk5rSTdTVUZEZEVNc1lVRkJZU3hGUVVOYUxHZEZRVUZuUlR0SlFVTnFSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENPME5CUTJwRExFTkJRVU03UVVGRFJpeE5RVUZOTEdOQlFXTXNSMEZCUnp0SlFVTnlRaXhUUVVGVExFVkJRVVVzU1VGQmEwSTdTVUZETjBJc1NVRkJTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRFJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4VFFVRlRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRFJDeEpRVUZKTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFdEJRVXNzU1VGQlNTeERRVUZETzBsQlEyaERMRU5CUVVNN1EwRkRSQ3hGUVVsRUxGTkJRVk1zUjBGQlJ5eERRVU5ZTEdOQlFUUkNPMGxCUXpOQ0xFOUJRVThzUlVGQlJTdzJRa0ZCTmtJN1NVRkRkRU1zWVVGQllTeEZRVU5hTEdkRlFVRm5SVHRKUVVOcVJTeGpRVUZqTEVWQlFVVXNhVUpCUVdsQ08wTkJRMnBETEVWQlEwMHNSVUZCUlR0SlFVTlVMRlZCUVZVc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRemRETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzSkZMRmxCUVZrc1IwRkJSeXhGUVVGRkxFZEJRVWNzVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZEYmtNc1EwRkJReXhGUVV0RUxGZEJRVmNzUjBGQlJ5eERRVUZETEZGQlFXZENMRVZCUVZVc1JVRkJSVHRKUVVNeFF5eFBRVUZQTEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlF6bERMRU5CUVVNc1EwRkJRenRCUVVWSUxFTkJRVU1zUjBGQlV5eEZRVUZGTzBsQlExZ3NTVUZCU1N4VlFVRlZMRU5CUVVNc1VVRkJVU3hMUVVGTExHMUNRVUZ0UWp0UlFVTTVReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xTkJRM1JETzFGQlEwb3NTVUZCU1N4TFFVRmhMRU5CUVVNN1VVRkRiRUlzVFVGQlRTeFpRVUZaTEVkQlFVY3NSMEZCVnl4RlFVRkZMRU5CUTJoRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4WFFVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRMnBFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUTNaRExGbEJRVmtzUjBGQlJ5eEhRVUZYTEVWQlFVVTdXVUZETTBJc1QwRkJUeXhUUVVGVExFTkJRMllzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1YwRkJWenRuUWtGRE9VSXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU03WjBKQlEzUkNMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGRGFFTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVU4wUWl4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRE8xRkJSVWdzU1VGQlNUdFpRVU5JTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnFSRHRSUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlExZ3NTMEZCU3l4SFFVRkhMRmxCUVZrc1JVRkJSU3hEUVVGRE8xTkJRM1pDTzFGQlRVUXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eEhRVUZYTEVWQlFVVTdXVUZEY2tNc1RVRkJUU3hQUVVGUExFZEJRV2RETzJkQ1FVTTFReXhKUVVGSkxFVkJRVVVzYVVKQlFXbENPMmRDUVVOMlFpeEpRVUZKTEVWQlFVVXNkMEpCUVhkQ08yZENRVU01UWl4RFFVRkRMRVZCUVVVc2IwSkJRVzlDTzJkQ1FVTjJRaXhEUVVGRExFVkJRVVVzY1VKQlFYRkNPMmRDUVVONFFpeERRVUZETEVWQlFVVXNjVUpCUVhGQ08yZENRVU40UWl4RFFVRkRMRVZCUVVVc01FSkJRVEJDTzJkQ1FVTTNRaXhEUVVGRExFVkJRVVVzZDBKQlFYZENPMmRDUVVNelFpeERRVUZETEVWQlFVVXNOa0pCUVRaQ08yZENRVU5vUXl4RFFVRkRMRVZCUVVVc1owSkJRV2RDTzJkQ1FVTnVRaXhEUVVGRExFVkJRVVVzTUVKQlFUQkNPMmRDUVVNM1FpeERRVUZETEVWQlFVVXNNa0pCUVRKQ08yZENRVU01UWl4RFFVRkRMRVZCUVVVc1owTkJRV2RETzJkQ1FVTnVReXhGUVVGRkxFVkJRVVVzYjBKQlFXOUNPMmRDUVVONFFpeEZRVUZGTEVWQlFVVXNPRUpCUVRoQ08yZENRVU5zUXl4RlFVRkZMRVZCUVVVc2NVSkJRWEZDTzJkQ1FVTjZRaXhGUVVGRkxFVkJRVVVzTUVKQlFUQkNPMmRDUVVNNVFpeEZRVUZGTEVWQlFVVXNiMEpCUVc5Q08yZENRVU40UWl4RlFVRkZMRVZCUVVVc09FSkJRVGhDTzJkQ1FVTnNReXhIUVVGSExFVkJRVVVzYTBKQlFXdENPMmRDUVVOMlFpeEhRVUZITEVWQlFVVXNORUpCUVRSQ08yZENRVU5xUXl4SFFVRkhMRVZCUVVVc2FVSkJRV2xDTzJkQ1FVTjBRaXhIUVVGSExFVkJRVVVzTWtKQlFUSkNPMmRDUVVOb1F5eEhRVUZITEVWQlFVVXNOa0pCUVRaQ08yZENRVU5zUXl4SFFVRkhMRVZCUVVVc2RVTkJRWFZETzJkQ1FVTTFReXhIUVVGSExFVkJRVVVzYTBKQlFXdENPMmRDUVVOMlFpeEhRVUZITEVWQlFVVXNORUpCUVRSQ08yZENRVU5xUXl4SFFVRkhMRVZCUVVVc01FSkJRVEJDTzJkQ1FVTXZRaXhIUVVGSExFVkJRVVVzYjBOQlFXOURPMmRDUVVONlF5eEhRVUZITEVWQlFVVXNiVU5CUVcxRE8yZENRVU40UXl4SFFVRkhMRVZCUVVVc2QwTkJRWGRETzJkQ1FVTTNReXhKUVVGSkxFVkJRVVVzYTBKQlFXdENPMmRDUVVONFFpeEpRVUZKTEVWQlFVVXNORUpCUVRSQ08yZENRVU5zUXl4SlFVRkpMRVZCUVVVc2EwTkJRV3RETzJkQ1FVTjRReXhKUVVGSkxFVkJRVVVzZFVOQlFYVkRPMmRDUVVNM1F5eEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08yRkJRM1pDTEVOQlFVTTdXVUZEUml4UFFVRlBMRU5CUTA0c1QwRkJUeXhEUVVOT0xFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dHBRa0ZETTBNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZETlVJc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRMmhDTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkRWaXhKUVVGSkxHZENRVUZuUWl4RFFVTnlRaXhEUVVGRE8xRkJRMGdzUTBGQlF5eERRVUZETzFGQlZVWXNTVUZGUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWlVGQlpTeERRVUZETzFsQlEzWkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1dVRkRla01zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkRlRU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrN1dVRkZNVUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dGhRVU4wUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1dVRkRha1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVRlpMRU5CUVVNN1lVRkRhRU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR3RDUVVGclFpeERRVUZETzFsQlEyeEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1lVRkRla01zU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlFVVTdXVUZEYkVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenRaUVVNNVF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEc5Q1FVRnZRaXhEUVVNelF5eERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTlNPMkZCUVUwc1NVRkJTU3haUVVGWkxFVkJRVVVzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZUVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenRaUVVOc1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1JVRkJSU3hEUVVGRE8xTkJRM0JETzJGQlFVMHNTVUZCU1N4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3V1VGREwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UTBGQmMwTXNRMEZCUXp0WlFVTTVSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZsQlFWa3NSVUZCUlN4RFFVRkRPMU5CUTNCRE8yRkJRVTBzU1VGQlNTeFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1dVRkRhRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFEwRkJiVU1zUTBGQlF6dFpRVU16UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUlVGQlJTeERRVUZETzFOQlEzQkRPMkZCUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTnlReXhYUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEVWQlEzUkNPMWxCUTBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4TFFVRkxMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzV1VGQldTeEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVOdVJDeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVN1owSkJRMW9zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4TFFVRkxMRmxCUVZrc1JVRkJSU3hIUVVNdlFpeEZRVUZGTEVOQlFVTTdXVUZEU0N4alFVRmpMRU5CUVVNc1VVRkJVU3hIUVVGSExFZEJRVk1zUlVGQlJUdG5Ra0ZEY0VNc1NVRkJTU3haUVVGWkxFVkJRVVVzUzBGQlN5eE5RVUZOTEVsQlFVa3NXVUZCV1N4RlFVRkZMRXRCUVVzc1dVRkJXVHR2UWtGREwwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGQlowSXNRMEZCUXpzN2IwSkJRM0JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVWQlFVVXNRMEZCUXp0WlFVTm9SQ3hEUVVGRExFTkJRVU03VTBGRFJqdGhRVUZOTEVsQlFVa3NXVUZCV1N4RlFVRkZMRXRCUVVzc1RVRkJUU3hGUVVGRk8xbEJRM0pETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTTdaMEpCUTNoRUxFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJN1owSkJRMnhDTEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF6dFpRVU53UWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUlVGQlJTeERRVUZETzFOQlEzQkRPMkZCUVUwN1dVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVOd1FpeExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRXRCUVVzc1dVRkJXU3hGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzJkQ1FVTnVSQ3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVWQlFVVTdaMEpCUTFvc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eExRVUZMTEZsQlFWa3NSVUZCUlN4SFFVTXZRaXhGUVVGRkxFTkJRVU03VTBGRFNEdFJRVVZFTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEZsQlFWa3NRMEZCUXl4TFFVRkxPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eExRVUZMTEVsQlFVa3NTMEZCU3l4SlFVRkpMRWRCUVVjc1EwRkJRenM3WjBKQlEzUkVMRmxCUVZrc1EwRkJReXhQUVVGUExFbEJRVWtzUzBGQlN5eEpRVUZKTEVkQlFVY3NRMEZCUXp0VFFVTXhRenRMUVVORU8wRkJRMFlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVVk1MRWxCUVVrc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJUdEpRVU16UWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFZEJRVWNzV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZUVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1VVRkRjRU1zVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTNaQ0xHTkJRV01zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlEwZzdTMEZCVFR0SlFVTk9MRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMUZCUTNCRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRjRU1zUTBGQlF5eERRVUZETEVOQlFVTTdRMEZEU0NKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJjdXJyZW50VVJMIiwiVVJMIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJjdXJyZW50UGF0aCIsInBhdGhuYW1lIiwicmVwbGFjZSIsInNwbGl0IiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwicHJlc2VuY2VEYXRhIiwiZGV0YWlscyIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInVwZGF0ZUNhbGxiYWNrIiwiX2Z1bmN0aW9uIiwiZnVuY3Rpb24iLCJ0aGlzIiwicGFyYW1ldGVyIiwicHJlc2VudCIsInJlc2V0RGF0YSIsImRlZmF1bHREYXRhIiwiZ2V0VVJMUGFyYW0iLCJ1cmxQYXJhbSIsInNlYXJjaFBhcmFtcyIsImdldCIsImhvc3RuYW1lIiwidGl0bGUiLCJhY3Rpb25SZXN1bHQiLCJsYW5nIiwidGl0bGVGcm9tVVJMIiwiZGVjb2RlVVJJIiwic2xpY2UiLCJqb2luIiwicmVwbGFjZUFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImUiLCJuYW1lc3BhY2VEZXRhaWxzIiwiY2xhc3NMaXN0IiwiZmluZCIsInYiLCJ0ZXN0Iiwic3RhdGUiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwib24iLCJhc3luYyIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;