import UniversityComponent from './UniversityComponent.js';

export default class Speciality extends UniversityComponent{
  components = []

  constructor(name: string) {
    super(name)
  }

  display = (level = 0) => {
    console.log(this.name)

    this.components.forEach(element => {
      element.display(level + 1)
    })
  }

  addComponent = (component: UniversityComponent) => {
    this.components.push(component);
  }

  removeComponent = (component: UniversityComponent) => {
    delete this.components[this.components.indexOf(component)];
  }
}