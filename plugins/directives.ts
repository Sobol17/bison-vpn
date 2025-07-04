import { vClickOutside } from '~/directives/clickOutside'

export default defineNuxtPlugin(nuxt => {
	nuxt.vueApp.directive('click-outside', vClickOutside)
})
