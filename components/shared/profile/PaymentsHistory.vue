<template>
	<div class="history">
		<div class="history__title">История активаций:</div>
		<div class="history__items">
			<ProfileSettingsBlock
				class="history__item"
				v-for="item in paymentsHistoryData"
				:title="`VIP ・ ${item.duration} `"
				:content-text="`${item.cardNumber} ・ ${item.date}`"
			>
				<template #end>
					<button class="history__download"><IconDownload /></button>
				</template>
			</ProfileSettingsBlock>
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconDownload from '~/components/icons/IconDownload.vue'
import { paymentsHistoryData } from '~/shared/data/profileData'
</script>

<style lang="scss" scoped>
.history {
	border-radius: 12px;
	background: $grey-25;
	padding: 20px;

	@include tablet {
		background-color: transparent;
		padding: 0;
		margin-top: 24px;
	}

	&__title {
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
		color: $black-90;
		margin-bottom: 16px;

		@include tablet {
			font-size: 20px;
		}
	}

	&__item {
		&:hover {
			.history__download {
				color: $black-90;
			}
		}
	}

	&__download {
		color: $grey-100;
	}

	&__items {
		display: flex;
		flex-direction: column;
		row-gap: 12px;
		height: 264px;
		overflow-y: auto;
		padding-right: 10px;

		&::-webkit-scrollbar {
			width: 3px;
		}

		&::-webkit-scrollbar-track {
			margin-right: 20px;
			background-color: $grey-20;
		}

		&::-webkit-scrollbar-thumb {
			background-color: $grey-60;
			opacity: 0.8;
			border-radius: 12px;
		}
	}
}
</style>
