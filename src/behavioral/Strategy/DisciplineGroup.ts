import Discipline from "./Interfaces/IDiscipline.d";
import Strategy from "./Interfaces/IStrategy.d";

export default class DisciplineGroup {
  private type: Strategy;
  private disciplines: Discipline[];
  private condition: Strategy;

  constructor(type: Strategy, disciplines: Discipline[]) {
    this.type = type;
    this.disciplines = disciplines;
  }

  public setType = (type: Strategy) => {
    this.type = type;
  };

  public groupDisciplines = () => {
    const res = this.type.group(this.disciplines);

    console.log(res);
  };
}
