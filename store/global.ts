import { defineStore } from 'pinia'

export const useMyGlobalStore = defineStore('global', () => {
	const isLoginModalShow = ref(false)
	const isCopyChipShow = ref(false)

	const openLogin = () => {
		isLoginModalShow.value = true
	}

	const openCopyChip = () => {
		isCopyChipShow.value = true

		setTimeout(() => {
			isCopyChipShow.value = false
		}, 1400)
	}

	return { isLoginModalShow, openLogin, isCopyChipShow, openCopyChip }
})
