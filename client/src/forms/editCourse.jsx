import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById, updateCourse } from "../services/ApiService";

const EditCourse = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    course_name: "",
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    const fetchCourseData = async () => {
      setLoading(true);
      setError(null);
      try {
        const course = await getCourseById(courseId);
        setFormData({
          course_name: course.course_name,
          // You can set teacher details if available in the course data
          title: course.teacher_title || "",
          firstname: course.teacher_firstname || "",
          lastname: course.teacher_lastname || "",
          email: course.teacher_email || "",
          number: course.teacher_number || "",
        });
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Failed to fetch course data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCourse(courseId, {
        course_name: formData.course_name,
        // Include teacher details in the update request
        teacher_title: formData.title,
        teacher_firstname: formData.firstname,
        teacher_lastname: formData.lastname,
        teacher_email: formData.email,
        teacher_number: formData.number,
      });
      alert("Course details updated successfully!");
      navigate("/sidebar/course");
    } catch (error) {
      console.error("Error updating course:", error);
      setError("Failed to update course details. Please try again later.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Course</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="course_name" className="form-label">
              Course Name
            </label>
            <input
              type="text"
              className="form-control"
              id="course_name"
              name="course_name"
              value={formData.course_name}
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
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
