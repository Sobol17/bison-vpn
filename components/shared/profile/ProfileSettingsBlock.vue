<template>
	<div @click="handleClick" class="block">
		<slot name="start"></slot>
		<div>
			<div class="block__text">{{ title }}</div>
			<div class="block__text block__text--grey">{{ contentText }}</div>
		</div>
		<div class="block-end">
			<slot name="end"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	title: string
	contentText: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
	emit('click', event)
}
</script>

<style lang="scss" scoped>
.block {
	width: 100%;
	flex-shrink: 0;
	&__text {
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
		color: $black-90;

		&--grey {
			color: $grey-100;
			font-size: 14px;
		}
	}

	padding: 16px;
	border-radius: 12px;
	border: 0.5px solid #d5d8e3;
	background: $grey-20;
	display: flex;
	align-items: center;
	column-gap: 14px;
	transition: all 0.24s ease-in-out;
	cursor: pointer;

	&:hover {
		border-color: transparent;
		background-color: $grey-30;

		.settings__block-end {
			color: $black-90;
		}
	}

	&-end {
		margin-left: auto;
		color: $grey-100;
	}

	&-btn {
		padding: 10px;
		transition: color 0.24s ease-in-out;
		color: $grey-100;

		&:hover {
			color: $black-90;
		}

		&:disabled {
			color: $grey-25;
		}
	}
}
</style>
