import { Button } from 'antd';
import { Styled } from './styles';
import { CloseSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Product } from 'domain/model/product';
import { observer } from 'mobx-react-lite';
import basketStore from 'application/stores/basketStore';

interface ItemProp {
  item: Product
}

export const BasketItem: React.FC<ItemProp> = observer(({ item }) => {
  const { basket } = basketStore;
  const { title } = item;

  return (
    <Styled.Container>
      <Styled.Paragraph>{title}</Styled.Paragraph>
      <Styled.BtnContainer>
        <Button 
          type="default" 
          size="small" 
          icon={<LeftOutlined />} 
          onClick={()=>basketStore.decrementProduct(item.id)} 
          disabled={basketStore.TotalCount === 0}
        />
        <Styled.Count>{basket[item.id].count}</Styled.Count>
        <Button 
          type="default" 
          size="small" 
          icon={<RightOutlined />} 
          onClick={()=>basketStore.incrementProduct(item.id)}
        />
      </Styled.BtnContainer>
      <Button 
        type="text" 
        size="small" 
        icon={<CloseSquareOutlined />}
        onClick={()=>basketStore.removeProduct(item.id)}
      />
    </Styled.Container>
  );
});
