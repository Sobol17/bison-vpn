export default defineNuxtPlugin(() => {
	const route = useRoute()

	const customFetch = $fetch.create({
		baseURL: 'http://localhost:8000',
		credentials: 'include',

		onRequest({ options }) {
			options.headers = new Headers(options.headers || {})
			options.headers.set('accept', 'application/json')
		},

		onResponseError({ response }) {
			if (response.status === 401 && route.path !== '/login') {
				navigateTo('/login')
			}
		},
	})

	return {
		provide: {
			customFetch,
		},
	}
})
