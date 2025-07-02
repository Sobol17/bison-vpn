<template>
	<button
		@click="handleClick"
		class="button"
		:class="styleVariants"
		:type="type ?? 'button'"
		:disabled="disabled"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
interface Props {
	secondary?: boolean
	tertiary?: boolean
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
}

const props = defineProps<Props>()

const styleVariants = computed(() => {
	return { secondary: props.secondary, tertiary: props.tertiary }
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

	&:active {
		background-color: $white;
	}

	&.secondary {
		background-color: $black-90;
		color: $white;

		&:active {
			background-color: $primary;
			color: $black-90;
		}
	}

	&.tertiary {
		background-color: transparent;
		color: $black-80;
		border: 0.5px dashed $black-80;

		&:active {
			background-color: $white;
			color: $black-90;
		}
	}

	&:disabled {
		background-color: $grey-60 !important;
	}
}

@media (hover: hover) and (pointer: fine) {
	.button {
		&:hover {
			background-color: $white;
		}

		&:active {
			background-color: $white;
			opacity: 0.6;
		}

		&.secondary {
			&:hover {
				background-color: $primary;
				color: $black-90;
			}

			&:active {
				color: #95db44;
			}
		}

		&.tertiary {
			&:hover {
				background-color: $white;
				color: $black-90;
			}

			&:active {
				opacity: 0.6;
				border: 0.5px dashed $grey-100;
				background: $grey-15;
			}
		}
	}
}
</style>
