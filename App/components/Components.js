import { topBar } from "./TopBar/TopBar.js";
import { home } from "./Home/Home.js";
import { trip } from "./Trip/Trip.js";

export const components = (state, setState) => {
  topBar(state, setState);
  home(state, setState);
  trip(state, setState);
};
