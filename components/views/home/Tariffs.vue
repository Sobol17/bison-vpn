<template>
	<div class="container tariffs">
		<h3 class="tariffs-title">Тарифы</h3>
		<TariffsList />
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.tariffs {
	margin: 80px auto;

	&-title {
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		line-height: 120%;
		color: $black-90;
	}
}
</style>
