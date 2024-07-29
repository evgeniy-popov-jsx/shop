import basketStore from 'application/stores/basketStore';
import { observer } from 'mobx-react-lite';
import { BasketItem } from 'presentation/components/Basket/components/BasketItem';
import { Styled } from './styles';

export const Basket: React.FC = observer(() => {
  const { totalPrice, basketArray } = basketStore;

  return (
    <Styled.Basket>
      <Styled.Items>
        {basketArray.map(item => 
          <BasketItem item={item.value} key={item.value.id}/>
        )}
      </Styled.Items>
      {basketArray.length === 0 
        ? <>Корзина пуста</>
        : <Styled.Price>Total: {totalPrice} $</Styled.Price>
      }
    </Styled.Basket>
  );
});