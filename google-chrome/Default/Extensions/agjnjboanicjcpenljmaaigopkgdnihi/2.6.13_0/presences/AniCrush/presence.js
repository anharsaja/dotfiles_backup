var __webpack_exports__={};const presence=new Presence({clientId:"1208440916461887488"});let video={exists:!1,duration:0,currentTime:0,paused:!0};presence.on("iFrameData",(e=>{video=e})),presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/AniCrush/assets/logo.png"};const{pathname:t,href:a,search:r}=document.location,[s,i,n]=await Promise.all([presence.getSetting("buttons"),presence.getSetting("watch2getherJoinRoomButton"),presence.getSetting("timestamps")]);switch(!0){case t.startsWith("/watch/"):{const t=Array.from(document.querySelectorAll(".list .w-type").values()).find((e=>e.querySelector(".avail .active")))?.querySelector(".item-sub .name")?.textContent?.toLowerCase(),a=Number(document.querySelector(".active .btn-ep")?.textContent),r=Number(document.querySelector(`.item.item-${t} .name`)?.textContent);e.details=`Watching ${document.querySelector(".seoWidget.d-none")?.textContent??"?"}`,e.largeImageKey=document.querySelector(".anime-thumbnail-img").getAttribute("src"),e.state=`Episode ${isNaN(a)||!a?"?":a.toLocaleString()}/${isNaN(r)||!r?"?":r.toLocaleString()}`,video.exists&&(n&&([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(video.currentTime),Math.floor(video.duration))),video.paused?(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png",e.smallImageText="Paused",delete e.startTimestamp,delete e.endTimestamp):(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Playing")),e.type=3;break}case t.startsWith("/detail/"):e.details=`Viewing ${document.querySelector(".about-anime .infor .heading .main .heading-md.mb-0.text-white")?.textContent||"?"}`,e.state=`Rating ${document.querySelector(".score .s-mark")?.textContent||"?"}/10.0`;break;case t.startsWith("/watch2gether/create/"):e.details=`Watch2gether ${document.querySelector(".anime-name a")?.textContent||"?"}`,e.state="Creating room";break;case t.startsWith("/watch2gether/"):{const t=document.querySelector(".live-header .other-items").children[1].querySelector(".text")?.textContent?.toLowerCase(),r=Number(Array.from(document.querySelectorAll(`.item.item-${t} .text`)).at(-1)?.textContent),o=Number(document.querySelector(".item-viewers span")?.textContent[0]);e.details=`Watch2gether ${document.querySelector(".anime-block .main h3 a")?.textContent||"?"}`,e.state=`Episode ${Number(document.querySelector(".other-items .item-ep span")?.textContent?.replace("Episode ","")).toLocaleString()||"?"}/${isNaN(r)||!r?"?":r.toLocaleString()||"?"} | ${isNaN(o)||!o?"? viewers":o>1?`${o.toLocaleString()} viewers`:`${o} viewer`}`,i&&s&&(e.buttons=[{label:"Join Room",url:a}]),video.exists&&(n&&([e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(video.currentTime),Math.floor(video.duration))),video.paused?(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/pause.png",e.smallImageText="Paused",delete e.startTimestamp,delete e.endTimestamp):(e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Playing")),e.type=3;break}case t.startsWith("/watch2gether"):e.details="Browsing Watch2gether";break;default:{const i=new URLSearchParams(r),n=i.get("letter"),o={"/home":{details:"Browsing homepage"},"/most-popular":{details:"Browsing most popular anime"},"/az-list":{details:`Browsing ${n?"":"all "}anime${n?` starting with ${n}`:""}`},"/estimated-schedule":{details:"Browsing estimated anime schedules"},"/search":{details:`Searching for ${i.get("keyword")||"anime"}`}};for(const[r,i]of Object.entries(o))t.startsWith(r)&&(e={...e,...i},!e.buttons&&s&&(e.buttons=[{label:"Browse Anime",url:a}]));e.details||(e.details="Browsing...",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png");break}}e.endTimestamp&&e.startTimestamp&&(e.type=3),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFFZCxJQUFJQyxNQUFRLENBQ1JDLFFBQVEsRUFDUkMsU0FBVSxFQUNWQyxZQUFhLEVBQ2JDLFFBQVEsR0FFWlAsU0FBU1EsR0FBRyxjQUFlQyxJQUN2Qk4sTUFBUU0sQ0FBSSxJQUVoQlQsU0FBU1EsR0FBRyxjQUFjRSxVQUN0QixJQUFJQyxFQUFlLENBQ2ZDLGNBQWUsaUVBRW5CLE1BQU0sU0FBRUMsRUFBUSxLQUFFQyxFQUFJLE9BQUVDLEdBQVdDLFNBQVNDLFVBQVdDLEVBQWFDLEVBQWNDLFNBQXdCQyxRQUFRQyxJQUFJLENBQ2xIdEIsU0FBU3VCLFdBQVcsV0FDcEJ2QixTQUFTdUIsV0FBVyw4QkFDcEJ2QixTQUFTdUIsV0FBVyxnQkFFeEIsUUFBUSxHQUNKLEtBQUtWLEVBQVNXLFdBQVcsV0FBWSxDQUNqQyxNQUFNQyxFQUFnQkMsTUFBTUMsS0FBS1gsU0FBU1ksaUJBQWlCLGlCQUFpQkMsVUFDdkVDLE1BQUtDLEdBQU9BLEVBQUlDLGNBQWMscUJBQzdCQSxjQUFjLG9CQUNkQyxhQUFhQyxjQUFlQyxFQUF1QkMsT0FBT3BCLFNBQVNnQixjQUFjLG9CQUFvQkMsYUFBY0ksRUFBcUJELE9BQU9wQixTQUFTZ0IsY0FBYyxjQUFjUCxZQUNwTFEsYUFDTnRCLEVBQWEyQixRQUFVLFlBQVl0QixTQUFTZ0IsY0FBYyxzQkFBc0JDLGFBQWUsTUFDL0Z0QixFQUFhQyxjQUFnQkksU0FDeEJnQixjQUFjLHdCQUNkTyxhQUFhLE9BQ2xCNUIsRUFBYTZCLE1BQVEsV0FBV0MsTUFBTU4sS0FBMEJBLEVBQzFELElBQ0FBLEVBQXFCTyxvQkFBb0JELE1BQU1KLEtBQXdCQSxFQUN2RSxJQUNBQSxFQUFtQkssbUJBQ3JCdkMsTUFBTUMsU0FDRmdCLEtBQ0NULEVBQWFnQyxlQUFnQmhDLEVBQWFpQyxjQUN2QzVDLFNBQVM2QyxjQUFjQyxLQUFLQyxNQUFNNUMsTUFBTUcsYUFBY3dDLEtBQUtDLE1BQU01QyxNQUFNRSxZQUUzRUYsTUFBTUksUUFDTkksRUFBYXFDLGNBQWdCLGdEQUM3QnJDLEVBQWFzQyxlQUFpQixnQkFDdkJ0QyxFQUFhZ0Msc0JBQ2JoQyxFQUFhaUMsZUFHcEJqQyxFQUFhcUMsY0FBZ0IsK0NBQzdCckMsRUFBYXNDLGVBQWlCLFlBR3RDdEMsRUFBYXVDLEtBQU8sRUFDcEIsS0FDSixDQUNBLEtBQUtyQyxFQUFTVyxXQUFXLFlBQ3JCYixFQUFhMkIsUUFBVSxXQUFXdEIsU0FBU2dCLGNBQWMsbUVBQW1FQyxhQUFlLE1BQzNJdEIsRUFBYTZCLE1BQVEsVUFBVXhCLFNBQVNnQixjQUFjLG1CQUFtQkMsYUFBZSxXQUN4RixNQUVKLEtBQUtwQixFQUFTVyxXQUFXLHlCQUNyQmIsRUFBYTJCLFFBQVUsZ0JBQWdCdEIsU0FBU2dCLGNBQWMsa0JBQWtCQyxhQUFlLE1BQy9GdEIsRUFBYTZCLE1BQVEsZ0JBQ3JCLE1BRUosS0FBSzNCLEVBQVNXLFdBQVcsa0JBQW1CLENBQ3hDLE1BQU1DLEVBQWdCVCxTQUNqQmdCLGNBQWMsNkJBQ2RtQixTQUFTLEdBQUduQixjQUFjLFVBQ3pCQyxhQUFhQyxjQUFla0IsRUFBZ0JoQixPQUFPVixNQUFNQyxLQUFLWCxTQUFTWSxpQkFBaUIsY0FBY0gsWUFBd0I0QixJQUFJLElBQUlwQixhQUFjcUIsRUFBVWxCLE9BQU9wQixTQUFTZ0IsY0FBYyx1QkFBdUJDLFlBQVksSUFDck90QixFQUFhMkIsUUFBVSxnQkFBZ0J0QixTQUFTZ0IsY0FBYyw0QkFBNEJDLGFBQWUsTUFDekd0QixFQUFhNkIsTUFBUSxXQUFXSixPQUFPcEIsU0FDbENnQixjQUFjLCtCQUNiQyxhQUFhc0IsUUFBUSxXQUFZLEtBQUtiLGtCQUFvQixPQUFPRCxNQUFNVyxLQUFtQkEsRUFDMUYsSUFDQUEsRUFBY1Ysa0JBQW9CLFNBQVNELE1BQU1hLEtBQWFBLEVBQzlELFlBQ0FBLEVBQVUsRUFDTixHQUFHQSxFQUFRWiwyQkFDWCxHQUFHWSxhQUNUbkMsR0FBZ0JELElBQ2hCUCxFQUFhNkMsUUFBVSxDQUNuQixDQUNJQyxNQUFPLFlBQ1BDLElBQUs1QyxLQUliWCxNQUFNQyxTQUNGZ0IsS0FDQ1QsRUFBYWdDLGVBQWdCaEMsRUFBYWlDLGNBQ3ZDNUMsU0FBUzZDLGNBQWNDLEtBQUtDLE1BQU01QyxNQUFNRyxhQUFjd0MsS0FBS0MsTUFBTTVDLE1BQU1FLFlBRTNFRixNQUFNSSxRQUNOSSxFQUFhcUMsY0FBZ0IsZ0RBQzdCckMsRUFBYXNDLGVBQWlCLGdCQUN2QnRDLEVBQWFnQyxzQkFDYmhDLEVBQWFpQyxlQUdwQmpDLEVBQWFxQyxjQUFnQiwrQ0FDN0JyQyxFQUFhc0MsZUFBaUIsWUFHdEN0QyxFQUFhdUMsS0FBTyxFQUNwQixLQUNKLENBQ0EsS0FBS3JDLEVBQVNXLFdBQVcsaUJBQ3JCYixFQUFhMkIsUUFBVSx3QkFDdkIsTUFFSixRQUFTLENBQ0wsTUFBTXFCLEVBQWUsSUFBSUMsZ0JBQWdCN0MsR0FBUzhDLEVBQVNGLEVBQWFHLElBQUksVUFBV0MsRUFBUSxDQUMzRixRQUFTLENBQ0x6QixRQUFTLHFCQUViLGdCQUFpQixDQUNiQSxRQUFTLCtCQUViLFdBQVksQ0FDUkEsUUFBUyxZQUFhdUIsRUFBa0IsR0FBVCxjQUFtQkEsRUFBUyxrQkFBa0JBLElBQVcsTUFFNUYsc0JBQXVCLENBQ25CdkIsUUFBUyxzQ0FFYixVQUFXLENBQ1BBLFFBQVMsaUJBQWlCcUIsRUFBYUcsSUFBSSxZQUFjLFlBR2pFLElBQUssTUFBT0UsRUFBTXZELEtBQVN3RCxPQUFPQyxRQUFRSCxHQUNsQ2xELEVBQVNXLFdBQVd3QyxLQUNwQnJELEVBQWUsSUFBS0EsS0FBaUJGLElBQ2hDRSxFQUFhNkMsU0FBV3RDLElBQ3pCUCxFQUFhNkMsUUFBVSxDQUNuQixDQUNJQyxNQUFPLGVBQ1BDLElBQUs1QyxNQU1wQkgsRUFBYTJCLFVBQ2QzQixFQUFhMkIsUUFBVSxjQUN2QjNCLEVBQWFxQyxjQUFnQixrREFFakMsS0FDSixFQUVBckMsRUFBYWlDLGNBQWdCakMsRUFBYWdDLGlCQUMxQ2hDLEVBQWF1QyxLQUFPLEdBQ3hCbEQsU0FBU21FLFlBQVl4RCxFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjEyMDg0NDA5MTY0NjE4ODc0ODhcIixcbn0pO1xubGV0IHZpZGVvID0ge1xuICAgIGV4aXN0czogZmFsc2UsXG4gICAgZHVyYXRpb246IDAsXG4gICAgY3VycmVudFRpbWU6IDAsXG4gICAgcGF1c2VkOiB0cnVlLFxufTtcbnByZXNlbmNlLm9uKFwiaUZyYW1lRGF0YVwiLCAoZGF0YSkgPT4ge1xuICAgIHZpZGVvID0gZGF0YTtcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQS9BbmlDcnVzaC9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIGNvbnN0IHsgcGF0aG5hbWUsIGhyZWYsIHNlYXJjaCB9ID0gZG9jdW1lbnQubG9jYXRpb24sIFtzaG93QnV0dG9ucywgc2hvd1cyQnV0dG9uLCBzaG93VGltZXN0YW1wc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwid2F0Y2gyZ2V0aGVySm9pblJvb21CdXR0b25cIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lc3RhbXBzXCIpLFxuICAgIF0pO1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvd2F0Y2gvXCIpOiB7XG4gICAgICAgICAgICBjb25zdCBzdHJlYW1pbmdUeXBlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QgLnctdHlwZVwiKS52YWx1ZXMoKSlcbiAgICAgICAgICAgICAgICAuZmluZChkaXYgPT4gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuYXZhaWwgLmFjdGl2ZVwiKSlcbiAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1zdWIgLm5hbWVcIilcbiAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLCBjdXJyZW50RXBpc29kZU51bWJlciA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZSAuYnRuLWVwXCIpPy50ZXh0Q29udGVudCksIHRvdGFsRXBpc29kZU51bWJlciA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaXRlbS5pdGVtLSR7c3RyZWFtaW5nVHlwZX0gLm5hbWVgKVxuICAgICAgICAgICAgICAgID8udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgV2F0Y2hpbmcgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlb1dpZGdldC5kLW5vbmVcIik/LnRleHRDb250ZW50ID8/IFwiP1wifWA7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYW5pbWUtdGh1bWJuYWlsLWltZ1wiKVxuICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgRXBpc29kZSAke2lzTmFOKGN1cnJlbnRFcGlzb2RlTnVtYmVyKSB8fCAhY3VycmVudEVwaXNvZGVOdW1iZXJcbiAgICAgICAgICAgICAgICA/IFwiP1wiXG4gICAgICAgICAgICAgICAgOiBjdXJyZW50RXBpc29kZU51bWJlci50b0xvY2FsZVN0cmluZygpfS8ke2lzTmFOKHRvdGFsRXBpc29kZU51bWJlcikgfHwgIXRvdGFsRXBpc29kZU51bWJlclxuICAgICAgICAgICAgICAgID8gXCI/XCJcbiAgICAgICAgICAgICAgICA6IHRvdGFsRXBpc29kZU51bWJlci50b0xvY2FsZVN0cmluZygpfWA7XG4gICAgICAgICAgICBpZiAodmlkZW8uZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3dUaW1lc3RhbXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMoTWF0aC5mbG9vcih2aWRlby5jdXJyZW50VGltZSksIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUGF1c2VkXCI7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUGxheWluZ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS50eXBlID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuc3RhcnRzV2l0aChcIi9kZXRhaWwvXCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1hbmltZSAuaW5mb3IgLmhlYWRpbmcgLm1haW4gLmhlYWRpbmctbWQubWItMC50ZXh0LXdoaXRlXCIpPy50ZXh0Q29udGVudCB8fCBcIj9cIn1gO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFJhdGluZyAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUgLnMtbWFya1wiKT8udGV4dENvbnRlbnQgfHwgXCI/XCJ9LzEwLjBgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5zdGFydHNXaXRoKFwiL3dhdGNoMmdldGhlci9jcmVhdGUvXCIpOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBXYXRjaDJnZXRoZXIgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFuaW1lLW5hbWUgYVwiKT8udGV4dENvbnRlbnQgfHwgXCI/XCJ9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ3JlYXRpbmcgcm9vbVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBwYXRobmFtZS5zdGFydHNXaXRoKFwiL3dhdGNoMmdldGhlci9cIik6IHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbWluZ1R5cGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmxpdmUtaGVhZGVyIC5vdGhlci1pdGVtc1wiKVxuICAgICAgICAgICAgICAgIC5jaGlsZHJlblsxXS5xdWVyeVNlbGVjdG9yKFwiLnRleHRcIilcbiAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLCB0b3RhbEVwaXNvZGVzID0gTnVtYmVyKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLml0ZW0uaXRlbS0ke3N0cmVhbWluZ1R5cGV9IC50ZXh0YCkpLmF0KC0xKT8udGV4dENvbnRlbnQpLCB2aWV3ZXJzID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS12aWV3ZXJzIHNwYW5cIik/LnRleHRDb250ZW50WzBdKTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFdhdGNoMmdldGhlciAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5pbWUtYmxvY2sgLm1haW4gaDMgYVwiKT8udGV4dENvbnRlbnQgfHwgXCI/XCJ9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBFcGlzb2RlICR7TnVtYmVyKGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIub3RoZXItaXRlbXMgLml0ZW0tZXAgc3BhblwiKVxuICAgICAgICAgICAgICAgID8udGV4dENvbnRlbnQ/LnJlcGxhY2UoXCJFcGlzb2RlIFwiLCBcIlwiKSkudG9Mb2NhbGVTdHJpbmcoKSB8fCBcIj9cIn0vJHtpc05hTih0b3RhbEVwaXNvZGVzKSB8fCAhdG90YWxFcGlzb2Rlc1xuICAgICAgICAgICAgICAgID8gXCI/XCJcbiAgICAgICAgICAgICAgICA6IHRvdGFsRXBpc29kZXMudG9Mb2NhbGVTdHJpbmcoKSB8fCBcIj9cIn0gfCAke2lzTmFOKHZpZXdlcnMpIHx8ICF2aWV3ZXJzXG4gICAgICAgICAgICAgICAgPyBcIj8gdmlld2Vyc1wiXG4gICAgICAgICAgICAgICAgOiB2aWV3ZXJzID4gMVxuICAgICAgICAgICAgICAgICAgICA/IGAke3ZpZXdlcnMudG9Mb2NhbGVTdHJpbmcoKX0gdmlld2Vyc2BcbiAgICAgICAgICAgICAgICAgICAgOiBgJHt2aWV3ZXJzfSB2aWV3ZXJgfWA7XG4gICAgICAgICAgICBpZiAoc2hvd1cyQnV0dG9uICYmIHNob3dCdXR0b25zKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkpvaW4gUm9vbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlkZW8uZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3dUaW1lc3RhbXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlLmdldFRpbWVzdGFtcHMoTWF0aC5mbG9vcih2aWRlby5jdXJyZW50VGltZSksIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUGF1c2VkXCI7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUGxheWluZ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS50eXBlID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgcGF0aG5hbWUuc3RhcnRzV2l0aChcIi93YXRjaDJnZXRoZXJcIik6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBXYXRjaDJnZXRoZXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKSwgbGV0dGVyID0gc2VhcmNoUGFyYW1zLmdldChcImxldHRlclwiKSwgcGFnZXMgPSB7XG4gICAgICAgICAgICAgICAgXCIvaG9tZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgaG9tZXBhZ2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiL21vc3QtcG9wdWxhclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQnJvd3NpbmcgbW9zdCBwb3B1bGFyIGFuaW1lXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIi9hei1saXN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogYEJyb3dzaW5nICR7IWxldHRlciA/IFwiYWxsIFwiIDogXCJcIn1hbmltZSR7bGV0dGVyID8gYCBzdGFydGluZyB3aXRoICR7bGV0dGVyfWAgOiBcIlwifWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIi9lc3RpbWF0ZWQtc2NoZWR1bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkJyb3dzaW5nIGVzdGltYXRlZCBhbmltZSBzY2hlZHVsZXNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiL3NlYXJjaFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IGBTZWFyY2hpbmcgZm9yICR7c2VhcmNoUGFyYW1zLmdldChcImtleXdvcmRcIikgfHwgXCJhbmltZVwifWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtwYXRoLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhwYWdlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aChwYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEgPSB7IC4uLnByZXNlbmNlRGF0YSwgLi4uZGF0YSB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXNlbmNlRGF0YS5idXR0b25zICYmIHNob3dCdXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkJyb3dzZSBBbmltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXByZXNlbmNlRGF0YS5kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wICYmIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcClcbiAgICAgICAgcHJlc2VuY2VEYXRhLnR5cGUgPSAzO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNjVUpCUVhGQ08wTkJReTlDTEVOQlFVTXNRMEZCUXp0QlFVbElMRWxCUVVrc1MwRkJTeXhIUVVGSE8wbEJRMWdzVFVGQlRTeEZRVUZGTEV0QlFVczdTVUZEWWl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOWUxGZEJRVmNzUlVGQlJTeERRVUZETzBsQlEyUXNUVUZCVFN4RlFVRkZMRWxCUVVrN1EwRkRXaXhEUVVGRE8wRkJSVVlzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZEVml4WlFVRlpMRVZCUTFvc1EwRkJReXhKUVV0QkxFVkJRVVVzUlVGQlJUdEpRVU5LTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRaQ3hEUVVGRExFTkJRMFFzUTBGQlF6dEJRVU5HTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRWxCUVVrc1dVRkJXU3hIUVVGcFFqdFJRVU5vUXl4aFFVRmhMR2xGUVVGaE8wdEJRekZDTEVOQlFVTTdTVUZEUml4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVOdVJDeERRVUZETEZkQlFWY3NSVUZCUlN4WlFVRlpMRVZCUVVVc1kwRkJZeXhEUVVGRExFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUXk5RUxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVMEZCVXl4RFFVRkRPMUZCUTNaRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNORUpCUVRSQ0xFTkJRVU03VVVGRE1VUXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJWU3haUVVGWkxFTkJRVU03UzBGRE1VTXNRMEZCUXl4RFFVRkRPMGxCUTBvc1VVRkJVU3hKUVVGSkxFVkJRVVU3VVVGRFlpeExRVUZMTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVU01UWl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRMjVFTzJsQ1FVTkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0blFrRkRha1FzUlVGQlJTeGhRVUZoTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03WjBKQlEyeERMRVZCUVVVc1YwRkJWeXhGUVVGRkxGZEJRVmNzUlVGQlJTeEZRVU0zUWl4dlFrRkJiMElzUjBGQlJ5eE5RVUZOTEVOQlF6VkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRM1JFTEVWQlEwUXNhMEpCUVd0Q0xFZEJRVWNzVFVGQlRTeERRVU14UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHTkJRV01zWVVGQllTeFJRVUZSTEVOQlFVTTdaMEpCUXpGRUxFVkJRVVVzVjBGQlZ5eERRVU5rTEVOQlFVTTdXVUZGU0N4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRM1JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSVUZCUlN4WFFVRlhMRWxCUVVrc1IwRkROMFFzUlVGQlJTeERRVUZETzFsQlEwZ3NXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhSUVVGUk8ybENRVU51UXl4aFFVRmhMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTTdhVUpCUTNKRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVVjBRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZkQlEzQkNMRXRCUVVzc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTzJkQ1FVTnVSQ3hEUVVGRExFTkJRVU1zUjBGQlJ6dG5Ra0ZEVEN4RFFVRkRMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNZMEZCWXl4RlFVTjJReXhKUVVORExFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENPMmRDUVVNdlF5eERRVUZETEVOQlFVTXNSMEZCUnp0blFrRkRUQ3hEUVVGRExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1kwRkJZeXhGUVVOeVF5eEZRVUZGTEVOQlFVTTdXVUZEU0N4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEycENMRWxCUVVrc1kwRkJZeXhGUVVGRk8yOUNRVU51UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0M1FrRkRka1FzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUXpkQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVNeFFpeERRVUZETzJsQ1FVTklPMmRDUVVORUxFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0dlFrRkRha0lzV1VGQldTeERRVUZETEdGQlFXRXNhMFJCUVdVc1EwRkJRenR2UWtGRE1VTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhSUVVGUkxFTkJRVU03YjBKQlEzWkRMRTlCUVU4c1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF6dHZRa0ZEYmtNc1QwRkJUeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzJsQ1FVTnFRenR4UWtGQlRUdHZRa0ZEVGl4WlFVRlpMRU5CUVVNc1lVRkJZU3hwUkVGQll5eERRVUZETzI5Q1FVTjZReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXp0cFFrRkRlRU03WVVGRFJEdFpRVU5FTEZsQlFWa3NRMEZCUXl4SlFVRkpMRWxCUVhkQ0xFTkJRVU03V1VGRE1VTXNUVUZCVFR0VFFVTk9PMUZCUTBRc1MwRkJTeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja01zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVTjBRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4blJVRkJaMFVzUTBGRGFFVXNSVUZCUlN4WFFVRlhMRWxCUVVrc1IwRkRia0lzUlVGQlJTeERRVUZETzFsQlEwZ3NXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVOd1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlFVVXNWMEZCVnl4SlFVRkpMRWRCUXpGRUxFOUJRVThzUTBGQlF6dFpRVU5TTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eDFRa0ZCZFVJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhuUWtGRGRFSXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhsUVVGbExFTkJRVU1zUlVGQlJTeFhRVUZYTEVsQlFVa3NSMEZEZWtRc1JVRkJSU3hEUVVGRE8xbEJRMGdzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4bFFVRmxMRU5CUVVNN1dVRkRja01zVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelF5eE5RVUZOTEdGQlFXRXNSMEZCUnl4UlFVRlJPMmxDUVVNelFpeGhRVUZoTEVOQlFVTXNNa0pCUVRKQ0xFTkJRVU03YVVKQlF6RkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRPMmRDUVVOdVF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4WFFVRlhMRVZCUVVVc1JVRkROMElzWVVGQllTeEhRVUZITEUxQlFVMHNRMEZEY2tJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGRFZDeFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eGhRVUZoTEZGQlFWRXNRMEZCUXl4RFFVTTVSQ3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkRja0lzUlVGRFJDeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVTm1MRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlF6VkVMRU5CUVVNN1dVRkRTQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVTjBRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFVkJRVVVzVjBGQlZ5eEpRVUZKTEVkQlEyNUZMRVZCUVVVc1EwRkJRenRaUVVOSUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZEY0VJc1RVRkJUU3hEUVVOTUxGRkJRVkU3YVVKQlEwNHNZVUZCWVN4RFFVRkRMRFJDUVVFMFFpeERRVUZETzJkQ1FVTTFReXhGUVVGRkxGZEJRVmNzUlVGQlJTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVOMlF5eERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRWRCUTNaQ0xFbEJRME1zUzBGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZVHRuUWtGRGNrTXNRMEZCUXl4RFFVRkRMRWRCUVVjN1owSkJRMHdzUTBGQlF5eERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRVZCUVVVc1NVRkJTU3hIUVVOMFF5eE5RVU5ETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVTg3WjBKQlEzcENMRU5CUVVNc1EwRkJReXhYUVVGWE8yZENRVU5pTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJRenR2UWtGRFlpeERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRkxGVkJRVlU3YjBKQlEzWkRMRU5CUVVNc1EwRkJReXhIUVVGSExFOUJRVThzVTBGRFpDeEZRVUZGTEVOQlFVTTdXVUZEU0N4SlFVRkpMRmxCUVZrc1NVRkJTU3hYUVVGWExFVkJRVVU3WjBKQlEyaERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3YjBKQlEzUkNPM2RDUVVORExFdEJRVXNzUlVGQlJTeFhRVUZYTzNkQ1FVTnNRaXhIUVVGSExFVkJRVVVzU1VGQlNUdHhRa0ZEVkR0cFFrRkRSQ3hEUVVGRE8yRkJRMFk3V1VGRFJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRMnBDTEVsQlFVa3NZMEZCWXl4RlFVRkZPMjlDUVVOdVFpeERRVUZETEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF6dDNRa0ZEZGtRc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlF6ZENMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVTXhRaXhEUVVGRE8ybENRVU5JTzJkQ1FVTkVMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdHZRa0ZEYWtJc1dVRkJXU3hEUVVGRExHRkJRV0VzYTBSQlFXVXNRMEZCUXp0dlFrRkRNVU1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4UlFVRlJMRU5CUVVNN2IwSkJRM1pETEU5QlFVOHNXVUZCV1N4RFFVRkRMR05CUVdNc1EwRkJRenR2UWtGRGJrTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8ybENRVU5xUXp0eFFrRkJUVHR2UWtGRFRpeFpRVUZaTEVOQlFVTXNZVUZCWVN4cFJFRkJZeXhEUVVGRE8yOUNRVU42UXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExGTkJRVk1zUTBGQlF6dHBRa0ZEZUVNN1lVRkRSRHRaUVVORUxGbEJRVmtzUTBGQlF5eEpRVUZKTEVsQlFYZENMRU5CUVVNN1dVRkRNVU1zVFVGQlRUdFRRVU5PTzFGQlEwUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDFRa0ZCZFVJc1EwRkJRenRaUVVNdlF5eE5RVUZOTzFOQlEwNDdVVUZEUkN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVOU0xFMUJRVTBzV1VGQldTeEhRVUZITEVsQlFVa3NaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVNdlF5eE5RVUZOTEVkQlFVY3NXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGRGJrTXNTMEZCU3l4SFFVRnBRenRuUWtGRGNrTXNUMEZCVHl4RlFVRkZPMjlDUVVOU0xFOUJRVThzUlVGQlJTeHRRa0ZCYlVJN2FVSkJRelZDTzJkQ1FVTkVMR1ZCUVdVc1JVRkJSVHR2UWtGRGFFSXNUMEZCVHl4RlFVRkZMRFpDUVVFMlFqdHBRa0ZEZEVNN1owSkJRMFFzVlVGQlZTeEZRVUZGTzI5Q1FVTllMRTlCUVU4c1JVRkJSU3haUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVVVGRGVrTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhyUWtGQmEwSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRM1pETEVWQlFVVTdhVUpCUTBZN1owSkJRMFFzY1VKQlFYRkNMRVZCUVVVN2IwSkJRM1JDTEU5QlFVOHNSVUZCUlN4dlEwRkJiME03YVVKQlF6ZERPMmRDUVVORUxGTkJRVk1zUlVGQlJUdHZRa0ZEVml4UFFVRlBMRVZCUVVVc2FVSkJRV2xDTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzVDBGQlR5eEZRVUZGTzJsQ1FVTnNSVHRoUVVORUxFTkJRVU03V1VGRFNDeExRVUZMTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRGFrUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzI5Q1FVTTVRaXhaUVVGWkxFZEJRVWNzUlVGQlJTeEhRVUZITEZsQlFWa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1JVRkJSU3hEUVVGRE8yOUNRVU0xUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzU1VGQlNTeFhRVUZYTEVWQlFVVTdkMEpCUTNwRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdORUpCUTNSQ08yZERRVU5ETEV0QlFVc3NSVUZCUlN4alFVRmpPMmREUVVOeVFpeEhRVUZITEVWQlFVVXNTVUZCU1RzMlFrRkRWRHQ1UWtGRFJDeERRVUZETzNGQ1FVTkdPMmxDUVVORU8yRkJRMFE3V1VGRFJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRE1VSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03WjBKQlEzSkRMRmxCUVZrc1EwRkJReXhoUVVGaExHMUVRVUZuUWl4RFFVRkRPMkZCUXpORE8xbEJRMFFzVFVGQlRUdFRRVU5PTzB0QlEwUTdTVUZEUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhaUVVGWkxFbEJRVWtzV1VGQldTeERRVUZETEdOQlFXTTdVVUZETTBRc1dVRkJXU3hEUVVGRExFbEJRVWtzU1VGQmQwSXNRMEZCUXp0SlFVTXpReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTNCRExFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJ2aWRlbyIsImV4aXN0cyIsImR1cmF0aW9uIiwiY3VycmVudFRpbWUiLCJwYXVzZWQiLCJvbiIsImRhdGEiLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJwYXRobmFtZSIsImhyZWYiLCJzZWFyY2giLCJkb2N1bWVudCIsImxvY2F0aW9uIiwic2hvd0J1dHRvbnMiLCJzaG93VzJCdXR0b24iLCJzaG93VGltZXN0YW1wcyIsIlByb21pc2UiLCJhbGwiLCJnZXRTZXR0aW5nIiwic3RhcnRzV2l0aCIsInN0cmVhbWluZ1R5cGUiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwidmFsdWVzIiwiZmluZCIsImRpdiIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRvTG93ZXJDYXNlIiwiY3VycmVudEVwaXNvZGVOdW1iZXIiLCJOdW1iZXIiLCJ0b3RhbEVwaXNvZGVOdW1iZXIiLCJkZXRhaWxzIiwiZ2V0QXR0cmlidXRlIiwic3RhdGUiLCJpc05hTiIsInRvTG9jYWxlU3RyaW5nIiwic3RhcnRUaW1lc3RhbXAiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwiTWF0aCIsImZsb29yIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0IiwidHlwZSIsImNoaWxkcmVuIiwidG90YWxFcGlzb2RlcyIsImF0Iiwidmlld2VycyIsInJlcGxhY2UiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsZXR0ZXIiLCJnZXQiLCJwYWdlcyIsInBhdGgiLCJPYmplY3QiLCJlbnRyaWVzIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;