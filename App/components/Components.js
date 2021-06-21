import { topBar } from "./TopBar/TopBar.js";
import { splash } from "./splash/Splash.js";
import { where } from "./where/where.js";
import { when } from "./when/when.js";
import { trip } from "./Trip/Trip.js";
import { filters } from "./filters/Filters.js";
export const components = (state, setState) => {
  topBar(state, setState);
  //home(state, setState);
  trip(state, setState);
  where(state, setState);
  when(state, setState);
  filters(state, setState);
  splash(state, setState);
};
