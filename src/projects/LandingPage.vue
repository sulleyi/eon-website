<template>
  <div>
    <h1>Projects</h1>
    <div class="project-list" v-for="project in projects" :key="project.name">
      <Hack :cmp="project.card" />
    </div>
  </div>
</template>

<script>
const Hack = {
  props: {
    cmp: Object,
    child_props: Object
  },
  render: function(c) {
    return c(this.cmp, { props: this.child_props });
  }
}

let projects =  [];

export function setProjects(p) {
  projects = p;
}

export default {
  name: "Projects",
  components: {
    Hack,
  },
  data: () => ({
    projects,
  }),
}

</script>
