
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// import {a,sum} from './test'
Vue.config.productionTip = false
// const result=sum(2,3)


new Vue({
    el: '#app',
    render: h => h(App),
    router
})
