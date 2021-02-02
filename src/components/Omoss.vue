<template>
  <div class="container">
      <div class=" row mt-4 mb-4 ">
          <div class="col-lg-6 col-md-6 col-sm-12">
              <h1>om oss</h1>
              <h5>sia optimea äe en lettisk fabrik for produktion <br /> av trähus av alla komplexiter:</h5>
              <ul>
                   <li> välja Design </li>
                   <li>välia kök </li>
                   <li>välia golv </li>
              </ul>
               <router-link to="/Order" class="bg-warning rounded p-2 v1" >välja nu</router-link> 
          </div>
          <div class="col-lg-4 offset-md-2 col-md-4 col-sm-12" data-aos="flip-left" >
            <img src="https://ahouse.se/wp-content/uploads/2020/11/ahousefilmhuset-.jpg" alt="">
          </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
img{
    width: 100%;
    height: 310px;
}
.v1{
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 80px;
    margin-bottom: 46px;
}

</style>