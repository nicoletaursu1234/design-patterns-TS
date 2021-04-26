import TimeSheet from "./TimeSheet.js";

export default class Text extends TimeSheet {
  public print = (text) => {
    console.log(text);
    this.mediator.dispatch(this, text);
  };
}
