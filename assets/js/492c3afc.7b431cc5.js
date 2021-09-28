"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6629],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?t.createElement(k,i(i({ref:n},u),{},{components:r})):t.createElement(k,i({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6879:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Architecture"},c=void 0,l={unversionedId:"core-concepts/architecture",id:"version-v0.10.0/core-concepts/architecture",isDocsHomePage:!1,title:"Architecture",description:"The overall architecture of OpenKruise is shown as below:",source:"@site/versioned_docs/version-v0.10.0/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/core-concepts/architecture",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v0.10.0",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"9/24/2021",frontMatter:{title:"Architecture"},sidebar:"version-v0.10.0/docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"CloneSet",permalink:"/docs/user-manuals/cloneset"}},u=[{value:"API",id:"api",children:[]},{value:"Manager",id:"manager",children:[]},{value:"Daemon",id:"daemon",children:[]}],p={toc:u};function d(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The overall architecture of OpenKruise is shown as below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:r(1361).Z})),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"All features provided by OpenKruise are following ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes API"),", including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CRD definition, such as")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kubectl get crd | grep kruise.io\nadvancedcronjobs.apps.kruise.io            2021-09-16T06:02:36Z\nbroadcastjobs.apps.kruise.io               2021-09-16T06:02:36Z\nclonesets.apps.kruise.io                   2021-09-16T06:02:36Z\ncontainerrecreaterequests.apps.kruise.io   2021-09-16T06:02:36Z\ndaemonsets.apps.kruise.io                  2021-09-16T06:02:36Z\nimagepulljobs.apps.kruise.io               2021-09-16T06:02:36Z\nnodeimages.apps.kruise.io                  2021-09-16T06:02:36Z\npodunavailablebudgets.policy.kruise.io     2021-09-16T06:02:36Z\nresourcedistributions.apps.kruise.io       2021-09-16T06:02:36Z\nsidecarsets.apps.kruise.io                 2021-09-16T06:02:36Z\nstatefulsets.apps.kruise.io                2021-09-16T06:02:36Z\nuniteddeployments.apps.kruise.io           2021-09-16T06:02:37Z\nworkloadspreads.apps.kruise.io             2021-09-16T06:02:37Z\n# ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specific identities (e.g. labels, annotations, envs) in resources, such as")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  labels:\n    # To protect pods in this namespace from cascading deletion.\n    policy.kruise.io/delete-protection: Cascading\n")),(0,a.kt)("h2",{id:"manager"},"Manager"),(0,a.kt)("p",null,"Kruise-manager is a control plane component that runs controllers and webhooks, it is deployed by a Deployment in ",(0,a.kt)("inlineCode",{parentName:"p"},"kruise-system")," namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deploy -n kruise-system\nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\nkruise-controller-manager   2/2     2            2           4h6m\n\n$ kubectl get pod -n kruise-system -l control-plane=controller-manager\nNAME                                         READY   STATUS    RESTARTS   AGE\nkruise-controller-manager-68dc6d87cc-k9vg8   1/1     Running   0          4h6m\nkruise-controller-manager-68dc6d87cc-w7x82   1/1     Running   0          4h6m\n")),(0,a.kt)("p",null,"Logically, each controller like cloneset-controller or sidecarset-controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kruise-controller-manager-xxx")," single Pod."),(0,a.kt)("p",null,"Besides controllers, this Pod also contains the admission webhooks for Kruise CRDs and Pod. It creates webhook configurations to configure which resources should be handled, and provides a Service for kube-apiserver calling."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get svc -n kruise-system\nNAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE\nkruise-webhook-service   ClusterIP   172.24.9.234   <none>        443/TCP   4h9m\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kruise-webhook-service")," is much important for kube-apiserver calling."),(0,a.kt)("h2",{id:"daemon"},"Daemon"),(0,a.kt)("p",null,"This is a new daemon component released since Kruise v0.8.0 version."),(0,a.kt)("p",null,"It is deployed by DaemonSet, runs on every node and manages things like image pre-download, container restarting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n kruise-system -l control-plane=daemon\nNAME                  READY   STATUS    RESTARTS   AGE\nkruise-daemon-6hw6d   1/1     Running   0          4h7m\nkruise-daemon-d7xr4   1/1     Running   0          4h7m\nkruise-daemon-dqp8z   1/1     Running   0          4h7m\nkruise-daemon-dv96r   1/1     Running   0          4h7m\nkruise-daemon-q7594   1/1     Running   0          4h7m\nkruise-daemon-vnsbw   1/1     Running   0          4h7m\n")))}d.isMDXComponent=!0},1361:function(e,n,r){n.Z="https://cdn.jsdelivr.net/gh/openkruise/openkruise.io@gh-pages"+r.p+"assets/images/architecture-f8bf37df4aa3c2ea2f2485904eb85e5f.png"}}]);