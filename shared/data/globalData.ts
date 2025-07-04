import type { ICancellationReason, SubscribeVariant } from '../types/global.types'

export const subscribeVariants: SubscribeVariant[] = [
	{
		id: 1,
		price: 560,
		label: '1 месяц',
		detailPriceText: '167 р. / 1 мес.',
	},
	{
		id: 2,
		price: 260,
		label: '6 месяцев',
		detailPriceText: '1067 р. / 6 мес.',
		tag: 'recommended',
	},
	{
		id: 3,
		price: 130,
		label: '12 месяцев',
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

export const cancellationReasons: ICancellationReason[] = [
	{
		id: 1,
		value: 'bad-work',
		label: 'VPN плохо работает 😡',
	},
	{
		id: 2,
		value: 'expensive-price',
		label: 'Слишком высокая цена 💰',
	},
	{
		id: 3,
		value: 'dont-need',
		label: 'Больше не нуждаюсь в VPN 🙅🏻',
	},
	{
		id: 4,
		value: 'another',
		label: 'Другое',
	},
]
