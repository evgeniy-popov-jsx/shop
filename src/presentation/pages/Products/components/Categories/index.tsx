import { observer } from 'mobx-react-lite';
import { Styled } from './styles';
import { useEffect } from 'react';
import { Button, Radio, RadioChangeEvent } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import productsStore from 'application/stores/productsStore';

export const Categories = observer(() => {
  const { categories, selectedCategory } = productsStore;

  useEffect(() => {
    productsStore.getCategories();
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    productsStore.changeCategory(e.target.value);
  };

  const handleClearCategory = () => {
    productsStore.changeCategory(null);
  };

  return (
    <Styled.Container>
      <Styled.Categories
        onChange={onChange}
        value={selectedCategory}
        buttonStyle="solid"
      >
        {categories.map(item => (
          <Radio.Button value={item} key={item}>
            {item}
          </Radio.Button>
        ))}
      </Styled.Categories>
      <Button 
        icon={<CloseOutlined />} 
        onClick={handleClearCategory} 
      />
    </Styled.Container>
  );
});
