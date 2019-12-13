<template>
  <v-app>
    <v-app-bar app elevation="0" height="150" light>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="images.sample"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  // components: {
  //   HelloWorld
  // },

  data: () => ({
    images: {
        sample: require('./assets/ArielTiptonLogo.png')
    }
  })
};
</script>
