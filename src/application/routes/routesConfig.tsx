import { useRoutes } from 'react-router-dom';
import { Product } from 'presentation/pages/Product';
import { ROUTES } from './routes';
import { Products } from 'presentation/pages/Products';
import { Authorisation } from 'presentation/pages/Authorisation';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: '/',
			element: <Products />,
		},
		{
			path: `${ROUTES.product}/:id`,
			element: <Product />,
		},
		{
			path: `${ROUTES.authorisation}`,
			element: <Authorisation />,
		},
	]);

	return config;
};