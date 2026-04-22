function Police() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Police Dashboard</h1>

      <button onClick={() => {
        localStorage.clear();
        window.location.href = "/login";
      }}>
        Logout
      </button>
    </div>
  );
}

export default Police;