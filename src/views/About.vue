<template>
  <div class="view-root">
    <section>
      <div class="content">
        <div class="header">
          <h1>Entrepreneurs of the Nott (EON) is a group that looks to...</h1>
        </div>

        <div class="taglines">
            <div class="tagline"
            @mouseover="hover1 = true"
            >
              <h4><strong>inspire</strong> design thinking</h4>
            </div>


            <div class="tagline"
            @mouseover="hover2 = true"

            >
              <h4><strong>empower</strong> through ideation and hands-on projects</h4>
            </div>


            <div class="tagline"
            @mouseover="hover3 = true"
            >
              <h4><strong>create change</strong> within and outside of Union.</h4>
            </div>

        </div>
        <div class="statements">
          <div v-if="hover1">
            <p>
              We <strong>inspire</strong> by encouraging campus-wide collaboration at Union
              and exposing the student body to an entrepreneurial mindset,
              demonstrating that the ambiguous concept of “entrepreneurship”,
              (and the skill sets that come with it) has more personal and
              professional application than commonly thought.
            </p>
          </div>
          <div v-if="hover2">
            <p>
              We <strong>empower</strong> through speaker series, providing a platform
              for students to connect with alumni, the local community,
              and resources to see their ideas materialize into tangible
              results and/or products.
            </p>
          </div>
          <div v-if="hover3">
            <p>
              We <strong>create change</strong> through weekly “Think Tanks” workshop sessions,
              have monthly meetings, hold design thinking workshops, and trips
              to local businesses.
            </p>
          </div>
        </div>
      <div>
        <h3>EON is simply a place where people can solve problems in whatever capacity they desire.</h3>
      </div>
    </div>
    </section>
  </div>
</template>

<script>

export default{
  data(){
    return{
      hover1: false,
      hover2: false,
      hover3: false
    };
  }
}
</script>

<style scoped>
.content{
  margin: 40px 100px;
}

.header{
  text-align: left;
  padding: 10px;
}


.taglines{

  display: flex;
  justify-content:space-around;
  margin: 10px;
  padding:10px;
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
