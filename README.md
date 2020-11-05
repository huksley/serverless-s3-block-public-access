# Block S3 public access to bucket

Disallows creation of objects in the deployment bucket which can have public access.

### Usage

Add to serverless.yml:

```
plugins:
  - serverless-s3-block-public-access
```

