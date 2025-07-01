import type { CompareBlock, IPremiumInclude, IReviewCard, ITariff } from '../types/home-page.types'

export const statisticsData = [
	{
		title: '50 000',
		text: 'Скачиваний VPN-ключей. Тысячи людей уже выбрали нас.',
		showIcon: true,
	},
	{
		title: '100%',
		text: 'Защита в общественных Wi-Fi сетях, соединение надежно зашифровано',
		showIcon: false,
	},
	{
		title: '90 +',
		text: 'Серверов с местоположением в 200 странах мира',
		showIcon: true,
	},
	{
		title: '5',
		text: 'Лет на рынке VPN мы предоставляем надежные и стабильные решения.',
		showIcon: false,
	},
	{
		title: '99.9 %',
		text: 'Аптайма серверов — VPN всегда в сети без сбоев.',
		showIcon: false,
	},
	{
		title: '5 000 +',
		text: 'Довольных пользователей по всему миру',
		showIcon: true,
	},
	{
		title: '4.9',
		text: 'Рейтинг сервиса по мнению toptechnohub.com',
		showIcon: false,
	},
	{
		title: '75 +',
		text: 'Мбит/с - средняя скорость загрузки, даже на дальних серверах.',
		showIcon: true,
	},
]

export const compareData: CompareBlock[] = [
	{
		number: 1,
		name: 'безопасность',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Максимальный контроль, так как ключи не передаются третьим лицам.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Возможны встроенные трекеры или сбор данных.',
		reverse: false,
	},
	{
		number: 2,
		name: 'анонимность',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Полная анонимность, ключи можно менять вручную.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Иногда требуется регистрация, что снижает уровень анонимности.',
		reverse: false,
	},
	{
		number: 3,
		name: 'гибкость',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Можно использовать на любых устройствах, включая роутеры.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Ограничение по устройствам и платформам.',
		reverse: false,
	},
	{
		number: 4,
		name: 'настройка',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Требует ручной настройки, что может быть сложно для новичков.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Подключение в один клик. ',
		reverse: true,
	},
	{
		number: 5,
		name: 'скорость',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Можно выбрать любой сервер и протокол для оптимальной скорости.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Приложения используют сервера с ограниченной скоростью.',
		reverse: false,
	},
	{
		number: 6,
		name: 'обход блокировок',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Возможность смены серверов и протоколов при необходимости.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Приложения могут блокироваться провайдерами.',
		reverse: false,
	},
	{
		number: 7,
		name: 'обновление',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Требуется вручную заменять ключи при их истечении.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Автоматическое обновление ключей и серверов.',
		reverse: true,
	},
	{
		number: 8,
		name: 'прозрачность',
		positiveTitle: 'Использование VPN-ключей',
		positiveText: 'Полный контроль за настройками и протоколами.',
		negativeTitle: 'Готовое приложение с вшитыми ключами',
		negativeText: 'Неизвестно, какие технологии и сервера реально используются.',
		reverse: false,
	},
]

export const tariffsData: ITariff[] = [
	{
		icon: '🚀',
		name: '«1 МЕСЯЦ»',
		oldPrice: 300,
		actualPrice: 200,
		description: 'Тем, кто хочет попробовать сервис или использовать VPN на короткий срок',
		properties: [
			'Путешественникам',
			'Временным пользователям',
			'Удаленным работникам',
			'Студентам',
			'Новичкам в VPN',
		],
		btnText: 'Попробовать 10 дней за 19 руб.',
	},
	{
		icon: '💡',
		name: '«6 МЕСЯЦЕВ»',
		oldPrice: 300,
		actualPrice: 200,
		description: 'Идеальный вариант для тех, кто хочет надежный VPN без лишних переплат',
		properties: [
			'Активным интернет-пользователям ',
			'Геймерам',
			'Крипто-инвесторам',
			'Пользователям соцсетей и стримингов',
		],
		tag: 'recommend',
		btnText: 'Попробовать 10 дней за 19 руб.',
		subtitle: 'Всего 1300 руб. за 6 месяцев',
	},
	{
		icon: '🏆',
		name: '«12 МЕСЯЦЕВ»',
		oldPrice: 100,
		actualPrice: 80,
		description: 'Для тех, кто хочет безопасный, быстрый и надежный VPN на постоянной основе.',
		properties: [
			'IT-специалистам',
			'Жителям стран с жесткой цензурой',
			'Семьям и владельцам нескольких устройств',
			'Любителям экономии ',
		],
		tag: 'best choice',
		btnText: 'Попробовать 10 дней за 19 руб.',
		subtitle: 'Всего 2600 руб. за 12 месяцев',
	},
]

export const premiumIncludesData: IPremiumInclude[] = [
	{
		icon: '🚀',
		title: 'Соединение еще быстрее',
		text: 'Cредняя скорость серверов 97+ mb/s по SpeedTest',
	},
	{
		icon: '🔗',
		title: '10 устройств по 1 подписке',
		text: 'Подключайте все свои устройства и делитесь с близкими',
	},
	{
		icon: '🌏',
		title: '+90 стран и IP адресов',
		text: 'Cредняя скорость серверов 97+ mb/s по SpeedTest',
	},
	{
		icon: '🗝',
		title: 'Ключ выдается сразу',
		text: 'После оплаты ключ из 90 серверов сразу доступен без ожидания',
	},
	{
		icon: '📨',
		title: 'Поддержка 24/7',
		text: 'Приоритетная помощь через Telegram и Email без задержек',
	},
	{
		icon: '🔐',
		title: 'Еще безопаснее',
		text: 'Дополнительное сквозное шифрование данных',
	},
	{
		icon: '📥',
		title: 'Безлимитный трафик',
		text: 'Интернет-серфинг без каких-либо ограничений',
	},
	{
		icon: '🎮',
		title: 'Поддержка стриминга, P2P',
		text: 'Торренты без ограничений скорости и блокировок',
	},
]

export const reviewsData: IReviewCard[] = [
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!  Highly recommend! Highly recommend! Highly recommend! Highly recommend! Highly recommend! Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
	{
		author: {
			avatar: '/images/home/review-avatar.png',
			name: 'User Name',
		},
		postedOnIcon: '/icons/home/google.svg',
		date: '18 APR 2025',
		rate: 4.5,
		text: 'I was really worried about getting my visa on time, but this service made the process so easy! Everything was clear, the support team was super helpful, and I got my e-visa in less than 24 hours. No hidden fees, no stress – just a smooth experience. Highly recommend!',
	},
]

export const faqData = [
	{
		title: 'Я не понимаю, как оплатить подписку, если у меня карта российского банка?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'Как быстро я получу VPN-ключ после оплаты?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'На каких устройствах работает VPN-ключ?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'Можно ли подключить несколько устройств к одному ключу?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'Какая скорость будет в премиум-тарифе?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'Чем премиум отличается от бесплатного тарифа?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'Можно ли выбрать конкретную страну для подключения?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'Как оплатить подписку, если у меня карта российского банка?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		title: 'Что делать, если VPN не подключается?',
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
]

export const partnersData = [
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
	{
		name: 'Tour Stage',
		image: '/images/partners/tour-stage_1.svg',
	},
	{
		name: 'item_partner',
		image: '/images/partners/item_partner.svg',
	},
	{
		name: 'Allianz',
		image: '/images/partners/Allianz_1.svg',
	},
	{
		name: 'PayPal',
		image: '/images/partners/paypal.svg',
	},
]
