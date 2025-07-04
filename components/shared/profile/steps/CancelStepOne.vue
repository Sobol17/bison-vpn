<template>
	<div class="cancellation">
		<div class="cancellation__icon">
			<img src="/icons/icon_warning.svg" alt="" />
		</div>

		<h4 class="cancellation__title">Вы уверены, что хотите отменить подписку?</h4>
		<p class="cancellation__text">
			Отменив подписку, вы потеряете доступ к следующим <br />
			эксклюзивным функциям:
		</p>

		<ul class="cancellation__list">
			<li class="cancellation__list-item" v-for="item in subscribeBenefits">
				<i class="cancellation__list-icon">
					<img src="/icons/input/icon_delete.svg" alt="" />
				</i>
				<span>{{ item }}</span>
			</li>
		</ul>
		<Button @click="globalStore.hideModals" class="cancellation__btn">Нет, вернуться назад</Button>
		<Button
			@click="subscribeStore.continueCancellation"
			secondary
			class="cancellation__btn cancellation__btn--bottom"
			>Отменить подписку</Button
		>
	</div>
</template>

<script setup lang="ts">
import { subscribeBenefits } from '~/shared/data/globalData'
import { useMyGlobalStore } from '~/store/global'
import { useSubscriptionStore } from '~/store/subscribe'

const globalStore = useMyGlobalStore()
const subscribeStore = useSubscriptionStore()
</script>

<style scoped lang="scss"></style>
