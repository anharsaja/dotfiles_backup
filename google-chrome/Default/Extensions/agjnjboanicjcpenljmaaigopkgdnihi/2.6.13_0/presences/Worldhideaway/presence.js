var __webpack_exports__={};const presence=new Presence({clientId:"815515385326469131"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/W/Worldhideaway/assets/logo.png",startTimestamp:browsingTimestamp},t=document.querySelector("#masthead > div.header-search-wrap > div > form > label > input"),{href:r,pathname:a}=document.location,[s,o,i]=await Promise.all([presence.getSetting("privacy"),presence.getSetting("buttons"),presence.getSetting("covers")]);if(s)e.details="Hojeada";else switch(a.split("/")[1]){case"":t?.value?(e.details="Buscando",e.state=t.value,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"):e.details="Viendo Inicio";break;case"register":e.details="Registro";break;case"logros":e.details="Viendo logros",e.buttons=[{label:"Ver Logros",url:r}];break;case"events":e.details="Viendo eventos",e.buttons=[{label:"Ver Eventos",url:r}];break;case"activity":e.details="Leyendo sobre",e.state="Actividad",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png",e.buttons=[{label:"Ver Actividad",url:r}];break;case"topic":e.details="Viendo noticia sobre",e.state=document.querySelector("#topic-6307-replies > li.bs-item-wrap.bs-header-item.align-items-center.no-hover-effect > div > div.item-title > h1").textContent,e.buttons=[{label:"Ver Noticia",url:r}];break;case"members":document.querySelector('[id="members-all"]')?(e.details="Viendo miembros",e.buttons=[{label:"Ver Miembros",url:r}]):(e.buttons=[{label:"Ver Miembro",url:r}],e.largeImageKey=document.querySelector('[alt*="Profile photo of"]').getAttribute("src"),e.details=`Viendo ${document.querySelector("#item-header-content > div > div > div.flex.align-items-center.member-title-wrap > h2")?.textContent}'s Perfil`);break;case"category":e.buttons=[{label:"Ver Categoría",url:r}],e.details="Viendo categoría",e.state=document.querySelector("#main > header > h1 > span").textContent;break;case"faqs":e.buttons=[{label:"Leer FAQ",url:r}],e.details="Leyendo FAQ",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png";break;case"contacto":e.buttons=[{label:"Ver Contacto",url:r}],e.details="Viendo contacto";break;default:{const t=document.querySelector("#main > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7cf6a1d.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > div > h1"),a=document.querySelector('[aria-current="page"]')??document.querySelector('[class="current_page_item"]');t?(e.buttons=[{label:"Leer Articulo",url:r}],e.details=`Leyendo ${t.textContent}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):a?(e.buttons=[{label:"Ver Información",url:r}],e.details=`Viendo ${a.textContent}`):e.details="Página no encontrada";break}}o||delete e.buttons,i||(e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/W/Worldhideaway/assets/logo.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUscUVBQ2ZDLGVBQWdCVCxtQkFDakJVLEVBQVNDLFNBQVNDLGNBQWMsb0VBQW9FLEtBQUVDLEVBQUksU0FBRUMsR0FBYUgsU0FBU0ksVUFBV0MsRUFBU0MsRUFBU0MsU0FBZ0JDLFFBQVFDLElBQUksQ0FDMUx2QixTQUFTd0IsV0FBVyxXQUNwQnhCLFNBQVN3QixXQUFXLFdBQ3BCeEIsU0FBU3dCLFdBQVcsWUFFeEIsR0FBSUwsRUFDQVQsRUFBYWUsUUFBVSxlQUV2QixPQUFRUixFQUFTUyxNQUFNLEtBQUssSUFDeEIsSUFBSyxHQUNHYixHQUFRYyxPQUNSakIsRUFBYWUsUUFBVSxXQUN2QmYsRUFBYWtCLE1BQVFmLEVBQU9jLE1BQzVCakIsRUFBYW1CLGNBQWdCLGtEQUc3Qm5CLEVBQWFlLFFBQVUsZ0JBQzNCLE1BRUosSUFBSyxXQUNEZixFQUFhZSxRQUFVLFdBQ3ZCLE1BRUosSUFBSyxTQUNEZixFQUFhZSxRQUFVLGdCQUN2QmYsRUFBYVUsUUFBVSxDQUNuQixDQUNJVSxNQUFPLGFBQ1BDLElBQUtmLElBR2IsTUFFSixJQUFLLFNBQ0ROLEVBQWFlLFFBQVUsaUJBQ3ZCZixFQUFhVSxRQUFVLENBQ25CLENBQ0lVLE1BQU8sY0FDUEMsSUFBS2YsSUFHYixNQUVKLElBQUssV0FDRE4sRUFBYWUsUUFBVSxnQkFDdkJmLEVBQWFrQixNQUFRLFlBQ3JCbEIsRUFBYW1CLGNBQWdCLGtEQUM3Qm5CLEVBQWFVLFFBQVUsQ0FDbkIsQ0FDSVUsTUFBTyxnQkFDUEMsSUFBS2YsSUFHYixNQUVKLElBQUssUUFDRE4sRUFBYWUsUUFBVSx1QkFDdkJmLEVBQWFrQixNQUFRZCxTQUFTQyxjQUFjLHVIQUF1SGlCLFlBQ25LdEIsRUFBYVUsUUFBVSxDQUNuQixDQUNJVSxNQUFPLGNBQ1BDLElBQUtmLElBR2IsTUFFSixJQUFLLFVBQ0dGLFNBQVNDLGNBQWMsdUJBQ3ZCTCxFQUFhZSxRQUFVLGtCQUN2QmYsRUFBYVUsUUFBVSxDQUNuQixDQUNJVSxNQUFPLGVBQ1BDLElBQUtmLE1BS2JOLEVBQWFVLFFBQVUsQ0FDbkIsQ0FDSVUsTUFBTyxjQUNQQyxJQUFLZixJQUdiTixFQUFhQyxjQUFnQkcsU0FDeEJDLGNBQWMsNkJBQ2RrQixhQUFhLE9BQ2xCdkIsRUFBYWUsUUFBVSxVQUFVWCxTQUFTQyxjQUFjLDBGQUEwRmlCLHdCQUV0SixNQUVKLElBQUssV0FDRHRCLEVBQWFVLFFBQVUsQ0FDbkIsQ0FDSVUsTUFBTyxnQkFDUEMsSUFBS2YsSUFHYk4sRUFBYWUsUUFBVSxtQkFDdkJmLEVBQWFrQixNQUFRZCxTQUFTQyxjQUFjLDhCQUE4QmlCLFlBQzFFLE1BRUosSUFBSyxPQUNEdEIsRUFBYVUsUUFBVSxDQUNuQixDQUNJVSxNQUFPLFdBQ1BDLElBQUtmLElBR2JOLEVBQWFlLFFBQVUsY0FDdkJmLEVBQWFtQixjQUFnQixrREFDN0IsTUFFSixJQUFLLFdBQ0RuQixFQUFhVSxRQUFVLENBQ25CLENBQ0lVLE1BQU8sZUFDUEMsSUFBS2YsSUFHYk4sRUFBYWUsUUFBVSxrQkFDdkIsTUFFSixRQUFTLENBQ0wsTUFBTVMsRUFBUXBCLFNBQVNDLGNBQWMsNFBBQTZQb0IsRUFBU3JCLFNBQVNDLGNBQWMsMEJBQzlURCxTQUFTQyxjQUFjLCtCQUN2Qm1CLEdBQ0F4QixFQUFhVSxRQUFVLENBQ25CLENBQ0lVLE1BQU8sZ0JBQ1BDLElBQUtmLElBR2JOLEVBQWFlLFFBQVUsV0FBV1MsRUFBTUYsY0FDeEN0QixFQUFhbUIsY0FBZ0IsbURBRXhCTSxHQUNMekIsRUFBYVUsUUFBVSxDQUNuQixDQUNJVSxNQUFPLGtCQUNQQyxJQUFLZixJQUdiTixFQUFhZSxRQUFVLFVBQVVVLEVBQU9ILGVBR3hDdEIsRUFBYWUsUUFBVSx1QkFDM0IsS0FDSixFQUdITCxVQUNNVixFQUFhVSxRQUNuQkMsSUFDRFgsRUFBYUMsY0FDVCxzRUFFSkQsRUFBYWUsUUFDYnpCLFNBQVNvQyxZQUFZMUIsR0FFckJWLFNBQVNvQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjgxNTUxNTM4NTMyNjQ2OTEzMVwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1cvV29ybGRoaWRlYXdheS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGJyb3dzaW5nVGltZXN0YW1wLFxuICAgIH0sIHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFzdGhlYWQgPiBkaXYuaGVhZGVyLXNlYXJjaC13cmFwID4gZGl2ID4gZm9ybSA+IGxhYmVsID4gaW5wdXRcIiksIHsgaHJlZiwgcGF0aG5hbWUgfSA9IGRvY3VtZW50LmxvY2F0aW9uLCBbcHJpdmFjeSwgYnV0dG9ucywgY292ZXJzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiY292ZXJzXCIpLFxuICAgIF0pO1xuICAgIGlmIChwcml2YWN5KVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSG9qZWFkYVwiO1xuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSkge1xuICAgICAgICAgICAgY2FzZSBcIlwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaD8udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJ1c2NhbmRvXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNlYXJjaC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmllbmRvIEluaWNpb1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnaXN0cm9cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJsb2dyb3NcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWVuZG8gbG9ncm9zXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZlciBMb2dyb3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZW5kbyBldmVudG9zXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZlciBFdmVudG9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJhY3Rpdml0eVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxleWVuZG8gc29icmVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkFjdGl2aWRhZFwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWZXIgQWN0aXZpZGFkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJ0b3BpY1wiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZW5kbyBub3RpY2lhIHNvYnJlXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BpYy02MzA3LXJlcGxpZXMgPiBsaS5icy1pdGVtLXdyYXAuYnMtaGVhZGVyLWl0ZW0uYWxpZ24taXRlbXMtY2VudGVyLm5vLWhvdmVyLWVmZmVjdCA+IGRpdiA+IGRpdi5pdGVtLXRpdGxlID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZlciBOb3RpY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJtZW1iZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkPVwibWVtYmVycy1hbGxcIl0nKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmllbmRvIG1pZW1icm9zXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZlciBNaWVtYnJvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWZXIgTWllbWJyb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5sYXJnZUltYWdlS2V5ID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbYWx0Kj1cIlByb2ZpbGUgcGhvdG8gb2ZcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmllbmRvICR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpdGVtLWhlYWRlci1jb250ZW50ID4gZGl2ID4gZGl2ID4gZGl2LmZsZXguYWxpZ24taXRlbXMtY2VudGVyLm1lbWJlci10aXRsZS13cmFwID4gaDJcIik/LnRleHRDb250ZW50fSdzIFBlcmZpbGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNhdGVnb3J5XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmVyIENhdGVnb3LDrWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWVuZG8gY2F0ZWdvcsOtYVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbiA+IGhlYWRlciA+IGgxID4gc3BhblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJmYXFzXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTGVlciBGQVFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMZXllbmRvIEZBUVwiO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNvbnRhY3RvXCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmVyIENvbnRhY3RvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmllbmRvIGNvbnRhY3RvXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4gPiBkaXYgPiBkaXYgPiBzZWN0aW9uLmVsZW1lbnRvci1zZWN0aW9uLmVsZW1lbnRvci10b3Atc2VjdGlvbi5lbGVtZW50b3ItZWxlbWVudC5lbGVtZW50b3ItZWxlbWVudC03Y2Y2YTFkLmVsZW1lbnRvci1zZWN0aW9uLWJveGVkLmVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0LmVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gaDFcIiksIGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWN1cnJlbnQ9XCJwYWdlXCJdJykgPz9cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwiY3VycmVudF9wYWdlX2l0ZW1cIl0nKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTGVlciBBcnRpY3Vsb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYExleWVuZG8gJHtjaGVjay50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlZlciBJbmZvcm1hY2nDs25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGBWaWVuZG8gJHthY3RpdmUudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUMOhZ2luYSBubyBlbmNvbnRyYWRhXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFidXR0b25zKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgaWYgKCFjb3ZlcnMpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPVxuICAgICAgICAgICAgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1cvV29ybGRoaWRlYXdheS9hc3NldHMvbG9nby5wbmdcIjtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU53UXl4TlFVRk5MRmxCUVZrc1IwRkJhVUk3VVVGRGFrTXNZVUZCWVN4RlFVTmFMRzlGUVVGdlJUdFJRVU55UlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzB0QlEycERMRVZCUTBRc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6bENMR2xGUVVGcFJTeERRVU5xUlN4RlFVTkVMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUTNSRExFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhOUVVGTkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZET1VNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFRRVUZUTEVOQlFVTTdVVUZEZGtNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFRRVUZUTEVOQlFVTTdVVUZEZGtNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlZTeFJRVUZSTEVOQlFVTTdTMEZEZEVNc1EwRkJReXhEUVVGRE8wbEJRMG9zU1VGQlNTeFBRVUZQTzFGQlFVVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU03VTBGRGVrTTdVVUZEU2l4UlFVRlJMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRMMElzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRVaXhKUVVGSkxFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVTdiMEpCUTJ4Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMjlDUVVOc1F5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03YjBKQlEyeERMRmxCUVZrc1EwRkJReXhoUVVGaExHMUVRVUZuUWl4RFFVRkRPMmxDUVVNelF6czdiMEpCUVUwc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTTdaMEpCUlRsRExFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE8yZENRVU5zUXl4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETzJkQ1FVTjJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzI5Q1FVTjBRanQzUWtGRFF5eExRVUZMTEVWQlFVVXNXVUZCV1R0M1FrRkRia0lzUjBGQlJ5eEZRVUZGTEVsQlFVazdjVUpCUTFRN2FVSkJRMFFzUTBGQlF6dG5Ra0ZEUml4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1owSkJRM2hETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2IwSkJRM1JDTzNkQ1FVTkRMRXRCUVVzc1JVRkJSU3hoUVVGaE8zZENRVU53UWl4SFFVRkhMRVZCUVVVc1NVRkJTVHR4UWtGRFZEdHBRa0ZEUkN4RFFVRkRPMmRDUVVOR0xFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRE8yZENRVU4yUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF6dG5Ra0ZEYWtNc1dVRkJXU3hEUVVGRExHRkJRV0VzYjBSQlFXbENMRU5CUVVNN1owSkJRelZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2IwSkJRM1JDTzNkQ1FVTkRMRXRCUVVzc1JVRkJSU3hsUVVGbE8zZENRVU4wUWl4SFFVRkhMRVZCUVVVc1NVRkJTVHR4UWtGRFZEdHBRa0ZEUkN4RFFVRkRPMmRDUVVWR0xFMUJRVTA3WVVGRFRqdFpRVU5FTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMklzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dG5Ra0ZET1VNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTXhReXh4U0VGQmNVZ3NRMEZEY2tnc1EwRkJReXhYUVVGWExFTkJRVU03WjBKQlEyUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenR2UWtGRGRFSTdkMEpCUTBNc1MwRkJTeXhGUVVGRkxHRkJRV0U3ZDBKQlEzQkNMRWRCUVVjc1JVRkJSU3hKUVVGSk8zRkNRVU5VTzJsQ1FVTkVMRU5CUVVNN1owSkJRMFlzVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRFppeEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSVUZCUlR0dlFrRkRha1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dHZRa0ZEZWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dDNRa0ZEZEVJN05FSkJRME1zUzBGQlN5eEZRVUZGTEdOQlFXTTdORUpCUTNKQ0xFZEJRVWNzUlVGQlJTeEpRVUZKTzNsQ1FVTlVPM0ZDUVVORUxFTkJRVU03YVVKQlEwWTdjVUpCUVUwN2IwSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0M1FrRkRkRUk3TkVKQlEwTXNTMEZCU3l4RlFVRkZMR0ZCUVdFN05FSkJRM0JDTEVkQlFVY3NSVUZCUlN4SlFVRkpPM2xDUVVOVU8zRkNRVU5FTEVOQlFVTTdiMEpCUTBZc1dVRkJXU3hEUVVGRExHRkJRV0VzUjBGQlJ5eFJRVUZSTzNsQ1FVTnVReXhoUVVGaExFTkJRVU1zTWtKQlFUSkNMRU5CUVVNN2VVSkJRekZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenR2UWtGRGRFSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVOMFFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXgxUmtGQmRVWXNRMEZEZGtZc1JVRkJSU3hYUVVOS0xGZEJRVmNzUTBGQlF6dHBRa0ZEV2p0blFrRkRSQ3hOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMjlDUVVOMFFqdDNRa0ZEUXl4TFFVRkxMRVZCUVVVc1pVRkJaVHQzUWtGRGRFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN2NVSkJRMVE3YVVKQlEwUXNRMEZCUXp0blFrRkRSaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8yZENRVU14UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6RkRMRFJDUVVFMFFpeERRVU0xUWl4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGRFpDeE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU5hTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN2IwSkJRM1JDTzNkQ1FVTkRMRXRCUVVzc1JVRkJSU3hWUVVGVk8zZENRVU5xUWl4SFFVRkhMRVZCUVVVc1NVRkJTVHR4UWtGRFZEdHBRa0ZEUkN4RFFVRkRPMmRDUVVOR0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NZVUZCWVN4RFFVRkRPMmRDUVVOeVF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4dlJFRkJhVUlzUTBGQlF6dG5Ra0ZETlVNc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRhRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0dlFrRkRkRUk3ZDBKQlEwTXNTMEZCU3l4RlFVRkZMR05CUVdNN2QwSkJRM0pDTEVkQlFVY3NSVUZCUlN4SlFVRkpPM0ZDUVVOVU8ybENRVU5FTEVOQlFVTTdaMEpCUTBZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRuUWtGRGVrTXNUVUZCVFR0aFFVTk9PMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlExSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGJFTXNNRkJCUVRCUUxFTkJRekZRTEVWQlEwUXNUVUZCVFN4SFFVTk1MRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNN2IwSkJReTlETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0blFrRkZlRVFzU1VGQlNTeExRVUZMTEVWQlFVVTdiMEpCUTFZc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dDNRa0ZEZEVJN05FSkJRME1zUzBGQlN5eEZRVUZGTEdWQlFXVTdORUpCUTNSQ0xFZEJRVWNzUlVGQlJTeEpRVUZKTzNsQ1FVTlVPM0ZDUVVORUxFTkJRVU03YjBKQlEwWXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0dlFrRkRkRVFzV1VGQldTeERRVUZETEdGQlFXRXNiMFJCUVdsQ0xFTkJRVU03YVVKQlF6VkRPM0ZDUVVGTkxFbEJRVWtzVFVGQlRTeEZRVUZGTzI5Q1FVTnNRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzNkQ1FVTjBRanMwUWtGRFF5eExRVUZMTEVWQlFVVXNhVUpCUVdsQ096UkNRVU40UWl4SFFVRkhMRVZCUVVVc1NVRkJTVHQ1UWtGRFZEdHhRa0ZEUkN4RFFVRkRPMjlDUVVOR0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03YVVKQlEzUkVPenR2UWtGQlRTeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzJkQ1FVTnlSQ3hOUVVGTk8yRkJRMDQ3VTBGRFJEdExRVU5FTzBsQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZETVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFJRVU5hTEZsQlFWa3NRMEZCUXl4aFFVRmhPMWxCUTNwQ0xHOUZRVUZ2UlN4RFFVRkRPMHRCUTNSRk8wbEJRMFFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsInNlYXJjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhyZWYiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicHJpdmFjeSIsImJ1dHRvbnMiLCJjb3ZlcnMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsImRldGFpbHMiLCJzcGxpdCIsInZhbHVlIiwic3RhdGUiLCJzbWFsbEltYWdlS2V5IiwibGFiZWwiLCJ1cmwiLCJ0ZXh0Q29udGVudCIsImdldEF0dHJpYnV0ZSIsImNoZWNrIiwiYWN0aXZlIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;