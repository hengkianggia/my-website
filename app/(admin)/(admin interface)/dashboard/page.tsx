import React from "react";
import DashboardColumn from "@/components/dashboard/DashboardColumn";

const Admin = () => {
  return (
    <div className="w-full min-h-screen p-10 grid grid-cols-3 gap-3">
      <DashboardColumn title="Makmukiper dengan gaya">
        <h1>makmu</h1>
      </DashboardColumn>
      <DashboardColumn title="Makmukiper dengan gaya">
        <h1>makmu</h1>
      </DashboardColumn>
      <DashboardColumn title="Makmukiper dengan gaya">
        <h1>makmu</h1>
      </DashboardColumn>
    </div>
  );
};

export default Admin;
