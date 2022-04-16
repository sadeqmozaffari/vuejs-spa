import { createRouter, createWebHistory } from 'vue-router'
import  store from '@/store/index'  
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import loginVue from '@/views/login.vue'
import logoutView from '@/views/logout.vue'
import RegisterVue from '@/views/Register.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterVue
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileViewVue,
    meta:{
      loginRequire:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: loginVue,
    meta:{
      loginRedirect:true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: logoutView,
    meta:{
      loginRequire:true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.loginRequire)){
    if(store.state.isAuthenticated){
      next()
    }else{
      next("/login")
    }
  }else if(to.matched.some(record=>record.meta.loginRedirect)){
    if(!store.state.isAuthenticated){
      next()
    }else{
      next("/profile")
    }
  }
  else{
    next()
  }
})
export default router
