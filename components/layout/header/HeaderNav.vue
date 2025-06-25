<template>
	<ul class="nav">
		<li class="nav-item">
			<NuxtLink class="nav-item__link" to="/about">О сервисе</NuxtLink>
		</li>
		<li class="nav-item">
			<NuxtLink class="nav-item__link" to="/tariffs">Тарифы</NuxtLink>
		</li>
		<li class="nav-item">
			<NuxtLink class="nav-item__link" to="/reviews">Отзывы</NuxtLink>
		</li>
	</ul>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
	display: flex;
	align-items: center;
	column-gap: 40px;

	@include tablet {
		margin-top: 34px;
		flex-direction: column;
		align-items: start;
	}

	&-item {
		&__link {
			padding: 6px 14px;
			border-radius: 6px;
			background: transparent;
			transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
			line-height: 1.3;
			font-size: 16px;
			font-weight: 500;
			color: $grey-25;

			@include tablet {
				display: inline-block;
			}

			&:hover {
				background: $black-90;
			}

			&:active {
				color: $white;
			}
		}
	}
}
</style>
