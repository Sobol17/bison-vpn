<template>
	<Modal white>
		<div class="deleting">
			<img class="deleting__img" src="/icons/account-delete.svg" alt="" />
			<div class="deleting__title">Вы уверены?</div>
			<div class="deleting__text">
				Удалив аккаунт, вы потеряете доступ к данным и информации о подключениях
			</div>
			<Button class="deleting__btn" secondary>Да, удалить</Button>
		</div>
	</Modal>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.deleting {
	width: 500px;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	padding: 70px 50px 62px 50px;

	@include tablet {
		width: auto;
	}

	&__img {
		width: 80px;
		height: 80px;
		margin: 0 auto;
	}

	&__title {
		font-size: 28px;
		font-weight: 700;
		line-height: 1.3;
		color: $black-90;
		text-align: center;
	}

	&__text {
		color: $grey-100;
		text-align: center;

		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%; /* 20.8px */
	}

	&__btn {
		margin-top: 36px;
	}
}
</style>
