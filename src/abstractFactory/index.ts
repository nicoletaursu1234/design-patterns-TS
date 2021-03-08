import TMPSFactory from "./ConcreteFactories/TMPS.js";
import TSFactory from "./ConcreteFactories/TS.js";
import IFactory from "./Interfaces/IFactory.js";

import Lecture from "./Families/TMPS/Lecture.js";

const createDiscipline = (factory: IFactory) => {
  const lecture = factory.createLecture();
  const seminar = factory.createSeminar();
  const lab = factory.createLab();

  console.log(lecture.createLecture());
  console.log(seminar.createSeminar());

  if (factory instanceof TMPSFactory) {
    console.log(lab.createLab());
  }
};

export default () => {
  createDiscipline(new TMPSFactory());

  createDiscipline(new TSFactory());
};
