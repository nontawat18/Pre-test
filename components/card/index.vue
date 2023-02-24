<template>
  <div
    style="background-color: #d9ef0c; "
    align="center"
    justify="center"
  >
    <v-container>
      <h1 class="header" v-if="this.mobile > 900">LOREM IPSUM</h1>
      <h1 class="header-mobile" v-else>LOREM IPSUM</h1>
      <v-row>
        <v-col v-for="product in dummy" :key="product.id">
          <v-card class="" width="416" height="443" color="#ffffff">

            <v-carousel hide-delimiters cycle height="236px">
              <v-carousel-item
                v-for="(image, i) in product.images"
                :key="i"
                :src="image"
              >
              </v-carousel-item>
            </v-carousel>
            <v-card-title class="pb-2" style="color: black">
              {{ product.title }}
            </v-card-title>

            <v-card-text style="color: black">
              <div>{{ product.description }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="pa-16"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    mobile: false,
  }),
  computed: {
    dummy: {
      get() {
        if (this.$store.state.dummy.dummy) {
          return this.$store.state.dummy.dummy.products;
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.getDummy();
  },
  methods: {
    ...mapActions({
      getDummy: "dummy/getDummy",
    }),
    handleResize() {
      this.mobile = window.innerWidth;
    },
  },
};
</script>
<style>
.header {
  font-size: 82px;
  color: black;
  padding: 120px 60px 60px 60px;
}
.header-mobile {
  font-size: 72px;
  color: black;
  padding: 120px 60px 60px 60px;
}
</style>
