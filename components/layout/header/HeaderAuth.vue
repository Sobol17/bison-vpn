<template>
	<button
		v-if="!accountStore.isAuth"
		@click="globalStore.openLogin"
		class="login"
		title="Вход/регистрация"
	>
		<img src="/icons/icon_user.svg" alt="" />
		<span>{{ $t('login') }}</span>
	</button>
	<button v-else @click="router.push('/profile')" class="login" title="Вход/регистрация">
		<img src="/icons/icon_user.svg" alt="" />
		<span>{{ $t('login_auth') }}</span>
	</button>
</template>

<script setup lang="ts">
import { useAccountStore } from '~/store/account'
import { useMyGlobalStore } from '~/store/global'

const router = useRouter()

const globalStore = useMyGlobalStore()

const accountStore = useAccountStore()
</script>

<style lang="scss" scoped>
.login {
	display: flex;
	align-items: center;
	column-gap: 4px;

	padding: 6px 14px;
	border-radius: 6px;
	background: transparent;
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
	line-height: 1.3;
	font-size: 16px;
	font-weight: 500;
	color: $grey-25;

	&:hover {
		background: $black-90;
	}

	&:active {
		color: $white;
	}
}
</style>
