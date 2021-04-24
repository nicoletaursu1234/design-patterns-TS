import DisciplineDecorator from "./DisciplineDecorator.js";

export default class SeminarDecorator extends DisciplineDecorator {
  constructor(discipline) {
    super(discipline);
  }

  getInfo = (): string => {
    return this.discipline.getInfo() + "\nThis discipline includes Seminars";
  };
}
