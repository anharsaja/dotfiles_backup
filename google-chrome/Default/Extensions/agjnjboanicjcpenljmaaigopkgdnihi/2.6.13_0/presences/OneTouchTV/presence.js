var __webpack_exports__={};const presence=new Presence({clientId:"1160179473044476017"});let video=null;presence.on("iFrameData",(e=>{video=e}));const timestampCheck={hash:"",timestamp:Math.floor(Date.now()/1e3)};presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/O/OneTouchTV/assets/logo.png",startTimestamp:timestampCheck.timestamp},{href:t,pathname:s}=document.location,a=t;switch(timestampCheck.hash!==a&&(timestampCheck.hash=a,timestampCheck.timestamp=Math.floor(Date.now()/1e3)),!0){case"/"===s:e.details="Viewing the homepage";break;case"/movie"===s:e.details="Viewing all movies";break;case"/tvshow"===s:e.details="Viewing all tv shows";break;case"/live"===s:e.details="Viewing all live content";break;case s.includes("/search"):{const t=document.querySelector("body > flt-glass-pane").shadowRoot.querySelectorAll("input")[1]?.value;e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",0!==t?.length?(e.details="Searching for",e.state=t):e.details="Looking something up";break}case s.includes("/actor/"):e.details="Viewing actor",e.state=document.querySelector("title")?.textContent.replace(/ - OneTouch TV/gm,"")??"",e.buttons=[{label:"View Actor",url:t}];break;case s.includes("/detail/"):{const s=document.querySelector("body > flt-glass-pane").shadowRoot.querySelectorAll("flt-paragraph");let a;for(const[,e]of s.entries())e.textContent.includes(")")&&!a&&(a=e.textContent);a||(a=document.querySelector("title")?.textContent.replace(/( - )|(OneTouch TV)/gm,"")),a?.includes("Episode")?(e.details=a.split("Episode")[0],e.state=`Episode${a.split("Episode")[1]}`):e.details=a,video?(delete e.startTimestamp,video.paused||([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(video.currentTime,video.duration)),e.smallImageKey=video.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.buttons=[{label:"Watch Video",url:t}]):e.buttons=[{label:"View Content",url:t}];break}}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFFZCxJQUFJQyxNQUFRLEtBQ1pILFNBQVNJLEdBQUcsY0FBZUMsSUFDdkJGLE1BQVFFLENBQUksSUFFaEIsTUFBTUMsZUFBaUIsQ0FDbkJDLEtBQU0sR0FDTkMsVUFBV0MsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxNQUV2Q1osU0FBU0ksR0FBRyxjQUFjUyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLGtFQUNmQyxlQUFnQlYsZUFBZUUsWUFDaEMsS0FBRVMsRUFBSSxTQUFFQyxHQUFhQyxTQUFTQyxTQUFVYixFQUFPVSxFQUtsRCxPQUpJWCxlQUFlQyxPQUFTQSxJQUN4QkQsZUFBZUMsS0FBT0EsRUFDdEJELGVBQWVFLFVBQVlDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsT0FFL0MsR0FDSixJQUFrQixNQUFiTSxFQUNESixFQUFhTyxRQUFVLHVCQUN2QixNQUVKLElBQWtCLFdBQWJILEVBQ0RKLEVBQWFPLFFBQVUscUJBQ3ZCLE1BRUosSUFBa0IsWUFBYkgsRUFDREosRUFBYU8sUUFBVSx1QkFDdkIsTUFFSixJQUFrQixVQUFiSCxFQUNESixFQUFhTyxRQUFVLDJCQUN2QixNQUVKLEtBQUtILEVBQVNJLFNBQVMsV0FBWSxDQUMvQixNQUFNQyxFQUFVSixTQUNYSyxjQUFjLHlCQUNkQyxXQUFXQyxpQkFBaUIsU0FBUyxJQUFJQyxNQUM5Q2IsRUFBYWMsY0FBZ0IsaURBQ0wsSUFBcEJMLEdBQVNNLFFBQ1RmLEVBQWFPLFFBQVUsZ0JBQ3ZCUCxFQUFhZ0IsTUFBUVAsR0FHckJULEVBQWFPLFFBQVUsdUJBQzNCLEtBQ0osQ0FDQSxLQUFLSCxFQUFTSSxTQUFTLFdBQ25CUixFQUFhTyxRQUFVLGdCQUN2QlAsRUFBYWdCLE1BQ1RYLFNBQ0tLLGNBQWMsVUFDYk8sWUFBWUMsUUFBUSxtQkFBb0IsS0FBTyxHQUN6RGxCLEVBQWFtQixRQUFVLENBQUMsQ0FBRUMsTUFBTyxhQUFjQyxJQUFLbEIsSUFDcEQsTUFFSixLQUFLQyxFQUFTSSxTQUFTLFlBQWEsQ0FDaEMsTUFBTWMsRUFBY2pCLFNBQ2ZLLGNBQWMseUJBQ2RDLFdBQVdDLGlCQUFpQixpQkFDakMsSUFBSVcsRUFDSixJQUFLLE1BQU8sQ0FBRUMsS0FBWUYsRUFBWUcsVUFDOUJELEVBQVFQLFlBQVlULFNBQVMsT0FBU2UsSUFDdENBLEVBQVFDLEVBQVFQLGFBRW5CTSxJQUNEQSxFQUFRbEIsU0FDSEssY0FBYyxVQUNiTyxZQUFZQyxRQUFRLHdCQUF5QixLQUVuREssR0FBT2YsU0FBUyxZQUNoQlIsRUFBYU8sUUFBVWdCLEVBQU1HLE1BQU0sV0FBVyxHQUM5QzFCLEVBQWFnQixNQUFRLFVBQVVPLEVBQU1HLE1BQU0sV0FBVyxNQUd0RDFCLEVBQWFPLFFBQVVnQixFQUN2QmxDLGNBQ09XLEVBQWFFLGVBQ2ZiLE1BQU1zQyxVQUNOM0IsRUFBYUUsZUFBZ0JGLEVBQWE0QixjQUN2QzFDLFNBQVMyQyxjQUFjeEMsTUFBTXlDLFlBQWF6QyxNQUFNMEMsV0FFeEQvQixFQUFhYyxjQUFnQnpCLE1BQU1zQyxPQUFTLGdEQUFrRCwrQ0FDOUYzQixFQUFhbUIsUUFBVSxDQUFDLENBQUVDLE1BQU8sY0FBZUMsSUFBS2xCLEtBR3JESCxFQUFhbUIsUUFBVSxDQUFDLENBQUVDLE1BQU8sZUFBZ0JDLElBQUtsQixJQUMxRCxLQUNKLEVBRUpqQixTQUFTOEMsWUFBWWhDLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiMTE2MDE3OTQ3MzA0NDQ3NjAxN1wiLFxufSk7XG5sZXQgdmlkZW8gPSBudWxsO1xucHJlc2VuY2Uub24oXCJpRnJhbWVEYXRhXCIsIChkYXRhKSA9PiB7XG4gICAgdmlkZW8gPSBkYXRhO1xufSk7XG5jb25zdCB0aW1lc3RhbXBDaGVjayA9IHtcbiAgICBoYXNoOiBcIlwiLFxuICAgIHRpbWVzdGFtcDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG59O1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9PL09uZVRvdWNoVFYvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiB0aW1lc3RhbXBDaGVjay50aW1lc3RhbXAsXG4gICAgfSwgeyBocmVmLCBwYXRobmFtZSB9ID0gZG9jdW1lbnQubG9jYXRpb24sIGhhc2ggPSBocmVmO1xuICAgIGlmICh0aW1lc3RhbXBDaGVjay5oYXNoICE9PSBoYXNoKSB7XG4gICAgICAgIHRpbWVzdGFtcENoZWNrLmhhc2ggPSBoYXNoO1xuICAgICAgICB0aW1lc3RhbXBDaGVjay50aW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICB9XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgcGF0aG5hbWUgPT09IFwiL1wiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgaG9tZXBhZ2VcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUgPT09IFwiL21vdmllXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFsbCBtb3ZpZXNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUgPT09IFwiL3R2c2hvd1wiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbGwgdHYgc2hvd3NcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUgPT09IFwiL2xpdmVcIjoge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYWxsIGxpdmUgY29udGVudFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcIi9zZWFyY2hcIik6IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWwgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGZsdC1nbGFzcy1wYW5lXCIpXG4gICAgICAgICAgICAgICAgLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpWzFdPy52YWx1ZTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICBpZiAoaW5wdXRFbD8ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3JcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBpbnB1dEVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb29raW5nIHNvbWV0aGluZyB1cFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5pbmNsdWRlcyhcIi9hY3Rvci9cIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGFjdG9yXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudC5yZXBsYWNlKC8gLSBPbmVUb3VjaCBUVi9nbSwgXCJcIikgPz8gXCJcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW3sgbGFiZWw6IFwiVmlldyBBY3RvclwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHBhdGhuYW1lLmluY2x1ZGVzKFwiL2RldGFpbC9cIik6IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHkgPiBmbHQtZ2xhc3MtcGFuZVwiKVxuICAgICAgICAgICAgICAgIC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmbHQtcGFyYWdyYXBoXCIpO1xuICAgICAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbLCBlbGVtZW50XSBvZiBhbGxFbGVtZW50cy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIilcIikgJiYgIXRpdGxlKVxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgID8udGV4dENvbnRlbnQucmVwbGFjZSgvKCAtICl8KE9uZVRvdWNoIFRWKS9nbSwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGl0bGU/LmluY2x1ZGVzKFwiRXBpc29kZVwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUuc3BsaXQoXCJFcGlzb2RlXCIpWzBdO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBFcGlzb2RlJHt0aXRsZS5zcGxpdChcIkVwaXNvZGVcIilbMV19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlO1xuICAgICAgICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBpZiAoIXZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHZpZGVvLmN1cnJlbnRUaW1lLCB2aWRlby5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gdmlkZW8ucGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIldhdGNoIFZpZGVvXCIsIHVybDogaHJlZiB9XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFt7IGxhYmVsOiBcIlZpZXcgQ29udGVudFwiLCB1cmw6IGhyZWYgfV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUTBGQlF6dEJRVTlJTEVsQlFVa3NTMEZCU3l4SFFVRmxMRWxCUVVrc1EwRkJRenRCUVVVM1FpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFbEJRV2RDTEVWQlFVVXNSVUZCUlR0SlFVTTVReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEyUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZTQ3hOUVVGTkxHTkJRV01zUjBGSGFFSTdTVUZEU0N4SlFVRkpMRVZCUVVVc1JVRkJSVHRKUVVOU0xGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRMEZEZUVNc1EwRkJRenRCUVVWR0xGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNXVUZCV1N4SFFVRnBRanRSUVVOcVF5eGhRVUZoTEVWQlExb3NhVVZCUVdsRk8xRkJRMnhGTEdOQlFXTXNSVUZCUlN4alFVRmpMRU5CUVVNc1UwRkJVenRMUVVONFF5eEZRVU5FTEVWQlFVVXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlEzUkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRllpeEpRVUZKTEdOQlFXTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1NVRkJTU3hGUVVGRk8xRkJRMnBETEdOQlFXTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRek5DTEdOQlFXTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGVrUTdTVUZGUkN4UlFVRlJMRWxCUVVrc1JVRkJSVHRSUVVOaUxFdEJRVXNzVVVGQlVTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNSQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03V1VGRE9VTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhSUVVGUkxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZETTBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRaUVVNMVF5eE5RVUZOTzFOQlEwNDdVVUZEUkN4TFFVRkxMRkZCUVZFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU0xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExITkNRVUZ6UWl4RFFVRkRPMWxCUXpsRExFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NVVUZCVVN4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRekZDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTTdXVUZEYkVRc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVVHRwUWtGRGRFSXNZVUZCWVN4RFFVRkRMSFZDUVVGMVFpeERRVUZETzJsQ1FVTjBReXhWUVVGVkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRPMWxCUTJwRUxGbEJRVmtzUTBGQlF5eGhRVUZoTEcxRVFVRm5RaXhEUVVGRE8xbEJRek5ETEVsQlFVa3NUMEZCVHl4RlFVRkZMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlF6RkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzJkQ1FVTjJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXp0aFFVTTNRanM3WjBKQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0WlFVVnlSQ3hOUVVGTk8xTkJRMDQ3VVVGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6dFpRVU4yUXl4WlFVRlpMRU5CUVVNc1MwRkJTenRuUWtGRGFrSXNVVUZCVVR0eFFrRkRUaXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETzI5Q1FVTjJRaXhGUVVGRkxGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTNSRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3haUVVGWkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkROVVFzVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1RVRkJUU3hYUVVGWExFZEJRVWNzVVVGQlVUdHBRa0ZETVVJc1lVRkJZU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRPMmxDUVVOMFF5eFZRVUZWTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdXVUZETDBNc1NVRkJTU3hMUVVGaExFTkJRVU03V1VGRGJFSXNTMEZCU3l4TlFVRk5MRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeFhRVUZYTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1owSkJRMmhFTEVsQlFVa3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxPMjlDUVVNNVF5eExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJRenRoUVVNM1FqdFpRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRMWdzUzBGQlN5eEhRVUZITEZGQlFWRTdjVUpCUTJRc1lVRkJZU3hEUVVGRExFOUJRVThzUTBGQlF6dHZRa0ZEZGtJc1JVRkJSU3hYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEhWQ1FVRjFRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzQkVPMWxCUlVRc1NVRkJTU3hMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMmRDUVVNdlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03WVVGRE0wUTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMWxCUlhCRExFbEJRVWtzUzBGQlN5eEZRVUZGTzJkQ1FVTldMRTlCUVU4c1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF6dG5Ra0ZEYmtNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTJ4Q0xFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8zZENRVU4yUkN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8ybENRVU16UkR0blFrRkRSQ3haUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhwUkVGQll5eERRVUZETEN0RFFVRlpMRU5CUVVNN1owSkJRM1pGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeGhRVUZoTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRE4wUTdPMmRDUVVGTkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hqUVVGakxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja1VzVFVGQlRUdFRRVU5PTzB0QlEwUTdTVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwidmlkZW8iLCJvbiIsImRhdGEiLCJ0aW1lc3RhbXBDaGVjayIsImhhc2giLCJ0aW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJocmVmIiwicGF0aG5hbWUiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiZGV0YWlscyIsImluY2x1ZGVzIiwiaW5wdXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJzaGFkb3dSb290IiwicXVlcnlTZWxlY3RvckFsbCIsInZhbHVlIiwic21hbGxJbWFnZUtleSIsImxlbmd0aCIsInN0YXRlIiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiYWxsRWxlbWVudHMiLCJ0aXRsZSIsImVsZW1lbnQiLCJlbnRyaWVzIiwic3BsaXQiLCJwYXVzZWQiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;