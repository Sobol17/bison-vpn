<template>
	<NuxtLink :to="link" class="device">
		<component :is="icon" v-if="icon" />
		<span class="device__label">{{ label }} <ArrowRight /></span>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'

interface Props {
	icon: DefineComponent<{}, {}, any> | null
	link: string
	label: string
}
defineProps<Props>()
</script>

<style scoped lang="scss">
.device {
	padding: 24px;
	border-radius: 20px;
	border: 0.5px solid #d5d8e3;
	background: $grey-15;
	display: flex;
	flex-direction: column;
	row-gap: 22px;
	align-items: center;
	transition: all 0.24s ease-in-out;

	&:hover {
		background-color: $black-90;
		color: $white;
	}

	&:active {
		background-color: $black-90;
		color: rgba(255, 255, 255, 0.6);
		opacity: 0.6;
	}

	&__label {
		display: flex;
		align-items: center;
		column-gap: 10px;
		font-size: 22px;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
	}
}
</style>
