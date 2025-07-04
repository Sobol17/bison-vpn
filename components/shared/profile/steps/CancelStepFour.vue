<template>
	<div v-if="subscribeStore.cancellationFailed" class="cancellation">
		<div class="cancellation__icon">
			<img src="/icons/icon_heartbreak.svg" alt="" />
		</div>

		<h4 class="cancellation__title">Подписка отменена</h4>
		<p class="cancellation__text">К сожалению, вы потеряли доступ к ряду эксклюзивных функций:</p>

		<ul class="cancellation__list">
			<li class="cancellation__list-item" v-for="item in subscribeBenefits">
				<i class="cancellation__list-icon">
					<img src="/icons/input/icon_delete.svg" alt="" />
				</i>
				<span>{{ item }}</span>
			</li>
		</ul>
		<Button @click="globalStore.hideModals" class="cancellation__btn">Вернуть подписку</Button>
	</div>

	<div v-else class="cancellation">
		<img class="cancellation__img" src="/icons/icon_gift.svg" alt="" />

		<h4 class="cancellation__title">Скидка активирована!</h4>

		<p class="cancellation__text">
			Ваша скидка 30% на любой тариф сохранится, вы сможете <br />
			воспользоваться ей когда решите вернуться.
		</p>

		<Button @click="handleClick" class="cancellation__btn">В личный кабинет</Button>
	</div>
</template>

<script setup lang="ts">
import { subscribeBenefits } from '~/shared/data/globalData'
import { useMyGlobalStore } from '~/store/global'
import { useSubscriptionStore } from '~/store/subscribe'

const router = useRouter()

const globalStore = useMyGlobalStore()
const subscribeStore = useSubscriptionStore()

const handleClick = () => {
	globalStore.hideModals()
	router.push('/profile')
}
</script>

<style scoped lang="scss"></style>
