var __webpack_exports__={};const presence=new Presence({clientId:"808756700022702120"});async function getStrings(){return presence.getStrings({play:"general.playing",pause:"general.paused",viewPlaylist:"general.buttonViewPlaylist",viewArtist:"general.buttonViewArtist"},await presence.getSetting("lang").catch((()=>"en")))}let strings,oldLang=null;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/Amazon%20Music/assets/logo.png"},[t,s,a,n]=await Promise.all([presence.getSetting("buttons"),presence.getSetting("lang").catch((()=>"en")),presence.getSetting("showPlaylist"),presence.getSetting("cover")]);if(oldLang===s&&strings||(oldLang=s,strings=await getStrings()),navigator.mediaSession.metadata){const s="paused"===navigator.mediaSession.playbackState;if(!document.querySelector("div._2kGtEHAlQ5t5sY3jvz-wwl > div._1Wgs9MKFGuL58IFgKSM811 > div._2HXusrWftEtKAYukKt5IuO > music-button")){const s=document.querySelector("music-app.hydrated music-horizontal-item")?.shadowRoot.querySelector("div > div > span")?.children[2]?.querySelector("a")?.href,n=document.querySelector("music-app.hydrated music-horizontal-item")?.shadowRoot.querySelector("div > div > span")?.children[0]?.querySelector("a")?.href;a&&t&&n&&s?e.buttons=[{label:strings.viewArtist,url:n},{label:strings.viewPlaylist,url:s}]:n&&t&&(e.buttons=[{label:strings.viewArtist,url:n}])}e.details=navigator.mediaSession.metadata.title,e.state=navigator.mediaSession.metadata.artist,e.smallImageKey=s?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=s?strings.pause:strings.play,e.endTimestamp=Date.now()/1e3+presence.timestampFromFormat(document.querySelector("div.sXaGQzYs9WqImj2uxDCBs > span:nth-child(2)").textContent.match(/[0-9:]+/)[0]),n&&(e.largeImageKey=navigator.mediaSession.metadata.artwork[0].src),s&&(delete e.startTimestamp,delete e.endTimestamp),presence.setActivity(e)}else e.details="Browsing...",presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZEMsZUFBZUMsYUFDWCxPQUFPSixTQUFTSSxXQUFXLENBQ3ZCQyxLQUFNLGtCQUNOQyxNQUFPLGlCQUNQQyxhQUFjLDZCQUNkQyxXQUFZLGtDQUNQUixTQUFTUyxXQUFXLFFBQVFDLE9BQU0sSUFBTSxPQUNyRCxDQUNBLElBQUlDLFFBQVNDLFFBQVUsS0FDdkJaLFNBQVNhLEdBQUcsY0FBY1YsVUFDdEIsTUFBTVcsRUFBZSxDQUNqQkMsY0FBZSx3RUFDZkMsRUFBU0MsRUFBU0MsRUFBY0MsU0FBZUMsUUFBUUMsSUFBSSxDQUMzRHJCLFNBQVNTLFdBQVcsV0FDcEJULFNBQVNTLFdBQVcsUUFBUUMsT0FBTSxJQUFNLE9BQ3hDVixTQUFTUyxXQUFXLGdCQUNwQlQsU0FBU1MsV0FBVyxXQU14QixHQUpJRyxVQUFZSyxHQUFZTixVQUN4QkMsUUFBVUssRUFDVk4sY0FBZ0JQLGNBRWhCa0IsVUFBVUMsYUFBYUMsU0FBVSxDQUNqQyxNQUFNQyxFQUFrRCxXQUF6Q0gsVUFBVUMsYUFBYUcsY0FDdEMsSUFBS0MsU0FBU0MsY0FBYywwR0FBMkcsQ0FDbkksTUFBTUMsRUFBZUYsU0FDaEJDLGNBQWMsNkNBQ2JFLFdBQVdGLGNBQWMscUJBQ3pCRyxTQUFTLElBQUlILGNBQWMsTUFBTUksS0FBTUMsRUFBYU4sU0FDckRDLGNBQWMsNkNBQ2JFLFdBQVdGLGNBQWMscUJBQ3pCRyxTQUFTLElBQUlILGNBQWMsTUFBTUksS0FDbkNkLEdBQWdCRixHQUFXaUIsR0FBY0osRUFDekNmLEVBQWFFLFFBQVUsQ0FDbkIsQ0FDSWtCLE1BQU92QixRQUFRSCxXQUNmMkIsSUFBS0YsR0FFVCxDQUNJQyxNQUFPdkIsUUFBUUosYUFDZjRCLElBQUtOLElBSVJJLEdBQWNqQixJQUNuQkYsRUFBYUUsUUFBVSxDQUNuQixDQUNJa0IsTUFBT3ZCLFFBQVFILFdBQ2YyQixJQUFLRixJQUlyQixDQUNBbkIsRUFBYXNCLFFBQVVkLFVBQVVDLGFBQWFDLFNBQVNhLE1BQ3ZEdkIsRUFBYXdCLE1BQVFoQixVQUFVQyxhQUFhQyxTQUFTZSxPQUNyRHpCLEVBQWEwQixjQUFnQmYsRUFBUyxnREFBa0QsK0NBQ3hGWCxFQUFhMkIsZUFBaUJoQixFQUFTZCxRQUFRTCxNQUFRSyxRQUFRTixLQUMvRFMsRUFBYTRCLGFBQ1RDLEtBQUtDLE1BQVEsSUFDVDVDLFNBQVM2QyxvQkFBb0JsQixTQUN4QkMsY0FBYyxpREFDZGtCLFlBQVlDLE1BQU0sV0FBVyxJQUN0QzVCLElBQ0FMLEVBQWFDLGNBQ1RPLFVBQVVDLGFBQWFDLFNBQVN3QixRQUFRLEdBQUdDLEtBRS9DeEIsV0FDT1gsRUFBYW9DLHNCQUNicEMsRUFBYTRCLGNBRXhCMUMsU0FBU21ELFlBQVlyQyxFQUN6QixNQUVJQSxFQUFhc0IsUUFBVSxjQUN2QnBDLFNBQVNtRCxZQUFZckMsRUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODA4NzU2NzAwMDIyNzAyMTIwXCIsXG59KTtcbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgICAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgICAgICBwYXVzZTogXCJnZW5lcmFsLnBhdXNlZFwiLFxuICAgICAgICB2aWV3UGxheWxpc3Q6IFwiZ2VuZXJhbC5idXR0b25WaWV3UGxheWxpc3RcIixcbiAgICAgICAgdmlld0FydGlzdDogXCJnZW5lcmFsLmJ1dHRvblZpZXdBcnRpc3RcIixcbiAgICB9LCBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpKTtcbn1cbmxldCBzdHJpbmdzLCBvbGRMYW5nID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BbWF6b24lMjBNdXNpYy9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9LCBbYnV0dG9ucywgbmV3TGFuZywgc2hvd1BsYXlsaXN0LCBjb3Zlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic2hvd1BsYXlsaXN0XCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiY292ZXJcIiksXG4gICAgXSk7XG4gICAgaWYgKG9sZExhbmcgIT09IG5ld0xhbmcgfHwgIXN0cmluZ3MpIHtcbiAgICAgICAgb2xkTGFuZyA9IG5ld0xhbmc7XG4gICAgICAgIHN0cmluZ3MgPSBhd2FpdCBnZXRTdHJpbmdzKCk7XG4gICAgfVxuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLm1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhdXNlZCA9IG5hdmlnYXRvci5tZWRpYVNlc3Npb24ucGxheWJhY2tTdGF0ZSA9PT0gXCJwYXVzZWRcIjtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Ll8ya0d0RUhBbFE1dDVzWTNqdnotd3dsID4gZGl2Ll8xV2dzOU1LRkd1TDU4SUZnS1NNODExID4gZGl2Ll8ySFh1c3JXZnRFdEtBWXVrS3Q1SXVPID4gbXVzaWMtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5bGlzdExpbmsgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwibXVzaWMtYXBwLmh5ZHJhdGVkIG11c2ljLWhvcml6b250YWwtaXRlbVwiKVxuICAgICAgICAgICAgICAgID8uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gZGl2ID4gc3BhblwiKVxuICAgICAgICAgICAgICAgID8uY2hpbGRyZW5bMl0/LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpPy5ocmVmLCBhcnRpc3RMaW5rID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm11c2ljLWFwcC5oeWRyYXRlZCBtdXNpYy1ob3Jpem9udGFsLWl0ZW1cIilcbiAgICAgICAgICAgICAgICA/LnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImRpdiA+IGRpdiA+IHNwYW5cIilcbiAgICAgICAgICAgICAgICA/LmNoaWxkcmVuWzBdPy5xdWVyeVNlbGVjdG9yKFwiYVwiKT8uaHJlZjtcbiAgICAgICAgICAgIGlmIChzaG93UGxheWxpc3QgJiYgYnV0dG9ucyAmJiBhcnRpc3RMaW5rICYmIHBsYXlsaXN0TGluaykge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy52aWV3QXJ0aXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBhcnRpc3RMaW5rLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy52aWV3UGxheWxpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHBsYXlsaXN0TGluayxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJ0aXN0TGluayAmJiBidXR0b25zKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmdzLnZpZXdBcnRpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGFydGlzdExpbmssXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IG5hdmlnYXRvci5tZWRpYVNlc3Npb24ubWV0YWRhdGEudGl0bGU7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IG5hdmlnYXRvci5tZWRpYVNlc3Npb24ubWV0YWRhdGEuYXJ0aXN0O1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHBhdXNlZCA/IHN0cmluZ3MucGF1c2UgOiBzdHJpbmdzLnBsYXk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXAgPVxuICAgICAgICAgICAgRGF0ZS5ub3coKSAvIDEwMDAgK1xuICAgICAgICAgICAgICAgIHByZXNlbmNlLnRpbWVzdGFtcEZyb21Gb3JtYXQoZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc1hhR1F6WXM5V3FJbWoydXhEQ0JzID4gc3BhbjpudGgtY2hpbGQoMilcIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50Lm1hdGNoKC9bMC05Ol0rLylbMF0pO1xuICAgICAgICBpZiAoY292ZXIpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID1cbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLm1ldGFkYXRhLmFydHdvcmtbMF0uc3JjO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXVzZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUTBGQlF6dEJRVVZJTEV0QlFVc3NWVUZCVlN4VlFVRlZPMGxCUTNoQ0xFOUJRVThzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZEZWtJN1VVRkRReXhKUVVGSkxFVkJRVVVzYVVKQlFXbENPMUZCUTNaQ0xFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJN1VVRkRka0lzV1VGQldTeEZRVUZGTERSQ1FVRTBRanRSUVVNeFF5eFZRVUZWTEVWQlFVVXNNRUpCUVRCQ08wdEJRM1JETEVWQlEwUXNUVUZCVFN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVExFMUJRVTBzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGRE0wUXNRMEZCUXp0QlFVTklMRU5CUVVNN1FVRkZSQ3hKUVVGSkxFOUJRU3RETEVWQlEyeEVMRTlCUVU4c1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGRmVFSXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXh4UlVGQmNVVTdTMEZEZEVVc1JVRkRSQ3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNXVUZCV1N4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFMUJRVTBzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTXpSQ3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZOQlFWTXNRMEZCUXp0UlFVTjJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZUTEUxQlFVMHNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEY2tRc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeGpRVUZqTEVOQlFVTTdVVUZETlVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFBRVUZQTEVOQlFVTTdTMEZEY2tNc1EwRkJReXhEUVVGRE8wbEJSVW9zU1VGQlNTeFBRVUZQTEV0QlFVc3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xRkJRM0JETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRiRUlzVDBGQlR5eEhRVUZITEUxQlFVMHNWVUZCVlN4RlFVRkZMRU5CUVVNN1MwRkROMEk3U1VGRlJDeEpRVUZKTEZOQlFWTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xRkJRM0JETEUxQlFVMHNUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJReXhaUVVGWkxFTkJRVU1zWVVGQllTeExRVUZMTEZGQlFWRXNRMEZCUXp0UlFVVnFSU3hKUVVORExFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEZEVJc2QwZEJRWGRITEVOQlEzaEhMRVZCUTBFN1dVRkRSQ3hOUVVGTkxGbEJRVmtzUjBGQlJ5eFJRVUZSTzJsQ1FVTXhRaXhoUVVGaExFTkJRVU1zTUVOQlFUQkRMRU5CUVVNN1owSkJRekZFTEVWQlFVVXNWVUZCVlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0blFrRkRPVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZEZUVNc1ZVRkJWU3hIUVVGSExGRkJRVkU3YVVKQlEyNUNMR0ZCUVdFc1EwRkJReXd3UTBGQk1FTXNRMEZCUXp0blFrRkRNVVFzUlVGQlJTeFZRVUZWTEVOQlFVTXNZVUZCWVN4RFFVRkRMR3RDUVVGclFpeERRVUZETzJkQ1FVTTVReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETzFsQlJURkRMRWxCUVVrc1dVRkJXU3hKUVVGSkxFOUJRVThzU1VGQlNTeFZRVUZWTEVsQlFVa3NXVUZCV1N4RlFVRkZPMmRDUVVNeFJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExGVkJRVlU3ZDBKQlEzcENMRWRCUVVjc1JVRkJSU3hWUVVGVk8zRkNRVU5tTzI5Q1FVTkVPM2RDUVVORExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNXVUZCV1R0M1FrRkRNMElzUjBGQlJ5eEZRVUZGTEZsQlFWazdjVUpCUTJwQ08ybENRVU5FTEVOQlFVTTdZVUZEUmp0cFFrRkJUU3hKUVVGSkxGVkJRVlVzU1VGQlNTeFBRVUZQTEVWQlFVVTdaMEpCUTJwRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdiMEpCUTNSQ08zZENRVU5ETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1ZVRkJWVHQzUWtGRGVrSXNSMEZCUnl4RlFVRkZMRlZCUVZVN2NVSkJRMlk3YVVKQlEwUXNRMEZCUXp0aFFVTkdPMU5CUTBRN1VVRkZSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU0zUkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNMVJDeFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExHbEVRVUZqTEVOQlFVTXNLME5CUVZrc1EwRkJRenRSUVVOcVJTeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dFJRVU53UlN4WlFVRlpMRU5CUVVNc1dVRkJXVHRaUVVONFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTVHRuUWtGRGFrSXNVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVU16UWl4UlFVRlJPM0ZDUVVOT0xHRkJRV0VzUTBGQlF5d3JRMEZCSzBNc1EwRkJRenR4UWtGRE9VUXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZEYWtNc1EwRkJRenRSUVVWSUxFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExWXNXVUZCV1N4RFFVRkRMR0ZCUVdFN1owSkJRM3BDTEZOQlFWTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1UwRkRhRVE3VVVGRlJDeEpRVUZKTEUxQlFVMHNSVUZCUlR0WlFVTllMRTlCUVU4c1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF6dFpRVU51UXl4UFFVRlBMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU03VTBGRGFrTTdVVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzB0QlEyNURPMU5CUVUwN1VVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdGQlFXRXNRMEZCUXp0UlFVTnlReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMHRCUTI1RE8wRkJRMFlzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImFzeW5jIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsInZpZXdQbGF5bGlzdCIsInZpZXdBcnRpc3QiLCJnZXRTZXR0aW5nIiwiY2F0Y2giLCJzdHJpbmdzIiwib2xkTGFuZyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImJ1dHRvbnMiLCJuZXdMYW5nIiwic2hvd1BsYXlsaXN0IiwiY292ZXIiLCJQcm9taXNlIiwiYWxsIiwibmF2aWdhdG9yIiwibWVkaWFTZXNzaW9uIiwibWV0YWRhdGEiLCJwYXVzZWQiLCJwbGF5YmFja1N0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWxpc3RMaW5rIiwic2hhZG93Um9vdCIsImNoaWxkcmVuIiwiaHJlZiIsImFydGlzdExpbmsiLCJsYWJlbCIsInVybCIsImRldGFpbHMiLCJ0aXRsZSIsInN0YXRlIiwiYXJ0aXN0Iiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwiZW5kVGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcEZyb21Gb3JtYXQiLCJ0ZXh0Q29udGVudCIsIm1hdGNoIiwiYXJ0d29yayIsInNyYyIsInN0YXJ0VGltZXN0YW1wIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;