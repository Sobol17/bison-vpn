<template>
	<div class="container profile-section">
		<h2 class="profile-title">Настройки аккаунта</h2>
		<div class="settings">
			<h4 class="settings__title">Вход и безопасность</h4>
			<div>
				<div class="settings__item">
					<ProfileSettingsBlock
						class="card"
						title="Email:"
						content-text="Nastyapolzazaza@gmail.com"
					>
						<template #end>
							<button class="card-btn"><IconEdit /></button>
						</template>
					</ProfileSettingsBlock>
					<p class="settings__text settings__text--grey">
						Используйте рабочий email – на него могут приходить важные сообщения
					</p>
				</div>
				<div class="settings__item">
					<ProfileSettingsBlock
						class="card"
						title="Полностью удалить данные аккаунта и информацию о подключениях"
						content-text="Nastyapolzazaza@gmail.com"
					>
						<template #end>
							<button class="card-btn"><IconDelete /></button>
						</template>
					</ProfileSettingsBlock>
					<p class="settings__text settings__text--grey">
						Вы сможете восстановить аккаунт в течение 1 месяца
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.profile-section {
	margin: 80px auto;
}

.settings {
	border-radius: 30px;
	border: 0.5px solid #d5d8e3;
	background: $grey-15;
	padding: 40px 50px;

	@include tablet {
		border-radius: 24px;
		padding: 20px 16px;
	}

	&__title {
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 600;
		line-height: 130%;
	}

	&__text {
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
		color: $black-90;

		&--grey {
			color: $grey-100;
			font-size: 14px;
		}
	}

	&__item {
		display: flex;
		column-gap: 50px;
		align-items: center;

		@include tablet {
			flex-direction: column;
			align-items: start;
			row-gap: 12px;
		}

		&:first-child {
			margin-bottom: 40px;
		}
	}
}

.card {
	width: 50% !important;

	@include tablet {
		width: 100% !important;
	}

	&:hover {
		.card-btn {
			color: $black-90;
		}
	}
	&-btn {
		color: $grey-100;
	}
}
</style>
