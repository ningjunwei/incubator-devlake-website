"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3989],{35908:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var l=n(87462),e=(n(67294),n(3905));n(61839);const r={title:"Supported Data Sources",description:"Data sources that DevLake supports\n",sidebar_position:4},i=void 0,d={unversionedId:"SupportedDataSources",id:"SupportedDataSources",title:"Supported Data Sources",description:"Data sources that DevLake supports\n",source:"@site/docs/SupportedDataSources.md",sourceDirName:".",slug:"/SupportedDataSources",permalink:"/docs/next/SupportedDataSources",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/SupportedDataSources.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Supported Data Sources",description:"Data sources that DevLake supports\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Team Configuration",permalink:"/docs/next/UserManuals/TeamConfiguration"},next:{title:"Metrics",permalink:"/docs/next/Metrics"}},u={},p=[{value:"Data Sources and Data Plugins",id:"data-sources-and-data-plugins",level:2},{value:"Data Collection Scope By Each Plugin",id:"data-collection-scope-by-each-plugin",level:2}],m={toc:p};function k(t){let{components:a,...n}=t;return(0,e.kt)("wrapper",(0,l.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,e.kt)("h2",{id:"data-sources-and-data-plugins"},"Data Sources and Data Plugins"),(0,e.kt)("p",null,"Apache DevLake(incubating) supports the following data sources. The data from each data source is collected with one or more plugins."),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"Data Source"),(0,e.kt)("th",{parentName:"tr",align:null},"Domain(s)"),(0,e.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,e.kt)("th",{parentName:"tr",align:null},"Config UI Availability"),(0,e.kt)("th",{parentName:"tr",align:null},"Triggered Plugins"),(0,e.kt)("th",{parentName:"tr",align:null},"Collection Mode"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"GitHub (include GitHub Action)"),(0,e.kt)("td",{parentName:"tr",align:null},"Source Code Management, Code Review, Issue Tracking, CI/CD"),(0,e.kt)("td",{parentName:"tr",align:null},"Cloud"),(0,e.kt)("td",{parentName:"tr",align:null},"Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"github"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"gitextractor")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh, Incremental Sync(for ",(0,e.kt)("inlineCode",{parentName:"td"},"issues"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"PRs"),")")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"GitLab (include GitLabCI)"),(0,e.kt)("td",{parentName:"tr",align:null},"Source Code Management, Code Review, Issue Tracking, CI/CD"),(0,e.kt)("td",{parentName:"tr",align:null},"Cloud, Community Edition 13.x+"),(0,e.kt)("td",{parentName:"tr",align:null},"Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"gitlab"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"gitextractor")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh, Incremental Sync(for ",(0,e.kt)("inlineCode",{parentName:"td"},"issues"),")")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Gitee"),(0,e.kt)("td",{parentName:"tr",align:null},"Source Code Management, Code Review, Issue Tracking"),(0,e.kt)("td",{parentName:"tr",align:null},"Cloud"),(0,e.kt)("td",{parentName:"tr",align:null},"Not Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"gitee"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"gitextractor")),(0,e.kt)("td",{parentName:"tr",align:null},"Incremental Sync")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"BitBucket"),(0,e.kt)("td",{parentName:"tr",align:null},"Source Code Management, Code Review"),(0,e.kt)("td",{parentName:"tr",align:null},"Cloud"),(0,e.kt)("td",{parentName:"tr",align:null},"Not Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"bitbucket"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"gitextractor")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Jira"),(0,e.kt)("td",{parentName:"tr",align:null},"Issue Tracking"),(0,e.kt)("td",{parentName:"tr",align:null},"Cloud, Server 8.x+, Data Center 8.x+"),(0,e.kt)("td",{parentName:"tr",align:null},"Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"jira")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh, Incremental Sync(for ",(0,e.kt)("inlineCode",{parentName:"td"},"issues"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"changelogs"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"worklogs"),")")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"TAPD"),(0,e.kt)("td",{parentName:"tr",align:null},"Issue Tracking"),(0,e.kt)("td",{parentName:"tr",align:null},"Cloud"),(0,e.kt)("td",{parentName:"tr",align:null},"Not Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"tapd")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh, Incremental Sync(for ",(0,e.kt)("inlineCode",{parentName:"td"},"stories"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"bugs"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"tasks"),")")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Jenkins"),(0,e.kt)("td",{parentName:"tr",align:null},"CI/CD"),(0,e.kt)("td",{parentName:"tr",align:null},"2.263.x+"),(0,e.kt)("td",{parentName:"tr",align:null},"Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"jenkins")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Feishu"),(0,e.kt)("td",{parentName:"tr",align:null},"Calendar"),(0,e.kt)("td",{parentName:"tr",align:null},"Cloud"),(0,e.kt)("td",{parentName:"tr",align:null},"Not Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"feishu")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"AE"),(0,e.kt)("td",{parentName:"tr",align:null},"Source Code Management"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"Not Available"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("inlineCode",{parentName:"td"},"ae")),(0,e.kt)("td",{parentName:"tr",align:null},"Full Refresh")))),(0,e.kt)("h2",{id:"data-collection-scope-by-each-plugin"},"Data Collection Scope By Each Plugin"),(0,e.kt)("p",null,"This table shows the entities collected by each plugin. Domain layer entities in this table are consistent with the entities ",(0,e.kt)("a",{parentName:"p",href:"/docs/next/DataModels/DevLakeDomainLayerSchema"},"here"),"."),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"Domain Layer Entities"),(0,e.kt)("th",{parentName:"tr",align:null},"ae"),(0,e.kt)("th",{parentName:"tr",align:null},"gitextractor"),(0,e.kt)("th",{parentName:"tr",align:null},"github"),(0,e.kt)("th",{parentName:"tr",align:null},"gitlab"),(0,e.kt)("th",{parentName:"tr",align:null},"jenkins"),(0,e.kt)("th",{parentName:"tr",align:null},"jira"),(0,e.kt)("th",{parentName:"tr",align:null},"refdiff"),(0,e.kt)("th",{parentName:"tr",align:null},"tapd"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"commits"),(0,e.kt)("td",{parentName:"tr",align:null},"update commits"),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null},"not-by-default"),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"commit_parents"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"commit_files"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"pull_requests"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"pull_request_commits"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"pull_request_comments"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"pull_request_labels"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"refs"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"refs_commits_diffs"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"refs_issues_diffs"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ref_pr_cherry_picks"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"repos"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"repo_commits"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"board_repos"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"issue_commits"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"issue_repo_commits"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"pull_request_issues"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"refs_issues_diffs"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"boards"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"board_issues"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"issue_changelogs"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"issues"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"issue_comments"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"issue_labels"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"sprints"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"issue_worklogs"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"users o"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"builds"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"jobs"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"default"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);