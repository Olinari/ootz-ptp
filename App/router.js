import { trip } from "./components/Trip/Trip.js";
import { topBar } from "./components//TopBar/TopBar.js";
import { splash } from "./components//splash/Splash.js";
import { where } from "./components//where/where.js";
import { when } from "./components//when/when.js";
import { filters } from "./components//filters/Filters.js";

const pages = {
  trip,
  topBar,
  splash,
  where,
  when,
  filters,
};

export const router = (page, state, setState) => {
  document.querySelector("#page") && document.querySelector("#page").remove();
  console.log(state);
  document.querySelector("body").setAttribute("page", page);
  document.querySelector("main").setAttribute("page", page);
  pages[page].apply(null, [state, setState]);
};
