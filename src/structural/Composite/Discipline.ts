import UniversityComponent from "./UniversityComponent.js";

export default class Discipline extends UniversityComponent {
  components = []

  constructor(name: string) {
    super(name)
  }

  addComponent = (component: UniversityComponent) => {
    this.components.push(component);
  }

  removeComponent = (component: UniversityComponent) => {
    delete this.components[this.components.indexOf(component)];
  }
}
