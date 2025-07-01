<template>
	<div class="review-card">
		<div class="review-card__head">
			<div class="review-card__author">
				<img class="review-card__author-avatar" :src="review.author.avatar" alt="" />
				<div>
					<div class="review-card__author-name">{{ review.author.name }}</div>
					<div class="review-card__date">{{ review.date }}</div>
				</div>
			</div>
			<div class="review-card__note">
				<p>Posted on</p>
				<div><img src="/icons/home/google.svg" alt="" /></div>
			</div>
		</div>

		<div class="review-card__body">
			<div class="review-card__rate">
				<Star />
				<Star />
				<Star />
				<Star />
				<Star half />
				<span class="review-card__num">{{ review.rate }}</span>
			</div>
			<p class="review-card__text">{{ review.text }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IReviewCard } from '~/shared/types/home-page.types'

defineProps<{ review: IReviewCard }>()
</script>

<style scoped lang="scss">
.review-card {
	border-radius: 20px;
	background: $grey-15;
	padding: 16px;

	&__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__author {
		display: flex;
		align-items: center;
		column-gap: 12px;

		&-avatar {
			width: 40px;
			height: 40px;
			object-fit: cover;
			border-radius: 50%;
		}

		&-name {
			font-size: 14px;
			font-weight: 500;
			line-height: 130%;
			letter-spacing: -0.28px;
			margin-bottom: 4px;
		}
	}

	&__body {
		margin-top: 20px;
	}

	&__rate {
		display: flex;
		align-items: baseline;
		column-gap: 5px;
	}

	&__date {
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		letter-spacing: -0.24px;
		color: $grey-100;
	}

	&__note {
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		letter-spacing: -0.2px;
		color: $grey-100;
		margin-bottom: 4px;
	}

	&__num {
		font-size: 16px;
		font-weight: 800;
		line-height: 140%;
		letter-spacing: -0.32px;
	}

	&__text {
		font-size: 14px;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: -0.28px;
		color: $black-90;
		margin-top: 18px;

		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 7;
		-webkit-box-orient: vertical;
	}
}
</style>
