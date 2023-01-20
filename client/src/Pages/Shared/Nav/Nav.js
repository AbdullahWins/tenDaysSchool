import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://ten-days-school-server.vercel.app/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div>
        <h2>Course List</h2>
        {courses.map((course) => {
          return (
            <p key={course.id}>
              <Link to={`/courses/${course.id}`}>{course.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
