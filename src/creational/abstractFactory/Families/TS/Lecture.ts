import ILecture from "../../Interfaces/ILecture.js";

export default class Lecture implements ILecture {
  public createLecture = (): string => {
    return "TS Lecture created";
  }
}