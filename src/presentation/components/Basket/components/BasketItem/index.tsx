import { Button } from 'antd';
import { Styled } from './styles';
import { CloseSquareOutlined } from '@ant-design/icons';
import { Product } from 'domain/model/product';
import { observer } from 'mobx-react-lite';
import basketStore from 'application/stores/basketStore';
import { Counter } from 'presentation/components/Counter/Counter';

interface ItemProp {
  item: Product
}

export const BasketItem: React.FC<ItemProp> = observer(({ item }) => {
  const { basket } = basketStore;
  const { title } = item;

  return (
    <Styled.Container>
      <Styled.Paragraph>{title}</Styled.Paragraph>
      <Counter 
        decrement={()=>basketStore.decrementProduct(item.id)} 
        increment={()=>basketStore.incrementProduct(item.id)} 
        value={basket[item.id].count}
      />
      <Button 
        type="text" 
        size="small" 
        icon={<CloseSquareOutlined />}
        onClick={()=>basketStore.removeProduct(item.id)}
      />
    </Styled.Container>
  );
});
