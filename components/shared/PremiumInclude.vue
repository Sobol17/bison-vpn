<template>
	<div class="include">
		<div class="include__icon">{{ icon }}</div>
		<div class="include__title">{{ title }}</div>
		<div class="include__text">{{ text }}</div>
	</div>
</template>

<script setup lang="ts">
import type { IPremiumInclude } from '~/shared/types/home-page.types'

defineProps<IPremiumInclude>()
</script>

<style scoped lang="scss">
.include {
	border-radius: 20px;
	background: $black-80;
	padding: 24px 24px 30px 24px;
	text-align: center;

	&__icon {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: $black-60;
		margin: 0px auto 16px auto;
	}

	&__title {
		margin-bottom: 6px;
		color: $white;
		font-weight: 600;
		font-size: 20px;
	}

	&__text {
		font-size: 16px;
		line-height: 1.3;
		color: $grey-60;
	}
}
</style>
