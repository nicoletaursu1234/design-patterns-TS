import Snapshot from "./ISnapshot.d";
import ScheduleSnapshot from "./ScheduleSnapshot.js";

export default class Schedule {
  private state: Object;

  constructor(state: Object) {
    this.state = state;
    console.log(`Schedule: Initial state:`, state);
  }

  public changeSchedule = ({ discipline, teacher, classroom, type }) => {
    this.state = {
      discipline,
      teacher,
      classroom,
      type,
    };

    console.log(`Schedule updated.`);
  };

  public save = (): Snapshot => {
    return new ScheduleSnapshot(this.state);
  };

  public restore = (snapshot: Snapshot): void => {
    this.state = snapshot.getState();

    console.log(`Restored state to:`, this.state);
  };
}