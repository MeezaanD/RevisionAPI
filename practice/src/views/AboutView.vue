<template>
  <NavBar/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar, Footer
  }
}
</script>

<style>
</style>
