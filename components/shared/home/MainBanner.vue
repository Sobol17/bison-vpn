<template>
	<div class="banner">
		<div class="banner__left">
			<h3 class="banner__title">{{ banner.title }}</h3>
			<p class="banner__text">
				{{ banner.text }}
			</p>
			<Button @click="globalStore.openLogin" class="banner__btn">{{ banner.btnText }}</Button>
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
</template>

<script setup lang="ts">
import type { IBannerData } from '~/shared/types/home-page.types'

import { useMyGlobalStore } from '~/store/global'

const globalStore = useMyGlobalStore()

defineProps<{ banner: IBannerData }>()
</script>

<style lang="scss" scoped>
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
