import { observer } from 'mobx-react-lite';
import { Styled } from './styles';
import { useEffect, useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import productsStore from 'application/stores/productsStore';

interface FilterProps {
  toggleSider: () => void;
}

export const Filter: React.FC<FilterProps> = observer(({ toggleSider }) => {
  const { filters } = productsStore;
  const [value, setValue] = useState(''); 

  useEffect(()=>{
    productsStore.getFilters();
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleSetFilter = () => {
    productsStore.setFilter(value);
    toggleSider();
  };

  return (
    <Styled.Container>
      <Styled.Filters onChange={onChange} value={value}>
        {filters.map(item => <Radio value={item} key={item}>{item}</Radio>)}
      </Styled.Filters>
      <Styled.SaveButton type="primary" onClick={handleSetFilter}>Сохранить</Styled.SaveButton>
    </Styled.Container>
  );
});
