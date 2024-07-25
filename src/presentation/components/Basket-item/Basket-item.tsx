import { useState } from 'react';
import { Button } from 'antd';
import { Styled } from './styles';
import { CloseSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Product } from 'domain/model/product';

interface ItemProp {
  item: Product
}

export const BasketItem: React.FC<ItemProp> = ({ item }) => {
  const [count, setCount] = useState(0);
  
  const {} = item;

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);
  
  return (
    <Styled.Container>
      <Styled.Paragraph>Название товара</Styled.Paragraph>
      <Styled.BtnContainer>
        <Button 
          type="default" 
          size="small" 
          icon={<LeftOutlined />} 
          onClick={decrement} 
          disabled={count === 0}
        />
        <Styled.Count>{count}</Styled.Count>
        <Button 
          type="default" 
          size="small" 
          icon={<RightOutlined />} 
          onClick={increment}
        />
      </Styled.BtnContainer>
      <Button 
        type="text" 
        size="small" 
        icon={<CloseSquareOutlined />}
      />
    </Styled.Container>
  );
};
