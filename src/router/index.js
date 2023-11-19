import { createRouter, createWebHistory } from "vue-router";

// import dashboard from '../pages/todoform/tambahdealer'
import dashboard from '../pages/master/dashboard'
// import homepage from '../pages/master/home'
import dftproduk from '../pages/dftproduk'
import listdealer from '../pages/listdealer'
import home from '../pages/home'
import merk from '../pages/merk'
import login from '../pages/login'

import tambahdealer from '../pages/todoform/tambahdealer'
import tambahmerek from '../pages/todoform/tambahmerek'
import editdealer from '../pages/todoform/editdealer'
import tambahproduk from '../pages/todoform/tambahproduk'

    const routes = [
        {
            name: 'login',
            path: '/',
            component:login, 
        },
        {
            name: 'dashboard',
            path: '/dashboard',
            component:dashboard,
            children:[
                {
                    name: 'dftproduk',
                    path: '/dftproduk',
                    component:dftproduk
                },
                {
                    name: 'listdealer',
                    path: '/listdealer',
                    component:listdealer,
                },
                {
                    name:'home',
                    path:'/home',
                    component:home
                },
                {
                    name:'merk',
                    path:'/merk',
                    component:merk
                }
            ],
        },
        {
            name: 'tambahdealer',
            path: '/tambahdealer',
            component:tambahdealer, 
        },
        {
            name: 'tambahproduk',
            path: '/tambahproduk',
            component:tambahproduk, 
        },
        {
            name: 'tambahmerek',
            path: '/tambahmerek',
            component:tambahmerek, 
        },
        {
            name: 'editdealer',
            path: '/editdealer',
            component:editdealer, 
        },

    ];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}