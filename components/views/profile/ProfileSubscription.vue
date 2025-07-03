<template>
	<div class="container profile-section">
		<h2 class="profile-title">Подписка</h2>
		<div class="subscription">
			<div class="detail">
				<h4 class="subscription__title">Управление подпиской</h4>
				<div class="detail__wrapper">
					<div class="detail__left">
						<div class="detail__card">
							<div class="detail__card-head">
								<h4 class="detail__title">💡 Premium на 6 месяцев</h4>
							</div>
							<div class="detail__card-body">
								<p class="detail__card-text">
									<span>Период:</span> {{ subscriptionDetailData.duration }}
								</p>
								<p class="detail__card-text">
									<span>Ежемесячная плата:</span> {{ subscriptionDetailData.payment }} ₽/мес
								</p>
								<p class="detail__card-text">
									<span>Счет: </span> {{ subscriptionDetailData.paymentAccount }}
								</p>
								<p class="detail__card-text">
									<span>Дата следующего списания:</span> {{ subscriptionDetailData.expireDate }}
								</p>
								<Button secondary class="detail__card-btn">Перейти на годовой тариф</Button>
							</div>
						</div>
						<div class="detail__note">
							В случае перехода на годовой план вам нужно будет доплатить всего 500 ₽, что на 59%
							выгоднее ежемесячной оплаты.
						</div>
					</div>
					<div class="detail__pluses">
						<h4 class="detail__title">Ваши эксклюзивные возможности:</h4>
						<ul class="detail__pluses-list">
							<li v-for="(item, index) in subscribeBenefits" :key="index">
								<TableGreenCheck /> <span>{{ item }}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="subscription__manage">
				<h4 class="subscription__title">Управление подпиской</h4>
				<div class="subscription__manage-wrapper">
					<div class="subscription__left">
						<div>
							<div class="subscription__item">
								<ProfileSettingsBlock
									title="Premium ・ 6 месяцев"
									content-text="Действует до: 14.02.25 г."
								>
									<template #start>
										<div class="subscription__prev">💡</div>
									</template>
									<template #end>
										<Button secondary class="btn-mini">Продлить</Button>
									</template>
								</ProfileSettingsBlock>
							</div>
							<div class="subscription__item">
								<ProfileSettingsBlock
									title="Авто-продление"
									content-text="Следующий платеж - 399 ₽, запланирован на 14.02.25 г."
								>
									<template #start>
										<img src="/icons/money.svg" alt="" />
									</template>
									<template #end>
										<button class="subscription__cancel">Отменить</button>
									</template>
								</ProfileSettingsBlock>
							</div>
						</div>
						<h4 class="subscription__title subscription__title-payment">Способы оплаты</h4>
						<div class="subscription__item">
							<ProfileSettingsBlock
								class="card"
								title="Visa .... 9670 "
								content-text="Действует до: 2 авг. 2030 г."
							>
								<template #start>
									<img src="/icons/icon_mir.svg" alt="" />
								</template>
								<template #end>
									<button class="card-btn"><IconDelete /></button>
								</template>
							</ProfileSettingsBlock>
						</div>
					</div>
					<div class="subscription__right">
						<PaymentsHistory />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { subscribeBenefits } from '~/shared/data/globalData'
import { subscriptionDetailData } from '~/shared/data/profileData'
</script>

<style scoped lang="scss">
.profile-section {
	margin: 80px auto;
}
.subscription {
	border-radius: 30px;
	border: 0.5px solid #d5d8e3;
	background: $grey-15;
	padding: 40px 50px;

	&__manage {
		margin-top: 40px;

		&-wrapper {
			display: flex;
			column-gap: 50px;
			@include tablet {
				flex-direction: column;
			}
		}
	}

	@include tablet {
		border-radius: 24px;
		padding: 20px 16px;
	}

	&__left {
		flex: 0 1 calc(50% - 25px);
	}

	&__right {
		flex: 0 1 calc(50% - 25px);
	}

	&__prev {
		color: $black-90;
		text-align: center;
		font-size: 40px;
		font-weight: 700;
		line-height: 130%;
		text-transform: uppercase;
	}

	&__title {
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 600;
		line-height: 130%;

		&-payment {
			margin-top: 40px;
		}
	}

	&__text {
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
		color: $black-90;

		&--grey {
			color: $grey-100;
			font-size: 14px;
		}
	}

	&__item {
		width: 100%;
		display: flex;
		column-gap: 50px;
		align-items: center;

		&:first-child {
			margin-bottom: 18px;
		}
	}

	&__cancel {
		color: $grey-100;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 140%;
		text-decoration-line: underline;
		text-decoration-style: dotted;
		text-decoration-skip-ink: auto;
		text-decoration-thickness: auto;
		text-underline-offset: auto;
		text-underline-position: from-font;
	}
}

.detail {
	&__wrapper {
		display: flex;
		align-items: start;
		column-gap: 50px;

		@include big-mobile {
			flex-direction: column;
			row-gap: 24px;
		}
	}

	&__left {
		flex: 0 1 calc(50% - 25px);

		@include big-mobile {
			flex: 0 1 100%;
		}
	}

	&__card {
		border-radius: 14px;
		background-color: $grey-10;

		&-head {
			padding: 20px;
			border-bottom: 1px solid #f0f0f0;
		}

		&-body {
			padding: 20px;
		}

		&-text {
			font-size: 16px;
			font-weight: 400;
			color: $grey-100;
			margin-bottom: 6px;
			line-height: 1.3;
			span {
				font-weight: 500;
				color: $black-90;
			}
		}

		&-btn {
			margin-top: 24px;
		}
	}

	&__note {
		margin-top: 16px;
		color: $grey-100;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.3;
	}

	&__title {
		font-weight: 600;
		font-size: 18px;
	}

	&__pluses {
		padding: 20px;
		border-radius: 14px;
		background-color: $grey-10;
		flex: 0 1 calc(50% - 25px);

		@include big-mobile {
			width: 100%;
			flex: 0 1 100%;
		}

		&-list {
			margin-top: 16px;
			display: flex;
			flex-direction: column;
			row-gap: 14px;

			li {
				display: flex;
				align-items: center;
				column-gap: 8px;
			}
		}
	}
}

.btn-mini {
	max-width: 130px;
}

.card {
	&:hover {
		.card-btn {
			color: $black-90;
		}
	}
	&-btn {
		color: $grey-100;
	}
}
</style>
