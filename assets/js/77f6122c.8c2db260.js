"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8949],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1953:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=o(3117),a=o(102),i=(o(7294),o(3905)),r=["components"],l={slug:"workloadspread",title:"WorkloadSpread - Interpretation for OpenKruise v0.10.0 new feature",authors:["BoltsLei","veophi"],tags:["workload","workloadspread","multi-domain"]},s=void 0,d={permalink:"/blog/workloadspread",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2021-09-22-workloadspread.md",source:"@site/blog/2021-09-22-workloadspread.md",title:"WorkloadSpread - Interpretation for OpenKruise v0.10.0 new feature",description:"Background",date:"2021-09-22T00:00:00.000Z",formattedDate:"September 22, 2021",tags:[{label:"workload",permalink:"/blog/tags/workload"},{label:"workloadspread",permalink:"/blog/tags/workloadspread"},{label:"multi-domain",permalink:"/blog/tags/multi-domain"}],readingTime:11.875,truncated:!1,authors:[{name:"GuangLei Cao",title:"Contributor of OpenKruise",url:"https://github.com/BoltsLei",imageURL:"https://github.com/BoltsLei.png",key:"BoltsLei"},{name:"Weixiang Sun",title:"Member of OpenKruise",url:"https://github.com/veophi",imageURL:"https://github.com/veophi.png",key:"veophi"}],frontMatter:{slug:"workloadspread",title:"WorkloadSpread - Interpretation for OpenKruise v0.10.0 new feature",authors:["BoltsLei","veophi"],tags:["workload","workloadspread","multi-domain"]},prevItem:{title:"OpenKruise v1.0, Reaching New Peaks of application automation",permalink:"/blog/openkruise-1.0"},nextItem:{title:"OpenKruise 0.10.0, New features of multi-domain management, application protection",permalink:"/blog/openkruise-0.10.0"}},p={authorsImageUrls:[void 0,void 0]},c=[{value:"Background",id:"background",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Comparison with related works",id:"comparison-with-related-works",level:2},{value:"\u300c1\u300dPod Topology Spread Constrains",id:"1pod-topology-spread-constrains",level:3},{value:"\u300c2\u300dUnitedDeploymen",id:"2uniteddeploymen",level:3},{value:"Use Case",id:"use-case",level:2},{value:"\u300c1\u300dDeploy 100 pods to normal node pool, rest pods to elastic node pool",id:"1deploy-100-pods-to-normal-node-pool-rest-pods-to-elastic-node-pool",level:3},{value:"\u300c1\u300dDeploy pods to normal node pool first, to elastic resource pool when normal node pool is insufficient",id:"1deploy-pods-to-normal-node-pool-first-to-elastic-resource-pool-when-normal-node-pool-is-insufficient",level:3},{value:"\u300c3\u300dScatter to 3 zones, the scale is 1:1:3",id:"3scatter-to-3-zones-the-scale-is-113",level:3},{value:"\u300c4\u300dConfigures different resource quotas on different CPU architecture",id:"4configures-different-resource-quotas-on-different-cpu-architecture",level:3},{value:"Implementation",id:"implementation",level:2},{value:"\u300c1\u300d How to decide the priority when scaling up?",id:"1-how-to-decide-the-priority-when-scaling-up",level:3},{value:"\u300c2\u300d How to decide the priority when scaling down?",id:"2-how-to-decide-the-priority-when-scaling-down",level:3},{value:"\u300c3\u300d How to solve the counting problems?",id:"3-how-to-solve-the-counting-problems",level:3},{value:"3.1 solving concurrency consistency problem",id:"31-solving-concurrency-consistency-problem",level:4},{value:"3.2 solving data consistency problem",id:"32-solving-data-consistency-problem",level:4},{value:"\u300c4\u300dHow to do if pod schedule failed?",id:"4how-to-do-if-pod-schedule-failed",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Reference",id:"reference",level:2}],u={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"Deploying an application in different zones, different hardware types, and even different clusters and cloud vendors is becoming a very common requirement with the development of cloud native techniques.\nFor examples, these are some cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Cases about disaster tolerant:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application pods is scattered according to the nodes to avoid stacking."),(0,i.kt)("li",{parentName:"ul"},"Application pods is scattered according to available zones."),(0,i.kt)("li",{parentName:"ul"},"Different nodes/zones/domains require different scale of pods.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Cases about cost control:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"People deploy an applications preferentially to their own resource pool, and then deployed to elastic resource pool, such as ECI on Aliyun and Fragate on AWS, when own resources are insufficient. When shrinking, the elastic node is preferred to shrink to save cost.")),(0,i.kt)("p",null,"In the most of the cases, people always split their application into multiple workloads (such as several ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),") to deploy. However\uff0cthis solution often requires manual management by SRE team, or a deeply customized PAAS to support the careful management of multiple workloads for this one application."),(0,i.kt)("p",null,"In order to solve this problem, WorkloadSpread feature has been proposed in version v0.10.0 OpenKruise. It can support multi-kind of workloads, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Replicaset"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Job"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cloneset"),", to manage the partition deployment or elastic scaling. The application scenario and implementation principle of WorkloadSpread will be introduced in detail below to help users better understand this feature."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"More details about WorkloadSpread can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/workloadspread"},"Offical Document"),". "),(0,i.kt)("p",null,'In short, WorkloadSpread can distribute pods of a workload to different types of nodes according to certain rules, so as to meet the above fragmentation and elasticity scenarios. WorkloadSpread is non-invasive, "plug and play", and can be effective for stock workloads.'),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"comparison-with-related-works"},"Comparison with related works"),(0,i.kt)("p",null,"Let's make a simple comparison with some related works in the community."),(0,i.kt)("h3",{id:"1pod-topology-spread-constrains"},"\u300c1\u300dPod Topology Spread Constrains"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"Pod topology spread constraints")," is a solution provided by Kubernetes community. It can horizontally scatter pods according to topology key. The scheduler will select the node that matches the conditions according to the configuration if users defined this rule."),(0,i.kt)("p",null,"Since Pod Topology Spread is evenly dispersed, it ",(0,i.kt)("strong",{parentName:"p"},"cannot")," support exact customized partition number and proportion configuration. Furthermore, the distribution of pods will be destroyed when scaling down.\nUsing WorkloadSpread can avoid these problems."),(0,i.kt)("h3",{id:"2uniteddeploymen"},"\u300c2\u300dUnitedDeploymen"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/uniteddeployment"},"UnitedDeployment")," is a solution provided by the OpenKruise community. It can manage pods in multiple regions by creating and managing multiple workloads."),(0,i.kt)("p",null,"UnitedDeployment supports the requirements of fragmentation and flexibility very well. But, it is a new workload, and the use cost and migration costs will be relatively high, whereas WorkloadSpread is a lightweight solution, which only needs to apply a simple configuration to associate the workload."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,"In the section, I will list some application scenarios of WorkloadSpread and give corresponding configurations to help users quickly understand the WorkloadSpread feature."),(0,i.kt)("h3",{id:"1deploy-100-pods-to-normal-node-pool-rest-pods-to-elastic-node-pool"},"\u300c1\u300dDeploy 100 pods to normal node pool, rest pods to elastic node pool"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"case-1",src:o(9870).Z,width:"2120",height:"1500"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"subsets:\n- name: subset-normal\n  maxReplicas: 100\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - normal\n- name: subset-elastic \n# maxReplicas==nil means no limit for replicas\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - elastic\n")),(0,i.kt)("p",null,"When the workload has less than 100 replicas, all pods will be deployed to the normal node pool, and more than 100 are deployed to the elastic node pool. When scaling down, the pods on the elastic node will be deleted first."),(0,i.kt)("p",null,"Since workload spread limits the distribution of workload, but does not invade workload. Users can also dynamically adjust the number of replicas according to the resource load in combination with HPA. "),(0,i.kt)("p",null,"In this way, it will be automatically scheduled to the elastic node pool when receiving peak flow, and give priority to releasing the resources in the elastic resource pool when the peak gone."),(0,i.kt)("h3",{id:"1deploy-pods-to-normal-node-pool-first-to-elastic-resource-pool-when-normal-node-pool-is-insufficient"},"\u300c1\u300dDeploy pods to normal node pool first, to elastic resource pool when normal node pool is insufficient"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"case-2",src:o(1802).Z,width:"2128",height:"1462"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"scheduleStrategy:\n  type: Adaptive\n  adaptive:\n    rescheduleCriticalSeconds: 30\n    disableSimulationSchedule: false\nsubsets:\n- name: subset-normal\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - normal\n- name: subset-elastic\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - elastic\n")),(0,i.kt)("p",null,"Both subsets have no limit on the number of replicas, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Adaptive")," rescheduling policy are enabled.\nThe goal is to preferentially deploy to the normal node pool. When normal resources are insufficient, webhook will select elastic nodes through simulated scheduling. When the pod in the normal node pool is in the pending state and exceeds the 30s threshold, the WorkloadSpread controller will delete the pod to trigger pod reconstruction, and the new pod will be scheduled to the elastic node pool. During volume reduction, the pod on the elastic node is also preferentially reduced to save costs for users."),(0,i.kt)("h3",{id:"3scatter-to-3-zones-the-scale-is-113"},"\u300c3\u300dScatter to 3 zones, the scale is 1:1:3"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"case-3",src:o(5017).Z,width:"1646",height:"1062"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"subsets:\n- name: subset-a\n  maxReplicas: 20%\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: topology.kubernetes.io/zone\n      operator: In\n      values:\n      - zone-a\n- name: subset-b\n  maxReplicas: 20%\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: topology.kubernetes.io/zone\n      operator: In\n      values:\n      - zone-b\n- name: subset-c\n  maxReplicas: 60%\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: topology.kubernetes.io/zone\n      operator: In\n      values:\n      - zone-c   \n")),(0,i.kt)("p",null,"WorkloadSpread ensures that the pods are scheduled according to the defined proportion when scaling up and down."),(0,i.kt)("h3",{id:"4configures-different-resource-quotas-on-different-cpu-architecture"},"\u300c4\u300dConfigures different resource quotas on different CPU architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"case-4",src:o(6180).Z,width:"2104",height:"1502"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'subsets:\n- name: subset-x86-arch\n  # maxReplicas...\n  # requiredNodeSelectorTerm...\n  patch:\n    metadata:\n      labels:\n        resource.cpu/arch: x86\n    spec: \n      containers:\n      - name: main\n        resources:\n          limits:\n            cpu: "500m"\n            memory: "800Mi"\n- name: subset-arm-arch\n  # maxReplicas...\n  # requiredNodeSelectorTerm...\n  patch:\n    metadata:\n      labels:\n        resource.cpu/arch: arm\n    spec: \n      containers:\n      - name: main\n        resources:\n          limits:\n            cpu: "300m"\n            memory: "600Mi"\n')),(0,i.kt)("p",null,"From the above example, we have patched different labels and container ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," for the pods of two subsets, which is convenient for us to manage the pod more finely. When workload pods are distributed on nodes of different CPU architectures, configure different resource quotas to make better use of hardware resources."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"WorkloadSpread is a pure bypass elastic/topology control solution. Users only need to create a corresponding WorkloadSpread config for their Deployment/Cloneset/Job/ReplicaSet Workloads. There is no need to change the them, and users will be no additional cost to use the WorkloadSpread."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"arch",src:o(7553).Z,width:"2146",height:"920"})),(0,i.kt)("h3",{id:"1-how-to-decide-the-priority-when-scaling-up"},"\u300c1\u300d How to decide the priority when scaling up?"),(0,i.kt)("p",null,"Multiple subsets are defined in WorkloadSpread, and each subset represents a logical domain. Users can freely define subsets according to node configuration, hardware type, zone, etc. In particular, we defined the priority of subsets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The priority is defined from high to low in the order from front to back, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"subset[i]")," has higher priority than ",(0,i.kt)("inlineCode",{parentName:"p"},"subset[j]")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"i < j"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The pods will be scheduled to the subsets with higher priority first."))),(0,i.kt)("h3",{id:"2-how-to-decide-the-priority-when-scaling-down"},"\u300c2\u300d How to decide the priority when scaling down?"),(0,i.kt)("p",null,"Theoretically, the bypass solution of WorkloadSpread cannot interfere with the scaling logic in the workload controller."),(0,i.kt)("p",null,'However, this problem has been solved in the near future. Through the unremitting efforts (feedback) of users, k8s since version 1.21, it has been supported for ReplicaSet (deployment) to specify the "deletion cost" of the pods by setting the annotation ',(0,i.kt)("inlineCode",{parentName:"p"},"controller.kubernetes.io/pod-deletion-cost"),": the higher the deletion cost, the lower the priority of deletion."),(0,i.kt)("p",null,"Since version v0.9.0 OpenKruise, the deletion cost feature has been supported in cloneset."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Therefore, the WorkloadSpread controller controls the scaling down order of the pods by adjusting their deletion cost.")),(0,i.kt)("p",null,"For example, an WorkloadSpread associated a CloneSet with 10 replicas is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  subsets:\n  - name: subset-a\n    maxReplicas: 8\n  - name: subset-b\n")),(0,i.kt)("p",null,"Then the deletion cost value and deletion order are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8 pods in subset-a will have 200 deletion cost;"),(0,i.kt)("li",{parentName:"ul"},"2 pods in subset-b will have 100 deletion cost, and will be deleted first;")),(0,i.kt)("p",null,"If user modify WorkloadSpread as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  subsets:\n  - name: subset-a\n    maxReplicas: 5 # 8->5, \n  - name: subset-b\n")),(0,i.kt)("p",null,"Then the deletion cost value and deletion order will also changed as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"5 pods in subset-a will have 200 deletion cost;"),(0,i.kt)("li",{parentName:"ul"},"3 pods in subset-a will have -100 deletion cost, and will be deleted first;"),(0,i.kt)("li",{parentName:"ul"},"2 pods in subset-b will have 100 deletion cost;")),(0,i.kt)("p",null,"In this way, workload can preferentially scale down those pods that exceed the subset ",(0,i.kt)("inlineCode",{parentName:"p"},"maxReplicas")," limit."),(0,i.kt)("h3",{id:"3-how-to-solve-the-counting-problems"},"\u300c3\u300d How to solve the counting problems?"),(0,i.kt)("p",null,"How to ensure that webhook injects pod rules in strict accordance with the priority order of subset and the number of maxReplicas is a key problem at the implementation of WorkloadSpread."),(0,i.kt)("h4",{id:"31-solving-concurrency-consistency-problem"},"3.1 solving concurrency consistency problem"),(0,i.kt)("p",null,"Sine there may be several kruise-controller-manager pods and lots of webhook Goroutines to process the same WorkloadSpread, the concurrency consistency problem must exist."),(0,i.kt)("p",null,"In the status of WorkloadSpread, there are the ",(0,i.kt)("inlineCode",{parentName:"p"},"subsetStatuses")," field corresponding to each subset. The ",(0,i.kt)("inlineCode",{parentName:"p"},"missingReplicas")," field in it indicates the number of pods required by the subset, and - 1 indicates that there is no quantity limit (",(0,i.kt)("inlineCode",{parentName:"p"},"subset.maxReplicas == nil"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  subsets:\n  - name: subset-a\n    maxReplicas: 1\n  - name: subset-b\n  # ...\nstatus:\n  subsetStatuses:\n  - name: subset-a\n    missingReplicas: 1\n  - name: subset-b\n    missingReplicas: -1\n  # ...\n")),(0,i.kt)("p",null,"When webhook receives a pod create request:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find a suitable subset with ",(0,i.kt)("inlineCode",{parentName:"li"},"missingReplicas")," greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," or equals to ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),"  according to the subset order."),(0,i.kt)("li",{parentName:"ol"},"After finding a suitable subset, if ",(0,i.kt)("inlineCode",{parentName:"li"},"missingReplicas")," is greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", subtract ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," first and try to update the WorkloadSpread status."),(0,i.kt)("li",{parentName:"ol"},"If the update is successful, inject the rules defined by the subset into the pod."),(0,i.kt)("li",{parentName:"ol"},"If the update fails, get the WorkloadSpread again to get the latest status, and return to step 1 (there is a certain limit on the number of retries).")),(0,i.kt)("p",null,"Similarly, when webhook receives a pod delete or eviction request, ",(0,i.kt)("inlineCode",{parentName:"p"},"MisingReplicas")," will add ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to missingreplicas and update it."),(0,i.kt)("p",null,"There is no doubt that we are using optimistic locks to solve update conflicts. ",(0,i.kt)("strong",{parentName:"p"},"However, it is not appropriate to only use optimistic locks"),", because workload will create a large number of pods in parallel, and APIServer will send many pod create requests to webhook in an instant, resulting in a lot of conflicts in parallel processing.\nAs we all know, optimistic lock is not suitable for too many conflicts, because the retry cost of solving conflicts is very high. To this end, we also added a WorkloadSpread level mutex to limit parallel processing to serial processing. There is a new problem in adding mutex locks, that is, after the current root obtains the lock, it is very likely that the WorkloadSpread obtained from infomer is not up-to-date, and will conflict as well. Therefore, after updating the WorkloadSpread, the Goroutine caches the latest WorkloadSpread and then releases the lock, so that the new Goroutine can directly get the latest WorkloadSpread from the cache after obtaining the lock. Of course, in the case of multiple webhooks, we still need to combine the optimistic lock mechanism to solve the conflict."),(0,i.kt)("h4",{id:"32-solving-data-consistency-problem"},"3.2 solving data consistency problem"),(0,i.kt)("p",null,"So, is the ",(0,i.kt)("inlineCode",{parentName:"p"},"missingReplicas")," field controlled by the webhook? The answer is ",(0,i.kt)("strong",{parentName:"p"},"NO"),", because:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The pod create request received by webhook may not really succeed in the end (for example, pod is illegal or fails in subsequent quota verification).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The pod delete/eviction request received by webhook may not really succeed in the end (for example, it is intercepted by PDB, PUB, etc.).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There are always various possibilities in k8s, leading to the end or disappearance of the pods without going through webhook (for example, phase enters succeeded/failed, or ETCD data is lost, etc.).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At the same time, this is not in line with the end state oriented design concept."))),(0,i.kt)("p",null,"Therefore, the WorkloadSpread status is controlled by webhook in collaboration with the controller:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Webhook requests link interception in pod create/delete/ eviction, and modifies the ",(0,i.kt)("inlineCode",{parentName:"p"},"missingReplicas"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the same time, the controller's reconcile will also get all pods under the current workload, classify them according to the subset, and update ",(0,i.kt)("inlineCode",{parentName:"p"},"missingReplicas")," to the actual missing quantity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"From the above analysis, it is likely that there is a delay for the controller to obtain the pod from the informer, so we also added the ",(0,i.kt)("inlineCode",{parentName:"p"},"creatingPods")," map in the status. When the pod is injected at webhook, the key will be recorded as pod name and value are timestamp to the map, and the controller maintains the real ",(0,i.kt)("inlineCode",{parentName:"p"},"missingReplicas")," in combination with the map. Similarly, there is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteingPods")," map to record the delete/eviction event of the pod."))),(0,i.kt)("h3",{id:"4how-to-do-if-pod-schedule-failed"},"\u300c4\u300dHow to do if pod schedule failed?"),(0,i.kt)("p",null,"The configuration of reschedule strategy is supported in WorkloadSpread. By default, the type is fixed, that is, the pod is scheduled to the corresponding subset according to the sequence of each subset and the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxReplicas")," limit."),(0,i.kt)("p",null,"However, in real scenarios, many times, the resources of subset may not fully meet the number of maxReplicas due to some reasons, such as insufficient resources. Users need a more flexible reschedule strategy."),(0,i.kt)("p",null,"The adaptive capabilities provided by WorkloadSpread are logically divided into two types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"SimulationSchedule: scheduling records exists in informer, so we want to simulate the scheduling of pods in webhook. That is, simple filtering is performed through ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Affinity"),", Tolerances, and basic resources resources. (not applicable to virtual-kubelet)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reschedule: After scheduling the pod to a subset, if the scheduling failure exceeds the rescheduleCriticalSeconds time, mark the subset as unscheduled temporarily, and delete the pod to trigger reconstruction. By default, unscheduled will be reserved for 5min, that is, pod creation within 5min will skip this subset."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"WorkloadSpread combines some existing features of Kubernetes to give workload the ability of elastic and multi-domain deployment in the form of bypass. We hope that users can reduce workload deployment complexity by using WorkloadSpread and effectively reduce costs by taking advantage of its elastic scalability."),(0,i.kt)("p",null,"At present, WorkloadSpread is applied to some project in Alibaba, and adjustments in the use will be fed back to the community in time. In the future, there are some new capability plans for WorkloadSpread, such as managing the existing pods, supporting batch workloads, and even using label to match the pod across different workloads. Some of these capabilities need to actually consider the needs and scenarios of community users. I hope you can participate in kruise community, mention Issues and PRs, help users solve the problems of more cloud native deployment, and build a better community."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WorkloadSpread: ",(0,i.kt)("a",{parentName:"li",href:"https://openkruise.io/docs/user-manuals/workloadspread"},"https://openkruise.io/docs/user-manuals/workloadspread")),(0,i.kt)("li",{parentName:"ul"},"Pod Topology Spread Constrains: ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/")),(0,i.kt)("li",{parentName:"ul"},"UnitedDeployment: ",(0,i.kt)("a",{parentName:"li",href:"https://openkruise.io/docs/user-manuals/uniteddeployment"},"https://openkruise.io/docs/user-manuals/uniteddeployment"))))}h.isMDXComponent=!0},7553:function(e,t,o){t.Z=o.p+"assets/images/arch-71cac149618fd28aae6c14d5dee1555f.jpg"},9870:function(e,t,o){t.Z=o.p+"assets/images/case-1-8545e73ad27cbea3f342f0502db2d123.jpg"},1802:function(e,t,o){t.Z=o.p+"assets/images/case-2-4314e252508aedb388ff524d792b1bda.jpg"},5017:function(e,t,o){t.Z=o.p+"assets/images/case-3-2d2b48de4fda0972263202b26e504f2e.jpg"},6180:function(e,t,o){t.Z=o.p+"assets/images/case-4-b5a9c883d4656b9cb2928df4bd14fc33.jpg"}}]);