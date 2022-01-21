import React, { useEffect, useState } from "react";
import { buildToolTable } from "../assets/utils/buildToolTable";
import { toolFormFields } from "../assets/fixtures";
import ToolModal from "./ToolModal";
import { message, Popconfirm, Space, Table } from "antd";

const Tools = () => {
  const toolListColumns = toolFormFields.map(field => ({
    key: field.name,
    title: field.label,
    dataIndex: field.name,
    filters: field.filters || "",
    onFilter: field.onFilter || "",
    sorter: field.sorter || ""
  }));

  const columns = [
    ...toolListColumns,
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Space>
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
          <ToolModal
            id={record.key}
            type="edit"
            reloadTools={reloadTools}
          />
        </Space>
      ),
    },
  ];

  const [tools, setTools] = useState([]);

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
        const toolTable = buildToolTable(data);
        setTools(toolTable);
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
        pagination={{ pageSize: 10 }}
        size="small"
      />
      <ToolModal
        type="add"
        reloadTools={reloadTools}
      />
    </>
  );
};

export default Tools;