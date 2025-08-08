#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCloudfront1Stack } from '../lib/cdk-cloudfront1-stack';

const app = new cdk.App();
new CdkCloudfront1Stack(app, 'CdkCloudfront1Stack', {
  env: { account: '339713054130', region: 'ap-south-1' },
});