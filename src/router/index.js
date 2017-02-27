import Vue from 'vue'
import Router from 'vue-router'
import OrderView from 'components/order/OrderView'
import TaskView from 'components/work/TaskView'
import WarehouseView from 'components/warehouse/WarehouseView'
import SaleView from 'components/finance/SaleView'
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
      path: '/task',
      name: 'TaskView',
      component: TaskView
    },
    {
      path: '/warehouse',
      name: 'WarehouseView',
      component: WarehouseView
    },
    {
      path: '/sale',
      name: 'SaleView',
      component: SaleView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
  ]
})
