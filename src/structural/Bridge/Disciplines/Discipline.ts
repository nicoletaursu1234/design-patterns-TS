import IDiscipline from "../Interfaces/IDiscipline";

interface IDisciplineProps {
  name: string;
  disciplineType: string;
  teacher: string;
  time: string;
  classroom: string;
  additionalInfo: string;
}

export default class Discipline implements IDiscipline {
  props: IDisciplineProps;
  color: string;

  constructor(props: IDisciplineProps) {
    this.props = {
      name: props.name,
      disciplineType: props.disciplineType,
      teacher: props.teacher,
      time: props.time,
      classroom: props.classroom,
      additionalInfo: props.additionalInfo,
    };
  }

  getName = (): string => {
    return this.props.name;
  };

  getDisciplineType = (): string => {
    return this.props.disciplineType;
  };

  getTeacher = (): string => {
    return this.props.teacher;
  };

  getTime = (): string => {
    return this.props.time;
  };

  getClassRoom = (): string => {
    return this.props.classroom;
  };

  getAdditionalInfo = (): string => {
    return this.props.additionalInfo;
  };
}
