import DisciplineDecorator from "./DisciplineDecorator.js";

export default class CustomDecorator extends DisciplineDecorator {
  constructor(discipline) {
    super(discipline);
  }

  getInfo = (): string => {
    return this.discipline.getInfo() + "\n\nGood luck!";
  };
}
