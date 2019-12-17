<template>
  <div class="home">
    <ProjectsList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectsList from "@/components/ProjectsList.vue";

export default {
  name: "home",
  components: {
    ProjectsList
  }
};
</script>
