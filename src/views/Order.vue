<template>
  <div >
    <Header />
    <Design />
  </div>
</template>

<script>
import Design from '@/components/Design.vue'
import Header from '@/components/Header.vue'
export default {
name:'Order',
 components: {
     Design,
     Header
  }
}
</script>

<style>

</style>