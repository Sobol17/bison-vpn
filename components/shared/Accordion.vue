<template>
	<div class="accordion">
		<div @click="toggleOpen" class="accordion__head" :class="{ active: isOpen }">
			<span class="accordion__title">{{ title }}</span>
			<button class="accordion__btn">
				<AccordionArrow class="accordion__arrow" :class="{ rotate: isOpen }" />
			</button>
		</div>
		<transition name="fade">
			<div v-if="isOpen" class="accordion__content">
				<p>{{ openText }}</p>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title: string
	openText: string
}

const isOpen = ref(false)

const toggleOpen = () => {
	isOpen.value = !isOpen.value
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.accordion {
	padding-bottom: 24px;
	border-bottom: 0.5px solid #e0e0e0;

	&__head {
		display: flex;
		align-items: start;
		justify-content: space-between;
		cursor: pointer;

		&.active {
			.accordion__title {
				color: $accent;
			}

			.accordion__arrow {
				color: $accent;
			}
		}

		&:hover {
			.accordion__title {
				color: $accent;
			}

			.accordion__arrow {
				color: $accent;
			}
		}
	}

	&__title {
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
		letter-spacing: -0.16px;
		color: #26272c;
		transition: all 0.24s ease-in-out;
	}

	&__arrow {
		transition: all 0.24s ease-in-out;
		color: $white;
	}

	&__btn {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: #26272c;
		flex-shrink: 0;
	}

	&__content {
		margin-top: 12px;
		color: #26272c;
		font-size: 14px;
		font-weight: 400;
		line-height: 130%;
		letter-spacing: -0.14px;
	}
}

.rotate {
	transform: rotate(180deg);
}
</style>
