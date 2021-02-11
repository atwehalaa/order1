<template>
  <section class="w3l-cover-3">
		<div class="cover top-bottom">
			<div class="container">
				<div class="middle-section text-center">
					<div class="section-width">
						<p>It's great to be home!</p>
						<h2>Find a property today</h2>
						<div class="most-searches">
							<h4>Most Searches</h4>
							<ul>
								<li><a href="#link">Villa</a></li>
								<li><a href="#link">Apartment</a></li>
								<li><a href="#link">Private house</a></li>
							</ul>
						</div>
						<form action="#" class="w3l-cover-3-gd" method="GET">
							<input type="search" name="text" placeholder="Enter keywords" required>
							<span class="input-group-btn">
								<select class="btn btn-default" name="ext" required>
									<option selected="">Office</option>
									<option>Villa</option>
									<option>Apartment</option>
									<option>Private house</option>
									<option>Building</option>
									<option>Shop</option>
									<option>Social housing</option>
									<option>Town house</option>
								</select>
							</span>
							<span class="input-group-btn">
								<select class="btn btn-default" name="ext" required>
									<option selected="">Select Country</option>
									<option>Australia</option>
									<option>London</option>
									<option>India</option>
									<option>Bangladesh</option>
									<option>Saudi Arabia</option>
									<option>America</option>
									<option>Srilanka</option>
								</select>
							</span>
							<button type="submit" class="btn-primary">Search</button>
						</form>
					</div>
					<section id="bottom" class="demo">
						<a href="#bottom"><span></span>Scroll</a>
					</section>
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
.w3l-cover-3 .top-bottom {
  background: url(../assets/images/banner.jpg) no-repeat center center;
  background-size: cover;
  min-height: 750px;
  position: relative;
  z-index: 1; }
  .w3l-cover-3 .top-bottom:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1; }

.w3l-cover-3 .middle-section {
  padding-top: 15em; }

.w3l-cover-3 .middle-section h2 {
  font-size: 55px;
  color: #fff;
  vertical-align: top;
  line-height: 60px;
  font-weight: 600; }

.w3l-cover-3 p {
  font-size: 24px;
  color: #eee;
  line-height: 30px;
  margin-bottom: 15px;
  letter-spacing: 0; }

.w3l-cover-3 .w3l-cover-3-gd {
  display: flex;
  flex-wrap: wrap;
  max-width: 850px;
  margin: auto; }

.w3l-cover-3 .most-searches {
  text-align: left;
  max-width: 850px;
  margin: auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  margin-bottom: 15px; }

.w3l-cover-3 .most-searches h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600; }

.w3l-cover-3 .most-searches ul li {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle; }

.w3l-cover-3 .most-searches ul li a {
  font-size: 17px;
  color: #eee;
  text-decoration: underline; }

.w3l-cover-3 .most-searches ul li a:hover {
  color: var(--primary-color); }

.w3l-cover-3 .w3l-cover-3-gd input[type="search"] {
  background: #fff;
  padding: 0px 20px;
  font-size: 16px;
  outline: none;
  border: none;
  height: 60px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-family: inherit; }

.w3l-cover-3 .w3l-cover-3-gd span.input-group-btn {
  width: 23.5%;
  background: #fff; }

.w3l-cover-3 .w3l-cover-3-gd select {
  padding: 0 10px;
  border: none;
  height: 60px;
  border-left: 1px solid #eee;
  background: url(/assets/images/down.png) no-repeat 92% 52%;
  outline: none;
  width: 100%;
  font-size: 16px;
  color: #888;
  text-align: left;
  -webkit-appearance: none;
  cursor: pointer;
  display: grid;
  grid-template-columns: .1fr 1fr;
  align-items: center;
  padding-left: 15px;
  border-radius: 3px;
  font-family: inherit; }

.w3l-cover-3 .w3l-cover-3-gd select option {
  padding: 10px;
  background: #f9f9f9; }

.w3l-cover-3 .w3l-cover-3-gd select option:hover {
  background: #333;
  color: #fff; }

.w3l-cover-3 .w3l-cover-3-gd button {
  text-align: center;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  padding: 0;
  height: 60px;
  cursor: pointer;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 20%;
  font-weight: 600; }

.w3l-cover-3 .demo a {
  position: absolute;
  bottom: 20px;
  left: 48%;
  z-index: 2;
  display: inline-block;
  transform: translate(0, -50%);
  color: #fff;
  letter-spacing: 1px;
  text-decoration: none;
  transition: opacity .3s;
  font-weight: 600; }

.w3l-cover-3 .demo a:hover {
  opacity: .5; }

.w3l-cover-3 #bottom a {
  padding-top: 70px; }

.w3l-cover-3 #bottom a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box; }

@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0; }
  50% {
    opacity: 1; }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0; } }

@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0; }
  50% {
    opacity: 1; }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0; } }

@media (max-width: 1080px) {
  .w3l-cover-3 .top-bottom {
    min-height: 700px; }
  .w3l-cover-3 .middle-section h2 {
    font-size: 50px;
    line-height: 55px; } }

@media (max-width: 1080px) {
  .w3l-cover-3 .link-list-menu p {
    font-size: 23px;
    line-height: 32px; } }

@media (max-width: 992px) {
  .w3l-cover-3 .top-bottom {
    min-height: 750px; }
  .w3l-cover-3 .w3l-cover-3-gd button {
    width: 19%; } }

@media (max-width: 800px) {
  .w3l-cover-3 .middle-section h2 {
    font-size: 45px;
    line-height: 50px; }
  .w3l-cover-3 .middle-section a {
    margin-top: 40px; }
  .w3l-cover-3 .middle-section {
    padding-top: 11em; }
  .w3l-cover-3 .most-searches {
    margin-top: 50px; } }

@media (max-width: 768px) {
  .w3l-cover-3 .w3l-cover-3-gd input[type="search"] {
    width: 100%;
    margin: 4px 0;
    border-radius: 4px; }
  .w3l-cover-3 .w3l-cover-3-gd span.input-group-btn {
    width: 49.5%;
    margin-bottom: 4px;
    border-radius: 4px; }
  .w3l-cover-3 .w3l-cover-3-gd span.input-group-btn:nth-child(2) {
    margin-right: .5%; }
  .w3l-cover-3 .w3l-cover-3-gd span.input-group-btn:nth-child(3) {
    margin-left: .5%; }
  .w3l-cover-3 .w3l-cover-3-gd button {
    width: 100%;
    border-radius: 4px; }
  .w3l-cover-3 p {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 10px; } }

@media (max-width: 736px) {
  .w3l-cover-3 .middle-section h2 {
    font-size: 40px; } }

@media (max-width: 667px) {
  .w3l-cover-3 .link-list-menu {
    max-width: 523px; }
  .w3l-cover-3 .link-list-menu p {
    padding-top: 19px; }
  .w3l-cover-3 .middle-section a {
    margin-top: 30px; } }

.w3l-cover-3 .middle-section h5 {
  padding-bottom: 10px; }

@media (max-width: 640px) {
  .w3l-cover-3 .link-list-menu p {
    font-size: 23px; } }

@media (max-width: 600px) {
  .w3l-cover-3 .middle-section h2 {
    font-size: 38px; }
  .w3l-cover-3 .link-list-menu p {
    padding-top: 13px; }
  .w3l-cover-3 .middle-section h5 {
    padding-bottom: 8px; }
  .w3l-cover-3 .most-searches ul li a {
    font-size: 15px; }
  .w3l-cover-3 .most-searches h4 {
    font-size: 18px; }
  .w3l-cover-3 .most-searches {
    grid-gap: 20px; }
  .w3l-cover-3 p {
    font-size: 17px;
    margin-bottom: 0px; } }

@media (max-width: 568px) {
  .w3l-cover-3 .top-bottom {
    min-height: 700px; }
  .w3l-cover-3 .middle-section {
    padding-top: 10em; } }

@media (max-width: 480px) {
  .w3l-cover-3 .middle-section h2 {
    font-size: 34px;
    line-height: 42px; }
  .w3l-cover-3 .link-list-menu p {
    font-size: 19px;
    line-height: 25px; } }

@media (max-width: 440px) {
  .w3l-cover-3 .most-searches h4 {
    font-size: 16px; }
  .w3l-cover-3 .most-searches {
    grid-gap: 25px;
    margin-top: 40px;
    align-items: center; } }

@media (max-width: 415px) {
  .w3l-cover-3 .middle-section {
    padding-top: 8em; }
  .w3l-cover-3 .top-bottom {
    min-height: 650px; }
  .w3l-cover-3 .demo a {
    bottom: 0px; }
  .w3l-cover-3 #bottom a {
    padding-top: 60px; }
  .w3l-cover-3 .most-searches {
    margin-top: 30px; } }

@media (max-width: 384px) {
  .w3l-cover-3 .link-list-menu p {
    font-size: 18px; }
  .w3l-cover-3 .middle-section a {
    margin-top: 25px; }
  .w3l-cover-3 .middle-section h2 {
    font-size: 30px;
    line-height: 40px; }
  .w3l-cover-3 .most-searches ul li a {
    font-size: 14px; }
  .w3l-cover-3 .most-searches {
    grid-gap: 15px; }
  .w3l-cover-3 .most-searches h4 {
    font-size: 13px; }
  .w3l-cover-3 .top-bottom {
    min-height: 600px; } }

@media (max-width: 320px) {
  .w3l-cover-3 .link-list-menu {
    width: 281px; }
  .w3l-cover-3 .link-list-menu p {
    font-size: 20px; }
  .w3l-cover-3 .middle-section h2 {
    font-size: 33px; } }
</style>