import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import {CodePipeline, CodePipelineSource, ShellStep} from 'aws-cdk-lib/pipelines';

export class DemocicdpipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DemocicdpipelineQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    //AWS CI-CD Pipeline
    const demoCiCdPipeline = new CodePipeline(this, 'demoPipeline', {
      pipelineName: 'DemoCICDPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('amitCG2712/demo-code-pipeline', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    }); 
  }
}
