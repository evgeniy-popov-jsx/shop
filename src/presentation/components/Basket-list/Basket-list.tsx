import basketStore from 'application/stores/basket-store';
import { BasketItem } from 'presentation/components/Basket-item/Basket-item';

export const BasketList: React.FC = () => {
  const { basket } = basketStore;

  return (
    <div>
      {basket.map(item => <BasketItem item={item}/>)}
    </div>
  );
};