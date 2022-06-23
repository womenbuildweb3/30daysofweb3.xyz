import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Course() {
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (category) router.push(`${category}/0-overview`);
  }, [category]);

  return <></>;
}
