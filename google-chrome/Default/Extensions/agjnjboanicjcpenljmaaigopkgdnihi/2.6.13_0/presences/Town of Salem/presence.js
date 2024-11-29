var __webpack_exports__={};const presence=new Presence({clientId:"754771926857285782"});var GameState,GameType;!function(e){e.Night="night",e.Day="day",e.End="end",e.AfterGame="afterGame",e.PreGame="preGame"}(GameState||(GameState={})),function(e){e.Classic="Classic",e.Ranked="Ranked"}(GameType||(GameType={}));const gameTypeNames={RankedPractice:"Ranked Practice",RapidMode:"Custom Rapid Mode",DraculasPalace:"Dracula's Palace",ClassicTownTraitor:"Town Traitor",CovenClassic:"Classic Coven",CovenRankedPractice:"Coven Ranked Practice",CovenMafia:"Mafia Returns",CovenCustom:"Custom Coven",CovenTownTraitor:"Coven Town Traitor",CovenAllAny:"Coven All Any",AllAny:"All Any"},oldState={scene:"BigLogin",page:"",day:1,gameMode:GameType.Classic,state:GameState.Day},currentState=Object.assign({},oldState);let elapsed=Math.round(Date.now()/1e3),lastId=null;function handleLog(e){if(e.startsWith("Switched to ")||e.startsWith("Switched additively to")){const t=e.match(/^Switched(?: additively)? to(?: scene)? (.*) Scene/m)[1].trim();currentState.scene=t,"BigPreGame"===t&&(currentState.state=GameState.PreGame)}else if(e.startsWith("Entered HomeSceneController.ShowView()"))currentState.page=e.match(/^Entered HomeSceneController.ShowView\(\) - View passed in: (.*)$/m)[1].trim();else if(e.startsWith("Entered "))switch(e.match(/^Entered (.*)$/m)[1].trim()){case"HandleStartRanked":currentState.scene="BigLobby",currentState.gameMode=GameType.Ranked;break;case"HandleOnLeaveRankedQueue":currentState.scene="BigHome",currentState.gameMode=GameType.Classic}else if(e.startsWith("Creating lobby:"))currentState.gameMode=e.match(/^Creating lobby: (.*?) \|/)[1];else if(/\[Network\] <color=.*?>\[Received\] <b>/.test(e)){const t=e.match(/\[Network\] <color=.*?>\[Received\] <b>(.*?)<\/b>/)[1];switch(t){case"PickNames":case"RoleAndPosition":currentState.page=t,currentState.state=GameState.PreGame;break;case"StartFirstDay":currentState.day=1,currentState.state=GameState.Day,currentState.page="StartDiscussion";break;case"StartDay":currentState.day++,currentState.state=GameState.Day,currentState.page="";break;case"StartNight":currentState.state=GameState.Night,currentState.page="";break;case"FullMoonNight":case"StartDiscussion":case"StartDefense":case"StartJudgement":case"StartVoting":case"WhoDiedAndHow":currentState.page=t;break;case"SomeoneHasWon":currentState.state=GameState.End}}}const injectedLoggerScript=document.createElement("script");injectedLoggerScript.type="text/javascript",injectedLoggerScript.textContent="\n{\n\tlet counter = 0;\n\tconsole.stdlog = console.log.bind(console);\n\tconsole.logs = [];\n\tconsole.log = function() {\n\t\tconst log = arguments[0];\n\t\tif (/^Switched |^Entered |^Creating |\\[Network\\] <color=.*?>\\[Received\\] <b>/.test(log)) {\n\t\t\tconsole.logs.push({\n\t\t\t\tcontent: log,\n\t\t\t\tid: counter,\n\t\t\t});\n\t\t\tcounter++;\n\t\t\tif (counter > 10000) counter = 0;\n\t\t}\n\t\twhile (console.logs.length > 100) console.logs.shift();\n\t\tconsole.stdlog.apply(console, arguments);\n\t};\n}\n",document.head.appendChild(injectedLoggerScript),setInterval((async()=>{const e=await presence.getPageletiable('console"]["logs');let t=0;for(let a=e.length-1;a>=0;a--)if(e[a].id===lastId){t=a+1;break}for(let a=t;a<e.length;a++)handleLog(e[a].content);e.length>0&&(lastId=e[e.length-1].id)}),1e3),presence.on("UpdateData",(()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/Town%20of%20Salem/assets/logo.jpg"};if("/TownOfSalem/"!==window.location.pathname)e.details="Browsing BlankMediaGames",e.state=document.title,e.startTimestamp=elapsed;else switch(oldState.scene!==currentState.scene&&(elapsed=Math.round(Date.now()/1e3)),e.startTimestamp=elapsed,Object.assign(oldState,currentState),currentState.scene){case"BigLogin":e.details="Logging in";break;case"BigHome":switch(currentState.page){case"GameModeSelect":e.details="Selecting Game Mode";break;case"Customization":e.details="Customizing Character";break;case"Party":e.details="In a Party";break;default:e.details="Browsing Main Menu",e.state=currentState.page}break;case"BigLobby":e.details="Waiting in a Lobby",e.state=gameTypeNames[currentState.gameMode]??currentState.gameMode;break;case"BigPreGame":e.details="Loading Game",e.state=gameTypeNames[currentState.gameMode]??currentState.gameMode;break;case"BigGame":switch(e.details=`Playing a ${gameTypeNames[currentState.gameMode]??currentState.gameMode} Game`,currentState.state){case GameState.PreGame:switch(currentState.page){case"PickNames":e.state="Choosing Names";break;case"RoleAndPosition":e.state="Getting a Role"}break;case GameState.Day:switch(e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/Town%20of%20Salem/assets/0.png",currentState.page){case"StartDiscussion":e.state=`Discussion | Day ${currentState.day}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/Town%20of%20Salem/assets/1.png";break;case"StartVoting":e.state=`Voting | Day ${currentState.day}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/Town%20of%20Salem/assets/3.png";break;case"WhoDiedAndHow":e.state=`Viewing a Death | Day ${currentState.day}`;break;case"StartDefense":e.state=`Defense | Day ${currentState.day}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/Town%20of%20Salem/assets/5.png";break;case"StartJudgement":e.state=`Judgement | Day ${currentState.day}`,e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/Town%20of%20Salem/assets/4.png";break;default:e.state=`Day ${currentState.day}`}break;case GameState.Night:e.smallImageKey="https://cdn.rcd.gg/PreMiD/websites/T/Town%20of%20Salem/assets/2.png","FullMoonNight"===currentState.page?e.state=`Night ${currentState.day} (Full Moon)`:e.state=`Night ${currentState.day}`;break;case GameState.End:e.state="Viewing End Screen"}break;case"BigEndGame":e.details=`Playing a ${gameTypeNames[currentState.gameMode]??currentState.gameMode} Game`,e.state="Viewing After Game Screen"}e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxRQUNibkUsU0FBU3VFLFlBQVlULEdBRXJCOUQsU0FBU3VFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNzU0NzcxOTI2ODU3Mjg1NzgyXCIsXG59KTtcbnZhciBHYW1lU3RhdGU7XG4oZnVuY3Rpb24gKEdhbWVTdGF0ZSkge1xuICAgIEdhbWVTdGF0ZVtcIk5pZ2h0XCJdID0gXCJuaWdodFwiO1xuICAgIEdhbWVTdGF0ZVtcIkRheVwiXSA9IFwiZGF5XCI7XG4gICAgR2FtZVN0YXRlW1wiRW5kXCJdID0gXCJlbmRcIjtcbiAgICBHYW1lU3RhdGVbXCJBZnRlckdhbWVcIl0gPSBcImFmdGVyR2FtZVwiO1xuICAgIEdhbWVTdGF0ZVtcIlByZUdhbWVcIl0gPSBcInByZUdhbWVcIjtcbn0pKEdhbWVTdGF0ZSB8fCAoR2FtZVN0YXRlID0ge30pKTtcbnZhciBHYW1lVHlwZTtcbihmdW5jdGlvbiAoR2FtZVR5cGUpIHtcbiAgICBHYW1lVHlwZVtcIkNsYXNzaWNcIl0gPSBcIkNsYXNzaWNcIjtcbiAgICBHYW1lVHlwZVtcIlJhbmtlZFwiXSA9IFwiUmFua2VkXCI7XG59KShHYW1lVHlwZSB8fCAoR2FtZVR5cGUgPSB7fSkpO1xuY29uc3QgZ2FtZVR5cGVOYW1lcyA9IHtcbiAgICBSYW5rZWRQcmFjdGljZTogXCJSYW5rZWQgUHJhY3RpY2VcIixcbiAgICBSYXBpZE1vZGU6IFwiQ3VzdG9tIFJhcGlkIE1vZGVcIixcbiAgICBEcmFjdWxhc1BhbGFjZTogXCJEcmFjdWxhJ3MgUGFsYWNlXCIsXG4gICAgQ2xhc3NpY1Rvd25UcmFpdG9yOiBcIlRvd24gVHJhaXRvclwiLFxuICAgIENvdmVuQ2xhc3NpYzogXCJDbGFzc2ljIENvdmVuXCIsXG4gICAgQ292ZW5SYW5rZWRQcmFjdGljZTogXCJDb3ZlbiBSYW5rZWQgUHJhY3RpY2VcIixcbiAgICBDb3Zlbk1hZmlhOiBcIk1hZmlhIFJldHVybnNcIixcbiAgICBDb3ZlbkN1c3RvbTogXCJDdXN0b20gQ292ZW5cIixcbiAgICBDb3ZlblRvd25UcmFpdG9yOiBcIkNvdmVuIFRvd24gVHJhaXRvclwiLFxuICAgIENvdmVuQWxsQW55OiBcIkNvdmVuIEFsbCBBbnlcIixcbiAgICBBbGxBbnk6IFwiQWxsIEFueVwiLFxufSwgb2xkU3RhdGUgPSB7XG4gICAgc2NlbmU6IFwiQmlnTG9naW5cIixcbiAgICBwYWdlOiBcIlwiLFxuICAgIGRheTogMSxcbiAgICBnYW1lTW9kZTogR2FtZVR5cGUuQ2xhc3NpYyxcbiAgICBzdGF0ZTogR2FtZVN0YXRlLkRheSxcbn0sIGN1cnJlbnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIG9sZFN0YXRlKTtcbmxldCBlbGFwc2VkID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCksIGxhc3RJZCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVMb2cobG9nKSB7XG4gICAgaWYgKGxvZy5zdGFydHNXaXRoKFwiU3dpdGNoZWQgdG8gXCIpIHx8XG4gICAgICAgIGxvZy5zdGFydHNXaXRoKFwiU3dpdGNoZWQgYWRkaXRpdmVseSB0b1wiKSkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IGxvZ1xuICAgICAgICAgICAgLm1hdGNoKC9eU3dpdGNoZWQoPzogYWRkaXRpdmVseSk/IHRvKD86IHNjZW5lKT8gKC4qKSBTY2VuZS9tKVsxXVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgY3VycmVudFN0YXRlLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gXCJCaWdQcmVHYW1lXCIpXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUuc3RhdGUgPSBHYW1lU3RhdGUuUHJlR2FtZTtcbiAgICB9XG4gICAgZWxzZSBpZiAobG9nLnN0YXJ0c1dpdGgoXCJFbnRlcmVkIEhvbWVTY2VuZUNvbnRyb2xsZXIuU2hvd1ZpZXcoKVwiKSkge1xuICAgICAgICBjdXJyZW50U3RhdGUucGFnZSA9IGxvZ1xuICAgICAgICAgICAgLm1hdGNoKC9eRW50ZXJlZCBIb21lU2NlbmVDb250cm9sbGVyLlNob3dWaWV3XFwoXFwpIC0gVmlldyBwYXNzZWQgaW46ICguKikkL20pWzFdXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChsb2cuc3RhcnRzV2l0aChcIkVudGVyZWQgXCIpKSB7XG4gICAgICAgIHN3aXRjaCAobG9nLm1hdGNoKC9eRW50ZXJlZCAoLiopJC9tKVsxXS50cmltKCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJIYW5kbGVTdGFydFJhbmtlZFwiOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLnNjZW5lID0gXCJCaWdMb2JieVwiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5nYW1lTW9kZSA9IEdhbWVUeXBlLlJhbmtlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJIYW5kbGVPbkxlYXZlUmFua2VkUXVldWVcIjoge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zY2VuZSA9IFwiQmlnSG9tZVwiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5nYW1lTW9kZSA9IEdhbWVUeXBlLkNsYXNzaWM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobG9nLnN0YXJ0c1dpdGgoXCJDcmVhdGluZyBsb2JieTpcIikpXG4gICAgICAgIGN1cnJlbnRTdGF0ZS5nYW1lTW9kZSA9IGxvZy5tYXRjaCgvXkNyZWF0aW5nIGxvYmJ5OiAoLio/KSBcXHwvKVsxXTtcbiAgICBlbHNlIGlmICgvXFxbTmV0d29ya1xcXSA8Y29sb3I9Lio/PlxcW1JlY2VpdmVkXFxdIDxiPi8udGVzdChsb2cpKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGxvZy5tYXRjaCgvXFxbTmV0d29ya1xcXSA8Y29sb3I9Lio/PlxcW1JlY2VpdmVkXFxdIDxiPiguKj8pPFxcL2I+LylbMV07XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwiUGlja05hbWVzXCI6XG4gICAgICAgICAgICBjYXNlIFwiUm9sZUFuZFBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUucGFnZSA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuc3RhdGUgPSBHYW1lU3RhdGUuUHJlR2FtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJTdGFydEZpcnN0RGF5XCI6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuZGF5ID0gMTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuc3RhdGUgPSBHYW1lU3RhdGUuRGF5O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5wYWdlID0gXCJTdGFydERpc2N1c3Npb25cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJTdGFydERheVwiOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLmRheSsrO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9IEdhbWVTdGF0ZS5EYXk7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLnBhZ2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIlN0YXJ0TmlnaHRcIjoge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9IEdhbWVTdGF0ZS5OaWdodDtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUucGFnZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiRnVsbE1vb25OaWdodFwiOlxuICAgICAgICAgICAgY2FzZSBcIlN0YXJ0RGlzY3Vzc2lvblwiOlxuICAgICAgICAgICAgY2FzZSBcIlN0YXJ0RGVmZW5zZVwiOlxuICAgICAgICAgICAgY2FzZSBcIlN0YXJ0SnVkZ2VtZW50XCI6XG4gICAgICAgICAgICBjYXNlIFwiU3RhcnRWb3RpbmdcIjpcbiAgICAgICAgICAgIGNhc2UgXCJXaG9EaWVkQW5kSG93XCI6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUucGFnZSA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJTb21lb25lSGFzV29uXCI6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuc3RhdGUgPSBHYW1lU3RhdGUuRW5kO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgaW5qZWN0ZWRMb2dnZXJTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuaW5qZWN0ZWRMb2dnZXJTY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG5pbmplY3RlZExvZ2dlclNjcmlwdC50ZXh0Q29udGVudCA9IGBcbntcblx0bGV0IGNvdW50ZXIgPSAwO1xuXHRjb25zb2xlLnN0ZGxvZyA9IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG5cdGNvbnNvbGUubG9ncyA9IFtdO1xuXHRjb25zb2xlLmxvZyA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IGxvZyA9IGFyZ3VtZW50c1swXTtcblx0XHRpZiAoL15Td2l0Y2hlZCB8XkVudGVyZWQgfF5DcmVhdGluZyB8XFxcXFtOZXR3b3JrXFxcXF0gPGNvbG9yPS4qPz5cXFxcW1JlY2VpdmVkXFxcXF0gPGI+Ly50ZXN0KGxvZykpIHtcblx0XHRcdGNvbnNvbGUubG9ncy5wdXNoKHtcblx0XHRcdFx0Y29udGVudDogbG9nLFxuXHRcdFx0XHRpZDogY291bnRlcixcblx0XHRcdH0pO1xuXHRcdFx0Y291bnRlcisrO1xuXHRcdFx0aWYgKGNvdW50ZXIgPiAxMDAwMCkgY291bnRlciA9IDA7XG5cdFx0fVxuXHRcdHdoaWxlIChjb25zb2xlLmxvZ3MubGVuZ3RoID4gMTAwKSBjb25zb2xlLmxvZ3Muc2hpZnQoKTtcblx0XHRjb25zb2xlLnN0ZGxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuXHR9O1xufVxuYDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaW5qZWN0ZWRMb2dnZXJTY3JpcHQpO1xuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxvZ3MgPSBhd2FpdCBwcmVzZW5jZS5nZXRQYWdlbGV0aWFibGUoJ2NvbnNvbGVcIl1bXCJsb2dzJyk7XG4gICAgbGV0IGxhc3RVbnJlYWRMb2dJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IGxvZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGxvZ3NbaV0uaWQgPT09IGxhc3RJZCkge1xuICAgICAgICAgICAgbGFzdFVucmVhZExvZ0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gbGFzdFVucmVhZExvZ0luZGV4OyBpIDwgbG9ncy5sZW5ndGg7IGkrKylcbiAgICAgICAgaGFuZGxlTG9nKGxvZ3NbaV0uY29udGVudCk7XG4gICAgaWYgKGxvZ3MubGVuZ3RoID4gMClcbiAgICAgICAgbGFzdElkID0gbG9nc1tsb2dzLmxlbmd0aCAtIDFdLmlkO1xufSwgMTAwMCk7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVG93biUyMG9mJTIwU2FsZW0vYXNzZXRzL2xvZ28uanBnXCIsXG4gICAgfTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9Ub3duT2ZTYWxlbS9cIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgQmxhbmtNZWRpYUdhbWVzXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBlbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9sZFN0YXRlLnNjZW5lICE9PSBjdXJyZW50U3RhdGUuc2NlbmUpXG4gICAgICAgICAgICBlbGFwc2VkID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGVsYXBzZWQ7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudFN0YXRlLnNjZW5lKSB7XG4gICAgICAgICAgICBjYXNlIFwiQmlnTG9naW5cIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb2dnaW5nIGluXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQmlnSG9tZVwiOiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50U3RhdGUucGFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR2FtZU1vZGVTZWxlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlbGVjdGluZyBHYW1lIE1vZGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDdXN0b21pemF0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDdXN0b21pemluZyBDaGFyYWN0ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJQYXJ0eVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSW4gYSBQYXJ0eVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIE1haW4gTWVudVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gY3VycmVudFN0YXRlLnBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQmlnTG9iYnlcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJXYWl0aW5nIGluIGEgTG9iYnlcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICBnYW1lVHlwZU5hbWVzW2N1cnJlbnRTdGF0ZS5nYW1lTW9kZV0gPz8gY3VycmVudFN0YXRlLmdhbWVNb2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkJpZ1ByZUdhbWVcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMb2FkaW5nIEdhbWVcIjtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICBnYW1lVHlwZU5hbWVzW2N1cnJlbnRTdGF0ZS5nYW1lTW9kZV0gPz8gY3VycmVudFN0YXRlLmdhbWVNb2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkJpZ0dhbWVcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYFBsYXlpbmcgYSAke2dhbWVUeXBlTmFtZXNbY3VycmVudFN0YXRlLmdhbWVNb2RlXSA/PyBjdXJyZW50U3RhdGUuZ2FtZU1vZGV9IEdhbWVgO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudFN0YXRlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLlByZUdhbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudFN0YXRlLnBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUGlja05hbWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJDaG9vc2luZyBOYW1lc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlJvbGVBbmRQb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IFwiR2V0dGluZyBhIFJvbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuRGF5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9UL1Rvd24lMjBvZiUyMFNhbGVtL2Fzc2V0cy8wLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50U3RhdGUucGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTdGFydERpc2N1c3Npb25cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgRGlzY3Vzc2lvbiB8IERheSAke2N1cnJlbnRTdGF0ZS5kYXl9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVC9Ub3duJTIwb2YlMjBTYWxlbS9hc3NldHMvMS5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTdGFydFZvdGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBWb3RpbmcgfCBEYXkgJHtjdXJyZW50U3RhdGUuZGF5fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVG93biUyMG9mJTIwU2FsZW0vYXNzZXRzLzMucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiV2hvRGllZEFuZEhvd1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGBWaWV3aW5nIGEgRGVhdGggfCBEYXkgJHtjdXJyZW50U3RhdGUuZGF5fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU3RhcnREZWZlbnNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYERlZmVuc2UgfCBEYXkgJHtjdXJyZW50U3RhdGUuZGF5fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVG93biUyMG9mJTIwU2FsZW0vYXNzZXRzLzUucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU3RhcnRKdWRnZW1lbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgSnVkZ2VtZW50IHwgRGF5ICR7Y3VycmVudFN0YXRlLmRheX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9UL1Rvd24lMjBvZiUyMFNhbGVtL2Fzc2V0cy80LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgRGF5ICR7Y3VycmVudFN0YXRlLmRheX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLk5pZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9UL1Rvd24lMjBvZiUyMFNhbGVtL2Fzc2V0cy8yLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZS5wYWdlID09PSBcIkZ1bGxNb29uTmlnaHRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgTmlnaHQgJHtjdXJyZW50U3RhdGUuZGF5fSAoRnVsbCBNb29uKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYE5pZ2h0ICR7Y3VycmVudFN0YXRlLmRheX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuRW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIlZpZXdpbmcgRW5kIFNjcmVlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQmlnRW5kR2FtZVwiOiB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgUGxheWluZyBhICR7Z2FtZVR5cGVOYW1lc1tjdXJyZW50U3RhdGUuZ2FtZU1vZGVdID8/IGN1cnJlbnRTdGF0ZS5nYW1lTW9kZX0gR2FtZWA7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJWaWV3aW5nIEFmdGVyIEdhbWUgU2NyZWVuXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0zUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1EwRkJRenRCUVZsSUxFbEJRVXNzVTBGTlNqdEJRVTVFTEZkQlFVc3NVMEZCVXp0SlFVTmlMRFJDUVVGbExFTkJRVUU3U1VGRFppeDNRa0ZCVnl4RFFVRkJPMGxCUTFnc2QwSkJRVmNzUTBGQlFUdEpRVU5ZTEc5RFFVRjFRaXhEUVVGQk8wbEJRM1pDTEdkRFFVRnRRaXhEUVVGQk8wRkJRM0JDTEVOQlFVTXNSVUZPU1N4VFFVRlRMRXRCUVZRc1UwRkJVeXhSUVUxaU8wRkJSVVFzU1VGQlN5eFJRVWRLTzBGQlNFUXNWMEZCU3l4UlFVRlJPMGxCUTFvc0swSkJRVzFDTEVOQlFVRTdTVUZEYmtJc05rSkJRV2xDTEVOQlFVRTdRVUZEYkVJc1EwRkJReXhGUVVoSkxGRkJRVkVzUzBGQlVpeFJRVUZSTEZGQlIxbzdRVUZsUkN4TlFVRk5MR0ZCUVdFc1IwRkJNa0k3U1VGRE5VTXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFqdEpRVU5xUXl4VFFVRlRMRVZCUVVVc2JVSkJRVzFDTzBsQlF6bENMR05CUVdNc1JVRkJSU3hyUWtGQmEwSTdTVUZEYkVNc2EwSkJRV3RDTEVWQlFVVXNZMEZCWXp0SlFVTnNReXhaUVVGWkxFVkJRVVVzWlVGQlpUdEpRVU0zUWl4dFFrRkJiVUlzUlVGQlJTeDFRa0ZCZFVJN1NVRkROVU1zVlVGQlZTeEZRVUZGTEdWQlFXVTdTVUZETTBJc1YwRkJWeXhGUVVGRkxHTkJRV003U1VGRE0wSXNaMEpCUVdkQ0xFVkJRVVVzYjBKQlFXOUNPMGxCUTNSRExGZEJRVmNzUlVGQlJTeGxRVUZsTzBsQlF6VkNMRTFCUVUwc1JVRkJSU3hUUVVGVE8wTkJRMnBDTEVWQlEwUXNVVUZCVVN4SFFVRmhPMGxCUTNCQ0xFdEJRVXNzUlVGQlJTeFZRVUZWTzBsQlEycENMRWxCUVVrc1JVRkJSU3hGUVVGRk8wbEJRMUlzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEVGl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFOUJRVTg3U1VGRE1VSXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhIUVVGSE8wTkJRM0JDTEVWQlEwUXNXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUlRWRExFbEJRVWtzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVTXhReXhOUVVGTkxFZEJRVmNzU1VGQlNTeERRVUZETzBGQlJYWkNMRk5CUVZNc1UwRkJVeXhEUVVGRExFZEJRVmM3U1VGRE4wSXNTVUZEUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExHTkJRV01zUTBGQlF6dFJRVU01UWl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRVZCUTNaRE8xRkJRMFFzVFVGQlRTeExRVUZMTEVkQlFVY3NSMEZCUnp0aFFVTm1MRXRCUVVzc1EwRkJReXh4UkVGQmNVUXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNdlJDeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTlVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlF6TkNMRWxCUVVrc1MwRkJTeXhMUVVGTExGbEJRVms3V1VGQlJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU03UzBGRGJrVTdVMEZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zZDBOQlFYZERMRU5CUVVNc1JVRkJSVHRSUVVOd1JTeFpRVUZaTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWRCUVVjN1lVRkRja0lzUzBGQlN5eERRVU5NTEc5RlFVRnZSU3hEUVVOd1JTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTklMRWxCUVVrc1JVRkJSU3hEUVVGRE8wdEJRMVE3VTBGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3VVVGRGRFTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETDBNc1MwRkJTeXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMmRDUVVONlFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJRenRuUWtGRGFFTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETzJkQ1FVTjRReXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTERCQ1FVRXdRaXhEUVVGRExFTkJRVU03WjBKQlEyaERMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzJkQ1FVTXZRaXhaUVVGWkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN1owSkJRM3BETEUxQlFVMDdZVUZEVGp0VFFVTkVPMHRCUTBRN1UwRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETERKQ1FVRXlRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZET1VRc1NVRkJTU3g1UTBGQmVVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3VVVGRE4wUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGRGRrSXNiVVJCUVcxRUxFTkJRMjVFTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hSUVVGUkxFMUJRVTBzUlVGQlJUdFpRVU5tTEV0QlFVc3NWMEZCVnl4RFFVRkRPMWxCUTJwQ0xFdEJRVXNzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRuUWtGRGRrSXNXVUZCV1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlF6TkNMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXp0blFrRkRka01zVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4bFFVRmxMRU5CUVVNc1EwRkJRenRuUWtGRGNrSXNXVUZCV1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXp0blFrRkRia01zV1VGQldTeERRVUZETEVsQlFVa3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZEZEVNc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRhRUlzV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOdVFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU03WjBKQlEyNURMRmxCUVZrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjJRaXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZsQlFWa3NRMEZCUXl4RFFVRkRPMmRDUVVOc1FpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU03WjBKQlEzSkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjJRaXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEdWQlFXVXNRMEZCUXp0WlFVTnlRaXhMUVVGTExHbENRVUZwUWl4RFFVRkRPMWxCUTNaQ0xFdEJRVXNzWTBGQll5eERRVUZETzFsQlEzQkNMRXRCUVVzc1owSkJRV2RDTEVOQlFVTTdXVUZEZEVJc1MwRkJTeXhoUVVGaExFTkJRVU03V1VGRGJrSXNTMEZCU3l4bFFVRmxMRU5CUVVNc1EwRkJRenRuUWtGRGNrSXNXVUZCV1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlF6TkNMRTFCUVUwN1lVRkRUanRaUVVORUxFdEJRVXNzWlVGQlpTeERRVUZETEVOQlFVTTdaMEpCUTNKQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJRenRuUWtGRGJrTXNUVUZCVFR0aFFVTk9PMU5CUTBRN1MwRkRSRHRCUVVOR0xFTkJRVU03UVVGUFJDeE5RVUZOTEc5Q1FVRnZRaXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRPVVFzYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hIUVVGSExHbENRVUZwUWl4RFFVRkRPMEZCUXpsRExHOUNRVUZ2UWl4RFFVRkRMRmRCUVZjc1IwRkJSenM3T3pzN096czdPenM3T3pzN096czdPenREUVcxQ2JFTXNRMEZCUXp0QlFVTkdMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03UVVGRmFFUXNWMEZCVnl4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM1JDTEUxQlFVMHNTVUZCU1N4SFFVRlZMRTFCUVUwc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wbEJRM1JGTEVsQlFVa3NhMEpCUVd0Q0xFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6TkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTXhReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1RVRkJUU3hGUVVGRk8xbEJRekZDTEd0Q1FVRnJRaXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1RVRkJUVHRUUVVOT08wdEJRMFE3U1VGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJUdFJRVU53UkN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRPMUZCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVU40UkN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRlZDeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE9VSXNUVUZCVFN4WlFVRlpMRWRCUVdsQ08xRkJRMnhETEdGQlFXRXNNRVZCUVdFN1MwRkRNVUlzUTBGQlF6dEpRVVZHTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzWlVGQlpTeEZRVUZGTzFGQlEycEVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNN1VVRkRiRVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM0JETEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRE8wdEJRM1JETzFOQlFVMDdVVUZEVGl4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFdEJRVXNzV1VGQldTeERRVUZETEV0QlFVczdXVUZEZUVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzcERMRmxCUVZrc1EwRkJReXhqUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEzUkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUTNSRExGRkJRVkVzV1VGQldTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTXpRaXhMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETzJkQ1FVTm9RaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEZsQlFWa3NRMEZCUXp0blFrRkRjRU1zVFVGQlRUdGhRVU5PTzFsQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRFppeFJRVUZSTEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVN2IwSkJRekZDTEV0QlFVc3NaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dDNRa0ZEZEVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenQzUWtGRE4wTXNUVUZCVFR0eFFrRkRUanR2UWtGRFJDeExRVUZMTEdWQlFXVXNRMEZCUXl4RFFVRkRPM2RDUVVOeVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzNkQ1FVTXZReXhOUVVGTk8zRkNRVU5PTzI5Q1FVTkVMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03ZDBKQlEySXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhaUVVGWkxFTkJRVU03ZDBKQlEzQkRMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN2QwSkJRMUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dDNRa0ZETlVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRPM0ZDUVVOMlF6dHBRa0ZEUkR0blFrRkRSQ3hOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVOb1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzJkQ1FVTTFReXhaUVVGWkxFTkJRVU1zUzBGQlN6dHZRa0ZEYWtJc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRE8yZENRVU12UkN4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTnNRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdOQlFXTXNRMEZCUXp0blFrRkRkRU1zV1VGQldTeERRVUZETEV0QlFVczdiMEpCUTJwQ0xHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF6dG5Ra0ZETDBRc1RVRkJUVHRoUVVOT08xbEJRMFFzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRaaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdGQlEzUkNMR0ZCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NXVUZCV1N4RFFVRkRMRkZCUTNSRUxFOUJRVThzUTBGQlF6dG5Ra0ZEVWl4UlFVRlJMRmxCUVZrc1EwRkJReXhMUVVGTExFVkJRVVU3YjBKQlF6TkNMRXRCUVVzc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzNkQ1FVTjJRaXhSUVVGUkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVTdORUpCUXpGQ0xFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTTdaME5CUTJwQ0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03WjBOQlEzUkRMRTFCUVUwN05rSkJRMDQ3TkVKQlEwUXNTMEZCU3l4cFFrRkJhVUlzUTBGQlF5eERRVUZETzJkRFFVTjJRaXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8yZERRVU4wUXl4TlFVRk5PelpDUVVOT08zbENRVU5FTzNkQ1FVTkVMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlEyNUNMRmxCUVZrc1EwRkJReXhoUVVGaExIZEZRVUZoTEVOQlFVTTdkMEpCUTNoRExGRkJRVkVzV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlRzMFFrRkRNVUlzUzBGQlN5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8yZERRVU4yUWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHOUNRVUZ2UWl4WlFVRlpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBOQlF6VkVMRmxCUVZrc1EwRkJReXhoUVVGaExIZEZRVUZ2UWl4RFFVRkRPMmREUVVNdlF5eE5RVUZOT3paQ1FVTk9PelJDUVVORUxFdEJRVXNzWVVGQllTeERRVUZETEVOQlFVTTdaME5CUTI1Q0xGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NaMEpCUVdkQ0xGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blEwRkRlRVFzV1VGQldTeERRVUZETEdGQlFXRXNkMFZCUVdkQ0xFTkJRVU03WjBOQlF6TkRMRTFCUVUwN05rSkJRMDQ3TkVKQlEwUXNTMEZCU3l4bFFVRmxMRU5CUVVNc1EwRkJRenRuUTBGRGNrSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXg1UWtGQmVVSXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZERRVU5xUlN4TlFVRk5PelpDUVVOT096UkNRVU5FTEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNN1owTkJRM0JDTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc2FVSkJRV2xDTEZsQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUTBGRGVrUXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2QwVkJRV2xDTEVOQlFVTTdaME5CUXpWRExFMUJRVTA3TmtKQlEwNDdORUpCUTBRc1MwRkJTeXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMmREUVVOMFFpeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRzFDUVVGdFFpeFpRVUZaTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owTkJRek5FTEZsQlFWa3NRMEZCUXl4aFFVRmhMSGRGUVVGdFFpeERRVUZETzJkRFFVTTVReXhOUVVGTk96WkNRVU5PT3pSQ1FVTkVMRTlCUVU4c1EwRkJReXhEUVVGRE8yZERRVU5TTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhaUVVGWkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdOa0pCUXk5RE8zbENRVU5FTzNkQ1FVTkVMRTFCUVUwN2NVSkJRMDQ3YjBKQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03ZDBKQlEzSkNMRmxCUVZrc1EwRkJReXhoUVVGaExIZEZRVUZsTEVOQlFVTTdkMEpCUXpGRExFbEJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NTMEZCU3l4bFFVRmxPelJDUVVONFF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVZNc1dVRkJXU3hEUVVGRExFZEJRVWNzWTBGQll5eERRVUZET3pzMFFrRkRla1FzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dDNRa0ZEZEVRc1RVRkJUVHR4UWtGRFRqdHZRa0ZEUkN4TFFVRkxMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZEYmtJc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenQzUWtGRE1VTXNUVUZCVFR0eFFrRkRUanRwUWtGRFJEdG5Ra0ZEUkN4TlFVRk5PMkZCUTA0N1dVRkRSQ3hMUVVGTExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTnNRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdGQlEzUkNMR0ZCUVdFc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NXVUZCV1N4RFFVRkRMRkZCUTNSRUxFOUJRVThzUTBGQlF6dG5Ra0ZEVWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExESkNRVUV5UWl4RFFVRkRPMmRDUVVOcVJDeE5RVUZOTzJGQlEwNDdVMEZEUkR0TFFVTkVPMGxCUlVRc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR6dFJRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03TzFGQlEzaEVMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsIkdhbWVTdGF0ZSIsIkdhbWVUeXBlIiwiZ2FtZVR5cGVOYW1lcyIsIlJhbmtlZFByYWN0aWNlIiwiUmFwaWRNb2RlIiwiRHJhY3VsYXNQYWxhY2UiLCJDbGFzc2ljVG93blRyYWl0b3IiLCJDb3ZlbkNsYXNzaWMiLCJDb3ZlblJhbmtlZFByYWN0aWNlIiwiQ292ZW5NYWZpYSIsIkNvdmVuQ3VzdG9tIiwiQ292ZW5Ub3duVHJhaXRvciIsIkNvdmVuQWxsQW55IiwiQWxsQW55Iiwib2xkU3RhdGUiLCJzY2VuZSIsInBhZ2UiLCJkYXkiLCJnYW1lTW9kZSIsIkNsYXNzaWMiLCJzdGF0ZSIsIkRheSIsImN1cnJlbnRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImVsYXBzZWQiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwibm93IiwibGFzdElkIiwiaGFuZGxlTG9nIiwibG9nIiwic3RhcnRzV2l0aCIsIm1hdGNoIiwidHJpbSIsIlByZUdhbWUiLCJSYW5rZWQiLCJ0ZXN0IiwiYWN0aW9uIiwiTmlnaHQiLCJFbmQiLCJpbmplY3RlZExvZ2dlclNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJ0ZXh0Q29udGVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInNldEludGVydmFsIiwiYXN5bmMiLCJsb2dzIiwiZ2V0UGFnZWxldGlhYmxlIiwibGFzdFVucmVhZExvZ0luZGV4IiwiaSIsImxlbmd0aCIsImlkIiwiY29udGVudCIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkZXRhaWxzIiwidGl0bGUiLCJzdGFydFRpbWVzdGFtcCIsInNtYWxsSW1hZ2VLZXkiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;