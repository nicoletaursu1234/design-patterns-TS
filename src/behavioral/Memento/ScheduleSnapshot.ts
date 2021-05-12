import Snapshot from "./ISnapshot.js";

export default class ScheduleSnapshot implements Snapshot {
  private state: Object;
  private date: String;

  constructor(state: Object) {
    this.state = state;
    this.date = new Date().toISOString();
  }

  public getState = (): Object => {
    return this.state;
  };

  public getDate = (): String => {
    return this.date;
  };
}