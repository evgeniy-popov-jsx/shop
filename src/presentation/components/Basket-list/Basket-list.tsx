import BasketStore from 'application/stores/basket-store';
import { observer } from 'mobx-react-lite';
import { BasketItem } from 'presentation/components/Basket-item/Basket-item';
import { Styled } from './styles';

export const BasketList: React.FC = observer(() => {
  const { basket, getTotalPrice } = BasketStore;

  return (
    <div>
      {basket.map(item => 
        <BasketItem item={item} key={item.id}/>
      )}
      {basket.length === 0 
        ? <>Корзина пуста</>
        : <Styled.Price>Total: {getTotalPrice()}$</Styled.Price>
      }
    </div>
  );
});