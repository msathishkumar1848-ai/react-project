import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DetailsTable from "./components/DetailsTable";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  // SAVE OR EDIT
  const saveData = (data) => {
    if (editIndex !== null) {
      const updated = [...details];
      updated[editIndex] = data;
      setDetails(updated);
      setEditIndex(null);
    } else {
      setDetails([...details, data]);
    }
    closeSidebar();
  };

  const editData = (index) => {
    setEditIndex(index);
    openSidebar();
  };

  const deleteData = (index) => {
    setDetails(details.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="main">
        <Navbar />
        <button className="details-btn" onClick={openSidebar}>Details</button>
      </div>

      <Sidebar
        open={sidebarOpen}
        close={closeSidebar}
        save={saveData}
        editData={editIndex !== null ? details[editIndex] : null}
      />

      <DetailsTable
        data={details}
        onEdit={editData}
        onDelete={deleteData}
      />

      <Footer />
    </>
  );
}

export default App;
