function joinClassNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default joinClassNames;
