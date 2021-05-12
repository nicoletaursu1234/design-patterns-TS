import DisciplineGroup from "./DisciplineGroup.js";
import GroupByName from "./GroupByName.js";
import GroupByTeacher from "./GroupByTeacher.js";

export default () => {
  const disciplines = [
    {
      name: "TMPS",
      teacher: "Bitca Ernest",
      classroom: "518",
    },
    {
      name: "TMPS",
      teacher: "Bitca Ernest",
      classroom: "501",
    },
    {
      name: "PR",
      teacher: "Buldumac Oleg",
      classroom: "518",
    },
    {
      name: "PR",
      teacher: "Zgureanu Aureliu",
      classroom: "online",
    },
    {
      name: "APA",
      teacher: "Buldumac Oleg",
      classroom: "501",
    },
  ];

  const discipline = new DisciplineGroup(new GroupByName("PR"), disciplines);

  console.log("Grouping by name...");
  discipline.groupDisciplines();

  console.log("Grouping by teacher...");
  discipline.setType(new GroupByTeacher("Bitca Ernest"));

  discipline.groupDisciplines();
};
