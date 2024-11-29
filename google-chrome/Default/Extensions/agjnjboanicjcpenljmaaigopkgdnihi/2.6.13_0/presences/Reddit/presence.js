var PresenceClients,__webpack_exports__={};!function(e){e.Reddit="609183409440555018",e.RedditNetflix="869992823854870588"}(PresenceClients||(PresenceClients={}));let subReddit,postTitle,username,nickname,rpanTitle,strings,containsNetflix,presence=new Presence({clientId:PresenceClients.Reddit}),oldLang=null;async function getStrings(){return presence.getStrings({browsing:"general.browsing",live:"general.live",profile:"general.viewProfile",searchSomething:"general.searchSomething",searching:"general.search",reading:"general.readingPost",watching:"general.watching",readButton:"general.buttonReadArticle",viewProfileButton:"general.buttonViewProfile",streamButton:"general.buttonWatchStream",insubreddit:"In a subreddit"},await presence.getSetting("lang").catch((()=>"en")))}const presences={[PresenceClients.Reddit]:presence},startTimestamp=Math.floor(Date.now()/1e3),oldReddit=!!(document.querySelector(".default-header")??document.querySelector("#header"));function setClient(e){presence.clearActivity(),presences[e]?(presence=presences[e],presence.setActivity()):(presence=new Presence({clientId:e}),presences[e]=presence),presence.info("Switched presence client!")}function getSubreddit(){return document.querySelector("shreddit-subreddit-header")?.getAttribute("prefixed-name")}presence.on("UpdateData",(async()=>{const[e,t,s]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("buttons"),presence.getSetting("privacy")]),{href:n,pathname:i}=document.location,r={largeImageKey:i.includes("/r/netflix")?"https://i.imgur.com/Aw5rIOI.gif":"https://cdn.rcd.gg/PreMiD/websites/R/Reddit/assets/logo.png",smallImageKey:i.includes("/r/netflix")?"https://cdn.rcd.gg/PreMiD/websites/R/Reddit/assets/logo.png":"",startTimestamp};i.includes("/r/netflix")&&!containsNetflix?(setClient(PresenceClients.RedditNetflix),containsNetflix=!0,r.largeImageKey="https://i.imgur.com/Aw5rIOI.gif",r.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Reddit/assets/logo.png"):!i.includes("/r/netflix")&&containsNetflix&&(setClient(PresenceClients.Reddit),containsNetflix=!1,r.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/R/Reddit/assets/logo.png"),oldLang===e&&strings||(oldLang=e,strings=await getStrings()),oldReddit?(subReddit=document.querySelector(".redditname")?`${s?strings.insubreddit:`r/${document.querySelector(".redditname").textContent}`}`:"Home",i.includes("/comments/")?s?(r.details=strings.reading.slice(0,-1),r.state=subReddit):(postTitle=document.querySelector("p.title > a").textContent,r.details=`${strings.reading} '${postTitle}'`,r.state=subReddit,r.buttons=[{url:n,label:strings.readButton}]):i.startsWith("/user/")?s?r.details=strings.profile.slice(0,-4):(r.state=document.querySelector(".titlebox > h1").textContent,r.details=strings.profile,r.buttons=[{url:n,label:strings.viewProfileButton}]):i.startsWith("/search")?(r.details=strings.searchSomething,r.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",r.smallImageText=strings.searching):(r.details=strings.browsing,r.state=subReddit)):i.includes("/comments/")?s?r.details=strings.reading.slice(0,-1):(postTitle=document.querySelector("shreddit-title")?.getAttribute("title")??"",subReddit=getSubreddit(),r.details=`${strings.reading} '${postTitle}'`,r.state=subReddit,r.buttons=[{url:n,label:strings.readButton}]):i.startsWith("/user/")?s?r.details=strings.profile.slice(0,-4):(username=document.querySelector("p")?.textContent,nickname=document.querySelector("h1")?.textContent,r.details=strings.profile,r.state=nickname??username,r.buttons=[{url:n,label:strings.viewProfileButton}]):i.startsWith("/search")?(r.details=strings.searchSomething,r.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",r.smallImageText=strings.searching):i.startsWith("/rpan")?(r.details=`${strings.watching} (RPAN)`,s||(rpanTitle=document.querySelector("h1")?document.querySelector("h1").textContent:"Loading title...",r.state=rpanTitle,r.buttons=[{url:n,label:strings.streamButton}]),r.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/live.png",r.smallImageText=strings.live):s?getSubreddit()?r.details=strings.insubreddit:(r.details=strings.browsing,r.state="Home"):(r.details=strings.browsing,r.state=getSubreddit()??"Home"),t&&!s||delete r.buttons,presence.setActivity(r)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckIrQyxFQUFhUCxRQUFVLENBQ25CLENBQ0lnQixJQUFLWixFQUNMYSxNQUFPeEQsUUFBUWtCLGdCQUkzQjRCLEVBQWFHLGNBQWdCLCtDQUM3QkgsRUFBYVksZUFBaUIxRCxRQUFRVSxNQUVoQzhCLEVBSURMLGVBQ0xXLEVBQWFNLFFBQVVwRCxRQUFRbUIsYUFFL0IyQixFQUFhTSxRQUFVcEQsUUFBUVMsU0FDL0JxQyxFQUFhUSxNQUFRLFNBUHJCUixFQUFhTSxRQUFVcEQsUUFBUVMsU0FDL0JxQyxFQUFhUSxNQUFRbkIsZ0JBQWtCLFFBUXRDSSxJQUFXQyxVQUNMTSxFQUFhUCxRQUN4QnJDLFNBQVMrQixZQUFZYSxFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFByZXNlbmNlQ2xpZW50cztcbihmdW5jdGlvbiAoUHJlc2VuY2VDbGllbnRzKSB7XG4gICAgUHJlc2VuY2VDbGllbnRzW1wiUmVkZGl0XCJdID0gXCI2MDkxODM0MDk0NDA1NTUwMThcIjtcbiAgICBQcmVzZW5jZUNsaWVudHNbXCJSZWRkaXROZXRmbGl4XCJdID0gXCI4Njk5OTI4MjM4NTQ4NzA1ODhcIjtcbn0pKFByZXNlbmNlQ2xpZW50cyB8fCAoUHJlc2VuY2VDbGllbnRzID0ge30pKTtcbmxldCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7IGNsaWVudElkOiBQcmVzZW5jZUNsaWVudHMuUmVkZGl0IH0pLCBzdWJSZWRkaXQsIHBvc3RUaXRsZSwgdXNlcm5hbWUsIG5pY2tuYW1lLCBycGFuVGl0bGUsIHN0cmluZ3MsIG9sZExhbmcgPSBudWxsLCBjb250YWluc05ldGZsaXg7XG5hc3luYyBmdW5jdGlvbiBnZXRTdHJpbmdzKCkge1xuICAgIHJldHVybiBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICAgICAgYnJvd3Npbmc6IFwiZ2VuZXJhbC5icm93c2luZ1wiLFxuICAgICAgICBsaXZlOiBcImdlbmVyYWwubGl2ZVwiLFxuICAgICAgICBwcm9maWxlOiBcImdlbmVyYWwudmlld1Byb2ZpbGVcIixcbiAgICAgICAgc2VhcmNoU29tZXRoaW5nOiBcImdlbmVyYWwuc2VhcmNoU29tZXRoaW5nXCIsXG4gICAgICAgIHNlYXJjaGluZzogXCJnZW5lcmFsLnNlYXJjaFwiLFxuICAgICAgICByZWFkaW5nOiBcImdlbmVyYWwucmVhZGluZ1Bvc3RcIixcbiAgICAgICAgd2F0Y2hpbmc6IFwiZ2VuZXJhbC53YXRjaGluZ1wiLFxuICAgICAgICByZWFkQnV0dG9uOiBcImdlbmVyYWwuYnV0dG9uUmVhZEFydGljbGVcIixcbiAgICAgICAgdmlld1Byb2ZpbGVCdXR0b246IFwiZ2VuZXJhbC5idXR0b25WaWV3UHJvZmlsZVwiLFxuICAgICAgICBzdHJlYW1CdXR0b246IFwiZ2VuZXJhbC5idXR0b25XYXRjaFN0cmVhbVwiLFxuICAgICAgICBpbnN1YnJlZGRpdDogXCJJbiBhIHN1YnJlZGRpdFwiLFxuICAgIH0sIGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJsYW5nXCIpLmNhdGNoKCgpID0+IFwiZW5cIikpO1xufVxuY29uc3QgcHJlc2VuY2VzID0ge1xuICAgIFtQcmVzZW5jZUNsaWVudHMuUmVkZGl0XTogcHJlc2VuY2UsXG59LCBzdGFydFRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLCBvbGRSZWRkaXQgPSAhIShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmF1bHQtaGVhZGVyXCIpID8/XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikpO1xuZnVuY3Rpb24gc2V0Q2xpZW50KGNsaWVudElkKSB7XG4gICAgcHJlc2VuY2UuY2xlYXJBY3Rpdml0eSgpO1xuICAgIGlmIChwcmVzZW5jZXNbY2xpZW50SWRdKSB7XG4gICAgICAgIHByZXNlbmNlID0gcHJlc2VuY2VzW2NsaWVudElkXTtcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHsgY2xpZW50SWQgfSk7XG4gICAgICAgIHByZXNlbmNlc1tjbGllbnRJZF0gPSBwcmVzZW5jZTtcbiAgICB9XG4gICAgcHJlc2VuY2UuaW5mbyhcIlN3aXRjaGVkIHByZXNlbmNlIGNsaWVudCFcIik7XG59XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFtuZXdMYW5nLCBidXR0b25zLCBwcml2YWN5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImJ1dHRvbnNcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJwcml2YWN5XCIpLFxuICAgIF0pLCB7IGhyZWYsIHBhdGhuYW1lIH0gPSBkb2N1bWVudC5sb2NhdGlvbiwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiAhcGF0aG5hbWUuaW5jbHVkZXMoXCIvci9uZXRmbGl4XCIpXG4gICAgICAgICAgICA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9SL1JlZGRpdC9hc3NldHMvbG9nby5wbmdcIlxuICAgICAgICAgICAgOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vQXc1cklPSS5naWZcIixcbiAgICAgICAgc21hbGxJbWFnZUtleTogcGF0aG5hbWUuaW5jbHVkZXMoXCIvci9uZXRmbGl4XCIpID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1IvUmVkZGl0L2Fzc2V0cy9sb2dvLnBuZ1wiIDogXCJcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvci9uZXRmbGl4XCIpICYmICFjb250YWluc05ldGZsaXgpIHtcbiAgICAgICAgc2V0Q2xpZW50KFByZXNlbmNlQ2xpZW50cy5SZWRkaXROZXRmbGl4KTtcbiAgICAgICAgY29udGFpbnNOZXRmbGl4ID0gdHJ1ZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBcImh0dHBzOi8vaS5pbWd1ci5jb20vQXc1cklPSS5naWZcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUi9SZWRkaXQvYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFwYXRobmFtZS5pbmNsdWRlcyhcIi9yL25ldGZsaXhcIikgJiYgY29udGFpbnNOZXRmbGl4KSB7XG4gICAgICAgIHNldENsaWVudChQcmVzZW5jZUNsaWVudHMuUmVkZGl0KTtcbiAgICAgICAgY29udGFpbnNOZXRmbGl4ID0gZmFsc2U7XG4gICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1IvUmVkZGl0L2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgIH1cbiAgICBpZiAob2xkTGFuZyAhPT0gbmV3TGFuZyB8fCAhc3RyaW5ncykge1xuICAgICAgICBvbGRMYW5nID0gbmV3TGFuZztcbiAgICAgICAgc3RyaW5ncyA9IGF3YWl0IGdldFN0cmluZ3MoKTtcbiAgICB9XG4gICAgaWYgKG9sZFJlZGRpdCkge1xuICAgICAgICBzdWJSZWRkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZGRpdG5hbWVcIilcbiAgICAgICAgICAgID8gYCR7IXByaXZhY3lcbiAgICAgICAgICAgICAgICA/IGByLyR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWRkaXRuYW1lXCIpLnRleHRDb250ZW50fWBcbiAgICAgICAgICAgICAgICA6IHN0cmluZ3MuaW5zdWJyZWRkaXR9YFxuICAgICAgICAgICAgOiBcIkhvbWVcIjtcbiAgICAgICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2NvbW1lbnRzL1wiKSkge1xuICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgcG9zdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInAudGl0bGUgPiBhXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7c3RyaW5ncy5yZWFkaW5nfSAnJHtwb3N0VGl0bGV9J2A7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3ViUmVkZGl0O1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy5yZWFkQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MucmVhZGluZy5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3ViUmVkZGl0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdXNlci9cIikpIHtcbiAgICAgICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVib3ggPiBoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MucHJvZmlsZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ3Mudmlld1Byb2ZpbGVCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MucHJvZmlsZS5zbGljZSgwLCAtNCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9zZWFyY2hcIikpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5zZWFyY2hTb21ldGhpbmc7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gc3RyaW5ncy5zZWFyY2hpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MuYnJvd3Npbmc7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdWJSZWRkaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvY29tbWVudHMvXCIpKSB7XG4gICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgcG9zdFRpdGxlID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2hyZWRkaXQtdGl0bGVcIik/LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpID8/IFwiXCI7XG4gICAgICAgICAgICBzdWJSZWRkaXQgPSBnZXRTdWJyZWRkaXQoKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7c3RyaW5ncy5yZWFkaW5nfSAnJHtwb3N0VGl0bGV9J2A7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdWJSZWRkaXQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ3MucmVhZEJ1dHRvbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MucmVhZGluZy5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvdXNlci9cIikpIHtcbiAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpPy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIG5pY2tuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpPy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5wcm9maWxlO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gbmlja25hbWUgPz8gdXNlcm5hbWU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ3Mudmlld1Byb2ZpbGVCdXR0b24sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLnByb2ZpbGUuc2xpY2UoMCwgLTQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3Muc2VhcmNoU29tZXRoaW5nO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBzdHJpbmdzLnNlYXJjaGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9ycGFuXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7c3RyaW5ncy53YXRjaGluZ30gKFJQQU4pYDtcbiAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICBycGFuVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIilcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIDogXCJMb2FkaW5nIHRpdGxlLi4uXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBycGFuVGl0bGU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHN0cmluZ3Muc3RyZWFtQnV0dG9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9saXZlLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBzdHJpbmdzLmxpdmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5icm93c2luZztcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZ2V0U3VicmVkZGl0KCkgPz8gXCJIb21lXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGdldFN1YnJlZGRpdCgpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MuaW5zdWJyZWRkaXQ7XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5icm93c2luZztcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJIb21lXCI7XG4gICAgfVxuICAgIGlmICghYnV0dG9ucyB8fCBwcml2YWN5KVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbn0pO1xuZnVuY3Rpb24gZ2V0U3VicmVkZGl0KCkge1xuICAgIHJldHVybiBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcInNocmVkZGl0LXN1YnJlZGRpdC1oZWFkZXJcIilcbiAgICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJwcmVmaXhlZC1uYW1lXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4SlFVRkxMR1ZCUjBvN1FVRklSQ3hYUVVGTExHVkJRV1U3U1VGRGJrSXNaMFJCUVRaQ0xFTkJRVUU3U1VGRE4wSXNkVVJCUVc5RExFTkJRVUU3UVVGRGNrTXNRMEZCUXl4RlFVaEpMR1ZCUVdVc1MwRkJaaXhsUVVGbExGRkJSMjVDTzBGQlEwUXNTVUZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRMmhGTEZOQlFXbENMRVZCUTJwQ0xGTkJRV2xDTEVWQlEycENMRkZCUVdkQ0xFVkJRMmhDTEZGQlFXZENMRVZCUTJoQ0xGTkJRV2xDTEVWQlEycENMRTlCUVN0RExFVkJReTlETEU5QlFVOHNSMEZCVnl4SlFVRkpMRVZCUTNSQ0xHVkJRWGRDTEVOQlFVTTdRVUZQTVVJc1MwRkJTeXhWUVVGVkxGVkJRVlU3U1VGRGVFSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVONlFqdFJRVU5ETEZGQlFWRXNSVUZCUlN4clFrRkJhMEk3VVVGRE5VSXNTVUZCU1N4RlFVRkZMR05CUVdNN1VVRkRjRUlzVDBGQlR5eEZRVUZGTEhGQ1FVRnhRanRSUVVNNVFpeGxRVUZsTEVWQlFVVXNlVUpCUVhsQ08xRkJRekZETEZOQlFWTXNSVUZCUlN4blFrRkJaMEk3VVVGRE0wSXNUMEZCVHl4RlFVRkZMSEZDUVVGeFFqdFJRVU01UWl4UlFVRlJMRVZCUVVVc2EwSkJRV3RDTzFGQlF6VkNMRlZCUVZVc1JVRkJSU3d5UWtGQk1rSTdVVUZEZGtNc2FVSkJRV2xDTEVWQlFVVXNNa0pCUVRKQ08xRkJRemxETEZsQlFWa3NSVUZCUlN3eVFrRkJNa0k3VVVGRGVrTXNWMEZCVnl4RlFVRkZMR2RDUVVGblFqdExRVU0zUWl4RlFVTkVMRTFCUVUwc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlF6TkVMRU5CUVVNN1FVRkRTQ3hEUVVGRE8wRkJSVVFzVFVGQlRTeFRRVUZUTEVkQlFUUkRPMGxCUTNwRUxFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRkZCUVZFN1EwRkRiRU1zUlVGRFJDeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUXpsRExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZEWWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHbENRVUZwUWl4RFFVRkRPMGxCUTNwRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUTJwRExFTkJRVU03UVVGRlNDeFRRVUZUTEZOQlFWTXNRMEZCUXl4UlFVRjVRanRKUVVNelF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRlRUlzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNdlFpeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1MwRkRka0k3VTBGQlRUdFJRVU5PTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXp0TFFVTXZRanRKUVVORUxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNNa0pCUVRKQ0xFTkJRVU1zUTBGQlF6dEJRVU0xUXl4RFFVRkRPMEZCUlVRc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUTNCRUxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTnlSQ3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZOQlFWTXNRMEZCUXp0UlFVTjJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZOQlFWTXNRMEZCUXp0TFFVTjJReXhEUVVGRExFVkJRMFlzUlVGQlJTeEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGRGRFTXNXVUZCV1N4SFFVRnBRanRSUVVNMVFpeGhRVUZoTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF6dFpRVU01UXl4RFFVRkRPMWxCUTBRc1EwRkJReXhyUTBGQmJVSTdVVUZEY2tJc1lVRkJZU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXdyUkVGQllTeERRVUZETEVOQlFVTXNSVUZCUlR0UlFVTnFSU3hqUVVGak8wdEJRMlFzUTBGQlF6dEpRVVZJTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlR0UlFVTjRSQ3hUUVVGVExFTkJRVU1zWlVGQlpTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUlhwRExHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEZGtJc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBOQlFYRkNMRU5CUVVNN1VVRkRhRVFzV1VGQldTeERRVUZETEdGQlFXRXNaMFZCUVdNc1EwRkJRenRMUVVONlF6dFRRVUZOTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEdWQlFXVXNSVUZCUlR0UlFVTXZSQ3hUUVVGVExFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTJ4RExHVkJRV1VzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEZUVJc1dVRkJXU3hEUVVGRExHRkJRV0VzWjBWQlFXTXNRMEZCUXp0TFFVTjZRenRKUVVWRUxFbEJRVWtzVDBGQlR5eExRVUZMTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRSUVVOd1F5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUjBGQlJ5eE5RVUZOTEZWQlFWVXNSVUZCUlN4RFFVRkRPMHRCUXpkQ08wbEJSVVFzU1VGQlNTeFRRVUZUTEVWQlFVVTdVVUZEWkN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZEYUVRc1EwRkJReXhEUVVGRExFZEJRMEVzUTBGQlF5eFBRVUZQTzJkQ1FVTlFMRU5CUVVNc1EwRkJReXhMUVVGTExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRk8yZENRVU14UkN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRMWdzUlVGQlJUdFpRVU5LTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRWaXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVN1dVRkRjRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRZaXhUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03WjBKQlF6bEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1IwRkJSeXhEUVVGRE8yZENRVU16UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZETDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dHZRa0ZEZEVJN2QwSkJRME1zUjBGQlJ5eEZRVUZGTEVsQlFVazdkMEpCUTFRc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF5eFZRVUZWTzNGQ1FVTjZRanRwUWtGRFJDeERRVUZETzJGQlEwWTdhVUpCUVUwN1owSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03WVVGREwwSTdVMEZEUkR0aFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0WlFVTjZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTmlMRmxCUVZrc1EwRkJReXhMUVVGTE8yOUNRVU5xUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVU4wUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTTdaMEpCUTNaRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdiMEpCUTNSQ08zZENRVU5ETEVkQlFVY3NSVUZCUlN4SlFVRkpPM2RDUVVOVUxFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNhVUpCUVdsQ08zRkNRVU5vUXp0cFFrRkRSQ3hEUVVGRE8yRkJRMFk3TzJkQ1FVRk5MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETTBRN1lVRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1dVRkRNVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRE8xbEJReTlETEZsQlFWa3NRMEZCUXl4aFFVRmhMRzFFUVVGblFpeERRVUZETzFsQlF6TkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXp0VFFVTm9SRHRoUVVGTk8xbEJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRE8xbEJRM2hETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJReTlDTzB0QlEwUTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVTdVVUZETTBNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5pTEZOQlFWTTdaMEpCUTFJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRka1VzVTBGQlV5eEhRVUZITEZsQlFWa3NSVUZCUlN4RFFVRkRPMWxCUXpOQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUjBGQlJ5eERRVUZETzFsQlF6TkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzFsQlF5OUNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNPMjlDUVVORExFZEJRVWNzUlVGQlJTeEpRVUZKTzI5Q1FVTlVMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zVlVGQlZUdHBRa0ZEZWtJN1lVRkRSQ3hEUVVGRE8xTkJRMFk3TzFsQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU16UkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTjZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEySXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRPMWxCUTNCRUxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGZEJRVmNzUTBGQlF6dFpRVU55UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEZGtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRPMWxCUXpGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdaMEpCUTNSQ08yOUNRVU5ETEVkQlFVY3NSVUZCUlN4SlFVRkpPMjlDUVVOVUxFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNhVUpCUVdsQ08ybENRVU5vUXp0aFFVTkVMRU5CUVVNN1UwRkRSanM3V1VGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRek5FTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFGQlF6RkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTXZReXhaUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRSUVVNelF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU03UzBGRGFFUTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEZUVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRk5CUVZNc1EwRkJRenRSUVVOd1JDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTJJc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOMlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFhRVUZYTzJkQ1FVTXhReXhEUVVGRExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1dVRkRkRUlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1dVRkRMMElzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNSMEZCUnl4RlFVRkZMRWxCUVVrN2IwSkJRMVFzUzBGQlN5eEZRVUZGTEU5QlFVOHNRMEZCUXl4WlFVRlpPMmxDUVVNelFqdGhRVU5FTEVOQlFVTTdVMEZEUmp0UlFVTkVMRmxCUVZrc1EwRkJReXhoUVVGaExHbEVRVUZqTEVOQlFVTTdVVUZEZWtNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMHRCUXpORE8xTkJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0UlFVTndRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRlRU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRVZCUVVVc1NVRkJTU3hOUVVGTkxFTkJRVU03UzBGRE9VTTdVMEZCVFN4SlFVRkpMRmxCUVZrc1JVRkJSVHRSUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOcVJUdFJRVU5LTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU40UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF6dExRVU0xUWp0SlFVVkVMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzVDBGQlR6dFJRVUZGTEU5QlFVOHNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOeVJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUlVnc1UwRkJVeXhaUVVGWk8wbEJRM0JDTEU5QlFVOHNVVUZCVVR0VFFVTmlMR0ZCUVdFc1EwRkJReXd5UWtGQk1rSXNRMEZCUXp0UlFVTXpReXhGUVVGRkxGbEJRVmtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0QlFVTnNReXhEUVVGREluMD0iXSwibmFtZXMiOlsiUHJlc2VuY2VDbGllbnRzIiwic3ViUmVkZGl0IiwicG9zdFRpdGxlIiwidXNlcm5hbWUiLCJuaWNrbmFtZSIsInJwYW5UaXRsZSIsInN0cmluZ3MiLCJjb250YWluc05ldGZsaXgiLCJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJSZWRkaXQiLCJvbGRMYW5nIiwiYXN5bmMiLCJnZXRTdHJpbmdzIiwiYnJvd3NpbmciLCJsaXZlIiwicHJvZmlsZSIsInNlYXJjaFNvbWV0aGluZyIsInNlYXJjaGluZyIsInJlYWRpbmciLCJ3YXRjaGluZyIsInJlYWRCdXR0b24iLCJ2aWV3UHJvZmlsZUJ1dHRvbiIsInN0cmVhbUJ1dHRvbiIsImluc3VicmVkZGl0IiwiZ2V0U2V0dGluZyIsImNhdGNoIiwicHJlc2VuY2VzIiwic3RhcnRUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib2xkUmVkZGl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0Q2xpZW50IiwiY2xlYXJBY3Rpdml0eSIsInNldEFjdGl2aXR5IiwiaW5mbyIsImdldFN1YnJlZGRpdCIsImdldEF0dHJpYnV0ZSIsIm9uIiwibmV3TGFuZyIsImJ1dHRvbnMiLCJwcml2YWN5IiwiUHJvbWlzZSIsImFsbCIsImhyZWYiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsImluY2x1ZGVzIiwic21hbGxJbWFnZUtleSIsIlJlZGRpdE5ldGZsaXgiLCJ0ZXh0Q29udGVudCIsImRldGFpbHMiLCJzbGljZSIsInN0YXRlIiwidXJsIiwibGFiZWwiLCJzdGFydHNXaXRoIiwic21hbGxJbWFnZVRleHQiXSwic291cmNlUm9vdCI6IiJ9
undefined;