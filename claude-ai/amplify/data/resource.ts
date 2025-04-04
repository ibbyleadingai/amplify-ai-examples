import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  knowledgeBase: a
    .query()
    .arguments({ input: a.string() })
    .handler(
      a.handler.custom({
        dataSource: "KnowledgeBaseDataSource",
        entry: "./resolvers/kbResolver.js",
      }),
    )
    .returns(a.string())
    .authorization((allow) => allow.authenticated()),

  chat: a.conversation({
    aiModel: a.ai.model("Claude 3 Haiku"),
    systemPrompt: "You are a helpful assistant.",
    tools: [
      a.ai.dataTool({
        name: 'searchDocumentation',
        description: 'Performs a similarity search over the documentation for ...',
        query: a.ref('knowledgeBase'),
      }),
    ]
  })
});

export const data = defineData({
  schema,
});
