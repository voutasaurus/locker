<p align="center">
![Davy Jones](https://raw.githubusercontent.com/voutasaurus/locker/master/assets/locker.png)
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

Set the NAMESPACE variable to point to specific kubernetes namespace (default is default).

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
