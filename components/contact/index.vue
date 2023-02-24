<template>
  <div>
    <v-container>
      <div class="" style="padding-top: 150px; padding-bottom: 150px">
        <v-row>
          <v-col cols="12" md="7">
            <img height="100%" width="100%" src="~/assets/img/bicycle.png" />
          </v-col>
          <v-col cols="12" md="5">
            <v-col class="pa-8">
              <h1 class="headercontact">Contact me</h1>
              <v-form fast-fail @submit.prevent>
                <v-text-field
                  v-model="firstNameLastName"
                  label="First name - Last name"
                  :rules="firstNameRules"
                ></v-text-field>

                <v-text-field
                  v-model="tel"
                  label="Phone Number"
                  :rules="telRules"
                  type="number"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="emailRules"
                ></v-text-field>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateFormatted"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    @input="menu = false"
                  >
                  </v-date-picker>
                </v-menu>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima cum eum ab facere iste distinctio esse iusto? Harum
                  asperiores corporis quaerat saepe deleniti nemo nulla! Odio
                  incidunt facere reiciendis neque!
                </p>
                <v-col class="text-center">
                  <v-btn type="submit" class="mt-2" rounded color="#DEE34B">
                    <p style="color: black; margin: 0px">LOREM</p>
                  </v-btn>
                </v-col>
              </v-form>
            </v-col>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    firstNameLastName: "",
    tel: "",
    email: "",
    firstNameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "First name must be at least 3 characters.";
      },
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    telRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],
  }),
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  mounted() {
    this.dateFormatted = this.formatDate(this.date);
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
};
</script>
<style>
.headercontact {
  font-size: 73px;
  color: white;
}
</style>
