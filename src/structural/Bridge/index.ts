import Lab from "./Disciplines/Lab.js";
import Seminar from "./Disciplines/Seminar.js";
import DisplayDetailed from "./Views/DisplayDetailed.js";
import DisplayShort from "./Views/DisplayShort.js";

export default () => {
  const TMPS: Seminar = new Seminar({
    name: "TMPS",
    disciplineType: "Seminar",
    teacher: "Bitca Ernest",
    time: "8:00",
    classroom: "518",
    additionalInfo: "Tehnici și Mecanisme de Proiectare Software"
  })

  const PR: Lab = new Lab({
    name: "PR",
    disciplineType: "Laborator",
    teacher: "Buldumac Oleg",
    time: "9:45",
    classroom: "518",
    additionalInfo: "Programarea în Rețea"
  })

  const displayDetailed = new DisplayDetailed(TMPS)
  const displayShort = new DisplayShort(PR);

  //console.log('TMPS', TMPS)
  console.log(displayShort.generate())
  console.log(displayDetailed.generate())

};

