import Breakfast from "./Breakfast.vue";

let projectsIndex = [
  // add an entry like this one when you make a new project page/card
  {
    name: "Early Morning Breakfast",
    route: {
      path: "/projects/breakfast",
      name: "project-breakfast",
      component: Breakfast
    },
    bio: "Breakfast is tasty. I like to eat bacon eggs and cereal. I like juice too but it has too much sugar."
  },

  {
    name: "Speaker Series: David Dussault ‘00",
    route: {
      path: "projects/speaker-series/david-dussault",
      name: "project-speaker-series",
    },
    bio: "Inaugural Speaker Series event with Union Alumna who CoFounded and is the partner of Rosendale Venture Capital and Private Equity and the Founder and CEO of SP1ndle Industries."

  },

  {
    name: "Design Thinking Workshop",
    route: {
      path: "/speaker/series",
      name: "project-speaker-series",
    },
    bio: "i like listening to people talk"

  },

  {
    name: "Schenectady ARC",
    route: {
      path: "/speaker/series",
      name: "project-speaker-series",
    },
    bio: "i like listening to people talk"

  },

  {
    name: "Newsletter",
    route: {
      path: "/speaker/series",
      name: "project-speaker-series",
    },
    bio: "i like listening to people talk"

  },

  {
    name: "Website",
    route: {
      path: "/speaker/series",
      name: "project-speaker-series",
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
