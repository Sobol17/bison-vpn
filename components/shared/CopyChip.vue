<template>
	<div class="copy-chip">
		<CopyIcon class="copy-chip__icon" />
		<span>Ключ успешно скопирован</span>
	</div>
</template>

<script setup lang="ts">
import CopyIcon from '../icons/CopyIcon.vue'
</script>

<style scoped lang="scss">
.copy-chip {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 40px;
	padding: 13px 38px;
	color: $white;
	font-weight: 600;
	font-size: 14px;
	display: flex;
	align-items: center;
	column-gap: 8px;
	border-radius: 12px;
	background: rgba(1, 1, 1, 0.8);

	&__icon {
		flex-shrink: 0;
	}

	span {
		text-wrap: nowrap;
	}
}
</style>
