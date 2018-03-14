import Vue from 'vue'
import Router from 'vue-router'
import Info from '../components/info/info.vue'
import Match from '../components/match/match.vue'
import Result from '../components/result/result.vue'
import Client from '../components/client/client.vue'
import Info1 from '../components/info1/info1.vue'
import Match1 from '../components/match-detail/match-detail.vue'
import Result1 from '../components/result-detail/result-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/info'
    },
    {
      path:'/info',
      component:Info,
    },
    {
      path:'/infoid',
      component:Info1
    },
    {
      path:'/match',
      component:Match
    },
    {
      path:'/match1',
      component:Match1
    },
    {
      path:'/result',
      component:Result
    },
    {
      path:'/result1',
      component:Result1
    },
    {
      path:'/client',
      component:Client
    }
  ]
})
