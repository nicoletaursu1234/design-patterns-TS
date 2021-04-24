import Discipline from "./Discipline.js";
import DisciplineDecorator from "./Decorators/DisciplineDecorator.js";
import IDiscipline from "./IDiscipline.d";
import LectureDecorator from "./Decorators/LectureDecorator.js";
import SeminarDecorator from "./Decorators/SeminarDecorator.js";
import LabDecorator from "./Decorators/LabDecorator.js";
import CustomDecorator from "./Decorators/CustomDecorator.js";

const addDiscipline = (
  discipline: IDiscipline,
  seminar: boolean,
  lab: boolean
) => {
  let newDiscipline = new LectureDecorator(discipline);

  if (seminar) {
    newDiscipline = new SeminarDecorator(newDiscipline);
  }
  if (lab) {
    newDiscipline = new LabDecorator(newDiscipline);
  }

  newDiscipline = new CustomDecorator(newDiscipline);

  return newDiscipline;
};

export default () => {
  const TMPS = new Discipline();
  const TS = new Discipline();

  console.log('TMPS:\n', addDiscipline(TMPS, true, true).getInfo());

  console.log('TS:\n', addDiscipline(TS, false, true).getInfo())
};

