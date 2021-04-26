import Discipline from "./Discipline.js";
import DisciplineType from "./DisciplineType.js";
import Speciality from "./Speciality.js";

let TI: Speciality = new Speciality("TI");
let RM: Speciality = new Speciality("RM");

let curs: DisciplineType = new DisciplineType("Curs");
let seminar: DisciplineType = new DisciplineType("Seminar");
let laborator: DisciplineType = new DisciplineType("Laborator");
let empty: DisciplineType = new DisciplineType("");

let TMPS: Discipline = new Discipline("TMPS");
let SDA: Discipline = new Discipline("SDA");
let PR: Discipline = new Discipline("PR");

const addDiscipline = (
  discipline: Discipline,
  curs: DisciplineType,
  seminar?: DisciplineType,
  laborator?: DisciplineType
) => {
  discipline.addComponent(curs);
  discipline.addComponent(seminar);
  discipline.addComponent(laborator);
};

export default () => {
  TI.addComponent(TMPS);
  addDiscipline(TMPS, curs, seminar, laborator);

  TI.addComponent(PR);
  addDiscipline(PR, curs, empty, laborator);

  RM.addComponent(SDA);
  addDiscipline(SDA, curs, null, laborator);

  TI.display();
  RM.display();
};
