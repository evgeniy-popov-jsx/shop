import { Button } from 'antd';
import { Styled } from './styles';
import { CloseSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Product } from 'domain/model/product';
import { observer } from 'mobx-react-lite';
import basketStore from 'application/stores/basket-store';

interface ItemProp {
  item: Product
}

export const BasketItem: React.FC<ItemProp> = observer(({ item }) => {
  const { removeBusket, incrementProduct, decrementProduct } = basketStore;
  const { title, count } = item;

  return (
    <Styled.Container>
      <Styled.Paragraph>{title}</Styled.Paragraph>
      <Styled.BtnContainer>
        <Button 
          type="default" 
          size="small" 
          icon={<LeftOutlined />} 
          onClick={()=>decrementProduct(item.id)} 
          disabled={count === 0}
        />
        <Styled.Count>{count}</Styled.Count>
        <Button 
          type="default" 
          size="small" 
          icon={<RightOutlined />} 
          onClick={()=>incrementProduct(item.id)}
        />
      </Styled.BtnContainer>
      <Button 
        type="text" 
        size="small" 
        icon={<CloseSquareOutlined />}
        onClick={()=>removeBusket(item.id)}
      />
    </Styled.Container>
  );
});
