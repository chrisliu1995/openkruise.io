"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4286],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],s={slug:"uniteddeployment",title:"UnitedDeploymemt - Supporting Multi-domain Workload Management",authors:["Fei-Guo"],tags:["workload","uniteddeployment"]},l=void 0,u={permalink:"/zh/blog/uniteddeployment",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2019-11-20-uniteddeployment.md",source:"@site/blog/2019-11-20-uniteddeployment.md",title:"UnitedDeploymemt - Supporting Multi-domain Workload Management",description:"Ironically, probably every cloud user knew (or should realized that) failures in Cloud resources",date:"2019-11-20T00:00:00.000Z",formattedDate:"2019\u5e7411\u670820\u65e5",tags:[{label:"workload",permalink:"/zh/blog/tags/workload"},{label:"uniteddeployment",permalink:"/zh/blog/tags/uniteddeployment"}],readingTime:6.005,truncated:!1,authors:[{name:"Fei Guo",title:"Maintainer of OpenKruise",url:"https://github.com/Fei-Guo",imageURL:"https://github.com/Fei-Guo.png",key:"Fei-Guo"}],frontMatter:{slug:"uniteddeployment",title:"UnitedDeploymemt - Supporting Multi-domain Workload Management",authors:["Fei-Guo"],tags:["workload","uniteddeployment"]},prevItem:{title:"OpenKruise 0.8.0, A Powerful Tool for Sidecar Container Management",permalink:"/zh/blog/sidecarset"},nextItem:{title:"Learning Concurrent Reconciling",permalink:"/zh/blog/learning-concurrent-reconciling"}},p={authorsImageUrls:[void 0]},d=[{value:"Using <code>Subsets</code> to describe domain topology",id:"using-subsets-to-describe-domain-topology",level:2},{value:"Customized subset rollout <code>Partitions</code>",id:"customized-subset-rollout-partitions",level:2},{value:"Multi-Cluster application management (In future)",id:"multi-cluster-application-management-in-future",level:2},{value:"Summary",id:"summary",level:2}],c={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ironically, probably every cloud user knew (or should realized that) failures in Cloud resources\nare inevitable. Hence, high availability is probably one of the most desirable features that\nCloud Provider offers for cloud users. For example, in AWS, each geographic region has\nmultiple isolated locations known as Availability Zones (AZs).\nAWS provides various AZ-aware solutions to allow the compute or storage resources of the user\napplications to be distributed across multiple AZs in order to tolerate AZ failure, which indeed\nhappened in the past. "),(0,i.kt)("p",null,"In Kubernetes, the concept of AZ is not realized by an API object. Instead,\nan AZ is usually represented by a group of hosts that have the same location label.\nAlthough hosts within the same AZ can be identified by labels, the capability of distributing Pods across\nAZs was missing in Kubernetes default scheduler. Hence it was difficult to use single\n",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," to perform  AZ-aware Pods deployment. Fortunately,\nin Kubernetes 1.16, a new feature called ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},'"Pod Topology Spread Constraints"'),"\nwas introduced. Users now can add new constraints in the Pod Spec, and scheduler\nwill enforce the constraints so that Pods can be distributed across failure\ndomains such as AZs, regions or nodes, in a uniform fashion."),(0,i.kt)("p",null,"In Kruise, ",(0,i.kt)("strong",{parentName:"p"},"UnitedDeploymemt")," provides an alternative to achieve high availability in\na cluster that consists of multiple fault domains - that is, managing multiple homogeneous\nworkloads, and each workload is dedicated to a single ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset"),". Pod distribution across AZs is\ndetermined by the replica number of each workload.\nSince each ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset")," is associated with a workload, UnitedDeployment can support\nfiner-grained rollout and deployment strategies.\nIn addition, UnitedDeploymemt can be further extended to support\nmultiple clusters! Let us reveal how UnitedDeployment is designed."),(0,i.kt)("h2",{id:"using-subsets-to-describe-domain-topology"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"Subsets")," to describe domain topology"),(0,i.kt)("p",null,"UnitedDeploymemt uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset")," to represent a failure domain. ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset")," API\nprimarily specifies the nodes that forms the domain and the number of replicas, or\nthe percentage of total replicas, run in this domain. UnitedDeployment manages\nsubset workloads against a specific domain topology, described by a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset")," array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type Topology struct {\n    // Contains the details of each subset.\n    Subsets []Subset\n}\n\ntype Subset struct {\n    // Indicates the name of this subset, which will be used to generate\n    // subset workload name prefix in the format '<deployment-name>-<subset-name>-'.\n    Name string\n\n    // Indicates the node select strategy to form the subset.\n    NodeSelector corev1.NodeSelector\n\n    // Indicates the number of the subset replicas or percentage of it on the\n    // UnitedDeployment replicas.\n    Replicas *intstr.IntOrString\n}\n")),(0,i.kt)("p",null,"The specification of the subset workload is saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec.Template"),". UnitedDeployment\nonly supports ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," subset workload as of now. An interesting part of ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset"),"\ndesign is that now user can specify ",(0,i.kt)("strong",{parentName:"p"},"customized Pod distribution")," across AZs, which is not\nnecessarily a uniform distribution in some cases. For example, if the AZ\nutilization or capacity are not homogeneous, evenly distributing Pods may lead to Pod deployment\nfailure due to lack of resources. If users have prior knowledge about AZ resource capacity/usage,\nUnitedDeployment can help to apply an optimal Pod distribution to ensure overall\ncluster utilization remains balanced. Of course, if not specified, a uniform Pod distribution\nwill be applied to maximize availability."),(0,i.kt)("h2",{id:"customized-subset-rollout-partitions"},"Customized subset rollout ",(0,i.kt)("inlineCode",{parentName:"h2"},"Partitions")),(0,i.kt)("p",null,"User can update all the UnitedDeployment subset workloads by providing a\nnew version of subset workload template.\nNote that UnitedDeployment does not control\nthe entire rollout process of all subset workloads, which is typically done by another rollout\ncontroller built on top of it. Since the replica number in each ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset")," can be different,\nit will be much more convenient to allow user to specify the individual rollout ",(0,i.kt)("inlineCode",{parentName:"p"},"Partition")," of each\nsubset workload instead of using one ",(0,i.kt)("inlineCode",{parentName:"p"},"Partition")," to rule all, so that they can be upgraded in the same pace.\nUnitedDeployment provides ",(0,i.kt)("inlineCode",{parentName:"p"},"ManualUpdate")," strategy to customize per subset rollout ",(0,i.kt)("inlineCode",{parentName:"p"},"Partition"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type UnitedDeploymentUpdateStrategy struct {\n    // Type of UnitedDeployment update.\n    Type UpdateStrategyType\n    // Indicates the partition of each subset.\n    ManualUpdate *ManualUpdate\n}\n\ntype ManualUpdate struct {\n    // Indicates number of subset partition.\n    Partitions map[string]int32\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multi-cluster controller",src:n(6301).Z,width:"670",height:"420"})),(0,i.kt)("p",null,"This makes it fairly easy to coordinate multiple subsets rollout. For example,\nas illustrated in Figure 1, assuming UnitedDeployment manages three subsets and\ntheir replica numbers are 4, 2, 2 respectively, a rollout\ncontroller can realize a canary release plan of upgrading 50% of Pods in each\nsubset at a time by setting subset partitions to 2, 1, 1 respectively.\nThe same cannot be easily achieved by using a single workload controller like ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),"."),(0,i.kt)("h2",{id:"multi-cluster-application-management-in-future"},"Multi-Cluster application management (In future)"),(0,i.kt)("p",null,"UnitedDeployment can be extended to support multi-cluster workload\nmanagement. The idea is that ",(0,i.kt)("inlineCode",{parentName:"p"},"Subsets")," may not only\nreside in one cluster, but also spread over multiple clusters.\nMore specifically, domain topology specification will associate\na ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRegistryQuerySpec"),", which describes the clusters that UnitedDeployment\nmay distribute Pods to. Each cluster is represented by a custom resource managed by a\nClusterRegistry controller using Kubernetes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cluster-registry"},"cluster registry APIs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type Topology struct {\n  // ClusterRegistryQuerySpec is used to find the all the clusters that\n  // the workload may be deployed to. \n  ClusterRegistry *ClusterRegistryQuerySpec\n  // Contains the details of each subset including the target cluster name and\n  // the node selector in target cluster.\n  Subsets []Subset\n}\n\ntype ClusterRegistryQuerySpec struct {\n  // Namespaces that the cluster objects reside.\n  // If not specified, default namespace is used.\n  Namespaces []string\n  // Selector is the label matcher to find all qualified clusters.\n  Selector   map[string]string\n  // Describe the kind and APIversion of the cluster object.\n  ClusterType metav1.TypeMeta\n}\n\ntype Subset struct {\n  Name string\n\n  // The name of target cluster. The controller will validate that\n  // the TargetCluster exits based on Topology.ClusterRegistry.\n  TargetCluster *TargetCluster\n\n  // Indicate the node select strategy in the Subset.TargetCluster.\n  // If Subset.TargetCluster is not set, node selector strategy refers to\n  // current cluster.\n  NodeSelector corev1.NodeSelector\n\n  Replicas *intstr.IntOrString \n}\n\ntype TargetCluster struct {\n  // Namespace of the target cluster CRD\n  Namespace string\n  // Target cluster name\n  Name string\n}\n")),(0,i.kt)("p",null,"A new ",(0,i.kt)("inlineCode",{parentName:"p"},"TargetCluster")," field is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Subset")," API. If it presents, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"NodeSelector")," indicates the node selection logic in the target cluster. Now\nUnitedDeployment controller can distribute application Pods to multiple clusters by\ninstantiating a ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," workload in each target cluster with a specific\nreplica number (or a percentage of total replica), as illustrated in Figure 2."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multi-cluster\tcontroller",src:n(7571).Z,width:"658",height:"547"})),(0,i.kt)("p",null,"At a first glance, UnitedDeployment looks more like a federation\ncontroller following the design pattern of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubefed"},"Kubefed"),",\nbut it isn't. The fundamental difference is that Kubefed focuses on propagating arbitrary\nobject types to remote clusters instead of managing an application across clusters.\nIn this example, had a Kubefed style controller been used, each ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," workload in\nindividual cluster would have a replica of 100. UnitedDeployment focuses more on\nproviding the ability of managing multiple workloads in multiple clusters on behalf\nof one application, which is absent in Kubernetes community to the best of our\nknowledge."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This blog post introduces UnitedDeployment, a new controller which helps managing\napplication spread over multiple domains (in arbitrary clusters).\nIt not only allows evenly distributing Pods over AZs,\nwhich arguably can be more efficiently done using the new Pod Topology Spread\nConstraint APIs though, but also enables flexible workload deployment/rollout and\nsupports multi-cluster use cases in the future."))}m.isMDXComponent=!0},6301:function(e,t,n){t.Z=n.p+"assets/images/uniteddeployment-1-55a005182c47c03e50d0607235d9403e.png"},7571:function(e,t,n){t.Z=n.p+"assets/images/uniteddeployment-2-0d3d6b19dee0e0cd3fe5bf6f121db109.png"}}]);