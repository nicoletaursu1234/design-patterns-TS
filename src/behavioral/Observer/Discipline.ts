import IObserver from "./Interfaces/IObserver";
import Schedule from "./Schedule";

export default class Discipline implements IObserver {
  public update = (schedule: Schedule): void => {
    console.log(`Study type updated. Discipline will be ${schedule.state.studyType}.`);
  };
}
