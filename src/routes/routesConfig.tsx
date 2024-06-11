import { useRoutes } from 'react-router-dom';
import { CardList } from 'components/Card-list/Card-list';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: '/',
			element: <CardList />,
		},
	]);

	return config;
};