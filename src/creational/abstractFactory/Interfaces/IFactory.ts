import ILecture from './ILecture';
import ILab from './ILab';
import ISeminar from './ISeminar';

export default interface IFactory {
  createLecture: () => ILecture;
  createLab?: () => ILab;
  createSeminar?: () => ISeminar;
}