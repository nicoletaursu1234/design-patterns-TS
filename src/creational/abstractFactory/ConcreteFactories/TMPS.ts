import IFactory from "../Interfaces/IFactory";

import ILab from "../Interfaces/ILab.js";
import ILecture from "../Interfaces/ILecture.js";
import ISeminar from "../Interfaces/ISeminar.js";

import Lab from "../Families/TMPS/Lab.js";
import Lecture from "../Families/TMPS/Lecture.js";
import Seminar from "../Families/TMPS/Seminar.js";

export default class TMPSFactory implements IFactory {
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
