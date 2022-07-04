<template>
      <section class="w-full bg-white px-4 pb-2 pt-4">
        <div class="grid grid-rows-3 grid-cols-5 grid-flow-col gap-0">
          <div class="row-span-3 col-span-2 px-4 py-4">
            <img src="src/assets/img/profile.jpg" class="w-24 h-24 border-4 rounded-full border-yellow-800 " alt="profile">
          </div>
          <div class="col-span-3"><h4 class="font-small text-center pb-1 leading-tight text-3xl">{{(user.username)}}</h4></div>
          <div class="row-span-2 col-span-3">
            <button type="button" class="w-full px-6 py-2 border-x-2 border-t-2 border-b-4 border-yellow-800 text-yellow-600 font-medium text-sm  leading-tight uppercase rounded hover:bg-yellow-600 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Edita tu perfil
            </button>
          </div>
        </div>
        
      </section>
      <section class="w-full bg-white px-4 pb-2">
        <div class="grid grid-rows-2 grid-cols-5 grid-flow-col gap-0">
          <div class="row-span-1 px-4 col-span-5">
            <h4 class="font-medium leading-tight text-2xl">{{userFake.name}}</h4>
          </div>
          <div class="row-span-1 px-4  col-span-5">
             <h5 class="font-small leading-tight text-sm">{{userFake.user_description}}</h5>
          </div>
        </div>
      </section>
      <section class="w-full bg-white px-2 py-2  text-center outline outline-1 outline-yellow-600 ">
        <div class="grid grid-rows-1 grid-cols-3 grid-flow-col gap-0">
          <div class="row-span-1 px-4 col-span-1">
             <h5 class="font-medium leading-tight text-sm">{{userFake.followers}} </h5>
             <small class="text-xs">Followers</small>
          </div>
          <div class="row-span-1 px-4  col-span-1">
             <h5 class="font-medium leading-tight text-sm">{{userFake.follows}} </h5>
             <small class="text-xs">Following</small>
          </div>
          <div class="row-span-1 px-4  col-span-1">
             <h5 class="font-medium leading-tight text-sm">{{userFake.posts}} </h5>
             <small class="text-xs">Posts</small> 
          </div>
        </div>
      </section>
      <section class="w-full bg-white py-2">
        <div class="grid grid-cols-3 grid-flow-col gap-1 items-center">
          <div class="row-span-1 col-span-1 content-center w-">
            <img src="src/assets/img/profile.jpg" class="" alt="profile">
          </div>
          <div class="row-span-1 col-span-1 content-center">
             <img src="src/assets/img/profile.jpg" class="" alt="profile">
          </div>
          <div class="row-span-1 col-span-1 content-center">
             <img src="src/assets/img/profile.jpg" class="" alt="profile">
          </div>
        </div>
      </section>
      
</template>
<script>

import axios from 'axios'
export default {
  name: "AccountPage",
  data(){
    return {
        user: {},
        userFake:{
          name:"Gabriel Rondón",
          followers:230,
          follows: 100,
          posts:10,
          user_description: "this is a user description for an app treinu"
        }
        
    }
  },

  mounted(){
        document.title = 'Me | Profile | Treinu'
        this.getUser();
    },
  methods:{
        
        async getUser(){
          const token = this.$store.state.token
          
          if (token){
            axios.defaults.headers.common['Authorization'] = "Bearer " + token

          }else{
            axios.defaults.headers.common['Authorization'] = ""
          }          
          await axios
            .get(`/api/v1/users/me/`)
            .then(response => {
              this.user = response.data
              document.title= this.user.username + ' | Treinu '
            })
        }
    }
}
</script>

