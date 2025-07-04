<template>
	<ProfileHero />
	<ProfileSettings />
	<ProfileSubscription v-if="accountStore.isSubscribed" />
	<div v-else>
		<div class="container profile__tariffs">
			<h2 class="profile-title">Подписка</h2>
			<TariffsList />
		</div>
		<PremiumIncludes title="Преимущества Premium" />
	</div>
</template>

<script lang="ts" setup>
import { useAccountStore } from '~/store/account'

const accountStore = useAccountStore()
</script>

<style scoped lang="scss">
.profile__tariffs {
	margin: 80px auto;
}
</style>
