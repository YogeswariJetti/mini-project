export default function Dashboard({
  student,
  logout,
}) {
  return (
    <div className="container">
      <div className="box">
        <h1>Student Dashboard</h1>

        <h2>
          Welcome {student?.name}
        </h2>

        <p>
          <strong>Roll No:</strong>{" "}
          {student?.roll}
        </p>

        <p>
          <strong>Course:</strong>{" "}
          {student?.course}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {student?.email}
        </p>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}