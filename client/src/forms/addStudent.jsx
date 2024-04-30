import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent, getCourses } from "../services/ApiService";

const AddStudent = () => {
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };
    fetchCourses();
  }, []);

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

    // Prepare the data object including course_name for submission
    const preparedStudentData = {
      firstname: student.firstname,
      lastname: student.lastname,
      email: student.email,
      gender: student.gender,
      number: student.number,
      course_name: student.course_name,
    };

    try {
      const response = await createStudent(preparedStudentData);
      console.log("Student created:", response);
      navigate("/sidebar/students");
    } catch (error) {
      console.error("Error adding student:", error.message);
      alert(`Failed to add student. Error: ${error.message}`);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Student</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputFirstname"
              name="firstname"
              placeholder="Enter First Name"
              value={student.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputLastname"
              name="lastname"
              placeholder="Enter Last Name"
              value={student.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
              value={student.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-control rounded-0"
              id="inputGender"
              name="gender"
              value={student.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputNumber"
              name="number"
              placeholder="Enter Phone Number"
              value={student.number}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Course
            </label>
            <select
              className="form-control rounded-0"
              id="inputCourse"
              name="course"
              value={
                courses.find((c) => c.course_id === student.course_id)
                  ?.course_name || ""
              }
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
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
