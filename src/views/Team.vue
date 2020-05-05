<template>
  <div class="team view-root">
    <section>
      <div class="content">
        <transition name="fade">
          <MemberModal @close="closeProfile" v-if="showFeatured" v-bind="featuredProfile"/>
        </transition>
        <h1>Our Team</h1>
        <div>
          <MemberCard v-for="(member, i) in team" :key="i" v-bind="member" @showProfile="showProfile"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import teamMembers from "@/data/teamMembers.js";
import MemberCard from "@/components/MemberCard.vue";
import MemberModal from "@/components/MemberModal.vue";

export default {
  name: "TeamPage",
  components: {
    MemberCard,
    MemberModal
  },
  data: () => ({ team: teamMembers, showFeatured: false, featuredProfile: {} }),
  methods: {
    showProfile(profileId) {
      this.featuredProfile = this.team[profileId];
      this.showFeatured = true;
    },
    closeProfile() {
      this.showFeatured = false;
    }
  }
};
</script>

<style scoped>
.content {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 74%,
    rgba(68, 185, 131, 1) 74%,
    rgba(68, 185, 131, 1) 100%
  );
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
  top: 0;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  top: -250px;
}
</style>
