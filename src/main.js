
import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vueForm from 'vue-form'


createApp(App)
.use(router)
.use(store)
.use(vueForm)
.mount('#app')