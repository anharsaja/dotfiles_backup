var __webpack_exports__={};const presence=new Presence({clientId:"883446187099840562"});async function getStrings(){return presence.getStrings({play:"general.playing",pause:"general.paused",live:"general.live"},await presence.getSetting("lang").catch((()=>"en")))}let channel,channelTimestamp,strings,oldLang=null;presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/Cosmote%20TV/assets/logo.png"};const t={"#!":{details:"Browsing"},search:{details:"Searching",state:document.querySelector("#searchFieldInput")?.value,smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png",smallImageText:"Searching"},loginSplash:{details:"Logging In"},channels:{details:"Browsing Channels"},watchlist:{details:"Viewing Watchlist"},settings:{details:"Viewing Settings"},privacy:{details:"Viewing Privacy Policy"},livetv:{details:"Browsing Live TV"},inbox:{details:"Viewing Inbox"},"livetv/replaytv":{details:"Browsing Replay TV"},"livetv/guide":{details:"Browsing Live TV Guide"},"onDemand/FILMS":{details:"Browsing Films"},"onDemand/SERIES":{details:"Browsing Series"},"onDemand/MOVIES_CLUB":{details:"Browsing Movies Club"},"onDemand/SPORTS":{details:"Browsing Sports"},"onDemand/DOCUMENTARIES":{details:"Browsing Documentaries"},"onDemand/KIDS":{details:"Browsing Kids Content"}},[s,n,a]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("logo"),presence.getSetting("timestamps")]);for(const[s,n]of Object.entries(t))document.location.hash.includes(s)&&(e={...e,...n});if(oldLang===s&&strings||(oldLang=s,strings=await getStrings()),document.querySelector("div[ng-if='showPlayer']")){const{paused:t,currentTime:s,duration:i}=document.querySelector("video#arxPlayer");if(document.querySelector("div[ng-if='details.channelLogoWide'] > .wide-logo"))e.details=document.querySelector(".meta-title[ng-bind~='details.title']")?.textContent,e.state=document.querySelector(".meta-title[ng-bind='details.channel.title']")?.textContent,n&&(e.largeImageKey=document.querySelector("div[ng-if='details.channelLogoWide'] > .wide-logo")?.src.replace("-wide","-normal")),document.querySelector(".meta-remain")?(channel===e.state&&channelTimestamp||(channelTimestamp=Math.floor(Date.now()/1e3)),e.startTimestamp=channelTimestamp,e.smallImageKey=t?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/live.png",e.smallImageText=t?strings.pause:strings.live):([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(presence.timestampFromFormat(document.querySelector("#VcurrentTime").textContent),presence.timestampFromFormat(document.querySelector("#Vduration").textContent)),e.smallImageKey=t?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=t?strings.pause:strings.play),channel=e.state;else{if(e.details=document.querySelector(".meta-title[ng-bind~='details.title']").textContent,document.querySelector("span[ng-bind='details.seriesSubs']")?.textContent.length>0){const t=document.querySelector("span[ng-bind='details.seriesSubs']").textContent.split(" / ",3).map((e=>e.trim()));switch(t.length){case 3:e.details===t[2]||t[2].endsWith(` ${t[1]}`)||t[2].endsWith(` ${t[1].replace("Ε","E")}`)?e.state=`${t[0].replace("S","Season ").replace("Κ","Κύκλος ")} ${t[1].replace("E","Episode ").replace("Ε","Επεισόδιο ")}`:e.state=`${t[0]}:${t[1]} ${t[2]}`;break;case 2:e.state=t[0].replace("E","Episode ").replace("Ε","Επεισόδιο "),e.details===t[1]||t[1].endsWith(` ${t[0]}`)||(e.state+=`: ${t[1]}`);break;case 1:e.state=t[0]}}[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(s),Math.floor(i)),e.smallImageKey=t?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=t?strings.pause:strings.play}!t&&a||(delete e.startTimestamp,delete e.endTimestamp,channelTimestamp=null)}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjg4MzQ0NjE4NzA5OTg0MDU2MlwiLFxufSk7XG5hc3luYyBmdW5jdGlvbiBnZXRTdHJpbmdzKCkge1xuICAgIHJldHVybiBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICAgICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICAgICAgcGF1c2U6IFwiZ2VuZXJhbC5wYXVzZWRcIixcbiAgICAgICAgbGl2ZTogXCJnZW5lcmFsLmxpdmVcIixcbiAgICB9LCBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpKTtcbn1cbmxldCBjaGFubmVsLCBjaGFubmVsVGltZXN0YW1wLCBzdHJpbmdzLCBvbGRMYW5nID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ29zbW90ZSUyMFRWL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgIH07XG4gICAgY29uc3QgcGFnZXMgPSB7XG4gICAgICAgIFwiIyFcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZ1wiLFxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiU2VhcmNoaW5nXCIsXG4gICAgICAgICAgICBzdGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hGaWVsZElucHV0XCIpPy52YWx1ZSxcbiAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZVRleHQ6IFwiU2VhcmNoaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ2luU3BsYXNoOiB7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIkxvZ2dpbmcgSW5cIixcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbm5lbHM6IHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgQ2hhbm5lbHNcIixcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2hsaXN0OiB7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgV2F0Y2hsaXN0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgU2V0dGluZ3NcIixcbiAgICAgICAgfSxcbiAgICAgICAgcHJpdmFjeToge1xuICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIFByaXZhY3kgUG9saWN5XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGxpdmV0djoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZyBMaXZlIFRWXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGluYm94OiB7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgSW5ib3hcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaXZldHYvcmVwbGF5dHZcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZyBSZXBsYXkgVFZcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaXZldHYvZ3VpZGVcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZyBMaXZlIFRWIEd1aWRlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwib25EZW1hbmQvRklMTVNcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZyBGaWxtc1wiLFxuICAgICAgICB9LFxuICAgICAgICBcIm9uRGVtYW5kL1NFUklFU1wiOiB7XG4gICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIFNlcmllc1wiLFxuICAgICAgICB9LFxuICAgICAgICBcIm9uRGVtYW5kL01PVklFU19DTFVCXCI6IHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgTW92aWVzIENsdWJcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJvbkRlbWFuZC9TUE9SVFNcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZyBTcG9ydHNcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJvbkRlbWFuZC9ET0NVTUVOVEFSSUVTXCI6IHtcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgRG9jdW1lbnRhcmllc1wiLFxuICAgICAgICB9LFxuICAgICAgICBcIm9uRGVtYW5kL0tJRFNcIjoge1xuICAgICAgICAgICAgZGV0YWlsczogXCJCcm93c2luZyBLaWRzIENvbnRlbnRcIixcbiAgICAgICAgfSxcbiAgICB9LCBbbmV3TGFuZywgbG9nbywgdGltZXN0YW1wc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJsYW5nXCIpLmNhdGNoKCgpID0+IFwiZW5cIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJsb2dvXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidGltZXN0YW1wc1wiKSxcbiAgICBdKTtcbiAgICBmb3IgKGNvbnN0IFtwYXRoLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhwYWdlcykpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2guaW5jbHVkZXMocGF0aCkpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4uZGF0YSB9O1xuICAgIH1cbiAgICBpZiAob2xkTGFuZyAhPT0gbmV3TGFuZyB8fCAhc3RyaW5ncykge1xuICAgICAgICBvbGRMYW5nID0gbmV3TGFuZztcbiAgICAgICAgc3RyaW5ncyA9IGF3YWl0IGdldFN0cmluZ3MoKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbbmctaWY9J3Nob3dQbGF5ZXInXVwiKSkge1xuICAgICAgICBjb25zdCB7IHBhdXNlZCwgY3VycmVudFRpbWUsIGR1cmF0aW9uIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW8jYXJ4UGxheWVyXCIpO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdltuZy1pZj0nZGV0YWlscy5jaGFubmVsTG9nb1dpZGUnXSA+IC53aWRlLWxvZ29cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXRhLXRpdGxlW25nLWJpbmR+PSdkZXRhaWxzLnRpdGxlJ11cIik/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXRhLXRpdGxlW25nLWJpbmQ9J2RldGFpbHMuY2hhbm5lbC50aXRsZSddXCIpPy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChsb2dvKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImRpdltuZy1pZj0nZGV0YWlscy5jaGFubmVsTG9nb1dpZGUnXSA+IC53aWRlLWxvZ29cIilcbiAgICAgICAgICAgICAgICAgICAgPy5zcmMucmVwbGFjZShcIi13aWRlXCIsIFwiLW5vcm1hbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1ldGEtcmVtYWluXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5uZWwgIT09IHByZXNlbmNlRGF0YS5zdGF0ZSB8fCAhY2hhbm5lbFRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbFRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGNoYW5uZWxUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBwYXVzZWQgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9saXZlLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHBhdXNlZCA/IHN0cmluZ3MucGF1c2UgOiBzdHJpbmdzLmxpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMocHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1ZjdXJyZW50VGltZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50KSwgcHJlc2VuY2UudGltZXN0YW1wRnJvbUZvcm1hdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1ZkdXJhdGlvblwiKS50ZXh0Q29udGVudCkpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gcGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBwYXVzZWQgPyBzdHJpbmdzLnBhdXNlIDogc3RyaW5ncy5wbGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhbm5lbCA9IHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXRhLXRpdGxlW25nLWJpbmR+PSdkZXRhaWxzLnRpdGxlJ11cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5bbmctYmluZD0nZGV0YWlscy5zZXJpZXNTdWJzJ11cIik/LnRleHRDb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcGlzb2RlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuW25nLWJpbmQ9J2RldGFpbHMuc2VyaWVzU3VicyddXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIiAvIFwiLCAzKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVwaXNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscyAhPT0gZXBpc29kZVsyXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFlcGlzb2RlWzJdLmVuZHNXaXRoKGAgJHtlcGlzb2RlWzFdfWApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWVwaXNvZGVbMl0uZW5kc1dpdGgoYCAke2VwaXNvZGVbMV0ucmVwbGFjZShcIs6VXCIsIFwiRVwiKX1gKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtlcGlzb2RlWzBdfToke2VwaXNvZGVbMV19ICR7ZXBpc29kZVsyXX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZXBpc29kZVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIlNcIiwgXCJTZWFzb24gXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwizppcIiwgXCLOms+NzrrOu86/z4IgXCIpfSAke2VwaXNvZGVbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJFXCIsIFwiRXBpc29kZSBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCLOlVwiLCBcIs6Vz4DOtc65z4PPjM60zrnOvyBcIil9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBlcGlzb2RlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJFXCIsIFwiRXBpc29kZSBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIs6VXCIsIFwizpXPgM61zrnPg8+MzrTOuc6/IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscyAhPT0gZXBpc29kZVsxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFlcGlzb2RlWzFdLmVuZHNXaXRoKGAgJHtlcGlzb2RlWzBdfWApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSArPSBgOiAke2VwaXNvZGVbMV19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBlcGlzb2RlWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKE1hdGguZmxvb3IoY3VycmVudFRpbWUpLCBNYXRoLmZsb29yKGR1cmF0aW9uKSk7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBwYXVzZWQgPyBzdHJpbmdzLnBhdXNlIDogc3RyaW5ncy5wbGF5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXVzZWQgfHwgIXRpbWVzdGFtcHMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgICAgIGNoYW5uZWxUaW1lc3RhbXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFVVklMRXRCUVVzc1ZVRkJWU3hWUVVGVk8wbEJRM2hDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkRla0k3VVVGRFF5eEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08xRkJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3VVVGRGRrSXNTVUZCU1N4RlFVRkZMR05CUVdNN1MwRkRjRUlzUlVGRFJDeE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZNc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVNelJDeERRVUZETzBGQlEwZ3NRMEZCUXp0QlFVVkVMRWxCUVVrc1QwRkJaU3hGUVVOc1FpeG5Ra0ZCZDBJc1JVRkRlRUlzVDBGQkswTXNSVUZETDBNc1QwRkJUeXhIUVVGWExFbEJRVWtzUTBGQlF6dEJRVVY0UWl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhKUVVGSkxGbEJRVmtzUjBGQmFVSTdVVUZEYUVNc1lVRkJZU3hGUVVOYUxHMUZRVUZ0UlR0TFFVTndSU3hEUVVGRE8wbEJSVVlzVFVGQlRTeExRVUZMTEVkQlFXbERPMUZCUXpGRExFbEJRVWtzUlVGQlJUdFpRVU5NTEU5QlFVOHNSVUZCUlN4VlFVRlZPMU5CUTI1Q08xRkJRMFFzVFVGQlRTeEZRVUZGTzFsQlExQXNUMEZCVHl4RlFVRkZMRmRCUVZjN1dVRkRjRUlzUzBGQlN5eEZRVU5LTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVcxQ0xHMUNRVUZ0UWl4RFFVRkRMRVZCUVVVc1MwRkJTenRaUVVOeVJTeGhRVUZoTEd0RVFVRmxPMWxCUXpWQ0xHTkJRV01zUlVGQlJTeFhRVUZYTzFOQlF6TkNPMUZCUTBRc1YwRkJWeXhGUVVGRk8xbEJRMW9zVDBGQlR5eEZRVUZGTEZsQlFWazdVMEZEY2tJN1VVRkRSQ3hSUVVGUkxFVkJRVVU3V1VGRFZDeFBRVUZQTEVWQlFVVXNiVUpCUVcxQ08xTkJRelZDTzFGQlEwUXNVMEZCVXl4RlFVRkZPMWxCUTFZc1QwRkJUeXhGUVVGRkxHMUNRVUZ0UWp0VFFVTTFRanRSUVVORUxGRkJRVkVzUlVGQlJUdFpRVU5VTEU5QlFVOHNSVUZCUlN4clFrRkJhMEk3VTBGRE0wSTdVVUZEUkN4UFFVRlBMRVZCUVVVN1dVRkRVaXhQUVVGUExFVkJRVVVzZDBKQlFYZENPMU5CUTJwRE8xRkJRMFFzVFVGQlRTeEZRVUZGTzFsQlExQXNUMEZCVHl4RlFVRkZMR3RDUVVGclFqdFRRVU16UWp0UlFVTkVMRXRCUVVzc1JVRkJSVHRaUVVOT0xFOUJRVThzUlVGQlJTeGxRVUZsTzFOQlEzaENPMUZCUTBRc2FVSkJRV2xDTEVWQlFVVTdXVUZEYkVJc1QwRkJUeXhGUVVGRkxHOUNRVUZ2UWp0VFFVTTNRanRSUVVORUxHTkJRV01zUlVGQlJUdFpRVU5tTEU5QlFVOHNSVUZCUlN4M1FrRkJkMEk3VTBGRGFrTTdVVUZEUkN4blFrRkJaMElzUlVGQlJUdFpRVU5xUWl4UFFVRlBMRVZCUVVVc1owSkJRV2RDTzFOQlEzcENPMUZCUTBRc2FVSkJRV2xDTEVWQlFVVTdXVUZEYkVJc1QwRkJUeXhGUVVGRkxHbENRVUZwUWp0VFFVTXhRanRSUVVORUxITkNRVUZ6UWl4RlFVRkZPMWxCUTNaQ0xFOUJRVThzUlVGQlJTeHpRa0ZCYzBJN1UwRkRMMEk3VVVGRFJDeHBRa0ZCYVVJc1JVRkJSVHRaUVVOc1FpeFBRVUZQTEVWQlFVVXNhVUpCUVdsQ08xTkJRekZDTzFGQlEwUXNkMEpCUVhkQ0xFVkJRVVU3V1VGRGVrSXNUMEZCVHl4RlFVRkZMSGRDUVVGM1FqdFRRVU5xUXp0UlFVTkVMR1ZCUVdVc1JVRkJSVHRaUVVOb1FpeFBRVUZQTEVWQlFVVXNkVUpCUVhWQ08xTkJRMmhETzB0QlEwUXNSVUZEUkN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzVlVGQlZTeERRVUZETEVkQlFVY3NUVUZCVFN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJReTlETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZNc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVOeVJDeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRTFCUVUwc1EwRkJRenRSUVVOd1F5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlZMRmxCUVZrc1EwRkJRenRMUVVNeFF5eERRVUZETEVOQlFVTTdTVUZGU2l4TFFVRkxMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU5xUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRlRU1zV1VGQldTeEhRVUZITEVWQlFVVXNSMEZCUnl4WlFVRlpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFVkJRVVVzUTBGQlF6dExRVU0zUXp0SlFVVkVMRWxCUVVrc1QwRkJUeXhMUVVGTExFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0UlFVTndReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEyeENMRTlCUVU4c1IwRkJSeXhOUVVGTkxGVkJRVlVzUlVGQlJTeERRVUZETzB0QlF6ZENPMGxCUlVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZwUWl4NVFrRkJlVUlzUTBGQlF5eEZRVUZGTzFGQlEzUkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEZGQlFWRXNSVUZCUlN4SFFVTjBReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZ0UWl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFGQlJUZEVMRWxCUTBNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNiVVJCUVcxRUxFTkJRMjVFTEVWQlEwRTdXVUZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6VkRMSFZEUVVGMVF5eERRVU4yUXl4RlFVRkZMRmRCUVZjc1EwRkJRenRaUVVObUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRNVU1zT0VOQlFUaERMRU5CUXpsRExFVkJRVVVzVjBGQlZ5eERRVUZETzFsQlEyWXNTVUZCU1N4SlFVRkpMRVZCUVVVN1owSkJRMVFzV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4UlFVRlJPM0ZDUVVOdVF5eGhRVUZoTEVOQlEySXNiVVJCUVcxRUxFTkJRMjVFTzI5Q1FVTkVMRVZCUVVVc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1lVRkRia003V1VGSFJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVd0Q0xHTkJRV01zUTBGQlF5eEZRVUZGTzJkQ1FVTTFSQ3hKUVVGSkxFOUJRVThzUzBGQlN5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1owSkJRV2RDTzI5Q1FVTjBSQ3huUWtGQlowSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRmJFUXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0blFrRkZMME1zV1VGQldTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhwUkVGQll5eERRVUZETEN0RFFVRlpMRU5CUVVNN1owSkJRMnBGTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETzJGQlEzQkZPMmxDUVVGTk8yZENRVVZPTEVOQlFVTXNXVUZCV1N4RFFVRkRMR05CUVdNc1JVRkJSU3haUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzI5Q1FVTjJSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlF6TkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRV3RDTEdWQlFXVXNRMEZCUXp0NVFrRkRkRVFzVjBGQlZ5eERRVU5pTEVWQlEwUXNVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVU16UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGclFpeFpRVUZaTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUTJwRkxFTkJRMFFzUTBGQlF6dG5Ra0ZGU0N4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEdsRVFVRmpMRU5CUVVNc0swTkJRVmtzUTBGQlF6dG5Ra0ZEYWtVc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNN1lVRkRjRVU3V1VGRFJDeFBRVUZQTEVkQlFVY3NXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVNM1FqdGhRVUZOTzFsQlJVNHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0xUXl4MVEwRkJkVU1zUTBGRGRrTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkZaQ3hKUVVORExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkNMRzlEUVVGdlF5eERRVU53UXl4RlFVRkZMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVU40UWp0blFrRkRSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eFJRVUZSTzNGQ1FVTjBRaXhoUVVGaExFTkJRV3RDTEc5RFFVRnZReXhEUVVGRE8zRkNRVU53UlN4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdjVUpCUXpOQ0xFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVVjZRaXhSUVVGUkxFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTNaQ0xFdEJRVXNzUTBGQlF6dDNRa0ZEVEN4SlFVTkRMRmxCUVZrc1EwRkJReXhQUVVGUExFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXpzMFFrRkRia01zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN05FSkJRM1JETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN05FSkJSWGhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPelpDUVVNM1JEczBRa0ZEU2l4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0cFEwRkRhRU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4VFFVRlRMRU5CUVVNN2FVTkJRM1pDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0cFEwRkRja01zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4VlFVRlZMRU5CUVVNN2FVTkJRM2hDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hEUVVGRExFVkJRVVVzUTBGQlF6dDVRa0ZETDBJN2QwSkJRMFFzVFVGQlRUdHZRa0ZEVUN4TFFVRkxMRU5CUVVNN2QwSkJRMHdzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE96WkNRVU0zUWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxGVkJRVlVzUTBGQlF6czJRa0ZEZUVJc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0M1FrRkROMElzU1VGRFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEyNURMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZET3pSQ1FVVjBReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEpRVUZKTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03ZDBKQlEzcERMRTFCUVUwN2IwSkJRMUFzUzBGQlN5eERRVUZETzNkQ1FVTk1MRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVOcVF6dGhRVU5FTzFsQlJVUXNRMEZCUXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTTdaMEpCUTNaRUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmRrVXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eHBSRUZCWXl4RFFVRkRMQ3REUVVGWkxFTkJRVU03V1VGRGFrVXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTTdVMEZEY0VVN1VVRkZSQ3hKUVVGSkxFMUJRVTBzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTXhRaXhQUVVGUExGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTTdXVUZEYmtNc1QwRkJUeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzFsQlEycERMR2RDUVVGblFpeEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTjRRanRMUVVORU8wbEJRMFFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJhc3luYyIsImdldFN0cmluZ3MiLCJwbGF5IiwicGF1c2UiLCJsaXZlIiwiZ2V0U2V0dGluZyIsImNhdGNoIiwiY2hhbm5lbCIsImNoYW5uZWxUaW1lc3RhbXAiLCJzdHJpbmdzIiwib2xkTGFuZyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInBhZ2VzIiwiZGV0YWlscyIsInNlYXJjaCIsInN0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJsb2dpblNwbGFzaCIsImNoYW5uZWxzIiwid2F0Y2hsaXN0Iiwic2V0dGluZ3MiLCJwcml2YWN5IiwibGl2ZXR2IiwiaW5ib3giLCJuZXdMYW5nIiwibG9nbyIsInRpbWVzdGFtcHMiLCJQcm9taXNlIiwiYWxsIiwicGF0aCIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwibG9jYXRpb24iLCJoYXNoIiwiaW5jbHVkZXMiLCJwYXVzZWQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwidGV4dENvbnRlbnQiLCJzcmMiLCJyZXBsYWNlIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInN0YXJ0VGltZXN0YW1wIiwiZW5kVGltZXN0YW1wIiwiZ2V0VGltZXN0YW1wcyIsInRpbWVzdGFtcEZyb21Gb3JtYXQiLCJsZW5ndGgiLCJlcGlzb2RlIiwic3BsaXQiLCJtYXAiLCJzdHIiLCJ0cmltIiwiZW5kc1dpdGgiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;