import { topBar } from "./TopBar/TopBar.js";

import { where } from "./where/where.js";
import { when } from "./when/when.js";
import { trip } from "./Trip/Trip.js";
import { splash } from "./Splash/Splash.js";

export const components = (state, setState) => {
  topBar(state, setState);
  //home(state, setState);
  trip(state, setState);
  where(state, setState);
  when(state, setState);
  splash(state, setState);
};
