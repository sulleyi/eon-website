<template>
  <div id="nav">
    <div>
      <router-link to="/"
        ><div class="around-logo">
          <img class="logo" src="@/assets/logo_nott.png" /></div
      ></router-link>
    </div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Work</router-link> |
      <router-link to="/team">Team</router-link>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

#nav a {
  font-weight: bold;
  color: #333;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.around-logo {
  background: white;
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0);
  transition: 0.5s all;
}

.around-logo:hover {
  border: 3px solid #42b983;
}

.around-logo:hover .logo {
}
.logo {
  width: 40px;
  border-radius: 50%;
  transition: 0.5s all;
}

#nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}

#nav > div {
  align-self: center;
}
</style>
