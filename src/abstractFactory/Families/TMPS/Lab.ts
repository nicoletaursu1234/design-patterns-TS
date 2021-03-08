import ILab from "../../Interfaces/ILab.js";

export default class Lab implements ILab {
  public createLab = (): string => {
    return "TMPS Lab created";
  }
}
