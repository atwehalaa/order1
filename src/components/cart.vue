<template>
  
 <div>
     
 </div>

  
    
       

       
</template>
<script>

export default {
    name:'About',
  components:{
    
  },
  props: ['cart', 'total'],
 data(){
  return{
    
  }
 },
    computed: {
      totalPrice(){
      let sum = 0;
      for(let i = 0; i < this.$store.state.cart.length; i++){
        sum += (parseFloat(this.$store.state.cart[i].price) * parseFloat(this.$store.state.cart[i].quantity));
      }

     return sum;
   }
  
  },
   
     
    
  
//},
methods:{
    
       removeFromCart(product) {
        this.$store.commit('removeFromCart', product);
},
  
}
}
</script>