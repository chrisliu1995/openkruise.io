"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4147],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8519:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],s={title:"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread"},l=void 0,p={unversionedId:"best-practices/elastic-deployment",id:"best-practices/elastic-deployment",title:"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread",description:"Since 0.10.0 version\uff0cOpenKruise have proposed a multi-domain CRD with by-pass architecture, namely, WorkloadSpread. WorkloadSpread allows a Workload to distribute its Pods to different node, zone, even different clusters and providers, as well as to apply differential configurations in different domains.This CRD can give Workloads the ability of multi-domain scatter, elastic schedule and fine management in a non-intrusive manner.",source:"@site/docs/best-practices/elastic-deployment.md",sourceDirName:"best-practices",slug:"/best-practices/elastic-deployment",permalink:"/docs/next/best-practices/elastic-deployment",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/elastic-deployment.md",tags:[],version:"current",lastUpdatedBy:"Wei-Xiang Sun",lastUpdatedAt:1641888756,formattedLastUpdatedAt:"1/11/2022",frontMatter:{title:"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread"},sidebar:"docs",previous:{title:"CloneSet lifecycle -- Insert Customized Logic Into Pod Lifecycle",permalink:"/docs/next/best-practices/cloneset-lifecycle"},next:{title:"BroadcastJob + Advanced CronJob Help You Maintain Kubernetes Nodes",permalink:"/docs/next/best-practices/acronjob+broadcastjob"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Goals",id:"goals",level:3},{value:"Dependency Installation",id:"dependency-installation",level:2},{value:"Installing OpenKruise",id:"installing-openkruise",level:3},{value:"Installing KEDA",id:"installing-keda",level:3},{value:"Installing Ingress-Nginx-Controller",id:"installing-ingress-nginx-controller",level:3},{value:"Installing Nginx-Prometheus-Exporter",id:"installing-nginx-prometheus-exporter",level:3},{value:"Installing Prometheus-Operator",id:"installing-prometheus-operator",level:3},{value:"Correctness Check",id:"correctness-check",level:3},{value:"Cheking whether Nginx Status API is usable",id:"cheking-whether-nginx-status-api-is-usable",level:4},{value:"Checking Whether Prometheus is usable",id:"checking-whether-prometheus-is-usable",level:4},{value:"Deployment",id:"deployment",level:2},{value:"Deploying Application",id:"deploying-application",level:3},{value:"Deploying WorkloadSpread",id:"deploying-workloadspread",level:3},{value:"Deploying ScaleObject",id:"deploying-scaleobject",level:3},{value:"Demo Show",id:"demo-show",level:2}],d={toc:u};function h(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since 0.10.0 version\uff0cOpenKruise have proposed a multi-domain CRD with by-pass architecture, namely, WorkloadSpread. WorkloadSpread allows a Workload to distribute its Pods to different node, zone, even different clusters and providers, as well as to apply differential configurations in different domains.This CRD can give Workloads the ability of multi-domain scatter, elastic schedule and fine management in a non-intrusive manner."),(0,o.kt)("p",null,"In this page, we will take a simple web application as an example to help users build an automatic extreme elastic scheduling solution, combining with WorkloadSpread, KEDA, Prometheus and Alibaba Cloud Elastic Instances (ECI)."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The architecture of this solution is as follows:\n",(0,o.kt)("img",{alt:"arch",src:t(3848).Z,width:"696",height:"662"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Special Note:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the solution, the HPA configuration is managed by KEDA. KEDA is an enhanced autoscaling component based on HPA. Compared with the native HPA, KEDA has much richer user-defined metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We take a trick that the metrics of Nginx instead of Web Pod are collected, because we want to reuse the open-source Nginx-Prometheus-Exporter to simplify this solution. It's easier to use this exporter to explore the number of https links and other metrics. Most importantly, the traffic entering the Web Pod must go through the Niginx Ingress. Therefore, we are going to directly use the metrics of Nginx, and combine KEDA to implement the automatic scale feature.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At least version 1.21 is required by WorkloadSpread to manage Deployment, but ACK Kubernetes clusters currently supports up to version 1.20. Therefore, we have to take CloneSet as an example in this architecture."))),(0,o.kt)("h3",{id:"goals"},"Goals"),(0,o.kt)("p",null,"Our goal is to fully automate the following actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When the traffic exceeded the threshold within a certain time window (the ",(0,o.kt)("strong",{parentName:"p"},"traffic")," here is defined as the smooth number of http connections per second, which can be defined according to actual needs), it will scale up replicas automatically;"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When scaling up, the higher priority will be given to the fixed resource pool to schedule pod. When the fixed resource pool is insufficient or reached the ",(0,o.kt)("inlineCode",{parentName:"li"},"MaxReplicas")," limit, the Pods will be automatically scheduled to the elastic resource pool;"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When the traffic is lower than the threshold, it will scale down replicas automatically;"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When scaling down, the Pods in the elastic resource pool will be deleted first.")))),(0,o.kt)("h2",{id:"dependency-installation"},"Dependency Installation"),(0,o.kt)("p",null,"We use a ACK Kubernetes Cluster with 3 ECS nodes and 1 Virtual-Kubelet (VK) node. ECS nodes correspond to the fixed resource pool, and VK node corresponds to the elastic resource pool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ k get node\nNAME                         STATUS   ROLES    AGE    VERSION\nus-west-1.192.168.0.47       Ready    <none>   153d   v1.20.11-aliyun.1\nus-west-1.192.168.0.48       Ready    <none>   153d   v1.20.11-aliyun.1\nus-west-1.192.168.0.49       Ready    <none>   153d   v1.20.11-aliyun.1\nvirtual-kubelet-us-west-1a   Ready    agent    19d    v1.20.11-aliyun.1 \n")),(0,o.kt)("h3",{id:"installing-openkruise"},"Installing OpenKruise"),(0,o.kt)("p",null,"More details can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/installation"},"officail installation document"),". We recommend installing the latest version OpenKruise."),(0,o.kt)("h3",{id:"installing-keda"},"Installing KEDA"),(0,o.kt)("p",null,"KEDA is a Kubernetes-based event driven autoscaling component. It provides event driven scale for any container running in Kubernetes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm repo add kedacore https://kedacore.github.io/charts\n\n$ helm repo update\n\n$ kubectl create namespace keda\n\n$ helm install keda kedacore/keda --namespace keda\n")),(0,o.kt)("h3",{id:"installing-ingress-nginx-controller"},"Installing Ingress-Nginx-Controller"),(0,o.kt)("p",null,"Firstly\uff0cCreating namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create ns ingress-nginx\n")),(0,o.kt)("p",null,"Because this exporter needs to access the Nginx status API to get the number of http connections information, it is necessary to apply a ConfigMap related to the Nginx configuration before the installation, so as to expose the Nginx status API for the consumption by Nginx-Prometheus-Exporter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  allow-snippet-annotations: "true"\n  http-snippet: |\n    server {\n      listen 8080;\n      server_name _ ;\n      location /stub_status {\n        stub_status on;\n      }\n\n      location / {\n        return 404;\n      }\n    }\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: ingress-nginx\n    meta.helm.sh/release-namespace: ingress-nginx\n  labels:\n    app.kubernetes.io/component: controller\n    app.kubernetes.io/instance: ingress-nginx\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: ingress-nginx\n    app.kubernetes.io/version: 1.1.0\n    helm.sh/chart: ingress-nginx-4.0.13\n  name: ingress-nginx-controller\n  namespace: ingress-nginx\n')),(0,o.kt)("p",null,"Prepare a ",(0,o.kt)("inlineCode",{parentName:"p"},"values Yaml")," file to expose port 8080 when applying Ingress-Nginx controller deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# values.yaml\ncontroller:\n  containerPort:\n    http: 80\n    https: 443\n    status: 8080\n")),(0,o.kt)("p",null,"installing Ingress-Nginx controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace ingress-nginx --values values.yaml\n")),(0,o.kt)("p",null,"80 and 443 ports provide services for external users via LoadBalancer type service, whereas the 8080 port is only used by internal exporter. Because the exporter and Prometheus can be deployed in the cluster, and they only provides services internally, therefore, the ClusterIP type service should be used to connect to the Nginx 8080 port, making it exposed only within the cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Service\napiVersion: v1\nmetadata:\n  name: ingress-nginx-controller-8080\n  namespace: ingress-nginx\nspec:\n  selector:\n    app.kubernetes.io/component: controller\n    app.kubernetes.io/instance: ingress-nginx\n    app.kubernetes.io/name: ingress-nginx\n  type:  ClusterIP\n  ports:\n  - name: myapp\n    port:  8080\n    targetPort: status\n")),(0,o.kt)("h3",{id:"installing-nginx-prometheus-exporter"},"Installing Nginx-Prometheus-Exporter"),(0,o.kt)("p",null,"The status data exposed by Nginx does not follow the standard of Prometheus, so an exporter component is required for the data collection and format conversion. Here, we use Nginx-Prometheus-Exporter, which is  provided by nginx community:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ingress-nginx-exporter\n  namespace: ingress-nginx\n  labels:\n    app: ingress-nginx-exporter\nspec:\n  selector:\n    matchLabels:\n      app: ingress-nginx-exporter\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 1\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: ingress-nginx-exporter\n    spec:\n      containers:\n      - image: nginx/nginx-prometheus-exporter:0.10\n        imagePullPolicy: IfNotPresent\n        args:\n        - -nginx.scrape-uri=http://ingress-nginx-controller-8080.ingress-nginx.svc.cluster.local:8080/stub_status\n        name: main\n        ports:\n        - name: http\n          containerPort: 9113\n          protocol: TCP\n        resources:\n          limits:\n            cpu: "200m"\n            memory: "256Mi"\n')),(0,o.kt)("h3",{id:"installing-prometheus-operator"},"Installing Prometheus-Operator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\n\n$ helm repo update\n\n$ helm install [RELEASE]  prometheus-community/kube-prometheus-stack --namespace prometheus --create-namespace\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"[RELEASE]")," used by us in the above command is ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-prometheus-stack-1640678515"),". This string determines some subsequent configurations. If it changed, the configurations of subsequent yaml files will also need to be changed."),(0,o.kt)("p",null,"After the installation of Prometheus, the following ServiceMonitor should be applied to monitor the status exposed by Ingress-Nginx:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  labels:\n    release: kube-prometheus-stack-1640678515\n  name: ingress-nginx-monitor\n  namespace: ingress-nginx\nspec:\n  selector:\n    matchLabels:\n      app: ingress-nginx-exporter\n  endpoints:\n  - interval: 5s \n    port: exporter\n")),(0,o.kt)("h3",{id:"correctness-check"},"Correctness Check"),(0,o.kt)("p",null,"After the above dependency installation and configuration is completed, we need to check the correctness of them first."),(0,o.kt)("h4",{id:"cheking-whether-nginx-status-api-is-usable"},"Cheking whether Nginx Status API is usable"),(0,o.kt)("p",null,"Firstly, we apply a simple pod with ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: centos\n  namespace: ingress-nginx\nspec:\n  containers:\n  - name: main\n    image: centos:latest\n    command: ["/bin/sh", "-c", "sleep 100000000"]\n')),(0,o.kt)("p",null,"Then, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl exec")," command into this main container, and try to rquest the nginx status API by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ k exec busybox -n ingress-nginx -it -- /bin/sh\n\nsh-4.4# curl -L http://ingress-nginx-controller-8080.ingress-nginx.svc.cluster.local:8080/stub_status\n\nActive connections: 6\nserver accepts handled requests\n 12092 12092 23215\nReading: 0 Writing: 1 Waiting: 5\n")),(0,o.kt)("p",null,"If similar content is output after the above curl command is executed, it indicates that this API is usable."),(0,o.kt)("h4",{id:"checking-whether-prometheus-is-usable"},"Checking Whether Prometheus is usable"),(0,o.kt)("p",null,"When we installed Prometheus operator using Helm, we also installed Grafana, a visual tool. Therefore, we can login to Grafana to check whether the metrics of Nginx we want have been collected."),(0,o.kt)("p",null,"Because Grafana is also deployed in the ACK cluster, ",(0,o.kt)("strong",{parentName:"p"},"if you want to use the local browser to access Grafana, you need to change the Grafana Service Type to ",(0,o.kt)("inlineCode",{parentName:"strong"},"LoadBalancer")),", so that ACK will automatically assign an external IP to Grafana. With this external IP, you can access Grafana using your local browser. The default user and password of Grafana can be parsed from the corresponding Secret:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"user: admin\npassword: prom-operator\n")),(0,o.kt)("p",null,"After logging into Grafana, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Explore")," in the navigation bar on the left, and you can see the list of Metrics collected and stored by Prometheus if you click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Metrics Browser"),". If the Metrics we pay attention to exist, it means that the configuration is correct."),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"After the above environment is ready and everything is confirmed to be usable, then you can deploy the hello-web applications and elastic components."),(0,o.kt)("h3",{id:"deploying-application"},"Deploying Application"),(0,o.kt)("p",null,"We\u2019re going to deploy the hello-web application. If you access this application, it will return a simple HTML page with similar contents as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello Web\nCurrent Backend Server Info\nServer Name: hello-web-57b767f456-bnw24\nServer IP: 47.89.252.93\nServer Port: 80\nCurrent Client Request Info\nRequest Time Float: 1640766227.537\nClient IP: 10.64.0.65\nClient Port: 52230\nUser Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36\nRequest Method: GET\nThank you for using PHP.\nRequest URI: /\n")),(0,o.kt)("p",null,"Deploying Application using CloneSet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  name: hello-web\n  namespace: ingress-nginx\n  labels:\n    app: hello-web\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-web\n  template:\n    metadata:\n      labels:\n        app: hello-web\n    spec:\n      containers:\n      - name: hello-web\n        image: zhangsean/hello-web\n        ports:\n        - containerPort: 80\n        resources:\n          requests:\n            cpu: "1"\n            memory: "256Mi"\n          limits:\n            cpu: "2"\n            memory: "512Mi"\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: hello-web\n  namespace: ingress-nginx\nspec:\n  type: ClusterIP\n  selector:\n    app: hello-web\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 80\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-web\n  namespace: ingress-nginx\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: hello-web\n            port:\n              number: 80\n  ingressClassName: nginx\n')),(0,o.kt)("h3",{id:"deploying-workloadspread"},"Deploying WorkloadSpread"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: WorkloadSpread\nmetadata:\n  name: workloadspread-sample\n  namespace: ingress-nginx\nspec:\n  targetRef:\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: CloneSet\n    name: ingress-nginx-controller\n  scheduleStrategy:\n    type: Adaptive\n    adaptive:\n      rescheduleCriticalSeconds: 2\n  subsets:\n  - name: fixed-resource-pool\n    requiredNodeSelectorTerm:\n      matchExpressions:\n        - key: type\n          operator: NotIn\n          values:\n          - virtual-kubelet\n    patch:\n      metadata:\n        labels:\n          resource-pool: fixed\n  - name: elastic-resource-pool\n    requiredNodeSelectorTerm:\n      matchExpressions:\n        - key: type\n          operator: In\n          values:\n          - virtual-kubelet\n    tolerations:\n    - effect: NoSchedule\n      key: virtual-kubelet.io/provider\n      operator: Exists\n    patch:\n      metadata:\n        labels:\n          resource-pool: elastic\n")),(0,o.kt)("p",null,"The above WorkloadSpread configuration contains two subsets, which correspond fixed resource pool and elastic resource pool. We expect the CloneSet named hello-web to schedule its Pods to the fixed resource pool preferentially, and then to the elastic resource pool if the resource pool is unschedulable."),(0,o.kt)("p",null,"When APIServer receives a corresponding pod creation request, it will call kruise Webhook to inject the scheduling rules of the WorkloadSpread. The injection strategy is ",(0,o.kt)("inlineCode",{parentName:"p"},"append")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"replace"),". For example, if Pod itself had  'requiredNodeSelectorterm' or 'Tolerations', WorkloadSpread will append its scheduling rules to the end of  'requiredNodeSelectorterm' or 'Tolerations' of the Pod."),(0,o.kt)("p",null,"Therefore, we suggest:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Write the  ",(0,o.kt)("strong",{parentName:"p"},"common")," and ",(0,o.kt)("strong",{parentName:"p"},"immutable")," scheduling rules to workload.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Write the ",(0,o.kt)("strong",{parentName:"p"},"customized")," scheduling rules to the WorkloadSpread subset."))),(0,o.kt)("h3",{id:"deploying-scaleobject"},"Deploying ScaleObject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: ingress-nginx-scaledobject\n  namespace: ingress-nginx\nspec:\n  maxReplicaCount: 10\n  minReplicaCount: 1\n  pollingInterval: 10\n  cooldownPeriod:  2\n  advanced:\n    horizontalPodAutoscalerConfig:\n      behavior:\n        scaleDown:\n          stabilizationWindowSeconds: 10\n  scaleTargetRef:\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: CloneSet\n    name: hello-web\n  triggers:\n  - type: prometheus\n    metadata:\n      serverAddress: http://kube-prometheus-stack-1640-prometheus.prometheus:9090/\n      metricName: nginx_http_requests_total \n      query: sum(rate(nginx_http_requests_total{job=\"ingress-nginx-exporter\"}[12s]))\n      threshold: '100'\n")),(0,o.kt)("h2",{id:"demo-show"},"Demo Show"),(0,o.kt)("p",null,"Firstly, make sure that all the configurations have been applied:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"result-show-0",src:t(4997).Z,width:"720",height:"450"})),(0,o.kt)("p",null,"Then, use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/link1st/go-stress-testing"},"go-stress-testing")," to do pressure test for hello-web application."),(0,o.kt)("p",null,"When the first traffic peak comes\uff0cyou can see the Workload is scaling up, and the newly-created pods are scheduled to the fixed resource pool first:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"result-show-1",src:t(8391).Z,width:"720",height:"450"})),(0,o.kt)("p",null,"When the second traffic peak comes (higher), the fixed resource pool is insufficient due to the lack of resource,  the Workload is scaling up to the elastic resource pool:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"result-show-2",src:t(3327).Z,width:"720",height:"450"})),(0,o.kt)("p",null,"When the traffic peak gone, the Workload is scaling down, and the pods in the elastic resource pool are deleted firstly:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"result-show-3",src:t(4099).Z,width:"720",height:"450"})))}h.isMDXComponent=!0},3848:function(e,n,t){n.Z=t.p+"assets/images/elasticd-deployment-arch-4226f0f7969bfd1761a6a291812abfd8.jpg"},4997:function(e,n,t){n.Z=t.p+"assets/images/elasticd-deployment-show-0-db2511481b9915be5c021141de80952d.gif"},8391:function(e,n,t){n.Z=t.p+"assets/images/elasticd-deployment-show-1-28efe334596ab3b8cd920652bfaaf443.gif"},3327:function(e,n,t){n.Z=t.p+"assets/images/elasticd-deployment-show-2-2422476e73ec3a34da0d9a24baa605cb.gif"},4099:function(e,n,t){n.Z=t.p+"assets/images/elasticd-deployment-show-3-5d95b9304548b48ddb66d73d2d03a94c.gif"}}]);