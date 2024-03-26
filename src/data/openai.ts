import {PlatformInterface} from "@/data/platform";

export const price_openai: PlatformInterface = {
    name: 'OpenAI',
    price_unit: 'USD', price_unit_symbol: '$',
    url: 'https://openai.com/pricing',
    models: [{
        model: 'GPT-4 Turbo',
        price: {
            input: 10,
            output: 30
        }, tags: ['common']
    }, {
        model: 'GPT-4',
        price: {
            input: 30,
            output: 60
        }, tags: ['common']
    }, {
        model: 'GPT-4-32k',
        price: {
            input: 60,
            output: 120
        }, tags: ['common']
    }, {
        model: 'gpt-3.5-turbo',
        price: {
            input: 0.5,
            output: 1.5
        }, tags: ['common']
    }, {
        model: 'gpt-3.5-turbo-instruct',
        price: {
            input: 1.5,
            output: 2
        }, tags: ['common']
    }, {
        model: 'fine-tuned-gpt-3.5-turbo',
        price: {
            input: 3,
            output: 6,
            training: 8
        }, tags: ['fine-tuned']
    }, {
        model: 'fine-tuned-davinci-002',
        price: {
            input: 12,
            output: 12,
            training: 6
        }, tags: ['fine-tuned']
    }, {
        model: 'fine-tuned-babbage-002',
        price: {
            input: 1.6,
            output: 1.6,
            training: 0.4
        }, tags: ['fine-tuned']
    }, {
        model: 'text-embedding-3-small',
        price: {
            input: 0.02
        }, tags: ['embedding']
    }, {
        model: 'text-embedding-3-large',
        price: {
            input: 0.13
        }, tags: ['embedding']
    }, {
        model: 'text-embedding-ada v2',
        price: {
            input: 0.1
        }, tags: ['embedding']
    }, {
        model: 'davinci-002',
        price: {
            input: 2,
        }, tags: ['common']
    }, {
        model: 'babbage-002',
        price: {
            input: 0.4,
        }, tags: ['common']
    }]
}