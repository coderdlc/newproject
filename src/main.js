import Vue from 'vue'
import { Button, Select, Table, TableColumn } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'js-cookie'
import App from './App.vue'

Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn);

Vue.config.productionTip = false

Vue.prototype.$Cookies = Cookies

new Vue({
  render: h => h(App),
}).$mount('#app')
