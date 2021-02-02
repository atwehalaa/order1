<template>
<div class="bg-warning fixed-top">
  <div class="container">
    <div class="row">
       <div class="col-lg-4 mt-1 col-md-4 col-sm-12">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmG6CyjpFKw2ol_sO5Fsevm7Cy9C-e5M4Vw&usqp=CAU" style="width:40px; height:40px" alt="">
            
      </div>
        <div  class=" col-lg-8 p-2 col-sm-12  col-md-8 d-flex   flex-row-reverse ">
           <router-link to="/about" class="p-2 link text-white" >  <b-icon icon="cart4"  variant="danger" ></b-icon><span class="">{{ $store.state.cartCount }}</span></router-link>
           <router-link to="/Order" class="p-2 link text-white
             ">Order</router-link>
           <router-link to="/" class="p-2 link text-white"> Home </router-link> 
  
             
        </div>
    </div>
  </div>

</div>
  
</template>

<script>
import cart from './cart'
export default {
name:'Header',
component:{
  cart
},
data(){
  return{
    isModalVisible1:false
  
  }
},
methods:{
  
}
}
</script>

<style>
.link{
   text-decoration: none;
}
</style>