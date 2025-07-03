export default defineEventHandler(async event => {
	const body = await readBody(event)

	const accessToken = await fetchAccessTokenFromBackend(body.email)

	setCookie(event, 'access_token', accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7, // 7 дней
		path: '/',
	})

	return { success: true }
})

async function fetchAccessTokenFromBackend(email: string) {
	const response = await fetch('https://your-backend.com/api/auth ', {
		method: 'POST',
		body: JSON.stringify({ email }),
		headers: { 'Content-Type': 'application/json' },
	})
	const data = await response.json()
	return data.access_token
}
