import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from "../view/Welcome.vue";
import Event from "../view/Event.vue";
import ToBe from "../components/ToBeCard.vue";
import Outer from "../components/Outer.vue";
import Finish from "../components/FinishCard.vue";
import About from "../view/About.vue"

const routes = [
    {path: '/', component: Welcome},
    {
        path: '/event',
        component: Event,
        children: [
            {
                path: '/tobe',
                component: ToBe
            },
            {
                path: '/outer',
                component: Outer
            },
            {
                path: '/finish',
                component: Finish
            }
        ]
    },
    {
        path: '/about',
        component: About
    }
];


export default createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，这里使用 hash 模式。
    history: createWebHashHistory(),

    routes,
})
