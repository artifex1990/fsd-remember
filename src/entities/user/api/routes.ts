import { CONFIG } from '@/shared/config';

export const USER_API = {
	profile: `${CONFIG.API_URL}/user/me`,
	byUsername: (username: string) =>
		`${CONFIG.API_URL}/user/username/${username}`
};
