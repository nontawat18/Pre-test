<template>
  <div>
    <Navbar />
    <v-container>
      <div style="padding-top:100px; padding-bottom:80px">
      <v-row>
        <v-col cols="12" md="5" class="pl-16" v-if="this.mobile > 900">
          <h1 class="head">LOREM</h1>
          <h1 class="head-color">IPSUM</h1>
          <strong class="text-srong"
            >Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is
            simply</strong
          >
          <p style="padding-top: 20px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </v-col>
        <v-col cols="12" md="5" class="pl-8" v-else>
          <h1 class="head-mobile">LOREM</h1>
          <h1 class="head-color-mobile">IPSUM</h1>
          <strong class="text-srong"
            >Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is
            simply</strong
          >
          <p style="padding-top: 20px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </v-col>
        <v-col cols="12" md="7" class="text-center">
          <img height="100%" width="100%" src="~/assets/img/bicycle.png" />
        </v-col>
      </v-row>
    </div>
    </v-container>
    <Slide />
    <Card />
    <Contact />
  </div>
</template>
<script>
export default {
  data: () => ({
    mobile: false,
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.mobile = window.innerWidth;
    },
  },
};
</script>
<style>
.head {
  font-family: "Montserrat";
  font-size: 96px;
  text-shadow: 0px 4px 30px #21612f;
}
.head-color {
  font-family: "Montserrat";
  font-size: 96px;
  color: #d9ef0c;
  text-shadow: 0px 4px 30px #21612f;
}
.head-mobile {
  font-family: "Montserrat";
  font-size: 76px;
  text-shadow: 0px 4px 30px #21612f;
}
.head-color-mobile {
  font-family: "Montserrat";
  font-size: 76px;
  color: #d9ef0c;
  text-shadow: 0px 4px 30px #21612f;
}
.text-srong {
  padding-bottom: 100px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
</style>
