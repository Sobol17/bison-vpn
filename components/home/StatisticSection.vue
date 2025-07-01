<template>
	<div class="container statistic">
		<StatsBlock
			class="statistic-block"
			v-for="item in statisticsData"
			:title="item.title"
			:text="item.text"
			:show-icon="item.showIcon"
		/>
	</div>
</template>

<script setup>
import { statisticsData } from '~/shared/data/homeData'
</script>

<style lang="scss" scoped>
.statistic {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;

	@include big-mobile {
		flex-direction: column;
	}

	&-block {
		flex: 0 1 calc(25% - 20px);

		@include big-mobile {
			flex: 0 1 100%;
		}
	}
}
</style>
