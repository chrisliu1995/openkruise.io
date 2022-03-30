"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2456],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"UnitedDeployment"},l=void 0,p={unversionedId:"user-manuals/uniteddeployment",id:"version-v1.1/user-manuals/uniteddeployment",title:"UnitedDeployment",description:"This controller provides a new way to manage pods in multi-domain by using multiple workloads.",source:"@site/versioned_docs/version-v1.1/user-manuals/uniteddeployment.md",sourceDirName:"user-manuals",slug:"/user-manuals/uniteddeployment",permalink:"/docs/user-manuals/uniteddeployment",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/uniteddeployment.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1648620235,formattedLastUpdatedAt:"3/30/2022",frontMatter:{title:"UnitedDeployment"},sidebar:"docs",previous:{title:"WorkloadSpread",permalink:"/docs/user-manuals/workloadspread"},next:{title:"Container Restart",permalink:"/docs/user-manuals/containerrecreaterequest"}},d={},u=[{value:"Pod Distribution Management",id:"pod-distribution-management",level:2},{value:"Pod Update Management",id:"pod-update-management",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This controller provides a new way to manage pods in multi-domain by using multiple workloads.\nA high level description about this workload can be found in this ",(0,r.kt)("a",{parentName:"p",href:"/blog/uniteddeployment"},"blog post"),"."),(0,r.kt)("p",null,"Different domains in one Kubernetes cluster are represented by multiple groups of\nnodes identified by labels. UnitedDeployment controller provisions one type of workload\nfor each group of with corresponding matching ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeSelector"),", so that\nthe pods created by individual workload will be scheduled to the target domain."),(0,r.kt)("p",null,"Each workload managed by UnitedDeployment is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"subset"),".\nEach domain should at least provide the capacity to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"replicas")," number of pods.\nCurrently ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced StatefulSet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CloneSet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," are the supported workloads."),(0,r.kt)("p",null,"API definition: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/uniteddeployment_types.go"},"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/uniteddeployment_types.go")),(0,r.kt)("p",null,"The below sample yaml presents a UnitedDeployment which manages three StatefulSet instances in three domains.\nThe total number of managed pods is 6."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  name: sample-ud\nspec:\n  replicas: 6\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      app: sample\n  template:\n    # statefulSetTemplate or advancedStatefulSetTemplate or cloneSetTemplate or deploymentTemplate\n    statefulSetTemplate:\n      metadata:\n        labels:\n          app: sample\n      spec:\n        selector:\n          matchLabels:\n            app: sample\n        template:\n          metadata:\n            labels:\n              app: sample\n          spec:\n            containers:\n            - image: nginx:alpine\n              name: nginx\n  topology:\n    subsets:\n    - name: subset-a\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: node\n          operator: In\n          values:\n          - zone-a\n      replicas: 1\n    - name: subset-b\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: node\n          operator: In\n          values:\n          - zone-b\n      replicas: 50%\n    - name: subset-c\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: node\n          operator: In\n          values:\n          - zone-c\n  updateStrategy:\n    manualUpdate:\n      partitions:\n        subset-a: 0\n        subset-b: 0\n        subset-c: 0\n    type: Manual\n...\n")),(0,r.kt)("h2",{id:"pod-distribution-management"},"Pod Distribution Management"),(0,r.kt)("p",null,"This controller provides ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.topology")," to describe the pod distribution specification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Topology defines the spread detail of each subset under UnitedDeployment.\n// A UnitedDeployment manages multiple homogeneous workloads which are called subset.\n// Each of subsets under the UnitedDeployment is described in Topology.\ntype Topology struct {\n    // Contains the details of each subset. Each element in this array represents one subset\n    // which will be provisioned and managed by UnitedDeployment.\n    // +optional\n    Subsets []Subset `json:"subsets,omitempty"`\n}\n\n// Subset defines the detail of a subset.\ntype Subset struct {\n    // Indicates subset name as a DNS_LABEL, which will be used to generate\n    // subset workload name prefix in the format \'<deployment-name>-<subset-name>-\'.\n    // Name should be unique between all of the subsets under one UnitedDeployment.\n    Name string `json:"name"`\n\n    // Indicates the node selector to form the subset. Depending on the node selector,\n    // pods provisioned could be distributed across multiple groups of nodes.\n    // A subset\'s nodeSelectorTerm is not allowed to be updated.\n    // +optional\n    NodeSelectorTerm corev1.NodeSelectorTerm `json:"nodeSelectorTerm,omitempty"`\n\n    // Indicates the tolerations the pods under this subset have.\n    // A subset\'s tolerations is not allowed to be updated.\n    // +optional\n    Tolerations []corev1.Toleration `json:"tolerations,omitempty"`\n\n    // Indicates the number of the pod to be created under this subset. Replicas could also be\n    // percentage like \'10%\', which means 10% of UnitedDeployment replicas of pods will be distributed\n    // under this subset. If nil, the number of replicas in this subset is determined by controller.\n    // Controller will try to keep all the subsets with nil replicas have average pods.\n    // +optional\n    Replicas *intstr.IntOrString `json:"replicas,omitempty"`\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"topology.subsets")," specifies the desired group of ",(0,r.kt)("inlineCode",{parentName:"p"},"subset"),"s.\nA subset added to or removed from this array will be created or deleted by controller during reconcile.\nEach subset workload is created based on the description of UnitedDeployment ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"subset")," provides the necessary topology information to create a subset workload.\nEach subset has a unique name.  A subset workload is created with the name prefix in\nformat of ",(0,r.kt)("inlineCode",{parentName:"p"},"<UnitedDeployment-name>-<Subset-name>-"),". Each subset will also be configured with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector"),".\nWhen provisioning a StatefulSet ",(0,r.kt)("inlineCode",{parentName:"p"},"subset"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," will be added\nto the StatefulSet's ",(0,r.kt)("inlineCode",{parentName:"p"},"podTemplate"),", so that the Pods of the StatefulSet will be created with the\nexpected node affinity."),(0,r.kt)("p",null,"By default, UnitedDeployment's Pods are evenly distributed across all subsets.\nThere are two scenarios the controller does not follow this policy:"),(0,r.kt)("p",null,"The first one is to customize the distribution policy by indicating ",(0,r.kt)("inlineCode",{parentName:"p"},"subset.replicas"),".\nA valid ",(0,r.kt)("inlineCode",{parentName:"p"},"subset.replicas")," could be integer to represent a real replicas of pods or\nstring in format of percentage like '40%' to represent a fixed proportion of pods.\nOnce a ",(0,r.kt)("inlineCode",{parentName:"p"},"subset.replicas")," is given, the controller is going to reconcile to make sure\neach subset has the expected replicas.\nThe subsets with empty ",(0,r.kt)("inlineCode",{parentName:"p"},"subset.replicas")," will divide the remaining replicas evenly."),(0,r.kt)("p",null,"The other scenario is that the indicated subset replicas policy becomes invalid.\nFor example, the UnitedDeployment's ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.replicas")," is decremented to be less\nthan the sum of all ",(0,r.kt)("inlineCode",{parentName:"p"},"subset.replicas"),".\nIn this case, the indicated ",(0,r.kt)("inlineCode",{parentName:"p"},"subset.replicas")," is ineffective and the controller\nwill automatically scale each subset's replicas to match the total replicas number.\nThe controller will try its best to apply this adjustment smoothly."),(0,r.kt)("h2",{id:"pod-update-management"},"Pod Update Management"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template")," is updated, a upgrade progress will be triggered.\nNew template will be patch to each subset workload, which triggers subset controller\nto update their pods.\nFurthermore, if subset workload supports ",(0,r.kt)("inlineCode",{parentName:"p"},"partition"),", like StatefulSet, AdvancedStatefulSet\nis also able to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"Manual")," update strategy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// UnitedDeploymentUpdateStrategy defines the update performance\n// when template of UnitedDeployment is changed.\ntype UnitedDeploymentUpdateStrategy struct {\n    // Type of UnitedDeployment update strategy.\n    // Default is Manual.\n    // +optional\n    Type UpdateStrategyType `json:"type,omitempty"`\n    // Includes all of the parameters a Manual update strategy needs.\n    // +optional\n    ManualUpdate *ManualUpdate `json:"manualUpdate,omitempty"`\n}\n\n// ManualUpdate is a update strategy which allows users to control the update progress\n// by providing the partition of each subset.\ntype ManualUpdate struct {\n    // Indicates number of subset partition.\n    // +optional\n    Partitions map[string]int32 `json:"partitions,omitempty"`\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Manual")," update strategy allows users to control the update progress by indicating\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"partition")," of each subset. The controller will pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"partition")," to each subset."))}m.isMDXComponent=!0}}]);