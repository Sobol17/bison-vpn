import { customFetch } from '~/composables/customFetch'

class HeaderService {
	async getCatFour() {
		const { data: headerCategories } = await useAsyncData('headerCategories', () =>
			customFetch('/catFour', { method: 'GET' })
		)
		return headerCategories
	}

	async getHeaderBanner(body = {}) {
		const { data: headerBanner } = await useAsyncData('headerBanner', () =>
			customFetch('/informationBanner', { method: 'POST', body })
		)
		return headerBanner
	}
}

const headerService = new HeaderService()
export default headerService
