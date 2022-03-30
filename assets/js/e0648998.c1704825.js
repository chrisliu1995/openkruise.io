"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6245],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5468:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),l=["components"],i={title:"InPlace Update"},p=void 0,s={unversionedId:"core-concepts/inplace-update",id:"version-v1.0/core-concepts/inplace-update",title:"InPlace Update",description:"In-place Update is one of the key features provided by OpenKruise.",source:"@site/versioned_docs/version-v1.0/core-concepts/inplace-update.md",sourceDirName:"core-concepts",slug:"/core-concepts/inplace-update",permalink:"/docs/v1.0/core-concepts/inplace-update",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/core-concepts/inplace-update.md",tags:[],version:"v1.0",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1639452598,formattedLastUpdatedAt:"12/14/2021",frontMatter:{title:"InPlace Update"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/v1.0/core-concepts/architecture"},next:{title:"CloneSet",permalink:"/docs/v1.0/user-manuals/cloneset"}},d={},c=[{value:"What is in-place update?",id:"what-is-in-place-update",level:2},{value:"Understand <em>InPlaceIfPossible</em>",id:"understand-inplaceifpossible",level:2},{value:"Workflow overview",id:"workflow-overview",level:2},{value:"Requirements",id:"requirements",level:2}],u={toc:c};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In-place Update is one of the key features provided by OpenKruise."),(0,r.kt)("p",null,"Workloads that support in-place update:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-manuals/cloneset"},"CloneSet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-manuals/advancedstatefulset"},"Advanced StatefulSet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-manuals/advanceddaemonset"},"Advanced DaemonSet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-manuals/advanceddaemonset"},"SidecarSet"))),(0,r.kt)("p",null,"Currently ",(0,r.kt)("inlineCode",{parentName:"p"},"CloneSet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced StatefulSet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced DaemonSet")," re-use the same code package ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/tree/master/pkg/util/inplaceupdate"},(0,r.kt)("inlineCode",{parentName:"a"},"./pkg/util/inplaceupdate"))," and have similar behaviours of in-place update. In this article, we would like to introduce the usage and workflow of them."),(0,r.kt)("p",null,"Note that the in-place update workflow of ",(0,r.kt)("inlineCode",{parentName:"p"},"SidecarSet")," is a little different from the other workloads, such as it will not set Pod to not-ready before update. So the things we talk below do not totally go for ",(0,r.kt)("inlineCode",{parentName:"p"},"SidecarSet"),"."),(0,r.kt)("h2",{id:"what-is-in-place-update"},"What is in-place update?"),(0,r.kt)("p",null,"Once we are going to update image in a existing Pod, look at the comparation between ",(0,r.kt)("em",{parentName:"p"},"Recreate")," and ",(0,r.kt)("em",{parentName:"p"},"InPlace")," Update:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:a(3662).Z,width:"2080",height:"1754"})),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"ReCreate")," way we have to delete the old Pod and create a new Pod:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pod name and uid all changed, because they are totally different Pod objects (such as Deployment update)"),(0,r.kt)("li",{parentName:"ul"},"Or Pod name may not change but uid changed, because they are still different Pod objects, althrough re-use the same name (such as StatefulSet update)"),(0,r.kt)("li",{parentName:"ul"},"Node name of the Pod changed, because the new Pod is almost impossible to be scheduled to the previous node."),(0,r.kt)("li",{parentName:"ul"},"Pod IP changed, because the new Pod is almost impossible to be allocated the previous IP.")),(0,r.kt)("p",null,"But for ",(0,r.kt)("strong",{parentName:"p"},"InPlace")," way we can re-use the Pod object but only modify the fields in it, so that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid additional cost of scheduling, allocating IP, allocating and mounting volumes"),(0,r.kt)("li",{parentName:"ul"},"Faster image pulling, because of we can re-use most of image layers pulled by the old image and only to pull several new layers"),(0,r.kt)("li",{parentName:"ul"},"When a container is in-place updating, the other containers in Pod will not be affected and remain running.")),(0,r.kt)("h2",{id:"understand-inplaceifpossible"},"Understand ",(0,r.kt)("em",{parentName:"h2"},"InPlaceIfPossible")),(0,r.kt)("p",null,"The update type in Kruise workloads is named ",(0,r.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible"),", which tells Kruise to update Pods in-place as possible, and it should go back to ReCreate Update if impossible."),(0,r.kt)("p",null,"What changes does it consider to be possilble to in-place update?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.template.metadata.*")," in workloads, such as labels and annotations, Kruise will only update the metadata to existing Pods without recreate them."),(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.template.spec.containers[x].image")," in workloads, Kruise will in-place update the container image in Pods without recreate them."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Since Kruise v1.0 (including v1.0 alpha/beta)"),", update ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.template.metadata.labels/annotations")," and there exists container env from the changed labels/annotations, Kruise will in-place update them to renew the env value in containers.")),(0,r.kt)("p",null,"Otherwise, the changes to other fields such as ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.containers[x].env")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.containers[x].resources")," will go back to ReCreate Update."),(0,r.kt)("p",null,"Take the CloneSet YAML below as an example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"app-image:v1")," image, will trigger in-place update."),(0,r.kt)("li",{parentName:"ol"},"Modify the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"app-config")," in annotations, will trigger in-place update (Read the ",(0,r.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")," below)."),(0,r.kt)("li",{parentName:"ol"},"Modify the two fields above together, will tigger in-place update both image and environment."),(0,r.kt)("li",{parentName:"ol"},"Directly modify the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"APP_NAME")," in env or add a new env, will trigger recreate update.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  ...\nspec:\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n        app-config: \"... the real env value ...\"\n    spec:\n      containers:\n      - name: app\n        image: app-image:v1\n        env:\n        - name: APP_CONFIG\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.annotations['app-config']\n        - name: APP_NAME\n          value: xxx\n  updateStrategy:\n    type: InPlaceIfPossible\n")),(0,r.kt)("h2",{id:"workflow-overview"},"Workflow overview"),(0,r.kt)("p",null,"You can see the whole workflow of in-place update below (",(0,r.kt)("em",{parentName:"p"},"you may need to right click and open it in a new tab"),"):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:a(7654).Z,width:"3654",height:"1778"})),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To use InPlace Update for env from metadata, you have to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"kruise-daemon")," (",(0,r.kt)("em",{parentName:"p"},"defaults to be enabled"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"InPlaceUpdateEnvFromMetadata")," feature-gate when install or upgrade Kruise chart. "),(0,r.kt)("p",null,"Note that if you have some nodes of virtual-kubelet type, kruise-daemon may not work on them and in-place update for env from metadata will not be executed."))}m.isMDXComponent=!0},3662:function(e,t,a){t.Z=a.p+"assets/images/inplace-update-comparation-fc948df195e332f578d4967c34b0c3d3.png"},7654:function(e,t,a){t.Z=a.p+"assets/images/inplace-update-workflow-7b4d4bb7cfb4e72882f2a6bb76f422f1.png"}}]);