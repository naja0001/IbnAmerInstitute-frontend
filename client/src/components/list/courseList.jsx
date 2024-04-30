import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getCourses,
  getClasses,
  getTeachers,
  deleteCourse,
  updateCourse,
} from "../../services/ApiService";
import "./../../Assets/styles/styles.css";

const CoursesWithClasses = () => {
  const [courses, setCourses] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const coursesData = await getCourses();
        const classesData = await getClasses();
        const teachersData = await getTeachers();
        setCourses(coursesData);
        setClasses(classesData);
        setTeachers(teachersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteCourse = async (courseId) => {
    setLoading(true);
    try {
      await deleteCourse(courseId);
      setCourses(courses.filter((course) => course.course_id !== courseId));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleCourse = (courseId) => {
    setSelectedCourseId(selectedCourseId === courseId ? null : courseId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Course List</h3>
      </div>
      <Link to="/sidebar" className="btn1 btn-primary">
        Back
      </Link>
      <Link to="/sidebar/add_course" className="btn1 btn-success">
        Add Course
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.course_id}>
                <td>
                  <button
                    className="btn1"
                    onClick={() => toggleCourse(course.course_id)}
                  >
                    {course.course_name}
                  </button>
                </td>
                <td>
                  <button
                    className="btn1 btn-danger"
                    onClick={() => handleDeleteCourse(course.course_id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit-course/${course.course_id}`}
                    className="btn1 btn-primary btn-sm me-2"
                  >
                    Edit
                  </Link>

                  {selectedCourseId === course.course_id && (
                    <div>
                      <ul>
                        {classes
                          .filter((cls) => cls.course_id === course.course_id)
                          .map((cls) => {
                            const teacher = teachers.find(
                              (t) => t.teacher_id === cls.teacher_id
                            );
                            return (
                              <li key={cls.class_id}>
                                Class Duration: {cls.duration}
                                <br />
                                Teacher:{" "}
                                {teacher
                                  ? `${teacher.title} ${teacher.firstname} ${teacher.lastname}`
                                  : "Unknown"}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesWithClasses;
