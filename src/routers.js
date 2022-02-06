import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'
import BodyContent from './components/BodyContent.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {
        name: 'Home',
        component : BodyContent,
        path:'/',
    },

    {
        name: 'Contact',
        component : Contact,
        path:'/contact',
    },

    {
        name: 'Skills',
        component: Skills,
        path: "/skills",
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;