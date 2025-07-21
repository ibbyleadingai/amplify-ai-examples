import { defineBackend, defineStack } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import * as cdk from 'aws-cdk-lib';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
// 1. Define a single stack for all resources
const leadingaiStack = defineStack({
  name: 'leadingai-rag-assistant', // CloudFormation stack name
  prefix: 'leadingai', // Resource name prefix
});

// 2. Attach all resources to this stack
export const backend = defineBackend({
  auth: auth.attachStack(leadingaiStack),
  data: data.attachStack(leadingaiStack),
});

const KnowledgeBaseDataSource = 
  backend.data.resources.graphqlApi.addHttpDataSource(
    "KnowledgeBaseDataSource",
    `https://bedrock-agent-runtime.${cdk.Stack.of(backend.data).region}.amazonaws.com`,
    {
      authorizationConfig: {
        signingRegion: cdk.Stack.of(backend.data).region,
        signingServiceName: "bedrock",
      },
    },
  );

// Add logging to track when the policy is being applied
console.log('Adding policy to KnowledgeBaseDataSource');
KnowledgeBaseDataSource.grantPrincipal.addToPrincipalPolicy(
  new PolicyStatement({
    resources: [
      `arn:aws:bedrock:${cdk.Stack.of(backend.data).region}:${cdk.Stack.of(backend.data).account}:knowledge-base/DUQ6IG6S9K`
    ],
    actions: ["bedrock:Retrieve"],
  }),
);

console.log('Backend configuration complete');

