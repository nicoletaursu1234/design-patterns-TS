import UniversityComponent from "./UniversityComponent.js";

export default class Speciality extends UniversityComponent {
  components = [];

  constructor(name: string) {
    super(name);
  }

  public display = () => {
    console.log(this.name, ":\n");

    this.components.forEach((element) => {
      console.log(element.name);
      console.log(element.components, "\n");
    });
  };

  public addComponent = (component: UniversityComponent) => {
    this.components.push(component);
  };

  public removeComponent = (component: UniversityComponent) => {
    delete this.components[this.components.indexOf(component)];
  };
}
