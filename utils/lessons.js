const lessons = [
  {
    id: 0,
    value: "Get Started",
    path: "0-get-started",
  },
  {
    id: 1,
    value: "Introduction to Web3",
    path: "1-introduction",
  },
  {
    id: 2,
    value: "Introduction to Smart Contracts",
    path: "2-smart-contracts",
  },
  {
    id: 3,
    value: "Introduction to Subgraphs",
    path: "3-subgraphs",
  },
  {
    id: 4,
    value: "Connecting The Frontend",
    path: "4-frontend",
  },
  {
    id: 5,
    value: "Finishing Touches",
    path: "5-finishing-touches",
  },
];

export function getAllLessons() {
  return lessons;
}

export function getNextLesson(id, paths) {
  let next;
  let num = id.match(/\d/g);
  num = num[0];

  for (let i = 0; i < paths.length; i++) {
    if (paths[i].params.id === id) {
      next = paths[i + 1]?.params.id;
      if (next) {
        if (next.match(/\d/g)[0] !== num) {
            num = parseInt(num)+1
            if(num < 6){
                return lessons[num].path;
            }
        } else {
          return next;
        }
      }
    }
  }

  return "0-get-started";
}
