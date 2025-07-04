<template>
	<div class="textarea__wrapper">
		<textarea
			class="textarea"
			:class="{ error: error }"
			@textarea="handletextarea"
			:type="type ?? 'text'"
			:name="name ?? 'textarea-name'"
			:placeholder="placeholder"
		></textarea>
		<img class="textarea__icon icon-error" v-if="error" src="/icons/input/icon_error.svg" alt="" />
		<button @click="clear">
			<img
				v-if="isTyping && model"
				class="textarea__icon icon-delete"
				src="/icons/input/icon_delete.svg"
				alt=""
			/>
		</button>
		<img
			v-if="!isTyping && model"
			class="textarea__icon icon-success"
			src="/icons/input/icon_check.svg"
			alt=""
		/>
	</div>
</template>

<script setup lang="ts">
import debounce from '~/shared/utils/debounce'

interface Props {
	type?: string
	name?: string
	placeholder: string
	error?: boolean
}

defineProps<Props>()

const model = defineModel()

const isTyping = ref(false)

const debouncedSetTyping = debounce(() => {
	isTyping.value = false
}, 500)

const handletextarea = (e: Event) => {
	isTyping.value = true
	const target = e.target as HTMLInputElement
	model.value = target.value
	debouncedSetTyping()
}

const clear = () => {
	model.value = ''
}
</script>

<style lang="scss" scoped>
.textarea {
	border-radius: 12px;
	background: $black-80;
	padding: 16px 16px 14px 16px;
	border: 0.5px solid transparent;
	transition: all 0.24s ease-in-out;
	color: $grey-20;
	font-size: 16px;
	font-weight: 400;
	line-height: 120%;
	width: 100%;
	resize: none;
	height: 140px;

	&::placeholder {
		color: $grey-100;
	}

	&:not(&:placeholder-shown) {
		border-color: $accent;
	}

	&:hover,
	&:focus {
		border-color: $accent;
	}

	&__wrapper {
		position: relative;
		width: 100%;
	}

	&__icon {
		position: absolute;
		top: 15px;
		right: 16px;
	}
}

.error {
	border-color: $error;
}
</style>
