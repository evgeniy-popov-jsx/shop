import { useState } from 'react';
import { Button } from 'antd';
import { Styled } from './styles';
import { CloseSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export const BasketItem: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

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
