import { useState } from "react";
import {
  getStudents,
  saveSession,
} from "../utils/storage";

export default function Login({
  setPage,
  setStudent,
}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const students = getStudents();

    const foundStudent = students.find(
      (student) =>
        student.email === form.email &&
        student.password === form.password
    );

    if (!foundStudent) {
      alert("Invalid Email or Password");
      return;
    }

    saveSession(foundStudent);
    setStudent(foundStudent);

    alert("Login Successful");

    setPage("dashboard");
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Student Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have account?{" "}
          <span onClick={() => setPage("signup")}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}