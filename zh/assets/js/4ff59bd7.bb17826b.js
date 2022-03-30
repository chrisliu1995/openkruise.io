"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6522],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),b=r,m=c["".concat(u,".").concat(b)]||c[b]||d[b]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},705:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=["components"],i={title:"PodUnavailableBudget"},u=void 0,s={unversionedId:"user-manuals/podunavailablebudget",id:"user-manuals/podunavailablebudget",title:"PodUnavailableBudget",description:"FEATURE STATE: Kruise v0.10.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/podunavailablebudget.md",sourceDirName:"user-manuals",slug:"/user-manuals/podunavailablebudget",permalink:"/zh/docs/next/user-manuals/podunavailablebudget",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/podunavailablebudget.md",tags:[],version:"current",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"PodUnavailableBudget"},sidebar:"docs",previous:{title:"Deletion Protection",permalink:"/zh/docs/next/user-manuals/deletionprotection"},next:{title:"HPA configuration",permalink:"/zh/docs/next/best-practices/hpa-configuration"}},p={},d=[{value:"Implementation",id:"implementation",level:2},{value:"Comparison with Kubernetes native PDB",id:"comparison-with-kubernetes-native-pdb",level:2},{value:"feature-gates",id:"feature-gates",level:2},{value:"PodUnavailableBudget Status",id:"podunavailablebudget-status",level:2}],c={toc:d};function b(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,l.kt)("p",null,"\u5728\u8bf8\u591a",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"},"Voluntary Disruption")," \u573a\u666f\u4e2d Kubernetes ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"Pod Disruption Budget"),"\n\u901a\u8fc7\u9650\u5236\u540c\u65f6\u4e2d\u65ad\u7684Pod\u6570\u91cf\uff0c\u6765\u4fdd\u8bc1\u5e94\u7528\u7684\u9ad8\u53ef\u7528\u6027\u3002\u7136\u800c\uff0cPDB\u53ea\u80fd\u9632\u63a7\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/#eviction-api"},"Eviction API")," \u6765\u89e6\u53d1\u7684Pod Disruption\uff0c\u4f8b\u5982\uff1akubectl drain\u9a71\u9010node\u4e0a\u9762\u7684\u6240\u6709Pod\u3002"),(0,l.kt)("p",null,"\u4f46\u5728\u5982\u4e0bvoluntary disruption\u573a\u666f\u4e2d\uff0c\u5373\u4fbf\u6709kubernetes PDB\u9632\u62a4\u4f9d\u7136\u5c06\u4f1a\u5bfc\u81f4\u4e1a\u52a1\u4e2d\u65ad\u3001\u670d\u52a1\u964d\u7ea7\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5e94\u7528owner\u901a\u8fc7deployment\u6b63\u5728\u8fdb\u884c\u7248\u672c\u5347\u7ea7\uff0c\u4e0e\u6b64\u540c\u65f6\u96c6\u7fa4\u7ba1\u7406\u5458\u7531\u4e8e\u673a\u5668\u8d44\u6e90\u5229\u7528\u7387\u8fc7\u4f4e\u6b63\u5728\u8fdb\u884cnode\u7f29\u5bb9\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e2d\u95f4\u4ef6\u56e2\u961f\u5229\u7528sidecarSet\u6b63\u5728\u539f\u5730\u5347\u7ea7\u96c6\u7fa4\u4e2d\u7684sidecar\u7248\u672c\uff08\u4f8b\u5982\uff1aServiceMesh envoy\uff09\uff0c\u540c\u65f6HPA\u6b63\u5728\u5bf9\u540c\u4e00\u6279\u5e94\u7528\u8fdb\u884c\u7f29\u5bb9\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5e94\u7528owner\u548c\u4e2d\u95f4\u4ef6\u56e2\u961f\u5229\u7528cloneSet\u3001sidecarSet\u539f\u5730\u5347\u7ea7\u7684\u80fd\u529b\uff0c\u6b63\u5728\u5bf9\u540c\u4e00\u6279Pod\u8fdb\u884c\u5347\u7ea7\u3002")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u8fd9\u4e9b kubernetes PDB \u65e0\u6cd5\u5f88\u597d\u9632\u62a4\u7684\u573a\u666f\u4e2d\uff0cKruise PodUnavailableBudget \u901a\u8fc7\u5bf9Pod Mutating Webhook\u7684\u62e6\u622a\uff0c\u80fd\u591f\u8986\u76d6\u66f4\u591a\u7684Voluntary Disruption\u573a\u666f\uff0c\u8fdb\u800c\u63d0\u4f9b\u5e94\u7528\u66f4\u52a0\u5f3a\u5927\u7684\u9632\u62a4\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PodUnavailableBudget\nmetadata:\n  name: web-server-pub\n  namespace: web\nspec:\n  targetRef:\n    apiVersion: apps.kruise.io/v1alpha1\n    # cloneset, deployment, statefulset etc.\n    kind: CloneSet\n    name: web-server\n  # selector label query over pods managed by the budget\n  # selector and TargetReference are mutually exclusive, targetRef is priority to take effect.\n  # selector is commonly used in scenarios where applications are deployed using multiple workloads,\n  # and targetRef is used for protection against a single workload.\n# selector:\n#   matchLabels:\n#     app: web-server\n  # maximum number of Pods unavailable for the current cloneset, the example is cloneset.replicas(5) * 60% = 3\n  # maxUnavailable and minAvailable are mutually exclusive, maxUnavailable is priority to take effect\n  maxUnavailable: 60%\n  # Minimum number of Pods available for the current cloneset, the example is cloneset.replicas(5) * 40% = 2\n# minAvailable: 40%\n-----------------------\n\napiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  labels:\n    app: web-server\n  name: web-server\n  namespace: web\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: web-server\n  template:\n    metadata:\n      labels:\n        app: web-server\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:alpine\n")),(0,l.kt)("h2",{id:"implementation"},"Implementation"),(0,l.kt)("p",null,"PUB\u5b9e\u73b0\u539f\u7406\u5982\u4e0b\uff0c\u8be6\u7ec6\u8bbe\u8ba1\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/docs/proposals/20210614-podunavailablebudget.md"},"Pub Proposal")," "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"PodUnavailableBudget",src:n(2072).Z,width:"833",height:"680"})),(0,l.kt)("h2",{id:"comparison-with-kubernetes-native-pdb"},"Comparison with Kubernetes native PDB"),(0,l.kt)("p",null,"Kubernetes PDB\u662f\u901a\u8fc7Eviction API\u63a5\u53e3\u6765\u5b9e\u73b0Pod\u5b89\u5168\u9632\u62a4\uff0c\u800cKruise PDB\u5219\u662f\u62e6\u622a\u4e86Pod Validating Request\u6765\u5b9e\u73b0\u8bf8\u591aVoluntary Disruption\u573a\u666f\u7684\u9632\u62a4\u80fd\u529b\u3002\n",(0,l.kt)("strong",{parentName:"p"},"Kruise PUB\u5305\u542b\u4e86PDB\u7684\u6240\u6709\u80fd\u529b\uff08\u9632\u62a4Pod Eviction\uff09\uff0c\u4e1a\u52a1\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4e24\u8005\u540c\u65f6\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528Kruise PUB\uff08\u63a8\u8350\u65b9\u5f0f\uff09\u3002")),(0,l.kt)("h2",{id:"feature-gates"},"feature-gates"),(0,l.kt)("p",null,"PodUnavailableBudget Pod\u5b89\u5168\u9632\u62a4\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u5982\u679c\u8981\u5f00\u542f\u8bf7\u901a\u8fc7\u8bbe\u7f6e feature-gates ",(0,l.kt)("em",{parentName:"p"},"PodUnavailableBudgetDeleteGate")," \u548c ",(0,l.kt)("em",{parentName:"p"},"PodUnavailableBudgetUpdateGate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install kruise https://... --set featureGates="PodUnavailableBudgetDeleteGate=true\\,PodUnavailableBudgetUpdateGate=true"\n')),(0,l.kt)("h2",{id:"podunavailablebudget-status"},"PodUnavailableBudget Status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# kubectl describe podunavailablebudgets web-server-pub\nName:         web-server-pub\nKind:         PodUnavailableBudget\nStatus:\n  unavailableAllowed:   3   # unavailableAllowed number of pod unavailable that are currently allowed\n  currentAvailable:     5   # currentAvailable current number of available pods\n  desiredAvailable:     2   # desiredAvailable minimum desired number of available pods\n  totalReplicas:        5   # totalReplicas total number of pods counted by this PUB\n")))}b.isMDXComponent=!0},2072:function(e,t,n){t.Z=n.p+"assets/images/podunavailablebudget-7ed5c9fff913cf97221663cdd8d7dc62.png"}}]);