<template>
  <div>
      <Header />
      <div class="d-flex justify-content-center align-items-center mb-4 " style="height: 100vh;" >
     
        <!--<a class="" href="">
            Cart ({{ $store.state.cartCount }})
        </a>-->

        <div v-if="$store.state.cart.length > 0"  class="bg-light" style="width:40%;height: 450px; overflow: scroll;">
          

              <div class="row navbar-item mb-4 justify-content-center" v-for="item in $store.state.cart"
                :key="item.id"
                    
                             >   
                      <img :src="item.img" class="col-lg-6 col-md-6 bildcart col-sm-12"/>
                      <div class="col-lg-4 col-md-4 col-sm-12 mb-4" style="display: flex;
                             justify-content: center;
                              align-items: center;"> 
                            <div class="ml-2">{{ item.quantity }} * ${{ item.totalPrice }}</div>
                             <b-icon icon="trash" aria-hidden="true"  @click.prevent="removeFromCart(item)" style="margin-left: 20px;" ></b-icon>
                        
                      </div>
                    
              </div>
            <hr class="navbar-divider">
             <div class="d-flex justify-content-between">
                    <div class="">    Total: ${{ totalPrice }}
                    </div>
                       <button class="btn rounded btn-warning" @click="showModal1"  >buy</button>
                    <modaluser  v-show="isModalVisible1" @close="closeModal1" />
             </div>
    

        </div>

        <div v-else class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href="">
                Cart is empty
            </a>
        </div>
  
    </div>
   
  </div>
 
</template>
<script>

import Modaluser from '../components/modaluser.vue';
import Header from '@/components/Header.vue'

export default {
 
   components:{
      Modaluser,
      Header,
     
  },
  props: ['cart', 'total'],
 data(){
  return{
        isModalVisible1: false
  }
 },
    computed: {
      totalPrice(){
      let sum = 0
      for(let i = 0; i < this.$store.state.cart.length; i++){
        sum += (parseFloat(this.$store.state.cart[i].price) * parseFloat(this.$store.state.cart[i].quantity));
      }
       
     return sum;
     
   }
  
  },
  
methods:{
  
       removeFromCart(item) {
  const indexIten = this.$store.state.cart.indexOf(item);
    console.log(indexIten);
    if (indexIten > -1) {
      //let product =  this.$store.state.cart[indexIten];
       this.$store.state.cartCount -=  this.$store.state.product.quantity;
    this.$store.state.cart.splice(indexIten, 1);
}
        //this.$store.commit('removeFromCart', item);
},
 showModal1() {
        this.isModalVisible1 = true;
      },
      closeModal1() {
        this.isModalVisible1 = false;
      },
      
 
  
}
}
</script>
<style scoped>
.bildcart{
  width:200px;
  height: 200px;
}
</style>