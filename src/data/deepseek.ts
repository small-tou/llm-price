import { PlatformInterface } from './platform';

export const price_deepseek: PlatformInterface = {
  name: 'deepseek',
  price_unit: 'CNY',
  price_unit_symbol: '¥',
  url: 'https://deepseek.example.com/pricing',
  models: [
    {
      model: 'deepseek-chat',
      description: 'Good at general tasks, 32K context length',
      price: {
        input: 1,
        output: 2,
      },
      tags: ['common'],
    },
    {
      model: 'deepseek-coder',
      description: 'Good at coding tasks, 16K context length',
      price: {
        input: 1,
        output: 2,
      },
      tags: ['common'],
    },
  ],
};
