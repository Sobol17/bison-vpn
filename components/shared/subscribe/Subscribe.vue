<template>
	<Modal>
		<div class="subscribe">
			<div class="subscribe__left">
				<form @submit.prevent="handleSubscribe" class="subscribe__left-form">
					<h3 class="subscribe__title">Cтать Premium</h3>
					<p class="subscribe__text subscribe__description">
						Укажите почту, чтобы мы могли прислать вам детали подписки
					</p>
					<Input placeholder="Email" v-model="email" type="email" />
					<p class="subscribe__hint">Пожалуйста, убедитесь, что имеете доступ к почте</p>
					<p class="subscribe__text subscribe__subtitle">Выберите тариф</p>
					<div class="subscribe__variants">
						<SubscribeVariant
							v-for="variant in subscribeVariants"
							:id="variant.id"
							:key="variant.id"
							:active="variant.id === selectedVariant.id"
							:price="variant.price"
							:duration="variant.duration"
							:detailPriceText="variant.detailPriceText"
							:tag="variant.tag"
							@setActive="setActiveVariant(variant)"
						/>
					</div>
					<p class="subscribe__hint">
						На все тарифы действует пробный период <span>10 дней всего за 19 руб.</span>
					</p>
					<div class="subscribe__bottom">
						<Button class="subscribe__btn" type="submit"
							>Стать Premium на 10 дней за 19 руб.</Button
						>
						<p class="subscribe__hint subscribe__hint--center">
							Нажимая на кнопку, вы соглашаетесь с
							<NuxtLink to="/">политикой конфиденциальности</NuxtLink> и <br />
							<NuxtLink to="/">пользовательским соглашением</NuxtLink>
						</p>
					</div>
				</form>
			</div>
			<div class="subscribe__right">
				<h3 class="subscribe__right-head">
					<span class="subscribe__right-title">🏆 Premium на 12 месяцев</span>
					<span class="subscribe__right-trigger">19 руб.</span>
				</h3>
				<div class="subscribe__right-info">Сейчас вы платите <span>всего 19 руб.</span></div>
				<p class="subscribe__text">
					Затем с 16.02 за 6 мес. - 1990 р. (100 р. / мес). <br />
					Отменить подписку можно в любой момент. Мы также пришлем уведомление о завершении
					триал-периода на указанную вами почту.
				</p>
				<ul class="subscribe__list">
					<li v-for="(item, index) in subscribeBenefits" :key="index">
						<span class="subscribe__list-icon"
							><img src="/icons/input/icon_check.svg" alt=""
						/></span>
						<span>{{ item }}</span>
					</li>

					<li class="subscribe__list-blocks">
						<RatingBenefitBlock />
						<SpeedBenefitBlock />
					</li>
				</ul>

				<div class="subscribe__bottom subscribe__bottom--mobile">
					<Button @click="handleSubscribe" class="subscribe__btn"
						>Стать Premium на 10 дней за 19 руб.</Button
					>
					<p class="subscribe__hint subscribe__hint--center">
						Нажимая на кнопку, вы соглашаетесь с
						<NuxtLink to="/">политикой конфиденциальности</NuxtLink> и <br />
						<NuxtLink to="/">пользовательским соглашением</NuxtLink>
					</p>
				</div>
			</div>
		</div>
	</Modal>
</template>

<script lang="ts" setup>
import subscribeService from '~/services/subscribe.service'
import { subscribeBenefits, subscribeVariants } from '~/shared/data/globalData'
import type { SubscribeVariant } from '~/shared/types/global.types'

const email = ref('')

const selectedVariant = ref<SubscribeVariant>(subscribeVariants[0])

const setActiveVariant = (variant: SubscribeVariant) => {
	selectedVariant.value = variant
}

const handleSubscribe = async () => {
	await subscribeService.subscribe({
		email: email.value,
		variant: selectedVariant.value,
	})
}
</script>

<style scoped lang="scss">
.subscribe {
	padding: 50px;
	display: flex;
	align-items: center;
	column-gap: 50px;

	@include tablet {
		flex-direction: column;
		row-gap: 32px;
	}

	@include big-mobile {
		padding: 24px 16px;
	}

	&__left {
		flex: 0 1 calc(50% - 25px);

		@include tablet {
			flex: 0 1 100%;
			width: 100%;
		}

		&-form {
			padding-right: 50px;
			border-right: 1px solid $black-80;

			@include tablet {
				padding-right: 0;
				border-right: none;
				border-bottom: 1px solid $black-80;
				padding-bottom: 32px;
			}
		}
	}

	&__title {
		color: $grey-20;
		font-size: 32px;
		font-weight: 700;
		line-height: 130%;
		margin-bottom: 16px;

		@include big-mobile {
			font-size: 24px;
		}
	}

	&__subtitle {
		margin-top: 30px;
		margin-bottom: 14px;
	}

	&__text {
		color: $grey-60;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 130%;

		@include big-mobile {
			font-size: 14px;
		}
	}

	&__description {
		margin-bottom: 14px;
	}

	&__hint {
		color: $grey-100;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 120%;
		margin-top: 12px;

		span {
			color: $white;
		}

		&--center {
			text-align: center;
		}

		a {
			color: $white;
			text-decoration-line: underline;
			text-decoration-style: dotted;
			text-decoration-skip-ink: auto;
			text-decoration-thickness: auto;
			text-underline-offset: auto;
			text-underline-position: from-font;
		}
	}

	&__variants {
		display: flex;
		flex-direction: column;
		row-gap: 16px;

		@include big-mobile {
			row-gap: 32px;
		}
	}

	&__btn {
		margin-top: 32px;
	}

	&__right {
		flex: 0 1 calc(50% - 25px);

		&-head {
			display: flex;
			align-items: center;
			justify-content: space-between;

			@include big-mobile {
				margin-bottom: 10px;
			}
		}

		&-title {
			text-wrap: nowrap;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 130%;
			color: $grey-20;

			@include big-mobile {
				font-size: 18px;
			}
		}

		&-trigger {
			margin-left: auto;
			text-wrap: nowrap;
			color: $grey-20;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 130%;
			padding: 14px;
			border-radius: 12px;
			background: $black-80;

			@include big-mobile {
				display: none;
			}
		}

		&-info {
			color: $grey-20;
			margin-bottom: 10px;
			font-size: 18px;
			font-weight: 500;
			line-height: 140%;

			@include big-mobile {
				font-size: 14px;
			}

			span {
				color: $accent;
			}
		}
	}

	&__list {
		margin-top: 32px;
		padding: 24px;
		border-radius: 12px;
		background: $black-80;
		backdrop-filter: blur(6.5px);
		display: flex;
		flex-direction: column;
		row-gap: 14px;

		@include big-mobile {
			display: none;
		}

		li {
			display: flex;
			align-items: center;
			column-gap: 8px;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 130%;
			color: $grey-20;
		}

		&-icon {
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background: $black-60;
		}

		&-blocks {
			display: flex;
			justify-content: space-between;
			margin-top: 32px;
		}
	}

	&__bottom {
		@include big-mobile {
			display: none;
		}

		&--mobile {
			display: none;

			@include big-mobile {
				display: block;
			}
		}
	}
}
</style>
