export interface SubscribeVariant {
	id: number
	active?: boolean
	price?: number
	label: string
	detailPriceText?: string
	tag?: 'recommended' | 'profitable'
}

export interface ICancellationReason {
	id: number
	value: string
	label: string
}
