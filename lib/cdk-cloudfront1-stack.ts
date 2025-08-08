import * as cdk from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { join } from 'path';
import path = require('path');
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkCloudfront1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "api")

    const lambda = new NodejsFunction(this,"lambda1",{
      entry: join(__dirname, 'handlers/basic/index.ts'),
      timeout: cdk.Duration.seconds(120),
    })
    
    const lambdaIntegration = new LambdaIntegration(lambda, {
       
    })

    const resource = api.root.addResource("basicGet");
    resource.addMethod("GET", lambdaIntegration)
    resource.addMethod("HEAD", lambdaIntegration)

    const bucket = new Bucket(this, "S3" ,{
      removalPolicy: cdk.RemovalPolicy.DESTROY     
    })

    new BucketDeployment(this, "BucketDeployment", {
      sources: [Source.asset(join(__dirname, 'client'))],
      destinationBucket: bucket
    });

  }
}
