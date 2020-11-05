"use strict";

class ServerlessExistingLayer {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.commands = {
      deploy: {
        lifecycleEvents: ["resources", "functions"]
      }
    };

    const handler = this.beforeDeployFunctions.bind(this);

    this.hooks = {
      "after:aws:package:finalize:mergeCustomProviderResources": handler
    };
  }

  beforeDeployFunctions() {
    const aws = this.serverless.service.provider;
    const template = aws.compiledCloudFormationTemplate;
    
    const block = {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true
      }
    }

    template.Resources.ServerlessDeploymentBucket.Properties = {
      ...template.Resources.ServerlessDeploymentBucket.Properties,
      ...block
    }
  }
}

module.exports = ServerlessExistingLayer;
