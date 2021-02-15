<template>
  <section class="footers-20 bg-dark text-white">
  <div class="footers20">
    <div class="container">
      <div class="footers20-content">
        <div class="d-grid grid-col-4 grids-content">
          <div class="column">
            <a href="#url" class="link"><span class="fa fa-comments"></span></a>
            <a href="#url" class="title-small">Free consultation</a>
            <h4>Schedule a free consultation with our specialist.</h4>
            <a href="#buytheme" class="btn btn-style btn-warning"> Schedule now
              <span class="fa fa-long-arrow-right ml-2"></span> </a>
          </div>
          <div class="column">
            <a href="#url" class="link"></a>
            <a href="#url" class="title-small">help desk</a>
            <h4>Do you have questions or want more infomation? Call Now</h4>
            <a class="text-warning" href="tel:+1-111-222-333">
              <p class="contact-phone mt-2"><span class="lnr lnr-phone-handset"></span> +1-2345-678-11
              </p>
            </a>
          </div>
          <div class="column mt-lg-0 mt-md-5">
            <h4 class="mb-1">Signup for newsletter</h4>
            <p>and get latest news and updates</p>
            <form action="#" class="subscribe-form mt-4" method="post">
              <div class="form-group">
                <input type="email" name="subscribe" placeholder="Enter your email" required="">
                <button class="btn btn-style btn-warning">Subscribe</button>
              </div>
            </form>
            <ul class="footers-17_social">
              <h4 class="d-inline mr-4">Follow us</h4>
              <li><a href="#url" class="twitter"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#url" class="facebook"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#url" class="linkedin"><span class="fa fa-linkedin"></span></a></li>
              <li><a href="#url" class="instagram"><span class="fa fa-instagram"></span></a></li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  <!-- move top -->
  <button onclick="topFunction()" id="movetop" title="Go to top">
    &#10548;
  </button>
  
    }

  <!-- /move top -->
   </section>
</template>

<script>
export default {

}
</script>

<style>
footer, section {
  display: block; }
  .footers-20 .d-grid {
  display: grid; }

.footers-20 .grid-col-2 {
  grid-template-columns: 1fr 1fr; }

.footers-20 .grid-col-3 {
  grid-template-columns: 1fr auto; }

.footers-20 .grid-col-4 {
  grid-template-columns: 1fr 1fr 1.5fr;
  grid-gap: 30px; }

.footers-20 .grid-auto-columns {
  grid-auto-flow: column; }

.footers-20 .text-left {
  text-align: left; }

.footers-20 .text-center {
  text-align: center; }

.footers-20 .text-right {
  text-align: right; }

.footers-20 {
  padding: 60px 0;
  position: relative;
  background: var(--bg-color); }

.footers-20 .column {
  padding: 0 20px;
  border-right: 1px solid var(--border-color-light); }

.footers-20 .column:first-child {
  padding-left: 0; }

.footers-20 .column:last-child {
  border-right: 1px solid transparent;
  padding-right: 0; }

.footers-20 .grids-content h4 {
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 20px; }

.footers-20 .grids-content a p:hover {
  color: var(--primary-color); }

.footers-20 .grids-content p.contact-phone,
.footers-20 .grids-content p.contact-map {
  font-size: 28px;
  font-weight: 600;
  color: var(--primary-color);
  opacity: 1; }

.footers-20 ul.links li a {
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #8289ab; }

.footers-20 ul.links li,
.footers-20 ul.social li {
  display: inline-block;
  margin-right: 15px; }

.footers-20 .bottom-border {
  border-top: 1px solid var(--border-color-light);
  margin-top: 60px;
  padding-top: 40px; }

.footers-20 .columns ul li a {
  font-size: 16px;
  line-height: 25px; }

ul.footers-17_social li {
  display: inline-block;
  margin: 0; }

ul.footers-17_social {
  margin-top: 40px; }

ul.footers-17_social li a {
  margin: 0; }

ul.footers-17_social li a span.fa {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 15px;
  border-radius: 50%; }

ul.footers-17_social li a.twitter span.fa {
  color: #fff;
  background: #1da1f2; }

ul.footers-17_social li a.facebook span.fa {
  color: #fff;
  background: #3b5998; }

ul.footers-17_social li a.linkedin span.fa {
  color: #fff;
  background: #0077b5; }

ul.footers-17_social li a.instagram span.fa {
  color: #fff;
  background: #c13584; }

ul.footers-17_social li {
  margin-right: 5px; }

.footers-20 .column a.link span.fa {
  font-size: 50px;
  display: block;
  margin-bottom: 10px;
  color: var(--secondary-color); }

p.copy-footer-29 a {
  color: var(--heading-color); }

.footers-20 ul.social li a:hover,
.footers-20 .columns p a:hover {
  color: var(--primary-color); }

form.subscribe-form .form-group {
  display: flex; }

.subscribe-form input[type="email"] {
  position: relative;
  line-height: 28px;
  padding: 10px 30px;
  border: 1px solid var(--border-color-light);
  background: none;
  display: block;
  font-size: 17px;
  width: 100%;
  height: 55px;
  color: var(--font-color);
  border-radius: var(--border-radius-full);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none; }

form.subscribe-form .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0; }

a.title-small {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  display: inline-block;
  letter-spacing: 1px;
  color: var(--primary-color); }

@media (max-width: 1280px) {
  .footers-20 ul.links li,
  .footers-20 ul.social li {
    margin-right: 10px; } }

@media (max-width: 1080px) {
  .footers-20 .column {
    padding: 0 10px; }
  .footers-20 .grid-col-4 {
    grid-gap: 10px; } }

@media (max-width: 991px) {
  .footers-20 .grid-col-4 {
    grid-template-columns: 1fr 1fr; } }

@media (max-width: 800px) {
  .footers-20 .column:first-child {
    padding-left: 20px; }
  .footers-20 .grids-content {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0px; }
  .footers-20 .links-grid {
    text-align: center;
    margin: 20px 0; }
  .footers-20 .column {
    border: none; }
  .footers-20 .column {
    padding: 20px; }
  .footers-20 .column:last-child {
    padding-bottom: 0; }
  .footers-20 .bottom-border {
    margin-top: 30px; }
  .footers-20 .grid-col-3 {
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: 20px; } }

@media (max-width: 736px) {
  .footers-20 .grid-col-4 {
    grid-template-columns: 1fr; }
  .footers-20 .column a.link span.fa {
    font-size: 40px; } }

@media (max-width: 640px) {
  .footers-20 .column {
    padding: 20px 0; }
  .footers-20 .column:first-child {
    padding-left: 0px; }
  .footers-20 .grid-col-3 {
    grid-template-columns: 1fr;
    text-align: center; }
  .footers-20 .text-right {
    text-align: center !important;
    margin-top: 10px; } }

@media (max-width: 568px) {
  .footers-20 {
    padding: 20px 0 30px; }
  .footers-20 .column:nth-child(1),
  .footers-20 .column:nth-child(2) {
    border-bottom: 1px solid transparent; }
  .footers-20 .grids-content p.contact-phone {
    font-size: 16px; } }

@media (max-width: 480px) {
  .footers-20 .columns p,
  .footers-20 .columns ul li a,
  .footers-20 .columns li select {
    font-size: 16px; }
  .footers-20 .grids-content {
    grid-template-columns: 1fr; }
  .footers-20 .column a.link span.fa {
    font-size: 30px; } }

@media (max-width: 415px) {
  .footers-20 .bottom-border {
    margin-top: 30px; }
  .subscribe-form input[type="email"] {
    padding: 10px 25px;
    font-size: 16px; }
  form.subscribe-form .btn {
    font-size: 15px; } }

@media (max-width: 384px) {
  .footers-20 .bottom-border {
    margin-top: 25px;
    padding-top: 20px; }
  .footers-20 .links-grid {
    margin: 15px 0; }
  .footers-20 .grids-content h4 {
    font-size: 20px; } }

#movetop {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  width: 46px;
  height: 46px;
  background: var(--primary-color);
  padding: 0;
  line-height: 36px;
  border-radius: 50px;
  transition: 0.3s ease-out; }

#movetop:hover {
  transform: translate3d(0, -5px, 0);
  -webkit-transform: translate3d(0, -5px, 0);
  transition: 0.3s ease-out; }


.locations-1 .box16 {
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius); }


</style>