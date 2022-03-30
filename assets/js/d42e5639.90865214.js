"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9973],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"Deletion Protection"},p=void 0,s={unversionedId:"user-manuals/deletionprotection",id:"user-manuals/deletionprotection",title:"Deletion Protection",description:"FEATURE STATE: Kruise v0.9.0",source:"@site/docs/user-manuals/deletionprotection.md",sourceDirName:"user-manuals",slug:"/user-manuals/deletionprotection",permalink:"/docs/next/user-manuals/deletionprotection",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/deletionprotection.md",tags:[],version:"current",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"9/24/2021",frontMatter:{title:"Deletion Protection"},sidebar:"docs",previous:{title:"ResourceDistribution",permalink:"/docs/next/user-manuals/resourcedistribution"},next:{title:"PodUnavailableBudget",permalink:"/docs/next/user-manuals/podunavailablebudget"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Risk",id:"risk",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,l.kt)("p",null,"This feature provides a safety policy which could help users protect Kubernetes resources and\napplications' availability from the cascading deletion mechanism."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Firstly, users have to enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResourcesDeletionProtection")," feature-gate during ",(0,l.kt)("a",{parentName:"p",href:"../installation#optional-feature-gate"},"Kruise installation or upgrade"),"."),(0,l.kt)("p",null,"Then, users can add the label named ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.kruise.io/delete-protection")," to some specific resources. The values can be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Always"),": this object will always be forbidden to be deleted, unless the label is removed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cascading"),": this object will be forbidden to be deleted, if it has active resources owned")),(0,l.kt)("p",null,"The resources supported and the cascading judgement relationship:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kind"),(0,l.kt)("th",{parentName:"tr",align:null},"Group"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Cascading")," judgement"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"core"),(0,l.kt)("td",{parentName:"tr",align:null},"v1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether there is active Pods in this namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CustomResourceDefinition")),(0,l.kt)("td",{parentName:"tr",align:null},"apiextensions.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"v1beta1, v1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether there is existing CRs of this CRD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Deployment")),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"v1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"StatefulSet")),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"v1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReplicaSet")),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"v1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSet")),(0,l.kt)("td",{parentName:"tr",align:null},"apps.kruise.io"),(0,l.kt)("td",{parentName:"tr",align:null},"v1alpha1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"StatefulSet")),(0,l.kt)("td",{parentName:"tr",align:null},"apps.kruise.io"),(0,l.kt)("td",{parentName:"tr",align:null},"v1alpha1, v1beta1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UnitedDeployment")),(0,l.kt)("td",{parentName:"tr",align:null},"apps.kruise.io"),(0,l.kt)("td",{parentName:"tr",align:null},"v1alpha1"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the replicas is 0")))),(0,l.kt)("h2",{id:"risk"},"Risk"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"objectSelector")," in ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-configuration"},"webhook configuration"),",\nKruise webhook will only handle those ",(0,l.kt)("inlineCode",{parentName:"p"},"Namespace/CustomResourceDefinition/Deployment/StatefulSet/ReplicaSet")," resources with ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.kruise.io/delete-protection")," label."),(0,l.kt)("p",null,"So, if all kruise-manager Pods are crashed or in other abnormal states, kube-apiserver fails to call the deletion webhook,\nonly the resources with ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.kruise.io/delete-protection")," label can not be deleted temporarily."))}m.isMDXComponent=!0}}]);