class AuthService {
	async login(body = {}) {
		await useAsyncData('login', () => customFetch('/login', { method: 'POST', body }))
	}

	async register(body = {}) {
		await useAsyncData('register', () => customFetch('/login', { method: 'POST', body }))
	}

	async checkAuth() {
		const res = await useAsyncData('/api/auth/me', () =>
			customFetch('/api/auth/me', { method: 'GET' })
		)

		return res
	}

	async logout() {
		await useAsyncData('/api/auth/logout', () => customFetch('/api/auth/logout', { method: 'GET' }))
		navigateTo('/login')
	}
}

const authService = new AuthService()
export default authService
