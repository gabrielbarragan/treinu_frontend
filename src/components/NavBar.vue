<script setup>

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, SearchIcon, HomeIcon, HandIcon, LightBulbIcon } from '@heroicons/vue/outline'

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const navigation = [
  { name: 'Home', href: '#', current: true, icon: 'HomeIcon' },
  { name: 'Me', href: '#', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Calendar', href: '#', current: false },
  
]

const name= "NavBar" 
const active = ref(0);

const store = useStore()
const router = useRouter()

function logout(){
            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")

            store.commit('removeToken')
            router.push('/')
        }

</script>

<template>
  <Disclosure as="nav" class="fixed mt-0 w-full z-10 top-0 bg-gray-800 border-solid border-b-4 border-yellow-600">
    <div class="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-12">
      <div class=" flex items-center justify-between ">
       
        <div class=" h-full flex-1 flex items-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="navbar-item">
            <h1 class="pt-2 text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">{GaboDev}</h1>               
            </router-link>
          </div>
          
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 static inset-auto sm:ml-6 sm:pr-0">
          <div class="h-full sm:block sm:ml-6">
            <div class="h-full flex space-x-0">
              
              <a @click="active = 1" :href="navigation[0].href" :class="[active === 1 ? 'border-solid border-x-4  border-yellow-600 bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-sm text-sm font-medium']" :aria-current="active === 1 ? 'page' : undefined"> 
                <router-link to="/" class="navbar-item"> 
                <HomeIcon class="block h-full w-6" aria-hidden="true"/>
                </router-link>
              </a>
              

              <a @click="active = 2" :href="navigation[1].href" :class="[active === 2 ? 'border-solid border-x-4  border-yellow-600 bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-sm text-sm font-medium']" :aria-current="active === 2 ? 'page' : undefined"> 
                <HandIcon class="block h-full w-6" aria-hidden="true"/>
              </a>          

              <a @click="active = 3" :href="navigation[2].href" :class="[active === 3 ? 'border-solid border-x-4  border-yellow-600 bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-sm text-sm font-medium']" :aria-current="active === 3 ? 'page' : undefined"> 
                <LightBulbIcon class="block h-full w-6" aria-hidden="true"/>
              </a>

            </div>
          </div>
          <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile photo" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 border-solid border-x-4 border-b-4 border-yellow-600 ring-1 ring-black ring-opacity-5 focus:outline-none" v-if="store.state.isAuthenticated">
                <MenuItem v-slot="{ active }">
                  <router-link to="/myaccount"><a href="#" :class="[active ? 'bg-gray-900' : '', 'block px-4 py-2 text-sm text-white']">Your Profile</a></router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-900' : '', 'block px-4 py-2 text-sm text-white']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" @click="logout()" :class="[active ? 'bg-gray-900' : '', 'block px-4 py-2 text-sm text-white']" >Sign out</a>
                </MenuItem>
              </MenuItems>
                <MenuItems v-else class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 border-solid border-x-4 border-b-4 border-yellow-600 ring-1 ring-black ring-opacity-5 focus:outline-none" >
                  <MenuItem v-slot="{ active }">
                    <router-link to="/signup"><a href="#" :class="[active ? 'bg-gray-900' : '', 'block px-4 py-2 text-sm text-white']" >Sign up</a></router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                    <router-link to="/login"><a href="#" :class="[active ? 'bg-gray-900' : '', 'block px-4 py-2 text-sm text-white']" >Login</a></router-link>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>


  </Disclosure>

</template>

<style scoped>



</style>
