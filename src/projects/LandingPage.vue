<template>
  <section>
  <div>
    <h1>Work</h1>
    <div class="project-list">
      <Hack :cmp="project.card" v-for="project in projects" :key="project.name"/>
    </div>
  </div>
  </section>
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
