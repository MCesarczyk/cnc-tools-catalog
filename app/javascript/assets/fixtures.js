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

export const articleFormFields = [
  {
    name: "group",
    label: "Group",
    required: true,
    message: "Please choose a group!",
    placeholder: "Select article group ",
    optionFilterProp: "",
    type: ""
  },
  {
    name: "subgroup",
    label: "Subgroup",
    required: true,
    message: "Please choose a subgroup!",
    placeholder: "Select article subgroup",
    optionFilterProp: "",
    type: ""
  },
  {
    name: "article",
    label: "Article",
    required: true,
    message: "Please provide an article!",
    placeholder: "Provide an article name",
    optionFilterProp: "",
    type: "",
  },
  {
    name: "manufacturer",
    label: "Manufacturer",
    required: true,
    message: "Please choose a manufacturer!",
    placeholder: "Enter manufacturer",
    optionFilterProp: "",
    type: "",
  },
  {
    name: "description",
    label: "Description",
    required: true,
    message: "Please provide a description!",
    placeholder: "Enter description",
    optionFilterProp: "",
    type: "",
  },
  {
    name: "catalog",
    label: "Catalog",
    required: true,
    message: "Please choose a catalog!",
    placeholder: "Select supplier catalog",
    optionFilterProp: "",
    type: "",
  },
  {
    name: "quantity",
    label: "Quantity",
    required: true,
    message: "Please enter quantity!",
    placeholder: "Enter quantity",
    optionFilterProp: "",
    type: "",
  },
  {
    name: "annotations",
    label: "Annotations",
    required: false,
    message: "",
    placeholder: "Feel free to write something down",
    optionFilterProp: "",
    type: "",
  }
];