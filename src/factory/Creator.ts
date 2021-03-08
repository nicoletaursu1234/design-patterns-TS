import Discipline from "./Discipline.js";
import Seminar from "./Seminar.js";
import Lab from "./Lab.js";
import Lecture from "./Lecture.js";

interface IDisciplineCreator {
  create?: (type: string, props?: Object) => Discipline;
}

export default class DisciplineCreator implements IDisciplineCreator {
  static create = (type: string, props): Discipline => {
    const lowercaseType = type.toLowerCase();

    if (lowercaseType.includes("seminar")) {
      return new Seminar(props);
    } else if (lowercaseType.includes("lab")) {
      return new Lab(props);
    } else {
      return new Lecture(props);
    }
  };
}
