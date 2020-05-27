<template>
  <div class="view-root">
    <section>
      <div class="content">
        <div class="header">
          <h1>Entrepreneurs of the Nott (EON) is a group that looks to...</h1>
        </div>

        <div class="mission-statements">
          <div class="statement1">
            <div
            @mouseover="hover1 = true"
            @mouseleave="hover1 = false"
            >
              <h2><strong>inspire</strong> design thinking</h2>
            </div>
            <div v-if="hover1">
              <p>
                We <strong>inspire</strong> by encouraging campus-wide collaboration at Union
                and exposing the student body to an entrepreneurial mindset,
                demonstrating that the ambiguous concept of “entrepreneurship”,
                (and the skill sets that come with it) has more personal and
                professional application than commonly thought.
              </p>
            </div>
          </div>
          <div class="statement2">
            <div
            @mouseover="hover2 = true"
            @mouseleave="hover2 = false"
            >
              <h2><strong>empower</strong> through ideation and hands-on projects</h2>
            </div>
            <div class="tag" v-if="hover2">
              <p>
                We <strong>empower</strong> through speaker series, providing a platform
                for students to connect with alumni, the local community,
                and resources to see their ideas materialize into tangible
                results and/or products.
              </p>
            </div>
          </div>
          <div class="statement3">
            <div
            @mouseover="hover3 = true"
            @mouseleave="hover3 = false"
            >
              <h2><strong>create change</strong> within and outside of Union.</h2>
            </div>
            <div v-if="hover3">
              <p>
                We <strong>create change</strong> through weekly “Think Tanks” workshop sessions,
                have monthly meetings, hold design thinking workshops, and trips
                to local businesses.
              </p>
            </div>
          </div>
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
  margin: 10px;

}
.header{
  text-align: left;
  padding: 10px;
}


.mission-statements{
  vertical-align: center;
  margin: auto;
  display:block;
  width: 100%;
  padding: 25px;
  padding-bottom: 300px;

}
.statement1{
  display: block;
  background-color:grey;
  width:300px;
  margin:20px;
  padding-bottom:25px;
  background-color: lightgrey;
  border: 5px;
  border-style: outset;
  border-color: grey;
}

.statement2{
  display: block;
  background-color: grey;
  margin: 20px;
  width: 300px;
  padding-bottom: 25px;
  background-color: lightgrey;
  border: 5px;
  border-style: outset;
  border-color: grey;
}

.statement3{
  display: block;
  background-color: lightgrey;
  border: 5px;
  border-style: outset;
  border-color: grey;
  width:300px;
  margin: 20px;
  padding-bottom: 25px;
}



</style>
