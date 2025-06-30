import type { CompareBlock } from '../types/home-page.types'

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
