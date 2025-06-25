<template>
	<div class="footer">
		<div class="container footer__inner">
			<div class="footer-col">
				<img src="/logo.svg" alt="" />
				<p class="footer-col__text">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard
				</p>
				<div class="footer-col__copyright">© Coopyright by VPN. All right reserved</div>
			</div>
			<div class="footer-col">
				<div class="footer-col__title">Правовая информация</div>
				<ul class="footer-col__list">
					<li class="footer-col__list-item">
						<NuxtLink to="/">Политика конфиденциальности</NuxtLink>
					</li>
					<li class="footer-col__list-item">
						<NuxtLink to="/">Пользовательское соглашение</NuxtLink>
					</li>
					<li class="footer-col__list-item">
						<NuxtLink to="/">Отмена подписки</NuxtLink>
					</li>
					<li class="footer-col__list-item">
						<NuxtLink to="/">Возврат средств</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="footer-col">
				<div class="footer-col__title">Навигация</div>
				<ul class="footer-col__list">
					<li class="footer-col__list-item">
						<NuxtLink to="/about">О сервисе</NuxtLink>
					</li>
					<li class="footer-col__list-item">
						<NuxtLink to="/product">О продукте</NuxtLink>
					</li>
					<li class="footer-col__list-item">
						<NuxtLink to="/tariffs">Тарифы</NuxtLink>
					</li>
					<li class="footer-col__list-item">
						<NuxtLink to="/reviews">Отзывы</NuxtLink>
					</li>
					<li class="footer-col__list-item">
						<NuxtLink to="/faq">Часто спрашивают</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="footer-col">
				<div class="footer-col__title">Контакты</div>
				<a class="footer-col__phone" href="tel:88004015684">📞 8 (800) 401-56-84</a>
				<a class="footer-col__mail" href="mailto:support@gmail.com">📩 support@gmail.com</a>
				<Button secondary>
					<TgIcon />
					<span>Связаться с поддержкой в TG</span>
					<AngleRight class="shrink-0" />
				</Button>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
	background-color: $black-100;
	padding: 70px 0px;

	&__inner {
		display: flex;
		align-items: start;
		column-gap: 20px;

		@include tablet {
			flex-direction: column;
			row-gap: 40px;
		}
	}

	&-col {
		flex: 1;

		&__text {
			margin-top: 20px;
			font-size: 14px;
			line-height: 1.3;
			color: $grey-30;
		}

		&__copyright {
			font-size: 14px;
			margin-top: 28px;
			color: $grey-100;
		}

		&__title {
			font-size: 18px;
			font-weight: 600;
			color: #646464;
			margin-bottom: 20px;

			@include big-mobile {
				font-weight: 500;
			}
		}

		&__phone {
			display: block;
			font-size: 18px;
			color: $white;
		}

		&__mail {
			margin-top: 12px;
			margin-bottom: 32px;
			display: block;
			font-size: 18px;
			color: #6282f5;
		}

		&__list {
			display: flex;
			flex-direction: column;
			row-gap: 12px;

			&-item {
				a {
					font-size: 18px;
					color: $grey-30;
					transition: color 0.24s ease-in-out, opacity 0.24s ease-in-out;

					&:hover {
						color: $white;
					}

					&:active {
						opacity: 0.6;
					}
				}
			}
		}
	}
}

.shrink-0 {
	flex-shrink: 0;
}
</style>
