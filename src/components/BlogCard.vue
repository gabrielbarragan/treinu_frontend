<script setup>
 const name= "BlogCard"
</script>

<template>
  <div class="flex justify-center mb-2">
    <div class="flex flex-col border-x-2 border-t-2 border-b-4  border-gray-900 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
      <div class="p-6 flex flex-col lg:justify-between " >
        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
        <p class="text-gray-700 text-base mb-4">
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        <div class="flex  flex-row justify-center">
          <div class="space-x-6">
            <router-link to="/login" ><button type="button" class="inline-block px-6 py-2 border-x-2 border-t-2 border-b-4 border-yellow-800 text-yellow-600 font-medium text-md leading-tight uppercase rounded hover:bg-yellow-600 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"><small >Login</small></button></router-link>
                
            <router-link to="/signup"><button type="button"  class="inline-block px-6 py-2 border-x-2 border-t-2 border-b-4 border-blue-800 text-blue-500 font-medium text-md leading-tight uppercase rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"><small >Signup</small></button></router-link>
          </div>
        </div>
      </div>
      
    </div>
  </div>

</template>

<style scoped>

</style>
