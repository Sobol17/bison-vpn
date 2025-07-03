<template>
	<div v-if="!subscriptionStore.isSubscriptionSuccess" class="container result">
		<img class="result__img" src="/images/subscription/done.gif" alt="" />
		<h1 class="result__title">Подписка успешно оплачена!</h1>
		<p class="result__text">
			Подписка “VIP” на 1 месяц активна. Теперь вам доступны эксклюзивные <br />
			функции.
			<NuxtLink to="/">Протестируйте их</NuxtLink>
			прямо сейчас
		</p>
		<Button class="result__btn">Получить Premium ключ</Button>

		<div class="includes">
			<h3 class="includes__title">Эксклюзивные функци:</h3>
			<PremiumIncludesList />
			<p class="includes__text">
				Управляйте подпиской в личном кабинете. Если у вас возникли вопросы, <br />
				свяжитесь с нашей
				<NuxtLink to="/">технической поддержкой</NuxtLink>
			</p>
		</div>
	</div>
	<div v-else class="container result failed">
		<img class="result__img" src="/images/subscription/failed.gif" alt="" />
		<h1 class="result__title">Произошла ошибка оплаты</h1>
		<p class="result__text result__text--failed">
			К сожалению, нам не удалось завершить оплату, возможно возник технический сбой. <br />
			Попробуйте повторить платеж или обратитесь в
			<NuxtLink to="/">нашу службу поддержки </NuxtLink>
		</p>
		<Button class="result__btn">Попробовать еще раз </Button>
	</div>
</template>

<script lang="ts" setup>
import { useSubscriptionStore } from '~/store/subscribe'

const subscriptionStore = useSubscriptionStore()
</script>

<style scoped lang="scss">
.result {
	text-align: center;

	&__img {
		width: 382px;
		height: 382px;
		margin: 0 auto;

		@include big-mobile {
			width: 328px;
			height: 328px;
		}
	}

	&__title {
		color: $black-90;
		text-align: center;

		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
		letter-spacing: 0.96px;
		margin-bottom: 16px;

		@include big-mobile {
			font-size: 28px;
		}
	}

	&__text {
		color: $black-90;
		text-align: center;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%;

		@include big-mobile {
			font-size: 16px;

			br {
				display: none;
			}
		}

		a {
			font-weight: 600;
			color: $accent;
			text-decoration-line: underline;
			text-decoration-style: dotted;
			text-decoration-skip-ink: none;
			text-decoration-thickness: auto;
			text-underline-offset: auto;
			text-underline-position: from-font;
		}

		&--failed {
			a {
				color: $black-90;
			}
		}
	}

	&__btn {
		margin-top: 32px;
		max-width: 464px;
		margin: 32px auto;
	}
}

.failed {
	margin-bottom: 250px;
}

.includes {
	margin: 80px auto;

	@include big-mobile {
		margin: 50px auto;
	}

	&__title {
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 130%;
		color: $black-90;
		text-align: center;

		@include big-mobile {
			font-size: 24px;
		}
	}

	&__text {
		margin-top: 32px;
		color: #71757b;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%;

		a {
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-skip-ink: none;
			text-decoration-thickness: auto;
			text-underline-offset: auto;
			text-underline-position: from-font;
			color: $black-90;
			font-weight: 500;
		}
	}
}
</style>
