const STUDENTS_KEY = "students";
const SESSION_KEY = "student_session";

export function getStudents() {
  return JSON.parse(localStorage.getItem(STUDENTS_KEY)) || [];
}

export function saveStudents(students) {
  localStorage.setItem(
    STUDENTS_KEY,
    JSON.stringify(students)
  );
}

export function saveSession(student) {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify(student)
  );
}

export function getSession() {
  return JSON.parse(
    localStorage.getItem(SESSION_KEY)
  );
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}