import PrimeVue from 'primevue/config'
import router from '../router'
import pinia from '../store'
// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
	app.use(pinia).use(router).use(PrimeVue, {
		unstyled: true,
	})
}
