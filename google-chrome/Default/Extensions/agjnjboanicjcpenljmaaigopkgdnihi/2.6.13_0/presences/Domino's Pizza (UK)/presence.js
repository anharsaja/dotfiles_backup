var __webpack_exports__={};const presence=new Presence({clientId:"650464804276011009"});presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/Domino's%20Pizza%20(UK)/assets/logo.png",startTimestamp:Date.now()},s=document.location.pathname;switch(s){case"/":e.details="Browing Domino's Pizza",e.state="Home Page";break;case"/menu":e.details="Browing Domino's Pizza",e.state="Menu";break;case"/deals/storedeals":e.details="Browing Domino's Pizza",e.state="Viewing in-store deals";break;default:if(s.startsWith("/menu/pizza/999"))e.details="Browing Domino's Pizza",e.state="Creating a custom pizza";else if(s.startsWith("/deals/deal")&&Number(s.split("/")[s.split("/").length-1]))e.details="Browing Domino's Pizza",e.state="Customising a deal";else switch(s){case"/user/login":e.details="Browing Domino's Pizza",e.state="Logging in...";break;case"/user/register":e.details="Browing Domino's Pizza",e.state="Creating an account";break;case"/welcome":e.details="Browing Domino's Pizza",e.state="Home Page";break;case"/store/moreinfo":e.details="Browing Domino's Pizza",e.state="Viewing store info";break;default:if(s.startsWith("/storefinder/bystoreid"))e.details="Browing Domino's Pizza",e.state="Finding stores";else switch(s){case"/mydominos/addressbook":e.details="Browing Domino's Pizza",e.state="Viewing my addresses";break;case"/mydominos":e.details="Browing Domino's Pizza",e.state="Viewing my profile";break;case"/mydominos/favourites":e.details="Browing Domino's Pizza",e.state="Viewing my favourited orders";break;case"/mydominos/offers":e.details="Browing Domino's Pizza",e.state="Entering a promo code";break;case"/mydominos/paymentmethods":e.details="Browing Domino's Pizza",e.state="Adding a payment method";break;case"/mydominos/personaldetails":e.details="Browing Domino's Pizza",e.state="Editing personal details";break;case"/mydominos/savedpizzas":e.details="Browing Domino's Pizza",e.state="Viewing saved pizzas";break;case"/mydominos/security":e.details="Browing Domino's Pizza",e.state="Changing password";break;case"/contact":e.details="Browing Domino's Pizza",e.state="Contacting support";break;case"/basketdetails/show":{const[s]=document.querySelectorAll(".new-basket-total-price.basket-price"),[a]=document.querySelectorAll(".new-basket-total-price.basket-alt-price");let i,t;s&&(i=s.textContent),a&&(t=a.textContent),e.details="Viewing cart",e.state=`Total: ${i} ${a?`(${t} saved)`:""}`;break}default:e.details="Browing Domino's Pizza"}}}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFFZEYsU0FBU0csR0FBRyxjQUFjLEtBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUsK0VBQ2ZDLGVBQWdCQyxLQUFLQyxPQUN0QkMsRUFBT0MsU0FBU0MsU0FBU0MsU0FDNUIsT0FBUUgsR0FDSixJQUFLLElBQ0RMLEVBQWFTLFFBQVUseUJBQ3ZCVCxFQUFhVSxNQUFRLFlBQ3JCLE1BRUosSUFBSyxRQUNEVixFQUFhUyxRQUFVLHlCQUN2QlQsRUFBYVUsTUFBUSxPQUNyQixNQUVKLElBQUssb0JBQ0RWLEVBQWFTLFFBQVUseUJBQ3ZCVCxFQUFhVSxNQUFRLHlCQUNyQixNQUVKLFFBQ0ksR0FBSUwsRUFBS00sV0FBVyxtQkFDaEJYLEVBQWFTLFFBQVUseUJBQ3ZCVCxFQUFhVSxNQUFRLCtCQUVwQixHQUFJTCxFQUFLTSxXQUFXLGdCQUNyQkMsT0FBT1AsRUFBS1EsTUFBTSxLQUFLUixFQUFLUSxNQUFNLEtBQUtDLE9BQVMsSUFDaERkLEVBQWFTLFFBQVUseUJBQ3ZCVCxFQUFhVSxNQUFRLDBCQUdyQixPQUFRTCxHQUNKLElBQUssY0FDREwsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsZ0JBQ3JCLE1BRUosSUFBSyxpQkFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsc0JBQ3JCLE1BRUosSUFBSyxXQUNEVixFQUFhUyxRQUFVLHlCQUN2QlQsRUFBYVUsTUFBUSxZQUNyQixNQUVKLElBQUssa0JBQ0RWLEVBQWFTLFFBQVUseUJBQ3ZCVCxFQUFhVSxNQUFRLHFCQUNyQixNQUVKLFFBQ0ksR0FBSUwsRUFBS00sV0FBVywwQkFDaEJYLEVBQWFTLFFBQVUseUJBQ3ZCVCxFQUFhVSxNQUFRLHNCQUdyQixPQUFRTCxHQUNKLElBQUsseUJBQ0RMLEVBQWFTLFFBQVUseUJBQ3ZCVCxFQUFhVSxNQUFRLHVCQUNyQixNQUVKLElBQUssYUFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEscUJBQ3JCLE1BRUosSUFBSyx3QkFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsK0JBQ3JCLE1BRUosSUFBSyxvQkFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsd0JBQ3JCLE1BRUosSUFBSyw0QkFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsMEJBQ3JCLE1BRUosSUFBSyw2QkFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsMkJBQ3JCLE1BRUosSUFBSyx5QkFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsdUJBQ3JCLE1BRUosSUFBSyxzQkFDRFYsRUFBYVMsUUFBVSx5QkFDdkJULEVBQWFVLE1BQVEsb0JBQ3JCLE1BRUosSUFBSyxXQUNEVixFQUFhUyxRQUFVLHlCQUN2QlQsRUFBYVUsTUFBUSxxQkFDckIsTUFFSixJQUFLLHNCQUF1QixDQUN4QixNQUFPSyxHQUFTVCxTQUFTVSxpQkFBaUIseUNBQTBDQyxHQUFVWCxTQUFTVSxpQkFBaUIsNENBQ3hILElBQUlFLEVBQVdDLEVBQ1hKLElBQ0FHLEVBQVlILEVBQU1LLGFBQ2xCSCxJQUNBRSxFQUFhRixFQUFPRyxhQUN4QnBCLEVBQWFTLFFBQVUsZUFDdkJULEVBQWFVLE1BQVEsVUFBVVEsS0FBYUQsRUFBUyxJQUFJRSxXQUFzQixLQUMvRSxLQUNKLENBQ0EsUUFDSW5CLEVBQWFTLFFBQVUsMkJBTW5EVCxFQUFhUyxRQUNiYixTQUFTeUIsWUFBWXJCLEdBRXJCSixTQUFTeUIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI2NTA0NjQ4MDQyNzYwMTEwMDlcIixcbn0pO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9EL0RvbWlubydzJTIwUGl6emElMjAoVUspL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICB9LCBwYXRoID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICAgIGNhc2UgXCIvXCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvbWUgUGFnZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIi9tZW51XCI6IHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIk1lbnVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCIvZGVhbHMvc3RvcmVkZWFsc1wiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd2luZyBEb21pbm8ncyBQaXp6YVwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nIGluLXN0b3JlIGRlYWxzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKHBhdGguc3RhcnRzV2l0aChcIi9tZW51L3BpenphLzk5OVwiKSkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDcmVhdGluZyBhIGN1c3RvbSBwaXp6YVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0aC5zdGFydHNXaXRoKFwiL2RlYWxzL2RlYWxcIikgJiZcbiAgICAgICAgICAgICAgICBOdW1iZXIocGF0aC5zcGxpdChcIi9cIilbcGF0aC5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dpbmcgRG9taW5vJ3MgUGl6emFcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkN1c3RvbWlzaW5nIGEgZGVhbFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvdXNlci9sb2dpblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd2luZyBEb21pbm8ncyBQaXp6YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJMb2dnaW5nIGluLi4uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL3VzZXIvcmVnaXN0ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dpbmcgRG9taW5vJ3MgUGl6emFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQ3JlYXRpbmcgYW4gYWNjb3VudFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi93ZWxjb21lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvbWUgUGFnZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9zdG9yZS9tb3JlaW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd2luZyBEb21pbm8ncyBQaXp6YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nIHN0b3JlIGluZm9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiL3N0b3JlZmluZGVyL2J5c3RvcmVpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJGaW5kaW5nIHN0b3Jlc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvbXlkb21pbm9zL2FkZHJlc3Nib29rXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlZpZXdpbmcgbXkgYWRkcmVzc2VzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL215ZG9taW5vc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd2luZyBEb21pbm8ncyBQaXp6YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nIG15IHByb2ZpbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvbXlkb21pbm9zL2Zhdm91cml0ZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dpbmcgRG9taW5vJ3MgUGl6emFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiVmlld2luZyBteSBmYXZvdXJpdGVkIG9yZGVyc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9teWRvbWlub3Mvb2ZmZXJzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkVudGVyaW5nIGEgcHJvbW8gY29kZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9teWRvbWlub3MvcGF5bWVudG1ldGhvZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dpbmcgRG9taW5vJ3MgUGl6emFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiQWRkaW5nIGEgcGF5bWVudCBtZXRob2RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvbXlkb21pbm9zL3BlcnNvbmFsZGV0YWlsc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd2luZyBEb21pbm8ncyBQaXp6YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJFZGl0aW5nIHBlcnNvbmFsIGRldGFpbHNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvbXlkb21pbm9zL3NhdmVkcGl6emFzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlZpZXdpbmcgc2F2ZWQgcGl6emFzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL215ZG9taW5vcy9zZWN1cml0eVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd2luZyBEb21pbm8ncyBQaXp6YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDaGFuZ2luZyBwYXNzd29yZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9jb250YWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93aW5nIERvbWlubydzIFBpenphXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkNvbnRhY3Rpbmcgc3VwcG9ydFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9iYXNrZXRkZXRhaWxzL3Nob3dcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3ByaWNlXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmV3LWJhc2tldC10b3RhbC1wcmljZS5iYXNrZXQtcHJpY2VcIiksIFtzYXZpbmddID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZXctYmFza2V0LXRvdGFsLXByaWNlLmJhc2tldC1hbHQtcHJpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VUZXh0LCBzYXZpbmdUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlVGV4dCA9IHByaWNlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZpbmdUZXh0ID0gc2F2aW5nLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgY2FydFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFRvdGFsOiAke3ByaWNlVGV4dH0gJHtzYXZpbmcgPyBgKCR7c2F2aW5nVGV4dH0gc2F2ZWQpYCA6IFwiXCJ9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd2luZyBEb21pbm8ncyBQaXp6YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNM1FpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNRMEZCUXp0QlFVVklMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlR0SlFVTTVRaXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYWtNc1lVRkJZU3hGUVVOYUxEaEZRVUU0UlR0UlFVTXZSU3hqUVVGakxFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlR0TFFVTXhRaXhGUVVORUxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVWdVF5eFJRVUZSTEVsQlFVa3NSVUZCUlR0UlFVTmlMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFZDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFsQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETzFsQlJXcERMRTFCUVUwN1UwRkRUanRSUVVORUxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTTdXVUZEWWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMWxCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUlRWQ0xFMUJRVTA3VTBGRFRqdFJRVU5FTEV0QlFVc3NiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFpRVU42UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMWxCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03V1VGRk9VTXNUVUZCVFR0VFFVTk9PMUZCUTBRN1dVRkRReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUlVGQlJUdG5Ra0ZEZGtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenRuUWtGRGFFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0aFFVTXZRenRwUWtGQlRTeEpRVU5PTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1lVRkJZU3hEUVVGRE8yZENRVU01UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVOc1JEdG5Ra0ZEUkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMmRDUVVOb1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRzlDUVVGdlFpeERRVUZETzJGQlF6RkRPMmxDUVVGTk8yZENRVU5PTEZGQlFWRXNTVUZCU1N4RlFVRkZPMjlDUVVOaUxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTTdkMEpCUTI1Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03ZDBKQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzWlVGQlpTeERRVUZETzNkQ1FVVnlReXhOUVVGTk8zRkNRVU5PTzI5Q1FVTkVMRXRCUVVzc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0M1FrRkRkRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4M1FrRkJkMElzUTBGQlF6dDNRa0ZEYUVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenQzUWtGRk0wTXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRPM2RDUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzNkQ1FVTm9SQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEZkQlFWY3NRMEZCUXp0M1FrRkZha01zVFVGQlRUdHhRa0ZEVGp0dlFrRkRSQ3hMUVVGTExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN2QwSkJRM1pDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdkMEpCUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03ZDBKQlJURkRMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUTdkMEpCUTBNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFVkJRVVU3TkVKQlF6bERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZDBKQlFYZENMRU5CUVVNN05FSkJRMmhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdlVUpCUTNSRE96WkNRVUZOT3pSQ1FVTk9MRkZCUVZFc1NVRkJTU3hGUVVGRk8yZERRVU5pTEV0QlFVc3NkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dHZRMEZET1VJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJRenR2UTBGRGFFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0dlEwRkZOVU1zVFVGQlRUdHBRMEZEVGp0blEwRkRSQ3hMUVVGTExGbEJRVmtzUTBGQlF5eERRVUZETzI5RFFVTnNRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8yOURRVU5vUkN4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMjlEUVVVeFF5eE5RVUZOTzJsRFFVTk9PMmREUVVORUxFdEJRVXNzZFVKQlFYVkNMRU5CUVVNc1EwRkJRenR2UTBGRE4wSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0dlEwRkRhRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl3NFFrRkJPRUlzUTBGQlF6dHZRMEZGY0VRc1RVRkJUVHRwUTBGRFRqdG5RMEZEUkN4TFFVRkxMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdiME5CUTNwQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03YjBOQlEyaEVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzZFVKQlFYVkNMRU5CUVVNN2IwTkJSVGRETEUxQlFVMDdhVU5CUTA0N1owTkJRMFFzUzBGQlN5d3lRa0ZCTWtJc1EwRkJReXhEUVVGRE8yOURRVU5xUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMjlEUVVOb1JDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMSGxDUVVGNVFpeERRVUZETzI5RFFVVXZReXhOUVVGTk8ybERRVU5PTzJkRFFVTkVMRXRCUVVzc05FSkJRVFJDTEVOQlFVTXNRMEZCUXp0dlEwRkRiRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4M1FrRkJkMElzUTBGQlF6dHZRMEZEYUVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJRenR2UTBGRmFFUXNUVUZCVFR0cFEwRkRUanRuUTBGRFJDeExRVUZMTEhkQ1FVRjNRaXhEUVVGRExFTkJRVU03YjBOQlF6bENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzZDBKQlFYZENMRU5CUVVNN2IwTkJRMmhFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdiME5CUlRWRExFMUJRVTA3YVVOQlEwNDdaME5CUTBRc1MwRkJTeXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMjlEUVVNelFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzI5RFFVTm9SQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEcxQ1FVRnRRaXhEUVVGRE8yOURRVVY2UXl4TlFVRk5PMmxEUVVOT08yZERRVU5FTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNN2IwTkJRMmhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2QwSkJRWGRDTEVOQlFVTTdiME5CUTJoRUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03YjBOQlJURkRMRTFCUVUwN2FVTkJRMDQ3WjBOQlEwUXNTMEZCU3l4eFFrRkJjVUlzUTBGQlF5eERRVUZETzI5RFFVTXpRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVU4yUXl4elEwRkJjME1zUTBGRGRFTXNSVUZEUkN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkRia01zTUVOQlFUQkRMRU5CUXpGRExFTkJRVU03YjBOQlJVZ3NTVUZCU1N4VFFVRlRMRVZCUVVVc1ZVRkJWU3hEUVVGRE8yOURRVVV4UWl4SlFVRkpMRXRCUVVzN2QwTkJRVVVzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNN2IwTkJSWHBETEVsQlFVa3NUVUZCVFR0M1EwRkJSU3hWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXp0dlEwRkZOVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4alFVRmpMRU5CUVVNN2IwTkJRM1JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hUUVVGVExFbEJRM1pETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hWUVVGVkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZEY0VNc1JVRkJSU3hEUVVGRE8yOURRVVZJTEUxQlFVMDdhVU5CUTA0N1owTkJRMFE3YjBOQlEwTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXpzMlFrRkRha1E3ZVVKQlEwUTdhVUpCUTBZN1lVRkRSRHRMUVVOR08wbEJSVVFzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHp0UlFVRkZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMUZCUTNoRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwib24iLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJEYXRlIiwibm93IiwicGF0aCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRldGFpbHMiLCJzdGF0ZSIsInN0YXJ0c1dpdGgiLCJOdW1iZXIiLCJzcGxpdCIsImxlbmd0aCIsInByaWNlIiwicXVlcnlTZWxlY3RvckFsbCIsInNhdmluZyIsInByaWNlVGV4dCIsInNhdmluZ1RleHQiLCJ0ZXh0Q29udGVudCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;