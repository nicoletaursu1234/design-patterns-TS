import ISeminar from "../../Interfaces/ISeminar.js";

export default class Seminar implements ISeminar {
  public createSeminar = (): string => {
    return "TS Seminar created";
  }
}