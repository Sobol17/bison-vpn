<template>
	<div class="container faq-section">
		<div class="faq__title">Часто спрашивают</div>
		<p class="faq__text">
			У вас остались вопросы? Мы собрали самые популярные запросы пользователей и подготовили
			подробные ответы, чтобы сделать использование VPN-ключей максимально простым и понятным.
		</p>
		<div class="faq__wrapper">
			<div class="faq__items">
				<Accordion
					v-for="item in faqData"
					:key="item.title"
					:title="item.title"
					:openText="item.text"
				/>
			</div>
			<div class="faq__image-block">
				<img class="faq__image" src="/images/home/faq.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { faqData } from '~/shared/data/homeData'
</script>

<style scoped lang="scss">
.faq-section {
	margin: 80px auto;
}

.faq {
	&__title {
		color: $black-90;
		text-align: center;
		margin-bottom: 16px;
		font-size: 40px;
		font-weight: 700;
		line-height: 120%;
	}

	&__text {
		color: $black-80;
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
		font-size: 16px;
		font-weight: 400;
		line-height: 130%;
		margin-bottom: 32px;
	}

	&__items {
		flex: 0 1 calc(50% - 25px);
		display: flex;
		flex-direction: column;
		row-gap: 16px;

		@include tablet {
			flex: 0 1 100%;
		}
	}

	&__wrapper {
		display: flex;
		align-items: stretch;
		column-gap: 50px;
	}

	&__image-block {
		flex: 0 1 calc(50% - 25px);
		border-radius: 30px;
		overflow: hidden;

		@include tablet {
			display: none;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
