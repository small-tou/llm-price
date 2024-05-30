import React from 'react';
import { Card, CardBody, Code, Divider, Button } from '@nextui-org/react';

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
            <Code size={'sm'} className={'text-xs'} radius={'sm'}>
              Total: {total}
            </Code>
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
          <div className="flex justify-end gap-2">
            {!isInCompareList && (
              <Button auto flat color="success" onClick={onAddToCompare}>
                Add to Compare
              </Button>
            )}
            {isInCompareList && (
              <Button auto flat color="error" onClick={onRemoveFromCompare}>
                Remove from Compare
              </Button>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ModelCard;
