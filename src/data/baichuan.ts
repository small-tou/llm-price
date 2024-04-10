// 模型调用 Baichuan2-Turbo	00:00 ~ 24:00	0.008元/千tokens	包含输入和输出
// 模型调用 Baichuan2-Turbo-192k	00:00 ~ 24:00	0.016元/千tokens	包含输入和输出
// 模型调用 Baichuan2-53B	00:00 ~ 8:00	0.01元/千tokens	包含输入和输出
// 8:00 ~ 24:00	0.02元/千tokens
// 搜索增强服务	00:00 ~ 24:00	0.03元/次	开启 with_search_enhance 后，接口自动判断调用搜索增强服务的次数

// 模型调用 Baichuan-Text-Embedding	00:00 ~ 24:00	0.0005元/千tokens
// 文件存储	00:00 ~ 24:00	1.5元/GB/天

// 角色大模型
// 计费项	时间（每日）	价格
// Baichuan-NPC-Lite	00:00 ~ 24:00	0.0099元/千tokens
// Baichuan-NPC-Turbo	00:00 ~ 24:00	0.015元/千tokens

import { ModelInterface, PlatformInterface } from '@/data/platform';

export const price_baichuan: PlatformInterface = {
  name: '百川',
  price_unit: 'CNY',
  price_unit_symbol: '￥',
  url: 'https://platform.baichuan-ai.com/price',

  models: [
    {
      model: 'Baichuan2-Turbo',
      description: '模型调用 Baichuan2-Turbo 00:00 ~ 24:00 包含输入和输出',
      price: {
        input: 0.008 * 1000,
        output: 0.008 * 1000,
      },
      tags: ['common'],
    },
    {
      model: 'Baichuan2-Turbo-192k',
      description: '模型调用 Baichuan2-Turbo-192k 00:00 ~ 24:00 包含输入和输出',
      price: {
        input: 0.016 * 1000,
        output: 0.016 * 1000,
      },
      tags: ['common'],
    },
    {
      model: 'Baichuan2-53B 00:00 ~ 8:00',
      description: '模型调用 Baichuan2-53B 00:00 ~ 8:00 包含输入和输出',
      price: {
        input: 0.01 * 1000,
        output: 0.01 * 1000,
      },
      tags: ['common'],
    },
    {
      model: 'Baichuan2-53B 8:00 ~ 24:00',
      description: '模型调用 Baichuan2-53B 8:00 ~ 24:00 包含输入和输出',
      price: {
        input: 0.02 * 1000,
        output: 0.02 * 1000,
      },
      tags: ['common'],
    },
    {
      model: 'Baichuan-Text-Embedding',
      description: '模型调用 Baichuan-Text-Embedding 00:00 ~ 24:00 0.0005元/千tokens',
      price: {
        input: 0.0005 * 1000,
        output: 0,
      },
      tags: ['embedding'],
    },
    {
      model: 'Baichuan-NPC-Lite',
      description: '角色大模型 Baichuan-NPC-Lite 00:00 ~ 24:00 0.0099元/千tokens',
      price: {
        input: 0.0099 * 1000,
        output: 0,
      },
      tags: ['npc'],
    },
    {
      model: 'Baichuan-NPC-Turbo',
      description: '角色大模型 Baichuan-NPC-Turbo 00:00 ~ 24:00 0.015元/千tokens',
      price: {
        input: 0.015 * 1000,
        output: 0,
      },
      tags: ['npc'],
    },
  ],
};
