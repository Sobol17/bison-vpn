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
			<CompareBlock v-for="block in compareData" :block="block" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { compareData } from '~/shared/data/homeData'
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
	}
}
</style>
