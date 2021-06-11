import { topBar } from "./TopBar/TopBar.js";
import { home } from "./Home/Home.js";

export const components = (state, setState) => {
  topBar(state, setState);
  home(state, setState);
};
