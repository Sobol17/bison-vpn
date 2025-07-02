<template>
	<div class="container reviews">
		<h3 class="reviews__title">Отзывы юзеров о Premium</h3>
		<div class="reviews__items">
			<ReviewCard
				class="reviews__item"
				v-for="review in computedReviewsList"
				:review="review"
				:key="review.date"
			/>
		</div>
		<Button v-if="!isAllReviewsShow" @click="showAllReviews" class="reviews__btn" tertiary
			>Показать больше отзывов (+{{ reviewsList.length - 8 }})</Button
		>
	</div>
</template>

<script lang="ts" setup>
import { reviewsData } from '~/shared/data/homeData'

const reviewsList = ref(reviewsData)
const isAllReviewsShow = ref(false)

const showAllReviews = () => {
	isAllReviewsShow.value = !isAllReviewsShow.value
}

const computedReviewsList = computed(() => {
	return isAllReviewsShow.value ? reviewsList.value : reviewsList.value.slice(0, 8)
})
</script>

<style scoped lang="scss">
.reviews {
	margin: 80px auto;

	&__title {
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		line-height: 120%;
		color: $black-90;
	}

	&__items {
		margin-top: 32px;
		display: flex;
		align-items: stretch;
		gap: 24px;
		flex-wrap: wrap;
	}

	&__item {
		flex: 0 1 calc(25% - 18px);

		@include tablet {
			flex: 0 1 calc(33% - 18px);
		}

		@include big-mobile {
			flex: 0 1 100%;
		}
	}

	&__btn {
		max-width: 363px;
		margin: 32px auto 0px auto;
	}
}
</style>
