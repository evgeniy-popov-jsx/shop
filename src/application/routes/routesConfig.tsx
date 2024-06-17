import { useRoutes } from 'react-router-dom';
import { CardList } from 'presentation/components/Card-list/Card-list';
import { ProductPage } from 'presentation/pages/Product-page/Product-page';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: '/',
			element: <CardList />,
		},
		{
			path: '/product/:id',
			element: <ProductPage />,
		},
	]);

	return config;
};