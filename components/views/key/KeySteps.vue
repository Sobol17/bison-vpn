<template>
	<div class="advantages container">
		<div class="advantages__step advantages__step-1">
			<div class="step__num">/ 01</div>
			<div class="step__title">Скопируйте ключ</div>

			<div class="step__content">
				<div class="step__content-left">
					<div class="step__text">
						Ключ - это специальные данные, содержащие настройки, необходимые для подключения к
						VPN-серверу. Он используется приложением VPN для автоматического подключения без
						необходимости ручного ввода параметров.
					</div>
					<div class="settings">
						<div class="settings__left">
							<div class="settings__title">Скопируйте ключ конфигурации</div>
							<p class="settings__text">
								vless://01dd5086-ab97-47e5-ad9f-d942c84b023c@lon1.vpntype.dev:443?security=tls&encryption=none&alpn=h2,http/1.1&headerType=none&fp=chrome&type=tcp&flow=xtls-rprx-vision#VPNTYPE
								🇬🇧 London
							</p>
							<Button @click="handleCopy" secondary class="settings__btn">
								{{ copiedText ? 'Ключ успешно скопирован' : 'Копировать' }}
							</Button>
							<p class="settings__note">
								*Используя данный ключ, вы загрузите в приложение-клиент полный пак из 20 серверов
							</p>
						</div>
						<div class="settings__right">
							<div class="settings__title">или отсканируйте QR-код с помощью приложения V2Box</div>
							<img src="/icons/QR_Code_Example.svg" alt="" />
						</div>
					</div>
				</div>

				<div class="step__content-right mt-90 mobile-hide">
					<div class="step__content-img-wrapper">
						<img
							class="step__content-img step__content-img--iphone"
							src="/images/home/step-1.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="advantages__step advantages__step-2">
			<div class="step__content">
				<div class="step__content-right full">
					<div class="step__num">/ 02</div>
					<div class="step__title">Скачайте клиент V2Box</div>
					<div class="step__flex">
						<div class="step__text">
							V2Box — это приложение для подключения к VPN или прокси-серверу на основе <br />
							протоколов V2Ray, включая VLESS, VMess, Shadowsocks, Trojan и другие.
						</div>
						<div class="step__icons">
							<img src="/icons/home/icon_apple.svg" alt="" />
							<img src="/icons/home/icon_android.svg" alt="" />
							<img src="/icons/home/icon_macos.svg" alt="" />
							<img src="/icons/home/icon_windows.svg" alt="" />
							<span class="step__icons-text"> доступно на любом устройстве</span>
						</div>
					</div>

					<div class="step__devices">
						<DeviceCard class="step__device" :icon="IosIcon" link="/" label="V2BOx для MacOS" />
						<DeviceCard
							class="step__device"
							:icon="AndroidIcon"
							link="/"
							label="V2BOx для Android"
						/>
						<DeviceCard class="step__device" :icon="IosIcon" link="/" label="V2BOx для IPhone" />
						<DeviceCard
							class="step__device"
							:icon="WindowsIcon"
							link="/"
							label="V2BOx для Windows"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="advantages__step advantages__step-1">
			<div class="step__num">/ 03</div>
			<div class="step__title">Подключитесь к VPN</div>
			<div class="step__text">
				Просто нажми «Подключиться» — и ты в сети. VPN активен, защита работает, можно <br />
				пользоваться интернетом без ограничений.
			</div>
			<div class="step__content">
				<div class="step__content-left">
					<div class="step__tutorial">
						<ul class="step__tutorial-list">
							<li class="step__tutorial-item">
								<img src="/icons/icon_tap.svg" alt="" />
								<p class="step__tutorial-text">Выберите раздел <span>«Configs»</span></p>
							</li>
							<li class="step__tutorial-item self-center">
								<img src="/icons/arrow_down.svg" alt="" />
							</li>
							<li class="step__tutorial-item">
								<img src="/icons/icon_tap.svg" alt="" />
								<p class="step__tutorial-text">
									Нажмите в правом верхнем углу <br />
									<span>«Add config»</span>
								</p>
							</li>
							<li class="step__tutorial-item self-center">
								<img src="/icons/arrow_down.svg" alt="" />
							</li>
							<li class="step__tutorial-item">
								<img src="/icons/icon_tap.svg" alt="" />
								<p class="step__tutorial-text">Выберите Import uri <span>«Import uri» </span></p>
							</li>
							<li class="step__tutorial-item self-center">
								<img src="/icons/arrow_down.svg" alt="" />
							</li>
							<li class="step__tutorial-item">
								<img src="/icons/icon_tap.svg" alt="" />
								<p class="step__tutorial-text">Подключитесь к VPN</p>
							</li>
						</ul>
						<img class="step__tutorial-img" src="/images/tutorial.png" alt="" />
					</div>
					<p class="step__content-hint">Мини-инструкция</p>
				</div>

				<div class="step__content-right">
					<div class="step__content-img-wrapper">
						<img
							class="step__content-img step__content-img--iphone"
							src="/images/home/step-1.png"
							alt=""
						/>
					</div>
					<p class="step__content-hint">Видео-инструкция</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import AndroidIcon from '~/components/icons/devices/AndroidIcon.vue'
import IosIcon from '~/components/icons/devices/IosIcon.vue'
import WindowsIcon from '~/components/icons/devices/WindowsIcon.vue'
import { useCopyToClipboard } from '~/shared/utils/copy'
import { useMyGlobalStore } from '~/store/global'

const { copy, copiedText } = useCopyToClipboard()

const globalStore = useMyGlobalStore()

const handleCopy = () => {
	copy(
		'vless://01dd5086-ab97-47e5-ad9f-d942c84b023c@lon1.vpntype.dev:443?security=tls&encryption=none&alpn=h2,http/1.1&headerType=none&fp=chrome&type=tcp&flow=xtls-rprx-vision#VPNTYPE🇬🇧 London'
	)
	globalStore.openCopyChip()
}
</script>

<style scoped lang="scss">
.advantages {
	margin: 80px auto;
	display: flex;
	flex-direction: column;
	row-gap: 100px;

	@include big-mobile {
		row-gap: 50px;
	}
}

.step {
	&__flex {
		display: flex;
		align-items: start;
		justify-content: space-between;

		@include big-mobile {
			flex-direction: column;
			row-gap: 14px;
		}
	}

	&__icons {
		margin-top: 0;
		display: flex;
		align-items: center;
		column-gap: 12px;

		img {
			width: 24px;
			height: 24px;
		}

		&-text {
			color: $grey-60;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 130%;
		}
	}

	&__content {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		column-gap: 50px;
		margin-top: 32px;

		@include tablet {
			flex-direction: column;
			row-gap: 40px;
			align-items: center;
		}

		&-hint {
			text-align: center;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 130%;
			color: $grey-100;
			margin-top: 16px;
		}

		&-left {
			flex: 0 1 50%;
			width: 50%;

			@include tablet {
				width: 100%;
			}
		}

		&-right {
			flex: 0 1 calc(50% - 50px);

			&.full {
				flex: 0 1 100%;
			}
		}

		&-img {
			width: 100%;

			&-wrapper {
				border-radius: 24px;
				background: $black-90;
				overflow: hidden;
				display: flex;
				justify-content: center;
				padding-top: 40px;
				height: 389px;

				@include tablet {
					padding: 40px 40px 0px 40px;
				}
			}

			&--iphone {
				width: 252px;
				height: 520px;
			}
		}
	}

	&__num {
		color: $primary;
		font-size: 32px;
		font-weight: 600;
		line-height: 130%;
		margin-bottom: 14px;

		@include tablet {
			font-size: 28px;
		}
	}

	&__title {
		color: $black-90;
		font-size: 40px;
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: 16px;

		@include tablet {
			font-size: 28px;
		}
	}

	&__subtitle {
		font-size: 20px;
		color: $black-90;
		font-weight: 600;
		line-height: 1.3;
		margin-bottom: 20px;
		margin-top: 24px;

		@include tablet {
			font-size: 18px;
		}
	}

	&__text {
		font-size: 16px;
		line-height: 1.3;
		color: $black-90;
	}

	&__devices {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
	}

	&__device {
		flex: 0 1 calc(25% - 20px);

		@include tablet {
			flex: 0 1 calc(50% - 12px);
		}

		@include big-mobile {
			flex: 0 1 100%;
		}
	}

	&__tutorial {
		position: relative;
		padding: 67px 24px;
		border-radius: 24px;
		border: 0.5px solid #d5d8e3;
		background: $grey-15;

		@include big-mobile {
			text-align: center;
			padding: 24px 28px 0px 24px;
		}

		&-list {
			display: flex;
			row-gap: 10px;
			flex-direction: column;
			width: 50%;

			@include big-mobile {
				width: 100%;
			}
		}

		&-item {
			display: flex;
			align-items: center;
			column-gap: 8px;

			&.self-center {
				align-self: center;

				@include big-mobile {
					padding-left: 124px;
					align-self: start;
				}
			}
		}

		&-text {
			color: #2c2c35;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 130%; /* 20.8px */

			span {
				font-weight: 600;
			}
		}

		&-img {
			position: absolute;
			bottom: 0;
			right: 24px;

			@include big-mobile {
				position: relative;
				margin-top: 32px;
			}
		}
	}
}

.settings {
	margin-top: 32px;
	display: flex;
	align-items: start;
	column-gap: 24px;
	padding: 24px;
	border-radius: 24px;
	border: 0.5px solid #d5d8e3;
	background: $grey-15;

	&__left {
		flex: 0 1 calc(50% - 12px);
		width: 50%;

		@include big-mobile {
			flex: 0 1 100%;
			width: 100%;
		}
	}

	&__right {
		flex: 0 1 calc(50% - 12px);
		text-align: center;

		img {
			margin-top: 30px;
		}

		@include big-mobile {
			display: none;
		}
	}

	&__title {
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
		color: $black-90;
		margin-bottom: 16px;
	}

	&__text {
		padding: 14px;
		border-radius: 8px;
		background: #f8f8f8;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		margin-bottom: 24px;
		word-wrap: break-word;
	}

	&__btn {
		margin-top: 24px;
	}

	&__note {
		color: $grey-100;
		margin-top: 32px;
		font-size: 14px;
		font-weight: 400;
		line-height: 130%;
	}
}

.mt-90 {
	margin-top: 90px;

	@include tablet {
		margin-top: 0;
	}
}

.mobile-hide {
	@include big-mobile {
		display: none;
	}
}
</style>
