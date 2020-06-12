<template>
  <div class="view-root">
    <section>
      <div class="content">
        <div class="header">
          <h1>Entrepreneurs of the Nott (EON) is a group that looks to...</h1>
        </div>
        <div class ="body">
        <div class="taglines">
            <div class="tagline"
            @mouseover="changeState1"
            @mouseout="changeState1"
            >
              <h2><strong>inspire</strong></h2>
            </div>


            <div class="tagline"
            @mouseover="changeState2"
            @mouseout="changeState2"

            >
              <h2><strong>empower</strong></h2>
            </div>


            <div class="tagline"
            @mouseover="changeState3"
            @mouseout="changeState3"
            >
              <h2><strong>create change</strong></h2>
            </div>

        </div>
        <div class="statements">
          <div class="passive" :class="hoverState1">
            <p>
              We <strong>inspire</strong> by encouraging campus-wide collaboration at Union
              and exposing the student body to an entrepreneurial mindset,
              demonstrating that the ambiguous concept of “entrepreneurship”,
              (and the skill sets that come with it) has more personal and
              professional application than commonly thought.
            </p>
          </div>
          <div class="passive" :class="hoverState2">
            <p>
              We <strong>empower</strong> through speaker series, providing a platform
              for students to connect with alumni, the local community,
              and resources to see their ideas materialize into tangible
              results and/or products.
            </p>
          </div>
          <div class="passive" :class="hoverState3">
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
    </div>
    </section>
  </div>
</template>

<script>

export default{
  data(){
    return{
      hoverActive1: false,
      hoverActive2: false,
      hoverActive3: false
    };
  },

  computed: {
    hoverState1() {
      return this.hoverActive1 ? 'active': 'passive';
    },

    hoverState2() {
      return this.hoverActive2 ? 'active': 'passive';
    },

    hoverState3() {
      return this.hoverActive3 ? 'active': 'passive';
    },
  },

  methods: {
    changeState1() {
      this.hoverActive1 = !this.hoverActive1;
    },
    changeState2() {
      this.hoverActive2 = !this.hoverActive2;
    },
    changeState3() {
      this.hoverActive3 = !this.hoverActive3;
    }
  },
};


</script>

<style scoped>
.content{
  background: rgb(255, 255, 255);
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 74%,
    rgba(233, 79, 55, 1) 74%,
    rgba(233, 79, 55, 1) 100%
  );
}

.body{
margin: 0px 225px;

}

.header{
  text-align: left;
  padding: 25px;
}


.taglines{

  display: flex;
  justify-content:space-around;
  padding:10px;
}


.tagline > h2 {
  box-shadow: 10px 10px black;
  border: 1px solid black;
  padding: 10px;
  display: inline-block;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.tagline > h2:hover{
  box-shadow: 10px 10px #42b983;
}

h3{
  padding: 10px;
  margin:25px;
  background-color: white;
  border: 1px solid black;
  border-radius:5px;
}

.passive > p{
  transition-property: transform box-shadow;
  transition-duration: .75s;
  transition-timing-function: ease;
  transform: scale(1.0);
  box-shadow: 10px 10px black;
  border: 1px solid black;
  padding: 10px;
  width: auto;
  display: inline-block;
  background-color: white;


}

.active > p{
  transition-property: transform box-shadow;
  transition-duration: .75s;
  transition-timing-function: ease;
  margin: 30px 0px;
  transform: scale(1.3);
  box-shadow: 10px 10px #42b983;
}

</style>
