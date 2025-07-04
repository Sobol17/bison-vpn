<template>
	<div>
		<button @click="toggleMenu" class="burger">
			<img src="/icons/icon_burger.svg" alt="" />
		</button>

		<div class="burger-content" v-if="isMenuShow">
			<div class="burger-content__head">
				<img src="/logo.svg" alt="" />
				<button @click="toggleMenu" class="burger">
					<img src="/icons/icon_burger.svg" alt="" />
				</button>
			</div>
			<div class="burger-content__body">
				<Button @click="globalStore.openLogin">
					<IconUser />
					<span>{{ t('login') }}</span>
					<ArrowRight />
				</Button>

				<HeaderNav class="burger-content__nav" />

				<div class="burger-content__lang">
					<HeaderLanguage />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useMyGlobalStore } from '~/store/global'

const { t } = useI18n()
const globalStore = useMyGlobalStore()

const isMenuShow = ref(false)
const toggleMenu = () => {
	isMenuShow.value = !isMenuShow.value
}
</script>

<style scoped lang="scss">
.burger {
	display: none;

	@include tablet {
		display: block;
	}
}

.icon-user {
	color: $primary;
}

.burger-content {
	position: fixed;
	inset: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	background-color: $black-100;
	overflow-y: auto;

	&__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px;

		border-bottom: 0.5px solid $black-80;
	}

	&__body {
		margin-top: 30px;
		padding: 0px 16px;
	}

	&__lang {
		border-top: 0.5px solid $black-80;
		padding-top: 24px;
		margin-top: 80px;
	}
}
</style>
