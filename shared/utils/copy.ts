// composables/useCopyToClipboard.ts

import { ref } from 'vue'

export function useCopyToClipboard() {
	const copiedText = ref<string | null>(null)
	const isCopying = ref<boolean>(false)
	const error = ref<Error | null>(null)

	async function copy(text: string) {
		isCopying.value = true
		error.value = null

		try {
			if (navigator.clipboard && window.isSecureContext) {
				// Современный способ через Clipboard API
				await navigator.clipboard.writeText(text)
			} else {
				// Резервный метод через document.execCommand (для старых браузеров)
				const textarea = document.createElement('textarea')
				textarea.value = text
				textarea.style.position = 'fixed'
				textarea.style.opacity = '0'
				document.body.appendChild(textarea)
				textarea.focus()
				textarea.select()
				document.execCommand('copy')
				document.body.removeChild(textarea)
			}

			copiedText.value = text
		} catch (err) {
			error.value = err instanceof Error ? err : new Error('Failed to copy text')
		} finally {
			isCopying.value = false
		}
	}

	return {
		copy,
		copiedText,
		isCopying,
		error,
	}
}
