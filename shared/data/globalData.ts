import type { SubscribeVariant } from '../types/global.types'

export const subscribeVariants: SubscribeVariant[] = [
	{
		id: 1,
		price: 560,
		duration: '1 месяц',
		detailPriceText: '167 р. / 1 мес.',
	},
	{
		id: 2,
		price: 260,
		duration: '6 месяцев',
		detailPriceText: '1067 р. / 6 мес.',
		tag: 'recommended',
	},
	{
		id: 3,
		price: 130,
		duration: '12 месяцев',
		detailPriceText: '1607 р. / 12 мес.',
		tag: 'profitable',
	},
]

export const subscribeBenefits: string[] = [
	'Сервера без ограничений трафика',
	'Подключение 10 устройств по 1 подписке',
	'Средняя скорость серверов 97+ MB/c',
	'Доступ к более 50 странам и IP',
	'Надежные и безопасные сервера',
	'Не собираем и не храним данные',
]
