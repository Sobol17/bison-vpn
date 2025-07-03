<template>
	<div class="container not-found">
		<img class="not-found__img" src="/images/404/404.gif" alt="" />
		<h1 class="not-found__title">Ой! Страница не найдена</h1>
		<p class="not-found__text not-found__text--failed">
			К сожалению, запрашиваемой вами страницы больше нет или адрес был введён с ошибкой. Попробуйте
			вернуться на <NuxtLink to="/">главную страницу</NuxtLink> или проверьте адрес ещё раз — всякое
			бывает!
		</p>
		<Button class="not-found__btn">Вернуться назад</Button>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.not-found {
	text-align: center;
	margin-bottom: 140px;

	&__img {
		width: 382px;
		height: 382px;
		margin: 70px auto 0px auto;

		@include big-mobile {
			width: 328px;
			height: 328px;
		}
	}

	&__title {
		color: $black-90;
		text-align: center;

		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
		letter-spacing: 0.96px;
		margin-bottom: 16px;

		@include big-mobile {
			font-size: 28px;
		}
	}

	&__text {
		color: $black-90;
		text-align: center;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%;
		max-width: 700px;
		margin: 0 auto;

		@include big-mobile {
			font-size: 16px;

			br {
				display: none;
			}
		}

		a {
			font-weight: 600;
			color: #7f7cff;
		}
	}

	&__btn {
		margin-top: 32px;
		max-width: 464px;
		margin: 32px auto;
	}
}
</style>
