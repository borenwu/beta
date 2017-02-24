import Vue from 'vue'
import Router from 'vue-router'
import OrderView from 'components/order/OrderView'
import WorkView from 'components/work/WorkView'
import WarehouseView from 'components/warehouse/WarehouseView'
import FinanceView from 'components/finance/FinanceView'
import HomeView from 'components/home/HomeView'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/order',
      name: 'OrderView',
      component: OrderView
    },
    {
      path: '/work',
      name: 'WorkView',
      component: WorkView
    },
    {
      path: '/warehouse',
      name: 'WarehouseView',
      component: WarehouseView
    },
    {
      path: '/finance',
      name: 'FinanceView',
      component: FinanceView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
  ]
})
