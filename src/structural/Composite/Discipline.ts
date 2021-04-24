import UniversityComponent from "./UniversityComponent.js";

export default class Discipline extends UniversityComponent {
  components = []
  branch = ''

  constructor(name: string) {
    super(name)
  }

  print(level) {
    console.log(this.branch.repeat(level) + "-".repeat(level + 1) + this.name);

    this.components.forEach(element => {
      element.name == "" ? null : element.display(level + 1)
    })
  }

  addComponent = (component: UniversityComponent) => {
    this.components.push(component);
  }

  removeComponent = (component: UniversityComponent) => {
    delete this.components[this.components.indexOf(component)];
  }
}
