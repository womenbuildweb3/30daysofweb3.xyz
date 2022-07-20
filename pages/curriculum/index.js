import { useEffect } from "react";
import Router from "next/router";
import getCoursePaths from "../../utils/getCoursePaths";

const Curriculum = ({paths}) => {
  useEffect(() => {
      Router.push(`curriculum/${paths[0].category}/${paths[0].subCategory}`);
  }, [paths]);

  return <></>;
};

export default Curriculum;

export async function getServerSideProps({ locale }) {
  const paths = getCoursePaths(locale);
  return {
    props: {
      paths,
    },
  };
}