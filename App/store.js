import { Actions } from "./actions.js";

export function State(
  state = {
    myLocation: [32.11159231031344, 35.17374926976709],
    when: moment(new Date().now).locale("il").format("MMMM DD"),
    dataLocation: "center",
    categories: [],
  }
) {
  class PubSub {
    constructor() {
      this.events = {};
    }

    subscribe(event, callback) {
      if (!this.events.hasOwnProperty(event)) {
        return;
      }
      return this.events[event].push(callback);
    }

    publish(event, data = {}) {
      this.events = { ...this.events, event: { Name: event, type: data } };
      /*   console.log(`%c Event:`, "background: #222; color: #ffbbbb");
      console.log(` Name: %c ${event}`, "background: #222; color: #9484F7");
      console.log(` Type: %c ${data}`, "background: #222; color: #9484F7"); */
      return this.events;
    }
  }

  class Storeducer {
    constructor(state) {
      this.events = new PubSub();
      this.state = new Proxy(state || {}, {
        get: (state, key) => {
          return state[key];
        },
        set: (state, key, value) => {
          state[key] = value;
          /*   console.log(
            `%c State Change:`,
            "background: #222; color: #00cccc",
            state
          ); */
          this.events.publish(key, value);

          Actions[key] && Actions[key].call(this, value);

          return true;
        },

        subscribe(event, callback) {
          this.events.subscribe(event, callback);
        },
        destroyStateItem(trust, state = null, item) {
          if (state && trust) {
            state[item] = undefined;
          }
        },
      });
    }

    syncState() {
      this.events.publish("stateChange", this.state);
    }
  }
  return new Storeducer(state);
}

export const setState = (state, item, val) => {
  state[item] = val;
  return state;
};
