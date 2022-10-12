"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:21},o=void 0,l={unversionedId:"Metrics/CFR",id:"Metrics/CFR",title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",source:"@site/docs/Metrics/CFR.md",sourceDirName:"Metrics",slug:"/Metrics/CFR",permalink:"/zh/docs/Metrics/CFR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/CFR.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:21},sidebar:"docsSidebar",previous:{title:"DORA - Median Time to Restore Service",permalink:"/zh/docs/Metrics/MTTR"},next:{title:"Data Models",permalink:"/zh/docs/DataModels"}},s={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The percentage of changes that were made to a code that then resulted in incidents, rollbacks, or any type of production failure."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("p",null,"Unlike Deployment Frequency and Lead Time for Changes that measure the throughput, Change Failure Rate measures the stability and quality of software delivery. A low CFR reflects a bad end-user experience as the production failure is relatively high."),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,r.kt)("p",null,"DORA dashboard. See ",(0,r.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,"The number of failures per the number of deployments. For example, if there are five deployments in a day and one causes a failure, that is a 20% change failure rate."),(0,r.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's change failure rate is ",(0,r.kt)("inlineCode",{parentName:"p"},"18%")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"40%"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Groups"),(0,r.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,r.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,r.kt)("td",{parentName:"tr",align:null},"0%-15%"),(0,r.kt)("td",{parentName:"tr",align:null},"0%-15%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"High performers"),(0,r.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,r.kt)("td",{parentName:"tr",align:null},"16-20%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,r.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,r.kt)("td",{parentName:"tr",align:null},"21%-30%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,r.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,r.kt)("td",{parentName:"tr",align:null},"> 30%")))),(0,r.kt)("p",null,(0,r.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Deployments")," collected in one of the following ways:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,r.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,r.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Incidents")," collected in one of the following ways:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Issue tracking tools such as Jira, TAPD, GitHub, etc."),(0,r.kt)("li",{parentName:"ul"},"Bug or Service Monitoring tools such as PagerDuty, Sentry, etc."),(0,r.kt)("li",{parentName:"ul"},"CI pipelines that marked the 'failed' deployments.")))),(0,r.kt)("b",null,"Transformation Rules Required"),(0,r.kt)("p",null,"This metric relies on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,r.kt)("inlineCode",{parentName:"li"},"Deployments"),"."),(0,r.kt)("li",{parentName:"ul"},"Incident configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,r.kt)("inlineCode",{parentName:"li"},"Incidents"),".")),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"If you want to measure the monthly trend of change failure rate as the picture shown below, run the following SQL in Grafana."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81282).Z,width:"1350",height:"602"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"with _deployments as (\n-- get the deployment count each month\n    SELECT\n        date_format(finished_date,'%y/%m') as month,\n        COUNT(distinct id) AS deployment_count\n    FROM\n        cicd_tasks\n    WHERE\n        type = 'DEPLOYMENT'\n        and result = 'SUCCESS'\n    GROUP BY 1\n),\n\n_incidents as (\n-- get the incident count each month\n    SELECT\n        date_format(created_date,'%y/%m') as month,\n        COUNT(distinct id) AS incident_count\n    FROM\n        issues\n    WHERE\n        type = 'INCIDENT'\n    GROUP BY 1\n),\n\n_calendar_months as(\n-- deal with the month with no incidents\n    SELECT date_format(CAST((SYSDATE()-INTERVAL (month_index) MONTH) AS date), '%y/%m') as month\n    FROM ( SELECT 0 month_index\n            UNION ALL SELECT   1  UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4  UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7  UNION ALL SELECT   8 UNION ALL SELECT   9\n            UNION ALL SELECT   10 UNION ALL SELECT  11\n        ) month_index\n    WHERE (SYSDATE()-INTERVAL (month_index) MONTH) > SYSDATE()-INTERVAL 6 MONTH \n)\n\nSELECT \n    cm.month,\n    case \n        when d.deployment_count is null or i.incident_count is null then 0 \n        else i.incident_count/d.deployment_count end as change_failure_rate\nFROM \n    _calendar_months cm\n    left join _incidents i on cm.month = i.month\n    left join _deployments d on cm.month = d.month\nORDER BY 1\n")),(0,r.kt)("p",null,"If you want to measure in which category your team falls into as the picture shown below, run the following SQL in Grafana."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81282).Z,width:"1350",height:"602"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'with _deployment_count as (\n-- get the deployment deployed within the selected time period in the top-right corner\n    SELECT\n        COUNT(distinct id) AS deployment_count\n    FROM\n        cicd_tasks\n    WHERE\n        type = \'DEPLOYMENT\'\n        and result = \'SUCCESS\'\n    and $__timeFilter(finished_date)\n),\n\n_incident_count as (\n-- get the incident created within the selected time period in the top-right corner\n    SELECT\n        COUNT(distinct id) AS incident_count\n    FROM\n        issues\n    WHERE\n        type = \'INCIDENT\'\n        and $__timeFilter(created_date)\n)\n\nSELECT \n    case \n        when deployment_count is null or incident_count is null or deployment_count = 0 then NULL \n        when incident_count/deployment_count <= .15 then "0-15%"\n        when incident_count/deployment_count <= .20 then "16%-20%"\n        when incident_count/deployment_count <= .30 then "21%-30%"\n        else "> 30%"\n        end as change_failure_rate\nFROM \n    _deployment_count, _incident_count\n')),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add unit tests for all new feature"),(0,r.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,r.kt)("li",{parentName:"ul"},"Enforce code review if it's not strictly executed")))}u.isMDXComponent=!0},81282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cfr-monthly-d41ef2d475e064ee64b4548598e8b7c7.jpeg"}}]);