<template>
	<div class="tariffs-items">
		<TariffCard
			class="tariffs-item"
			v-for="tariff in tariffsData"
			:tariff="tariff"
			:key="tariff.name"
		/>
	</div>
	<div class="tariffs-payments">
		<img v-for="(src, index) in tariffsPaymentIcons" :key="index" :src="src" alt="" />
	</div>
</template>

<script lang="ts" setup>
import { tariffsData, tariffsPaymentIcons } from '~/shared/data/homeData'
</script>

<style scoped lang="scss">
.tariffs {
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

	&-payments {
		margin-top: 40px;
		display: flex;
		justify-content: center;
		width: 100%;
		align-items: center;
		column-gap: 18px;

		@include big-mobile {
			column-gap: 8px;
		}
	}
}
</style>
