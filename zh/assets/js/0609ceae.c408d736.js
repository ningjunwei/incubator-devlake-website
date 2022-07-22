"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1472],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},c=void 0,s={unversionedId:"UserManuals/ConfigUI/Tutorial",id:"UserManuals/ConfigUI/Tutorial",title:"Tutorial",description:"Config UI instruction",source:"@site/docs/UserManuals/ConfigUI/Tutorial.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/Tutorial",permalink:"/zh/docs/UserManuals/ConfigUI/Tutorial",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/Tutorial.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},sidebar:"docsSidebar",previous:{title:"Install via Temporal",permalink:"/zh/docs/QuickStart/TemporalSetup"},next:{title:"Configuring GitHub",permalink:"/zh/docs/UserManuals/ConfigUI/GitHub"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Creating a Blueprint",id:"creating-a-blueprint",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Step 1 - Adding Data Connections",id:"step-1---adding-data-connections",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Step 3 - Adding Transformation (Optional)",id:"step-3---adding-transformation-optional",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Editing a Blueprint (Coming in v0.13)",id:"editing-a-blueprint-coming-in-v013",level:2},{value:"Creating and Managing Data Connections",id:"creating-and-managing-data-connections",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Apache DevLake Config UI allows you to configure the data you wish to collect through a graphical user interface. "),(0,i.kt)("h2",{id:"creating-a-blueprint"},"Creating a Blueprint"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A Blueprint is the plan that covers all the work to get your raw data ready for query and metric computaion in the dashboards. We have designed the Blueprint to help you with data collection within only one workflow. Creating a Blueprint consists of four steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adding Data Connections: Add new or select from existing data connections for the data you wish to collect"),(0,i.kt)("li",{parentName:"ol"},"Setting Data Scope: Select the scope of data (e.g. GitHub projects or Jira boards) for your data connections"),(0,i.kt)("li",{parentName:"ol"},"Adding Transformation (Optional): Add transformation rules for the data scope you have selected in order to view corresponding metrics"),(0,i.kt)("li",{parentName:"ol"},"Setting Sync Frequency: Set up a schedule for how often you wish your data to be synced")),(0,i.kt)("h3",{id:"step-1---adding-data-connections"},"Step 1 - Adding Data Connections"),(0,i.kt)("p",null,"There are two ways to add data connections to your Blueprint: adding them during the creation of a Blueprint and adding them separately on the Data Integrations page. There is no difference between these two ways."),(0,i.kt)("p",null,"When adding data connections from the Blueprint, you can either create a new or select from an exisitng data connections. "),(0,i.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,i.kt)("p",null,'After adding data connections, click on "Next Step" and you will be prompted to select the data scope of each data connections. For instance, for a GitHub connection, you will need to enter the projects you wish to sync and for Jira, you will need to select the boards.'),(0,i.kt)("h3",{id:"step-3---adding-transformation-optional"},"Step 3 - Adding Transformation (Optional)"),(0,i.kt)("p",null,"This step is only required for viewing certain metrics in the pre-built dashboards that require data transformation. Without adding transformation rules, you can still view the basic metrics. "),(0,i.kt)("p",null,"Currently, DevLake only supports transformation for GitHub and Jira connections."),(0,i.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,i.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,i.kt)("p",null,"After setting up the Blueprint, you will be prompted to the Blueprint's activity detail page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page."),(0,i.kt)("h2",{id:"editing-a-blueprint-coming-in-v013"},"Editing a Blueprint (Coming in v0.13)"),(0,i.kt)("h2",{id:"creating-and-managing-data-connections"},"Creating and Managing Data Connections"),(0,i.kt)("p",null,"The Data Connections page allows you to view, create and manage all your data connections at one place."))}f.isMDXComponent=!0}}]);