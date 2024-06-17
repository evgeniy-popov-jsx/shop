import { useState } from 'react';
import { Button } from 'antd';
import { CloseSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './basket-item.module.css';

export const BasketItem: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.container}>
      <p>Название товара</p>
      <div className={styles.btnContainer}>
        <Button 
          type="default" 
          size="small" 
          icon={<LeftOutlined />} 
          onClick={decrement} 
          disabled={count === 0 ? true : false}
        />
        <div className={styles.count}>{count}</div>
        <Button 
          type="default" 
          size="small" 
          icon={<RightOutlined />} 
          onClick={increment}
        />
      </div>
      <Button 
        type="text" 
        size="small" 
        icon={<CloseSquareOutlined />}
      />
    </div>
  );
};
