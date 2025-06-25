import type { Directive } from 'vue'

interface ClickOutsideBinding {
	(event: MouseEvent | TouchEvent | PointerEvent): void
}

/**
 * v-click-outside
 * <div v-click-outside="onClose" />
 */
export const vClickOutside: Directive<HTMLElement, ClickOutsideBinding> = {
	mounted(el, binding) {
		const onEvent = (e: Event) => {
			const target = e.target as Node | null
			if (target && !el.contains(target)) {
				binding.value?.(e as MouseEvent)
			}
		}

		;(el as any).__clickOutside__ = onEvent

		document.addEventListener('pointerdown', onEvent)
	},

	unmounted(el) {
		document.removeEventListener('pointerdown', (el as any).__clickOutside__)
		delete (el as any).__clickOutside__
	},
}
