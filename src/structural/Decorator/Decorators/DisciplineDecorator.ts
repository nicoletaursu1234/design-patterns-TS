import IDiscipline from "../IDiscipline.js";

export default abstract class DisciplineDecorator implements IDiscipline {
  discipline: IDiscipline;

  constructor(discipline) {
    this.discipline = discipline;
  }

  abstract getInfo: () => string;
}
