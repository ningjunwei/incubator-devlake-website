"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2071],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Tapd",description:"Tapd Plugin\n"},i=void 0,l={unversionedId:"Plugins/tapd",id:"Plugins/tapd",title:"Tapd",description:"Tapd Plugin\n",source:"@site/docs/Plugins/tapd.md",sourceDirName:"Plugins",slug:"/Plugins/tapd",permalink:"/zh/docs/Plugins/tapd",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/tapd.md",tags:[],version:"current",frontMatter:{title:"Tapd",description:"Tapd Plugin\n"},sidebar:"docsSidebar",previous:{title:"RefDiff",permalink:"/zh/docs/Plugins/refdiff"},next:{title:"Webhook",permalink:"/zh/docs/Plugins/webhook"}},c={},p=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect Data From Tapd",id:"collect-data-from-tapd",level:2}],d={toc:p};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects Tapd data through Tapd REST API. "),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Configuring Tapd via ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/UserManuals/ConfigUI/Tapd"},"config-ui"),"."),(0,a.kt)("h2",{id:"collect-data-from-tapd"},"Collect Data From Tapd"),(0,a.kt)("p",null,"To collect data, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Blueprint")," page and paste a JSON config like the following:"),(0,a.kt)("blockquote",null,(0,a.kt)("font",{color:"#ED6A45"},"Warning: Data collection only supports single-task execution, and the results of concurrent multi-task execution may not meet expectations.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n    [\n        {\n            "plugin": "tapd",\n            "options": {\n                "workspaceId": 34***66,\n                "connectionId": 1\n            }\n        }\n    ],\n    [\n        {\n            "plugin": "tapd",\n            "options": {\n                "workspaceId": 6***14,\n                "connectionId": 1\n            }\n        }\n    ]\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"ID")," field from ",(0,a.kt)("strong",{parentName:"li"},"TAPD Integration")," page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"workspaceId"),": TAPD workspace id, you can get it from two ways: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"url: ",(0,a.kt)("img",{alt:"tapd-workspace-id",src:t(51604).Z,width:"590",height:"30"})," "),(0,a.kt)("li",{parentName:"ul"},"db: you can check workspace info from db._tool_tapd_workspaces and get all workspaceId you want to collect after execution of the following json in ",(0,a.kt)("inlineCode",{parentName:"li"},"advanced mode")," ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n        [\n                {\n                        "plugin": "tapd",\n                        "options": {\n                                "companyId": 55850509,\n                                "workspaceId": 1,\n                                "connectionId": 1\n                        },\n                        "subtasks": [\n                                "collectCompanies",\n                                "extractCompanies"\n                        ]\n                }\n        ]\n]\n')))))))}u.isMDXComponent=!0},51604:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tapd-find-workspace-id-9ff3c284a5966c50cb962518da677028.png"}}]);