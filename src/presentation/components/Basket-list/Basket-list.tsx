import BasketStore from 'application/stores/basket-store';
import { observer } from 'mobx-react-lite';
import { BasketItem } from 'presentation/components/Basket-item/Basket-item';
import { Styled } from './styles';

export const BasketList: React.FC = observer(() => {
  const { basket, getTotalPrice } = BasketStore;

  return (
    <Styled.Basket>
      <Styled.Items>
        {basket.map(item => 
          <BasketItem item={item} key={item.id}/>
        )}
      </Styled.Items>
      {basket.length === 0 
        ? <>Корзина пуста</>
        : <Styled.Price>Total: {getTotalPrice()}$</Styled.Price>
      }
    </Styled.Basket>
  );
});