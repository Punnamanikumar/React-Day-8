import React from "react";
import { useParams } from "react-router-dom";
import { students } from "./Components/Home";

const Student = () => {
  const params = useParams();
  const stu = students.filter((val) => val.id === Number(params.id));
  console.log(params);
  return (
    <div>
      This is Student Page.
      <h1>Name: {stu.map((val, index) => val.name)}</h1>
    </div>
  );
};

export default Student;
