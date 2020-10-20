## Session 2: Kubernetes Demo

1. Build the images
```
docker image build -t muhairwe/fe:prod ./fe
docker image build -t muhairwe/wapi:prod ./weather_api
```

2. Push to dockerhub
```
docker image push muhairwe/fe:prod
docker image push muhairwe/wapi:prod
```

3. Create secrets for the environment variables `kubectl apply -f secret.yaml`
```
kubectl create secret generic wapi-env \
--from-literal=api_key=<OPEN WEATHER API KEY> \
--from-literal=secret_key_base=<SECRET KEY BASE>
```
4. Deploy backend only `kubectl apply -f deploy-backend.yaml`
5. See it work with port forwarding. `kubectl port-forward <pod> 4000:4000`
6. Deploy backend service `kubectl apply -f backend-service.yaml`
7. Deploy frontend -> `kubectl apply -f fe-deployment.yaml`
8. See if they can talk to one another. `kubectl apply -f fe-service.yaml`
```
kubectl expose deployment fe-deployment --type=LoadBalancer --name wapi-service
```
