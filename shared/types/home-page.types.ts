export interface CompareBlock {
	number: number
	name: string
	positiveTitle: string
	negativeTitle: string
	positiveText: string
	negativeText: string
	reverse: boolean
}

export interface ITariff {
	name: string
	oldPrice: number
	actualPrice: number
	icon: string
	tag?: 'best choice' | 'recommend'
	description: string
	properties: string[]
	btnText: string
	subtitle?: string
}

export interface IPremiumInclude {
	icon: string
	title: string
	text: string
}

export interface IReviewCard {
	author: Author
	postedOnIcon: string
	date: string
	text: string
	rate: number
}

export type Author = {
	avatar: string
	name: string
}
