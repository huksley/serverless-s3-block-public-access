# Block S3 public access to bucket

Disallows creation of objects in the deployment bucket which can have public access.

NOTE: Deprecated, see https://github.com/neverendingqs/serverless-default-aws-resource-properties/issues/17#issuecomment-908533818

### Usage

Install module

```
npm install -D serverless-s3-block-public-access
```

Add to serverless.yml:

```
plugins:
  - serverless-s3-block-public-access
```

Deploy normally.
