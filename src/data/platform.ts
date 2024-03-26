import {price_openai} from "@/data/openai";
import {price_azure} from "@/data/azure";
import {price_moonshot} from "@/data/moonshot";
import { price_claude } from '@/data/claude';
import { price_zhipu } from '@/data/zhipu';

export type ModelInterface = {
    model: string;
    description?:string;
    price: {
        input: number;
        output?: number;
        training?: number;
    };
    tags: string[];
}
export type PlatformInterface = {
    name: string;
    price_unit: 'USD' | 'CNY';
    price_unit_symbol: string;
    url: string;
    models: ModelInterface[];
}
export const platforms: Record<'openai' | 'azure' | 'moonshot'|'claude'|'zhipu', PlatformInterface> = {
    openai: price_openai,
    azure: price_azure,
    claude: price_claude,
    moonshot: price_moonshot,
    zhipu: price_zhipu
}
export const platform_keys = Object.keys(platforms) as Array<keyof typeof platforms>;
