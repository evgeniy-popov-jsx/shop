import React, { useState } from 'react';
import { Badge, Button, Drawer, Layout, Tooltip } from "antd";
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import { Basket } from 'presentation/components/Basket';
import { LogoutOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import authStore from 'application/stores/authStore';
import basketStore from 'application/stores/basketStore';

export const LayoutPage: React.FC<{ children : React.ReactNode }> = observer(({ children }) => {
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const toggleBasket = () => {
    setIsOpenBasket(!isOpenBasket);
  };

  return (
    <Styled.Container>
      <Styled.Layout>
        <Styled.Header>
          <Styled.Title to={'/'} >Ларёк</Styled.Title>
          <Styled.BtnContainer>
            {authStore.user ? (
              <>
                <Tooltip title={authStore.user.email}>
                  <Styled.Avatar shape="square" icon={<UserOutlined />} />
                </Tooltip>
                <Badge count={basketStore.totalCount} >
                  <Button 
                    type="primary" 
                    icon={<ShoppingCartOutlined />} 
                    onClick={toggleBasket}
                  />
                </Badge>
                <Button 
                  type="primary" 
                  onClick={authStore.logout}
                  icon={<LogoutOutlined />}
                />
              </>
            ) : (
              <Styled.Link to={'/authorisation'}>Login</Styled.Link>
            )}
          </Styled.BtnContainer>
        </Styled.Header>
        <Layout>
          <Drawer
            title="Корзина"
            placement="right"
            closable={true}
            onClose={toggleBasket}
            open={isOpenBasket}
          >
            <Styled.Sider width={"100%"}>
              <Basket />
            </Styled.Sider>
          </Drawer>
          <Styled.Content>
            {children}
          </Styled.Content>
        </Layout>
        <Styled.Footer>© Организация по продаже товаров</Styled.Footer>
      </Styled.Layout>
    </Styled.Container>
  );
});
