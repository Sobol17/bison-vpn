<template>
	<div class="video-section">
		<div class="video-item__wrapper">
			<video class="video-item" src="/video/video-section_bg.mp4" muted autoplay loop></video>
		</div>
		<div class="container video-section__content">
			<h2 class="video-section__title">
				<span>Use our reliable</span> tool <br />
				to access the Internet
			</h2>
		</div>

		<MainBanner :banner="premiumTrialBannerData" class="video-section__banner" />
	</div>
</template>

<script setup lang="ts">
import { premiumTrialBannerData } from '~/shared/data/homeData'
</script>

<style scoped lang="scss">
.video-section {
	position: relative;
	background-color: #010403;

	.video-item {
		max-width: 100%;

		&__wrapper {
			@include big-mobile {
				max-width: 100vw;
				overflow-x: hidden;
			}
		}

		@include big-mobile {
			max-width: fit-content;
			height: 415px;
			transform: translateX(-20%);
		}
	}

	&__content {
		position: absolute;
		top: 72px;
		left: 0;
		right: 0;

		@include big-mobile {
			top: 32px;
		}
	}

	&__title {
		font-size: 70px;
		font-style: normal;
		font-weight: 700;
		line-height: 130%;
		color: $white;

		@include big-mobile {
			font-size: 28px;
		}

		span {
			padding: 6px 26px;
			border-radius: 82px;
			border: 1px solid $white;

			@include big-mobile {
				padding: 3px 13px;
			}
		}
	}

	&__banner {
		max-width: 1280px;
		margin: 0 auto;
		position: absolute;
		bottom: -200px;
		left: 0;
		right: 0;

		@include tablet {
			bottom: auto;
			top: 300px;
		}
	}
}
</style>
