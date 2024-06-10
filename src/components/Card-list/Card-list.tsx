import { CardItem } from 'components/Card-item/Card-item';

export const CardList = () => {
  return (
    <div style={{
        display: "flex", 
        alignItems:"center",
        justifyContent: "space-between", 
        gap:"10px", 
        flexWrap:"wrap", 
      }}
    >
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
