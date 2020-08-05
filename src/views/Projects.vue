<template>
  <div class="view-root">
    <section>
      <div class="content">
        <h1>Our Work</h1>
        <div class="project-list">
          <Card v-for="(project, i) in projects" v-bind="project" :key="i" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { projectsIndex } from "@/projects/index.js";

//let projects = [];

//export function setProjects(p) {
//  projects = p;
//}

export default {
  name: "Projects",
  components: {
    Card
  },
  data: () => ({ projects: projectsIndex })
};
</script>

<style scoped>
.content {

  background: rgb(255, 255, 255);
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 74%,
    rgba(233, 79, 55, 1) 74%,
    rgba(233, 79, 55, 1) 100%
  );

}
</style>
