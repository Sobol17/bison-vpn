<template>
	<div class="cancellation">
		<div class="cancellation__icon">
			<img src="/icons/question-mark.svg" alt="" />
		</div>

		<h4 class="cancellation__title">
			Пожалуйста, <br />
			укажите причину отмены подписки
		</h4>

		<div class="cancellation__reasons">
			<SubscribeVariant
				v-for="reason in cancellationReasons"
				:id="reason.id"
				:active="reason.id === subscribeStore.selectedCancellationReason.id"
				:label="reason.label"
				@set-active="subscribeStore.selectedCancellationReason = reason"
			/>
		</div>

		<Textarea
			v-if="subscribeStore.selectedCancellationReason.id === 4"
			class="cancellation__textarea"
			placeholder="Введите причину"
		/>

		<Button @click="globalStore.hideModals" class="cancellation__btn">Вернуться назад</Button>
		<Button
			@click="subscribeStore.continueCancellation"
			secondary
			class="cancellation__btn cancellation__btn--bottom"
			>Отменить подписку</Button
		>
	</div>
</template>

<script setup lang="ts">
import { cancellationReasons } from '~/shared/data/globalData'
import { useMyGlobalStore } from '~/store/global'
import { useSubscriptionStore } from '~/store/subscribe'

const subscribeStore = useSubscriptionStore()
const globalStore = useMyGlobalStore()
</script>

<style scoped lang="scss"></style>
