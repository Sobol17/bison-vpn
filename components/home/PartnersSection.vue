<template>
	<div class="partners">
		<div class="partner" v-for="item in partnersData">
			<img :src="item.image" :alt="item.name" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { partnersData } from '~/shared/data/homeData'
</script>

<style scoped lang="scss">
.partners {
	margin: 80px 0px;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
	width: 100%;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 132px;
		left: 0;
		z-index: 1;
		background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
	}

	&::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 132px;
		right: 0;
		z-index: 1;
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
	}
}

.partner {
	height: 24px;
	width: 132px;
	display: inline-block;
	padding-left: 27px;
	animation: marquee 50s linear infinite;
	font-size: 0;

	img {
		width: 100%;
	}
}

@keyframes marquee {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-500%);
	}
}
</style>
