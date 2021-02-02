<template>
  <transition name="modal-fade ">
    <div class="modal-backdrop ">
      <div class="modal "
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header text-warning"
          id="modalTitle"
        >
          <slot name="header" class="container">
            This is the product

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body "
          id="modalDescription"
        >
          <slot name="body" >
            <div class="contanier">
               <div class="row" >
                    <div class="col-lg-6 col-md-6 col-sm-12">
                            <img :src="product.img" style="width:300px ;height=300px" />

                     </div>
                     <div class="col-lg-6 col-md-6 col-sm-12 mt-4">
                               <h3 class="  text-warning ml-2 "> {{product.title}}</h3>
                               <h6 class="text-dark mt-4"> {{product.des}} </h6>
                               <h6 class="mt-2 mt-4">  {{product.price}}  kr</h6> 
                               <button class="btn btn-warning mt-4 p-2" @click="addToCart(product)">Add</button>
                    
                      </div>
            </div>
            </div>
        
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-warning"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props :[ 'product'],
  data(){
    return {
     
    }
  },
  computed:{
          totalPrice(){
      let sum = 0;
      for(let i = 0; i < this.$store.state.cart.length; i++){
        sum += (parseFloat(this.$store.state.cart[i].price) * parseFloat(this.$store.state.cart[i].quantity));
      }

     return sum;
   }
  },
 methods: {
      close() {
        this.$emit('close');
      },
    
     addToCart(product) {
                    this.$store.commit('addToCart', product);
            },
 }
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    
  }
.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    margin: auto;
    /* float: none; */
    position: absolute;
    left: 0;
    right: 0;
}

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
   
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>