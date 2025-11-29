import { Form, Input, message, Modal, Spin, Upload } from "antd";
import React, { useState } from "react";

const onPreview = async (file) => {
  let src = file.url;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};

const AddReport = ({ openAddModal, setOpenAddModal }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleCancel = () => {
    form.resetFields();
    setFileList([]);
    setOpenAddModal(false);
  };

  const handleSubmit = async (values) => {
    console.log("Form Values:", values);
    console.log("Uploaded Image:", fileList);

    message.success("Report added successfully!");
    form.resetFields();
    setFileList([]);
    setOpenAddModal(false);
  };

  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <div className="mb-4 mt-4">
        <div className="font-bold text-center mb-6 text-lg">+ Add Report</div>

        <Form form={form} layout="vertical" onFinish={handleSubmit} className="px-2">

          {/* Name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input placeholder="Enter Name" style={{ height: "40px" }} />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description!" }]}
          >
            <Input.TextArea 
              placeholder="Enter Report Description"
              rows={4}
              style={{ resize: "none" }}
            />
          </Form.Item>

          {/* Image Upload */}
          <Form.Item
            label="Report Image"
            name="image"
            rules={[{ required: true, message: "Please upload report image!" }]}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              multiple={false}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </Form.Item>

          {/* Submit */}
          <Form.Item>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 mt-2 bg-[#004F44] text-white rounded-md flex justify-center items-center gap-2"
            >
              {loading ? <Spin size="small" /> : "Add Report"}
            </button>
          </Form.Item>

        </Form>
      </div>
    </Modal>
  );
};

export default AddReport;
