<template>
  <div class="view-root">
    <section>
      <div class="content">
        <h1>Work</h1>
        <div class="project-list">
          <Card
            v-for="project in projects"
            v-bind="project"
            :key="project.name"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './Card.vue';

let projects = [];

export function setProjects(p) {
  projects = p;
}

export default {
  name: "Projects",
  components: {
    Card
  },
  data: () => ({
    projects
  })
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
