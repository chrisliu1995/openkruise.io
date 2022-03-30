"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7639],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1374:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={slug:"sidecarset-hotupdate",title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",authors:["zmberg"],tags:["workload","sidecar","istio","mosn","HotUpgrade"]},c="Preface",l={permalink:"/blog/sidecarset-hotupdate",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2021-06-10-sidecarset-hot-update-0.9.0.md",source:"@site/blog/2021-06-10-sidecarset-hot-update-0.9.0.md",title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",description:"OpenKruise is an open source management suite developed by Alibaba Cloud for cloud native application automation. It is currently a Sandbox project hosted under the Cloud Native Computing Foundation (CNCF). Based on years of Alibaba's experience in container and cloud native technologies, OpenKruise is a Kubernetes-based standard extension component that has been widely used in the Alibaba internal production environment, together with technical concepts and best practices for large-scale Internet scenarios.",date:"2021-06-10T00:00:00.000Z",formattedDate:"June 10, 2021",tags:[{label:"workload",permalink:"/blog/tags/workload"},{label:"sidecar",permalink:"/blog/tags/sidecar"},{label:"istio",permalink:"/blog/tags/istio"},{label:"mosn",permalink:"/blog/tags/mosn"},{label:"HotUpgrade",permalink:"/blog/tags/hot-upgrade"}],readingTime:7.425,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],frontMatter:{slug:"sidecarset-hotupdate",title:"OpenKruise 0.9.0, SidecarSet Helps Mesh Container Hot Upgrade",authors:["zmberg"],tags:["workload","sidecar","istio","mosn","HotUpgrade"]},prevItem:{title:"OpenKruise 0.10.0, New features of multi-domain management, application protection",permalink:"/blog/openkruise-0.10.0"},nextItem:{title:"OpenKruise 0.9.0, Supports Pod Restart and Deletion Protection",permalink:"/blog/openkruise-0.9.0"}},p={authorsImageUrls:[void 0]},d=[{value:"Inject Sidecar Containers of the Hot Upgrade Type",id:"inject-sidecar-containers-of-the-hot-upgrade-type",level:2},{value:"Smooth Mesh Container Upgrade",id:"smooth-mesh-container-upgrade",level:2},{value:"Core Logic of Migration",id:"core-logic-of-migration",level:2},{value:"Migration Demo",id:"migration-demo",level:2}],h={toc:d};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenKruise is an open source management suite developed by Alibaba Cloud for cloud native application automation. It is currently a Sandbox project hosted under the Cloud Native Computing Foundation (CNCF). Based on years of Alibaba's experience in container and cloud native technologies, OpenKruise is a Kubernetes-based standard extension component that has been widely used in the Alibaba internal production environment, together with technical concepts and best practices for large-scale Internet scenarios."),(0,o.kt)("p",null,"OpenKruise released v0.8.0 on March 4, 2021, with enhanced SidecarSet capabilities, especially for log management of Sidecar."),(0,o.kt)("h1",{id:"background---how-to-upgrading-mesh-containers-independently"},"Background - How to Upgrading Mesh Containers Independently"),(0,o.kt)("p",null,"SidecarSet is a workload provided by Kruise to manage sidecar containers. Users can complete ",(0,o.kt)("strong",{parentName:"p"},"automatic injection")," and ",(0,o.kt)("strong",{parentName:"p"},"independent upgrades")," conveniently using SidecarSet."),(0,o.kt)("p",null,"By default, sidecar upgrade will first stop the old container and start a new one. This method is particularly suitable for sidecar containers that do not affect Pod service availability, such as log collection agents. However, for many proxies or sidecar containers for runtime, such as Istio Envoy, this upgrade method does not work. Envoy functions as a Proxy container in the Pod to handle all traffic. If users restart in this scenario to upgrade directly, the service availability of the Pod will be affected. Therefore, the release and capacity of the application should be taken into consideration. The sidecar release cannot be independent of the application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"how update mesh sidecar",src:n(3669).Z,width:"538",height:"345"})),(0,o.kt)("p",null,"Tens of thousands of pods in Alibaba Group communicate with each other based on Service Mesh. Mesh container upgrades may make business pods unavailable. Therefore, the upgrade of the mesh containers hinders the iteration of Service Mesh. To address this scenario, we worked with the Service Mesh team to implement the hot upgrade capability of the mesh container. This article focuses on the important role SidecarSet is playing during the implementation of the hot upgrade capability of mesh containers."),(0,o.kt)("h1",{id:"sidecarset-helps-lossless-hot-upgrade-of-mesh-containers"},"SidecarSet Helps Lossless Hot Upgrade of Mesh Containers"),(0,o.kt)("p",null,"Mesh containers cannot perform direct in-place upgrades like the log collection class container. The mesh container must provide services without interruption, but an independent upgrade will make the mesh service unavailable for some time. Some well-known mesh services in the community, such as Envoy and Mosn, provide smooth upgrade capabilities by default. However, these upgrade methods cannot be integrated properly with cloud-native, and Kubernetes does not have an upgrade solution for such sidecar containers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OpenKruise SidecarSet provides the sidecar hot upgrade mechanism for the mesh container"),". Thus, lossless Mesh container hot upgrade can be implemented in a cloud-native manner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: hotupgrade-sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: hotupgrade\n  containers:\n  - name: sidecar\n    image: openkruise/hotupgrade-sample:sidecarv1\n    imagePullPolicy: Always\n    lifecycle:\n      postStart:\n        exec:\n          command:\n          - /bin/sh\n          - /migrate.sh\n    upgradeStrategy:\n      upgradeType: HotUpgrade\n      hotUpgradeEmptyImage: openkruise/hotupgrade-sample:empty\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"upgradeType: \u201cHotUpgrade\u201d indicates this type of sidecar container, which is hot upgrade."),(0,o.kt)("li",{parentName:"ul"},"hotUpgradeEmptyImage: When performing hot upgrade on sidecar containers, businesses need to provide an empty container for container switchover. The Empty container has the same configuration as the sidecar container (except for the image address), such as command, lifecycle, and probe.")),(0,o.kt)("p",null,"The SidecarSet hot upgrade mechanism includes two steps: injection of Sidecar containers of the hot upgrade type and Mesh container smooth upgrade."),(0,o.kt)("h2",{id:"inject-sidecar-containers-of-the-hot-upgrade-type"},"Inject Sidecar Containers of the Hot Upgrade Type"),(0,o.kt)("p",null,"For Sidecar containers of the hot upgrade type, two containers will be injected by SidercarSet Webhook when creating the Pod:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"{sidecar.name}-1: As shown in the following figure, envoy-1 represents a running sidecar container, for example, envoy:1.16.0."),(0,o.kt)("li",{parentName:"ul"},"{sidecar.name}-2: As shown in the following figure, envoy-2 represents the \u201chotUpgradeEmptyImage\u201d container provided by the business, for example, empty:1.0.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"inject sidecar",src:n(1784).Z,width:"677",height:"405"})),(0,o.kt)("p",null,"This Empty container does not have any practical work while running the Mesh container."),(0,o.kt)("h2",{id:"smooth-mesh-container-upgrade"},"Smooth Mesh Container Upgrade"),(0,o.kt)("p",null,"The hot upgrade process is divided into three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Upgrade:")," Replace the Empty container with the sidecar container of the latest version, for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"envoy-2.Image = envoy:1.17.0")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Migration:")," Run the \u201cPostStartHook\u201d script of the sidecar container to upgrade the mesh service smoothly"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Reset:")," After the mesh service is upgraded, replace the sidecar container of the earlier version with an Empty container, for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"envoy-1.Image = empty:1.0"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"update sidecar",src:n(2804).Z,width:"653",height:"432"})),(0,o.kt)("p",null,"The preceding three steps represent the entire process of the hot upgrade. If multiple hot upgrades on a Pod are required, users only need to repeat the three steps listed above."),(0,o.kt)("h2",{id:"core-logic-of-migration"},"Core Logic of Migration"),(0,o.kt)("p",null,"The SidecarSet hot upgrade mechanism completes the mesh container switching and provides the coordination mechanism (",(0,o.kt)("inlineCode",{parentName:"p"},"PostStartHook"),") for containers of old and new versions. However, this is only the first step. The Mesh container also needs to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"PostStartHook")," script to upgrade the mesh service smoothly (please see the preceding migration process), such as Envoy hot restart and Mosn lossless restart."),(0,o.kt)("p",null,"Mesh containers generally provide external services by listening to a fixed port. The migration process of mesh containers can be summarized as: pass ListenFD through UDS, stop Accept, and start drainage. For mesh containers that do not support hot restart, you can follow this process to modify the mesh containers. The logic is listed below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"migration",src:n(2658).Z,width:"507",height:"696"})),(0,o.kt)("h2",{id:"migration-demo"},"Migration Demo"),(0,o.kt)("p",null,"Different mesh containers provide different services and have different internal implementation logics, so the specific Migrations are also different. The preceding logic only presents some important points, with hopes to benefit everyone in need. We have also provided a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/samples"},"hot upgrade Migration Demo")," on GitHub for reference. Next, we will introduce some of the key codes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Consultation Mechanism"),"\nFirst, users must ",(0,o.kt)("strong",{parentName:"li"},"check whether it is the first startup or hot upgrade smooth migration")," to start the Mesh container. Kruise injects two environment variables called ",(0,o.kt)("inlineCode",{parentName:"li"},"SIDECARSET_VERSION")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"SIDECARSET_VERSION_ALT")," to two sidecar containers to reduce the communication cost of the mesh container. The two environment variables determine whether it is running the hot upgrade process and whether the current sidecar container version is new or old.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// return two parameters:\n// 1. (bool) indicates whether it is hot upgrade process\n// 2. (bool ) when isHotUpgrading=true, the current sidecar is newer or older\nfunc isHotUpgradeProcess() (bool, bool) {\n  // Version of the current sidecar container\n  version := os.Getenv("SIDECARSET_VERSION")\n  // Version of the peer sidecar container\n  versionAlt := os.Getenv("SIDECARSET_VERSION_ALT")\n  // If the version of the peer sidecar container is "0", hot upgrade is not underway\n  if versionAlt == "0" {\n    return false, false\n  }\n  // Hot upgrade is underway\n  versionInt, _ := strconv.Atoi(version)\n  versionAltInt, _ := strconv.Atoi(versionAlt)\n  // version is of int type and monotonically increases, which means the version value of the new-version container will be greater\n  return true, versionInt > versionAltInt\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"ListenFD Migration"),"\nUse the Unix Domain Socket to migrate ListenFD between containers. This step is also a critical step in the hot upgrade. The code example is listed below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  // For code conciseness, all failures will not be captured\n\n  /* The old sidecar migrates ListenFD to the new sidecar through Unix Domain Socket */\n  // tcpLn *net.TCPListener\n  f, _ := tcpLn.File()\n  fdnum := f.Fd()\n  data := syscall.UnixRights(int(fdnum))\n  // Establish a connection with the new sidecar container through Unix Domain Socket\n  raddr, _ := net.ResolveUnixAddr("unix", "/dev/shm/migrate.sock")\n  uds, _ := net.DialUnix("unix", nil, raddr)\n  // Use UDS to send ListenFD to the new sidecar container\n  uds.WriteMsgUnix(nil, data, nil)\n  // Stop receiving new requests and start the drainage phase, for example, http2 GOAWAY\n  tcpLn.Close()\n\n  /* The new sidecar receives ListenFD and starts to provide external services */\n  // Listen to UDS\n  addr, _ := net.ResolveUnixAddr("unix", "/dev/shm/migrate.sock")\n  unixLn, _ := net.ListenUnix("unix", addr)\n  conn, _ := unixLn.AcceptUnix()\n  buf := make([]byte, 32)\n  oob := make([]byte, 32)\n  // Receive ListenFD\n  _, oobn, _, _, _ := conn.ReadMsgUnix(buf, oob)\n  scms, _ := syscall.ParseSocketControlMessage(oob[:oobn])\n  if len(scms) > 0 {\n    // Parse FD and convert to *net.TCPListener\n    fds, _ := syscall.ParseUnixRights(&(scms[0]))\n    f := os.NewFile(uintptr(fds[0]), "")\n    ln, _ := net.FileListener(f)\n    tcpLn, _ := ln.(*net.TCPListener)\n    // Start to provide external services based on the received Listener. The http service is used as an example\n    http.Serve(tcpLn, serveMux)\n  }\n\n')),(0,o.kt)("h1",{id:"successful-mesh-container-hot-upgrade-cases"},"Successful Mesh Container Hot Upgrade Cases"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/product/servicemesh"},"Alibaba Cloud Service Mesh")," (ASM) provides a fully managed service mesh platform compatible with open-source Istio service mesh from the community. Currently, ASM implements the Sidecar hot upgrade capability (Beta) in the data plane based on the hot upgrade capability of OpenKruise SidecarSet. Users can upgrade the data plane version of service mesh without affecting applications."),(0,o.kt)("p",null,"In addition to hot upgrades, ASM supports capabilities, such as configuration diagnosis, operation audit, log access, monitoring, and service registration, to improve the user experience of service mesh. You are welcome to try it out!"),(0,o.kt)("h1",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The hot upgrade of mesh containers in cloud-native has always been an urgent but thorny problem. The solution in this article is only one exploration of Alibaba Group, giving feedback to the community with hopes of encouraging better ideas. We also welcome everyone to participate in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"OpenKruise")," community. Together, we can build mature Kubernetes application management, delivery, and extension capabilities that can be applied to more large-scale, complex, and high-performance scenarios."))}u.isMDXComponent=!0},3669:function(e,t,n){t.Z=n.p+"assets/images/how_update_mesh-3a481d5c7fc703baaa0f61eeeab900f1.png"},1784:function(e,t,n){t.Z=n.p+"assets/images/inject_sidecar-95e9a533cc8e31c0568fdeb02631131a.png"},2658:function(e,t,n){t.Z=n.p+"assets/images/migration-d3c1e779066507e6aeb8c3b6aabb7411.png"},2804:function(e,t,n){t.Z=n.p+"assets/images/update_sidecar-29730728e5bdcaddd9b1d94b2f180bb5.png"}}]);