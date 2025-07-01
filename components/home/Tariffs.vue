<template>
	<div class="container tariffs">
		<h3 class="tariffs-title">Тарифы</h3>
		<div class="tariffs-items">
			<TariffCard
				class="tariffs-item"
				v-for="tariff in tariffsData"
				:tariff="tariff"
				:key="tariff.name"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { tariffsData } from '~/shared/data/homeData'
</script>

<style scoped lang="scss">
.tariffs {
	margin: 80px auto;

	&-title {
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		line-height: 120%;
		color: $black-90;
	}

	&-items {
		margin-top: 32px;
		display: flex;
		align-items: stretch;
		gap: 24px;

		@include tablet {
			flex-wrap: wrap;
		}
	}

	&-item {
		flex: 1;

		@include tablet {
			flex: 1 1 100%;
		}
	}
}
</style>
