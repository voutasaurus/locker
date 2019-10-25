<p align="center">
  <img title="Davy Jones" src="https://raw.githubusercontent.com/voutasaurus/locker/master/assets/locker.png">
</p>

## Locker

A better user experience for Kubernetes secrets.

## Project Status

Pre 0.0.0 (Aspirational). Please help me make this not suck.

## Installation

```bash
$ npm install
```

## Running the app

[NOTE: if you do not have permissions to list the namespaces in your
environment (e.g. shared cluster) then set the NAMESPACES variable to a comma
separated list of all the namespaces that you have access to]

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Browse to http://localhost:3000

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
