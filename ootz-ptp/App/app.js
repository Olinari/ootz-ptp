import { components } from "./components/Components.js";

import { setState, State } from "./State.js";

new (function App() {
  const stateObj = State.apply(this, []);
  this.state = stateObj.state;
  this.events = stateObj.events;
  this.events.subscribe(`*`, (state) => {
    console.log("State Change", state);
  });
  components(this.state, setState, this.events, this);
})();
