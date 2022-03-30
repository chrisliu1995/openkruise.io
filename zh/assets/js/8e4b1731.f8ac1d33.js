"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3517],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),k=l,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=["components"],o={slug:"openkruise-0.9.0",title:"OpenKruise 0.9.0\uff1a\u65b0\u589ePod\u5bb9\u5668\u91cd\u542f\u3001\u8d44\u6e90\u5220\u9664\u9632\u62a4\u7b49\u529f\u80fd",authors:["FillZpp"],tags:["release"]},p=void 0,d={permalink:"/zh/blog/openkruise-0.9.0",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2021-05-20-release-0.9.0.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-05-20-release-0.9.0.md",title:"OpenKruise 0.9.0\uff1a\u65b0\u589ePod\u5bb9\u5668\u91cd\u542f\u3001\u8d44\u6e90\u5220\u9664\u9632\u62a4\u7b49\u529f\u80fd",description:"OpenKruise \u5728 2021.5.20 \u53d1\u5e03\u4e86\u6700\u65b0\u7684 v0.9.0 \u7248\u672c\uff0c\u65b0\u589e\u4e86 Pod \u5bb9\u5668\u91cd\u542f\u3001\u8d44\u6e90\u7ea7\u8054\u5220\u9664\u9632\u62a4\u7b49\u91cd\u78c5\u529f\u80fd\uff0c\u672c\u6587\u4ee5\u4e0b\u5bf9\u65b0\u7248\u672c\u505a\u6574\u4f53\u7684\u6982\u89c8\u4ecb\u7ecd\u3002",date:"2021-05-20T00:00:00.000Z",formattedDate:"2021\u5e745\u670820\u65e5",tags:[{label:"release",permalink:"/zh/blog/tags/release"}],readingTime:17.27,truncated:!1,authors:[{name:"Siyu Wang",title:"Maintainer of OpenKruise",url:"https://github.com/FillZpp",imageURL:"https://github.com/FillZpp.png",key:"FillZpp"}],frontMatter:{slug:"openkruise-0.9.0",title:"OpenKruise 0.9.0\uff1a\u65b0\u589ePod\u5bb9\u5668\u91cd\u542f\u3001\u8d44\u6e90\u5220\u9664\u9632\u62a4\u7b49\u529f\u80fd",authors:["FillZpp"],tags:["release"]},prevItem:{title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",permalink:"/zh/blog/sidecarset-hotupdate"},nextItem:{title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",permalink:"/zh/blog/sidecarset"}},u={authorsImageUrls:[void 0]},s=[{value:"Pod \u5bb9\u5668\u91cd\u542f/\u91cd\u5efa",id:"pod-\u5bb9\u5668\u91cd\u542f\u91cd\u5efa",level:2},{value:"\u7ea7\u8054\u5220\u9664\u9632\u62a4",id:"\u7ea7\u8054\u5220\u9664\u9632\u62a4",level:2},{value:"CloneSet \u65b0\u589e\u529f\u80fd",id:"cloneset-\u65b0\u589e\u529f\u80fd",level:2},{value:"\u5220\u9664\u4f18\u5148\u7ea7",id:"\u5220\u9664\u4f18\u5148\u7ea7",level:3},{value:"\u914d\u5408\u539f\u5730\u5347\u7ea7\u7684\u955c\u50cf\u9884\u70ed",id:"\u914d\u5408\u539f\u5730\u5347\u7ea7\u7684\u955c\u50cf\u9884\u70ed",level:3},{value:"\u5148\u6269\u518d\u7f29\u7684 Pod \u7f6e\u6362\u65b9\u5f0f",id:"\u5148\u6269\u518d\u7f29\u7684-pod-\u7f6e\u6362\u65b9\u5f0f",level:3},{value:"\u57fa\u4e8e partition \u7ec8\u6001\u7684\u9ad8\u6548\u56de\u6eda",id:"\u57fa\u4e8e-partition-\u7ec8\u6001\u7684\u9ad8\u6548\u56de\u6eda",level:3},{value:"\u77ed hash",id:"\u77ed-hash",level:3},{value:"SidecarSet \u65b0\u589e\u529f\u80fd",id:"sidecarset-\u65b0\u589e\u529f\u80fd",level:2},{value:"Sidecar \u70ed\u5347\u7ea7",id:"sidecar-\u70ed\u5347\u7ea7",level:3},{value:"\u66f4\u591a",id:"\u66f4\u591a",level:2}],m={toc:s};function k(e){var t=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenKruise \u5728 2021.5.20 \u53d1\u5e03\u4e86\u6700\u65b0\u7684 v0.9.0 \u7248\u672c\uff0c\u65b0\u589e\u4e86 Pod \u5bb9\u5668\u91cd\u542f\u3001\u8d44\u6e90\u7ea7\u8054\u5220\u9664\u9632\u62a4\u7b49\u91cd\u78c5\u529f\u80fd\uff0c\u672c\u6587\u4ee5\u4e0b\u5bf9\u65b0\u7248\u672c\u505a\u6574\u4f53\u7684\u6982\u89c8\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"pod-\u5bb9\u5668\u91cd\u542f\u91cd\u5efa"},"Pod \u5bb9\u5668\u91cd\u542f/\u91cd\u5efa"),(0,r.kt)("p",null,"\u201c\u91cd\u542f\u201d \u662f\u4e00\u4e2a\u5f88\u6734\u7d20\u7684\u9700\u6c42\uff0c\u5373\u4f7f\u65e5\u5e38\u8fd0\u7ef4\u7684\u8bc9\u6c42\uff0c\u4e5f\u662f\u6280\u672f\u9886\u57df\u8f83\u4e3a\u5e38\u89c1\u7684 \u201c\u6062\u590d\u624b\u6bb5\u201d\u3002\u800c\u5728\u539f\u751f\u7684 Kubernetes \u4e2d\uff0c\u5e76\u6ca1\u6709\u63d0\u4f9b\u4efb\u4f55\u5bf9\u5bb9\u5668\u7c92\u5ea6\u7684\u64cd\u4f5c\u80fd\u529b\uff0cPod \u4f5c\u4e3a\u6700\u5c0f\u64cd\u4f5c\u5355\u5143\u4e5f\u53ea\u6709\u521b\u5efa\u3001\u5220\u9664\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u6709\u7684\u540c\u5b66\u53ef\u80fd\u4f1a\u95ee\uff0c\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u4e3a\u4ec0\u4e48\u7528\u6237\u8fd8\u8981\u5173\u6ce8\u5bb9\u5668\u91cd\u542f\u8fd9\u79cd\u8fd0\u7ef4\u64cd\u4f5c\u5462\uff1f\u5728\u7406\u60f3\u7684 serverless \u6a21\u5f0f\u4e0b\uff0c\u4e1a\u52a1\u53ea\u9700\u8981\u5173\u5fc3\u670d\u52a1\u81ea\u8eab\u5c31\u597d\u5427\uff1f"),(0,r.kt)("p",null,"\u8fd9\u6765\u81ea\u4e8e\u4e91\u539f\u751f\u67b6\u6784\u548c\u8fc7\u53bb\u4f20\u7edf\u57fa\u7840\u57fa\u7840\u8bbe\u65bd\u7684\u5dee\u5f02\u6027\u3002\u5728\u4f20\u7edf\u7684\u7269\u7406\u673a\u3001\u865a\u62df\u673a\u65f6\u4ee3\uff0c\u4e00\u53f0\u673a\u5668\u4e0a\u5f80\u5f80\u4f1a\u90e8\u7f72\u548c\u8fd0\u884c\u591a\u4e2a\u5e94\u7528\u7684\u5b9e\u4f8b\uff0c\u5e76\u4e14\u673a\u5668\u548c\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u662f\u4e0d\u540c\u7684\uff1b\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u5b9e\u4f8b\u7684\u91cd\u542f\u53ef\u80fd\u4ec5\u4ec5\u662f\u4e00\u6761 systemctl \u6216 supervisor \u4e4b\u7c7b\u7684\u6307\u4ee4\uff0c\u800c\u65e0\u9700\u5c06\u6574\u4e2a\u673a\u5668\u91cd\u542f\u3002\u7136\u800c\uff0c\u5728\u5bb9\u5668\u4e0e\u4e91\u539f\u751f\u6a21\u5f0f\u4e0b\uff0c\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u662f\u548c Pod \u5bb9\u5668\u7ed1\u5b9a\u7684\uff1b\u5373\u5e38\u89c4\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u5bb9\u5668\u53ea\u8fd0\u884c\u4e00\u4e2a\u5e94\u7528\u8fdb\u7a0b\uff0c\u4e00\u4e2a Pod \u4e5f\u53ea\u63d0\u4f9b\u4e00\u4e2a\u5e94\u7528\u5b9e\u4f8b\u7684\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u7684\u9650\u5236\uff0c\u76ee\u524d\u539f\u751f Kubernetes \u4e4b\u4e0b\u662f\u6ca1\u6709 API \u6765\u4e3a\u4e0a\u5c42\u4e1a\u52a1\u63d0\u4f9b\u5bb9\u5668\uff08\u5e94\u7528\uff09\u91cd\u542f\u80fd\u529b\u7684\u3002\u800c Kruise v0.9.0 \u7248\u672c\u63d0\u4f9b\u4e86\u4e00\u79cd\u5355 Pod \u7ef4\u5ea6\u7684\u5bb9\u5668\u91cd\u542f\u80fd\u529b\uff0c\u517c\u5bb9 1.16 \u53ca\u4ee5\u4e0a\u7248\u672c\u7684\u6807\u51c6 Kubernetes \u96c6\u7fa4\u3002\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u4e4b\u540e\uff0c\u53ea\u9700\u8981\u521b\u5efa ContainerRecreateRequest\uff08\u7b80\u79f0 CRR\uff09 \u5bf9\u8c61\u6765\u6307\u5b9a\u91cd\u542f\uff0c\u6700\u7b80\u5355\u7684 YAML \u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ContainerRecreateRequest\nmetadata:\n  namespace: pod-namespace\n  name: xxx\nspec:\n  podName: pod-name\n  containers:\n  - name: app\n  - name: sidecar\n")),(0,r.kt)("p",null,"\u5176\u4e2d\uff0cnamespace \u9700\u8981\u4e0e\u8981\u64cd\u4f5c\u7684 Pod \u5728\u540c\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\uff0cname \u53ef\u81ea\u9009\u3002spec \u4e2d podName \u662f Pod \u540d\u5b57\uff0ccontainers \u5217\u8868\u5219\u53ef\u4ee5\u6307\u5b9a Pod \u4e2d\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u540d\u6765\u6267\u884c\u91cd\u542f\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u5fc5\u9009\u5b57\u6bb5\u5916\uff0cCRR \u8fd8\u63d0\u4f9b\u4e86\u591a\u79cd\u53ef\u9009\u7684\u91cd\u542f\u7b56\u7565\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  # ...\n  strategy:\n    failurePolicy: Fail\n    orderedRecreate: false\n    terminationGracePeriodSeconds: 30\n    unreadyGracePeriodSeconds: 3\n    minStartedSeconds: 10\n  activeDeadlineSeconds: 300\n  ttlSecondsAfterFinished: 1800\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"failurePolicy"),": Fail \u6216 Ignore\uff0c\u9ed8\u8ba4 Fail\uff1b\u8868\u793a\u4e00\u65e6\u6709\u67d0\u4e2a\u5bb9\u5668\u505c\u6b62\u6216\u91cd\u5efa\u5931\u8d25\uff0cCRR \u7acb\u5373\u7ed3\u675f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"orderedRecreate"),": \u9ed8\u8ba4 false\uff1btrue \u8868\u793a\u5217\u8868\u6709\u591a\u4e2a\u5bb9\u5668\u65f6\uff0c\u7b49\u524d\u4e00\u4e2a\u5bb9\u5668\u91cd\u5efa\u5b8c\u6210\u4e86\uff0c\u518d\u5f00\u59cb\u91cd\u5efa\u4e0b\u4e00\u4e2a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"terminationGracePeriodSeconds"),": \u7b49\u5f85\u5bb9\u5668\u4f18\u96c5\u9000\u51fa\u7684\u65f6\u95f4\uff0c\u4e0d\u586b\u9ed8\u8ba4\u7528 Pod \u4e2d\u5b9a\u4e49\u7684\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unreadyGracePeriodSeconds"),": \u5728\u91cd\u5efa\u4e4b\u524d\u5148\u628a Pod \u8bbe\u4e3a not ready\uff0c\u5e76\u7b49\u5f85\u8fd9\u6bb5\u65f6\u95f4\u540e\u518d\u5f00\u59cb\u6267\u884c\u91cd\u5efa",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6ce8\uff1a\u8be5\u529f\u80fd\u4f9d\u8d56\u4e8e KruisePodReadinessGate \u8fd9\u4e2a feature-gate \u8981\u6253\u5f00\uff0c\u540e\u8005\u4f1a\u5728\u6bcf\u4e2a Pod \u521b\u5efa\u7684\u65f6\u5019\u6ce8\u5165\u4e00\u4e2a readinessGate\u3002 \u5426\u5219\uff0c\u9ed8\u8ba4\u53ea\u4f1a\u7ed9 Kruise workload \u521b\u5efa\u7684 Pod \u6ce8\u5165 readinessGate\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u6709\u8fd9\u4e9b Pod \u624d\u80fd\u5728 CRR \u91cd\u5efa\u65f6\u4f7f\u7528 unreadyGracePeriodSeconds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minStartedSeconds"),": \u91cd\u5efa\u540e\u65b0\u5bb9\u5668\u81f3\u5c11\u4fdd\u6301\u8fd0\u884c\u8fd9\u6bb5\u65f6\u95f4\uff0c\u624d\u8ba4\u4e3a\u8be5\u5bb9\u5668\u91cd\u5efa\u6210\u529f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activeDeadlineSeconds"),": \u5982\u679c CRR \u6267\u884c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\uff0c\u5219\u76f4\u63a5\u6807\u8bb0\u4e3a\u7ed3\u675f\uff08\u672a\u5b8c\u6210\u7684\u5bb9\u5668\u6807\u8bb0\u4e3a\u5931\u8d25\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ttlSecondsAfterFinished"),": CRR \u7ed3\u675f\u540e\uff0c\u8fc7\u4e86\u8fd9\u6bb5\u65f6\u95f4\u81ea\u52a8\u88ab\u5220\u9664\u6389")),(0,r.kt)("p",null,"\u5b9e\u73b0\u539f\u7406\uff1a\u5f53\u7528\u6237\u521b\u5efa\u4e86 CRR \u540e\uff0c\u7ecf\u8fc7\u4e86 kruise-manager \u4e2d\u5fc3\u7aef\u7684\u521d\u6b65\u5904\u7406\uff0c\u4f1a\u88ab Pod \u6240\u5728\u8282\u70b9\u4e0a\u7684 kruise-daemon \u6536\u5230\u5e76\u5f00\u59cb\u6267\u884c\u3002\u6267\u884c\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c Pod \u5bb9\u5668\u5b9a\u4e49\u4e86 preStop\uff0ckruise-daemon \u4f1a\u5148\u8d70 CRI \u8fd0\u884c\u65f6 exec \u5230\u5bb9\u5668\u4e2d\u6267\u884c preStop"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709 preStop \u6216\u6267\u884c\u5b8c\u6210\uff0ckruise-daemon \u8c03\u7528 CRI \u63a5\u53e3\u5c06\u5bb9\u5668\u505c\u6b62"),(0,r.kt)("li",{parentName:"ol"},"kubelet \u611f\u77e5\u5230\u5bb9\u5668\u9000\u51fa\uff0c\u5219\u4f1a\u65b0\u5efa\u4e00\u4e2a \u201c\u5e8f\u53f7\u201d \u9012\u589e\u7684\u65b0\u5bb9\u5668\uff0c\u5e76\u5f00\u59cb\u542f\u52a8\uff08\u4ee5\u53ca\u6267\u884c postStart\uff09"),(0,r.kt)("li",{parentName:"ol"},"kruise-daemon \u611f\u77e5\u5230\u65b0\u5bb9\u5668\u542f\u52a8\u6210\u529f\uff0c\u4e0a\u62a5 CRR \u91cd\u542f\u5b8c\u6210")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ContainerRecreateRequest",src:n(9704).Z,width:"1924",height:"986"})),(0,r.kt)("p",null,"\u4e0a\u8ff0\u7684\u5bb9\u5668 \u201c\u5e8f\u53f7\u201d \u5176\u5b9e\u5c31\u5bf9\u5e94\u4e86 Pod status \u4e2d kubelet \u4e0a\u62a5\u7684 restartCount\u3002\u56e0\u6b64\uff0c\u5728\u5bb9\u5668\u91cd\u542f\u540e\u4f1a\u770b\u5230 Pod \u7684 restartCount \u589e\u52a0\u3002\u53e6\u5916\uff0c\u56e0\u4e3a\u5bb9\u5668\u53d1\u751f\u4e86\u91cd\u5efa\uff0c\u4e4b\u524d\u4e34\u65f6\u5199\u5230\u65e7\u5bb9\u5668 rootfs \u4e2d\u7684\u6587\u4ef6\u4f1a\u4e22\u5931\uff0c\u4f46\u662f volume mount \u6302\u8f7d\u5377\u4e2d\u7684\u6570\u636e\u4ecd\u7136\u5b58\u5728\u3002"),(0,r.kt)("h2",{id:"\u7ea7\u8054\u5220\u9664\u9632\u62a4"},"\u7ea7\u8054\u5220\u9664\u9632\u62a4"),(0,r.kt)("p",null,"Kubernetes \u7684\u9762\u5411\u7ec8\u6001\u81ea\u52a8\u5316\u662f\u4e00\u628a \u201c\u53cc\u5203\u5251\u201d\uff0c\u5b83\u65e2\u4e3a\u5e94\u7528\u5e26\u6765\u4e86\u58f0\u660e\u5f0f\u7684\u90e8\u7f72\u80fd\u529b\uff0c\u540c\u65f6\u4e5f\u6f5c\u5728\u5730\u4f1a\u5c06\u4e00\u4e9b\u8bef\u64cd\u4f5c\u884c\u4e3a\u88ab\u7ec8\u6001\u5316\u653e\u5927\u3002\u4f8b\u5982\u5b83\u7684 \u201c\u7ea7\u8054\u5220\u9664\u201d \u673a\u5236\uff0c\u5373\u6b63\u5e38\u60c5\u51b5\uff08\u975e orphan \u5220\u9664\uff09\u4e0b\u4e00\u65e6\u7236\u7c7b\u8d44\u6e90\u88ab\u5220\u9664\uff0c\u5219\u6240\u6709\u5b50\u7c7b\u8d44\u6e90\u90fd\u4f1a\u88ab\u5173\u8054\u5220\u9664\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u4e00\u4e2a CRD\uff0c\u5176\u6240\u6709\u5bf9\u5e94\u7684 CR \u90fd\u88ab\u6e05\u7406\u6389"),(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u4e00\u4e2a namespace\uff0c\u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u4e0b\u5305\u62ec Pod \u5728\u5185\u6240\u6709\u8d44\u6e90\u90fd\u88ab\u4e00\u8d77\u5220\u9664"),(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u4e00\u4e2a workload\uff08Deployment/StatefulSet/...\uff09\uff0c\u5219\u4e0b\u5c5e\u6240\u6709 Pod \u88ab\u5220\u9664")),(0,r.kt)("p",null,"\u7c7b\u4f3c\u8fd9\u79cd \u201c\u7ea7\u8054\u5220\u9664\u201d \u5e26\u6765\u7684\u6545\u969c\uff0c\u6211\u4eec\u5df2\u7ecf\u542c\u5230\u4e0d\u5c11\u793e\u533a K8s \u7528\u6237\u548c\u5f00\u53d1\u8005\u5e26\u6765\u7684\u62b1\u6028\u3002\u5bf9\u4e8e\u4efb\u4f55\u4e00\u5bb6\u4f01\u4e1a\u6765\u8bf4\uff0c\u5176\u751f\u4ea7\u73af\u5883\u53d1\u751f\u8fd9\u79cd\u89c4\u6a21\u8bef\u5220\u9664\u90fd\u662f\u4e0d\u53ef\u627f\u53d7\u4e4b\u75db\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5728 Kruise v0.9.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5efa\u7acb\u4e86\u9632\u7ea7\u8054\u5220\u9664\u80fd\u529b\uff0c\u671f\u671b\u80fd\u4e3a\u66f4\u591a\u7684\u7528\u6237\u5e26\u6765\u7a33\u5b9a\u6027\u4fdd\u969c\u3002\u5728\u5f53\u524d\u7248\u672c\u4e2d\u5982\u679c\u9700\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5219\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u7684\u65f6\u5019\u9700\u8981\u663e\u5f0f\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourcesDeletionProtection")," \u8fd9\u4e2a feature-gate\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u9632\u62a4\u5220\u9664\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u7528\u6237\u53ef\u4ee5\u7ed9\u5176\u6253\u4e0a policy.kruise.io/delete-protection \u6807\u7b7e\uff0cvalue \u53ef\u4ee5\u6709\u4e24\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Always: \u8868\u793a\u8fd9\u4e2a\u5bf9\u8c61\u7981\u6b62\u88ab\u5220\u9664\uff0c\u9664\u975e\u4e0a\u8ff0 label \u88ab\u53bb\u6389"),(0,r.kt)("li",{parentName:"ul"},"Cascading\uff1a\u8fd9\u4e2a\u5bf9\u8c61\u5982\u679c\u8fd8\u6709\u53ef\u7528\u7684\u4e0b\u5c5e\u8d44\u6e90\uff0c\u5219\u7981\u6b62\u88ab\u5220\u9664")),(0,r.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u8d44\u6e90\u7c7b\u578b\u3001\u4ee5\u53ca cascading \u7ea7\u8054\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Kind"),(0,r.kt)("th",{parentName:"tr",align:null},"Group"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Cascading")," judgement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"core"),(0,r.kt)("td",{parentName:"tr",align:null},"v1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether there is active Pods in this namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CustomResourceDefinition")),(0,r.kt)("td",{parentName:"tr",align:null},"apiextensions.k8s.io"),(0,r.kt)("td",{parentName:"tr",align:null},"v1beta1, v1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether there is existing CRs of this CRD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Deployment")),(0,r.kt)("td",{parentName:"tr",align:null},"apps"),(0,r.kt)("td",{parentName:"tr",align:null},"v1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StatefulSet")),(0,r.kt)("td",{parentName:"tr",align:null},"apps"),(0,r.kt)("td",{parentName:"tr",align:null},"v1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReplicaSet")),(0,r.kt)("td",{parentName:"tr",align:null},"apps"),(0,r.kt)("td",{parentName:"tr",align:null},"v1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CloneSet")),(0,r.kt)("td",{parentName:"tr",align:null},"apps.kruise.io"),(0,r.kt)("td",{parentName:"tr",align:null},"v1alpha1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StatefulSet")),(0,r.kt)("td",{parentName:"tr",align:null},"apps.kruise.io"),(0,r.kt)("td",{parentName:"tr",align:null},"v1alpha1, v1beta1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UnitedDeployment")),(0,r.kt)("td",{parentName:"tr",align:null},"apps.kruise.io"),(0,r.kt)("td",{parentName:"tr",align:null},"v1alpha1"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")))),(0,r.kt)("h2",{id:"cloneset-\u65b0\u589e\u529f\u80fd"},"CloneSet \u65b0\u589e\u529f\u80fd"),(0,r.kt)("h3",{id:"\u5220\u9664\u4f18\u5148\u7ea7"},"\u5220\u9664\u4f18\u5148\u7ea7"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"controller.kubernetes.io/pod-deletion-cost")," \u662f\u4ece Kubernetes 1.21 \u7248\u672c\u540e\u52a0\u5165\u7684 annotation\uff0cReplicaSet \u5728\u7f29\u5bb9\u65f6\u4f1a\u53c2\u8003\u8fd9\u4e2a cost \u6570\u503c\u6765\u6392\u5e8f\u3002 CloneSet \u4ece Kruise v0.9.0 \u7248\u672c\u540e\u4e5f\u540c\u6837\u652f\u6301\u4e86\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,r.kt)("p",null,'\u7528\u6237\u53ef\u4ee5\u628a\u8fd9\u4e2a annotation \u914d\u7f6e\u5230 pod \u4e0a\uff0c\u5b83\u7684 value \u6570\u503c\u662f int \u7c7b\u578b\uff0c\u8868\u793a\u8fd9\u4e2a pod \u76f8\u8f83\u4e8e\u540c\u4e2a CloneSet \u4e0b\u5176\u4ed6 pod \u7684 "\u5220\u9664\u4ee3\u4ef7"\uff0c\u4ee3\u4ef7\u8d8a\u5c0f\u7684 pod \u5220\u9664\u4f18\u5148\u7ea7\u76f8\u5bf9\u8d8a\u9ad8\u3002 \u6ca1\u6709\u8bbe\u7f6e\u8fd9\u4e2a annotation \u7684 pod \u9ed8\u8ba4 deletion cost \u662f 0\u3002'),(0,r.kt)("p",null,"\u6ce8\u610f\u8fd9\u4e2a\u5220\u9664\u987a\u5e8f\u5e76\u4e0d\u662f\u5f3a\u5236\u4fdd\u8bc1\u7684\uff0c\u56e0\u4e3a\u771f\u5b9e\u7684 pod \u7684\u5220\u9664\u7c7b\u4f3c\u4e8e\u4e0b\u8ff0\u987a\u5e8f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u672a\u8c03\u5ea6 < \u5df2\u8c03\u5ea6"),(0,r.kt)("li",{parentName:"ol"},"PodPending < PodUnknown < PodRunning"),(0,r.kt)("li",{parentName:"ol"},"Not ready < ready"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u8f83\u5c0f pod-deletion cost < \u8f83\u5927 pod-deletion cost")),(0,r.kt)("li",{parentName:"ol"},"\u5904\u4e8e Ready \u65f6\u95f4\u8f83\u77ed < \u8f83\u957f"),(0,r.kt)("li",{parentName:"ol"},"\u5bb9\u5668\u91cd\u542f\u6b21\u6570\u8f83\u591a < \u8f83\u5c11"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65f6\u95f4\u8f83\u77ed < \u8f83\u957f")),(0,r.kt)("h3",{id:"\u914d\u5408\u539f\u5730\u5347\u7ea7\u7684\u955c\u50cf\u9884\u70ed"},"\u914d\u5408\u539f\u5730\u5347\u7ea7\u7684\u955c\u50cf\u9884\u70ed"),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528 CloneSet \u505a\u5e94\u7528\u539f\u5730\u5347\u7ea7\u65f6\uff0c\u53ea\u4f1a\u5347\u7ea7\u5bb9\u5668\u955c\u50cf\u3001\u800c Pod \u4e0d\u4f1a\u53d1\u751f\u91cd\u5efa\u3002\u8fd9\u5c31\u4fdd\u8bc1\u4e86 Pod \u5347\u7ea7\u524d\u540e\u6240\u5728 node \u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u4ece\u800c\u5728\u539f\u5730\u5347\u7ea7\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c CloneSet \u63d0\u524d\u5728\u6240\u6709 Pod \u8282\u70b9\u4e0a\u5148\u628a\u65b0\u7248\u672c\u955c\u50cf\u62c9\u53d6\u597d\uff0c\u5219\u5728\u540e\u7eed\u7684\u53d1\u5e03\u6279\u6b21\u4e2d Pod \u539f\u5730\u5347\u7ea7\u901f\u5ea6\u4f1a\u5f97\u5230\u5927\u5e45\u5ea6\u63d0\u9ad8\u3002"),(0,r.kt)("p",null,"\u5728\u5f53\u524d\u7248\u672c\u4e2d\u5982\u679c\u9700\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5219\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u7684\u65f6\u5019\u9700\u8981\u663e\u5f0f\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForInPlaceUpdate")," \u8fd9\u4e2a feature-gate\u3002\u6253\u5f00\u540e\uff0c\u5f53\u7528\u6237\u66f4\u65b0\u4e86 CloneSet template \u4e2d\u7684\u955c\u50cf\u3001\u4e14\u53d1\u5e03\u7b56\u7565\u652f\u6301\u539f\u5730\u5347\u7ea7\uff0c\u5219 CloneSet \u4f1a\u81ea\u52a8\u4e3a\u8fd9\u4e2a\u65b0\u955c\u50cf\u521b\u5efa ImagePullJob \u5bf9\u8c61\uff08OpenKruise \u63d0\u4f9b\u7684\u6279\u91cf\u955c\u50cf\u9884\u70ed\u529f\u80fd\uff09\uff0c\u6765\u63d0\u524d\u5728 Pod \u6240\u5728\u8282\u70b9\u4e0a\u9884\u70ed\u65b0\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b CloneSet \u7ed9 ImagePullJob \u914d\u7f6e\u7684\u5e76\u53d1\u5ea6\u662f 1\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u4e2a\u8282\u70b9\u62c9\u955c\u50cf\u3002 \u5982\u679c\u9700\u8981\u8c03\u6574\uff0c\u4f60\u53ef\u4ee5\u5728 CloneSet annotation \u4e0a\u8bbe\u7f6e\u5176\u955c\u50cf\u9884\u70ed\u65f6\u7684\u5e76\u53d1\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "5"\n')),(0,r.kt)("h3",{id:"\u5148\u6269\u518d\u7f29\u7684-pod-\u7f6e\u6362\u65b9\u5f0f"},"\u5148\u6269\u518d\u7f29\u7684 Pod \u7f6e\u6362\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5728\u8fc7\u53bb\u7248\u672c\u4e2d\uff0cCloneSet \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"maxSurge")," \u7b56\u7565\u53ea\u5bf9\u5e94\u7528\u53d1\u5e03\u8fc7\u7a0b\u751f\u6548\u3002\u800c\u4ece Kruise v0.9.0 \u7248\u672c\u5f00\u59cb\uff0c\u8fd9\u4e24\u4e2a\u7b56\u7565\u540c\u6837\u4f1a\u5bf9 Pod \u6307\u5b9a\u5220\u9664\u751f\u6548\u3002"),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u7528\u6237\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"podsToDelete")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/specified-delete: true")," \u65b9\u5f0f\uff08\u5177\u4f53\u89c1\u5b98\u7f51\u6587\u6863\uff09\u6765\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a Pod \u671f\u671b\u5220\u9664\u65f6\uff0cCloneSet \u53ea\u4f1a\u5728\u5f53\u524d\u4e0d\u53ef\u7528 Pod \u6570\u91cf\uff08\u76f8\u5bf9\u4e8e replicas \u603b\u6570\uff09\u5c0f\u4e8e maxUnavailable \u7684\u65f6\u5019\u624d\u6267\u884c\u5220\u9664\u3002\u540c\u65f6\uff0c\u5982\u679c\u7528\u6237\u914d\u7f6e\u4e86 maxSurge \u7b56\u7565\uff0c\u5219 CloneSet \u6709\u53ef\u80fd\u4f1a\u5148\u521b\u5efa\u4e00\u4e2a\u65b0 Pod\u3001\u7b49\u5f85\u65b0 Pod ready\u3001\u518d\u5220\u9664\u6307\u5b9a\u7684\u65e7 Pod\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u91c7\u7528\u4ec0\u4e48\u6837\u7684\u7f6e\u6362\u65b9\u5f0f\uff0c\u53d6\u51b3\u4e8e\u5f53\u65f6\u7684 maxUnavailable \u548c\u5b9e\u9645\u4e0d\u53ef\u7528 Pod \u6570\u91cf\u3002\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e2a CloneSet ",(0,r.kt)("inlineCode",{parentName:"li"},"maxUnavailable=2, maxSurge=1")," \u4e14\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-a")," \u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\uff0c \u5982\u679c\u4f60\u5bf9\u53e6\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-b")," \u6307\u5b9a\u5220\u9664\uff0c \u90a3\u4e48 CloneSet \u4f1a\u7acb\u5373\u5220\u9664\u5b83\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u65b0 Pod\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e2a CloneSet ",(0,r.kt)("inlineCode",{parentName:"li"},"maxUnavailable=1, maxSurge=1")," \u4e14\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-a")," \u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\uff0c \u5982\u679c\u4f60\u5bf9\u53e6\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-b")," \u6307\u5b9a\u5220\u9664\uff0c \u90a3\u4e48 CloneSet \u4f1a\u5148\u65b0\u5efa\u4e00\u4e2a Pod\u3001\u7b49\u5f85\u5b83 ready\uff0c\u6700\u540e\u518d\u5220\u9664 pod-b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e2a CloneSet ",(0,r.kt)("inlineCode",{parentName:"li"},"maxUnavailable=1, maxSurge=1")," \u4e14\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-a")," \u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\uff0c \u5982\u679c\u4f60\u5bf9\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-a")," \u6307\u5b9a\u5220\u9664\uff0c \u90a3\u4e48 CloneSet \u4f1a\u7acb\u5373\u5220\u9664\u5b83\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u65b0 Pod\u3002"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h3",{id:"\u57fa\u4e8e-partition-\u7ec8\u6001\u7684\u9ad8\u6548\u56de\u6eda"},"\u57fa\u4e8e partition \u7ec8\u6001\u7684\u9ad8\u6548\u56de\u6eda"),(0,r.kt)("p",null,"\u5728\u539f\u751f\u7684 workload \u4e2d\uff0cDeployment \u81ea\u8eab\u53d1\u5e03\u4e0d\u652f\u6301\u7070\u5ea6\u53d1\u5e03\uff0cStatefulSet \u6709 partition \u8bed\u4e49\u6765\u5141\u8bb8\u7528\u6237\u63a7\u5236\u7070\u5ea6\u5347\u7ea7\u7684\u6570\u91cf\uff1b\u800c Kruise workload \u5982 CloneSet\u3001Advanced StatefulSet\uff0c\u4e5f\u90fd\u63d0\u4f9b\u4e86 partition \u6765\u652f\u6301\u7070\u5ea6\u5206\u6279\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e CloneSet\uff0cPartition \u7684\u8bed\u4e49\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u4fdd\u7559\u65e7\u7248\u672c Pod \u7684\u6570\u91cf\u6216\u767e\u5206\u6bd4"),"\u3002\u6bd4\u5982\u8bf4\u4e00\u4e2a 100 \u4e2a\u526f\u672c\u7684 CloneSet\uff0c\u5728\u5347\u7ea7\u955c\u50cf\u65f6\u5c06 partition \u6570\u503c\u9636\u6bb5\u6027\u6539\u4e3a 80 -> 60 -> 40 -> 20 -> 0\uff0c\u5219\u5b8c\u6210\u4e86\u5206 5 \u6279\u6b21\u53d1\u5e03\u3002"),(0,r.kt)("p",null,"\u4f46\u8fc7\u53bb\uff0c\u4e0d\u7ba1\u662f Deployment\u3001StatefulSet \u8fd8\u662f CloneSet\uff0c\u5728\u53d1\u5e03\u7684\u8fc7\u7a0b\u4e2d\u5982\u679c\u60f3\u8981\u56de\u6eda\uff0c\u90fd\u5fc5\u987b\u5c06 template \u4fe1\u606f\uff08\u955c\u50cf\uff09\u91cd\u65b0\u6539\u56de\u8001\u7248\u672c\u3002\u540e\u4e24\u8005\u5728\u7070\u5ea6\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5c06 partition \u8c03\u5c0f\u4f1a\u89e6\u53d1\u65e7\u7248\u672c\u5347\u7ea7\u4e3a\u65b0\u7248\u672c\uff0c\u4f46\u518d\u6b21 partition \u8c03\u5927\u5219\u4e0d\u4f1a\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u4ece v0.9.0 \u7248\u672c\u5f00\u59cb\uff0cCloneSet \u7684 partition \u652f\u6301\u4e86 \u201c\u7ec8\u6001\u56de\u6eda\u201d \u529f\u80fd\u3002\u5982\u679c\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u7684\u65f6\u5019\u6253\u5f00\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"CloneSetPartitionRollback")," \u8fd9\u4e2a feature-gate\uff0c\u5219\u5f53\u7528\u6237\u5c06 partition \u8c03\u5927\u65f6\uff0cCloneSet \u4f1a\u5c06\u5bf9\u5e94\u6570\u91cf\u7684\u65b0\u7248\u672c Pod \u91cd\u65b0\u56de\u6eda\u5230\u8001\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u8fd9\u6837\u5e26\u6765\u7684\u597d\u5904\u662f\u663e\u800c\u6613\u89c1\u7684\uff1a\u5728\u7070\u5ea6\u53d1\u5e03\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ea\u9700\u8981\u524d\u540e\u8c03\u8282 partition \u6570\u503c\uff0c\u5c31\u80fd\u7075\u6d3b\u5f97\u63a7\u5236\u65b0\u65e7\u7248\u672c\u7684\u6bd4\u4f8b\u6570\u91cf\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cCloneSet \u6240\u4f9d\u636e\u7684 \u201c\u65b0\u65e7\u7248\u672c\u201d \u5bf9\u5e94\u7684\u662f\u5176 status \u4e2d\u7684 updateRevision \u548c currentRevision\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"updateRevision\uff1a\u5bf9\u5e94\u5f53\u524d CloneSet \u6240\u5b9a\u4e49\u7684 template \u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"currentRevision\uff1a\u8be5 CloneSet \u524d\u4e00\u6b21\u5168\u91cf\u53d1\u5e03\u6210\u529f\u7684 template \u7248\u672c")),(0,r.kt)("h3",{id:"\u77ed-hash"},"\u77ed hash"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCloneSet \u5728 Pod label \u4e2d\u8bbe\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"controller-revision-hash")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ControllerRevision")," \u7684\u5b8c\u6574\u540d\u5b57\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    controller-revision-hash: demo-cloneset-956df7994\n")),(0,r.kt)("p",null,"\u5b83\u662f\u901a\u8fc7 CloneSet \u540d\u5b57\u548c ControllerRevision hash \u503c\u62fc\u63a5\u800c\u6210\u3002 \u901a\u5e38 hash \u503c\u957f\u5ea6\u4e3a 8~10 \u4e2a\u5b57\u7b26\uff0c\u800c Kubernetes \u4e2d\u7684 label \u503c\u4e0d\u80fd\u8d85\u8fc7 63 \u4e2a\u5b57\u7b26\u3002 \u56e0\u6b64 CloneSet \u7684\u540d\u5b57\u4e00\u822c\u662f\u4e0d\u80fd\u8d85\u8fc7 52 \u4e2a\u5b57\u7b26\u7684\uff0c\u5982\u679c\u8d85\u8fc7\u4e86\uff0c\u5219\u65e0\u6cd5\u6210\u529f\u521b\u5efa\u51fa Pod\u3002"),(0,r.kt)("p",null,"\u5728 v0.9.0 \u7248\u672c\u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"CloneSetShortHash")," \u65b0\u7684 feature-gate\u3002 \u5982\u679c\u5b83\u88ab\u6253\u5f00\uff0cCloneSet \u53ea\u4f1a\u5c06 Pod \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"controller-revision-hash")," \u7684\u503c\u53ea\u8bbe\u7f6e\u4e3a hash \u503c\uff0c\u6bd4\u5982 956df7994\uff0c\u56e0\u6b64 CloneSet \u540d\u5b57\u7684\u957f\u5ea6\u4e0d\u4f1a\u6709\u4efb\u4f55\u9650\u5236\u4e86\u3002\uff08\u5373\u4f7f\u542f\u7528\u8be5\u529f\u80fd\uff0cCloneSet \u4ecd\u7136\u4f1a\u8bc6\u522b\u548c\u7ba1\u7406\u8fc7\u53bb\u5b58\u91cf\u7684 revision label \u4e3a\u5b8c\u6574\u683c\u5f0f\u7684 Pod\u3002\uff09"),(0,r.kt)("h2",{id:"sidecarset-\u65b0\u589e\u529f\u80fd"},"SidecarSet \u65b0\u589e\u529f\u80fd"),(0,r.kt)("h3",{id:"sidecar-\u70ed\u5347\u7ea7"},"Sidecar \u70ed\u5347\u7ea7"),(0,r.kt)("p",null,"SidecarSet \u662f Kruise \u63d0\u4f9b\u7684\u72ec\u7acb\u7ba1\u7406 sidecar \u5bb9\u5668\u7684 workload\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SidecarSet\uff0c\u6765\u5728\u4e00\u5b9a\u8303\u56f4\u7684 Pod \u4e2d\u6ce8\u5165\u548c\u5347\u7ea7\u6307\u5b9a\u7684 sidecar \u5bb9\u5668\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0csidecar \u7684\u72ec\u7acb\u539f\u5730\u5347\u7ea7\u662f\u5148\u505c\u6b62\u65e7\u7248\u672c\u7684\u5bb9\u5668\uff0c\u7136\u540e\u521b\u5efa\u65b0\u7248\u672c\u7684\u5bb9\u5668\u3002\u8fd9\u79cd\u65b9\u5f0f\u66f4\u52a0\u9002\u5408\u4e0d\u5f71\u54cdPod\u670d\u52a1\u53ef\u7528\u6027\u7684sidecar\u5bb9\u5668\uff0c\u6bd4\u5982\u8bf4\u65e5\u5fd7\u6536\u96c6 agent\uff0c\u4f46\u662f\u5bf9\u4e8e\u5f88\u591a\u4ee3\u7406\u6216\u8fd0\u884c\u65f6\u7684 sidecar \u5bb9\u5668\uff0c\u4f8b\u5982 Istio Envoy\uff0c\u8fd9\u79cd\u5347\u7ea7\u65b9\u6cd5\u5c31\u6709\u95ee\u9898\u4e86\u3002Envoy \u4f5c\u4e3a Pod \u4e2d\u7684\u4e00\u4e2a\u4ee3\u7406\u5bb9\u5668\uff0c\u4ee3\u7406\u4e86\u6240\u6709\u7684\u6d41\u91cf\uff0c\u5982\u679c\u76f4\u63a5\u91cd\u542f\u5347\u7ea7\uff0cPod \u670d\u52a1\u7684\u53ef\u7528\u6027\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u5982\u679c\u9700\u8981\u5355\u72ec\u5347\u7ea7 envoy sidecar\uff0c\u5c31\u9700\u8981\u590d\u6742\u7684 grace \u7ec8\u6b62\u548c\u534f\u8c03\u673a\u5236\u3002\u6240\u4ee5\u6211\u4eec\u4e3a\u8fd9\u79cd sidecar \u5bb9\u5668\u7684\u5347\u7ea7\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b0\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5373\u70ed\u5347\u7ea7\uff08hot upgrade\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nspec:\n  # ...\n  containers:\n  - name: nginx-sidecar\n    image: nginx:1.18\n    lifecycle:\n      postStart:\n        exec:\n          command:\n          - /bin/bash\n          - -c\n          - /usr/local/bin/nginx-agent migrate\n    upgradeStrategy:\n      upgradeType: HotUpgrade\n      hotUpgradeEmptyImage: empty:1.0.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upgradeType"),": HotUpgrade\u4ee3\u8868\u8be5sidecar\u5bb9\u5668\u7684\u7c7b\u578b\u662fhot upgrade\uff0c\u5c06\u6267\u884c\u70ed\u5347\u7ea7\u65b9\u6848hotUpgradeEmptyImage: \u5f53\u70ed\u5347\u7ea7sidecar\u5bb9\u5668\u65f6\uff0c\u4e1a\u52a1\u5fc5\u987b\u8981\u63d0\u4f9b\u4e00\u4e2aempty\u5bb9\u5668\u7528\u4e8e\u70ed\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u5bb9\u5668\u5207\u6362\u3002empty\u5bb9\u5668\u540csidecar\u5bb9\u5668\u5177\u6709\u76f8\u540c\u7684\u914d\u7f6e\uff08\u9664\u4e86\u955c\u50cf\u5730\u5740\uff09\uff0c\u4f8b\u5982\uff1acommand, lifecycle, probe\u7b49\uff0c\u4f46\u662f\u5b83\u4e0d\u505a\u4efb\u4f55\u5de5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lifecycle.postStart"),": \u72b6\u6001\u8fc1\u79fb\uff0c\u8be5\u8fc7\u7a0b\u5b8c\u6210\u70ed\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u72b6\u6001\u8fc1\u79fb\uff0c\u8be5\u811a\u672c\u9700\u8981\u7531\u4e1a\u52a1\u6839\u636e\u81ea\u8eab\u7684\u7279\u70b9\u81ea\u884c\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1anginx\u70ed\u5347\u7ea7\u9700\u8981\u5b8c\u6210Listen FD\u5171\u4eab\u4ee5\u53ca\u6d41\u91cf\u6392\u6c34\uff08reload\uff09")),(0,r.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,r.kt)("p",null,"\u66f4\u591a\u7248\u672c\u53d8\u5316\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/releases"},"release page")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"ChangeLog")))}k.isMDXComponent=!0},9704:function(e,t,n){t.Z=n.p+"assets/images/containerrecreaterequest-f690e891609591c68e231c23212204ca.png"}}]);