var __webpack_exports__={};let elapsed=Math.floor(Date.now()/1e3),oldLang="en",prevUrl=document.location.href;const presence=new Presence({clientId:"939877915032682576"}),getElement=e=>document.querySelector(e)?.textContent,getStrings=async()=>presence.getStrings({play:"general.playing",pause:"general.paused",live:"general.live",viewHome:"general.viewHome",browse:"general.browsing",watchingLive:"general.watchingLive",watchingVid:"general.watchingVid",viewCategory:"general.viewCategory",viewTheir:"twitch.viewTheir",channelSettings:"twitch.channelSettings",followList:"twitch.followList",channelAnaly:"twitch.channelAnaly",streamSum:"twitch.streamSum",dashboard:"twitch.dashboard",dashboardManage:"twitch.dashboardManage",achievements:"twitch.achievements",camp:"twitch.camp",campBasic:"twitch.campBasic",campSetup:"twitch.campSetup",viewFollow:"twitch.viewFollow",activity:"twitch.activity",colls:"twitch.colls",esport:"twitch.esports",searchingFor:"general.searchFor",searchingSomething:"general.searchSomething",search:"general.search",watchStream:"general.buttonWatchStream",watchVideo:"general.buttonWatchVideo"},oldLang);let strings;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/N/Nimo/assets/logo.png",startTimestamp:elapsed},{pathname:t,href:s}=document.location,[a,i,r,n,l,c,g,o,m]=await Promise.all([presence.getSetting("timestamp"),presence.getSetting("lang").catch((()=>"en")),presence.getSetting("privacy"),presence.getSetting("vidDetail"),presence.getSetting("vidState"),presence.getSetting("streamDetail"),presence.getSetting("streamState"),presence.getSetting("profilePic"),presence.getSetting("buttons")]),d=getElement(":is(div.nimo-rm_title-text > h3, #meta-info > div.video-info h1, .nimo-player__room-meta_title-text)"),p=getElement(":is(div.nimo-rm_sub-title > h1, #meta-info div.anchor-name.n-as-text-over > a > h2, .nimo-player__room-meta__nick)"),h=getElement("div.nimo-anchor-broadcast-game > a > h4");if(oldLang===i&&strings||(oldLang=i,strings=await getStrings()),s!==prevUrl&&(prevUrl=s,elapsed=Math.floor(Date.now()/1e3)),"/"===t)e.details=strings.viewHome;else if(t.startsWith("/game"))e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText=strings.browse,e.details=strings.browse,r||(e.details=strings.viewCategory,e.state=document.querySelector(":is(#root div.n-fx1 div > h1, div.game-ahb-info > h1)").textContent);else if(t.startsWith("/esports"))e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText=strings.browse,e.details=strings.browse,r||(e.details=strings.esport);else if(t.startsWith("/search"))e.details=strings.searchingSomething,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText=strings.search,r||(e.details=strings.searchingFor,e.state=document.querySelector("div.searchTip > span:nth-child(4)").textContent.replaceAll('"',""));else if(t.startsWith("/i"))e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText=strings.browse,e.details=strings.browse,r||(delete e.smallImageKey,delete e.smallImageText,e.details=strings.viewTheir,e.state=strings.channelSettings,t.includes("/streamercamp")?(e.details=strings.camp,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText=strings.browse,delete e.state,t.includes("/quickstart")?e.state=strings.campBasic:t.includes("/resources")&&(e.state=strings.campSetup)):t.includes("/home")?e.state=strings.dashboard:t.includes("/my-subscribe")?(e.details=strings.viewFollow,delete e.state):t.includes("/followers")?e.state=strings.followList:t.includes("/channel-analytics")?e.state=strings.channelAnaly:t.includes("/live-end")?e.state=strings.streamSum:t.includes("/stream-manager")||t.includes("/live-preview")||t.includes("/stream-targets")||t.includes("/stream-url")?(e.details=strings.dashboardManage,delete e.state):t.includes("/anchor-level")||t.includes("/my-growth")?e.state=strings.achievements:t.includes("/fans-club")?e.state=strings.activity:t.includes("/video")&&(e.state=strings.colls));else if(d&&p){if(document.querySelector("#nimo-player div.time-label-control.control-item")){const{duration:t,currentTime:s,paused:a}=document.querySelector("video");r?e.details=strings.watchingVid:(e.details=n.replace("%title%",d).replace("%uploader%",p),e.state=l.replace("%title%",d).replace("%uploader%",p),delete e.startTimestamp,a||([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(s,t)),e.buttons=[{label:strings.watchVideo,url:document.URL}]),e.smallImageKey=a?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText=a?strings.pause:strings.play}else r?e.details=strings.watchingLive:(e.details=c.replace("%title%",d).replace("%streamer%",p).replace("%game%",h),e.state=g.replace("%title%",d).replace("%streamer%",p).replace("%game%",h),e.buttons=[{label:strings.watchStream,url:document.URL}]),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/live.png",e.smallImageText=strings.live;o&&(e.largeImageKey=document.querySelector(":is(#meta-info a > span > picture > img, #root div.nimo-room__theater-section span > a > span > picture > img)").src.replace("w120","w300"))}a||(delete e.startTimestamp,delete e.endTimestamp),m||delete e.buttons,presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM0RSxZQUFZckMsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBlbGFwc2VkID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIG9sZExhbmcgPSBcImVuXCIsIHByZXZVcmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjkzOTg3NzkxNTAzMjY4MjU3NlwiLFxufSksIGdldEVsZW1lbnQgPSAocXVlcnkpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk/LnRleHRDb250ZW50O1xufSwgZ2V0U3RyaW5ncyA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgICAgIHBsYXk6IFwiZ2VuZXJhbC5wbGF5aW5nXCIsXG4gICAgICAgIHBhdXNlOiBcImdlbmVyYWwucGF1c2VkXCIsXG4gICAgICAgIGxpdmU6IFwiZ2VuZXJhbC5saXZlXCIsXG4gICAgICAgIHZpZXdIb21lOiBcImdlbmVyYWwudmlld0hvbWVcIixcbiAgICAgICAgYnJvd3NlOiBcImdlbmVyYWwuYnJvd3NpbmdcIixcbiAgICAgICAgd2F0Y2hpbmdMaXZlOiBcImdlbmVyYWwud2F0Y2hpbmdMaXZlXCIsXG4gICAgICAgIHdhdGNoaW5nVmlkOiBcImdlbmVyYWwud2F0Y2hpbmdWaWRcIixcbiAgICAgICAgdmlld0NhdGVnb3J5OiBcImdlbmVyYWwudmlld0NhdGVnb3J5XCIsXG4gICAgICAgIHZpZXdUaGVpcjogXCJ0d2l0Y2gudmlld1RoZWlyXCIsXG4gICAgICAgIGNoYW5uZWxTZXR0aW5nczogXCJ0d2l0Y2guY2hhbm5lbFNldHRpbmdzXCIsXG4gICAgICAgIGZvbGxvd0xpc3Q6IFwidHdpdGNoLmZvbGxvd0xpc3RcIixcbiAgICAgICAgY2hhbm5lbEFuYWx5OiBcInR3aXRjaC5jaGFubmVsQW5hbHlcIixcbiAgICAgICAgc3RyZWFtU3VtOiBcInR3aXRjaC5zdHJlYW1TdW1cIixcbiAgICAgICAgZGFzaGJvYXJkOiBcInR3aXRjaC5kYXNoYm9hcmRcIixcbiAgICAgICAgZGFzaGJvYXJkTWFuYWdlOiBcInR3aXRjaC5kYXNoYm9hcmRNYW5hZ2VcIixcbiAgICAgICAgYWNoaWV2ZW1lbnRzOiBcInR3aXRjaC5hY2hpZXZlbWVudHNcIixcbiAgICAgICAgY2FtcDogXCJ0d2l0Y2guY2FtcFwiLFxuICAgICAgICBjYW1wQmFzaWM6IFwidHdpdGNoLmNhbXBCYXNpY1wiLFxuICAgICAgICBjYW1wU2V0dXA6IFwidHdpdGNoLmNhbXBTZXR1cFwiLFxuICAgICAgICB2aWV3Rm9sbG93OiBcInR3aXRjaC52aWV3Rm9sbG93XCIsXG4gICAgICAgIGFjdGl2aXR5OiBcInR3aXRjaC5hY3Rpdml0eVwiLFxuICAgICAgICBjb2xsczogXCJ0d2l0Y2guY29sbHNcIixcbiAgICAgICAgZXNwb3J0OiBcInR3aXRjaC5lc3BvcnRzXCIsXG4gICAgICAgIHNlYXJjaGluZ0ZvcjogXCJnZW5lcmFsLnNlYXJjaEZvclwiLFxuICAgICAgICBzZWFyY2hpbmdTb21ldGhpbmc6IFwiZ2VuZXJhbC5zZWFyY2hTb21ldGhpbmdcIixcbiAgICAgICAgc2VhcmNoOiBcImdlbmVyYWwuc2VhcmNoXCIsXG4gICAgICAgIHdhdGNoU3RyZWFtOiBcImdlbmVyYWwuYnV0dG9uV2F0Y2hTdHJlYW1cIixcbiAgICAgICAgd2F0Y2hWaWRlbzogXCJnZW5lcmFsLmJ1dHRvbldhdGNoVmlkZW9cIixcbiAgICB9LCBvbGRMYW5nKTtcbn07XG5sZXQgc3RyaW5ncztcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTi9OaW1vL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogZWxhcHNlZCxcbiAgICB9LCB7IHBhdGhuYW1lLCBocmVmIH0gPSBkb2N1bWVudC5sb2NhdGlvbiwgW3Nob3dUaW1lc3RhbXBzLCBuZXdMYW5nLCBwcml2YWN5LCB2aWREZXRhaWwsIHZpZFN0YXRlLCBzdHJlYW1EZXRhaWwsIHN0cmVhbVN0YXRlLCBwcm9maWxlUGljLCBidXR0b25zLF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lc3RhbXBcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJsYW5nXCIpLmNhdGNoKCgpID0+IFwiZW5cIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJwcml2YWN5XCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidmlkRGV0YWlsXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwidmlkU3RhdGVcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJzdHJlYW1EZXRhaWxcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJzdHJlYW1TdGF0ZVwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByb2ZpbGVQaWNcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgIF0pLCB0aXRsZSA9IGdldEVsZW1lbnQoXCI6aXMoZGl2Lm5pbW8tcm1fdGl0bGUtdGV4dCA+IGgzLCAjbWV0YS1pbmZvID4gZGl2LnZpZGVvLWluZm8gaDEsIC5uaW1vLXBsYXllcl9fcm9vbS1tZXRhX3RpdGxlLXRleHQpXCIpLCBzdHJlYW1lciA9IGdldEVsZW1lbnQoXCI6aXMoZGl2Lm5pbW8tcm1fc3ViLXRpdGxlID4gaDEsICNtZXRhLWluZm8gZGl2LmFuY2hvci1uYW1lLm4tYXMtdGV4dC1vdmVyID4gYSA+IGgyLCAubmltby1wbGF5ZXJfX3Jvb20tbWV0YV9fbmljaylcIiksIGdhbWUgPSBnZXRFbGVtZW50KFwiZGl2Lm5pbW8tYW5jaG9yLWJyb2FkY2FzdC1nYW1lID4gYSA+IGg0XCIpO1xuICAgIGlmIChvbGRMYW5nICE9PSBuZXdMYW5nIHx8ICFzdHJpbmdzKSB7XG4gICAgICAgIG9sZExhbmcgPSBuZXdMYW5nO1xuICAgICAgICBzdHJpbmdzID0gYXdhaXQgZ2V0U3RyaW5ncygpO1xuICAgIH1cbiAgICBpZiAoaHJlZiAhPT0gcHJldlVybCkge1xuICAgICAgICBwcmV2VXJsID0gaHJlZjtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICBpZiAocGF0aG5hbWUgPT09IFwiL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3Mudmlld0hvbWU7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9nYW1lXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBzdHJpbmdzLmJyb3dzZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLmJyb3dzZTtcbiAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3Mudmlld0NhdGVnb3J5O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjppcygjcm9vdCBkaXYubi1meDEgZGl2ID4gaDEsIGRpdi5nYW1lLWFoYi1pbmZvID4gaDEpXCIpLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZXNwb3J0c1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gc3RyaW5ncy5icm93c2U7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5icm93c2U7XG4gICAgICAgIGlmICghcHJpdmFjeSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5lc3BvcnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvc2VhcmNoXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5zZWFyY2hpbmdTb21ldGhpbmc7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHN0cmluZ3Muc2VhcmNoO1xuICAgICAgICBpZiAoIXByaXZhY3kpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5zZWFyY2hpbmdGb3I7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNlYXJjaFRpcCA+IHNwYW46bnRoLWNoaWxkKDQpXCIpXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChcIi9pXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBzdHJpbmdzLmJyb3dzZTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLmJyb3dzZTtcbiAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXk7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLnZpZXdUaGVpcjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN0cmluZ3MuY2hhbm5lbFNldHRpbmdzO1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3N0cmVhbWVyY2FtcFwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy5jYW1wO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHN0cmluZ3MuYnJvd3NlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3F1aWNrc3RhcnRcIikpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN0cmluZ3MuY2FtcEJhc2ljO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3Jlc291cmNlc1wiKSlcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3RyaW5ncy5jYW1wU2V0dXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9ob21lXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN0cmluZ3MuZGFzaGJvYXJkO1xuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvbXktc3Vic2NyaWJlXCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLnZpZXdGb2xsb3c7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2ZvbGxvd2Vyc1wiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdHJpbmdzLmZvbGxvd0xpc3Q7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9jaGFubmVsLWFuYWx5dGljc1wiKSlcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdHJpbmdzLmNoYW5uZWxBbmFseTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL2xpdmUtZW5kXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN0cmluZ3Muc3RyZWFtU3VtO1xuICAgICAgICAgICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvc3RyZWFtLW1hbmFnZXJcIikgfHxcbiAgICAgICAgICAgICAgICBwYXRobmFtZS5pbmNsdWRlcyhcIi9saXZlLXByZXZpZXdcIikgfHxcbiAgICAgICAgICAgICAgICBwYXRobmFtZS5pbmNsdWRlcyhcIi9zdHJlYW0tdGFyZ2V0c1wiKSB8fFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lLmluY2x1ZGVzKFwiL3N0cmVhbS11cmxcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MuZGFzaGJvYXJkTWFuYWdlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9hbmNob3ItbGV2ZWxcIikgfHxcbiAgICAgICAgICAgICAgICBwYXRobmFtZS5pbmNsdWRlcyhcIi9teS1ncm93dGhcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3RyaW5ncy5hY2hpZXZlbWVudHM7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9mYW5zLWNsdWJcIikpXG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3RyaW5ncy5hY3Rpdml0eTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKFwiL3ZpZGVvXCIpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN0cmluZ3MuY29sbHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGl0bGUgJiYgc3RyZWFtZXIpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmltby1wbGF5ZXIgZGl2LnRpbWUtbGFiZWwtY29udHJvbC5jb250cm9sLWl0ZW1cIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZHVyYXRpb24sIGN1cnJlbnRUaW1lLCBwYXVzZWQgfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdmlkRGV0YWlsXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJXRpdGxlJVwiLCB0aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCIldXBsb2FkZXIlXCIsIHN0cmVhbWVyKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB2aWRTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiV0aXRsZSVcIiwgdGl0bGUpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJXVwbG9hZGVyJVwiLCBzdHJlYW1lcik7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBpZiAoIXBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKGN1cnJlbnRUaW1lLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBzdHJpbmdzLndhdGNoVmlkZW8sIHVybDogZG9jdW1lbnQuVVJMIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3Mud2F0Y2hpbmdWaWQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IHBhdXNlZCA/IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCIgOiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBwYXVzZWQgPyBzdHJpbmdzLnBhdXNlIDogc3RyaW5ncy5wbGF5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFwcml2YWN5KSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJlYW1EZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCIldGl0bGUlXCIsIHRpdGxlKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiVzdHJlYW1lciVcIiwgc3RyZWFtZXIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJWdhbWUlXCIsIGdhbWUpO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHN0cmVhbVN0YXRlXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJXRpdGxlJVwiLCB0aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCIlc3RyZWFtZXIlXCIsIHN0cmVhbWVyKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiVnYW1lJVwiLCBnYW1lKTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogc3RyaW5ncy53YXRjaFN0cmVhbSwgdXJsOiBkb2N1bWVudC5VUkwgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy53YXRjaGluZ0xpdmU7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvbGl2ZS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IHN0cmluZ3MubGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZmlsZVBpYykge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiOmlzKCNtZXRhLWluZm8gYSA+IHNwYW4gPiBwaWN0dXJlID4gaW1nLCAjcm9vdCBkaXYubmltby1yb29tX190aGVhdGVyLXNlY3Rpb24gc3BhbiA+IGEgPiBzcGFuID4gcGljdHVyZSA+IGltZylcIilcbiAgICAgICAgICAgICAgICAuc3JjLnJlcGxhY2UoXCJ3MTIwXCIsIFwidzMwMFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNob3dUaW1lc3RhbXBzKSB7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgIH1cbiAgICBpZiAoIWJ1dHRvbnMpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hKUVVGSkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZETVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUlVGRFpDeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03UVVGRmJFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU03U1VGRE5VSXNVVUZCVVN4RlFVRkZMRzlDUVVGdlFqdERRVU01UWl4RFFVRkRMRVZCUTBZc1ZVRkJWU3hIUVVGSExFTkJRVU1zUzBGQllTeEZRVUZ6UWl4RlFVRkZPMGxCUTJ4RUxFOUJRVThzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRVU03UVVGRGJrUXNRMEZCUXl4RlFVTkVMRlZCUVZVc1IwRkJSeXhMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU4yUWl4UFFVRlBMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRM3BDTzFGQlEwTXNTVUZCU1N4RlFVRkZMR2xDUVVGcFFqdFJRVU4yUWl4TFFVRkxMRVZCUVVVc1owSkJRV2RDTzFGQlEzWkNMRWxCUVVrc1JVRkJSU3hqUVVGak8xRkJRM0JDTEZGQlFWRXNSVUZCUlN4clFrRkJhMEk3VVVGRE5VSXNUVUZCVFN4RlFVRkZMR3RDUVVGclFqdFJRVU14UWl4WlFVRlpMRVZCUVVVc2MwSkJRWE5DTzFGQlEzQkRMRmRCUVZjc1JVRkJSU3h4UWtGQmNVSTdVVUZEYkVNc1dVRkJXU3hGUVVGRkxITkNRVUZ6UWp0UlFVTndReXhUUVVGVExFVkJRVVVzYTBKQlFXdENPMUZCUXpkQ0xHVkJRV1VzUlVGQlJTeDNRa0ZCZDBJN1VVRkRla01zVlVGQlZTeEZRVUZGTEcxQ1FVRnRRanRSUVVNdlFpeFpRVUZaTEVWQlFVVXNjVUpCUVhGQ08xRkJRMjVETEZOQlFWTXNSVUZCUlN4clFrRkJhMEk3VVVGRE4wSXNVMEZCVXl4RlFVRkZMR3RDUVVGclFqdFJRVU0zUWl4bFFVRmxMRVZCUVVVc2QwSkJRWGRDTzFGQlEzcERMRmxCUVZrc1JVRkJSU3h4UWtGQmNVSTdVVUZEYmtNc1NVRkJTU3hGUVVGRkxHRkJRV0U3VVVGRGJrSXNVMEZCVXl4RlFVRkZMR3RDUVVGclFqdFJRVU0zUWl4VFFVRlRMRVZCUVVVc2EwSkJRV3RDTzFGQlF6ZENMRlZCUVZVc1JVRkJSU3h0UWtGQmJVSTdVVUZETDBJc1VVRkJVU3hGUVVGRkxHbENRVUZwUWp0UlFVTXpRaXhMUVVGTExFVkJRVVVzWTBGQll6dFJRVU55UWl4TlFVRk5MRVZCUVVVc1owSkJRV2RDTzFGQlEzaENMRmxCUVZrc1JVRkJSU3h0UWtGQmJVSTdVVUZEYWtNc2EwSkJRV3RDTEVWQlFVVXNlVUpCUVhsQ08xRkJRemRETEUxQlFVMHNSVUZCUlN4blFrRkJaMEk3VVVGRGVFSXNWMEZCVnl4RlFVRkZMREpDUVVFeVFqdFJRVU40UXl4VlFVRlZMRVZCUVVVc01FSkJRVEJDTzB0QlEzUkRMRVZCUTBRc1QwRkJUeXhEUVVOUUxFTkJRVU03UVVGRFNDeERRVUZETEVOQlFVTTdRVUZGU0N4SlFVRkpMRTlCUVN0RExFTkJRVU03UVVGRmNFUXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXd5UkVGQk1rUTdVVUZETlVRc1kwRkJZeXhGUVVGRkxFOUJRVTg3UzBGRGRrSXNSVUZEUkN4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVTjBReXhEUVVORExHTkJRV01zUlVGRFpDeFBRVUZQTEVWQlExQXNUMEZCVHl4RlFVTlFMRk5CUVZNc1JVRkRWQ3hSUVVGUkxFVkJRMUlzV1VGQldTeEZRVU5hTEZkQlFWY3NSVUZEV0N4VlFVRlZMRVZCUTFZc1QwRkJUeXhGUVVOUUxFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUTNKQ0xGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNWMEZCVnl4RFFVRkRPMUZCUTNwRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTnlSQ3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZOQlFWTXNRMEZCUXp0UlFVTjJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZUTEZkQlFWY3NRMEZCUXp0UlFVTjRReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZUTEZWQlFWVXNRMEZCUXp0UlFVTjJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZUTEdOQlFXTXNRMEZCUXp0UlFVTXpReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZUTEdGQlFXRXNRMEZCUXp0UlFVTXhReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZsQlFWa3NRMEZCUXp0UlFVTXhReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZWTEZOQlFWTXNRMEZCUXp0TFFVTjJReXhEUVVGRExFVkJRMFlzUzBGQlN5eEhRVUZITEZWQlFWVXNRMEZEYWtJc2MwZEJRWE5ITEVOQlEzUkhMRVZCUTBRc1VVRkJVU3hIUVVGSExGVkJRVlVzUTBGRGNFSXNiMGhCUVc5SUxFTkJRM0JJTEVWQlEwUXNTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRPMGxCUlRsRUxFbEJRVWtzVDBGQlR5eExRVUZMTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRSUVVOd1F5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUjBGQlJ5eE5RVUZOTEZWQlFWVXNSVUZCUlN4RFFVRkRPMHRCUXpkQ08wbEJSVVFzU1VGQlNTeEpRVUZKTEV0QlFVc3NUMEZCVHl4RlFVRkZPMUZCUTNKQ0xFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEWml4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGVFTTdTVUZGUkN4SlFVRkpMRkZCUVZFc1MwRkJTeXhIUVVGSE8xRkJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRE8xTkJRM3BFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdFJRVU4wUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0UlFVTTFReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkROME1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM1JETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRZaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNN1dVRkROVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNeFF5eDFSRUZCZFVRc1EwRkRka1FzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEWkR0TFFVTkVPMU5CUVUwc1NVRkJTU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMUZCUXpORExGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8xRkJRelZETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0zUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFOUJRVTg3V1VGQlJTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03UzBGRGNFUTdVMEZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVVUZETVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03VVVGRGJFUXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2JVUkJRV2RDTEVOQlFVTTdVVUZETTBNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEWWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTTdXVUZETlVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTzJsQ1FVTXpRaXhoUVVGaExFTkJRVU1zYlVOQlFXMURMRU5CUVVNN2FVSkJRMnhFTEZkQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEyeERPMHRCUTBRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1VVRkRja01zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6ZERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjBReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEySXNUMEZCVHl4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJRMnhETEU5QlFVOHNXVUZCV1N4RFFVRkRMR05CUVdNc1EwRkJRenRaUVVOdVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU03V1VGRGVrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETzFsQlF6ZERMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlR0blFrRkRka01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVU53UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0blFrRkROVU1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU0zUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTTdiMEpCUTI1RExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJRenR4UWtGRGJrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF6dHZRa0ZEZGtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRPMkZCUTNoRE8ybENRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03WjBKQlEzQkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXp0cFFrRkRia01zU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRk8yZENRVU0xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTTdaMEpCUXpGRExFOUJRVThzV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXp0aFFVTXhRanRwUWtGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRE8yZENRVU42UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTTdhVUpCUTNCRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dG5Ra0ZETDBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRPMmxDUVVOMFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVU4wUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTTdhVUpCUTI1RExFbEJRMG9zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZEY0VNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTTdaMEpCUTJ4RExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03WjBKQlEzQkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVWQlF5OUNPMmRDUVVORUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJRenRuUWtGREwwTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRE8yRkJRekZDTzJsQ1FVRk5MRWxCUTA0c1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTTdaMEpCUTJ4RExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRPMmRDUVVVdlFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU03YVVKQlEzUkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTTdaMEpCUTNaRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJRenRwUWtGRGJFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dG5Ra0ZCUlN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEZWtVN1MwRkRSRHRUUVVGTkxFbEJRVWtzUzBGQlN5eEpRVUZKTEZGQlFWRXNSVUZCUlR0UlFVTTNRaXhKUVVORExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNhMFJCUVd0RUxFTkJRVU1zUlVGRGVrVTdXVUZEUkN4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxGZEJRVmNzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZEZEVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQmJVSXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRia1FzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRZaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZOQlFWTTdjVUpCUXpsQ0xFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRPM0ZDUVVONlFpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU5zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkU3Y1VKQlF6TkNMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETzNGQ1FVTjZRaXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVWc1F5eFBRVUZQTEZsQlFWa3NRMEZCUXl4alFVRmpMRU5CUVVNN1owSkJSVzVETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRMW9zUTBGQlF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU03ZDBKQlEzWkVMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmxDUVVNdlF6dG5Ra0ZGUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yOUNRVU4wUWl4RlFVRkZMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRk8ybENRVU5vUkN4RFFVRkRPMkZCUTBZN08yZENRVUZOTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU5zUkN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEdsRVFVRmpMRU5CUVVNc0swTkJRVmtzUTBGQlF6dFpRVU5xUlN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTndSVHRoUVVGTk8xbEJRMDRzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRZaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZsQlFWazdjVUpCUTJwRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRPM0ZDUVVONlFpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZMRkZCUVZFc1EwRkJRenR4UWtGREwwSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZETVVJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVUZYTzNGQ1FVTTVRaXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXp0eFFrRkRla0lzVDBGQlR5eERRVUZETEZsQlFWa3NSVUZCUlN4UlFVRlJMRU5CUVVNN2NVSkJReTlDTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlF6RkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3YjBKQlEzUkNMRVZCUVVVc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVU3YVVKQlEycEVMRU5CUVVNN1lVRkRSanM3WjBKQlFVMHNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETzFsQlEyNUVMRmxCUVZrc1EwRkJReXhoUVVGaExHbEVRVUZqTEVOQlFVTTdXVUZEZWtNc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMU5CUXpORE8xRkJRMFFzU1VGQlNTeFZRVUZWTEVWQlFVVTdXVUZEWml4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExGRkJRVkU3YVVKQlEyNURMR0ZCUVdFc1EwRkRZaXhuU0VGQlowZ3NRMEZEYUVnN2FVSkJRMEVzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRE9VSTdTMEZEUkR0SlFVTkVMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVU3VVVGRGNFSXNUMEZCVHl4WlFVRlpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xRkJRMjVETEU5QlFVOHNXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJRenRMUVVOcVF6dEpRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1QwRkJUeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlF6RkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdRVUZEY0VNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJlbGFwc2VkIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9sZExhbmciLCJwcmV2VXJsIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJnZXRFbGVtZW50IiwicXVlcnkiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXRTdHJpbmdzIiwiYXN5bmMiLCJwbGF5IiwicGF1c2UiLCJsaXZlIiwidmlld0hvbWUiLCJicm93c2UiLCJ3YXRjaGluZ0xpdmUiLCJ3YXRjaGluZ1ZpZCIsInZpZXdDYXRlZ29yeSIsInZpZXdUaGVpciIsImNoYW5uZWxTZXR0aW5ncyIsImZvbGxvd0xpc3QiLCJjaGFubmVsQW5hbHkiLCJzdHJlYW1TdW0iLCJkYXNoYm9hcmQiLCJkYXNoYm9hcmRNYW5hZ2UiLCJhY2hpZXZlbWVudHMiLCJjYW1wIiwiY2FtcEJhc2ljIiwiY2FtcFNldHVwIiwidmlld0ZvbGxvdyIsImFjdGl2aXR5IiwiY29sbHMiLCJlc3BvcnQiLCJzZWFyY2hpbmdGb3IiLCJzZWFyY2hpbmdTb21ldGhpbmciLCJzZWFyY2giLCJ3YXRjaFN0cmVhbSIsIndhdGNoVmlkZW8iLCJzdHJpbmdzIiwib24iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRobmFtZSIsInNob3dUaW1lc3RhbXBzIiwibmV3TGFuZyIsInByaXZhY3kiLCJ2aWREZXRhaWwiLCJ2aWRTdGF0ZSIsInN0cmVhbURldGFpbCIsInN0cmVhbVN0YXRlIiwicHJvZmlsZVBpYyIsImJ1dHRvbnMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsImNhdGNoIiwidGl0bGUiLCJzdHJlYW1lciIsImdhbWUiLCJkZXRhaWxzIiwic3RhcnRzV2l0aCIsInNtYWxsSW1hZ2VLZXkiLCJzbWFsbEltYWdlVGV4dCIsInN0YXRlIiwicmVwbGFjZUFsbCIsImluY2x1ZGVzIiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsInBhdXNlZCIsInJlcGxhY2UiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwibGFiZWwiLCJ1cmwiLCJVUkwiLCJzcmMiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;