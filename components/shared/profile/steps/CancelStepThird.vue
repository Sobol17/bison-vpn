<template>
	<div v-if="subscribeStore.selectedCancellationReason.id === 2" class="cancellation">
		<img class="cancellation__img" src="/icons/icon_gift.svg" alt="" />

		<h4 class="cancellation__title">
			Дарим вам скидку 30% на оформление <br />
			тарифа в следующем месяце
		</h4>

		<p class="cancellation__text">
			Сожалеем о решении отменить пластинку. Не теряем надежды, <br />
			что Вы передумаете и останетесь с нами!
		</p>

		<Button @click="subscribeStore.agreeOnDiscount" class="cancellation__btn"
			>Согласиться на скидку 30%</Button
		>
		<Button
			@click="subscribeStore.continueCancellation"
			secondary
			class="cancellation__btn cancellation__btn--bottom"
			>Отказаться от подарка и отменить подписку</Button
		>

		<div class="cancellation__note">Внимание: данное предложение действует всего один раз</div>
	</div>
	<div v-else-if="subscribeStore.selectedCancellationReason.id === 3" class="cancellation">
		<img class="cancellation__img" src="/icons/icon_gift.svg" alt="" />

		<h4 class="cancellation__title">Не прощаемся навсегда!</h4>

		<p class="cancellation__text">
			Ваша скидка 30% на любой тариф сохранится, вы сможете <br />
			воспользоваться ей когда решите вернуться.
		</p>

		<Button @click="subscribeStore.agreeOnDiscount" class="cancellation__btn"
			>Согласиться на скидку 30%</Button
		>
		<Button
			@click="subscribeStore.continueCancellation"
			secondary
			class="cancellation__btn cancellation__btn--bottom"
			>Отказаться от подарка и отменить подписку</Button
		>

		<div class="cancellation__note">Внимание: данное предложение действует всего один раз</div>
	</div>
	<div v-else-if="subscribeStore.selectedCancellationReason.id === 4" class="cancellation">
		<img class="cancellation__img" src="/icons/icon_gift.svg" alt="" />

		<h4 class="cancellation__title">
			Дарим вам 30 дней бесплатного <br />
			использования сервиса!
		</h4>

		<p class="cancellation__text">
			Сожалеем о решении отменить подписку 😔 <br />Не теряем надежды, что Вы передумаете и
			останетесь с нами!
		</p>

		<Button @click="agreeTrial" class="cancellation__btn">Согласиться на 30 подарчных дней </Button>
		<Button
			@click="subscribeStore.continueCancellation"
			secondary
			class="cancellation__btn cancellation__btn--bottom"
			>Отказаться от подарка и отменить подписку</Button
		>

		<div class="cancellation__note">Внимание: данное предложение действует всего один раз</div>
	</div>
	<div v-else-if="subscribeStore.selectedCancellationReason.id === 1" class="cancellation">
		<img class="cancellation__img" src="/icons/icon_gear.svg" alt="" />

		<h4 class="cancellation__title">Уверены, мы найдем решение проблемы!</h4>

		<p class="cancellation__text">
			Пожалуйста, дайте нам шанс помочь вам настроить VPN. <br />Наша онлайн поддержка в telegram
			готова помочь вам 24/7.
		</p>

		<Button @click="globalStore.hideModals" class="cancellation__btn"
			>Обратиться в тех. поддержку
		</Button>
		<Button
			@click="subscribeStore.continueCancellation"
			secondary
			class="cancellation__btn cancellation__btn--bottom"
			>Отказаться от помощи и отменить подписку</Button
		>

		<div class="cancellation__note">Внимание: данное предложение действует всего один раз</div>
	</div>
</template>

<script setup lang="ts">
import { useMyGlobalStore } from '~/store/global'
import { useSubscriptionStore } from '~/store/subscribe'

const subscribeStore = useSubscriptionStore()
const globalStore = useMyGlobalStore()

const agreeTrial = () => {
	globalStore.hideModals()
	subscribeStore.agreeOnTrial()
}
</script>

<style scoped lang="scss"></style>
