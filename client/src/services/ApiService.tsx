import { API_URL } from "../../settings.js";

const BASE_URL = "https://monkfish-app-3d8pn.ondigitalocean.app";

export const STUDENTS_URL = BASE_URL + "/students";

export const LOGIN_URL = API_URL + "/auth/login";
export const TEACHERS_URL = BASE_URL + "/teachers";
export const COURSES_URL = BASE_URL + "/courses";
export const CLASSES_URL = BASE_URL + "/classes";
export const STUDENT_CLASSES_URL = BASE_URL + "/student-classes";
export const QURAN_PROGRESS_URL = BASE_URL + "/quranProgress";
export const HOMEWORK_URL = BASE_URL + "/homework";
export const ATTENDANCE_URL = BASE_URL + "/attendance";

export interface Student {
  student_id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: "Male" | "Female";
  number: string;
  course_id: null;
}

export interface Teacher {
  teacher_id: number;
  firstname: string;
  lastname: string;
  email: string;
  number: string;
  title: string;
}

export interface Course {
  course_id: null;
  course_name: string;
}

export interface Class {
  class_id: number;
  course_id: number;
  teacher_id: number;
  duration: string;
}

export interface StudentClass {
  student_id: number;
  class_id: number;
}

// Attendance interface
interface Attendance {
  attendance_id: number;
  student_id: number;
  class_id: number;
  attendance_date: Date;
  is_present: boolean;
}

// Homework interface
interface Homework {
  homework_id: number;
  course_id: number;
  student_id: number;
  assignment_name: string;
  description: string;
  due_date: Date;
}

// QuranProgress interface
interface QuranProgress {
  progress_id: number;
  student_id: number;
  chapter_number: number;
  is_completed: boolean;
  completion_date: Date;
  grade: string;
}

export const createLogin = async (loginData) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    // Parse JSON first to use in both success and error handling
    const responseData = await response.json();

    if (!response.ok) {
      console.error("Create login error response:", responseData);
      throw new Error(responseData.message || "Failed to create login");
    }

    console.log("Response from the login attempt:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error creating login:", error);
    throw error; // Re-throw to handle it further up in your React components
  }
};
//students
export const getStudent = async () => {
  try {
    const response = await fetch(STUDENTS_URL);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to fetch students");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching students:", error.message);
    throw error;
  }
};

export async function getStudentById(id) {
  try {
    console.log("Fetching student with ID:", id);
    const response = await fetch(`${STUDENTS_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch student");
    }
    const studentData = await response.json();
    console.log("Student data:", studentData);
    return studentData;
  } catch (error) {
    console.error("Error fetching student:", error);
    throw error;
  }
}

export const getFilteredStudents = async (filters) => {
  const params = new URLSearchParams(filters);
  try {
    const response = await fetch(`${STUDENTS_URL}?${params.toString()}`);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.message || "Failed to fetch students with filters"
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching filtered students:", error.message);
    throw error;
  }
};

export const createStudent = async (studentData) => {
  try {
    const response = await fetch(STUDENTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Create student error response:", errorResponse);
      throw new Error(errorResponse.message || "Failed to create student");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating student:", error);
    throw error; // Throw the error to be caught by the calling function
  }
};

export const updateStudent = async (id: number, updatedStudent: Student) => {
  try {
    // Check if id is defined before sending the request
    if (!id) {
      throw new Error("No student ID provided");
    }

    const response = await fetch(`${STUDENTS_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    });

    if (!response.ok) {
      throw new Error("Failed to update student");
    }
  } catch (error) {
    console.error("Error updating student:", error.message);
    throw error;
  }
};

export const deleteStudent = async (id: number) => {
  try {
    // Check if id is defined before sending the request
    if (!id) {
      throw new Error("No student ID provided");
    }

    const response = await fetch(`${STUDENTS_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to delete student");
    }

    // If the response has no content (204 No Content), return null
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting student:", error.message);
    throw error;
  }
};

//courses
export const getCourses = async () => {
  try {
    const response = await fetch(COURSES_URL);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to fetch courses");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    throw error;
  }
};

// In your ApiService
export const getCourseById = async (id) => {
  try {
    const response = await fetch(`${COURSES_URL}/${id}`);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to fetch course");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const createCourse = async (courseData) => {
  try {
    const response = await fetch(COURSES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Error response from server:", errorResponse);
      throw new Error(errorResponse.message || "Failed to create course");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating course:", error.message);
    throw error;
  }
};

// In ApiService.tsx

/**
 * Update a course by its ID.
 * @param {string} id - The ID of the course to update.
 * @param {Object} courseData - New data for the course.
 * @returns {Promise<Object>} The updated course data.
 */
export const updateCourse = async (
  id: number,
  courseData: any
): Promise<any> => {
  try {
    if (!id) {
      throw new Error("Invalid course ID");
    }

    const response = await fetch(`${COURSES_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || "Failed to update course";
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await fetch(`${COURSES_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to delete course");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting course:", error.message);
    throw error;
  }
};

export const getClasses = async () => {
  try {
    const response = await fetch(CLASSES_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch classes");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching classes:", error.message);
    throw error;
  }
};

// In ApiService.js

export const getClassById = async (id) => {
  if (id === undefined) {
    console.error("Error: Missing 'classId' for getClassById");
    throw new Error("Missing 'classId'");
  }

  try {
    const response = await fetch(`${CLASSES_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch class");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching class:", error);
    throw error;
  }
};

//classes
export const createClass = async (classData) => {
  try {
    const response = await fetch(CLASSES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(classData),
    });
    const responseData = await response.json(); // Parse JSON response regardless of the response status
    if (!response.ok) {
      // Log and throw detailed error information from the server
      console.error("Failed to create class:", responseData);
      throw new Error(
        `Failed to create class: ${responseData.error || "Unknown error"}`
      );
    }
    return responseData;
  } catch (error) {
    console.error("Error creating class:", error.message);
    throw error; // Consider handling this thrown error if not already being handled
  }
};

export const updateClass = async (classId, classData) => {
  try {
    const response = await fetch(`${CLASSES_URL}/${classId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(classData),
    });
    if (!response.ok) {
      throw new Error("Failed to update class");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating class:", error.message);
    throw error;
  }
};

// DELETE Class
export const deleteClass = async (classId) => {
  try {
    const response = await fetch(`${CLASSES_URL}/${classId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete class");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting class:", error.message);
    throw error;
  }
};

//teachers
export const getTeachers = async () => {
  try {
    const response = await fetch(TEACHERS_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch teachers");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching teachers:", error.message);
    throw error;
  }
};

export const getTeacherById = async (id) => {
  try {
    const response = await fetch(`${TEACHERS_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch teacher");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching teacher:", error.message);
    throw error;
  }
};

export const createTeacher = async (teacherData) => {
  try {
    const response = await fetch(TEACHERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacherData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating teacher:", errorData);
      throw new Error(`Failed to create teacher: ${errorData.message}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating teacher:", error.message);
    throw error;
  }
};

export const updateTeacher = async (teacherId, teacherData) => {
  try {
    const response = await fetch(`${TEACHERS_URL}/${teacherId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacherData),
    });
    if (!response.ok) {
      throw new Error("Failed to update teacher");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating teacher:", error.message);
    throw error;
  }
};

export const deleteTeacher = async (teacherId) => {
  try {
    const response = await fetch(`${TEACHERS_URL}/${teacherId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete teacher");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting teacher:", error.message);
    throw error;
  }
};

// Exported functions for Attendance
export const getAttendance = async (): Promise<Attendance[]> => {
  try {
    const response = await fetch(ATTENDANCE_URL);
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Get attendance error response:", errorResponse);
      throw new Error(errorResponse.error || "Failed to fetch attendance data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching attendance data:", error);
    throw error; // Throw the error to be caught by the calling function
  }
};

export const getAttendanceById = async (id: number): Promise<Attendance> => {
  try {
    const response = await fetch(`${ATTENDANCE_URL}/${id}`);
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Get attendance by ID error response:", errorResponse);
      throw new Error(
        errorResponse.error || "Failed to fetch attendance by ID"
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching attendance by ID:", error);
    throw error; // Throw the error to be caught by the calling function
  }
};

export const createAttendance = async (attendanceData: Attendance) => {
  try {
    const response = await fetch(ATTENDANCE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendanceData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Create attendance error response:", errorResponse);
      throw new Error(errorResponse.error || "Failed to create attendance");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating attendance:", error);
    throw error; // Throw the error to be caught by the calling function
  }
};

export const updateAttendance = async (
  id: number,
  data: Attendance
): Promise<Attendance> => {
  try {
    const response = await fetch(`${ATTENDANCE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Update attendance error response:", errorResponse);
      throw new Error(errorResponse.error || "Failed to update attendance");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating attendance:", error);
    throw error; // Throw the error to be caught by the calling function
  }
};

export async function deleteAttendance(id: number): Promise<void> {
  await fetch(`${ATTENDANCE_URL}/${id}`, {
    method: "DELETE",
  });
}

export async function getHomework(): Promise<Homework[]> {
  try {
    const response = await fetch(HOMEWORK_URL);
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Get homework error response:", errorResponse);
      throw new Error(errorResponse.message || "Failed to fetch homework");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching homework:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
}

export async function getHomeworkById(id: number): Promise<Homework> {
  try {
    const response = await fetch(`${HOMEWORK_URL}/${id}`);
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Get homework by ID error response:", errorResponse);
      throw new Error(
        errorResponse.message || "Failed to fetch homework by ID"
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching homework with ID ${id}:`, error);
    throw error; // Rethrow the error to handle it in the calling component
  }
}

export async function createHomework(data: Homework): Promise<Homework> {
  try {
    const response = await fetch(HOMEWORK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Create homework error response:", errorResponse);
      throw new Error(errorResponse.message || "Failed to create homework");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating homework:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
}

export async function updateHomework(
  id: number,
  data: Homework
): Promise<Homework> {
  try {
    const response = await fetch(`${HOMEWORK_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Update homework error response:", errorResponse);
      throw new Error(errorResponse.message || "Failed to update homework");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating homework:", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
}

export async function deleteHomework(id: number): Promise<void> {
  try {
    const response = await fetch(`${HOMEWORK_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Delete homework error response:", errorResponse);
      throw new Error(errorResponse.message || "Failed to delete homework");
    }
  } catch (error) {
    console.error("Error deleting homework:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

// ApiService.js

export async function getQuranProgressById(id) {
  try {
    const response = await fetch(`${QURAN_PROGRESS_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Quran progress for student ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to be handled in the component
  }
}

export async function createQuranProgress(
  data: QuranProgress
): Promise<QuranProgress> {
  try {
    const response = await fetch(QURAN_PROGRESS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Create Quran progress error response:", errorResponse);
      throw new Error(
        errorResponse.message || "Failed to create Quran progress"
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating Quran progress:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
}

export async function updateQuranProgress(
  id: number,
  data: QuranProgress
): Promise<QuranProgress> {
  try {
    const response = await fetch(`${QURAN_PROGRESS_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Update Quran progress error response:", errorResponse);
      throw new Error(
        errorResponse.message || "Failed to update Quran progress"
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating Quran progress:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
}

export async function deleteQuranProgress(id: number): Promise<void> {
  try {
    const response = await fetch(`${QURAN_PROGRESS_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Delete Quran progress error response:", errorResponse);
      throw new Error(
        errorResponse.message || "Failed to delete Quran progress"
      );
    }
  } catch (error) {
    console.error("Error deleting Quran progress:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
}
