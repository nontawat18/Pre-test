<template>
  <div style="background-color: #d9ef0c" align="center" justify="center">
      <h1 class="header" v-if="this.mobile > 900">LOREM IPSUM</h1>
      <h1 class="header-mobile" v-else>LOREM IPSUM</h1>
      <v-row>
        <v-col v-for="product in dummy" :key="product.id" >
          <v-card class="" width="416" height="460" color="#ffffff" to="/detailCard">
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
              <v-col>
                <v-row>
                  <v-rating
                    :value="product.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="grey--text ms-4">{{ product.rating }}</div>
                </v-row>
              </v-col>
              <div>{{ product.description }}</div>
            </v-card-text>
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

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
