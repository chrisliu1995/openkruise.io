"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5324],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},298:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={title:"AdvancedCronJob"},l=void 0,s={unversionedId:"user-manuals/advancedcronjob",id:"version-v1.1/user-manuals/advancedcronjob",title:"AdvancedCronJob",description:"AdvancedCronJob is an enhanced version of CronJob.",source:"@site/versioned_docs/version-v1.1/user-manuals/advancedcronjob.md",sourceDirName:"user-manuals",slug:"/user-manuals/advancedcronjob",permalink:"/docs/user-manuals/advancedcronjob",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/advancedcronjob.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1648620235,formattedLastUpdatedAt:"3/30/2022",frontMatter:{title:"AdvancedCronJob"},sidebar:"docs",previous:{title:"BroadcastJob",permalink:"/docs/user-manuals/broadcastjob"},next:{title:"SidecarSet",permalink:"/docs/user-manuals/sidecarset"}},p={},u=[{value:"Example",id:"example",level:2}],d={toc:u};function m(e){var n=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AdvancedCronJob is an enhanced version of CronJob.\nThe original CronJob creates Job periodically according to schedule rule, but AdvancedCronJob provides template supported multpile job resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nspec:\n  template:\n\n    # Option 1: use jobTemplate, which is equivalent to original CronJob\n    jobTemplate:\n      # ...\n\n    # Option 2: use broadcastJobTemplate, which will create a BroadcastJob object when cron schedule triggers\n    broadcastJobTemplate:\n      # ...\n\n    # Options 3(future): ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jobTemplate\uff1acreate Jobs periodically, which is equivalent to original CronJob"),(0,a.kt)("li",{parentName:"ul"},"broadcastJobTemplate\uff1acreate ",(0,a.kt)("a",{parentName:"li",href:"./broadcastjob"},"BroadcastJobs")," periodically, which support to dispatch Jobs on every node")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AdvancedCronjob",src:t(6641).Z,width:"2106",height:"1346"})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nmetadata:\n  name: acj-test\nspec:\n  schedule: "*/1 * * * *"\n  template:\n    broadcastJobTemplate:\n      spec:\n        template:\n          spec:\n            containers:\n              - name: pi\n                image: perl\n                command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n            restartPolicy: Never\n        completionPolicy:\n          type: Always\n          ttlSecondsAfterFinished: 30\n')),(0,a.kt)("p",null,"The YAML below defines an AdvancedCronJob. It will create a BroadcastJob every minute, which will run a job on every node."))}m.isMDXComponent=!0},6641:function(e,n,t){n.Z=t.p+"assets/images/advancedcronjob-2667633566977804a6b7e323ef3d3139.png"}}]);