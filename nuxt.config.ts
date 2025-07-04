export default defineNuxtConfig({
	css: ['~/assets/styles/main.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @use "~/assets/styles/base" as *;
            @use "~/assets/styles/mixins" as *;
          `,
				},
			},
		},
	},

	components: [{ path: '~/components', pathPrefix: false }],
	modules: ['@nuxt/image', '@pinia/nuxt', '@nuxtjs/i18n'],
	i18n: {
		locales: [
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'ru', name: 'Русский', file: 'ru.json' },
		],
		defaultLocale: 'ru',
		lazy: true,
		strategy: 'no_prefix',
		detectBrowserLanguage: {
			useLocalStorage: true,
			localStorageKey: 'app-locale',
			fallbackLocale: 'ru',
		},
	},
	devtools: { enabled: true },
})
