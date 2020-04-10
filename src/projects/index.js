import Breakfast from "./Breakfast.vue";
import BreakfastCard from "./BreakfastCard.vue";
import LandingPage, { setProjects } from "./LandingPage.vue";

let projects = [
  {
    name: "breakfast",
    card: BreakfastCard,
    route: {
      path: "/projects/breakfast",
      name: "project-breakfast",
      component: Breakfast
    }
  }
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
