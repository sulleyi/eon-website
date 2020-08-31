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
      path: "/projects/speaker-series-david-dussault",
      name: "project-speaker-series",
    },
    bio: "Inaugural Speaker Series event with Union Alumna who CoFounded and is the partner of Rosendale Venture Capital and Private Equity and the Founder and CEO of SP1ndle Industries."

  },

  {
    name: "Design Thinking Workshop",
    route: {
      path: "/projects/design-thinking-workshop",
      name: "project-design-thinking-workshop",
    },
    bio: "Create ideas to attack opportunities in the world that you care about."

  },

  {
    name: "Schenectady ARC",
    route: {
      path: "/projects/schenectady-arc",
      name: "project-schenectady-arc",
    },
    bio: "i like listening to people talk"

  },

  {
    name: "Newsletter",
    route: {
      path: "/projects/newsletter",
      name: "project-newsletter",
    },
    bio: "i like listening to people talk"

  },

  {
    name: "Website",
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
