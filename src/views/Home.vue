<template>
  <div class="home">
      <Header />
      <Section1 />
      <Grid />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Section1 from '@/components/Section1.vue'
import Grid from '@/components/Grid.vue'
import Sec3 from '@/components/Sec3.vue'
import Sec4 from '@/components/Sec4.vue'
import Sec5 from '@/components/Sec5.vue'



import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
   components: {
   
     Header,
     Section1,
      Grid,
      Sec3,
      Sec4,
        Sec5,
 
    
     Footer
  }
 
}
</script>
