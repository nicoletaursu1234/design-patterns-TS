import IObserver from "./Interfaces/IObserver.d";
import ISchedule from "./Interfaces/ISchedule.d";

export default class Schedule implements ISchedule {
  public state = {
    studyType: "online",
  };

  observers: IObserver[] = [];

  public attach = (observer: IObserver): void => {
    const observerExists = this.observers.includes(observer);

    if (observerExists) {
      console.log(`${observer.constructor.name} is already attached`);
      return;
    }

    console.log(`${observer.constructor.name} successfully attached`);
    this.observers.push(observer);
  };

  public detach = (observer: IObserver) => {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      console.log(`${observer.constructor.name} doesn't exist`);
      return;
    }

    this.observers.splice(observerIndex, 1);
    console.log(`${observer.constructor.name} successfully detached`);
  };

  public notify(): void {
    console.log(`\nChange in study type detected. Notifying observers...`);

    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public changeStudyType = ({
    date,
    isOnline,
  }: {
    date: string;
    isOnline: boolean;
  }) => {
    const studyType = isOnline ? "online" : "offline";

    this.state.studyType = studyType;
    console.log(`During ${date}, the lessons will be ${studyType}`);

    this.notify();

  };
}
