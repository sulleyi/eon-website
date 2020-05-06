<template>
  <div class="card">
    <span> {{ name }} </span>
    <p v-if="bio">{{ bio }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    name: String,
    bio: {
      type: String,
      optional: true
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  max-width: 200px;
}
.card span {
  display: block;
  text-align: center;
}
</style>
