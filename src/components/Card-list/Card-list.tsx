import { CardItem } from 'components/Card-item/Card-item';
import { mock } from '../../mock/mock.ts';
import styles from './card-list.module.css';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';

export interface ItemProps {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
}

export const CardList: React.FC = () => {
  return (
    <div className={styles.container}>
      {mock.map((item: ItemProps) => {
        return (
          <Link to={`/products/${item.id}`} key={item.id}>
            {item.rating.rate > 4 
              ? (
                <Badge.Ribbon text="Bestseller">
                  <CardItem item={item}/>
                </Badge.Ribbon>
              )
              : <CardItem item={item}/>}
          </Link>
        )
      })}
    </div>
  );
};
