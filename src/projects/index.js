import Breakfast from "./Breakfast.vue";
import BreakfastCard from "./BreakfastCard.vue";
import LandingPage, { setProjects } from "./LandingPage.vue";

let projects = [
  // add an entry like this one when you make a new project page/card
  {
    name: "breakfast",
    card: BreakfastCard,
    route: {
      path: "/projects/breakfast",
      name: "project-breakfast",
      component: Breakfast
    }
  }
  // new entries here
];

// bind projects for the loading view
setProjects(projects);

const projectRoutes = projects.map(({ route }) => route);

projectRoutes.push({
  path: "/projects",
  name: "projects",
  component: LandingPage
});

export { projectRoutes };
