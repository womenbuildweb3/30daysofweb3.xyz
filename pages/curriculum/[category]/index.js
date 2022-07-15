import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getCoursePaths from "../../../utils/getCoursePaths";
import pathsToNav from "../../../utils/pathsToNav";

export default function Course({navigation}) {
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    
    if (category) {
      for(let i = 0; i < navigation.length; i++){
        if(navigation[i].name === category){
          router.push(`${category}/${navigation[i].children[0].name}`)
          break
        }
      }
    };
  
  }, [category, router, navigation]);

  return <></>;
}

export async function getServerSideProps({ params, locale }) {
  const { category, subCategory } = params;
  // get content based on locale
  const paths = getCoursePaths(locale);
  const navigation = pathsToNav(paths, locale)

  return {
    props: {
      navigation
    },
  };
}