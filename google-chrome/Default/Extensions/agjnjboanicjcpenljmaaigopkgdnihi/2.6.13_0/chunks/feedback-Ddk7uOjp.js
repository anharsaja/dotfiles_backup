import{d as ge,u as he,r as y,a as xe,c as me,o as ve,w as ye,b as l,e,_ as _e,t as r,f as o,g as c,v as ce,i as p,F as pe,h as ue,j as m,k as g,l as i,m as ke,n as we}from"./__uno-i2UvGda1.js";import{b as P,r as De}from"./_virtual_wxt-plugins-DckzYsD-.js";import{u as Pe}from"./index-COkz_t04.js";const He={class:"flex items-center justify-center flex-col min-h-screen updated-background text-gray-200 font-sans"},Ce={class:"max-w-2xl rounded-xl shadow-md mx-4"},Ue={class:"text-center p-4 bg-gray-900 rounded-t-xl"},Ve=["textContent"],je={key:0,class:"text-white font-bold px-6 py-4 bg-gray-700 b-rd-b"},Me={class:"text-lg leading-6 mb-4"},Fe={class:"text-sm mb-4 font-400"},Te=["value"],Ae={key:1,class:"px-6 py-4 bg-gray-700 text-white font-bold b-rd-b"},ze={class:"text-lg leading-6 mb-4"},Se={class:"text-sm mb-4 font-400"},$e=["value"],Be={class:"flex justify-between"},Ie={class:"flex gap-2"},Le={key:2,class:"px-6 py-4 bg-gray-700 text-white font-bold b-rd-b"},Ne={class:"text-lg leading-6 mb-4"},Re={class:"text-sm mb-4 font-400"},qe={class:"text-lg font-bold mb-2"},Ee=["placeholder"],Ge={class:"text-sm mb-4 font-400"},Ke={class:"flex mb-4 gap-2"},We=["placeholder"],Je=["placeholder"],Oe={class:"flex justify-between"},Qe={class:"flex gap-2"},Xe={key:3,class:"px-6 py-4 bg-gray-700 text-white font-bold b-rd-b"},Ye={class:"text-lg leading-6 mb-4"},Ze={class:"text-sm mb-4 font-400"},eo={class:"text-lg font-bold mb-2"},oo=["placeholder"],to={class:"text-sm mb-4 font-400"},so={class:"flex mb-4 gap-2"},ro=["placeholder"],no=["placeholder"],lo={class:"flex justify-between"},io={class:"flex gap-2"},ao={key:4,class:"px-6 py-4 bg-gray-700 text-white font-bold b-rd-b"},co={class:"text-lg leading-6 mb-4"},po={class:"text-sm mb-4 font-400"},uo={class:"text-lg font-bold mb-2"},fo=["placeholder"],bo={class:"text-sm mb-4 font-400"},go={class:"flex mb-4 gap-2"},ho=["placeholder"],xo=["placeholder"],mo={class:"flex justify-between"},vo={class:"flex gap-2"},yo={key:5,class:"px-6 py-4 bg-gray-700 text-white font-bold b-rd-b"},_o={class:"text-lg leading-6 mb-4"},ko={class:"text-sm mb-4 font-400"},wo={class:"flex justify-between"},Do={key:6,class:"px-6 py-4 bg-gray-700 text-white font-bold b-rd-b"},Po={class:"text-lg leading-6 mb-4"},Ho={class:"text-sm mb-4 font-400"},Co={class:"flex justify-between"},Uo=ge({__name:"App",setup(jo){const fe=he(),k=y([]),_=y(""),H=y(0),a=y(""),s=xe({presence:"popup.feedback.presence",extension:"popup.feedback.extension",feature:"popup.feedback.feature",other:"popup.feedback.other",title:"popup.feedback.title",selectHeader:"popup.feedback.select.header",selectDescription:"popup.feedback.select.description",presenceHeader:"popup.feedback.presence.header",presenceDescription:"popup.feedback.presence.description",close:"popup.feedback.close",submit:"popup.feedback.submit",extensionHeader:"popup.feedback.extension.header",extensionDescription:"popup.feedback.extension.description",extensionDescribe:"popup.feedback.extension.describe",extensionPlaceholder:"popup.feedback.extension.placeholder",extensionPrivacy:"popup.feedback.extension.privacy",email:"popup.feedback.email",discord:"popup.feedback.discord",featureHeader:"popup.feedback.feature.header",featureDescription:"popup.feedback.feature.description",featureDescribe:"popup.feedback.feature.describe",featurePlaceholder:"popup.feedback.feature.placeholder",featurePrivacy:"popup.feedback.feature.privacy",otherHeader:"popup.feedback.other.header",otherDescription:"popup.feedback.other.description",otherDescribe:"popup.feedback.other.describe",otherPlaceholder:"popup.feedback.other.placeholder",otherPrivacy:"popup.feedback.other.privacy",submittedHeader:"popup.feedback.submitted.header",submittedDescription:"popup.feedback.submitted.description",errorHeader:"popup.feedback.error.header",errorDescription:"popup.feedback.error.description"}),be=me(()=>{var b,t,h,x;return[{title:(b=s.value)==null?void 0:b.presence,value:"presence"},{title:(t=s.value)==null?void 0:t.extension,value:"extension"},{title:(h=s.value)==null?void 0:h.feature,value:"feature"},{title:(x=s.value)==null?void 0:x.other,value:"other"}]}),{textarea:w,input:d}=Pe({styleProp:"height"}),u=y(""),f=y("");async function v(){P.tabs.remove(H.value)}ve(async()=>{const b=await P.tabs.getCurrent();H.value=b.id,k.value=await fe.presenceManager.get()}),ye(_,b=>{if(!b)return;const t=k.value.find(x=>x.service===b);if(!t)return;const h=`https://github.com/PreMiD/Presences/issues/new?assignees=&labels=bug,needs+repro&projects=&template=bug_report.yml&title=${encodeURIComponent(`${t.service} | ${Array.isArray(t.url)?t.url[0]:t.url} | v${t.version} - Issue Title`)}`;P.tabs.create({active:!0,url:h})});async function D(){if(!d.value)return;const{sendFeedback:{success:b}}=await De.sendFeedback({type:a.value,input:d.value,email:u.value,discord:f.value});a.value=b?"submitted":"error"}return(b,t)=>{var h,x,C,U,V,j,M,F,T,A,z,S,$,B,I,L,N,R,q,E,G,K,W,J,O,Q,X,Y,Z,ee,oe,te,se,re,ne,le,ie,ae,de;return i(),l("div",He,[e("div",Ce,[e("div",Ue,[t[11]||(t[11]=e("img",{src:_e,alt:"PreMiD Logo",class:"mx-auto h-24 w-auto"},null,-1)),e("p",{class:"font-bold text-white text-lg mt-2",textContent:r((h=o(s))==null?void 0:h.title)},null,8,Ve)]),o(a)?o(a)==="presence"?(i(),l("div",Ae,[e("h2",ze,r((U=o(s))==null?void 0:U.presenceHeader),1),e("p",Se,r((V=o(s))==null?void 0:V.presenceDescription),1),c(e("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>p(_)?_.value=n:null),class:"w-full bg-gray-800 text-white rounded-md p-2 mb-4"},[(i(!0),l(pe,null,ue(o(k),n=>(i(),l("option",{key:n.service,value:n.service},r(n.service),9,$e))),128))],512),[[ce,o(_)]]),e("div",Be,[t[13]||(t[13]=e("a",{href:"https://github.com/PreMiD/Presences/issues/new/choose",target:"_blank",rel:"noopener noreferrer",class:"px-6 text-lg text-white shadow-md inline-block py-3 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-green-500"},[e("i",{class:"fab fa-github"}),m(" GitHub ")],-1)),e("div",Ie,[t[12]||(t[12]=e("a",{href:"https://discord.premid.app",target:"_blank",rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none bg-blue-500 hover:bg-blue-600 focus:ring-offset-blue-500"},[e("i",{class:"fab fa-discord"}),m(" Discord ")],-1)),e("a",{rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none cursor-pointer text-gray-900 hover:bg-gray-100",onClick:v},r((j=o(s))==null?void 0:j.close),1)])])])):o(a)==="extension"?(i(),l("div",Le,[e("h2",Ne,r((M=o(s))==null?void 0:M.extensionHeader),1),e("p",Re,r((F=o(s))==null?void 0:F.extensionDescription),1),e("h3",qe,r((T=o(s))==null?void 0:T.extensionDescribe),1),c(e("textarea",{ref_key:"textarea",ref:w,"onUpdate:modelValue":t[2]||(t[2]=n=>p(d)?d.value=n:null),class:"bg-gray-800 text-white rounded-md p-2 w-[calc(100%-1rem)] max-h50 resize-none",rows:"3",placeholder:(A=o(s))==null?void 0:A.extensionPlaceholder},null,8,Ee),[[g,o(d)]]),e("p",Ge,r((z=o(s))==null?void 0:z.extensionPrivacy),1),e("div",Ke,[c(e("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>p(u)?u.value=n:null),class:"bg-gray-800 text-white rounded-md p-2 b-solid b-1 w-1/2",placeholder:(S=o(s))==null?void 0:S.email},null,8,We),[[g,o(u)]]),c(e("input",{"onUpdate:modelValue":t[4]||(t[4]=n=>p(f)?f.value=n:null),class:"bg-gray-800 text-white rounded-md p-2 b-solid b-1 w-1/2",placeholder:($=o(s))==null?void 0:$.discord},null,8,Je),[[g,o(f)]])]),e("div",Oe,[e("a",{class:"inline-block px-6 py-3 text-lg bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-green-500 cursor-pointer",onClick:D},r((B=o(s))==null?void 0:B.submit),1),e("div",Qe,[t[14]||(t[14]=e("a",{href:"https://discord.premid.app",target:"_blank",rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-blue-500"},[e("i",{class:"fab fa-discord"}),m(" Discord ")],-1)),e("a",{rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none cursor-pointer",onClick:v},r((I=o(s))==null?void 0:I.close),1)])])])):o(a)==="feature"?(i(),l("div",Xe,[e("h2",Ye,r((L=o(s))==null?void 0:L.featureHeader),1),e("p",Ze,r((N=o(s))==null?void 0:N.featureDescription),1),e("h3",eo,r((R=o(s))==null?void 0:R.featureDescribe),1),c(e("textarea",{ref_key:"textarea",ref:w,"onUpdate:modelValue":t[5]||(t[5]=n=>p(d)?d.value=n:null),class:"w-[calc(100%-1rem)] bg-gray-800 text-white rounded-md p-2 max-h50 resize-none",rows:"3",placeholder:(q=o(s))==null?void 0:q.featurePlaceholder},null,8,oo),[[g,o(d)]]),e("p",to,r((E=o(s))==null?void 0:E.featurePrivacy),1),e("div",so,[c(e("input",{"onUpdate:modelValue":t[6]||(t[6]=n=>p(u)?u.value=n:null),class:"bg-gray-800 text-white rounded-md p-2 b-solid b-1 w-1/2",placeholder:(G=o(s))==null?void 0:G.email},null,8,ro),[[g,o(u)]]),c(e("input",{"onUpdate:modelValue":t[7]||(t[7]=n=>p(f)?f.value=n:null),class:"bg-gray-800 text-white rounded-md p-2 b-solid b-1 w-1/2",placeholder:(K=o(s))==null?void 0:K.discord},null,8,no),[[g,o(f)]])]),e("div",lo,[e("a",{class:"inline-block px-6 py-3 text-lg bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-green-500 cursor-pointer",onClick:D},r((W=o(s))==null?void 0:W.submit),1),e("div",io,[t[15]||(t[15]=e("a",{href:"https://discord.premid.app",target:"_blank",rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-blue-500"},[e("i",{class:"fab fa-discord"}),m(" Discord ")],-1)),e("a",{rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none cursor-pointer",onClick:v},r((J=o(s))==null?void 0:J.close),1)])])])):o(a)==="other"?(i(),l("div",ao,[e("h2",co,r((O=o(s))==null?void 0:O.otherHeader),1),e("p",po,r((Q=o(s))==null?void 0:Q.otherDescription),1),e("h3",uo,r((X=o(s))==null?void 0:X.otherDescribe),1),c(e("textarea",{ref_key:"textarea",ref:w,"onUpdate:modelValue":t[8]||(t[8]=n=>p(d)?d.value=n:null),class:"w-[calc(100%-1rem)] bg-gray-800 text-white rounded-md p-2 max-h50 resize-none",rows:"3",placeholder:(Y=o(s))==null?void 0:Y.otherPlaceholder},null,8,fo),[[g,o(d)]]),e("p",bo,r((Z=o(s))==null?void 0:Z.otherPrivacy),1),e("div",go,[c(e("input",{"onUpdate:modelValue":t[9]||(t[9]=n=>p(u)?u.value=n:null),class:"bg-gray-800 text-white rounded-md p-2 b-solid b-1 w-1/2",placeholder:(ee=o(s))==null?void 0:ee.email},null,8,ho),[[g,o(u)]]),c(e("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>p(f)?f.value=n:null),class:"bg-gray-800 text-white rounded-md p-2 b-solid b-1 w-1/2",placeholder:(oe=o(s))==null?void 0:oe.discord},null,8,xo),[[g,o(f)]])]),e("div",mo,[e("a",{class:"inline-block px-6 py-3 text-lg bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-green-500 cursor-pointer",onClick:D},r((te=o(s))==null?void 0:te.submit),1),e("div",vo,[t[16]||(t[16]=e("a",{href:"https://discord.premid.app",target:"_blank",rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-blue-500"},[e("i",{class:"fab fa-discord"}),m(" Discord ")],-1)),e("a",{rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none cursor-pointer",onClick:v},r((se=o(s))==null?void 0:se.close),1)])])])):o(a)==="submitted"?(i(),l("div",yo,[e("h2",_o,r((re=o(s))==null?void 0:re.submittedHeader),1),e("p",ko,r((ne=o(s))==null?void 0:ne.submittedDescription),1),e("div",wo,[t[17]||(t[17]=e("a",{href:"https://discord.premid.app",target:"_blank",rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-blue-500"},[e("i",{class:"fab fa-discord"}),m(" Discord ")],-1)),e("a",{rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none cursor-pointer",onClick:v},r((le=o(s))==null?void 0:le.close),1)])])):(i(),l("div",Do,[e("h2",Po,r((ie=o(s))==null?void 0:ie.errorHeader),1),e("p",Ho,r((ae=o(s))==null?void 0:ae.errorDescription),1),e("div",Co,[t[18]||(t[18]=e("a",{href:"https://discord.premid.app",target:"_blank",rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none focus:ring-offset-blue-500"},[e("i",{class:"fab fa-discord"}),m(" Discord ")],-1)),e("a",{rel:"noopener noreferrer",class:"inline-block px-6 py-3 text-lg bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 decoration-none cursor-pointer",onClick:v},r((de=o(s))==null?void 0:de.close),1)])])):(i(),l("div",je,[e("h2",Me,r((x=o(s))==null?void 0:x.selectHeader),1),e("p",Fe,r((C=o(s))==null?void 0:C.selectDescription),1),c(e("select",{"onUpdate:modelValue":t[0]||(t[0]=n=>p(a)?a.value=n:null),class:"w-full text-white bg-gray-800 rounded-md p-2"},[(i(!0),l(pe,null,ue(o(be),n=>(i(),l("option",{key:n.value,value:n.value},r(n.title),9,Te))),128))],512),[[ce,o(a)]])]))])])}}});ke();const Vo=we(Uo);Vo.mount("#app");
//# sourceMappingURL=feedback-Ddk7uOjp.js.map