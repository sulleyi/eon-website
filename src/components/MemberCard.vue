<template>
  <div class="member" @click="showModal">
    <div class="img-wrapper">
      <div class="filter"></div>
      <img class="profile-pic" :src="profilePic" />
    </div>

    <span> {{ name }} </span>
  </div>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    name: String,
    bio: {
      type: String,
      optional: true
    },
    profilePic: {
      type: String,
      optional: true
    }
  },
  methods: {
    showModal() {
      this.$emit("showProfile", this.$vnode.key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 0;
  left: 0;
  margin: auto;
  position: absolute;
  filter: grayscale(100%);
}
.filter {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 0;
  left: 0;
  margin: auto;
  position: absolute;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(68, 185, 131, 0.25) 74%,
    rgba(68, 185, 131, 0.12) 100%
  );
  z-index: 1;
  transition: 1s all;
  cursor: pointer;
}
.filter:hover {
  background: linear-gradient(
    157deg,
    rgba(68, 185, 131, 0.75) 0%,
    rgba(68, 185, 131, 0.5) 74%,
    rgba(68, 185, 131, 0.75) 100%
  );
}
.img-wrapper {
  position: relative;
  height: 200px;
  width: 200px;
  margin: auto;
}
.member {
  width: 250px;
  display: inline-block;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.25);
}
.member span {
  display: block;
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
  margin: 10px auto;
  cursor: pointer;
}
.member span:hover {
  color: rgba(68, 185, 131, 1);
}
</style>
