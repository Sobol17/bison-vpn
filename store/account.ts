import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
	const isSubscribed = ref(true)

	return {
		isSubscribed,
	}
})
