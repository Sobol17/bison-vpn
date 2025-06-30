<template>
	<div class="bg-container">
		<div class="container hero__container">
			<div class="hero__content">
				<h1 class="title">BISON VPN SERVICE</h1>
				<p class="hero__text">
					Более <span class="hero__accent--white">80 ключей</span> для обеспечения стабильного VPN
					<br />соединения скоростью от <span class="hero__accent--black">90 Mb/s</span> по
					SpeedTest
				</p>
				<Button class="hero__btn">Попробовать 10 дней за 19 руб.</Button>
				<div class="hero__info">
					<div class="hero__rating">
						<div class="hero__rating-title">
							<span>Рейтинг</span>
							<img src="/icons/rating_logo.svg" alt="" />
							<span>toptechnohub</span>
						</div>
						<div class="hero__rating-body">
							<span class="hero__rating-num">4.9</span>
							<div class="hero__rating-stars">
								<Star />
								<Star />
								<Star />
								<Star />
								<Star half />
							</div>
							<span class="hero__rating-count">(5,344)</span>
						</div>
					</div>
					<div class="hero__users">
						<div class="hero__users-title"><span>5 234</span> пользователей уже с нами</div>
						<div class="hero__users-body">
							<div class="hero__users-avatars">
								<img v-for="user in 8" class="hero__users-avatar" src="/images/user.png" alt="" />
							</div>
							<div class="hero__users-count"><span>...</span> + 4 995</div>
						</div>
					</div>
				</div>
			</div>
			<div class="hero__block hero__block--downloads">
				<div class="hero__block-title">
					<img src="/icons/icon_download.svg" alt="" />
					<span>Скачиваний ключей</span>
				</div>
				<div class="hero__block-text">50 000+</div>
			</div>
			<div class="hero__block hero__block--speed">
				<div class="hero__block-title">
					<img src="/icons/Speedtest.net_logo.svg" alt="" />
				</div>
				<div class="hero__block-text"><span>Скорость</span> 97+ Mb/s</div>
			</div>
			<div class="hero__video">
				<video src="/video/hero.mp4" muted autoplay loop></video>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bg-container {
	position: relative;
	overflow: hidden;
	background: linear-gradient(
		0deg,
		#000606 0%,
		#000706 2.79%,
		#000706 6.08%,
		#000807 9.98%,
		#000706 14.28%,
		#000807 19.26%,
		#000706 24.98%,
		#000706 30.53%,
		#000503 36.48%,
		#000302 41.64%,
		#000201 46.61%,
		#000201 50.39%,
		#000201 56.5%,
		#000 60.93%,
		#000 66.32%,
		#000 72.41%,
		#000 76.25%,
		#000 81.58%,
		#000 89.12%,
		#000 94.98%,
		#000 97.37%,
		#000 100%
	);
}

.title {
	color: $white;
	font-size: 64px;
	font-style: normal;
	font-weight: 800;
	line-height: 130%;

	@include tablet {
		font-size: 34px;
	}
}

.hero {
	&__content {
		width: 50%;
		margin: 70px 0px;

		@include tablet {
			margin: 32px 0px;
			width: 100%;
			position: relative;
			z-index: 2;
		}

		@include big-mobile {
			height: 590px;
		}
	}

	&__block {
		border-radius: 8px;
		background: var(
			--Linear-2,
			linear-gradient(97deg, rgba(61, 61, 61, 0.3) -26.33%, rgba(194, 194, 194, 0) 105.53%)
		);
		padding: 14px 18px;
		width: 257px;

		@include tablet {
			display: none;
		}

		&--downloads {
			position: absolute;
			top: 120px;
			right: 158px;
			z-index: 2;
		}

		&--speed {
			position: absolute;
			bottom: 120px;
			right: 280px;
			z-index: 2;

			@include small-desktop {
				right: 180px;
			}
		}

		&-title {
			display: flex;
			align-items: center;
			column-gap: 2px;
			color: $white;
		}

		&-text {
			margin-top: 4px;
			font-size: 26px;
			font-weight: 700;
			color: $white;

			span {
				font-size: 20px;
			}
		}
	}

	&__video {
		position: absolute;
		top: 0;
		bottom: 0;
		right: auto;
		left: 50%;

		video {
			height: 660px;
		}

		@include tablet {
			left: 0;
			right: 0;

			video {
				width: 100%;
				height: auto;
			}
		}

		@include big-mobile {
			top: 40%;

			video {
				object-fit: cover;
				aspect-ratio: 1 / 1;
				transform: rotate(90deg);
				width: 100vw;
				height: auto;
			}
		}
	}

	&__text {
		font-size: 24px;
		line-height: 2;
		color: $white;

		@include tablet {
			font-size: 18px;
		}
	}

	&__accent {
		&--white {
			padding: 8px 12px;
			border-radius: 82px;
			background: var(--grey-10, #f7f7f7);
			color: $black-90;
		}

		&--black {
			border-radius: 82px;
			padding: 8px 12px;
			border: 1px solid var(--Primary, #b2f861);
		}
	}

	&__btn {
		margin-top: 32px;
		max-width: 443px;
	}

	&__info {
		margin-top: 46px;
		display: flex;
		align-items: start;
		column-gap: 24px;

		@include big-mobile {
			flex-wrap: wrap;
		}
	}

	&__rating {
		border-radius: 12px;
		background: var(
			--Linear-2,
			linear-gradient(97deg, rgba(61, 61, 61, 0.3) -26.33%, rgba(194, 194, 194, 0) 105.53%)
		);
		padding: 14px 14px 12px 14px;

		&-title {
			font-weight: 600;
			font-size: 12px;
			color: $white;
			display: flex;
			column-gap: 4px;
		}

		&-body {
			display: flex;
			align-items: center;
			column-gap: 5px;
			margin-top: 10px;
		}

		&-num {
			font-size: 20px;
			font-weight: 800;
			color: $grey-25;
		}

		&-count {
			font-size: 11px;
			color: $grey-100;
		}

		&-stars {
			display: flex;
			align-items: center;
			column-gap: 2px;
		}
	}

	&__users {
		border-radius: 10px;
		background: linear-gradient(
			275deg,
			rgba(61, 61, 61, 0.3) 14.2%,
			rgba(194, 194, 194, 0) 120.51%
		);
		padding: 12px;

		&-title {
			color: $grey-25;
			font-size: 13px;
			line-height: 130%;

			span {
				font-weight: 600;
			}
		}

		&-body {
			margin-top: 10px;
			display: flex;
			align-items: center;
			column-gap: 8px;
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

			span {
				color: #646464;
			}
		}
	}
}
</style>
