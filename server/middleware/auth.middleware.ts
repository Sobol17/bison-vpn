// /server/middleware/auth.middleware.ts
import { defineNitroPlugin } from '#imports'
import type { H3Event } from 'h3'

export default defineNitroPlugin(nitroApp => {
	nitroApp.hooks.hook('request', async (event: H3Event) => {
		const url = event.node.req.url
		const publicPaths = ['/login', '/api/login']

		if (publicPaths.some(path => url?.startsWith(path))) return

		const cookies = parseCookies(event)
		const token = cookies.access_token

		if (!token) {
			if (url?.startsWith('/api')) {
				throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
			} else {
				return sendRedirect(event, '/login')
			}
		}
	})
})

function parseCookies(event: H3Event): Record<string, string> {
	const cookieHeader = event.node.req.headers.cookie || ''
	return Object.fromEntries(
		cookieHeader
			.split('; ')
			.map<[string, string]>((c: string) => {
				const [key, value] = c.split('=', 2)
				return [decodeURIComponent(key), decodeURIComponent(value || '')]
			})
			.filter(([key]) => key)
	)
}
