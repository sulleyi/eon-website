<template>
  <div class="modal" @click="topLevelClick($event)" ref="root">
    <div class="wrapper">
      <div class="content">
        <span class="close-btn" @click="close">X</span>
        <div>
          <img class="profile-pic" :src="profilePic"/>
        </div>
        <div>
          <h1>{{ name }}</h1>
          <h2 v-if="fields">{{ fields }}</h2>
          <p>{{ bio }}</p>
          <p v-if="email">
            Contact: <a target="_BLANK" rel="noopener noreferrer"  :href="'mailto:'+email">{{ email }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberModal",
  props: {
    name: String,
    bio: {
      type: String,
      optional: true
    },
    profilePic: {
      type: String,
      optional: true
    },
    fields: {
      type: String,
      optional: true
    },
    email: {
      type: String,
      optional: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    topLevelClick(e) {
      if(e.srcElement == this.$refs.root) {
        this.close();
      }
    }
  }
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #eeeeeeaa;
  font-size: 1.25em;
}
.wrapper {
  background: #fff;
  margin: 50px;
}
.content {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.125);
  padding: 50px;
}
.profile-pic {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 20px;
  padding: 20px;
}
.close-btn {
  top: 0;
  right: 0;
  position: absolute;
  padding: 30px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.5em;
}
h2 {
  font-weight: normal;
  font-style: italic;
  margin: -10px 0;
  color: #333;
  font-size: 1em;
  text-align: right;
}
p {
  text-align: left;
  white-space: pre-line;
}
</style>
