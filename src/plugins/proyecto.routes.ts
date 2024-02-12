import {RouteRecordRaw,createWebHistory,createRouter} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProyectosPages from "../pages/ProyectosPages.vue";


export const routes:RouteRecordRaw[]=[

    {
        component:HomePage,
        path:"/",
   },
    {
       component:ProyectosPages,
       path:"/proyectos",
    },
    
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;