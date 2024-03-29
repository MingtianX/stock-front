/* eslint-disable */ 
import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from "vue-router"
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { Vue } from '@vueuse/core/node_modules/vue-demi'
import router from '../router'
// app.use(VueRouter)
import axios from 'axios'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$axios=axios
app.mount('#app')

