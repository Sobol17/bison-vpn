<template>
	<div @click="handleClick" class="sub" :class="{ active }">
		<span class="sub__circle">
			<span class="sub__circle-dot"></span>
		</span>
		<div class="sub__label" :class="{ full: !price }">{{ label }}</div>
		<div class="sub__price" v-if="price">
			{{ price }} р. <span class="sub__price-detail">({{ detailPriceText }})</span>
		</div>
		<div v-if="tag === 'recommended'" class="sub__badge green">RECCOMMENDED</div>
		<div v-else-if="tag === 'profitable'" class="sub__badge">🔥 Most profitable</div>
	</div>
</template>

<script lang="ts" setup>
import type { SubscribeVariant } from '~/shared/types/global.types'

const props = defineProps<SubscribeVariant>()

const emits = defineEmits<{
	(e: 'setActive', variant: SubscribeVariant): void
}>()

const handleClick = () => {
	emits('setActive', props)
}
</script>

<style scoped lang="scss">
.sub {
	padding: 17px 16px;
	border-radius: 14px;
	background: $black-80;
	border: 1px solid transparent;
	display: flex;
	align-items: center;
	column-gap: 16px;
	cursor: pointer;
	transition: all 0.24s ease;
	position: relative;

	&.active {
		border-color: $accent;

		.sub__circle {
			border-color: $accent;

			&-dot {
				display: block;
				background-color: $accent !important;
			}
		}
	}

	&:hover {
		border-color: $accent;

		.sub__circle {
			border-color: $accent;

			&-dot {
				display: block;
				background-color: rgba(149, 219, 68, 0.2);
			}
		}
	}

	&__circle {
		flex-shrink: 0;
		display: flex;
		width: 24px;
		height: 24px;
		justify-content: center;
		align-items: center;

		border-radius: 50%;
		border: 1px solid #444;
		background: $black-80;

		&-dot {
			display: none;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background-color: $accent;
		}
	}

	&__label {
		color: $grey-20;
		font-size: 18px;
		font-weight: 500;
		flex-basis: 90px;

		&.full {
			flex-basis: auto;
		}
	}

	&__price {
		color: $grey-20;
		text-wrap: nowrap;

		font-size: 20px;
		font-weight: 500;
		line-height: 130%;

		&-detail {
			font-size: 14px;
			color: $grey-100;
		}
	}

	&__badge {
		border-radius: 34px;
		padding: 10px 12px;
		border-radius: 34px;
		background: $black-60;
		margin-left: 32px;

		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 130%; /* 11.7px */
		letter-spacing: 0.56px;
		color: $white;
		text-wrap: nowrap;

		@include tablet {
			margin-left: auto;
		}

		@include big-mobile {
			border-radius: 30px 20px 0px 30px;
			position: absolute;
			right: 0;
			top: -20px;
			background-color: $white;
			color: $black-90;
		}

		&.green {
			background-color: $accent;
			color: $black-80;
			font-size: 9px;
			font-weight: 700;
			margin-left: auto;
		}
	}
}
</style>
