import { CardItem } from 'components/Card-item/Card-item';
import styles from './card-list.module.css';

export const CardList: React.FC = () => {
  return (
    <div className={styles.container}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
};
