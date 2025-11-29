import { Input, Table } from "antd";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Navigate } from "../../Navigate";

const TutionManagement = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [tutors] = useState([
    {
      _id: "1",
      name: "Mr. Rahman",
      subject: "Mathematics",
      location: "Dhaka, Bangladesh",
      service: "Home Tutoring",
      time: "5:00 PM - 7:00 PM",
      day: "Saturday, Monday",
      imageUrl: "https://avatar.iran.liara.run/public/1",
      children: [
        { name: "Arif", class: "5", subject: "Math", parentName: "Mr. Akram", parentEmail: "akram@gmail.com", parentContact: "01711111111" },
        { name: "Sara", class: "6", subject: "Science", parentName: "Mrs. Naila", parentEmail: "naila@gmail.com", parentContact: "01822222222" }
      ],
    },
    {
      _id: "2",
      name: "Mrs. Amina",
      subject: "Science",
      location: "Chittagong, Bangladesh",
      service: "Online Coaching",
      time: "3:00 PM - 4:30 PM",
      day: "Sunday, Wednesday",
      children: [
        { name: "Hasib", class: "7", subject: "Science", parentName: "Mr. Rafiq", parentEmail: "rafiq@gmail.com", parentContact: "01744444444" }
      ],
    },
  ]);

  // Filter tutors by search
  const filteredTutors = tutors.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "SL No.",
      key: "sl",
      render: (_, __, index) => index + 1,
      align: "center",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      align: "center",
    },
    {
      title: "Service",
      dataIndex: "service",
      align: "center",
    },
    {
      title: "Time",
      dataIndex: "time",
      align: "center",
    },
    {
      title: "Day",
      dataIndex: "day",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <button
          onClick={() => navigate(`/dashboard/tutionManagement/tution-details/${record._id}`, { state: record })}
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <EyeOutlined />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white p-3 h-[87vh]">
      <div className="flex justify-between mb-4">
        <Navigate title={"Tution Management"} />
        <Input
          placeholder="Search by name..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 300, height: 40 }}
        />
      </div>

      <Table
        dataSource={filteredTutors}
        columns={columns}
        rowKey="_id"
        pagination={false} 
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default TutionManagement;
