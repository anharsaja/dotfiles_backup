var __webpack_exports__={};const presence=new Presence({clientId:"936985014560755753"}),browsingTimestamp=Math.floor(Date.now()/1e3);let video={paused:!0,timeLeft:""},title="";presence.on("iFrameData",(e=>{e.paused||e.timeLeft?video=e:title=e.titleV})),presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Wcostream/assets/logo.png",details:"Browsing...",startTimestamp:browsingTimestamp},{pathname:t}=document.location,[s,a,i]=await Promise.all([presence.getSetting("timestamps"),presence.getSetting("cover"),presence.getSetting("buttons")]);if(""!==video.timeLeft){title||(title=document.querySelector('[itemprop="partOfSeries"]')?.textContent??document.querySelector(".video-title")?.textContent??document.querySelector(".entry-title")?.textContent),e.details="Watching:",e.state=title?.split("Episode")?.[0],document.querySelector('[class*="s-post-image"]')&&(e.largeImageKey=document.querySelector('[class*="s-post-image"]')?.src??"https://cdn.rcd.gg/PreMiD/websites/W/Wcostream/assets/logo.png"),delete e.startTimestamp;const t=presence.timestampFromFormat(video.timeLeft);Date.now()/1e3>=Date.now()/1e3+t&&(video.paused=!0),video.paused||(e.endTimestamp=Date.now()/1e3+t),e.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=video.paused?"Paused":"Playing",e.buttons=[{label:"Watch Episode",url:document.URL}]}else"/"===t?e.details="Home page":t.startsWith("/search")&&(e.details="Searching...",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png");a||"https://cdn.rcd.gg/PreMiD/websites/W/Wcostream/assets/logo.png"===e.largeImageKey||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/W/Wcostream/assets/logo.png"),!i&&e.buttons&&delete e.buttons,s||!e.endTimestamp&&!e.startTimestamp||(delete e.startTimestamp,delete e.endTimestamp),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLE1BQVEsQ0FDUkMsUUFBUSxFQUNSQyxTQUFVLElBQ1hDLE1BQVEsR0FDWFgsU0FBU1ksR0FBRyxjQUFlQyxJQUNuQkEsRUFBS0osUUFBVUksRUFBS0gsU0FDcEJGLE1BQVFLLEVBRVJGLE1BQVFFLEVBQUtDLE1BQU0sSUFFM0JkLFNBQVNZLEdBQUcsY0FBY0csVUFDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSxpRUFDZkMsUUFBUyxjQUNUQyxlQUFnQmhCLG9CQUNqQixTQUFFaUIsR0FBYUMsU0FBU0MsVUFBV0MsRUFBWUMsRUFBT0MsU0FBaUJDLFFBQVFDLElBQUksQ0FDbEYzQixTQUFTNEIsV0FBVyxjQUNwQjVCLFNBQVM0QixXQUFXLFNBQ3BCNUIsU0FBUzRCLFdBQVcsYUFFeEIsR0FBdUIsS0FBbkJwQixNQUFNRSxTQUFpQixDQUNsQkMsUUFDREEsTUFDSVUsU0FBU1EsY0FBYyw4QkFBOEJDLGFBQ2pEVCxTQUFTUSxjQUFjLGlCQUFpQkMsYUFDeENULFNBQVNRLGNBQWMsaUJBQWlCQyxhQUVwRGQsRUFBYUUsUUFBVSxZQUN2QkYsRUFBYWUsTUFBUXBCLE9BQU9xQixNQUFNLGFBQWEsR0FDM0NYLFNBQVNRLGNBQWMsNkJBQ3ZCYixFQUFhQyxjQUNUSSxTQUFTUSxjQUFjLDRCQUNqQkksS0FBTyx5RUFFZGpCLEVBQWFHLGVBQ3BCLE1BQU1ULEVBQVdWLFNBQVNrQyxvQkFBb0IxQixNQUFNRSxVQUNoREosS0FBS0MsTUFBUSxLQUFRRCxLQUFLQyxNQUFRLElBQU9HLElBQ3pDRixNQUFNQyxRQUFTLEdBQ2RELE1BQU1DLFNBQ1BPLEVBQWFtQixhQUFlN0IsS0FBS0MsTUFBUSxJQUFPRyxHQUNwRE0sRUFBYW9CLGNBQWdCNUIsTUFBTUMsT0FBUyxnREFBa0QsK0NBQzlGTyxFQUFhcUIsZUFBaUI3QixNQUFNQyxPQUFTLFNBQVcsVUFDeERPLEVBQWFTLFFBQVUsQ0FBQyxDQUFFYSxNQUFPLGdCQUFpQkMsSUFBS2xCLFNBQVNtQixLQUNwRSxLQUNzQixNQUFicEIsRUFDTEosRUFBYUUsUUFBVSxZQUNsQkUsRUFBU3FCLFdBQVcsYUFDekJ6QixFQUFhRSxRQUFVLGVBQ3ZCRixFQUFhb0IsY0FBZ0Isa0RBRTVCWixHQUF3QyxtRUFBL0JSLEVBQWFDLGdCQUN2QkQsRUFBYUMsY0FBZ0IsbUVBQzVCUSxHQUFXVCxFQUFhUyxnQkFDbEJULEVBQWFTLFFBQ25CRixJQUNBUCxFQUFhbUIsZUFBZ0JuQixFQUFhRyx3QkFDcENILEVBQWFHLHNCQUNiSCxFQUFhbUIsY0FFeEJuQyxTQUFTMEMsWUFBWTFCLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTM2OTg1MDE0NTYwNzU1NzUzXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCB2aWRlbyA9IHtcbiAgICBwYXVzZWQ6IHRydWUsXG4gICAgdGltZUxlZnQ6IFwiXCIsXG59LCB0aXRsZSA9IFwiXCI7XG5wcmVzZW5jZS5vbihcImlGcmFtZURhdGFcIiwgKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5wYXVzZWQgfHwgZGF0YS50aW1lTGVmdClcbiAgICAgICAgdmlkZW8gPSBkYXRhO1xuICAgIGVsc2VcbiAgICAgICAgdGl0bGUgPSBkYXRhLnRpdGxlVjtcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1djb3N0cmVhbS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgZGV0YWlsczogXCJCcm93c2luZy4uLlwiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBwYXRobmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb24sIFt0aW1lc3RhbXBzLCBjb3ZlciwgYnV0dG9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lc3RhbXBzXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiY292ZXJcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgIF0pO1xuICAgIGlmICh2aWRlby50aW1lTGVmdCAhPT0gXCJcIikge1xuICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2l0ZW1wcm9wPVwicGFydE9mU2VyaWVzXCJdJyk/LnRleHRDb250ZW50ID8/XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tdGl0bGVcIik/LnRleHRDb250ZW50ID8/XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktdGl0bGVcIik/LnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXYXRjaGluZzpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGU/LnNwbGl0KFwiRXBpc29kZVwiKT8uWzBdO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzKj1cInMtcG9zdC1pbWFnZVwiXScpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzKj1cInMtcG9zdC1pbWFnZVwiXScpXG4gICAgICAgICAgICAgICAgICAgID8uc3JjID8/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1djb3N0cmVhbS9hc3NldHMvbG9nby5wbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICBjb25zdCB0aW1lTGVmdCA9IHByZXNlbmNlLnRpbWVzdGFtcEZyb21Gb3JtYXQodmlkZW8udGltZUxlZnQpO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAvIDEwMDAgPj0gRGF0ZS5ub3coKSAvIDEwMDAgKyB0aW1lTGVmdClcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGlmICghdmlkZW8ucGF1c2VkKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcCA9IERhdGUubm93KCkgLyAxMDAwICsgdGltZUxlZnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gdmlkZW8ucGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gdmlkZW8ucGF1c2VkID8gXCJQYXVzZWRcIiA6IFwiUGxheWluZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIldhdGNoIEVwaXNvZGVcIiwgdXJsOiBkb2N1bWVudC5VUkwgfV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkhvbWUgcGFnZVwiO1xuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvc2VhcmNoXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJTZWFyY2hpbmcuLi5cIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICB9XG4gICAgaWYgKCFjb3ZlciAmJiBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSAhPT0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1cvV2Nvc3RyZWFtL2Fzc2V0cy9sb2dvLnBuZ1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9XL1djb3N0cmVhbS9hc3NldHMvbG9nby5wbmdcIjtcbiAgICBpZiAoIWJ1dHRvbnMgJiYgcHJlc2VuY2VEYXRhLmJ1dHRvbnMpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBpZiAoIXRpbWVzdGFtcHMgJiZcbiAgICAgICAgKHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXAgfHwgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wKSkge1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcDtcbiAgICB9XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEV0QlFVc3NSMEZCUnp0SlFVTldMRTFCUVUwc1JVRkJSU3hKUVVGSk8wbEJRMW9zVVVGQlVTeEZRVUZGTEVWQlFVVTdRMEZEV2l4RlFVTkVMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGTFdpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVTldMRmxCUVZrc1JVRkRXaXhEUVVGRExFbEJRVEpFTEVWQlFVVXNSVUZCUlR0SlFVTXZSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFN1VVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZET3p0UlFVTXhReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTXhRaXhEUVVGRExFTkJRMFFzUTBGQlF6dEJRVVZHTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5xUXl4aFFVRmhMR3RGUVVGaE8xRkJRekZDTEU5QlFVOHNSVUZCUlN4aFFVRmhPMUZCUTNSQ0xHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEZRVUZGTEZGQlFWRXNSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRMmhETEVOQlFVTXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eE5RVUZOTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRhRVFzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4WlFVRlpMRU5CUVVNN1VVRkRNVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4UFFVRlBMRU5CUVVNN1VVRkRja01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1MwRkRka01zUTBGQlF5eERRVUZETzBsQlEwb3NTVUZCU1N4TFFVRkxMRU5CUVVNc1VVRkJVU3hMUVVGTExFVkJRVVVzUlVGQlJUdFJRVU14UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMWdzUzBGQlN6dG5Ra0ZEU2l4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExESkNRVUV5UWl4RFFVRkRMRVZCUVVVc1YwRkJWenR2UWtGRGFFVXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJTeFhRVUZYTzI5Q1FVTnVSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJRenRUUVVOeVJEdFJRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1YwRkJWeXhEUVVGRE8xRkJRMjVETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSV3hFTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJiVUlzZVVKQlFYbENMRU5CUVVNc1JVRkJSVHRaUVVWNFJTeFpRVUZaTEVOQlFVTXNZVUZCWVR0blFrRkRla0lzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCYlVJc2VVSkJRWGxDTEVOQlFVTTdiMEpCUTJ4RkxFVkJRVVVzUjBGQlJ5eHZSVUZCWlN4RFFVRkRPMU5CUTNaQ08xRkJRMFFzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUTI1RExFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkZPVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRWRCUVVjc1VVRkJVVHRaUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlRORkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFR0WlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRk5VVXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNhVVJCUVdNc1EwRkJReXdyUTBGQldTeERRVUZETzFGQlEzWkZMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEYkVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMR1ZCUVdVc1JVRkJSU3hIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1MwRkRka1U3VTBGQlRTeEpRVUZKTEZGQlFWRXNTMEZCU3l4SFFVRkhPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVMEZETTBRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMUZCUTNoRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZMEZCWXl4RFFVRkRPMUZCUTNSRExGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8wdEJRek5ETzBsQlJVUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3haUVVGWkxFTkJRVU1zWVVGQllTeHhSVUZCWjBJN1VVRkRka1FzV1VGQldTeERRVUZETEdGQlFXRXNiVVZCUVdNc1EwRkJRenRKUVVVeFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUE8xRkJRVVVzVDBGQlR5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTJ4RkxFbEJRME1zUTBGQlF5eFZRVUZWTzFGQlExZ3NRMEZCUXl4WlFVRlpMRU5CUVVNc1dVRkJXU3hKUVVGSkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZEZWtRN1VVRkRSQ3hQUVVGUExGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTTdVVUZEYmtNc1QwRkJUeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzB0QlEycERPMGxCUTBRc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwidmlkZW8iLCJwYXVzZWQiLCJ0aW1lTGVmdCIsInRpdGxlIiwib24iLCJkYXRhIiwidGl0bGVWIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwiZGV0YWlscyIsInN0YXJ0VGltZXN0YW1wIiwicGF0aG5hbWUiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwidGltZXN0YW1wcyIsImNvdmVyIiwiYnV0dG9ucyIsIlByb21pc2UiLCJhbGwiLCJnZXRTZXR0aW5nIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic3RhdGUiLCJzcGxpdCIsInNyYyIsInRpbWVzdGFtcEZyb21Gb3JtYXQiLCJlbmRUaW1lc3RhbXAiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJsYWJlbCIsInVybCIsIlVSTCIsInN0YXJ0c1dpdGgiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;