import DisciplineCreator from "./Creator.js";

export default () => {
  const lab = new DisciplineCreator().create("lab", {
    name: "TMPS",
    classroom: "518",
    teacher: "Bitca Ernest",
    nrHomeworks: "4",
  });

  const seminar = new DisciplineCreator().create("seminar", {
    name: "TS",
    classroom: "405",
    teacher: "Prisacaru Adrian",
  })

  console.log(lab);
  console.log(seminar);
};
