<template>
	<div class="container servers-section">
		<h3 class="servers__title">Сервера, которые входят в пакет</h3>
		<p class="servers__text">Вы также можете использовать ключ от каждого сервера отдельно</p>

		<div class="servers__items">
			<div class="servers__item" v-for="(item, index) in servers" :key="item.ip">
				<span class="servers__item-num">{{ index + 1 }}</span>
				<ServerInfo :server="item" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { servers } from '~/shared/data/keyData'
</script>

<style scoped lang="scss">
.servers-section {
	margin: 80px auto;
}

.servers {
	&__title {
		font-size: 40px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
		margin-bottom: 12px;
	}

	&__text {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
	}

	&__items {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		column-gap: 50px;
		row-gap: 24px;
	}

	&__item {
		flex: 0 1 calc(50% - 25px);
		display: flex;
		align-items: center;
		column-gap: 18px;

		@include big-mobile {
			flex: 0 1 100%;
			flex-direction: column;
			row-gap: 12px;
		}

		&-num {
			font-size: 20px;
			color: $grey-100;
			font-weight: 800;
		}
	}
}
</style>
