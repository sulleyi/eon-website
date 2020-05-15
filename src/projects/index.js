import Breakfast from "./Breakfast.vue";

let projectsIndex = [
  // add an entry like this one when you make a new project page/card
  {
    name: "breakfast",
    route: {
      path: "/projects/breakfast",
      name: "project-breakfast",
      component: Breakfast
    },
    bio: "Breakfast is tasty. I like to eat bacon eggs and cereal. I like juice too but it has too much sugar."
  },
  // new entries here
  {
    name: "speaker series",
    route: {
      path: "/speaker/series",
      name: "project-speaker-series",
    },
    bio: "i like listening to people talk"

  }
];

// bind projects for the loading view
//setProjects(projectsIndex);

const projectRoutes = projectsIndex.map(({ route }) => route);

export { projectsIndex };
export { projectRoutes };
