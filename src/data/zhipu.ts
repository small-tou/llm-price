// GLM-4	提供了更强大的问答和文本生成能力。适合于复杂的对话交互和深度内容创作设计的场景。	128K	0.1元 / 千tokens
// GLM-4V	实现了视觉语言特征的深度融合，支持视觉问答、图像字幕、视觉定位、复杂目标检测等各类图像理解任务。	2K	0.1元 / 千tokens
// GLM-3-Turbo	适用于对知识量、推理能力、创造力要求较高的场景，比如广告文案、小说写作、知识类写作、代码生成等。	128K	0.005元 / 千tokens



import { PlatformInterface } from '@/data/platform';

export const price_zhipu: PlatformInterface = {
  name:'智谱 AI',
  price_unit:'CNY',
  price_unit_symbol:'¥',
  url:'https://open.bigmodel.cn/pricing',
  models:[
    {
      model:'GLM-4',
      description:'提供了更强大的问答和文本生成能力。适合于复杂的对话交互和深度内容创作设计的场景。',
      price:{
        input:100,
        output:100
      },
      tags:['common']
    },
    {
      model:'GLM-4V',
      description:'实现了视觉语言特征的深度融合，支持视觉问答、图像字幕、视觉定位、复杂目标检测等各类图像理解任务。',
      price:{
        input:0.1*1000,
        output:0.1*1000
      },
      tags:['common']
    },
    {
      model:'GLM-3-Turbo',
      description:'适用于对知识量、推理能力、创造力要求较高的场景，比如广告文案、小说写作、知识类写作、代码生成等。',
      price:{
        input:0.005*1000,
        output:0.005*1000
      },
      tags:['common']
    }
  ]
}