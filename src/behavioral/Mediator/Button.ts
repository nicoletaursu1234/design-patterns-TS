import TimeSheet from "./TimeSheet.js";

export default class Button extends TimeSheet {
  public draw = (color) => {
    console.log(`Color: ${color}`);
    this.mediator.dispatch(this, color);
  };
}
