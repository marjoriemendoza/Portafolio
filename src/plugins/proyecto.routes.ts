import {RouteRecordRaw,createWebHistory,createRouter} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import Proyectos from "../components/Proyectos/Proyectos.vue";


export const routes:RouteRecordRaw[]=[

    {
        component:HomePage,
        path:"/",
   },
    {
       component:Proyectos,
       path:"/proyectos",
    },
    
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;