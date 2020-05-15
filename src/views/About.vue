<template>
  <div class="view-root">
    <section>
      <div class="content">
        <div class="header">
          <h1>Entrepreneurs of the Nott (EON) is a group that looks to...</h1>
        </div>
        <div class="taglines">
          <div>
            <h2><strong>inspire</strong> design thinking</h2>
          </div>
          <div>
            <h2><strong>empower</strong> through ideation and hands-on projects</h2>
          </div>
          <div>
            <h2><strong>create change</strong> within and outside of Union.</h2>
          </div>
        </div>
        <div class="mission-statements">
            <p>
              We <strong>inspire</strong> by encouraging campus-wide collaboration at Union
              and exposing the student body to an entrepreneurial mindset,
              demonstrating that the ambiguous concept of “entrepreneurship”,
              (and the skill sets that come with it) has more personal and
              professional application than commonly thought.
            </p>

            <p>
              We <strong>empower</strong> through speaker series, providing a platform
              for students to connect with alumni, the local community,
              and resources to see their ideas materialize into tangible
              results and/or products.
            </p>


            <p>
              We <strong>create change</strong> through weekly “Think Tanks” workshop sessions,
              have monthly meetings, hold design thinking workshops, and trips
              to local businesses.
            </p>

        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.content{
  margin: 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    -157deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 74%,
    #2c3e50 74%,
    #2c3e50 100%
  );
}
.header{
  text-align: left;
  padding: 10px;
}
.taglines{
  padding: 25px;
  border: 2px;
  border-radius: 10px;
}
.taglines > div:first-child {
    text-align: left;
}
.taglines > div:last-child {
text-align: right;
}
.mission-statements{
  padding: 25px;
  margin-bottom: 250px;
}
.mission-statements > p:first-child{
  text-align: left;
}
.mission-statements > p:last-child{
  text-align: right;
}


</style>
