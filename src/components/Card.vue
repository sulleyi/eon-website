<template>
  <div class="card">
    <img :src="projectPic"/>
      <span> {{ name }} </span>
    <div class="footer">
      <p class="bio">{{ bio }}</p>

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
    },
    projectPic: {
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
  max-width: 210px;
}

.card img{
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  height: 200px;
  width: 200px;
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

.footer {
  border-top: 0;
  padding: 7px 15px;
}
.footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.footer p.bio {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
</style>
