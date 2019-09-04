# Microservice app with kubernetes

## ActiveMQ Queue

### Ports

#### 8161: expose this to a browser using 30010

#### 61616: is used to send receive messages

#### Browse: localhost:30010

## Simulator service

No ports needed. Needs an environment variable
SPRING_PROFILES_ACTIVE - production-microservice

- kubectl apply -f workloads.yaml
- kubectl apply -f services.yaml

## Position Tracker

same environment variables as before
Use NodePort Service for testing purposes.
http://localhost:30020/vehicles/City%20Truck (case sensitive)


## API Gateway

same environment variables as before

## Frontend

Expose port 80 to outside world. same environment variables as before
localhost:30080