<template>
    <section class="py-20 mx-10">
      <BlogCard/>

    </section>

</template>

<script>
import BlogCard from "../components/BlogCard.vue";

export default {
  name: "Home",
  components: {
    BlogCard,

  },
  mounted(){
        document.title = 'Home | Treinu'
    },
}
</script>
