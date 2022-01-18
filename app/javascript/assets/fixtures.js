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