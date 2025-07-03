export interface SubscribeVariant {
	id: number
	active?: boolean
	price: number
	duration: string
	detailPriceText: string
	tag?: 'recommended' | 'profitable'
}
