<template>

  <div class="home">
      <Header />
      <Carousel />
      <Omoss />
      <Ny />
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Carousel from '@/components/Carousel.vue'
import Omoss from '@/components/Omoss.vue'
import Ny from '@/components/Ny.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
   components: {
     Carousel,
     Header,
     Omoss,
     Ny,
     Footer
  }
 
}
</script>
