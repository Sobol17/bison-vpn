export function customFetch(url: string, options: any) {
	const { $customFetch } = useNuxtApp()
	return $customFetch(url, {
		...options,
	})
}
