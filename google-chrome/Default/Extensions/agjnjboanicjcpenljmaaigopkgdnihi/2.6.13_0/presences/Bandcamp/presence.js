var __webpack_exports__={};const presence=new Presence({clientId:"640561280800915456"}),browsingTimestamp=Math.floor(Date.now()/1e3);let min,sec,time,min2,sec2,time2;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/B/Bandcamp/assets/logo.png",startTimestamp:browsingTimestamp},t=await presence.getSetting("cover");if("bandcamp.com"===document.location.hostname)if(null===document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-player > div > table > tbody > tr:nth-child(1) > td.play_cell > a > div"))e.details="Viewing:",document.location.pathname.endsWith("wishlist")?e.state=`${document.querySelector("#fan-bio-vm > div.fan-bio.owner.no-photo > div.fan-bio-inner > div.name > h1 > span").textContent}'s wishlist`:document.location.pathname.endsWith("genres")?e.state=`${document.querySelector("#fan-bio-vm > div.fan-bio.owner.no-photo > div.fan-bio-inner > div.name > h1 > span").textContent}'s following genres`:e.state=`${document.querySelector("#fan-bio-vm > div.fan-bio.owner.no-photo > div.fan-bio-inner > div.name > h1 > span").textContent}'s profile`;else if("playbutton playing"===document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-player > div > table > tbody > tr:nth-child(1) > td.play_cell > a > div").className){min=parseInt(document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-player > div > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_elapsed").textContent.split(":")[0]),sec=parseInt(document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-player > div > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_elapsed").textContent.split(":")[1]),min*=60,time=min+sec,min2=parseInt(document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-player > div > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_total").textContent.split(":")[0]),sec2=parseInt(document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-player > div > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_total").textContent.split(":")[1]),min2*=60,time2=min2+sec2;const[n,i]=presence.getTimestamps(time,time2);[e.startTimestamp,e.endTimestamp]=[n,i],e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Playing",t&&(e.largeImageKey=document.querySelector('[class="popupImage"]')?.firstElementChild?.getAttribute("src")??"bc"),e.details=document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-player > div > table > tbody > tr:nth-child(1) > td.track_cell > div > span.title-section > span").textContent,e.state=`Album: ${document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-body > div:nth-child(2) > span.detail-album > a").textContent} by: ${document.querySelector("#discover > div:nth-child(9) > div:nth-child(2) > div > div.detail-body > p.detail-artist > a").textContent}`}else e.details="Viewing:",e.state=document.querySelector("head > title").textContent;else"daily.bandcamp.com"===document.location.hostname?null!==document.querySelector("#content > div:nth-child(2) > h2")&&"/"!==document.location.pathname?(e.details="Reading article:",e.state=document.querySelector("#content > div:nth-child(2) > h2").textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):(e.details="Bandcamp Daily",e.state="Browsing..."):null!==document.querySelector("#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.play_cell > a > div")&&"playbutton playing"===document.querySelector("#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.play_cell > a > div").className&&document.location.pathname.includes("/album/")?(min=parseInt(document.querySelector("#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_elapsed").textContent.split(":")[0]),sec=parseInt(document.querySelector("#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_elapsed").textContent.split(":")[1]),min*=60,time=min+sec,min2=parseInt(document.querySelector("#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_total").textContent.split(":")[0]),sec2=parseInt(document.querySelector("#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_total").textContent.split(":")[1]),min2*=60,time2=min2+sec2,[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(time),Math.floor(time2)),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Playing",t&&(e.largeImageKey=document.querySelector('[class="popupImage"]')?.firstElementChild?.getAttribute("src")??"bc"),e.details=document.querySelector("#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.track_cell > div > span.title-section > a > span").textContent,e.state=`Album: ${document.querySelector("#name-section > h2").textContent.trim()} by: ${document.querySelector("#name-section > h3 > span > a").textContent}`):document.location.pathname.includes("/album/")?(e.details="Viewing album:",e.state=`${document.querySelector("#name-section > h2").textContent.trim()} by: ${document.querySelector("#name-section > h3 > span > a").textContent}`):null!==document.querySelector("#trackInfoInner > div.inline_player.one-track > table > tbody > tr:nth-child(1) > td.play_cell > a > div")&&"playbutton playing"===document.querySelector("#trackInfoInner > div.inline_player.one-track > table > tbody > tr:nth-child(1) > td.play_cell > a > div").className&&document.location.pathname.includes("/track/")?(min=parseInt(document.querySelector("#trackInfoInner > div.inline_player.one-track > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_elapsed").textContent.split(":")[0]),sec=parseInt(document.querySelector("#trackInfoInner > div.inline_player.one-track > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_elapsed").textContent.split(":")[1]),min*=60,time=min+sec,min2=parseInt(document.querySelector("#trackInfoInner > div.inline_player.one-track > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_total").textContent.split(":")[0]),sec2=parseInt(document.querySelector("#trackInfoInner > div.inline_player.one-track > table > tbody > tr:nth-child(1) > td.track_cell > div > span.time.secondaryText > span.time_total").textContent.split(":")[1]),min2*=60,time2=min2+sec2,[e.startTimestamp,e.endTimestamp]=presence.getTimestamps(Math.floor(time),Math.floor(time2)),e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/play.png",e.smallImageText="Playing",t&&(e.largeImageKey=document.querySelector('[class="popupImage"]')?.firstElementChild?.getAttribute("src")??"bc"),e.details=document.querySelector("#name-section > h2").textContent.trim(),e.state=`By: ${document.querySelector("#name-section > h3 > span > a").textContent}`):document.location.pathname.includes("/track/")?(e.details="Viewing track:",e.state=`${document.querySelector("#name-section > h2").textContent.trim()} by: ${document.querySelector("#name-section > h3 > span > a").textContent}`):(e.details="Viewing:",e.state=document.querySelector("head > title").textContent);e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUNBSCxFQUFhQyxjQUNUSSxTQUNLRyxjQUFjLHlCQUNiYSxtQkFBbUJDLGFBQWEsUUFBVSxNQUV4RHRCLEVBQWFTLFFBQVVKLFNBQ2xCRyxjQUFjLHNCQUNkSyxZQUFZVyxPQUNqQnhCLEVBQWFZLE1BQVEsT0FBT1AsU0FBU0csY0FBYyxpQ0FBaUNLLGVBRS9FUixTQUFTQyxTQUFTSSxTQUFTYSxTQUFTLFlBQ3pDdkIsRUFBYVMsUUFBVSxpQkFDdkJULEVBQWFZLE1BQVEsR0FBR1AsU0FDbkJHLGNBQWMsc0JBQ2RLLFlBQVlXLGNBQWNuQixTQUFTRyxjQUFjLGlDQUFpQ0ssZ0JBR3ZGYixFQUFhUyxRQUFVLFdBQ3ZCVCxFQUFhWSxNQUFRUCxTQUFTRyxjQUFjLGdCQUFnQkssYUFFNURiLEVBQWFTLFFBQ2J6QixTQUFTeUMsWUFBWXpCLEdBRXJCaEIsU0FBU3lDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjQwNTYxMjgwODAwOTE1NDU2XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmxldCBtaW4sIHNlYywgdGltZSwgbWluMiwgc2VjMiwgdGltZTI7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0IvQmFuZGNhbXAvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBjb3ZlciA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJjb3ZlclwiKTtcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT09IFwiYmFuZGNhbXAuY29tXCIpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzY292ZXIgPiBkaXY6bnRoLWNoaWxkKDkpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IGRpdi5kZXRhaWwtcGxheWVyID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnBsYXlfY2VsbCA+IGEgPiBkaXZcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nOlwiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKFwid2lzaGxpc3RcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhbi1iaW8tdm0gPiBkaXYuZmFuLWJpby5vd25lci5uby1waG90byA+IGRpdi5mYW4tYmlvLWlubmVyID4gZGl2Lm5hbWUgPiBoMSA+IHNwYW5cIikudGV4dENvbnRlbnR9J3Mgd2lzaGxpc3RgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuZW5kc1dpdGgoXCJnZW5yZXNcIikpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhbi1iaW8tdm0gPiBkaXYuZmFuLWJpby5vd25lci5uby1waG90byA+IGRpdi5mYW4tYmlvLWlubmVyID4gZGl2Lm5hbWUgPiBoMSA+IHNwYW5cIikudGV4dENvbnRlbnR9J3MgZm9sbG93aW5nIGdlbnJlc2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhbi1iaW8tdm0gPiBkaXYuZmFuLWJpby5vd25lci5uby1waG90byA+IGRpdi5mYW4tYmlvLWlubmVyID4gZGl2Lm5hbWUgPiBoMSA+IHNwYW5cIikudGV4dENvbnRlbnR9J3MgcHJvZmlsZWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNjb3ZlciA+IGRpdjpudGgtY2hpbGQoOSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2LmRldGFpbC1wbGF5ZXIgPiBkaXYgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDEpID4gdGQucGxheV9jZWxsID4gYSA+IGRpdlwiKS5jbGFzc05hbWUgPT09IFwicGxheWJ1dHRvbiBwbGF5aW5nXCIpIHtcbiAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZGlzY292ZXIgPiBkaXY6bnRoLWNoaWxkKDkpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IGRpdi5kZXRhaWwtcGxheWVyID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnRyYWNrX2NlbGwgPiBkaXYgPiBzcGFuLnRpbWUuc2Vjb25kYXJ5VGV4dCA+IHNwYW4udGltZV9lbGFwc2VkXCIpXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiOlwiKVswXSk7XG4gICAgICAgICAgICBzZWMgPSBwYXJzZUludChkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Rpc2NvdmVyID4gZGl2Om50aC1jaGlsZCg5KSA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBkaXYuZGV0YWlsLXBsYXllciA+IGRpdiA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMSkgPiB0ZC50cmFja19jZWxsID4gZGl2ID4gc3Bhbi50aW1lLnNlY29uZGFyeVRleHQgPiBzcGFuLnRpbWVfZWxhcHNlZFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilbMV0pO1xuICAgICAgICAgICAgbWluID0gbWluICogNjA7XG4gICAgICAgICAgICB0aW1lID0gbWluICsgc2VjO1xuICAgICAgICAgICAgbWluMiA9IHBhcnNlSW50KGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZGlzY292ZXIgPiBkaXY6bnRoLWNoaWxkKDkpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IGRpdi5kZXRhaWwtcGxheWVyID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnRyYWNrX2NlbGwgPiBkaXYgPiBzcGFuLnRpbWUuc2Vjb25kYXJ5VGV4dCA+IHNwYW4udGltZV90b3RhbFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilbMF0pO1xuICAgICAgICAgICAgc2VjMiA9IHBhcnNlSW50KGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZGlzY292ZXIgPiBkaXY6bnRoLWNoaWxkKDkpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IGRpdi5kZXRhaWwtcGxheWVyID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnRyYWNrX2NlbGwgPiBkaXYgPiBzcGFuLnRpbWUuc2Vjb25kYXJ5VGV4dCA+IHNwYW4udGltZV90b3RhbFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilbMV0pO1xuICAgICAgICAgICAgbWluMiA9IG1pbjIgKiA2MDtcbiAgICAgICAgICAgIHRpbWUyID0gbWluMiArIHNlYzI7XG4gICAgICAgICAgICBjb25zdCBbc3RhcnRUaW1lc3RhbXAsIGVuZFRpbWVzdGFtcF0gPSBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKHRpbWUsIHRpbWUyKTtcbiAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID0gW1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIGVuZFRpbWVzdGFtcCxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IFwiUGxheWluZ1wiO1xuICAgICAgICAgICAgaWYgKGNvdmVyKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cInBvcHVwSW1hZ2VcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5maXJzdEVsZW1lbnRDaGlsZD8uZ2V0QXR0cmlidXRlKFwic3JjXCIpID8/IFwiYmNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNjb3ZlciA+IGRpdjpudGgtY2hpbGQoOSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2LmRldGFpbC1wbGF5ZXIgPiBkaXYgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDEpID4gdGQudHJhY2tfY2VsbCA+IGRpdiA+IHNwYW4udGl0bGUtc2VjdGlvbiA+IHNwYW5cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQWxidW06ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNjb3ZlciA+IGRpdjpudGgtY2hpbGQoOSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2LmRldGFpbC1ib2R5ID4gZGl2Om50aC1jaGlsZCgyKSA+IHNwYW4uZGV0YWlsLWFsYnVtID4gYVwiKS50ZXh0Q29udGVudH0gYnk6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNjb3ZlciA+IGRpdjpudGgtY2hpbGQoOSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2LmRldGFpbC1ib2R5ID4gcC5kZXRhaWwtYXJ0aXN0ID4gYVwiKS50ZXh0Q29udGVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmc6XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZCA+IHRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcImRhaWx5LmJhbmRjYW1wLmNvbVwiKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBkaXY6bnRoLWNoaWxkKDIpID4gaDJcIikgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9cIikge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYXJ0aWNsZTpcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGRpdjpudGgtY2hpbGQoMikgPiBoMlwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJhbmRjYW1wIERhaWx5XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJyb3dzaW5nLi4uXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm9Jbm5lciA+IGRpdi5pbmxpbmVfcGxheWVyID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnBsYXlfY2VsbCA+IGEgPiBkaXZcIikgIT09IG51bGwgJiZcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm9Jbm5lciA+IGRpdi5pbmxpbmVfcGxheWVyID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnBsYXlfY2VsbCA+IGEgPiBkaXZcIikuY2xhc3NOYW1lID09PSBcInBsYXlidXR0b24gcGxheWluZ1wiICYmXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FsYnVtL1wiKSkge1xuICAgICAgICBtaW4gPSBwYXJzZUludChkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdHJhY2tJbmZvSW5uZXIgPiBkaXYuaW5saW5lX3BsYXllciA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMSkgPiB0ZC50cmFja19jZWxsID4gZGl2ID4gc3Bhbi50aW1lLnNlY29uZGFyeVRleHQgPiBzcGFuLnRpbWVfZWxhcHNlZFwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiOlwiKVswXSk7XG4gICAgICAgIHNlYyA9IHBhcnNlSW50KGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm9Jbm5lciA+IGRpdi5pbmxpbmVfcGxheWVyID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnRyYWNrX2NlbGwgPiBkaXYgPiBzcGFuLnRpbWUuc2Vjb25kYXJ5VGV4dCA+IHNwYW4udGltZV9lbGFwc2VkXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpWzFdKTtcbiAgICAgICAgbWluID0gbWluICogNjA7XG4gICAgICAgIHRpbWUgPSBtaW4gKyBzZWM7XG4gICAgICAgIG1pbjIgPSBwYXJzZUludChkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdHJhY2tJbmZvSW5uZXIgPiBkaXYuaW5saW5lX3BsYXllciA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMSkgPiB0ZC50cmFja19jZWxsID4gZGl2ID4gc3Bhbi50aW1lLnNlY29uZGFyeVRleHQgPiBzcGFuLnRpbWVfdG90YWxcIilcbiAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilbMF0pO1xuICAgICAgICBzZWMyID0gcGFyc2VJbnQoZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3RyYWNrSW5mb0lubmVyID4gZGl2LmlubGluZV9wbGF5ZXIgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDEpID4gdGQudHJhY2tfY2VsbCA+IGRpdiA+IHNwYW4udGltZS5zZWNvbmRhcnlUZXh0ID4gc3Bhbi50aW1lX3RvdGFsXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpWzFdKTtcbiAgICAgICAgbWluMiA9IG1pbjIgKiA2MDtcbiAgICAgICAgdGltZTIgPSBtaW4yICsgc2VjMjtcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyhNYXRoLmZsb29yKHRpbWUpLCBNYXRoLmZsb29yKHRpbWUyKSk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlBsYXlpbmdcIjtcbiAgICAgICAgaWYgKGNvdmVyKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cInBvcHVwSW1hZ2VcIl0nKVxuICAgICAgICAgICAgICAgICAgICA/LmZpcnN0RWxlbWVudENoaWxkPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPz8gXCJiY1wiO1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm9Jbm5lciA+IGRpdi5pbmxpbmVfcGxheWVyID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnRyYWNrX2NlbGwgPiBkaXYgPiBzcGFuLnRpdGxlLXNlY3Rpb24gPiBhID4gc3BhblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYEFsYnVtOiAke2RvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNuYW1lLXNlY3Rpb24gPiBoMlwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKX0gYnk6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLXNlY3Rpb24gPiBoMyA+IHNwYW4gPiBhXCIpLnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FsYnVtL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhbGJ1bTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtc2VjdGlvbiA+IGgyXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfSBieTogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtc2VjdGlvbiA+IGgzID4gc3BhbiA+IGFcIikudGV4dENvbnRlbnR9YDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm9Jbm5lciA+IGRpdi5pbmxpbmVfcGxheWVyLm9uZS10cmFjayA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMSkgPiB0ZC5wbGF5X2NlbGwgPiBhID4gZGl2XCIpICE9PSBudWxsICYmXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJhY2tJbmZvSW5uZXIgPiBkaXYuaW5saW5lX3BsYXllci5vbmUtdHJhY2sgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDEpID4gdGQucGxheV9jZWxsID4gYSA+IGRpdlwiKS5jbGFzc05hbWUgPT09IFwicGxheWJ1dHRvbiBwbGF5aW5nXCIgJiZcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdHJhY2svXCIpKSB7XG4gICAgICAgIG1pbiA9IHBhcnNlSW50KGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm9Jbm5lciA+IGRpdi5pbmxpbmVfcGxheWVyLm9uZS10cmFjayA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMSkgPiB0ZC50cmFja19jZWxsID4gZGl2ID4gc3Bhbi50aW1lLnNlY29uZGFyeVRleHQgPiBzcGFuLnRpbWVfZWxhcHNlZFwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiOlwiKVswXSk7XG4gICAgICAgIHNlYyA9IHBhcnNlSW50KGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiN0cmFja0luZm9Jbm5lciA+IGRpdi5pbmxpbmVfcGxheWVyLm9uZS10cmFjayA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoMSkgPiB0ZC50cmFja19jZWxsID4gZGl2ID4gc3Bhbi50aW1lLnNlY29uZGFyeVRleHQgPiBzcGFuLnRpbWVfZWxhcHNlZFwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiOlwiKVsxXSk7XG4gICAgICAgIG1pbiA9IG1pbiAqIDYwO1xuICAgICAgICB0aW1lID0gbWluICsgc2VjO1xuICAgICAgICBtaW4yID0gcGFyc2VJbnQoZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3RyYWNrSW5mb0lubmVyID4gZGl2LmlubGluZV9wbGF5ZXIub25lLXRyYWNrID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxKSA+IHRkLnRyYWNrX2NlbGwgPiBkaXYgPiBzcGFuLnRpbWUuc2Vjb25kYXJ5VGV4dCA+IHNwYW4udGltZV90b3RhbFwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiOlwiKVswXSk7XG4gICAgICAgIHNlYzIgPSBwYXJzZUludChkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdHJhY2tJbmZvSW5uZXIgPiBkaXYuaW5saW5lX3BsYXllci5vbmUtdHJhY2sgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDEpID4gdGQudHJhY2tfY2VsbCA+IGRpdiA+IHNwYW4udGltZS5zZWNvbmRhcnlUZXh0ID4gc3Bhbi50aW1lX3RvdGFsXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpWzFdKTtcbiAgICAgICAgbWluMiA9IG1pbjIgKiA2MDtcbiAgICAgICAgdGltZTIgPSBtaW4yICsgc2VjMjtcbiAgICAgICAgW3ByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCwgcHJlc2VuY2VEYXRhLmVuZFRpbWVzdGFtcF0gPVxuICAgICAgICAgICAgcHJlc2VuY2UuZ2V0VGltZXN0YW1wcyhNYXRoLmZsb29yKHRpbWUpLCBNYXRoLmZsb29yKHRpbWUyKSk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSBcIlBsYXlpbmdcIjtcbiAgICAgICAgaWYgKGNvdmVyKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cInBvcHVwSW1hZ2VcIl0nKVxuICAgICAgICAgICAgICAgICAgICA/LmZpcnN0RWxlbWVudENoaWxkPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPz8gXCJiY1wiO1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtc2VjdGlvbiA+IGgyXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgQnk6ICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLXNlY3Rpb24gPiBoMyA+IHNwYW4gPiBhXCIpLnRleHRDb250ZW50fWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RyYWNrL1wiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0cmFjazpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7ZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtc2VjdGlvbiA+IGgyXCIpXG4gICAgICAgICAgICAudGV4dENvbnRlbnQudHJpbSgpfSBieTogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtc2VjdGlvbiA+IGgzID4gc3BhbiA+IGFcIikudGV4dENvbnRlbnR9YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nOlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZCA+IHRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeHBRa0ZCYVVJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVVZ1UkN4SlFVRkpMRWRCUVZjc1JVRkRaQ3hIUVVGWExFVkJRMWdzU1VGQldTeEZRVU5hTEVsQlFWa3NSVUZEV2l4SlFVRlpMRVZCUTFvc1MwRkJZU3hEUVVGRE8wRkJSV1lzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnBETEdGQlFXRXNSVUZEV2l3clJFRkJLMFE3VVVGRGFFVXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFqdExRVU5xUXl4RlFVTkVMRXRCUVVzc1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkZja1FzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1MwRkJTeXhqUVVGakxFVkJRVVU3VVVGRGJFUXNTVUZEUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpdzBTVUZCTkVrc1EwRkROVWtzUzBGQlN5eEpRVUZKTEVWQlExUTdXVUZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF6dFpRVVZzUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRuUWtGRGNFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVOd1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXh4UmtGQmNVWXNRMEZEY2tZc1EwRkJReXhYUVVOSUxHRkJRV0VzUTBGQlF6dGhRVU5rTzJsQ1FVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU42UkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRM0JDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNKQ0xIRkdRVUZ4Uml4RFFVTnlSaXhEUVVGRExGZEJRMGdzY1VKQlFYRkNMRU5CUVVNN1lVRkRkRUk3YVVKQlFVMDdaMEpCUTA0c1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpeHhSa0ZCY1VZc1EwRkRja1lzUTBGQlF5eFhRVU5JTEZsQlFWa3NRMEZCUXp0aFFVTmlPMU5CUTBRN1lVRkJUU3hKUVVOT0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkNMRFJKUVVFMFNTeERRVU0xU1N4RFFVRkRMRk5CUVZNc1MwRkJTeXh2UWtGQmIwSXNSVUZEYmtNN1dVRkRSQ3hIUVVGSExFZEJRVWNzVVVGQlVTeERRVU5pTEZGQlFWRTdhVUpCUTA0c1lVRkJZU3hEUVVOaUxIVk1RVUYxVEN4RFFVTjJURHRwUWtGRFFTeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVU16UWl4RFFVRkRPMWxCUTBZc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGRFlpeFJRVUZSTzJsQ1FVTk9MR0ZCUVdFc1EwRkRZaXgxVEVGQmRVd3NRMEZEZGt3N2FVSkJRMEVzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRE0wSXNRMEZCUXp0WlFVTkdMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEyWXNTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGRmFrSXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkRaQ3hSUVVGUk8ybENRVU5PTEdGQlFXRXNRMEZEWWl4eFRFRkJjVXdzUTBGRGNrdzdhVUpCUTBFc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkRNMElzUTBGQlF6dFpRVU5HTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUTJRc1VVRkJVVHRwUWtGRFRpeGhRVUZoTEVOQlEySXNjVXhCUVhGTUxFTkJRM0pNTzJsQ1FVTkJMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUXpOQ0xFTkJRVU03V1VGRFJpeEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOcVFpeExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVWd1FpeE5RVUZOTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6VkVMRWxCUVVrc1JVRkRTaXhMUVVGTExFTkJRMHdzUTBGQlF6dFpRVU5HTEVOQlFVTXNXVUZCV1N4RFFVRkRMR05CUVdNc1JVRkJSU3haUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVYzdaMEpCUXpGRUxHTkJRV003WjBKQlEyUXNXVUZCV1R0aFFVTmFMRU5CUVVNN1dVRkRSaXhaUVVGWkxFTkJRVU1zWVVGQllTeHBSRUZCWXl4RFFVRkRPMWxCUTNwRExGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NVMEZCVXl4RFFVRkRPMWxCUlhoRExFbEJRVWtzUzBGQlN5eEZRVUZGTzJkQ1FVTldMRmxCUVZrc1EwRkJReXhoUVVGaE8yOUNRVU42UWl4UlFVRlJPM2xDUVVOT0xHRkJRV0VzUTBGQlF5eHpRa0ZCYzBJc1EwRkJRenQzUWtGRGRFTXNSVUZCUlN4cFFrRkJhVUlzUlVGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRE8yRkJRMjVFTzFsQlEwUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU0xUXl4eFMwRkJjVXNzUTBGRGNrc3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRaQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlEzQkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRM0pDTEc5SVFVRnZTQ3hEUVVOd1NDeERRVUZETEZkQlEwZ3NVVUZEUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpd3JSa0ZCSzBZc1EwRkRMMFlzUTBGQlF5eFhRVU5JTEVWQlFVVXNRMEZCUXp0VFFVTklPMkZCUVUwN1dVRkRUaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXp0WlFVTnNReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlEzaEZPMHRCUTBRN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRzlDUVVGdlFpeEZRVUZGTzFGQlF5OUVMRWxCUTBNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhMUVVGTExFbEJRVWs3V1VGRGJrVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzUjBGQlJ5eEZRVU5xUXp0WlFVTkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1dVRkRNVU1zV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVNeFF5eHJRMEZCYTBNc1EwRkRiRU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEWkN4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0VFFVTTFRenRoUVVGTk8xbEJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dFpRVU40UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHRkJRV0VzUTBGQlF6dFRRVU51UXp0TFFVTkVPMU5CUVUwc1NVRkRUaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4blIwRkJaMGNzUTBGRGFFY3NTMEZCU3l4SlFVRkpPMUZCUTFZc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNaMGRCUVdkSExFTkJRMmhITEVOQlFVTXNVMEZCVXl4TFFVRkxMRzlDUVVGdlFqdFJRVU53UXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUXpkRE8xRkJRMFFzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZEWWl4UlFVRlJPMkZCUTA0c1lVRkJZU3hEUVVOaUxESkpRVUV5U1N4RFFVTXpTVHRoUVVOQkxGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRek5DTEVOQlFVTTdVVUZEUml4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVOaUxGRkJRVkU3WVVGRFRpeGhRVUZoTEVOQlEySXNNa2xCUVRKSkxFTkJRek5KTzJGQlEwRXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZETTBJc1EwRkJRenRSUVVOR0xFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJZc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZGYWtJc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGRFpDeFJRVUZSTzJGQlEwNHNZVUZCWVN4RFFVTmlMSGxKUVVGNVNTeERRVU42U1R0aFFVTkJMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUXpOQ0xFTkJRVU03VVVGRFJpeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVTmtMRkZCUVZFN1lVRkRUaXhoUVVGaExFTkJRMklzZVVsQlFYbEpMRU5CUTNwSk8yRkJRMEVzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRE0wSXNRMEZCUXp0UlFVTkdMRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEycENMRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJYQkNMRU5CUVVNc1dVRkJXU3hEUVVGRExHTkJRV01zUlVGQlJTeFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRPMWxCUTNaRUxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wUXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2FVUkJRV01zUTBGQlF6dFJRVU42UXl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU40UXl4SlFVRkpMRXRCUVVzc1JVRkJSVHRaUVVOV0xGbEJRVmtzUTBGQlF5eGhRVUZoTzJkQ1FVTjZRaXhSUVVGUk8zRkNRVU5PTEdGQlFXRXNRMEZCUXl4elFrRkJjMElzUTBGQlF6dHZRa0ZEZEVNc1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETzFOQlEyNUVPMUZCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTTFReXcyU0VGQk5rZ3NRMEZETjBnc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRFpDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1VVRkJVVHRoUVVOeVF5eGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03WVVGRGJrTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVOdVFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTXNWMEZEZWtRc1JVRkJSU3hEUVVGRE8wdEJRMGc3VTBGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0UlFVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRM2hETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhSUVVGUk8yRkJRemxDTEdGQlFXRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dGhRVU51UXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRMjVDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNRMEZCUXl4WFFVTjZSQ3hGUVVGRkxFTkJRVU03UzBGRFNEdFRRVUZOTEVsQlEwNHNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkRja0lzTUVkQlFUQkhMRU5CUXpGSExFdEJRVXNzU1VGQlNUdFJRVU5XTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNKQ0xEQkhRVUV3Unl4RFFVTXhSeXhEUVVGRExGTkJRVk1zUzBGQlN5eHZRa0ZCYjBJN1VVRkRjRU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVU0zUXp0UlFVTkVMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRMklzVVVGQlVUdGhRVU5PTEdGQlFXRXNRMEZEWWl4eFNrRkJjVW9zUTBGRGNrbzdZVUZEUVN4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTXpRaXhEUVVGRE8xRkJRMFlzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZEWWl4UlFVRlJPMkZCUTA0c1lVRkJZU3hEUVVOaUxIRktRVUZ4U2l4RFFVTnlTanRoUVVOQkxGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRek5DTEVOQlFVTTdVVUZEUml4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJSV3BDTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUTJRc1VVRkJVVHRoUVVOT0xHRkJRV0VzUTBGRFlpeHRTa0ZCYlVvc1EwRkRia283WVVGRFFTeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVU16UWl4RFFVRkRPMUZCUTBZc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGRFpDeFJRVUZSTzJGQlEwNHNZVUZCWVN4RFFVTmlMRzFLUVVGdFNpeERRVU51U2p0aFFVTkJMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUXpOQ0xFTkJRVU03VVVGRFJpeEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOcVFpeExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVWd1FpeERRVUZETEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF6dFpRVU4yUkN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkRUxGbEJRVmtzUTBGQlF5eGhRVUZoTEdsRVFVRmpMRU5CUVVNN1VVRkRla01zV1VGQldTeERRVUZETEdOQlFXTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkRlRU1zU1VGQlNTeExRVUZMTEVWQlFVVTdXVUZEVml4WlFVRlpMRU5CUVVNc1lVRkJZVHRuUWtGRGVrSXNVVUZCVVR0eFFrRkRUaXhoUVVGaExFTkJRVU1zYzBKQlFYTkNMRU5CUVVNN2IwSkJRM1JETEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVVzV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJRenRUUVVOdVJEdFJRVU5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVVHRoUVVNM1FpeGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03WVVGRGJrTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM0pDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkRjRUlzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl3clFrRkJLMElzUTBGQlF5eERRVUZETEZkQlEzcEVMRVZCUVVVc1EwRkJRenRMUVVOSU8xTkJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVVUZETVVRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVONFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1VVRkJVVHRoUVVNNVFpeGhRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03WVVGRGJrTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVOdVFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTXNWMEZEZWtRc1JVRkJSU3hEUVVGRE8wdEJRMGc3VTBGQlRUdFJRVU5PTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xRkJRMnhETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1MwRkRlRVU3U1VGRFJDeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJtaW4iLCJzZWMiLCJ0aW1lIiwibWluMiIsInNlYzIiLCJ0aW1lMiIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJjb3ZlciIsImdldFNldHRpbmciLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJxdWVyeVNlbGVjdG9yIiwiZGV0YWlscyIsInBhdGhuYW1lIiwiZW5kc1dpdGgiLCJzdGF0ZSIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwicGFyc2VJbnQiLCJzcGxpdCIsImVuZFRpbWVzdGFtcCIsImdldFRpbWVzdGFtcHMiLCJzbWFsbEltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImdldEF0dHJpYnV0ZSIsImluY2x1ZGVzIiwidHJpbSIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;