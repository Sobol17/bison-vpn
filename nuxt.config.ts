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
	modules: ['@nuxt/image'],
	devtools: { enabled: true },
})
