import { defineStore } from 'pinia'

export const useSubscriptionStore = defineStore('subscription', () => {
	const isSubscriptionSuccess = ref(true)

	return {
		isSubscriptionSuccess,
	}
})
