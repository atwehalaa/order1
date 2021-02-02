import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product:{      id:'1',
    img:'https://i.pinimg.com/originals/06/37/2c/06372cef20d89b57c58bdfc140710c70.png',
    title:'plan1',
    price:'3200',
    cat:'plan',
    des:'ndnkcndkendkjnejdknjedn m dme jknjnjnjknjnjnj  m m  j jjjj'
  },
    user:
      {
        username:'',
        email:'',
        med:'',
      }
    ,
   total:'',
    cart: [],
    cartCount: 0,
    MainState:[],
  },
  mutations: {
    updateField,
    getuser(state) {
      state.user.push({
        username: '',
        email: '',
        med: '',
      });
    },
    SET_MainState(state, MainState ) {
      state.MainState = MainState
      console.log(MainState)
      },

    addToCart(state, item) {
      let found = state.cart.find(product => product.id == item.id);
      if (found) {
          found.quantity ++;
          found.totalPrice = found.quantity * found.price;
          
         
      } 

      else {
          state.cart.push(item);
  
          Vue.set(item, 'quantity', 1);
          Vue.set(item, 'totalPrice', item.price);
          
      }
       
      state.cartCount++;
    }
  },
  
  removeFromCart(state, item) {
    const indexIten = state.cart.indexOf(item);
    console.log(indexIten);
    if (indexIten > -1) {
      let product = state.cart[indexIten];
      state.cartCount -= product.quantity;
    state.cart.splice(indexIten, 1);
}

       
  },
  getters:{
    getField,
   
  },
  actions: {
    getMainState({ commit }) {
      axios.get('http://localhost/ordercms/wp-json/myname/customerssystem')
      .then(response => {
       
      commit('SET_MainState', response.data)
      })
      }
   
  },
  modules: {
  }
})
