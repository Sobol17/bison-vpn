<template>
	<section class="container">
		<div class="banner">
			<div class="banner__left">
				<div class="banner__badge">🔥 ТОЛЬКО СЕЙЧАС</div>
				<h3 class="banner__title">
					Premium -50% OFF <br />
					Успейте забрать!
				</h3>
				<p class="banner__text">
					Безлимитный трафик, высокая скорость и полная анонимность – всё это по самой выгодной
					цене!
				</p>
				<Button @click="globalStore.openLogin" class="banner__btn"
					>Стать Premium со скидкой 50%</Button
				>
				<div class="banner__note">
					⏳ Предложение действует только 24 часа! Успейте оформить премиум VPN со скидкой -50%!
				</div>
			</div>
			<div class="banner__right">
				<img class="banner__img" src="/images/home/premium-banner.png" alt="" />
				<img
					class="banner__img--mobile"
					src="/images/home/premium-mobile-illustration.svg"
					alt=""
				/>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { useMyGlobalStore } from '~/store/global'

const globalStore = useMyGlobalStore()
</script>

<style scoped lang="scss">
.banner {
	display: flex;
	align-items: center;
	column-gap: 20px;
	border-radius: 30px;
	overflow: hidden;
	background: $black-90;

	@include tablet {
		flex-direction: column;
	}

	&__title {
		color: $white;
		font-size: 46px;
		font-weight: 700;
		line-height: 110%;
		margin-bottom: 16px;

		@include tablet {
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
		}
	}

	&__users {
		display: flex;
		align-items: center;
		column-gap: 10px;
		margin-top: 25px;

		@include tablet {
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

	&__note {
		margin-top: 16px;
		color: $grey-100;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 110%;
	}

	&__badge {
		border-radius: 67px;
		background: $black-80;
		width: fit-content;
		color: $white;
		font-size: 14px;
		font-weight: 800;
		line-height: 130%;
		padding: 14px 16px;
		margin-bottom: 16px;
	}

	&__left {
		flex: 0 1 calc(50% - 10px);
		display: flex;
		flex-direction: column;
		padding: 50px 0px 50px 50px;

		@include tablet {
			padding: 24px;
		}
	}

	&__right {
		flex: 0 1 calc(50% - 10px);

		@include tablet {
			height: 392px;
			flex: auto;
			width: 100%;
			background: linear-gradient(180deg, #1f1f1f 25.35%, rgba(0, 0, 0, 0) 147.2%),
				url('../../public/images/home/premium-mobile-bg.jpg') 0.272px 1px / 191.671% 100% no-repeat;
		}

		@include small-mobile {
			position: relative;
			bottom: 0;
		}
	}

	&__img {
		height: 100%;

		@include tablet {
			display: none;
		}

		&--mobile {
			display: none;

			@include tablet {
				width: 100%;
				display: block;
				position: relative;
			}

			@include small-mobile {
				position: absolute;
				bottom: 0;
			}
		}
	}
}
</style>
