<template>
  <NavBar/>
  <div class="home">
    <HelloWorld/>
  </div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, NavBar, Footer
  }
}
</script>
