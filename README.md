# Nuxt.js on AWS Lambda

## Versions

- Nuxt.js: 2.10.1
- Node.js: 10.16.3
- Lambda runtime: Node.js 10.x 
  - 10.16.3(as of 2019-10-15)

## Commands

### Deploy

#### Build & Deploy for API Gateway

Endpoint: API Gateway  
Deploy to: Lambda

```
$ yarn deploy:api_gw
```

#### Build & Deploy for CloudFront

Endpoint: CloudFront  
Deploy to: Lambda, S3

```
$ yarn deploy
```

⚠️CloudFront and S3 are not created. Please create from the console.

### Remove Lambda 

```
$ yarn delete
```
