import { Actions } from "../App/Actions.js";

export const Controller = (state, setState) => {
  let panelInfo = {
    prototypeTitle: "Editor Workspace Template",
    prototypeDescription: `Editor workspace prototyping template`,
    panelDirection: "right",
  };

  const panelSections = [];
  initPrototypePanel(panelInfo, panelSections);

  document.querySelectorAll(`input`).forEach((input) => {
    input.addEventListener("click", (e) => {
      let key = e.target.value;
      Actions[key] && Actions[key].call(this, e.target.value);
    });
  });
};
