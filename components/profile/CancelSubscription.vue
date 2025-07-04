<template>
	<Modal>
		<CancelStepOne v-if="subscribeStore.cancellationStep === 1" />
		<CancelStepTwo v-else-if="subscribeStore.cancellationStep === 2" />
		<CancelStepThird v-else-if="subscribeStore.cancellationStep === 3" />
		<CancelStepFour v-else-if="subscribeStore.cancellationStep === 4" />
	</Modal>
</template>

<script lang="ts" setup>
import { useSubscriptionStore } from '~/store/subscribe'

const subscribeStore = useSubscriptionStore()
</script>

<style scoped lang="scss"></style>
