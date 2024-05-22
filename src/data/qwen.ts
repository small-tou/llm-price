import { PlatformInterface } from './platform';

export const price_qwen: PlatformInterface = {
  name: 'qwen',
  price_unit: 'CNY',
  price_unit_symbol: '￥',
  url: 'https://qwen-models.com/pricing',
  models: [
    {
      model: 'qwen-long',
      price: {
        input: 0.0005 * 1000,
        output: 0.002 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-turbo',
      price: {
        input: 0.002 * 1000,
        output: 0.006 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-plus',
      price: {
        input: 0.004 * 1000,
        output: 0.012 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-max',
      price: {
        input: 0.04 * 1000,
        output: 0.12 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-max-0428',
      price: {
        input: 0.04 * 1000,
        output: 0.12 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-max-0403',
      price: {
        input: 0.04 * 1000,
        output: 0.12 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-max-0107',
      price: {
        input: 0.04 * 1000,
        output: 0.12 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-max-1201',
      price: {
        input: 0.12 * 1000,
        output: 0.12 * 1000,
      },
      tags: ['qwen'],
    },
    {
      model: 'qwen-max-longcontext',
      price: {
        input: 0.04 * 1000,
        output: 0.12 * 1000,
      },
      tags: ['qwen'],
    },
  ],
};
