export default defineEventHandler(event => {
	setCookie(event, 'auth_token', '', { maxAge: 0 })
	return { success: true }
})
