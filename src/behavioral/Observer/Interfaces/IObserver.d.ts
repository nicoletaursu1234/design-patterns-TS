import ISchedule from "./ISchedule.d";

export default interface IObserver {
  update: (schedule: ISchedule) => void;
}
