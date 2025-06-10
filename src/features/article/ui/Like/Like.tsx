import { Tag } from '@/shared/ui';
import styles from './Like.module.css';

export function Like() {
	return (
		<Tag size="m" color="orange" icon="Check" className={styles.like}>
			Лайкнуть
		</Tag>
	);
}
