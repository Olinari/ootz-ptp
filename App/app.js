import { router } from "./router.js";

import { setState, State } from "./state.js";

new (function App() {
  const stateObj = State.apply(this, []);
  this.state = stateObj.state;
  this.events = stateObj.events;
  this.events.subscribe(`*`, (state) => {
    console.log("State Change", state);
  });

  router("splash", this.state, setState);
})();
