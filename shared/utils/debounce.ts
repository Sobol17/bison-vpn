export default function debounce(callback: () => void, delay: number) {
	let timer: ReturnType<typeof setTimeout> | null = null
	return () => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(callback, delay)
	}
}
