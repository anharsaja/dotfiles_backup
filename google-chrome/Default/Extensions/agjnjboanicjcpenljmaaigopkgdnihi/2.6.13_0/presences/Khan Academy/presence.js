var __webpack_exports__={};const presence=new Presence({clientId:"900882829154598952"}),strings=presence.getStrings({homepage:"general.viewHome",settings:"google classroom.settings",watching:"general.watching",reading:"general.readingAbout",writing:"general.writing",profile:"general.viewProfile"});presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/K/Khan%20Academy/assets/logo.png",details:(await strings).watching};"/"===document.location.pathname?e.state=`🏠 ${(await strings).homepage}`:document.location.pathname.includes("/courses")?e.state="📚 Courses":document.location.pathname.includes("/progress")?e.state="📊 Progress":document.location.pathname.includes("/teachers")?e.state="🎓 Teachers":document.location.pathname.includes("/profile")?(e.details=(await strings).profile,e.state=`👀 ${document.querySelector("._o77ufew").textContent}`):document.location.pathname.includes("/settings")?e.state=`⚙️ ${(await strings).settings}`:document.location.pathname.includes("/search")?e.state=`🔍 Searching for '${document.location.pathname.split("page_search_query=")[1]}'`:document.location.pathname.includes("/topics")?e.state="🔍 Community":document.location.pathname.includes("/posts")?e.state="🔍 Community Post":document.location.pathname.includes("/requests/new")?e.state="⚠️ Submitting a Request":document.location.hostname.includes("support")?e.state="💡 Support":document.location.pathname.split("/").length<3?e.state=`📖 ${document.querySelector("._aemo2b3").textContent}`:(e.details=document.querySelector("._io410w6, span._cmfzobe:nth-child(2) > a:nth-child(2)").textContent,e.state=`📋 ${document.querySelector("._1eqoe4n8, span._cmfzobe:nth-child(3) > a:nth-child(2), #uid-dialog-0-title > span:nth-child(1)").textContent.replace(/.*?:\s+/,"")}`,document.location.pathname.match(/\/(v|a|e|quiz)\//)&&(e.smallImageText=document.querySelector('._1l44zfj, [role="dialog"] [data-test-id="modal-title"]').textContent,document.location.pathname.includes("/v/")?e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/K/Khan%20Academy/assets/0.png":document.location.pathname.includes("/a/")?e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/K/Khan%20Academy/assets/1.png":e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/K/Khan%20Academy/assets/2.png")),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsU0FBVSxtQkFDVkMsU0FBVSw0QkFDVkMsU0FBVSxtQkFDVkMsUUFBUyx1QkFDVEMsUUFBUyxrQkFDVEMsUUFBUyx3QkFFYlYsU0FBU1csR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLHNFQUNmQyxlQUFnQlosU0FBU0ksVUFFTSxNQUEvQlMsU0FBU0MsU0FBU0MsU0FDbEJMLEVBQWFNLE1BQVEsYUFBYWhCLFNBQVNFLFdBQ3RDVyxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLFlBQ3pDUCxFQUFhTSxNQUFRLGFBQ2hCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGFBQ3pDUCxFQUFhTSxNQUFRLGNBQ2hCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGFBQ3pDUCxFQUFhTSxNQUFRLGNBQ2hCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGFBQ3pDUCxFQUFhRSxlQUFpQlosU0FBU08sUUFDdkNHLEVBQWFNLE1BQVEsTUFBTUgsU0FBU0ssY0FBYyxhQUFhQyxlQUUxRE4sU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxhQUN6Q1AsRUFBYU0sTUFBUSxhQUFhaEIsU0FBU0csV0FDdENVLFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsV0FDekNQLEVBQWFNLE1BQVEscUJBQXFCSCxTQUFTQyxTQUFTQyxTQUFTSyxNQUFNLHNCQUFzQixNQUU1RlAsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxXQUN6Q1AsRUFBYU0sTUFBUSxlQUNoQkgsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxVQUN6Q1AsRUFBYU0sTUFBUSxvQkFDaEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsaUJBQ3pDUCxFQUFhTSxNQUFRLDBCQUNoQkgsU0FBU0MsU0FBU08sU0FBU0osU0FBUyxXQUN6Q1AsRUFBYU0sTUFBUSxhQUNoQkgsU0FBU0MsU0FBU0MsU0FBU0ssTUFBTSxLQUFLRSxPQUFTLEVBQ3BEWixFQUFhTSxNQUFRLE1BQU1ILFNBQVNLLGNBQWMsYUFBYUMsZUFHL0RULEVBQWFFLFFBQVVDLFNBQVNLLGNBQWMsMERBQTBEQyxZQUN4R1QsRUFBYU0sTUFBUSxNQUFNSCxTQUN0QkssY0FBYyxvR0FDZEMsWUFBWUksUUFBUSxVQUFXLE1BQ2hDVixTQUFTQyxTQUFTQyxTQUFTUyxNQUFNLHNCQUNqQ2QsRUFBYWUsZUFBaUJaLFNBQVNLLGNBQWMsMkRBQTJEQyxZQUM1R04sU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxPQUNwQ1AsRUFBYWdCLGNBQWdCLG1FQUN4QmIsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxPQUN6Q1AsRUFBYWdCLGNBQWdCLG1FQUU3QmhCLEVBQWFnQixjQUFnQixxRUFHcENoQixFQUFhRSxRQUdkZixTQUFTOEIsWUFBWWpCLEdBRnJCYixTQUFTOEIsYUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTAwODgyODI5MTU0NTk4OTUyXCIsXG59KSwgc3RyaW5ncyA9IHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgIGhvbWVwYWdlOiBcImdlbmVyYWwudmlld0hvbWVcIixcbiAgICBzZXR0aW5nczogXCJnb29nbGUgY2xhc3Nyb29tLnNldHRpbmdzXCIsXG4gICAgd2F0Y2hpbmc6IFwiZ2VuZXJhbC53YXRjaGluZ1wiLFxuICAgIHJlYWRpbmc6IFwiZ2VuZXJhbC5yZWFkaW5nQWJvdXRcIixcbiAgICB3cml0aW5nOiBcImdlbmVyYWwud3JpdGluZ1wiLFxuICAgIHByb2ZpbGU6IFwiZ2VuZXJhbC52aWV3UHJvZmlsZVwiLFxufSk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0svS2hhbiUyMEFjYWRlbXkvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIGRldGFpbHM6IChhd2FpdCBzdHJpbmdzKS53YXRjaGluZyxcbiAgICB9O1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGDwn4+gICR7KGF3YWl0IHN0cmluZ3MpLmhvbWVwYWdlfWA7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvY291cnNlc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCLwn5OaIENvdXJzZXNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9wcm9ncmVzc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCLwn5OKIFByb2dyZXNzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdGVhY2hlcnNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwi8J+OkyBUZWFjaGVyc1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3Byb2ZpbGVcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSAoYXdhaXQgc3RyaW5ncykucHJvZmlsZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYPCfkYAgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLl9vNzd1ZmV3XCIpLnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3NldHRpbmdzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBg4pqZ77iPICR7KGF3YWl0IHN0cmluZ3MpLnNldHRpbmdzfWA7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvc2VhcmNoXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGDwn5SNIFNlYXJjaGluZyBmb3IgJyR7ZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCJwYWdlX3NlYXJjaF9xdWVyeT1cIilbMV19J2A7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RvcGljc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCLwn5SNIENvbW11bml0eVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3Bvc3RzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIvCflI0gQ29tbXVuaXR5IFBvc3RcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9yZXF1ZXN0cy9uZXdcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwi4pqg77iPIFN1Ym1pdHRpbmcgYSBSZXF1ZXN0XCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUuaW5jbHVkZXMoXCJzdXBwb3J0XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIvCfkqEgU3VwcG9ydFwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggPCAzKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGDwn5OWICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5fYWVtbzJiM1wiKS50ZXh0Q29udGVudH1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLl9pbzQxMHc2LCBzcGFuLl9jbWZ6b2JlOm50aC1jaGlsZCgyKSA+IGE6bnRoLWNoaWxkKDIpXCIpLnRleHRDb250ZW50O1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBg8J+TiyAke2RvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5fMWVxb2U0bjgsIHNwYW4uX2NtZnpvYmU6bnRoLWNoaWxkKDMpID4gYTpudGgtY2hpbGQoMiksICN1aWQtZGlhbG9nLTAtdGl0bGUgPiBzcGFuOm50aC1jaGlsZCgxKVwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnJlcGxhY2UoLy4qPzpcXHMrLywgXCJcIil9YDtcbiAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8odnxhfGV8cXVpeilcXC8vKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl8xbDQ0emZqLCBbcm9sZT1cImRpYWxvZ1wiXSBbZGF0YS10ZXN0LWlkPVwibW9kYWwtdGl0bGVcIl0nKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi92L1wiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0toYW4lMjBBY2FkZW15L2Fzc2V0cy8wLnBuZ1wiO1xuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvYS9cIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvSy9LaGFuJTIwQWNhZGVteS9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9LL0toYW4lMjBBY2FkZW15L2Fzc2V0cy8yLnBuZ1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghcHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNhMEpCUVd0Q08wbEJRelZDTEZGQlFWRXNSVUZCUlN3eVFrRkJNa0k3U1VGRGNrTXNVVUZCVVN4RlFVRkZMR3RDUVVGclFqdEpRVU0xUWl4UFFVRlBMRVZCUVVVc2MwSkJRWE5DTzBsQlF5OUNMRTlCUVU4c1JVRkJSU3hwUWtGQmFVSTdTVUZETVVJc1QwRkJUeXhGUVVGRkxIRkNRVUZ4UWp0RFFVTTVRaXhEUVVGRExFTkJRVU03UVVGVFNpeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGJFTXNZVUZCWVN4MVJVRkJZVHRSUVVNeFFpeFBRVUZQTEVWQlFVVXNRMEZCUXl4TlFVRk5MRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkU3UzBGRGFrTXNRMEZCUXp0SlFVVkdMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NSMEZCUnp0UlFVTnlReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFOQlEyeEVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOMlJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJRenRUUVVNNVFpeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEZUVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVMEZETDBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM2hFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1lVRkJZU3hEUVVGRE8xTkJReTlDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMUZCUTNwRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4TlFVRk5MRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dFJRVU12UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVjBGRGNrTXNSVUZCUlN4RFFVRkRPMHRCUTBnN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE1VUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRUUVVOc1JDeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0UlFVTjRSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEhGQ1FVTndRaXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUTNwRUxFZEJRVWNzUTBGQlF6dExRVU5LTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NZMEZCWXl4RFFVRkRPMU5CUTJoRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU55UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMU5CUTNKRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF6dFJRVU0xUkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMU5CUXpORExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU4wUkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGbEJRVmtzUTBGQlF6dFRRVU01UWl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFGQlF6RkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGRGNFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFhRVU55UXl4RlFVRkZMRU5CUVVNN1MwRkRTRHRUUVVGTk8xRkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNMVF5eDNSRUZCZDBRc1EwRkRlRVFzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEWkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzVVVGQlVUdGhRVU5xUXl4aFFVRmhMRU5CUTJJc2EwZEJRV3RITEVOQlEyeEhPMkZCUTBFc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVWMlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhGUVVGRk8xbEJRM3BFTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGJrUXNlVVJCUVhsRUxFTkJRM3BFTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUldRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRE8yZENRVU0zUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h4UlVGQlpTeERRVUZETzJsQ1FVTjBReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU03WjBKQlEyeEVMRmxCUVZrc1EwRkJReXhoUVVGaExIRkZRVUZwUWl4RFFVRkRPenRuUWtGRGVFTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2NVVkJRV3RDTEVOQlFVTTdVMEZEYkVRN1MwRkRSRHRKUVVWRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6czdVVUZETjBNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTjZReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwic3RyaW5ncyIsImdldFN0cmluZ3MiLCJob21lcGFnZSIsInNldHRpbmdzIiwid2F0Y2hpbmciLCJyZWFkaW5nIiwid3JpdGluZyIsInByb2ZpbGUiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImRldGFpbHMiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGF0ZSIsImluY2x1ZGVzIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic3BsaXQiLCJob3N0bmFtZSIsImxlbmd0aCIsInJlcGxhY2UiLCJtYXRjaCIsInNtYWxsSW1hZ2VUZXh0Iiwic21hbGxJbWFnZUtleSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;