<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import NavBar  from './components/NavBar.vue'
import  FooterBar  from './components/FooterBar.vue'
import { ref } from 'vue'


</script>

<template >
  <header class="static ">
    <NavBar />
  </header>
  
  
  <main 
    class="flex bg-gray-300  pt-12 pb-16"
    style="background-size: 100%; background-repeat: no-repeat;">
    <router-view> </router-view>
    
  </main>
  <FooterBar />
  
  
</template>

<style>
#app {

}
</style>
