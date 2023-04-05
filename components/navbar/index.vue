<template>
  <div>
    <v-col class="pt-10 pb-10">
      <v-app-bar
        color="black"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        dark
      >
        <v-row>
          <v-col class="text-center pt-4" cols="4" md="1">
            <img
              height="87px"
              width="87px"
              src="~/assets/img/logo.png"
              @click="to"
            />
          </v-col>
          <v-spacer />
          <v-col cols="12" md="8" class="pt-9 pb-9" v-if="this.mobile > 900">
            <v-btn color="withe" text size="x-large"> LOREM </v-btn>
            <v-btn color="withe" text size="x-large">
              LOREM <v-icon light right>mdi-chevron-down</v-icon>
            </v-btn>
            <v-btn color="withe" text size="x-large"> LOREMIPSUM </v-btn>
            <v-btn color="withe" text size="x-large"> LOREM & IPSUM </v-btn>
            <v-btn color="withe" text size="x-large"> LOREM </v-btn>
          </v-col>
          <v-col cols="2" md="1" class="pt-9 pb-9 text-right">
            <v-badge bordered color="error" content="6" overlap>
              <v-btn dark  icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-badge>
          </v-col>
          <v-col cols="2" class="pt-9 pb-9" v-if="this.mobile <= 900">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>LOREM</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title
                    >LOREM
                    <v-icon light right color="white"
                      >mdi-chevron-down</v-icon
                    ></v-list-item-title
                  >
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>LOREMIPSUM</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>LOREM & IPSUM</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>LOREM</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-col>
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
    to() {
      this.$router.push("/");
    },
  },
};
</script>
<style>
.text-italic {
  font-family: "Montserrat";
  font-style: italic;
  padding-right: 10px;
}
.text-italic-color {
  font-family: "Montserrat";
  color: #d9ef0c;
}
</style>
