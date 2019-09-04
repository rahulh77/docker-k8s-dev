# Steps

``` bash
kubectl get all
kubectl version
kubectl cluster-info
kubectl apply -f first-pod.yaml
kubectl -it exec webapp sh
kubectl logs <podname> # logs are only available on pods.
```

Pods are not visible outside the cluster. Need a service to interact.

## Types of services

ClusterIp: Long live internal private service, that is used by resources internally to cluster but cannot be accessed from outside. May be right choice of microservices, Not the right choice for webapp

NodePort: Exposes a port on a node (Cluster) to outside world. should be greater than 30,000. If for some reason we need ports like port 80, we should use an ingress service.

LoadBalancer: For cloud, won't work in local. they can expose any port number unlike nodeport

## 
In production, prefer to use deployments or replicasets as pods can die.
Replicaset makes sure number of instances running at a given time. i.e. if a pod dies and a replicaset is 1, replicaset makes sure to spawn up new pod automatically.

Replicaset: when one pod crashes, there will be some downtime until the new pod is up and running. so have replicas more than 1 with service.

Deletion of rs will terminate corresponding pods.

Deployments - do rolling updates without having to fiddle around with labels.

Namespaces: Partition of resources into separate areas. 
Service Discovery: find the ip address of a service by its name.