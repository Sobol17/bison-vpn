<template>
	<ul class="breadcrumbs">
		<li class="breadcrumbs__item">
			<NuxtLink class="breadcrumbs__link" to="/" :class="{ dark: route.path === '/privacy' }"
				>Главная</NuxtLink
			>
		</li>

		<li class="breadcrumbs__item">
			<NuxtLink class="breadcrumbs__link" :class="{ active: route.path === pageUrl }" to="/key">{{
				pageSlug
			}}</NuxtLink>
		</li>
	</ul>
</template>

<script lang="ts" setup>
interface Props {
	pageUrl: string
	pageSlug: string
}

defineProps<Props>()

const route = useRoute()
</script>

<style scoped lang="scss">
.breadcrumbs {
	margin-top: 30px;
	display: flex;
	align-items: center;
	column-gap: 8px;

	&__item {
		display: flex;
		align-items: center;
		column-gap: 8px;

		&:not(&:last-child) {
			&:after {
				content: '';
				display: block;
				width: 20px;
				height: 20px;
				background: url('../../public/icons/icon_chevron.svg') no-repeat;
			}
		}
	}

	&__link {
		color: $grey-20;

		&.active {
			color: $accent;
		}

		&.dark {
			color: $grey-100;
		}
	}
}
</style>
