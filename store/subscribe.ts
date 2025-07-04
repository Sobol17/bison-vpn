import { defineStore } from 'pinia'
import { cancellationReasons } from '~/shared/data/globalData'

export const useSubscriptionStore = defineStore('subscription', () => {
	const isSubscriptionSuccess = ref(true)

	const cancellationStep = ref(1)
	const cancellationFailed = ref(true)
	const selectedCancellationReason = ref(cancellationReasons[0])

	const continueCancellation = () => {
		cancellationStep.value++
	}

	const agreeOnDiscount = () => {
		cancellationFailed.value = false
		cancellationStep.value = 4
	}

	const agreeOnTrial = () => {}

	return {
		isSubscriptionSuccess,
		cancellationStep,
		continueCancellation,
		selectedCancellationReason,
		agreeOnDiscount,
		agreeOnTrial,
		cancellationFailed,
	}
})
