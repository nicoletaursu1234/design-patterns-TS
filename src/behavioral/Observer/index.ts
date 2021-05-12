import Discipline from "./Discipline.js";
import Schedule from "./Schedule.js";
import Email from "./Email.js";

export default () => {
  const schedule = new Schedule();

  const TMPS = new Discipline();
  const email = new Email();

  schedule.attach(TMPS);
  schedule.attach(email);

  schedule.changeStudyType({ date: "14.04 - 17.05", isOnline: true });
  schedule.detach(email);

  schedule.changeStudyType({ date: "17.05 - 22.05", isOnline: false });
};
