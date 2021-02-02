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
          <slot name="header">
            send information about you 
            <button
              type="button"
              class="btn-close"
              @click="close1"
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
              <form>
                  <div class="mb-3">
    <label for="username" class="form-label">username</label>
    <input type="text" class="form-control" id="username" v-model="username">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp">
   
  </div>
  <div class="mb-3">
      <label for="w3review" class="form-label" >meddelande</label>

     <textarea id="w3review" name="w3review" rows="4" cols="50" class="form-control" placeholder="add multiple meddelande" v-model="med">
  
      </textarea>
  </div>
  
  
  <button type="submit" class="btn btn-warning" v-on:click.prevent="sendorder" >Send</button>
</form>
          
          </slot>
        </section>
        
      </div>
    </div>
  </transition>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import axios from "axios";
export default {
    computed:{
        ...mapFields([
      'user.username',
      'user.email',
      'user.med'
    ]),

    },
methods: {
      close1() {
        this.$emit('close1');
          this.$router.push('/') 
      },
      sendorder(){
          console.log(this.$store.state.user)
            axios.post('http://localhost/ordercms/wp-json/myname/receiveorder', {
                user: this.$store.state.user,
                cart: this.$store.state.cart
  })
      .then(response => {
        this.$store.state.cartCount = 0
        this.$router.push('/') 
       console.log(response)
      })
      // `event` is the native DOM event
     
      },
    
}
}

</script>

<style>

</style>