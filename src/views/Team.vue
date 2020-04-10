<template>
  <div class="team view-root">
    <section>
      <div class="content">
        <h1>Our Team</h1>
        <div>
          <MemberCard v-for="(member, i) in team" :key="i" v-bind="member" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import teamMembers from "@/data/teamMembers.js";
import MemberCard from "@/components/MemberCard.vue";

export default {
  name: "TeamPage",
  components: {
    MemberCard
  },
  data: () => ({ team: teamMembers })
};
</script>

<style scoped>
.content {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 74%,
    rgba(68, 185, 131, 1) 100%
  );
}
</style>
