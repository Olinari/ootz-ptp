import { topBar } from "./TopBar/TopBar.js";
import { home } from "./Home/Home.js";
import { where } from "./where/where.js";
import { when } from "./when/when.js";
import { trip } from "./Trip/Trip.js";
import { router } from "../router.js";

export const components = (state, setState) => {
  topBar(state, setState);
  home(state, setState);
  trip(state, setState);
  where(state, setState);
  when(state, setState);
};
