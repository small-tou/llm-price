import React from 'react';
import { Card, CardBody, Code, Divider, Button, Tooltip } from '@nextui-org/react';

interface ModelCardProps {
  model: string;
  description: string;
  inputPrice: string;
  outputPrice?: string;
  total: string;
  onAddToCompare: () => void;
  onRemoveFromCompare: () => void;
  isInCompareList: boolean;
}

export const ModelCard: React.FC<ModelCardProps> = ({
                                                      model,
                                                      description,
                                                      inputPrice,
                                                      outputPrice,
                                                      total,
                                                      onAddToCompare,
                                                      onRemoveFromCompare,
                                                      isInCompareList,
                                                    }) => {
  return (
    <Card>
      <CardBody>
        <div className={'flex flex-col gap-2 justify-between h-full'}>
          <div className={'flex justify-between'}>
            {model}
            <div className={'flex justify-end gap-1'}>
              <Code size={'sm'} className={'text-xs'} radius={'sm'}>
                Total: {total}
              </Code>
              {!isInCompareList && (
                <Tooltip content={'Add to compare'} color={'secondary'} showArrow={true}>
                  <a
                    className={'cursor-pointer flex justify-center w-7 bg-amber-50px-2 py-1 h-fit font-mono font-normal whitespace-nowrap bg-default/40 text-default-foreground rounded-small text-xs'}
                    onClick={onAddToCompare}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                      <path
                        d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  </a>
                </Tooltip>
              )}
              {isInCompareList && (
                <Tooltip content={'Remove from compare'} color={'secondary'} showArrow={true}>
                  <a
                    className={'cursor-pointer flex justify-center w-7 bg-amber-50px-2 py-1 h-fit font-mono font-normal whitespace-nowrap bg-default/40 text-default-foreground rounded-small text-xs'}
                    onClick={onRemoveFromCompare}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>

                  </a>
                </Tooltip>
              )}
            </div>
          </div>
          <div className={'text-[12px] text-gray-500'}>{description}</div>

          <div>
            <Divider className={'mb-2'} />
            <div className={'flex gap-2 justify-between'}>
              <div className={'text-xs flex gap-2'}>
                Input: <div className={'text-gray-400'}>{inputPrice}</div>
              </div>
              {outputPrice && (
                <div className={'text-xs flex gap-2'}>
                  Output: <div className={'text-gray-400'}>{outputPrice}</div>
                </div>
              )}
            </div>
          </div>

        </div>
      </CardBody>
    </Card>
  );
};

export default ModelCard;
