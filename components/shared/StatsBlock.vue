<template>
	<div class="statistic__item">
		<div class="statistic__item-title">
			<img v-if="showIcon" src="/icons/icon_arrow-up.svg" alt="" />
			<span>{{ title }}</span>
		</div>
		<p class="statistic__item-text">{{ text }}</p>
	</div>
</template>

<script setup lang="ts">
interface Props {
	showIcon?: boolean
	title: string
	text: string
}
defineProps<Props>()
</script>

<style scoped lang="scss">
.statistic {
	&__item {
		padding: 24px 32px;
		border-radius: 20px;
		border: 0.5px solid #d8d8d8;
		background: #f0f0f0;

		&-title {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 50px;
			line-height: 700;
			line-height: 1.3;
			color: $black-90;
			column-gap: 10px;
			span {
				text-wrap: nowrap;
			}
		}

		&-text {
			margin-top: 6px;
			font-size: 16px;
			line-height: 1.3;
			color: $grey-100;
			text-align: center;
		}
	}
}
</style>
