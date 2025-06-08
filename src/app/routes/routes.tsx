import { createBrowserRouter } from 'react-router';
import { Layout } from '../layout/Layout';
import { CategoryPage } from '@/pages/category';
import { MainPage } from '@/pages/main';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				Component: MainPage
			},
			{
				path: 'community',
				element: <a> Community </a>
			},
			{
				path: ':category',
				Component: CategoryPage
			},
			{
				path: 'article',
				children: [
					{
						path: ':alias',
						element: <a> Article </a>
					}
				]
			},
			{
				path: 'profile',
				children: [
					{
						index: true,
						element: <a> Profile </a>
					},
					{
						path: 'edit',
						element: <a> EditProfile </a>
					}
				]
			}
		]
	}
]);
