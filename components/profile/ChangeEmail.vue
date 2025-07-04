<template>
	<Modal>
		<div v-if="!changeSuccess && !changeError" class="changing">
			<img class="changing__img" src="/icons/change-email.svg" alt="" />
			<h4 class="changing__title">Изменение электронной почты</h4>
			<p v-if="!isSent" class="changing__text">
				Убедитесь, что имеете доступ к электронному адресу – <br />
				на него могут приходить важные сообщения
			</p>

			<p class="changing__text" v-else>
				Мы отправили на указанную вами почту ссылку для <br />
				подтверждения, после подтверждения изменения <br />
				автоматически вступят в силу.
			</p>

			<form v-if="!isSent" class="changing__form" @submit.prevent="">
				<div class="changing__form-label">Текущий электронный адрес</div>
				<Input v-model="oldEmail" type="email" placeholder="Email" />
				<div class="changing__form-label">Новый электронный адрес</div>
				<Input v-model="newEmail" type="email" placeholder="Email" />
				<Button class="changing__form-btn" :disabled="!newEmail">Изменить почту </Button>
			</form>
			<Loader v-else class="changing__loader" />
		</div>
		<div v-else-if="changeSuccess" class="changing">
			<img class="changing__img" src="/icons/email-success.svg" alt="" />
			<h4 class="changing__title">Почта успешно изменена</h4>
			<p class="changing__text">
				Теперь вы можете использовать новую почту для входа <br />
				в систему.
			</p>
			<Button class="changing__btn">Войти</Button>

			<div class="changing__note">
				<p>Вы не запрашивали смену почты?</p>
				Пожалуйста, свяжитесь с нашей
				<NuxtLink to="/">службой поддержки</NuxtLink>
			</div>
		</div>
		<div v-else class="changing">
			<img class="changing__img" src="/icons/email-error.svg" alt="" />
			<h4 class="changing__title">Ошибка смены почты</h4>
			<p class="changing__text">
				К сожалению, нам не удалось изменить почту, возможно <br />
				возник технический сбой. Попробуйте повторить
			</p>
			<Button @click="resetForm" class="changing__btn">Повторить снова</Button>

			<div class="changing__note">
				<p>Не получается?</p>
				Пожалуйста, свяжитесь с нашей
				<NuxtLink to="/">службой поддержки</NuxtLink>
			</div>
		</div>
	</Modal>
</template>

<script lang="ts" setup>
const oldEmail = ref(null)
const newEmail = ref(null)

const isSent = ref(false)

const changeSuccess = ref(false)
const changeError = ref(false)

const resetForm = () => {
	isSent.value = false
	changeSuccess.value = false
	changeError.value = false
}
</script>

<style scoped lang="scss">
.changing {
	text-align: center;
	padding: 56px 84px 84px 84px;

	&__img {
		margin-bottom: 30px;
	}

	&__title {
		text-align: center;
		color: $grey-15;
		font-size: 28px;
		font-weight: 700;
		line-height: 130%;
		margin-bottom: 10px;
	}

	&__text {
		color: $grey-100;
		text-align: center;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
	}

	&__form {
		&-label {
			color: $grey-60;
			font-size: 16px;
			font-weight: 500;
			line-height: 140%; /* 22.4px */
			margin-bottom: 12px;
			margin-top: 20px;
			text-align: left;
		}

		&-btn {
			margin-top: 32px;
		}
	}

	&__loader {
		margin-top: 60px;
	}

	&__btn {
		margin-top: 32px;
	}

	&__note {
		text-align: center;
		color: $grey-60;
		font-size: 16px;
		font-weight: 400;
		line-height: 130%;
		margin-top: 180px;

		p {
			color: $grey-20;
			text-align: center;
		}

		a {
			color: $primary;
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-skip-ink: auto;
			text-decoration-thickness: auto;
			text-underline-offset: auto;
			text-underline-position: from-font;
		}
	}
}
</style>
