import { useEffect, useState } from "react";
import Router from "next/router";
import CurricLayout from "../../components/CurricLayout";

const Curriculum = () => {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPreferedColorScheme("dark");
    }
    Router.push("curriculum/0-getting-started/0-overview");
  }, []);

  return <></>;
};
export const CurriculumLayout = (page) => <CurricLayout>{page}</CurricLayout>;

export default Curriculum;
