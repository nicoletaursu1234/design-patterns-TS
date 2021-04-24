import Display from './Display.js'

export default class DisplayDetailed extends Display {
  constructor(discipline) {
    super(discipline)
  }

  generate(): string {
    return `
      Discipline: ${this.discipline.getName()}, ${this.discipline.getDisciplineType()}
      Teacher: ${this.discipline.getTeacher()}
      Time: ${this.discipline.getTime()}
      Classroom: ${this.discipline.getClassRoom()}
      Additional Information: ${this.discipline.getAdditionalInfo()}
    `
  }
}