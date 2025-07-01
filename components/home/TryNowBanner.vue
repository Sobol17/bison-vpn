<template>
	<div class="container">
		<div class="banner">
			<div class="banner__left">
				<h3 class="banner__title">Попробуйте интернет без границ уже сейчас</h3>
				<p class="banner__text">
					Защитите свои данные, получите максимальную скорость и полный доступ к любому контенту.
					Оформите премиум прямо сейчас и наслаждайтесь свободой в интернете!
				</p>
				<Button class="banner__btn">Попробовать за 19 руб.</Button>
				<div class="banner__users">
					<div class="banner__users-avatars">
						<img v-for="user in 5" class="banner__users-avatar" src="/images/user.png" alt="" />
					</div>
					<div class="banner__users-count">5 000 пользователей уже с нами</div>
				</div>
			</div>
			<div class="banner__right">
				<img class="banner__img" src="/images/home/try-banner.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.banner {
	display: flex;
	align-items: center;
	column-gap: 20px;
	padding: 20px 25px 40px 50px;
	border-radius: 30px;
	background: $black-90;

	@include tablet {
		flex-direction: column;
	}

	@include big-mobile {
		padding: 24px 20px;
	}

	&__title {
		color: $white;
		font-size: 46px;
		font-weight: 700;
		line-height: 110%;
		margin-bottom: 16px;

		@include tablet {
			order: 2;
			font-size: 28px;
		}
	}

	&__text {
		color: $white;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		margin-bottom: 24px;

		@include tablet {
			font-size: 14px;
			order: 3;
		}
	}

	&__users {
		display: flex;
		align-items: center;
		column-gap: 10px;
		margin-top: 25px;

		@include tablet {
			order: 1;
			margin-top: 0;
			margin-bottom: 24px;
		}

		&-avatars {
			display: flex;
			align-items: center;
		}

		&-avatar {
			width: 24px;
			height: 24px;
			object-fit: cover;
			border-radius: 50%;
			border: 1px solid $grey-25;
			margin-left: -10px;

			&:first-child {
				margin-left: 0;
			}
		}

		&-count {
			font-size: 12px;
			font-weight: 600;
			color: $grey-25;
		}
	}

	&__btn {
		@include tablet {
			order: 4;
		}
	}

	&__left {
		flex: 0 1 calc(50% - 10px);
		display: flex;
		flex-direction: column;
	}

	&__right {
		flex: 0 1 calc(50% - 10px);
	}

	&__img {
		padding-top: 24px;

		@include tablet {
			width: 100%;
		}
	}
}
</style>
