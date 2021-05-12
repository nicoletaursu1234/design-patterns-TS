import Schedule from "./Schedule.js";
import StateManager from "./StateManager.js";

export default () => {
  const schedule = new Schedule({
    discipline: "TMPS",
    teacher: "Ernest Bitca",
    classroom: "518",
    type: "online",
  });

  const stateManager = new StateManager(schedule);

  stateManager.backup();

  schedule.changeSchedule({
    discipline: "TMPS",
    teacher: "Ernest Bitca",
    classroom: "518",
    type: "offline",
  });
  stateManager.backup();

  schedule.changeSchedule({
    discipline: "TMPS",
    teacher: "Ernest Bitca",
    classroom: "501",
    type: "offline",
  });

  console.log("\n");
  stateManager.showHistory();

  console.log("\n");
  stateManager.undo();

  console.log("\n");
  stateManager.showHistory();
};
