import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';

export const MainPage = () => {
	return (
		<div>
			Главная
			<Link to={ROUTES.profile.index}>Профиль</Link>
		</div>
	);
};
