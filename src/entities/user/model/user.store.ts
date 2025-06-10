import type { StateCreator } from 'zustand';
import type { User } from './user.model';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';
import { getProfile } from '../api';

export type UserState = {
	profile?: User;
};

export type UserActions = {
	getProfile: () => void;
};

type createUserStoreType = StateCreator<UserState & UserActions>;

const userSlice: createUserStoreType = (set) => ({
	profile: undefined,
	getProfile: async () => {
		const user = await getProfile();
		set({ profile: user });
	}
});

export const useUserStore = createWithEqualityFn<UserState & UserActions>()(
	devtools(userSlice, {
		name: 'userStore'
	})
);
