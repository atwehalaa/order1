<template>
    <div class="container" style="margin-top:100px;" >
        <div class="row">
      
           <div class=" col-lg-4 col-md-4 col-sm-12  bg-light" style="height: 500px; overflow: scroll;" >
            
               <!--<div class="header fixed-top p-2 " >
                 <h5>plan your house</h5>
               </div>-->
               <h6 class="mb-4">plan</h6>
                <div class="d-flex widthmenu ProductsWrapper  " >
                      <div  v-for="product in newstate" :key="product.id" @click="ShowOnWrapper1(product.id,product.img)">
                        <div class="wid " >
                            <img  :src="product.img" />
                               <div class="middle">
                                   <a class="text mt-4"  @click="showModal(product)"><b-icon icon="info-circle-fill"></b-icon></a>
                                  
                               </div>
                                  <p class="text-center" > {{ product.title }}</p>
                              
                        </div>
                       </div> 
                </div>
               <div>kitchen</div>
                <div class="d-flex widthmenu  ProductsWrapper " >
               <div v-for="product in showkitchen" :key="product.id" @click="ShowOnWrapper1(product.id,product.img)">
                       <div class="wid">
                            <img  :src="product.img">
                              <div class="middle" >
                                  <a class="text mt-4"  @click="showModal(product)"><b-icon icon="info-circle-fill"></b-icon></a>
                                
                              </div>
                            <p class="text-center" > {{ product.title }}</p>
                                                        
                         </div>
                </div> 
        
                </div>
                  <div>golv</div>
            <div class="d-flex widthmenu ProductsWrapper " >
               <div v-for="product in showgolv" :key="product.id" @click="ShowOnWrapper1(product.id,product.img)">
                       <div class="wid " >
                            <img  :src="product.img">
                                <div class="middle" >
                                        <div class="text" @click="showModal(product)"><b-icon icon="info-circle-fill"></b-icon></div>
                                      
                                </div>
                            <p class="text-center" > {{ product.title }}</p>
                            
                         </div>
                </div> 
        
          
          
        </div>
           </div>
                    <modal v-show="isModalVisible"   :product="this.$store.state.product"  @close="closeModal" />
            <div id="wrapperInner1"  class="col-lg-8 col-md-8 col-sm-12 imginner  " >
                    <img style="width:100%;height:100%;object-fit:cover" :src="backgroundImage" alt="">
            </div>
        <div>
  
    </div>
        </div>

    </div>
   
  

</template>

<script>

import Modal from './Modal'
export default {
  name: 'Design',
  components:{
     Modal
  },
  data(){
    return{
      backgroundImage:'https://www.livinspaces.net/wp-content/uploads/2019/09/House-Desai-25_Metropole-Architects.jpg',
       isModalVisible: false,
       utskick1:[]
    }
  },
   mounted() {
    this.$store.dispatch("getMainState");
  },
  computed:{
      MainState(){
        return this.$store.state.MainState;
      },
        newstate(){
            return this.$store.state.MainState.filter(x =>{return x.cat === 'plan'})
           
        },
        showkitchen(){
                      return this.$store.state.MainState.filter(x =>{return x.cat === 'kitchen'})

        }
        ,
        showgolv(){
                      return this.$store.state.MainState.filter(x =>{return x.cat === 'golv'})
        },
          totalPrice(){
      let sum = 0;
      for(let i = 0; i < this.$store.state.cart.length; i++){
        sum += (parseFloat(this.$store.state.cart[i].price) * parseFloat(this.$store.state.cart[i].quantity));
      }

     return sum;
   }

    },
  methods:{
    ShowOnWrapper1(theId,img){
      
     document.getElementById('wrapperInner1').style.backgroundImage = "url("+img+")";
     var Founded = this.$store.state.MainState.find(x=>
      x.id == theId,
       
      )
      this.backgroundImage = img
    console.log(Founded)
      this.utskick1.unshift(Founded)
    },
     addToCart(product) {
                    this.$store.commit('addToCart', product);
            },
            showModal(product) {
        this.isModalVisible = true;
        this.$store.state.product = product;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


img{
  height: 125px;
  width: 125px;
}
.widthmenu{
  flex-wrap: wrap;
   display: flex;
  flex-direction: row;
 
}
.wid{
  width:150px;
  position: relative;
}

.imginner{
    width: 60%;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 70% 70%;
}

img {
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  opacity: 0;
  top:0;
  position: absolute;

  
}

.wid:hover img {
  opacity: 0.5;
}

.wid:hover .middle {
  opacity: 1;
}

.text {
  background-color: #616461;
  color: white;
 
  padding: 2px 2px;
}
.aa{
  width:24.5%
}
.header {
  top:72px;
  background-color: #616461;
  width:34.5%;

}

</style>
