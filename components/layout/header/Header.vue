<template>
	<div class="header">
		<div class="container header__inner">
			<NuxtLink v-if="!accountStore.isSubscribed" to="/"><img src="/logo.svg" alt="" /></NuxtLink>

			<NuxtLink v-else to="/"><img src="/logo_premium.svg" alt="" /></NuxtLink>

			<HeaderNav class="tablet-hide" />

			<div class="header__row tablet-hide">
				<HeaderAuth />

				<HeaderLanguage />
			</div>

			<HeaderMobileMenu />
		</div>
	</div>
</template>

<script setup>
import { useAccountStore } from '~/store/account'

const accountStore = useAccountStore()
</script>

<style lang="scss" scoped>
.header {
	height: 100px;
	background-color: $black-100;
	border-bottom: 0.5px solid $black-70;

	&__inner {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__row {
		display: flex;
		align-items: center;
		column-gap: 40px;
	}
}

.tablet-hide {
	@include tablet {
		display: none;
	}
}
</style>
