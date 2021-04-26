import Mediator from "./Mediator.js";

export default class TimeSheet {
  mediator: Mediator;

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator = (mediator: Mediator): void => {
    this.mediator = mediator;
  };
}
