export const columns = [
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
        render: (_text, record) => (
            <Popconfirm title="Are you sure to delete this tool?" onConfirm={() => deleteTool(record.id)} okText="Yes" cancelText="No">
                <a href="#" type="danger">
                    Delete{" "}
                </a>
            </Popconfirm>
        ),
    },
];