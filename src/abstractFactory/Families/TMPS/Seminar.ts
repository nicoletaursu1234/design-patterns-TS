import ISeminar from "../../Interfaces/ISeminar.js";

export default class Seminar implements ISeminar {
  public createSeminar = (): string => {
    return "TMPS Seminar created";
  }
}