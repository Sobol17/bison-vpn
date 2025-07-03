<template>
	<div class="premium-includes__items">
		<PremiumInclude
			class="premium-includes__item"
			v-for="item in premiumIncludesData"
			:icon="item.icon"
			:text="item.text"
			:title="item.title"
		/>
	</div>
</template>

<script lang="ts" setup>
import { premiumIncludesData } from '~/shared/data/homeData'
</script>

<style scoped lang="scss">
.premium-includes {
	&__items {
		margin-top: 32px;
		display: flex;
		align-items: stretch;
		gap: 24px;
		flex-wrap: wrap;
	}

	&__item {
		flex: 0 1 calc(25% - 18px);

		@include tablet {
			flex: 0 1 calc(33% - 18px);
		}

		@include big-mobile {
			flex: 0 1 100%;
		}
	}
}
</style>
