<template>
	<div class="advantages container">
		<div class="advantages__step advantages__step-1">
			<div class="step__num">/ 01</div>
			<div class="step__title">Простая установка</div>

			<div class="step__content">
				<div class="step__content-left">
					<div class="step__text">
						Использование VPN-ключей вручную может показаться сложным, но на самом деле этот процесс
						занимает всего несколько минут. Мы сделали его максимально удобным и доступным даже для
						новичков.
					</div>
					<div class="step__subtitle">Всего 3 простых шага:</div>
					<div class="step__item">
						<div class="step__item-line">
							<CircleLabel class="step__item-label">1</CircleLabel>
							<img src="/icons/line.svg" alt="" />
							<CircleLabel class="step__line-label">2</CircleLabel>
							<img src="/icons/line.svg" alt="" />

							<CircleLabel class="step__line-label" active
								><img src="/icons/check.svg" alt=""
							/></CircleLabel>
						</div>
						<div class="step__item-content">
							<div class="step__item-info">
								<div class="step__item-title">
									<b>Скачайте приложение V2Box</b> на ваше устройство.
								</div>
								<div class="step__item-text">
									Это приложение-клиент, для активации VPN ключей. Оно абсолютно бесплатно и
									доступно на всех устройствах.
								</div>
							</div>
							<div class="step__item-info">
								<div class="step__item-title">
									<b>Скачайте VPN-ключ</b> и импортируйте его в клиент одним кликом
								</div>
								<div class="step__item-text">Ключ вы можете получить на нашем сайте.</div>
							</div>
							<div class="step__item-info">
								<div class="step__item-title">
									<b>Подключитесь к серверу</b> — и ваш интернет уже под защитой!
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="step__content-right">
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
				<div class="step__content-left">
					<img class="step__content-img" src="/images/home/step-2.png" alt="" />
				</div>
				<div class="step__content-right">
					<div class="step__num">/ 02</div>
					<div class="step__title">
						Совместимость с любыми <br />
						устройствами
					</div>
					<div class="step__text">
						Наши VPN-ключи поддерживают широкий спектр устройств и операционных систем, обеспечивая
						вам свободу выбора и удобство использования.
					</div>
					<div class="step__icons">
						<img src="/icons/home/icon_apple.svg" alt="" />
						<img src="/icons/home/icon_android.svg" alt="" />
						<img src="/icons/home/icon_macos.svg" alt="" />
						<img src="/icons/home/icon_windows.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="advantages__step advantages__step-3">
			<div class="step__num">/ 03</div>
			<div class="step__content">
				<div class="step__content-left">
					<div class="step__title">
						Стабильное и быстрое <br />
						соединение
					</div>
					<div class="step__text">
						Мы обеспечиваем высокую скорость подключения и стабильную работу, благодаря продвинутым
						технологиям и мощной серверной инфраструктуре.
					</div>
					<div class="step__subtitle">Что делает наше соединение быстрым и стабильным?</div>
					<div class="step__items">
						<div class="step__item">
							<CircleLabel active>1</CircleLabel>
							<div class="step__item-text">Оптимизированный VPN-протокол <b>VLESS</b></div>
						</div>
						<div class="step__item">
							<CircleLabel active>2</CircleLabel>
							<div class="step__item-text">
								Подбор самых быстрых узлов для обеспечения максимально высокой пропускной
								способности
							</div>
						</div>
						<div class="step__item">
							<CircleLabel active>3</CircleLabel>
							<div class="step__item-text">
								Обход ограничений провайдеров с помощью шифрования и маскировки трафика
							</div>
						</div>
					</div>
				</div>
				<div class="step__content-right">
					<img class="step__content-img" src="/images/home/step-3.png" alt="" />
				</div>
			</div>
		</div>
		<div class="advantages__step advantages__step-4">
			<div class="step__content">
				<div class="step__content-left">
					<img class="step__content-img" src="/images/home/step-4.png" alt="" />
				</div>
				<div class="step__content-right">
					<div class="step__num">/ 04</div>
					<div class="step__title">Доступ к любому контенту</div>
					<div class="step__text">
						VPN — это не только безопасность, но и свобода в интернете. Мы обеспечиваем обход
						блокировок, анонимный доступ к сайтам, соцсетям и стриминг-сервисам, а также поддержку
						P2P-сетей для скачивания торрентов.
					</div>
					<div class="step__subtitle">Как это работает?</div>
					<div class="step__items">
						<div class="step__item">
							<CircleLabel active>1</CircleLabel>
							<div class="step__item-text">
								<b>Подмена IP-адреса</b> — сайты видят вас как пользователя из другой страны.
							</div>
						</div>
						<div class="step__item">
							<CircleLabel active>2</CircleLabel>
							<div class="step__item-text">
								<b>Шифрование трафика</b> — интернет-провайдер не видит, какие сайты вы посещаете.
							</div>
						</div>
						<div class="step__item">
							<CircleLabel active>3</CircleLabel>
							<div class="step__item-text">
								<b>Маскировка VPN-трафика</b> — даже в странах с жесткими запретами (например,
								Китай, ОАЭ, Иран, Турция).
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.advantages {
	margin: 80px auto;
	display: flex;
	flex-direction: column;
	row-gap: 100px;

	&__step-2,
	&__step-4 {
		@include tablet {
			.step__content {
				flex-direction: column-reverse;
			}
		}
	}
}

.step {
	&__icons {
		margin-top: 24px;
		display: flex;
		align-items: center;
		column-gap: 26px;
	}

	&__items {
		display: flex;
		flex-direction: column;
		row-gap: 14px;
	}

	&__content {
		display: flex;
		align-items: end;
		justify-content: space-between;
		column-gap: 50px;

		@include tablet {
			flex-direction: column;
			row-gap: 40px;
			align-items: center;
		}

		&-left {
			flex: 1;
		}

		&-right {
			flex: 1;
		}

		&-img {
			width: 100%;
			max-width: 520px;

			&-wrapper {
				border-radius: 24px;
				background: $black-90;
				overflow: hidden;
				display: flex;
				justify-content: center;
				padding-top: 40px;
				height: 337px;

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

	&__item {
		display: flex;
		align-items: start;
		column-gap: 10px;

		&-line {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 4px;
		}

		&-info {
			&:nth-child(2) {
				margin-top: 24px;
			}

			&:nth-child(3) {
				margin-top: 42px;
			}
		}

		&-title {
			font-size: 16px;
			font-weight: 400;
			line-height: 1.3;
			margin-bottom: 6px;

			b {
				font-weight: 600;
			}
		}
		&-text {
			color: $black-90;
			font-size: 16px;
			font-weight: 400;
			line-height: 130%;
			letter-spacing: -0.28px;
			b {
				font-weight: 600;
			}

			@include tablet {
				font-size: 14px;
			}
		}
	}
}
</style>
