var __webpack_exports__={};const presence=new Presence({clientId:"692230804402864148"});function firstLetterUp(e){return e.toLowerCase().replace(/(?:^|\s)\S/g,(e=>e.toUpperCase()))}presence.on("UpdateData",(async()=>{const e=document.querySelector("#trackInfo > a"),t=document.querySelector("#trackInfo > span > a"),s={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Sua%20M%C3%BAsica/assets/logo.png",smallImageKey:document.querySelector("a.btnPlayer.playPause.pause")?"https://cdn.rcd.gg/PreMiD/resources/play.png":"https://cdn.rcd.gg/PreMiD/resources/pause.png",smallImageText:"suamusica.com.br",details:e&&e.textContent.length?`🎧  ${firstLetterUp(e.textContent)}`:"📀 Navegando...",state:t&&" - "!==t.textContent?`🎤  ${firstLetterUp(t.textContent)}`:"🇧🇷 suamusica.com.br",startTimestamp:0,endTimestamp:0};s.details?presence.setActivity(s):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxTQUFTQyxjQUFjQyxHQUNuQixPQUFPQSxFQUFJQyxjQUFjQyxRQUFRLGVBQWVDLEdBQUtBLEVBQUVDLGVBQzNELENBQ0FSLFNBQVNTLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBVUMsU0FBU0MsY0FBYyxrQkFBbUJDLEVBQVFGLFNBQVNDLGNBQWMseUJBQTBCRSxFQUFlLENBQzlIQyxjQUFlLHlFQUNmQyxjQUFlTCxTQUFTQyxjQUFjLCtCQUNoQywrQ0FDQSxnREFDTkssZUFBZ0IsbUJBQ2hCUCxRQUFTQSxHQUFXQSxFQUFRUSxZQUFZQyxPQUNsQyxPQUFPakIsY0FBY1EsRUFBUVEsZUFDN0Isa0JBQ05MLE1BQU9BLEdBQStCLFFBQXRCQSxFQUFNSyxZQUNoQixPQUFPaEIsY0FBY1csRUFBTUssZUFDM0Isd0JBQ05FLGVBQWdCLEVBQ2hCQyxhQUFjLEdBRWRQLEVBQWFKLFFBQ2JYLFNBQVN1QixZQUFZUixHQUVyQmYsU0FBU3VCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjkyMjMwODA0NDAyODY0MTQ4XCIsXG59KTtcbmZ1bmN0aW9uIGZpcnN0TGV0dGVyVXAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBhID0+IGEudG9VcHBlckNhc2UoKSk7XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyYWNrSW5mbyA+IGFcIiksIHN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm8gPiBzcGFuID4gYVwiKSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TdWElMjBNJUMzJUJBc2ljYS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc21hbGxJbWFnZUtleTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuYnRuUGxheWVyLnBsYXlQYXVzZS5wYXVzZVwiKVxuICAgICAgICAgICAgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCJcbiAgICAgICAgICAgIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIixcbiAgICAgICAgc21hbGxJbWFnZVRleHQ6IFwic3VhbXVzaWNhLmNvbS5iclwiLFxuICAgICAgICBkZXRhaWxzOiBkZXRhaWxzICYmIGRldGFpbHMudGV4dENvbnRlbnQubGVuZ3RoXG4gICAgICAgICAgICA/IGDwn46nICAke2ZpcnN0TGV0dGVyVXAoZGV0YWlscy50ZXh0Q29udGVudCl9YFxuICAgICAgICAgICAgOiBcIvCfk4AgTmF2ZWdhbmRvLi4uXCIsXG4gICAgICAgIHN0YXRlOiBzdGF0ZSAmJiBzdGF0ZS50ZXh0Q29udGVudCAhPT0gXCIgLSBcIlxuICAgICAgICAgICAgPyBg8J+OpCAgJHtmaXJzdExldHRlclVwKHN0YXRlLnRleHRDb250ZW50KX1gXG4gICAgICAgICAgICA6IFwi8J+Hp/Cfh7cgc3VhbXVzaWNhLmNvbS5iclwiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogMCxcbiAgICAgICAgZW5kVGltZXN0YW1wOiAwLFxuICAgIH07XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0zUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1EwRkJRenRCUVV0SUxGTkJRVk1zWVVGQllTeERRVUZETEVkQlFWYzdTVUZEYWtNc1QwRkJUeXhIUVVGSExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRM1pGTEVOQlFVTTdRVUZGUkN4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlEzWkVMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFVkJRM1pFTEZsQlFWa3NSMEZCUnp0UlFVTmtMR0ZCUVdFc1JVRkRXaXgzUlVGQmQwVTdVVUZEZWtVc1lVRkJZU3hGUVVGRkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU03V1VGRGJrVXNRMEZCUXp0WlFVTkVMRU5CUVVNc1owUkJRV0U3VVVGRFppeGpRVUZqTEVWQlFVVXNhMEpCUVd0Q08xRkJRMnhETEU5QlFVOHNSVUZEVGl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTzFsQlEzQkRMRU5CUVVNc1EwRkJReXhQUVVGUExHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1dVRkROME1zUTBGQlF5eERRVUZETEdsQ1FVRnBRanRSUVVOeVFpeExRVUZMTEVWQlEwb3NTMEZCU3l4SlFVRkpMRXRCUVVzc1EwRkJReXhYUVVGWExFdEJRVXNzUzBGQlN6dFpRVU51UXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUXpORExFTkJRVU1zUTBGQlF5eDFRa0ZCZFVJN1VVRkRNMElzWTBGQll5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1dVRkJXU3hGUVVGRkxFTkJRVU03UzBGRFppeERRVUZETzBsQlJVZ3NTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJmaXJzdExldHRlclVwIiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiYSIsInRvVXBwZXJDYXNlIiwib24iLCJhc3luYyIsImRldGFpbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGF0ZSIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsInN0YXJ0VGltZXN0YW1wIiwiZW5kVGltZXN0YW1wIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;