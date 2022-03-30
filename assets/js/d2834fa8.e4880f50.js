"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2891],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?o.createElement(b,i(i({ref:n},d),{},{components:t})):o.createElement(b,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9433:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=t(3117),a=t(102),r=(t(7294),t(3905)),i=["components"],l={title:"BroadcastJob + Advanced CronJob Help You Maintain Kubernetes Nodes"},c=void 0,s={unversionedId:"best-practices/acronjob+broadcastjob",id:"version-v1.1/best-practices/acronjob+broadcastjob",title:"BroadcastJob + Advanced CronJob Help You Maintain Kubernetes Nodes",description:"Kubernetes node operation and maintenance is always a tedious work. For example, the available storage space in node is basically in a nearly monotonous decreasing trend in the native Kubernetes system. However, excessive disk pressure may lead to a series of problems, such as un-schedule of the nodes, and the eviction of pods, affecting the stability of the cluster.",source:"@site/versioned_docs/version-v1.1/best-practices/acronjob+broadcastjob.md",sourceDirName:"best-practices",slug:"/best-practices/acronjob+broadcastjob",permalink:"/docs/best-practices/acronjob+broadcastjob",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/acronjob+broadcastjob.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1648620235,formattedLastUpdatedAt:"3/30/2022",frontMatter:{title:"BroadcastJob + Advanced CronJob Help You Maintain Kubernetes Nodes"},sidebar:"docs",previous:{title:"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread",permalink:"/docs/best-practices/elastic-deployment"},next:{title:"Golang client",permalink:"/docs/developer-manuals/go-client"}},d={},u=[{value:"Environment",id:"environment",level:2},{value:"Advanced Cron Job Configuration",id:"advanced-cron-job-configuration",level:2},{value:"Build Image",id:"build-image",level:2},{value:"Script Sample",id:"script-sample",level:3},{value:"Dockerfile Sample",id:"dockerfile-sample",level:3},{value:"Results Show",id:"results-show",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kubernetes node operation and maintenance is always a tedious work. For example, the available storage space in node is basically in a nearly monotonous decreasing trend in the native Kubernetes system. However, excessive disk pressure may lead to a series of problems, such as un-schedule of the nodes, and the eviction of pods, affecting the stability of the cluster."),(0,r.kt)("p",null,"Kubernetes job is obviously very suitable for this kind of one-time temporary work, such as cleaning up disk, because unlike the agent process running in host,  Kubernetes job only needs to temporarily use some resources, and it will be automatically released the resources after the task is completed. But, Kubernetes native jobs have the following limitations in the scenarios of node operation and maintenance:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Its default scheduling rule is unsuitable. Multiple pods may be scheduled to the same node, causing the problem of repeated execution of jobs;"),(0,r.kt)("li",{parentName:"ol"},"It cannot automatically perceive the scale of cluster nodes. When a node is added/deleted to/from the cluster, the job configuration must be updated manually.")),(0,r.kt)("p",null,"Openkruise provides BroadcastJob and Advanced CronJob features to solve such problems. BroadcastJob allows users to schedule the pods in a way similar to DaemonSet. When a user apply a BroadcastJob, it will create pods for each worker node of the cluster by default, and these pods will be cleaned up automatically when the task is completed. Furthermore, Advanced CronJob can create the BroadcastJob periodically. This article will demonstrate how to use Advanced CronJob and BroadcastJob to periodically clean up useless images stored in Kubernetes nodes to help you understand these features."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"We deployed a ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind")," cluster on an ECS (host), and all kind nodes adopt containerd as container runtime. The kind cluster consists of three nodes, including one master node and two worker nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ k get node\nNAME                   STATUS   ROLES                  AGE   VERSION\ncontrol-plane   Ready    control-plane,master   42d   v1.21.1\nworker1         Ready    <none>                 42d   v1.21.1\nworker2         Ready    <none>                 42d   v1.21.1\n")),(0,r.kt)("p",null,"Before the demonstration, we should take a look at the disk pressure of ECS (host), to compare with the effect after demonstration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@kruise:~# df -h\nFilesystem      Size  Used Avail Use% Mounted on\nudev            7.7G     0  7.7G   0% /dev\ntmpfs           1.6G  1.4M  1.6G   1% /run\n/dev/vda1        79G   63G   13G  84% /\ntmpfs           7.7G     0  7.7G   0% /dev/shm\ntmpfs           5.0M     0  5.0M   0% /run/lock\ntmpfs           7.7G     0  7.7G   0% /sys/fs/cgroup\ntmpfs           1.6G     0  1.6G   0% /run/user/0\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/94e3ec1c3a45a43e4ffa34c654bc3639007eb2fb5d4e9724fed056c6bb8d119f/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/7718d5a17be239ade398f907f82acf2c90fb7752a90a667114a573c60757d23b/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/0f78036c619c03fb37ec8029e5718bb206472971169bb2711bee06af21228763/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/029e008a7c5b754e4246c8fc55bf189c83a0b8b1df50c2ecb67d1734095b935b/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/899a50ca07b4e2de08d627dbb1e6f1cc9e1eb0c048a71c4905854f31bf51f056/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/c72de0669810b5dcbf4b2726c0c32765fbbb1e4c21826f59533414fb474c826a/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/af8c22b65e7ae64f15f0132baed91550adfe81cd4e088e2bb84e01476619340a/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/454a7e90cb3c723dc6b22b0d54e60714700b4c0bcf947b29206d882c6a2c25fe/merged\n")),(0,r.kt)("p",null,"Also, Let's take a look at the images in the worker1 node. We can see that this node currently has 125 images:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@kruise:~# docker exec -it worker1 /bin/sh\n$ crictl images | wc -l\n125\n$ crictl images\nREPOSITORY                                TAG                  IMAGE ID          SIZE\ndocker.io/minchou/cleaner                 v1                   7e36ca8e9d40      68.6MB\ndocker.io/minchou/rollout                 v0.7.3               120dc8c670ef      57MB\ndocker.io/minchou/rollout                 v0.7.2               2f1f320cd94a      57MB\ndocker.io/minchou/rollout                 v0.7.1               c90679a2e4ff      57MB\ndocker.io/minchou/rollout                 v0.7.0               a81db48ec891      57MB\ndocker.io/minchou/rollout                 v0.6.2               af5ef616c30e      55.9MB\ndocker.io/minchou/rollout                 v0.6.1               71ba2e84e92e      55.9MB\ndocker.io/minchou/rollout                 v0.6.0               3fe9eb8f0144      55.9MB\n... .... ... ....\n")),(0,r.kt)("h2",{id:"advanced-cron-job-configuration"},"Advanced Cron Job Configuration"),(0,r.kt)("p",null,"job.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nmetadata:\n  name: acj-test\nspec:\n  schedule: "*/5 * * * *"\n  startingDeadlineSeconds: 60\n  template:\n    broadcastJobTemplate:\n      spec:\n        template:\n          spec:\n            containers:\n              - name: node-cleaner\n                image: minchou/cleaner:v1\n                imagePullPolicy: IfNotPresent\n                env:\n                # crictl use this env to find conatiner runtime socket.\n                # this value should consistent with the path of mounted \n                # container runtime socket file.\n                - name: CONTAINER_RUNTIME_ENDPOINT\n                  value: unix:///var/run/containerd/containerd.sock\n                volumeMounts:\n                  # mount container runtime socket file to this path.\n                - name: containerd\n                  mountPath: /var/run/containerd\n            volumes:\n            - name: containerd\n              hostPath:\n                path: /var/run/containerd\n            restartPolicy: OnFailure\n        completionPolicy:\n          type: Always\n          ttlSecondsAfterFinished: 90\n        failurePolicy:\n          type: Continue\n          restartLimit: 3\n')),(0,r.kt)("p",null,"Because we need to get the containerd.socket to execute image cleaning commands such as ",(0,r.kt)("inlineCode",{parentName:"p"},"crictl rmi ")," in the pod. Therefore, the containerd socket file of host must be mounted to the pod in the way of ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPath"),". If other types of containers are used on your host, you also need to mount them to the pods in this way."),(0,r.kt)("p",null,"Similarly, if your application log is also written directly under the host path, you can also mount it  in this way and clean it together."),(0,r.kt)("p",null,"In order to make it easier for us to observe the operation of Advanced CronJob, we define its schedule period 5 minutes, that is, the ",(0,r.kt)("inlineCode",{parentName:"p"},"schedule")," field is defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"* / 5 * * *"),". In fact, in the real scene, we can clean it every few days or weeks instead of 5 minutes. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/robfig/cron"},"cron expression")," to customize the schedule."),(0,r.kt)("h2",{id:"build-image"},"Build Image"),(0,r.kt)("p",null,"File directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ tree\n.\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 cleaner.sh\n\u2514\u2500\u2500 crictl-v1.23.0-linux-amd64.tar.gz\n")),(0,r.kt)("p",null,"In order to build the image faster, we downloaded ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cri-tools/releases"},"crictl-v1.23.0-linux-amd64.tar.gz")," and put it in the same directory as ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,r.kt)("h3",{id:"script-sample"},"Script Sample"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: if it is used in the production, please strictly verify your script!")),(0,r.kt)("p",null,"cleaner.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\n\necho "container runtime endpoint:" $CONTAINER_RUNTIME_ENDPOINT\n\n# clean up docker resources if have\ncrictl ps > /dev/null\nif [ $? -eq 0 ]\nthen\n    # Implement your customized script here, such as:\n    \n    # get the images that is used, these images cannot be deleted\n    crictl ps | awk \'{if(NR>1){print $2}}\' > used-images.txt\n\n    # @@ You can choose the images you want to clean according to your requirement @@\n    # **      Here, we will clean all images from my docker.io/minchou repo!       **\n    crictl images | grep -i "docker.io/minchou"| awk \'{print $3}\' > target-images.txt\n\n    # filter out the used images and delete thoese unused images\n    sort target-images.txt used-images.txt used-images.txt| uniq -u | xargs -r crictl rmi \nelse\n    echo "crictl does not exist"\nfi\n\nexit 0\n')),(0,r.kt)("h3",{id:"dockerfile-sample"},"Dockerfile Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'FROM alpine\n\nCOPY crictl-v1.23.0-linux-amd64.tar.gz ./\nRUN  tar zxvf crictl-v1.23.0-linux-amd64.tar.gz -C /bin && rm crictl-v1.23.0-linux-amd64.tar.gz\n\nCOPY cleaner.sh /bin/\nRUN chmod +x /bin/cleaner.sh \n\nCMD ["bash", "/bin/cleaner.sh"]\n')),(0,r.kt)("h2",{id:"results-show"},"Results Show"),(0,r.kt)("p",null,"Build the image and upload it to your own image repo. Here, take my own docker hub repo as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker build . -t minchou/cleaner:v1 && docker push minchou/cleaner:v1\n")),(0,r.kt)("p",null,"Then apply the Advanced CronJob configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl apply -f job.yaml\nadvancedcronjob.apps.kruise.io/acj-test created\n")),(0,r.kt)("p",null,"We can see that the next execution time is 2022-03-24 08:50:00 +0000 UTC in kruise log\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl -n kruise-system logs kruise-controller-manager-745594ff76-9nwwx --tail 1000 | grep "no upcoming scheduled times, sleeping until next now"\nI0324 08:45:08.131928       1 advancedcronjob_broadcastjob_controller.go:290] no upcoming scheduled times, sleeping until next now 2022-03-24 08:45:08.131896998 +0000 UTC m=+535162.957711312 and next run 2022-03-24 08:50:00 +0000 UTC default/acj-test\n')),(0,r.kt)("p",null,"When the time is up, the advanced cronjob applied a BroadcastJob, and let's take a look at the log of the pod that is created by BroadcastJob for worker1 node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl logs acj-test-1648111800-8t8bx\ncontainer runtime endpoint: unix:///var/run/containerd/containerd.sock\nDeleted: docker.io/minchou/rollout:v0.2.7\nDeleted: docker.io/minchou/rollout:v0.4.1\nDeleted: docker.io/minchou/rollout:v0.7.3\nDeleted: docker.io/minchou/rollout:br-5\nDeleted: docker.io/minchou/rollout:v0.4.2\nDeleted: docker.io/minchou/kruiserollout:br-f\nDeleted: docker.io/minchou/rollout:v0.7.2\nDeleted: docker.io/minchou/rollout:v0.4.0\nDeleted: docker.io/minchou/rollout:v0.3.8\nDeleted: docker.io/minchou/rollout:v0.3.0\nDeleted: docker.io/minchou/kruiserollout:br-2\nDeleted: docker.io/minchou/rollout:br-3\n... ... ... ...\n")),(0,r.kt)("p",null,"we can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"cleaner.sh")," script works, the target image has been deleted. Then, let's take a look at the disk pressure of ECS (host):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@kruise011162126109:~# df -h\nFilesystem      Size  Used Avail Use% Mounted on\nudev            7.7G     0  7.7G   0% /dev\ntmpfs           1.6G  1.4M  1.6G   1% /run\n/dev/vda1        79G   44G   32G  59% /\ntmpfs           7.7G     0  7.7G   0% /dev/shm\ntmpfs           5.0M     0  5.0M   0% /run/lock\ntmpfs           7.7G     0  7.7G   0% /sys/fs/cgroup\ntmpfs           1.6G     0  1.6G   0% /run/user/0\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/94e3ec1c3a45a43e4ffa34c654bc3639007eb2fb5d4e9724fed056c6bb8d119f/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/7718d5a17be239ade398f907f82acf2c90fb7752a90a667114a573c60757d23b/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/0f78036c619c03fb37ec8029e5718bb206472971169bb2711bee06af21228763/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/029e008a7c5b754e4246c8fc55bf189c83a0b8b1df50c2ecb67d1734095b935b/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/899a50ca07b4e2de08d627dbb1e6f1cc9e1eb0c048a71c4905854f31bf51f056/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/c72de0669810b5dcbf4b2726c0c32765fbbb1e4c21826f59533414fb474c826a/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/af8c22b65e7ae64f15f0132baed91550adfe81cd4e088e2bb84e01476619340a/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/454a7e90cb3c723dc6b22b0d54e60714700b4c0bcf947b29206d882c6a2c25fe/merged\n")),(0,r.kt)("p",null,"It can be seen that the disk pressure has decreased from 84% to 59%, which is very significant. Finally, we also can find out the next execution time from kruise's log, the next execution is really 5 minutes later (2022-03-24 08:55:00 + 0000 UTC):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl -n kruise-system logs kruise-controller-manager-745594ff76-9nwwx --tail 1000 | grep "no upcoming scheduled times, sleeping until next now"\nI0324 08:50:02.226008       1 advancedcronjob_broadcastjob_controller.go:290] no upcoming scheduled times, sleeping until next now 2022-03-24 08:50:02.225973654 +0000 UTC m=+535457.051787976 and next run 2022-03-24 08:55:00 +0000 UTC default/acj-test\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"From the above demonstration, we can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced Cronjob + BroadcastJob + Customized Script")," can help you clean up useless images of nodes periodically. Of course, this is just a simple example of node operation and maintenance. If you encounter the similar problems, I hope this article can help and inspire you."))}m.isMDXComponent=!0}}]);