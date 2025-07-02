<template>
	<hr class="divider" :style="{ background: color }" />
</template>

<script setup lang="ts">
interface Props {
	color: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.divider {
	content: '';
	width: 100%;
	border: none;
	border-bottom: 1px solid transparent;
	margin: 50px 0px;
}
</style>
