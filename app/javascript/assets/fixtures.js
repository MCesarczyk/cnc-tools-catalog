export const toolTypes = [
  { id: 1, name: "Shell mill" },
  { id: 2, name: "End mill" },
  { id: 3, name: "Ball mill" },
  { id: 4, name: "Spotdrill" },
  { id: 5, name: "Drill" },
  { id: 6, name: "Tap" }
];

export const machines = [
  { id: 1, name: "Juaristi" },
  { id: 2, name: "Kekeisen" }
];

export const toolListColumns = [
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
  }
];

export const toolFormFields = [
  {
    name: "tooltype",
    label: "Type",
    required: true,
    message: "Please input your tool type!",
    placeholde: "Select your tool type",
    optionFilterProp: "children",
    type: "select",
    dataScope: toolTypes
  },
  {
    name: "diameter",
    label: "Diameter",
    required: true,
    message: "Please input your tool diameter!",
    placeholder: "Input your tool diameter",
    type: "input"
  },
  {
    name: "length",
    label: "Length",
    required: true,
    message: "Please input the length of the tool!",
    placeholder: "Input your tool lentgh",
    type: "input"
  },
  {
    name: "corner_radius",
    label: "Corner radius",
    required: true,
    message: "Please input the radius of the corner!",
    placeholder: "Input your tool corner radius",
    type: "input"
  },
  {
    name: "flute_number",
    label: "Flutes number",
    required: true,
    message: "Please input the number of the flutes!",
    placeholder: "Input your tool flutes number",
    type: "input"
  },
  {
    name: "flute_length",
    label: "Flute length",
    required: true,
    message: "Please input the length of the flute!",
    placeholder: "Input your tool flute lentgh",
    type: "input"
  },
  {
    name: "machine",
    label: "Machine",
    required: true,
    message: "Please choose a machine!",
    placeholder: "Select your machine",
    optionFilterProp: "children",
    type: "select",
    dataScope: machines
  },
  {
    name: "number",
    label: "Number",
    required: true,
    message: "Please input the tool number!",
    placeholder: "Input your tool number",
    type: "number"
  }
];
