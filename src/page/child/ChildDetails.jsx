import React, { useState } from "react";
import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import AddReport from "./AddReport";
import { Navigate } from "../../Navigate";

const ChildDetails = () => {
  const location = useLocation();
  const data = location.state?.data;
  const [openAddModal, setOpenAddModal] = useState(false);
  if (!data) {
    return <h2 className="text-center text-xl mt-10">No data found</h2>;
  }

  // ⭐ Dummy Report Data
  const dummyReports = [
    {
      id: 1,
      name: "Behavior Report",
      description: "The child was very attentive today and completed all tasks.",
      image:
        "https://img.freepik.com/free-vector/report-illustration_24908-57699.jpg",
      date: "2025-02-05",
    },
    {
      id: 2,
      name: "Progress Report",
      description: "Great improvement shown in Mathematics this week.",
      image:
        "https://img.freepik.com/free-vector/data-report-illustration_24908-57710.jpg",
      date: "2025-02-03",
    },
  ];

  return (
    <div className="bg-white p-3 h-[87vh]">
      <div className="flex justify-between mb-4">
             <Navigate title={"Child Details"} />
           </div>

      <Tabs
        defaultActiveKey="1"
        className="b"
        items={[
          // ================= TAB 1: INFORMATION =================
          {
            key: "1",
            label: "Information",
            children: (
              <div className="flex flex-col items-center gap-6 mt-4">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
                  />
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                  <div className="border p-4 rounded  text-center">
                    <p className="text-gray-500">Name</p>
                    <h3 className="font-bold text-lg">{data.name}</h3>
                  </div>

                  <div className="border p-4 rounded  text-center">
                    <p className="text-gray-500">Parent Name</p>
                    <h3 className="font-bold text-lg">{data.parent}</h3>
                  </div>

                  <div className="border p-4 rounded  text-center">
                    <p className="text-gray-500">Email</p>
                    <h3 className="font-bold text-lg">{data.email}</h3>
                  </div>

                  <div className="border p-4 rounded  text-center">
                    <p className="text-gray-500">Location</p>
                    <h3 className="font-bold text-lg">{data.location}</h3>
                  </div>

                  <div className="border p-4 rounded  text-center">
                    <p className="text-gray-500">Status</p>
                    <h3 className="font-bold text-lg">
                      {data.blocked ? "Blocked" : "Active"}
                    </h3>
                  </div>

                   {/* Add Report Button */}
                
                </div>
                <button
                  type="primary"
                  className="mt-4 bg-[#004F44] px-4 py-2 text-white rounded"
                  onClick={() => setOpenAddModal(true)}
                >
                  Add Report
                </button>
              </div>
            ),
          },

          // ================= TAB 2: REPORTS =================
          {
            key: "2",
            label: "Reports",
            children: (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {dummyReports.length === 0 ? (
                  <p>No reports found.</p>
                ) : (
                  dummyReports.map((item) => (
                    <div
                      key={item.id}
                      className="border p-4 rounded-lg shadow-md bg-white"
                    >
                      <h3 className="font-bold text-lg mb-2">{item.name}</h3>

                      <p className="text-gray-600 mb-2">{item.description}</p>

                      <p className="text-sm text-gray-500 mb-2">
                        <strong>Date:</strong> {item.date}
                      </p>

                      <img
                        src={item.image}
                        alt="report"
                        className="w-full h-40 object-cover rounded border"
                      />
                    </div>
                  ))
                )}
              </div>
            ),
          },
        ]}
      />

       <AddReport openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />
    </div>
  );
};

export default ChildDetails;
