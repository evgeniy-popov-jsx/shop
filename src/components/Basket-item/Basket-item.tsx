import { useState } from 'react';
import { Button } from 'antd';
import { CloseSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export const BasketItem = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent:"space-around", marginBottom: "10px", gap:'5px'}}>
      <div>Название товара</div>
      <div style={{display: 'flex', gap: "5px"}}>
        <Button type="default" size="small" icon={<LeftOutlined />} onClick={decrement} disabled={count === 0 ? true : false}/>
          <div style={{width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent:"center"}}>{count}</div>
        <Button type="default" size="small" icon={<RightOutlined />} onClick={increment}/>
      </div>
      <Button type="text" size="small" icon={<CloseSquareOutlined />} />
    </div>
  );
};
