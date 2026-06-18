import { useState } from "react";
import {
  getStudents,
  saveStudents,
} from "../utils/storage";

export default function Signup({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    course: "",
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

    const studentExists = students.find(
      (student) =>
        student.email === form.email
    );

    if (studentExists) {
      alert("Student already registered");
      return;
    }

    const newStudent = {
      id: Date.now(),
      ...form,
    };

    saveStudents([
      ...students,
      newStudent,
    ]);

    alert("Signup Successful");

    setForm({
      name: "",
      roll: "",
      course: "",
      email: "",
      password: "",
    });

    setPage("login");
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Student Signup</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="roll"
            placeholder="Enter Roll Number"
            value={form.roll}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={form.course}
            onChange={handleChange}
            required
          />

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
            Signup
          </button>
        </form>

        <p>
          Already have account?{" "}
          <span onClick={() => setPage("login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}