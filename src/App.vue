<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import NavBar  from './components/NavBar.vue'
import  FooterBar  from './components/FooterBar.vue'
import { ref } from 'vue'
import axios from 'axios';
import { useStore } from 'vuex'

function beforeCreate(){
  const store = useStore()
  store.commit('initializeStore')

  const token = store.state.token

  if (token){
    axios.defaults.headers.common['Authorization'] = "Bearer " + token

  }else{
    axios.defaults.headers.common['Authorization'] = ""
  }
}
beforeCreate();


</script>

<template >
  <header class="static ">
    <NavBar />
  </header>
  
  
  <main 
    class="bg-gray-300  pt-12 pb-16 content-center justify-center">
    <router-view> </router-view>
    
  </main>
  <FooterBar />
  
  
</template>

<style>
#app {

}
</style>
