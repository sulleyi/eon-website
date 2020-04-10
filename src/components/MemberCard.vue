<template>
  <div class="member">
    <span> {{ name }} </span>
    <p v-if="bio">{{ bio }}</p>
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.member {
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 250px;
  display: inline-block;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  background: #fff;
}
.member span {
  display: block;
  text-align: center;
}
</style>
