// Fine-tuning models
// Models	Training per compute hour	Hosting per hour	Input Usage per 1,000 tokens	Output Usage per 1,000 tokens
// GPT-3.5-Turbo (4K)	$45	$3	$0.0015	$0.002
// GPT-3.5-Turbo (16K)	$68	$3	$0.003	$0.004
import { PlatformInterface } from '@/data/platform';

export const price_azure: PlatformInterface = {
  name: 'Azure',
  price_unit: 'USD',
  price_unit_symbol: '$',
  url: 'https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/',
  models: [
    {
      model: 'GPT-3.5-Turbo-0125',
      price: {
        input: 0.5,
        output: 1.5,
      },
      tags: ['common'],
    },
    {
      model: 'GPT-3.5-Turbo-Instruct',
      price: {
        input: 1.5,
        output: 2,
      },
      tags: ['common'],
    },
    {
      model: 'GPT-4-Turbo',
      price: {
        input: 10,
        output: 30,
      },
      tags: ['common'],
    },
    {
      model: 'GPT-4-8k',
      price: {
        input: 30,
        output: 60,
      },
      tags: ['common'],
    },
    {
      model: 'GPT-4-32k',
      price: {
        input: 60,
        output: 120,
      },
      tags: ['common'],
    },
    {
      model: 'fine-tuned-gpt-3.5-turbo-4k',
      price: {
        input: 1.5,
        output: 2,
        training: 45,
      },
      tags: ['fine-tuned'],
    },
    {
      model: 'fine-tuned-gpt-3.5-turbo-16k',
      price: {
        input: 3,
        output: 4,
        training: 68,
      },
      tags: ['fine-tuned'],
    },
  ],
};
