
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import {a,sum} from './test'
Vue.config.productionTip = false
console.log('a',a)
const result=sum(2,3)
console.log('result',result)


new Vue({
    el: '#app',
    render: h => h(App),
    router
})
