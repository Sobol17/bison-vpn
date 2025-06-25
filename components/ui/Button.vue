<template>
	<button @click="handleClick" class="button" :class="styleVariants">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
interface Props {
	secondary?: boolean
}

const props = defineProps<Props>()

const styleVariants = computed(() => {
	return { secondary: props.secondary }
})

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
	emit('click', event)
}
</script>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 10px;
	width: 100%;
	border-radius: 12px;
	background: $primary;
	padding: 16px;
	font-size: 16px;
	font-weight: 700;
	color: $black-90;
	transition: all 0.24s ease-in-out;
	text-wrap: nowrap;

	&:hover {
		background-color: $white;
	}

	&:active {
		background-color: $white;
		opacity: 0.6;
	}

	&.secondary {
		background-color: $black-90;
		color: $white;

		&:hover {
			background-color: $primary;
			color: $black-90;
		}

		&:active {
			color: #95db44;
		}
	}
}
</style>
