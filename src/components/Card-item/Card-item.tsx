import { Card, Skeleton, Rate } from "antd";
import Meta from 'antd/es/card/Meta';
import { ItemProps } from 'components/Card-list/Card-list';
import styles from './card-item.module.css';
interface CardItemProps {
    item: ItemProps;
}

export const CardItem: React.FC<CardItemProps> = ({item}) => {
  const {image, title, category, price, rating, description} = item;

  return (
      <Card 
        hoverable
        className={styles.card}
        cover={<img alt="example" src={image} className={styles.img}/>}
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
