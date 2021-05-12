import Snapshot from "./ISnapshot.js";
import Schedule from "./Schedule.js";

export default class StateManager {
  private snapshots: Snapshot[] = [];

  private schedule: Schedule;

  constructor(schedule: Schedule) {
    this.schedule = schedule;
  }

  public backup = (): void => {
    this.snapshots.push(this.schedule.save());
    console.log(`State manager backed up state successfully.`);
  };

  public undo = (): void => {
    if (!this.snapshots.length) {
      return;
    }

    const snapshot = this.snapshots.pop();

    this.schedule.restore(snapshot);
    console.log(`State manager restored state to:`, snapshot.getDate());
  };

  public showHistory = (): void => {
    console.log("Snapshot history:\n");
    this.snapshots.map((snapshot, index) => {
      console.log(
        `${index + 1}\n`,
        snapshot.getDate(),
        `\n`,
        snapshot.getState()
      );
    });
  };
}
