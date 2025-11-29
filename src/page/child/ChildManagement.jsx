import { Input, message, Pagination, Table } from "antd";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import AddReport from "./AddReport";
import { useNavigate } from "react-router-dom";
import { Navigate } from "../../Navigate";

const ChildManagement = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [tutors, setTutors] = useState([
    {
      _id: "1",
      name: "Mr. Rahman",
      parent: "Abdul Rahim",
      email: "rahman@example.com",
      subject: "Mathematics",
      location: "Dhaka, Bangladesh",
      imageUrl: "https://avatar.iran.liara.run/public/1",
      blocked: false,
      reports: [],
    },
    {
      _id: "2",
      name: "Mrs. Amina",
      parent: "Taslima Begum",
      email: "amina@example.com",
      subject: "Science",
      location: "Chittagong, Bangladesh",
      imageUrl: "https://avatar.iran.liara.run/public/2",
      blocked: false,
      reports: [],
    },
    {
      _id: "3",
      name: "Mr. Karim",
      parent: "Nazmul Huda",
      email: "karim@example.com",
      subject: "English",
      location: "Khulna, Bangladesh",
      imageUrl: "https://avatar.iran.liara.run/public/3",
      blocked: true,
      reports: [],
    },
  ]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = filteredTutors.length;
  const paginatedData = filteredTutors.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const columns = [
    {
      title: "SL No.",
      key: "sl",
      render: (_, __, index) => (currentPage - 1) * pageSize + (index + 1),
      align: "center",
    },
    {
      title: "Student",
      key: "tutor",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.imageUrl}
            alt={record.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>{record.name}</span>
        </div>
      ),
      align: "center",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      align: "center",
    },

    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center items-center gap-2">
          {/* View Page */}
          <button
            onClick={() =>
              navigate(
                `/dashboard/childManagement/child-details/${record._id}`,
                {
                  state: { data: record }, // passing whole data
                }
              )
            }
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <EyeOutlined />
          </button>

          {/* Report Button */}
          <button
            onClick={() => {
              setSelectedTutor(record);
              setOpenAddModal(true);
            }}
            className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Report
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-3 h-[87vh]">
      <div className="flex justify-between mb-4">
        <Navigate title={"Child Management"} />
        <Input
          placeholder="Search by name..."
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          style={{ width: 300, height: 40 }}
        />
      </div>

      <Table
        dataSource={paginatedData}
        columns={columns}
        rowKey="_id"
        pagination={false}
        scroll={{ x: "max-content" }}
      />

      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>

      <AddReport
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        selectedTutor={selectedTutor}
      />
    </div>
  );
};

export default ChildManagement;
