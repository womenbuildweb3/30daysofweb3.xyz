import { useEffect, useState } from "react";
import Router from "next/router";

const Curriculum = () => {
  useEffect(() => {
    Router.push("curriculum/0-getting-started/0-overview");
  }, []);

  return <></>;
};

export default Curriculum;
