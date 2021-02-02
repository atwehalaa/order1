<template>
  <div id="app">
      <router-link to="/about" class="" >  <b-icon icon="cart4"  variant="danger" ></b-icon><span class="">{{ $store.state.cartCount }}</span></router-link>
           <router-link to="/Order" class="
             ">Order</router-link>
           <router-link to="/" class=""> Home </router-link> 
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

</style>
