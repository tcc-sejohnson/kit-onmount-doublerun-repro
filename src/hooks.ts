import type { GetSession } from '@sveltejs/kit';

export const getSession: GetSession = (event) => {
	return {
		counter: 0
	};
};
