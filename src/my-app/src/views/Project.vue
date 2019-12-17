<template>
  <div class="about">
    <h1>{{projectInContext.title}}</h1>
    <p>{{projectInContext.description}}</p>
      <v-container class="grey lighten-5">
        <v-row>
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
        <v-row>
          <h1> Other Projects... </h1>
        </v-row>
        <v-row>
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
          require('../assets/IDS407_finalInfographic.png'),
          require('../assets/logo.png')
       ],
      url: "/project/ids-407",

     },
     {
       id: "ids-401",
       title: "IDS 401 Final Project Infographic",
       description: "IDS-401 Final Project Description",
       url: "/project/ids-401",
       images: [
        require('../assets/IDS401_FinalProject.png'),
        require('../assets/logo.png')
       ],
     },
     {
       id: "gen-info",
       title: "Generation Infographic",
       description: "Generation Infographic Description",
       url: "/project/gen-info",
       images:[
         require('../assets/GenerationInfographic.png')
       ]
     }
   ]
  })
};
</script>
