var __webpack_exports__={};const presence=new Presence({clientId:"617500416887881748"}),browsingTimestamp=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({browse:"general.browsing",search:"general.searchFor",readDm:"general.readingDM",typeDm:"general.typeDM"},await presence.getSetting("lang").catch((()=>"en")))}let strings,oldLang=null;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Skype/assets/logo.png",startTimestamp:browsingTimestamp},[t,s]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("privacy")]),r=document.querySelector('[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]'),a=document.querySelectorAll('button[aria-label*=":"]')[1]??document.querySelectorAll('button[aria-label*=","]')[6],n=document.querySelector('input[type="text"]');if(oldLang===t&&strings||(oldLang=t,strings=await getStrings()),s)return e.details=strings.browse,void presence.setActivity(e);switch(document.location.hostname){case"preview.web.skype.com":case"web.skype.com":n?.value?(e.details=strings.search,e.state=n.value,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):a?(r?.textContent?e.details=strings.typeDm:(e.details=strings.readDm,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"),e.state=a.textContent):e.details=strings.browse;break;case"www.skype.com":e.details="Skype",e.state="Browsing...";break;default:e.details=strings.browse}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEQyxlQUFlQyxhQUNYLE9BQU9ULFNBQVNTLFdBQVcsQ0FDdkJDLE9BQVEsbUJBQ1JDLE9BQVEsb0JBQ1JDLE9BQVEsb0JBQ1JDLE9BQVEsd0JBQ0hiLFNBQVNjLFdBQVcsUUFBUUMsT0FBTSxJQUFNLE9BQ3JELENBQ0EsSUFBSUMsUUFBU0MsUUFBVSxLQUN2QmpCLFNBQVNrQixHQUFHLGNBQWNWLFVBQ3RCLE1BQU1XLEVBQWUsQ0FDakJDLGNBQWUsNkRBQ2ZDLGVBQWdCbEIsb0JBQ2hCbUIsRUFBU0MsU0FBaUJDLFFBQVFDLElBQUksQ0FDdEN6QixTQUFTYyxXQUFXLFFBQVFDLE9BQU0sSUFBTSxPQUN4Q2YsU0FBU2MsV0FBVyxhQUNwQlksRUFBU0MsU0FBU0MsY0FBYyx5RUFBMEVDLEVBQU9GLFNBQVNHLGlCQUFpQiwyQkFBMkIsSUFDdEtILFNBQVNHLGlCQUFpQiwyQkFBMkIsR0FBSW5CLEVBQVNnQixTQUFTQyxjQUFjLHNCQUs3RixHQUpJWCxVQUFZSyxHQUFZTixVQUN4QkMsUUFBVUssRUFDVk4sY0FBZ0JQLGNBRWhCYyxFQUdBLE9BRkFKLEVBQWFZLFFBQVVmLFFBQVFOLFlBQy9CVixTQUFTZ0MsWUFBWWIsR0FHekIsT0FBUVEsU0FBU00sU0FBU0MsVUFDdEIsSUFBSyx3QkFDTCxJQUFLLGdCQUNHdkIsR0FBUXdCLE9BQ1JoQixFQUFhWSxRQUFVZixRQUFRTCxPQUMvQlEsRUFBYWlCLE1BQVF6QixFQUFPd0IsTUFDNUJoQixFQUFha0IsY0FBZ0Isa0RBRXhCUixHQUNESCxHQUFRWSxZQUNSbkIsRUFBYVksUUFBVWYsUUFBUUgsUUFFL0JNLEVBQWFZLFFBQVVmLFFBQVFKLE9BQy9CTyxFQUFha0IsY0FBZ0IsbURBRWpDbEIsRUFBYWlCLE1BQVFQLEVBQUtTLGFBRzFCbkIsRUFBYVksUUFBVWYsUUFBUU4sT0FDbkMsTUFFSixJQUFLLGdCQUNEUyxFQUFhWSxRQUFVLFFBQ3ZCWixFQUFhaUIsTUFBUSxjQUNyQixNQUVKLFFBQ0lqQixFQUFhWSxRQUFVZixRQUFRTixPQUVuQ1MsRUFBYVksUUFDYi9CLFNBQVNnQyxZQUFZYixHQUVyQm5CLFNBQVNnQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYxNzUwMDQxNjg4Nzg4MTc0OFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5hc3luYyBmdW5jdGlvbiBnZXRTdHJpbmdzKCkge1xuICAgIHJldHVybiBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICAgICAgYnJvd3NlOiBcImdlbmVyYWwuYnJvd3NpbmdcIixcbiAgICAgICAgc2VhcmNoOiBcImdlbmVyYWwuc2VhcmNoRm9yXCIsXG4gICAgICAgIHJlYWREbTogXCJnZW5lcmFsLnJlYWRpbmdETVwiLFxuICAgICAgICB0eXBlRG06IFwiZ2VuZXJhbC50eXBlRE1cIixcbiAgICB9LCBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpKTtcbn1cbmxldCBzdHJpbmdzLCBvbGRMYW5nID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9Ta3lwZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIFtuZXdMYW5nLCBwcml2YWN5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgXSksIHR5cGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cInB1YmxpYy1EcmFmdFN0eWxlRGVmYXVsdC1ibG9jayBwdWJsaWMtRHJhZnRTdHlsZURlZmF1bHQtbHRyXCJdJyksIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bYXJpYS1sYWJlbCo9XCI6XCJdJylbMV0gPz9cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2FyaWEtbGFiZWwqPVwiLFwiXScpWzZdLCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICAgIGlmIChvbGRMYW5nICE9PSBuZXdMYW5nIHx8ICFzdHJpbmdzKSB7XG4gICAgICAgIG9sZExhbmcgPSBuZXdMYW5nO1xuICAgICAgICBzdHJpbmdzID0gYXdhaXQgZ2V0U3RyaW5ncygpO1xuICAgIH1cbiAgICBpZiAocHJpdmFjeSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MuYnJvd3NlO1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUpIHtcbiAgICAgICAgY2FzZSBcInByZXZpZXcud2ViLnNreXBlLmNvbVwiOlxuICAgICAgICBjYXNlIFwid2ViLnNreXBlLmNvbVwiOiB7XG4gICAgICAgICAgICBpZiAoc2VhcmNoPy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5zZWFyY2g7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VhcmNoLnZhbHVlO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGluZz8udGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy50eXBlRG07XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5yZWFkRG07XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB1c2VyLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5icm93c2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwid3d3LnNreXBlLmNvbVwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2t5cGVcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnJvd3NpbmcuLi5cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MuYnJvd3NlO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVTF1UkN4TFFVRkxMRlZCUVZVc1ZVRkJWVHRKUVVONFFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUTNwQ08xRkJRME1zVFVGQlRTeEZRVUZGTEd0Q1FVRnJRanRSUVVNeFFpeE5RVUZOTEVWQlFVVXNiVUpCUVcxQ08xRkJRek5DTEUxQlFVMHNSVUZCUlN4dFFrRkJiVUk3VVVGRE0wSXNUVUZCVFN4RlFVRkZMR2RDUVVGblFqdExRVU40UWl4RlFVTkVMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlF6TkVMRU5CUVVNN1FVRkRTQ3hEUVVGRE8wRkJRMFFzU1VGQlNTeFBRVUVyUXl4RlFVTnNSQ3hQUVVGUExFZEJRVmNzU1VGQlNTeERRVUZETzBGQlJYaENMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEV0QlFVc3NTVUZCU1N4RlFVRkZPMGxCUTNCRExFMUJRVTBzV1VGQldTeEhRVUZwUWp0UlFVTnFReXhoUVVGaExEaEVRVUZoTzFGQlF6RkNMR05CUVdNc1JVRkJSU3hwUWtGQmFVSTdTMEZEYWtNc1JVRkRSQ3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4TlFVRk5MRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU03VVVGRGRFTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJVeXhOUVVGTkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRM0pFTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRE8wdEJRM1pETEVOQlFVTXNSVUZEUml4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE9VSXNkVVZCUVhWRkxFTkJRM1pGTEVWQlEwUXNTVUZCU1N4SFFVTklMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRlRVFzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVcxQ0xHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN1NVRkZla1VzU1VGQlNTeFBRVUZQTEV0QlFVc3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xRkJRM0JETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRiRUlzVDBGQlR5eEhRVUZITEUxQlFVMHNWVUZCVlN4RlFVRkZMRU5CUVVNN1MwRkROMEk3U1VGRlJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0UlFVTmFMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjBReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUTI1RExFOUJRVTg3UzBGRFVEdEpRVVZFTEZGQlFWRXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVU3VVVGRGJrTXNTMEZCU3l4MVFrRkJkVUlzUTBGQlF6dFJRVU0zUWl4TFFVRkxMR1ZCUVdVc1EwRkJReXhEUVVGRE8xbEJRM0pDTEVsQlFVa3NUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSVHRuUWtGRGJFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzJkQ1FVTjBReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1owSkJRMnhETEZsQlFWa3NRMEZCUXl4aFFVRmhMRzFFUVVGblFpeERRVUZETzJGQlF6TkRPMmxDUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZGTzJkQ1FVTm9RaXhKUVVGSkxFMUJRVTBzUlVGQlJTeFhRVUZYTzI5Q1FVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0eFFrRkRNVVE3YjBKQlEwb3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzI5Q1FVTjBReXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSRUZCYVVJc1EwRkJRenRwUWtGRE5VTTdaMEpCUTBRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMkZCUTNSRE96dG5Ra0ZCVFN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdXVUZETjBNc1RVRkJUVHRUUVVOT08xRkJRMFFzUzBGQlN5eGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0WlFVTXZRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdGQlFXRXNRMEZCUXp0WlFVVnVReXhOUVVGTk8xTkJRMDQ3VVVGRFJEdFpRVU5ETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dExRVU4yUXp0SlFVTkVMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96dFJRVU40UkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNaWZRPT0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiYXN5bmMiLCJnZXRTdHJpbmdzIiwiYnJvd3NlIiwic2VhcmNoIiwicmVhZERtIiwidHlwZURtIiwiZ2V0U2V0dGluZyIsImNhdGNoIiwic3RyaW5ncyIsIm9sZExhbmciLCJvbiIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsIm5ld0xhbmciLCJwcml2YWN5IiwiUHJvbWlzZSIsImFsbCIsInR5cGluZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVzZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGV0YWlscyIsInNldEFjdGl2aXR5IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInZhbHVlIiwic3RhdGUiLCJzbWFsbEltYWdlS2V5IiwidGV4dENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9
undefined;