import React, { useEffect, useState } from "react";
import { message, Popconfirm, Table } from "antd";
import AddToolModal from "./AddToolModal";
import EditToolModal from "./EditToolModal";

const Tools = () => {
  const columns = [
    {
      title: "Type",
      dataIndex: "tooltype",
      key: "tooltype",
    },
    {
      title: "Diameter",
      dataIndex: "diameter",
      key: "diameter",
    },
    {
      title: "Length",
      dataIndex: "length",
      key: "length",
    },
    {
      title: "Corner radius",
      dataIndex: "corner_radius",
      key: "corner_radius",
    },
    {
      title: "Flute number",
      dataIndex: "flute_number",
      key: "flute_number",
    },
    {
      title: "Flute length",
      dataIndex: "flute_length",
      key: "flute_length",
    },
    {
      title: "Machine",
      dataIndex: "machine",
      key: "machine",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <>
          <Popconfirm
            title="Are you sure to delete this tool?"
            onConfirm={() => deleteTool(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" className="delete-button">
              Delete{" "}
            </a>
          </Popconfirm>
          <EditToolModal reloadTools={reloadTools} id={record.key} />
        </>
      ),
    },
  ];

  const [tools, setTools] = useState([]);

  const putData = (data) => {
    let array = [];

    data.forEach(tool => {
      const strippedTool = {
        key: tool.id,
        id: tool.id,
        tooltype: tool.tooltype,
        diameter: tool.diameter,
        length: tool.length,
        corner_radius: tool.corner_radius,
        flute_number: tool.flute_number,
        flute_length: tool.flute_length,
        machine: tool.machine,
        number: tool.number,
      };

      array = [
        ...array,
        strippedTool
      ];

      setTools(array);
    })
  };

  const loadTools = () => {
    const url = "api/v1/tools/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        putData(data);
      })
      .catch((err) => console.log("Error: " + err));
  };

  const reloadTools = () => {
    setTools([]);
    loadTools();
  };

  const deleteTool = (id) => {
    const url = `api/v1/tools/${id}`;

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          reloadTools();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  useEffect(() => {
    loadTools();
  }, []);

  return (
    <>
      <Table
        className="table-stripped-rows"
        dataSource={tools}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
      <AddToolModal reloadTools={reloadTools} />
    </>
  );
};

export default Tools;