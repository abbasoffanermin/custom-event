import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import axios from 'axios'
const app=createApp(App)
app.config.globalProperties.axios=axios


app.config.globalProperties.emitter=mitt()
app.directive("costum", {
    beforeMount:(el,binding)=>{
       if(binding.arg=="click"){
      el.binding="@click"

       
       }
},
  
})

app.mount('#app')
