var __webpack_exports__={};const presence=new Presence({clientId:"1161544315105976342"}),browsingTimestamp=Math.floor(Date.now()/1e3);async function postGQLAPI(e,t,s){return(await fetch("https://api.spyke.social/graphql",{method:"POST",headers:{authorization:`Bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:Token_Data_Persist")).jwtIdToken)}`,"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:s,operationName:e})})).json()}let url="https://spyke.social/";presence.on("UpdateData",(async()=>{const e=document.location.href;if(e!==url){const t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Spyke/assets/logo.jpg",smallImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/Spyke/assets/1.png",details:"A Community Discussion Platform",state:"On Homepage",startTimestamp:browsingTimestamp};if(document.location.href.includes("/p/")){const e=await postGQLAPI("presencepst","query presencepst($id: ID!) { comments(ids: [$id]) { ... on Post { title content { id data __typename } communities { name dp } } } }",{id:document.location.href.split("/p/")[1]});"Image"===e.data.comments[0].content[0].__typename?(t.largeImageKey=e.data.comments[0].content[0].data,t.smallImageKey=e.data.comments[0].communities[0].dp,t.details=`Reading post in ${e.data.comments[0].communities[0].name}`,t.state=e.data.comments[0].title,t.buttons=[{url:document.location.href,label:"View Post"}],presence.setActivity(t)):(t.largeImageKey=e.data.comments[0].communities[0].dp,t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Spyke/assets/1.png",t.details=`Reading post in ${e.data.comments[0].communities[0].name}`,t.state=e.data.comments[0].title,t.buttons=[{url:document.location.href,label:"View Post"}],presence.setActivity(t))}else if(document.location.href.includes("/g/")){const e=await postGQLAPI("presencegrp","query presencegrp($name:String!){ communityByName(name:$name) { name dp cover}}",{name:document.location.href.split("/g/")[1]});t.largeImageKey=e.data.communityByName.cover,t.smallImageKey=e.data.communityByName.dp,t.state=e.data.communityByName.name,t.details="Viewing a Clan",t.buttons=[{url:document.location.href,label:"View Clan"}],presence.setActivity(t)}else document.location.href.includes("/upload")?(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Spyke/assets/logo.jpg",t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Spyke/assets/1.png",t.details="Uploading a post",delete t.state,presence.setActivity(t)):document.location.href.includes("/u/")?(t.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Spyke/assets/0.png",t.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/S/Spyke/assets/1.png",t.details="Viewing a user profile",t.state=`@${document.location.href.split("/u/")[1]}`,t.buttons=[{url:document.location.href,label:"View User"}],presence.setActivity(t)):presence.setActivity(t);url=e}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEQyxlQUFlQyxXQUFXQyxFQUFlQyxFQUFPQyxHQWM1QyxhQWJ1QkMsTUFBTSxtQ0FBb0MsQ0FDN0RDLE9BQVEsT0FDUkMsUUFBUyxDQUNMQyxjQUFlLFVBQVVDLEtBQUtDLE1BQU1ELEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsK0JBQy9EQyxjQUNMLGVBQWdCLG9CQUVwQkMsS0FBTUwsS0FBS00sVUFBVSxDQUNqQlosUUFDQWEsVUFBV1osRUFDWEYscUJBR1FlLE1BQ3BCLENBQ0EsSUFBSUMsSUFBTSx3QkFDVjFCLFNBQVMyQixHQUFHLGNBQWNuQixVQUN0QixNQUFNb0IsRUFBT0MsU0FBU0MsU0FBU0MsS0FDL0IsR0FBSUgsSUFBU0YsSUFBSyxDQUNkLE1BQU1NLEVBQWUsQ0FDakJDLGNBQWUsNkRBQ2ZDLGNBQWUsMERBQ2ZDLFFBQVMsa0NBQ1RDLE1BQU8sY0FDUEMsZUFBZ0JsQyxtQkFFcEIsR0FBSTBCLFNBQVNDLFNBQVNDLEtBQUtPLFNBQVMsT0FBUSxDQUN4QyxNQUFNQyxRQUFZOUIsV0FBVyxjQUFlLHdJQUF5SSxDQUFFK0IsR0FBSVgsU0FBU0MsU0FBU0MsS0FBS1UsTUFBTSxPQUFPLEtBQzVLLFVBQS9DRixFQUFJRyxLQUFLQyxTQUFTLEdBQUdDLFFBQVEsR0FBR0MsWUFDaENiLEVBQWFDLGNBQWdCTSxFQUFJRyxLQUFLQyxTQUFTLEdBQUdDLFFBQVEsR0FBR0YsS0FDN0RWLEVBQWFFLGNBQWdCSyxFQUFJRyxLQUFLQyxTQUFTLEdBQUdHLFlBQVksR0FBR0MsR0FDakVmLEVBQWFHLFFBQVUsbUJBQW1CSSxFQUFJRyxLQUFLQyxTQUFTLEdBQUdHLFlBQVksR0FBR0UsT0FDOUVoQixFQUFhSSxNQUFRRyxFQUFJRyxLQUFLQyxTQUFTLEdBQUdNLE1BQzFDakIsRUFBYWtCLFFBQVUsQ0FDbkIsQ0FBRXhCLElBQUtHLFNBQVNDLFNBQVNDLEtBQU1vQixNQUFPLGNBRTFDbkQsU0FBU29ELFlBQVlwQixLQUdyQkEsRUFBYUMsY0FBZ0JNLEVBQUlHLEtBQUtDLFNBQVMsR0FBR0csWUFBWSxHQUFHQyxHQUNqRWYsRUFBYUUsY0FBZ0IsMERBQzdCRixFQUFhRyxRQUFVLG1CQUFtQkksRUFBSUcsS0FBS0MsU0FBUyxHQUFHRyxZQUFZLEdBQUdFLE9BQzlFaEIsRUFBYUksTUFBUUcsRUFBSUcsS0FBS0MsU0FBUyxHQUFHTSxNQUMxQ2pCLEVBQWFrQixRQUFVLENBQ25CLENBQUV4QixJQUFLRyxTQUFTQyxTQUFTQyxLQUFNb0IsTUFBTyxjQUUxQ25ELFNBQVNvRCxZQUFZcEIsR0FFN0IsTUFDSyxHQUFJSCxTQUFTQyxTQUFTQyxLQUFLTyxTQUFTLE9BQVEsQ0FDN0MsTUFBTUMsUUFBWTlCLFdBQVcsY0FBZSxrRkFBbUYsQ0FBRXVDLEtBQU1uQixTQUFTQyxTQUFTQyxLQUFLVSxNQUFNLE9BQU8sS0FDM0tULEVBQWFDLGNBQWdCTSxFQUFJRyxLQUFLVyxnQkFBZ0JDLE1BQ3REdEIsRUFBYUUsY0FBZ0JLLEVBQUlHLEtBQUtXLGdCQUFnQk4sR0FDdERmLEVBQWFJLE1BQVFHLEVBQUlHLEtBQUtXLGdCQUFnQkwsS0FDOUNoQixFQUFhRyxRQUFVLGlCQUN2QkgsRUFBYWtCLFFBQVUsQ0FDbkIsQ0FBRXhCLElBQUtHLFNBQVNDLFNBQVNDLEtBQU1vQixNQUFPLGNBRTFDbkQsU0FBU29ELFlBQVlwQixFQUN6QixNQUNTSCxTQUFTQyxTQUFTQyxLQUFLTyxTQUFTLFlBQ3JDTixFQUFhQyxjQUFnQiw2REFDN0JELEVBQWFFLGNBQWdCLDBEQUM3QkYsRUFBYUcsUUFBVSwwQkFDaEJILEVBQWFJLE1BQ3BCcEMsU0FBU29ELFlBQVlwQixJQUVoQkgsU0FBU0MsU0FBU0MsS0FBS08sU0FBUyxRQUNyQ04sRUFBYUMsY0FBZ0IsMERBQzdCRCxFQUFhRSxjQUFnQiwwREFDN0JGLEVBQWFHLFFBQVUseUJBQ3ZCSCxFQUFhSSxNQUFRLElBQUlQLFNBQVNDLFNBQVNDLEtBQUtVLE1BQU0sT0FBTyxLQUM3RFQsRUFBYWtCLFFBQVUsQ0FDbkIsQ0FBRXhCLElBQUtHLFNBQVNDLFNBQVNDLEtBQU1vQixNQUFPLGNBRTFDbkQsU0FBU29ELFlBQVlwQixJQUdyQmhDLFNBQVNvRCxZQUFZcEIsR0FDekJOLElBQU1FLENBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiMTE2MTU0NDMxNTEwNTk3NjM0MlwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5hc3luYyBmdW5jdGlvbiBwb3N0R1FMQVBJKG9wZXJhdGlvbk5hbWUsIHF1ZXJ5LCB2YXJzKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnNweWtlLnNvY2lhbC9ncmFwaHFsXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke0pTT04ucGFyc2UoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlcnNpc3Q6VG9rZW5fRGF0YV9QZXJzaXN0XCIpKVxuICAgICAgICAgICAgICAgIC5qd3RJZFRva2VuKX1gLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJzLFxuICAgICAgICAgICAgb3BlcmF0aW9uTmFtZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbmxldCB1cmwgPSBcImh0dHBzOi8vc3B5a2Uuc29jaWFsL1wiO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBudXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICBpZiAobnVybCAhPT0gdXJsKSB7XG4gICAgICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NweWtlL2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgICAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1MvU3B5a2UvYXNzZXRzLzEucG5nXCIsXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkEgQ29tbXVuaXR5IERpc2N1c3Npb24gUGxhdGZvcm1cIixcbiAgICAgICAgICAgIHN0YXRlOiBcIk9uIEhvbWVwYWdlXCIsXG4gICAgICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiL3AvXCIpKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0R1FMQVBJKFwicHJlc2VuY2Vwc3RcIiwgXCJxdWVyeSBwcmVzZW5jZXBzdCgkaWQ6IElEISkgeyBjb21tZW50cyhpZHM6IFskaWRdKSB7IC4uLiBvbiBQb3N0IHsgdGl0bGUgY29udGVudCB7IGlkIGRhdGEgX190eXBlbmFtZSB9IGNvbW11bml0aWVzIHsgbmFtZSBkcCB9IH0gfSB9XCIsIHsgaWQ6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIvcC9cIilbMV0gfSk7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29tbWVudHNbMF0uY29udGVudFswXS5fX3R5cGVuYW1lID09PSBcIkltYWdlXCIpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IHJlcy5kYXRhLmNvbW1lbnRzWzBdLmNvbnRlbnRbMF0uZGF0YTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHJlcy5kYXRhLmNvbW1lbnRzWzBdLmNvbW11bml0aWVzWzBdLmRwO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmcgcG9zdCBpbiAke3Jlcy5kYXRhLmNvbW1lbnRzWzBdLmNvbW11bml0aWVzWzBdLm5hbWV9YDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSByZXMuZGF0YS5jb21tZW50c1swXS50aXRsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsIGxhYmVsOiBcIlZpZXcgUG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSByZXMuZGF0YS5jb21tZW50c1swXS5jb21tdW5pdGllc1swXS5kcDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NweWtlL2Fzc2V0cy8xLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFJlYWRpbmcgcG9zdCBpbiAke3Jlcy5kYXRhLmNvbW1lbnRzWzBdLmNvbW11bml0aWVzWzBdLm5hbWV9YDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSByZXMuZGF0YS5jb21tZW50c1swXS50aXRsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsIGxhYmVsOiBcIlZpZXcgUG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIvZy9cIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3RHUUxBUEkoXCJwcmVzZW5jZWdycFwiLCBcInF1ZXJ5IHByZXNlbmNlZ3JwKCRuYW1lOlN0cmluZyEpeyBjb21tdW5pdHlCeU5hbWUobmFtZTokbmFtZSkgeyBuYW1lIGRwIGNvdmVyfX1cIiwgeyBuYW1lOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiL2cvXCIpWzFdIH0pO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSByZXMuZGF0YS5jb21tdW5pdHlCeU5hbWUuY292ZXI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHJlcy5kYXRhLmNvbW11bml0eUJ5TmFtZS5kcDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHJlcy5kYXRhLmNvbW11bml0eUJ5TmFtZS5uYW1lO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgYSBDbGFuXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7IHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZiwgbGFiZWw6IFwiVmlldyBDbGFuXCIgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIvdXBsb2FkXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NweWtlL2Fzc2V0cy9sb2dvLmpwZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TcHlrZS9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJVcGxvYWRpbmcgYSBwb3N0XCI7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiL3UvXCIpKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9TL1NweWtlL2Fzc2V0cy8wLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TcHlrZS9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgdXNlciBwcm9maWxlXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQCR7ZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIi91L1wiKVsxXX1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgeyB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsIGxhYmVsOiBcIlZpZXcgVXNlclwiIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgICAgICB1cmwgPSBudXJsO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2NVSkJRWEZDTzBOQlF5OUNMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVUxdVJDeExRVUZMTEZWQlFWVXNWVUZCVlN4RFFVTjRRaXhoUVVGeFFpeEZRVU55UWl4TFFVRmhMRVZCUTJJc1NVRkJOa0k3U1VGRk4wSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1RVRkJUU3hMUVVGTExFTkJRVU1zYTBOQlFXdERMRVZCUVVVN1VVRkRhRVVzVFVGQlRTeEZRVUZGTEUxQlFVMDdVVUZEWkN4UFFVRlBMRVZCUVVVN1dVRkRVaXhoUVVGaExFVkJRVVVzVlVGQlZTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVTnNReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNRMEZCUXp0cFFrRkROVVFzVlVGQlZTeERRVU5hTEVWQlFVVTdXVUZEU0N4alFVRmpMRVZCUVVVc2EwSkJRV3RDTzFOQlEyeERPMUZCUTBRc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZEY0VJc1MwRkJTenRaUVVOTUxGTkJRVk1zUlVGQlJTeEpRVUZKTzFsQlEyWXNZVUZCWVR0VFFVTmlMRU5CUVVNN1MwRkRSaXhEUVVGRExFTkJRVU03U1VGRFNDeFBRVUZQTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVONFFpeERRVUZETzBGQlEwUXNTVUZCU1N4SFFVRkhMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdRVUZEYkVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRGNFTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRk8xRkJRMnBDTEUxQlFVMHNXVUZCV1N4SFFVRnBRanRaUVVOc1F5eGhRVUZoTERoRVFVRmhPMWxCUXpGQ0xHRkJRV0VzTWtSQlFXbENPMWxCUXpsQ0xFOUJRVThzUlVGQlJTeHBRMEZCYVVNN1dVRkRNVU1zUzBGQlN5eEZRVUZGTEdGQlFXRTdXVUZEY0VJc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0VFFVTnFReXhEUVVGRE8xRkJRMFlzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETTBNc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeFZRVUZWTEVOQlF6TkNMR0ZCUVdFc1JVRkRZaXgxU1VGQmRVa3NSVUZEZGtrc1JVRkJSU3hGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUXpsRExFTkJRVU03V1VGRFJpeEpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFdEJRVXNzVDBGQlR5eEZRVUZGTzJkQ1FVTXpSQ3haUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEyeEZMRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGRGNFVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTnlSaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0blFrRkRhRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0dlFrRkRkRUlzUlVGQlJTeEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZkQlFWY3NSVUZCUlR0cFFrRkRia1FzUTBGQlF6dG5Ra0ZEUml4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJGQlEyNURPMmxDUVVGTk8yZENRVU5PTEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRjRVVzV1VGQldTeERRVUZETEdGQlFXRXNORVJCUVd0Q0xFTkJRVU03WjBKQlF6ZERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0blFrRkRja1lzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1owSkJRMmhFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2IwSkJRM1JDTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4WFFVRlhMRVZCUVVVN2FVSkJRMjVFTEVOQlFVTTdaMEpCUTBZc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTnVRenRUUVVORU8yRkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEYkVRc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeFZRVUZWTEVOQlF6TkNMR0ZCUVdFc1JVRkRZaXhwUmtGQmFVWXNSVUZEYWtZc1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUTJoRUxFTkJRVU03V1VGRFJpeFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTTFSQ3haUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU42UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOdVJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2RDUVVGblFpeERRVUZETzFsQlEzaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNMRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hYUVVGWExFVkJRVVU3WVVGRGJrUXNRMEZCUXp0WlFVTkdMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVMEZEYmtNN1lVRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU4wUkN4WlFVRlpMRU5CUVVNc1lVRkJZU3dyUkVGQll5eERRVUZETzFsQlEzcERMRmxCUVZrc1EwRkJReXhoUVVGaExEUkVRVUZyUWl4RFFVRkRPMWxCUXpkRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03V1VGRE1VTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRekZDTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VTBGRGJrTTdZVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOc1JDeFpRVUZaTEVOQlFVTXNZVUZCWVN3MFJFRkJaMElzUTBGQlF6dFpRVU16UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3cwUkVGQmEwSXNRMEZCUXp0WlFVTTNReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xbEJRMmhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTnNSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzJkQ1FVTjBRaXhGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzVjBGQlZ5eEZRVUZGTzJGQlEyNUVMRU5CUVVNN1dVRkRSaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMU5CUTI1RE96dFpRVUZOTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRE1VTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJRenRMUVVOWU8wRkJRMFlzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImFzeW5jIiwicG9zdEdRTEFQSSIsIm9wZXJhdGlvbk5hbWUiLCJxdWVyeSIsInZhcnMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImp3dElkVG9rZW4iLCJib2R5Iiwic3RyaW5naWZ5IiwidmFyaWFibGVzIiwianNvbiIsInVybCIsIm9uIiwibnVybCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInNtYWxsSW1hZ2VLZXkiLCJkZXRhaWxzIiwic3RhdGUiLCJzdGFydFRpbWVzdGFtcCIsImluY2x1ZGVzIiwicmVzIiwiaWQiLCJzcGxpdCIsImRhdGEiLCJjb21tZW50cyIsImNvbnRlbnQiLCJfX3R5cGVuYW1lIiwiY29tbXVuaXRpZXMiLCJkcCIsIm5hbWUiLCJ0aXRsZSIsImJ1dHRvbnMiLCJsYWJlbCIsInNldEFjdGl2aXR5IiwiY29tbXVuaXR5QnlOYW1lIiwiY292ZXIiXSwic291cmNlUm9vdCI6IiJ9
undefined;