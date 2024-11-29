var __webpack_exports__={};const presence=new Presence({clientId:"640150336547454976"}),browsingTimestamp=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({viewing:"general.viewing",play:"general.playing",pause:"general.paused",viewHome:"general.viewHome",viewSeries:"general.viewSeries",buttonViewSeries:"general.buttonViewSeries",buttonViewEpisode:"general.buttonViewEpisode",searchFor:"general.searchFor",search:"general.search"},await presence.getSetting("lang").catch((()=>"en")))}let strings,iFrameVideo,currentTime,duration,paused,lastPlaybackState,playback,oldLang=null;presence.on("iFrameData",(e=>{playback=null!==e.iframeVideo.duration,playback&&({iFrameVideo,currentTime,duration,paused}=e.iframeVideo),lastPlaybackState!==playback&&(lastPlaybackState=playback)})),presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/V/VRV/assets/logo.png",startTimestamp:browsingTimestamp},{href:t,pathname:s}=document.location,[a,r,n,i,g]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("time"),presence.getSetting("cover"),presence.getSetting("buttons"),presence.getSetting("search")]);switch(oldLang===a&&strings||(oldLang=a,strings=await getStrings()),s.split("/")[1]){case"watch":{e.details=strings.viewing,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.largeImageKey=document.querySelector("img.c-content-image")?.src??"https://cdn.rcd.gg/PreMiD/websites/V/VRV/assets/logo.png",e.buttons=[{label:strings.buttonViewEpisode,url:t}];const s=document.querySelector("span.series").textContent,a=document.querySelector("h2.title").textContent,r=document.querySelector("span.season");e.state=r?`${s} - S${r.textContent.split(" ")[1]} ${a}`:`${s} - ${a}`,iFrameVideo&&!isNaN(duration)&&(e.smallImageKey=paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=paused?strings.pause:strings.play,[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(currentTime),Math.floor(duration)),e.details=r?`${s} - S${r.textContent.split(" ")[1]} ${a}`:s,e.state=r?a.split(" - ")[1]:a,paused&&(delete e.startTimestamp,delete e.endTimestamp));break}case"series":e.details=strings.viewSeries,e.state=document.querySelector("div.series-title").textContent,e.largeImageKey=document.querySelector("img.c-content-image")?.src??"https://cdn.rcd.gg/PreMiD/websites/V/VRV/assets/logo.png",e.buttons=[{label:strings.buttonViewSeries,url:t}];break;case"watchlist":e.details="Viewing their watchlist",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"":e.details=strings.viewHome,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;default:"Channel"===document.querySelector(".item-type")?.textContent&&(e.details="Viewing channel:",e.state=document.querySelector(".item-title").textContent,e.largeImageKey=document.querySelector("img").src)}t.includes("?q=")&&g&&(e.details=strings.searchFor,e.state=t.split("?q=")[1],e.startTimestamp=browsingTimestamp,delete e.endTimestamp,e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/V/VRV/assets/logo.png",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText=strings.search,delete e.buttons),n||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/V/VRV/assets/logo.png"),i||delete e.buttons,r||(delete e.startTimestamp,delete e.endTimestamp),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0IsTUFDSixJQUFLLEdBQ0RoQixFQUFhZSxRQUFVMUIsUUFBUVIsU0FDL0JtQixFQUFhZ0IsY0FBZ0Isa0RBQzdCLE1BQ0osUUFDOEQsWUFBdERYLFNBQVNZLGNBQWMsZUFBZU0sY0FDdEN2QixFQUFhZSxRQUFVLG1CQUN2QmYsRUFBYTBCLE1BQVFyQixTQUFTWSxjQUFjLGVBQWVNLFlBQzNEdkIsRUFBYUMsY0FDVEksU0FBU1ksY0FBYyxPQUFPQyxLQUcxQ2YsRUFBSzRCLFNBQVMsUUFBVXBCLElBQ3hCWCxFQUFhZSxRQUFVMUIsUUFBUUosVUFDL0JlLEVBQWEwQixNQUFRdkIsRUFBS1csTUFBTSxPQUFPLEdBQ3ZDZCxFQUFhRSxlQUFpQi9CLHlCQUN2QjZCLEVBQWE2QixhQUNwQjdCLEVBQWFDLGNBQWdCLDJEQUM3QkQsRUFBYWdCLGNBQWdCLGlEQUM3QmhCLEVBQWE0QixlQUFpQnZDLFFBQVFILGNBQy9CYyxFQUFhbUIsU0FFbkJWLElBQ0RULEVBQWFDLGNBQWdCLDREQUM1QlMsVUFDTVYsRUFBYW1CLFFBQ25CWCxXQUNNUixFQUFhRSxzQkFDYkYsRUFBYTZCLGNBRXBCN0IsRUFBYWUsUUFDYi9DLFNBQVNnRSxZQUFZaEMsR0FFckJoQyxTQUFTZ0UsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NDAxNTAzMzY1NDc0NTQ5NzZcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyaW5ncygpIHtcbiAgICByZXR1cm4gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgICAgIHZpZXdpbmc6IFwiZ2VuZXJhbC52aWV3aW5nXCIsXG4gICAgICAgIHBsYXk6IFwiZ2VuZXJhbC5wbGF5aW5nXCIsXG4gICAgICAgIHBhdXNlOiBcImdlbmVyYWwucGF1c2VkXCIsXG4gICAgICAgIHZpZXdIb21lOiBcImdlbmVyYWwudmlld0hvbWVcIixcbiAgICAgICAgdmlld1NlcmllczogXCJnZW5lcmFsLnZpZXdTZXJpZXNcIixcbiAgICAgICAgYnV0dG9uVmlld1NlcmllczogXCJnZW5lcmFsLmJ1dHRvblZpZXdTZXJpZXNcIixcbiAgICAgICAgYnV0dG9uVmlld0VwaXNvZGU6IFwiZ2VuZXJhbC5idXR0b25WaWV3RXBpc29kZVwiLFxuICAgICAgICBzZWFyY2hGb3I6IFwiZ2VuZXJhbC5zZWFyY2hGb3JcIixcbiAgICAgICAgc2VhcmNoOiBcImdlbmVyYWwuc2VhcmNoXCIsXG4gICAgfSwgYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSk7XG59XG5sZXQgc3RyaW5ncywgb2xkTGFuZyA9IG51bGwsIGlGcmFtZVZpZGVvLCBjdXJyZW50VGltZSwgZHVyYXRpb24sIHBhdXNlZCwgbGFzdFBsYXliYWNrU3RhdGUsIHBsYXliYWNrO1xucHJlc2VuY2Uub24oXCJpRnJhbWVEYXRhXCIsIChkYXRhKSA9PiB7XG4gICAgcGxheWJhY2sgPSBkYXRhLmlmcmFtZVZpZGVvLmR1cmF0aW9uICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmIChwbGF5YmFjaylcbiAgICAgICAgKHsgaUZyYW1lVmlkZW8sIGN1cnJlbnRUaW1lLCBkdXJhdGlvbiwgcGF1c2VkIH0gPSBkYXRhLmlmcmFtZVZpZGVvKTtcbiAgICBpZiAobGFzdFBsYXliYWNrU3RhdGUgIT09IHBsYXliYWNrKVxuICAgICAgICBsYXN0UGxheWJhY2tTdGF0ZSA9IHBsYXliYWNrO1xufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1YvVlJWL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBocmVmLCBwYXRobmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb24sIFtuZXdMYW5nLCB0aW1lLCBzaG93Q292ZXIsIHNob3dCdXR0b25zLCBzaG93U2VhcmNoXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInRpbWVcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJjb3ZlclwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJzZWFyY2hcIiksXG4gICAgXSk7XG4gICAgaWYgKG9sZExhbmcgIT09IG5ld0xhbmcgfHwgIXN0cmluZ3MpIHtcbiAgICAgICAgb2xkTGFuZyA9IG5ld0xhbmc7XG4gICAgICAgIHN0cmluZ3MgPSBhd2FpdCBnZXRTdHJpbmdzKCk7XG4gICAgfVxuICAgIHN3aXRjaCAocGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKSB7XG4gICAgICAgIGNhc2UgXCJ3YXRjaFwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3Mudmlld2luZztcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWcuYy1jb250ZW50LWltYWdlXCIpPy5zcmMgPz9cbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1YvVlJWL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogc3RyaW5ncy5idXR0b25WaWV3RXBpc29kZSwgdXJsOiBocmVmIH1dO1xuICAgICAgICAgICAgY29uc3Qgc2VyaWVzTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnNlcmllc1wiKS50ZXh0Q29udGVudCwgZXBpc29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMi50aXRsZVwiKS50ZXh0Q29udGVudCwgc2Vhc29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uc2Vhc29uXCIpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2Vhc29uXG4gICAgICAgICAgICAgICAgPyBgJHtzZXJpZXNOYW1lfSAtIFMke3NlYXNvbi50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMV19ICR7ZXBpc29kZX1gXG4gICAgICAgICAgICAgICAgOiBgJHtzZXJpZXNOYW1lfSAtICR7ZXBpc29kZX1gO1xuICAgICAgICAgICAgaWYgKGlGcmFtZVZpZGVvICYmICFpc05hTihkdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gcGF1c2VkID8gc3RyaW5ncy5wYXVzZSA6IHN0cmluZ3MucGxheTtcbiAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMoTWF0aC5mbG9vcihjdXJyZW50VGltZSksIE1hdGguZmxvb3IoZHVyYXRpb24pKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHNlYXNvblxuICAgICAgICAgICAgICAgICAgICA/IGAke3Nlcmllc05hbWV9IC0gUyR7c2Vhc29uLnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVsxXX0gJHtlcGlzb2RlfWBcbiAgICAgICAgICAgICAgICAgICAgOiBzZXJpZXNOYW1lO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNlYXNvbiA/IGVwaXNvZGUuc3BsaXQoXCIgLSBcIilbMV0gOiBlcGlzb2RlO1xuICAgICAgICAgICAgICAgIGlmIChwYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNlcmllc1wiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLnZpZXdTZXJpZXM7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2VyaWVzLXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWcuYy1jb250ZW50LWltYWdlXCIpPy5zcmMgPz9cbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1YvVlJWL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbeyBsYWJlbDogc3RyaW5ncy5idXR0b25WaWV3U2VyaWVzLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndhdGNobGlzdFwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgdGhlaXIgd2F0Y2hsaXN0XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3Mudmlld0hvbWU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS10eXBlXCIpPy50ZXh0Q29udGVudCA9PT0gXCJDaGFubmVsXCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBjaGFubmVsOlwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaHJlZi5pbmNsdWRlcyhcIj9xPVwiKSAmJiBzaG93U2VhcmNoKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5zZWFyY2hGb3I7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGhyZWYuc3BsaXQoXCI/cT1cIilbMV07XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVi9WUlYvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHN0cmluZ3Muc2VhcmNoO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgfVxuICAgIGlmICghc2hvd0NvdmVyKVxuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9WL1ZSVi9hc3NldHMvbG9nby5wbmdcIjtcbiAgICBpZiAoIXNob3dCdXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVTF1UkN4TFFVRkxMRlZCUVZVc1ZVRkJWVHRKUVVONFFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUTNwQ08xRkJRME1zVDBGQlR5eEZRVUZGTEdsQ1FVRnBRanRSUVVNeFFpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08xRkJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3VVVGRGRrSXNVVUZCVVN4RlFVRkZMR3RDUVVGclFqdFJRVU0xUWl4VlFVRlZMRVZCUVVVc2IwSkJRVzlDTzFGQlEyaERMR2RDUVVGblFpeEZRVUZGTERCQ1FVRXdRanRSUVVNMVF5eHBRa0ZCYVVJc1JVRkJSU3d5UWtGQk1rSTdVVUZET1VNc1UwRkJVeXhGUVVGRkxHMUNRVUZ0UWp0UlFVTTVRaXhOUVVGTkxFVkJRVVVzWjBKQlFXZENPMHRCUTNoQ0xFVkJRMFFzVFVGQlRTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlRMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkRNMFFzUTBGQlF6dEJRVU5JTEVOQlFVTTdRVUZGUkN4SlFVRkpMRTlCUVN0RExFVkJRMnhFTEU5QlFVOHNSMEZCVnl4SlFVRkpMRVZCUTNSQ0xGZEJRVzlDTEVWQlEzQkNMRmRCUVcxQ0xFVkJRMjVDTEZGQlFXZENMRVZCUTJoQ0xFMUJRV1VzUlVGRFppeHBRa0ZCTUVJc1JVRkRNVUlzVVVGQmFVSXNRMEZCUXp0QlFWVnVRaXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRWxCUVdkQ0xFVkJRVVVzUlVGQlJUdEpRVU01UXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVVTNSQ3hKUVVGSkxGRkJRVkU3VVVGRFdDeERRVUZETEVWQlFVVXNWMEZCVnl4RlFVRkZMRmRCUVZjc1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJSWEpGTEVsQlFVa3NhVUpCUVdsQ0xFdEJRVXNzVVVGQlVUdFJRVUZGTEdsQ1FVRnBRaXhIUVVGSExGRkJRVkVzUTBGQlF6dEJRVU5zUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVWSUxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNXVUZCV1N4SFFVRnBRanRSUVVOcVF5eGhRVUZoTERSRVFVRmhPMUZCUXpGQ0xHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVU4wUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZkQlFWY3NSVUZCUlN4VlFVRlZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEZGtVc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlEzSkVMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVFVGQlRTeERRVUZETzFGQlEzQkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVDBGQlR5eERRVUZETzFGQlEzSkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVTBGQlV5eERRVUZETzFGQlEzWkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVVVGQlVTeERRVUZETzB0QlEzUkRMRU5CUVVNc1EwRkJRenRKUVVWS0xFbEJRVWtzVDBGQlR5eExRVUZMTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRSUVVOd1F5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUjBGQlJ5eE5RVUZOTEZWQlFWVXNSVUZCUlN4RFFVRkRPMHRCUXpkQ08wbEJSVVFzVVVGQlVTeFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlF5OUNMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRFlpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU03V1VGRGRrTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdXVUZETlVNc1dVRkJXU3hEUVVGRExHRkJRV0U3WjBKQlEzcENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVzFDTEhGQ1FVRnhRaXhEUVVGRExFVkJRVVVzUjBGQlJ6czRSVUZEZWtRc1EwRkJRenRaUVVWaUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZGZWtVc1RVRkJUU3hWUVVGVkxFZEJRMlFzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRMnhFTEU5QlFVOHNSMEZCVnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZEYUVVc1RVRkJUU3hIUVVGdlFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xbEJSV3BGTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUVHRuUWtGRE1VSXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hQUVVGUExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNSVUZCUlR0blFrRkRia1VzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4TlFVRk5MRTlCUVU4c1JVRkJSU3hEUVVGRE8xbEJSV2hETEVsQlFVa3NWMEZCVnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTndReXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMR2xFUVVGakxFTkJRVU1zSzBOQlFWa3NRMEZCUXp0blFrRkRha1VzV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEzQkZMRU5CUVVNc1dVRkJXU3hEUVVGRExHTkJRV01zUlVGQlJTeFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRPMjlDUVVOMlJDeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVjJSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMDdiMEpCUXpWQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNUMEZCVHl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hQUVVGUExFVkJRVVU3YjBKQlEyNUZMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU03WjBKQlEyUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenRuUWtGRmFFVXNTVUZCU1N4TlFVRk5MRVZCUVVVN2IwSkJRMWdzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMjlDUVVOdVF5eFBRVUZQTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNN2FVSkJRMnBETzJGQlEwUTdXVUZEUkN4TlFVRk5PMU5CUTA0N1VVRkRSQ3hMUVVGTExGRkJRVkU3V1VGRFdpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzN1owSkJRMnBDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRlRVFzV1VGQldTeERRVUZETEdGQlFXRTdaMEpCUTNwQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFXMUNMSEZDUVVGeFFpeERRVUZETEVWQlFVVXNSMEZCUnpzNFJVRkRla1FzUTBGQlF6dFpRVU5pTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRlRVVzVFVGQlRUdFJRVU5RTEV0QlFVc3NWMEZCVnp0WlFVTm1MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZVVKQlFYbENMRU5CUVVNN1dVRkRha1FzV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03V1VGRE5VTXNUVUZCVFR0UlFVTlFMRXRCUVVzc1JVRkJSVHRaUVVOT0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVONFF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6dFpRVU0xUXl4TlFVRk5PMUZCUTFBN1dVRkRReXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZEY0VVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRuUWtGRE1VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGRGRrVXNXVUZCV1N4RFFVRkRMR0ZCUVdFN2IwSkJRM3BDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVcxQ0xFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0aFFVTnlSRHRMUVVOR08wbEJSVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxGVkJRVlVzUlVGQlJUdFJRVU4yUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRhRVFzVDBGQlR5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTJwRExGbEJRVmtzUTBGQlF5eGhRVUZoTERaRVFVRmpMRU5CUVVNN1VVRkRla01zV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6ZERMRTlCUVU4c1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF6dExRVU0xUWp0SlFVVkVMRWxCUVVrc1EwRkJReXhUUVVGVE8xRkJRVVVzV1VGQldTeERRVUZETEdGQlFXRXNOa1JCUVdNc1EwRkJRenRKUVVONlJDeEpRVUZKTEVOQlFVTXNWMEZCVnp0UlFVRkZMRTlCUVU4c1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU01UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRk8xRkJRMVlzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUTI1RExFOUJRVThzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0TFFVTnFRenRKUVVWRUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJhc3luYyIsImdldFN0cmluZ3MiLCJ2aWV3aW5nIiwicGxheSIsInBhdXNlIiwidmlld0hvbWUiLCJ2aWV3U2VyaWVzIiwiYnV0dG9uVmlld1NlcmllcyIsImJ1dHRvblZpZXdFcGlzb2RlIiwic2VhcmNoRm9yIiwic2VhcmNoIiwiZ2V0U2V0dGluZyIsImNhdGNoIiwic3RyaW5ncyIsImlGcmFtZVZpZGVvIiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInBhdXNlZCIsImxhc3RQbGF5YmFja1N0YXRlIiwicGxheWJhY2siLCJvbGRMYW5nIiwib24iLCJkYXRhIiwiaWZyYW1lVmlkZW8iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJocmVmIiwicGF0aG5hbWUiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwibmV3TGFuZyIsInRpbWUiLCJzaG93Q292ZXIiLCJzaG93QnV0dG9ucyIsInNob3dTZWFyY2giLCJQcm9taXNlIiwiYWxsIiwic3BsaXQiLCJkZXRhaWxzIiwic21hbGxJbWFnZUtleSIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJzZXJpZXNOYW1lIiwidGV4dENvbnRlbnQiLCJlcGlzb2RlIiwic2Vhc29uIiwic3RhdGUiLCJpc05hTiIsInNtYWxsSW1hZ2VUZXh0IiwiZW5kVGltZXN0YW1wIiwiZ2V0VGltZXN0YW1wcyIsImluY2x1ZGVzIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;