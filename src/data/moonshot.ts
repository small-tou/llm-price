//
// 模型	计费单位	价格
// moonshot-v1-8k	1M tokens	¥12.00
// moonshot-v1-32k	1M tokens	¥24.00
// moonshot-v1-128k	1M tokens	¥60.00

import {PlatformInterface} from "@/data/platform";

export const price_moonshot: PlatformInterface = {
    name: 'Moonshot',
    price_unit: 'CNY', price_unit_symbol: '￥',
    url: 'https://platform.moonshot.cn/docs/pricing#%E4%BA%A7%E5%93%81%E5%AE%9A%E4%BB%B7',
    models: [{
        model: 'moonshot-v1-8k',
        price: {
            input: 12,
            output: 12
        }, tags: ['common']
    }, {
        model: 'moonshot-v1-32k',
        price: {
            input: 24,
            output: 24
        }, tags: ['common']
    }, {
        model: 'moonshot-v1-128k',
        price: {
            input: 60,
            output: 60
        }, tags: ['common']
    }]
}
