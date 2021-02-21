import Discipline from './Discipline.js';

export default class Lecture implements Discipline {
  props: Object;

  constructor(props) {
    this.props = props;
  }
}