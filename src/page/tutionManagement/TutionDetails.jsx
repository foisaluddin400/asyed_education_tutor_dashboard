import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Table, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";

const TutionDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const childColumns = [
    { _id: "1", title: "Child Name", dataIndex: "name", key: "name" },
    { _id: "2", title: "Class", dataIndex: "class", key: "class" },
    { _id: "3", title: "Subject", dataIndex: "subject", key: "subject" },
    {
      _id: "4",
      title: "Parent Name",
      dataIndex: "parentName",
      key: "parentName",
    },
    {
      _id: "5",
      title: "Parent Email",
      dataIndex: "parentEmail",
      key: "parentEmail",
    },
    {
      _id: "1",
      title: "Contact",
      dataIndex: "parentContact",
      key: "parentContact",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Link to={`/dashboard/childManagement/child-details/${record._id}`}>
          {" "}
          <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <EyeOutlined />
          </button>
        </Link>
      ),
    },
  ];

  if (!state) return <div>No Data Found</div>;

  return (
    <div className="bg-white p-3 h-[87vh]">
      <div className="flex justify-between mb-4">
        <Navigate title={"Tution Details"} />
      </div>

      <div className="bg-gray-100 p-5 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <img
            src={state.imageUrl}
            alt=""
            className="w-28 h-28 rounded-full border shadow"
          />
          <div>
            <h2 className="text-2xl font-bold">{state.name}</h2>
            <p className="text-gray-600">{state.subject}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <p>
            <strong>Location:</strong> {state.location}
          </p>
          <p>
            <strong>Service:</strong> {state.service}
          </p>
          <p>
            <strong>Time:</strong> {state.time}
          </p>
          <p>
            <strong>Day:</strong> {state.day}
          </p>
        </div>
      </div>

      {/* CHILD TABLE */}
      <h3 className="text-xl font-semibold mt-6 mb-3">Children Information</h3>

      <Table
        dataSource={state.children}
        columns={childColumns}
        bordered
        rowKey="name"
      />
    </div>
  );
};

export default TutionDetails;
