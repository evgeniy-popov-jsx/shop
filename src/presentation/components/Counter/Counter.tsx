import { observer } from 'mobx-react-lite';
import { Button } from 'antd';
import { Styled } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import basketStore from 'application/stores/basketStore';

interface CounterProp {
  value: number;
  decrement: () => void;
  increment: () => void;
};

export const Counter: React.FC<CounterProp> = observer(({ decrement, increment, value}) => {

  return (
    <Styled.BtnContainer>
      <Button 
        type="default" 
        size="small" 
        icon={<LeftOutlined />} 
        onClick={decrement} 
        disabled={basketStore.TotalCount === 0}
      />
      <Styled.Count>{value}</Styled.Count>
      <Button 
        type="default" 
        size="small" 
        icon={<RightOutlined />} 
        onClick={increment}
      />
    </Styled.BtnContainer>
  );});
