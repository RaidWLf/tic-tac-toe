import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";

const Icons = ({ value = "xyz" }) => {
  console.log(value);
  switch (value) {
    case "cross":
      return <FontAwesomeIcon icon={faXmark} size="2xl" />;

    case "circle":
      return <FontAwesomeIcon icon={faCircle} size="2xl" />;

    default:
      return <FontAwesomeIcon icon={faPen} size="2xl" />;
  }
};

export default Icons;
