import { components } from "./components/components.js";
import { Controller } from "../Controller/Controller.js";
import { setState, State } from "./state.js";

new (function App() {
  const stateObj = State.apply(this, []);
  this.state = stateObj.state;
  this.events = stateObj.events;
  this.events.subscribe(`*`, (state) => {
    console.log("State Change", state);
  });
  components(this.state, setState, this.events, this);
})();
