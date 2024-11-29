var __webpack_exports__={};const presence=new Presence({clientId:"653639828826750976"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"});function getTimes(e){let t=Math.round(e),s=Math.floor(t/60);t-=60*s;const a=Math.floor(s/60);return s-=60*a,{sec:t,min:s,hrs:a}}function lessTen(e){return e<10?"0":""}function getTimestamp(e){const{sec:t,min:s,hrs:a}=getTimes(e);return a>0?`${a}:${lessTen(s)}${s}:${lessTen(t)}${t}`:`${s}:${lessTen(t)}${t}`}const matches={youtube:{display:"YouTube",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/0.png"},googlevideo:{display:"YouTube",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/0.png"},"docs.google":{display:"Google Drive",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/1.png"},googleusercontent:{display:"Google Drive",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/1.png"},appspot:{display:"Google Cloud",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/5.png"},blogspot:{display:"Google Cloud",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/5.png"},dropbox:{display:"Dropbox",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/2.png"},amazonaws:{display:"Amazon AWS",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/3.png"},soundcloud:{display:"Soundcloud",imageKey:"https://cdn.rcd.gg/PreMiD/resources/question.png"},discordapp:{display:"Discord",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/4.png"},"vimeo-prod-":{display:"Vimeo",imageKey:"https://cdn.rcd.gg/PreMiD/resources/question.png"}};function service(e){let t={display:"Unknown Service",imageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/6.png"};for(const s of Object.keys(matches))e.includes(s)&&(t=matches[s]);return t}class VideoData{audio=!1;paused=!0;duration=0;currentTime=0;site}let iFrameResponse=new VideoData;presence.on("iFrameData",(e=>{iFrameResponse=e})),presence.on("UpdateData",(async()=>{const e=document.location.pathname,t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CyTube/assets/logo.png",details:"loading",state:"CyTube"},s={pause:(await strings).pause,play:(await strings).play};async function a(e){const a=service(e.site);t.details=`Watching ${document.querySelector("#currenttitle").textContent.replace("Currently Playing:","")}\n            - ${a.display}`,t.largeImageKey=a.imageKey,[t.startTimestamp,t.endTimestamp]=presence.getTimestamps(Math.floor(e.currentTime),Math.floor(e.duration)),e.paused?(t.startTimestamp=null,t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png",t.smallImageText=`${s.pause} - ${getTimestamp(e.currentTime)}`):(t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",t.smallImageText=s.play)}if(e.includes("/r/"))if(t.state=`${document.querySelector("#motd").textContent} - /r/${e.split("r/")[0]}`,document.body.className.includes("chatOnly")||!document.querySelector("#videowrap"))t.details="Chatting",t.startTimestamp=Math.floor(Date.now()/1e3);else if(document.querySelector("#videowrap").querySelector("video")){const e=document.querySelector("#videowrap").querySelector("video");a({audio:!1,currentTime:e.currentTime,duration:e.duration,paused:e.paused,site:e.src})}else t.details="Waiting to Start",t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",t.smallImageText="Waiting",t.startTimestamp=Math.floor(Date.now()/1e3),iFrameResponse?.site&&a(iFrameResponse);else"/"===e?(t.details="On Homepage",t.startTimestamp=Math.floor(Date.now()/1e3)):e.includes("/account/")?(t.details="Managing Account",t.startTimestamp=Math.floor(Date.now()/1e3)):"/contact"===e&&(t.details="Contacting Support",t.startTimestamp=Math.floor(Date.now()/1e3));presence.setActivity(t,!0)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S1gsU0FBUyxPQUVkLEdBREFlLEVBQWFHLE1BQVEsR0FBR04sU0FBU1UsY0FBYyxTQUFTQyxvQkFBb0JaLEVBQUttQixNQUFNLE1BQU0sS0FDekZsQixTQUFTbUIsS0FBS0MsVUFBVWhDLFNBQVMsY0FDaENZLFNBQVNVLGNBQWMsY0FDeEJQLEVBQWFFLFFBQVUsV0FDdkJGLEVBQWFVLGVBQWlCckQsS0FBS0csTUFBTTBELEtBQUtDLE1BQVEsVUFFckQsR0FBS3RCLFNBQVNVLGNBQWMsY0FBY0EsY0FBYyxTQVF4RCxDQUNELE1BQU1hLEVBQVF2QixTQUFTVSxjQUFjLGNBQWNBLGNBQWMsU0FDakVGLEVBQVMsQ0FDTGxCLE9BQU8sRUFDUEcsWUFBYThCLEVBQU05QixZQUNuQkQsU0FBVStCLEVBQU0vQixTQUNoQkQsT0FBUWdDLEVBQU1oQyxPQUNkRyxLQUFNNkIsRUFBTUMsS0FFcEIsTUFoQklyQixFQUFhRSxRQUFVLG1CQUN2QkYsRUFBYWEsY0FBZ0IsK0NBQzdCYixFQUFhYyxlQUFpQixVQUM5QmQsRUFBYVUsZUFBaUJyRCxLQUFLRyxNQUFNMEQsS0FBS0MsTUFBUSxLQUNsRDNCLGdCQUFnQkQsTUFDaEJjLEVBQVNiLG9CQWFILE1BQVRJLEdBQ0xJLEVBQWFFLFFBQVUsY0FDdkJGLEVBQWFVLGVBQWlCckQsS0FBS0csTUFBTTBELEtBQUtDLE1BQVEsTUFFakR2QixFQUFLWCxTQUFTLGNBQ25CZSxFQUFhRSxRQUFVLG1CQUN2QkYsRUFBYVUsZUFBaUJyRCxLQUFLRyxNQUFNMEQsS0FBS0MsTUFBUSxNQUV4QyxhQUFUdkIsSUFDTEksRUFBYUUsUUFBVSxxQkFDdkJGLEVBQWFVLGVBQWlCckQsS0FBS0csTUFBTTBELEtBQUtDLE1BQVEsTUFFMUR4RSxTQUFTMkUsWUFBWXRCLEdBQWMsRUFBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NTM2Mzk4Mjg4MjY3NTA5NzZcIixcbn0pLCBzdHJpbmdzID0gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICBwYXVzZTogXCJnZW5lcmFsLnBhdXNlZFwiLFxufSk7XG5mdW5jdGlvbiBnZXRUaW1lcyh0aW1lKSB7XG4gICAgbGV0IHNlY29uZHMgPSBNYXRoLnJvdW5kKHRpbWUpLCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIHNlY29uZHMgLT0gbWludXRlcyAqIDYwO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICAgIG1pbnV0ZXMgLT0gaG91cnMgKiA2MDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWM6IHNlY29uZHMsXG4gICAgICAgIG1pbjogbWludXRlcyxcbiAgICAgICAgaHJzOiBob3VycyxcbiAgICB9O1xufVxuZnVuY3Rpb24gbGVzc1RlbihkaWdpdCkge1xuICAgIHJldHVybiBkaWdpdCA8IDEwID8gXCIwXCIgOiBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wKHRpbWUpIHtcbiAgICBjb25zdCB7IHNlYywgbWluLCBocnMgfSA9IGdldFRpbWVzKHRpbWUpO1xuICAgIHJldHVybiBocnMgPiAwXG4gICAgICAgID8gYCR7aHJzfToke2xlc3NUZW4obWluKX0ke21pbn06JHtsZXNzVGVuKHNlYyl9JHtzZWN9YFxuICAgICAgICA6IGAke21pbn06JHtsZXNzVGVuKHNlYyl9JHtzZWN9YDtcbn1cbmNvbnN0IG1hdGNoZXMgPSB7XG4gICAgeW91dHViZTogeyBkaXNwbGF5OiBcIllvdVR1YmVcIiwgaW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0N5VHViZS9hc3NldHMvMC5wbmdcIiB9LFxuICAgIGdvb2dsZXZpZGVvOiB7IGRpc3BsYXk6IFwiWW91VHViZVwiLCBpbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ3lUdWJlL2Fzc2V0cy8wLnBuZ1wiIH0sXG4gICAgXCJkb2NzLmdvb2dsZVwiOiB7IGRpc3BsYXk6IFwiR29vZ2xlIERyaXZlXCIsIGltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9DeVR1YmUvYXNzZXRzLzEucG5nXCIgfSxcbiAgICBnb29nbGV1c2VyY29udGVudDoge1xuICAgICAgICBkaXNwbGF5OiBcIkdvb2dsZSBEcml2ZVwiLFxuICAgICAgICBpbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ3lUdWJlL2Fzc2V0cy8xLnBuZ1wiLFxuICAgIH0sXG4gICAgYXBwc3BvdDogeyBkaXNwbGF5OiBcIkdvb2dsZSBDbG91ZFwiLCBpbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0MvQ3lUdWJlL2Fzc2V0cy81LnBuZ1wiIH0sXG4gICAgYmxvZ3Nwb3Q6IHsgZGlzcGxheTogXCJHb29nbGUgQ2xvdWRcIiwgaW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0N5VHViZS9hc3NldHMvNS5wbmdcIiB9LFxuICAgIGRyb3Bib3g6IHsgZGlzcGxheTogXCJEcm9wYm94XCIsIGltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9DeVR1YmUvYXNzZXRzLzIucG5nXCIgfSxcbiAgICBhbWF6b25hd3M6IHsgZGlzcGxheTogXCJBbWF6b24gQVdTXCIsIGltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9DeVR1YmUvYXNzZXRzLzMucG5nXCIgfSxcbiAgICBzb3VuZGNsb3VkOiB7IGRpc3BsYXk6IFwiU291bmRjbG91ZFwiLCBpbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9xdWVzdGlvbi5wbmdcIiB9LFxuICAgIGRpc2NvcmRhcHA6IHsgZGlzcGxheTogXCJEaXNjb3JkXCIsIGltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9DeVR1YmUvYXNzZXRzLzQucG5nXCIgfSxcbiAgICBcInZpbWVvLXByb2QtXCI6IHsgZGlzcGxheTogXCJWaW1lb1wiLCBpbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9xdWVzdGlvbi5wbmdcIiB9LFxufTtcbmZ1bmN0aW9uIHNlcnZpY2Uoc2VydmljZSkge1xuICAgIGxldCByZXR1cm5NYXRjaCA9IHtcbiAgICAgICAgZGlzcGxheTogXCJVbmtub3duIFNlcnZpY2VcIixcbiAgICAgICAgaW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0N5VHViZS9hc3NldHMvNi5wbmdcIixcbiAgICB9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1hdGNoZXMpKVxuICAgICAgICBzZXJ2aWNlLmluY2x1ZGVzKGtleSkgJiYgKHJldHVybk1hdGNoID0gbWF0Y2hlc1trZXldKTtcbiAgICByZXR1cm4gcmV0dXJuTWF0Y2g7XG59XG5jbGFzcyBWaWRlb0RhdGEge1xuICAgIGF1ZGlvID0gZmFsc2U7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgICBkdXJhdGlvbiA9IDA7XG4gICAgY3VycmVudFRpbWUgPSAwO1xuICAgIHNpdGU7XG59XG5sZXQgaUZyYW1lUmVzcG9uc2UgPSBuZXcgVmlkZW9EYXRhKCk7XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgKGRhdGEpID0+IHtcbiAgICBpRnJhbWVSZXNwb25zZSA9IGRhdGE7XG59KTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9DL0N5VHViZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgZGV0YWlsczogXCJsb2FkaW5nXCIsXG4gICAgICAgIHN0YXRlOiBcIkN5VHViZVwiLFxuICAgIH0sIHRyYW5zbGF0ZSA9IHtcbiAgICAgICAgcGF1c2U6IChhd2FpdCBzdHJpbmdzKS5wYXVzZSxcbiAgICAgICAgcGxheTogKGF3YWl0IHN0cmluZ3MpLnBsYXksXG4gICAgfTtcbiAgICBhc3luYyBmdW5jdGlvbiBzZXRWaWRlbyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlID0gc2VydmljZShkYXRhLnNpdGUpO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBXYXRjaGluZyAke2RvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50dGl0bGVcIilcbiAgICAgICAgICAgIC50ZXh0Q29udGVudC5yZXBsYWNlKFwiQ3VycmVudGx5IFBsYXlpbmc6XCIsIFwiXCIpfVxuICAgICAgICAgICAgLSAke2N1cnJlbnRTZXJ2aWNlLmRpc3BsYXl9YDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBjdXJyZW50U2VydmljZS5pbWFnZUtleTtcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyhNYXRoLmZsb29yKGRhdGEuY3VycmVudFRpbWUpLCBNYXRoLmZsb29yKGRhdGEuZHVyYXRpb24pKTtcbiAgICAgICAgaWYgKGRhdGEucGF1c2VkKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBudWxsO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gYCR7dHJhbnNsYXRlLnBhdXNlfSAtICR7Z2V0VGltZXN0YW1wKGRhdGEuY3VycmVudFRpbWUpfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHRyYW5zbGF0ZS5wbGF5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXRoLmluY2x1ZGVzKFwiL3IvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW90ZFwiKS50ZXh0Q29udGVudH0gLSAvci8ke3BhdGguc3BsaXQoXCJyL1wiKVswXX1gO1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGF0T25seVwiKSB8fFxuICAgICAgICAgICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW93cmFwXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ2hhdHRpbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvd3JhcFwiKS5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXYWl0aW5nIHRvIFN0YXJ0XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiV2FpdGluZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICBpZiAoaUZyYW1lUmVzcG9uc2U/LnNpdGUpXG4gICAgICAgICAgICAgICAgc2V0VmlkZW8oaUZyYW1lUmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvd3JhcFwiKS5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7XG4gICAgICAgICAgICBzZXRWaWRlbyh7XG4gICAgICAgICAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lOiB2aWRlby5jdXJyZW50VGltZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdmlkZW8uZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgcGF1c2VkOiB2aWRlby5wYXVzZWQsXG4gICAgICAgICAgICAgICAgc2l0ZTogdmlkZW8uc3JjLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aCA9PT0gXCIvXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIk9uIEhvbWVwYWdlXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoLmluY2x1ZGVzKFwiL2FjY291bnQvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJNYW5hZ2luZyBBY2NvdW50XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoID09PSBcIi9jb250YWN0XCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNvbnRhY3RpbmcgU3VwcG9ydFwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhLCB0cnVlKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXp0SlFVTTNRaXhKUVVGSkxFVkJRVVVzYVVKQlFXbENPMGxCUTNaQ0xFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJN1EwRkRka0lzUTBGQlF5eERRVUZETzBGQlJVb3NVMEZCVXl4UlFVRlJMRU5CUVVNc1NVRkJXVHRKUVVNM1FpeEpRVUZKTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVU0zUWl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZjRU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkZlRUlzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGZGtNc1QwRkJUeXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZGZEVJc1QwRkJUenRSUVVOT0xFZEJRVWNzUlVGQlJTeFBRVUZQTzFGQlExb3NSMEZCUnl4RlFVRkZMRTlCUVU4N1VVRkRXaXhIUVVGSExFVkJRVVVzUzBGQlN6dExRVU5XTEVOQlFVTTdRVUZEU0N4RFFVRkRPMEZCUlVRc1UwRkJVeXhQUVVGUExFTkJRVU1zUzBGQllUdEpRVU0zUWl4UFFVRlBMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRemxDTEVOQlFVTTdRVUZGUkN4VFFVRlRMRmxCUVZrc1EwRkJReXhKUVVGWk8wbEJRMnBETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVWNlF5eFBRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTJJc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSVHRSUVVOMFJDeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTI1RExFTkJRVU03UVVGelFrUXNUVUZCVFN4UFFVRlBMRWRCUVdNN1NVRkRNVUlzVDBGQlR5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSU3hSUVVGUkxEUkVRVUZyUWl4RlFVRkZPMGxCUXpORUxGZEJRVmNzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1VVRkJVU3cwUkVGQmEwSXNSVUZCUlR0SlFVVXZSQ3hoUVVGaExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNZMEZCWXl4RlFVRkZMRkZCUVZFc05FUkJRV3RDTEVWQlFVVTdTVUZEZEVVc2FVSkJRV2xDTEVWQlFVVTdVVUZEYkVJc1QwRkJUeXhGUVVGRkxHTkJRV003VVVGRGRrSXNVVUZCVVN3MFJFRkJhMEk3UzBGRE1VSTdTVUZGUkN4UFFVRlBMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzWTBGQll5eEZRVUZGTEZGQlFWRXNORVJCUVd0Q0xFVkJRVVU3U1VGRGFFVXNVVUZCVVN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHTkJRV01zUlVGQlJTeFJRVUZSTERSRVFVRnJRaXhGUVVGRk8wbEJSV3BGTEU5QlFVOHNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTdzBSRUZCYlVJc1JVRkJSVHRKUVVVMVJDeFRRVUZUTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1dVRkJXU3hGUVVGRkxGRkJRVkVzTkVSQlFXMUNMRVZCUVVVN1NVRkZha1VzVlVGQlZTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRmxCUVZrc1JVRkJSU3hSUVVGUkxHOUVRVUZwUWl4RlFVRkZPMGxCUldoRkxGVkJRVlVzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1VVRkJVU3cwUkVGQmEwSXNSVUZCUlR0SlFVVTVSQ3hoUVVGaExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc2IwUkJRV2xDTEVWQlFVVTdRMEZET1VRc1EwRkJRenRCUVVWR0xGTkJRVk1zVDBGQlR5eERRVUZETEU5QlFXVTdTVUZETDBJc1NVRkJTU3hYUVVGWExFZEJRVlU3VVVGRGVFSXNUMEZCVHl4RlFVRkZMR2xDUVVGcFFqdFJRVU14UWl4UlFVRlJMRFJFUVVGclFqdExRVU14UWl4RFFVRkRPMGxCUlVZc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVOeVF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSWFpFTEU5QlFVOHNWMEZCVnl4RFFVRkRPMEZCUTNCQ0xFTkJRVU03UVVGRlJDeE5RVUZOTEZOQlFWTTdTVUZEWkN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRMlFzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTmtMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRFlpeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTJoQ0xFbEJRVWtzUTBGQlV6dERRVU5pTzBGQlJVUXNTVUZCU1N4alFVRmpMRWRCUVVjc1NVRkJTU3hUUVVGVExFVkJRVVVzUTBGQlF6dEJRVVZ5UXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVsQlFXVXNSVUZCUlN4RlFVRkZPMGxCUXpkRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRlNDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZEZEVNc1dVRkJXU3hIUVVGcFFqdFJRVU0xUWl4aFFVRmhMQ3RFUVVGaE8xRkJRekZDTEU5QlFVOHNSVUZCUlN4VFFVRlRPMUZCUTJ4Q0xFdEJRVXNzUlVGQlJTeFJRVUZSTzB0QlEyWXNSVUZEUkN4VFFVRlRMRWRCUVVjN1VVRkRXQ3hMUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzN1VVRkROVUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSk8wdEJRekZDTEVOQlFVTTdTVUZGU0N4TFFVRkxMRlZCUVZVc1VVRkJVU3hEUVVGRExFbEJRV1U3VVVGRGRFTXNUVUZCVFN4alFVRmpMRWRCUVZVc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVnFSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZsQlFWa3NVVUZCVVR0aFFVTjZReXhoUVVGaExFTkJRVU1zWlVGQlpTeERRVUZETzJGQlF6bENMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU5xUXl4alFVRmpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmRrTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETzFGQlJYSkVMRU5CUVVNc1dVRkJXU3hEUVVGRExHTkJRV01zUlVGQlJTeFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRPMWxCUTNaRUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVTTFRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkRla0lzUTBGQlF6dFJRVVZJTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOb1FpeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOdVF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4clJFRkJaU3hEUVVGRE8xbEJRekZETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eE5RVUZOTEZsQlFWa3NRMEZEYWtVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGRGFFSXNSVUZCUlN4RFFVRkRPMU5CUTBvN1lVRkJUVHRaUVVOT0xGbEJRVmtzUTBGQlF5eGhRVUZoTEdsRVFVRmpMRU5CUVVNN1dVRkRla01zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRE8xTkJRemRETzBsQlEwWXNRMEZCUXp0SlFVVkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0UlFVTjZRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFhRVUZYTEZOQlEyeEZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTnVRaXhGUVVGRkxFTkJRVU03VVVGRFNDeEpRVU5ETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTTdXVUZETlVNc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVTndRenRaUVVORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMWxCUTJ4RExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkROVVE3WVVGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1dVRkRlRVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFpRVU14UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3hwUkVGQll5eERRVUZETzFsQlEzcERMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVTBGQlV5eERRVUZETzFsQlEzaERMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZGTlVRc1NVRkJTU3hqUVVGakxFVkJRVVVzU1VGQlNUdG5Ra0ZCUlN4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03VTBGRGJrUTdZVUZCVFR0WlFVTk9MRTFCUVUwc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlJURkZMRkZCUVZFc1EwRkJRenRuUWtGRFVpeExRVUZMTEVWQlFVVXNTMEZCU3p0blFrRkRXaXhYUVVGWExFVkJRVVVzUzBGQlN5eERRVUZETEZkQlFWYzdaMEpCUXpsQ0xGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVR0blFrRkRlRUlzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5PMmRDUVVOd1FpeEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjN1lVRkRaaXhEUVVGRExFTkJRVU03VTBGRFNEdExRVU5FTzFOQlFVMHNTVUZCU1N4SlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRk8xRkJRM2hDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1lVRkJZU3hEUVVGRE8xRkJRM0pETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE5VUTdVMEZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdVVUZEZEVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRSUVVNeFF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRelZFTzFOQlFVMHNTVUZCU1N4SlFVRkpMRXRCUVVzc1ZVRkJWU3hGUVVGRk8xRkJReTlDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdVVUZETlVNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTTFSRHRKUVVORUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRekZETEVOQlFVTXNRMEZCUXl4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsInN0cmluZ3MiLCJnZXRTdHJpbmdzIiwicGxheSIsInBhdXNlIiwiZ2V0VGltZXMiLCJ0aW1lIiwic2Vjb25kcyIsIk1hdGgiLCJyb3VuZCIsIm1pbnV0ZXMiLCJmbG9vciIsImhvdXJzIiwic2VjIiwibWluIiwiaHJzIiwibGVzc1RlbiIsImRpZ2l0IiwiZ2V0VGltZXN0YW1wIiwibWF0Y2hlcyIsInlvdXR1YmUiLCJkaXNwbGF5IiwiaW1hZ2VLZXkiLCJnb29nbGV2aWRlbyIsImdvb2dsZXVzZXJjb250ZW50IiwiYXBwc3BvdCIsImJsb2dzcG90IiwiZHJvcGJveCIsImFtYXpvbmF3cyIsInNvdW5kY2xvdWQiLCJkaXNjb3JkYXBwIiwic2VydmljZSIsInJldHVybk1hdGNoIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwiVmlkZW9EYXRhIiwiYXVkaW8iLCJwYXVzZWQiLCJkdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwic2l0ZSIsImlGcmFtZVJlc3BvbnNlIiwib24iLCJkYXRhIiwiYXN5bmMiLCJwYXRoIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImRldGFpbHMiLCJzdGF0ZSIsInRyYW5zbGF0ZSIsInNldFZpZGVvIiwiY3VycmVudFNlcnZpY2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwic3RhcnRUaW1lc3RhbXAiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0Iiwic3BsaXQiLCJib2R5IiwiY2xhc3NOYW1lIiwiRGF0ZSIsIm5vdyIsInZpZGVvIiwic3JjIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;