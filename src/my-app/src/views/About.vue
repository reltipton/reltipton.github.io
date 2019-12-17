<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "About",

  data: () => ({
   projects: [
     {
       id: "IDS-407",
       title: "IDS-407 Final Infographic",
       description: "IDS-407-Description",
       images: [
        require('../assets/IDS407_finalInfographic.png'),
        require('../assets/logo.png')
       ],
       otherProjectImages :[
          require('../assets/IDS401_FinalProject.png'),
          require('../assets/GenerationInfographic.png')
       ]
     },
     {
       id: "IDS-401",
       title: "IDS 401 Final Project Infographic",
       description: "IDS-401 Final Project Description",
       images: [
        require('../assets/IDS401_FinalProject.png'),
        require('../assets/logo.png')
       ],
       otherProjectImages: [
        require('../assets/IDS407_finalInfographic.png'),
        require('../assets/GenerationInfographic.png')
       ]
     },
     {
       id: "Generation Infographic",
       title: "Generation Infographic",
       description: "Generation Infographic Description",
       images:[
         require('../assets/GenerationInfographic.png')
       ],
       otherProjectImages: [
        require('../assets/IDS407_finalInfographic.png'),
        require('../assets/IDS401_FinalProject.png'),
       ]
     }
   ],
  })
};
</script>
