var __webpack_exports__={};const presence=new Presence({clientId:"715667985267949649"});let title,subTitle,chapter,quiz,search;const browsingTimestamp=Math.floor(Date.now()/1e3),path=document.location.pathname;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/C/CliffsNotes/assets/logo.png",startTimestamp:browsingTimestamp};"/"===path?e.details="Viewing Home":path.includes("/literature/")?(title=document.querySelector("#mainTag > section > div:nth-child(1) > div.small-12.medium-9.columns > div.title-wrapper > h1"),subTitle=document.querySelector("#mainTag > div.row.background-white > div.small-12.medium-9.columns.left-rail-column.clear-padding-for-small-only > div > div.small-12.medium-9.columns > article > h2 > span:nth-child(2)"),chapter=document.querySelector("#mainTag > div.row.background-white > div.small-12.medium-9.columns.left-rail-column.clear-padding-for-small-only > div > div.small-12.medium-9.columns > article > h2"),quiz=document.querySelector("#headerid"),title&&chapter?(e.details=title.textContent,e.state=chapter.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading"):title&&subTitle?(e.details=title.textContent,e.state=subTitle.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading"):quiz?e.details="Taking a Quiz":(title=document.querySelector("#mainTag > div.row.background-white > div.small-12.medium-9.columns.left-rail-column.clear-padding-for-small-only > div > div.small-12.medium-9.columns > div > div > div > div.small-12.medium-12.columns.clear-padding > article > h2"),title&&(e.details=title.textContent))):path.includes("/test-prep")?(title=document.querySelector("#mainTag > section > div:nth-child(1) > div.small-12.medium-9.columns > div.title-wrapper > h1"),subTitle=document.querySelector("#mainTag > div.row.background-white > div.small-12.medium-9.columns.left-rail-column.clear-padding-for-small-only > div > div.small-12.medium-9.columns > article > h2 > span:nth-child(2)"),chapter=document.querySelector("#mainTag > div.row.background-white > div.small-12.medium-9.columns.left-rail-column.clear-padding-for-small-only > div > div.small-12.medium-9.columns > article > h2"),quiz=document.querySelector("#headerid"),title&&chapter?(e.details=title.textContent,e.state=chapter.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading"):title&&subTitle?(e.details=title.textContent,e.state=subTitle.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading"):e.details=quiz?"Taking a Quiz":"Viewing Test Prep"):path.includes("/study-guides/")?(title=document.querySelector("#phsubheader_0_headerTitle"),subTitle=document.querySelector("#mainTag > div.row.background-white > div.small-12.medium-9.columns.left-rail-column.clear-padding-for-small-only > div > div.small-12.medium-9.columns > div > div > h2"),chapter=document.querySelector("#mainTag > div.row.background-white > div.small-12.medium-9.columns.left-rail-column.clear-padding-for-small-only > div > div.small-12.medium-9.columns > article > h2"),quiz=document.querySelector("#headerid"),title&&chapter?(e.details=title.textContent,e.state=chapter.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading"):title&&subTitle?(e.details=title.textContent,e.state=subTitle.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.smallImageText="Reading"):e.details=quiz?"Taking a Quiz":"Viewing Study Guides"):path.includes("/search")?(search=document.querySelector("#phsection1_1_phmiddlesection_0_searchResults > div > h3 > span"),search&&(e.details="Searching:",e.state=search.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.smallImageText="Searching")):path.includes("/discover-")?(title=document.querySelector("#mainTag > section > div:nth-child(1) > div > div > h1"),e.details=`Viewing ${title.textContent}`):e.details="/disclaimer"===path?"Viewing Disclaimer":"Viewing a Special Page",e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZCxJQUFJQyxNQUFPQyxTQUFVQyxRQUFTQyxLQUFNQyxPQUNwQyxNQUFNQyxrQkFBb0JDLEtBQUtDLE1BQU1DLEtBQUtDLE1BQVEsS0FBT0MsS0FBT0MsU0FBU0MsU0FBU0MsU0FDbEZoQixTQUFTaUIsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLG1FQUNmQyxlQUFnQmIsbUJBRVAsTUFBVEssS0FDQU0sRUFBYUcsUUFBVSxlQUNsQlQsS0FBS1UsU0FBUyxpQkFDbkJwQixNQUFRVyxTQUFTVSxjQUFjLGtHQUMvQnBCLFNBQVdVLFNBQVNVLGNBQWMsOExBQ2xDbkIsUUFBVVMsU0FBU1UsY0FBYywwS0FDakNsQixLQUFPUSxTQUFTVSxjQUFjLGFBQzFCckIsT0FBU0UsU0FDVGMsRUFBYUcsUUFBVW5CLE1BQU1zQixZQUM3Qk4sRUFBYU8sTUFBUXJCLFFBQVFvQixZQUM3Qk4sRUFBYVEsY0FBZ0Isa0RBQzdCUixFQUFhUyxlQUFpQixXQUV6QnpCLE9BQVNDLFVBQ2RlLEVBQWFHLFFBQVVuQixNQUFNc0IsWUFDN0JOLEVBQWFPLE1BQVF0QixTQUFTcUIsWUFDOUJOLEVBQWFRLGNBQWdCLGtEQUM3QlIsRUFBYVMsZUFBaUIsV0FFekJ0QixLQUNMYSxFQUFhRyxRQUFVLGlCQUV2Qm5CLE1BQVFXLFNBQVNVLGNBQWMsMk9BQzNCckIsUUFDQWdCLEVBQWFHLFFBQVVuQixNQUFNc0IsZUFHaENaLEtBQUtVLFNBQVMsZUFDbkJwQixNQUFRVyxTQUFTVSxjQUFjLGtHQUMvQnBCLFNBQVdVLFNBQVNVLGNBQWMsOExBQ2xDbkIsUUFBVVMsU0FBU1UsY0FBYywwS0FDakNsQixLQUFPUSxTQUFTVSxjQUFjLGFBQzFCckIsT0FBU0UsU0FDVGMsRUFBYUcsUUFBVW5CLE1BQU1zQixZQUM3Qk4sRUFBYU8sTUFBUXJCLFFBQVFvQixZQUM3Qk4sRUFBYVEsY0FBZ0Isa0RBQzdCUixFQUFhUyxlQUFpQixXQUV6QnpCLE9BQVNDLFVBQ2RlLEVBQWFHLFFBQVVuQixNQUFNc0IsWUFDN0JOLEVBQWFPLE1BQVF0QixTQUFTcUIsWUFDOUJOLEVBQWFRLGNBQWdCLGtEQUM3QlIsRUFBYVMsZUFBaUIsV0FHOUJULEVBQWFHLFFBRFJoQixLQUNrQixnQkFFQSxxQkFFdEJPLEtBQUtVLFNBQVMsbUJBQ25CcEIsTUFBUVcsU0FBU1UsY0FBYyw4QkFDL0JwQixTQUFXVSxTQUFTVSxjQUFjLDRLQUNsQ25CLFFBQVVTLFNBQVNVLGNBQWMsMEtBQ2pDbEIsS0FBT1EsU0FBU1UsY0FBYyxhQUMxQnJCLE9BQVNFLFNBQ1RjLEVBQWFHLFFBQVVuQixNQUFNc0IsWUFDN0JOLEVBQWFPLE1BQVFyQixRQUFRb0IsWUFDN0JOLEVBQWFRLGNBQWdCLGtEQUM3QlIsRUFBYVMsZUFBaUIsV0FFekJ6QixPQUFTQyxVQUNkZSxFQUFhRyxRQUFVbkIsTUFBTXNCLFlBQzdCTixFQUFhTyxNQUFRdEIsU0FBU3FCLFlBQzlCTixFQUFhUSxjQUFnQixrREFDN0JSLEVBQWFTLGVBQWlCLFdBRzlCVCxFQUFhRyxRQURSaEIsS0FDa0IsZ0JBRUEsd0JBRXRCTyxLQUFLVSxTQUFTLFlBQ25CaEIsT0FBU08sU0FBU1UsY0FBYyxtRUFDNUJqQixTQUNBWSxFQUFhRyxRQUFVLGFBQ3ZCSCxFQUFhTyxNQUFRbkIsT0FBT2tCLFlBQzVCTixFQUFhUSxjQUFnQixpREFDN0JSLEVBQWFTLGVBQWlCLGNBRzdCZixLQUFLVSxTQUFTLGVBQ25CcEIsTUFBUVcsU0FBU1UsY0FBYywwREFDL0JMLEVBQWFHLFFBQVUsV0FBV25CLE1BQU1zQixlQUd4Q04sRUFBYUcsUUFEQyxnQkFBVFQsS0FDa0IscUJBRUEseUJBQ3ZCTSxFQUFhRyxRQUNidEIsU0FBUzZCLFlBQVlWLEdBRXJCbkIsU0FBUzZCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzE1NjY3OTg1MjY3OTQ5NjQ5XCIsXG59KTtcbmxldCB0aXRsZSwgc3ViVGl0bGUsIGNoYXB0ZXIsIHF1aXosIHNlYXJjaDtcbmNvbnN0IGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIHBhdGggPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvQy9DbGlmZnNOb3Rlcy9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH07XG4gICAgaWYgKHBhdGggPT09IFwiL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBIb21lXCI7XG4gICAgZWxzZSBpZiAocGF0aC5pbmNsdWRlcyhcIi9saXRlcmF0dXJlL1wiKSkge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblRhZyA+IHNlY3Rpb24gPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2LnNtYWxsLTEyLm1lZGl1bS05LmNvbHVtbnMgPiBkaXYudGl0bGUtd3JhcHBlciA+IGgxXCIpO1xuICAgICAgICBzdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblRhZyA+IGRpdi5yb3cuYmFja2dyb3VuZC13aGl0ZSA+IGRpdi5zbWFsbC0xMi5tZWRpdW0tOS5jb2x1bW5zLmxlZnQtcmFpbC1jb2x1bW4uY2xlYXItcGFkZGluZy1mb3Itc21hbGwtb25seSA+IGRpdiA+IGRpdi5zbWFsbC0xMi5tZWRpdW0tOS5jb2x1bW5zID4gYXJ0aWNsZSA+IGgyID4gc3BhbjpudGgtY2hpbGQoMilcIik7XG4gICAgICAgIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5UYWcgPiBkaXYucm93LmJhY2tncm91bmQtd2hpdGUgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucy5sZWZ0LXJhaWwtY29sdW1uLmNsZWFyLXBhZGRpbmctZm9yLXNtYWxsLW9ubHkgPiBkaXYgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucyA+IGFydGljbGUgPiBoMlwiKTtcbiAgICAgICAgcXVpeiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyaWRcIik7XG4gICAgICAgIGlmICh0aXRsZSAmJiBjaGFwdGVyKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gY2hhcHRlci50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGl0bGUgJiYgc3ViVGl0bGUpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdWJUaXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocXVpeilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJUYWtpbmcgYSBRdWl6XCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5UYWcgPiBkaXYucm93LmJhY2tncm91bmQtd2hpdGUgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucy5sZWZ0LXJhaWwtY29sdW1uLmNsZWFyLXBhZGRpbmctZm9yLXNtYWxsLW9ubHkgPiBkaXYgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucyA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdi5zbWFsbC0xMi5tZWRpdW0tMTIuY29sdW1ucy5jbGVhci1wYWRkaW5nID4gYXJ0aWNsZSA+IGgyXCIpO1xuICAgICAgICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aC5pbmNsdWRlcyhcIi90ZXN0LXByZXBcIikpIHtcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5UYWcgPiBzZWN0aW9uID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdi5zbWFsbC0xMi5tZWRpdW0tOS5jb2x1bW5zID4gZGl2LnRpdGxlLXdyYXBwZXIgPiBoMVwiKTtcbiAgICAgICAgc3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5UYWcgPiBkaXYucm93LmJhY2tncm91bmQtd2hpdGUgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucy5sZWZ0LXJhaWwtY29sdW1uLmNsZWFyLXBhZGRpbmctZm9yLXNtYWxsLW9ubHkgPiBkaXYgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucyA+IGFydGljbGUgPiBoMiA+IHNwYW46bnRoLWNoaWxkKDIpXCIpO1xuICAgICAgICBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluVGFnID4gZGl2LnJvdy5iYWNrZ3JvdW5kLXdoaXRlID4gZGl2LnNtYWxsLTEyLm1lZGl1bS05LmNvbHVtbnMubGVmdC1yYWlsLWNvbHVtbi5jbGVhci1wYWRkaW5nLWZvci1zbWFsbC1vbmx5ID4gZGl2ID4gZGl2LnNtYWxsLTEyLm1lZGl1bS05LmNvbHVtbnMgPiBhcnRpY2xlID4gaDJcIik7XG4gICAgICAgIHF1aXogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlcmlkXCIpO1xuICAgICAgICBpZiAodGl0bGUgJiYgY2hhcHRlcikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGNoYXB0ZXIudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUmVhZGluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRpdGxlICYmIHN1YlRpdGxlKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc3ViVGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUmVhZGluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHF1aXopXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVGFraW5nIGEgUXVpelwiO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBUZXN0IFByZXBcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aC5pbmNsdWRlcyhcIi9zdHVkeS1ndWlkZXMvXCIpKSB7XG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaHN1YmhlYWRlcl8wX2hlYWRlclRpdGxlXCIpO1xuICAgICAgICBzdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblRhZyA+IGRpdi5yb3cuYmFja2dyb3VuZC13aGl0ZSA+IGRpdi5zbWFsbC0xMi5tZWRpdW0tOS5jb2x1bW5zLmxlZnQtcmFpbC1jb2x1bW4uY2xlYXItcGFkZGluZy1mb3Itc21hbGwtb25seSA+IGRpdiA+IGRpdi5zbWFsbC0xMi5tZWRpdW0tOS5jb2x1bW5zID4gZGl2ID4gZGl2ID4gaDJcIik7XG4gICAgICAgIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5UYWcgPiBkaXYucm93LmJhY2tncm91bmQtd2hpdGUgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucy5sZWZ0LXJhaWwtY29sdW1uLmNsZWFyLXBhZGRpbmctZm9yLXNtYWxsLW9ubHkgPiBkaXYgPiBkaXYuc21hbGwtMTIubWVkaXVtLTkuY29sdW1ucyA+IGFydGljbGUgPiBoMlwiKTtcbiAgICAgICAgcXVpeiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyaWRcIik7XG4gICAgICAgIGlmICh0aXRsZSAmJiBjaGFwdGVyKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gY2hhcHRlci50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGl0bGUgJiYgc3ViVGl0bGUpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBzdWJUaXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gXCJSZWFkaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocXVpeilcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJUYWtpbmcgYSBRdWl6XCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIFN0dWR5IEd1aWRlc1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoLmluY2x1ZGVzKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Boc2VjdGlvbjFfMV9waG1pZGRsZXNlY3Rpb25fMF9zZWFyY2hSZXN1bHRzID4gZGl2ID4gaDMgPiBzcGFuXCIpO1xuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU2VhcmNoaW5nOlwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gc2VhcmNoLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiU2VhcmNoaW5nXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aC5pbmNsdWRlcyhcIi9kaXNjb3Zlci1cIikpIHtcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5UYWcgPiBzZWN0aW9uID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRpdiA+IGgxXCIpO1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWV3aW5nICR7dGl0bGUudGV4dENvbnRlbnR9YDtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aCA9PT0gXCIvZGlzY2xhaW1lclwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBEaXNjbGFpbWVyXCI7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIFNwZWNpYWwgUGFnZVwiO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFVVklMRWxCUVVrc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJRenRCUVVNelF5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVU4wUkN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdRVUZEYmtNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJ4RExHRkJRV0VzUlVGRFdpeHJSVUZCYTBVN1VVRkRia1VzWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eERRVUZETzBsQlEwWXNTVUZCU1N4SlFVRkpMRXRCUVVzc1IwRkJSenRSUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZMEZCWXl4RFFVRkRPMU5CUTI1RUxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSVHRSUVVOMlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROMElzWjBkQlFXZEhMRU5CUTNwRkxFTkJRVU03VVVGRGVrSXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRMmhETERSTVFVRTBUQ3hEUVVOeVN5eERRVUZETzFGQlEzcENMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU12UWl4M1MwRkJkMHNzUTBGRGFrb3NRMEZCUXp0UlFVTjZRaXhKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNelF5eEpRVUZKTEV0QlFVc3NTVUZCU1N4UFFVRlBMRVZCUVVVN1dVRkRja0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRM3BETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU42UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0WlFVTTFReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTjRRenRoUVVGTkxFbEJRVWtzUzBGQlN5eEpRVUZKTEZGQlFWRXNSVUZCUlR0WlFVTTNRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRla01zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRekZETEZsQlFWa3NRMEZCUXl4aFFVRmhMRzlFUVVGcFFpeERRVUZETzFsQlF6VkRMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVTBGQlV5eERRVUZETzFOQlEzaERPMkZCUVUwc1NVRkJTU3hKUVVGSk8xbEJRVVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4bFFVRmxMRU5CUVVNN1lVRkRia1E3V1VGRFNpeExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkROMElzZVU5QlFYbFBMRU5CUTJ4T0xFTkJRVU03V1VGRGVrSXNTVUZCU1N4TFFVRkxPMmRDUVVGRkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOd1JEdExRVU5FTzFOQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTzFGQlEzWkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0zUWl4blIwRkJaMGNzUTBGRGVrVXNRMEZCUXp0UlFVTjZRaXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEYUVNc05FeEJRVFJNTEVOQlEzSkxMRU5CUVVNN1VVRkRla0lzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXk5Q0xIZExRVUYzU3l4RFFVTnFTaXhEUVVGRE8xRkJRM3BDTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlF6TkRMRWxCUVVrc1MwRkJTeXhKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU55UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEZWtNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUTNwRExGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8xbEJRelZETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRM2hETzJGQlFVMHNTVUZCU1N4TFFVRkxMRWxCUVVrc1VVRkJVU3hGUVVGRk8xbEJRemRDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU42UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZETVVNc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBSQlFXbENMRU5CUVVNN1dVRkROVU1zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1UwRkRlRU03WVVGQlRTeEpRVUZKTEVsQlFVazdXVUZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF6czdXVUZEYmtRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenRMUVVOb1JEdFRRVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RlFVRkZPMUZCUXpORExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTNRaXcwUWtGQk5FSXNRMEZEVEN4RFFVRkRPMUZCUTNwQ0xGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTm9ReXd3UzBGQk1Fc3NRMEZEYmtvc1EwRkJRenRSUVVONlFpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRMMElzZDB0QlFYZExMRU5CUTJwS0xFTkJRVU03VVVGRGVrSXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZETTBNc1NVRkJTU3hMUVVGTExFbEJRVWtzVDBGQlR5eEZRVUZGTzFsQlEzSkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTjZReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRla01zV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03V1VGRE5VTXNXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhUUVVGVExFTkJRVU03VTBGRGVFTTdZVUZCVFN4SlFVRkpMRXRCUVVzc1NVRkJTU3hSUVVGUkxFVkJRVVU3V1VGRE4wSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEzcERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0WlFVTXhReXhaUVVGWkxFTkJRVU1zWVVGQllTeHZSRUZCYVVJc1EwRkJRenRaUVVNMVF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVONFF6dGhRVUZOTEVsQlFVa3NTVUZCU1R0WlFVRkZMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZET3p0WlFVTnVSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8wdEJRMjVFTzFOQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFGQlEzQkRMRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU01UWl4cFJVRkJhVVVzUTBGRE1VTXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFMUJRVTBzUlVGQlJUdFpRVU5ZTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1dVRkJXU3hEUVVGRE8xbEJRM0JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU40UXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h0UkVGQlowSXNRMEZCUXp0WlFVTXpReXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEZkQlFWY3NRMEZCUXp0VFFVTXhRenRMUVVORU8xTkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRk8xRkJRM1pETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNM1FpeDNSRUZCZDBRc1EwRkRha01zUTBGQlF6dFJRVU42UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGZEJRVmNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMHRCUTNSRU8xTkJRVTBzU1VGQlNTeEpRVUZKTEV0QlFVc3NZVUZCWVR0UlFVTm9ReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE96dFJRVU40UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMGxCUlhKRUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJ0aXRsZSIsInN1YlRpdGxlIiwiY2hhcHRlciIsInF1aXoiLCJzZWFyY2giLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwYXRoIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsImRldGFpbHMiLCJpbmNsdWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInN0YXRlIiwic21hbGxJbWFnZUtleSIsInNtYWxsSW1hZ2VUZXh0Iiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;