<template>
	<div class="circle" :class="{ active: active }"><slot></slot></div>
</template>

<script setup lang="ts">
interface Props {
	active?: boolean
}
defineProps<Props>()
</script>

<style scoped lang="scss">
.circle {
	flex-shrink: 0;
	font-size: 12px;
	font-weight: 800;
	line-height: 1.3;
	color: $white;
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: $grey-60;
	border-radius: 50%;
	position: relative;

	&:before {
		width: 18px;
		height: 18px;
		display: block;
		content: '';
		border-radius: 50%;
		border: 1px solid $white;
		position: absolute;
		z-index: 1;
	}

	&.active {
		background-color: $accent;
	}
}
</style>
