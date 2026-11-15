import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const message = await client.messages.create({
  model: 'claude-haiku-5-5',
  max_tokens: 256,
  messages: [
    {
      role: 'user',
      content: 'Hello, world',
    },
  ],
});

message.content.forEach((block) => {
  if (block.type === 'text') {
    console.log(block.text);
  }
});

console.log(message.usage);
