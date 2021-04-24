import UniversityComponent from "./UniversityComponent.js";

export default class LessonType extends UniversityComponent {
  constructor(name: string) {
    super(name);
  }

  branch: string = " ";

  public Display(level) {
    console.log(this.branch.repeat(level) + "-".repeat(level + 1) + this.name);
  }
}
