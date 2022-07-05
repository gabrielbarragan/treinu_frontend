

<template>
      <section class="relative flex w-screen h-full ">
        <div class="relative py-4 w-full  bg-gray-900"
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
                      Sign up with
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
                <div class="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <div class="text-gray-500 text-center mb-3 font-bold">
                    <small>Or enter your information</small>
                  </div>
                  <form @submit.prevent="submitForm">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Enter email"
                        style="transition: all 0.15s ease 0s;"
                        v-model="email"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Enter fullname</label
                      ><input
                        type="fullname"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Enter fullame"
                        style="transition: all 0.15s ease 0s;"
                        v-model="fullname"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Enter username</label
                      ><input
                        type="name"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Enter username"
                        style="transition: all 0.15s ease 0s;"
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
                        v-model="password"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Confirm Password</label
                      ><input
                        type="password"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s;"
                        v-model="confirmPassword"
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
                    <div class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert" v-if="success.length">
                      <p v-for="succ in success" v-bind:key="succ">{{ succ }}</p>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div class="flex flex-wrap my-4 mx-8 text-center">
                  <div class="w-full">
                    <a href="#" class="text-gray-900"
                    ><router-link to="/Login"><small>Already have an account?</small></router-link>
                    </a>
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
import axios from 'axios';

export default {
  name: "Signup",
   data(){
        return {
                fullname: '',
                username: '',
                email: '',
                password: '',
                confirmPassword:'',
                errors:[],  
                success:[],            
            }
    },
  components: {
  
  },
  mounted(){
        document.title = 'Signup | Treinu'
    },

  methods:{
    async submitForm(){
      this.errors = []
      this.success = []

        if(this.username==''){
          this.errors.push('Debes escribir un nombre de usuario')
        }
        if(this.password ==''|| this.password.length < 6){
          if (this.password==''){
            this.errors.push('El password está vácio')
          }
          else{
            this.errors.push('El password es muy corto')
          }
        }
        if(this.password != this.confirmPassword){
          this.errors.push('El password y la confirmación no coinciden')
        }
      if (!this.errors.length){
        var formData = new FormData();

        formData = {
          'username': this.username,
          'email': this.email,
          'password':this.password,
          'confirmation_password': this.confirmPassword,
          'active': true
        }

        console.log(this.username)

        console.log(formData)
        axios.defaults.headers.post['Content-Type'] = 'application/form-data';
        await axios
              .post("api/v1/users/", formData)
              .then(response => {
                console.log(response)
                  this.success.push("Usuario creado exitosamente") //enviar un correo
                  const toPath = this.$route.query.to || '/login'
                  
                  this.$router.push(toPath)
              })
              .catch(error=> {
                  if (error.response){
                      for(const property in error.respose){
                          this.errors.push(`${property}: ${error.response.data.detail}`)
                      }

                      this.errors.push(JSON.stringify(error.response.data.detail))

                  }else if(error.message){
                      this.errors.push('Algo va mal, intenta nuevamente.')
                      console.log(JSON.stringify(error))
                  }
              })
          
      }
    }
    }

}
</script>

<style scoped>

</style>