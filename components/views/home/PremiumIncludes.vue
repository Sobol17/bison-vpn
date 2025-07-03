<template>
	<div class="container premium-includes">
		<h3 class="premium-includes__title">{{ title }}</h3>
		<PremiumIncludesList />
		<Button @click="globalStore.openSubscribe" class="premium-includes__btn"
			>Попробовать 10 дней за 19 руб.</Button
		>
	</div>
</template>

<script lang="ts" setup>
import { useMyGlobalStore } from '~/store/global'

interface Props {
	title?: string
}

withDefaults(defineProps<Props>(), {
	title: 'Что входит в Premium?',
})

const globalStore = useMyGlobalStore()
</script>

<style scoped lang="scss">
.premium-includes {
	margin: 80px auto;

	&__title {
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		line-height: 120%;
		color: $black-90;
	}

	&__items {
		margin-top: 32px;
		display: flex;
		align-items: stretch;
		gap: 24px;
		flex-wrap: wrap;
	}

	&__item {
		flex: 0 1 calc(25% - 18px);

		@include tablet {
			flex: 0 1 calc(33% - 18px);
		}

		@include big-mobile {
			flex: 0 1 100%;
		}
	}

	&__btn {
		max-width: 363px;
		margin: 32px auto 0px auto;
	}
}
</style>
