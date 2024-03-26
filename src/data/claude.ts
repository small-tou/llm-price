import { PlatformInterface } from '@/data/platform';

export const price_claude:PlatformInterface = {
  name:'claude',
  price_unit: 'USD',
  price_unit_symbol: '$',
  url: 'https://www.anthropic.com/api',
  models: [{
    model:'Claude 3 - Haiku',
    description:'Light & fast',
    price: {
      input: 0.25,
      output: 1.25
    },
    tags: ['common']
  },{
    model:'Claude 3 - Sonnet',
    description: 'Hard-working',
    price: {
      input: 3,
      output: 15
    },
    tags: ['common']
  },{
    model:'Claude 3 - Opus',
    description: 'Powerful',
    price: {
      input: 15,
      output: 75
    },
    tags: ['common']
  },{
    model:'Claude 2.1',
    description: '200,000 token context window',
    price: {
      input: 8,
      output: 24
    },
    tags: ['common']
  },{
    model:'Claude 2.0',
    description: '100,000 token context window',
    price: {
      input: 8,
      output: 24
    },
    tags: ['common']
  },{
    model:'Claude Instant',
    description: '100,000 token context window',
    price: {
      input: 0.80,
      output: 2.40
    },
    tags: ['common']
  }]
}
