import { Card, Skeleton, Rate } from "antd";
import Meta from 'antd/es/card/Meta';
import styles from './card-item.module.css';
import { Product } from 'domain/model/product';

interface CardItemProps {
    item: Product;
}

export const CardItem: React.FC<CardItemProps> = ({item}) => {
  const {image, title, category, price, rating, description} = item;

  return (
      <Card 
        hoverable
        className={styles.card}
        cover={<img alt={title} src={image} className={styles.img}/>}
      >
        <Skeleton loading={false} active>
          <Meta
            title={title}
            description={category}
          />
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>{price} $</div>
          <Rate className={styles.rate} disabled defaultValue={rating.rate} />
        </Skeleton>
      </Card>
  );
};
