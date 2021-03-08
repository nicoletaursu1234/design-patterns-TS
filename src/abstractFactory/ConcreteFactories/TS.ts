import IFactory from "../Interfaces/IFactory.js";

import ILab from "../Interfaces/ILab.js";
import ILecture from "../Interfaces/ILecture.js";
import ISeminar from "../Interfaces/ISeminar.js";

import Lab from "../Families/TS/Lab.js";
import Lecture from "../Families/TS/Lecture.js";
import Seminar from "../Families/TS/Seminar.js";

export default class TSFactory implements IFactory {
  public createLecture = (): ILecture => {
    return new Lecture();
  };

  public createLab = (): ILab => {
    return new Lab();
  };

  public createSeminar = (): ISeminar => {
    return new Seminar();
  };
}
