<template>
	<div class="language-wrapper">
		<button @click="toggleDropdown" class="language" title="Смена языка">
			<img src="/icons/icon_planet.svg" alt="" />
			<span>{{ $t('current_language') }} </span>
			<img :class="{ rotate: isDropdownShow }" src="/icons/icon_angle.svg" alt="" />
		</button>

		<transition name="fade">
			<HeaderLanguagesDropdown v-if="isDropdownShow" v-click-outside="toggleDropdown" />
		</transition>
	</div>
</template>

<script setup>
const isDropdownShow = ref(false)

const toggleDropdown = () => {
	isDropdownShow.value = !isDropdownShow.value
}
</script>

<style lang="scss" scoped>
.language {
	display: flex;
	align-items: center;
	column-gap: 2px;

	padding: 10px 12px;
	border-radius: 6px;
	background: transparent;
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
	line-height: 1.3;
	font-size: 14px;
	font-weight: 500;
	color: $grey-25;

	&:hover {
		background: $black-90;
	}

	&:active {
		color: $white;
	}
}

.language-wrapper {
	position: relative;
}

.rotate {
	transition: transform 0.24s ease-in-out;
	transform: rotate(180deg);
}
</style>
