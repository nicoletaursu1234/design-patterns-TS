import Discipline from "./Interfaces/IDiscipline.d";
import Strategy from "./Interfaces/IStrategy.d";

export default class GroupByName implements Strategy {
  condition: string;

  constructor(condition: string) {
    this.condition = condition;
  }

  public group = (disciplines: Discipline[]): Discipline[] => {
    return disciplines.filter(
      (discipline) => discipline.name === this.condition
    );
  };
}
