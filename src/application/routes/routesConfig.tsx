import { useRoutes } from 'react-router-dom';
import { Product } from 'presentation/pages/Product';
import { ROUTES } from './routes';
import { Products } from 'presentation/pages/Products';
import { Authorisation } from 'presentation/pages/Authorisation';
import { Register } from 'presentation/pages/Register';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: ROUTES.products,
			element: <Products />,
		},
		{
			path: `${ROUTES.products}/:id`,
			element: <Product />,
		},
		{
			path: `${ROUTES.authorisation}`,
			element: <Authorisation />,
		},
		{
			path: `${ROUTES.register}`,
			element: <Register />,
		},
	]);

	return config;
};