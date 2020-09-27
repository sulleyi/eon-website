import Breakfast from "./Breakfast.vue";
import SpeakerSeries from "./speakerSeries.vue";

let projectsIndex = [
  // add an entry like this one when you make a new project page/card
  {
    name: "Early Morning Breakfast",
    projectPic: require("@/assets/breakfast/feature.jpeg"),
    route: {
      path: "/projects/breakfast",
      name: "breakfast",
      component: Breakfast
    },
    bio: "Breakfast is tasty. I like to eat bacon eggs and cereal. I like juice too but it has too much sugar."
  },

  {
    name: "Speaker Series: David Dussault ‘00",
    projectPic: require("@/assets/speaker-series/feature.jpeg"),
    route: {
      path: "/projects/speakerSeries",
      name: "speakerSeries",
      component:SpeakerSeries
    },
    bio: "Inaugural Speaker Series event with Union Alumna who CoFounded and is the partner of Rosendale Venture Capital and Private Equity and the Founder and CEO of SP1ndle Industries."
  },

  {
    name: "Design Thinking Workshop",
    projectPic: require("@/assets/design-thinking/feature.jpeg"),
    route: {
      path: "/projects/design-thinking-workshop",
      name: "project-design-thinking-workshop",
      //component:
    },
    bio: "Create ideas to attack opportunities in the world that you care about."

  },

  {
    name: "Schenectady ARC",
    //projectPic: ,
    route: {
      path: "/projects/schenectady-arc",
      name: "project-schenectady-arc",
    },
    bio: "i like listening to people talk"

  },

  {
    name: "Newsletter",
    //projectPic: ,
    route: {
      path: "/projects/newsletter",
      name: "project-newsletter",
    },
    bio: "i like listening to people talk"

  },

  {
    name: "Website",
  //  projectPic: ,
    route: {
      path: "/projects/website",
      name: "project-website",
    },
    bio: "i like listening to people talk"

  }
    // new entries here
];

// bind projects for the loading view
//setProjects(projectsIndex);

const projectRoutes = projectsIndex.map(({ route }) => route);

export { projectsIndex };
export { projectRoutes };
