import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

let app = createApp(App)
for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}
app.use(router)
app.use(ElementPlus)

app.mount('#app')

