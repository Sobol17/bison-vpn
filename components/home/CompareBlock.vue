<template>
	<div class="compare-block">
		<div class="compare-block__title">
			<span>Критерий {{ block.number }}:</span> {{ block.name }}
		</div>

		<div class="compare-block__name">
			{{ block.positiveTitle }}
		</div>
		<div class="compare-block__content" :class="{ positive: !block.reverse }">
			<TableGreenCheck v-if="!block.reverse" />
			<TableRedCross v-else />
			<p class="compare-block__text">
				{{ block.positiveText }}
			</p>
		</div>

		<div class="compare-block__vs">VS</div>

		<div class="compare-block__name">
			{{ block.negativeText }}
		</div>
		<div class="compare-block__content" :class="{ positive: !block.reverse }">
			<TableGreenCheck v-if="!block.reverse" />
			<TableRedCross v-else />
			<p class="compare-block__text">
				{{ block.negativeText }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { CompareBlock } from '~/shared/types/home-page.types'

defineProps<{ block: CompareBlock }>()
</script>

<style scoped lang="scss">
.compare-block {
	&__title {
		color: $black-90;
		font-size: 18px;
		font-weight: 700;
		line-height: 150%;
		margin-bottom: 18px;

		span {
			color: $accent;
		}
	}

	&__content {
		padding: 12px 14px;
		display: flex;
		align-items: start;
		column-gap: 12px;
		background-color: #f2dcdc;
		border-radius: 0px 0px 12px 12px;

		&.positive {
			background-color: rgba(146, 174, 114, 0.2);
		}
	}

	&__text,
	&__name {
		color: #26272c;
		font-size: 16px;
		font-weight: 500;
		line-height: 150%;
	}

	&__name {
		border-radius: 12px 12px 0px 0px;
		background: $grey-20;
		padding: 12px 14px;
	}

	&__vs {
		margin: 16px 0px;
		text-align: center;
		color: $black-90;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 150%;
	}
}
</style>
