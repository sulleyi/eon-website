<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}
body.snap {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: relative;
}
.view-root {
  top: 0;
}
section {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}
.view-root>section:first-child>div:first-child {
  padding-top: 100px;
}
.view-root section>div {
  padding: 20px;
}
</style>
