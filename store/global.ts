import { defineStore } from 'pinia'

export const useMyGlobalStore = defineStore('global', () => {
	const isLoginModalShow = ref(false)
	const isSubscribeModalShow = ref(false)
	const isCopyChipShow = ref(false)

	const openLogin = () => {
		isLoginModalShow.value = true
	}

	const openSubscribe = () => {
		isSubscribeModalShow.value = true
	}

	const openCopyChip = () => {
		isCopyChipShow.value = true

		setTimeout(() => {
			isCopyChipShow.value = false
		}, 1400)
	}

	const hideModals = () => {
		isLoginModalShow.value = false
		isSubscribeModalShow.value = false
	}

	return {
		isLoginModalShow,
		openLogin,
		isCopyChipShow,
		openCopyChip,
		openSubscribe,
		isSubscribeModalShow,
		hideModals,
	}
})
