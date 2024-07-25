import BasketStore from 'application/stores/basket-store';
import { observer } from 'mobx-react-lite';
import { BasketItem } from 'presentation/components/Basket-item/Basket-item';

export const BasketList: React.FC = observer(() => {
  const { basket } = BasketStore;

  return (
    <div>
      {basket.map(item => 
        <BasketItem item={item} key={item.id}/>
      )}
    </div>
  );
});