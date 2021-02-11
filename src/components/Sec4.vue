<template>
  <section class="locations-1 popular" id="locations">
    <div class="locations py-5">
        <div class="container py-lg-5 py-md-4">
            <div class="heading text-center mx-auto">
                <h6 class="title-small">Explore cities</h6>
                <h3 class="title-big">Popular Locations</h3>
            </div>
            <div class="row pt-5">
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p1.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">Newyork</h3>
                                <span class="post">4 listings</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p2.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">California</h3>
                                <span class="post">4 listings</span>

                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6 mt-md-0 pt-md-0 mt-sm-4 mt-3 pt-md-2">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p3.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">Las vegas</h3>
                                <span class="post">4 listings</span>

                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6 mt-lg-0 pt-lg-0 mt-sm-4 mt-3 pt-md-2">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p4.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">Malaysia</h3>
                                <span class="post">4 listings</span>

                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p5.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">Paris</h3>
                                <span class="post">4 listings</span>

                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p6.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">New Jersy</h3>
                                <span class="post">4 listings</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p7.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">France</h3>
                                <span class="post">4 listings</span>

                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
                    <a href="#url">
                        <div class="box16">
                            <img class="img-fluid" src="../assets/images/p8.jpg" alt="">
                            <div class="box-content">
                                <h3 class="title mb-1">Newyork</h3>
                                <span class="post">4 listings</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
.locations-1 .box16 {
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius); }

.box16:hover img {
  transform: scale(1.1);
  transition: transform 0.3s linear; }

.locations-1 .box16 .box-content,
.locations-1 .box16:after {
  width: 100%;
  position: absolute;
  left: 0; }

.locations-1 .box16:after {
  content: "";
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.08) 69%, rgba(0, 0, 0, 0.76) 100%);
  top: 0;
  border-radius: 4px;
  transition: all .5s ease 0s; }

.locations-1 .box16 .post,
.locations-1 .box16 .title {
  transform: translateY(30px);
  transition: all 0.4s cubic-bezier(0.13, 0.62, 0.81, 0.91) 0s; }

.locations-1 .box16:hover:after {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0, rgba(0, 0, 0, 0.09) 11%, rgba(0, 0, 0, 0.12) 13%, rgba(0, 0, 0, 0.19) 20%, rgba(0, 0, 0, 0.29) 28%, rgba(0, 0, 0, 0.29) 29%, rgba(0, 0, 0, 0.42) 38%, rgba(0, 0, 0, 0.46) 43%, rgba(0, 0, 0, 0.53) 47%, rgba(0, 0, 0, 0.75) 69%, rgba(0, 0, 0, 0.87) 84%, rgba(0, 0, 0, 0.98) 99%, rgba(0, 0, 0, 0.94) 100%); }

.locations-1 .box16 img{
  width: 100%;
  height: auto;
  transition: transform 0.3s linear; }

.locations-1 .box16 .box-content {
  padding: 25px;
  margin-bottom: 30px;
  bottom: 0;
  z-index: 1;
  text-align: left; }

.locations-1 .box16 .title {
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 10px;
  color: #fff; }

.locations-1 .box16 .post {
  display: block;
  padding: 0px 0;
  font-size: 15px;
  color: #eee; }

.locations-1 .box16 .social li a,
.locations-1 .box17 .icon li a {
  border-radius: 50%;
  font-size: 20px;
  color: #fff; }

.locations-1 .box16:hover .post,
.locations-1 .box16:hover .title {
  transform: translateY(0); }

.locations-1 .box16 .social {
  list-style: none;
  padding: 0 0 5px;
  margin: 40px 0 25px;
  opacity: 0;
  position: relative;
  transform: perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);
  transition: all 0.6s cubic-bezier(0, 0, 0.58, 1) 0s; }

.locations-1 .box16:hover .social {
  opacity: 1;
  transform: perspective(500px) rotateX(0) rotateY(0) rotateZ(0); }

.locations-1 .box16 .social:before {
  content: "";
  width: 50px;
  height: 2px;
  background: #fff;
  margin: 0 auto;
  position: absolute;
  top: -23px;
  left: 0;
  right: 0; }

.locations-1 .box16 .social li {
  display: inline-block; }

.locations-1 .box16 .social li a {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #6d3795;
  margin-right: 10px;
  transition: all .3s ease 0s; }

.locations-1 .box17 .icon li,
.locations-1 .box17 .icon li a {
  display: inline-block; }

.locations-1 .box16 .social li a:hover {
  background: #bea041; }

.locations-1 .box16 .social li:last-child a {
  margin-right: 0; }

.locations-1 .box16 img {
  border-radius: var(--border-radius); }

@media only screen and (max-width: 480px) {
  .popular .row {
    padding: 0 10px; }
  .popular .col-6 {
    padding: 0 8px; }
  .locations-1 .box16 .title {
    font-size: 18px; }
  .locations-1 .box16 .box-content {
    padding: 15px; } }

.rentext-listing-category {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2; }

.rentext-listing-category span {
  background: rgba(0, 0, 0, 0.35);
  padding: 4px 8px;
  margin-right: 5px;
  font-size: 14px;
  border-radius: 3px;
  color: #fff; }


</style>