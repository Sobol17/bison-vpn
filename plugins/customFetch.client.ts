import { navigateTo, useCookie, useRoute, type CookieRef } from '#app'

export default defineNuxtPlugin(() => {
	const token: CookieRef<string> = useCookie('access_token')
	const route = useRoute()

	const customFetch = $fetch.create({
		baseURL: 'http://localhost:8000',

		credentials: 'include',

		headers: {
			Accept: 'application/json',
			Authorization: token.value ? `Bearer ${token.value}` : '',
		},

		onRequest({ options }) {
			options.headers = new Headers(options.headers || {})
			options.headers.set('accept', 'application/json')
			options.headers.set('withCredentials', 'true')
			options.credentials = 'include'

			if (token.value) {
				options.headers.set('Authorization', `Bearer ${token.value}`)
			}
		},

		onResponseError({ response }) {
			if (response.status === 401 && route.path !== '/login') {
				token.value = ''
				navigateTo('/')
			}
		},
	})

	return {
		provide: {
			customFetch,
		},
	}
})
