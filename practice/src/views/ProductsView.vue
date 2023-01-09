<template>
    <NavBar/>
    <Products/>
    <Footer/>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Products from '@/components/Products.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar, Footer, Products
  }
}
</script>
<style>
    
</style>