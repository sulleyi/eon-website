<template>
  <div class="view-root">
    <section>
      <div class="first-page">
        <div class="fixed-bg" id="top-img">
          <h1>Early Riser Breakfast</h1>
          <p class="test">
            <mark>
              8-10AM <br />
              West Dining Hall<br />
              Every Saturday and Sunday
            </mark>
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="three-col">
        <div>
          <h2>Cook for yourself</h2>
          <div class="img-wrapper">
            <img src="@/assets/breakfast/pan.jpg">
          </div>
        </div>
        <div>
          <h2>Meet other early risers</h2>
          <div class="img-wrapper">
            <img src="@/assets/breakfast/friends.jpeg">
          </div>
        </div>
        <div>
          <h2>Have fun</h2>
          <div class="img-wrapper">
            <img src="@/assets/breakfast/cook.jpg">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="">
        <h3>The Story</h3>
        <p>
        The first project that came out of EON’s Think Tanks was Early Morning Breakfast. A dilemma we found on campus was there were no dining options for students who were up early on weekends (which does happen on a college campus!).
        </p>
        <p>
        Fall term, EON began serving breakfast at Minervas from 8-10 am from local businesses, including Bruegger’s Bagels, Lorenzo’s Cafe, Union Cafe and more. This created a close-knit of community between early rising students, many of whom wouldn’t have met otherwise. 
        </p>
        <p>
        Winter term, EON began working with Dining Services to open West Dining Hall open at 8 am (instead of regularly at 10)! This was completely student run, with Chef U style eggs, breakfast sandwiches, pastries, bagels, and so much more.
        </p>
        <p>
        Although we are sad we‘re unable to continue spring term, we’re looking forward to coming back in the Fall!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Breakfast"
};
</script>

<style scoped>
.three-col > div .img-wrapper {
  width: 100%;
  height: 200px;
}
.first-page {
  display: grid;
  grid-template-rows: 1fr;
}

h1 {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  border-radius: 5px;
  margin: 40px;
  font-size: 4em;
  color: white;
  background: rgba(0, 0, 0, 0.225);
}

h2 {
  margin: 25px;
  font-size: 1.75em;
  border-bottom: 1px solid rgba(0,0,0,0.125);
}

h3 {
  font-size: 1.75em;
}

ul.inline {
  display: flex;
  padding: 10px;
  margin: 40px;
  list-style-type: none;
}

ul.inline li {
  flex: 1;
  text-decoration: underline;
  font-size: 1.2em;
}

.fixed-bg {
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
}

#top-img {
  background-image: url("~@/assets/breakfast/feature.jpeg");
  position: relative;
  margin: -30px;
  margin-top: 0;
}

.split {
  display: grid;
  margin: 30px 0;
  grid-template-columns: 400px 1fr;
}
.img-wrapper > img {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
}

p {
  font-size: 1.25em;
  margin: 50px auto;
  width: 500px;
  text-align: justify;
}
.test {
  position: absolute;
  right: 50px;
  width: 500px;
  font-size: 2.5em;
  bottom: 50px;
  text-align: right;
  line-height: 2em;
  border-radius: 5px;
  margin: 0;
}
.test mark {
  display: inline;
  box-shadow: 5px 0 0 0 yellow, -5px 0 0 0 yellow, 10px 10px 0 0 black;
}
</style>
