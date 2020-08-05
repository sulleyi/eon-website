<template>
  <div class="card"><img src="https://placehold.it/200x200"/>

      <span> {{ name }} </span>
    <div class="footer">
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
  border: 2px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  background-color: white;
}

.card img{
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}

.card img:hover{
  opacity: 0.5;
}
.card span {
  display: block;
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
  margin: 10px auto;
}
.card .footer {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
  max-width: 200px;


}
</style>
