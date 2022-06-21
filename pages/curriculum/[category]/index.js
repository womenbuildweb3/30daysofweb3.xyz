import { useEffect, useState } from "react";
import Router from "next/router";
import getCurricContent from "../../../utils/curriculum";
import getAllPostIds from "../../../utils/getAllPostIds";
// import getCoursePaths from "../../../utils/getCoursePaths";

export default function Course({ category }) {
  useEffect(() => {
    if (category) Router.push(`${category}/0-overview`);
  }, [category]);

  return <></>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  // console.log(category);
  const curricData = getCurricContent(category, "0-overview");
  const paths = getAllPostIds();
  return {
    // redirect: {
    //   permanent: false,
    //   destination: `${category}/0-overview`,
    // },
    props: {
      curricData,
      paths,
      category,
    },
  };
}
