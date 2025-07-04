<template>
	<div class="layout">
		<Header class="header" />
		<main class="main">
			<slot />
		</main>
		<Footer class="footer" />
	</div>
	<div id="modals">
		<transition name="fade">
			<AuthModal v-if="globalStore.isLoginModalShow" />
		</transition>

		<transition name="fade">
			<Subscribe v-if="globalStore.isSubscribeModalShow" />
		</transition>

		<transition name="fade">
			<CopyChip v-if="globalStore.isCopyChipShow" />
		</transition>

		<transition name="fade">
			<DeleteAccount v-if="globalStore.isDeletingAccountModal" />
		</transition>

		<transition name="fade">
			<ChangeEmail v-if="globalStore.isEmailChangingModal" />
		</transition>

		<transition name="fade">
			<CancelSubscription v-if="globalStore.isCancellationModalShow" />
		</transition>
	</div>
</template>

<script setup lang="ts">
import { useMyGlobalStore } from '~/store/global'

const route = useRoute()

const globalStore = useMyGlobalStore()
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.main {
	flex-grow: 1;
}

.header {
	flex-shrink: 0 !important;
}
</style>
