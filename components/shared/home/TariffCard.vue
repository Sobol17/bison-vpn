<template>
	<div class="tariff" :class="{ dark: darkStyle }">
		<span v-if="tariff.tag" class="tariff__tag">
			<img v-if="tariff.tag === 'best choice'" src="/icons/ic_thumb-up.svg" alt="" />
			{{ tariff.tag }}
		</span>
		<div class="tariff__icon">{{ tariff.icon }}</div>
		<h5 class="tariff__name">{{ tariff.name }}</h5>
		<div class="tariff__price">
			<span>{{ tariff.oldPrice }} руб.</span> {{ tariff.actualPrice }} руб. /мес
		</div>
		<div class="tariff__subtitle">{{ tariff.subtitle }}</div>
		<div class="tariff__properties">
			<div class="tariff__properties-title">Кому подойдет?</div>
			<p class="tariff__properties-text">
				Идеальный вариант для тех, кто хочет надежный VPN без лишних переплат
			</p>
			<ul class="tariff__properties-list">
				<li v-for="item in tariff.properties" :key="item">
					<TableGreenCheck />
					{{ item }}
				</li>
			</ul>
		</div>
		<Button @click="globalStore.openSubscribe" v-if="!darkStyle" secondary>{{
			tariff.btnText
		}}</Button>
		<Button @click="globalStore.openSubscribe" v-else>{{ tariff.btnText }}</Button>
	</div>
</template>

<script lang="ts" setup>
import type { ITariff } from '~/shared/types/home-page.types'
import { useMyGlobalStore } from '~/store/global'

const globalStore = useMyGlobalStore()

const props = defineProps<{ tariff: ITariff }>()

const darkStyle = computed(() => {
	return props.tariff.tag === 'recommend'
})
</script>

<style scoped lang="scss">
.tariff {
	padding: 24px 24px 33px 24px;
	border-radius: 20px;
	border: 0.5px solid #d5d8e3;
	background: $grey-15;
	text-align: center;
	position: relative;

	&.dark {
		border: 0.5px solid $black-90;
		background: $black-80;

		.tariff__tag {
			color: $black-90;
			background-color: $primary;
		}

		.tariff__icon {
			background: $black-60;
		}

		.tariff__name {
			color: $white;
		}

		.tariff__price {
			color: $grey-10;
		}

		.tariff__properties {
			background-color: $black-60;

			&-title {
				color: $grey-10;
			}

			&-text {
				color: $grey-60;
			}

			&-list {
				color: $grey-60;
			}
		}
	}

	&__name {
		font-size: 28px;
		line-height: 1.3;
		font-weight: 700;
		margin-top: 14px;
		margin-bottom: 12px;
	}

	&__tag {
		position: absolute;
		top: 6px;
		right: 6px;
		font-size: 12px;
		font-weight: 800;
		text-transform: uppercase;
		line-height: 1.3;
		display: flex;
		align-items: center;
		column-gap: 6px;
		padding: 8px 12px;
		border-radius: 22px;
		color: $white;
		background-color: $black-90;
	}

	&__icon {
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		border-radius: 48px;
		background: rgba(255, 255, 255, 0.6);
	}

	&__price {
		font-size: 20px;
		font-weight: 500;
		color: $black-90;
		line-height: 1.3;
		margin-bottom: 10px;

		span {
			text-decoration-line: line-through;
			color: $grey-60;
		}
	}

	&__subtitle {
		color: $grey-60;
		font-size: 12px;
		font-weight: 500;
		margin-bottom: 24px;
	}

	&__properties {
		padding: 16px 14px;
		border-radius: 12px;
		background: $grey-20;
		text-align: left;
		margin-bottom: 24px;

		&-title {
			font-size: 16px;
			font-weight: 700;
			color: $black-90;
			margin-bottom: 8px;
		}

		&-text {
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 130%;
			color: $black-80;
		}

		&-list {
			margin-top: 16px;
			display: flex;
			flex-direction: column;
			row-gap: 8px;
			color: $black-80;

			li {
				display: flex;
				align-items: center;
				column-gap: 8px;
			}
		}
	}
}
</style>
