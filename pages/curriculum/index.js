import React, { useEffect, useState } from "react";
import Router from "next/router";

export default function Course() {
  useEffect(() => {
    Router.push("curriculum/0-getting-started/0-overview");
  }, []);

  return <></>;
}

// export async function getStaticProps() {
//   return {
//     redirect: {
//       permanent: false,
//       destination: `curriculum/0-getting-started/0-overview`,
//     },
//   };
// }
