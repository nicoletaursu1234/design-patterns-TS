import IObserver from "./IObserver.d";

export default interface ISchedule {
  attach(observer: IObserver): void;

  detach(observer: IObserver): void;

  notify(): void;
}
