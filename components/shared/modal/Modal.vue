<template>
	<div @click.stop="handleCloseModal" class="modal">
		<div @click.stop class="modal__inner">
			<button @click="handleCloseModal" class="modal__close">
				<img src="/icons/input/icon_delete.svg" alt="" />
			</button>

			<div class="modal__content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMyGlobalStore } from '~/store/global'

const globalStore = useMyGlobalStore()

const handleCloseModal = () => {
	globalStore.hideModals()
}
</script>

<style scoped lang="scss">
.modal {
	position: fixed;
	z-index: 5;
	inset: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(31, 31, 31, 0.1);

	backdrop-filter: blur(4px);

	&__inner {
		max-width: 1280px;
		height: auto;
		position: relative;

		border-radius: 18px;
		background: $black-90;
		box-shadow: 0px 2px 73.6px 0px rgba(0, 0, 0, 0.73);

		@include tablet {
			width: 100%;
			height: 100%;
			border-radius: 0;
			overflow-y: auto;
		}
	}

	&__close {
		position: absolute;
		top: 12px;
		right: 12px;
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
