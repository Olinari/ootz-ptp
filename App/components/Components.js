import { topBar } from "./TopBar/TopBar.js";

import { where } from "./where/where.js";
import { when } from "./when/when.js";

export const components = (state, setState) => {
  topBar(state, setState);
  //home(state, setState);

  where(state, setState);
  when(state, setState);
};
