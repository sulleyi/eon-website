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
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}
section:first-child {
  height: 100vh;
}
section:not(:first-child) {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.view-root>section:first-child>div:first-child {
  padding-top: 100px;
}
.view-root section>div {
  padding: 20px;
}
</style>
