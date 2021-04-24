import Discipline from './Discipline.js';

export default class Lab implements Discipline {
  props: Object;

  constructor(props) {
    this.props = props;
  }
}