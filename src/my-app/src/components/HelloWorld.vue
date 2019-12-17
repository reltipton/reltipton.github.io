<template>
  <v-container class="grey lighten-5">



    
    <v-row>
      <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        sm="4"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
          tile
          :to="project.url"
        >
        
         <v-img
            height="100%"
            width="100%"
            max-height="300"
            max-width="300"
            :src="project.image"
            center
          ></v-img>
          <v-card-title>
            <span class="card-title">{{project.name}}</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
   projects: [
     {
       id: "ids-407",
       name: "IDS-407 Final Infographic",
       image: require('../assets/IDS407_finalInfographic.png'),
       url: "project/ids-407"
     },
     {
       id: "ids-401",
       name: "IDS 401 Final Project",
       image: require('../assets/IDS401_FinalProject.png'),
       url: "project/ids-401"
     },
     {
       id: "gen-info",
       name: "Generation Infographic",
       image: require('../assets/GenerationInfographic.png'),
       url: "project/gen-info"
     }
   ]
  })
};
</script>

<style scoped>
.card-title {
  color: #1F2846
}
</style>
