<template>
  <div class="view-root" ref="root">
    <section class="start">
      <div>
        <img class="big-logo" alt="Eon logo" src="@/assets/logo.png" />
        <div class="tagline" v-scroll-to="'#about-section'">
          <h4>You have the power to make a change.</h4>
          <div>
            <span class="down-arrow" />
          </div>
        </div>
      </div>
    </section>
    <section class="about" id="about-section">
      <div>
        <h1>Woah, woah, and woah?</h1>
        <div class="three-col">
          <div>
            <h2>Who?</h2>
            <p><strong>Collection</strong> of <strong>Creatives</strong></p>
            <p><u>Flocculation</u> of <u>Fighters for the Future</u></p>
            <p>
              <u><em>We</em></u> are a student group at Union College in
              Schenectady, NY who live to make positive social impact.
            </p>
          </div>
          <div>
            <h2>What?</h2>
            <p>
              Delightful design thinking workshops, Early morning breakfast and
              subsequent brainstorm, Pine Ridge MacGyvers, 7PM Think Tank, 4PM
              Think Tank, Speaker Series, Exodus of the Plastic Bottle, the list
              is ever growing and you should click on that "Work" page for
              details
            </p>
          </div>
          <div>
            <h2>Why?</h2>
            <p>
              Toaster in the dining hall or revolutionary prosthetic? --
              Everyone has the power to make the change they want to see.
            </p>
            <p>We are here to convince you.</p>
            <p>We are here to show you.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div>
          <CardCarousel />
        </div>
      </div>
    </section>
    <section class="contact">
      <div>
        <h1>Contact Us</h1>
        <p>
          Find us on
          <a href="https://www.instagram.com/eon_union/">Instagram</a>
        </p>
        <p>
          Something doesn't look right? Reach out to
          <a href="mailto:sulleyi@union.edu">sulleyi@union.edu</a>
        </p>
      </div>
    </section>
    <section>
      <div>
        <p>Copyright (c) 2020 Charles McVicker and Ian Sulley</p>
      </div>
    </section>
  </div>
</template>

<script>

import CardCarousel from "@/components/cardCarousel.vue";
export default {
  name: "Home",
  components: {
    CardCarousel
  },
  methods: {
    scrollDown() {
      document.getElementById("about-section").scrollIntoView();
    }
  }
};
</script>

<style>
.three-col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 30px 75px;
}
.three-col > div {
  padding: 0 30px;
  margin: 30px 0;
}
.three-col > div:first-child {
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}
.three-col > div:last-child {
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}
</style>

<style scoped>
.feature-img {
  border-radius: 10px;
}
.big-logo {
  width: 40%;
}
.down-arrow {
  border: solid rgba(0, 0, 0, 0.5);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: scale(5, 1) rotate3d(0, 0, 1, 45deg);
  transition: border-color 0.1s;
  cursor: pointer;
}
div:hover > .down-arrow {
  border-color: rgba(0, 0, 0, 1);
}
.tagline {
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding-bottom: 20px;
}
section:nth-child(2n) {
  background: #eee;
  color: #333;
}
.tagline > h4 {
  box-shadow: 10px 10px black;
  border: 1px solid black;
  padding: 10px;
  margin: 20px auto;
  width: auto;
  display: inline-block;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.tagline > h4:hover {
  box-shadow: 10px 10px #42b983;
}
</style>
