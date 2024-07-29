import { useRoutes } from 'react-router-dom';
import { CardList } from 'presentation/components/Card-list/Card-list';
import { ProductPage } from 'presentation/pages/Product-page/Product-page';
import { ROUTES } from './routes';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: '/',
			element: <CardList />,
		},
		{
			path: `${ROUTES.product}/:id`,
			element: <ProductPage />,
		},
	]);

	return config;
};