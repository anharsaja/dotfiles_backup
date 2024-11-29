var __webpack_exports__={};const presence=new Presence({clientId:"888726220571811914"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=await presence.getSetting("timestamp"),t=await presence.getSetting("buttons"),n={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/S/ShareX/assets/logo.png",smallImageText:"Navigating on getsharex.com",buttons:[{label:"View Page",url:document.location.href}]};"/"===document.location.pathname?(n.state="Browsing Home Page",delete n.buttons):document.location.pathname.includes("/downloads")?(n.state="Browsing Downloads Page",n.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/downloading.png"):document.location.pathname.includes("/screenshots")?n.state="Viewing Screenshots":document.location.pathname.includes("/changelog")?(n.details="Reading Changelog",n.state=document.querySelector("h2")?.textContent):document.location.pathname.includes("/donate")?n.state="Browsing Donations Page":document.location.pathname.includes("/image-effects")?n.state="Browsing Image Effects":document.location.pathname.includes("/actions")?n.state="Browsing Actions Page":document.location.pathname.includes("/brand-assets")&&(n.state="Browsing Brand Assets"),document.location.pathname.includes("/faq")?n.state="Browsing FAQ":document.location.pathname.includes("/dev-builds")?n.state="Browsing Dev Builds":document.location.pathname.includes("/region-capture")?n.state="Browsing RC Keybinds":document.location.pathname.includes("/command-line-arguments")?n.state="Browsing CLI Page":document.location.pathname.includes("/translation")?n.state="Reading Translation Guide":document.location.pathname.includes("/custom-uploader")?n.state="Reading Custom Uploaders Guide":document.location.pathname.includes("amazon-s3")?n.state="Reading Amazon S3 Guide":document.location.pathname.includes("/google-cloud-storage")?n.state="Reading Google Cloud Guide":document.location.pathname.includes("website-capture")&&(n.state="Reading Website Capture Guide"),e&&(n.startTimestamp=browsingTimestamp),t||delete n.buttons,presence.setActivity(n)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEUCxTQUFTUSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLFFBQXNCVixTQUFTVyxXQUFXLGFBQWNDLFFBQW9CWixTQUFTVyxXQUFXLFdBQVlFLEVBQWUsQ0FDN0hDLGNBQWUsOERBQ2ZDLGVBQWdCLDhCQUNoQkMsUUFBUyxDQUNMLENBQ0lDLE1BQU8sWUFDUEMsSUFBS0MsU0FBU0MsU0FBU0MsUUFJQSxNQUEvQkYsU0FBU0MsU0FBU0UsVUFDbEJULEVBQWFVLE1BQVEsNEJBQ2RWLEVBQWFHLFNBRWZHLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsZUFDekNYLEVBQWFVLE1BQVEsMEJBQ3JCVixFQUFhWSxjQUFnQix1REFFeEJOLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsZ0JBQ3pDWCxFQUFhVSxNQUFRLHNCQUNoQkosU0FBU0MsU0FBU0UsU0FBU0UsU0FBUyxlQUN6Q1gsRUFBYWEsUUFBVSxvQkFDdkJiLEVBQWFVLE1BQVFKLFNBQVNRLGNBQWMsT0FBT0MsYUFFOUNULFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsV0FDekNYLEVBQWFVLE1BQVEsMEJBQ2hCSixTQUFTQyxTQUFTRSxTQUFTRSxTQUFTLGtCQUN6Q1gsRUFBYVUsTUFBUSx5QkFDaEJKLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsWUFDekNYLEVBQWFVLE1BQVEsd0JBQ2hCSixTQUFTQyxTQUFTRSxTQUFTRSxTQUFTLG1CQUN6Q1gsRUFBYVUsTUFBUSx5QkFDckJKLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsUUFDcENYLEVBQWFVLE1BQVEsZUFDaEJKLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsZUFDekNYLEVBQWFVLE1BQVEsc0JBQ2hCSixTQUFTQyxTQUFTRSxTQUFTRSxTQUFTLG1CQUN6Q1gsRUFBYVUsTUFBUSx1QkFDaEJKLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsMkJBQ3pDWCxFQUFhVSxNQUFRLG9CQUNoQkosU0FBU0MsU0FBU0UsU0FBU0UsU0FBUyxnQkFDekNYLEVBQWFVLE1BQVEsNEJBQ2hCSixTQUFTQyxTQUFTRSxTQUFTRSxTQUFTLG9CQUN6Q1gsRUFBYVUsTUFBUSxpQ0FDaEJKLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMsYUFDekNYLEVBQWFVLE1BQVEsMEJBQ2hCSixTQUFTQyxTQUFTRSxTQUFTRSxTQUFTLHlCQUN6Q1gsRUFBYVUsTUFBUSw2QkFDaEJKLFNBQVNDLFNBQVNFLFNBQVNFLFNBQVMscUJBQ3pDWCxFQUFhVSxNQUFRLGlDQUNyQmIsSUFDQUcsRUFBYWdCLGVBQWlCMUIsbUJBQzdCUyxVQUNNQyxFQUFhRyxRQUN4QmhCLFNBQVM4QixZQUFZakIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4ODg3MjYyMjA1NzE4MTE5MTRcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzaG93VGltZXN0YW1wID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInRpbWVzdGFtcFwiKSwgc2hvd0J1dHRvbnMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvUy9TaGFyZVgvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VUZXh0OiBcIk5hdmlnYXRpbmcgb24gZ2V0c2hhcmV4LmNvbVwiLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQYWdlXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9O1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJCcm93c2luZyBIb21lIFBhZ2VcIjtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5idXR0b25zO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9kb3dubG9hZHNcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJCcm93c2luZyBEb3dubG9hZHMgUGFnZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvZG93bmxvYWRpbmcucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3NjcmVlbnNob3RzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlZpZXdpbmcgU2NyZWVuc2hvdHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jaGFuZ2Vsb2dcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgQ2hhbmdlbG9nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKT8udGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2RvbmF0ZVwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJCcm93c2luZyBEb25hdGlvbnMgUGFnZVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2ltYWdlLWVmZmVjdHNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnJvd3NpbmcgSW1hZ2UgRWZmZWN0c1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2FjdGlvbnNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnJvd3NpbmcgQWN0aW9ucyBQYWdlXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvYnJhbmQtYXNzZXRzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJyb3dzaW5nIEJyYW5kIEFzc2V0c1wiO1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9mYXFcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnJvd3NpbmcgRkFRXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZGV2LWJ1aWxkc1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJCcm93c2luZyBEZXYgQnVpbGRzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvcmVnaW9uLWNhcHR1cmVcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQnJvd3NpbmcgUkMgS2V5YmluZHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jb21tYW5kLWxpbmUtYXJndW1lbnRzXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkJyb3dzaW5nIENMSSBQYWdlXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdHJhbnNsYXRpb25cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiUmVhZGluZyBUcmFuc2xhdGlvbiBHdWlkZVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2N1c3RvbS11cGxvYWRlclwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJSZWFkaW5nIEN1c3RvbSBVcGxvYWRlcnMgR3VpZGVcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImFtYXpvbi1zM1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJSZWFkaW5nIEFtYXpvbiBTMyBHdWlkZVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2dvb2dsZS1jbG91ZC1zdG9yYWdlXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlJlYWRpbmcgR29vZ2xlIENsb3VkIEd1aWRlXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJ3ZWJzaXRlLWNhcHR1cmVcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiUmVhZGluZyBXZWJzaXRlIENhcHR1cmUgR3VpZGVcIjtcbiAgICBpZiAoc2hvd1RpbWVzdGFtcClcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgaWYgKCFzaG93QnV0dG9ucylcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5idXR0b25zO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEdGQlFXRXNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzVjBGQlZ5eERRVUZETEVWQlEzQkZMRmRCUVZjc1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVMEZCVXl4RFFVRkRMRVZCUXpORUxGbEJRVmtzUjBGQmFVSTdVVUZETlVJc1lVRkJZU3hGUVVOYUxEWkVRVUUyUkR0UlFVTTVSQ3hqUVVGakxFVkJRVVVzTmtKQlFUWkNPMUZCUXpkRExFOUJRVThzUlVGQlJUdFpRVU5TTzJkQ1FVTkRMRXRCUVVzc1JVRkJSU3hYUVVGWE8yZENRVU5zUWl4SFFVRkhMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTzJGQlF6TkNPMU5CUTBRN1MwRkRSQ3hEUVVGRE8wbEJSVWdzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1MwRkJTeXhIUVVGSExFVkJRVVU3VVVGRGRrTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0UlFVTXhReXhQUVVGUExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTMEZETlVJN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJUdFJRVU0zUkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPMUZCUXk5RExGbEJRVmtzUTBGQlF5eGhRVUZoTEhkRVFVRnhRaXhEUVVGRE8wdEJRMmhFTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUXpkRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03VTBGRGRrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVN1VVRkRNMFFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dFFrRkJiVUlzUTBGQlF6dFJRVU16UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRE8wdEJReTlFTzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU03VTBGRE0wTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU03VVVGRE4wUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0VFFVTXhReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGRrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0VFFVTjZReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRE5VUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0SlFVYzVReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE9VTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhqUVVGakxFTkJRVU03VTBGRGFFTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRPMUZCUXpGRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03VTBGRGRrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03VVVGRE9VUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0VFFVTjRReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXg1UWtGQmVVSXNRMEZCUXp0UlFVTjBSU3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8xTkJRM0pETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXp0UlFVTXpSQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITERKQ1FVRXlRaXhEUVVGRE8xTkJRemRETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhEUVVGRE8xRkJReTlFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1owTkJRV2RETEVOQlFVTTdVMEZEYkVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM2hFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdVMEZETTBNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTTdVVUZEY0VVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5dzBRa0ZCTkVJc1EwRkJRenRUUVVNNVF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRSUVVNNVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMQ3RDUVVFclFpeERRVUZETzBsQlIzUkVMRWxCUVVrc1lVRkJZVHRSUVVGRkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03U1VGSGJrVXNTVUZCU1N4RFFVRkRMRmRCUVZjN1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZIT1VNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0QlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInNob3dUaW1lc3RhbXAiLCJnZXRTZXR0aW5nIiwic2hvd0J1dHRvbnMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic21hbGxJbWFnZVRleHQiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGhuYW1lIiwic3RhdGUiLCJpbmNsdWRlcyIsInNtYWxsSW1hZ2VLZXkiLCJkZXRhaWxzIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic3RhcnRUaW1lc3RhbXAiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;