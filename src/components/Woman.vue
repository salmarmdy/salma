<template>
    <!-- Woman Section Begin -->
    <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <carousel class="product-slider" :items="3" :dots="false" :autoplay="true" :nav="false">
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/cart-page/product-1.jpg" />
                <ul>
                  <li class="w-icon active">
                    <a
                      href="#"
                    >
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <router-link to="/product">+ Quick View</router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <router-link to="/product">
                    <h5>Pure PineApple</h5>
                </router-link>
                <div class="product-price">
                  $50.000
                  <span>$35.00</span>
                </div>
              </div>
              </div>
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/cart-page/product-2.jpg" />
                <ul>
                  <li class="w-icon active">
                    <a
                      href="#"
                    >
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <router-link to="/product">+ Quick View</router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <router-link to="/product">
                    <h5>Pure PineApple</h5>
                </router-link>
                <div class="product-price">
                  $50.000
                  <span>$35.00</span>
                </div>
              </div>
            </div>
            <div class="product-item">
              <div class="pi-pic">
                <img src="img/cart-page/product-3.jpg" />
                <ul>
                  <li class="w-icon active">
                    <a
                      href="#"
                    >
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <router-link to="/home">+ Quick View</router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <router-link to="/product">
                  <a href="#">
                    <h5>Pure PineApple</h5>
                  </a>
                </router-link>
                <div class="product-price">
                  $50.000
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </carousel>
        </div>

        <!--<div class="col-lg-12" v-else>
          <p>Produk terbaru belum tersedia untuk saat ini.</p>
        </div>-->
      </div>
    </div>

    
  </section>
    <!-- Woman Section End -->
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: "Woman",
    components: {
        carousel
    }
}
</script>

<style scoped>
.product-item {
  margin-right: 25px;
}
.pi-pic img {
  height: 450px;
}
</style>