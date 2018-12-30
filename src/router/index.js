import Vue from 'vue'
import Router from 'vue-router'
import Guide from '../containers/Guide/index'
import Home from "../containers/Home/index"
import Strategy from "../containers/Strategy/index"
import Found from "../containers/Found/index"
import Friend from "../containers/Friend/index"
import Mine from "../containers/Mine/index"
import HomeDetail from "@/containers/Home/HomeDetail/index"
import HomeMore from "@/containers/Home/HomeMore/index"
import DetailsPage from "@/containers/Home/DetailsPage/index"
Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/strategy',
      name: 'Strategy',
      component: Strategy
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/homedetail',
      name: 'HomeDetail',
      component: HomeDetail
    },
    {
      path: '/homemore',
      name: 'HomeMore',
      component: HomeMore
    },
    {
      path: '/detailspage',
      name: 'DetailsPage',
      component: DetailsPage
    }
  ]
})
