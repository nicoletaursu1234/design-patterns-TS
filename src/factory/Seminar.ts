import Discipline from './Discipline.js';

export default class Seminar implements Discipline {
  props: Object;

  constructor(props) {
    this.props = props;
  }
}