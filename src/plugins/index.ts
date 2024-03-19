import router from "../router";
import pinia from "../store";
import vuetify from "./vuetify";
// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(pinia).use(router).use(vuetify);
}
