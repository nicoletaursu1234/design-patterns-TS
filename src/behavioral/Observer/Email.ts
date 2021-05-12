import IObserver from "./Interfaces/IObserver";

export default class Email implements IObserver {
  public update = (): void => {
    console.log(`Sending emails to students and teachers...`);
  };
}
