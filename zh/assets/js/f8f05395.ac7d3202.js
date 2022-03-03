"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2330],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4412:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),l=["components"],i={title:"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff081\uff09\uff1a\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed"},p=void 0,s={unversionedId:"best-practices/ci-pipeline-image-predownload",id:"version-v1.0/best-practices/ci-pipeline-image-predownload",title:"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff081\uff09\uff1a\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed",description:"\u4ec0\u4e48\u662fDevops\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/best-practices/ci-pipeline-image-predownload.md",sourceDirName:"best-practices",slug:"/best-practices/ci-pipeline-image-predownload",permalink:"/zh/docs/best-practices/ci-pipeline-image-predownload",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/ci-pipeline-image-predownload.md",tags:[],version:"v1.0",lastUpdatedBy:"berg",lastUpdatedAt:1646277219,formattedLastUpdatedAt:"2022/3/3",frontMatter:{title:"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff081\uff09\uff1a\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed"},sidebar:"docs",previous:{title:"\u57fa\u4e8e HPA \u548c WorkloadSpread \u7684\u6781\u81f4\u5f39\u6027\u8c03\u5ea6\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/best-practices/elastic-deployment"},next:{title:"Golang client",permalink:"/zh/docs/developer-manuals/go-client"}},c=[{value:"\u4ec0\u4e48\u662fDevops\uff1f",id:"\u4ec0\u4e48\u662fdevops",children:[],level:2},{value:"\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed",id:"\u6301\u7eed\u96c6\u6210ci-openkruise\u955c\u50cf\u9884\u70ed",children:[{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",children:[],level:3},{value:"\u6574\u4f53\u67b6\u6784",id:"\u6574\u4f53\u67b6\u6784",children:[],level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[],level:3}],level:2},{value:"Tekton\uff08CI\uff09+ \u955c\u50cf\u9884\u70ed\u5b9e\u8df5",id:"tektonci-\u955c\u50cf\u9884\u70ed\u5b9e\u8df5",children:[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[],level:3},{value:"\u6784\u5efa-\u6d4b\u8bd5-\u955c\u50cf\u63a8\u9001",id:"\u6784\u5efa-\u6d4b\u8bd5-\u955c\u50cf\u63a8\u9001",children:[],level:3},{value:"\u955c\u50cf\u9884\u70ed",id:"\u955c\u50cf\u9884\u70ed",children:[{value:"Kruise CloneSet &amp; Advanced StatefulSet\u539f\u5730\u5347\u7ea7\u5185\u7f6e\u955c\u50cf\u9884\u70ed\u80fd\u529b",id:"kruise-cloneset--advanced-statefulset\u539f\u5730\u5347\u7ea7\u5185\u7f6e\u955c\u50cf\u9884\u70ed\u80fd\u529b",children:[],level:4},{value:"Kubernetes\u539f\u751fWorkload\uff0c\u4f8b\u5982\uff1aDeployment, StatefulSet, DaemonSet, Job\u7b49",id:"kubernetes\u539f\u751fworkload\u4f8b\u5982deployment-statefulset-daemonset-job\u7b49",children:[],level:4}],level:3},{value:"\u4e00\u952e\u6267\u884cTekton Pipeline",id:"\u4e00\u952e\u6267\u884ctekton-pipeline",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],u={toc:c};function m(e){var n=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662fdevops"},"\u4ec0\u4e48\u662fDevops\uff1f"),(0,o.kt)("p",null,"DevOps \u5c31\u662f\u5f00\u53d1\uff08Development\uff09\u3001\u6d4b\u8bd5\uff08QA\uff09\u3001\u8fd0\u7ef4\uff08Operations\uff09\u8fd9\u4e09\u4e2a\u9886\u57df\u7684\u5408\u5e76\u3002DevOps\u662f\u4e00\u79cd\u601d\u60f3\u3001\u4e00\u7ec4\u6700\u4f73\u5b9e\u8df5\u3001\u4ee5\u53ca\u4e00\u79cd\u6587\u5316\u3002\nDevOps\u662fCI/CD\u601d\u60f3\u7684\u5ef6\u4f38\uff0cCI/CD\u662fDevOps\u7684\u57fa\u7840\u6838\u5fc3\uff0c\u5982\u679c\u6ca1\u6709CI/CD\u81ea\u52a8\u5316\u7684\u5de5\u5177\u548c\u6d41\u7a0b\uff0cDevOps\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ci/cd pipeline",src:t(9040).Z})),(0,o.kt)("h2",{id:"\u6301\u7eed\u96c6\u6210ci-openkruise\u955c\u50cf\u9884\u70ed"},"\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed"),(0,o.kt)("h3",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6301\u7eed\u96c6\u6210\uff08CI\uff09"),"\u662f\u4e00\u4e2a\u5c06\u96c6\u6210\u63d0\u524d\u81f3\u5f00\u53d1\u5468\u671f\u7684\u65e9\u671f\u9636\u6bb5\u7684\u5b9e\u8df5\u65b9\u5f0f\uff0c\u8ba9\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u96c6\u6210\u4ee3\u7801\u66f4\u7ecf\u5e38\u53cd\u590d\u5730\u53d1\u751f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://openkruise.io/zh/docs/user-manuals/imagepulljob/"},"\u955c\u50cf\u9884\u70ed")),"\u662fOpenKruise\u63d0\u4f9b\u7684\u5728\u5e94\u7528\u90e8\u7f72\u4e4b\u524d\u63d0\u524d\u5c06\u5e94\u7528\u955c\u50cf\u62c9\u53d6\u5230\u5177\u4f53\u7684Node\u8282\u70b9\u4e0a\u9762\uff0c\u8fdb\u800c\u8fbe\u5230\u955c\u50cf\u9884\u70ed\u7684\u76ee\u7684\uff0c\u80fd\u591f\u6781\u5927\u7684\u63d0\u5347\u5e94\u7528\u7684\u90e8\u7f72\u6548\u7387\u3002")),(0,o.kt)("h3",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ci+image pre-download",src:t(944).Z})),(0,o.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u957f\u671f\u9884\u70ed\u516c\u5171sidecar\u955c\u50cf\u3001\u57fa\u7840\u955c\u50cf\uff0c\u4f8b\u5982\uff1aistio envoy\u3001\u65e5\u5fd7\u91c7\u96c6\u5bb9\u5668")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5927\u89c4\u6a21\u573a\u666f\u4e0b\uff0c\u63d0\u524d\u9884\u70ed\u4e1a\u52a1app\u955c\u50cf\u5230\u7279\u5b9a\u7684K8s Node\uff0c\u8fdb\u800c\u964d\u4f4e\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u5bf9\u955c\u50cf\u4ed3\u5e93\u7684\u538b\u529b\uff0c\u4e3b\u8981\u9488\u5bf9Deployment\u3001StatefulSet\u7b49k8s\u539f\u751f\u8d44\u6e90")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OpenKruise CloneSet\u539f\u5730\u5347\u7ea7\u65f6\uff0c\u5185\u7f6e\u4e86\u955c\u50cf\u9884\u70ed\u80fd\u529b\uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"strong",href:"https://openkruise.io/docs/user-manuals/cloneset#pre-download-image-for-in-place-update"},"CloneSet\u6587\u6863"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1aOpenKruise\u955c\u50cf\u9884\u70ed\u80fd\u529b\u53ea\u80fd\u9488\u5bf9\u5e38\u89c4\u7684Kubelet\u8282\u70b9\uff0c\u800cvirtual kubelet\u5219\u4e0d\u80fd\u9002\u7528\u3002")),(0,o.kt)("h2",{id:"tektonci-\u955c\u50cf\u9884\u70ed\u5b9e\u8df5"},"Tekton\uff08CI\uff09+ \u955c\u50cf\u9884\u70ed\u5b9e\u8df5"),(0,o.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes\u96c6\u7fa4\uff0c\u4ecev1.0.0(alpha/beta)\u5f00\u59cb\uff0cOpenKruise\u8981\u6c42\u5728Kubernetes >= 1.16\u4ee5\u4e0a\u7248\u672c\u7684\u96c6\u7fa4\u4e2d\u5b89\u88c5\u548c\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5Tekton, \u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://tekton.dev/docs/getting-started/"},"\u5b98\u65b9\u6587\u6863"),"\u3002Tekton\u662f\u4e00\u79cd\u9002\u7528\u4e8e\u521b\u5efa\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u90e8\u7f72/\u4ea4\u4ed8(CI/CD)\u7cfb\u7edf\u7684\u8c37\u6b4c\u5f00\u6e90\u7684Kubernetes\u539f\u751f\u6846\u67b6\u3002"),(0,o.kt)("li",{parentName:"ul"},"Helm\u5b89\u88c5OpenKruise\uff0c\u9700\u8981v0.9.0\u53ca\u66f4\u65b0\u7684\u7248\u672c\uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://openkruise.io/zh/docs/installation"},"\u5b89\u88c5\u6587\u6863"),"\u3002")),(0,o.kt)("h3",{id:"\u6784\u5efa-\u6d4b\u8bd5-\u955c\u50cf\u63a8\u9001"},"\u6784\u5efa-\u6d4b\u8bd5-\u955c\u50cf\u63a8\u9001"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Git Repo\uff1a\u672c\u6587\u63d0\u4f9b\u4e86\u4e00\u4e2ahelloworld http\u670d\u52a1",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/zmberg/samples/tree/hello_world/helloworld"},"demo"),"\uff0c\u5176\u4e2d\u5305\u542bCode\u3001Dockerfile\u4ee5\u53caUnit Test\uff0c\u5982\u4e0b\uff1a"),"\n",(0,o.kt)("img",{alt:"git helloworld",src:t(5209).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Tekton\u6784\u5efa-\u6d4b\u8bd5-\u63a8\u9001\u955c\u50cfTask\uff0c\u5e76\u4e14\u9700\u8981\u751f\u6210docker registry secret\uff08\u7528\u4e8epush image\uff09\uff0c\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# docker registry\u5bc6\u94a5\uff0c\u7528\u4e8edocker push image\napiVersion: v1\ndata:\n  .dockerconfigjson: xxxxxx\nkind: Secret\nmetadata:\n  name: dockersecret\ntype: kubernetes.io/dockerconfigjson\n---\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  labels:\n    app: helloworld\n  name: helloworld-build-push\nspec:\n  stepTemplate:\n    workingDir: /workspace\n  params:\n  - name: gitrepositoryurl\n    type: string\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  steps:\n  # git clone\n  - name: git-clone-and-checkout\n    image: bitnami/git:latest\n    command: ["sh", "-ce"]\n    args:\n    - >\n      set -e\n\n      echo $(params.gitrepositoryurl)\n\n      git clone $(params.gitrepositoryurl) ./ && git checkout $(params.branch)\n  # unit test\n  - name: auto-test\n    image: golang:1.16\n    command: [ "sh", "-ce" ]\n    args:\n    - >\n      set -e\n\n      cp -R /workspace/$(params.app_name) /go/src/ && cd /go/src/$(params.app_name) && pwd;\n\n      go test\n  # docker build & push registry\n  - name: push-to-registry\n    image: gcr.io/kaniko-project/executor:latest\n    args:\n    - --dockerfile=Dockerfile\n    - --destination=$(params.docker_repo):$(params.branch)-$(params.short_sha)\n    - --context=./$(params.app_name)\n    - --cache=true\n    - --cache-dir=/cache\n    - --use-new-run\n    volumeMounts:\n    - name: kaniko-secret\n      mountPath: "/kaniko/.docker"\n  volumes:\n  # docker push secret\n  - name: kaniko-secret\n    secret:\n      secretName: dockersecret\n      items:\n      - key: .dockerconfigjson\n        path: config.json\n')),(0,o.kt)("h3",{id:"\u955c\u50cf\u9884\u70ed"},"\u955c\u50cf\u9884\u70ed"),(0,o.kt)("h4",{id:"kruise-cloneset--advanced-statefulset\u539f\u5730\u5347\u7ea7\u5185\u7f6e\u955c\u50cf\u9884\u70ed\u80fd\u529b"},"Kruise CloneSet & Advanced StatefulSet\u539f\u5730\u5347\u7ea7\u5185\u7f6e\u955c\u50cf\u9884\u70ed\u80fd\u529b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note\uff1a\u6b64\u79cd\u573a\u666f\u4e0d\u518d\u9700\u8981\u4e0b\u53d1ImagePullJob CRD\u8d44\u6e90")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5728",(0,o.kt)("a",{parentName:"p",href:"../installation##optional-feature-gate"},"\u5b89\u88c5\u6216\u5347\u7ea7 Kruise")," \u7684\u65f6\u5019\u542f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForInPlaceUpdate")," feature-gate\uff0c\nCloneSet & Advanced StatefulSet \u63a7\u5236\u5668\u4f1a\u81ea\u52a8\u5728\u6240\u6709\u65e7\u7248\u672c pod \u6240\u5728 node \u8282\u70b9\u4e0a\u9884\u70ed\u4f60\u6b63\u5728\u7070\u5ea6\u53d1\u5e03\u7684\u65b0\u7248\u672c\u955c\u50cf\u3002 \u8fd9\u5bf9\u4e8e\u5e94\u7528\u53d1\u5e03\u52a0\u901f\u5f88\u6709\u5e2e\u52a9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Firstly add openkruise charts repository if you haven\'t do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --set featureGates="PreDownloadImageForInPlaceUpdate=true"\n\n# Those that have been installed need to be upgraded\n$ helm upgrade kruise openkruise/kruise --set featureGates="PreDownloadImageForInPlaceUpdate=true"\n')),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b CloneSet & Advanced StatefulSet \u6bcf\u4e2a\u65b0\u955c\u50cf\u9884\u70ed\u65f6\u7684\u5e76\u53d1\u5ea6\u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u4e2a\u8282\u70b9\u62c9\u955c\u50cf\u3002\u5982\u679c\u9700\u8981\u8c03\u6574\uff0c\u4f60\u53ef\u4ee5\u5728 annotation \u4e0a\u8bbe\u7f6e\u5e76\u53d1\u5ea6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet/StatefulSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "5"\n')),(0,o.kt)("h4",{id:"kubernetes\u539f\u751fworkload\u4f8b\u5982deployment-statefulset-daemonset-job\u7b49"},"Kubernetes\u539f\u751fWorkload\uff0c\u4f8b\u5982\uff1aDeployment, StatefulSet, DaemonSet, Job\u7b49"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u914d\u7f6e\u955c\u50cf\u9884\u70ed ImagePullJob CRD\u8d44\u6e90\uff0c\u5e76\u914d\u7f6e\u5230k8s configmap\u8d44\u6e90\u4e2d\uff0c\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: imagePullJob\ndata:\n  imagepulljob.yaml: |\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: ImagePullJob\n    metadata:\n      name: APP_NAME\n    spec:\n      # \u9700\u8981\u9884\u70ed\u7684\u955c\u50cf\u5730\u5740\n      image: APP_IMAGE\n      parallelism: 10\n      # \u4f60\u53ef\u4ee5\u5728 selector \u5b57\u6bb5\u4e2d\u6307\u5b9a\u8282\u70b9\u7684 \u540d\u5b57\u5217\u8868 \u6216 \u6807\u7b7e\u9009\u62e9\u5668 (\u53ea\u80fd\u8bbe\u7f6e\u5176\u4e2d\u4e00\u79cd)\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e selector \u5219\u4f1a\u9009\u62e9\u6240\u6709\u8282\u70b9\u505a\u9884\u70ed\u3002\n      selector:\n        names:\n        - node-1\n        - node-2\n        matchLabels:\n          node-type: xxx\n      completionPolicy:\n        type: Always\n        activeDeadlineSeconds: 1200\n        ttlSecondsAfterFinished: 300\n      pullPolicy:\n        backoffLimit: 3\n        timeoutSeconds: 300\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u4e0b\u53d1\u955c\u50cf\u9884\u70ed ImagePullJob CRD\u8d44\u6e90TASK\uff0c\u5176\u4e2dkubeconfig\u914d\u7f6e\u5b58\u50a8\u5728secret\u4e2d\uff0c\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# kubeconfig\u914d\u7f6e\napiVersion: v1\ndata:\n  kubeconfig: xxxxxx\nkind: Secret\nmetadata:\n  name: kubeconfig\n---\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  labels:\n    app: helloworld\n  name: helloworld-image-predownload\nspec:\n  params:\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  steps:\n  - name: image-predownload\n    image: bitnami/kubectl:latest\n    command: [ "sh", "-ce" ]\n    args:\n    - >\n      set -e\n\n      echo "pre download image"\n\n      cat /var/crd/imagepulljob.yaml | sed \'s#JOB_NAME#$(params.app_name)-$(params.short_sha)#\' | sed \'s#APP_IMAGE#$(params.docker_repo):$(params.branch)-$(params.short_sha)#\' | kubectl apply --kubeconfig=/var/kube/kubeconfig -f -\n    volumeMounts:\n    - name: kubeconfig\n      mountPath: "/var/kube"\n    - name: imagepulljob\n      mountPath: "/var/crd"\n  volumes:\n  - name: kubeconfig\n    secret:\n      secretName: kubeconfig\n  - name: imagepulljob\n    configmap:\n      name: imagepulljob\n')),(0,o.kt)("h3",{id:"\u4e00\u952e\u6267\u884ctekton-pipeline"},"\u4e00\u952e\u6267\u884cTekton Pipeline"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u5b9a\u4e49tekton pileline\uff0c\u603b\u5171\u7531\u4e0a\u9762\u4e24\u4e2atask\u4efb\u52a1\u7ec4\u6210\uff0c\u5e76\u4e14\u6267\u884c\u5b8c \u6784\u5efa-\u6d4b\u8bd5-\u63a8\u9001\u955c\u50cfTask\u4e4b\u540e\uff0c\u518d\u6267\u884c\u955c\u50cf\u9884\u70edTask\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: helloworld-pipeline\nspec:\n  params:\n  - name: gitrepositoryurl\n    type: string\n  - name: branch\n    type: string\n  - name: short_sha\n    type: string\n  - name: docker_repo\n    type: string\n  - name: app_name\n    type: string\n  tasks:\n  - name: helloworld-build-push\n    taskRef:\n      name: helloworld-build-push\n    params:\n    - name: gitrepositoryurl\n      value: $(params.gitrepositoryurl)\n    - name: short_sha\n      value: $(params.short_sha)\n    - name: branch\n      value: $(params.branch)\n    - name: docker_repo\n      value: $(params.docker_repo)\n    - name: app_name\n      value: $(params.app_name)\n  - name: helloworld-image-predownload\n  taskRef:\n    name: helloworld-image-predownload\n    params:\n    - name: short_sha\n      value: $(params.short_sha)\n    - name: branch\n      value: $(params.branch)\n    - name: docker_repo\n      value: $(params.docker_repo)\n    - name: app_name\n      value: $(params.app_name)\n    runAfter:\n    - helloworld-build-push\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u5b9a\u4e49PipelineRun CRD\u8d44\u6e90\uff0c\u5e76kubectl apply -f \u5230k8s\u96c6\u7fa4\u6267\u884cPipeline\uff0c\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: helloworld-pipeline-run-1\nspec:\n  pipelineRef:\n    name: helloworld-pipeline\n    params:\n    - name: gitrepositoryurl\n      value: https://github.com/zmberg/samples.git\n    - name: branch\n      value: hello_world\n    - name: short_sha\n      value: d92ae174b\n    - name: docker_repo\n      value: zhaomingshan/kruise\n    - name: app_name\n      value: helloworld\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. \u53ef\u4ee5\u901a\u8fc7tekton\u547d\u4ee4\u884c\u5de5\u5177tkn\u67e5\u770b\u6267\u884c\u7ed3\u679c\uff0c\u5982\u4e0b\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tekton pipeline",src:t(4414).Z})),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"Tekton\u662fgoogle\u5f00\u6e90\u7684\u76ee\u524d\u793e\u533a\u975e\u5e38\u6d41\u884c\u7684\u4e91\u539f\u751fCI Pipeline\u5de5\u5177\uff0c\u672c\u7bc7\u6587\u7ae0\u65e8\u5728\u5c06OpenKruise\u63d0\u4f9b\u7684\u955c\u50cf\u9884\u70ed\u80fd\u529b\u4e0eCI Pipeline\u7ed3\u5408\uff0c\u8fdb\u800c\u80fd\u591f\u6781\u5927\u7684\u63d0\u5347\u7528\u6237\u5728\u5e94\u7528\u90e8\u7f72\u9636\u6bb5\u7684\u90e8\u7f72\u6548\u7387\uff0c\u5e76\u4e14\u80fd\u591f\u964d\u4f4e\u5728\u5927\u89c4\u6a21\u90e8\u7f72\u4e0b\u5bf9\u4e8e\u955c\u50cf\u4ed3\u5e93\u7684\u538b\u529b\u3002\n\u540e\u9762\u4e00\u7bc7\u6587\u7ae0\u5c06\u4f1a\u805a\u7126\u5728CD Pipeline\u5e94\u7528\u90e8\u7f72\u9636\u6bb5\uff0c\u656c\u8bf7\u671f\u5f85\u3002"))}m.isMDXComponent=!0},9040:function(e,n,t){n.Z=t.p+"assets/images/ci_cd_pipeline-5a5af4826d9617c6d0f4890f07507d77.png"},5209:function(e,n,t){n.Z=t.p+"assets/images/helloworld-570f327bedc9fe2c77218f9728025ffb.png"},944:function(e,n,t){n.Z=t.p+"assets/images/imagepulljob-ac04817d1f28ee088deaa785eaeed33d.png"},4414:function(e,n,t){n.Z=t.p+"assets/images/tekton_pipeline-0a1ffac26f87a5a1a38520724b9f861d.png"}}]);