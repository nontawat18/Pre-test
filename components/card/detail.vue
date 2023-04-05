<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <v-carousel hide-delimiters cycle>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <v-col class="pa-8">
          <h1>Description</h1>
          Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply
          Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry'sLorem Ipsum is simply Lorem Ipsum is simply Lorem
          Ipsum is simply Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum
          is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry'sLorem Ipsum is simply Lorem Ipsum is
          simply Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry'sLorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is
          simply Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum
          is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry'sLorem Ipsum is simply Lorem Ipsum is
          simply Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry'sLorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is
          simply Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
        </v-col>
        <v-col>
          <v-btn tile color="success">
            Get to cart
            <v-icon right> mdi-cart </v-icon>

          </v-btn>
        </v-col>
      </v-col>
      <v-col cols="12" md="4">
        <v-col v-for="(item, i) in list" :key="i" cols="12">
          <v-card dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
