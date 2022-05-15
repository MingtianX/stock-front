// history模式
import {
    createRouter,
    createWebHistory,
} from 'vue-router'



const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/login"
    },
    {
        path: '/pageoperate',
        component: ()=>import("../views/PageOperate.vue"),
        redirect:'/pageoperate/allstock',
        children:[
            {
                path:'allstock',
                component:()=>import("../components/AllStock.vue")
            },
            {
                path:'stockindex',
                component:()=>import("../views/StockIndex.vue")
            }

        ]
    },
    {
        path: '/login',
        component: ()=>import("../views/PageLogin.vue")
    }
]

const routerHistory = createWebHistory()
// 创建路由对象
const router = createRouter({
    history: routerHistory,
    routes
})
export default router;
