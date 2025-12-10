import React, { useState, useEffect } from "react";

function Sidebar({ open, close, save, editData }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    designation: "",
    blood: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
    else
      setForm({ name: "", age: "", designation: "", blood: "" });
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.name || !form.age || !form.designation || !form.blood) {
      alert("Fill all fields!");
      return;
    }
    save(form);
  };

  return (
    <div className={`sidebar ${open ? "active" : ""}`}>
      <h2>Enter Details</h2>

      <label>Name</label>
      <input name="name" value={form.name} onChange={handleChange} />

      <label>Age</label>
      <input name="age" type="number" value={form.age} onChange={handleChange} />

      <label>Designation</label>
      <input name="designation" value={form.designation} onChange={handleChange} />

      <label>Blood Group</label>
      <input name="blood" value={form.blood} onChange={handleChange} />

      <button className="save-btn" onClick={handleSave}>Save</button>
      <button className="close-btn" onClick={close}>Close</button>
    </div>
  );
}

export default Sidebar;
