<template>
  <v-app>
    <v-app-bar app elevation="0" height="150" light>
      <div class="d-flex align-center">
        <router-link
          to="/"
        >
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="images.sample"
            transition="scale-transition"
            width="200"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/about"
        text
      >
        <span class="mr-2">About</span>
      </v-btn>

      <v-btn
        href="/docs/ArielTiptonResume.pdf"
        target="_blank"
        text
      >
        <span class="mr-2">Resume</span>
      </v-btn>
    </v-app-bar>

    <v-content class="font-and-background">
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

<style scoped>
#app {
  background-color: white !important;
  color: #1F2846 !important;
  font-family: "Avenir", sans-serif !important;
}

</style>
