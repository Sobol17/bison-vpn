<template>
	<div class="container compare-section">
		<div class="compare__title">VPN-ключ или приложение: в чем разница?</div>
		<p class="compare__text">
			Хотите максимальную анонимность, гибкость и безопасность? Ручная настройка VPN лучше, чем
			готовые приложения, ведь она дает полный контроль над соединением и не ограничивает вас в
			выборе серверов и протоколов. Сравните оба варианта и убедитесь сами!
		</p>
		<CompareTable class="compare-table" />

		<div class="compare-blocks">
			<CompareBlock v-for="block in computedCompareList" :key="block.name" :block="block" />
		</div>

		<Button v-if="!isAllCompareShow" @click="showAllCompare" class="compare-blocks__more" tertiary
			>Показать больше отзывов (+{{ compareList.length - 3 }})</Button
		>

		<div class="compare-conclusion">
			<div class="compare-conclusion__content">
				<div class="compare-conclusion__flex">
					<div class="compare-conclusion__title">Вывод:</div>
					<p class="compare-conclusion__text">
						Ручная настройка VPN-ключей дает вам больше свободы, анонимности и надежности. Вы
						получаете прозрачность <br />
						соединения, отсутствие рекламы, гибкость в выборе серверов и максимальную защиту данных.
					</p>
				</div>
				<div class="compare-conclusion__note">
					Исследование от <a href="/">toptechnohub</a> 24.03.25
				</div>
			</div>
			<img class="compare-conclusion__icon" src="/icons/home/icon_thumb-up.svg" alt="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { compareData } from '~/shared/data/homeData'

const compareList = ref(compareData)
const isAllCompareShow = ref(false)

const showAllCompare = () => {
	isAllCompareShow.value = !isAllCompareShow.value
}

const computedCompareList = computed(() => {
	return isAllCompareShow.value ? compareList.value : compareList.value.slice(0, 3)
})
</script>

<style scoped lang="scss">
.compare-section {
	margin: 80px auto;
}

.compare {
	&__title {
		color: $black-90;
		text-align: center;
		margin-bottom: 16px;
		font-size: 40px;
		font-weight: 700;
		line-height: 120%;
	}

	&__text {
		color: $black-80;
		text-align: center;

		font-size: 16px;
		font-weight: 400;
		line-height: 130%;
		margin-bottom: 32px;
	}

	&-table {
		@include big-mobile {
			display: none;
		}
	}

	&-blocks {
		display: none;

		@include big-mobile {
			display: flex;
			flex-direction: column;
			row-gap: 32px;
		}

		&__more {
			display: none;

			@include big-mobile {
				margin-top: 32px;
				display: flex;
			}
		}
	}

	&-conclusion {
		margin-top: 50px;
		margin-bottom: 80px;
		border-radius: 20px;
		border: 0.5px solid #d5d8e3;
		background: $grey-15;
		padding: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 16px;

		@include big-mobile {
			padding: 16px;
			margin-top: 32px;
		}

		&__title {
			color: $black-100;
			font-size: 50px;
			font-weight: 700;
			line-height: 130%;
			letter-spacing: -1px;

			@include big-mobile {
				font-size: 28px;
			}
		}

		&__text {
			color: $black-80;
			font-size: 16px;
			line-height: 1.3;
		}

		&__flex {
			display: flex;
			align-items: center;
			column-gap: 16px;

			@include big-mobile {
				flex-direction: column;
				align-items: start;
				row-gap: 12px;
			}
		}

		&__note {
			margin-top: 32px;
			font-size: 14px;
			color: $grey-100;

			a {
				color: $grey-100;
				text-decoration-line: underline;
				text-decoration-style: solid;
				text-decoration-skip-ink: auto;
				text-decoration-thickness: auto;
				text-underline-offset: auto;
				text-underline-position: from-font;
			}
		}

		&__icon {
			@include big-mobile {
				display: none;
			}
		}
	}
}
</style>
