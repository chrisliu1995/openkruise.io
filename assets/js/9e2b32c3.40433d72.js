"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[39],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4632:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),l=["components"],a={title:"CloneSet lifecycle -- Insert Customized Logic Into Pod Lifecycle"},c=void 0,s={unversionedId:"best-practices/cloneset-lifecycle",id:"best-practices/cloneset-lifecycle",title:"CloneSet lifecycle -- Insert Customized Logic Into Pod Lifecycle",description:"Due to various historical reasons or objective factors, the existing system architectures of some companies are not compatible with Kubernetes very well. For example, some companies use another service registration and discovery center, which is totally independent with Kubernetes, instead of  Kubernetes Service. Under this architecture, users will encounter many problems if they want to manage their infrastructure and  applications with Kubernetes.",source:"@site/docs/best-practices/cloneset-lifecycle.md",sourceDirName:"best-practices",slug:"/best-practices/cloneset-lifecycle",permalink:"/docs/next/best-practices/cloneset-lifecycle",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/cloneset-lifecycle.md",tags:[],version:"current",lastUpdatedBy:"Wei-Xiang Sun",lastUpdatedAt:1648457271,formattedLastUpdatedAt:"3/28/2022",frontMatter:{title:"CloneSet lifecycle -- Insert Customized Logic Into Pod Lifecycle"},sidebar:"docs",previous:{title:"Best Practice for Managing Log Collection Sidecar Containers",permalink:"/docs/next/best-practices/log-container-sidecarset"},next:{title:"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread",permalink:"/docs/next/best-practices/elastic-deployment"}},p={},d=[{value:"Scenario hypothesis",id:"scenario-hypothesis",level:3},{value:"Principle",id:"principle",level:3},{value:"CloneSet Lifecycle Configuration",id:"cloneset-lifecycle-configuration",level:3},{value:"Lifecycle Operator",id:"lifecycle-operator",level:3},{value:"Operator initialization",id:"operator-initialization",level:4},{value:"Controller Logic",id:"controller-logic",level:4},{value:"Operator \u90e8\u7f72",id:"operator-\u90e8\u7f72",level:4}],u={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Due to various historical reasons or objective factors, the existing system architectures of some companies are not compatible with Kubernetes very well. For example, some companies use another service registration and discovery center, which is totally independent with Kubernetes, instead of  ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service"),". Under this architecture, users will encounter many problems if they want to manage their infrastructure and  applications with Kubernetes."),(0,i.kt)("p",null,"For example, whenever Kubernetes successfully creates a Pod, users should register the Pod with the service discovery center so that it can provide services to the outside. Accordingly, when users want to offline a Pod, they usually need to delete it first in the service discovery center before they can gracefully offline the Pod, otherwise it may lead to some traffic routing problems."),(0,i.kt)("p",null,"However, in Kubernetes, if replicas or template field of workloads was changed, the workload controller will immediately create/delete/update the pod. No time is provided for users to do customized operations. Hence, it is difficult for users to manage the life cycle of the pods in this scenarios."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"why",src:r(3386).Z,width:"1974",height:"1172"})),(0,i.kt)("p",null,"Openkruise  CloneSet Lifecycle feature provides such a set of highly-expandable mechanism which allows users do refined and customized management to pod life cycle.\nSpecifically, CloneSet provide some hooks at several important time spots in the Pod life cycle, so that users can insert their customized actions via these hooks. For example, CloneSet allow users to unregister a pod with the service discovery center before the pod upgrade, and then register the pod after the pod upgrade complete."),(0,i.kt)("p",null,"In the following, we will explain this feature in a specific scenario to help you further understand it."),(0,i.kt)("h3",{id:"scenario-hypothesis"},"Scenario hypothesis"),(0,i.kt)("p",null,"We assume the following scenario:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users do not use Kubernetes Service, and their service discovery system is totally independent of Kubernetes;"),(0,i.kt)("li",{parentName:"ul"},"Users use CloneSet as the Kubernetes workload to manage their applications.")),(0,i.kt)("p",null,"And we make the following reasonable assumptions about the needs of users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the Pod is created\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Register the Pod IP with service discovery center when the pod is available\uff1b"))),(0,i.kt)("li",{parentName:"ul"},"When the Pod is upgraded \uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Before the upgrade, Unregister the Pod IP from the service discovery center\uff1b"),(0,i.kt)("li",{parentName:"ul"},"After the updrade, Register the Pod IP with service discovery center when the pod is available\uff1b"))),(0,i.kt)("li",{parentName:"ul"},"When the Pod is deleted\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Before the deleteion, Unregister the Pod IP from the service discovery center\uff1b ")))),(0,i.kt)("p",null,"Based on the above assumptions, we will describe in detail how to use CloneSet Lifecycle to write a simple operator to implement the user-defined pod life cycle management."),(0,i.kt)("h3",{id:"principle"},"Principle"),(0,i.kt)("p",null,"CloneSet Lifecycle defines the pod life cycle via the following 5 states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Normal: normal state;"),(0,i.kt)("li",{parentName:"ul"},"PreparingUpdate: The CloneSet is preparing to update the pod. The pod upgrade will be blocked, so as to wait for users to execute hook and complete some preprocessing operations before upgrading;"),(0,i.kt)("li",{parentName:"ul"},"Updating: the pod is being upgraded in inPlace way;"),(0,i.kt)("li",{parentName:"ul"},"Updated: the pod upgrade is completed."),(0,i.kt)("li",{parentName:"ul"},"PreparingDelete: the CloneSet is preparing to delete the pod. The pod deletion will be blocked, so as to wait for users to execute hook and do some preprocessing operations before deletion;")),(0,i.kt)("p",null,"The transition logic among the above five states is controlled by a state machine, which is explained in detail in ","[CloneSet official document]"," (",(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/cloneset/#lifecycle-hook"},"https://openkruise.io/docs/user-manuals/cloneset/#lifecycle-hook"),"). Users can select one or more of their concerns, implement an independent operator to manage the pod life cycle states, control the life cycle of pod, and insert customized logic at the time spots they are concerned about."),(0,i.kt)("h3",{id:"cloneset-lifecycle-configuration"},"CloneSet Lifecycle Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  namespace: demo\n  name: cloneset-lifecycle-demo\nspec:\n  replicas: 2\n  ##########################################################################\n  ## Lifecycle configuration\n  lifecycle:\n    inPlaceUpdate:\n      labelsHandler:\n        ## define the label that:\n        ##    1. block inPlace update pod operation for cloneset controller\n        ##    2. inform your operator to execute inPlace update hook\n        example.com/unready-blocker-inplace: "true"\n    preDelete:\n      labelsHandler:\n        ## define the label that:\n        ##    1. block deletion pod operation for cloneset controller\n        ##    2. inform your operator to execute preDelete hook\n        example.com/unready-blocker-delete: "true"\n  ##########################################################################\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n        ## this label is useful to judge whether this pod is newly-created.\n        example.com/newly-create: "true"\n        ## corresponding to the spec.lifecycle.inPlaceUpdate.labelsHandler.example.com/unready-blocker-inplace\n        example.com/unready-blocker-inplace: "true"\n        ## corresponding to the spec.lifecycle.preDelete.labelsHandler.example.com/unready-blocker-inplace\n        example.com/unready-blocker-delete: "true"\n      containers:\n        - name: main\n          image: nginx:latest\n          imagePullPolicy: Always\n  updateStrategy:\n    maxUnavailable: 20%\n    type: InPlaceIfPossible\n')),(0,i.kt)("h3",{id:"lifecycle-operator"},"Lifecycle Operator"),(0,i.kt)("p",null,"In the OpenKruise repository, we give a complete ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/samples/tree/master/lifecycle-hook-controller"},"CloneSet Lifecycle Operator code example"),".\nTherefore,  we will not repeat some code details in this article, but focus on explaining some key logic of the operation under the hypothetical scenario.\nIf you need to refer to the complete code, you can go directly to see this repository."),(0,i.kt)("h4",{id:"operator-initialization"},"Operator initialization"),(0,i.kt)("p",null,"It is recommended to use Kubebuilder to build the operator. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://book.kubebuilder.io/quick-start.html#create-a-project"},"Kubebuilder official document")," for the specific steps."),(0,i.kt)("p",null,"The directory structure of an initialized operator is similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree\n.\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 PROJECT\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 ....\n\u251c\u2500\u2500 controllers\n\u2502\xa0\xa0 \u2514\u2500\u2500 lifecyclehook\n\u2502\xa0\xa0     \u2514\u2500\u2500 lifecyclehook_controller.go\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 hack\n\u2502\xa0\xa0 \u2514\u2500\u2500 ....\n\u2514\u2500\u2500 main.go\n")),(0,i.kt)("h4",{id:"controller-logic"},"Controller Logic"),(0,i.kt)("p",null,"Lifecycle Hook is implenmented in ",(0,i.kt)("inlineCode",{parentName:"p"}," Reconcile(req ctrl.Request) (ctrl.Result, error)")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"lifecyclehook_controller.go")," file.\nIn our hypothetical scenarios, we implemented the pod life cycle management logic through the following codes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    deleteHookLabel  = "example.com/unready-blocker-delete"\n    inPlaceHookLabel = "example.com/unready-blocker-inplace"\n    newlyCreateLabel = "example.com/newly-create"\n)\n\nfunc (r *SampleReconciler) Reconcile(req ctrl.Request) (ctrl.Result, error) {\n  \n    ... ...\n\n    switchLabel := func(pod *v1.Pod, key, value string) error {\n        body := fmt.Sprintf(`{"metadata":{"labels":{"%s":"%s"}}}`, key, value)\n        if err := r.Patch(context.TODO(), pod, client.RawPatch(types.StrategicMergePatchType, []byte(body))); err != nil {\n            return err\n        }\n        return nil\n    }\n\n\n    /*\n        Pod Lifecycle Hook Logic\n    */\n    switch {\n    // handle newly-created pod\n    case IsNewlyCreateHooked(pod):\n        // register this pod to your service discovery center\n        if err := postRegistry(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, newlyCreateLabel, "false"); err != nil {\n            return reconcile.Result{}, err\n        }\n        \n    // handle the pod which is preparing to inplace update\n    case IsPreUpdateHooked(pod):\n        // let the service discover center fail over this pod \n        if err := postFailOver(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, inPlaceHookLabel, "false"); err != nil {\n            return reconcile.Result{}, err\n        }\n        \n    // handle the pod which is updated completely \n    case IsUpdatedHooked(pod):\n        // register this pod again to your service discovery center \n        if err := postRegistry(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, inPlaceHookLabel, "true"); err != nil {\n            return reconcile.Result{}, err\n        }\n\n    // handle the pod which is preparing to delete  \n    case IsPreDeleteHooked(pod):\n        // just unregister this pod from your service discovery center\n        if err := postUnregister(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, deleteHookLabel, "false"); err != nil {\n            return reconcile.Result{}, err\n        }\n    }\n\n    return ctrl.Result{}, nil\n}\n\nfunc IsNewlyCreateHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStateNormal && pod.Labels[newlyCreateLabel] == "true" && IsPodReady(pod)\n}\n\nfunc IsPreUpdateHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStatePreparingUpdate && pod.Labels[inPlaceHookLabel] == "true"\n}\n\nfunc IsUpdatedHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStateUpdated && pod.Labels[inPlaceHookLabel] == "false" && IsPodReady(pod)\n}\n\nfunc IsPreDeleteHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStatePreparingDelete && pod.Labels[DeleteHookLabel] == "true"\n}\n')),(0,i.kt)("p",null,"The four ",(0,i.kt)("inlineCode",{parentName:"p"},"switch-cases")," correspond to the four key time spots: after creation, pre-update, updated and pre-delete. Users can implement the corresponding hook according to their needs. In our hypothetical scenario, the implementation of the above hooks are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postRegistry(pod *v1.Pod)")," : send a http/https request to the service discovery center to register the Pod; "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postFailOver(pod *v1.Pod)")," : send a http/https request to the service discovery center to fail over the Pod; "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postUnregiste(pod *v1.Pod)"),": send a http/https request to the service discovery center to unregister the Pod; ")),(0,i.kt)("h4",{id:"operator-\u90e8\u7f72"},"Operator \u90e8\u7f72"),(0,i.kt)("p",null,"When the code of the operator is perfect, the operator needs to be built and deployed to the target cluster. You can refer to the Kubebuilder official document to do that."),(0,i.kt)("p",null,"After the deployment of the operator is completed, the operator will continuously watch the state of pods in the cluster and automatically execute the above hook at the key time spot of pod life cycle, to bridge the gap between Kubernetes and the service discovery center."))}h.isMDXComponent=!0},3386:function(e,t,r){t.Z=r.p+"assets/images/cloneset_lifecycle-480f3577668bfc0bd7724851982df69c.png"}}]);