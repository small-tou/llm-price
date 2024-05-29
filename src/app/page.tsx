'use client';
import { Card, CardBody, Code, Input, Select, SelectItem, Tab, Tabs } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { platform_keys, platforms } from '@/data/platform';
import { startCase, uniq } from 'lodash';
import { Divider } from '@nextui-org/divider';
import ModelCard from '@/components/ModelCard';

export default function Home() {
  const [inputTokenSize, setInputTokenSize] = useState<number>(1000);
  const [outputTokenSize, setOutputTokenSize] = useState<number>(1000);
  const [outputPriceUnit, setOutputPriceUnit] = useState<'USD' | 'CNY'>('USD');
  const [outputPriceUnitSymbol, setOutputPriceUnitSymbol] = useState<'$' | '¥'>('$');

  const quickSizes = [1000, 5000, 10000, 100000, 1000000];

  function getPrice(sourcePrice: number, from: 'USD' | 'CNY', to: 'USD' | 'CNY') {
    if (from === 'USD') {
      if (to === 'CNY') return sourcePrice * 7.2;
    }
    if (from === 'CNY') {
      if (to === 'USD') {
        return sourcePrice / 7.2;
      }
    }
    return sourcePrice;
  }

  function getFormatedPrice(_price: number, from: 'USD' | 'CNY', to: 'USD' | 'CNY') {
    const price = getPrice(_price, from, to);
    return outputPriceUnitSymbol + price.toFixed(4);
  }

  const plateformKeyList = platform_keys;

  useEffect(() => {
    setOutputPriceUnitSymbol(outputPriceUnit === 'USD' ? '$' : '¥');
  }, [outputPriceUnit]);

  useEffect(() => {
    localStorage.setItem('outputPriceUnit', outputPriceUnit);
  }, [outputPriceUnit]);

  useEffect(() => {
    const outputPriceUnit = window.localStorage?.getItem('outputPriceUnit') as 'USD' | 'CNY';
    if (outputPriceUnit) {
      setOutputPriceUnit(outputPriceUnit);
    }
  }, []);
  return (
    <main className="pb-24 flex min-h-screen flex-col items-center px-2 md:px-24 dark text-foreground bg-background">
      <div className="my-10 w-full max-w-3xl  flex flex-col items-center justify-center px-4 text-center leading-8 md:px-0 gap-2 md:gap-6">
        <div
          className={
            'flex gap-2 md:gap-4 justify-center tracking-tight inline font-medium from-[#FFFFFF] to-[#DCDCDC] text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b'
          }
        >
          <h1>Simple</h1>
          <h1>Calculate</h1>
          <h1>and</h1>
          <h1>Compare</h1>
        </div>
        <div className={'flex gap-4 justify-center text-3xl md:text-5xl lg:text-6xl font-[600]'}>
          <h1 className="tracking-tight inline  from-[#FFFFFF] to-[#DCDCDC]   bg-clip-text text-transparent bg-[linear-gradient(20deg,#F63B7D_0%,#F67893_100%)]">
            LLM
          </h1>
          <h1 className="tracking-tight inline  from-[#FFFFFF] to-[#DCDCDC]  bg-clip-text text-transparent bg-gradient-to-b">
            Token
          </h1>
          <h2 className="tracking-tight inline  from-[#FFFFFF] to-[#DCDCDC]  bg-clip-text text-transparent bg-[linear-gradient(20deg,#8354F6_0%,#9899F6_100%)]">
            Price
          </h2>
        </div>
        <p className="text-gray-400 underline text-sm md:text-medium">https://llmprice.app</p>
      </div>
      <div className="z-10 max-w-5xl w-full   font-mono text-sm ">
        <div className="grid grid-cols-7 gap-4 w-full">
          <div className={'col-span-7 sm:col-span-7  md:col-span-3'}>
            <Input
              type={'number'}
              placeholder={'Input token size'}
              label={'Input token size'}
              value={inputTokenSize as any}
              onChange={(e) => {
                setInputTokenSize(parseInt(e.target.value));
              }}
            />
            <div className={'flex gap-4 mt-2 pl-2'}>
              {quickSizes.map((size) => {
                return (
                  <a
                    key={size}
                    onClick={() => {
                      setInputTokenSize(size);
                    }}
                    className={'underline text-gray-500 cursor-pointer'}
                  >
                    {size.toLocaleString()}
                  </a>
                );
              })}
            </div>
          </div>
          <div className={'col-span-7 sm:col-span-7 md:col-span-3'}>
            <Input
              type={'number'}
              placeholder={'Output token size'}
              label={'Output token size'}
              value={outputTokenSize as any}
              onChange={(e) => {
                setOutputTokenSize(parseInt(e.target.value));
              }}
            />
            <div className={'flex gap-4 mt-2 pl-2'}>
              {quickSizes.map((size) => {
                return (
                  <a
                    key={size}
                    onClick={() => {
                      setOutputTokenSize(size);
                    }}
                    className={'underline text-gray-500 cursor-pointer'}
                  >
                    {size.toLocaleString()}
                  </a>
                );
              })}
            </div>
          </div>
          <Select
            placeholder={'Unit'}
            defaultSelectedKeys={[outputPriceUnit]}
            onChange={(e) => {
              setOutputPriceUnit(e.target.value as any);
            }}
            className={'col-span-7  sm:col-span-7 md:col-span-1'}
            label={'Price Unit'}
          >
            <SelectItem value={'USD'} key={'USD'}>
              USD
            </SelectItem>
            <SelectItem value={'CNY'} key={'CNY'}>
              CNY
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className={'mt-5 w-full max-w-5xl'}>
        <Tabs aria-label="Options" color={'secondary'} className={'w-full'}>
          {plateformKeyList.map((key, index) => {
            const platform = platforms[key];
            const allTags = uniq(platform.models.map((model) => model.tags).flat());
            const allTagsWithModel = allTags.map((tag) => {
              return {
                tag: tag,
                models: platform.models.filter((model) => model.tags.includes(tag)),
              };
            });
            return (
              <Tab key={platform.name} title={`${startCase(platform.name)}`}>
                {allTagsWithModel.map((tagWithModel, index) => {
                  return (
                    <div key={tagWithModel.tag}>
                      <h3 className="mt-4 mb-2 flex whitespace-pre-wrap not-prose">
                        <a className="group relative border-none text-lg">{startCase(tagWithModel.tag)}</a>
                      </h3>
                      <div className={'grid  grid-cols-1 md:grid-cols-3 gap-4'}>
                        {tagWithModel.models.map((model, index) => {
                          const total = getFormatedPrice(
                            (model.price.input * inputTokenSize) / 1000000 +
                              ((model.price.output || 0) * outputTokenSize) / 1000000,
                            platform.price_unit,
                            outputPriceUnit,
                          );
                          const inputPrice = getFormatedPrice(
                            (model.price.input * inputTokenSize) / 1000000,
                            platform.price_unit,
                            outputPriceUnit,
                          );
                          const outputPrice = model.price.output
                            ? getFormatedPrice(
                                (model.price.output * outputTokenSize) / 1000000,
                                platform.price_unit,
                                outputPriceUnit,
                              )
                            : undefined;
                          return (
                            <ModelCard
                              key={model.model}
                              model={model.model}
                              description={model.description || ''}
                              inputPrice={inputPrice}
                              outputPrice={outputPrice}
                              total={total}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </main>
  );
}
