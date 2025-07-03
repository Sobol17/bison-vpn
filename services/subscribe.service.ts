import { customFetch } from '~/composables/customFetch'

class SubscribeService {
	async subscribe(body = {}) {
		await useAsyncData('sub', () => customFetch('/subscribe', { method: 'POST', body }))
	}
}

const subscribeService = new SubscribeService()
export default subscribeService
