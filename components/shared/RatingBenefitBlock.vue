<template>
	<div class="rating">
		<div class="rating-title">
			<span>Рейтинг</span>
			<img src="/icons/rating_logo.svg" alt="" />
			<span>toptechnohub</span>
		</div>
		<div class="rating-body">
			<span class="rating-num">4.9</span>
			<div class="rating-stars">
				<Star />
				<Star />
				<Star />
				<Star />
				<Star half />
			</div>
			<span class="rating-count">(5,344)</span>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.rating {
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
</style>
