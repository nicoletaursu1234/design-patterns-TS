export default abstract class UniversityComponent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display = () => {};
}
