import DisciplineCreator from "./Creator.js";

export default () => {
  const lab = DisciplineCreator.create("lab", {
    name: "TMPS",
    classroom: "518",
    teacher: "Bitca Ernest",
    nrHomeworks: "4",
  });

  const seminar = DisciplineCreator.create("seminar", {
    name: "TS",
    classroom: "405",
    teacher: "Prisacaru Adrian",
  })

  console.log(lab);
  console.log(seminar);
};
