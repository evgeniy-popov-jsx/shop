import { CardItem } from 'presentation/components/Card-item/Card-item.tsx';
import { mock } from '../../../domain/mock/mock';
import styles from './card-list.module.css';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { Product } from 'domain/model/product';

export const CardList: React.FC = () => {
  return (
    <div className={styles.container}>
      {mock.map((item: Product) => {
        return (
          <Link to={`/product/${item.id}`} key={item.id}>
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
