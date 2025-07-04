<template>
	<div class="dropdown">
		<ul class="dropdown__list">
			<li @click="switchLanguage('en')" class="dropdown__list-item">
				<img src="/icons/countries/usa.svg" alt="" />
				<span>English</span>
			</li>
			<li @click="switchLanguage('ru')" class="dropdown__list-item">
				<img src="/icons/countries/russia.svg" alt="" />
				<span>Russian</span>
			</li>
			<li @click="switchLanguage('en')" class="dropdown__list-item">
				<img src="/icons/countries/germany.svg" alt="" />
				<span>German</span>
			</li>
			<li @click="switchLanguage('en')" class="dropdown__list-item">
				<img src="/icons/countries/france.svg" alt="" />
				<span>French</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
const { locale, setLocale } = useI18n()

const switchLanguage = string => {
	setLocale((locale.value = string))
}
</script>

<style lang="scss" scoped>
.dropdown {
	position: absolute;
	z-index: 2;
	top: 50px;
	padding: 12px;
	border-radius: 12px;
	border: 0.5px solid $black-70;
	background: $black-90;
	box-shadow: 0px 6px 12px -6px rgba(5, 7, 13, 0.12), 0px 8px 24px -4px rgba(0, 1, 1, 0.08);

	&__list {
		&-item {
			width: 100%;
			padding: 8px 12px;
			display: flex;
			align-items: center;
			column-gap: 8px;
			border-radius: 8px;
			color: $grey-25;
			cursor: pointer;

			&:hover {
				border-radius: 8px;
				background: $black-80;
			}
		}
	}
}
</style>
