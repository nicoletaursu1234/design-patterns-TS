import Discipline from "./IDiscipline.d";

export default interface Strategy {
  condition: string;
  group: (disciplines: Discipline[]) => Discipline[];
}
