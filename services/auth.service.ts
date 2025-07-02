class AuthService {
	async login(body = {}) {
		await useAsyncData('login', () => customFetch('/login', { method: 'POST', body }))
	}

	async register(body = {}) {
		await useAsyncData('register', () => customFetch('/login', { method: 'POST', body }))
	}
}

const authService = new AuthService()
export default authService
