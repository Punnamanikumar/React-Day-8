import React from "react";
import { Link } from "react-router-dom";

export const students = [
  { id: 1, name: "Harshita" },
  { id: 2, name: "janaki" },
  { id: 3, name: "Lalsa" },
  { id: 4, name: "manikumar" },
  { id: 5, name: "Karthik" },
];
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {students.map((val, index) => {
          return (
            <div key={index}>
              {index + 1}.<Link to={`/student/${val.id}`}>{val.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
