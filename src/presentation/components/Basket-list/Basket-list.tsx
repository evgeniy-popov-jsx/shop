import basketStore from 'application/stores/basketStore';
import { observer } from 'mobx-react-lite';
import { BasketItem } from 'presentation/components/Basket-item/Basket-item';
import { Styled } from './styles';

export const BasketList: React.FC = observer(() => {
  const { TotalPrice, basketArray } = basketStore;

  return (
    <Styled.Basket>
      <Styled.Items>
        {basketArray.map(item => 
          <BasketItem item={item.value} key={item.value.id}/>
        )}
      </Styled.Items>
      {basketArray.length === 0 
        ? <>Корзина пуста</>
        : <Styled.Price>Total: {TotalPrice} $</Styled.Price>
      }
    </Styled.Basket>
  );
});