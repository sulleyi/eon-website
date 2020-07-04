<template>
  <div class="card">

      <span> {{ name }} </span>
    <div class="content">
      <p v-if="bio">{{ bio }}</p>
    </div>
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
  margin: 10px;
  cursor: pointer;
}
.card span {
  display: block;
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
  margin: 10px auto;
}
.content {
  display: block;
  text-align: center;
  font-size: 1em;
  font-weight: normal;
  margin: 10px auto;
}
</style>
