import type { HTMLAttributes } from 'react';

type Size = 's' | 'm' | 'l';
type Color = 'red' | 'green' | 'gray' | 'orange';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	size?: Size;
	color?: Color;
	icon?: string;
}

export function Tag({ children, ...props }: TagProps) {
	return <div {...props}>{children}</div>;
}
