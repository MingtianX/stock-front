// history模式
import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import PageOperate from '../views/PageOperate.vue'
import LoginBox from '../components/LoginBox.vue'

const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/login"
    },
    {
        path: '/pageoperate',
        component: PageOperate
    },
    {
        path: '/login',
        component: LoginBox
    },
]

const routerHistory = createWebHistory()
// 创建路由对象
const router = createRouter({
    history: routerHistory,
    routes
})
export default router;
