<script setup>
const route = useRoute()
</script>

<template>
	<div class="layout">
		<Header class="header" />
		<main class="main">
			<slot />
		</main>
		<Footer class="footer" />
	</div>
	<div id="modals"></div>
</template>

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
