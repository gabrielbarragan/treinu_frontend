<template>
      <section class="relative flex w-full h-full ">
        <div
          class="relative py-4 w-full  bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat;"
          
        >
          <div class="container mx-auto px-4 ">
            <div class="flex content-center items-center justify-center h-full">
              <div class="w-full sm:w-9/12 md:w-7/12 lg:w-4/12 px-4">
                <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
              >
                <div class="rounded-t mb-0 px-6 py-6">
                  <div class="text-center mb-3">
                    <h6 class="text-gray-600 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div class="btn-wrapper text-center">
                    <button
                      class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      <img
                        alt="..."
                        class="w-5 mr-1"
                        src="../assets/img/strava.png"
                      />Strava</button
                    ><button
                      class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      <img
                        alt="..."
                        class="w-5 mr-1"
                        src="../assets/img/google.webp"
                      />Google
                    </button>
                  </div>
                  <hr class="mt-6 border-b-1 border-gray-400" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div class="text-gray-500 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form @submit.prevent="submitForm">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="username"
                        style="transition: all 0.15s ease 0s;"
                        id="username"
                        v-model="username"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s;"
                        id="password"
                        v-model="password"
                      />
                    </div>
                    <div>
                      <label class="inline-flex items-center cursor-pointer"
                        ><input
                          id="customCheckLogin"
                          type="checkbox"
                          class="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                          style="transition: all 0.15s ease 0s;"
                        /><span class="ml-2 text-sm font-semibold text-gray-700"
                          >Remember me</span
                        ></label
                      >
                    </div>
                    <div class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert" v-if="errors.length">
                      <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
                <div class="flex flex-wrap my-4 mx-8">
                  <div class="w-1/2">
                    <a href="#pablo" class="text-gray-900"
                    ><small>Forgot password?</small></a
                  >
                  </div>
                  <div class="w-1/2 text-right">
                    <a href="" class="text-gray-900"
                    ><router-link to="/signup"><small>Create new account</small></router-link></a
                  >
                  </div>
                </div>
              </div>
              
            </div>
              
            </div>
            
          </div>
        </div>
      </section>

</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import axios from 'axios';

export default {
  name: "Login",
    
  data(){
        return{
            username:'',
            password:'',
            errors:[],
        }
    },
  components: {
    NavBar,
    FooterBar
  },
  mounted(){
        document.title = 'Login | Treinu'
    },
  methods:{
    
    async submitForm(){

      var formData = new FormData();
      
      formData.append('username', this.username)
      formData.append('password', this.password)

      
      
      axios.defaults.headers.common["Authorization"] = ""
      axios.defaults.headers.post['Content-Type'] = 'application/form-data';
      localStorage.removeItem("token")
      await axios
                .post("api/v1/users/token", formData)
                .then(response => {
                                    
                  const token = response.data.access_token
                  this.$store.commit('setToken',token)

                  axios.defaults.headers.common["Authorization"] = "Token " + token

                  localStorage.setItem("token", token)
                  
                  const toPath = this.$route.query.to || '/myaccount'
                  
                  this.$router.push(toPath)
                    
                })
                .catch(error => {
                  
                    if(error.response){
                      this.errors = []
                        for(const property in error.response.data){                            
                            try{
                              this.errors.push(`${error.response.data[property][0]['loc'][1]} ${error.response.data[property][0]['msg']}`)
                              } catch(mid_error){
                                this.errors.push(error.response.data[property])
                              }
                            
                        }
                    }else{
                        this.errors.push('Algo va mal con el login, Por favor intenta de nuevo')

                        console.log(JSON.stringify(error))
                    }
                })
    }
  },

}
</script>