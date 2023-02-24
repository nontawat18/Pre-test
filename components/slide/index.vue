<template>
  <div>
    <v-carousel height="900px" hide-delimiters>
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="#C4C4C4" v-bind="attrs" v-on="on" class="pa-0"
          ><v-icon color="black">mdi-arrow-left </v-icon></v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="#D9EF0C" v-bind="attrs" v-on="on"
          ><v-icon color="black">mdi-arrow-right</v-icon></v-btn
        >
      </template>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet color="black" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="12" class="text-center">
              <v-col class="pb-12">
                <v-avatar size="200px">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col class="pb-6">
                <strong>{{ slide }}</strong>
              </v-col>
              <v-col class="pl-16 pr-16 ">
                <p style="Weight:400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  consequuntur dicta cumque doloremque architecto quos
                  aspernatur accusantium perspiciatis aliquam placeat a earum,
                  nemo magni. Tenetur modi vero neque ab. Corporis?
                </p>
              </v-col>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {

      slides: [
        "Lorem Ipsum is simply",
        "Lorem Ipsum is simply",
        "Lorem Ipsum is simply",
        "Lorem Ipsum is simply",
        "Lorem Ipsum is simply",
      ],
    };
  },
};
</script>
