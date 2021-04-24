import DisciplineDecorator from "./DisciplineDecorator.js";

export default class LabDecorator extends DisciplineDecorator {
  constructor(discipline) {
    super(discipline);
  }

  getInfo = () => {
    return this.discipline.getInfo() + "\nThis discipline includes Labs";
  };
}
