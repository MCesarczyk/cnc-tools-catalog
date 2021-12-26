import { Table } from "antd";
import React, { useEffect, useState } from "react";

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
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "",
      key: "action",
      // render: (_text, record) => (
      //   <Popconfirm title="Are you sure to delete this tool?" onConfirm={() => deleteTool(record.id)} okText="Yes" cancelText="No">
      //     <a href="#" type="danger">
      //       Delete{" "}
      //     </a>
      //   </Popconfirm>
      // ),
    },
  ];

  const [tools, setTools] = useState([]);

  const putData = (data) => {
    let array = [];

    data.forEach(tool => {
      const strippedTool = {
        key: Math.random(),
        tooltype: tool.tooltype,
        diameter: tool.diameter,
        length: tool.length,
        quantity: tool.quantity
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

  useEffect(() => {
    loadTools();
  }, []);

  useEffect(() => {
    console.log(tools);
  }, [tools]);

  return (
    <Table
      className="table-stripped-rows"
      dataSource={tools}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default Tools;