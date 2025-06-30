<template>
	<HeroSection />
	<AdvantagesSection />
	<div class="main-title">
		Безопасность, анонимность и стабильное <br />
		соединение — <span>всё в одном решении</span>
	</div>
	<StatisticSection />
	<CompareSection />
</template>

<script setup></script>

<style lang="scss" scoped>
.main-title {
	text-align: center;
	margin-top: 140px;
	margin-bottom: 140px;
	font-size: 50px;
	font-weight: 600;
	line-height: 1.3;
	color: $black-90;

	@include tablet {
		font-size: 44px;
	}

	span {
		color: $white;
		font-size: 48px;
		border-radius: 82px;
		background: $black-90;
		padding: 12px 18px;

		@include tablet {
			display: inline-block;
			font-size: 42px;
		}
	}
}
</style>
