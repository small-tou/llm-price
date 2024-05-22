import { price_openai } from '@/data/openai';
import { price_azure } from '@/data/azure';
import { price_moonshot } from '@/data/moonshot';
import { price_claude } from '@/data/claude';
import { price_zhipu } from '@/data/zhipu';
import { price_baichuan } from '@/data/baichuan';
import { price_qwen } from '@/data/qwen';
import { price_deepseek } from '@/data/deepseek';

type ITag = 'common' | 'fine-tuned' | 'custom' | 'embedding' | 'npc' | 'qwen';
export type ModelInterface = {
  // model name
  model: string;
  // model description
  description?: string;
  // model price
  price: {
    // model input price,unit is 1000000
    input: number;
    // model output price,unit is 1000000
    output?: number;
    // model training price,unit is 1000
    training?: number;
  };
  // model tags
  tags: ITag[];
};
export type PlatformInterface = {
  // platform name
  name: string;
  // platform price unit
  price_unit: 'USD' | 'CNY';
  // platform price unit symbol, e.g. $
  price_unit_symbol: string;
  // platform price url
  url: string;
  // platform models
  models: ModelInterface[];
};
export const platforms: Record<'openai' | 'azure' | 'moonshot' | 'claude' | 'zhipu' | 'baichuan' | 'qwen' | 'deepseek', PlatformInterface> = {
  openai: price_openai,
  azure: price_azure,
  claude: price_claude,
  moonshot: price_moonshot,
  zhipu: price_zhipu,
  baichuan: price_baichuan,
  qwen: price_qwen,
  deepseek: price_deepseek,
};
export const platform_keys = Object.keys(platforms) as Array<keyof typeof platforms>;
