var __webpack_exports__={};const presence=new Presence({clientId:"808667100319186964"}),browsingTimestamp=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({categoryPrimary:"gmail.categoryPrimary",categorySocial:"gmail.categorySocial",categoryUpdates:"gmail.categoryUpdates",categoryPromotions:"gmail.categoryPromotions",categoryForum:"gmail.categoryForum",inLabel:"gmail.inLabel",generalSettings:"gmail.generalSettings",labelSettings:"gmail.labelSettings",inboxSettings:"gmail.inboxSettings",accountSetting:"gmail.accountSetting",filterSettings:"gmail.filterSettings",fwdAndPOPSettings:"gmail.fwdAndPOPSettings",addonsSettings:"gmail.addonsSettings",chatSettings:"gmail.chatSettings",advancedSettings:"gmail.advancedSettings",offlineSettings:"gmail.offlineSettings",themesSettings:"gmail.themesSettings",lookingForEmail:"gmail.lookingForEmail",viewingEmail:"gmail.viewingEmail",viewingStarredEmails:"gmail.viewingStarredEmails",viewingSentEmails:"gmail.viewingSentEmails",viewingSnoozedEmails:"gmail.viewingSnoozedEmails",viewingDrafts:"gmail.viewingDrafts",viewingImportantEmails:"gmail.viewingImportantEmails",viewingTrash:"gmail.viewingTrash",viewingChats:"gmail.viewingChats",viewingScheduled:"gmail.viewingScheduled",viewingSpam:"gmail.viewingSpam",viewingAllEmails:"gmail.viewingAllEmails",composingEmail:"gmail.composingEmail"},await presence.getSetting("lang").catch((()=>"en")))}let strings,oldLang=null;presence.on("UpdateData",(async()=>{const i={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Gmail/assets/logo.png",startTimestamp:browsingTimestamp},t=window.location.href,[e,s,n]=await Promise.all([presence.getSetting("lang").catch((()=>"en")),presence.getSetting("privacy"),presence.getSetting("time")]);n||delete i.startTimestamp,oldLang===e&&strings||(oldLang=e,strings=await getStrings());const g={"category/primary":strings.categoryPrimary,"category/social":strings.categorySocial,"category/updates":strings.categoryUpdates,"category/promotions":strings.categoryPromotions,"category/forum":strings.categoryForum,"settings/general":strings.generalSettings,settings:strings.generalSettings,"settings/labels":strings.labelSettings,"settings/inbox":strings.inboxSettings,"settings/accounts":strings.accountSetting,"settings/filters":strings.filterSettings,"settings/fwdandpop":strings.fwdAndPOPSettings,"settings/addons":strings.addonsSettings,"settings/chat":strings.chatSettings,"settings/advanced":strings.advancedSettings,"settings/offline":strings.offlineSettings,"settings/oldthemes":strings.themesSettings,inbox:strings.categoryPrimary,starred:strings.viewingStarredEmails,snoozed:strings.viewingSnoozedEmails,sent:strings.viewingSentEmails,drafts:strings.viewingDrafts,imp:strings.viewingImportantEmails,chats:strings.viewingChats,scheduled:strings.viewingScheduled,all:strings.viewingAllEmails,spam:strings.viewingSpam,trash:strings.viewingTrash},a=t.split("#")[1];g[a]?i.details=g[a]:t.includes("compose=")?i.details=strings.composingEmail:t.match("#search")?i.details=strings.lookingForEmail:t.match("#label")?(i.details=strings.inLabel,s||(i.state=document.querySelector("div.aim.ain > div").getAttribute("data-tooltip"))):i.details=strings.viewingEmail,i.details?presence.setActivity(i):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZEMsYUFBYSxrQkFJdEJoQyxFQUFhMEIsUUFBVTdCLFFBQVFkLGFBQy9CaUIsRUFBYTBCLFFBQ2J2RSxTQUFTOEUsWUFBWWpDLEdBRXJCN0MsU0FBUzhFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiODA4NjY3MTAwMzE5MTg2OTY0XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgICAgICBjYXRlZ29yeVByaW1hcnk6IFwiZ21haWwuY2F0ZWdvcnlQcmltYXJ5XCIsXG4gICAgICAgIGNhdGVnb3J5U29jaWFsOiBcImdtYWlsLmNhdGVnb3J5U29jaWFsXCIsXG4gICAgICAgIGNhdGVnb3J5VXBkYXRlczogXCJnbWFpbC5jYXRlZ29yeVVwZGF0ZXNcIixcbiAgICAgICAgY2F0ZWdvcnlQcm9tb3Rpb25zOiBcImdtYWlsLmNhdGVnb3J5UHJvbW90aW9uc1wiLFxuICAgICAgICBjYXRlZ29yeUZvcnVtOiBcImdtYWlsLmNhdGVnb3J5Rm9ydW1cIixcbiAgICAgICAgaW5MYWJlbDogXCJnbWFpbC5pbkxhYmVsXCIsXG4gICAgICAgIGdlbmVyYWxTZXR0aW5nczogXCJnbWFpbC5nZW5lcmFsU2V0dGluZ3NcIixcbiAgICAgICAgbGFiZWxTZXR0aW5nczogXCJnbWFpbC5sYWJlbFNldHRpbmdzXCIsXG4gICAgICAgIGluYm94U2V0dGluZ3M6IFwiZ21haWwuaW5ib3hTZXR0aW5nc1wiLFxuICAgICAgICBhY2NvdW50U2V0dGluZzogXCJnbWFpbC5hY2NvdW50U2V0dGluZ1wiLFxuICAgICAgICBmaWx0ZXJTZXR0aW5nczogXCJnbWFpbC5maWx0ZXJTZXR0aW5nc1wiLFxuICAgICAgICBmd2RBbmRQT1BTZXR0aW5nczogXCJnbWFpbC5md2RBbmRQT1BTZXR0aW5nc1wiLFxuICAgICAgICBhZGRvbnNTZXR0aW5nczogXCJnbWFpbC5hZGRvbnNTZXR0aW5nc1wiLFxuICAgICAgICBjaGF0U2V0dGluZ3M6IFwiZ21haWwuY2hhdFNldHRpbmdzXCIsXG4gICAgICAgIGFkdmFuY2VkU2V0dGluZ3M6IFwiZ21haWwuYWR2YW5jZWRTZXR0aW5nc1wiLFxuICAgICAgICBvZmZsaW5lU2V0dGluZ3M6IFwiZ21haWwub2ZmbGluZVNldHRpbmdzXCIsXG4gICAgICAgIHRoZW1lc1NldHRpbmdzOiBcImdtYWlsLnRoZW1lc1NldHRpbmdzXCIsXG4gICAgICAgIGxvb2tpbmdGb3JFbWFpbDogXCJnbWFpbC5sb29raW5nRm9yRW1haWxcIixcbiAgICAgICAgdmlld2luZ0VtYWlsOiBcImdtYWlsLnZpZXdpbmdFbWFpbFwiLFxuICAgICAgICB2aWV3aW5nU3RhcnJlZEVtYWlsczogXCJnbWFpbC52aWV3aW5nU3RhcnJlZEVtYWlsc1wiLFxuICAgICAgICB2aWV3aW5nU2VudEVtYWlsczogXCJnbWFpbC52aWV3aW5nU2VudEVtYWlsc1wiLFxuICAgICAgICB2aWV3aW5nU25vb3plZEVtYWlsczogXCJnbWFpbC52aWV3aW5nU25vb3plZEVtYWlsc1wiLFxuICAgICAgICB2aWV3aW5nRHJhZnRzOiBcImdtYWlsLnZpZXdpbmdEcmFmdHNcIixcbiAgICAgICAgdmlld2luZ0ltcG9ydGFudEVtYWlsczogXCJnbWFpbC52aWV3aW5nSW1wb3J0YW50RW1haWxzXCIsXG4gICAgICAgIHZpZXdpbmdUcmFzaDogXCJnbWFpbC52aWV3aW5nVHJhc2hcIixcbiAgICAgICAgdmlld2luZ0NoYXRzOiBcImdtYWlsLnZpZXdpbmdDaGF0c1wiLFxuICAgICAgICB2aWV3aW5nU2NoZWR1bGVkOiBcImdtYWlsLnZpZXdpbmdTY2hlZHVsZWRcIixcbiAgICAgICAgdmlld2luZ1NwYW06IFwiZ21haWwudmlld2luZ1NwYW1cIixcbiAgICAgICAgdmlld2luZ0FsbEVtYWlsczogXCJnbWFpbC52aWV3aW5nQWxsRW1haWxzXCIsXG4gICAgICAgIGNvbXBvc2luZ0VtYWlsOiBcImdtYWlsLmNvbXBvc2luZ0VtYWlsXCIsXG4gICAgfSwgYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSk7XG59XG5sZXQgc3RyaW5ncywgb2xkTGFuZyA9IG51bGw7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR21haWwvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYsIFtuZXdMYW5nLCBwcml2YWN5LCB0aW1lXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSxcbiAgICAgICAgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lXCIpLFxuICAgIF0pO1xuICAgIGlmICghdGltZSlcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICBpZiAob2xkTGFuZyAhPT0gbmV3TGFuZyB8fCAhc3RyaW5ncykge1xuICAgICAgICBvbGRMYW5nID0gbmV3TGFuZztcbiAgICAgICAgc3RyaW5ncyA9IGF3YWl0IGdldFN0cmluZ3MoKTtcbiAgICB9XG4gICAgY29uc3QgcGFnZXMgPSB7XG4gICAgICAgIFwiY2F0ZWdvcnkvcHJpbWFyeVwiOiBzdHJpbmdzLmNhdGVnb3J5UHJpbWFyeSxcbiAgICAgICAgXCJjYXRlZ29yeS9zb2NpYWxcIjogc3RyaW5ncy5jYXRlZ29yeVNvY2lhbCxcbiAgICAgICAgXCJjYXRlZ29yeS91cGRhdGVzXCI6IHN0cmluZ3MuY2F0ZWdvcnlVcGRhdGVzLFxuICAgICAgICBcImNhdGVnb3J5L3Byb21vdGlvbnNcIjogc3RyaW5ncy5jYXRlZ29yeVByb21vdGlvbnMsXG4gICAgICAgIFwiY2F0ZWdvcnkvZm9ydW1cIjogc3RyaW5ncy5jYXRlZ29yeUZvcnVtLFxuICAgICAgICBcInNldHRpbmdzL2dlbmVyYWxcIjogc3RyaW5ncy5nZW5lcmFsU2V0dGluZ3MsXG4gICAgICAgIHNldHRpbmdzOiBzdHJpbmdzLmdlbmVyYWxTZXR0aW5ncyxcbiAgICAgICAgXCJzZXR0aW5ncy9sYWJlbHNcIjogc3RyaW5ncy5sYWJlbFNldHRpbmdzLFxuICAgICAgICBcInNldHRpbmdzL2luYm94XCI6IHN0cmluZ3MuaW5ib3hTZXR0aW5ncyxcbiAgICAgICAgXCJzZXR0aW5ncy9hY2NvdW50c1wiOiBzdHJpbmdzLmFjY291bnRTZXR0aW5nLFxuICAgICAgICBcInNldHRpbmdzL2ZpbHRlcnNcIjogc3RyaW5ncy5maWx0ZXJTZXR0aW5ncyxcbiAgICAgICAgXCJzZXR0aW5ncy9md2RhbmRwb3BcIjogc3RyaW5ncy5md2RBbmRQT1BTZXR0aW5ncyxcbiAgICAgICAgXCJzZXR0aW5ncy9hZGRvbnNcIjogc3RyaW5ncy5hZGRvbnNTZXR0aW5ncyxcbiAgICAgICAgXCJzZXR0aW5ncy9jaGF0XCI6IHN0cmluZ3MuY2hhdFNldHRpbmdzLFxuICAgICAgICBcInNldHRpbmdzL2FkdmFuY2VkXCI6IHN0cmluZ3MuYWR2YW5jZWRTZXR0aW5ncyxcbiAgICAgICAgXCJzZXR0aW5ncy9vZmZsaW5lXCI6IHN0cmluZ3Mub2ZmbGluZVNldHRpbmdzLFxuICAgICAgICBcInNldHRpbmdzL29sZHRoZW1lc1wiOiBzdHJpbmdzLnRoZW1lc1NldHRpbmdzLFxuICAgICAgICBpbmJveDogc3RyaW5ncy5jYXRlZ29yeVByaW1hcnksXG4gICAgICAgIHN0YXJyZWQ6IHN0cmluZ3Mudmlld2luZ1N0YXJyZWRFbWFpbHMsXG4gICAgICAgIHNub296ZWQ6IHN0cmluZ3Mudmlld2luZ1Nub296ZWRFbWFpbHMsXG4gICAgICAgIHNlbnQ6IHN0cmluZ3Mudmlld2luZ1NlbnRFbWFpbHMsXG4gICAgICAgIGRyYWZ0czogc3RyaW5ncy52aWV3aW5nRHJhZnRzLFxuICAgICAgICBpbXA6IHN0cmluZ3Mudmlld2luZ0ltcG9ydGFudEVtYWlscyxcbiAgICAgICAgY2hhdHM6IHN0cmluZ3Mudmlld2luZ0NoYXRzLFxuICAgICAgICBzY2hlZHVsZWQ6IHN0cmluZ3Mudmlld2luZ1NjaGVkdWxlZCxcbiAgICAgICAgYWxsOiBzdHJpbmdzLnZpZXdpbmdBbGxFbWFpbHMsXG4gICAgICAgIHNwYW06IHN0cmluZ3Mudmlld2luZ1NwYW0sXG4gICAgICAgIHRyYXNoOiBzdHJpbmdzLnZpZXdpbmdUcmFzaCxcbiAgICB9LCBjdXJyZW50UGFnZSA9IHBhdGguc3BsaXQoXCIjXCIpWzFdO1xuICAgIGlmIChwYWdlc1tjdXJyZW50UGFnZV0pXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbY3VycmVudFBhZ2VdO1xuICAgIGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoXCJjb21wb3NlPVwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLmNvbXBvc2luZ0VtYWlsO1xuICAgIGVsc2UgaWYgKHBhdGgubWF0Y2goXCIjc2VhcmNoXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MubG9va2luZ0ZvckVtYWlsO1xuICAgIGVsc2UgaWYgKHBhdGgubWF0Y2goXCIjbGFiZWxcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLmluTGFiZWw7XG4gICAgICAgIGlmICghcHJpdmFjeSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImRpdi5haW0uYWluID4gZGl2XCIpXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtdG9vbHRpcFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gc3RyaW5ncy52aWV3aW5nRW1haWw7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeExRVUZMTEZWQlFWVXNWVUZCVlR0SlFVTjRRaXhQUVVGUExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlEzcENPMUZCUTBNc1pVRkJaU3hGUVVGRkxIVkNRVUYxUWp0UlFVTjRReXhqUVVGakxFVkJRVVVzYzBKQlFYTkNPMUZCUTNSRExHVkJRV1VzUlVGQlJTeDFRa0ZCZFVJN1VVRkRlRU1zYTBKQlFXdENMRVZCUVVVc01FSkJRVEJDTzFGQlF6bERMR0ZCUVdFc1JVRkJSU3h4UWtGQmNVSTdVVUZEY0VNc1QwRkJUeXhGUVVGRkxHVkJRV1U3VVVGRGVFSXNaVUZCWlN4RlFVRkZMSFZDUVVGMVFqdFJRVU40UXl4aFFVRmhMRVZCUVVVc2NVSkJRWEZDTzFGQlEzQkRMR0ZCUVdFc1JVRkJSU3h4UWtGQmNVSTdVVUZEY0VNc1kwRkJZeXhGUVVGRkxITkNRVUZ6UWp0UlFVTjBReXhqUVVGakxFVkJRVVVzYzBKQlFYTkNPMUZCUTNSRExHbENRVUZwUWl4RlFVRkZMSGxDUVVGNVFqdFJRVU0xUXl4alFVRmpMRVZCUVVVc2MwSkJRWE5DTzFGQlEzUkRMRmxCUVZrc1JVRkJSU3h2UWtGQmIwSTdVVUZEYkVNc1owSkJRV2RDTEVWQlFVVXNkMEpCUVhkQ08xRkJRekZETEdWQlFXVXNSVUZCUlN4MVFrRkJkVUk3VVVGRGVFTXNZMEZCWXl4RlFVRkZMSE5DUVVGelFqdFJRVU4wUXl4bFFVRmxMRVZCUVVVc2RVSkJRWFZDTzFGQlEzaERMRmxCUVZrc1JVRkJSU3h2UWtGQmIwSTdVVUZEYkVNc2IwSkJRVzlDTEVWQlFVVXNORUpCUVRSQ08xRkJRMnhFTEdsQ1FVRnBRaXhGUVVGRkxIbENRVUY1UWp0UlFVTTFReXh2UWtGQmIwSXNSVUZCUlN3MFFrRkJORUk3VVVGRGJFUXNZVUZCWVN4RlFVRkZMSEZDUVVGeFFqdFJRVU53UXl4elFrRkJjMElzUlVGQlJTdzRRa0ZCT0VJN1VVRkRkRVFzV1VGQldTeEZRVUZGTEc5Q1FVRnZRanRSUVVOc1F5eFpRVUZaTEVWQlFVVXNiMEpCUVc5Q08xRkJRMnhETEdkQ1FVRm5RaXhGUVVGRkxIZENRVUYzUWp0UlFVTXhReXhYUVVGWExFVkJRVVVzYlVKQlFXMUNPMUZCUTJoRExHZENRVUZuUWl4RlFVRkZMSGRDUVVGM1FqdFJRVU14UXl4alFVRmpMRVZCUVVVc2MwSkJRWE5DTzB0QlEzUkRMRVZCUTBRc1RVRkJUU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZUTEUxQlFVMHNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZETTBRc1EwRkJRenRCUVVOSUxFTkJRVU03UVVGRlJDeEpRVUZKTEU5QlFTdERMRVZCUTJ4RUxFOUJRVThzUjBGQlZ5eEpRVUZKTEVOQlFVTTdRVUZGZUVJc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFpRVUZaTEVkQlFXbENPMUZCUTJwRExHRkJRV0VzUlVGRFdpdzBSRUZCTkVRN1VVRkROMFFzWTBGQll5eEZRVUZGTEdsQ1FVRnBRanRMUVVOcVF5eEZRVU5FTEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGRE0wSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNMVF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRlRMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRja1FzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4VFFVRlRMRU5CUVVNN1VVRkRka01zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCVlN4TlFVRk5MRU5CUVVNN1MwRkRjRU1zUTBGQlF5eERRVUZETzBsQlJVb3NTVUZCU1N4RFFVRkRMRWxCUVVrN1VVRkJSU3hQUVVGUExGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTTdTVUZET1VNc1NVRkJTU3hQUVVGUExFdEJRVXNzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMUZCUTNCRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZEYkVJc1QwRkJUeXhIUVVGSExFMUJRVTBzVlVGQlZTeEZRVUZGTEVOQlFVTTdTMEZETjBJN1NVRkZSQ3hOUVVGTkxFdEJRVXNzUjBGQk1rSTdVVUZEY0VNc2EwSkJRV3RDTEVWQlFVVXNUMEZCVHl4RFFVRkRMR1ZCUVdVN1VVRkRNME1zYVVKQlFXbENMRVZCUVVVc1QwRkJUeXhEUVVGRExHTkJRV003VVVGRGVrTXNhMEpCUVd0Q0xFVkJRVVVzVDBGQlR5eERRVUZETEdWQlFXVTdVVUZETTBNc2NVSkJRWEZDTEVWQlFVVXNUMEZCVHl4RFFVRkRMR3RDUVVGclFqdFJRVU5xUkN4blFrRkJaMElzUlVGQlJTeFBRVUZQTEVOQlFVTXNZVUZCWVR0UlFVTjJReXhyUWtGQmEwSXNSVUZCUlN4UFFVRlBMRU5CUVVNc1pVRkJaVHRSUVVNelF5eFJRVUZSTEVWQlFVVXNUMEZCVHl4RFFVRkRMR1ZCUVdVN1VVRkRha01zYVVKQlFXbENMRVZCUVVVc1QwRkJUeXhEUVVGRExHRkJRV0U3VVVGRGVFTXNaMEpCUVdkQ0xFVkJRVVVzVDBGQlR5eERRVUZETEdGQlFXRTdVVUZEZGtNc2JVSkJRVzFDTEVWQlFVVXNUMEZCVHl4RFFVRkRMR05CUVdNN1VVRkRNME1zYTBKQlFXdENMRVZCUVVVc1QwRkJUeXhEUVVGRExHTkJRV003VVVGRE1VTXNiMEpCUVc5Q0xFVkJRVVVzVDBGQlR5eERRVUZETEdsQ1FVRnBRanRSUVVNdlF5eHBRa0ZCYVVJc1JVRkJSU3hQUVVGUExFTkJRVU1zWTBGQll6dFJRVU42UXl4bFFVRmxMRVZCUVVVc1QwRkJUeXhEUVVGRExGbEJRVms3VVVGRGNrTXNiVUpCUVcxQ0xFVkJRVVVzVDBGQlR5eERRVUZETEdkQ1FVRm5RanRSUVVNM1F5eHJRa0ZCYTBJc1JVRkJSU3hQUVVGUExFTkJRVU1zWlVGQlpUdFJRVU16UXl4dlFrRkJiMElzUlVGQlJTeFBRVUZQTEVOQlFVTXNZMEZCWXp0UlFVTTFReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEdWQlFXVTdVVUZET1VJc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eHZRa0ZCYjBJN1VVRkRja01zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4dlFrRkJiMEk3VVVGRGNrTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhwUWtGQmFVSTdVVUZETDBJc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eGhRVUZoTzFGQlF6ZENMRWRCUVVjc1JVRkJSU3hQUVVGUExFTkJRVU1zYzBKQlFYTkNPMUZCUTI1RExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNXVUZCV1R0UlFVTXpRaXhUUVVGVExFVkJRVVVzVDBGQlR5eERRVUZETEdkQ1FVRm5RanRSUVVOdVF5eEhRVUZITEVWQlFVVXNUMEZCVHl4RFFVRkRMR2RDUVVGblFqdFJRVU0zUWl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExGZEJRVmM3VVVGRGVrSXNTMEZCU3l4RlFVRkZMRTlCUVU4c1EwRkJReXhaUVVGWk8wdEJRek5DTEVWQlEwUXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZiRU1zU1VGQlNTeExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1UwRkROMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOcVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU03VTBGRE1VTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU0zUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTTdVMEZETTBNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMUZCUXpsQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVOMlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTJJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTzJsQ1FVTXpRaXhoUVVGaExFTkJRV2xDTEcxQ1FVRnRRaXhEUVVGRE8ybENRVU5zUkN4WlFVRlpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03VTBGREwwSTdTMEZEUkRzN1VVRkJUU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNN1NVRkZia1FzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiYXN5bmMiLCJnZXRTdHJpbmdzIiwiY2F0ZWdvcnlQcmltYXJ5IiwiY2F0ZWdvcnlTb2NpYWwiLCJjYXRlZ29yeVVwZGF0ZXMiLCJjYXRlZ29yeVByb21vdGlvbnMiLCJjYXRlZ29yeUZvcnVtIiwiaW5MYWJlbCIsImdlbmVyYWxTZXR0aW5ncyIsImxhYmVsU2V0dGluZ3MiLCJpbmJveFNldHRpbmdzIiwiYWNjb3VudFNldHRpbmciLCJmaWx0ZXJTZXR0aW5ncyIsImZ3ZEFuZFBPUFNldHRpbmdzIiwiYWRkb25zU2V0dGluZ3MiLCJjaGF0U2V0dGluZ3MiLCJhZHZhbmNlZFNldHRpbmdzIiwib2ZmbGluZVNldHRpbmdzIiwidGhlbWVzU2V0dGluZ3MiLCJsb29raW5nRm9yRW1haWwiLCJ2aWV3aW5nRW1haWwiLCJ2aWV3aW5nU3RhcnJlZEVtYWlscyIsInZpZXdpbmdTZW50RW1haWxzIiwidmlld2luZ1Nub296ZWRFbWFpbHMiLCJ2aWV3aW5nRHJhZnRzIiwidmlld2luZ0ltcG9ydGFudEVtYWlscyIsInZpZXdpbmdUcmFzaCIsInZpZXdpbmdDaGF0cyIsInZpZXdpbmdTY2hlZHVsZWQiLCJ2aWV3aW5nU3BhbSIsInZpZXdpbmdBbGxFbWFpbHMiLCJjb21wb3NpbmdFbWFpbCIsImdldFNldHRpbmciLCJjYXRjaCIsInN0cmluZ3MiLCJvbGRMYW5nIiwib24iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibmV3TGFuZyIsInByaXZhY3kiLCJ0aW1lIiwiUHJvbWlzZSIsImFsbCIsInBhZ2VzIiwic2V0dGluZ3MiLCJpbmJveCIsInN0YXJyZWQiLCJzbm9vemVkIiwic2VudCIsImRyYWZ0cyIsImltcCIsImNoYXRzIiwic2NoZWR1bGVkIiwic3BhbSIsInRyYXNoIiwiY3VycmVudFBhZ2UiLCJzcGxpdCIsImRldGFpbHMiLCJpbmNsdWRlcyIsIm1hdGNoIiwic3RhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;