export default defineEventHandler(event => {
	const token = parseCookies(event).access_token
	if (!token) throw createError({ statusCode: 401 })

	return { user: token }
})
