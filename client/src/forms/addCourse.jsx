import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createCourse,
  createClass,
  createTeacher,
} from "../services/ApiService";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    course_name: "",
    class_duration: "",
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    number: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for all data to ensure it's filled in
    if (
      !formData.course_name ||
      !formData.class_duration ||
      !formData.title || // Ensure title is filled in
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.number
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Create the course
      const courseResponse = await createCourse({
        course_name: formData.course_name,
      });
      console.log("Course created:", courseResponse);

      // Create the teacher
      const teacherResponse = await createTeacher({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        number: formData.number,
        title: formData.title, // Include title in the request
      });
      console.log("Teacher created:", teacherResponse);

      // Create the class
      // Create the class
      // Update the createClass function call to pass the correct keys
      const classResponse = await createClass({
        courseName: formData.course_name, // Use formData.course_name instead of formData.courseName
        teacherName: formData.title, // Use formData.title instead of formData.teacherName
        email: formData.email,
        duration: formData.class_duration, // Use formData.class_duration instead of formData.duration
      });

      console.log("Course created:", courseResponse);
      console.log("Teacher created:", teacherResponse);
      console.log("Class created:", classResponse);

      // Navigate to the appropriate route after success
      navigate("/sidebar/course");
    } catch (error) {
      console.error("Error adding course:", error.message);
      alert(`Failed to add course. Error: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Course</h3>
        <form onSubmit={handleSubmit}>
          {/* Course form */}
          <div className="mb-3">
            <label htmlFor="course_name" className="form-label">
              Course Name
            </label>
            <input
              type="text"
              className="form-control"
              id="course_name"
              name="course_name"
              placeholder="Enter course name"
              value={formData.course_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="class_duration" className="form-label">
              Class Duration
            </label>
            <input
              type="text"
              className="form-control"
              id="class_duration"
              name="class_duration"
              placeholder="Enter class duration"
              value={formData.class_duration}
              onChange={handleChange}
            />
          </div>

          {/* Teacher form */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Teacher Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter teacher title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              Teacher First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="Enter teacher first name"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Teacher Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Enter teacher last name"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Teacher Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter teacher email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Teacher Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              placeholder="Enter teacher phone number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
