import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getStudentById,
  updateStudent,
  getCourses,
} from "../services/ApiService";

const EditStudent = () => {
  const { studentId } = useParams(); // Get the student ID from the URL
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    number: "",
    course_id: "",
    course_name: "",
  });
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const fetchedCourses = await getCourses();
        setCourses(fetchedCourses);
        const fetchedStudent = await getStudentById(studentId);
        setStudent({
          firstname: fetchedStudent.firstname,
          lastname: fetchedStudent.lastname,
          email: fetchedStudent.email,
          gender: fetchedStudent.gender,
          number: fetchedStudent.number,
          course_id: fetchedStudent.course_id,
          course_name: fetchedStudent.course_name,
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "course") {
      const selectedCourse = courses.find(
        (course) => course.course_name === value
      );
      setStudent((prevStudent) => ({
        ...prevStudent,
        course_id: selectedCourse ? selectedCourse.course_id : "",
        course_name: selectedCourse ? selectedCourse.course_name : "",
      }));
    } else {
      setStudent((prevStudent) => ({
        ...prevStudent,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !student.firstname ||
      !student.lastname ||
      !student.email ||
      !student.gender ||
      !student.number ||
      !student.course_name
    ) {
      alert("Please fill in all fields, including selecting a course.");
      return;
    }

    try {
      await updateStudent(studentId, {
        firstname: student.firstname,
        lastname: student.lastname,
        email: student.email,
        gender: student.gender,
        number: student.number,
        course_name: student.course_name,
      });
      alert("Student details updated successfully!");
      navigate("/sidebar/students"); // Navigate after success
    } catch (error) {
      console.error("Error updating student:", error.message);
      alert(`Failed to update student. Error: ${error.message}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Student</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={student.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={student.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={student.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              value={student.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              value={student.number}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="course_name" className="form-label">
              Course
            </label>
            <select
              className="form-control"
              id="course_name"
              name="course_name"
              value={student.course_name}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course.course_id} value={course.course_name}>
                  {course.course_name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
