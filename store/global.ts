import { defineStore } from 'pinia'

export const useMyGlobalStore = defineStore('global', () => {
	const isLoginModalShow = ref(false)
	const isSubscribeModalShow = ref(false)
	const isCopyChipShow = ref(false)
	const isDeletingAccountModal = ref(false)
	const isEmailChangingModal = ref()
	const isCancellationModalShow = ref()

	const openLogin = () => {
		isLoginModalShow.value = true
	}

	const openSubscribe = () => {
		isSubscribeModalShow.value = true
	}

	const openDeleteAccountModal = () => {
		isDeletingAccountModal.value = true
	}

	const openEmailChangeModal = () => {
		isEmailChangingModal.value = true
	}

	const openCancellationModal = () => {
		isCancellationModalShow.value = true
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
		isDeletingAccountModal.value = false
		isEmailChangingModal.value = false
		isCancellationModalShow.value = false
	}

	return {
		isLoginModalShow,
		openLogin,
		isCopyChipShow,
		openCopyChip,
		openSubscribe,
		isSubscribeModalShow,
		hideModals,
		isDeletingAccountModal,
		openDeleteAccountModal,
		openEmailChangeModal,
		isEmailChangingModal,
		openCancellationModal,
		isCancellationModalShow,
	}
})
