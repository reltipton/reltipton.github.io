<template>
  <div class="about">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="6"
            md="6"
          >
          <strong>
            <h2 class="centered-text display-1">{{projectInContext.title}}</h2>
          </strong>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="6"
            md="6"
          >
            <p class="centered-text">{{projectInContext.description}}</p>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="center">
          <v-col
            v-for="(image, i) in projectInContext.images"
            :key="i"
            cols="12"
            sm="4"
          >
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              tile
            >
            
            <v-img
                height="100%"
                width="100%"
                max-height="300"
                max-width="300"
                :src="image"
                center
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <h4 class="headline"> Other Projects... </h4>
        </v-row>
        <v-row justify="center">
          <v-col
            v-for="(project, i) in otherProjects"
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
                :src="project.images[0]"
                center
              ></v-img>
            </v-card>
          </v-col>
        </v-row>        
      </v-container>
  </div>
</template>
<script>
export default {
  name: "Project",
  beforeRouteUpdate: function(to, from, next){
    // react to route changes...
    // don't forget to call next()
    this.projectInContext = this.projects.find( (project) => {
      return project.id === to.params.id;
    });

    this.otherProjects = this.projects.filter( (project) => {
      return project.id !== to.params.id;
    });
    next()

  },
  created() {
    this.projectInContext = this.projects.find( (project) => {
      return project.id === this.$route.params.id;
    });

    this.otherProjects = this.projects.filter( (project) => {
      return project.id !== this.$route.params.id;
    });
  },
  data: () => ({
   projectInContext: {},
   otherProjects: [],
   projects: [
     {
       id: "ids-407",
       title: "IDS-407 Final Infographic",
       description: "IDS-407-Description",
       images: [
          require('../assets/InfographicSnippet.png'),
          require('../assets/IDS407_finalInfographic.png')
       ],
      url: "/project/ids-407",

     },
     {
       id: "ids-401",
       title: "IDS 401 Final Project Infographic",
       description: "IDS-401 Final Project Description",
       url: "/project/ids-401",
       images: [
        require('../assets/FitInSnippet.png'),
        require('../assets/IDS401_FinalProject.png')
       ],
     },
     {
       id: "gen-info",
       title: "Generation Infographic",
       description: "Generation Infographic Description",
       url: "/project/gen-info",
       images:[
         require('../assets/GenerationInfographicSnippet.png'),
         require('../assets/GenerationInfographic.png')
       ]
     }
   ]
  })
};
</script>
<style scoped lang="scss">
.centered-text {
  text-align: center;
}
.v-application {
  .display-1 {
    background-color: white !important;
    color: #1F2846 !important;
    font-family: "Avenir", sans-serif !important;
  }
  .headline {
    background-color: white !important;
    color: #1F2846 !important;
    font-family: "Avenir", sans-serif !important;
  }
  
}
</style>
