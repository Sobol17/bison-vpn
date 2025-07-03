<template>
	<div class="speed">
		<div class="speed-title">
			<img src="/icons/Speedtest.net_logo.svg" alt="" />
		</div>
		<div class="speed-text"><span>Скорость</span> 97+ Mb/s</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.speed {
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
</style>
