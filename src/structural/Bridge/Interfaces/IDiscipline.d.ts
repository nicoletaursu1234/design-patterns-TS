export default interface IDiscipline {
  color: string;
  props: {};
  getDisciplineType: () => string;
  getName: () => string;
  getTeacher: () => string;
  getTime: () => string;
  getClassRoom: () => string;
  getAdditionalInfo: () => string;
}
