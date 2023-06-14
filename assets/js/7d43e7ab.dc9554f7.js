"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5280],{44744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(61839);const r={title:"Upgrade",sidebar_position:3,description:"How to upgrade your Apache DevLake to a newer version"},o=void 0,s={unversionedId:"GettingStarted/Upgrade",id:"GettingStarted/Upgrade",title:"Upgrade",description:"How to upgrade your Apache DevLake to a newer version",source:"@site/docs/GettingStarted/Upgrade.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Upgrade",permalink:"/docs/next/GettingStarted/Upgrade",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/Upgrade.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Upgrade",sidebar_position:3,description:"How to upgrade your Apache DevLake to a newer version"},sidebar:"docsSidebar",previous:{title:"Install via Helm",permalink:"/docs/next/GettingStarted/HelmSetup"},next:{title:"Security and Authentication",permalink:"/docs/next/GettingStarted/Authentication"}},d={},p=[{value:"Upgrade Notes",id:"upgrade-notes",level:2}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"upgrade-notes"},"Upgrade Notes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ENCRYPTION_SECRET: It is important to keep the ENCRYPTION_SECRET safe as it is used to encrypt sensitive information in the database, such as personal access tokens and passwords. Losing the ENCRYPTION_SECRET may result in the inability to decrypt this sensitive information.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},".env file: The .env file is now optional. You have the flexibility to place the variables in the environment instead. Some of the variables you need to consider are ENCRYPTION_SECRET and DB_URL. If both environment variables and .env file exist, the values in the environment variables take priority. However, ensure that these variables are set in either one of them to avoid any failures with DevLake.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade to v0.18.0: If you are upgrading to version v0.18.0 from a previous version, there is a change in the environment variable used for encryption. Previously, it was called ENCODE_KEY. After upgrading to v0.18.0, if you have previously set ENCODE_KEY in your environment or .env file, please assign its value to the ENCRYPTION_SECRET environment variable. This will ensure that the encryption process continues to work as expected."))),(0,n.kt)("p",null,"These notes provide guidance on upgrading your Apache DevLake to a newer version. Ensure you follow them carefully to avoid any issues during the upgrade process."))}u.isMDXComponent=!0}}]);