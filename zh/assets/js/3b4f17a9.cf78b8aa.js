"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7252],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=l,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6557:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=t(3117),l=t(102),r=(t(7294),t(3905)),i=["components"],o={slug:"openkruise-1.1",title:"OpenKruise v1.1\uff1a\u529f\u80fd\u589e\u5f3a\u4e0e\u4e0a\u6e38\u5bf9\u9f50\uff0c\u5927\u89c4\u6a21\u573a\u666f\u6027\u80fd\u4f18\u5316",authors:["FillZpp"],tags:["release"]},p=void 0,u={permalink:"/zh/blog/openkruise-1.1",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2022-03-29-release-1.1.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022-03-29-release-1.1.md",title:"OpenKruise v1.1\uff1a\u529f\u80fd\u589e\u5f3a\u4e0e\u4e0a\u6e38\u5bf9\u9f50\uff0c\u5927\u89c4\u6a21\u573a\u666f\u6027\u80fd\u4f18\u5316",description:"\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\u3001CNCF Sandbox \u9879\u76ee -- OpenKruise\uff0c\u8fd1\u671f\u53d1\u5e03\u4e86 v1.1 \u7248\u672c\u3002",date:"2022-03-29T00:00:00.000Z",formattedDate:"2022\u5e743\u670829\u65e5",tags:[{label:"release",permalink:"/zh/blog/tags/release"}],readingTime:13.185,truncated:!1,authors:[{name:"Siyu Wang",title:"Maintainer of OpenKruise",url:"https://github.com/FillZpp",imageURL:"https://github.com/FillZpp.png",key:"FillZpp"}],frontMatter:{slug:"openkruise-1.1",title:"OpenKruise v1.1\uff1a\u529f\u80fd\u589e\u5f3a\u4e0e\u4e0a\u6e38\u5bf9\u9f50\uff0c\u5927\u89c4\u6a21\u573a\u666f\u6027\u80fd\u4f18\u5316",authors:["FillZpp"],tags:["release"]},nextItem:{title:"OpenKruise v1.0\uff1a\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u8fbe\u5230\u65b0\u7684\u9ad8\u5cf0",permalink:"/zh/blog/openkruise-1.0"}},s={authorsImageUrls:[void 0]},c=[{value:"\u7248\u672c\u89e3\u6790",id:"\u7248\u672c\u89e3\u6790",level:2},{value:"1. \u539f\u5730\u5347\u7ea7\u652f\u6301\u5bb9\u5668\u987a\u5e8f\u4f18\u5148\u7ea7",id:"1-\u539f\u5730\u5347\u7ea7\u652f\u6301\u5bb9\u5668\u987a\u5e8f\u4f18\u5148\u7ea7",level:3},{value:"2. StatefulSetAutoDeletePVC \u529f\u80fd",id:"2-statefulsetautodeletepvc-\u529f\u80fd",level:3},{value:"3. Advanced DaemonSet \u91cd\u6784\u5e76\u652f\u6301\u751f\u547d\u5468\u671f\u94a9\u5b50",id:"3-advanced-daemonset-\u91cd\u6784\u5e76\u652f\u6301\u751f\u547d\u5468\u671f\u94a9\u5b50",level:3},{value:"4. Disable DeepCopy \u6027\u80fd\u4f18\u5316",id:"4-disable-deepcopy-\u6027\u80fd\u4f18\u5316",level:3},{value:"5. \u5176\u4ed6\u6539\u52a8",id:"5-\u5176\u4ed6\u6539\u52a8",level:3},{value:"\u793e\u533a\u53c2\u4e0e",id:"\u793e\u533a\u53c2\u4e0e",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\u3001CNCF Sandbox \u9879\u76ee -- OpenKruise\uff0c\u8fd1\u671f\u53d1\u5e03\u4e86 v1.1 \u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openkruise.io"},"OpenKruise")," \u662f\u9488\u5bf9 Kubernetes \u7684\u589e\u5f3a\u80fd\u529b\u5957\u4ef6\uff0c\u805a\u7126\u4e8e\u4e91\u539f\u751f\u5e94\u7528\u7684\u90e8\u7f72\u3001\u5347\u7ea7\u3001\u8fd0\u7ef4\u3001\u7a33\u5b9a\u6027\u9632\u62a4\u7b49\u9886\u57df\u3002\n\u6240\u6709\u7684\u529f\u80fd\u90fd\u901a\u8fc7 CRD \u7b49\u6807\u51c6\u65b9\u5f0f\u6269\u5c55\uff0c\u53ef\u4ee5\u9002\u7528\u4e8e 1.16 \u4ee5\u4e0a\u7248\u672c\u7684\u4efb\u610f Kubernetes \u96c6\u7fa4\u3002\u5355\u6761 helm \u547d\u4ee4\u5373\u53ef\u5b8c\u6210 Kruise \u7684\u4e00\u952e\u90e8\u7f72\uff0c\u65e0\u9700\u66f4\u591a\u914d\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u7248\u672c\u89e3\u6790"},"\u7248\u672c\u89e3\u6790"),(0,r.kt)("p",null,"\u5728 v1.1 \u7248\u672c\u4e2d\uff0cOpenKruise \u5bf9\u4e0d\u5c11\u5df2\u6709\u529f\u80fd\u505a\u4e86\u6269\u5c55\u4e0e\u589e\u5f3a\uff0c\u5e76\u4e14\u4f18\u5316\u4e86\u5728\u5927\u89c4\u6a21\u96c6\u7fa4\u4e2d\u7684\u8fd0\u884c\u6027\u80fd\u3002\u4ee5\u4e0b\u5bf9 v1.1 \u7684\u90e8\u5206\u529f\u80fd\u505a\u7b80\u8981\u4ecb\u7ecd\u3002"),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cOpenKruise v1.1 \u5df2\u7ecf\u5c06 Kubernetes ",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u4f9d\u8d56\u7248\u672c"),"\u5347\u7ea7\u5230 v1.22\uff0c\u8fd9\u610f\u5473\u7740\u7528\u6237\u53ef\u4ee5\u5728 CloneSet \u7b49\u5de5\u4f5c\u8d1f\u8f7d\u7684 pod template \u6a21\u677f\u4e2d\u4f7f\u7528 up to v1.22 \u7684\u65b0\u5b57\u6bb5\u7b49\uff0c\n\u4f46\u7528\u6237\u5b89\u88c5\u4f7f\u7528 OpenKruise \u6240\u517c\u5bb9\u7684 Kubernetes \u96c6\u7fa4\u7248\u672c\u4ecd\u7136\u4fdd\u6301\u5728 >= v1.16\u3002"),(0,r.kt)("h3",{id:"1-\u539f\u5730\u5347\u7ea7\u652f\u6301\u5bb9\u5668\u987a\u5e8f\u4f18\u5148\u7ea7"},"1. \u539f\u5730\u5347\u7ea7\u652f\u6301\u5bb9\u5668\u987a\u5e8f\u4f18\u5148\u7ea7"),(0,r.kt)("p",null,"\u53bb\u5e74\u5e95\u53d1\u5e03\u7684 v1.0 \u7248\u672c\uff0cOpenKruise \u5f15\u5165\u4e86",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/containerlaunchpriority/"},"\u5bb9\u5668\u542f\u52a8\u987a\u5e8f\u63a7\u5236"),"\u529f\u80fd\uff0c\n\u5b83\u652f\u6301\u4e3a\u4e00\u4e2a Pod \u4e2d\u7684\u591a\u4e2a\u5bb9\u5668\u5b9a\u4e49\u4e0d\u540c\u7684\u6743\u91cd\u5173\u7cfb\uff0c\u5e76\u5728 Pod \u521b\u5efa\u65f6\u6309\u7167\u6743\u91cd\u6765\u63a7\u5236\u4e0d\u540c\u5bb9\u5668\u7684\u542f\u52a8\u987a\u5e8f\u3002"),(0,r.kt)("p",null,"\u5728 v1.0 \u4e2d\uff0c\u8fd9\u4e2a\u529f\u80fd\u4ec5\u4ec5\u80fd\u591f\u4f5c\u7528\u4e8e\u6bcf\u4e2a Pod \u7684\u521b\u5efa\u9636\u6bb5\u3002\u5f53\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u5982\u679c\u5bf9 Pod \u4e2d\u591a\u4e2a\u5bb9\u5668\u505a\u539f\u5730\u5347\u7ea7\uff0c\u5219\u8fd9\u4e9b\u5bb9\u5668\u90fd\u4f1a\u88ab\u540c\u65f6\u6267\u884c\u5347\u7ea7\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\uff0c\u793e\u533a\u4e0e LinkedIn \u7b49\u516c\u53f8\u505a\u8fc7\u4e00\u4e9b\u4ea4\u6d41\uff0c\u83b7\u5f97\u4e86\u66f4\u591a\u7528\u6237\u4f7f\u7528\u573a\u666f\u7684\u8f93\u5165\u3002\n\u5728\u4e00\u4e9b\u573a\u666f\u4e0b\uff0cPod \u4e2d\u591a\u4e2a\u5bb9\u5668\u5b58\u5728\u5173\u8054\u5173\u7cfb\uff0c\u4f8b\u5982\u4e1a\u52a1\u5bb9\u5668\u5347\u7ea7\u7684\u540c\u65f6\uff0cPod \u4e2d\u5176\u4ed6\u4e00\u4e9b\u5bb9\u5668\u4e5f\u9700\u8981\u5347\u7ea7\u914d\u7f6e\u4ece\u800c\u5173\u8054\u5230\u8fd9\u4e2a\u65b0\u7248\u672c\uff1b\n\u6216\u662f\u591a\u4e2a\u5bb9\u5668\u907f\u514d\u5e76\u884c\u5347\u7ea7\uff0c\u4ece\u800c\u4fdd\u8bc1\u5982\u65e5\u5fd7\u91c7\u96c6\u7c7b\u7684 sidecar \u5bb9\u5668\u4e0d\u4f1a\u4e22\u5931\u4e1a\u52a1\u5bb9\u5668\u4e2d\u7684\u65e5\u5fd7\u7b49\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5728 v1.1 \u7248\u672c\u4e2d OpenKruise \u652f\u6301\u4e86\u6309\u5bb9\u5668\u4f18\u5148\u7ea7\u987a\u5e8f\u7684\u539f\u5730\u5347\u7ea7\u3002\n\u5728\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u65e0\u9700\u914d\u7f6e\u4efb\u4f55\u989d\u5916\u53c2\u6570\uff0c\u53ea\u8981 Pod \u5728\u521b\u5efa\u65f6\u5df2\u7ecf\u5e26\u6709\u4e86\u5bb9\u5668\u542f\u52a8\u4f18\u5148\u7ea7\uff0c\u5219\u4e0d\u4ec5\u5728 Pod \u521b\u5efa\u9636\u6bb5\uff0c\u4f1a\u4fdd\u8bc1\u9ad8\u4f18\u5148\u7ea7\u5bb9\u5668\u5148\u4e8e\u4f4e\u4f18\u5148\u7ea7\u5bb9\u5668\u542f\u52a8\uff1b\n\u5e76\u4e14\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5355\u6b21\u539f\u5730\u5347\u7ea7"),"\u4e2d\uff0c\u5982\u679c\u540c\u65f6\u5347\u7ea7\u4e86\u591a\u4e2a\u5bb9\u5668\uff0c\u4f1a\u5148\u5347\u7ea7\u9ad8\u4f18\u5148\u7ea7\u5bb9\u5668\uff0c\u7b49\u5f85\u5b83\u5347\u7ea7\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u518d\u5347\u7ea7\u4f4e\u4f18\u5148\u7ea7\u5bb9\u5668\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u7684\u539f\u5730\u5347\u7ea7\uff0c\u5305\u62ec\u4fee\u6539 image \u955c\u50cf\u5347\u7ea7\u4e0e\u4fee\u6539 env from metadata \u7684\u73af\u5883\u53d8\u91cf\u5347\u7ea7\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"strong",href:"/docs/core-concepts/inplace-update"},"\u539f\u5730\u5347\u7ea7\u4ecb\u7ecd"),"\uff09")),(0,r.kt)("p",null,"\u603b\u7ed3\u6765\u8bf4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e0d\u5b58\u5728\u5bb9\u5668\u542f\u52a8\u987a\u5e8f\u7684 Pod\uff0c\u5728\u591a\u5bb9\u5668\u539f\u5730\u5347\u7ea7\u65f6\u6ca1\u6709\u987a\u5e8f\u4fdd\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5b58\u5728\u5bb9\u5668\u542f\u52a8\u987a\u5e8f\u7684 Pod\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u672c\u6b21\u539f\u5730\u5347\u7ea7\u7684\u591a\u4e2a\u5bb9\u5668\u5177\u6709\u4e0d\u540c\u7684\u542f\u52a8\u987a\u5e8f\uff0c\u4f1a\u6309\u542f\u52a8\u987a\u5e8f\u6765\u63a7\u5236\u539f\u5730\u5347\u7ea7\u7684\u5148\u540e\u987a\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u672c\u5730\u539f\u5730\u5347\u7ea7\u7684\u591a\u4e2a\u5bb9\u5668\u7684\u542f\u52a8\u987a\u5e8f\u76f8\u540c\uff0c\u5219\u539f\u5730\u5347\u7ea7\u65f6\u6ca1\u6709\u987a\u5e8f\u4fdd\u8bc1\u3002")))),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u4e0d\u540c\u542f\u52a8\u987a\u5e8f\u5bb9\u5668\u7684 CloneSet \u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  ...\nspec:\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n        app-config: "... config v1 ..."\n    spec:\n      containers:\n      - name: sidecar\n        env:\n        - name: KRUISE_CONTAINER_PRIORITY\n          value: "10"\n        - name: APP_CONFIG\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.annotations[\'app-config\']\n      - name: main\n        image: main-image:v1\n  updateStrategy:\n    type: InPlaceIfPossible\n')),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u66f4\u65b0 CloneSet\uff0c\u5c06\u5176\u4e2d app-config annotation \u548c main \u5bb9\u5668\u7684\u955c\u50cf\u4fee\u6539\u540e\uff0c\n\u610f\u5473\u7740 sidecar \u4e0e main \u5bb9\u5668\u90fd\u9700\u8981\u88ab\u66f4\u65b0\uff0cKruise \u4f1a\u5148\u539f\u5730\u5347\u7ea7 Pod \u6765\u5c06\u5176\u4e2d sidecar \u5bb9\u5668\u91cd\u5efa\u6765\u751f\u6548\u65b0\u7684 env from annotation\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5df2\u5347\u7ea7\u7684 Pod \u4e2d\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/inplace-update-state")," annotation \u548c\u5b83\u7684\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revision": "{CLONESET_NAME}-{HASH}",         // \u672c\u6b21\u539f\u5730\u5347\u7ea7\u7684\u76ee\u6807 revision \u540d\u5b57\n  "updateTimestamp": "2022-03-22T09:06:55Z",    // \u6574\u4e2a\u539f\u5730\u5347\u7ea7\u7684\u521d\u6b21\u5f00\u59cb\u65f6\u95f4\n  "nextContainerImages": {"main": "main-image:v2"},                // \u540e\u7eed\u6279\u6b21\u4e2d\u8fd8\u9700\u8981\u5347\u7ea7\u7684\u5bb9\u5668\u955c\u50cf\n  // "nextContainerRefMetadata": {...},                            // \u540e\u7eed\u6279\u6b21\u4e2d\u8fd8\u9700\u8981\u5347\u7ea7\u7684\u5bb9\u5668 env from labels/annotations\n  "preCheckBeforeNext": {"containersRequiredReady": ["sidecar"]},  // pre-check \u68c0\u67e5\u9879\uff0c\u7b26\u5408\u8981\u6c42\u540e\u624d\u80fd\u539f\u5730\u5347\u7ea7\u540e\u7eed\u6279\u6b21\u7684\u5bb9\u5668\n  "containerBatchesRecord":[\n    {"timestamp":"2022-03-22T09:06:55Z","containers":["sidecar"]}  // \u5df2\u66f4\u65b0\u7684\u9996\u4e2a\u6279\u6b21\u5bb9\u5668\uff08\u5b83\u4ec5\u4ec5\u8868\u660e\u5bb9\u5668\u7684 spec \u5df2\u7ecf\u88ab\u66f4\u65b0\uff0c\u4f8b\u5982 pod.spec.containers \u4e2d\u7684 image \u6216\u662f labels/annotations\uff0c\u4f46\u5e76\u4e0d\u4ee3\u8868 node \u4e0a\u771f\u5b9e\u7684\u5bb9\u5668\u5df2\u7ecf\u5347\u7ea7\u5b8c\u6210\u4e86\uff09\n  ]\n}\n')),(0,r.kt)("p",null,"\u5f53 sidecar \u5bb9\u5668\u5347\u7ea7\u6210\u529f\u4e4b\u540e\uff0cKruise \u4f1a\u63a5\u7740\u518d\u5347\u7ea7 main \u5bb9\u5668\u3002\u6700\u7ec8\u4f60\u4f1a\u5728 Pod \u4e2d\u770b\u5230\u5982\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/inplace-update-state")," annotation\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revision": "{CLONESET_NAME}-{HASH}",\n  "updateTimestamp": "2022-03-22T09:06:55Z",\n  "lastContainerStatuses":{"main":{"imageID":"THE IMAGE ID OF OLD MAIN CONTAINER"}},\n  "containerBatchesRecord":[\n    {"timestamp":"2022-03-22T09:06:55Z","containers":["sidecar"]},\n    {"timestamp":"2022-03-22T09:07:20Z","containers":["main"]}\n  ]\n}\n')),(0,r.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\uff0c\u7528\u6237\u53ea\u9700\u8981\u5173\u6ce8\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"containerBatchesRecord")," \u6765\u786e\u4fdd\u5bb9\u5668\u662f\u88ab\u5206\u4e3a\u591a\u6279\u5347\u7ea7\u7684\u3002\n\u5982\u679c\u8fd9\u4e2a Pod \u5728\u539f\u5730\u5347\u7ea7\u7684\u8fc7\u7a0b\u4e2d\u5361\u4f4f\u4e86\uff0c\u4f60\u53ef\u4ee5\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"nextContainerImages/nextContainerRefMetadata")," \u5b57\u6bb5\uff0c\u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"preCheckBeforeNext")," \u4e2d\u524d\u4e00\u6b21\u5347\u7ea7\u7684\u5bb9\u5668\u662f\u5426\u5df2\u7ecf\u5347\u7ea7\u6210\u529f\u5e76 ready \u4e86\u3002"),(0,r.kt)("h3",{id:"2-statefulsetautodeletepvc-\u529f\u80fd"},"2. StatefulSetAutoDeletePVC \u529f\u80fd"),(0,r.kt)("p",null,"\u4ece Kubernetes v1.23 \u5f00\u59cb\uff0c\u539f\u751f\u7684 StatefulSet \u52a0\u5165\u4e86 StatefulSetAutoDeletePVC \u529f\u80fd\uff0c\u5373",(0,r.kt)("strong",{parentName:"p"},"\u6839\u636e\u7ed9\u5b9a\u7b56\u7565\u6765\u9009\u62e9\u4fdd\u7559\u6216\u81ea\u52a8\u5220\u9664 StatefulSet \u521b\u5efa\u7684 PVC \u5bf9\u8c61"),"\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#persistentvolumeclaim-retention"},"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0cv1.1 \u7248\u672c\u7684 Advanced StatefulSet \u4ece\u4e0a\u6e38\u540c\u6b65\u4e86\u8fd9\u4e2a\u529f\u80fd\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},".spec.persistentVolumeClaimRetentionPolicy")," \u5b57\u6bb5\u6765\u6307\u5b9a\u8fd9\u4e2a\u81ea\u52a8\u6e05\u7406\u7b56\u7565\u3002\n\u8fd9\u9700\u8981\u4f60\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u7684\u65f6\u5019\uff0c\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSetAutoDeletePVC")," feature-gate \u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  ...\n  persistentVolumeClaimRetentionPolicy:  # optional\n    whenDeleted: Retain | Delete\n    whenScaled: Retain | Delete\n")),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c\u4e24\u4e2a\u7b56\u7565\u5b57\u6bb5\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenDeleted"),"\uff1a\u5f53 Advanced StatefulSet \u88ab\u5220\u9664\u65f6\uff0c\u5bf9 PVC \u7684\u4fdd\u7559/\u5220\u9664\u7b56\u7565\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whenScaled"),"\uff1a\u5f53 Advanced StatefulSet \u53d1\u751f\u7f29\u5bb9\u65f6\uff0c\u5bf9\u7f29\u5bb9 Pod \u5173\u8054 PVC \u7684\u4fdd\u7559/\u5220\u9664\u7b56\u7565\u3002")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u7b56\u7565\u90fd\u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u4e24\u79cd\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Retain"),"\uff08\u9ed8\u8ba4\u503c\uff09\uff1a\u5b83\u7684\u884c\u4e3a\u4e0e\u8fc7\u53bb StatefulSet \u4e00\u6837\uff0c\u5728 Pod \u5220\u9664\u65f6\u5bf9\u5b83\u5173\u8054\u7684 PVC \u505a\u4fdd\u7559\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete"),"\uff1a\u5f53 Pod \u5220\u9664\u65f6\uff0c\u81ea\u52a8\u5220\u9664\u5b83\u6240\u5173\u8054\u7684 PVC \u5bf9\u8c61\u3002")),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u6709\u51e0\u4e2a\u6ce8\u610f\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"StatefulSetAutoDeletePVC \u529f\u80fd\u53ea\u4f1a\u6e05\u7406\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"volumeClaimTemplate")," \u4e2d\u5b9a\u4e49\u548c\u521b\u5efa\u7684 PVC\uff0c\u800c\u4e0d\u4f1a\u6e05\u7406\u7528\u6237\u81ea\u5df1\u521b\u5efa\u6216\u5173\u8054\u5230 StatefulSet Pod \u4e2d\u7684 PVC\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u8ff0\u6e05\u7406\u53ea\u53d1\u751f\u5728 Advanced StatefulSet \u88ab\u5220\u9664\u6216\u4e3b\u52a8\u7f29\u5bb9\u7684\u60c5\u51b5\u4e0b\u3002\u4f8b\u5982 node \u6545\u969c\u5bfc\u81f4\u7684 Pod \u9a71\u9010\u91cd\u5efa\u7b49\uff0c\u4ecd\u7136\u4f1a\u590d\u7528\u5df2\u6709\u7684 PVC\u3002")),(0,r.kt)("h3",{id:"3-advanced-daemonset-\u91cd\u6784\u5e76\u652f\u6301\u751f\u547d\u5468\u671f\u94a9\u5b50"},"3. Advanced DaemonSet \u91cd\u6784\u5e76\u652f\u6301\u751f\u547d\u5468\u671f\u94a9\u5b50"),(0,r.kt)("p",null,"\u65e9\u5148\u7248\u672c\u7684 Advanced DaemonSet \u5b9e\u73b0\u4e0e\u4e0a\u6e38\u63a7\u5236\u5668\u5dee\u5f02\u8f83\u5927\uff0c\u4f8b\u5982\u5bf9\u4e8e not-ready \u548c unschedulable \u7684\u8282\u70b9\u9700\u8981\u989d\u5916\u914d\u7f6e\u5b57\u6bb5\u6765\u9009\u62e9\u662f\u5426\u5904\u7406\uff0c\u8fd9\u5bf9\u4e8e\u6211\u4eec\u7684\u7528\u6237\u6765\u8bf4\u90fd\u589e\u52a0\u4e86\u4f7f\u7528\u6210\u672c\u548c\u8d1f\u62c5\u3002"),(0,r.kt)("p",null,"\u5728 v1.1 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5bf9 Advanced DaemonSet \u505a\u4e86\u4e00\u6b21\u5c0f\u91cd\u6784\uff0c\u5c06\u5b83\u4e0e\u4e0a\u6e38\u63a7\u5236\u5668\u91cd\u65b0\u505a\u4e86\u5bf9\u9f50\u3002\n\u56e0\u6b64\uff0cAdvanced DaemonSet \u7684\u6240\u6709\u9ed8\u8ba4\u884c\u4e3a\u4f1a\u4e0e\u539f\u751f DaemonSet \u57fa\u672c\u4e00\u81f4\uff0c\u7528\u6237\u53ef\u4ee5\u50cf\u4f7f\u7528 Advanced StatefulSet \u4e00\u6837\uff0c\u901a\u8fc7\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," \u5c31\u80fd\u5f88\u65b9\u4fbf\u5730\u5c06\u4e00\u4e2a\u539f\u751f DaemonSet \u4fee\u6539\u4e3a Advanced DaemonSet \u6765\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u8fd8\u4e3a Advanced DaemonSet \u589e\u52a0\u4e86\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u9996\u5148\u652f\u6301 preDelete hook\uff0c\u6765\u5141\u8bb8\u7528\u6237\u5728 daemon Pod \u88ab\u5220\u9664\u524d\u6267\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u903b\u8f91\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  ...\n  # define with label\n  lifecycle:\n    preDelete:\n      labelsHandler:\n        example.io/block-deleting: "true"\n')),(0,r.kt)("p",null,"\u5f53 DaemonSet \u5220\u9664\u4e00\u4e2a Pod \u65f6\uff08\u5305\u62ec\u7f29\u5bb9\u548c\u91cd\u5efa\u5347\u7ea7\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u5b9a\u4e49 lifecycle hook \u6216\u8005 Pod \u4e0d\u7b26\u5408 preDelete \u6761\u4ef6\uff0c\u5219\u76f4\u63a5\u5220\u9664\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u4f1a\u5148\u5c06 Pod \u66f4\u65b0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," \u72b6\u6001\uff0c\u5e76\u7b49\u5f85\u7528\u6237\u81ea\u5b9a\u4e49\u7684 controller \u5c06 Pod \u4e2d\u5173\u8054\u7684 label/finalizer \u53bb\u9664\uff0c\u518d\u6267\u884c Pod \u5220\u9664\u3002")),(0,r.kt)("h3",{id:"4-disable-deepcopy-\u6027\u80fd\u4f18\u5316"},"4. Disable DeepCopy \u6027\u80fd\u4f18\u5316"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5728\u4f7f\u7528 controller-runtime \u6765\u7f16\u5199 Operator/Controller \u65f6\uff0c\n\u4f7f\u7528\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"sigs.k8s.io/controller-runtime/pkg/client")," Client \u5ba2\u6237\u7aef\u6765 get/list \u67e5\u8be2\u5bf9\u8c61\uff08typed\uff09\uff0c\u90fd\u662f\u4ece\u5185\u5b58 Informer \u4e2d\u83b7\u53d6\u5e76\u8fd4\u56de\uff0c\u8fd9\u662f\u5927\u90e8\u5206\u4eba\u90fd\u77e5\u9053\u7684\u3002"),(0,r.kt)("p",null,"\u4f46\u5f88\u591a\u4eba\u4e0d\u77e5\u9053\u7684\u662f\uff0c\u5728\u8fd9\u4e9b get/list \u64cd\u4f5c\u80cc\u540e\uff0ccontroller-runtime \u4f1a\u5c06\u4ece Informer \u4e2d\u67e5\u5230\u7684\u6240\u6709\u5bf9\u8c61\u505a\u4e00\u6b21 deep copy \u6df1\u62f7\u8d1d\u540e\u518d\u8fd4\u56de\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u8bbe\u8ba1\u7684\u521d\u8877\uff0c\u662f\u907f\u514d\u5f00\u53d1\u8005\u9519\u8bef\u5730\u5c06 Informer \u4e2d\u7684\u5bf9\u8c61\u76f4\u63a5\u7be1\u6539\u3002\u5728\u6df1\u62f7\u8d1d\u4e4b\u540e\uff0c\u65e0\u8bba\u5f00\u53d1\u8005\u5bf9 get/list \u8fd4\u56de\u7684\u5bf9\u8c61\u505a\u4e86\u4efb\u4f55\u4fee\u6539\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cd\u5230 Informer \u4e2d\u7684\u5bf9\u8c61\uff0c\u540e\u8005\u53ea\u4f1a\u4ece kube-apiserver \u7684 ListWatch \u8bf7\u6c42\u4e2d\u540c\u6b65\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u5728\u4e00\u4e9b\u5f88\u5927\u89c4\u6a21\u7684\u96c6\u7fa4\u4e2d\uff0cOpenKruise \u4e2d\u5404\u4e2a\u63a7\u5236\u5668\u540c\u65f6\u5728\u8fd0\u884c\uff0c\u540c\u65f6\u6bcf\u4e2a\u63a7\u5236\u5668\u8fd8\u5b58\u5728\u591a\u4e2a worker \u6267\u884c Reconcile\uff0c\u53ef\u80fd\u4f1a\u5e26\u6765\u5927\u91cf\u7684 deep copy \u64cd\u4f5c\u3002\n\u4f8b\u5982\u96c6\u7fa4\u4e2d\u6709\u5927\u91cf\u5e94\u7528\u7684 CloneSet\uff0c\u800c\u5176\u4e2d\u4e00\u4e9b CloneSet \u4e0b\u7ba1\u7406\u7684 Pod \u6570\u91cf\u975e\u5e38\u591a\uff0c\u5219\u6bcf\u4e2a worker \u5728 Reconcile \u7684\u65f6\u5019\u90fd\u4f1a list \u67e5\u8be2\u4e00\u4e2a CloneSet \u4e0b\u7684\u6240\u6709 Pod \u5bf9\u8c61\uff0c\u518d\u52a0\u4e0a\u591a\u4e2a worker \u5e76\u884c\u64cd\u4f5c\uff0c\n\u53ef\u80fd\u9020\u6210 kruise-manager \u77ac\u65f6\u7684 CPU \u548c Memory \u538b\u529b\u9661\u589e\uff0c\u751a\u81f3\u5728\u5185\u5b58\u914d\u989d\u4e0d\u8db3\u7684\u60c5\u51b5\u4e0b\u6709\u53d1\u751f OOM \u7684\u98ce\u9669\u3002"),(0,r.kt)("p",null,"\u5728\u4e0a\u6e38\u7684 controller-runtime \u4e2d\uff0c\u6211\u5728\u53bb\u5e74\u5df2\u7ecf\u63d0\u4ea4\u5408\u5e76\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/controller-runtime/pull/1274"},"DisableDeepCopy \u529f\u80fd"),"\uff0c\u5305\u542b\u5728 controller-runtime v0.10 \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002\n\u5b83\u5141\u8bb8\u5f00\u53d1\u8005\u6307\u5b9a\u67d0\u4e9b\u7279\u5b9a\u7684\u8d44\u6e90\u7c7b\u578b\uff0c\u5728\u505a get/list \u67e5\u8be2\u65f6\u4e0d\u6267\u884c\u6df1\u62f7\u8d1d\uff0c\u800c\u662f\u76f4\u63a5\u8fd4\u56de Informer \u4e2d\u7684\u5bf9\u8c61\u6307\u9488\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u4e0b\u8ff0\u4ee3\u7801\uff0c\u5728 main.go \u4e2d\u521d\u59cb\u5316 Manager \u65f6\uff0c\u4e3a cache \u52a0\u5165\u53c2\u6570\u5373\u53ef\u914d\u7f6e Pod \u7b49\u8d44\u6e90\u7c7b\u578b\u4e0d\u505a\u6df1\u62f7\u8d1d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"    mgr, err := ctrl.NewManager(cfg, ctrl.Options{\n        ...\n        NewCache: cache.BuilderWithOptions(cache.Options{\n            UnsafeDisableDeepCopyByObject: map[client.Object]bool{\n                &v1.Pod{}: true,\n            },\n        }),\n    })\n")),(0,r.kt)("p",null,"\u4f46\u5728 Kruise v1.1 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u6ca1\u6709\u9009\u62e9\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\uff0c\u800c\u662f\u5c06 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/pkg/util/client/delegating_client.go"},"Delegating Client")," \u91cd\u65b0\u505a\u4e86\u5c01\u88c5\uff0c\n\u4ece\u800c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u4efb\u610f\u505a list \u67e5\u8be2\u7684\u5730\u65b9\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"DisableDeepCopy ListOption")," \u6765\u6307\u5b9a\u5355\u6b21\u7684 list \u64cd\u4f5c\u4e0d\u505a\u6df1\u62f7\u8d1d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'    if err := r.List(context.TODO(), &podList, client.InNamespace("default"), utilclient.DisableDeepCopy); err != nil {\n        return nil, nil, err\n    }\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u4f7f\u7528\u4e0a\u66f4\u52a0\u7075\u6d3b\uff0c\u907f\u514d\u4e3a\u6574\u4e2a\u8d44\u6e90\u7c7b\u578b\u5173\u95ed\u6df1\u62f7\u8d1d\u540e\uff0c\u4f17\u591a\u793e\u533a\u8d21\u732e\u8005\u5728\u53c2\u4e0e\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u5982\u679c\u6ca1\u6709\u6ce8\u610f\u5230\u5219\u53ef\u80fd\u4f1a\u9519\u8bef\u4fee\u6539 Informer \u4e2d\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"5-\u5176\u4ed6\u6539\u52a8"},"5. \u5176\u4ed6\u6539\u52a8"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/releases"},"Github release")," \u9875\u9762\uff0c\u6765\u67e5\u770b\u66f4\u591a\u7684\u6539\u52a8\u4ee5\u53ca\u5b83\u4eec\u7684\u4f5c\u8005\u4e0e\u63d0\u4ea4\u8bb0\u5f55\u3002"),(0,r.kt)("h2",{id:"\u793e\u533a\u53c2\u4e0e"},"\u793e\u533a\u53c2\u4e0e"),(0,r.kt)("p",null,"\u975e\u5e38\u6b22\u8fce\u4f60\u901a\u8fc7 Github/Slack/\u9489\u9489/\u5fae\u4fe1 \u7b49\u65b9\u5f0f\u52a0\u5165\u6211\u4eec\u6765\u53c2\u4e0e OpenKruise \u5f00\u6e90\u793e\u533a\u3002\n\u4f60\u662f\u5426\u5df2\u7ecf\u6709\u4e00\u4e9b\u5e0c\u671b\u4e0e\u6211\u4eec\u793e\u533a\u4ea4\u6d41\u7684\u5185\u5bb9\u5462\uff1f\n\u53ef\u4ee5\u5728\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"p",href:"https://shimo.im/docs/gXqmeQOYBehZ4vqo"},"\u793e\u533a\u53cc\u5468\u4f1a"),"\u4e0a\u5206\u4eab\u4f60\u7684\u58f0\u97f3\uff0c\u6216\u901a\u8fc7\u4ee5\u4e0b\u6e20\u9053\u53c2\u4e0e\u8ba8\u8bba\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/channels/openkruise"},"Slack channel")," (English)"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a\u9489\u9489\u7fa4\uff1a\u641c\u7d22\u7fa4\u53f7 ",(0,r.kt)("inlineCode",{parentName:"li"},"23330762")," (Chinese)"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a\u5fae\u4fe1\u7fa4\uff08\u65b0\uff09\uff1a\u6dfb\u52a0\u7528\u6237 ",(0,r.kt)("inlineCode",{parentName:"li"},"openkruise")," \u5e76\u8ba9\u673a\u5668\u4eba\u62c9\u4f60\u5165\u7fa4 (Chinese)")))}d.isMDXComponent=!0}}]);