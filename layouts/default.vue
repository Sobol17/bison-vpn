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
			<CopyChip v-if="globalStore.isCopyChipShow" />
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
