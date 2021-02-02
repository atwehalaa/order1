<template>
  <div class="container">
      
       <div >
    <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
      
   
  </div>
  
</template>

<script>

import Modal from './Modal'
export default {
    name:'Des',
components:{
  Modal
},
data(){
    return{
         isModalVisible: false,
    }
},
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
}
</script>

<style>
 .overflow-hidden {
  overflow: hidden;
}
</style>