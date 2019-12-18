<template>
  <v-container class="project-list white lighten-5">
    <v-row>
      <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        sm="4"
      >
        <v-card
          class="mx-auto no-border"
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
          <v-card-subtitle>
            <span class="card-subtitle">{{project.subtitle}}</span>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectsList",

  data: () => ({
   projects: [
     {
       id: "ids-407",
       name: "Information & Content Strategy",
       subtitle: "Northwestern University",
       image: require('../assets/InfographicSnippet.png'),
       url: "project/ids-407"
     },
     {
       id: "ids-401",
       name: "User-Centered Design",
       subtitle: "Northwestern University",
       image: require('../assets/FitInSnippet.png'),
       url: "project/ids-401"
     },
     {
       id: "gen-info",
       name: "Visual Communication: Infographic",
       subtitle: "Northwestern University",
       image: require('../assets/GenerationInfographicSnippet.png'),
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

.no-border {
  border: 0 !important
}

.white {
  background-color: white !important
}
</style>
