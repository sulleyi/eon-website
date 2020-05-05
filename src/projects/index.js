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
    bio: "Breakfast is tasty"
  }
  // new entries here
];

// bind projects for the loading view
//setProjects(projectsIndex);

const projectRoutes = projectsIndex.map(({ route }) => route);

export { projectsIndex };
export { projectRoutes };
