import {RouteRecordRaw,createWebHistory,createRouter} from "vue-router";
import ProyectosVue from "../components/Proyectos/Proyectos.vue";
import HomeVue from "../components/Home/Home.vue";


export const routes:RouteRecordRaw[]=[

    {
        name:"Home",
        component:HomeVue,
        path:"/",
   },
    {
    name:"Proyectos",
    component:ProyectosVue,
    path:"/proyectos",
    },
    
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;