import IDiscipline from "../Interfaces/IDiscipline";

export default abstract class Display {
  discipline: IDiscipline;
  
  constructor(discipline: IDiscipline){
    this.discipline = discipline
  }

  abstract generate(): string;
}