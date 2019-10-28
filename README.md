<p align="center">
  <img title="Davy Jones" src="https://raw.githubusercontent.com/voutasaurus/locker/master/server/assets/locker.png">
</p>

## Locker

A better user experience for Kubernetes secrets.

## Project Status

Pre 0.0.0 (Aspirational). Please help me make this not suck.

See TADA list below for things that are done and need doing.

## Running the app

1. Run the backend and frontend together using docker compose.

```
$ docker-compose up
```

[NOTE: if you do not have permissions to list the namespaces in your
environment (e.g. shared cluster) then set the NAMESPACES variable in the
locker-backend service section of docker-compose.yml to a comma separated list
of all the namespaces that you have access to]

2. Browse to http://localhost:3000

3. (optional) the backend is accessible at http://localhost:3001

## TADA

- [x] Application can be run with docker-compose
- [x] Application uses local aws and kubernetes configuration (aws-iam-authenticator)
- [x] Backend calls kubernetes API
- [x] Backend lists clusters
- [x] Backend lists namespaces in a cluster
- [x] Backend lists secret objects in a namespace
- [x] Backend lists key value pairs in a secret object
- [x] Frontend lists clusters as a dropdown
- [ ] Frontend Cluster selection shows namespaces
- [ ] Frontend Namespaces selection shows secrets
- [ ] Frontend Secrets selection shows key value pairs
- [ ] Frontend Secret object can be exported to yaml (download)
- [ ] Backend can add a secret
- [ ] Backend can rename a secret
- [ ] Backend can delete a secret
- [ ] Backend can add a key value to a secret
- [ ] Backend can modify a key value in a secret
- [ ] Backend can delete a key in a secret
- [ ] Frontend can add a secret
- [ ] Frontend can rename a secret
- [ ] Frontend can delete a secret
- [ ] Frontend can add key value to a secret
- [ ] Frontend can modify a key value in a secret
- [ ] Frontend can delete a key in a secret
- [ ] Frontend key value view can hide and reveal the values (they're secret after all)
