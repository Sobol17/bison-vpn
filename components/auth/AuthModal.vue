<template>
	<Modal>
		<div class="auth">
			<div class="auth__left">
				<img src="/images/auth/left_side.png" alt="" />
			</div>
			<!-- Register Form -->
			<div v-if="isRegisterForm" class="auth__right">
				<img src="/icons/auth/icon_register.svg" alt="" />
				<form @submit.prevent="handleSubmit" class="auth__form">
					<div class="auth__title">Регистрация</div>

					<template v-if="!emailSentToRegister">
						<p v-if="!emailVerified" class="auth__text">
							Укажите свою почту, мы отправим на нее ссылку для подтверждения создания аккаунта,
							после подтверждения вы получите доступ в личный кабинет.
						</p>
						<p v-else class="auth__text auth__text--left">
							<span>Почта успешно подтверждена.</span> Теперь вы сможете получить доступ к личному
							кабинету используя данный email
						</p>
						<Input v-model="email" placeholder="Email" type="email" />
						<Button class="auth__form-btn" type="submit" :disabled="email === ''">{{
							!emailVerified ? 'Зарегистрироваться' : 'Войти'
						}}</Button>
						<div class="auth__form-note auth__form-note--small">
							Нажимая на кнопку, вы соглашаетесь с
							<NuxtLink to="/">политикой конфиденциальности</NuxtLink> и
							<NuxtLink to="/">пользовательским соглашением</NuxtLink>
						</div>
					</template>

					<template v-else>
						<p class="auth__text">
							Мы отправили на указанную вами почту ссылку для подтверждения, после подтверждения вы
							получите доступ к личному кабинету.
						</p>
						<div class="auth__loader">
							<Loader />
						</div>
					</template>
				</form>
			</div>
			<!-- Login Form -->
			<div v-else class="auth__right">
				<img src="/icons/auth/icon_login.svg" alt="" />
				<form @submit.prevent="handleSubmit" class="auth__form">
					<div class="auth__title">Войдите</div>
					<Input v-model="email" placeholder="Email" type="email" />
					<Button class="auth__form-btn" type="submit" :disabled="email === ''">{{
						email === '' ? 'Попробовать за 19 руб.' : 'Войти'
					}}</Button>
					<Divider color="#393939" />
					<div class="auth__form-note">
						Еще нет аккунта? <span @click="isRegisterForm = true">Зарегистрируйтесь сейчас</span>
					</div>
				</form>
			</div>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import authService from '~/services/auth.service'

const isRegisterForm = ref(false)
const email = ref('')
const emailVerified = ref(true)
const emailSentToRegister = ref(false)

const handleSubmit = () => {
	if (isRegisterForm && !emailVerified) {
		authService.register({ email: email })
		emailSentToRegister.value = true
	} else {
		authService.login({ email: email })
	}
}
</script>

<style scoped lang="scss">
.auth {
	display: flex;
	align-items: center;

	&__left {
		@include tablet {
			display: none;
		}
	}

	&__right {
		min-width: 425px;
		padding-right: 50px;
		text-align: center;

		&-head {
			padding: 16px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		@include tablet {
			min-width: none;
			width: 100%;
			padding: 120px 16px;
		}
	}

	&__form {
		display: flex;
		flex-direction: column;
		align-items: center;

		&-btn {
			margin-top: 24px;
		}

		&-note {
			color: $grey-100;
			font-size: 16px;
			font-weight: 400;
			line-height: 120%;

			&--small {
				font-size: 12px;
				font-weight: 50;
				margin-top: 16px;
			}

			a {
				color: $white;
				text-decoration-line: underline;
				text-decoration-style: dotted;
				text-decoration-skip-ink: auto;
				text-decoration-thickness: auto;
				text-underline-offset: auto;
				text-underline-position: from-font;
			}

			span {
				color: $accent;
				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	&__title {
		font-size: 30px;
		color: $grey-20;
		line-height: 1.4;
		font-weight: 600;
		margin-top: 6px;
		margin-bottom: 18px;
	}

	&__text {
		color: $grey-100;
		text-align: center;
		font-size: 16px;
		font-weight: 400;
		line-height: 120%;
		margin-bottom: 32px;

		&--left {
			text-align: left;
		}

		span {
			color: $accent;
		}
	}

	&__loader {
		margin-top: 60px;
	}
}
</style>
