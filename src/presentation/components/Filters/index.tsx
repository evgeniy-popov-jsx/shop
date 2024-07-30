import { observer } from 'mobx-react-lite';
import { Styled } from './styles';
import { useEffect, useState } from 'react';
import { Button, Radio, RadioChangeEvent } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import productsStore from 'application/stores/productsStore';

export const Filters = observer(() => {
  const { filters } = productsStore;
  const [value, setValue] = useState(''); 

  useEffect(()=>{
    productsStore.getFilters();
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleSetFilter = (filter: string) => {
    productsStore.setFilter(filter);
  };

  const handleClearFilter = () => {
    setValue('');
    productsStore.setFilter('');
  };

  return (
    <Styled.Container>
      <Styled.Filters
        onChange={onChange}
        value={value}
        buttonStyle="solid"
      >
        {filters.map(item => (
          <Radio.Button 
            onClick={()=>handleSetFilter(item)} 
            value={item} 
            key={item}
          >
            {item}
          </Radio.Button>
        ))}
      </Styled.Filters>
      <Button 
        icon={<CloseOutlined />} 
        onClick={handleClearFilter} 
      />
    </Styled.Container>
  );
});
