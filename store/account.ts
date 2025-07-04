import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
	const isSubscribed = ref(false)
	const isAuth = ref(false)

	return {
		isSubscribed,
		isAuth,
	}
})
