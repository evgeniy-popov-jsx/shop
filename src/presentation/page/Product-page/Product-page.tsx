import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, StarFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { mock } from 'domain/mock/mock';
import styles from './product-page.module.css';

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1)
  };

  return (
    <div className={styles.container}>
      <Button 
        icon={<ArrowLeftOutlined />}
        onClick={handleBackClick} 
      />
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={mock[0].image} alt={mock[0].title}/>
          <div className={styles.badget}>{mock[0].price} $</div>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.title}>{mock[0].title}</div>
          <div className={styles.rating}>
            <StarFilled className={styles.icon}/> {mock[0].rating.rate} | {mock[0].category}
          </div>
          <div className={styles.descriptionTitle}>About the product:</div>
          <div className={styles.description}>{mock[0].description}</div>
          <Button>Buy {mock[0].price} $</Button>
        </div>
      </div>
    </div>
  );
};
