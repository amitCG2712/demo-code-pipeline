#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { DemocicdpipelineStack } from '../lib/democicdpipeline-stack';

const app = new cdk.App();
new DemocicdpipelineStack(app, 'DemocicdpipelineStack', {
  env: { account: '294250598557', region: 'us-east-1' }
});
