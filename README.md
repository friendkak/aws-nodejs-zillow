# Installation
`npm install`

# Run Locally
`serverless invoke local --function functionName`

# Security
You will need to decrypt secrets for this project to work

## Decrypt and encrypt secrets file in dev
```shell
serverless decrypt --stage dev --password 'your_secret_password'
serverless encrypt --stage dev --password 'your_secret_password'
```

## Decrypt and encrypt secrets file in prod
```shell
serverless decrypt --stage prod --password 'your_secret_password'
serverless encrypt --stage prod --password 'your_secret_password'
```

# Testing
We leverage serverless-mocha-plugin for testing
## Locally
```
npm test
```
or to customize the test params
```
sls invoke test [--stage stage] [--region region] [-f function1] [-f function2] [...]
```
## Remote
```
npm test:remote
```
# Deployment
Deploy to production
```
sls deploy -s prod
```
remove from production
```
sls remove -s prod
```
