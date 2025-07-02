<template>
	<div class="server">
		<div class="server__head">
			<div>
				<p class="server__title">
					<span>{{ server.location }}</span> ({{ server.serverInfo }})
					<img src="/icons/countries/netherlands.svg" alt="" />
				</p>
				<p class="server__ip">IP: {{ server.ip }}</p>
			</div>
			<div class="server__head-right">
				<p class="server__text">Совместимость с приложениями:</p>
				<div class="server__apps">
					<img src="/icons/apps/Hiddify.svg" alt="" />
					<img src="/icons/apps/V2box.svg" alt="" />
					<img src="/icons/apps/Outline.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="server__body">
			<div class="server__subtitle">Ключ доступа</div>
			<div class="server__key">
				<KeyIcon />
				<span>{{ server.key }}</span>
				<button class="server__key-btn">
					<QrCodeIcon />
					<span>QR-код</span>
				</button>
				<button @click="handleCopy" class="server__key-btn ml-20">
					<CopyIcon />
					<span>Копировать</span>
				</button>
			</div>
			<Button class="server__mobile-btn" secondary @click="handleCopy">Копировать</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IServerInfo } from '~/shared/types/key.types'
import { useCopyToClipboard } from '~/shared/utils/copy'
import { useMyGlobalStore } from '~/store/global'
import CopyIcon from '../icons/CopyIcon.vue'
import KeyIcon from '../icons/KeyIcon.vue'

const { copy } = useCopyToClipboard()

const globalStore = useMyGlobalStore()

const props = defineProps<{ server: IServerInfo }>()

const handleCopy = () => {
	copy(props.server.key)
	globalStore.openCopyChip()
}
</script>

<style scoped lang="scss">
.server {
	flex-grow: 1;
	padding: 16px;
	border-radius: 12px;
	border: 0.5px solid #d5d8e3;
	background: $grey-15;

	@include big-mobile {
		width: 100%;
	}

	&__head {
		display: flex;
		align-items: start;
		justify-content: space-between;
		padding-bottom: 18px;
		border-bottom: 1px solid $white;
		margin-bottom: 18px;

		&-right {
			@include big-mobile {
				display: none;
			}
		}
	}

	&__title {
		color: $grey-100;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;

		display: flex;
		align-items: center;
		column-gap: 4px;

		span {
			color: $black-90;
			font-size: 16px;
			font-weight: 600;
			line-height: 130%;
		}
	}

	&__subtitle {
		color: $black-60;
		font-size: 14px;
		font-weight: 600;
		line-height: 140%;
	}

	&__key {
		margin-top: 10px;
		border-radius: 8px;
		background: #f8f8f8;
		padding: 16px 14px;
		display: flex;
		column-gap: 6px;

		span {
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 130%;

			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			max-width: 200px;
		}

		&-btn {
			display: flex;
			align-items: center;
			column-gap: 4px;
			color: $grey-100;
			margin-left: auto;
			transition: all 0.24s ease-in-out;

			@include big-mobile {
				display: none;
			}

			&:hover {
				color: $accent;
			}

			&.ml-20 {
				margin-left: 20px;
			}
		}
	}

	&__text {
		color: $grey-100;
		font-size: 12px;
		font-weight: 500;
		line-height: 140%;
		margin-bottom: 8px;
	}

	&__apps {
		display: flex;
		align-items: center;
		column-gap: 12px;
	}

	&__mobile-btn {
		display: none !important;

		@include big-mobile {
			display: flex !important;
			margin-top: 24px;
		}
	}
}
</style>
