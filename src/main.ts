import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/route'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './database/firebase'

const app = createApp(App)
app.use(router)
app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })
app.mount('#app')
